export interface AudioPhaseConfig {
  id: string;
  name: string;
  filePath: string;
  description: string;
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
}

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
};
