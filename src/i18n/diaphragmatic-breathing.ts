import type { SupportedLanguage } from './ui';

export interface DiaphragmaticBreathingContent {
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
  phases: {
    inhale: string;
    hold: string;
    exhale: string;
    pause: string;
  };
  instructions: {
    inhale: string;
    hold: string;
    exhale: string;
    pause: string;
  };
  guide: {
    whatIsTitle: string;
    whatIsDesc1: string;
    whatIsDesc2: string;
    howToTitle: string;
    howToSteps: { step: string; title: string; desc: string }[];
    benefitsTitle: string;
    benefits: { title: string; desc: string }[];
    scienceTitle: string;
    scienceDesc1: string;
    scienceDesc2: string;
    whoUsesTitle: string;
    whoUsesDesc: string;
  };
  faqs: { question: string; answer: string }[];
}

export const diaphragmaticBreathingI18n: Record<SupportedLanguage, DiaphragmaticBreathingContent> = {
  en: {
    metaTitle: 'Diaphragmatic Breathing: Belly Breathing Timer & Exercises',
    metaDescription: 'Master diaphragmatic breathing (belly breathing) with our free guided timer. Stimulate the vagus nerve, reduce stress, and activate deep relaxation.',
    keywords: 'diaphragmatic breathing, belly breathing, deep abdominal breathing, diaphragmatic breathing exercises, diaphragmatic breathing timer, vagus nerve stimulation, reduce cortisol breathing, breathing exercises for anxiety',
    canonicalPath: '/diaphragmatic-breathing/',
    badge: 'VAGAL TONE & DEEP PARASYMPATHETIC ACTIVATION',
    heroTitle: 'Diaphragmatic / Belly Breathing\nTimer & Exercise',
    heroSubtitle: 'Master true anatomical belly breathing to expand lung capacity, stimulate the vagus nerve, and trigger systemic parasympathetic relaxation with our free visual & audio guided timer.',
    breadcrumbName: 'Diaphragmatic Breathing',
    startPracticeBtn: 'Start Practice',
    jumpLinks: {
      timer: 'Timer',
      presets: 'Presets',
      stats: 'Stats',
      guide: 'Guide',
      about: 'About',
      faq: 'FAQ',
    },
    phases: {
      inhale: 'Belly Inhale',
      hold: 'Gentle Hold',
      exhale: 'Release Exhale',
      pause: 'Rest Pause',
    },
    instructions: {
      inhale: 'Inhale deep into your lower belly, feeling your diaphragm descend and your hands push outward.',
      hold: 'Retain the breath softly without creating any pressure in your throat or chest.',
      exhale: 'Let the breath glide out effortlessly as your belly contracts back toward your spine.',
      pause: 'Savor the tranquil emptiness at the bottom of the breath before the next inhale rises.',
    },
    guide: {
      whatIsTitle: 'What is Diaphragmatic Breathing (Belly Breathing)?',
      whatIsDesc1: 'Diaphragmatic breathing—often termed belly breathing, abdominal breathing, or deep breathing—is the natural, biologically optimal way human bodies are designed to breathe. It engages the primary respiratory muscle (the diaphragm) rather than relying on shallow chest and shoulder muscles.',
      whatIsDesc2: 'When you inhale diaphragmatically, the dome-shaped muscle moves downward, creating negative pressure that pulls air deeply into the richly vascularized lower lobes of the lungs, maximizing oxygen exchange and stimulating the calming vagus nerve.',
      howToTitle: 'Step-by-Step Protocol: How to Practice Belly Breathing',
      howToSteps: [
        { step: '1', title: 'Position Your Hands', desc: 'Lie down or sit upright. Place one hand on your upper chest and the other on your belly right below your ribs.' },
        { step: '2', title: 'Breathe Deep Into Your Belly', desc: 'Inhale slowly through your nose for 4 seconds. Ensure the hand on your belly rises while the hand on your chest remains nearly still.' },
        { step: '3', title: 'Gentle Pause', desc: 'Hold the breath softly for 2 seconds, feeling the expansiveness across your lower abdomen and lower back.' },
        { step: '4', title: 'Slow, Relaxing Exhale', desc: 'Exhale through pursed lips or nostrils for 4–6 seconds as your belly gently deflates inward.' },
      ],
      benefitsTitle: 'Evidence-Based Health Benefits',
      benefits: [
        { title: 'Vagus Nerve Stimulation', desc: 'Direct mechanical movement of the diaphragm massages the vagus nerve, immediately shifting autonomic tone toward rest-and-digest.' },
        { title: 'Blood Pressure & Heart Rate Reduction', desc: 'Decreases vascular peripheral resistance, lowers baseline blood pressure, and slows resting heart rate.' },
        { title: 'Cortisol & Stress Regulation', desc: 'Clinical studies show daily diaphragmatic breathing reduces circulating cortisol levels and alleviates perceived stress.' },
        { title: 'Enhanced Core & Postural Stability', desc: 'The diaphragm works synergistically with the pelvic floor and transversus abdominis to stabilize the lumbar spine.' },
      ],
      scienceTitle: 'The Science: Why Chest Breathing Harms and Belly Breathing Heals',
      scienceDesc1: 'Chronic mental stress causes subconscious shallow apical (chest) breathing, which over-activates secondary respiratory muscles in the neck and shoulders, leading to tension headaches, elevated sympathetic tone, and chronic hyperventilation.',
      scienceDesc2: 'The lower thirds of your lungs contain the greatest density of parasympathetic nerve endings and pulmonary capillaries. Engaging the diaphragm forces blood flow into these areas, optimizing ventilation-perfusion ratios and improving cellular oxygenation.',
      whoUsesTitle: 'Who Should Practice Diaphragmatic Breathing?',
      whoUsesDesc: 'Recommended by pulmonologists, cardiologists, singers, yoga practitioners, and clinical psychologists, diaphragmatic breathing is the foundation of pulmonary rehabilitation, athletic endurance recovery, and anxiety management worldwide.',
    },
    faqs: [
      {
        question: 'Is belly breathing good for anxiety and panic?',
        answer: 'Yes, belly breathing is one of the most clinically proven non-pharmacological interventions for acute anxiety and panic. It mechanically triggers the parasympathetic nervous system via the vagus nerve, rapidly lowering heart rate and sending safety signals to the brain.',
      },
      {
        question: 'How many times a day should I do diaphragmatic breathing?',
        answer: 'Practicing for 5 to 10 minutes, 2 to 3 times per day (for example, upon waking and before sleep) can reprogram your subconscious baseline breathing patterns away from chronic shallow chest breathing.',
      },
      {
        question: 'Why does my chest move instead of my belly when I breathe?',
        answer: 'Most adults have adapted to habitual chest breathing due to desk posture, tight clothing, and chronic stress. With consistent practice using our visual breathing timer, diaphragmatic motor patterns will quickly re-establish themselves.',
      },
      {
        question: 'Can diaphragmatic breathing lower blood pressure?',
        answer: 'Yes. Regular diaphragmatic breathing decreases peripheral vascular resistance and enhances arterial baroreflex sensitivity, contributing to sustainable blood pressure reduction.',
      },
    ],
  },

  es: {
    metaTitle: 'Respiración Diafragmática: Temporizador Abdominal y Guía',
    metaDescription: 'Aprende la respiración diafragmática (abdominal) con nuestro temporizador gratis. Estimula el nervio vago, reduce el cortisol y calma la ansiedad.',
    keywords: 'respiracion diafragmatica, respiracion abdominal, respiracion de vientre, ejercicios de respiracion diafragmatica, como respirar con el diafragma, respiracion para calmar la ansiedad, nervio vago respiracion',
    canonicalPath: '/es/diaphragmatic-breathing/',
    badge: 'ESTIMULACIÓN DEL NERVIO VAGO Y ACTIVACIÓN PARASIMPÁTICA',
    heroTitle: 'Respiración Diafragmática\nRespiración Abdominal y Vientre',
    heroSubtitle: 'Domina la auténtica respiración diafragmática para expandir tu capacidad pulmonar, estimular el nervio vago y activar una profunda relajación con nuestro temporizador guiado visual y sonoro.',
    breadcrumbName: 'Respiración Diafragmática',
    startPracticeBtn: 'Comenzar Práctica',
    jumpLinks: {
      timer: 'Temporizador',
      presets: 'Modos',
      stats: 'Estadísticas',
      guide: 'Guía',
      about: 'Acerca de',
      faq: 'Preguntas',
    },
    phases: {
      inhale: 'Inhala al Vientre',
      hold: 'Pausa Suave',
      exhale: 'Exhala Despacio',
      pause: 'Descanso',
    },
    instructions: {
      inhale: 'Inhala profundamente hacia el abdomen sintiendo cómo se expande el diafragma y tu vientre sube.',
      hold: 'Retén el aire con serenidad sin generar presión en el pecho ni en la garganta.',
      exhale: 'Deja salir el aire suavemente mientras tu abdomen desciende hacia la columna.',
      pause: 'Disfruta de la quietud relajante antes de iniciar la siguiente inhalación.',
    },
    guide: {
      whatIsTitle: '¿Qué es la Respiración Diafragmática (Respiración Abdominal)?',
      whatIsDesc1: 'La respiración diafragmática—también llamada respiración abdominal o de vientre—es la forma natural y anatómicamente óptima en que el cuerpo humano está diseñado para respirar. Utiliza el músculo diafragma en lugar de los músculos secundarios del pecho y cuello.',
      whatIsDesc2: 'Al inhalar diafragmáticamente, el diafragma desciende masajeando los órganos internos y llenando la base de los pulmones, donde existe la mayor concentración de vasos sanguíneos y receptores de calma del sistema nervioso.',
      howToTitle: 'Cómo hacer la respiración diafragmática paso a paso',
      howToSteps: [
        { step: '1', title: 'Coloca tus manos', desc: 'Acuéstate o siéntate cómodo. Pon una mano en tu pecho y la otra sobre tu vientre, justo bajo las costillas.' },
        { step: '2', title: 'Inhala hacia el abdomen', desc: 'Inhala despacio por la nariz durante 4 segundos. La mano del vientre debe subir mientras la del pecho apenas se mueve.' },
        { step: '3', title: 'Pausa breve y suave', desc: 'Sostén el aire 2 segundos con tranquilidad, percibiendo la expansión abdominal.' },
        { step: '4', title: 'Exhalación lenta y relajante', desc: 'Exhala por la boca o nariz durante 4 a 6 segundos mientras el abdomen vuelve a su posición inicial.' },
      ],
      benefitsTitle: 'Beneficios científicamente probados de la respiración diafragmática',
      benefits: [
        { title: 'Estimulación directa del nervio vago', desc: 'El movimiento mecánico del diafragma activa el nervio vago, activando el sistema parasimpático para frenar el estrés.' },
        { title: 'Reducción de la presión arterial y pulsaciones', desc: 'Disminuye la resistencia vascular y estabiliza el ritmo cardíaco de forma completamente natural.' },
        { title: 'Disminución del cortisol y la ansiedad', desc: 'Numerosos estudios clínicos demuestran que practicarla a diario reduce los niveles de cortisol en sangre.' },
        { title: 'Mejora de la digestión y postura', desc: 'El suave masaje abdominal favorece el tránsito intestinal y fortalece el suelo pélvico y la zona lumbar.' },
      ],
      scienceTitle: 'La ciencia: ¿Por qué la respiración en el pecho perjudica y el diafragma sana?',
      scienceDesc1: 'El estrés crónico provoca una respiración torácica rápida y superficial que fatiga los músculos del cuello y hombros, desencadenando contracturas y manteniendo al cerebro en estado de alerta constante.',
      scienceDesc2: 'La base de los pulmones cuenta con la mayor densidad de capilares y terminaciones del sistema parasimpático. Llevar el aire hasta allí optimiza la oxigenación celular y envía señales de calma al cerebro.',
      whoUsesTitle: '¿Quién debe practicar la respiración diafragmática?',
      whoUsesDesc: 'Recomendada por neumólogos, cardiólogos, psicólogos, cantantes y atletas, es la técnica fundamental para rehabilitar la función pulmonar, superar ataques de pánico y mejorar la resistencia física.',
    },
    faqs: [
      {
        question: '¿La respiración diafragmática es buena para la ansiedad?',
        answer: 'Sí, es una de las técnicas con mayor evidencia científica para calmar crisis de ansiedad. Al activar el nervio vago, reduce el ritmo cardíaco y detiene la hiperventilación en cuestión de minutos.',
      },
      {
        question: '¿Cuántas veces al día se recomienda practicarla?',
        answer: 'De 5 a 10 minutos, 2 o 3 veces al día (por ejemplo, al levantarte y antes de dormir) es suficiente para reeducar tu patrón respiratorio y eliminar la respiración superficial crónica.',
      },
      {
        question: '¿Por qué se mueve mi pecho y no mi estómago?',
        answer: 'Debido al estrés habitual y las malas posturas frente al ordenador, muchas personas olvidan usar el diafragma. Con unos días de práctica usando nuestro temporizador visual, recuperarás el movimiento natural.',
      },
      {
        question: '¿Ayuda a bajar la presión arterial?',
        answer: 'Sí. La respiración lenta y diafragmática relaja los vasos sanguíneos y mejora el reflejo barorreceptor, contribuyendo a normalizar la tensión arterial.',
      },
    ],
  },

  de: {
    metaTitle: 'Zwerchfellatmung: Bauchatmung Timer & Übungen für Ruhe',
    metaDescription: 'Lerne die Bauchatmung (Zwerchfellatmung) mit unserem kostenlosen Online-Timer. Stimuliere den Vagusnerv, senke Stress und aktiviere tiefe Entspannung.',
    keywords: 'bauchatmung, zwerchfellatmung, bauchatmung uebungen, richtig in den bauch atmen, tiefe bauchatmung, vagusnerv stimulieren atmung, atemuebungen blutdruck senken, entspannung timer',
    canonicalPath: '/de/diaphragmatic-breathing/',
    badge: 'VAGUSNERV-STIMULATION & PARASYMPATHISCHE ENTSPANNUNG',
    heroTitle: 'Bauchatmung (Zwerchfellatmung)\nÜbungen & Geführter Timer',
    heroSubtitle: 'Meistere die anatomisch gesunde Bauchatmung, um deine Lungenkapazität zu erweitern, den Vagusnerv zu stimulieren und das Nervensystem sofort zu beruhigen.',
    breadcrumbName: 'Bauchatmung',
    startPracticeBtn: 'Übung Starten',
    jumpLinks: {
      timer: 'Timer',
      presets: 'Modi',
      stats: 'Statistik',
      guide: 'Anleitung',
      about: 'Über',
      faq: 'FAQ',
    },
    phases: {
      inhale: 'In den Bauch einatmen',
      hold: 'Sanfte Pause',
      exhale: 'Langsam ausatmen',
      pause: 'Ruhepause',
    },
    instructions: {
      inhale: 'Atme tief in den Bauchraum ein, sodass sich deine Bauchdecke spürbar nach vorne wölbt.',
      hold: 'Halte den Atem sanft an, ohne Druck im Hals oder Brustkorb aufzubauen.',
      exhale: 'Lass die Luft langsam und gleichmäßig ausströmen, während der Bauch wieder einsinkt.',
      pause: 'Genieße die vollkommene Stille in den leeren Lungen vor dem nächsten Atemzug.',
    },
    guide: {
      whatIsTitle: 'Was ist die Bauchatmung (Zwerchfellatmung)?',
      whatIsDesc1: 'Die Bauchatmung – medizinisch als Zwerchfellatmung oder abdominelle Atmung bezeichnet – ist die natürliche, biologisch effizienteste Atemform des Menschen. Dabei wird primär das Zwerchfell anstelle der Nacken- und Brustmuskulatur genutzt.',
      whatIsDesc2: 'Beim Einatmen senkt sich das Zwerchfell nach unten, massiert die inneren Organe und zieht die Luft bis in die unteren Lungenflügel, wo die beste Sauerstoffaufnahme stattfindet.',
      howToTitle: 'Schritt-für-Schritt-Anleitung: Richtig in den Bauch atmen',
      howToSteps: [
        { step: '1', title: 'Hände positionieren', desc: 'Lege dich bequem hin oder sitze aufrecht. Eine Hand auf die Brust, die andere auf den Bauch unterhalb der Rippen.' },
        { step: '2', title: 'Tief in den Bauch einatmen', desc: 'Atme 4 Sekunden langsam durch die Nase ein. Nur die Hand auf dem Bauch hebt sich, die Brust bleibt ruhig.' },
        { step: '3', title: 'Sanft anhalten', desc: 'Halte für 2 Sekunden entspannt inne und spüre die Weite im unteren Rumpf.' },
        { step: '4', title: 'Langsam ausatmen', desc: 'Atme 4 bis 6 Sekunden ruhig durch Nase oder Lippenbremse aus, während der Bauch flach wird.' },
      ],
      benefitsTitle: 'Wissenschaftlich nachgewiesene Vorteile der Zwerchfellatmung',
      benefits: [
        { title: 'Direkte Vagusnerv-Aktivierung', desc: 'Die Bewegung des Zwerchfells stimuliert den Vagusnerv und schaltet den Körper auf Regeneration und Ruhe.' },
        { title: 'Senkung von Blutdruck & Herzfrequenz', desc: 'Reduziert den Gefäßwiderstand und stabilisiert den Herzrhythmus nachhaltig.' },
        { title: 'Schneller Cortisol- & Stressabbau', desc: 'Studien belegen, dass regelmäßige Bauchatmung die Konzentration von Stresshormonen im Blut senkt.' },
        { title: 'Bessere Verdauung & Haltung', desc: 'Die sanfte Organmassage fördert die Darmtätigkeit und entlastet verspannte Nackenmuskeln.' },
      ],
      scienceTitle: 'Die Wissenschaft: Warum Brustatmung stresst und Bauchatmung heilt',
      scienceDesc1: 'Dauerstress führt zu chronischer Brust- und Hochatmung. Dadurch verspannen Nacken- und Schultermuskeln, Kopfschmerzen entstehen und der Körper bleibt in dauernder Alarmbereitschaft.',
      scienceDesc2: 'In den unteren Lungenabschnitten befinden sich die meisten Blutkapillaren und beruhigenden Nervenfasern. Die Bauchatmung versorgt diese optimal und verbessert die zelluläre Sauerstoffversorgung.',
      whoUsesTitle: 'Für wen ist die Bauchatmung geeignet?',
      whoUsesDesc: 'Von Lungenfachärzten, Kardiologen, Physiotherapeuten, Sängern und Sportlern empfohlen, bildet die Zwerchfellatmung die Grundlage jeder fundierten Atemtherapie und Stressprävention.',
    },
    faqs: [
      {
        question: 'Hilft die Bauchatmung bei Angst und Panik?',
        answer: 'Ja, absolut. Die Zwerchfellatmung ist das wirksamste natürliche Mittel gegen akute Angstzustände. Sie signalisiert dem Gehirn über den Vagusnerv sofortige Sicherheit und stoppt Hyperventilation.',
      },
      {
        question: 'Wie oft sollte man am Tag üben?',
        answer: 'Bereits 5 bis 10 Minuten, 2 bis 3 Mal täglich (z. B. morgens und abends), genügen, um das Unterbewusstsein wieder an das gesunde Atemmuster zu gewöhnen.',
      },
      {
        question: 'Warum bewegt sich bei mir nur die Brust?',
        answer: 'Langes Sitzen, enge Kleidung und Stress verlernen uns die Bauchatmung. Mit unserem visuellen Atemtimer kannst du dir die natürliche Zwerchfellbewegung innerhalb weniger Tage wieder aneignen.',
      },
      {
        question: 'Kann Bauchatmung den Blutdruck senken?',
        answer: 'Ja. Durch die Aktivierung des Parasympathikus weiten sich die Blutgefäße und der Baroreflex wird gestärkt, was den systolischen und diastolischen Blutdruck messbar senkt.',
      },
    ],
  },

  fr: {
    metaTitle: 'Respiration Diaphragmatique: Minuteur Ventral & Exercices',
    metaDescription: 'Apprenez la respiration diaphragmatique (ventrale) avec notre minuteur gratuit. Stimulez le nerf vague, baissez le cortisol et calmez l’anxiété.',
    keywords: 'respiration diaphragmatique, respiration abdominale, respiration par le ventre, exercices respiration diaphragmatique, bienfaits respiration abdominale, calmer angoisse respiration, nerf vague respiration',
    canonicalPath: '/fr/diaphragmatic-breathing/',
    badge: 'STIMULATION DU NERF VAGUE & APPAISEMENT PARASYMPATHIQUE',
    heroTitle: 'Respiration Diaphragmatique\nRespiration Abdominale par le Ventre',
    heroSubtitle: 'Maîtrisez la véritable respiration par le ventre pour maximiser votre capacité pulmonaire, stimuler le nerf vague et déclencher une détente physique et mentale profonde grâce à notre minuteur guidé.',
    breadcrumbName: 'Respiration Diaphragmatique',
    startPracticeBtn: 'Commencer l’exercice',
    jumpLinks: {
      timer: 'Minuteur',
      presets: 'Modes',
      stats: 'Statistiques',
      guide: 'Guide',
      about: 'À propos',
      faq: 'FAQ',
    },
    phases: {
      inhale: 'Inspirez par le ventre',
      hold: 'Pause douce',
      exhale: 'Expirez lentement',
      pause: 'Repos',
    },
    instructions: {
      inhale: 'Inspirez profondément par le nez en laissant le bas-ventre se gonfler naturellement.',
      hold: 'Marquez un temps d’arrêt sans forcer, sans tension dans la gorge ou le haut du corps.',
      exhale: 'Laissez l’air s’échapper doucement tandis que votre ventre se rétracte calmement.',
      pause: 'Savourez la sensation de repos total poumons vides avant la prochaine inspiration.',
    },
    guide: {
      whatIsTitle: 'Qu’est-ce que la respiration diaphragmatique (abdominale) ?',
      whatIsDesc1: 'La respiration diaphragmatique—souvent appelée respiration ventrale ou abdominale—est le mode respiratoire physiologique naturel de l’être humain. Elle sollicite le diaphragme plutôt que les muscles accessoires des épaules et de la gorge.',
      whatIsDesc2: 'Lorsque vous inspirez avec le diaphragme, ce muscle descend, masse les organes digestifs et achemine l’air vers la base des poumons, là où l’oxygénation sanguine et les récepteurs de détente sont les plus performants.',
      howToTitle: 'Protocole pas à pas : Comment bien respirer par le ventre',
      howToSteps: [
        { step: '1', title: 'Positionnez vos mains', desc: 'Allongez-vous ou asseyez-vous le dos droit. Posez une main sur la poitrine et l’autre sur le ventre, sous les côtes.' },
        { step: '2', title: 'Inspirez vers le ventre', desc: 'Inspirez par le nez pendant 4 secondes. Seule la main posée sur le ventre doit monter, la poitrine reste immobile.' },
        { step: '3', title: 'Courte pause agréable', desc: 'Gardez l’air 2 secondes en observant l’expansion harmonieuse du bas du corps.' },
        { step: '4', title: 'Expiration lente et fluide', desc: 'Expirez par la bouche ou le nez pendant 4 à 6 secondes pendant que le ventre redescend doucement.' },
      ],
      benefitsTitle: 'Bienfaits cliniquement démontrés de la respiration ventrale',
      benefits: [
        { title: 'Stimulation directe du nerf vague', desc: 'Le mouvement d’abaissement du diaphragme active le nerf vague et enclenche instantanément le frein parasympathique.' },
        { title: 'Baisse de la tension artérielle et du pouls', desc: 'Relâche la résistance vasculaire périphérique et régularise durablement le rythme cardiaque.' },
        { title: 'Chute du cortisol et de l’anxiété', desc: 'Les essais cliniques confirment une diminution nette du taux d’hormones du stress après quelques minutes d’exercice.' },
        { title: 'Amélioration de la digestion et de la posture', desc: 'Le va-et-vient diaphragmatique draine les viscères abdominaux et soulage la colonne lombaire.' },
      ],
      scienceTitle: 'Physiologie : Pourquoi la respiration thoracique stresse et le ventre guérit',
      scienceDesc1: 'Le stress chronique installe une respiration thoracique haute et saccadée qui crispe les trapèzes, déclenche des céphalées de tension et perpétue l’état d’alerte mentale.',
      scienceDesc2: 'Les bases pulmonaires contiennent la plus grande richesse en capillaires sanguins. La respiration diaphragmatique ventile ces zones clés, optimisant les échanges gazeux et diffusant le calme au cerveau.',
      whoUsesTitle: 'À qui s’adresse la respiration diaphragmatique ?',
      whoUsesDesc: 'Préconisée par les pneumologues, cardiologues, orthophonistes, chanteurs et préparateurs mentaux, elle constitue le pilier de la rééducation respiratoire et de la gestion du stress.',
    },
    faqs: [
      {
        question: 'La respiration par le ventre est-elle efficace contre l’anxiété ?',
        answer: 'Oui, c’est l’outil naturel le plus rapide et éprouvé pour désamorcer les crises d’angoisse. Elle bloque l’hyperventilation et régule le système nerveux en stimulant le nerf vague.',
      },
      {
        question: 'À quelle fréquence doit-on la pratiquer ?',
        answer: 'Pratiquer 5 à 10 minutes, 2 à 3 fois par jour (au réveil, en pause au travail et au coucher) suffit pour rééduquer durablement sa respiration quotidienne.',
      },
      {
        question: 'Pourquoi ma poitrine se lève-t-elle au lieu de mon ventre ?',
        answer: 'La position assise prolongée et le stress figent le diaphragme. Avec un entraînement régulier grâce à notre guide visuel, le réflexe naturel de respiration ventrale se rétablira très vite.',
      },
      {
        question: 'Aide-t-elle à faire baisser la tension artérielle ?',
        answer: 'Oui, en ralentissant la fréquence cardiaque et en améliorant la sensibilité du baroréflexe, elle contribue efficacement à нормаliser la pression artérielle.',
      },
    ],
  },

  pt: {
    metaTitle: 'Respiração Diafragmática: Temporizador Abdominal e Guia',
    metaDescription: 'Aprenda a respiração diafragmática (abdominal) com nosso temporizador grátis. Estimule o nervo vago, reduza o estresse e acalme a ansiedade.',
    keywords: 'respiracao diafragmatica, respiracao abdominal, respiracao com a barriga, exercicios de respiracao diafragmatica, como fazer respiracao diafragmatica, acalmar ansiedade respiracao, nervo vago respiracao',
    canonicalPath: '/pt/diaphragmatic-breathing/',
    badge: 'ESTIMULAÇÃO DO NERVO VAGO & ATIVAÇÃO PARASSIMPÁTICA',
    heroTitle: 'Respiração Diafragmática\nRespiração Abdominal com a Barriga',
    heroSubtitle: 'Aprenda a respirar corretamente com o abdômen para expandir a capacidade pulmonar, ativar o nervo vago e desfrutar de um relaxamento profundo com nosso temporizador visual e sonoro.',
    breadcrumbName: 'Respiração Diafragmática',
    startPracticeBtn: 'Iniciar Prática',
    jumpLinks: {
      timer: 'Temporizador',
      presets: 'Modos',
      stats: 'Estatísticas',
      guide: 'Guia',
      about: 'Sobre',
      faq: 'Perguntas',
    },
    phases: {
      inhale: 'Inspire na Barriga',
      hold: 'Pausa Leve',
      exhale: 'Expire Devagar',
      pause: 'Descanso',
    },
    instructions: {
      inhale: 'Puxe o ar profundamente em direção ao abdômen, sentindo a barriga se expandir para frente.',
      hold: 'Segure o ar com serenidade sem apertar o peito ou a garganta.',
      exhale: 'Solte o ar lentamente pela boca ou nariz enquanto a barriga relaxa para dentro.',
      pause: 'Aproveite a calmaria de pulmões vazios antes de iniciar a próxima respiração.',
    },
    guide: {
      whatIsTitle: 'O que é a Respiração Diafragmática (Respiração Abdominal)?',
      whatIsDesc1: 'A respiração diafragmática—conhecida popularmente como respiração abdominal ou respiração pela barriga—é o padrão fisiológico correto e natural do corpo humano. Utiliza o diafragma como músculo principal, poupando o tórax e os ombros.',
      whatIsDesc2: 'Ao inspirar diafragmaticamente, o diafragma desce massageando os órgãos digestivos e conduzindo o oxigênio à base dos pulmões, onde se concentram os vasos sanguíneos mais eficientes e os receptores do sistema parassimpático.',
      howToTitle: 'Passo a passo: Como fazer a respiração diafragmática',
      howToSteps: [
        { step: '1', title: 'Posicione as mãos', desc: 'Deite-se de barriga para cima ou sente-se ereto. Coloque uma mão no peito e outra no abdômen, logo abaixo das costelas.' },
        { step: '2', title: 'Inspire expandindo a barriga', desc: 'Puxe o ar pelo nariz por 4 segundos. A mão da barriga deve subir enquanto a do peito permanece imóvel.' },
        { step: '3', title: 'Pausa confortável', desc: 'Segure por 2 segundos sentindo a expansão gostosa na base do tronco.' },
        { step: '4', title: 'Expiração longa e suave', desc: 'Solte o ar de forma lenta por 4 a 6 segundos à medida que o abdômen desce.' },
      ],
      benefitsTitle: 'Benefícios cientificamente comprovados da respiração abdominal',
      benefits: [
        { title: 'Estímulo ao nervo vago', desc: 'A movimentação do diafragma ativa o nervo vago, reduzindo o estresse e restabelecendo o ritmo de descanso.' },
        { title: 'Diminuição da pressão arterial e batimentos', desc: 'Relaxa os vasos sanguíneos e alivia a sobrecarga no coração de modo 100% natural.' },
        { title: 'Queda do cortisol e da ansiedade', desc: 'Estudos científicos comprovam que praticar diariamente baixa a concentração de hormônios do estresse no sangue.' },
        { title: 'Melhora da digestão e alívio de dores nas costas', desc: 'A massagem nos órgãos internos melhora o trânsito intestinal e estabiliza a coluna lombar.' },
      ],
      scienceTitle: 'A ciência: Por que a respiração no peito adoece e o abdômen cura',
      scienceDesc1: 'O estresse do dia a dia induz à respiração torácica rasa, que sobrecarrega o pescoço e os ombros, gerando dores musculares crônicas e enviando sinais contínuos de perigo para o cérebro.',
      scienceDesc2: 'A base dos pulmões possui a maior quantidade de terminações nervosas calmantes. A respiração diafragmática ativa essas áreas, oxigenando o sangue e dissipando a sensação de pânico.',
      whoUsesTitle: 'Quem deve praticar a respiração diafragmática?',
      whoUsesDesc: 'Recomendada por pneumologistas, cardiologistas, psicólogos, cantores e fisioterapeutas, é o alicerce para tratar a ansiedade, dormir melhor e aumentar a resistência física.',
    },
    faqs: [
      {
        question: 'A respiração diafragmática ajuda na ansiedade?',
        answer: 'Sim, é comprovadamente o método respiratório mais eficaz contra ansiedade e crises de pânico, pois ativa o sistema parassimpático e desacelera o coração rapidamente.',
      },
      {
        question: 'Quantas vezes ao dia devo fazer?',
        answer: 'Fazer de 5 a 10 minutos, 2 a 3 vezes por dia (ao acordar e antes de deitar), é o suficiente para reeducar o corpo a não respirar só pelo peito.',
      },
      {
        question: 'Por que meu peito se mexe e minha barriga não?',
        answer: 'A tensão diária e posturas incorretas travam o diafragma. Com alguns minutos diários de treino no nosso temporizador interativo, o movimento natural da barriga será restabelecido.',
      },
      {
        question: 'Ajuda a diminuir a pressão alta?',
        answer: 'Sim, a respiração lenta e profunda melhora a sensibilidade barorreflexa das artérias, auxiliando no controle da hipertensão arterial.',
      },
    ],
  },

  ja: {
    metaTitle: '腹式呼吸法（横隔膜呼吸）ガイド付きタイマー＆やり方解説',
    metaDescription: '腹式呼吸（横隔膜呼吸・ベリー呼吸）を無料のビジュアル＆音声ガイド付きタイマーで実践。迷走神経を刺激し、コルチゾールを抑えて自律神経を整え、不安や緊張を解消して深いリラックスへ導きます。',
    keywords: '腹式呼吸, 腹式呼吸 やり方, 横隔膜呼吸, 腹式呼吸 効果, 自律神経 呼吸法, 腹式呼吸 タイマー, ストレス解消 呼吸, 深呼吸 やり方',
    canonicalPath: '/ja/diaphragmatic-breathing/',
    badge: '迷走神経を刺激し副交感神経を優位にする呼吸法',
    heroTitle: '腹式呼吸法\n横隔膜呼吸 エクササイズ＆タイマー',
    heroSubtitle: '本来の自然な腹式呼吸をマスターし、肺活量を広げ、迷走神経を刺激して深いリラクゼーションを体験できる無料の呼吸ガイドタイマーです。',
    breadcrumbName: '腹式呼吸法',
    startPracticeBtn: 'セッション開始',
    jumpLinks: {
      timer: 'タイマー',
      presets: 'プリセット',
      stats: '記録',
      guide: '実践ガイド',
      about: '解説',
      faq: 'よくある質問',
    },
    phases: {
      inhale: 'お腹で吸う',
      hold: '静止',
      exhale: 'ゆっくり吐く',
      pause: '休息',
    },
    instructions: {
      inhale: '鼻から静かに息を吸い込み、お腹を風船のように大きく膨らませます。',
      hold: '胸や喉を締めつけず、お腹の広がりを感じながら穏やかに息を止めます。',
      exhale: '口から細く長く息を吐き出し、お腹が背骨に向かってへこむのを感じます。',
      pause: '息を吐き切った安らかな静けさを味わい、次の吸気に備えます。',
    },
    guide: {
      whatIsTitle: '腹式呼吸法（横隔膜呼吸）とは？',
      whatIsDesc1: '腹式呼吸（Diaphragmatic Breathing）とは、胸や肩の筋肉に頼る浅い胸式呼吸とは異なり、呼吸の主役である「横隔膜」を上下にしっかり動かして行う、人間本来の理想的な呼吸法です。',
      whatIsDesc2: '息を吸う際に横隔膜が下がることで内臓が優しく刺激され、毛細血管と副交感神経が密集している肺の底部までたっぷりと新鮮な空気が送り込まれます。',
      howToTitle: '腹式呼吸の正しいやり方（ステップ別ガイド）',
      howToSteps: [
        { step: '1', title: '手の位置をセット', desc: '仰向けに寝るか背筋を伸ばして座ります。片手を胸に、もう片方の手をおへその少し上に当てます。' },
        { step: '2', title: 'お腹を膨らませて吸う', desc: '鼻から4秒かけてゆっくり吸います。胸の手は動かさず、お腹の手だけが押し出されるようにします。' },
        { step: '3', title: '軽く息を止める', desc: '2秒間無理なく息を止め、下腹部の心地よい広がりを感じます。' },
        { step: '4', title: '細く長く吐き出す', desc: '口または鼻から4〜6秒かけて均等に息を吐き切り、お腹を自然にしぼませます。' },
      ],
      benefitsTitle: '科学的に実証されている腹式呼吸の効果',
      benefits: [
        { title: '迷走神経の刺激と自律神経の安定', desc: '横隔膜の運動が迷走神経を直接刺激し、即座に心身をリラックスモード（副交感神経）へと切り替えます。' },
        { title: '血圧・心拍数の安定化', desc: '末梢血管の抵抗を減らし、高ぶった心拍数を速やかに落ち着かせます。' },
        { title: 'ストレスホルモン（コルチゾール）の減少', desc: '毎日の腹式呼吸トレーニングにより、血中コルチゾール値の低下と不安感の緩和が医学的に確認されています。' },
        { title: '胃腸の活性化と姿勢の改善', desc: '横隔膜の内臓マッサージ効果により腸内環境が整い、インナーマッスルが体幹を安定させます。' },
      ],
      scienceTitle: '生理学的メカニズム：胸式呼吸の弊害と腹式呼吸の治癒力',
      scienceDesc1: '慢性的ストレスにさらされると、無意識のうちに肩や首の筋肉を使った浅い胸式呼吸に陥り、肩こりや頭痛、自律神経失調症の原因となります。',
      scienceDesc2: '肺の下部3分の1には血流が集中しており、副交感神経の受容器が最も多く存在します。腹式呼吸によってここに酸素を届けることで、全身の細胞の代謝が改善されます。',
      whoUsesTitle: '誰が腹式呼吸を実践すべきか？',
      whoUsesDesc: '呼吸器内科医、心療内科医、歌手、声優、ヨガインストラクター、トップアスリートが推奨しており、緊張の克服や睡眠の質向上に最も安全で効果的なメソッドです。',
    },
    faqs: [
      {
        question: '腹式呼吸は不安やパニック発作に効果がありますか？',
        answer: 'はい、非常に効果的です。過呼吸を防ぎ、迷走神経を通じて脳へ「身体は安全である」という信号を送り、数分で動悸や焦燥感を鎮めます。',
      },
      {
        question: '1日に何回くらい行うのが理想ですか？',
        answer: '1回5〜10分程度を1日2〜3回（起床時や就寝前など）行うと、無意識の普段の呼吸も自然と深い腹式呼吸へと変化していきます。',
      },
      {
        question: 'お腹ではなく胸が動いてしまうのはなぜですか？',
        answer: '長時間のデスクワークや緊張習慣で横隔膜が硬くなっているためです。当ツールの円形アニメーションに合わせて練習すると、徐々にお腹が動くようになります。',
      },
      {
        question: '高血圧の改善にもつながりますか？',
        answer: 'はい。ゆっくりとした腹式呼吸は圧受容器反射の感受性を高め、血管を拡張して血圧を穏やかに下げる効果が実証されています。',
      },
    ],
  },

  it: {
    metaTitle: 'Respirazione Diaframmatica: Timer Addominale ed Esercizi',
    metaDescription: 'Impara la respirazione diaframmatica (addominale) con il nostro timer guidato online gratuito. Stimola il nervo vago e riduci lo stress profondo.',
    keywords: 'respirazione diaframmatica, respirazione addominale, respirazione di pancia, esercizi respirazione diaframmatica, come respirare con il diaframma, nervo vago respirazione, ansia respirazione diaframmatica',
    canonicalPath: '/it/diaphragmatic-breathing/',
    badge: 'STIMOLAZIONE DEL NERVO VAGO & CALMA PARASIMPATICA',
    heroTitle: 'Respirazione Diaframmatica\nRespirazione Addominale e di Pancia',
    heroSubtitle: 'Impara la corretta respirazione addominale per espandere la capacità polmonare, stimolare il nervo vago e innescare un rilassamento profondo con il nostro timer visivo e sonoro.',
    breadcrumbName: 'Respirazione Diaframmatica',
    startPracticeBtn: 'Inizia Esercizio',
    jumpLinks: {
      timer: 'Timer',
      presets: 'Modalità',
      stats: 'Statistiche',
      guide: 'Guida',
      about: 'Informazioni',
      faq: 'FAQ',
    },
    phases: {
      inhale: 'Inspira nella pancia',
      hold: 'Breve pausa',
      exhale: 'Espira lentamente',
      pause: 'Riposo',
    },
    instructions: {
      inhale: 'Inspira profondamente dal naso facendo sollevare la pancia mentre il torace rimane fermo.',
      hold: 'Trattieni delicatamente il respiro senza contrarre il collo o la gola.',
      exhale: 'Rilascia l’aria lentamente dalla bocca o dal naso mentre l’addome si sgonfia dolcemente.',
      pause: 'Gusta il silenzio e la distensione a polmoni vuoti prima della nuova inspirazione.',
    },
    guide: {
      whatIsTitle: 'Cos’è la Respirazione Diaframmatica (Respirazione Addominale)?',
      whatIsDesc1: 'La respirazione diaframmatica—comunemente chiamata respirazione addominale o respirazione di pancia—è il modo naturale ed efficace con cui il corpo umano è progettato per respirare, coinvolgendo il diaframma come motore principale.',
      whatIsDesc2: 'Quando il diafragma si abbassa, crea spazio consentendo all’aria di riempire la parte inferiore dei polmoni, dove la circolazione sanguigna è più ricca e dove risiede la maggiore densità di recettori parasimpatici.',
      howToTitle: 'Guida passo dopo passo: Come respirare con il diaframma',
      howToSteps: [
        { step: '1', title: 'Posiziona le mani', desc: 'Sdraiati supino o siediti con la schiena dritta. Metti una mano sul petto e l’altra sulla pancia, sotto la gabbia toracica.' },
        { step: '2', title: 'Inspira nella pancia', desc: 'Inspira dal naso per 4 secondi. Solo la mano sulla pancia deve sollevarsi, il petto resta rilassato.' },
        { step: '3', title: 'Pausa rilassata', desc: 'Trattieni per 2 secondi assaporando l’espansione del tronco inferiore.' },
        { step: '4', title: 'Espirazione lenta', desc: 'Espira delicatamente dalla bocca per 4-6 secondi mentre la pancia torna verso l’interno.' },
      ],
      benefitsTitle: 'Benefici scientifici della respirazione addominale',
      benefits: [
        { title: 'Stimolazione del nervo vago', desc: 'Il movimento del diaframma attiva il nervo vago, attivando la modalità rigenerativa e abbassando lo stress.' },
        { title: 'Riduzione della pressione arteriosa e del battito', desc: 'Rilascia le resistenze periferiche dei vasi sanguigni e dona serenità al cuore.' },
        { title: 'Calo dei livelli di cortisolo', desc: 'Ricerche cliniche confermano una sensibile diminuzione degli ormoni dello stress con la pratica regolare.' },
        { title: 'Digestione agevolata e meno tensioni lombari', desc: 'Il massaggio delicato agli organi addominali migliora la motilità intestinale e distende la schiena.' },
      ],
      scienceTitle: 'La fisiologia: Perché la respirazione toracica logora e il diaframma guarisce',
      scienceDesc1: 'Lo stress prolungato porta a una respirazione toracica alta e affrettata che affatica spalle e collo, generando cefalee e tenendo il cervello in perenne stato di minaccia.',
      scienceDesc2: 'La base dei polmoni assicura il migliore scambio di ossigeno. La respirazione diaframmatica ossigena questi distretti, inviando impulsi di sicurezza e calma al sistema nervoso centrale.',
      whoUsesTitle: 'Chi dovrebbe praticare la respirazione diaframmatica?',
      whoUsesDesc: 'Raccomandata da pneumologi, cardiologi, psicoterapeuti, cantanti e sportivi, è il fondamento della riabilitazione respiratoria e del benessere emotivo.',
    },
    faqs: [
      {
        question: 'La respirazione diaframmatica è efficace contro l’ansia?',
        answer: 'Sì, è la tecnica naturale più comprovata contro ansia e attacchi di panico. Stimolando il nervo vago, interrompe l’iperventilazione e rallenta il battito cardiaco in pochi minuti.',
      },
      {
        question: 'Quante volte al giorno è consigliabile farla?',
        answer: 'Praticare per 5-10 minuti, 2 o 3 volte al giorno (ad esempio al mattino e prima di dormire) è ideale per reimpostare la respirazione automatica su basi sane.',
      },
      {
        question: 'Perché si muove il mio petto anziché la pancia?',
        answer: 'Lo stress e le cattive posture al computer bloccano il diaframma. Con un po’ di pratica guidata dal nostro timer, l’automatismo naturale si riattiva velocemente.',
      },
      {
        question: 'Può aiutare ad abbassare la pressione alta?',
        answer: 'Sì, la respirazione lenta diaframmatica rilassa la muscolatura dei vasi e potenzia il baroriflesso, favorendo la riduzione della pressione arteriosa.',
      },
    ],
  },
};
