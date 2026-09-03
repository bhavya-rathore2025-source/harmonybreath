import type { SupportedLanguage } from './ui';

export interface BoxBreathingContent {
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
    holdEmpty: string;
  };
  instructions: {
    inhale: string;
    hold: string;
    exhale: string;
    holdEmpty: string;
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

export const boxBreathingI18n: Record<SupportedLanguage, BoxBreathingContent> = {
  en: {
    metaTitle: 'Free Box Breathing Timer & Guide | HarmonyBreath',
    metaDescription: 'Master box breathing (square breathing 4-4-4-4) with our free guided breathing timer. Equal inhale, hold, exhale, and empty hold phases for calm, stress relief, and tactical focus.',
    keywords: 'box breathing, box breathing timer, square breathing, 4-4-4-4 breathing, box breathing exercise, box breathing method, tactical breathing, stress relief breathing, guided breathing timer',
    canonicalPath: '/box-breathing/',
    badge: 'TACTICAL CALM & HIGH-PRESSURE FOCUS ENGINE',
    heroTitle: 'Box Breathing\nSquare Breathing 4-4-4-4',
    heroSubtitle: 'The gold-standard tactical protocol used by Navy SEALs, elite athletes, and clinicians to reset the nervous system, lower cortisol, and regain razor-sharp composure in 4 minutes.',
    breadcrumbName: 'Box Breathing',
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
      inhale: 'Inhale',
      hold: 'Hold',
      exhale: 'Exhale',
      holdEmpty: 'Hold Empty',
    },
    instructions: {
      inhale: 'Breathe in slowly and deeply through your nose, expanding your belly and chest.',
      hold: 'Retain your breath gently at the peak without clenching your throat or jaw.',
      exhale: 'Release the breath smoothly and evenly through your mouth or nose.',
      holdEmpty: 'Remain quiet and still with empty lungs before the next breath cycle begins.',
    },
    guide: {
      whatIsTitle: 'What is Box Breathing (Square Breathing)?',
      whatIsDesc1: 'Box breathing—also commonly known as square breathing, four-square breathing, or Sama Vritti Pranayama—is a powerful breath regulation technique built on four equal quadrants: inhale, hold, exhale, and hold empty.',
      whatIsDesc2: 'By making each side of the "square" identically timed (traditionally 4 seconds), you interrupt the autonomic fight-or-flight response, slow your resting heart rate, and re-establish homeostasis within minutes.',
      howToTitle: 'How to Practice the 4-4-4-4 Method',
      howToSteps: [
        { step: '1', title: 'Inhale for 4 Seconds', desc: 'Inhale slowly through your nostrils into your lower abdomen, feeling your diaphragm expand.' },
        { step: '2', title: 'Hold for 4 Seconds', desc: 'Hold your breath gently with lungs full. Keep your shoulders relaxed and throat open.' },
        { step: '3', title: 'Exhale for 4 Seconds', desc: 'Exhale smoothly and steadily through your mouth, releasing all tension from your upper body.' },
        { step: '4', title: 'Hold Empty for 4 Seconds', desc: 'Pause calmly with lungs empty for four counts before beginning your next repetition.' },
      ],
      benefitsTitle: 'Scientifically Documented Benefits',
      benefits: [
        { title: 'Rapid Cortisol Reduction', desc: 'Directly engages the parasympathetic nervous system via vagus nerve stimulation to lower stress hormone output.' },
        { title: 'Elevated Focus & Executive Function', desc: 'Stabilizes blood oxygen and carbon dioxide ratios, improving prefrontal cortex clarity under extreme pressure.' },
        { title: 'Heart Rate Variability (HRV) Boost', desc: 'Synchronizes respiratory sinus arrhythmia, strengthening cardiovascular resilience and emotional control.' },
        { title: 'Panic & Anxiety Interruption', desc: 'The deliberate four-count structure breaks cognitive spirals and physical tremor loops instantaneously.' },
      ],
      scienceTitle: 'The Physiology: Why Box Breathing Works',
      scienceDesc1: 'When stress strikes, your sympathetic nervous system triggers shallow breathing, vasoconstriction, and heart rate acceleration. The intentional pause on full lungs elevates arterial oxygen saturation, while the prolonged exhalation stimulates baroreceptors that signal the brainstem to slow cardiac pacing.',
      scienceDesc2: 'The empty-lung hold specifically trains carbon dioxide (CO2) tolerance, preventing hyperventilation and helping your red blood cells release oxygen more efficiently into your brain and muscle tissues (the Bohr effect).',
      whoUsesTitle: 'Who Relies on Box Breathing?',
      whoUsesDesc: 'Originally rooted in ancient pranayama, modern box breathing was adapted by tactical military units including U.S. Navy SEALs (popularized by Commander Mark Divine) to maintain mental clarity in combat scenarios. Today, emergency room surgeons, Olympic competitors, pilots, and Fortune 500 leaders use it as their primary instant reset tool.',
    },
    faqs: [
      {
        question: 'What is the box breathing method?',
        answer: 'Box breathing (also called square breathing or 4-4-4-4 breathing) is an equal-phase breath control method where you inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, and hold empty for 4 seconds. This geometric cadence regulates autonomic tone and halts stress spikes.',
      },
      {
        question: 'How many minutes should I practice box breathing?',
        answer: 'Practicing for 3 to 5 minutes (approx. 4 to 8 cycles) is usually sufficient to downregulate your nervous system and restore mental calm. For morning priming or deep bedtime relaxation, sessions can extend to 10 to 15 minutes.',
      },
      {
        question: 'Can beginners change the 4-second duration?',
        answer: 'Yes! If 4 seconds feels too demanding, start with 3-3-3-3 or 2-2-2-2 seconds. Our interactive timer lets you customize each phase duration from 2 to 10 seconds to match your lung capacity perfectly.',
      },
      {
        question: 'What is the difference between box breathing and 4-7-8 breathing?',
        answer: 'Box breathing focuses on symmetry (4-4-4-4) to cultivate alertness, calm focus, and tactical composure. 4-7-8 breathing has an extended hold (7s) and long exhalation (8s) designed primarily as a sedative technique for falling asleep.',
      },
    ],
  },

  es: {
    metaTitle: 'Temporizador de Respiración Cuadrada (Box Breathing) Gratis | HarmonyBreath',
    metaDescription: 'Aprende la respiración cuadrada (box breathing o técnica 4-4-4-4) con nuestro temporizador guiado gratis. Inhalar, retener, exhalar y retener en vacío para calmar la ansiedad y mejorar el foco.',
    keywords: 'respiracion cuadrada, respiracion en caja, box breathing español, tecnica de respiracion cuadrada, respiracion 4x4, respiracion 4-4-4-4, ejercicios de respiracion para ansiedad, temporizador de respiracion',
    canonicalPath: '/es/box-breathing/',
    badge: 'CALMA TÁCTICA Y ENFOQUE BAJO PRESIÓN',
    heroTitle: 'Respiración Cuadrada\nBox Breathing 4-4-4-4',
    heroSubtitle: 'El protocolo táctico de respiración en caja utilizado por fuerzas de élite (Navy SEALs), atletas y médicos para reiniciar el sistema nervioso, reducir el cortisol y recuperar el foco en 4 minutos.',
    breadcrumbName: 'Respiración Cuadrada',
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
      inhale: 'Inhala',
      hold: 'Mantén',
      exhale: 'Exhala',
      holdEmpty: 'Mantén Vacío',
    },
    instructions: {
      inhale: 'Inhala lenta y profundamente por la nariz, expandiendo el abdomen y el pecho.',
      hold: 'Retén el aire suavemente en los pulmones sin tensar el cuello ni la mandíbula.',
      exhale: 'Suelta el aire de forma continua y suave por la boca o nariz hasta vaciarte.',
      holdEmpty: 'Permanece en quietud con los pulmones vacíos antes del siguiente ciclo.',
    },
    guide: {
      whatIsTitle: '¿Qué es la Respiración Cuadrada (Box Breathing o Respiración en Caja)?',
      whatIsDesc1: 'La respiración cuadrada—conocida en inglés como box breathing o square breathing, y originaria de la tradición yogui como Sama Vritti Pranayama—es una técnica de respiración consciente estructurada en cuatro tiempos iguales: inhalar, retener lleno, exhalar y retener vacío.',
      whatIsDesc2: 'Al mantener los 4 lados del "cuadrado" con la misma duración (habitualmente 4 segundos), se interrumpe la respuesta de alerta o pánico del sistema nervioso simpático, disminuyendo las pulsaciones y devolviendo la calma en pocos minutos.',
      howToTitle: 'Cómo hacer la técnica de respiración cuadrada paso a paso',
      howToSteps: [
        { step: '1', title: 'Inhala en 4 segundos', desc: 'Inhala despacio por la nariz hacia el abdomen, sintiendo cómo se expande el diafragma.' },
        { step: '2', title: 'Retén el aire 4 segundos', desc: 'Mantén los pulmones llenos con calma, manteniendo hombros y rostro relajados.' },
        { step: '3', title: 'Exhala en 4 segundos', desc: 'Expulsa el aire con suavidad por la boca, liberando toda la tensión acumulada.' },
        { step: '4', title: 'Pausa en vacío 4 segundos', desc: 'Quédate sin aire de forma tranquila durante 4 segundos antes de volver a inhalar.' },
      ],
      benefitsTitle: 'Beneficios comprobados de la respiración 4x4',
      benefits: [
        { title: 'Reducción inmediata de la ansiedad', desc: 'Estimula el nervio vago y activa el sistema parasimpático para rebajar los niveles de cortisol.' },
        { title: 'Máxima concentración y claridad mental', desc: 'Equilibra el intercambio de oxígeno y dióxido de carbono en la corteza prefrontal del cerebro.' },
        { title: 'Aumento de la variabilidad cardíaca (VFC)', desc: 'Mejora la resiliencia cardiovascular y el autocontrol frente a situaciones de alto estrés.' },
        { title: 'Fácil de practicar en cualquier lugar', desc: 'No requiere equipo; nuestro temporizador interactivo te guía paso a paso sin necesidad de contar mentalmente.' },
      ],
      scienceTitle: 'La base científica: ¿Por qué funciona la respiración en caja?',
      scienceDesc1: 'Durante un episodio de estrés o pánico, la respiración se vuelve superficial y rápida. La retención pulmonar eleva la oxigenación arterial, mientras que la exhalación controlada estimula los barorreceptores que ordenan al corazón reducir su frecuencia.',
      scienceDesc2: 'La retención en vacío entrena la tolerancia al CO2 celular, optimizando la liberación de oxígeno a los tejidos según el efecto Bohr y evitando la hiperventilación.',
      whoUsesTitle: '¿Quién utiliza la respiración cuadrada?',
      whoUsesDesc: 'Popularizada internacionalmente por los Navy SEALs de EE. UU. para mantener la calma bajo fuego enemigo, hoy en día es utilizada por cirujanos, deportistas profesionales, conferenciantes y ejecutivos antes de situaciones de alta tensión.',
    },
    faqs: [
      {
        question: '¿Qué es la respiración cuadrada o box breathing?',
        answer: 'Es un método de control de la respiración en 4 fases de igual duración: 4 segundos de inhalación, 4 segundos de retención con pulmones llenos, 4 segundos de exhalación y 4 segundos de retención sin aire. Su ritmo equilibrado neutraliza la ansiedad y restablece el control mental.',
      },
      {
        question: '¿Cuánto tiempo se debe practicar?',
        answer: 'De 3 a 5 minutos (entre 4 y 8 ciclos completos) es suficiente para experimentar una reducción notable del estrés. Puedes extenderlo a 10 o 15 minutos para meditar o relajarte antes de dormir.',
      },
      {
        question: '¿Puedo ajustar los segundos si soy principiante?',
        answer: '¡Por supuesto! Si 4 segundos te resulta largo, puedes comenzar con 2 o 3 segundos por fase. Nuestro temporizador permite personalizar los segundos de 2 a 10 s para adaptarse a ti.',
      },
      {
        question: '¿Cuál es la diferencia entre respiración cuadrada y 4-7-8?',
        answer: 'La respiración cuadrada (4-4-4-4) busca equilibrio, claridad y calma activa durante el día. La técnica 4-7-8 alarga la exhalación a 8 segundos para inducir el sueño de forma sedante.',
      },
    ],
  },

  de: {
    metaTitle: 'Kostenloser Box-Atmung Timer & Anleitung | HarmonyBreath',
    metaDescription: 'Meistere die Box-Atmung (Quadratische Atmung 4-4-4-4) mit unserem kostenlosen Online-Timer. Gleichmäßiges Einatmen, Halten, Ausatmen und Leere für sofortige Entspannung und Fokus.',
    keywords: 'box atmung, box breathing deutsch, quadratische atmung, vier quadrat atmung, box atmung anleitung, kastenatmung, atemuebungen gegen stress, beruhigende atmung timer',
    canonicalPath: '/de/box-breathing/',
    badge: 'TAKTISCHE RUHE & FOKUS-ENGINE UNTER DRUCK',
    heroTitle: 'Box-Atmung\nQuadratische Atmung 4-4-4-4',
    heroSubtitle: 'Das taktische Atemprotokoll von US Navy SEALs, Spitzenathleten und Medizinern, um das Nervensystem in 4 Minuten zu regulieren, Cortisol zu senken und messerscharfen Fokus zurückzugewinnen.',
    breadcrumbName: 'Box-Atmung',
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
      inhale: 'Einatmen',
      hold: 'Halten',
      exhale: 'Ausatmen',
      holdEmpty: 'Leer anhalten',
    },
    instructions: {
      inhale: 'Atme langsam und tief durch die Nase ein, sodass sich Bauch und Brustkorb weiten.',
      hold: 'Halte den Atem sanft in den Lungen an, ohne Nacken oder Kiefer anzuspannen.',
      exhale: 'Atme gleichmäßig und ruhig durch den Mund oder die Nase wieder aus.',
      holdEmpty: 'Verweile in vollkommener Ruhe mit leeren Lungen bis zum nächsten Zyklus.',
    },
    guide: {
      whatIsTitle: 'Was ist die Box-Atmung (Quadratische Atmung / Kastenatmung)?',
      whatIsDesc1: 'Die Box-Atmung – im Englischen als Box Breathing bekannt und im Yoga als Sama Vritti Pranayama verwurzelt – ist eine strukturierte Atemtechnik aus vier gleich langen Phasen: Einatmen, Lungen voll anhalten, Ausatmen und Lungen leer anhalten.',
      whatIsDesc2: 'Indem jede Kante des „Quadrats“ exakt gleich lang ist (klassisch 4 Sekunden), wird das vegetative Nervensystem sofort beruhigt und die Kampf-oder-Flucht-Reaktion effektiv unterbrochen.',
      howToTitle: 'So funktioniert die 4-4-4-4 Methode Schritt für Schritt',
      howToSteps: [
        { step: '1', title: '4 Sekunden lang einatmen', desc: 'Atme langsam durch die Nase tief in den Bauchraum ein, bis die Lungen gefüllt sind.' },
        { step: '2', title: '4 Sekunden Atem anhalten', desc: 'Halte die Luft entspannt an. Halte Schultern, Nacken und Gesichtsmuskeln locker.' },
        { step: '3', title: '4 Sekunden lang ausatmen', desc: 'Lass den Atem ruhig und stetig durch den Mund entweichen, um Anspannung loszulassen.' },
        { step: '4', title: '4 Sekunden leer halten', desc: 'Pausiere entspannt mit leeren Lungen für vier Schläge vor dem nächsten Einatmen.' },
      ],
      benefitsTitle: 'Wissenschaftlich nachgewiesene Vorteile der Box-Atmung',
      benefits: [
        { title: 'Sofortige Cortisol- & Stresssenkung', desc: 'Stimuliert gezielt den Vagusnerv und aktiviert den beruhigenden Parasympathikus.' },
        { title: 'Gesteigerte Konzentration & mentale Klarheit', desc: 'Gleicht den Sauerstoff-Kohlendioxid-Haushalt im präfrontalen Kortex aus.' },
        { title: 'Höhere Herzratenvariabilität (HRV)', desc: 'Stärkt die kardiovaskuläre Widerstandskraft und emotionale Selbstbeherrschung.' },
        { title: 'Unterbricht Panikschleifen sofort', desc: 'Der feste Zählrhythmus stoppt kreisende Gedanken und körperliche Unruhe.' },
      ],
      scienceTitle: 'Die Physiologie: Warum die Kastenatmung so wirksam ist',
      scienceDesc1: 'Bei Stress wird die Atmung flach und schnell, was das Herz rasen lässt. Das kontrollierte Anhalten der vollen Lungen verbessert den Gasaustausch, während das langsame Ausatmen Barorezeptoren aktiviert, die das Herz verlangsamen.',
      scienceDesc2: 'Die Pause bei leeren Lungen trainiert die CO2-Toleranz im Gewebe, verbessert die Sauerstoffabgabe nach dem Bohr-Effekt und schützt vor Hyperventilation.',
      whoUsesTitle: 'Wer nutzt die Box-Atmung?',
      whoUsesDesc: 'Weltweit bekannt gemacht durch Elitesoldaten wie die Navy SEALs, wird sie heute von Notärzten, Profisportlern, Piloten und Führungskräften vor entscheidenden Herausforderungen genutzt.',
    },
    faqs: [
      {
        question: 'Was ist die Box-Atmung (Vier-Quadrat-Atmung)?',
        answer: 'Die Box-Atmung ist eine Methode mit 4 gleich langen Abschnitten: 4 Sek. einatmen, 4 Sek. halten, 4 Sek. ausatmen, 4 Sek. leer anhalten. Sie beruhigt das Nervensystem innerhalb weniger Atemzüge.',
      },
      {
        question: 'Wie lange sollte man die Box-Atmung durchführen?',
        answer: 'Bereits 3 bis 5 Minuten (ca. 4 bis 8 Wiederholungen) genügen, um den Puls zu senken und innere Gelassenheit zu spüren. Zur Meditation sind 10 bis 15 Minuten ideal.',
      },
      {
        question: 'Kann ich als Anfänger die Sekunden anpassen?',
        answer: 'Ja, natürlich! Wem 4 Sekunden zu lang sind, kann mit 2 oder 3 Sekunden beginnen. Unser Timer lässt sich von 2 bis 10 Sekunden flexibel einstellen.',
      },
      {
        question: 'Was unterscheidet Box-Atmung von 4-7-8?',
        answer: 'Die Box-Atmung (4-4-4-4) fördert klaren, aktiven Fokus bei gleichzeitiger Gelassenheit. 4-7-8 ist mit 8 Sekunden Ausatmung primär als beruhigende Einschlafhilfe konzipiert.',
      },
    ],
  },

  fr: {
    metaTitle: 'Minuteur de Respiration Carrée (Box Breathing) Gratuit | HarmonyBreath',
    metaDescription: 'Maîtrisez la respiration carrée (box breathing 4-4-4-4) avec notre minuteur guidé en ligne. Inspirez, retenez, expirez et retenez poumons vides pour réduire le stress et retrouver la sérénité.',
    keywords: 'respiration carree, technique respiration carree, box breathing francais, respiration en boite, respiration 4x4, exercice respiration stress, coherence cardiaque, minuteur respiration',
    canonicalPath: '/fr/box-breathing/',
    badge: 'CALME TACTIQUE & CONCENTRATION SOUS PRESSION',
    heroTitle: 'Respiration Carrée\nBox Breathing 4-4-4-4',
    heroSubtitle: 'Le protocole respiratoire tactique utilisé par les forces spéciales (Navy SEALs), sportifs d’élite et thérapeutes pour réinitialiser le système nerveux et calmer le stress en 4 minutes.',
    breadcrumbName: 'Respiration Carrée',
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
      inhale: 'Inspirez',
      hold: 'Maintenez',
      exhale: 'Expirez',
      holdEmpty: 'Poumons vides',
    },
    instructions: {
      inhale: 'Inspirez lentement et profondément par le nez en gonflant le ventre et les côtes.',
      hold: 'Retenez l’air doucement dans les poumons sans contracter la mâchoire ni la gorge.',
      exhale: 'Expirez avec fluidité et régularité par la bouche ou le nez jusqu’à vidage complet.',
      holdEmpty: 'Restez calme et immobile les poumons vides avant de reprendre le cycle.',
    },
    guide: {
      whatIsTitle: 'Qu’est-ce que la respiration carrée (Box Breathing) ?',
      whatIsDesc1: 'La respiration carrée (ou respiration en boîte, issue de la pratique millénaire du Sama Vritti Pranayama) est une technique de maîtrise du souffle reposant sur 4 phases de durée rigoureusement égale : inspiration, rétention poumons pleins, expiration et rétention poumons vides.',
      whatIsDesc2: 'En accordant à chaque côté du « carré » la même durée (classiquement 4 secondes), vous stoppez l’emballement du système nerveux sympathique, réduisez la fréquence cardiaque et rétablissez l’équilibre mental en quelques minutes.',
      howToTitle: 'Comment pratiquer la méthode 4-4-4-4 étape par étape',
      howToSteps: [
        { step: '1', title: 'Inspirez pendant 4 secondes', desc: 'Inspirez lentement par les narines vers le bas de l’abdomen en sentant votre diaphragme s’abaisser.' },
        { step: '2', title: 'Retenez 4 secondes (poumons pleins)', desc: 'Gardez l’air sans forcer. Relâchez les épaules et décrispez les muscles du visage.' },
        { step: '3', title: 'Expirez pendant 4 secondes', desc: 'Videz vos poumons progressivement par la bouche en chassant toutes les tensions.' },
        { step: '4', title: 'Pause de 4 secondes (poumons vides)', desc: 'Marquez un arrêt paisible sans air pendant 4 secondes avant de réinspirer.' },
      ],
      benefitsTitle: 'Bienfaits validés par la science',
      benefits: [
        { title: 'Diminution rapide du cortisol', desc: 'Stimule directement le nerf vague et déclenche la réponse apaisante du système parasympathique.' },
        { title: 'Gain de concentration et clarté d’esprit', desc: 'Optimise l’équilibre entre oxygène et dioxyde de carbone dans le cortex préfrontal.' },
        { title: 'Amélioration de la variabilité de la fréquence cardiaque (VRC)', desc: 'Renforce la capacité d’adaptation cardiovasculaire et la maîtrise émotionnelle face aux imprévus.' },
        { title: 'Arrêt immédiat des montées d’angoisse', desc: 'La cadence à 4 temps empêche les ruminations mentales et détend les contractions musculaires.' },
      ],
      scienceTitle: 'Physiologie : Pourquoi la respiration carrée fonctionne-t-elle ?',
      scienceDesc1: 'Sous l’effet de l’anxiété, la respiration devient superficielle et rapide. La pause poumons pleins augmente l’oxygénation du sang, tandis que l’expiration allongée enclenche les barorécepteurs qui ordonnent au cœur de ralentir.',
      scienceDesc2: 'La pause poumons vides habitue l’organisme au CO2, favorise le relargage de l’oxygène dans les tissus via l’effet Bohr et prévient toute hyperventilation.',
      whoUsesTitle: 'Qui pratique la respiration carrée ?',
      whoUsesDesc: 'Popularisée par les commandos de marine américains (Navy SEALs) pour garder leur sang-froid dans des conditions extrêmes, elle est aujourd’hui adoptée par les urgentistes, les sportifs professionnels et les dirigeants.',
    },
    faqs: [
      {
        question: 'Qu’est-ce que la technique de la respiration carrée ?',
        answer: 'C’est un exercice de régulation respiratoire articulé en 4 étapes de même durée : 4s d’inspiration, 4s de rétention poumons pleins, 4s d’expiration et 4s d’arrêt poumons vides. Son rythme régulier dissipe le stress et recentre l’attention.',
      },
      {
        question: 'Combien de temps faut-il pratiquer par session ?',
        answer: 'Une séance de 3 à 5 minutes (environ 4 à 8 cycles complets) suffit pour ressentir un apaisement physique et mental net. Vous pouvez prolonger jusqu’à 10 ou 15 minutes le soir ou en méditation.',
      },
      {
        question: 'Peut-on modifier la durée de 4 secondes ?',
        answer: 'Tout à fait. Pour les débutants, débuter à 2 ou 3 secondes par phase est idéal. Notre minuteur interactif vous permet d’ajuster la cadence de 2 à 10 secondes.',
      },
      {
        question: 'Quelle différence entre la respiration carrée et le 4-7-8 ?',
        answer: 'La respiration carrée (4-4-4-4) équilibre le corps et préserve la vigilance en journée. La méthode 4-7-8 mise sur une longue expiration (8s) destinée en priorité à favoriser l’endormissement.',
      },
    ],
  },

  pt: {
    metaTitle: 'Temporizador de Respiração Quadrada (Box Breathing) Grátis | HarmonyBreath',
    metaDescription: 'Pratique a respiração quadrada (box breathing técnica 4-4-4-4) com nosso temporizador guiado grátis. Inspire, segure, expire e segure vazio para acalmar a ansiedade e manter o foco.',
    keywords: 'respiracao quadrada, respiracao em caixa, box breathing portugues, tecnica de respiracao quadrada, respiracao 4 4 4 4, exercicios de respiracao ansiedade, temporizador respiracao',
    canonicalPath: '/pt/box-breathing/',
    badge: 'CALMA TÁTICA & FOCO SOB PRESSÃO EXTREMA',
    heroTitle: 'Respiração Quadrada\nBox Breathing 4-4-4-4',
    heroSubtitle: 'O protocolo tático de respiração em caixa utilizado pelos Navy SEALs, atletas e profissionais de saúde para resetar o sistema nervoso, reduzir o cortisol e recuperar o foco em 4 minutos.',
    breadcrumbName: 'Respiração Quadrada',
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
      inhale: 'Inspire',
      hold: 'Segure',
      exhale: 'Expire',
      holdEmpty: 'Segure Vazio',
    },
    instructions: {
      inhale: 'Puxe o ar suave e profundamente pelo nariz, expandindo o abdômen e as costelas.',
      hold: 'Mantenha o ar nos pulmões sem apertar a garganta ou tensionar o pescoço.',
      exhale: 'Solte o ar de maneira suave e constante pela boca até esvaziar os pulmões.',
      holdEmpty: 'Permaneça em silêncio e calma com os pulmões vazios antes do próximo ciclo.',
    },
    guide: {
      whatIsTitle: 'O que é a Respiração Quadrada (Box Breathing ou Respiração em Caixa)?',
      whatIsDesc1: 'A respiração quadrada—conhecida em inglês como box breathing ou square breathing e ligada à prática milenar de Sama Vritti Pranayama—é um exercício de respiração focado em 4 tempos idênticos: inspirar, reter cheio, expirar e reter vazio.',
      whatIsDesc2: 'Ao igualar os 4 lados do "quadrado" no mesmo tempo (geralmente 4 segundos), você interrompe a resposta de estresse do organismo, acalma o batimento cardíaco e recupera o autocontrole em minutos.',
      howToTitle: 'Como fazer a técnica 4-4-4-4 passo a passo',
      howToSteps: [
        { step: '1', title: 'Inspire por 4 segundos', desc: 'Puxe o ar lentamente pelo nariz até encher a região do abdômen e diafragma.' },
        { step: '2', title: 'Segure o ar por 4 segundos', desc: 'Mantenha os pulmões cheios de forma descontraída, relaxando os ombros.' },
        { step: '3', title: 'Expire por 4 segundos', desc: 'Solte o ar devagar pela boca, libertando o corpo de qualquer tensão acumulada.' },
        { step: '4', title: 'Pause vazio por 4 segundos', desc: 'Fique sem ar com tranquilidade durante 4 contagens antes da próxima inspiração.' },
      ],
      benefitsTitle: 'Benefícios comprovados da respiração em caixa',
      benefits: [
        { title: 'Alívio instantâneo do estresse e ansiedade', desc: 'Estimula o nervo vago e aciona o sistema nervoso parassimpático, baixando o cortisol.' },
        { title: 'Melhora da concentração e tomada de decisão', desc: 'Equilibra os níveis de oxigênio e gás carbônico no cérebro, facilitando o raciocínio.' },
        { title: 'Aumento da variabilidade da frequência cardíaca (VFC)', desc: 'Promove resiliência cardiovascular e estabilidade emocional em situações difíceis.' },
        { title: 'Interrompe crises de pânico rapidamente', desc: 'O ritmo compassado impede a hiperventilação e devolve a sensação de segurança ao corpo.' },
      ],
      scienceTitle: 'A ciência por trás da respiração quadrada',
      scienceDesc1: 'Sob estresse agudo, a respiração tende a ficar curta e rápida. A retenção com pulmões cheios otimiza a oxigenação, enquanto a expiração prolongada estimula os barorreceptores que ordenam ao coração desacelerar.',
      scienceDesc2: 'A retenção com pulmões vazios treina a tolerância celular ao CO2, favorecendo a liberação de oxigênio para os tecidos pelo efeito Bohr.',
      whoUsesTitle: 'Quem utiliza a respiração quadrada?',
      whoUsesDesc: 'Adotada oficialmente pelas forças especiais norte-americanas (Navy SEALs), hoje é empregada por cirurgiões, atletas olímpicos, pilotos e executivos para manter a lucidez em momentos cruciais.',
    },
    faqs: [
      {
        question: 'O que é o método de respiração quadrada?',
        answer: 'É uma técnica de respiração em 4 etapas iguais: 4s de inspiração, 4s segurando cheio, 4s de expiração e 4s segurando vazio. A simetria regula o sistema nervoso e corta picos de ansiedade.',
      },
      {
        question: 'Quantos minutos devo praticar?',
        answer: 'Entre 3 e 5 minutos (cerca de 4 a 8 voltas completas) já proporcionam alívio perceptível. Sessões de 10 a 15 minutos são excelentes para meditar ou relaxar antes de dormir.',
      },
      {
        question: 'Iniciantes podem diminuir os 4 segundos?',
        answer: 'Sim! Se 4 segundos parecer desconfortável, comece com 2 ou 3 segundos por fase. Nosso temporizador permite regular de 2 a 10 segundos por lado.',
      },
      {
        question: 'Qual a diferença entre a respiração quadrada e a 4-7-8?',
        answer: 'A respiração quadrada (4-4-4-4) busca foco equilibrado e calma ativa durante o dia. Já a 4-7-8 enfatiza a expiração demorada (8s), sendo sedativa e perfeita para induzir o sono.',
      },
    ],
  },

  ja: {
    metaTitle: 'ボックス呼吸法 (Box Breathing) 無料タイマー＆解説 | HarmonyBreath',
    metaDescription: '米海軍特殊部隊（ネイビーシールズ）も採用するボックス呼吸（四角形呼吸法 4-4-4-4）を無料の音声・ビジュアルガイド付きタイマーで実践。吸う・止める・吐く・止めるのリズムで自律神経を整え、即効で集中と冷静さを取り戻します。',
    keywords: 'ボックス呼吸, ボックスブリージング, 四角形呼吸法, 4-4-4-4 呼吸法, 呼吸法 タイマー, 自律神経 呼吸法, ストレス解消 呼吸, ネイビーシールズ 呼吸法',
    canonicalPath: '/ja/box-breathing/',
    badge: '戦術的冷静さと極限の集中力を引き出す呼吸エンジン',
    heroTitle: 'ボックス呼吸法\n四角形呼吸法 4-4-4-4',
    heroSubtitle: '米海軍ネイビーシールズやトップアスリート、医師が実践する戦術的呼吸法。わずか4分間で自律神経を整え、コルチゾール（ストレスホルモン）を抑制して極限の集中力を取り戻します。',
    breadcrumbName: 'ボックス呼吸法',
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
      inhale: '吸う',
      hold: '止める',
      exhale: '吐く',
      holdEmpty: '止める',
    },
    instructions: {
      inhale: '鼻からゆっくり深く息を吸い込み、お腹と胸を広げます。',
      hold: '喉やあごに力を入れず、穏やかに息を肺に満たしたまま保ちます。',
      exhale: '口または鼻から、一定の速度で均等に息をすべて吐き切ります。',
      holdEmpty: '息を完全に吐き切った空っぽの状態で、静かに止めて待ちます。',
    },
    guide: {
      whatIsTitle: 'ボックス呼吸法（四角形呼吸法・4-4-4-4）とは？',
      whatIsDesc1: 'ボックス呼吸法（Box Breathing）は、ヨガの伝統的な呼吸法「サマ・ヴリッティ・プラーナヤーマ」に起源を持ち、「吸う・止める・吐く・止める」の4つの動作を同じ秒数（標準は4秒ずつ）繰り返す呼吸コントロール法です。',
      whatIsDesc2: '四角形の4辺をなぞるように対称的なリズムを刻むことで、過剰に興奮した交感神経（闘争・逃走反応）を鎮め、瞬時に副交感神経を優位にして心拍数を安定させます。',
      howToTitle: 'ボックス呼吸法の正しいやり方（ステップ別）',
      howToSteps: [
        { step: '1', title: '4秒かけて吸う', desc: '鼻から静かに息を吸い込み、横隔膜を下げて下腹部を膨らませます。' },
        { step: '2', title: '4秒間息を止める', desc: '息をいっぱいに満たした状態で4秒キープ。肩の力を抜いてリラックスします。' },
        { step: '3', title: '4秒かけて吐く', desc: '口から細く長く息を吐き出し、身体の緊張をすべて解き放ちます。' },
        { step: '4', title: '4秒間息を止めて待つ', desc: '肺が空になった状態で4秒静止し、次の吸気への準備を整えます。' },
      ],
      benefitsTitle: '科学的に実証されている効果',
      benefits: [
        { title: '即効性のあるストレス軽減・コルチゾール抑制', desc: '迷走神経を刺激して副交感神経を活性化し、パニックや強い不安感を素早く鎮めます。' },
        { title: '高い集中力と認知機能の向上', desc: '血中の酸素と二酸化炭素のバランスを最適化し、前頭前野の判断力をクリアにします。' },
        { title: '心拍変動（HRV）の向上', desc: '呼吸と心拍のリズムを同調させ、プレッシャーに強い心血管系の回復力を養います。' },
        { title: 'どこでも手軽に実践可能', desc: '道具は不要。当サイトの無料タイマーを使えば頭で秒数を数えずに自然とリズムに乗ることができます。' },
      ],
      scienceTitle: '生理学的メカニズム：なぜ四角形呼吸法が効くのか？',
      scienceDesc1: 'プレッシャーにさらされると呼吸は浅く速くなり、脳は危険信号を受け取ります。満たした息を止めることで血中酸素濃度を高め、続く長い呼気が圧受容器を刺激して心拍数を落とします。',
      scienceDesc2: '空の状態で止めるステップは体内のCO2耐性を高め、ボーア効果によって赤血球から脳や筋肉組織へ効率的に酸素を運搬できるように促します。',
      whoUsesTitle: '誰がボックス呼吸法を使っているのか？',
      whoUsesDesc: '極限状態での判断力が求められる米海軍特殊部隊（Navy SEALs）のメンタルトレーニングとして広く認知され、現在では救急外科医、オリンピック選手、航空機パイロット、ビジネスリーダーが勝負の前や不安の克服に愛用しています。',
    },
    faqs: [
      {
        question: 'ボックス呼吸法の基本的なやり方は？',
        answer: '4秒吸う、4秒止める、4秒吐く、4秒止めるの合計16秒を1サイクルとして数分間繰り返します。正方形（ボックス）のように均等な時間を意識するのがポイントです。',
      },
      {
        question: '1回あたり何分くらい行うのが効果的ですか？',
        answer: '3分〜5分間（約4〜8サイクル）実践するだけで、心拍が落ち着き頭がすっきりするのを感じられます。朝の集中力アップや夜の睡眠前なら10分程度行うのもおすすめです。',
      },
      {
        question: '息苦しい場合は秒数を変えても大丈夫ですか？',
        answer: 'はい、全く問題ありません。初心者は無理せず「2秒」や「3秒」ずつから始めてみてください。当ツールのカスタム設定で2秒〜10秒まで自由に設定できます。',
      },
      {
        question: '4-7-8呼吸法との違いは何ですか？',
        answer: 'ボックス呼吸（4-4-4-4）は昼間でも眠くならず「冷静な集中力」を養うのに適しています。一方、4-7-8呼吸法は息を長く吐くため鎮静効果が高く、入眠サポートに最適です。',
      },
    ],
  },

  it: {
    metaTitle: 'Timer e Guida alla Respirazione Quadrata (Box Breathing) Gratis | HarmonyBreath',
    metaDescription: 'Impara la respirazione quadrata (box breathing 4-4-4-4) con il nostro timer online guidato. Inspira, trattieni, espira e trattieni a vuoto per ridurre ansia e stress e ripristinare la lucidità.',
    keywords: 'respirazione quadrata, respirazione box, respirazione a scatola, respirazione 4x4, respirazione 4-4-4-4, esercizi di respirazione contro ansia, timer respirazione guidata',
    canonicalPath: '/it/box-breathing/',
    badge: 'CALMA TATTICA E CONCENTRAZIONE SOTTO PRESSIONE',
    heroTitle: 'Respirazione Quadrata\nBox Breathing 4-4-4-4',
    heroSubtitle: 'Il protocollo tattico utilizzato dai Navy SEALs, atleti professionisti e medici per azzerare lo stress, abbassare il cortisolo e ritrovare il pieno controllo mentale in 4 minuti.',
    breadcrumbName: 'Respirazione Quadrata',
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
      inhale: 'Inspira',
      hold: 'Trattieni',
      exhale: 'Espira',
      holdEmpty: 'Trattieni a vuoto',
    },
    instructions: {
      inhale: 'Inspira lentamente e profondamente dal naso, espandendo l’addome e il torace.',
      hold: 'Trattieni delicatamente l’aria nei polmoni senza contrarre la gola o le spalle.',
      exhale: 'Espira in modo uniforme e continuo attraverso la bocca svuotando i polmoni.',
      holdEmpty: 'Rimani immobile e tranquillo a polmoni vuoti prima del ciclo successivo.',
    },
    guide: {
      whatIsTitle: 'Cos’è la Respirazione Quadrata (Box Breathing o Respirazione a Scatola)?',
      whatIsDesc1: 'La respirazione quadrata—nota in inglese come box breathing o square breathing e riconducibile alla millenaria pratica yogica del Sama Vritti Pranayama—è una tecnica di controllo del respiro strutturata su 4 tempi identici: inspirazione, apnea a polmoni pieni, espirazione e apnea a polmoni vuoti.',
      whatIsDesc2: 'Mantenendo ciascun lato del "quadrato" della medesima durata (convenzionalmente 4 secondi), si blocca la reazione di allarme del sistema nervoso simpatico, abbassando la frequenza cardiaca in pochissimi minuti.',
      howToTitle: 'Come praticare la tecnica 4-4-4-4 passo dopo passo',
      howToSteps: [
        { step: '1', title: 'Inspira per 4 secondi', desc: 'Inspira dal naso portando l’aria verso il basso ventre e sentendo il diaframma espandersi.' },
        { step: '2', title: 'Trattieni il respiro per 4 secondi', desc: 'Mantieni i polmoni pieni con serenità, rilassando le spalle e i muscoli facciali.' },
        { step: '3', title: 'Espira per 4 secondi', desc: 'Rilascia l’aria con costanza dalla bocca, liberando ogni tensione accumulata.' },
        { step: '4', title: 'Trattieni a vuoto per 4 secondi', desc: 'Resta in pausa a polmoni vuoti per quattro secondi prima di ricominciare.' },
      ],
      benefitsTitle: 'Benefici scientificamente dimostrati',
      benefits: [
        { title: 'Diminuzione immediata del cortisolo', desc: 'Attiva il nervo vago e stimola il sistema parasimpatico per spegnere l’ansia.' },
        { title: 'Focalizzazione e lucidità cognitiva', desc: 'Riequilibra il rapporto tra ossigeno e anidride carbonica nella corteccia prefrontale.' },
        { title: 'Maggiore variabilità della frequenza cardiaca (HRV)', desc: 'Migliora la resilienza del sistema cardiovascolare e il controllo emotivo.' },
        { title: 'Stop istantaneo a panico e tremori', desc: 'Il conteggio a quattro tempi interrompe i pensieri ricorrenti e la respirazione iperventilata.' },
      ],
      scienceTitle: 'Fisiologia: Perché la respirazione quadrata funziona?',
      scienceDesc1: 'Sotto stress, il respiro diviene corto e affrettato. L’apnea a pieni polmoni incrementa la saturazione arteriosa, mentre la lenta espirazione stimola i barocettori che inducono il cuore a rallentare.',
      scienceDesc2: 'L’apnea a polmoni vuoti allena la tolleranza al CO2, favorendo il rilascio di ossigeno nei tessuti secondo l’effetto Bohr.',
      whoUsesTitle: 'Chi utilizza la respirazione quadrata?',
      whoUsesDesc: 'Resa celebre dai Navy SEALs americani per preservare la calma in situazioni estreme, è oggi regolarmente utilizzata da chirurghi, piloti, atleti professionisti e manager prima di decisioni decisive.',
    },
    faqs: [
      {
        question: 'In cosa consiste la respirazione quadrata?',
        answer: 'È un esercizio suddiviso in 4 fasi di uguale durata: 4s di inspirazione, 4s di apnea a pieni polmoni, 4s di espirazione e 4s di apnea a polmoni vuoti. La perfetta simmetria rasserena mente e corpo.',
      },
      {
        question: 'Per quanto tempo va praticata?',
        answer: 'Praticare per 3-5 minuti (tra i 4 e gli 8 cicli) è sufficiente per avvertire un evidente abbassamento dello stress. Si può estendere a 10-15 minuti per rilassarsi prima di dormire.',
      },
      {
        question: 'I principianti possono usare tempi inferiori a 4 secondi?',
        answer: 'Certamente. Se 4 secondi risultano faticosi, inizia con 2 o 3 secondi per lato. Il nostro timer interattivo permette di impostare qualsiasi valore da 2 a 10 secondi.',
      },
      {
        question: 'Che differenza c’è tra la respirazione quadrata e la 4-7-8?',
        answer: 'La respirazione quadrata (4-4-4-4) favorisce calma e concentrazione attiva durante il giorno, mentre la tecnica 4-7-8 ha un’espirazione molto lunga (8s) ed è ideata principalmente come rimedio per addormentarsi.',
      },
    ],
  },
};
