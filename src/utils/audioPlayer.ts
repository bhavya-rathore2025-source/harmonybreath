import { defaultAudioConfig, type AudioConfig } from '../config/audioConfig';

class ResilientAudioPlayer {
  private config: AudioConfig;
  private currentAudio: HTMLAudioElement | null = null;
  private isMuted: boolean = false;
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

  public setVolume(vol: number) {
    this.config.volume = Math.max(0, Math.min(1, vol));
    if (this.currentAudio) {
      this.currentAudio.volume = this.config.volume;
    }
  }

  /**
   * Gracefully check if audio file exists locally before attempting playback
   */
  public async checkAudioExists(url: string): Promise<boolean> {
    if (this.availabilityCache.has(url)) {
      return this.availabilityCache.get(url)!;
    }

    try {
      const response = await fetch(url, { method: 'HEAD' });
      const exists = response.ok;
      this.availabilityCache.set(url, exists);
      return exists;
    } catch {
      this.availabilityCache.set(url, false);
      return false;
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
