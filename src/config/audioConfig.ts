export interface AudioPhaseConfig {
  id: string;
  name: string;
  filePath: string;
  description: string;
}

export interface MusicTrack {
  id: string;
  name: string;
  filePath: string;
  description: string;
  phase: 'guidedBreathing' | 'breathOutHold' | 'recoveryHold';
}

export interface AudioConfig {
  enabledByDefault: boolean;
  volume: number;
  breathSoundEnabledByDefault: boolean;
  breathSoundVolume: number;
  phases: {
    guidedBreathing: AudioPhaseConfig;
    breathOutHold: AudioPhaseConfig;
    recoveryHold: AudioPhaseConfig;
    chimeCue: AudioPhaseConfig;
    breathSoundInhale: AudioPhaseConfig;
    breathSoundExhale: AudioPhaseConfig;
  };
  musicTracks: {
    guidedBreathing: MusicTrack[];
    breathOutHold: MusicTrack[];
    recoveryHold: MusicTrack[];
  };
}

export const musicTracks = {
  guidedBreathing: [
    {
      id: 'guided-breathing-default',
      name: 'Serene Flow (Default)',
      filePath: '/audio/guided-breathing.mp3',
      description: 'Gentle, rhythmic ambient soundscape for focused breathing',
      phase: 'guidedBreathing' as const,
    },
    {
      id: 'guided-breathing-calm',
      name: 'Calm Ocean Waves',
      filePath: '/audio/guided-breathing-calm.mp3',
      description: 'Gentle ocean waves for relaxed breathing',
      phase: 'guidedBreathing' as const,
    },
    {
      id: 'guided-breathing-forest',
      name: 'Forest Ambience',
      filePath: '/audio/guided-breathing-forest.mp3',
      description: 'Peaceful forest sounds for natural grounding',
      phase: 'guidedBreathing' as const,
    },
    {
      id: 'guided-breathing-minimal',
      name: 'Minimal Bell Tones',
      filePath: '/audio/guided-breathing-minimal.mp3',
      description: 'Subtle piano and bell tones for focused breathing',
      phase: 'guidedBreathing' as const,
    },
    {
      id: 'guided-breathing-ambient',
      name: 'Ambient Drone',
      filePath: '/audio/guided-breathing-ambient.mp3',
      description: 'Deep ambient drone for tranquil meditative states',
      phase: 'guidedBreathing' as const,
    },
  ],
  breathOutHold: [
    {
      id: 'breath-out-hold-default',
      name: 'Deep Stillness',
      filePath: '/audio/breath-out-hold.mp3',
      description: 'Low-frequency soothing soundscape for peaceful relaxation',
      phase: 'breathOutHold' as const,
    },
    {
      id: 'breath-out-hold-silence',
      name: 'Pure Silence',
      filePath: '/audio/breath-out-hold-silence.mp3',
      description: 'Complete silence for deep internal focus',
      phase: 'breathOutHold' as const,
    },
    {
      id: 'breath-out-hold-drone',
      name: 'Cosmic Resonance',
      filePath: '/audio/breath-out-hold-drone.mp3',
      description: 'Continuous warm drone frequencies for meditative depth',
      phase: 'breathOutHold' as const,
    },
    {
      id: 'breath-out-hold-bowl',
      name: 'Singing Bowl Resonance',
      filePath: '/audio/breath-out-hold-bowl.mp3',
      description: 'Harmonic crystal bowl tones for mindful clarity',
      phase: 'breathOutHold' as const,
    },
  ],
  recoveryHold: [
    {
      id: 'recovery-hold-default',
      name: 'Warm Horizon',
      filePath: '/audio/recovery-hold.mp3',
      description: 'Soft, comforting acoustic warmth to ease tension',
      phase: 'recoveryHold' as const,
    },
    {
      id: 'recovery-hold-chime',
      name: 'Crystal Chimes',
      filePath: '/audio/recovery-hold-chime.mp3',
      description: 'Light harmonic wind chimes for gentle presence',
      phase: 'recoveryHold' as const,
    },
    {
      id: 'recovery-hold-silence',
      name: 'Quiet Space',
      filePath: '/audio/recovery-hold-silence.mp3',
      description: 'Silent backdrop for natural rhythmic breathing',
      phase: 'recoveryHold' as const,
    },
    {
      id: 'recovery-hold-ambient',
      name: 'Soft Ambient Pad',
      filePath: '/audio/recovery-hold-ambient.mp3',
      description: 'Warm, enveloping ambient pad for calming comfort',
      phase: 'recoveryHold' as const,
    },
  ],
};

export const defaultAudioConfig: AudioConfig = {
  enabledByDefault: true,
  volume: 0.8,
  breathSoundEnabledByDefault: true,
  breathSoundVolume: 0.7,
  phases: {
    guidedBreathing: {
      id: 'guided-breathing',
      name: 'Serene Flow',
      filePath: '/audio/guided-breathing.mp3',
      description: 'Gentle, rhythmic ambient soundscape for focused breathing',
    },
    breathOutHold: {
      id: 'breath-out-hold',
      name: 'Deep Stillness',
      filePath: '/audio/breath-out-hold.mp3',
      description: 'Low-frequency soothing soundscape for peaceful relaxation',
    },
    recoveryHold: {
      id: 'recovery-hold',
      name: 'Warm Horizon',
      filePath: '/audio/recovery-hold.mp3',
      description: 'Soft, comforting acoustic warmth to ease tension',
    },
    chimeCue: {
      id: 'chime-cue',
      name: 'Phase Transition Chime',
      filePath: '/audio/chime.mp3',
      description: 'Soft chime sound for phase changes',
    },
    breathSoundInhale: {
      id: 'breath-sound-inhale',
      name: 'Breath Sound Inhale',
      filePath: '/audio/breath-inhale.mp3',
      description: 'Inhale breath sound cue (placeholder - audio file to be added)',
    },
    breathSoundExhale: {
      id: 'breath-sound-exhale',
      name: 'Breath Sound Exhale',
      filePath: '/audio/breath-exhale.mp3',
      description: 'Exhale breath sound cue (placeholder - audio file to be added)',
    },
  },
  musicTracks,
};
