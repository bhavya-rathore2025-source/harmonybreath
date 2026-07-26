import { defaultAudioConfig, type AudioConfig } from '../config/audioConfig';

class ResilientAudioPlayer {
  private config: AudioConfig;
  private currentAudio: HTMLAudioElement | null = null;
  private currentBreathSound: HTMLAudioElement | null = null;
  private isMuted: boolean = false;
  private isBreathSoundMuted: boolean = false;
  private availabilityCache: Map<string, boolean> = new Map();

  constructor(customConfig?: Partial<AudioConfig>) {
    this.config = { ...defaultAudioConfig, ...customConfig };
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.currentAudio) {
      this.currentAudio.muted = muted;
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
   * Play breath sound (inhale/exhale) - independent of main audio
   */
  public async playBreathSound(isInhale: boolean): Promise<void> {
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
      await this.currentBreathSound.play();
    } catch {
      // Ignore autoplay errors for breath sounds
    }
  }

  /**
   * Play audio track for phase safely
   */
  public async playPhaseTrack(filePath: string, loop: boolean = false): Promise<void> {
    this.stop();

    if (this.isMuted || !filePath) return;

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
}

export const audioPlayer = new ResilientAudioPlayer();
