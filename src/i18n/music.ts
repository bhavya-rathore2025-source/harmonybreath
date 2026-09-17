import type { SupportedLanguage } from './ui';

export interface MusicTrackTranslation {
  name: string;
  description: string;
}

export interface MusicModalContent {
  modalTitle: string;
  modalSubtitle: string;
  pickInstruction: string;
  loopSong: string;
  playlistHint: string;
  selectedBadge: string;
  autoSaveHint: string;
  applyBtn: string;
  tracks: Record<string, MusicTrackTranslation>;
}

export const musicI18n: Record<SupportedLanguage, MusicModalContent> = {
  en: {
    modalTitle: 'Choose Background Music',
    modalSubtitle: 'Select a track for your breathing session',
    pickInstruction: 'Pick one track to play throughout your entire session',
    loopSong: 'Loop Song',
    playlistHint: '(Playlist if off)',
    selectedBadge: 'Selected',
    autoSaveHint: 'Settings saved automatically to your browser',
    applyBtn: 'Apply & Close',
    tracks: {
      'guided-breathing-default': {
        name: 'Serene Flow (Default)',
        description: 'Gentle, rhythmic ambient soundscape for focused breathing',
      },
      'guided-breathing-calm': {
        name: 'Calm Ocean Waves',
        description: 'Gentle ocean waves for relaxed breathing',
      },
      'guided-breathing-forest': {
        name: 'Forest Ambience',
        description: 'Peaceful forest sounds for natural grounding',
      },
      'guided-breathing-minimal': {
        name: 'Minimal Bell Tones',
        description: 'Subtle piano and bell tones for focused breathing',
      },
      'guided-breathing-ambient': {
        name: 'Ambient Drone',
        description: 'Deep ambient drone for tranquil meditative states',
      },
      'breath-out-hold-default': {
        name: 'Deep Stillness',
        description: 'Low-frequency soothing soundscape for peaceful relaxation',
      },
      'breath-out-hold-silence': {
        name: 'Pure Silence',
        description: 'Complete silence for deep internal focus',
      },
      'breath-out-hold-drone': {
        name: 'Cosmic Resonance',
        description: 'Continuous warm drone frequencies for meditative depth',
      },
      'breath-out-hold-bowl': {
        name: 'Singing Bowl Resonance',
        description: 'Harmonic crystal bowl tones for mindful clarity',
      },
      'recovery-hold-default': {
        name: 'Warm Horizon',
        description: 'Soft, comforting acoustic warmth to ease tension',
      },
      'recovery-hold-chime': {
        name: 'Crystal Chimes',
        description: 'Light harmonic wind chimes for gentle presence',
      },
      'recovery-hold-silence': {
        name: 'Quiet Space',
        description: 'Silent backdrop for natural rhythmic breathing',
      },
      'recovery-hold-ambient': {
        name: 'Soft Ambient Pad',
        description: 'Warm, enveloping ambient pad for calming comfort',
      },
    },
  },
  es: {
    modalTitle: 'Elegir Música de Fondo',
    modalSubtitle: 'Selecciona una pista para tu sesión de respiración',
    pickInstruction: 'Elige una pista para reproducir durante toda tu sesión',
    loopSong: 'Repetir Pista',
    playlistHint: '(Lista si está desactivado)',
    selectedBadge: 'Seleccionado',
    autoSaveHint: 'Configuración guardada automáticamente en tu navegador',
    applyBtn: 'Aplicar y Cerrar',
    tracks: {
      'guided-breathing-default': {
        name: 'Flujo Sereno (Predeterminado)',
        description: 'Paisaje sonoro ambiental suave y rítmico para respirar con enfoque',
      },
      'guided-breathing-calm': {
        name: 'Olas de Mar en Calma',
        description: 'Suaves olas oceánicas para una respiración relajada',
      },
      'guided-breathing-forest': {
        name: 'Ambiente de Bosque',
        description: 'Tranquilos sonidos del bosque para reconectar con la naturaleza',
      },
      'guided-breathing-minimal': {
        name: 'Tonos Mínimos de Campana',
        description: 'Sutiles notas de piano y campana para una respiración centrada',
      },
      'guided-breathing-ambient': {
        name: 'Dron Ambiental',
        description: 'Dron profundo y envolvente para estados meditativos serenos',
      },
      'breath-out-hold-default': {
        name: 'Quietud Profunda',
        description: 'Paisaje sonoro relajante de baja frecuencia para una calma absoluta',
      },
      'breath-out-hold-silence': {
        name: 'Silencio Puro',
        description: 'Silencio total para un enfoque interior profundo',
      },
      'breath-out-hold-drone': {
        name: 'Resonancia Cósmica',
        description: 'Frecuencias cálidas y continuas para profundizar en la meditación',
      },
      'breath-out-hold-bowl': {
        name: 'Cuenco Tibetano',
        description: 'Tonos armónicos de cuenco de cristal para claridad mental',
      },
      'recovery-hold-default': {
        name: 'Horizonte Cálido',
        description: 'Suave calidez acústica reconfortante para disipar tensiones',
      },
      'recovery-hold-chime': {
        name: 'Campanas de Cristal',
        description: 'Ligeras campanas de viento armónicas para una presencia gentil',
      },
      'recovery-hold-silence': {
        name: 'Espacio de Calma',
        description: 'Fondo silencioso para una respiración rítmica y natural',
      },
      'recovery-hold-ambient': {
        name: 'Colchón Ambiental Suave',
        description: 'Cálido fondo ambiental envolvente para un confort tranquilizador',
      },
    },
  },
  de: {
    modalTitle: 'Hintergrundmusik Wählen',
    modalSubtitle: 'Wählen Sie einen Titel für Ihre Atemsitzung',
    pickInstruction: 'Wählen Sie einen Titel für die gesamte Sitzung',
    loopSong: 'Titel wiederholen',
    playlistHint: '(Wiedergabeliste wenn aus)',
    selectedBadge: 'Ausgewählt',
    autoSaveHint: 'Einstellungen werden automatisch im Browser gespeichert',
    applyBtn: 'Übernehmen & Schließen',
    tracks: {
      'guided-breathing-default': {
        name: 'Sanfter Fluss (Standard)',
        description: 'Sanfte, rhythmische Klanglandschaft für fokussiertes Atmen',
      },
      'guided-breathing-calm': {
        name: 'Ruhige Meereswellen',
        description: 'Sanftes Meeresrauschen für entspanntes und tiefes Atmen',
      },
      'guided-breathing-forest': {
        name: 'Waldatmosphäre',
        description: 'Friedliche Natur- und Waldklänge für natürliche Erdung',
      },
      'guided-breathing-minimal': {
        name: 'Minimale Glockentöne',
        description: 'Dezente Klavier- und Glockenklänge für achtsame Atmung',
      },
      'guided-breathing-ambient': {
        name: 'Atmosphärischer Drone',
        description: 'Tiefe Ambient-Klänge für meditative Ruhe und Gelassenheit',
      },
      'breath-out-hold-default': {
        name: 'Tiefe Stille',
        description: 'Beruhigende Frequenzen für vollkommene Entspannung',
      },
      'breath-out-hold-silence': {
        name: 'Reine Stille',
        description: 'Vollständige Stille für tiefe innere Einkehr',
      },
      'breath-out-hold-drone': {
        name: 'Kosmische Resonanz',
        description: 'Warme, anhaltende Schwingungen für meditative Tiefe',
      },
      'breath-out-hold-bowl': {
        name: 'Klangschalen-Resonanz',
        description: 'Harmonische Kristallschalenklänge für geistige Klarheit',
      },
      'recovery-hold-default': {
        name: 'Warmer Horizont',
        description: 'Sanfte akustische Wärme zur Lösung aller Anspannungen',
      },
      'recovery-hold-chime': {
        name: 'Kristall-Windspiel',
        description: 'Leichte harmonische Klänge für sanfte Gegenwärtigkeit',
      },
      'recovery-hold-silence': {
        name: 'Stiller Raum',
        description: 'Stiller Hintergrund für eine natürliche Atemdynamik',
      },
      'recovery-hold-ambient': {
        name: 'Sanfter Ambient-Pad',
        description: 'Wohltuend einhüllender Pad-Sound für tiefen Komfort',
      },
    },
  },
  fr: {
    modalTitle: 'Choisir la Musique de Fond',
    modalSubtitle: 'Sélectionnez une piste pour votre séance de respiration',
    pickInstruction: 'Choisissez un morceau à écouter durant toute la séance',
    loopSong: 'Répéter le morceau',
    playlistHint: '(Playlist si désactivé)',
    selectedBadge: 'Sélectionné',
    autoSaveHint: 'Réglages enregistrés automatiquement dans votre navigateur',
    applyBtn: 'Appliquer et Fermer',
    tracks: {
      'guided-breathing-default': {
        name: 'Flux Serein (Par défaut)',
        description: 'Ambiance sonore douce et rythmée pour une respiration guidée et centrée',
      },
      'guided-breathing-calm': {
        name: 'Vagues Océanes Apaisantes',
        description: 'Douces vagues marines pour une respiration calme et détendue',
      },
      'guided-breathing-forest': {
        name: 'Ambiance Forestière',
        description: 'Sons paisibles de la forêt pour un ancrage naturel dans l’instant',
      },
      'guided-breathing-minimal': {
        name: 'Tonalités Épurées',
        description: 'Subtils accords de piano et carillons pour respirer en pleine conscience',
      },
      'guided-breathing-ambient': {
        name: 'Nappe Méditative',
        description: 'Bourdon sonore enveloppant pour une méditation profonde et tranquille',
      },
      'breath-out-hold-default': {
        name: 'Profonde Immobilité',
        description: 'Basses fréquences réconfortantes favorisant un lâcher-prise total',
      },
      'breath-out-hold-silence': {
        name: 'Silence Pur',
        description: 'Silence absolu pour une concentration intérieure totale',
      },
      'breath-out-hold-drone': {
        name: 'Résonance Cosmique',
        description: 'Ondes chaudes et continues invitant à un apaisement profond',
      },
      'breath-out-hold-bowl': {
        name: 'Bol Tibétain Harmonique',
        description: 'Vibrations cristallines pures pour une clarté d’esprit lumineuse',
      },
      'recovery-hold-default': {
        name: 'Horizon Chaleureux',
        description: 'Douceur acoustique enveloppante pour dissiper toute tension',
      },
      'recovery-hold-chime': {
        name: 'Carillons de Cristal',
        description: 'Légers tintements cristallins pour une présence subtile',
      },
      'recovery-hold-silence': {
        name: 'Espace Paisible',
        description: 'Fond silencieux pour retrouver son rythme naturel de respiration',
      },
      'recovery-hold-ambient': {
        name: 'Nappe Apaisante',
        description: 'Ambiance feutrée et rassurante procurant bien-être et sérénité',
      },
    },
  },
  pt: {
    modalTitle: 'Escolher Música de Fundo',
    modalSubtitle: 'Selecione uma faixa para a sua sessão de respiração',
    pickInstruction: 'Escolha uma faixa para tocar durante toda a sua sessão',
    loopSong: 'Repetir Faixa',
    playlistHint: '(Lista se desativado)',
    selectedBadge: 'Selecionado',
    autoSaveHint: 'Configurações salvas automaticamente no navegador',
    applyBtn: 'Aplicar e Fechar',
    tracks: {
      'guided-breathing-default': {
        name: 'Fluxo Sereno (Padrão)',
        description: 'Paisagem sonora ambiente suave e rítmica para respirar com foco',
      },
      'guided-breathing-calm': {
        name: 'Ondas Suaves do Mar',
        description: 'Ondas serenas do oceano para uma respiração profundamente relaxante',
      },
      'guided-breathing-forest': {
        name: 'Sons da Floresta',
        description: 'Sons tranquilos da natureza para ancoramento e presença',
      },
      'guided-breathing-minimal': {
        name: 'Sinos Minimalistas',
        description: 'Sutis notas de piano e sinos para uma prática concentrada',
      },
      'guided-breathing-ambient': {
        name: 'Drone Meditativo',
        description: 'Ressonância profunda e contínua para estados meditativos serenos',
      },
      'breath-out-hold-default': {
        name: 'Quietude Profunda',
        description: 'Frequências baixas e suaves para relaxamento pacífico',
      },
      'breath-out-hold-silence': {
        name: 'Silêncio Puro',
        description: 'Silêncio total para conexão e foco interior absoluto',
      },
      'breath-out-hold-drone': {
        name: 'Ressonância Cósmica',
        description: 'Vibrações contínuas e acolhedoras para imersão meditativa',
      },
      'breath-out-hold-bowl': {
        name: 'Taça Tibetana de Cristal',
        description: 'Harmônicos de cristal para clareza mental e presença',
      },
      'recovery-hold-default': {
        name: 'Horizonte Acolhedor',
        description: 'Calor acústico suave para aliviar qualquer tensão residual',
      },
      'recovery-hold-chime': {
        name: 'Sinos de Vento',
        description: 'Leves carrilhões harmoniosos para uma presença serena',
      },
      'recovery-hold-silence': {
        name: 'Espaço Silencioso',
        description: 'Ambiente silencioso para respiração rítmica natural',
      },
      'recovery-hold-ambient': {
        name: 'Pad Ambiente Suave',
        description: 'Nuvem sonora aconchegante para conforto e bem-estar',
      },
    },
  },
  ja: {
    modalTitle: 'BGM（背景音）を選択',
    modalSubtitle: '呼吸セッション中に流すサウンドを選択してください',
    pickInstruction: 'セッション全体で再生するお好みのトラックを選択',
    loopSong: '曲をループ再生',
    playlistHint: '（オフ時は全曲連続）',
    selectedBadge: '選択中',
    autoSaveHint: '設定はブラウザに自動保存されます',
    applyBtn: '適用して閉じる',
    tracks: {
      'guided-breathing-default': {
        name: '静寂の調べ（デフォルト）',
        description: '集中した呼吸を促す穏やかでリズミカルなアンビエント音',
      },
      'guided-breathing-calm': {
        name: '穏やかな波の音',
        description: '深いリラックスを誘う心地よい波のさざ波音',
      },
      'guided-breathing-forest': {
        name: '森のアンビエンス',
        description: '自然なグラウンディングをもたらす静かな森林の音',
      },
      'guided-breathing-minimal': {
        name: 'ミニマルベルトーン',
        description: '意識を内側へ導く控えめなピアノと鐘の響き',
      },
      'guided-breathing-ambient': {
        name: 'ディープドローン',
        description: '穏やかな瞑想状態を深める深遠なアンビエント音',
      },
      'breath-out-hold-default': {
        name: 'ディープスティルネス（静止）',
        description: '安らぎを深める低周波の心地よいサウンドスケープ',
      },
      'breath-out-hold-silence': {
        name: '完全な静寂',
        description: '自己の内面に深く集中するための無音空間',
      },
      'breath-out-hold-drone': {
        name: 'コズミックレゾナンス',
        description: '瞑想の深まりを支える温かい持続ドローン音',
      },
      'breath-out-hold-bowl': {
        name: 'シンギングボウルの響き',
        description: '澄んだ意識をもたらすクリスタルボウルの倍音',
      },
      'recovery-hold-default': {
        name: 'ウォームホライズン',
        description: '緊張をやさしくほぐす温かみのあるアコースティック音',
      },
      'recovery-hold-chime': {
        name: 'クリスタルチャイム',
        description: '今この瞬間に寄り添う軽やかなクリスタル風鈴の音',
      },
      'recovery-hold-silence': {
        name: 'クワイエットスペース',
        description: '自然な呼吸リズムを整える静かな背景',
      },
      'recovery-hold-ambient': {
        name: 'ソフトアンビエントパッド',
        description: '心身を包み込み深い安心感を与える柔らかなパッド音',
      },
    },
  },
  it: {
    modalTitle: 'Scegli la Musica di Sottofondo',
    modalSubtitle: 'Seleziona un brano per la tua sessione di respirazione',
    pickInstruction: 'Scegli un brano da riprodurre per l’intera sessione',
    loopSong: 'Ripeti Brano',
    playlistHint: '(Playlist se disattivato)',
    selectedBadge: 'Selezionato',
    autoSaveHint: 'Impostazioni salvate automaticamente nel browser',
    applyBtn: 'Applica e Chiudi',
    tracks: {
      'guided-breathing-default': {
        name: 'Flusso Sereno (Predefinito)',
        description: 'Paesaggio sonoro rilassante e ritmico per una respirazione focalizzata',
      },
      'guided-breathing-calm': {
        name: 'Onde del Mare Calmo',
        description: 'Dolci onde oceaniche per accompagnare un respiro disteso',
      },
      'guided-breathing-forest': {
        name: 'Ambiente della Foresta',
        description: 'Suoni sereni del bosco per un radicamento profondo e naturale',
      },
      'guided-breathing-minimal': {
        name: 'Tonalità Minimali di Campane',
        description: 'Note delicate di pianoforte e campana per un respiro consapevole',
      },
      'guided-breathing-ambient': {
        name: 'Drone Ambientale',
        description: 'Profondo sottofondo sonoro per stati meditativi di quiete',
      },
      'breath-out-hold-default': {
        name: 'Quiete Profonda',
        description: 'Frequenze basse e avvolgenti per un rilassamento totale',
      },
      'breath-out-hold-silence': {
        name: 'Puro Silenzio',
        description: 'Silenzio assoluto per un ascolto interiore profondo'
      },
      'breath-out-hold-drone': {
        name: 'Risonanza Cosmica',
        description: 'Frequenze calde e continue per entrare in meditazione',
      },
      'breath-out-hold-bowl': {
        name: 'Campana Tibetana',
        description: 'Armoniche cristalline pure per favorire la chiarezza mentale',
      },
      'recovery-hold-default': {
        name: 'Orizzonte Caldo',
        description: 'Morbido calore acustico per sciogliere ogni tensione residua',
      },
      'recovery-hold-chime': {
        name: 'Campanelli di Cristallo',
        description: 'Leggeri carillon a vento per una presenza delicata',
      },
      'recovery-hold-silence': {
        name: 'Spazio Silenzioso',
        description: 'Sottofondo silenzioso per un respiro ritmico e naturale',
      },
      'recovery-hold-ambient': {
        name: 'Pad Ambientale Morbido',
        description: 'Avvolgente atmosfera sonora per un comfort rassicurante',
      },
    },
  },
};
