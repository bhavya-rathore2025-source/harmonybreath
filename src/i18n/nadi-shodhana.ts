import type { SupportedLanguage } from './ui';

export interface NadiShodhanaContent {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalPath: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  breadcrumbName: string;
  startPracticeBtn: string;
  jumpLinks: {
    timer: string;
    presets: string;
    stats: string;
    guide: string;
    about: string;
    faq: string;
  };
  overview: {
    badge: string;
    title: string;
    desc1: string;
    desc2: string;
  };
  mechanics: {
    badge: string;
    title: string;
    phaseATitle: string;
    phaseAStep: string;
    phaseADesc: string;
    phaseBTitle: string;
    phaseBStep: string;
    phaseBDesc: string;
    patternLabel: string;
    patternFlow: string;
  };
  mudra: {
    badge: string;
    title: string;
    intro: string;
    thumbTitle: string;
    thumbDesc: string;
    ringFingerTitle: string;
    ringFingerDesc: string;
    otherFingersTitle: string;
    otherFingersDesc: string;
  };
  science: {
    disclosure: string;
    badge: string;
    title: string;
    intro: string;
    points: { title: string; desc: string }[];
    benefits: { title: string; desc: string }[];
    citationsTitle: string;
    citations: { authors: string; title: string; journal: string; url: string; linkText: string }[];
  };
  editorial: {
    title: string;
    desc: string;
    disclaimer: string;
    linkText: string;
  };
  safety: {
    title: string;
    points: string[];
  };
  faqsTitle: string;
  faqsSubtitle: string;
  faqs: { question: string; answer: string }[];
  timer: {
    ready: string;
    pressStart: string;
    cyclePrefix: string;
    cycleOf: string;
    leftNostril: string;
    rightNostril: string;
    ringFinger: string;
    thumb: string;
    open: string;
    inhaling: string;
    exhaling: string;
    closedThumb: string;
    closedRing: string;
    closed: string;
    idleInstruction: string;
    leftInhaleDirective: string;
    holdDirective: string;
    rightExhaleDirective: string;
    rightInhaleDirective: string;
    leftExhaleDirective: string;
    completeDirective: string;
    completeInstruction: string;
    summaryTemplate: string;
    summaryNoHoldTemplate: string;
    btnStart: string;
    btnPause: string;
    btnResume: string;
    btnStartAgain: string;
    btnSkip: string;
    btnReset: string;
    btnMusic: string;
    phaseLabels: {
      leftInhale: string;
      hold: string;
      rightExhale: string;
      rightInhale: string;
      leftExhale: string;
      completed: string;
      ready: string;
    };
  };
  presets: {
    sectionTitle: string;
    sectionSubtitle: string;
    customBtn: string;
    beginner: { name: string; badge: string; desc: string; rhythm: string };
    relaxed: { name: string; badge: string; desc: string; rhythm: string };
    equal: { name: string; badge: string; desc: string; rhythm: string };
    retention: { name: string; badge: string; desc: string; rhythm: string };
    custom: { name: string; badge: string; desc: string };
    cyclesTemplate: string;
  };
  customModal: {
    title: string;
    desc: string;
    inhaleLabel: string;
    holdLabel: string;
    exhaleLabel: string;
    cyclesLabel: string;
    noHoldText: string;
    secondsSuffix: string;
    cyclesSuffix: string;
    cancelBtn: string;
    applyBtn: string;
  };
}

export const nadiShodhanaI18n: Record<SupportedLanguage, NadiShodhanaContent> = {
  en: {
    metaTitle: 'Nadi Shodhana: Alternate Nostril Breathing Pranayama Timer',
    metaDescription: 'Master Nadi Shodhana (Alternate Nostril Breathing) with our free guided timer. Visual nostril cues, custom rhythms, and calming ambient soundscapes.',
    keywords: 'nadi shodhana, alternate nostril breathing, anulom vilom, pranayama timer, breathing exercise for focus, balanced breathing, guided alternate nostril breathing, vishnu mudra, channel purification breathing, nadi shodhana benefits',
    canonicalPath: '/nadi-shodhana/',
    badge: 'TRADITIONAL YOGIC PRANAYAMA ENGINE',
    heroTitle: 'Nadi Shodhana\nAlternate Nostril Breath',
    heroSubtitle: 'Nadi Shodhana is a traditional yogic breathing practice that alternates airflow between the left and right nostrils. Its slow, rhythmic pattern encourages focused attention, hemispheric brain balancing, and calm awareness.',
    breadcrumbName: 'Nadi Shodhana',
    startPracticeBtn: 'Start Practice',
    jumpLinks: {
      timer: 'Timer',
      presets: 'Presets',
      stats: 'Stats',
      guide: 'Guide',
      about: 'About',
      faq: 'FAQ',
    },
    overview: {
      badge: '1',
      title: 'Understanding Nadi Shodhana',
      desc1: 'In Sanskrit, Nadi Shodhana is commonly translated as "channel purification" or "channel cleansing." In traditional yogic philosophy, nadis are subtle energetic pathways, and alternating airflow between the nostrils clears blockages to balance vitality and mental poise.',
      desc2: 'In modern physiology and clinical breathwork, the practice is grounded and intuitive: you use your hand to selectively close one nostril at a time, establishing a smooth, slow breath cadence that stabilizes the nervous system and sharpens cognitive acuity.',
    },
    mechanics: {
      badge: '2',
      title: 'How the Alternate Nostril Sequence Works',
      phaseATitle: 'Phase A — Left to Right',
      phaseAStep: 'Step 1 & Step 2',
      phaseADesc: 'Close your right nostril with your thumb and inhale through your left nostril. Next, close your left nostril with your ring finger, release your right nostril, and exhale smoothly through your right nostril.',
      phaseBTitle: 'Phase B — Right to Left',
      phaseBStep: 'Step 3 & Step 4',
      phaseBDesc: 'Keep your left nostril closed and inhale through your right nostril. Then close your right nostril with your thumb, release your left nostril, and exhale steadily through your left nostril.',
      patternLabel: 'Complete Cycle Pattern:',
      patternFlow: 'Inhale L → Exhale R → Inhale R → Exhale L',
    },
    mudra: {
      badge: '3',
      title: 'Hand Position (Vishnu Mudra)',
      intro: 'In traditional pranayama, your right hand assumes Vishnu Mudra to alternate nostril closure smoothly without arm fatigue:',
      thumbTitle: 'Right Thumb:',
      thumbDesc: 'Gently closes your right nostril during left-side inhalations and left-side exhalations.',
      ringFingerTitle: 'Right Ring Finger:',
      ringFingerDesc: 'Gently closes your left nostril during right-side exhalations and right-side inhalations.',
      otherFingersTitle: 'Index & Middle Fingers:',
      otherFingersDesc: 'Can rest softly curled into your palm or lightly touch the center of your forehead (Ajna chakra) as a grounding anchor.',
    },
    science: {
      disclosure: 'Scientific Research & Editorial Disclosure: Content on this page is compiled from peer-reviewed physiological research, autonomic nervous system literature, and clinical studies on alternate nostril respiration. Our goal is to explain the biological mechanisms behind Nadi Shodhana while providing free, interactive guided timers.',
      badge: '4',
      title: 'The Physiology & Science Behind Nadi Shodhana',
      intro: 'While ancient traditions describe Nadi Shodhana as purifying subtle energy channels (nadis), contemporary neurophysiology explains its remarkable restorative impact through verifiable biological mechanisms:',
      points: [
        {
          title: 'The Ultradian Nasal Cycle:',
          desc: 'Humans naturally alternate nasal passage congestion and airflow dominance every 90–120 minutes through erectile tissue changes. Left nostril breathing stimulates the contralateral right cerebral hemisphere and boosts parasympathetic (vagal) tone, while right nostril breathing activates the left hemisphere and sympathetic vigilance. Systematically alternating both harmonizes bilateral brain activity.',
        },
        {
          title: 'Autonomic Nervous System Balancing:',
          desc: 'By enforcing equal, resistance-regulated inhalations and exhalations, alternate nostril respiration dampens excessive sympathetic arousal, slowing resting heart rate and normalizing arterial blood pressure within minutes.',
        },
        {
          title: 'Tactile Anchoring & Brainwave Synchronization:',
          desc: 'The physical touch required in Vishnu Mudra, paired with remembering nostril transitions (L-in, R-out, R-in, L-out), creates an engaging cognitive feedback loop. Clinical electroencephalogram (EEG) studies reveal elevated alpha and theta brainwave coherence during practice, signifying relaxed mental clarity.',
        },
      ],
      benefits: [
        {
          title: 'Stress & Anxiety Relief',
          desc: 'Slow alternate nostril flow stimulates baroreceptor reflexes and triggers rapid parasympathetic relaxation.',
        },
        {
          title: 'Sharpened Mental Focus',
          desc: 'Requiring dual-hemisphere engagement and tactile coordination halts distracting mind-wandering.',
        },
        {
          title: 'Optimized Nasal Airflow',
          desc: 'Regular gentle practice warms and moistens inhaled air while increasing nasal nitric oxide circulation.',
        },
        {
          title: 'Pre-Meditation Centering',
          desc: 'Restores baseline equilibrium, making it the premier yogic gateway before seated stillness or deep work.',
        },
      ],
      citationsTitle: 'Scientific References & Cited Studies',
      citations: [
        {
          authors: 'Telles, S., et al. (2013).',
          title: 'Immediate autonomic and respiratory effects of alternate nostril breathing.',
          journal: 'Medical Science Monitor Basic Research, 19, 67-72.',
          url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3681046/',
          linkText: '[PubMed / PMC]',
        },
        {
          authors: 'Sinha, A. N., et al. (2013).',
          title: 'Assessment of the immediate effect of alternate nostril breathing on autonomic functions in healthy volunteers.',
          journal: 'Journal of Clinical and Diagnostic Research.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/24381831/',
          linkText: '[PubMed]',
        },
      ],
    },
    editorial: {
      title: 'Written by the HarmonyBreath Editorial Team',
      desc: 'This guide was created by our in-house editorial team of breathwork practitioners and wellness writers, the same people who build and use the HarmonyBreath timers in their daily practice. We research each technique carefully against published physiological literature and keep every article clear, honest, and free of medical overreach.',
      disclaimer: 'This content is for educational purposes only and is not a substitute for professional medical advice.',
      linkText: 'Learn more about our team',
    },
    safety: {
      title: 'Important Safety & Practice Guidelines',
      points: [
        'Always practice seated comfortably upright with an aligned spine in a quiet, safe space.',
        'Never force or hold your breath beyond comfort: retention holds are optional and not recommended for beginners or during pregnancy.',
        'Do not practice while driving, swimming, or operating heavy machinery: breathwork should only be done when seated and stationary.',
        'If one nostril is congested due to a cold or allergies, do not force air through it; switch to gentle diaphragmatic belly breathing instead.',
        'Stop immediately if you experience dizziness, lightheadedness, or shortness of breath.',
      ],
    },
    faqsTitle: 'Frequently Asked Questions',
    faqsSubtitle: 'Everything you need to know about Nadi Shodhana, its benefits, frequency, and safe practice.',
    faqs: [
      {
        question: 'What is Nadi Shodhana good for?',
        answer: 'Nadi Shodhana, or alternate nostril breathing, is a yogic breath control practice that clears and calms the mind, lowers stress and anxiety, balances the autonomic nervous system, and improves lung function and mental focus by alternating airflow through each nostril.',
      },
      {
        question: 'What is the difference between Anulom Vilom and Nadi Shodhana?',
        answer: 'The main difference between Anulom Vilom and Nadi Shodhana is breath retention (Kumbhaka). Anulom Vilom is a continuous, gentle alternate nostril breathing exercise without holds, making it ideal for beginners. Traditional Nadi Shodhana incorporates controlled breath retentions between nostril transitions to deeply harmonize autonomic and energy pathways.',
      },
      {
        question: 'How many times should I do Nadi Shodhana?',
        answer: 'Beginners should practice 5 to 10 rounds per session (approximately 5 to 10 minutes). Experienced practitioners often perform 15 to 20 cycles. For sustained benefits in emotional composure and focus, practice 1 to 2 times daily on an empty stomach.',
      },
      {
        question: 'Is Nadi Shodhana safe for everyone?',
        answer: 'Gentle alternate nostril breathing without breath holds is safe for nearly everyone. However, advanced variations with long retention holds should be avoided by individuals with uncontrolled hypertension, cardiovascular conditions, or during pregnancy. Always maintain a light, unforced breath.',
      },
      {
        question: 'Can I do Nadi Shodhana if I have a blocked nose or cold?',
        answer: 'If your nasal passages are heavily congested from a cold, sinusitis, or allergies, do not force alternate nostril breathing. Forcing airflow through restricted passages causes facial tension. Switch to standard diaphragmatic breathing until your nasal tissues decongest naturally.',
      },
      {
        question: 'Which hand position (mudra) should I use?',
        answer: 'In traditional practice (Vishnu Mudra), bring your right hand toward your nose. Use your right thumb to control your right nostril and your right ring finger to control your left nostril, resting your index and middle fingers against your palm or between your eyebrows.',
      },
    ],
    timer: {
      ready: 'Ready',
      pressStart: 'Press Start',
      cyclePrefix: 'Cycle',
      cycleOf: 'of',
      leftNostril: 'Left Nostril',
      rightNostril: 'Right Nostril',
      ringFinger: 'Ring Finger',
      thumb: 'Thumb',
      open: 'Open',
      inhaling: 'INHALING',
      exhaling: 'EXHALING',
      closedThumb: 'CLOSED (Thumb)',
      closedRing: 'CLOSED (Ring Finger)',
      closed: 'Closed',
      idleInstruction: 'Sit comfortably upright with your right hand near your nose.',
      leftInhaleDirective: '👉 Close right nostril with THUMB. Inhale gently through left nostril.',
      holdDirective: '🔒 Close both nostrils gently with thumb and ring finger.',
      rightExhaleDirective: '👉 Keep left nostril closed with RING FINGER. Exhale through right nostril.',
      rightInhaleDirective: '👉 Keep left nostril closed. Inhale gently through right nostril.',
      leftExhaleDirective: '👉 Close right nostril with THUMB. Exhale slowly through left nostril.',
      completeDirective: 'SESSION COMPLETE',
      completeInstruction: '✨ Wonderful practice! Rest and observe your calm, balanced breathing.',
      summaryTemplate: 'In {in}s • Hold {hold}s • Out {out}s',
      summaryNoHoldTemplate: 'In {in}s • Out {out}s • No Hold',
      btnStart: 'Start Session',
      btnPause: 'Pause Session',
      btnResume: 'Resume Session',
      btnStartAgain: 'Start Again',
      btnSkip: 'Skip Step',
      btnReset: 'Reset',
      btnMusic: 'Music',
      phaseLabels: {
        leftInhale: 'LEFT INHALE',
        hold: 'RETENTION HOLD',
        rightExhale: 'RIGHT EXHALE',
        rightInhale: 'RIGHT INHALE',
        leftExhale: 'LEFT EXHALE',
        completed: 'FINISHED',
        ready: 'READY',
      },
    },
    presets: {
      sectionTitle: 'Session Presets',
      sectionSubtitle: 'Select rhythm and nostril timing for your Nadi Shodhana practice.',
      customBtn: 'Custom Timing & Cycles',
      beginner: {
        name: 'Beginner (Default)',
        badge: '4–4',
        desc: 'Gentle 4s In / 4s Out without holds. Ideal starting pace.',
        rhythm: '19 cycles • ~5m 04s',
      },
      relaxed: {
        name: 'Relaxed',
        badge: '5–5',
        desc: 'Slower 5s rhythm to foster tranquility and mental calm.',
        rhythm: '15 cycles • ~5m 00s',
      },
      equal: {
        name: 'Equal Rhythm',
        badge: '6–6',
        desc: 'Deep, smooth 6s cadence for focused meditation prep.',
        rhythm: '12 cycles • ~4m 48s',
      },
      retention: {
        name: 'With Retention',
        badge: '4-4-4',
        desc: 'Adds gentle 4s breath holds between nostril transitions.',
        rhythm: '12 cycles • ~4m 48s',
      },
      custom: {
        name: 'Custom',
        badge: 'Custom',
        desc: 'Define your custom nostril durations and session target.',
      },
      cyclesTemplate: '{n} cycles',
    },
    customModal: {
      title: 'Custom Nadi Shodhana Settings',
      desc: 'Customize nostril phase durations and total cycles for your alternate nostril breathing session.',
      inhaleLabel: 'Inhale Duration (per nostril)',
      holdLabel: 'Optional Retention Hold',
      exhaleLabel: 'Exhale Duration (per nostril)',
      cyclesLabel: 'Total Cycles (L → R → R → L)',
      noHoldText: '0s (None)',
      secondsSuffix: 's',
      cyclesSuffix: 'Cycles',
      cancelBtn: 'Cancel',
      applyBtn: 'Apply Custom Rhythm',
    },
  },

  es: {
    metaTitle: 'Nadi Shodhana: Respiración Nasal Alterna Temporizador',
    metaDescription: 'Domina Nadi Shodhana (respiración nasal alterna) con nuestro temporizador guiado gratis. Indicadores visuales de fosas, ritmos ajustables y calma.',
    keywords: 'nadi shodhana, respiración nasal alterna, anulom vilom, temporizador pranayama, ejercicios de respiración para concentrarse, respiración equilibrada, vishnu mudra, beneficios nadi shodhana',
    canonicalPath: '/es/nadi-shodhana/',
    badge: 'MOTOR DE PRANAYAMA YÓGICO TRADICIONAL',
    heroTitle: 'Nadi Shodhana\nRespiración Nasal Alterna',
    heroSubtitle: 'Nadi Shodhana es una técnica yóguica milenaria que alterna el flujo de aire entre las fosas nasales izquierda y derecha. Su ritmo pausado equilibra los hemisferios cerebrales y calma el sistema nervioso.',
    breadcrumbName: 'Nadi Shodhana',
    startPracticeBtn: 'Iniciar Práctica',
    jumpLinks: {
      timer: 'Temporizador',
      presets: 'Modos',
      stats: 'Estadísticas',
      guide: 'Guía',
      about: 'Acerca de',
      faq: 'Preguntas',
    },
    overview: {
      badge: '1',
      title: 'Comprendiendo Nadi Shodhana',
      desc1: 'En sánscrito, Nadi Shodhana significa "purificación o limpieza de los canales energéticos" (nadis). Al alternar la ventilación entre fosas nasales, se armoniza la energía vital y se alivia la sobrecarga mental.',
      desc2: 'En la neurofisiología contemporánea, la práctica es sencilla y eficaz: se ocluye una fosa nasal con la mano de forma alternada, promoviendo una respiración suave que regula el tono vagal y la claridad cognitiva.',
    },
    mechanics: {
      badge: '2',
      title: 'Cómo Funciona la Secuencia Alterna',
      phaseATitle: 'Fase A — De Izquierda a Derecha',
      phaseAStep: 'Paso 1 y Paso 2',
      phaseADesc: 'Cierra tu fosa nasal derecha con el pulgar e inhala por la fosa izquierda. Luego cierra la fosa izquierda con el dedo anular, abre la fosa derecha y exhala suavemente por ella.',
      phaseBTitle: 'Fase B — De Derecha a Izquierda',
      phaseBStep: 'Paso 3 y Paso 4',
      phaseBDesc: 'Mantén cerrada la fosa izquierda e inhala por la fosa derecha. A continuación, cierra la fosa derecha con el pulgar, abre la izquierda y exhala lentamente por la fosa izquierda.',
      patternLabel: 'Patrón de Ciclo Completo:',
      patternFlow: 'Inhalar Izq → Exhalar Der → Inhalar Der → Exhalar Izq',
    },
    mudra: {
      badge: '3',
      title: 'Posición de la Mano (Vishnu Mudra)',
      intro: 'En el pranayama tradicional, la mano derecha adopta Vishnu Mudra para alternar el cierre de las fosas con máxima soltura y sin fatiga muscular:',
      thumbTitle: 'Pulgar Derecho:',
      thumbDesc: 'Ocluye suavemente la fosa nasal derecha durante las inhalaciones y exhalaciones por la fosa izquierda.',
      ringFingerTitle: 'Dedo Anular Derecho:',
      ringFingerDesc: 'Ocluye suavemente la fosa nasal izquierda durante las exhalaciones e inhalaciones por la fosa derecha.',
      otherFingersTitle: 'Dedos Índice y Medio:',
      otherFingersDesc: 'Pueden descansar doblados hacia la palma o apoyarse con suavidad en el entrecejo como ancla meditativa.',
    },
    science: {
      disclosure: 'Divulgación Científica y Editorial: El contenido de esta página recopila investigaciones fisiológicas revisadas por pares y estudios clínicos sobre respiración nasal alterna. Explicamos la ciencia biológica de Nadi Shodhana mientras ofrecemos temporizadores guiados gratuitos.',
      badge: '4',
      title: 'La Fisiología y Ciencia Detrás de Nadi Shodhana',
      intro: 'Más allá de la tradición yóguica, la neurociencia moderna documenta beneficios biológicos medibles a través de mecanismos comprobados:',
      points: [
        {
          title: 'El Ciclo Nasal Ultradiano:',
          desc: 'Los seres humanos alternan de forma natural la dominancia de flujo de aire entre narinas cada 90–120 minutos. Respirar por la fosa izquierda estimula el hemisferio cerebral derecho y activa el sistema parasimpático; hacerlo por la derecha activa el hemisferio izquierdo y el estado de alerta simpático. Alternarlas equilibra ambos hemisferios.',
        },
        {
          title: 'Equilibrio del Sistema Nervioso Autónomo:',
          desc: 'Una respiración lenta con resistencia nasal moderada estimula los barorreceptores arteriales, disminuyendo la frecuencia cardíaca y la presión arterial sistólica en cuestión de minutos.',
        },
        {
          title: 'Anclaje Táctil y Ondas Alfa/Theta:',
          desc: 'La coordinación táctil con Vishnu Mudra y la atención al orden de alternancia rompen la rumiación mental. Los estudios de electroencefalografía (EEG) constatan un incremento notable de ondas cerebrales alfa y theta, asociadas a calma lúcida.',
        },
      ],
      benefits: [
        {
          title: 'Alivio del Estrés y la Ansiedad',
          desc: 'Estimula el reflejo vagal para inducir una pronta relajación neurofisiológica.',
        },
        {
          title: 'Mayor Concentración y Foco',
          desc: 'La atención requerida para alternar fosas disipa distracciones y calma la dispersión mental.',
        },
        {
          title: 'Optimización del Aire Inhalado',
          desc: 'Filtra y humedece el aire de manera eficiente al tiempo que estimula la liberación de óxido nítrico.',
        },
        {
          title: 'Puerta de Entrada a la Meditación',
          desc: 'Restaura el equilibrio basal del cuerpo antes de iniciar una sesión de trabajo profundo o meditación.',
        },
      ],
      citationsTitle: 'Referencias Científicas y Ensayos Clínicos',
      citations: [
        {
          authors: 'Telles, S., et al. (2013).',
          title: 'Immediate autonomic and respiratory effects of alternate nostril breathing.',
          journal: 'Medical Science Monitor Basic Research, 19, 67-72.',
          url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3681046/',
          linkText: '[PubMed / PMC]',
        },
        {
          authors: 'Sinha, A. N., et al. (2013).',
          title: 'Assessment of the immediate effect of alternate nostril breathing on autonomic functions in healthy volunteers.',
          journal: 'Journal of Clinical and Diagnostic Research.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/24381831/',
          linkText: '[PubMed]',
        },
      ],
    },
    editorial: {
      title: 'Escrito por el Equipo Editorial de HarmonyBreath',
      desc: 'Esta guía fue desarrollada por practicantes e investigadores de respiración consciente que integran el equipo de HarmonyBreath. Redactamos artículos honestos y accesibles, respaldados por la evidencia médica sin promesas desmesuradas.',
      disclaimer: 'Este contenido tiene fines exclusivamente educativos y no reemplaza el diagnóstico o tratamiento médico profesional.',
      linkText: 'Conoce más sobre nuestro equipo',
    },
    safety: {
      title: 'Normas de Seguridad y Buenas Prácticas',
      points: [
        'Practica siempre sentado de forma cómoda con la columna erguida en un entorno tranquilo.',
        'Nunca fuerces la respiración ni prolongues apneas de forma incómoda: las retenciones son opcionales y desaconsejadas para principiantes.',
        'No practiques mientras conduces, nadas o manejas maquinaria pesada: requiere quietud absoluta.',
        'Si tienes una fosa nasal bloqueada por resfriado o alergia, no fuerces el aire; opta por respiración diafragmática simple.',
        'Detén el ejercicio de inmediato si notas mareo, presión en el pecho o falta de aire.',
      ],
    },
    faqsTitle: 'Preguntas Frecuentes',
    faqsSubtitle: 'Respuestas detalladas sobre beneficios, frecuencia y práctica segura de Nadi Shodhana.',
    faqs: [
      {
        question: '¿Para qué sirve Nadi Shodhana?',
        answer: 'Nadi Shodhana, o respiración nasal alterna, calma la mente, reduce el estrés y la ansiedad, armoniza el sistema nervioso autónomo y mejora la concentración al equilibrar el flujo de aire entre las fosas nasales.',
      },
      {
        question: '¿Cuál es la diferencia entre Anulom Vilom y Nadi Shodhana?',
        answer: 'La principal diferencia es la retención del aire (Kumbhaka). Anulom Vilom es un flujo alterno continuo sin pausas respiratorias, ideal para principiantes. Nadi Shodhana suele incorporar retenciones conscientes y ratios calculados para profundizar la armonización neuromuscular.',
      },
      {
        question: '¿Cuántas rondas de Nadi Shodhana se deben hacer?',
        answer: 'Se recomienda iniciar con 5 a 10 rondas por sesión (de 5 a 10 minutos). Practicantes más avanzados realizan de 15 a 20 ciclos. Para resultados óptimos, hazlo 1 o 2 veces al día con el estómago vacío.',
      },
      {
        question: '¿Es seguro Nadi Shodhana para todo el mundo?',
        answer: 'La respiración alterna suave sin retenciones prolongadas es segura para la inmensa mayoría de las personas. Quienes padecen hipertensión no controlada o problemas cardíacos deben evitar las apneas prolongadas y respirar con fluidez.',
      },
      {
        question: '¿Puedo hacer Nadi Shodhana si tengo la nariz tapada?',
        answer: 'Si tienes congestión nasal severa por gripe o alergia, no fuerces el paso de aire, ya que generarás tensión facial. Es preferible esperar a descongestionarte y practicar respiración abdominal tranquila.',
      },
      {
        question: '¿Qué posición de mano (mudra) se recomienda?',
        answer: 'Se utiliza Vishnu Mudra con la mano derecha: el pulgar controla la fosa derecha y el dedo anular la fosa izquierda, mientras el índice y el medio reposan doblados hacia la palma o sobre el entrecejo.',
      },
    ],
    timer: {
      ready: 'Listo',
      pressStart: 'Pulsa Iniciar',
      cyclePrefix: 'Ciclo',
      cycleOf: 'de',
      leftNostril: 'Fosa Izquierda',
      rightNostril: 'Fosa Derecha',
      ringFinger: 'Dedo Anular',
      thumb: 'Pulgar',
      open: 'Abierta',
      inhaling: 'INHALANDO',
      exhaling: 'EXHALANDO',
      closedThumb: 'CERRADA (Pulgar)',
      closedRing: 'CERRADA (Anular)',
      closed: 'Cerrada',
      idleInstruction: 'Siéntate erguido y cómodo con la mano derecha cerca de la nariz.',
      leftInhaleDirective: '👉 Cierra fosa derecha con el PULGAR. Inhala suavemente por la izquierda.',
      holdDirective: '🔒 Cierra suavemente ambas fosas con pulgar y anular.',
      rightExhaleDirective: '👉 Mantén fosa izquierda cerrada con ANULAR. Exhala por la derecha.',
      rightInhaleDirective: '👉 Mantén fosa izquierda cerrada. Inhala suavemente por la derecha.',
      leftExhaleDirective: '👉 Cierra fosa derecha con el PULGAR. Exhala lentamente por la izquierda.',
      completeDirective: 'SESIÓN COMPLETADA',
      completeInstruction: '✨ ¡Excelente práctica! Descansa y percibe tu respiración equilibrada.',
      summaryTemplate: 'Inhala {in}s • Retén {hold}s • Exhala {out}s',
      summaryNoHoldTemplate: 'Inhala {in}s • Exhala {out}s • Sin Retención',
      btnStart: 'Comenzar Sesión',
      btnPause: 'Pausar Sesión',
      btnResume: 'Reanudar Sesión',
      btnStartAgain: 'Iniciar de Nuevo',
      btnSkip: 'Saltar Paso',
      btnReset: 'Reiniciar',
      btnMusic: 'Música',
      phaseLabels: {
        leftInhale: 'INHALAR IZQUIERDA',
        hold: 'RETENCIÓN',
        rightExhale: 'EXHALAR DERECHA',
        rightInhale: 'INHALAR DERECHA',
        leftExhale: 'EXHALAR IZQUIERDA',
        completed: 'TERMINADO',
        ready: 'LISTO',
      },
    },
    presets: {
      sectionTitle: 'Modos de Sesión',
      sectionSubtitle: 'Selecciona el ritmo y duración de las fases para tu práctica de Nadi Shodhana.',
      customBtn: 'Tiempos Personalizados',
      beginner: {
        name: 'Principiante (Estándar)',
        badge: '4–4',
        desc: 'Suave ritmo 4s inhalar / 4s exhalar sin retención. Ideal para comenzar.',
        rhythm: '19 ciclos • ~5m 04s',
      },
      relaxed: {
        name: 'Relajado',
        badge: '5–5',
        desc: 'Cadencia pausada de 5s para profundizar la calma y disipar la ansiedad.',
        rhythm: '15 ciclos • ~5m 00s',
      },
      equal: {
        name: 'Ritmo Equitativo',
        badge: '6–6',
        desc: 'Ventilación profunda y constante de 6s para preparación meditativa.',
        rhythm: '12 ciclos • ~4m 48s',
      },
      retention: {
        name: 'Con Retención',
        badge: '4-4-4',
        desc: 'Incorpora suaves apneas de 4s entre las transiciones nasales.',
        rhythm: '12 ciclos • ~4m 48s',
      },
      custom: {
        name: 'Personalizado',
        badge: 'Manual',
        desc: 'Define los segundos de cada fase y el número total de ciclos.',
      },
      cyclesTemplate: '{n} ciclos',
    },
    customModal: {
      title: 'Ajustes Personalizados de Nadi Shodhana',
      desc: 'Configura la duración por fosa nasal y los ciclos totales de tu respiración alterna.',
      inhaleLabel: 'Duración de Inhalación (por fosa)',
      holdLabel: 'Retención Opcional (Apnea)',
      exhaleLabel: 'Duración de Exhalación (por fosa)',
      cyclesLabel: 'Ciclos Totales (Izq → Der → Der → Izq)',
      noHoldText: '0s (Sin retención)',
      secondsSuffix: 's',
      cyclesSuffix: 'Ciclos',
      cancelBtn: 'Cancelar',
      applyBtn: 'Aplicar Ritmo',
    },
  },

  de: {
    metaTitle: 'Nadi Shodhana (Wechselatmung): Geführter Pranayama-Timer',
    metaDescription: 'Meistere Nadi Shodhana (Wechselatmung) mit unserem kostenlosen Timer. Visuelle Nasenlochanzeige, anpassbare Rhythmen und beruhigende Klänge.',
    keywords: 'nadi shodhana, wechselatmung anleitung, anulom vilom, wechselatmung wirkung, pranayama timer, atemübungen konzentration, vishnu mudra, wechselatmung vorteile',
    canonicalPath: '/de/nadi-shodhana/',
    badge: 'KLASSISCHE YOGISCHE PRANAYAMA-ENGINE',
    heroTitle: 'Nadi Shodhana\nDie Wechselatmung',
    heroSubtitle: 'Nadi Shodhana ist eine traditionelle yogische Atemtechnik, bei der abwechselnd durch das linke und rechte Nasenloch geatmet wird. Sie gleicht die Gehirnhälften aus und beruhigt das Nervensystem.',
    breadcrumbName: 'Nadi Shodhana',
    startPracticeBtn: 'Übung Starten',
    jumpLinks: {
      timer: 'Timer',
      presets: 'Modi',
      stats: 'Statistiken',
      guide: 'Anleitung',
      about: 'Wissenschaft',
      faq: 'FAQ',
    },
    overview: {
      badge: '1',
      title: 'Was ist Nadi Shodhana?',
      desc1: 'Im Sanskrit bedeutet Nadi Shodhana "Reinigung der Energiekanäle" (Nadis). Durch das abwechselnde Atmen durch die Nasenlöcher wird der Energiefluss harmonisiert und innere Unruhe abgebaut.',
      desc2: 'In der modernen Neurophysiologie ist die Wechselatmung ein klares, evidenzbasiertes Werkzeug: Durch sanftes Verschließen eines Nasenlochs entsteht ein gleichmäßiger Atemfluss, der den Vagusnerv aktiviert und den Fokus schärft.',
    },
    mechanics: {
      badge: '2',
      title: 'So Funktioniert der Wechsel-Zyklus',
      phaseATitle: 'Phase A — Von Links nach Rechts',
      phaseAStep: 'Schritt 1 & Schritt 2',
      phaseADesc: 'Verschließe das rechte Nasenloch mit dem Daumen und atme sanft durch das linke Nasenloch ein. Verschließe dann das linke Nasenloch mit dem Ringfinger, öffne das rechte und atme ruhig durch das rechte Nasenloch aus.',
      phaseBTitle: 'Phase B — Von Rechts nach Links',
      phaseBStep: 'Schritt 3 & Schritt 4',
      phaseBDesc: 'Lasse das linke Nasenloch verschlossen und atme durch das rechte Nasenloch ein. Verschließe dann das rechte Nasenloch mit dem Daumen, öffne das linke und atme gleichmäßig durch das linke Nasenloch aus.',
      patternLabel: 'Vollständiger Zyklus:',
      patternFlow: 'Einatmen Links → Ausatmen Rechts → Einatmen Rechts → Ausatmen Links',
    },
    mudra: {
      badge: '3',
      title: 'Handhaltung (Vishnu Mudra)',
      intro: 'In der traditionellen Pranayama-Praxis nimmt die rechte Hand das Vishnu Mudra ein, um die Nasenlöcher mühelos zu steuern:',
      thumbTitle: 'Rechter Daumen:',
      thumbDesc: 'Verschließt das rechte Nasenloch während der linken Ein- und Ausatmung.',
      ringFingerTitle: 'Rechter Ringfinger:',
      ringFingerDesc: 'Verschließt das linke Nasenloch während der rechten Aus- und Einatmung.',
      otherFingersTitle: 'Zeige- und Mittelfinger:',
      otherFingersDesc: 'Werden sanft in die Handfläche gebeugt oder ruhen entspannt auf dem Punkt zwischen den Augenbrauen.',
    },
    science: {
      disclosure: 'Wissenschaftlicher Hinweis: Diese Inhalte basieren auf physiologischer Fachliteratur und klinischen Studien zur Wechselatmung. Wir vermitteln fundierte biologische Zusammenhänge kombiniert mit kostenlosen interaktiven Timern.',
      badge: '4',
      title: 'Physiologie & Wissenschaft der Wechselatmung',
      intro: 'Die heilsame Wirkung von Nadi Shodhana lässt sich durch erprobte neurologische Mechanismen erklären:',
      points: [
        {
          title: 'Der Ultradiane Nasenzyklus:',
          desc: 'Der Mensch wechselt alle 90–120 Minuten unbewusst die Hauptluftzufuhr zwischen rechtem und linkem Nasenflügel. Die Atmung durch das linke Nasenloch aktiviert die rechte Gehirnhälfte und den Parasympathikus; das rechte Nasenloch stimuliert die linke Gehirnhälfte und die Wachheit. Wechselatmung führt beide Seiten in Einklang.',
        },
        {
          title: 'Harmonisierung des Autonomen Nervensystems:',
          desc: 'Der kontrollierte Atemwiderstand regt die Barorezeptoren an, senkt den Blutdruck und verlangsamt die Herzfrequenz messbar.',
        },
        {
          title: 'Taktile Verankerung & Alpha-/Theta-Wellen:',
          desc: 'Die gezielte Fingerkoordination unterbricht Gedankenschleifen. EEG-Studien zeigen einen Anstieg von Alpha- und Theta-Wellen, die für gelassene Konzentration stehen.',
        },
      ],
      benefits: [
        {
          title: 'Stress- & Angstabbau',
          desc: 'Aktiviert den Vagusnerv für schnelle körperliche und mentale Beruhigung.',
        },
        {
          title: 'Gesteigerte Konzentration',
          desc: 'Verlangt geteilte Aufmerksamkeit und beendet mentale Zerstreutheit.',
        },
        {
          title: 'Optimierte Nasenatmung',
          desc: 'Befeuchtet die Atemwege und fördert die Freisetzung von gefäßerweiterndem Stickstoffmonoxid (NO).',
        },
        {
          title: 'Ideale Meditationsvorbereitung',
          desc: 'Schafft eine balancierte physiologische Ausgangslage vor tiefer geistiger Arbeit.',
        },
      ],
      citationsTitle: 'Wissenschaftliche Studien & Quellen',
      citations: [
        {
          authors: 'Telles, S., et al. (2013).',
          title: 'Immediate autonomic and respiratory effects of alternate nostril breathing.',
          journal: 'Medical Science Monitor Basic Research, 19, 67-72.',
          url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3681046/',
          linkText: '[PubMed / PMC]',
        },
        {
          authors: 'Sinha, A. N., et al. (2013).',
          title: 'Assessment of the immediate effect of alternate nostril breathing on autonomic functions in healthy volunteers.',
          journal: 'Journal of Clinical and Diagnostic Research.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/24381831/',
          linkText: '[PubMed]',
        },
      ],
    },
    editorial: {
      title: 'Verfasst vom HarmonyBreath-Redaktionsteam',
      desc: 'Dieser Leitfaden wurde von erfahrenen Atemlehrern und Gesundheitsexperten bei HarmonyBreath entwickelt. Wir prüfen jede Methode anhand peer-reviewter Studien und verzichten bewusst auf Heilsversprechen.',
      disclaimer: 'Dieser Inhalt dient ausschließlich Bildungszwecken und ersetzt keine ärztliche Beratung.',
      linkText: 'Mehr über unser Team erfahren',
    },
    safety: {
      title: 'Wichtige Sicherheits- & Praxisrichtlinien',
      points: [
        'Übe stets aufrecht und entspannt sitzend in einer ruhigen Umgebung.',
        'Erzwinge niemals das Atemanhalten: Atempause (Kumbhaka) ist optional und nicht für Einsteiger nötig.',
        'Nicht beim Autofahren, Schwimmen oder Bedienen von Maschinen anwenden.',
        'Bei verstopfter Nase durch Erkältung nicht mit Gewalt atmen; wechsle zur einfachen Bauchatmung.',
        'Brich die Übung sofort ab, wenn Schwindel oder Engegefühl auftreten.',
      ],
    },
    faqsTitle: 'Häufig Gestellte Fragen',
    faqsSubtitle: 'Alles Wissenswerte über Nadi Shodhana, die Wirkungsweise und die sichere Praxis.',
    faqs: [
      {
        question: 'Wofür ist Nadi Shodhana gut?',
        answer: 'Nadi Shodhana beruhigt das vegetative Nervensystem, baut akuten Stress ab, balanciert die Gehirnhälften aus und steigert die mentale Fokussierung durch den abwechselnden Atemfluss.',
      },
      {
        question: 'Was ist der Unterschied zwischen Anulom Vilom und Nadi Shodhana?',
        answer: 'Der Hauptunterschied liegt im Atemanhalten (Kumbhaka). Anulom Vilom ist eine sanfte, kontinuierliche Wechselatmung ohne Atempausen. Klassisches Nadi Shodhana ergänzt gezielte Haltephasen zur Vertiefung.',
      },
      {
        question: 'Wie oft sollte man die Wechselatmung machen?',
        answer: 'Beginne mit 5 bis 10 Runden pro Tag (etwa 5 bis 10 Minuten). Geübte praktizieren 15 bis 20 Runden. Ideal sind 1 bis 2 Einheiten täglich auf nüchternen Magen.',
      },
      {
        question: 'Ist Nadi Shodhana für jeden geeignet?',
        answer: 'Die sanfte Wechselatmung ohne Atemanhalten ist für fast jeden sicher. Personen mit unbehandeltem Bluthochdruck sollten jedoch auf längere Atempausen verzichten.',
      },
      {
        question: 'Kann ich Wechselatmung bei Schnupfen machen?',
        answer: 'Wenn ein Nasenloch stark verstopft ist, sollte kein Druck ausgeübt werden. Wechsle in diesem Fall zur regulären Zwerchfellatmung, bis die Schleimhäute frei sind.',
      },
      {
        question: 'Welches Mudra wird verwendet?',
        answer: 'Es wird Vishnu Mudra mit der rechten Hand genutzt: Der Daumen steuert das rechte Nasenloch, der Ringfinger das linke, während Zeige- und Mittelfinger entspannt gebeugt sind.',
      },
    ],
    timer: {
      ready: 'Bereit',
      pressStart: 'Start Drücken',
      cyclePrefix: 'Zyklus',
      cycleOf: 'von',
      leftNostril: 'Linkes Nasenloch',
      rightNostril: 'Rechtes Nasenloch',
      ringFinger: 'Ringfinger',
      thumb: 'Daumen',
      open: 'Offen',
      inhaling: 'EINATMEN',
      exhaling: 'AUSATMEN',
      closedThumb: 'GESCHLOSSEN (Daumen)',
      closedRing: 'GESCHLOSSEN (Ringfinger)',
      closed: 'Geschlossen',
      idleInstruction: 'Sitze aufrecht und bequem mit der rechten Hand nahe der Nase.',
      leftInhaleDirective: '👉 Rechtes Nasenloch mit DAUMEN schließen. Links sanft einatmen.',
      holdDirective: '🔒 Beide Nasenlöcher mit Daumen und Ringfinger sanft verschließen.',
      rightExhaleDirective: '👉 Links mit RINGFINGER geschlossen halten. Rechts ruhig ausatmen.',
      rightInhaleDirective: '👉 Links geschlossen halten. Rechts sanft einatmen.',
      leftExhaleDirective: '👉 Rechts mit DAUMEN schließen. Links gleichmäßig ausatmen.',
      completeDirective: 'SITZUNG BEENDET',
      completeInstruction: '✨ Großartige Praxis! Ruhe nach und spüre deinen ausgeglichenen Atem.',
      summaryTemplate: 'Ein {in}s • Halten {hold}s • Aus {out}s',
      summaryNoHoldTemplate: 'Ein {in}s • Aus {out}s • Ohne Halten',
      btnStart: 'Sitzung Starten',
      btnPause: 'Pause',
      btnResume: 'Fortsetzen',
      btnStartAgain: 'Erneut Starten',
      btnSkip: 'Schritt Überspringen',
      btnReset: 'Zurücksetzen',
      btnMusic: 'Musik',
      phaseLabels: {
        leftInhale: 'LINKS EINATMEN',
        hold: 'ATEM HALTEN',
        rightExhale: 'RECHTS AUSATMEN',
        rightInhale: 'RECHTS EINATMEN',
        leftExhale: 'LINKS AUSATMEN',
        completed: 'FERTIG',
        ready: 'BEREIT',
      },
    },
    presets: {
      sectionTitle: 'Sitzungs-Voreinstellungen',
      sectionSubtitle: 'Wähle deinen Rhythmus und die Nasenlochzeiten für die Wechselatmung.',
      customBtn: 'Eigene Zeiten & Zyklen',
      beginner: {
        name: 'Einsteiger (Standard)',
        badge: '4–4',
        desc: 'Sanfte 4s Ein / 4s Aus ohne Atemanhalten. Perfekter Einstieg.',
        rhythm: '19 Zyklen • ~5m 04s',
      },
      relaxed: {
        name: 'Entspannt',
        badge: '5–5',
        desc: 'Ruhiger 5s-Rhythmus für tiefe innere Gelassenheit.',
        rhythm: '15 Zyklen • ~5m 00s',
      },
      equal: {
        name: 'Gleichmaß',
        badge: '6–6',
        desc: 'Tiefe, gleichmäßige 6s-Atemzüge als meditative Vorbereitung.',
        rhythm: '12 Zyklen • ~4m 48s',
      },
      retention: {
        name: 'Mit Halten',
        badge: '4-4-4',
        desc: 'Fügt sanfte 4s-Atempausen zwischen den Seitenwechseln ein.',
        rhythm: '12 Zyklen • ~4m 48s',
      },
      custom: {
        name: 'Individuell',
        badge: 'Manuell',
        desc: 'Bestimme eigene Phasenzeiten und die Anzahl der Zyklen.',
      },
      cyclesTemplate: '{n} Zyklen',
    },
    customModal: {
      title: 'Eigene Nadi-Shodhana-Einstellungen',
      desc: 'Passe die Phasendauer pro Nasenloch und die Gesamtzyklen an.',
      inhaleLabel: 'Einatmungsdauer (pro Seite)',
      holdLabel: 'Optionale Atempause (Halten)',
      exhaleLabel: 'Ausatmungsdauer (pro Seite)',
      cyclesLabel: 'Gesamtzyklen (L → R → R → L)',
      noHoldText: '0s (Kein Halten)',
      secondsSuffix: 's',
      cyclesSuffix: 'Zyklen',
      cancelBtn: 'Abbrechen',
      applyBtn: 'Rhythmus Anwenden',
    },
  },

  fr: {
    metaTitle: 'Nadi Shodhana: Respiration Alternée Minuteur Pranayama',
    metaDescription: 'Pratiquez Nadi Shodhana (respiration alternée) avec notre minuteur guidé gratuit. Indicateurs de narines, rythmes ajustables et sons apaisants.',
    keywords: 'nadi shodhana, respiration alternée, anulom vilom, minuteur pranayama, exercice de respiration concentration, vishnu mudra, bienfaits nadi shodhana',
    canonicalPath: '/fr/nadi-shodhana/',
    badge: 'MOTEUR DE PRANAYAMA YOGIQUE TRADITIONNEL',
    heroTitle: 'Nadi Shodhana\nRespiration par Narines Alternées',
    heroSubtitle: 'Nadi Shodhana est une technique ancestrale de yoga qui consiste à alterner le souffle entre la narine gauche et la narine droite. Elle harmonise les hémisphères cérébraux et apaise le système nerveux.',
    breadcrumbName: 'Nadi Shodhana',
    startPracticeBtn: 'Commencer la Séance',
    jumpLinks: {
      timer: 'Minuteur',
      presets: 'Modes',
      stats: 'Statistiques',
      guide: 'Guide',
      about: 'À Propos',
      faq: 'FAQ',
    },
    overview: {
      badge: '1',
      title: 'Comprendre Nadi Shodhana',
      desc1: 'En sanskrit, Nadi Shodhana se traduit par "purification des canaux d’énergie" (nadis). L’alternance du flux d’air libère les tensions et équilibre le corps et l’esprit.',
      desc2: 'En physiologie moderne, c’est un exercice simple et accessible : en fermant doucement une narine après l’autre, vous ralentissez le rythme respiratoire et stimulez le nerf vague.',
    },
    mechanics: {
      badge: '2',
      title: 'Déroulement du Cycle Alterné',
      phaseATitle: 'Phase A — De Gauche à Droite',
      phaseAStep: 'Étape 1 & Étape 2',
      phaseADesc: 'Fermez la narine droite avec le pouce et inspirez par la narine gauche. Fermez ensuite la narine gauche avec l’annulaire, ouvrez la narine droite et expirez calmement par celle-ci.',
      phaseBTitle: 'Phase B — De Droite à Gauche',
      phaseBStep: 'Étape 3 & Étape 4',
      phaseBDesc: 'Gardez la narine gauche fermée et inspirez par la narine droite. Fermez ensuite la narine droite avec le pouce, ouvrez la gauche et expirez lentement par la narine gauche.',
      patternLabel: 'Schéma d’un Cycle Complet :',
      patternFlow: 'Inspire Gauche → Expire Droite → Inspire Droite → Expire Gauche',
    },
    mudra: {
      badge: '3',
      title: 'Position de la Main (Vishnu Mudra)',
      intro: 'Dans la tradition du pranayama, la main droite prend la position de Vishnu Mudra pour alterner les narines sans effort :',
      thumbTitle: 'Pouce Droit :',
      thumbDesc: 'Ferme doucement la narine droite lors des inspirations et expirations à gauche.',
      ringFingerTitle: 'Annulaire Droit :',
      ringFingerDesc: 'Ferme doucement la narine gauche lors des expirations et inspirations à droite.',
      otherFingersTitle: 'Index et Majeur :',
      otherFingersDesc: 'Reposent délicatement pliés dans la paume ou se posent avec légèreté sur le point entre les sourcils.',
    },
    science: {
      disclosure: 'Transparence Scientifique : Ce contenu synthétise les études cliniques et neurophysiologiques publiées sur la respiration alternée. Nous explicitons la biologie sous-jacente tout en proposant des minuteurs gratuits.',
      badge: '4',
      title: 'Physiologie & Science de Nadi Shodhana',
      intro: 'Les bienfaits de Nadi Shodhana reposent sur des mécanismes physiologiques clairement identifiés :',
      points: [
        {
          title: 'Le Cycle Nasal Ultrarien :',
          desc: 'Toutes les 90 à 120 minutes, le corps modifie naturellement la dominance de passage de l’air entre chaque narine. Respirer par la narine gauche stimule l’hémisphère droit et favorise l’apaisement parasympathique ; respirer par la droite active l’hémisphère gauche et la vigilance. L’alternance équilibre les deux hémisphères.',
        },
        {
          title: 'Équilibre du Système Nerveux Autonome :',
          desc: 'La résistance nasale contrôlée sollicite les barorécepteurs, réduisant rapidement le rythme cardiaque et la pression artérielle.',
        },
        {
          title: 'Ancrage Tactile & Synchronisation Cérébrale :',
          desc: 'L’enchaînement des étapes interrompt les ruminations. Les études EEG démontrent une augmentation des ondes alpha et thêta, reflets d’un calme lucide.',
        },
      ],
      benefits: [
        {
          title: 'Réduction Rapide du Stress',
          desc: 'Stimule le tonus vagal pour désamorcer l’agitation mentale.',
        },
        {
          title: 'Clarté Mentale & Concentration',
          desc: 'La précision gestuelle requise canalise l’attention vers l’instant présent.',
        },
        {
          title: 'Optimisation de la Respiration Nasale',
          desc: 'Réchauffe et filtre l’air tout en stimulant la production d’oxyde nitrique (NO).',
        },
        {
          title: 'Préparation à la Méditation',
          desc: 'Installe un état de sérénité idéal avant toute séance d’introspection ou de travail.',
        },
      ],
      citationsTitle: 'Études Cliniques & Références',
      citations: [
        {
          authors: 'Telles, S., et al. (2013).',
          title: 'Immediate autonomic and respiratory effects of alternate nostril breathing.',
          journal: 'Medical Science Monitor Basic Research, 19, 67-72.',
          url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3681046/',
          linkText: '[PubMed / PMC]',
        },
        {
          authors: 'Sinha, A. N., et al. (2013).',
          title: 'Assessment of the immediate effect of alternate nostril breathing on autonomic functions in healthy volunteers.',
          journal: 'Journal of Clinical and Diagnostic Research.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/24381831/',
          linkText: '[PubMed]',
        },
      ],
    },
    editorial: {
      title: 'Rédigé par l’Équipe Éditoriale d’HarmonyBreath',
      desc: 'Ce guide a été conçu par notre équipe de praticiens en respiration consciente. Nous nous appuyons sur des études vérifiées pour offrir des explications fiables et sans surenchère médicale.',
      disclaimer: 'Ce contenu est proposé à des fins éducatives et ne remplace pas une consultation médicale.',
      linkText: 'En savoir plus sur notre équipe',
    },
    safety: {
      title: 'Consignes de Sécurité & Pratique Responsable',
      points: [
        'Pratiquez toujours assis confortablement le dos droit dans un lieu paisible.',
        'Ne forcez jamais la rétention d’air : l’apnée est facultative et déconseillée aux débutants.',
        'Ne pratiquez jamais en conduisant, en nageant ou en manipulant du matériel lourd.',
        'En cas de narine bouchée par un rhume, ne forcez pas le souffle ; préférez une respiration ventrale simple.',
        'Arrêtez la séance si vous ressentez des vertiges ou une sensation d’oppression.',
      ],
    },
    faqsTitle: 'Foire Aux Questions',
    faqsSubtitle: 'Toutes les réponses pour pratiquer Nadi Shodhana en toute sécurité et avec efficacité.',
    faqs: [
      {
        question: 'À quoi sert Nadi Shodhana ?',
        answer: 'Nadi Shodhana apaise l’esprit, diminue l’anxiété, équilibre le système nerveux autonome et améliore la concentration grâce à l’alternance du flux d’air narinaire.',
      },
      {
        question: 'Quelle différence entre Anulom Vilom et Nadi Shodhana ?',
        answer: 'La différence réside dans la rétention du souffle (Kumbhaka). Anulom Vilom est une respiration alternée fluide sans apnée, idéale pour débuter. Nadi Shodhana intègre des rétentions mesurées pour approfondir la pratique.',
      },
      {
        question: 'Combien de cycles de Nadi Shodhana effectuer ?',
        answer: 'Commencez par 5 à 10 cycles par session (environ 5 à 10 minutes). Les pratiquants expérimentés font 15 à 20 cycles. Pratiquez 1 à 2 fois par jour l’estomac léger.',
      },
      {
        question: 'Nadi Shodhana convient-il à tout le monde ?',
        answer: 'La respiration alternée douce sans rétention convient à la quasi-totalité des personnes. Les personnes souffrant d’hypertension non stabilisée doivent éviter les apnées prolongées.',
      },
      {
        question: 'Puis-je pratiquer avec le nez bouché ?',
        answer: 'Si une narine est très encombrée, ne forcez pas. Attendez qu’elle se dégage et optez pour une respiration abdominale naturelle.',
      },
      {
        question: 'Quel mudra utiliser pour la main ?',
        answer: 'On utilise Vishnu Mudra avec la main droite : le pouce ferme la narine droite et l’annulaire ferme la narine gauche, les autres doigts restant détendus.',
      },
    ],
    timer: {
      ready: 'Prêt',
      pressStart: 'Appuyez sur Démarrer',
      cyclePrefix: 'Cycle',
      cycleOf: 'sur',
      leftNostril: 'Narine Gauche',
      rightNostril: 'Narine Droite',
      ringFinger: 'Annulaire',
      thumb: 'Pouce',
      open: 'Ouverte',
      inhaling: 'INSPIRATION',
      exhaling: 'EXPIRATION',
      closedThumb: 'FERMÉE (Pouce)',
      closedRing: 'FERMÉE (Annulaire)',
      closed: 'Fermée',
      idleInstruction: 'Asseyez-vous confortablement avec la main droite près du nez.',
      leftInhaleDirective: '👉 Fermez la narine droite avec le POUCE. Inspirez doucement à gauche.',
      holdDirective: '🔒 Fermez délicatement les deux narines avec pouce et annulaire.',
      rightExhaleDirective: '👉 Gardez la narine gauche fermée avec l’ANNULAIRE. Expirez à droite.',
      rightInhaleDirective: '👉 Gardez la narine gauche fermée. Inspirez doucement à droite.',
      leftExhaleDirective: '👉 Fermez la narine droite avec le POUCE. Expirez lentement à gauche.',
      completeDirective: 'SÉANCE TERMINÉE',
      completeInstruction: '✨ Belle séance ! Reposez-vous et observez votre respiration apaisée.',
      summaryTemplate: 'Inspire {in}s • Apnée {hold}s • Expire {out}s',
      summaryNoHoldTemplate: 'Inspire {in}s • Expire {out}s • Sans Apnée',
      btnStart: 'Démarrer la Séance',
      btnPause: 'Pause',
      btnResume: 'Reprendre',
      btnStartAgain: 'Recommencer',
      btnSkip: 'Passer l’Étape',
      btnReset: 'Réinitialiser',
      btnMusic: 'Musique',
      phaseLabels: {
        leftInhale: 'INSPIRE GAUCHE',
        hold: 'RÉTENTION',
        rightExhale: 'EXPIRE DROITE',
        rightInhale: 'INSPIRE DROITE',
        leftExhale: 'EXPIRE GAUCHE',
        completed: 'TERMINÉ',
        ready: 'PRÊT',
      },
    },
    presets: {
      sectionTitle: 'Préréglages de Séance',
      sectionSubtitle: 'Sélectionnez le rythme et la durée pour votre pratique de Nadi Shodhana.',
      customBtn: 'Durées Personnalisées',
      beginner: {
        name: 'Débutant (Standard)',
        badge: '4–4',
        desc: 'Rythme doux 4s inspire / 4s expire sans apnée. Idéal pour commencer.',
        rhythm: '19 cycles • ~5m 04s',
      },
      relaxed: {
        name: 'Relaxant',
        badge: '5–5',
        desc: 'Cadence apaisante de 5s pour favoriser la détente profonde.',
        rhythm: '15 cycles • ~5m 00s',
      },
      equal: {
        name: 'Rythme Équilibré',
        badge: '6–6',
        desc: 'Respirations amples de 6s pour préparer l’esprit à la méditation.',
        rhythm: '12 cycles • ~4m 48s',
      },
      retention: {
        name: 'Avec Rétention',
        badge: '4-4-4',
        desc: 'Ajoute 4s d’apnée douce entre chaque alternance narinaire.',
        rhythm: '12 cycles • ~4m 48s',
      },
      custom: {
        name: 'Personnalisé',
        badge: 'Manuel',
        desc: 'Définissez vos propres durées et le nombre de cycles souhaité.',
      },
      cyclesTemplate: '{n} cycles',
    },
    customModal: {
      title: 'Paramètres Personnalisés de Nadi Shodhana',
      desc: 'Personnalisez les durées par narine et le nombre de cycles pour votre séance.',
      inhaleLabel: 'Durée d’Inspiration (par narine)',
      holdLabel: 'Rétention Optionnelle (Apnée)',
      exhaleLabel: 'Durée d’Expiration (par narine)',
      cyclesLabel: 'Cycles Totaux (G → D → D → G)',
      noHoldText: '0s (Sans rétention)',
      secondsSuffix: 's',
      cyclesSuffix: 'Cycles',
      cancelBtn: 'Annuler',
      applyBtn: 'Appliquer le Rythme',
    },
  },

  pt: {
    metaTitle: 'Nadi Shodhana: Respiração Narinas Alternadas Temporizador',
    metaDescription: 'Pratique Nadi Shodhana (respiração alternada) com nosso temporizador guiado gratuito. Indicadores visuais de narinas, ritmos ajustáveis e foco mental.',
    keywords: 'nadi shodhana, respiracao narinas alternadas, anulom vilom, temporizador pranayama, exercicio de respiracao foco, vishnu mudra, beneficios nadi shodhana',
    canonicalPath: '/pt/nadi-shodhana/',
    badge: 'MOTOR DE PRANAYAMA IÓGICO TRADICIONAL',
    heroTitle: 'Nadi Shodhana\nRespiração das Narinas Alternadas',
    heroSubtitle: 'Nadi Shodhana é uma prática tradicional de yoga que alterna o fluxo de ar entre as narinas esquerda e direita. Seu ritmo suave promove concentração serena, equilíbrio cerebral e bem-estar.',
    breadcrumbName: 'Nadi Shodhana',
    startPracticeBtn: 'Iniciar Prática',
    jumpLinks: {
      timer: 'Temporizador',
      presets: 'Modos',
      stats: 'Estatísticas',
      guide: 'Guia',
      about: 'Sobre',
      faq: 'Perguntas',
    },
    overview: {
      badge: '1',
      title: 'Compreendendo Nadi Shodhana',
      desc1: 'Em sânscrito, Nadi Shodhana significa "purificação dos canais de energia" (nadis). Ao alternar a respiração pelas narinas, harmonizamos o fluxo vital e dissolvemos a agitação mental.',
      desc2: 'Na neurofisiologia atual, o método é direto e eficaz: ocluindo uma narina por vez, estabelece-se um ritmo que desacelera a frequência cardíaca e equilibra o sistema nervoso autônomo.',
    },
    mechanics: {
      badge: '2',
      title: 'Como Funciona o Ciclo Alternado',
      phaseATitle: 'Fase A — Da Esquerda para a Direita',
      phaseAStep: 'Passo 1 e Passo 2',
      phaseADesc: 'Feche a narina direita com o polegar e inale pela narina esquerda. Em seguida, feche a narina esquerda com o anelar, abra a direita e expire suavemente por ela.',
      phaseBTitle: 'Fase B — Da Direita para a Esquerda',
      phaseBStep: 'Passo 3 e Passo 4',
      phaseBDesc: 'Mantenha a narina esquerda fechada e inale pela narina direita. Depois, feche a narina direita com o polegar, abra a esquerda e expire pausadamente por ela.',
      patternLabel: 'Padrão do Ciclo Completo:',
      patternFlow: 'Inalar Esq → Exalar Dir → Inalar Dir → Exalar Esq',
    },
    mudra: {
      badge: '3',
      title: 'Posição da Mão (Vishnu Mudra)',
      intro: 'No pranayama tradicional, a mão direita adota Vishnu Mudra para alternar a oclusão das narinas sem cansar os músculos:',
      thumbTitle: 'Polegar Direito:',
      thumbDesc: 'Fecha suavemente a narina direita durante inalações e exalações pela narina esquerda.',
      ringFingerTitle: 'Dedo Anelar Direito:',
      ringFingerDesc: 'Fecha a narina esquerda durante exalações e inalações pela narina direita.',
      otherFingersTitle: 'Dedos Indicador e Médio:',
      otherFingersDesc: 'Podem repousar dobrados na palma da mão ou suavemente apoiados no centro da testa (ponto entre as sobrancelhas).',
    },
    science: {
      disclosure: 'Divulgação Científica e Editorial: O conteúdo desta página é fundamentado em publicações científicas e estudos clínicos sobre respiração alternada. Explicamos os processos fisiológicos reais com temporizadores gratuitos.',
      badge: '4',
      title: 'Fisiologia e Ciência de Nadi Shodhana',
      intro: 'A neurociência comprova que a respiração alternada gera transformações orgânicas mensuráveis:',
      points: [
        {
          title: 'O Ciclo Nasal Ultradiano:',
          desc: 'A cada 90–120 minutos, nosso organismo alterna espontaneamente a dominância de fluxo entre as narinas. O ar que passa pela narina esquerda estimula o hemisfério cerebral direito e o tônus parassimpático; pela direita, ativa o hemisfério esquerdo e o estado de vigília. Alternar ambas harmoniza os dois lados do cérebro.',
        },
        {
          title: 'Equilíbrio do Sistema Nervoso Autônomo:',
          desc: 'A respiração compassada estimula os barorreceptores arteriais, reduzindo os níveis de cortisol e equilibrando a pressão arterial.',
        },
        {
          title: 'Ancoragem Tátil e Ondas Alfa/Theta:',
          desc: 'A coordenação com Vishnu Mudra rompe ciclos de pensamentos acelerados. Exames de eletroencefalograma (EEG) apontam aumento expressivo de ondas cerebrais alfa e theta, que expressam calma atenta.',
        },
      ],
      benefits: [
        {
          title: 'Alívio de Estresse e Ansiedade',
          desc: 'Ativação vagal rápida para restaurar a paz mental em minutos.',
        },
        {
          title: 'Foco Mental Aprimorado',
          desc: 'A atenção exigida na alternância dissipa distrações e fortalece a concentração.',
        },
        {
          title: 'Melhora da Respiração Nasal',
          desc: 'Aquece e purifica o ar, favorecendo a liberação de óxido nítrico nas vias aéreas.',
        },
        {
          title: 'Preparação para Meditação',
          desc: 'Alinha a mente e o corpo para períodos de foco profundo ou relaxamento noturno.',
        },
      ],
      citationsTitle: 'Estudos Clínicos e Referências Científicas',
      citations: [
        {
          authors: 'Telles, S., et al. (2013).',
          title: 'Immediate autonomic and respiratory effects of alternate nostril breathing.',
          journal: 'Medical Science Monitor Basic Research, 19, 67-72.',
          url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3681046/',
          linkText: '[PubMed / PMC]',
        },
        {
          authors: 'Sinha, A. N., et al. (2013).',
          title: 'Assessment of the immediate effect of alternate nostril breathing on autonomic functions in healthy volunteers.',
          journal: 'Journal of Clinical and Diagnostic Research.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/24381831/',
          linkText: '[PubMed]',
        },
      ],
    },
    editorial: {
      title: 'Produzido pela Equipe Editorial do HarmonyBreath',
      desc: 'Este guia foi criado por nossos instrutores e redatores de bem-estar. Analisamos pesquisas revisadas por pares para trazer orientações confiáveis e livres de exageros milagrosos.',
      disclaimer: 'Este conteúdo tem finalidade estritamente informativa e não substitui orientação médica qualificada.',
      linkText: 'Conheça nossa equipe',
    },
    safety: {
      title: 'Diretrizes de Segurança e Prática Consciente',
      points: [
        'Pratique sempre sentado confortavelmente com a coluna ereta em local tranquilo.',
        'Nunca force a respiração nem prenda o ar além do seu conforto: a retenção é opcional.',
        'Não realize o exercício enquanto dirige, nada ou opera máquinas.',
        'Se estiver com congestão nasal forte por resfriado ou alergia, não force o fluxo; pratique respiração diafragmática normal.',
        'Interrompa a prática se sentir tontura, vertigem ou falta de ar.',
      ],
    },
    faqsTitle: 'Perguntas Frequentes',
    faqsSubtitle: 'Tudo o que você precisa saber para praticar Nadi Shodhana com segurança e eficiência.',
    faqs: [
      {
        question: 'Para que serve Nadi Shodhana?',
        answer: 'Nadi Shodhana reduz o estresse, equilibra o sistema nervoso autônomo, harmoniza as funções cerebrais e melhora a concentração através da alternância do ar entre as narinas.',
      },
      {
        question: 'Qual a diferença entre Anulom Vilom e Nadi Shodhana?',
        answer: 'A diferença central é a retenção do ar (Kumbhaka). Anulom Vilom é contínuo e sem pausas respiratórias, perfeito para iniciantes. Nadi Shodhana inclui retenções conscientes para intensificar a prática.',
      },
      {
        question: 'Quantos ciclos de Nadi Shodhana devo fazer?',
        answer: 'Recomenda-se iniciar com 5 a 10 ciclos por sessão (cerca de 5 a 10 minutos). Praticantes experientes fazem de 15 a 20 ciclos. Pratique de 1 a 2 vezes ao dia com o estômago vazio.',
      },
      {
        question: 'Nadi Shodhana é seguro para todos?',
        answer: 'A respiração alternada suave e sem retenções é segura para a grande maioria. Pessoas com hipertensão não controlada devem evitar apneas prolongadas.',
      },
      {
        question: 'Posso fazer a respiração alternada com o nariz entupido?',
        answer: 'Se as narinas estiverem obstruídas, não force a passagem de ar para não gerar pressão desconfortável. Faça respiração abdominal suave até o descongestionamento.',
      },
      {
        question: 'Qual posição da mão (mudra) devo usar?',
        answer: 'Utiliza-se Vishnu Mudra na mão direita: o polegar fecha a narina direita e o anelar fecha a narina esquerda, com indicador e médio repousando confortavelmente.',
      },
    ],
    timer: {
      ready: 'Pronto',
      pressStart: 'Pressione Iniciar',
      cyclePrefix: 'Ciclo',
      cycleOf: 'de',
      leftNostril: 'Narina Esquerda',
      rightNostril: 'Narina Direita',
      ringFinger: 'Dedo Anelar',
      thumb: 'Polegar',
      open: 'Aberta',
      inhaling: 'INALANDO',
      exhaling: 'EXALANDO',
      closedThumb: 'FECHADA (Polegar)',
      closedRing: 'FECHADA (Anelar)',
      closed: 'Fechada',
      idleInstruction: 'Sente-se ereto e confortável com a mão direita próxima ao nariz.',
      leftInhaleDirective: '👉 Feche a narina direita com o POLEGAR. Inale suavemente pela esquerda.',
      holdDirective: '🔒 Feche suavemente ambas as narinas com polegar e anelar.',
      rightExhaleDirective: '👉 Mantenha a esquerda fechada com o ANELAR. Exale pela direita.',
      rightInhaleDirective: '👉 Mantenha a esquerda fechada. Inale suavemente pela direita.',
      leftExhaleDirective: '👉 Feche a direita com o POLEGAR. Exale lentamente pela esquerda.',
      completeDirective: 'SESSÃO CONCLUÍDA',
      completeInstruction: '✨ Prática concluída! Descanse e sinta sua respiração harmoniosa.',
      summaryTemplate: 'Inala {in}s • Retém {hold}s • Exala {out}s',
      summaryNoHoldTemplate: 'Inala {in}s • Exala {out}s • Sem Retenção',
      btnStart: 'Iniciar Sessão',
      btnPause: 'Pausar',
      btnResume: 'Continuar',
      btnStartAgain: 'Reiniciar',
      btnSkip: 'Pular Etapa',
      btnReset: 'Redefinir',
      btnMusic: 'Música',
      phaseLabels: {
        leftInhale: 'INALAR ESQUERDA',
        hold: 'RETENÇÃO',
        rightExhale: 'EXALAR DIREITA',
        rightInhale: 'INALAR DIREITA',
        leftExhale: 'EXALAR ESQUERDA',
        completed: 'CONCLUÍDO',
        ready: 'PRONTO',
      },
    },
    presets: {
      sectionTitle: 'Modos de Sessão',
      sectionSubtitle: 'Escolha o ritmo e a duração das fases para sua prática de Nadi Shodhana.',
      customBtn: 'Tempos Personalizados',
      beginner: {
        name: 'Iniciante (Padrão)',
        badge: '4–4',
        desc: 'Ritmo suave de 4s inalar / 4s exalar sem retenção. Ideal para começar.',
        rhythm: '19 ciclos • ~5m 04s',
      },
      relaxed: {
        name: 'Relaxado',
        badge: '5–5',
        desc: 'Cadência calma de 5s para restaurar a tranquilidade e a paz interior.',
        rhythm: '15 ciclos • ~5m 00s',
      },
      equal: {
        name: 'Ritmo Equalizado',
        badge: '6–6',
        desc: 'Respirações amplas de 6s para clareza mental e meditação profunda.',
        rhythm: '12 ciclos • ~4m 48s',
      },
      retention: {
        name: 'Com Retenção',
        badge: '4-4-4',
        desc: 'Adiciona pausas gentis de 4s entre as trocas de narina.',
        rhythm: '12 ciclos • ~4m 48s',
      },
      custom: {
        name: 'Personalizado',
        badge: 'Manual',
        desc: 'Defina os segundos de cada fase e o total de ciclos desejado.',
      },
      cyclesTemplate: '{n} ciclos',
    },
    customModal: {
      title: 'Configurações de Nadi Shodhana',
      desc: 'Ajuste a duração de cada fase por narina e o total de ciclos para a sua prática.',
      inhaleLabel: 'Duração da Inalação (por narina)',
      holdLabel: 'Retenção Opcional (Pausa)',
      exhaleLabel: 'Duração da Exalação (por narina)',
      cyclesLabel: 'Ciclos Totais (Esq → Dir → Dir → Esq)',
      noHoldText: '0s (Sem retenção)',
      secondsSuffix: 's',
      cyclesSuffix: 'Ciclos',
      cancelBtn: 'Cancelar',
      applyBtn: 'Aplicar Ritmo',
    },
  },

  ja: {
    metaTitle: '片鼻呼吸法（ナディ・ショーダナ）：プラーナヤーマ・タイマー',
    metaDescription: '片鼻呼吸法（ナディ・ショーダナ／アヌロム・ヴィロム）を実践できる無料オンラインタイマー。左右の鼻腔インジケーター、呼吸リズム調整、心地よい音源、自律神経を整える科学的効果。',
    keywords: '片鼻呼吸法, ナディ・ショーダナ, アヌロム・ヴィロム, 呼吸法 タイマー, 自律神経 呼吸法, 集中力 呼吸, ヴィシュヌムドラ, 片鼻呼吸 やり方, 左右交互呼吸',
    canonicalPath: '/ja/nadi-shodhana/',
    badge: '伝統的ヨガ・プラーナーヤーマ機能',
    heroTitle: 'ナディ・ショーダナ\n片鼻呼吸法（交互呼吸）',
    heroSubtitle: 'ナディ・ショーダナは、左右の鼻腔を交互に使って呼吸を整える伝統的なヨガの呼吸法です。ゆっくりとしたリズムが左右の脳の働きをバランスさせ、心を静寂と明晰さに導きます。',
    breadcrumbName: 'ナディ・ショーダナ',
    startPracticeBtn: '呼吸法を始める',
    jumpLinks: {
      timer: 'タイマー',
      presets: 'モード',
      stats: '統計',
      guide: '実践ガイド',
      about: '科学的解説',
      faq: 'よくある質問',
    },
    overview: {
      badge: '1',
      title: 'ナディ・ショーダナとは',
      desc1: 'サンスクリット語で「ナディ」はエネルギーの通り道（気道）、「ショーダナ」は浄化を意味します。左右交互に息を通すことで、心身の乱れを整え、穏やかな集中力をもたらします。',
      desc2: '現代の生理学においても非常に実践的です。指先で片方の小鼻を軽く押さえながらゆっくりと呼吸することで、副交感神経が優位になり、心拍と血圧が安定します。',
    },
    mechanics: {
      badge: '2',
      title: '片鼻呼吸サイクルの基本ルール',
      phaseATitle: 'フェーズA — 左から右へ',
      phaseAStep: 'ステップ 1 & ステップ 2',
      phaseADesc: '親指で右の鼻孔を軽く押さえ、左の鼻孔からゆっくり息を吸います。次に薬指で左の鼻孔を閉じ、右の鼻孔を開いて穏やかに息を吐き出します。',
      phaseBTitle: 'フェーズB — 右から左へ',
      phaseBStep: 'ステップ 3 & ステップ 4',
      phaseBDesc: '左の鼻孔を閉じたまま、右の鼻孔から静かに息を吸います。続いて親指で右の鼻孔を閉じ、左の鼻孔を開いて細く長く息を吐き切ります。',
      patternLabel: '1サイクルの流れ:',
      patternFlow: '左から吸う → 右から吐く → 右から吸う → 左から吐く',
    },
    mudra: {
      badge: '3',
      title: '手の構え方（ヴィシュヌ・ムドラ）',
      intro: '伝統的な片鼻呼吸法では、右手をヴィシュヌ・ムドラの形に整えて、無理なく鼻腔を開閉します：',
      thumbTitle: '右手の親指:',
      thumbDesc: '左から吸う時・左から吐く時に、右の小鼻を軽く押さえて閉じます。',
      ringFingerTitle: '右手の薬指:',
      ringFingerDesc: '右から吐く時・右から吸う時に、左の小鼻を軽く押さえて閉じます。',
      otherFingersTitle: '人差し指と中指:',
      otherFingersDesc: '手のひら側へ軽く折りたたむか、眉間（アージニャー・チャクラ）にそっと触れて支点にします。',
    },
    science: {
      disclosure: '科学的解説と編集基準: 当ページの内容は、自律神経学および呼吸生理学の査読付き論文に基づいて作成されています。神秘主義に偏らず、身体のメカニズムに基づいた安全な呼吸法をご案内します。',
      badge: '4',
      title: '片鼻呼吸法を支える生理学とエビデンス',
      intro: 'ヨガの伝統に加え、現代の神経科学でも片鼻呼吸による明確な生理学的変化が証明されています：',
      points: [
        {
          title: 'ウルトラディアン鼻周期（ネーザル・サイクル）:',
          desc: '人間の鼻腔は、約90〜120分周期で左右の通気量が自然に入れ替わっています。左の鼻孔での呼吸は対側の右脳を刺激して副交感神経（休息）を高め、右の鼻孔での呼吸は左脳を刺激して交感神経（覚醒）を活発にします。交互に呼吸することで両半球の協調性が高まります。',
        },
        {
          title: '自律神経系のリセットと心拍の安定:',
          desc: '鼻腔による適度な吸気抵抗が圧受容器を刺激し、数分間で安静時心拍数を低下させ、過剰なストレス反応を抑制します。',
        },
        {
          title: '触覚アンカーとアルファ波・シータ波の同期:',
          desc: '指先で鼻を押さえる触覚刺激と順番の維持が、頭の中の雑念（デフォルト・モード・ネットワーク）を断ち切ります。脳波測定実験では、深いリラックスと集中を示すアルファ波およびシータ波の増大が確認されています。',
        },
      ],
      benefits: [
        {
          title: 'ストレス・不安の即時緩和',
          desc: '迷走神経を刺激し、高ぶった感情や緊張をすばやく解きほぐします。',
        },
        {
          title: '集中力と判断力の向上',
          desc: '指先の動作に意識を集中させることで、散漫になった思考がクリアになります。',
        },
        {
          title: '鼻腔環境の改善と一酸化窒素',
          desc: '鼻呼吸によって空気が加湿され、殺菌・血管拡張作用のある一酸化窒素（NO）が循環します。',
        },
        {
          title: '瞑想や作業前の最適な導入',
          desc: '心身のトーンが中庸に戻るため、仕事や瞑想に入る前の準備運動として最適です。',
        },
      ],
      citationsTitle: '参考文献・学術論文',
      citations: [
        {
          authors: 'Telles, S., et al. (2013).',
          title: 'Immediate autonomic and respiratory effects of alternate nostril breathing.',
          journal: 'Medical Science Monitor Basic Research, 19, 67-72.',
          url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3681046/',
          linkText: '[PubMed / PMC]',
        },
        {
          authors: 'Sinha, A. N., et al. (2013).',
          title: 'Assessment of the immediate effect of alternate nostril breathing on autonomic functions in healthy volunteers.',
          journal: 'Journal of Clinical and Diagnostic Research.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/24381831/',
          linkText: '[PubMed]',
        },
      ],
    },
    editorial: {
      title: 'HarmonyBreath 編集チームによる執筆・監修',
      desc: '当ガイドは、日々呼吸法を実践・研究しているHarmonyBreathの専門ライターチームによって作成されました。正確な医学論文を参照し、誇大な主張を排除した信頼できる情報をお届けします。',
      disclaimer: '本コンテンツは健康維持・教育を目的としており、医師の診断や医学的治療に代わるものではありません。',
      linkText: '編集チームについて詳しく知る',
    },
    safety: {
      title: '安全のための実践ガイドライン',
      points: [
        '静かな場所で背筋を自然に伸ばし、リラックスして座って行ってください。',
        '無理な息止めは避けてください。息止め（クンバカ）はオプションであり、初心者には不要です。',
        '車の運転中、入浴中、機械の操作中には絶対に行わないでください。',
        '風邪やアレルギーで鼻が詰まっている時は無理をせず、腹式呼吸などに切り替えてください。',
        'めまいや息苦しさを感じた場合は、直ちに中止して自然な呼吸に戻してください。',
      ],
    },
    faqsTitle: 'よくある質問',
    faqsSubtitle: 'ナディ・ショーダナの効果、頻度、安全なやり方についての回答です。',
    faqs: [
      {
        question: '片鼻呼吸法にはどのような効果がありますか？',
        answer: '左右の鼻腔を交互に通すことで自律神経のバランスを整え、ストレスや不安を和らげ、雑念を取り払って集中力を高める効果があります。',
      },
      {
        question: 'アヌロム・ヴィロムとナディ・ショーダナの違いは何ですか？',
        answer: '最も大きな違いは「息止め（クンバカ）」の有無です。アヌロム・ヴィロムは息を止めずに連続して行う優しい呼吸法で初心者向けです。ナディ・ショーダナは呼吸の合間にコントロールされた息止めを取り入れることがあります。',
      },
      {
        question: '1回に何サイクル行うべきですか？',
        answer: '最初は5〜10サイクル（約5〜10分間）から始めるのがおすすめです。慣れてきたら15〜20サイクルまで増やせます。朝や仕事の合間など、空腹時に1日1〜2回行うと効果的です。',
      },
      {
        question: '誰でも安全に行えますか？',
        answer: '息止めを行わない優しい片鼻呼吸であれば、ほとんどの方に安全です。ただし、高血圧や心臓疾患のある方、妊娠中の方は息止めを避け、自然な呼吸リズムを維持してください。',
      },
      {
        question: '鼻づまりの時でも行えますか？',
        answer: '片方の鼻が完全に詰まっている時は無理に行わないでください。無理に通そうとすると顔や喉に余計な力が入ります。鼻が通るまでは通常の腹式呼吸をおすすめします。',
      },
      {
        question: '手の形（ムドラ）はどう構えればいいですか？',
        answer: '右手でヴィシュヌ・ムドラを作ります。親指で右の鼻孔、薬指で左の鼻孔を押さえ、人差し指と中指は手のひらに軽く曲げるか、眉間にそっと添えます。',
      },
    ],
    timer: {
      ready: '準備完了',
      pressStart: 'スタートを押す',
      cyclePrefix: 'サイクル',
      cycleOf: '/',
      leftNostril: '左の鼻腔',
      rightNostril: '右の鼻腔',
      ringFinger: '薬指',
      thumb: '親指',
      open: '開く',
      inhaling: '吸う',
      exhaling: '吐く',
      closedThumb: '閉じる（親指）',
      closedRing: '閉じる（薬指）',
      closed: '閉じる',
      idleInstruction: '右手を鼻の近くに構え、背筋を伸ばして楽に座ります。',
      leftInhaleDirective: '👉 親指で右の小鼻を閉じ、左から静かに息を吸います。',
      holdDirective: '🔒 親指と薬指で両方の鼻を軽く閉じ、息を保ちます。',
      rightExhaleDirective: '👉 薬指で左を閉じたまま、右から静かに息を吐き切ります。',
      rightInhaleDirective: '👉 左を閉じたまま、右から静かに息を吸い込みます。',
      leftExhaleDirective: '👉 親指で右を閉じ、左からゆっくり息を吐き切ります。',
      completeDirective: 'セッション完了',
      completeInstruction: '✨ 素晴らしい実践でした！整った呼吸と穏やかな心を感じてみましょう。',
      summaryTemplate: '吸気 {in}秒 • 止める {hold}秒 • 呼気 {out}秒',
      summaryNoHoldTemplate: '吸気 {in}秒 • 呼気 {out}秒 • 息止めなし',
      btnStart: 'セッション開始',
      btnPause: '一時停止',
      btnResume: '再開する',
      btnStartAgain: 'もう一度行う',
      btnSkip: 'スキップ',
      btnReset: 'リセット',
      btnMusic: '音楽',
      phaseLabels: {
        leftInhale: '左から吸う',
        hold: '息を止める',
        rightExhale: '右から吐く',
        rightInhale: '右から吸う',
        leftExhale: '左から吐く',
        completed: '完了',
        ready: '準備完了',
      },
    },
    presets: {
      sectionTitle: 'セッション・プリセット',
      sectionSubtitle: '目的に合わせた呼吸リズムと秒数を選択してください。',
      customBtn: 'カスタム設定',
      beginner: {
        name: '初心者向け（標準）',
        badge: '4–4',
        desc: '息止めなしの「吸う4秒・吐く4秒」。心地よく始められる基本ペース。',
        rhythm: '19サイクル • 約5分04秒',
      },
      relaxed: {
        name: 'リラックス',
        badge: '5–5',
        desc: '少し長めの5秒リズムで、心のざわつきを鎮めて深い落ち着きへ。',
        rhythm: '15サイクル • 約5分00秒',
      },
      equal: {
        name: 'イコール・リズム',
        badge: '6–6',
        desc: 'たっぷり6秒かけた深い呼吸。瞑想や思考整理の前の準備に。',
        rhythm: '12サイクル • 約4分48秒',
      },
      retention: {
        name: '息止め（クンバカ）',
        badge: '4-4-4',
        desc: '鼻孔の切り替え時に優しい4秒の息止めを挟む応用パターン。',
        rhythm: '12サイクル • 約4分48秒',
      },
      custom: {
        name: 'カスタム',
        badge: '自由設定',
        desc: '各フェーズの秒数や総サイクル数を自由に設定できます。',
      },
      cyclesTemplate: '{n} サイクル',
    },
    customModal: {
      title: 'カスタム設定（ナディ・ショーダナ）',
      desc: '鼻腔ごとの呼吸秒数やセッションの総サイクル数を調整します。',
      inhaleLabel: '吸気時間（各鼻孔）',
      holdLabel: '息止め時間（任意）',
      exhaleLabel: '呼気時間（各鼻孔）',
      cyclesLabel: '総サイクル数（左→右→右→左）',
      noHoldText: '0秒（息止めなし）',
      secondsSuffix: '秒',
      cyclesSuffix: 'サイクル',
      cancelBtn: 'キャンセル',
      applyBtn: '設定を適用',
    },
  },

  it: {
    metaTitle: 'Nadi Shodhana: Respirazione a Narici Alternate Pranayama',
    metaDescription: 'Impara Nadi Shodhana (respirazione a narici alternate) con il nostro timer gratuito. Indicatori visivi, ritmi personalizzabili e calma profonda.',
    keywords: 'nadi shodhana, respirazione narici alternate, anulom vilom, timer pranayama, esercizi respirazione concentrazione, vishnu mudra, benefici nadi shodhana',
    canonicalPath: '/it/nadi-shodhana/',
    badge: 'MOTORE DI PRANAYAMA YOGICO TRADIZIONALE',
    heroTitle: 'Nadi Shodhana\nRespirazione a Narici Alternate',
    heroSubtitle: 'Nadi Shodhana è una tecnica yogica millenaria che alterna il flusso d’aria tra la narice sinistra e quella destra. Il suo ritmo calmo equilibra gli emisferi cerebrali e dona serenità interiore.',
    breadcrumbName: 'Nadi Shodhana',
    startPracticeBtn: 'Inizia la Pratica',
    jumpLinks: {
      timer: 'Timer',
      presets: 'Modalità',
      stats: 'Statistiche',
      guide: 'Guida',
      about: 'Approfondimento',
      faq: 'Domande',
    },
    overview: {
      badge: '1',
      title: 'Comprendere Nadi Shodhana',
      desc1: 'In sanscrito, Nadi Shodhana significa "purificazione dei canali energetici" (nadi). Alternando il respiro tra le due narici, si libera la mente e si ritrova l’armonia interiore.',
      desc2: 'Nella neurofisiologia moderna, l’esercizio è semplice e intuitivo: chiudendo delicatamente una narice alla volta, si attiva il sistema nervoso parasimpatico riducendo stress e frequenza cardiaca.',
    },
    mechanics: {
      badge: '2',
      title: 'Come Funziona la Sequenza Alternata',
      phaseATitle: 'Fase A — Da Sinistra a Destra',
      phaseAStep: 'Passo 1 & Passo 2',
      phaseADesc: 'Chiudi la narice destra con il pollice e inspira attraverso la narice sinistra. Chiudi la narice sinistra con l’anulare, apri la narice destra ed espira lentamente da essa.',
      phaseBTitle: 'Fase B — Da Destra a Sinistra',
      phaseBStep: 'Passo 3 & Passo 4',
      phaseBDesc: 'Mantieni chiusa la narice sinistra e inspira dalla narice destra. Quindi chiudi la destra con il pollice, apri la sinistra ed espira profondamente attraverso la narice sinistra.',
      patternLabel: 'Schema del Ciclo Completo:',
      patternFlow: 'Inspira Sinistra → Espira Destra → Inspira Destra → Espira Sinistra',
    },
    mudra: {
      badge: '3',
      title: 'Posizione della Mano (Vishnu Mudra)',
      intro: 'Nel pranayama classico, la mano destra assume Vishnu Mudra per controllare comodamente le narici senza affaticare il braccio:',
      thumbTitle: 'Pollice Destro:',
      thumbDesc: 'Chiude con dolcezza la narice destra durante le inspirazioni ed espirazioni a sinistra.',
      ringFingerTitle: 'Anulare Destro:',
      ringFingerDesc: 'Chiude con dolcezza la narice sinistra durante le espirazioni ed inspirazioni a destra.',
      otherFingersTitle: 'Indice e Medio:',
      otherFingersDesc: 'Restano comodamente piegati nel palmo o appoggiati con leggerezza al centro tra le sopracciglia.',
    },
    science: {
      disclosure: 'Divulgazione Scientifica ed Editoriale: Questo articolo sintetizza la letteratura medica e fisiologica sulla respirazione alternata. Il nostro obiettivo è spiegare la biologia reale accompagnandola con timer gratuiti.',
      badge: '4',
      title: 'Fisiologia e Scienza Dietro Nadi Shodhana',
      intro: 'La neuroscienza moderna dimostra effetti biologici chiari e misurabili generati da questa pratica:',
      points: [
        {
          title: 'Il Ciclo Nasale Ultradiano:',
          desc: 'Ogni 90–120 minuti, il corpo alterna spontaneamente la narice dominante. Inspirare dalla narice sinistra attiva l’emisfero destro e il tono parasimpatico (rilassamento); farlo dalla destra stimola l’emisfero sinistro e l’attenzione vigile. Alternarle sincronizza entrambe le aree cerebrali.',
        },
        {
          title: 'Riequilibrio del Sistema Nervoso Autonomo:',
          desc: 'La ventilazione lenta attraverso la resistenza nasale stimola i baroriflessi, abbassando la frequenza cardiaca a riposo e la pressione arteriosa.',
        },
        {
          title: 'Ancoraggio Tattile e Onde Alfa/Theta:',
          desc: 'La precisione richiesta con Vishnu Mudra arresta i pensieri dispersivi. Gli studi EEG rivelano un incremento di onde alfa e theta, indici di lucidità e calma vigile.',
        },
      ],
      benefits: [
        {
          title: 'Sollievo da Stress e Tensione',
          desc: 'Stimola il nervo vago per indurre una rapida distensione neuromuscolare.',
        },
        {
          title: 'Maggiore Focus e Chiarezza',
          desc: 'La concentrazione richiesta nell’alternanza elimina le distrazioni cognitive.',
        },
        {
          title: 'Respirazione Nasale Ottimizzata',
          desc: 'Purifica e umidifica l’aria, favorendo la produzione benefica di ossido nitrico.',
        },
        {
          title: 'Preparazione Ideale alla Meditazione',
          desc: 'Ristabilisce l’equilibrio fisiologico prima di sessioni di lavoro intenso o riposo.',
        },
      ],
      citationsTitle: 'Studi Clinici e Citazioni Scientifiche',
      citations: [
        {
          authors: 'Telles, S., et al. (2013).',
          title: 'Immediate autonomic and respiratory effects of alternate nostril breathing.',
          journal: 'Medical Science Monitor Basic Research, 19, 67-72.',
          url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3681046/',
          linkText: '[PubMed / PMC]',
        },
        {
          authors: 'Sinha, A. N., et al. (2013).',
          title: 'Assessment of the immediate effect of alternate nostril breathing on autonomic functions in healthy volunteers.',
          journal: 'Journal of Clinical and Diagnostic Research.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/24381831/',
          linkText: '[PubMed]',
        },
      ],
    },
    editorial: {
      title: 'A Cura del Team Editoriale di HarmonyBreath',
      desc: 'Questa guida è stata realizzata dal nostro team di ricercatori ed esperti di respirazione consapevole. Ci basiamo esclusivamente su evidenze scientifiche convalidate senza proclami medici eccessivi.',
      disclaimer: 'Questo contenuto ha scopo unicamente divulgativo e non sostituisce un parere medico professionale.',
      linkText: 'Scopri di più sul nostro team',
    },
    safety: {
      title: 'Linee Guida di Sicurezza e Pratica Corretta',
      points: [
        'Pratica sempre seduto comodamente a schiena dritta in un ambiente privo di rumori.',
        'Non forzare mai il respiro né trattenere l’aria oltre il comfort: l’apnea è opzionale.',
        'Non praticare mentre guidi, nuoti o utilizzi macchinari pesanti.',
        'Se hai il naso congestionato da raffreddore o allergia, evita di forzare l’aria; passa alla respirazione diaframmatica.',
        'Interrompi subito l’esercizio se avverti giramenti di testa, vertigini o affanno.',
      ],
    },
    faqsTitle: 'Domande Frequenti',
    faqsSubtitle: 'Tutto ciò che serve sapere per praticare Nadi Shodhana con serenità ed efficacia.',
    faqs: [
      {
        question: 'A cosa serve Nadi Shodhana?',
        answer: 'Nadi Shodhana calma la mente, riduce l’ansia, riequilibra il sistema nervoso autonomo e affina la concentrazione grazie all’alternanza del flusso respiratorio tra le narici.',
      },
      {
        question: 'Che differenza c’è tra Anulom Vilom e Nadi Shodhana?',
        answer: 'La differenza principale è la ritenzione del respiro (Kumbhaka). Anulom Vilom è continuo e senza pause, perfetto per chi inizia. Nadi Shodhana inserisce ritenzioni controllate tra le fasi per approfondire l’effetto.',
      },
      {
        question: 'Quanti cicli di Nadi Shodhana fare a sessione?',
        answer: 'Si consiglia di iniziare con 5-10 cicli (circa 5-10 minuti). Con l’esperienza si può salire a 15-20 cicli. Praticare 1 o 2 volte al giorno a stomaco vuoto offre i migliori risultati.',
      },
      {
        question: 'Nadi Shodhana è sicuro per tutti?',
        answer: 'La respirazione alternata fluida senza apnee è sicura per la maggior parte delle persone. Chi soffre di ipertensione grave dovrebbe evitare apnee prolungate.',
      },
      {
        question: 'Posso fare Nadi Shodhana con il naso chiuso?',
        answer: 'Se una narice è completamente ostruita, non forzare il respiro per non provocare tensioni. È preferibile optare per la normale respirazione diaframmatica finché il naso non si libera.',
      },
      {
        question: 'Quale posizione della mano (mudra) usare?',
        answer: 'Si usa Vishnu Mudra con la mano destra: il pollice controlla la narice destra e l’anulare la sinistra, con indice e medio comodamente rilassati.',
      },
    ],
    timer: {
      ready: 'Pronto',
      pressStart: 'Premi Avvia',
      cyclePrefix: 'Ciclo',
      cycleOf: 'di',
      leftNostril: 'Narice Sinistra',
      rightNostril: 'Narice Destra',
      ringFinger: 'Anulare',
      thumb: 'Pollice',
      open: 'Aperta',
      inhaling: 'INSPIRAZIONE',
      exhaling: 'ESPIRAZIONE',
      closedThumb: 'CHIUSA (Pollice)',
      closedRing: 'CHIUSA (Anulare)',
      closed: 'Chiusa',
      idleInstruction: 'Siediti dritto e rilassato con la mano destra vicino al naso.',
      leftInhaleDirective: '👉 Chiudi la narice destra con il POLLICE. Inspira dolcemente a sinistra.',
      holdDirective: '🔒 Chiudi con dolcezza entrambe le narici con pollice e anulare.',
      rightExhaleDirective: '👉 Tieni chiusa la sinistra con l’ANULARE. Espira da destra.',
      rightInhaleDirective: '👉 Tieni chiusa la sinistra. Inspira dolcemente da destra.',
      leftExhaleDirective: '👉 Chiudi la destra con il POLLICE. Espira lentamente da sinistra.',
      completeDirective: 'SESSIONE COMPLETATA',
      completeInstruction: '✨ Ottima pratica! Riposati e osserva il tuo respiro sereno ed equilibrato.',
      summaryTemplate: 'Inspira {in}s • Trattieni {hold}s • Espira {out}s',
      summaryNoHoldTemplate: 'Inspira {in}s • Espira {out}s • Senza Apnea',
      btnStart: 'Inizia Sessione',
      btnPause: 'Pausa',
      btnResume: 'Riprendi',
      btnStartAgain: 'Ricomincia',
      btnSkip: 'Salta Passo',
      btnReset: 'Ripristina',
      btnMusic: 'Musica',
      phaseLabels: {
        leftInhale: 'INSPIRA SINISTRA',
        hold: 'TRATTIENI',
        rightExhale: 'ESPIRA DESTRA',
        rightInhale: 'INSPIRA DESTRA',
        leftExhale: 'ESPIRA SINISTRA',
        completed: 'TERMINATO',
        ready: 'PRONTO',
      },
    },
    presets: {
      sectionTitle: 'Modalità di Sessione',
      sectionSubtitle: 'Seleziona ritmo e durata per la tua pratica di Nadi Shodhana.',
      customBtn: 'Tempi Personalizzati',
      beginner: {
        name: 'Principiante (Standard)',
        badge: '4–4',
        desc: 'Ritmo dolce 4s dentro / 4s fuori senza apnea. Ideale per cominciare.',
        rhythm: '19 cicli • ~5m 04s',
      },
      relaxed: {
        name: 'Rilassato',
        badge: '5–5',
        desc: 'Cadenza calma di 5s per favorire tranquillità e distensione mentale.',
        rhythm: '15 cicli • ~5m 00s',
      },
      equal: {
        name: 'Ritmo Equilibrato',
        badge: '6–6',
        desc: 'Respiri ampi di 6s ideali per preparare la mente alla meditazione.',
        rhythm: '12 cicli • ~4m 48s',
      },
      retention: {
        name: 'Con Apnea',
        badge: '4-4-4',
        desc: 'Aggiunge dolci apnee di 4s tra le alternanze delle narici.',
        rhythm: '12 cicli • ~4m 48s',
      },
      custom: {
        name: 'Personalizzato',
        badge: 'Manuale',
        desc: 'Configura i secondi per fase e il numero totale di cicli.',
      },
      cyclesTemplate: '{n} cicli',
    },
    customModal: {
      title: 'Impostazioni Nadi Shodhana Personalizzate',
      desc: 'Personalizza le durate per narice e i cicli complessivi per la tua sessione.',
      inhaleLabel: 'Durata Inspirazione (per narice)',
      holdLabel: 'Apnea Opzionale (Ritenzione)',
      exhaleLabel: 'Durata Espirazione (per narice)',
      cyclesLabel: 'Cicli Totali (Sin → Des → Des → Sin)',
      noHoldText: '0s (Nessuna apnea)',
      secondsSuffix: 's',
      cyclesSuffix: 'Cicli',
      cancelBtn: 'Annulla',
      applyBtn: 'Applica Ritmo',
    },
  },
};
