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
      name: 'Guided Breathing (Default)',
      filePath: '/audio/guided-breathing.mp3',
      description: 'Default guided 30-breath rhythmic audio',
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
      description: 'Peaceful forest sounds for grounding',
      phase: 'guidedBreathing' as const,
    },
    {
      id: 'guided-breathing-minimal',
      name: 'Minimal Bell Tones',
      filePath: '/audio/guided-breathing-minimal.mp3',
      description: 'Subtle bell tones for focused breathing',
      phase: 'guidedBreathing' as const,
    },
    {
      id: 'guided-breathing-ambient',
      name: 'Ambient Drone',
      filePath: '/audio/guided-breathing-ambient.mp3',
      description: 'Deep ambient drone for trance states',
      phase: 'guidedBreathing' as const,
    },
  ],
  breathOutHold: [
    {
      id: 'breath-out-hold-default',
      name: 'Breath-Out Hold (Default)',
      filePath: '/audio/breath-out-hold.mp3',
      description: 'Default calm background for retention hold',
      phase: 'breathOutHold' as const,
    },
    {
      id: 'breath-out-hold-silence',
      name: 'Silent Hold',
      filePath: '/audio/breath-out-hold-silence.mp3',
      description: 'Pure silence for deep internal focus',
      phase: 'breathOutHold' as const,
    },
    {
      id: 'breath-out-hold-drone',
      name: 'Deep Drone Hold',
      filePath: '/audio/breath-out-hold-drone.mp3',
      description: 'Low frequency drone for extended retention',
      phase: 'breathOutHold' as const,
    },
    {
      id: 'breath-out-hold-bowl',
      name: 'Singing Bowl Resonance',
      filePath: '/audio/breath-out-hold-bowl.mp3',
      description: 'Crystal bowl tones for meditative holds',
      phase: 'breathOutHold' as const,
    },
  ],
  recoveryHold: [
    {
      id: 'recovery-hold-default',
      name: 'Recovery Breath (Default)',
      filePath: '/audio/recovery-hold.mp3',
      description: 'Default 15-second recovery guidance',
      phase: 'recoveryHold' as const,
    },
    {
      id: 'recovery-hold-chime',
      name: 'Recovery Chimes',
      filePath: '/audio/recovery-hold-chime.mp3',
      description: 'Gentle chimes for recovery inhale & hold',
      phase: 'recoveryHold' as const,
    },
    {
      id: 'recovery-hold-silence',
      name: 'Silent Recovery',
      filePath: '/audio/recovery-hold-silence.mp3',
      description: 'Quiet space for natural recovery breath',
      phase: 'recoveryHold' as const,
    },
    {
      id: 'recovery-hold-ambient',
      name: 'Soft Ambient Pad',
      filePath: '/audio/recovery-hold-ambient.mp3',
      description: 'Warm ambient pad for gentle recovery',
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
      name: 'Guided Breathing Track',
      filePath: '/audio/guided-breathing.mp3',
      description: 'Audio guidance for rhythmic 30-breath phase',
    },
    breathOutHold: {
      id: 'breath-out-hold',
      name: 'Breath-Out Hold Track',
      filePath: '/audio/breath-out-hold.mp3',
      description: 'Calm background track for retention hold',
    },
    recoveryHold: {
      id: 'recovery-hold',
      name: 'Recovery Breath Track',
      filePath: '/audio/recovery-hold.mp3',
      description: '15-second recovery breath audio track',
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
