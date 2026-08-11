import { defaultAudioConfig, type AudioConfig, type MusicTrack, musicTracks } from '../config/audioConfig';

const STORAGE_KEY = 'hb_music_selections';

function getSelectedMusic(): Record<string, string> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function getDefaultTrackForPhase(phase: string): string {
  const phaseConfig = defaultAudioConfig.phases[phase as keyof typeof defaultAudioConfig.phases];
  return phaseConfig?.filePath || '';
}

function getFilePathForTrackId(phase: string, trackId: string): string {
  const tracks = musicTracks[phase as keyof typeof musicTracks] || [];
  const track = tracks.find(t => t.id === trackId);
  return track?.filePath || getDefaultTrackForPhase(phase);
}

function getSelectedTrackForPhase(phase: string): string {
  const selected = getSelectedMusic();
  const trackId = selected[phase];
  if (trackId) {
    return getFilePathForTrackId(phase, trackId);
  }
  return getDefaultTrackForPhase(phase);
}

class ResilientAudioPlayer {
  private config: AudioConfig;
  private currentAudio: HTMLAudioElement | null = null;
  private currentPreviewAudio: HTMLAudioElement | null = null;
  private currentBreathSound: HTMLAudioElement | null = null;
  private isMuted: boolean = false;
  private isBreathSoundMuted: boolean = false;
  private availabilityCache: Map<string, boolean> = new Map();

  private loopSongKey: string = 'hb_loop_song';
  private currentPlaylistInfo: {
    playlist: MusicTrack[];
    storageKey: string;
    eventName: string;
  } | null = null;

  constructor(customConfig?: Partial<AudioConfig>) {
    this.config = { ...defaultAudioConfig, ...customConfig };
  }

  public isLoopSong(): boolean {
    try {
      if (typeof localStorage === 'undefined') return true;
      const stored = localStorage.getItem(this.loopSongKey);
      return stored === null ? true : stored === 'true';
    } catch {
      return true;
    }
  }

  public setLoopSong(loop: boolean): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.loopSongKey, loop ? 'true' : 'false');
      }
    } catch {
      // Ignore storage errors
    }

    if (this.currentAudio) {
      this.currentAudio.loop = loop;
      if (!loop) {
        this.currentAudio.onended = () => this.handleTrackEnded();
      } else {
        this.currentAudio.onended = null;
      }
    }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('hb_loop_song_changed', {
        detail: { loopSong: loop }
      }));
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.currentAudio) {
      this.currentAudio.muted = muted;
    }
    if (this.currentPreviewAudio) {
      this.currentPreviewAudio.muted = muted;
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public setBreathSoundMuted(muted: boolean) {
    this.isBreathSoundMuted = muted;
    if (this.currentBreathSound) {
      this.currentBreathSound.muted = muted;
    }
  }

  public getBreathSoundMuted(): boolean {
    return this.isBreathSoundMuted;
  }

  public setVolume(vol: number) {
    this.config.volume = Math.max(0, Math.min(1, vol));
    if (this.currentAudio) {
      this.currentAudio.volume = this.config.volume;
    }
  }

  public setBreathSoundVolume(vol: number) {
    this.config.breathSoundVolume = Math.max(0, Math.min(1, vol));
    if (this.currentBreathSound) {
      this.currentBreathSound.volume = this.config.breathSoundVolume;
    }
  }

  /**
   * Get the selected music track for a phase
   */
  public getSelectedTrack(phase: 'guidedBreathing' | 'breathOutHold' | 'recoveryHold'): string {
    return getSelectedTrackForPhase(phase);
  }

  /**
   * Get all available music tracks for a phase
   */
  public getAvailableTracks(phase: 'guidedBreathing' | 'breathOutHold' | 'recoveryHold'): MusicTrack[] {
    return this.config.musicTracks[phase] || [];
  }



  /**
   * Play breath sound (inhale/exhale) stretched to match phase duration
   */
  public async playBreathSound(isInhale: boolean, phaseDuration?: number): Promise<void> {
    if (this.isBreathSoundMuted) return;

    const filePath = isInhale
      ? this.config.phases.breathSoundInhale.filePath
      : this.config.phases.breathSoundExhale.filePath;

    if (!filePath) return;

    const exists = await this.checkAudioExists(filePath);
    if (!exists) {
      return;
    }

    try {
      this.currentBreathSound = new Audio(filePath);
      this.currentBreathSound.volume = this.config.breathSoundVolume;
      this.currentBreathSound.muted = this.isBreathSoundMuted;
      
      if (phaseDuration && phaseDuration > 0) {
        const setupPlaybackRate = () => {
          if (this.currentBreathSound && !isNaN(this.currentBreathSound.duration) && this.currentBreathSound.duration > 0) {
            const naturalDuration = this.currentBreathSound.duration;
            const rate = naturalDuration / phaseDuration;
            this.currentBreathSound.playbackRate = Math.max(0.25, Math.min(4, rate));
          } else {
            this.currentBreathSound?.addEventListener('loadedmetadata', setupPlaybackRate, { once: true });
          }
        };
        setupPlaybackRate();
      }
      
      await this.currentBreathSound.play();
    } catch {
      // Ignore autoplay errors for breath sounds
    }
  }

  /**
   * Stop the currently playing breath sound
   */
  public stopBreathSound(): void {
    if (this.currentBreathSound) {
      try {
        this.currentBreathSound.pause();
        this.currentBreathSound.currentTime = 0;
      } catch {
        // Ignore errors
      }
      this.currentBreathSound = null;
    }
  }

  /**
   * Play audio track for phase safely using selected music
   */
  public async playPhaseTrack(phase: 'guidedBreathing' | 'breathOutHold' | 'recoveryHold', loop: boolean = false): Promise<void> {
    this.stopPreview();
    this.stop();

    if (this.isMuted) return;

    const filePath = this.getSelectedTrack(phase);

    if (!filePath) {
      console.warn(`[HarmonyBreath Audio] No audio file configured for phase "${phase}".`);
      return;
    }

    const exists = await this.checkAudioExists(filePath);
    if (!exists) {
      console.warn(`[HarmonyBreath Audio] Local audio file not found at "${filePath}". Continuing timer in silent mode.`);
      return;
    }

    try {
      const audio = new Audio(filePath);
      audio.volume = this.config.volume;
      audio.muted = this.isMuted;
      audio.loop = loop;
      this.currentAudio = audio;

      audio.onerror = () => {
        console.warn(`[HarmonyBreath Audio] Failed to play audio from "${filePath}". Continuing silently.`);
        this.currentAudio = null;
      };

      await audio.play();
    } catch (err) {
      console.warn(`[HarmonyBreath Audio] Autoplay or playback prevented for "${filePath}":`, err);
    }
  }

  /**
   * Play quick chime cue for transitions
   */
  public async playChime(): Promise<void> {
    const chimePath = this.config.phases.chimeCue.filePath;
    if (this.isMuted || !chimePath) return;

    const exists = await this.checkAudioExists(chimePath);
    if (!exists) {
      return;
    }

    try {
      const chime = new Audio(chimePath);
      chime.volume = this.config.volume;
      chime.muted = this.isMuted;
      await chime.play();
    } catch {
      // Ignore autoplay errors for chime
    }
  }

  /**
   * Check if an audio file exists at the given path (with caching)
   */
  private async checkAudioExists(filePath: string): Promise<boolean> {
    // Return cached result if available
    if (this.availabilityCache.has(filePath)) {
      return this.availabilityCache.get(filePath)!;
    }

    try {
      const response = await fetch(filePath, { method: 'HEAD' });
      const exists = response.ok;
      this.availabilityCache.set(filePath, exists);
      return exists;
    } catch {
      this.availabilityCache.set(filePath, false);
      return false;
    }
  }

  /**
   * Stop any currently playing track
   */
  public stop(): void {
    this.stopPreview();
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch {
        // Ignore pause errors
      }
      this.currentAudio = null;
    }
  }

  /**
   * Pause the currently playing track (without resetting position)
   */
  public pause(): void {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
      } catch {
        // Ignore pause errors
      }
    }
  }

  /**
   * Resume the currently paused track
   */
  public resume(): void {
    if (this.currentAudio && this.currentAudio.paused) {
      try {
        this.currentAudio.play().catch(() => {
          // Ignore autoplay errors
        });
      } catch {
        // Ignore errors
      }
    }
  }

  /**
   * Play a music track by file path with optional playlist auto-advance when loop song is off
   */
  public async playMusicTrack(
    filePath: string,
    loopOverride?: boolean,
    playlist?: MusicTrack[],
    storageKey?: string,
    eventName?: string
  ): Promise<void> {
    this.stop();
    this.stopPreview();

    if (this.isMuted || !filePath) return;

    const exists = await this.checkAudioExists(filePath);
    if (!exists) {
      console.warn(`[HarmonyBreath Audio] Audio file not found at "${filePath}".`);
      return;
    }

    if (playlist && storageKey && eventName) {
      this.currentPlaylistInfo = { playlist, storageKey, eventName };
    }

    const shouldLoop = loopOverride !== undefined ? loopOverride : this.isLoopSong();

    try {
      const audio = new Audio(filePath);
      audio.volume = this.config.volume;
      audio.muted = this.isMuted;
      audio.loop = shouldLoop;

      if (!shouldLoop) {
        audio.onended = () => this.handleTrackEnded();
      } else {
        audio.onended = null;
      }

      this.currentAudio = audio;

      audio.onerror = () => {
        console.warn(`[HarmonyBreath Audio] Failed to play audio from "${filePath}".`);
        this.currentAudio = null;
      };

      await audio.play();
    } catch (err) {
      console.warn(`[HarmonyBreath Audio] Autoplay prevented for "${filePath}":`, err);
    }
  }

  private handleTrackEnded(): void {
    if (this.isLoopSong()) return;
    if (!this.currentPlaylistInfo) return;

    const { playlist, storageKey, eventName } = this.currentPlaylistInfo;
    if (!playlist || playlist.length === 0) return;

    let currentTrackId: string | null = null;
    try {
      if (typeof localStorage !== 'undefined') {
        currentTrackId = localStorage.getItem(storageKey);
      }
    } catch {
      // ignore storage error
    }

    const currentIndex = playlist.findIndex(t => t.id === currentTrackId);
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % playlist.length : 0;
    const nextTrack = playlist[nextIndex];

    if (!nextTrack) return;

    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(storageKey, nextTrack.id);
      }
    } catch {
      // ignore storage error
    }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(eventName, {
        detail: { trackId: nextTrack.id, filePath: nextTrack.filePath }
      }));
    }

    this.playMusicTrack(nextTrack.filePath, false, playlist, storageKey, eventName);
  }

  /**
   * Stop any currently playing preview track
   */
  public stopPreview(): void {
    if (this.currentPreviewAudio) {
      try {
        this.currentPreviewAudio.pause();
        this.currentPreviewAudio.currentTime = 0;
      } catch {
        // Ignore pause errors
      }
      this.currentPreviewAudio = null;
    }
  }

  /**
   * Preview a specific track by trackId for a phase (for music selection modal)
   */
  public async previewTrack(phase: 'guidedBreathing' | 'breathOutHold' | 'recoveryHold', trackId: string): Promise<void> {
    const filePath = getFilePathForTrackId(phase, trackId);
    
    if (!filePath) {
      console.warn(`[HarmonyBreath Audio] No audio file for track "${trackId}" in phase "${phase}".`);
      return;
    }

    const exists = await this.checkAudioExists(filePath);
    if (!exists) {
      console.warn(`[HarmonyBreath Audio] Preview audio not found: "${filePath}".`);
      return;
    }

    // Stop any currently playing preview
    this.stopPreview();

    if (this.isMuted) return;

    try {
      this.currentPreviewAudio = new Audio(filePath);
      this.currentPreviewAudio.volume = this.config.volume;
      this.currentPreviewAudio.muted = this.isMuted;
      this.currentPreviewAudio.loop = false;
      await this.currentPreviewAudio.play();
    } catch {
      // Ignore autoplay errors for preview
    }
  }
}

export const audioPlayer = new ResilientAudioPlayer();
