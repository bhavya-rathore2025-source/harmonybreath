import type { SupportedLanguage } from './ui';

export interface WimHofPhase {
  number: string;
  title: string;
  desc: string;
  specs: string[];
}

export interface WimHofPaceRound {
  badge: string;
  title: string;
  timing: string;
  desc: string;
}

export interface WimHofContent {
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
    safety: string;
    about: string;
    faq: string;
  };
  techniqueGuide: {
    tag: string;
    title: string;
    desc: string;
    phases: WimHofPhase[];
    paceTitle: string;
    paceDesc: string;
    rounds: WimHofPaceRound[];
    customNoteTitle: string;
    customNoteDesc: string;
    benefitsTag: string;
    benefitsList: string[];
  };
  safety: {
    title: string;
    subtitle: string;
    neverTitle: string;
    neverItems: string[];
    alwaysTitle: string;
    alwaysItems: string[];
    disclaimer: string;
  };
  about: {
    tag: string;
    title: string;
    subtitle: string;
    disclosureTitle: string;
    disclosureText: string;
    introP1: string;
    introP2: string;
    whatIsTitle: string;
    whatIsP1: string;
    whatIsP2: string;
    scienceTitle: string;
    scienceP1: string;
    sciencePoints: { label: string; text: string }[];
    featuresTitle: string;
    featuresP1: string;
    featuresList: { label: string; text: string }[];
    benefitsTitle: string;
    benefitsP1: string;
    benefitsList: string[];
    benefitsP2: string;
    howToUseTitle: string;
    howToUseP1: string;
    howToUseP2: string;
    howToUseP3: string;
    referencesTitle: string;
  };
  editorialBio: {
    title: string;
    desc: string;
    disclaimer: string;
    linkText: string;
  };
  faqs: { question: string; answer: string }[];
}

export const wimHofI18n: Record<SupportedLanguage, WimHofContent> = {
  en: {
    metaTitle: 'Wim Hof Breathing Timer with Guided Retention Rounds',
    metaDescription: 'Master Wim Hof method breathing with our free guided timer. Customizable breath retention holds, audio cues, and round tracking. Practice free online.',
    keywords: 'wim hof breathing timer, wim hof breathing, wim hof method, wim hof timer online, wim hof breathing technique, wim hof guided breathing, wim hof breathing methods, breathwork timer, the iceman method',
    canonicalPath: '/wim-hof/',
    badge: 'FREE GUIDED BREATHWORK & IMMUNITY ENGINE',
    heroTitle: 'The Wim Hof Method\nGuided Rounds & Retention Timer',
    heroSubtitle: 'Experience authentic three-phase Wim Hof breathing. Controlled hyperventilation, unforced retention holds, and recovery oxygenation — guided with precision, audio soundscapes, and local progress tracking.',
    breadcrumbName: 'Wim Hof Breathing',
    startPracticeBtn: 'Start Practice',
    jumpLinks: {
      timer: 'Timer',
      presets: 'Presets',
      stats: 'Stats',
      guide: 'Guide',
      safety: 'Safety',
      about: 'About',
      faq: 'FAQ',
    },
    techniqueGuide: {
      tag: 'Breathing Mechanics',
      title: 'How Wim Hof Breathing Works',
      desc: 'Master the 3-phase sequence: rhythmic deep breaths, a comfortable breath-out hold, and a recovery breath. Steady, even breathing keeps your attention on the rhythm.',
      phases: [
        {
          number: '01',
          title: 'Phase 1: Guided Breathing',
          desc: 'Take 30 deep, rhythmic breaths. Inhale deep and relaxed. Exhale naturally without forcing all the air out.',
          specs: ['• 30 Breaths Total', '• 90s Duration', '• Smooth & Continuous'],
        },
        {
          number: '02',
          title: 'Phase 2: Breath-Out Hold',
          desc: 'After the 30th exhale, stop and hold your breath on empty. Relax completely. Never force the hold beyond a comfortable limit.',
          specs: ['• 60s – 180s Duration', '• Relaxed Retention', '• Mindful Awareness'],
        },
        {
          number: '03',
          title: 'Phase 3: Recovery Breath',
          desc: 'When you feel the urge to breathe, take one full deep inhale and hold for 15 seconds, then exhale naturally.',
          specs: ['• 1 Deep Inhale', '• 15s Hold Time', '• Resets Next Round'],
        },
      ],
      paceTitle: 'Breathing Pace Progression',
      paceDesc: 'The guided breathing rhythm naturally accelerates across rounds. This progression helps you ease into the practice while building intensity.',
      rounds: [
        {
          badge: 'Round 1',
          title: 'Slow & Relaxed',
          timing: 'Inhale: 2.5s • Exhale: 1.5s (4s total cycle)',
          desc: 'Establish a comfortable rhythm. Fill the belly first, then the chest, while remaining calm and controlled.',
        },
        {
          badge: 'Round 2',
          title: 'Slightly Faster',
          timing: 'Inhale: 2s • Exhale: 1s (3s total cycle)',
          desc: 'Maintain full inhales and relaxed exhales while increasing the rhythm naturally.',
        },
        {
          badge: 'Rounds 3–5',
          title: 'Fast & Rhythmic',
          timing: 'Inhale: 1.5s • Exhale: 1s (2.5s total cycle)',
          desc: 'Keep every inhale full and every exhale relaxed without forcing. The goal is a smooth, continuous rhythm rather than shallow or rushed breathing.',
        },
      ],
      customNoteTitle: 'Custom Sessions:',
      customNoteDesc: 'Override the default progression by setting your own Breath Time (2–6 seconds per cycle) in the Custom Session settings. This applies the same timing to all rounds.',
      benefitsTag: 'Proven Practitioner Benefits',
      benefitsList: [
        'Deep Nervous System Relaxation',
        'Enhanced Mental Focus',
        'Stress Resilience',
        'Greater Body Awareness',
      ],
    },
    safety: {
      title: 'Essential Safety Guidelines',
      subtitle: 'Please read carefully before starting any breathing session.',
      neverTitle: 'NEVER Practice Wim Hof Breathing:',
      neverItems: [
        'While driving or operating any vehicle',
        'While swimming, bathing, or in water',
        'During free-diving or underwater activities',
        'While operating machinery',
        'In any situation where fainting could cause harm',
      ],
      alwaysTitle: 'ALWAYS Practice:',
      alwaysItems: [
        'Sitting comfortably on a sofa, floor, or bed',
        'Lying down in a safe, peaceful environment',
        'Listening to your body — never force retention holds',
        'Stopping immediately if experiencing chest pain or severe dizziness',
      ],
      disclaimer: 'Medical Disclaimer: HarmonyBreath is for wellness and educational purposes only. It is not medical advice. Individuals with epilepsy, high blood pressure, heart conditions, or who are pregnant should consult a qualified doctor before practicing.',
    },
    about: {
      tag: 'About Wim Hof Breathing',
      title: 'What Is the Wim Hof Breathing Method?',
      subtitle: 'Everything you need to know about the Wim Hof technique — from the science behind the method to how our guided timer helps you practice safely.',
      disclosureTitle: 'Scientific Research & Editorial Disclosure:',
      disclosureText: 'Content on this page is compiled from peer-reviewed physiological literature and clinical publications. Our goal is to explain the biological mechanisms behind breathwork while providing free, interactive guided timers.',
      introP1: "Welcome to HarmonyBreath's free Wim Hof breathing guided timer — the most comprehensive online tool for practicing the Wim Hof method from your browser. Whether you are a beginner exploring the Wim Hof breathing technique for the first time or an experienced practitioner looking for a reliable Wim Hof timer online, this tool gives you everything you need for a complete session with zero cost and no registration required.",
      introP2: 'This guide was written by the HarmonyBreath editorial team — practitioners and wellness writers who use this timer in our own daily practice and built it around how the technique actually feels. The structure, pacing, and safety guidance below reflect that hands-on experience.',
      whatIsTitle: 'What is the Wim Hof breathing method?',
      whatIsP1: 'The Wim Hof method is a breathing protocol developed by Wim Hof, known as "The Iceman." It combines three distinct phases: controlled hyperventilation (30 deep rhythmic breaths), a breath-out retention hold, and a recovery breath hold. This Wim Hof breathing technique is an energizing practice built around rhythm, focus, and holding your breath comfortably within your own limits.',
      whatIsP2: 'There are several Wim Hof breathing methods variations, but the core protocol remains consistent across all approaches. Our guided timer follows the traditional three-round structure, with each round consisting of the breathing phase, retention phase, and recovery phase. The Wim Hof guided breathing experience provided by HarmonyBreath ensures you maintain proper pacing and timing throughout every session.',
      scienceTitle: 'The science & physiology behind the Wim Hof method',
      scienceP1: 'While many practitioners use the Wim Hof Method for its energizing feel, its effects are grounded in well-documented biological mechanisms:',
      sciencePoints: [
        {
          label: 'Respiratory Alkalosis & CO2 Washout:',
          text: 'The rapid, deep breathing phase rapidly expels carbon dioxide (CO2) from the lungs. This temporary drop in blood CO2 causes blood pH to become slightly alkaline—a state known as respiratory alkalosis. Because CO2 is the primary trigger for the urge to breathe, purging it allows practitioners to comfortably hold their breath out for significantly longer durations.',
        },
        {
          label: 'Intermittent Hypoxia:',
          text: 'During the unforced breath-out retention hold, arterial oxygen levels (SpO2) gradually decrease. This brief, controlled exposure to low oxygen levels (intermittent hypoxia) triggers adaptive cellular mechanisms and trains respiratory resilience without causing harm when practiced safely seated or lying down.',
        },
        {
          label: 'Sympathetic Activation & Epinephrine Surge:',
          text: 'Hyperventilation paired with hypoxia activates the sympathetic nervous system, inducing a temporary spike in endogenous epinephrine (adrenaline) and norepinephrine. This hormonal surge accounts for the immediate mental clarity, intense focus, and physical warmth experienced during and after a session.',
        },
        {
          label: 'Immune System Modulation:',
          text: 'A landmark randomized trial conducted at Radboud University (Kox et al., 2014, PNAS) demonstrated that practitioners of the Wim Hof Method could voluntarily influence their sympathetic nervous system and innate immune response, showing lower pro-inflammatory cytokine responses during endotoxin challenge.',
        },
      ],
      featuresTitle: 'Features of our Wim Hof breathing timer',
      featuresP1: 'Our Wim Hof timer online is built with practitioners in mind, offering a complete set of features that make it the best Wim Hof breathing tool available:',
      featuresList: [
        {
          label: 'Three-Phase Guided Sessions:',
          text: 'Every session follows the authentic protocol — guided breathing, breath-out hold, and recovery breath — with real-time audio cues and visual progress indicators.',
        },
        {
          label: 'Adjustable Difficulty Presets:',
          text: 'Choose from Beginner (60-second hold, 3 rounds), Intermediate (90-second hold, 4 rounds), Advanced (120-second hold, 5 rounds), or Expert (150-second hold, 5 rounds). Each preset automatically increases retention difficulty across rounds.',
        },
        {
          label: 'Fully Customizable Sessions:',
          text: 'Override every parameter — set your own breath count, retention hold duration, breath cycle timing, and number of rounds. This makes the Wim Hof guided breathing experience adaptable to any skill level.',
        },
        {
          label: 'Audio Cues & Background Music:',
          text: 'Choose from multiple ambient soundtracks for each phase of your practice. Audio cues signal inhale and exhale timing, helping you maintain rhythm without watching the screen.',
        },
        {
          label: 'Progress Tracking:',
          text: 'Your session history, total rounds completed, and personal best retention hold are saved locally in your browser. Track your improvement over time as you deepen your Wim Hof breathing practice.',
        },
        {
          label: 'Privacy-First Design:',
          text: 'All data stays on your device. No accounts, no sign-ups, no data collection. Just you and your breath.',
        },
      ],
      benefitsTitle: 'Wim Hof breathing benefits',
      benefitsP1: 'The Wim Hof breathing benefits are what draw millions of practitioners worldwide. In our own practice and in feedback from the wider community, regular practice of the Wim Hof method consistently brings:',
      benefitsList: [
        'An energizing, invigorating way to start the day',
        'A mental training ground for focus, willpower, and staying calm under challenge',
        'A boost of energy and alertness that many find lasting through the day',
        'A tool for building comfort with the sensation of breath hold',
        'A ritual that many pair with cold exposure to build resilience',
        'Consistent practice builds familiarity with your own breathing and limits',
      ],
      benefitsP2: 'Consistent practice using our Wim Hof guided breathing timer helps you explore these Wim Hof breathing benefits at your own pace. The structured format ensures proper pacing, while the customizable difficulty levels let you progress gradually.',
      howToUseTitle: 'How to use this Wim Hof breathing timer',
      howToUseP1: 'Using the Wim Hof timer online is straightforward. Select your difficulty preset — Beginner is recommended for first-time practitioners — then press Start Session. The timer will guide you through three complete rounds of the Wim Hof breathing technique. Each round includes 30 deep inhalations and exhalations, a breath-out hold where you retain after exhaling, and a final 15-second recovery hold before advancing. The on-screen visual cues, expanding breath halo, and audio signals keep you synchronized with the correct rhythm.',
      howToUseP2: 'For advanced users, the Custom Preset option unlocks full control over your session parameters. Adjust the breath count (15-60 breaths), retention hold (30-300 seconds), breath cycle speed (2.5-6 seconds per breath), and total rounds (1-10). This flexibility makes our tool suitable for all Wim Hof breathing methods and personal preferences.',
      howToUseP3: 'Always practice the Wim Hof method in a safe environment — seated or lying down — and never push your breath hold beyond a comfortable limit. Review the safety guidelines below before your first session.',
      referencesTitle: 'Scientific References & Cited Studies',
    },
    editorialBio: {
      title: 'Written by the HarmonyBreath Editorial Team',
      desc: 'This guide was created by our in-house editorial team of breathwork practitioners and wellness writers, the same people who build and use the HarmonyBreath timers in their daily practice. We research each technique carefully, test the guidance ourselves, and keep every article clear, honest, and free of medical overreach.',
      disclaimer: 'This content is for educational purposes only and is not a substitute for professional medical advice.',
      linkText: 'Learn more about our team',
    },
    faqs: [
      {
        question: 'Why is Wim Hof breathing so powerful?',
        answer: 'Wim Hof breathing is powerful because it pairs deep rhythmic breathing with breath holds, producing a distinct, full-body sensation that many people find energizing and mentally sharpening. The structured rhythm keeps your attention focused, and gradually building up to longer holds over time is a genuine mental and physical challenge that many practitioners find rewarding.',
      },
      {
        question: 'How do I start the Wim Hof Method?',
        answer: 'To start the Wim Hof Method, begin with the breathing technique: find a comfortable seated or lying position and use a guided timer like HarmonyBreath to complete 3 rounds of 30 deep breaths, breath-out retention, and recovery holds. Once comfortable with breathing, gradually introduce cold exposure by ending your regular shower with 15–30 seconds of cold water, slowly increasing the duration over time. Consistency matters more than intensity — build a daily practice at a pace that feels sustainable.',
      },
      {
        question: "Is Wim Hof's breathing technique healthy?",
        answer: 'For most healthy people, Wim Hof breathing is safe when practiced correctly and in a safe environment, and it is widely used as an energizing daily ritual. However, it should not be performed before or during swimming, driving, or any activity where loss of consciousness could be dangerous. Individuals with epilepsy, cardiovascular conditions, or who are pregnant should consult a doctor before practicing. Always practice seated or lying down and never force the breath hold beyond your comfort level.',
      },
      {
        question: 'Who is Wim Hof?',
        answer: "Wim Hof, also known as 'The Iceman,' is a Dutch extreme athlete and the creator of the Wim Hof Method. He is famous for his ability to withstand extreme cold and has set numerous world records, including climbing Mount Kilimanjaro in shorts and running a half marathon above the Arctic Circle barefoot. His method combines breathing techniques, cold exposure, and meditation to improve physical and mental well-being.",
      },
      {
        question: 'What is Wim Hof Breathing?',
        answer: 'Wim Hof Breathing is a powerful breathing technique that forms the core of the Wim Hof Method. It consists of three phases: controlled hyperventilation through 30 deep rhythmic breaths, a breath-out retention hold where you hold your lungs empty, and a recovery breath hold at full inhalation. The rapid breathing followed by stillness creates a distinct, full-body sensation that many practitioners find energizing and mentally sharpening.',
      },
      {
        question: 'What Does Wim Hof Breathing Do?',
        answer: 'Wim Hof Breathing combines deep rhythmic breaths with breath retention, creating a full-body sensation that many people find energizing and mentally sharpening. Regular practice helps you become more familiar with your breathing and build comfort with holds, while providing a daily ritual for focus, energy, and self-discipline.',
      },
      {
        question: 'How to Do Wim Hof Breathing?',
        answer: 'To practice Wim Hof Breathing, find a comfortable seated or lying position in a safe environment. Each round consists of 30 deep breaths — inhale fully through the nose or mouth and exhale without force. After the last exhalation, hold your breath out for as long as comfortable. When you feel the urge to breathe, take a full recovery breath and hold for 15 seconds. This completes one round, and beginners typically perform 3 rounds. Always listen to your body and never force the breath hold.',
      },
      {
        question: 'Can you do Wim Hof breathing before sleep?',
        answer: 'While Wim Hof breathing temporarily increases adrenaline and alertness (making it ideal for mornings), many practitioners use gentle rounds before bed to quiet mental chatter and relax deeply. If practicing at night, maintain an easy, unforced rhythm, avoid straining during breath holds, and follow your session with a few minutes of slow nasal breathing (like 4-7-8) to ease into sleep. Always practice lying down safely in bed.',
      },
      {
        question: 'Can you do 10 rounds of Wim Hof breathing?',
        answer: 'Yes, experienced practitioners occasionally perform extended sessions up to 10 rounds using our customizable timer. However, beginners should always start with 3 to 4 rounds. When doing extended sessions like 10 rounds, always stay lying down in a safe environment, stay hydrated, never force the retention holds, and give yourself ample time to rest and integrate afterward.',
      },
    ],
  },

  es: {
    metaTitle: 'Método Wim Hof: Temporizador Guiado de Rondas y Retención',
    metaDescription: 'Domina el método respiratorio y meditación Wim Hof con nuestro temporizador guiado en español. 30 respiraciones, retención y recuperación para energía y calma.',
    keywords: 'respiracion wim hof, metodo wim hof, meditacion wim hof, metodo respiratorio wim hof, wim hof en español, wim hof respiraciones, tecnica de respiracion wim hof, metodo wim hof respiracion, temporizador wim hof, respiracion wim hof guiada, beneficios metodo wim hof, ejercicios de respiracion wim hof, respiracion iceman wim hof, retencion de respiracion, como hacer el metodo wim hof',
    canonicalPath: '/es/wim-hof/',
    badge: 'RESPIRACIÓN GUIADA Y ACTIVACIÓN FISIOLÓGICA GRATIS',
    heroTitle: 'Método Wim Hof\nDomina Mente y Fisiología',
    heroSubtitle: 'Experimenta el método respiratorio y meditación en tres fases de Wim Hof: hiperventilación rítmica controlada, retención cómoda con pulmones vacíos y oxigenación de recuperación. Todo guiado en español con sonido, halo visual y seguimiento privado.',
    breadcrumbName: 'Respiración Wim Hof',
    startPracticeBtn: 'Comenzar Práctica',
    jumpLinks: {
      timer: 'Temporizador',
      presets: 'Modos',
      stats: 'Estadísticas',
      guide: 'Guía',
      safety: 'Seguridad',
      about: 'Acerca de',
      faq: 'Preguntas',
    },
    techniqueGuide: {
      tag: 'Mecánica de la Respiración',
      title: 'Cómo Funciona la Respiración Wim Hof Paso a Paso',
      desc: 'Domina la secuencia de 3 fases: respiraciones rítmicas profundas, retención cómoda con pulmones vacíos y respiración de recuperación. Una respiración constante y relajada mantiene tu concentración en el ritmo.',
      phases: [
        {
          number: '01',
          title: 'Fase 1: Respiración Guiada',
          desc: 'Realiza 30 inhalaciones profundas y rítmicas hacia el abdomen y pecho. Exhala de forma natural y suelta sin forzar.',
          specs: ['• 30 Respiraciones', '• ~90 seg Duración', '• Fluido y Continuo'],
        },
        {
          number: '02',
          title: 'Fase 2: Retención en Vacío (Apnea)',
          desc: 'Tras la 30ª exhalación suave, detén la respiración con los pulmones vacíos. Relájate por completo y nunca fuerces el límite.',
          specs: ['• 60s – 180s Retención', '• Retención Relajada', '• Calma Mental'],
        },
        {
          number: '03',
          title: 'Fase 3: Respiración de Recuperación',
          desc: 'Cuando sientas la necesidad de respirar, inhala profundamente al 100% y retén el aire durante 15 segundos antes de soltarlo.',
          specs: ['• 1 Inhalación Plena', '• 15s de Retención', '• Reinicia la Siguiente Ronda'],
        },
      ],
      paceTitle: 'Progresión del Ritmo Respiratorio',
      paceDesc: 'El ritmo guiado se acelera sutilmente en cada ronda. Esta progresión natural te permite entrar en calor con suavidad y profundizar en la intensidad.',
      rounds: [
        {
          badge: 'Ronda 1',
          title: 'Lenta y Relajada',
          timing: 'Inhalación: 2,5s • Exhalación: 1,5s (ciclo de 4s)',
          desc: 'Establece un ritmo cómodo. Llena primero el abdomen y luego el pecho, con calma y sin prisas.',
        },
        {
          badge: 'Ronda 2',
          title: 'Ligeramente Más Rápida',
          timing: 'Inhalación: 2s • Exhalación: 1s (ciclo de 3s)',
          desc: 'Mantén inhalaciones profundas y exhalaciones relajadas aumentando el ritmo de forma orgánica.',
        },
        {
          badge: 'Rondas 3–5',
          title: 'Dinámica y Rítmica',
          timing: 'Inhalación: 1,5s • Exhalación: 1s (ciclo de 2,5s)',
          desc: 'Inhalaciones completas y exhalaciones fluidas. La clave es un flujo continuo como una ola en el mar.',
        },
      ],
      customNoteTitle: 'Sesiones Personalizadas:',
      customNoteDesc: 'Puedes personalizar la velocidad de respiración (2 a 6 segundos por ciclo), el número de respiraciones y el tiempo de retención en el panel de Modo Personalizado.',
      benefitsTag: 'Beneficios Experimentados',
      benefitsList: [
        'Relajación profunda del sistema nervioso',
        'Claridad mental y concentración agudizada',
        'Mayor resiliencia frente al estrés',
        'Profunda conexión cuerpo-mente',
      ],
    },
    safety: {
      title: 'Pautas Esenciales de Seguridad',
      subtitle: 'Por favor, lee atentamente antes de comenzar cualquier práctica de respiración.',
      neverTitle: 'NUNCA Practiques la Respiración Wim Hof:',
      neverItems: [
        'Al conducir o manejar cualquier vehículo',
        'Al nadar, bañarte o estar dentro del agua',
        'Durante actividades de buceo, apnea o bajo el agua',
        'Al operar maquinaria pesada o peligrosa',
        'En cualquier situación donde un mareo o pérdida de consciencia cause peligro',
      ],
      alwaysTitle: 'SIEMPRE Practica:',
      alwaysItems: [
        'Sentado cómodamente en un sofá, alfombra o cama',
        'Tumbado en un lugar seguro y tranquilo',
        'Escuchando a tu cuerpo: jamás fuerces la retención sin aire',
        'Deteniéndote de inmediato si sientes dolor en el pecho o mareo excesivo',
      ],
      disclaimer: 'Aviso Médico: HarmonyBreath es solo para fines educativos y de bienestar. No constituye asesoramiento médico. Personas con epilepsia, presión arterial alta, afecciones cardíacas o mujeres embarazadas deben consultar a un médico antes de realizar esta práctica.',
    },
    about: {
      tag: 'Sobre el Método Wim Hof',
      title: '¿Qué es el Método de Respiración Wim Hof?',
      subtitle: 'Todo lo que necesitas saber sobre la técnica Wim Hof: la evidencia biológica, los beneficios inmunológicos y cómo nuestro temporizador interactivo te ayuda a practicar con seguridad.',
      disclosureTitle: 'Compromiso Editorial e Investigación Científica:',
      disclosureText: 'El contenido de esta guía se basa en literatura fisiológica revisada por pares y ensayos clínicos. Nuestro propósito es divulgar la ciencia biológica de la respiración proporcionando herramientas gratuitas de máxima calidad.',
      introP1: 'Bienvenido al temporizador guiado gratuito del Método Wim Hof de HarmonyBreath: la herramienta web más completa para realizar tus sesiones de respiración desde cualquier navegador. Ya seas un principiante dando sus primeros pasos o un practicante experimentado que busca un cronómetro de apnea preciso y personalizable, aquí tienes todo lo necesario sin coste alguno ni registro.',
      introP2: 'Esta guía fue desarrollada por el equipo editorial de HarmonyBreath, integrado por practicantes diarios de técnicas respiratorias y redactores de salud preventiva que crearon esta herramienta basándose en cómo se experimenta realmente la técnica.',
      whatIsTitle: '¿En qué consiste la técnica de respiración Wim Hof?',
      whatIsP1: 'El Método Wim Hof fue desarrollado por el atleta holandés Wim Hof, conocido mundialmente como "The Iceman" (El Hombre de Hielo). Combina tres fases: hiperventilación rítmica controlada (30 inhalaciones profundas), una retención pulmonar en vacío (apnea espiratoria) y una respiración de recuperación con pulmones llenos.',
      whatIsP2: 'Aunque existen variaciones, la estructura clásica de tres o cuatro rondas es la más eficaz. Nuestro temporizador reproduce fielmente esta estructura asegurando que mantengas los tiempos ideales en cada ciclo.',
      scienceTitle: 'La Ciencia y Fisiología Detrás del Método Wim Hof',
      scienceP1: 'Aunque muchas personas utilizan el método por su potente efecto energizante, sus beneficios están respaldados por rigurosos mecanismos fisiológicos:',
      sciencePoints: [
        {
          label: 'Alcalosis Respiratoria y Eliminación de CO2:',
          text: 'Las respiraciones profundas y continuas expulsan rápidamente el dióxido de carbono (CO2) de la sangre, aumentando ligeramente el pH sanguíneo (alcalosis respiratoria transitoria). Como el CO2 es el principal disparador del reflejo de respirar, su disminución permite retener el aire cómodamente durante mucho más tiempo.',
        },
        {
          label: 'Hipoxia Intermitente Controlada:',
          text: 'Durante la retención con pulmones vacíos, la saturación de oxígeno (SpO2) desciende brevemente. Esta hipoxia intermitente controlada activa adaptaciones celulares beneficiosas y entrena la resiliencia respiratoria de forma segura al estar sentado o recostado.',
        },
        {
          label: 'Liberación de Adrenalina y Activación Simpática:',
          text: 'La combinación de hiperventilación y retención desencadena un pico beneficioso de epinefrina (adrenalina) endógena, lo que produce una sensación inmediata de alerta mental, calor corporal y lucidez.',
        },
        {
          label: 'Modulación del Sistema Inmunitario:',
          text: 'En un célebre estudio clínico de la Universidad de Radboud (Kox et al., 2014, PNAS), se demostró que los practicantes del Método Wim Hof podían modular voluntariamente su respuesta inmunitaria innata, registrando niveles significativamente menores de citoquinas proinflamatorias.',
        },
      ],
      featuresTitle: 'Características de Nuestro Temporizador Wim Hof Online',
      featuresP1: 'Diseñado meticulosamente para ofrecer la mejor experiencia de respiración interactiva:',
      featuresList: [
        {
          label: 'Sesiones Guiadas en 3 Fases:',
          text: 'Sigue el protocolo auténtico con halo visual de respiración y campanas sonoras precisas en cada cambio de fase.',
        },
        {
          label: 'Modos de Dificultad Adaptativos:',
          text: 'Principiante (60s de retención, 3 rondas), Intermedio (90s, 4 rondas), Avanzado (120s, 5 rondas) y Experto (150s, 5 rondas).',
        },
        {
          label: 'Modo 100% Personalizable:',
          text: 'Ajusta el número de respiraciones (15 a 60), tiempo de retención (30s a 300s), velocidad del ciclo (2.5s a 6s) y rondas totales.',
        },
        {
          label: 'Paisajes Sonoros y Señales de Audio:',
          text: 'Música ambiental envolvente y señales acústicas para practicar con los ojos cerrados sin necesidad de mirar la pantalla.',
        },
        {
          label: 'Estadísticas Locales y Privacidad Absoluta:',
          text: 'Tus récords de apnea, rondas completadas e historial quedan guardados exclusivamente en tu navegador, sin enviar datos a servidores externos.',
        },
      ],
      benefitsTitle: 'Beneficios de la Respiración Wim Hof',
      benefitsP1: 'La práctica constante de la técnica de respiración Wim Hof ofrece beneficios constatados tanto por la ciencia como por millones de practicantes:',
      benefitsList: [
        'Energía limpia y despertar inmediato por las mañanas sin necesidad de cafeína',
        'Entrenamiento de la fuerza de voluntad, enfoque mental y calma bajo presión',
        'Mejora de la tolerancia al estrés y regulación del sistema nervioso autónomo',
        'Mayor familiaridad y comodidad con la sensación de retención del aire',
        'Sinergia perfecta con duchas frías para aumentar la inmunidad y vitalidad',
        'Mayor consciencia somática y control respiratorio en la vida diaria',
      ],
      benefitsP2: 'Nuestro temporizador guiado te permite explorar estos beneficios a tu propio ritmo, progresando ronda a ronda con total comodidad y seguridad.',
      howToUseTitle: 'Cómo Usar Este Temporizador de Respiración Wim Hof',
      howToUseP1: 'Comenzar es muy sencillo: selecciona tu nivel de dificultad (recomendamos Principiante para tu primera vez) y haz clic en "Comenzar Práctica". El temporizador te guiará en cada fase con animaciones y sonido envolvente.',
      howToUseP2: 'Para usuarios con experiencia, el modo personalizado permite adaptar cada segundo a tu capacidad pulmonar y objetivos de entrenamiento.',
      howToUseP3: 'Recuerda siempre practicar en un entorno seguro, sentado o recostado, y nunca forzar la retención más allá de tu zona de confort.',
      referencesTitle: 'Referencias Científicas y Ensayos Clínicos',
    },
    editorialBio: {
      title: 'Elaborado por el Equipo Editorial de HarmonyBreath',
      desc: 'Esta guía fue desarrollada por nuestro equipo de especialistas en respiración funcional y redactores de salud. Investigamos cada técnica con rigor científico, la probamos personalmente y la exponemos con honestidad, sin exageraciones ni promesas médicas infundadas.',
      disclaimer: 'Este contenido es de carácter exclusivamente divulgativo y no reemplaza la atención de profesionales de la salud.',
      linkText: 'Conoce más sobre nuestro equipo y misión',
    },
    faqs: [
      {
        question: '¿Por qué la respiración Wim Hof es tan potente?',
        answer: 'La respiración Wim Hof es potente porque combina una hiperventilación controlada con retenciones en vacío y recuperación. Esta alternancia altera temporalmente la química sanguínea (alcalosis respiratoria e hipoxia intermitente), liberando adrenalina y produciendo una intensa sensación de energía, calor y lucidez mental.',
      },
      {
        question: '¿Cómo empezar con el Método Wim Hof de forma segura?',
        answer: 'Comienza sentado o tumbado cómodamente en un lugar tranquilo. Utiliza nuestro temporizador guiado para realizar 3 rondas en nivel Principiante (30 respiraciones y retención de 60 segundos o hasta que sientas el primer impulso suave de respirar). Cuando te sientas cómodo, puedes complementar la práctica terminando tu ducha diaria con 15 a 30 segundos de agua fría.',
      },
      {
        question: '¿Es segura la respiración Wim Hof para la salud?',
        answer: 'Para la gran mayoría de personas sanas, es completamente segura cuando se realiza en un lugar seguro (sentado o tumbado en cama o sofá). Sin embargo, NUNCA debe practicarse en el agua (piscina, baño, mar) ni al conducir, ya que un mareo o pérdida momentánea del conocimiento podría ser fatal. Personas con problemas cardíacos, epilepsia o mujeres embarazadas deben consultar a su médico.',
      },
      {
        question: '¿Quién es Wim Hof ("The Iceman")?',
        answer: 'Wim Hof es un atleta extremo y conferenciante holandés famoso por su capacidad para resistir el frío extremo, con múltiples récords Guinness. Desarrolló el Método Wim Hof combinando técnicas de respiración consciente, exposición gradual al frío y enfoque mental para optimizar el bienestar físico y psicológico.',
      },
      {
        question: '¿Qué es exactamente la respiración Wim Hof?',
        answer: 'Es el pilar fundamental del Método Wim Hof. Consiste en ciclos estructurados en tres fases: 30 respiraciones profundas continuas, una retención prolongada con pulmones vacíos tras la última exhalación y una respiración final de recuperación de 15 segundos con pulmones llenos.',
      },
      {
        question: '¿Qué efectos produce la técnica Wim Hof en el cuerpo?',
        answer: 'Aumenta la oxigenación celular, reduce transitoriamente los niveles de CO2 en sangre, genera un pico beneficioso de adrenalina y estimula el sistema nervioso simpático para activar defensas y otorgar energía y claridad mental duradera.',
      },
      {
        question: '¿Cómo hacer la respiración Wim Hof paso a paso?',
        answer: '1. Adopta una postura cómoda sentado o tumbado. 2. Inhala profundamente por la nariz o boca llenando abdomen y pecho, y suelta el aire sin forzar (30 veces). 3. En la última exhalación, vacía los pulmones suavemente y aguanta sin aire el tiempo que te resulte cómodo. 4. Cuando sientas ganas de respirar, inhala profundamente y mantén el aire 15 segundos. Eso completa 1 ronda (lo ideal son 3 o 4 rondas).',
      },
      {
        question: '¿La respiración Wim Hof sirve como meditación y método respiratorio diario?',
        answer: 'Sí, la meditación Wim Hof combina el método respiratorio de 30 respiraciones con un estado de presencia plena y quietud durante las fases de retención. Miles de personas la utilizan como meditación matutina para calmar la mente, reducir el estrés y conectar profundamente con su cuerpo.',
      },
    ],
  },

  de: {
    metaTitle: 'Wim-Hof-Methode: Geführter Timer für Runden & Anhalten',
    metaDescription: 'Meistere die Wim-Hof-Atemtechnik mit unserem kostenlosen Online-Timer. 30 tiefe Atemzüge, Retention und Erholungsatem für Energie und Fokus.',
    keywords: 'wim hof atmung, wim hof methode, wim hof atemtechnik, wim hof timer, wim hof atmung anleitung, wim hof atmung vorteile, wim hof geführte atmung, atemübung wim hof, eisbrecher methode atmung, wim hof methode lernen, iceman atmung',
    canonicalPath: '/de/wim-hof/',
    badge: 'KOSTENLOSE GEFÜHRTE ATEMÜBUNG & ENERGIE-ENGINE',
    heroTitle: 'Die Wim-Hof-Methode\nMeistere Geist & Physiologie',
    heroSubtitle: 'Erlebe die authentische Drei-Phasen-Atmung nach Wim Hof: Rhythmisches tiefes Einatmen, entspanntes Atemanhalten auf leerer Lunge und Sauerstoff-Erholungsphase. Präzise geführt mit Audio-Klängen und privater Fortschrittsmessung.',
    breadcrumbName: 'Wim-Hof-Atmung',
    startPracticeBtn: 'Übung Starten',
    jumpLinks: {
      timer: 'Timer',
      presets: 'Modi',
      stats: 'Statistik',
      guide: 'Anleitung',
      safety: 'Sicherheit',
      about: 'Über',
      faq: 'FAQ',
    },
    techniqueGuide: {
      tag: 'Atemmechanik',
      title: 'So funktioniert die Wim-Hof-Atmung',
      desc: 'Meistere den 3-Phasen-Ablauf: rhythmische tiefe Atemzüge, entspanntes Halten nach dem Ausatmen und ein erfrischender Erholungsatemzug.',
      phases: [
        {
          number: '01',
          title: 'Phase 1: Geführtes Atmen',
          desc: 'Mache 30 tiefe, rhythmische Atemzüge. Atme tief in Bauch und Brust ein und lasse den Atem ganz natürlich wieder los.',
          specs: ['• 30 Atemzüge', '• ~90 Sek. Dauer', '• Fließend & gleichmäßig'],
        },
        {
          number: '02',
          title: 'Phase 2: Atemanhalten (Retention)',
          desc: 'Nach dem 30. Ausatmen stoppst du und hältst den Atem mit leerer Lunge an. Entspanne dich vollkommen und erzwinge nichts.',
          specs: ['• 60s – 180s Haltezeit', '• Entspannte Retention', '• Innere Ruhe'],
        },
        {
          number: '03',
          title: 'Phase 3: Erholungsatemzug',
          desc: 'Sobald der Atemimpuls kommt, atme voll ein und halte den Atem für 15 Sekunden an, bevor du normal weiteratmest.',
          specs: ['• 1 tiefer Einatmer', '• 15s Haltezeit', '• Vorbereitung Runde'],
        },
      ],
      paceTitle: 'Atmungstempo-Progression',
      paceDesc: 'Der Atemrhythmus beschleunigt sich von Runde zu Runde auf natürliche Weise. Das erleichtert den Einstieg und intensiviert das Erlebnis.',
      rounds: [
        {
          badge: 'Runde 1',
          title: 'Ruhig & entspannt',
          timing: 'Einatmen: 2,5s • Ausatmen: 1,5s (4s Zyklus)',
          desc: 'Finde einen gleichmäßigen Rhythmus. Fülle erst den Bauch, dann die Brust, völlig ohne Hektik.',
        },
        {
          badge: 'Runde 2',
          title: 'Etwas zügiger',
          timing: 'Einatmen: 2s • Ausatmen: 1s (3s Zyklus)',
          desc: 'Behalte tiefe Einatmungen und gelöstes Ausatmen bei, während sich der Rhythmus natürlich steigert.',
        },
        {
          badge: 'Runden 3–5',
          title: 'Rhythmisch & dynamisch',
          timing: 'Einatmen: 1,5s • Ausatmen: 1s (2,5s Zyklus)',
          desc: 'Voll einatmen, locker loslassen. Der Atem fließt kontinuierlich und mühelos wie eine Meereswelle.',
        },
      ],
      customNoteTitle: 'Eigene Einstellungen:',
      customNoteDesc: 'Passe die Atemzeit pro Zyklus (2 bis 6 Sekunden), Atemzuganzahl und Retention-Dauer nach deinen Bedürfnissen an.',
      benefitsTag: 'Erprobte Vorteile',
      benefitsList: [
        'Tiefe Entspannung des Nervensystems',
        'Gesteigerte mentale Wachheit und Konzentration',
        'Stärkere Stressresilienz im Alltag',
        'Verbessertes Körper- und Atembewusstsein',
      ],
    },
    safety: {
      title: 'Wichtige Sicherheitsrichtlinien',
      subtitle: 'Bitte vor jeder Atemsitzung aufmerksam durchlesen.',
      neverTitle: 'Übe die Wim-Hof-Atmung NIEMALS:',
      neverItems: [
        'Beim Autofahren oder Bedienen von Fahrzeugen',
        'Beim Schwimmen, Baden oder im Wasser',
        'Beim Freitauchen oder unter Wasser',
        'Beim Bedienen schwerer Maschinen',
        'In Situationen, in denen Ohnmacht zu Verletzungen führen kann',
      ],
      alwaysTitle: 'Übe IMMER:',
      alwaysItems: [
        'Bequem sitzend auf einem Sessel, Sofa oder der Matte',
        'Liegend in einer sicheren, friedlichen Umgebung',
        'Auf deinen Körper hörend – erzwinge niemals das Atemanhalten',
        'Sofort abbrechend, falls Brustschmerzen oder starker Schwindel auftreten',
      ],
      disclaimer: 'Medizinischer Hinweis: HarmonyBreath dient ausschließlich Bildungs- und Entspannungszwecken. Es ersetzt keine ärztliche Beratung. Personen mit Epilepsie, Bluthochdruck, Herzerkrankungen oder während der Schwangerschaft sollten vor der Praxis einen Arzt konsultieren.',
    },
    about: {
      tag: 'Über die Wim-Hof-Methode',
      title: 'Was ist die Wim-Hof-Atemmethode?',
      subtitle: 'Alles Wissenswerte über die Wim-Hof-Technik: Biologische Hintergründe, wissenschaftliche Studien und die sichere Anwendung mit unserem Timer.',
      disclosureTitle: 'Wissenschaftliche Transparenz & Redaktionshinweis:',
      disclosureText: 'Die Inhalte dieser Seite basieren auf von Experten begutachteter physiologischer Fachliteratur und klinischen Studien. Unser Ziel ist die fundierte Erklärung der biologischen Mechanismen.',
      introP1: 'Willkommen beim kostenlosen Wim-Hof-Atemtimer von HarmonyBreath – deinem zuverlässigen Browser-Tool für die tägliche Praxis der Wim-Hof-Methode. Ob Anfänger oder erfahrener Praktizierender: Hier erhältst du alles für eine vollständige Sitzung – kostenlos und ohne Registrierung.',
      introP2: 'Diese Anleitung wurde von unserem Redaktionsteam verfasst – aktiven Praktizierenden, die diesen Timer täglich selbst nutzen.',
      whatIsTitle: 'Was zeichnet die Wim-Hof-Atemtechnik aus?',
      whatIsP1: 'Die Wim-Hof-Methode wurde vom niederländischen Extremsportler Wim Hof („The Iceman“) entwickelt. Sie kombiniert drei Phasen: kontrollierte Hyperventilation (30 tiefe Atemzüge), Atemanhalten auf leerer Lunge (Retention) und einen Erholungsatemzug auf voller Lunge.',
      whatIsP2: 'Unser geführter Timer gewährleistet den korrekten Rhythmus und genaue Zeitmessung über alle 3 bis 5 Runden hinweg.',
      scienceTitle: 'Die Wissenschaft & Physiologie der Wim-Hof-Atmung',
      scienceP1: 'Hinter dem belebenden Gefühl der Wim-Hof-Methode stehen fundierte biologische Prozesse:',
      sciencePoints: [
        {
          label: 'Respiratorische Alkalose & CO2-Abatmung:',
          text: 'Durch das tiefe, rhythmische Atmen wird vermehrt Kohlendioxid (CO2) aus der Lunge abgeatmet. Dadurch steigt der Blut-pH-Wert leicht an. Da CO2 der primäre Reiz für den Atemantrieb ist, sinkt das Bedürfnis zu atmen und die Haltezeiten verlängern sich spürbar.',
        },
        {
          label: 'Intermittierende Hypoxie:',
          text: 'Während der Atemanhaltephase sinkt der Sauerstoffgehalt im Blut kurzzeitig ab. Diese kontrollierte intermittierende Hypoxie setzt zelluläre Anpassungsprozesse in Gang und trainiert die Atemwiderstandskraft.',
        },
        {
          label: 'Sympathikus-Aktivierung & Adrenalin-Ausschüttung:',
          text: 'Die Kombination aus forciertem Atmen und Atemanhalten führt zu einer Freisetzung von körpereigenem Adrenalin und Noradrenalin. Dies erklärt den sofortigen Energieschub und die mentale Klarheit.',
        },
        {
          label: 'Immunmodulation (Radboud-Studie):',
          text: 'In einer wegweisenden Studie an der Radboud-Universität (Kox et al., 2014, PNAS) konnte gezeigt werden, dass Anwender der Wim-Hof-Methode ihr autonomes Nervensystem und ihre angeborene Immunantwort willentlich beeinflussen und Entzündungsmarker senken können.',
        },
      ],
      featuresTitle: 'Funktionen unseres Wim-Hof-Online-Timers',
      featuresP1: 'Entwickelt von Atem-Enthusiasten für maximale Praxistauglichkeit:',
      featuresList: [
        {
          label: '3-Phasen-geführte Sitzungen:',
          text: 'Visuelles Atemphasen-Feedback und präzise Klänge signalisieren Einatmen, Ausatmen und Haltephasen.',
        },
        {
          label: 'Schwierigkeitsstufen-Presets:',
          text: 'Vordefinierte Modi für Anfänger (60s Haltezeit), Fortgeschrittene (90s), Profis (120s) und Experten (150s).',
        },
        {
          label: 'Individuelle Anpassung:',
          text: 'Passe Atemzuganzahl (15–60), Haltezeiten (30–300s) und Rundenanzahl flexibel an.',
        },
        {
          label: 'Audio & Klangkulissen:',
          text: 'Sanfte Natur- und Meditationsklänge für ein immersives Erlebnis bei geschlossenen Augen.',
        },
        {
          label: 'Privatsphäre an erster Stelle:',
          text: 'Sämtliche Statistiken und Bestzeiten bleiben lokal auf deinem Gerät gespeichert.',
        },
      ],
      benefitsTitle: 'Vorteile der Wim-Hof-Atmung',
      benefitsP1: 'Regelmäßiges Üben bringt vielfältige positive Wirkungen mit sich:',
      benefitsList: [
        'Natürlicher Energieschub am Morgen ganz ohne Koffein',
        'Mentale Stärke, Fokus und Gelassenheit in herausfordernden Situationen',
        'Stärkung der körpereigenen Abwehrkräfte und Entzündungshemmung',
        'Erhöhte Sauerstoffeffizienz und Gewöhnung an längere Haltezeiten',
        'Optimale Ergänzung zu Kälteanwendungen und kaltem Duschen',
        'Tiefes Vertrauen in die eigene Atmung und körperliche Selbstregulation',
      ],
      benefitsP2: 'Unser geführter Timer unterstützt dich dabei, die Methode Schritt für Schritt in deinen Alltag zu integrieren.',
      howToUseTitle: 'Anleitung zur Nutzung des Timers',
      howToUseP1: 'Wähle dein Preset (für den Anfang empfiehlt sich „Anfänger“) und klicke auf „Übung Starten“. Folge einfach den visuellen und akustischen Signalen auf dem Bildschirm.',
      howToUseP2: 'Fortgeschrittene können im benutzerdefinierten Modus alle Parameter wie Atemzyklusdauer und Haltezeiten exakt festlegen.',
      howToUseP3: 'Übe stets im Sitzen oder Liegen und halte den Atem nur so lange an, wie es sich für dich angenehm anfühlt.',
      referencesTitle: 'Wissenschaftliche Studien und Referenzen',
    },
    editorialBio: {
      title: 'Erstellt von der HarmonyBreath-Redaktion',
      desc: 'Diese Anleitung wurde von unserem internen Team aus Atemtrainern und Fachautoren verfasst. Wir prüfen jede Methode nach wissenschaftlichen Kriterien und formulieren unsere Ratschläge ehrlich und ohne medizinische Übertreibung.',
      disclaimer: 'Dieser Inhalt dient rein informativen Zwecken und stellt keine medizinische Beratung dar.',
      linkText: 'Erfahre mehr über unser Team und unsere Mission',
    },
    faqs: [
      {
        question: 'Warum ist die Wim-Hof-Atmung so intensiv wirksam?',
        answer: 'Die Wim-Hof-Atmung kombiniert tiefe rhythmische Einatmung mit Atemanhalten auf leerer Lunge. Dieser Wechsel verändert vorübergehend das biochemische Milieu im Blut (respiratorische Alkalose und kurzzeitige Hypoxie), was zur Ausschüttung von Adrenalin führt und für sofortige Wachheit und innere Wärme sorgt.',
      },
      {
        question: 'Wie beginne ich am besten mit der Wim-Hof-Methode?',
        answer: 'Beginne entspannt im Sitzen oder Liegen mit 3 Runden im Anfänger-Modus (30 Atemzüge, ca. 60 Sekunden Atemanhalten). Steigere die Haltezeit erst, wenn du dich vollkommen wohlfühlst. Später kannst du das Atmen mit 15 bis 30 Sekunden kaltem Duschen am Morgen kombinieren.',
      },
      {
        question: 'Ist die Wim-Hof-Atemtechnik gesundheitlich unbedenklich?',
        answer: 'Für gesunde Menschen ist die Technik bei korrekter Durchführung im Sitzen oder Liegen sicher und wohltuend. Wichtig: Niemals im Wasser, beim Schwimmen oder beim Autofahren ausführen! Bei Epilepsie, Herz-Kreislauf-Erkrankungen oder Schwangerschaft sollte vorher ein Arzt konsultiert werden.',
      },
      {
        question: 'Wer ist Wim Hof („The Iceman“)?',
        answer: 'Wim Hof ist ein niederländischer Extremsportler, der für seine Kälteresistenz und zahlreiche Weltrekorde bekannt ist. Er entwickelte die Methode aus Atemübungen, Kälteexposition und mentalem Fokus zur Steigerung von Gesundheit und Vitalität.',
      },
      {
        question: 'Was genau bewirkt die Wim-Hof-Atemübung im Körper?',
        answer: 'Sie mobilisiert das Immunsystem, dämpft Entzündungsreaktionen, fördert die Durchblutung und schärft die Konzentration durch den gezielten Wechsel zwischen Sauerstoffsättigung und Atemanhalten.',
      },
      {
        question: 'Wie oft sollte man die Wim-Hof-Atmung machen?',
        answer: 'Die meisten Praktizierenden führen einmal täglich morgens auf nüchternen Magen 3 bis 4 Runden durch. Regelmäßigkeit ist dabei wichtiger als überlange Haltezeiten.',
      },
      {
        question: 'Wie führt man die Wim-Hof-Atmung Schritt für Schritt durch?',
        answer: '1. Bequem hinsetzen oder hinlegen. 2. 30 Mal tief in den Bauch und die Brust einatmen und locker ausatmen. 3. Nach dem 30. Ausatmen die Luft anhalten, solange es angenehm ist. 4. Beim ersten Einatemimpuls tief einatmen und 15 Sekunden halten. Fertig ist eine Runde.',
      },
    ],
  },

  fr: {
    metaTitle: 'Méthode Wim Hof: Minuteur Guidé des Cycles et Rétention',
    metaDescription: 'Maîtrisez la méthode Wim Hof avec notre minuteur gratuit. Cycles de 30 respirations, rétention poumons vides et récupération pour booster l’énergie.',
    keywords: 'respiration wim hof, methode wim hof, technique de respiration wim hof, wim hof respiration guidee, chronometre wim hof, minuteur respiration wim hof, bienfaits methode wim hof, exercices de respiration wim hof, respiration iceman, apnee wim hof, methode wim hof comment faire',
    canonicalPath: '/fr/wim-hof/',
    badge: 'RESPIRATION GUIDÉE & ACTIVATION ÉNERGÉTIQUE GRATUITE',
    heroTitle: 'La Méthode Wim Hof\nMaîtrisez Esprit et Physiologie',
    heroSubtitle: 'Vivez l’expérience authentique de la respiration Wim Hof en 3 phases : hyperventilation contrôlée, rétention détendue poumons vides et réoxygénation de récupération. Accompagné de repères sonores, visuels et d’un suivi privé.',
    breadcrumbName: 'Respiration Wim Hof',
    startPracticeBtn: 'Démarrer la Séance',
    jumpLinks: {
      timer: 'Minuteur',
      presets: 'Modes',
      stats: 'Stats',
      guide: 'Guide',
      safety: 'Sécurité',
      about: 'À propos',
      faq: 'FAQ',
    },
    techniqueGuide: {
      tag: 'Mécanique Respiratoire',
      title: 'Comment Fonctionne la Respiration Wim Hof',
      desc: 'Maîtrisez la séquence en 3 phases : respirations profondes rythmées, rétention confortable poumons vides et souffle de récupération.',
      phases: [
        {
          number: '01',
          title: 'Phase 1 : Respiration Guidée',
          desc: 'Prenez 30 inspirations amples et rythmées vers le ventre puis la poitrine. Relâchez le souffle naturellement sans forcer.',
          specs: ['• 30 Souffles', '• ~90s Durée', '• Fluide & Continu'],
        },
        {
          number: '02',
          title: 'Phase 2 : Rétention Poumons Vides',
          desc: 'Après la 30e expiration, bloquez votre respiration poumons vides. Détendez-vous totalement sans forcer l’apnée.',
          specs: ['• 60s – 180s Rétention', '• Apnée Détendue', '• Calme Intérieur'],
        },
        {
          number: '03',
          title: 'Phase 3 : Souffle de Récupération',
          desc: 'Dès que le besoin de respirer se fait sentir, prenez une grande inspiration et retenez l’air 15 secondes avant de relâcher.',
          specs: ['• 1 Grande Inspiration', '• 15s de Rétention', '• Réinitialise le Cycle'],
        },
      ],
      paceTitle: 'Progression du Rythme Respiratoire',
      paceDesc: 'Le rythme s’accélère progressivement au fil des cycles pour vous permettre d’entrer dans la séance en douceur avant d’intensifier l’expérience.',
      rounds: [
        {
          badge: 'Cycle 1',
          title: 'Calme & Posé',
          timing: 'Inspiration : 2,5s • Expiration : 1,5s (cycle de 4s)',
          desc: 'Installez un rythme confortable. Remplissez d’abord l’abdomen puis le thorax avec fluidité.',
        },
        {
          badge: 'Cycle 2',
          title: 'Légèrement Plus Rapide',
          timing: 'Inspiration : 2s • Expiration : 1s (cycle de 3s)',
          desc: 'Conservez des inspirations complètes et des expirations relâchées en accélérant naturellement.',
        },
        {
          badge: 'Cycles 3 à 5',
          title: 'Dynamique & Rythmé',
          timing: 'Inspiration : 1,5s • Expiration : 1s (cycle de 2,5s)',
          desc: 'Inspirations amples et expirations spontanées. Le souffle s’enchaîne comme une vague régulière.',
        },
      ],
      customNoteTitle: 'Séances Personnalisées :',
      customNoteDesc: 'Vous pouvez modifier la durée du cycle respiratoire (2 à 6 s), le nombre de souffles et la durée de rétention dans les paramètres du mode personnalisé.',
      benefitsTag: 'Bienfaits Éprouvés',
      benefitsList: [
        'Détente profonde du système nerveux',
        'Clarté d’esprit et concentration décuplées',
        'Résilience accrue face au stress',
        'Connexion corps-esprit renforcée',
      ],
    },
    safety: {
      title: 'Consignes de Sécurité Essentielles',
      subtitle: 'À lire impérativement avant toute séance de respiration.',
      neverTitle: 'Ne pratiquez JAMAIS la respiration Wim Hof :',
      neverItems: [
        'En conduisant ou en pilotant un véhicule',
        'En nageant, dans une baignoire ou dans l’eau',
        'Lors d’activités de plongée ou d’apnée subaquatique',
        'En manipulant des machines dangereuses',
        'Dans toute situation où un évanouissement pourrait causer un accident',
      ],
      alwaysTitle: 'Pratiquez TOUJOURS :',
      alwaysItems: [
        'Confortablement assis dans un fauteuil, canapé ou sur un tapis',
        'Allongé dans un environnement sûr et calme',
        'À l’écoute de votre corps : ne forcez jamais la rétention d’air',
        'En arrêtant immédiatement en cas de douleur thoracique ou vertige intense',
      ],
      disclaimer: 'Avertissement médical : HarmonyBreath a une vocation exclusivement bien-être et éducative. Ne remplace pas un avis médical. Les personnes souffrant d’épilepsie, d’hypertension artérielle, de troubles cardiaques ou enceintes doivent consulter un médecin au préalable.',
    },
    about: {
      tag: 'À propos de la Méthode Wim Hof',
      title: 'Qu’est-ce que la Méthode de Respiration Wim Hof ?',
      subtitle: 'Tout ce que vous devez savoir sur la technique Wim Hof : fondements scientifiques, bienfaits physiologiques et pratique guidée sécurisée.',
      disclosureTitle: 'Rigueur Scientifique & Engagement Éditorial :',
      disclosureText: 'Le contenu de ce guide est basé sur la littérature biomédicale évaluée par les pairs et les études cliniques. Notre mission est d’expliquer la science du souffle tout en offrant des outils gratuits et interactifs.',
      introP1: 'Bienvenue sur le minuteur guidé gratuit de la respiration Wim Hof par HarmonyBreath – l’outil en ligne le plus complet pour pratiquer la méthode Wim Hof depuis votre navigateur. Que vous soyez débutant ou pratiquant confirmé, réalisez vos séances complètes sans inscription ni coût.',
      introP2: 'Ce guide a été conçu par l’équipe éditoriale de HarmonyBreath, des passionnés de respiration fonctionnelle qui utilisent quotidiennement ce minuteur dans leur propre pratique.',
      whatIsTitle: 'En quoi consiste la méthode Wim Hof ?',
      whatIsP1: 'Créée par l’athlète néerlandais Wim Hof (« The Iceman »), cette pratique repose sur trois phases : une hyperventilation contrôlée (30 inspirations amples), une apnée poumons vides et une inspiration de récupération.',
      whatIsP2: 'Notre minuteur interactif vous accompagne avec précision pour maintenir la cadence idéale tout au long de vos cycles.',
      scienceTitle: 'La Science et la Physiologie de la Méthode Wim Hof',
      scienceP1: 'L’effet vivifiant de la méthode repose sur des mécanismes physiologiques clairement documentés :',
      sciencePoints: [
        {
          label: 'Alcalose Respiratoire & Évacuation du CO2 :',
          text: 'Les inspirations amples expulsent rapidement le dioxyde de carbone (CO2) des poumons, augmentant temporairement le pH sanguin. Le CO2 étant le signal premier qui déclenche le réflexe respiratoire, sa diminution permet de retenir son souffle sans effort pendant de longues minutes.',
        },
        {
          label: 'Hypoxie Intermittente Contrôlée :',
          text: 'Pendant l’apnée poumons vides, la saturation en oxygène (SpO2) diminue brièvement. Cette hypoxie intermittente stimule l’adaptation cellulaire et développe la résistance au stress en toute sécurité.',
        },
        {
          label: 'Pic d’Adrénaline & Énergie :',
          text: 'L’alternance entre hyperventilation et apnée déclenche une libération d’adrénaline et de noradrénaline, conférant une vivacité mentale immédiate et une chaleur corporelle bienfaisante.',
        },
        {
          label: 'Modulation Immunitaire (Étude Radboud) :',
          text: 'Un essai clinique marquant de l’université Radboud (Kox et al., 2014, PNAS) a prouvé que les pratiquants entraînés pouvaient influencer volontairement leur système nerveux autonome et réduire les réponses inflammatoires de leur système immunitaire.',
        },
      ],
      featuresTitle: 'Fonctionnalités de Notre Minuteur Wim Hof en Ligne',
      featuresP1: 'Un outil pensé dans les moindres détails pour les pratiquants :',
      featuresList: [
        {
          label: 'Séances Guidées en 3 Temps :',
          text: 'Halo visuel respiratoire et signaux sonores pour savoir exactement quand inspirer, expirer et bloquer.',
        },
        {
          label: 'Préréglages par Niveau :',
          text: 'Débutant (60s de rétention), Intermédiaire (90s), Avancé (120s) et Expert (150s).',
        },
        {
          label: 'Personnalisation Complète :',
          text: 'Réglez librement le nombre de respirations (15 à 60), le temps d’apnée (30s à 300s) et le nombre de cycles.',
        },
        {
          label: 'Ambiance Sonore Immersive :',
          text: 'Choix de musiques et de sons relaxants pour pratiquer les yeux fermés en toute sérénité.',
        },
        {
          label: 'Confidentialité Totale :',
          text: 'Vos données et statistiques de progression restent enregistrées localement sur votre appareil.',
        },
      ],
      benefitsTitle: 'Bienfaits de la Respiration Wim Hof',
      benefitsP1: 'La pratique régulière de la méthode apporte des résultats remarquables :',
      benefitsList: [
        'Un réveil tonique et une énergie propre dès le matin sans caféine',
        'Un renforcement de la volonté, du sang-froid et de la concentration',
        'Une plus grande résistance au stress et une meilleure régulation nerveuse',
        'Une familiarité et une aisance accrues avec la sensation d’apnée',
        'Une synergie reconnue avec les douches froides pour renforcer les défenses',
        'Une profonde reconnexion corporelle et respiratoire au quotidien',
      ],
      benefitsP2: 'Notre outil vous aide à explorer ces bienfaits en progressant à votre rythme et en toute sécurité.',
      howToUseTitle: 'Comment Utiliser le Minuteur de Respiration',
      howToUseP1: 'Sélectionnez votre niveau (Débutant pour votre première fois) et cliquez sur « Démarrer la Séance ». Suivez l’animation à l’écran et les sons d’indication.',
      howToUseP2: 'Pour les utilisateurs avancés, le mode personnalisé permet d’ajuster la cadence et la durée de chaque étape.',
      howToUseP3: 'Pratiquez toujours confortablement assis ou couché, et ne forcez jamais une apnée au-delà de ce qui reste agréable.',
      referencesTitle: 'Publications Scientifiques et Références',
    },
    editorialBio: {
      title: 'Rédigé par l’Équipe Éditoriale HarmonyBreath',
      desc: 'Ce contenu a été élaboré par notre équipe interne de pratiquants et rédacteurs bien-être. Nous analysons chaque technique selon les données médicales actuelles et formulons nos recommandations sans promesse irréaliste.',
      disclaimer: 'Ce contenu est purement informatif et ne constitue pas une consultation médicale.',
      linkText: 'En savoir plus sur notre équipe et nos engagements',
    },
    faqs: [
      {
        question: 'Pourquoi la respiration Wim Hof est-elle si efficace ?',
        answer: 'La respiration Wim Hof associe des inspirations profondes à des rétentions poumons vides, ce qui modifie temporairement la chimie sanguine (alcalose respiratoire et hypoxie passagère). Cela stimule le système nerveux sympathique et libère de l’adrénaline, procurant une clarté mentale et un regain d’énergie immédiats.',
      },
      {
        question: 'Comment débuter la Méthode Wim Hof en toute sécurité ?',
        answer: 'Installez-vous confortablement assis ou allongé. Utilisez notre minuteur en mode Débutant pour réaliser 3 cycles de 30 respirations avec une rétention d’environ 60 secondes (ou jusqu’au premier signal naturel d’inspiration). Plus tard, vous pourrez associer la respiration à 15–30 secondes de douche froide en fin de journée ou le matin.',
      },
      {
        question: 'La respiration Wim Hof présente-t-elle des risques ?',
        answer: 'Pour les personnes en bonne santé, elle est sans danger si elle est pratiquée assis ou couché. Il ne faut JAMAIS la pratiquer dans l’eau (bain, piscine, mer) ni au volant, car un étourdissement ou une perte de connaissance momentanée pourrait être fatal. Les personnes épileptiques, cardiaques ou enceintes doivent demander l’avis d’un médecin.',
      },
      {
        question: 'Qui est Wim Hof (« The Iceman ») ?',
        answer: 'Wim Hof est un athlète de l’extrême néerlandais célèbre pour sa résistance au froid polaire et ses nombreux records du monde. Il a conçu sa méthode associant respiration, exposition au froid et concentration mentale pour améliorer la santé globale.',
      },
      {
        question: 'Qu’est-ce que la respiration Wim Hof exactement ?',
        answer: 'C’est le pilier respiratoire de la Méthode Wim Hof. Elle se compose de 3 phases successives : 30 respirations profondes, une apnée poumons vides après l’expiration, et un souffle de récupération de 15 secondes poumons pleins.',
      },
      {
        question: 'Quels effets ressent-on pendant la séance ?',
        answer: 'Pendant les respirations et l’apnée, il est fréquent de ressentir de légers picotements dans les mains ou le visage, une douce chaleur intérieure et un calme mental profond.',
      },
      {
        question: 'Comment faire la respiration Wim Hof étape par étape ?',
        answer: '1. Asseyez-vous ou allongez-vous confortablement. 2. Prenez 30 inspirations profondes par le nez ou la bouche en gonflant le ventre et relâchez sans forcer. 3. À la 30e expiration, videz l’air et retenez votre respiration le temps souhaité. 4. Dès que vous avez besoin de respirer, prenez une grande inspiration et bloquez 15 secondes. Répétez 3 à 4 fois.',
      },
    ],
  },

  pt: {
    metaTitle: 'Método Wim Hof: Temporizador Guiado de Ciclos e Retenção',
    metaDescription: 'Domine a respiração do Método Wim Hof com nosso timer guiado gratuito. 30 respirações, retenção e recuperação para energia e foco mental.',
    keywords: 'respiração wim hof, método wim hof, técnica de respiração wim hof, temporizador wim hof, respiração wim hof guiada, benefícios método wim hof, exercícios de respiração wim hof, método wim hof respiração passo a passo, retenção respiração wim hof, iceman respiração',
    canonicalPath: '/pt/wim-hof/',
    badge: 'RESPIRAÇÃO GUIADA & ENERGIA FISIOLÓGICA GRATUITA',
    heroTitle: 'O Método Wim Hof\nDomine Mente e Fisiologia',
    heroSubtitle: 'Experimente a respiração autêntica em 3 fases do Método Wim Hof: hiperventilação rítmica controlada, retenção confortável com pulmões vazios e oxigenação de recuperação. Tudo guiado por áudio e acompanhamento privado.',
    breadcrumbName: 'Respiração Wim Hof',
    startPracticeBtn: 'Iniciar Prática',
    jumpLinks: {
      timer: 'Temporizador',
      presets: 'Modos',
      stats: 'Estatísticas',
      guide: 'Guia',
      safety: 'Segurança',
      about: 'Sobre',
      faq: 'Perguntas',
    },
    techniqueGuide: {
      tag: 'Mecânica Respiratória',
      title: 'Como Funciona a Respiração Wim Hof',
      desc: 'Domine a sequência em 3 fases: respirações rítmicas profundas, retenção confortável sem ar e respiração de recuperação.',
      phases: [
        {
          number: '01',
          title: 'Fase 1: Respiração Guiada',
          desc: 'Faça 30 respirações profundas e rítmicas no abdômen e peito. Solte o ar de forma natural e suave.',
          specs: ['• 30 Respirações', '• ~90s Duração', '• Fluido e Contínuo'],
        },
        {
          number: '02',
          title: 'Fase 2: Retenção com Pulmões Vazios',
          desc: 'Após a 30ª expiração, segure a respiração sem ar nos pulmões. Relaxe completamente sem forçar o limite.',
          specs: ['• 60s – 180s Retenção', '• Retenção Serena', '• Mente Serena'],
        },
        {
          number: '03',
          title: 'Fase 3: Respiração de Recuperação',
          desc: 'Quando sentir o impulso de respirar, puxe o ar profundamente e segure por 15 segundos antes de soltar.',
          specs: ['• 1 Inalação Profunda', '• 15s de Retenção', '• Reinicia a Rodada'],
        },
      ],
      paceTitle: 'Progressão do Ritmo Respiratório',
      paceDesc: 'O ritmo acelera suavemente a cada rodada, permitindo que você entre na prática com calma antes de aprofundar a intensidade.',
      rounds: [
        {
          badge: 'Rodada 1',
          title: 'Lenta & Relaxada',
          timing: 'Inalação: 2,5s • Exalação: 1,5s (ciclo de 4s)',
          desc: 'Estabeleça um ritmo confortável. Encha primeiro a barriga e depois o peito, com calma.',
        },
        {
          badge: 'Rodada 2',
          title: 'Mais Dinâmica',
          timing: 'Inalação: 2s • Exalação: 1s (ciclo de 3s)',
          desc: 'Mantenha inalações completas e exalações soltas, acelerando naturalmente o fluxo.',
        },
        {
          badge: 'Rodadas 3–5',
          title: 'Rítmica & Energética',
          timing: 'Inalação: 1,5s • Exalação: 1s (ciclo de 2,5s)',
          desc: 'Inspirações amplas e expirações espontâneas, como o vaivém suave de uma onda do mar.',
        },
      ],
      customNoteTitle: 'Sessões Personalizadas:',
      customNoteDesc: 'Ajuste a velocidade da respiração (2 a 6 segundos por ciclo), quantidade de respirações e tempo de retenção no painel personalizado.',
      benefitsTag: 'Benefícios Comprovados',
      benefitsList: [
        'Relaxamento profundo do sistema nervoso',
        'Foco mental nítido e clareza cognitiva',
        'Maior resiliência e autocontrole contra o estresse',
        'Profunda conexão corporal e respiratória',
      ],
    },
    safety: {
      title: 'Diretrizes Essenciais de Segurança',
      subtitle: 'Leia atentamente antes de iniciar qualquer sessão de respiração.',
      neverTitle: 'NUNCA pratique a Respiração Wim Hof:',
      neverItems: [
        'Ao dirigir ou pilotar qualquer veículo',
        'Ao nadar, tomar banho de banheira ou em meio aquático',
        'Durante mergulho livre ou apneia na água',
        'Ao operar máquinas perigosas ou pesadas',
        'Em qualquer situação onde um desmaio possa representar perigo',
      ],
      alwaysTitle: 'SEMPRE pratique:',
      alwaysItems: [
        'Confortavelmente sentado em um sofá, almofada ou tapete',
        'Deitado em um ambiente seguro e calmo',
        'Ouvindo seu corpo – jamais force a retenção de ar além do confortável',
        'Parando imediatamente se sentir dor no peito ou tontura forte',
      ],
      disclaimer: 'Aviso Médico: O HarmonyBreath destina-se a fins educativos e de bem-estar. Não constitui aconselhamento médico. Indivíduos com epilepsia, pressão alta, doenças cardíacas ou grávidas devem consultar um médico antes da prática.',
    },
    about: {
      tag: 'Sobre o Método Wim Hof',
      title: 'O Que É o Método de Respiração Wim Hof?',
      subtitle: 'Tudo o que você precisa saber sobre a técnica Wim Hof: as bases fisiológicas, os benefícios imunológicos e como praticar com total segurança.',
      disclosureTitle: 'Compromisso Científico e Editorial:',
      disclosureText: 'O conteúdo desta página baseia-se em estudos científicos revisados por pares e ensaios clínicos. Nosso objetivo é explicar a biologia do fôlego oferecendo temporizadores interativos gratuitos.',
      introP1: 'Boas-vindas ao temporizador gratuito da respiração Wim Hof do HarmonyBreath – a plataforma online mais completa para realizar suas práticas de respiração pelo navegador. Seja você um novato ou um praticante experiente, aproveite sessões guiadas sem pagar nada e sem necessidade de cadastro.',
      introP2: 'Este guia foi elaborado pela equipe editorial do HarmonyBreath, praticantes assíduos da respiração funcional que utilizam este cronômetro diariamente.',
      whatIsTitle: 'O que caracteriza a respiração Wim Hof?',
      whatIsP1: 'Desenvolvido pelo atleta holandês Wim Hof ("The Iceman"), este método combina três fases: hiperventilação rítmica controlada (30 respirações profundas), retenção sem ar (apneia) e uma inalação de recuperação de 15 segundos.',
      whatIsP2: 'Nosso temporizador garante o ritmo ideal em cada rodada, acompanhando você em cada ciclo.',
      scienceTitle: 'A Ciência e a Fisiologia da Respiração Wim Hof',
      scienceP1: 'O vigor e a vitalidade proporcionados pela técnica têm bases biológicas bem demonstradas:',
      sciencePoints: [
        {
          label: 'Alcalose Respiratória e Eliminação de CO2:',
          text: 'A respiração profunda e contínua expulsa rapidamente o dióxido de carbono (CO2), elevando ligeiramente o pH sanguíneo. Como o CO2 é o principal estímulo para a vontade de respirar, sua redução permite segurar a respiração sem esforço por muito mais tempo.',
        },
        {
          label: 'Hipóxia Intermitente Controlada:',
          text: 'Durante a retenção com pulmões vazios, a oxigenação arterial diminui momentaneamente. Essa hipóxia intermitente induz respostas celulares adaptativas que fortalecem a resistência fisiológica.',
        },
        {
          label: 'Descarga de Adrenalina e Foco:',
          text: 'A combinação de respirações intensas e retenção estimula o sistema nervoso simpático a liberar adrenalina e noradrenalina, gerando clareza mental instantânea e calor corporal.',
        },
        {
          label: 'Modulação Imunológica (Estudo Radboud):',
          text: 'Em um famoso ensaio clínico da Universidade de Radboud (Kox et al., 2014, PNAS), voluntários treinados demonstraram a capacidade de modular voluntariamente sua resposta inflamatória através das técnicas de Wim Hof.',
        },
      ],
      featuresTitle: 'Recursos do Nosso Temporizador Wim Hof Online',
      featuresP1: 'Desenvolvido para oferecer uma experiência de respiração impecável:',
      featuresList: [
        {
          label: 'Sessões Guiadas em 3 Fases:',
          text: 'Animação visual do halo de respiração e toques sonoros para cada momento do ciclo.',
        },
        {
          label: 'Níveis de Dificuldade Predefinidos:',
          text: 'Iniciante (60s de retenção), Intermediário (90s), Avançado (120s) e Especialista (150s).',
        },
        {
          label: 'Personalização Completa:',
          text: 'Configure o número de respirações (15 a 60), tempo de retenção (30s a 300s) e número de rodadas.',
        },
        {
          label: 'Paisagens Sonoras Relaxantes:',
          text: 'Músicas e efeitos de áudio para respirar de olhos fechados sem precisar olhar para a tela.',
        },
        {
          label: 'Privacidade Total:',
          text: 'Suas estatísticas e histórico ficam salvos somente no seu dispositivo móvel ou computador.',
        },
      ],
      benefitsTitle: 'Benefícios da Respiração Wim Hof',
      benefitsP1: 'A prática regular do método proporciona resultados transformadores:',
      benefitsList: [
        'Energia revigorante e disposição matinal sem necessidade de estimulantes',
        'Fortalecimento da força de vontade, foco e controle emocional sob pressão',
        'Maior tolerância ao estresse e equilíbrio do sistema nervoso',
        'Facilidade e tranquilidade com a sensação de prender a respiração',
        'Combinação perfeita com banhos frios para estimular a imunidade',
        'Maior consciência da respiração e bem-estar em todos os momentos',
      ],
      benefitsP2: 'Nosso temporizador guiado permite que você explore esses benefícios no seu próprio ritmo com segurança.',
      howToUseTitle: 'Como Usar Este Temporizador de Respiração',
      howToUseP1: 'Selecione o nível desejado (Iniciante para quem está começando) e clique em "Iniciar Prática". Siga os alertas visuais e sonoros na tela.',
      howToUseP2: 'Usuários experientes podem utilizar o modo personalizado para ajustar a velocidade do ciclo e o tempo de apneia.',
      howToUseP3: 'Pratique sempre sentado ou deitado em local seguro e nunca force a retenção além do ponto confortável.',
      referencesTitle: 'Referências Científicas e Ensaios Clínicos',
    },
    editorialBio: {
      title: 'Elaborado pela Equipe Editorial do HarmonyBreath',
      desc: 'Este guia foi criado por nossos especialistas em respiração funcional e redatores de saúde preventiva. Investigamos cada técnica com rigor científico e compartilhamos informações com clareza e responsabilidade.',
      disclaimer: 'Este conteúdo é meramente educativo e não substitui a orientação de profissionais médicos.',
      linkText: 'Conheça mais sobre nossa equipe e missão',
    },
    faqs: [
      {
        question: 'Por que a respiração Wim Hof é tão potente?',
        answer: 'Ela combina hiperventilação rítmica com retenção sem ar e recuperação, alterando transitoriamente o equilíbrio químico sanguíneo (alcalose respiratória e hipóxia passageira). Isso libera adrenalina e desperta o corpo com energia, calor e nitidez mental.',
      },
      {
        question: 'Como começar o Método Wim Hof com segurança?',
        answer: 'Comece deitado ou sentado confortavelmente. Realize 3 rodadas no modo Iniciante (30 respirações e retenção de cerca de 60 segundos ou até sentir o primeiro reflexo de respirar). Posteriormente, você pode aliar a prática a 15 a 30 segundos de água fria ao final do banho.',
      },
      {
        question: 'A respiração Wim Hof é segura para a saúde?',
        answer: 'Para pessoas saudáveis, é segura se praticada sentado ou deitado em local confortável. NUNCA deve ser feita na água (piscina, banho, mar) ou dirigindo, pois uma tontura momentânea pode ser perigosa. Gestantes ou pessoas com epilepsia e problemas cardíacos devem consultar um médico antes.',
      },
      {
        question: 'Quem é Wim Hof ("The Iceman")?',
        answer: 'Wim Hof é um atleta holandês recordista mundial famoso por suportar temperaturas de frio extremo. Ele desenvolveu o método integrando respiração, exposição gradual ao frio e meditação.',
      },
      {
        question: 'O que é a respiração Wim Hof exatamente?',
        answer: 'É a parte respiratória do método, estruturada em ciclos de 3 etapas: 30 respirações profundas contínuas, retenção de ar com os pulmões vazios e uma inalação final de recuperação por 15 segundos.',
      },
      {
        question: 'Quais sensações são normais durante a prática?',
        answer: 'É normal sentir um leve formigamento nas mãos, sensação de calor corporal e um estado de calma e foco profundo.',
      },
      {
        question: 'Como fazer a respiração Wim Hof passo a passo?',
        answer: '1. Sente-se ou deite-se com apoio confortável. 2. Faça 30 respirações profundas pelo nariz ou boca enchendo a barriga e o peito, soltando o ar sem forçar. 3. Na 30ª expiração, solte o ar e segure o tempo que for confortável. 4. Quando sentir vontade, puxe o ar profundamente e segure por 15 segundos. Repita por 3 ou 4 rodadas.',
      },
    ],
  },

  ja: {
    metaTitle: 'ヴィム・ホフ呼吸法：ラウンド＆息止めガイド付きタイマー',
    metaDescription: 'ヴィム・ホフ呼吸法（アイスマン呼吸法）を無料のオンラインガイドタイマーで実践。30回の深い呼吸、息止め（リテンション）、回復の呼吸で活力向上と集中力アップ。',
    keywords: 'ヴィムホフ呼吸法, ヴィム・ホフ メソッド, ヴィムホフ タイマー, アイスマン 呼吸法, ヴィムホフ呼吸法 やり方, ヴィムホフ 効果, ヴィムホフ呼吸法 ガイド, 呼吸法 タイマー, 息止め 呼吸法, ヴィムホフ メソッド 呼吸, 自律神経 呼吸法',
    canonicalPath: '/ja/wim-hof/',
    badge: '無料ガイド呼吸法＆免疫活性化エンジン',
    heroTitle: 'ヴィム・ホフ メソッド\n心と身体の生理機能を極める',
    heroSubtitle: '3つのフェーズで構成される本格的なヴィム・ホフ呼吸法を体験。コントロールされた深いリズム呼吸、息止め、そして回復の深呼吸。美しいビジュアルとオーディオガイドで導きます。',
    breadcrumbName: 'ヴィム・ホフ呼吸法',
    startPracticeBtn: '練習を開始する',
    jumpLinks: {
      timer: 'タイマー',
      presets: 'プリセット',
      stats: '統計',
      guide: 'ガイド',
      safety: '安全上の注意',
      about: '解説',
      faq: 'FAQ',
    },
    techniqueGuide: {
      tag: '呼吸のメカニズム',
      title: 'ヴィム・ホフ呼吸法の仕組み',
      desc: '3つのフェーズをマスターしましょう：リズミカルな深呼吸、吐き出した状態での快適な息止め、そして活力を取り戻す回復の深呼吸。',
      phases: [
        {
          number: '01',
          title: 'フェーズ 1: ガイド付き深呼吸',
          desc: '深くリズミカルに30回呼吸します。お腹と胸を満たすように吸い込み、無理に吐き切らず自然に息を吐き出します。',
          specs: ['• 合計30回の呼吸', '• 約90秒間', '• なめらかで連続的なリズム'],
        },
        {
          number: '02',
          title: 'フェーズ 2: 息止め（リテンション）',
          desc: '30回目の息を吐いた後、息を止めてリラックスします。決して無理をせず、心地よい限界まで保ちます。',
          specs: ['• 60秒〜180秒の持続', '• リラックスした保持', '• 静寂な意識'],
        },
        {
          number: '03',
          title: 'フェーズ 3: 回復の深呼吸',
          desc: '息を吸いたい衝動を感じたら、深く大きく息を吸い込んで15秒間キープし、その後自然に吐き出します。',
          specs: ['• 1回の深い吸気', '• 15秒間のキープ', '• 次のラウンドへのリセット'],
        },
      ],
      paceTitle: '呼吸ペースの段階的進行',
      paceDesc: 'ラウンドが進むにつれて呼吸リズムが自然と速くなります。この進行により、無理なく集中と強度を高めることができます。',
      rounds: [
        {
          badge: 'ラウンド 1',
          title: 'ゆっくり＆リラックス',
          timing: '吸気: 2.5秒 • 呼気: 1.5秒（1サイクル4秒）',
          desc: '心地よいリズムを作ります。焦らず落ち着いて、まずお腹を満たし、続いて胸を広げます。',
        },
        {
          badge: 'ラウンド 2',
          title: 'ややテンポアップ',
          timing: '吸気: 2秒 • 呼気: 1秒（1サイクル3秒）',
          desc: '深い吸気と脱力した呼気を保ちながら、テンポを自然に引き上げます。',
        },
        {
          badge: 'ラウンド 3–5',
          title: 'リズミカル＆ダイナミック',
          timing: '吸気: 1.5秒 • 呼気: 1秒（1サイクル2.5秒）',
          desc: '波のように滑らかで途切れのないリズムで、酸素をしっかり取り込みます。',
        },
      ],
      customNoteTitle: 'カスタムセッション:',
      customNoteDesc: 'カスタムモードでは、呼吸時間（1サイクル2〜6秒）、呼吸回数、息止めの目標時間を自分のレベルに合わせて自由に設定できます。',
      benefitsTag: '実証された効果',
      benefitsList: [
        '自律神経の深いリラクゼーション',
        '研ぎ澄まされた集中力とクリアな思考',
        'ストレスやプレッシャーへの耐性向上',
        '身体感覚と呼吸に対する深い気づき',
      ],
    },
    safety: {
      title: '重要な安全ガイドライン',
      subtitle: '呼吸セッションを開始する前に必ずお読みください。',
      neverTitle: '次の状況では絶対に実践しないでください：',
      neverItems: [
        '自動車や乗り物の運転中',
        '水泳中、入浴中、または水の中にいるとき',
        'フリーダイビングや水中での活動中',
        '危険を伴う機械の操作中',
        '失神やめまいが危険を招く可能性のあるあらゆる場所',
      ],
      alwaysTitle: '必ず守るべきルール：',
      alwaysItems: [
        'ソファや床、ベッドの上に楽な姿勢で座るか横になる',
        '安全で静かな環境で行う',
        '自分の身体の声に耳を傾け、息止めを絶対に無理しない',
        '胸の痛みや強いめまいを感じた場合は直ちに中断する',
      ],
      disclaimer: '医療免責事項: HarmonyBreathはウェルネスおよび教育を目的としており、医学的アドバイスではありません。てんかん、高血圧、心臓疾患をお持ちの方、または妊娠中の方は、実践前に医師にご相談ください。',
    },
    about: {
      tag: 'ヴィム・ホフ呼吸法について',
      title: 'ヴィム・ホフ メソッドとは？',
      subtitle: 'ヴィム・ホフ呼吸法の科学的根拠から自律神経・免疫への影響、タイマーを使った安全な実践方法まで徹底解説。',
      disclosureTitle: '科学的調査と編集部の情報開示:',
      disclosureText: '本ページの内容は査読付き学術論文や臨床研究に基づき作成されています。呼吸法の背後にある生物学的メカニズムを正しく伝え、無料の高品質タイマーを提供することを目的としています。',
      introP1: 'HarmonyBreathの無料ヴィム・ホフ呼吸法タイマーへようこそ。ブラウザから手軽に本格的な呼吸セッションを実践できる最も使いやすいオンラインツールです。初心者からベテランまで、登録不要・完全無料でご利用いただけます。',
      introP2: '本ガイドは、自ら日常的に呼吸法を実践しているHarmonyBreath編集チームによって作成されました。',
      whatIsTitle: 'ヴィム・ホフ呼吸法の基本構造',
      whatIsP1: '「アイスマン」として知られるオランダのエクストリームアスリート、ヴィム・ホフによって考案された呼吸法です。30回の深いリズム呼吸、息止め（リテンション）、そして15秒の回復の呼吸という3つのフェーズで構成されています。',
      whatIsP2: '当サイトのタイマーは伝統的な3〜5ラウンドの構造に従い、最適なペーシングを維持できるようサポートします。',
      scienceTitle: 'ヴィム・ホフ メソッドの科学と生理機能',
      scienceP1: 'この呼吸法によってもたらされる活力と爽快感は、確立された生体メカニズムに裏付けられています：',
      sciencePoints: [
        {
          label: '呼吸性アルカローシスとCO2排出:',
          text: '深くリズミカルな呼吸により、肺から二酸化炭素（CO2）が急速に排出され、血液のpHが一時的にアルカリ性に傾きます。CO2は呼吸衝動の主因であるため、これを排出することで通常より遥かに長く楽に息を止めることが可能になります。',
        },
        {
          label: 'コントロールされた間欠的低酸素:',
          text: '息止め中、血中酸素飽和度（SpO2）が一時的に低下します。この穏やかで短い低酸素状態は細胞の適応能力を刺激し、呼吸器系のレジリエンスを向上させます。',
        },
        {
          label: 'アドレナリン分泌と集中力:',
          text: '過換気と息止めの組み合わせが交感神経を適度に刺激し、アドレナリンやノルアドレナリンの内因性サージを引き起こします。これにより、頭が冴え渡る明晰さと活力が得られます。',
        },
        {
          label: '免疫系の調節（ラドバウド大学の研究）:',
          text: 'ラドバウド大学で行われた画期的な臨床試験（Kox et al., 2014, PNAS）において、ヴィム・ホフ呼吸法の訓練を受けた被験者が自律神経系および自然免疫反応を意識的にコントロールし、炎症性サイトカインを抑制できることが実証されました。',
        },
      ],
      featuresTitle: 'ヴィム・ホフ オンラインタイマーの特長',
      featuresP1: '実践者の視点から使いやすさを追求した機能設計：',
      featuresList: [
        {
          label: '3フェーズ完全ガイド:',
          text: '広がる呼吸ハローと心地よいチャイム音で、画面を見つめ続けなくても呼吸と息止めの切り替えが直感的に分かります。',
        },
        {
          label: '難易度プリセット:',
          text: '初心者（息止め60秒）、中級（90秒）、上級（120秒）、エキスパート（150秒）から選択可能。',
        },
        {
          label: '自由なカスタム設定:',
          text: '呼吸回数、息止め秒数、呼吸スピード、ラウンド数を完全にカスタマイズできます。',
        },
        {
          label: '選べるアンビエント音源:',
          text: '目を閉じて没入できるよう、各フェーズに合わせた落ち着いたBGMと効果音を用意。',
        },
        {
          label: 'プライバシー重視の安心設計:',
          text: '履歴やベスト記録はすべてお使いの端末（ブラウザ）にのみ保存され、外部に送信されません。',
        },
      ],
      benefitsTitle: 'ヴィム・ホフ呼吸法の主なメリット',
      benefitsP1: '定期的な実践によって期待できる効果：',
      benefitsList: [
        'カフェインに頼らず朝から活力とエネルギーを高める',
        'プレッシャー下での意志力、集中力、冷静さを養う',
        '自律神経のバランスを整え、日常のストレス耐性を高める',
        '息止めに対する安心感と肺活量の有効活用を学ぶ',
        '冷水シャワーと組み合わせることで免疫力と活力を底上げする',
        '日々の自分の呼吸や身体の変化に対する繊細な気づきを得る',
      ],
      benefitsP2: '当タイマーを活用することで、自分の体力や体調に合わせて無理なく効果を体験できます。',
      howToUseTitle: 'タイマーの使い方',
      howToUseP1: '難易度プリセット（初めての方は「初心者」を推奨）を選び、「練習を開始する」を押すだけです。画面のアニメーションと音に合わせて呼吸を行います。',
      howToUseP2: '経験者の方はカスタム設定で自分に最適な呼吸ペースや息止め時間を設定できます。',
      howToUseP3: '必ず安全な座った姿勢または仰向けで行い、息止めを我慢しすぎないようにしましょう。',
      referencesTitle: '引用学術論文・エビデンス',
    },
    editorialBio: {
      title: 'HarmonyBreath 編集チームによる執筆・監修',
      desc: '本ガイドは、日常的にブレスワークを実践しているウェルネスライターと呼吸法専門チームによって作成されました。医学的な誇張を排し、誠実で役立つ情報をお届けします。',
      disclaimer: '本コンテンツは情報提供のみを目的としており、専門的な医療アドバイスに代わるものではありません。',
      linkText: '編集チームとミッションについて詳しく見る',
    },
    faqs: [
      {
        question: 'ヴィム・ホフ呼吸法はなぜこれほど強力なのですか？',
        answer: 'ヴィム・ホフ呼吸法は、深いリズミカルな呼吸と息止めを組み合わせることで、血液中の酸素と二酸化炭素のバランスを一時的に変化させ（呼吸性アルカローシスと間欠的低酸素）、アドレナリンを分泌させます。これにより、全身が活性化し、頭が冴え渡る独特の感覚が得られます。',
      },
      {
        question: '安全に始めるにはどうすればいいですか？',
        answer: 'まず、ベッドやソファなどの安全な場所でリラックスして座るか横になります。当サイトの「初心者」プリセットを使って、30回の深呼吸と無理のない息止め（約60秒、または吸いたいと感じるまで）を3ラウンド行ってみてください。慣れてきたら、朝のシャワーの最後に15〜30秒間冷水を浴びる習慣を組み合わせるのも効果的です。',
      },
      {
        question: 'ヴィム・ホフ呼吸法に危険性はありませんか？',
        answer: '健康な人が安全な場所（座るか横になる）で行う限り安全です。ただし、お風呂、プール、海などの水中や、自動車の運転中は絶対に実践しないでください。一時的なめまいや失神が生じた場合、命に関わる危険があります。てんかんや心疾患をお持ちの方、妊娠中の方は事前に医師にご相談ください。',
      },
      {
        question: 'ヴィム・ホフ（アイスマン）とは誰ですか？',
        answer: 'ヴィム・ホフはオランダ出身のエクストリームアスリートで、極寒の環境に耐える能力により数々のギネス世界記録を保持しています。彼は自身の経験をもとに、呼吸法、寒冷適応、マインドセットを融合した「ヴィム・ホフ メソッド」を確立しました。',
      },
      {
        question: 'ヴィム・ホフ呼吸法を行うと身体はどうなりますか？',
        answer: '手足の心地よいピリピリ感や身体の温かさを感じることが一般的です。自律神経が刺激され、深いリフレッシュ感と高い集中力が持続します。',
      },
      {
        question: '1日にどれくらい実践すべきですか？',
        answer: '朝の空腹時に1日1回、3〜4ラウンド行うのが標準的です。無理に長く息を止めることよりも、毎日継続して行うことが大切です。',
      },
      {
        question: '具体的なやり方の手順を教えてください。',
        answer: '1. 楽な姿勢で座るか横になります。2. 鼻または口からお腹と胸に深く息を吸い込み、自然に吐き出します（30回繰り返す）。3. 30回目の息を吐いた後、息を止めてリラックスします。4. 息を吸いたくなったら、大きく深く吸い込んで15秒間息を止めます。これで1ラウンド完了です。通常3〜4回繰り返します。',
      },
    ],
  },

  it: {
    metaTitle: 'Metodo Wim Hof: Timer Guidato di Respirazione e Trattenuta',
    metaDescription: 'Impara la respirazione del Metodo Wim Hof con il nostro timer guidato online gratuito. 30 respiri profondi, apnea a polmoni vuoti e respiro di recupero per energia, concentrazione e immunità.',
    keywords: 'respirazione wim hof, metodo wim hof, tecnica di respirazione wim hof, timer respirazione wim hof, respirazione guidata wim hof, benefici metodo wim hof, esercizi di respirazione wim hof, wim hof apnea, metodo wim hof come fare, respirazione uomo di ghiaccio',
    canonicalPath: '/it/wim-hof/',
    badge: 'RESPIRAZIONE GUIDATA & ENERGIA FISIOLOGICA GRATUITA',
    heroTitle: 'Il Metodo Wim Hof\nPadroneggia Mente e Fisiologia',
    heroSubtitle: 'Vivi l’esperienza della respirazione autentica in tre fasi del Metodo Wim Hof: iperventilazione controllata, ritenzione a polmoni vuoti e recupero con ossigenazione. Guidata con indicatori audio, visivi e tracciamento privato.',
    breadcrumbName: 'Respirazione Wim Hof',
    startPracticeBtn: 'Inizia la Pratica',
    jumpLinks: {
      timer: 'Timer',
      presets: 'Modalità',
      stats: 'Statistiche',
      guide: 'Guida',
      safety: 'Sicurezza',
      about: 'Info',
      faq: 'FAQ',
    },
    techniqueGuide: {
      tag: 'Meccanica Respiratoria',
      title: 'Come Funziona la Respirazione Wim Hof',
      desc: 'Padroneggia la sequenza in 3 fasi: respiri profondi e ritmati, ritenzione confortevole a polmoni vuoti e respiro rigenerante di recupero.',
      phases: [
        {
          number: '01',
          title: 'Fase 1: Respirazione Guidata',
          desc: 'Fai 30 respiri profondi e ritmati gonfiando addome e torace. Espira in modo naturale e fluido senza forzare.',
          specs: ['• 30 Respiri Totali', '• ~90s di Durata', '• Fluido e Continuo'],
        },
        {
          number: '02',
          title: 'Fase 2: Apnea a Polmoni Vuoti (Ritenzione)',
          desc: 'Dopo la 30ª espirazione, fermati e trattieni il respiro a polmoni vuoti. Rilassati completamente senza mai forzare.',
          specs: ['• 60s – 180s Ritenzione', '• Apnea Rilassata', '• Calma Mentale'],
        },
        {
          number: '03',
          title: 'Fase 3: Respiro di Recupero',
          desc: 'Quando senti lo stimolo a respirare, inspira profondamente al massimo e trattieni l’aria per 15 secondi prima di rilasciare.',
          specs: ['• 1 Inspirazione Piena', '• 15s di Ritenzione', '• Reset per il Round'],
        },
      ],
      paceTitle: 'Progressione del Ritmo di Respirazione',
      paceDesc: 'Il ritmo guidato accelera gradualmente a ogni round per facilitare l’ingresso nella sessione e intensificare l’effetto in modo naturale.',
      rounds: [
        {
          badge: 'Round 1',
          title: 'Lento e Rilassato',
          timing: 'Inspiro: 2,5s • Espiro: 1,5s (ciclo di 4s)',
          desc: 'Trova un ritmo comodo. Riempi prima l’addome e poi il torace con assoluta calma.',
        },
        {
          badge: 'Round 2',
          title: 'Più Dinamico',
          timing: 'Inspiro: 2s • Espiro: 1s (ciclo di 3s)',
          desc: 'Mantieni inspirazioni piene ed espirazioni rilassate aumentando naturalmente il passo.',
        },
        {
          badge: 'Round 3–5',
          title: 'Ritmico ed Energico',
          timing: 'Inspiro: 1,5s • Espiro: 1s (ciclo di 2,5s)',
          desc: 'Inspirazioni ampie ed espirazioni spontanee. Il respiro scorre continuo come un’onda marina.',
        },
      ],
      customNoteTitle: 'Sessioni Personalizzate:',
      customNoteDesc: 'Puoi impostare la durata del ciclo (da 2 a 6 secondi), il numero di respiri e il tempo di apnea nel pannello di personalizzazione.',
      benefitsTag: 'Benefici Sperimentati',
      benefitsList: [
        'Rilassamento profondo del sistema nervoso',
        'Focalizzazione e lucidità mentale aumentate',
        'Maggiore resilienza e gestione dello stress',
        'Connessione profonda tra mente e corpo',
      ],
    },
    safety: {
      title: 'Linee Guida Essenziali di Sicurezza',
      subtitle: 'Da leggere attentamente prima di iniziare qualsiasi pratica.',
      neverTitle: 'Non praticare MAI la respirazione Wim Hof:',
      neverItems: [
        'Alla guida o al comando di qualsiasi veicolo',
        'Nuotando, nella vasca da bagno o in acqua',
        'Durante immersioni subacquee o apnea in acqua',
        'Azionando macchinari pericolosi',
        'In qualsiasi situazione in cui uno svenimento possa provocare danni',
      ],
      alwaysTitle: 'Pratica SEMPRE:',
      alwaysItems: [
        'Comodamente seduto su un divano, cuscino o tappetino',
        'Sdraiato in un ambiente sicuro e tranquillo',
        'Ascoltando il tuo corpo: non forzare mai l’apnea oltre il comfort',
        'Fermandoti immediatamente in caso di dolore al petto o forti vertigini',
      ],
      disclaimer: 'Disclaimer Medico: HarmonyBreath ha scopo esclusivamente divulgativo e di benessere. Non costituisce consiglio medico. Persone con epilessia, ipertensione, cardiopatie o in gravidanza devono consultare un medico prima della pratica.',
    },
    about: {
      tag: 'Sul Metodo Wim Hof',
      title: 'Cos’è il Metodo di Respirazione Wim Hof?',
      subtitle: 'Tutto quello che c’è da sapere sulla tecnica Wim Hof: meccanismi biologici, studi clinici e come praticare in sicurezza con il nostro timer.',
      disclosureTitle: 'Rigore Scientifico ed Editoriale:',
      disclosureText: 'I contenuti di questa guida sono basati su letteratura scientifica peer-reviewed e pubblicazioni cliniche. Il nostro obiettivo è spiegare la fisiologia della respirazione offrendo strumenti gratuiti di alta qualità.',
      introP1: 'Benvenuto sul timer guidato gratuito per la respirazione Wim Hof di HarmonyBreath: lo strumento online più completo per praticare comodamente dal tuo browser. Che tu sia un principiante o un praticante esperto, esegui sessioni complete senza costi né registrazioni.',
      introP2: 'Questa guida è stata realizzata dal team editoriale di HarmonyBreath, composto da praticanti quotidiani di breathwork che utilizzano questo strumento nella loro routine.',
      whatIsTitle: 'Come è strutturata la respirazione Wim Hof?',
      whatIsP1: 'Ideato dall’atleta olandese Wim Hof ("The Iceman"), il metodo unisce tre fasi: iperventilazione ritmica (30 respiri profondi), apnea a polmoni vuoti (ritenzione) e un respiro di recupero di 15 secondi a pieni polmoni.',
      whatIsP2: 'Il nostro timer garantisce il ritmo perfetto a ogni round, accompagnandoti passo dopo passo.',
      scienceTitle: 'La Scienza e la Fisiologia del Metodo Wim Hof',
      scienceP1: 'La straordinaria energia generata dalla tecnica affonda le radici in meccanismi biologici comprovati:',
      sciencePoints: [
        {
          label: 'Alcalosi Respiratoria ed Espulsione di CO2:',
          text: 'La respirazione rapida ed energica elimina velocemente l’anidride carbonica (CO2) dai polmoni, alzando temporaneamente il pH ematico. Essendo la CO2 il trigger principale dello stimolo a respirare, la sua diminuzione consente di trattenere il respiro molto più a lungo e senza ansia.',
        },
        {
          label: 'Ipossia Intermittente Controllata:',
          text: 'Durante l’apnea a polmoni vuoti, la saturazione di ossigeno (SpO2) scende brevemente. Questa ipossia intermittente stimola adattamenti cellulari positivi e allena la resistenza allo stress.',
        },
        {
          label: 'Rilascio di Adrenalina ed Energia:',
          text: 'L’iperventilazione combinata all’apnea attiva il sistema nervoso simpatico stimolando la produzione di adrenalina e noradrenalina, donando vigore fisico, calore e immediata lucidità mentale.',
        },
        {
          label: 'Modulazione del Sistema Immunitario (Studio Radboud):',
          text: 'Uno storico studio clinico della Radboud University (Kox et al., 2014, PNAS) ha dimostrato che i praticanti del Metodo Wim Hof possono influenzare volontariamente il sistema nervoso autonomo e ridurre la risposta infiammatoria dell’organismo.',
        },
      ],
      featuresTitle: 'Caratteristiche del Nostro Timer Wim Hof Online',
      featuresP1: 'Progettato nei minimi dettagli per la migliore esperienza possibile:',
      featuresList: [
        {
          label: 'Sessioni Guidate in 3 Fasi:',
          text: 'Halo visivo espandibile e segnali sonori nitidi per indicare ogni momento di inspirazione, espirazione e ritenzione.',
        },
        {
          label: 'Livelli di Difficoltà Preimpostati:',
          text: 'Principiante (60s di apnea), Intermedio (90s), Avanzato (120s) ed Esperto (150s).',
        },
        {
          label: 'Personalizzazione Totale:',
          text: 'Modifica liberamente numero di respiri (da 15 a 60), tempo di ritenzione (da 30s a 300s) e numero di round.',
        },
        {
          label: 'Colonna Sonora e Atmosfera:',
          text: 'Suoni d’ambiente rilassanti per praticare a occhi chiusi senza guardare lo schermo.',
        },
        {
          label: 'Massima Privacy:',
          text: 'I tuoi record e le statistiche rimangono memorizzati unicamente sul tuo dispositivo.',
        },
      ],
      benefitsTitle: 'Benefici della Respirazione Wim Hof',
      benefitsP1: 'Praticare con costanza produce effetti tangibili su corpo e mente:',
      benefitsList: [
        'Energia immediata e risveglio tonico al mattino senza bisogno di caffeina',
        'Allenamento della forza di volontà, concentrazione e calma sotto pressione',
        'Migliore regolazione del sistema nervoso e resistenza allo stress quotidiano',
        'Maggiore confidenza e tranquillità nel trattenere il respiro',
        'Sinergia perfetta con docce fredde per stimolare vitalità e difese immunitarie',
        'Ascolto consapevole del proprio corpo e del respiro nella vita di tutti i giorni',
      ],
      benefitsP2: 'Il nostro timer ti permette di progredire con sicurezza e gradualità.',
      howToUseTitle: 'Come Usare Questo Timer',
      howToUseP1: 'Scegli il tuo livello (consigliamo Principiante per iniziare) e premi "Inizia la Pratica". Segui l’animazione e i segnali audio.',
      howToUseP2: 'Gli utenti esperti possono impostare parametri personalizzati per velocità e tempi di apnea.',
      howToUseP3: 'Pratica sempre in posizione seduta o sdraiata e non forzare mai l’apnea oltre il tuo limite naturale.',
      referencesTitle: 'Riferimenti Scientifici e Studi Clinici',
    },
    editorialBio: {
      title: 'Scritto dal Team Editoriale di HarmonyBreath',
      desc: 'Questa guida è stata creata dal nostro team di esperti di respirazione consapevole e benessere. Analizziamo ogni tecnica con rigore scientifico, fornendo indicazioni oneste e prive di promesse miracolistiche.',
      disclaimer: 'Questo contenuto ha scopo puramente informativo e non sostituisce il parere di un medico.',
      linkText: 'Scopri di più sul nostro team e la nostra missione',
    },
    faqs: [
      {
        question: 'Perché la respirazione Wim Hof è così potente?',
        answer: 'Unisce respirazione profonda e ritmata a fasi di apnea a polmoni vuoti, modificando temporaneamente la chimica del sangue (alcalosi respiratoria e ipossia transitoria). Questo rilascia adrenalina e stimola una sensazione rigenerante di calore ed energia diffusa in tutto il corpo.',
      },
      {
        question: 'Come iniziare il Metodo Wim Hof in sicurezza?',
        answer: 'Siediti o sdraiati in un luogo tranquillo. Usa la modalità Principiante del nostro timer (30 respiri e circa 60 secondi di apnea o fino al primo stimolo naturale a respirare) per 3 round. In seguito potrai abbinare la pratica a 15–30 secondi di acqua fredda alla fine della doccia.',
      },
      {
        question: 'La respirazione Wim Hof è sicura?',
        answer: 'Per le persone sane è assolutamente sicura se praticata seduti o sdraiati in ambiente protetto. Non deve MAI essere praticata in acqua (vasca, piscina, mare) o alla guida, poiché una perdita momentanea di coscienza sarebbe pericolosa. In caso di epilessia, patologie cardiache o gravidanza consultare prima il medico.',
      },
      {
        question: 'Chi è Wim Hof ("The Iceman")?',
        answer: 'Wim Hof è un atleta estremo olandese celebre per i suoi record mondiali di resistenza al freddo. Ha sviluppato questo metodo unendo respirazione, esposizione al freddo e meditazione per potenziare la salute.',
      },
      {
        question: 'Cosa accade durante la sessione?',
        answer: 'È normale avvertire formicolii lievi alle estremità, sensazione di calore diffuso e uno stato di grande quiete e lucidità mentale.',
      },
      {
        question: 'Quanto spesso va praticata?',
        answer: 'La maggior parte dei praticanti esegue una sessione da 3 a 4 round ogni mattina a digiuno.',
      },
      {
        question: 'Come fare la respirazione Wim Hof passo a passo?',
        answer: '1. Mettiti comodo seduto o sdraiato. 2. Inspira profondamente col naso o la bocca riempiendo pancia e petto, ed espira senza forzare (30 volte). 3. Alla 30ª espirazione svuota i polmoni e trattieni il respiro quanto vuoi. 4. Quando senti il bisogno di respirare, fai un respiro profondo e trattieni 15 secondi. Ripeti 3 o 4 volte.',
      },
      {
        question: 'Si può fare la respirazione Wim Hof prima di dormire?',
        answer: 'Anche se la respirazione Wim Hof aumenta temporaneamente l’adrenalina e la lucidità (rendendola ideale per il risveglio), molti praticanti la eseguono la sera per liberare la mente dallo stress e favorire un rilassamento profondo. Se la pratichi prima di dormire, mantieni un ritmo calmo, evita apnee forzate e concludi con qualche minuto di respirazione lenta dal naso (come il metodo 4-7-8) per favorire un sonno profondo. Pratica sempre a letto in posizione supina.',
      },
      {
        question: 'Si possono fare 10 round di respirazione Wim Hof?',
        answer: 'Sì, i praticanti esperti possono eseguire sessioni estese fino a 10 round impostando il timer personalizzato. Tuttavia, i principianti dovrebbero sempre iniziare con 3 o 4 round. Durante sessioni lunghe come 10 round, rimani sempre sdraiato in un ambiente sicuro, non forzare le apnee e concediti qualche minuto di riposo per integrare la pratica.',
      },
    ],
  },
};
