import type { SupportedLanguage } from './ui';

export interface Relaxing478Content {
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
  phases: {
    inhale: string;
    hold: string;
    exhale: string;
  };
  instructions: {
    inhale: string;
    hold: string;
    exhale: string;
  };
  guide: {
    whatIsTitle: string;
    whatIsDesc1: string;
    whatIsDesc2: string;
    howToTitle: string;
    howToSubtitle: string;
    howToSteps: { step: string; title: string; time: string; desc: string }[];
    benefitsTitle: string;
    benefits: { title: string; desc: string }[];
    scienceTitle: string;
    scienceDesc1: string;
    scienceDesc2: string;
    scienceBullets: { title: string; desc: string }[];
    whenToPracticeTitle: string;
    whenToPracticeDesc: string;
    whenToPracticeCards: { title: string; desc: string }[];
    consistencyNote: string;
    patternTitle: string;
    patternDesc1: string;
    patternDesc2: string;
    featuresTitle: string;
    featuresDesc: string;
    features: { title: string; desc: string }[];
  };
  safety: {
    title: string;
    subtitle: string;
    neverTitle: string;
    neverItems: string[];
    alwaysTitle: string;
    alwaysItems: string[];
    medicalDisclaimer: string;
  };
  researchDisclosure: {
    label: string;
    desc: string;
  };
  referencesTitle: string;
  references: { citation: string; journal: string; url: string; linkText: string }[];
  authorBio: {
    title: string;
    desc: string;
    disclaimer: string;
    learnMore: string;
  };
  faqs: { question: string; answer: string }[];
}

export const relaxing478I18n: Record<SupportedLanguage, Relaxing478Content> = {
  en: {
    metaTitle: '4-7-8 Breathing Technique: Guided Timer for Sleep & Anxiety',
    metaDescription: 'Master the 4-7-8 breathing method with our free guided timer. Inhale 4s, hold 7s, exhale 8s to calm your nervous system and fall asleep faster.',
    keywords: '4-7-8 breathing, 4-7-8 breathing method, 4-7-8 breathing technique, 4-7-8 breathing timer, relaxing breath technique, breathing exercise for sleep, 4-7-8 breathing benefits, dr andrew weil breathing',
    canonicalPath: '/4-7-8-breathing/',
    badge: 'DEEP RELAXATION & SLEEP INDUCTION ENGINE',
    heroTitle: '4-7-8 Breathing\nDeep Relaxing Breath',
    heroSubtitle: 'Unwind your mind and body with our free online guided 4-7-8 breathing timer. Popularized by Dr. Andrew Weil, the 4-7-8 technique uses extended exhalation to trigger deep nervous system calm.',
    breadcrumbName: '4-7-8 Breathing',
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
    phases: {
      inhale: 'Inhale',
      hold: 'Hold',
      exhale: 'Exhale',
    },
    instructions: {
      inhale: 'Breathe in quietly through your nose into your abdomen for 4 seconds.',
      hold: 'Hold your breath gently without tension for 7 seconds.',
      exhale: 'Exhale completely through your mouth with a soft whoosh sound for 8 seconds.',
    },
    guide: {
      whatIsTitle: 'What Is the 4-7-8 Breathing Method?',
      whatIsDesc1: 'Welcome to HarmonyBreath, your free web tool for mastering 4-7-8 breathing. Popularized by Integrative Medicine specialist Dr. Andrew Weil and rooted in traditional pranayama practice, the 4-7-8 breathing method is a slow, calming exercise designed to quiet racing thoughts and induce rapid physiological relaxation.',
      whatIsDesc2: 'Whether you are dealing with bedtime restlessness, chronic tension, or acute stress, our interactive 4-7-8 breathing timer offers visual pacing rings, customizable cycle presets, and calming soundscapes for an effortless session.',
      howToTitle: 'How to Practice 4-7-8 Breathing',
      howToSubtitle: 'Follow this evidence-based 3-step rhythm for maximum nervous system regulation',
      howToSteps: [
        {
          step: '1',
          title: 'Inhale (Nose)',
          time: '4 Seconds',
          desc: 'Close your mouth and inhale quietly through your nose for a count of 4. Expand your abdomen smoothly without straining.',
        },
        {
          step: '2',
          title: 'Hold Breath',
          time: '7 Seconds',
          desc: 'Retain your breath gently for a count of 7. Keep your shoulders, neck, and jaw relaxed while maintaining posture.',
        },
        {
          step: '3',
          title: 'Exhale (Mouth)',
          time: '8 Seconds',
          desc: 'Exhale completely through your mouth around your tongue for a count of 8, creating a soothing whoosh sound as air releases.',
        },
      ],
      benefitsTitle: 'Scientifically Documented Benefits',
      benefits: [
        {
          title: 'Rapid Parasympathetic Tone',
          desc: 'Doubling exhalation duration relative to inhalation stimulates the vagus nerve and activates the body’s rest-and-digest response.',
        },
        {
          title: 'Faster Sleep Onset',
          desc: 'Downregulates sympathetic nervous activity and quiets cognitive rumination before bedtime.',
        },
        {
          title: 'Lower Nocturnal Cortisol',
          desc: 'Helps blunt elevated cortisol and adrenaline, restoring autonomic equilibrium in minutes.',
        },
        {
          title: 'Heart Rate Deceleration',
          desc: 'Engages respiratory sinus arrhythmia, lowering resting beats per minute and smoothing heart rate variability.',
        },
      ],
      scienceTitle: 'The Physiology & Science Behind 4-7-8 Breathing',
      scienceDesc1: 'The effectiveness of the 4-7-8 technique rests on fundamental autonomic neurobiology and respiratory mechanics:',
      scienceDesc2: 'During normal rapid breathing, sympathetic tone predominates. By deliberately stretching the exhalation to 8 seconds, you capitalize on the body’s natural cardiorespiratory reflexes.',
      scienceBullets: [
        {
          title: 'Vagus Nerve Stimulation (8-Second Exhale):',
          desc: 'Inhalation accelerates heart rate while exhalation decelerates it via the vagus nerve. Spending twice as long on the exhale maximizes parasympathetic tone and vascular relaxation.',
        },
        {
          title: 'Capillary Gas Exchange (7-Second Hold):',
          desc: 'The 7-second pause allows oxygen to saturate alveolar capillaries while mildly elevating arterial CO2, signaling the brainstem that survival conditions are completely safe.',
        },
        {
          title: 'Sleep Induction & Cortisol Dampening:',
          desc: 'Regular evening practice lowers evening salivary cortisol and interrupts obsessive bedtime cognitive loops, facilitating rapid sleep onset.',
        },
      ],
      whenToPracticeTitle: 'When to Practice 4-7-8 Breathing',
      whenToPracticeDesc: 'Because 4-7-8 breathing is inherently sedating, it functions best as a calming transition rather than an energizing workout:',
      whenToPracticeCards: [
        {
          title: 'Before Sleep',
          desc: 'A quiet 4-to-8 cycle session in bed with lights dimmed prepares your brain and cardiovascular system for restorative deep sleep.',
        },
        {
          title: 'During Stressful Moments',
          desc: 'Between meetings, after tense conversations, or during sensory overload, a few deliberate rounds re-centers emotional equilibrium.',
        },
      ],
      consistencyNote: 'Consistency beats intensity. Practicing twice daily for 4 cycles is far more beneficial than an occasional long session.',
      patternTitle: 'The 4-7-8 Pattern for Sleep & Daily Calm',
      patternDesc1: 'The 4-7-8 cadence provides an anchor for your attention. Inhaling for 4, holding for 7, and releasing for 8 counts leaves zero mental bandwidth for anxious rumination.',
      patternDesc2: 'With daily adherence, your nervous system develops an conditioned relaxation response, enabling you to access calmness on demand within 60 seconds.',
      featuresTitle: 'Features of Our Interactive 4-7-8 Breathing Timer',
      featuresDesc: 'Designed to eliminate guesswork and support effortless mindful practice:',
      features: [
        {
          title: 'Real-Time Visual Guidance:',
          desc: 'A smooth circular progress aura expands during inhale (4s), holds in place (7s), and contracts during exhale (8s).',
        },
        {
          title: 'Preset & Custom Modes:',
          desc: 'Select from 4, 8, 12, or 16 cycle presets or configure phase seconds to match your lung capacity perfectly.',
        },
        {
          title: 'Audio Chimes & Ambient Tracks:',
          desc: 'Gentle bell cues indicate phase shifts so you can practice comfortably with closed eyes.',
        },
        {
          title: 'Zero Tracking & Local Privacy:',
          desc: 'Your statistics and streaks are stored 100% locally in your browser with zero registration required.',
        },
      ],
    },
    safety: {
      title: 'Essential Safety Guidelines',
      subtitle: 'Please review before starting your 4-7-8 breathing session.',
      neverTitle: 'NEVER Practice 4-7-8 Breathing:',
      neverItems: [
        'While driving, operating a car, or cycling',
        'While swimming, in a bath, or near water',
        'While operating machinery or power equipment',
        'In any position where lightheadedness could cause physical injury',
      ],
      alwaysTitle: 'ALWAYS Practice:',
      alwaysItems: [
        'Sitting comfortably with spinal support or lying down safely',
        'Starting with 4 cycles per session (do not exceed 8 cycles when beginning)',
        'Keeping breath soft and effortless—never force the 7-second hold',
        'Stopping immediately if you feel dizzy or lightheaded, returning to natural breath',
      ],
      medicalDisclaimer: 'Medical Disclaimer: HarmonyBreath provides wellness tools for educational purposes only. This is not medical advice. Individuals with cardiovascular conditions, asthma, COPD, epilepsy, or who are pregnant should consult their physician before performing breath holds.',
    },
    researchDisclosure: {
      label: 'Scientific Research & Editorial Disclosure:',
      desc: 'Content is compiled from peer-reviewed clinical sleep literature, autonomic neuroscience studies, and integrative medicine guidelines.',
    },
    referencesTitle: 'Scientific References & Cited Studies',
    references: [
      {
        citation: 'Vierra, J., et al. (2022). Effects of slow breathing exercises on sleep quality and heart rate variability.',
        journal: 'Journal of Clinical Sleep Medicine',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9316023/',
        linkText: '[PubMed / PMC]',
      },
      {
        citation: 'Balban, M. Y., Neri, E., Kaelberer, M. M., et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal.',
        journal: 'Cell Reports Medicine, 4(1), 100895',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36630953/',
        linkText: '[PubMed]',
      },
    ],
    authorBio: {
      title: 'Written by the HarmonyBreath Editorial Team',
      desc: 'This guide was created by our in-house team of breathwork practitioners and medical researchers. We evaluate each technique against published physiological literature to keep our advice safe, practical, and grounded in evidence.',
      disclaimer: 'This content is for educational purposes only and is not a substitute for professional medical care.',
      learnMore: 'Learn more about our editorial standards',
    },
    faqs: [
      {
        question: 'How does 4-7-8 breathing work?',
        answer: 'The 4-7-8 breathing method uses a strict mathematical ratio: inhale for 4 seconds, retain for 7 seconds, and exhale for 8 seconds. Because the exhalation is twice as long as the inhalation, it stimulates baroreceptors that cue the vagus nerve to slow heart rate, drop blood pressure, and activate parasympathetic calm.',
      },
      {
        question: 'Does the 4-7-8 sleep trick really work?',
        answer: 'Yes, clinical trials and sleep medicine practitioners find 4-7-8 breathing highly effective for insomnia. It reduces nocturnal sympathetic autonomic arousal and stops mental racing by forcing conscious concentration on counting.',
      },
      {
        question: 'How many times a day should I do 4-7-8 breathing?',
        answer: 'Dr. Andrew Weil recommends practicing twice daily, once in the morning and once in the evening before sleep. Beginners should stick to 4 cycles per session for the first month before gradually building up to 8 cycles.',
      },
      {
        question: 'How long does it take to fall asleep with 4-7-8 breathing?',
        answer: 'With consistent daily practice, many practitioners report falling asleep within 1 to 3 minutes after finishing 4 to 8 cycles. Beginners usually need 2 to 3 weeks of daily conditioning for the relaxation reflex to become automatic.',
      },
      {
        question: 'Is 4-7-8 breathing dangerous?',
        answer: 'When performed while seated or lying down, 4-7-8 breathing is very safe for healthy adults. However, you must never practice it while driving or in water. If you feel lightheaded during the 7-second hold, shorten the counts to 2-3.5-4 seconds until your carbon dioxide tolerance improves.',
      },
      {
        question: 'Can beginners adjust the timing counts?',
        answer: 'Yes. The crucial factor is maintaining the 4:7:8 ratio rather than the absolute seconds. If 7 seconds feels too long, you can practice 2s in, 3.5s hold, and 4s out using our interactive custom settings modal.',
      },
    ],
  },
  es: {
    metaTitle: 'Temporizador y Guía de Respiración 4-7-8 Gratis | HarmonyBreath',
    metaDescription: 'Domina la respiración 4-7-8 con nuestro temporizador guiado online. Inhala 4s, retén 7s y exhala 8s para calmar la ansiedad y conciliar el sueño rápido.',
    keywords: 'respiración 4-7-8, técnica 4-7-8, método 4-7-8, temporizador respiración 4-7-8, respiración para dormir, respiración relajante, dr andrew weil respiración, ejercicios respiración ansiedad',
    canonicalPath: '/es/4-7-8-breathing/',
    badge: 'MOTOR DE RELAJACIÓN PROFUNDA E INDUCCIÓN AL SUEÑO',
    heroTitle: 'Respiración 4-7-8\nTécnica de Respiración Relajante',
    heroSubtitle: 'Relaja cuerpo y mente con nuestro temporizador guiado gratuito de respiración 4-7-8. Popularizada por el Dr. Andrew Weil, esta técnica utiliza una exhalación prolongada para activar una profunda calma parasimpática.',
    breadcrumbName: 'Respiración 4-7-8',
    startPracticeBtn: 'Comenzar Práctica',
    jumpLinks: {
      timer: 'Temporizador',
      presets: 'Modos',
      stats: 'Estadísticas',
      guide: 'Guía',
      safety: 'Seguridad',
      about: 'Información',
      faq: 'Preguntas',
    },
    phases: {
      inhale: 'Inhala',
      hold: 'Retén',
      exhale: 'Exhala',
    },
    instructions: {
      inhale: 'Inhala suavemente por la nariz hacia el abdomen durante 4 segundos.',
      hold: 'Retén el aire con calma y sin tensión durante 7 segundos.',
      exhale: 'Exhala completamente por la boca produciendo un suave sonido durante 8 segundos.',
    },
    guide: {
      whatIsTitle: '¿Qué es el Método de Respiración 4-7-8?',
      whatIsDesc1: 'La respiración 4-7-8 es una técnica de regulación autonómica desarrollada por el especialista en medicina integrativa Dr. Andrew Weil, con raíces en el pranayama ancestral. Es un ejercicio sedante natural que interrumpe la respuesta de lucha o huida y promueve el descanso.',
      whatIsDesc2: 'Ya sea que enfrentes insomnio nocturno, tensión acumulada o estrés laboral, nuestro temporizador interactivo te brinda anillos visuales, paisajes sonoros relajantes y preajustes de ciclos adaptados a ti.',
      howToTitle: 'Cómo Practicar la Respiración 4-7-8',
      howToSubtitle: 'Sigue esta cadencia de 3 fases para activar el sistema nervioso parasimpático',
      howToSteps: [
        {
          step: '1',
          title: 'Inhalar (Nariz)',
          time: '4 Segundos',
          desc: 'Cierra la boca e inhala silenciosamente por la nariz durante 4 segundos, expandiendo el abdomen suavemente.',
        },
        {
          step: '2',
          title: 'Retener el Aire',
          time: '7 Segundos',
          desc: 'Mantén el aire en los pulmones durante 7 segundos. Relaja los hombros, la mandíbula y el cuello.',
        },
        {
          step: '3',
          title: 'Exhalar (Boca)',
          time: '8 Segundos',
          desc: 'Exhala por completo por la boca durante 8 segundos emitiendo un sonido suave de alivio.',
        },
      ],
      benefitsTitle: 'Beneficios Científicamente Comprobados',
      benefits: [
        {
          title: 'Activación del Nervio Vago',
          desc: 'Una exhalación el doble de larga que la inhalación estimula el nervio vago y desacelera el ritmo cardíaco.',
        },
        {
          title: 'Inducción Rápida al Sueño',
          desc: 'Disminuye la excitación simpática y frena el torrente de pensamientos antes de dormir.',
        },
        {
          title: 'Reducción de Cortisol',
          desc: 'Equilibra las hormonas del estrés y alivia la tensión muscular en pocos minutos.',
        },
        {
          title: 'Mejora de la Variabilidad Cardíaca',
          desc: 'Sincroniza la arritmia sinusal respiratoria fortaleciendo la resiliencia cardiovascular.',
        },
      ],
      scienceTitle: 'Fisiología y Ciencia de la Respiración 4-7-8',
      scienceDesc1: 'El método 4-7-8 basa su eficacia en principios neurofisiológicos fundamentales del sistema nervioso autónomo:',
      scienceDesc2: 'Durante estados de estrés, predomina la respiración corta y acelerada. Al prolongar deliberadamente la fase de expulsión de aire, provocamos una respuesta refleja de serenidad.',
      scienceBullets: [
        {
          title: 'Estimulación Vagal (Exhalación de 8 Segundos):',
          desc: 'Al espirar durante el doble de tiempo que al inspirar, se activa el freno vagal del corazón, reduciendo pulsaciones y presión arterial.',
        },
        {
          title: 'Difusión de Gases (Retención de 7 Segundos):',
          desc: 'La pausa de 7 segundos favorece la captación alveolar de oxígeno y estabiliza el dióxido de carbono, comunicando seguridad al tronco encefálico.',
        },
        {
          title: 'Disminución del Arousal Nocturno:',
          desc: 'La práctica nocturna apaga la hiperactivación mental y prepara los circuitos del sueño profundo.',
        },
      ],
      whenToPracticeTitle: 'Cuándo Practicar la Técnica 4-7-8',
      whenToPracticeDesc: 'Dado que es una práctica naturalmente sedante, es idónea para transiciones hacia el descanso:',
      whenToPracticeCards: [
        {
          title: 'Antes de Dormir',
          desc: 'Realizar de 4 a 8 ciclos en la cama con luces tenues prepara tu fisiología para conciliar el sueño rápidamente.',
        },
        {
          title: 'En Momentos de Ansiedad',
          desc: 'Frente a situaciones tensas o pensamientos intrusivos, 4 ciclos restablecen la compostura y la lucidez.',
        },
      ],
      consistencyNote: 'La constancia supera a la duración. Practicar 4 ciclos dos veces al día es más efectivo que sesiones largas ocasionales.',
      patternTitle: 'El Patrón 4-7-8 para la Calma Diaria',
      patternDesc1: 'La proporción 4-7-8 actúa como un ancla mental irremplazable, ocupando toda la atención cognitiva e impidiendo la rumiación ansiosa.',
      patternDesc2: 'Con la práctica regular, el cerebro aprende este condicionamiento de relajación inmediata a demanda.',
      featuresTitle: 'Características del Temporizador 4-7-8',
      featuresDesc: 'Herramienta interactiva diseñada para una práctica fluida y accesible:',
      features: [
        {
          title: 'Guía Visual en Tiempo Real:',
          desc: 'Aura circular que se expande en 4s, se mantiene 7s y se contrae suavemente en 8s.',
        },
        {
          title: 'Modos Predefinidos y Personalizados:',
          desc: 'Elige entre 4, 8, 12 o 16 ciclos o ajusta los tiempos según tu capacidad pulmonar.',
        },
        {
          title: 'Campanas de Audio Suaves:',
          desc: 'Sonidos discretos que marcan cada fase para practicar con los ojos cerrados.',
        },
        {
          title: 'Privacidad Absoluta:',
          desc: 'Datos guardados exclusivamente en tu navegador local, sin registro ni cuentas.',
        },
      ],
    },
    safety: {
      title: 'Pautas de Seguridad Esenciales',
      subtitle: 'Lee con atención antes de iniciar tu sesión de respiración.',
      neverTitle: 'NUNCA practiques la respiración 4-7-8:',
      neverItems: [
        'Conduciendo o manejando cualquier vehículo',
        'En el agua, bañera, piscina o cerca del mar',
        'Operando maquinaria pesada o herramientas peligrosas',
        'En cualquier situación donde un mareo implique peligro físico',
      ],
      alwaysTitle: 'SIEMPRE practica:',
      alwaysItems: [
        'Sentado con la espalda apoyada o acostado en un lugar seguro',
        'Iniciando con 4 ciclos por sesión (no superar 8 al comenzar)',
        'Manteniendo la respiración suave, sin forzar jamás la retención',
        'Deteniéndote si sientes mareo y volviendo a respirar normalmente',
      ],
      medicalDisclaimer: 'Aviso Médico: HarmonyBreath proporciona herramientas educativas de bienestar. No constituye consejo médico. Personas con afecciones cardíacas, asma, hipertensión o embarazadas deben consultar a un médico.',
    },
    researchDisclosure: {
      label: 'Divulgación Científica y Editorial:',
      desc: 'Contenido fundamentado en publicaciones clínicas sobre medicina del sueño y neurobiología autonómica.',
    },
    referencesTitle: 'Referencias Científicas y Ensayos Clínicos',
    references: [
      {
        citation: 'Vierra, J., et al. (2022). Effects of slow breathing exercises on sleep quality and heart rate variability.',
        journal: 'Journal of Clinical Sleep Medicine',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9316023/',
        linkText: '[PubMed / PMC]',
      },
      {
        citation: 'Balban, M. Y., Neri, E., Kaelberer, M. M., et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal.',
        journal: 'Cell Reports Medicine, 4(1), 100895',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36630953/',
        linkText: '[PubMed]',
      },
    ],
    authorBio: {
      title: 'Redactado por el Equipo Editorial de HarmonyBreath',
      desc: 'Guía elaborada por instructores de respiración consciente e investigadores en salud integral, contrastada con la literatura médica contemporánea.',
      disclaimer: 'Este contenido es de carácter divulgativo y no reemplaza la atención médica profesional.',
      learnMore: 'Conoce nuestros estándares editoriales',
    },
    faqs: [
      {
        question: '¿Cómo funciona la respiración 4-7-8?',
        answer: 'Funciona mediante un ritmo preciso: inhalas 4 segundos, retienes 7 segundos y exhalas 8 segundos. La prolongación de la salida del aire activa el nervio vago, desacelerando el corazón y reduciendo la tensión arterial.',
      },
      {
        question: '¿Realmente ayuda la técnica 4-7-8 para dormir?',
        answer: 'Sí. Estudios clínicos demuestran que ralentizar la respiración reduce el tono simpático y detiene los pensamientos repetitivos que impiden conciliar el sueño.',
      },
      {
        question: '¿Cuántas veces al día se debe hacer?',
        answer: 'El Dr. Andrew Weil recomienda realizarla al menos 2 veces al día (mañana y noche), comenzando con 4 ciclos por sesión.',
      },
      {
        question: '¿Cuánto tiempo tarda en hacer efecto?',
        answer: 'Con práctica constante durante 2 o 3 semanas, el reflejo de relajación se vuelve inmediato y muchas personas se duermen en 1 a 3 minutos.',
      },
      {
        question: '¿Es peligrosa la técnica 4-7-8?',
        answer: 'Es completamente segura en reposo. Nunca debe practicarse conduciendo o en el agua. Si experimentas mareo leve, reduce los tiempos manteniendo la proporción.',
      },
      {
        question: '¿Los principiantes pueden modificar los segundos?',
        answer: 'Sí. Lo esencial es conservar la relación proporcional 4:7:8 (por ejemplo, 2s inhalar, 3.5s retener y 4s exhalar).',
      },
    ],
  },
  de: {
    metaTitle: 'Kostenloser 4-7-8 Atemtechnik Timer & Anleitung | HarmonyBreath',
    metaDescription: 'Meistern Sie die 4-7-8 Atemtechnik mit unserem kostenlosen Online-Timer. 4s Einatmen, 7s Halten, 8s Ausatmen für tiefe Entspannung und besseren Schlaf.',
    keywords: '4-7-8 atemtechnik, 4-7-8 methode, 4-7-8 atmen timer, einschlaf atemtechnik, atemübung schlafen, vagusnerv stimulieren, dr andrew weil atemtechnik, atemübungen gegen stress',
    canonicalPath: '/de/4-7-8-breathing/',
    badge: 'TIEFENENTSPANNUNG & SCHLAFINDUSKTIONS-SYSTEM',
    heroTitle: '4-7-8 Atemtechnik\nTiefe Entspannungsatmung',
    heroSubtitle: 'Bringen Sie Körper und Geist zur Ruhe mit unserem kostenlosen geführten 4-7-8 Atemtimer. Entwickelt nach Dr. Andrew Weil aktiviert die verlängerte Ausatmung das parasympathische Nervensystem.',
    breadcrumbName: '4-7-8 Atemtechnik',
    startPracticeBtn: 'Übung Starten',
    jumpLinks: {
      timer: 'Timer',
      presets: 'Modi',
      stats: 'Statistiken',
      guide: 'Anleitung',
      safety: 'Sicherheit',
      about: 'Hintergrund',
      faq: 'FAQ',
    },
    phases: {
      inhale: 'Einatmen',
      hold: 'Halten',
      exhale: 'Ausatmen',
    },
    instructions: {
      inhale: 'Atmen Sie 4 Sekunden lang ruhig und tief durch die Nase in den Bauch ein.',
      hold: 'Halten Sie den Atem sanft und ohne Anspannung für 7 Sekunden an.',
      exhale: 'Atmen Sie 8 Sekunden lang gleichmäßig und vollständig durch den Mund aus.',
    },
    guide: {
      whatIsTitle: 'Was ist die 4-7-8 Atemmethode?',
      whatIsDesc1: 'Die 4-7-8 Atemtechnik ist eine wissenschaftlich anerkannte Entspannungsmethode, die von US-Arzt Dr. Andrew Weil auf Basis traditioneller Pranayama-Lehren popularisiert wurde. Sie fungiert als natürliches Beruhigungsmittel für das Nervensystem.',
      whatIsDesc2: 'Ob bei Schlaflosigkeit, abendlicher Gedankenflut oder akutem Stress: Unser visueller Atemkreis, sanfte Akustiksignale und anpassbare Durchgänge unterstützen Ihre Praxis optimal.',
      howToTitle: 'So funktioniert die 4-7-8 Atmung',
      howToSubtitle: 'Folgen Sie dieser Dreiphasen-Sequenz für maximale Beruhigung des vegetativen Nervensystems',
      howToSteps: [
        {
          step: '1',
          title: 'Einatmen (Nase)',
          time: '4 Sekunden',
          desc: 'Schließen Sie den Mund und atmen Sie 4 Sekunden lang leise durch die Nase in den Bauchraum ein.',
        },
        {
          step: '2',
          title: 'Atem anhalten',
          time: '7 Sekunden',
          desc: 'Halten Sie den Atem für 7 Sekunden an. Schultern, Nacken und Kiefer bleiben vollkommen entspannt.',
        },
        {
          step: '3',
          title: 'Ausatmen (Mund)',
          time: '8 Sekunden',
          desc: 'Atmen Sie 8 Sekunden lang hörbar und vollständig durch den Mund aus, sodass alle Luft entweicht.',
        },
      ],
      benefitsTitle: 'Wissenschaftlich belegte Vorteile',
      benefits: [
        {
          title: 'Aktivierung des Vagusnervs',
          desc: 'Die im Vergleich zur Einatmung doppelt so lange Ausatmung stimuliert den Vagusnerv und senkt die Herzfrequenz.',
        },
        {
          title: 'Schnelleres Einschlafen',
          desc: 'Dämpft sympathische Erregung und stoppt kreisende Gedanken vor dem Zu-Bett-Gehen.',
        },
        {
          title: 'Senkung von Stresshormonen',
          desc: 'Reduziert messbar Cortisol und Adrenalin innerhalb weniger Minuten.',
        },
        {
          title: 'Verbesserte Herzratenvariabilität',
          desc: 'Stärkt die kardiovaskuläre Erholungsfähigkeit und emotionale Selbstregulation.',
        },
      ],
      scienceTitle: 'Die Physiologie hinter der 4-7-8 Technik',
      scienceDesc1: 'Die 4-7-8 Methode basiert auf etablierten neurobiologischen Reflexen des autonomen Nervensystems:',
      scienceDesc2: 'Bei Stress wird die Atmung flach und schnell. Durch die gezielte Streckung der Ausatmungsphase setzen Barorezeptoren eine kardiologische Bremswirkung in Gang.',
      scienceBullets: [
        {
          title: 'Vagus-Stimulation (8 Sekunden Ausatmen):',
          desc: 'Einatmen beschleunigt den Puls, langes Ausatmen verlangsamt ihn. Die 8-Sekunden-Phase erzeugt maximale parasympathische Dominanz.',
        },
        {
          title: 'Gasaustausch & Beruhigung (7 Sekunden Halten):',
          desc: 'Das 7-sekündige Innehalten optimiert die Sauerstoffsättigung im Gewebe und signalisiert dem Hirnstamm Sicherheit.',
        },
        {
          title: 'Senkung des Schlaflosigkeits-Arousals:',
          desc: 'Durchbrochene Stressspiralen schaffen die ideale biologische Voraussetzung für Tiefschlaf.',
        },
      ],
      whenToPracticeTitle: 'Wann sollten Sie 4-7-8 anwenden?',
      whenToPracticeDesc: 'Da die Übung sedierend wirkt, eignet sie sich perfekt als Übergang in Ruhephasen:',
      whenToPracticeCards: [
        {
          title: 'Vor dem Schlafen',
          desc: '4 bis 8 Zyklen im abgedunkelten Schlafzimmer bereiten das Gehirn auf ungestörten Nachtschlaf vor.',
        },
        {
          title: 'In Stresssituationen',
          desc: 'Zwischen Terminen oder bei innerer Unruhe genügen wenige Runden, um Souveränität zurückzugewinnen.',
        },
      ],
      consistencyNote: 'Regelmäßigkeit ist wichtiger als Dauer. Täglich 2x 4 Zyklen wirken nachhaltiger als gelegentliche lange Sessions.',
      patternTitle: 'Das 4-7-8 Muster im Alltag',
      patternDesc1: 'Das feste Zählmuster bindet die Aufmerksamkeit vollkommen und verhindert negatives Gedankenkreisen.',
      patternDesc2: 'Nach mehrwöchiger Übung wird der Entspannungsreflex konditioniert und auf Knopfdruck abrufbar.',
      featuresTitle: 'Funktionen unseres 4-7-8 Timers',
      featuresDesc: 'Modernes Tool für eine reibungslose tägliche Praxis:',
      features: [
        {
          title: 'Visuelle Führung in Echtzeit:',
          desc: 'Sanfter Lichtkreis dehnt sich 4s aus, verharrt 7s und zieht sich über 8s zusammen.',
        },
        {
          title: 'Voreingestellte & Eigene Modi:',
          desc: 'Wählen Sie zwischen 4, 8, 12 und 16 Zyklen oder passen Sie Sekunden nach Wunsch an.',
        },
        {
          title: 'Dezente Klangsignale:',
          desc: 'Sanfte Töne signalisieren Phasenwechsel für das Üben mit geschlossenen Augen.',
        },
        {
          title: '100% Datenschutz:',
          desc: 'Keine Registrierung, keine Cookies, alle Daten verbleiben lokal auf Ihrem Gerät.',
        },
      ],
    },
    safety: {
      title: 'Wichtige Sicherheitsrichtlinien',
      subtitle: 'Bitte vor Beginn der Atemübung sorgfältig durchlesen.',
      neverTitle: 'Üben Sie 4-7-8 NIEMALS:',
      neverItems: [
        'Beim Autofahren oder Bedienen von Fahrzeugen',
        'Im Wasser, in der Badewanne oder beim Schwimmen',
        'Beim Bedienen schwerer Maschinen oder Werkzeuge',
        'In Situationen, in denen Schwindel zu Stürzen führen könnte',
      ],
      alwaysTitle: 'Praktizieren Sie IMMER:',
      alwaysItems: [
        'Bequem sitzend mit Rückenstütze oder sicher liegend',
        'Mit maximal 4 Zyklen pro Einheit für Einsteiger (später bis zu 8)',
        'Sanft und ohne Verkrampfung beim Luftanhalten',
        'Sofort abbrechend, falls Schwindel oder Unwohlsein auftritt',
      ],
      medicalDisclaimer: 'Medizinischer Hinweis: HarmonyBreath dient ausschließlich Bildungs- und Entspannungszwecken und ersetzt keine ärztliche Diagnose. Personen mit Asthma, COPD, Herz-Kreislauf-Erkrankungen oder Schwangere sollten vorab einen Arzt konsultieren.',
    },
    researchDisclosure: {
      label: 'Wissenschaftliche Offenlegung:',
      desc: 'Inhalte basieren auf begutachteten Studien zur Schlafmedizin und vegetativen Neurowissenschaft.',
    },
    referencesTitle: 'Wissenschaftliche Studien & Literatur',
    references: [
      {
        citation: 'Vierra, J., et al. (2022). Effects of slow breathing exercises on sleep quality and heart rate variability.',
        journal: 'Journal of Clinical Sleep Medicine',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9316023/',
        linkText: '[PubMed / PMC]',
      },
      {
        citation: 'Balban, M. Y., Neri, E., Kaelberer, M. M., et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal.',
        journal: 'Cell Reports Medicine, 4(1), 100895',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36630953/',
        linkText: '[PubMed]',
      },
    ],
    authorBio: {
      title: 'Verfasst vom HarmonyBreath Redaktionsteam',
      desc: 'Erstellt von Atemtherapeuten und Gesundheitsautoren unter Berücksichtigung neuester sport- und schlafmedizinischer Erkenntnisse.',
      disclaimer: 'Dieser Inhalt ersetzt keine professionelle medizinische Beratung.',
      learnMore: 'Erfahren Sie mehr über unsere redaktionellen Standards',
    },
    faqs: [
      {
        question: 'Wie funktioniert die 4-7-8 Atemtechnik?',
        answer: 'Sie atmen 4 Sekunden lang ein, halten den Atem 7 Sekunden lang und atmen 8 Sekunden lang aus. Durch die verlängerte Ausatmung wird der Vagusnerv aktiviert, was Blutdruck und Puls senkt.',
      },
      {
        question: 'Hilft die 4-7-8 Methode wirklich beim Einschlafen?',
        answer: 'Ja, klinische Studien und Schlafmediziner bestätigen die Wirksamkeit. Sie senkt die nächtliche Übererregung und unterbricht das Gedankenkarussell im Kopf.',
      },
      {
        question: 'Wie oft am Tag sollte man 4-7-8 atmen?',
        answer: 'Dr. Andrew Weil empfiehlt zwei Einheiten täglich mit je 4 Zyklen. Nach etwa 4 Wochen regelmäßiger Übung kann auf 8 Zyklen gesteigert werden.',
      },
      {
        question: 'Wie schnell schläft man mit der 4-7-8 Technik ein?',
        answer: 'Bei regelmäßiger Praxis schlafen viele Menschen innerhalb von 1 bis 3 Minuten nach Beendigung der 4 bis 8 Zyklen ein.',
      },
      {
        question: 'Ist die 4-7-8 Atmung gefährlich?',
        answer: 'In Ruheposition ist sie für gesunde Menschen völlig sicher. Niemals beim Fahren oder im Wasser praktizieren. Bei leichtem Schwindel die Sekundenanzahl verkürzen.',
      },
      {
        question: 'Können Anfänger die Zählzeiten anpassen?',
        answer: 'Ja. Entscheidend ist das mathematische Verhältnis 4:7:8 (z. B. 2s Ein, 3.5s Halten, 4s Aus).',
      },
    ],
  },
  fr: {
    metaTitle: 'Minuteur & Guide de Respiration 4-7-8 Gratuit | HarmonyBreath',
    metaDescription: 'Maîtrisez la respiration 4-7-8 avec notre minuteur gratuit. Inspirez 4s, retenez 7s, expirez 8s pour calmer le stress et vous endormir plus vite.',
    keywords: 'respiration 4-7-8, technique 4-7-8, méthode 4-7-8, minuteur respiration 4-7-8, respiration pour dormir, exercice respiration sommeil, dr andrew weil respiration, stimuler nerf vague',
    canonicalPath: '/fr/4-7-8-breathing/',
    badge: 'MOTEUR DE RELAXATION PROFONDE & D’INDUCTION DU SOMMEIL',
    heroTitle: 'Respiration 4-7-8\nTechnique de Relaxation Profonde',
    heroSubtitle: 'Apaisez votre corps et votre esprit grâce à notre minuteur interactif de respiration 4-7-8. Rendue célèbre par le Dr Andrew Weil, l’expiration prolongée stimule puissamment le système parasympathique.',
    breadcrumbName: 'Respiration 4-7-8',
    startPracticeBtn: 'Commencer la Séance',
    jumpLinks: {
      timer: 'Minuteur',
      presets: 'Modes',
      stats: 'Statistiques',
      guide: 'Guide',
      safety: 'Sécurité',
      about: 'À propos',
      faq: 'FAQ',
    },
    phases: {
      inhale: 'Inspirez',
      hold: 'Retenez',
      exhale: 'Expirez',
    },
    instructions: {
      inhale: 'Inspirez doucement par le nez dans votre abdomen pendant 4 secondes.',
      hold: 'Retenez votre souffle sans forcer pendant 7 secondes.',
      exhale: 'Expirez complètement par la bouche avec un doux souffle pendant 8 secondes.',
    },
    guide: {
      whatIsTitle: 'Qu’est-ce que la Méthode de Respiration 4-7-8 ?',
      whatIsDesc1: 'Popularisée par le spécialiste en médecine intégrative Dr Andrew Weil et enracinée dans le pranayama, la respiration 4-7-8 est un sédatif naturel pour le système nerveux qui freine l’agitation mentale et induit un calme profond.',
      whatIsDesc2: 'Que vous souffriez d’insomnie, de stress professionnel ou de tensions physiques, notre minuteur guidé avec repères visuels et ambiances sonores facilite chaque cycle.',
      howToTitle: 'Comment Pratiquer la Respiration 4-7-8',
      howToSubtitle: 'Suivez cette cadence en 3 étapes pour une relaxation physiologique immédiate',
      howToSteps: [
        {
          step: '1',
          title: 'Inspiration (Nez)',
          time: '4 Secondes',
          desc: 'Fermez la bouche et inspirez calmement par le nez pendant 4 secondes en gonflant le ventre.',
        },
        {
          step: '2',
          title: 'Rétention du Souffle',
          time: '7 Secondes',
          desc: 'Gardez l’air dans vos poumons pendant 7 secondes en relâchant les épaules, la mâchoire et le cou.',
        },
        {
          step: '3',
          title: 'Expiration (Bouche)',
          time: '8 Secondes',
          desc: 'Expirez lentement et complètement par la bouche pendant 8 secondes en produisant un son apaisant.',
        },
      ],
      benefitsTitle: 'Bienfaits Scientifiquement Validés',
      benefits: [
        {
          title: 'Stimulation du Nerf Vague',
          desc: 'Une expiration deux fois plus longue que l’inspiration active les freins cardiaques et induit la détente.',
        },
        {
          title: 'Endormissement Accéléré',
          desc: 'Calme l’activité sympathique et interrompt les pensées parasites avant la nuit.',
        },
        {
          title: 'Diminution du Cortisol',
          desc: 'Réduit les hormones de stress et relâche les tensions musculaires en quelques minutes.',
        },
        {
          title: 'Harmonie Cardio-Respiratoire',
          desc: 'Optimise la variabilité de la fréquence cardiaque (VRC) et la résilience émotionnelle.',
        },
      ],
      scienceTitle: 'Physiologie et Mécanismes de la Respiration 4-7-8',
      scienceDesc1: 'L’efficacité de la méthode 4-7-8 découle de réflexes neurovégétatifs précis :',
      scienceDesc2: 'En allongeant l’expiration à 8 secondes, les barorécepteurs vasculaires indiquent au tronc cérébral de ralentir le rythme cardiaque.',
      scienceBullets: [
        {
          title: 'Activation Vagale (Expiration de 8s) :',
          desc: 'L’inspiration accélère le cœur alors que l’expiration le ralentit. Doubler l’expiration maximise le tonus parasympathique.',
        },
        {
          title: 'Diffusion Alvéolaire (Rétention de 7s) :',
          desc: 'La pause permet une diffusion optimale de l’oxygène et stabilise le dioxyde de carbone.',
        },
        {
          title: 'Régulation du Sommeil :',
          desc: 'La baisse du cortisol nocturne favorise l’entrée dans les phases de sommeil profond réparateur.',
        },
      ],
      whenToPracticeTitle: 'Quand Pratiquer la Technique 4-7-8 ?',
      whenToPracticeDesc: 'Naturellement sédative, cette technique est idéale pour accompagner les moments de transition vers le repos :',
      whenToPracticeCards: [
        {
          title: 'Au Moment du Coucher',
          desc: '4 à 8 cycles dans votre lit lumières éteintes préparent votre système cardiovasculaire à un sommeil profond.',
        },
        {
          title: 'En Période de Stress Aigu',
          desc: 'Entre deux réunions ou lors d’un pic d’anxiété, quelques cycles calment instantanément le corps.',
        },
      ],
      consistencyNote: 'La régularité prime sur la durée. Deux sessions de 4 cycles par jour sont plus profitables qu’une longue séance occasionnelle.',
      patternTitle: 'La Cadence 4-7-8 au Quotidien',
      patternDesc1: 'Le comptage mental 4-7-8 monopolise l’attention et coupe court aux ruminations anxieuses.',
      patternDesc2: 'Avec la pratique, le réflexe de relaxation devient immédiat et disponible à volonté.',
      featuresTitle: 'Fonctionnalités de Notre Minuteur 4-7-8',
      featuresDesc: 'Conçu pour une pratique fluide, sans contrainte technique :',
      features: [
        {
          title: 'Guidage Visuel Immersif :',
          desc: 'Anneau lumineux qui gonfle en 4s, se stabilise 7s et se vide délicatement en 8s.',
        },
        {
          title: 'Préréglages & Personnalisation :',
          desc: 'Choisissez 4, 8, 12 ou 16 cycles ou adaptez les durées selon votre souffle.',
        },
        {
          title: 'Sons de Cloche Discrets :',
          desc: 'Des signaux audio élégants vous permettent de fermer les yeux durant l’exercice.',
        },
        {
          title: 'Confidentialité Totale :',
          desc: 'Aucune donnée enregistrée sur serveur, tout est conservé localement dans votre navigateur.',
        },
      ],
    },
    safety: {
      title: 'Consignes de Sécurité Essentielles',
      subtitle: 'Veuillez lire attentivement avant d’entamer votre pratique.',
      neverTitle: 'Ne pratiquez JAMAIS la respiration 4-7-8 :',
      neverItems: [
        'En conduisant ou en pilotant un véhicule',
        'Dans l’eau, au bain ou en nageant',
        'En manipulant des outils ou des machines dangereuses',
        'Dans toute position où un étourdissement présenterait un risque de chute',
      ],
      alwaysTitle: 'Pratiquez TOUJOURS :',
      alwaysItems: [
        'Confortablement assis avec le dos droit ou allongé dans un lieu sûr',
        'En commençant par 4 cycles par séance (ne dépassez pas 8 cycles au début)',
        'Avec douceur, sans forcer excessivement la rétention',
        'En interrompant l’exercice si vous ressentez une sensation de vertige',
      ],
      medicalDisclaimer: 'Avertissement Médical : HarmonyBreath est une plateforme éducative de bien-être. Ce contenu ne remplace aucun avis médical. Les personnes souffrant d’asthme, d’épilepsie, de troubles cardiaques ou les femmes enceintes doivent consulter un médecin.',
    },
    researchDisclosure: {
      label: 'Rigueur Scientifique & Déontologie :',
      desc: 'Informations établies à partir de recherches cliniques publiées en neurosciences et médecine du sommeil.',
    },
    referencesTitle: 'Références Scientifiques & Études Cliniques',
    references: [
      {
        citation: 'Vierra, J., et al. (2022). Effects of slow breathing exercises on sleep quality and heart rate variability.',
        journal: 'Journal of Clinical Sleep Medicine',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9316023/',
        linkText: '[PubMed / PMC]',
      },
      {
        citation: 'Balban, M. Y., Neri, E., Kaelberer, M. M., et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal.',
        journal: 'Cell Reports Medicine, 4(1), 100895',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36630953/',
        linkText: '[PubMed]',
      },
    ],
    authorBio: {
      title: 'Rédigé par l’Équipe Éditoriale HarmonyBreath',
      desc: 'Document conçu par nos praticiens en respiration et spécialistes du bien-être, validé d’après la littérature physiologique actuelle.',
      disclaimer: 'Ce contenu est proposé à des fins pédagogiques uniquement.',
      learnMore: 'En savoir plus sur nos standards éditoriaux',
    },
    faqs: [
      {
        question: 'Comment fonctionne la respiration 4-7-8 ?',
        answer: 'Elle repose sur un ratio précis : inspiration de 4 secondes, rétention de 7 secondes et expiration de 8 secondes. L’expiration prolongée stimule le nerf vague et déclenche la réponse de relaxation parasympathique.',
      },
      {
        question: 'Est-elle efficace contre l’insomnie ?',
        answer: 'Oui, de nombreux spécialistes du sommeil la recommandent pour calmer la fréquence cardiaque et évacuer l’anxiété du coucher.',
      },
      {
        question: 'Combien de fois par jour faut-il la pratiquer ?',
        answer: 'Le Dr Andrew Weil conseille de la réaliser 2 fois par jour, à raison de 4 cycles par session pour les débutants.',
      },
      {
        question: 'En combien de temps s’endort-on avec le 4-7-8 ?',
        answer: 'Après quelques semaines de pratique régulière, beaucoup de pratiquants s’endorment en 1 à 3 minutes après la fin de la séance.',
      },
      {
        question: 'Y a-t-il des dangers à pratiquer le 4-7-8 ?',
        answer: 'La technique est très sûre en position assise ou couchée. Il ne faut jamais la faire au volant ou dans l’eau. Réduisez le temps si vous manquez d’air.',
      },
      {
        question: 'Peut-on adapter le nombre de secondes ?',
        answer: 'Oui, l’élément fondamental est le ratio 4:7:8 (par exemple 2s inspirer, 3.5s retenir, 4s expirer).',
      },
    ],
  },
  pt: {
    metaTitle: 'Temporizador e Guia de Respiração 4-7-8 Grátis | HarmonyBreath',
    metaDescription: 'Aprenda a respiração 4-7-8 com nosso temporizador guiado online. Inspire 4s, retenha 7s e expire 8s para aliviar o estresse e dormir mais rápido.',
    keywords: 'respiração 4-7-8, técnica 4-7-8, método 4-7-8, temporizador respiração 4-7-8, respiração para dormir, exercício respiração sono, dr andrew weil respiração, diminuir ansiedade respiração',
    canonicalPath: '/pt/4-7-8-breathing/',
    badge: 'MOTOR DE RELAXAMENTO PROFUNDO & INDUÇÃO DO SONO',
    heroTitle: 'Respiração 4-7-8\nTécnica de Respiração Relaxante',
    heroSubtitle: 'Acalme a mente e o corpo com nosso temporizador interativo gratuito de respiração 4-7-8. Desenvolvida pelo Dr. Andrew Weil, a expiração prolongada ativa o relaxamento do sistema parassimpático.',
    breadcrumbName: 'Respiração 4-7-8',
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
    phases: {
      inhale: 'Inspire',
      hold: 'Retenha',
      exhale: 'Expire',
    },
    instructions: {
      inhale: 'Inspire suavemente pelo nariz em direção ao abdômen durante 4 segundos.',
      hold: 'Retenha o ar com calma e sem esforço durante 7 segundos.',
      exhale: 'Expire completamente pela boca produzindo um som suave durante 8 segundos.',
    },
    guide: {
      whatIsTitle: 'O que é o Método de Respiração 4-7-8?',
      whatIsDesc1: 'A respiração 4-7-8 é uma técnica de desaceleração autonômica criada pelo médico integrativo Dr. Andrew Weil com raízes no pranayama védico. Atua como um calmante natural para o sistema nervoso.',
      whatIsDesc2: 'Ideal para noites de insônia, momentos de tensão ou ansiedade diária, nosso temporizador online com feedback visual e sonoro conduz seus ciclos com precisão.',
      howToTitle: 'Como Praticar a Respiração 4-7-8',
      howToSubtitle: 'Siga este ritmo de 3 fases para reequilibrar seu sistema nervoso em minutos',
      howToSteps: [
        {
          step: '1',
          title: 'Inspirar (Nariz)',
          time: '4 Segundos',
          desc: 'Feche a boca e inspire suavemente pelo nariz contando até 4, expandindo o abdômen sem forçar.',
        },
        {
          step: '2',
          title: 'Segurar o Ar',
          time: '7 Segundos',
          desc: 'Retenha o ar nos pulmões por 7 segundos. Mantenha ombros, mandíbula e pescoço soltos.',
        },
        {
          step: '3',
          title: 'Expirar (Boca)',
          time: '8 Segundos',
          desc: 'Expire todo o ar pela boca durante 8 segundos, soltando um som suave de alívio.',
        },
      ],
      benefitsTitle: 'Benefícios Comprovados pela Ciência',
      benefits: [
        {
          title: 'Estímulo do Nervo Vago',
          desc: 'A expiração com o dobro da duração da inspiração estimula o nervo vago e desacelera os batimentos cardíacos.',
        },
        {
          title: 'Facilidade para Adormecer',
          desc: 'Reduz a agitação noturna e interrompe o ciclo de pensamentos repetitivos na cama.',
        },
        {
          title: 'Redução do Cortisol',
          desc: 'Equilibra os níveis hormonais do estresse, promovendo serenidade física e mental.',
        },
        {
          title: 'Variabilidade da Frequência Cardíaca',
          desc: 'Fortalece a coerência cardíaca e a capacidade de autorregulação emocional.',
        },
      ],
      scienceTitle: 'A Fisiologia por Trás da Respiração 4-7-8',
      scienceDesc1: 'A eficácia da técnica 4-7-8 fundamenta-se na neurobiologia cardiorrespiratória reflexa:',
      scienceDesc2: 'Ao estender a fase de expiração para 8 segundos, os barorreceptores arteriais enviam sinais ao cérebro para baixar a pressão e o pulso.',
      scienceBullets: [
        {
          title: 'Ativação Vagal (Expiração de 8s):',
          desc: 'Inspirar acelera ligeiramente o coração; expirar lentamente o desacelera, maximizando o descanso parassimpático.',
        },
        {
          title: 'Equilíbrio de Gases (Pausa de 7s):',
          desc: 'Permite maior absorção de oxigênio pelos capilares e ajusta os níveis de CO2 no sangue.',
        },
        {
          title: 'Indução do Sono Reparador:',
          desc: 'Diminui a hiperatividade cerebral, facilitando a transição para as fases restauradoras do sono.',
        },
      ],
      whenToPracticeTitle: 'Quando Praticar a Técnica 4-7-8',
      whenToPracticeDesc: 'Por ter efeito sedativo natural, a prática encaixa-se perfeitamente em momentos de relaxamento:',
      whenToPracticeCards: [
        {
          title: 'Antes de Dormir',
          desc: 'Realizar de 4 a 8 ciclos na cama com iluminação suave sinaliza ao corpo que é hora de descansar.',
        },
        {
          title: 'Durante Momentos de Tensão',
          desc: 'Após reuniões estressantes ou picos de ansiedade, alguns ciclos restabelecem o foco e a calma.',
        },
      ],
      consistencyNote: 'A consistência diária é mais valiosa que a duração. Praticar 4 ciclos duas vezes ao dia traz resultados duradouros.',
      patternTitle: 'O Padrão 4-7-8 para o Bem-Estar Diário',
      patternDesc1: 'A contagem 4-7-8 ancora sua mente na respiração presente, afastando preocupações e devaneios ansiosos.',
      patternDesc2: 'Com o tempo, o cérebro desenvolve um reflexo condicionado de relaxamento imediato.',
      featuresTitle: 'Recursos do Nosso Temporizador 4-7-8',
      featuresDesc: 'Criado para uma prática tranquila e sem distrações:',
      features: [
        {
          title: 'Guia Visual Fluido:',
          desc: 'Círculo luminoso que expande em 4s, sustenta por 7s e contrai suavemente em 8s.',
        },
        {
          title: 'Modos Prontos e Ajustáveis:',
          desc: 'Escolha 4, 8, 12 ou 16 ciclos ou configure os segundos de acordo com seu ritmo.',
        },
        {
          title: 'Sinos Sonoros Suaves:',
          desc: 'Sinais sonoros elegantes para que você possa fechar os olhos e apenas sentir a respiração.',
        },
        {
          title: 'Privacidade Total:',
          desc: 'Seus dados e históricos ficam salvos exclusivamente no seu navegador local.',
        },
      ],
    },
    safety: {
      title: 'Diretrizes de Segurança Essenciais',
      subtitle: 'Leia com atenção antes de começar sua sessão.',
      neverTitle: 'NUNCA pratique a respiração 4-7-8:',
      neverItems: [
        'Enquanto dirige ou opera qualquer veículo',
        'Dentro da água, banheira ou piscina',
        'Operando maquinário pesado ou instrumentos perigosos',
        'Em posições onde uma tontura possa provocar quedas ou ferimentos',
      ],
      alwaysTitle: 'SEMPRE pratique:',
      alwaysItems: [
        'Sentado confortavelmente com apoio para as costas ou deitado',
        'Começando com apenas 4 ciclos por sessão (não exceder 8 no início)',
        'Mantendo a respiração suave, sem forçar o bloqueio do ar',
        'Parando imediatamente se sentir tontura ou desconforto',
      ],
      medicalDisclaimer: 'Aviso Médico: O HarmonyBreath oferece ferramentas de bem-estar com finalidade estritamente educacional. Não constitui aconselhamento médico. Pessoas com asma, pressão alta, cardiopatias ou gestantes devem consultar um médico.',
    },
    researchDisclosure: {
      label: 'Divulgação Científica e Editorial:',
      desc: 'Conteúdo elaborado com base em estudos clínicos sobre medicina do sono e fisiologia cardiorrespiratória.',
    },
    referencesTitle: 'Referências Científicas e Ensaios Clínicos',
    references: [
      {
        citation: 'Vierra, J., et al. (2022). Effects of slow breathing exercises on sleep quality and heart rate variability.',
        journal: 'Journal of Clinical Sleep Medicine',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9316023/',
        linkText: '[PubMed / PMC]',
      },
      {
        citation: 'Balban, M. Y., Neri, E., Kaelberer, M. M., et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal.',
        journal: 'Cell Reports Medicine, 4(1), 100895',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36630953/',
        linkText: '[PubMed]',
      },
    ],
    authorBio: {
      title: 'Escrito pela Equipe Editorial HarmonyBreath',
      desc: 'Elaborado por especialistas em respiração consciente e pesquisadores de saúde integrativa, alinhado à literatura médica atual.',
      disclaimer: 'Este conteúdo destina-se apenas a fins educacionais.',
      learnMore: 'Conheça nossos padrões editoriais',
    },
    faqs: [
      {
        question: 'Como funciona a respiração 4-7-8?',
        answer: 'A técnica baseia-se em um ritmo cronometrado: inspire 4 segundos, segure 7 segundos e expire 8 segundos. A expiração prolongada estimula o nervo vago, reduzindo a frequência cardíaca e ativando a resposta parassimpática.',
      },
      {
        question: 'O método 4-7-8 realmente ajuda a dormir?',
        answer: 'Sim, pesquisas em medicina do sono demonstram que ele desacelera o organismo e quebra o padrão de pensamentos acelerados na cama.',
      },
      {
        question: 'Quantas vezes ao dia devo praticar?',
        answer: 'O Dr. Andrew Weil recomenda duas vezes ao dia, iniciando com 4 ciclos por sessão durante o primeiro mês.',
      },
      {
        question: 'Quanto tempo leva para adormecer com a técnica?',
        answer: 'Com o hábito diário de 2 a 3 semanas, muitas pessoas conseguem dormir entre 1 e 3 minutos após a conclusão dos ciclos.',
      },
      {
        question: 'A respiração 4-7-8 é perigosa?',
        answer: 'Em repouso é extremamente segura para adultos saudáveis. Nunca pratique no trânsito ou na água. Em caso de tontura, volte à respiração normal.',
      },
      {
        question: 'Iniciantes podem adaptar os segundos?',
        answer: 'Sim. O ponto chave é manter a proporção matemática 4:7:8 (por exemplo, 2s inspirando, 3.5s segurando e 4s expirando).',
      },
    ],
  },
  ja: {
    metaTitle: '無料4-7-8呼吸法タイマー＆実践ガイド | HarmonyBreath',
    metaDescription: 'アンドルー・ワイル博士提唱の4-7-8呼吸法（リラックス呼吸）を無料オンラインタイマーで実践。4秒吸って7秒止め8秒吐くことで副交感神経を優位にし、スムーズな入眠をサポートします。',
    keywords: '4-7-8呼吸法, 478呼吸法, 4-7-8呼吸 タイマー, アンドルー・ワイル 呼吸法, 睡眠 呼吸法, リラックス呼吸, 自律神経 呼吸法, 不眠症 呼吸法',
    canonicalPath: '/ja/4-7-8-breathing/',
    badge: '深層リラクゼーション＆睡眠導入システム',
    heroTitle: '4-7-8呼吸法\n自律神経を整える深呼吸タイマー',
    heroSubtitle: 'アンドルー・ワイル博士により広まった4-7-8呼吸法は、長めの呼気によって迷走神経を刺激し、心身を深い安らぎへと導く実践的なリラクゼーション技法です。',
    breadcrumbName: '4-7-8呼吸法',
    startPracticeBtn: 'セッション開始',
    jumpLinks: {
      timer: 'タイマー',
      presets: 'モード',
      stats: '統計',
      guide: 'ガイド',
      safety: '安全ガイド',
      about: '科学的背景',
      faq: 'よくある質問',
    },
    phases: {
      inhale: '吸う',
      hold: '止める',
      exhale: '吐く',
    },
    instructions: {
      inhale: '鼻から静かに4秒間お腹へと息を吸い込みます。',
      hold: '首や肩に力を入れず、穏やかに7秒間息を止めます。',
      exhale: '口から8秒間かけてゆっくりと息を完全に吐き切ります。',
    },
    guide: {
      whatIsTitle: '4-7-8呼吸法とは？',
      whatIsDesc1: '4-7-8呼吸法は、統合医療の世界的権威アンドルー・ワイル博士がヨガのプラーナヤーマ（調息法）をもとに体系化した呼吸法です。「神経系のための自然な精神安定剤」とも呼ばれています。',
      whatIsDesc2: '就寝前の寝付けなさや日中の強いストレスを感じたとき、画面のガイドリングと心地よいサウンドに合わせて呼吸を整えるだけで、短時間で副交感神経を活性化できます。',
      howToTitle: '4-7-8呼吸法の正しいやり方',
      howToSubtitle: '自律神経を瞬時に整える3つのステップ',
      howToSteps: [
        {
          step: '1',
          title: '吸う（鼻から）',
          time: '4秒間',
          desc: '口を閉じ、鼻から静かに4秒数えながら下腹部を膨らませるように息を吸います。',
        },
        {
          step: '2',
          title: '息を止める',
          time: '7秒間',
          desc: '肺を満たした状態で7秒間息を止めます。肩や顎の力を抜きリラックスします。',
        },
        {
          step: '3',
          title: '吐き切る（口から）',
          time: '8秒間',
          desc: '口からフーッと音を立てるように、8秒間かけてゆっくりと完全に息を吐き出します。',
        },
      ],
      benefitsTitle: '科学的に実証されている効果',
      benefits: [
        {
          title: '迷走神経の刺激',
          desc: '吸気の倍の時間をかけて息を吐くことで迷走神経が刺激され、心拍数が自然に落ち着きます。',
        },
        {
          title: '速やかな入眠サポート',
          desc: '交感神経の過剰な興奮を抑え、就寝前に頭を巡る雑念や不安をストップさせます。',
        },
        {
          title: 'コルチゾール（ストレス物質）の低減',
          desc: '数分間の実践で体内の緊張状態が解除され、血圧と脈拍が安定します。',
        },
        {
          title: '心拍変動（HRV）の向上',
          desc: '呼吸性不整脈を整え、心血管系の回復力と感情のコントロール力を高めます。',
        },
      ],
      scienceTitle: '4-7-8呼吸の生理学的メカニズム',
      scienceDesc1: '4-7-8呼吸の効果は、神経生理学および呼吸生理学の基本原理に基づいています。',
      scienceDesc2: 'ストレス下では呼吸が浅く速くなりますが、意図的に呼気を8秒に引き延ばすことで体内受容器が脳幹に「安全である」というシグナルを送ります。',
      scienceBullets: [
        {
          title: '呼気8秒による副交感神経の優位化：',
          desc: '吸気は心拍を上げ、呼気は下げます。呼気の割合を最大化することで、強力なブレーキ効果が得られます。',
        },
        {
          title: '息止め7秒による血中酸素とCO2の調整：',
          desc: '肺胞でのガス交換が深まり、適度な二酸化炭素の蓄積が脳をリラックスモードへと切り替えます。',
        },
        {
          title: '就寝時の覚醒度抑制：',
          desc: 'カウントに集中することで反芻思考を遮断し、スムーズな寝落ちを促します。',
        },
      ],
      whenToPracticeTitle: '実践におすすめのタイミング',
      whenToPracticeDesc: '心身を沈静化させる性質を持つため、休息への切り替え時に最適です：',
      whenToPracticeCards: [
        {
          title: '就寝前のお布団の中で',
          desc: '部屋を薄暗くしベッドで4〜8サイクル行うことで、深い睡眠に入る準備が整います。',
        },
        {
          title: '緊張や不安を感じた瞬間',
          desc: '大事な発表の前や感情が高ぶったときに4サイクル行うと、冷静さを取り戻せます。',
        },
      ],
      consistencyNote: '回数よりも日々の継続が大切です。最初は1回4サイクル、1日2回から始めましょう。',
      patternTitle: '日常を整える4-7-8のリズム',
      patternDesc1: '4・7・8の秒数を頭の中で意識し続けることで、脳の処理能力が呼吸に集中し不安が入り込む余地がなくなります。',
      patternDesc2: '毎日続けることで、数回の呼吸だけで心身が緩む条件反射が身につきます。',
      featuresTitle: 'HarmonyBreath 4-7-8タイマーの特長',
      featuresDesc: 'シンプルで直感的なストレスフリー設計：',
      features: [
        {
          title: '滑らかなビジュアルサークル：',
          desc: '4秒で拡大、7秒キープ、8秒で縮小する直感的なアニメーション。',
        },
        {
          title: 'プリセット＆自由設定：',
          desc: '4・8・12・16サイクルから選べるほか、肺活量に合わせて秒数を調整可能。',
        },
        {
          title: '心地よいチャイム音：',
          desc: '画面を見ずに目を閉じたままでも各フェーズの切り替えが分かります。',
        },
        {
          title: '完全なプライバシー保護：',
          desc: '会員登録不要。セッション履歴はすべてブラウザ内にローカル保存されます。',
        },
      ],
    },
    safety: {
      title: '重要な安全ガイドライン',
      subtitle: '呼吸法を始める前に必ずお読みください。',
      neverTitle: '次の状況では絶対に実践しないでください：',
      neverItems: [
        '車や自転車の運転中、乗り物の操縦中',
        '入浴中、プール、海や水の中',
        '危険な機械や工具の操作中',
        'めまいによって転倒や怪我のリスクがある場所',
      ],
      alwaysTitle: '常に以下のルールを守ってください：',
      alwaysItems: [
        '背もたれのある椅子に座るか、安全なベッドの上に横になって行う',
        '初心者は1回4サイクルから始める（慣れるまで1回8サイクルを超えない）',
        '無理に息を止めず、苦しさを感じたらすぐに自然な呼吸に戻す',
        '頭がクラクラした場合は直ちに中止する',
      ],
      medicalDisclaimer: '医療に関する免責事項：HarmonyBreathは健康とウェルネスのための教育的ツールであり、医療行為や診断の代わりにはなりません。喘息、高血圧、心臓疾患、てんかんをお持ちの方や妊娠中の方は事前に医師にご相談ください。',
    },
    researchDisclosure: {
      label: '科学的研究と編集方針：',
      desc: '本記事の内容は査読付き睡眠医学論文および自律神経生理学の研究成果をもとに作成されています。',
    },
    referencesTitle: '科学的参考文献・臨床研究',
    references: [
      {
        citation: 'Vierra, J., et al. (2022). Effects of slow breathing exercises on sleep quality and heart rate variability.',
        journal: 'Journal of Clinical Sleep Medicine',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9316023/',
        linkText: '[PubMed / PMC]',
      },
      {
        citation: 'Balban, M. Y., Neri, E., Kaelberer, M. M., et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal.',
        journal: 'Cell Reports Medicine, 4(1), 100895',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36630953/',
        linkText: '[PubMed]',
      },
    ],
    authorBio: {
      title: 'HarmonyBreath 編集チーム監修',
      desc: 'ブレスワーク実践者とヘルスケア研究者によって執筆・検証されています。医学的誇張を排し、安全で確かな情報をお届けします。',
      disclaimer: '本コンテンツは情報提供を目的としており、専門的な医療ケアに代わるものではありません。',
      learnMore: '編集基準の詳細を見る',
    },
    faqs: [
      {
        question: '4-7-8呼吸法とはどのような仕組みですか？',
        answer: '4秒吸う、7秒止める、8秒吐くという決まった時間比率で行います。呼気（息を吐く時間）を長くすることで副交感神経を刺激し、心拍数と血圧を自然に下げます。',
      },
      {
        question: '睡眠や不眠症に本当に効果がありますか？',
        answer: 'はい。睡眠医学の臨床でも効果が認められています。交感神経の高ぶりを鎮め、入眠を妨げる思考のループを断ち切るのに役立ちます。',
      },
      {
        question: '1日に何回行うべきですか？',
        answer: 'アンドルー・ワイル博士は、朝と就寝前の1日2回、各4サイクルから始めることを推奨しています。',
      },
      {
        question: '寝落ちするまでどれくらい時間がかかりますか？',
        answer: '2〜3週間継続して実践すると、4〜8サイクル終了後、1〜3分以内に心地よい眠気に包まれると報告されています。',
      },
      {
        question: '息を止めるのが苦しい初心者は秒数を変更できますか？',
        answer: 'はい。最も重要なのは4:7:8という「比率」です。息止めが苦しい場合は、2秒吸う・3.5秒止める・4秒吐くなど長さを半分にして練習できます。',
      },
      {
        question: '4-7-8呼吸法に危険性はありますか？',
        answer: '座ったり横になったりした状態であれば非常に安全です。ただし、立ちくらみや失神の危険を防ぐため、運転中やお風呂では絶対に避けてください。',
      },
    ],
  },
  it: {
    metaTitle: 'Timer & Guida Gratuita alla Respirazione 4-7-8 | HarmonyBreath',
    metaDescription: 'Impara la respirazione 4-7-8 con il nostro timer guidato gratuito. Inspira 4s, trattieni 7s ed espira 8s per calmare l’ansia e addormentarti presto.',
    keywords: 'respirazione 4-7-8, tecnica 4-7-8, metodo 4-7-8, timer respirazione 4-7-8, respirazione per dormire, esercizi respirazione ansia, dr andrew weil respirazione, stimolare nervo vago',
    canonicalPath: '/it/4-7-8-breathing/',
    badge: 'MOTORE DI RILASSAMENTO PROFONDO E INDUZIONE DEL SONNO',
    heroTitle: 'Respirazione 4-7-8\nTecnica di Rilassamento Profondo',
    heroSubtitle: 'Rilassa corpo e mente con il nostro timer guidato online per la respirazione 4-7-8. Reso celebre dal Dr. Andrew Weil, l’espirazione prolungata stimola una profonda calma parasimpatica.',
    breadcrumbName: 'Respirazione 4-7-8',
    startPracticeBtn: 'Inizia la Sessione',
    jumpLinks: {
      timer: 'Timer',
      presets: 'Modalità',
      stats: 'Statistiche',
      guide: 'Guida',
      safety: 'Sicurezza',
      about: 'Informazioni',
      faq: 'FAQ',
    },
    phases: {
      inhale: 'Inspira',
      hold: 'Trattieni',
      exhale: 'Espira',
    },
    instructions: {
      inhale: 'Inspira silenziosamente dal naso nell’addome per 4 secondi.',
      hold: 'Trattieni il respiro dolcemente e senza tensione per 7 secondi.',
      exhale: 'Espira completamente dalla bocca con un leggero fruscio per 8 secondi.',
    },
    guide: {
      whatIsTitle: 'Che cos’è il Metodo di Respirazione 4-7-8?',
      whatIsDesc1: 'Sviluppata dal medico integrativo Dr. Andrew Weil e radicata nella disciplina yogica del pranayama, la tecnica 4-7-8 è un tranquillante naturale per il sistema nervoso progettato per interrompere l’iperattività mentale e favorire il sonno.',
      whatIsDesc2: 'Ideale contro l’insonnia, le tensioni accumulate o l’ansia improvvisa, il nostro timer interattivo offre visualizzazioni fluide, paesaggi sonori e cicli personalizzati.',
      howToTitle: 'Come Praticare la Respirazione 4-7-8',
      howToSubtitle: 'Segui questa sequenza in 3 tempi per riequilibrare il sistema autonomo',
      howToSteps: [
        {
          step: '1',
          title: 'Inspirazione (Naso)',
          time: '4 Secondi',
          desc: 'Chiudi la bocca e inspira con calma dal naso per 4 secondi, espandendo l’addome.',
        },
        {
          step: '2',
          title: 'Trattenere il Respiro',
          time: '7 Secondi',
          desc: 'Trattieni l’aria nei polmoni per 7 secondi rilassando spalle, mascella e collo.',
        },
        {
          step: '3',
          title: 'Espirazione (Bocca)',
          time: '8 Secondi',
          desc: 'Espira totalmente dalla bocca per 8 secondi emettendo un dolce suono liberatorio.',
        },
      ],
      benefitsTitle: 'Benefici Scientificamente Provati',
      benefits: [
        {
          title: 'Attivazione del Nervo Vago',
          desc: 'L’espirazione lunga il doppio dell’inspirazione stimola il nervo vago e riduce i battiti cardiaci.',
        },
        {
          title: 'Addormentamento Più Rapido',
          desc: 'Riduce l’iperarousal notturno e spegne i pensieri ricorrenti prima di dormire.',
        },
        {
          title: 'Riduzione del Cortisolo',
          desc: 'Abbassa i livelli degli ormoni dello stress e scioglie le tensioni fisiche in pochi minuti.',
        },
        {
          title: 'Aumento della Variabilità Cardiaca',
          desc: 'Favorisce la coerenza respiratoria, rafforzando la resilienza cardiovascolare.',
        },
      ],
      scienceTitle: 'Fisiologia e Scienza della Tecnica 4-7-8',
      scienceDesc1: 'La respirazione 4-7-8 agisce direttamente sui riflessi neurovegetativi del corpo:',
      scienceDesc2: 'Nello stress la respirazione diventa superficiale. Rallentando ed estendendo l’espirazione, i barocettori inviano segnali calmanti al cervello.',
      scienceBullets: [
        {
          title: 'Stimolazione Vagale (8s Espirazione):',
          desc: 'L’inspirazione accelera leggermente il battito, l’espirazione lo rallenta. Raddoppiare l’espirazione massimizza il tono parasimpatico.',
        },
        {
          title: 'Diffusione di Ossigeno e CO2 (7s Trattenuta):',
          desc: 'La pausa favorisce lo scambio gassoso e ricalibra la tolleranza al biossido di carbonio.',
        },
        {
          title: 'Facilitazione del Sonno Profondo:',
          desc: 'La diminuzione del tono simpatico permette al corpo di scivolare naturalmente nelle onde lente del sonno.',
        },
      ],
      whenToPracticeTitle: 'Quando Praticare la Respirazione 4-7-8',
      whenToPracticeDesc: 'Data la sua natura sedativa, la tecnica è eccellente come rito di passaggio verso il riposo:',
      whenToPracticeCards: [
        {
          title: 'Prima di Addormentarsi',
          desc: 'Da 4 a 8 cicli a letto a luci soffuse predispongono l’organismo al sonno ristoratore.',
        },
        {
          title: 'Nei Momenti di Ansia',
          desc: 'Tra riunioni intense o quando i pensieri galoppano, 4 cicli ripristinano lucidità e stabilità.',
        },
      ],
      consistencyNote: 'La costanza è fondamentale: praticare 4 cicli due volte al giorno è molto più efficace di una lunga sessione saltuaria.',
      patternTitle: 'La Cadenza 4-7-8 nella Vita Quotidiana',
      patternDesc1: 'Contare 4-7-8 impegna l’attenzione mentale impedendo all’ansia di prendere il sopravvento.',
      patternDesc2: 'Con la pratica quotidiana, il cervello crea un riflesso condizionato di rilassamento istantaneo.',
      featuresTitle: 'Caratteristiche del Timer HarmonyBreath',
      featuresDesc: 'Uno strumento progettato per un’esperienza limpida e priva di distrazioni:',
      features: [
        {
          title: 'Guida Visiva Fluida:',
          desc: 'Anello luminoso che si espande in 4s, rimane stabile per 7s e si sgonfia delicatamente in 8s.',
        },
        {
          title: 'Modalità Preimpostate e Custom:',
          desc: 'Scegli tra 4, 8, 12 o 16 cicli o personalizza la durata di ciascuna fase.',
        },
        {
          title: 'Rintocchi Sonori Discreti:',
          desc: 'Segnali acustici delicati per poter praticare comodamente ad occhi chiusi.',
        },
        {
          title: 'Privacy al 100%:',
          desc: 'Nessuna registrazione richiesta. Tutte le statistiche rimangono salvate in locale nel browser.',
        },
      ],
    },
    safety: {
      title: 'Linee Guida di Sicurezza Essenziali',
      subtitle: 'Si prega di leggere con attenzione prima di iniziare la pratica.',
      neverTitle: 'NON praticare MAI la respirazione 4-7-8:',
      neverItems: [
        'Alla guida o mentre si manovra qualsiasi veicolo',
        'In acqua, nella vasca da bagno o in piscina',
        'Mentre si utilizzano macchinari pesanti o attrezzi pericolosi',
        'In situazioni in cui un giramento di testa possa causare cadute o infortuni',
      ],
      alwaysTitle: 'Pratica SEMPRE:',
      alwaysItems: [
        'Comodamente seduto con supporto lombare o sdraiato a letto',
        'Iniziando con 4 cicli per sessione (non superare gli 8 cicli all’inizio)',
        'Mantenendo il respiro naturale, senza forzare in alcun modo l’apnea',
        'Fermandoti subito in caso di vertigini o capogiri, tornando al respiro normale',
      ],
      medicalDisclaimer: 'Dichiarazione di non responsabilità medica: HarmonyBreath offre strumenti di benessere solo a scopo divulgativo. Non costituisce consulenza medica. Chi soffre di disturbi cardiovascolari, asma, epilessia o le donne in gravidanza devono consultare un medico.',
    },
    researchDisclosure: {
      label: 'Divulgazione Scientifica ed Editoriale:',
      desc: 'Contenuto redatto sulla base di studi clinici accreditati di medicina del sonno e neuroscienze.',
    },
    referencesTitle: 'Riferimenti Scientifici e Studi Clinici',
    references: [
      {
        citation: 'Vierra, J., et al. (2022). Effects of slow breathing exercises on sleep quality and heart rate variability.',
        journal: 'Journal of Clinical Sleep Medicine',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9316023/',
        linkText: '[PubMed / PMC]',
      },
      {
        citation: 'Balban, M. Y., Neri, E., Kaelberer, M. M., et al. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal.',
        journal: 'Cell Reports Medicine, 4(1), 100895',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36630953/',
        linkText: '[PubMed]',
      },
    ],
    authorBio: {
      title: 'Scritto dal Team Editoriale di HarmonyBreath',
      desc: 'Redatto da istruttori di respirazione consapevole e ricercatori di salute integrata, verificato con la letteratura fisiologica attuale.',
      disclaimer: 'Questo contenuto ha scopo unicamente divulgativo.',
      learnMore: 'Scopri i nostri standard editoriali',
    },
    faqs: [
      {
        question: 'Come funziona la respirazione 4-7-8?',
        answer: 'Si basa su un tempo ritmico esatto: inspiri per 4 secondi, trattieni per 7 secondi ed espiri per 8 secondi. L’espirazione prolungata attiva il nervo vago, rallentando il battito cardiaco e stimolando la quiete parasimpatica.',
      },
      {
        question: 'Aiuta davvero a prendere sonno?',
        answer: 'Sì. Gli studi dimostrano che riduce l’arousal notturno e spegne il flusso di pensieri angoscianti.',
      },
      {
        question: 'Quante volte al giorno andrebbe eseguita?',
        answer: 'Il Dr. Andrew Weil consiglia di eseguirla almeno 2 volte al giorno, partendo da 4 cicli a seduta.',
      },
      {
        question: 'In quanto tempo ci si addormenta con la tecnica 4-7-8?',
        answer: 'Con una pratica quotidiana costante per 2 o 3 settimane, molte persone riferiscono di addormentarsi in 1-3 minuti dopo il termine dei cicli.',
      },
      {
        question: 'La respirazione 4-7-8 comporta rischi?',
        answer: 'È molto sicura se svolta a riposo seduti o coricati. Non va mai praticata al volante o in acqua.',
      },
      {
        question: 'I principianti possono modificare i secondi?',
        answer: 'Sì. La chiave risiede nel rapporto proporzionale 4:7:8 (ad esempio 2s dentro, 3.5s trattieni, 4s fuori).',
      },
    ],
  },
};
