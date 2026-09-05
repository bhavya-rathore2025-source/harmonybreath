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
    metaTitle: 'Box Breathing (Square Breathing) — Guided Calm & Focus Timer',
    metaDescription: 'Practice box breathing (4-4-4-4 technique) with our free guided timer. Equal inhale, hold, exhale, and pause phases for instant calm and focus.',
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
    metaTitle: 'Respiración Cuadrada (Box Breathing): Temporizador Guiado',
    metaDescription: 'Practica la respiración cuadrada (box breathing 4-4-4-4) con nuestro temporizador guiado gratis. Calma la ansiedad y mejora tu enfoque en 4 minutos.',
    keywords: 'respiracion cuadrada, box breathing, box breathing español, respiracion en caja, temporizador de box breathing, respiracion navy seals, sama vritti pranayama, samavritti pranayama, sama vritti, como hacer la respiracion cuadrada, tecnica 4-4-4-4, respiracion 4x4, ejercicios de respiracion para ansiedad, respiracion guiada online, temporizador de respiracion, respiracion en cuatro tiempos, respiracion igualada',
    canonicalPath: '/es/box-breathing/',
    badge: 'CALMA TÁCTICA Y ENFOQUE BAJO PRESIÓN',
    heroTitle: 'Respiración Cuadrada\nBox Breathing 4-4-4-4',
    heroSubtitle: 'El protocolo táctico de respiración cuadrada y Sama Vritti utilizado por los Navy SEALs, atletas y médicos para reiniciar el sistema nervioso, reducir el cortisol y recuperar el foco en 4 minutos.',
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
      whatIsTitle: '¿Qué es la Respiración Cuadrada (Box Breathing, Sama Vritti o Técnica Navy SEALs)?',
      whatIsDesc1: 'La respiración cuadrada—conocida en inglés como box breathing o square breathing, y originaria de la tradición yogui como Sama Vritti Pranayama—es una técnica de respiración consciente estructurada en cuatro tiempos iguales: inhalar, retener lleno, exhalar y retener vacío.',
      whatIsDesc2: 'Al mantener los 4 lados del "cuadrado" con la misma duración (habitualmente 4 segundos), se interrumpe la respuesta de alerta o pánico del sistema nervioso simpático, disminuyendo las pulsaciones y devolviendo la calma en pocos minutos.',
      howToTitle: 'Cómo Hacer la Respiración Cuadrada 4-4-4-4 Paso a Paso',
      howToSteps: [
        { step: '1', title: 'Inhala en 4 segundos', desc: 'Inhala despacio por la nariz hacia el abdomen, sintiendo cómo se expande el diafragma.' },
        { step: '2', title: 'Retén el aire 4 segundos', desc: 'Mantén los pulmones llenos con calma, manteniendo hombros y rostro relajados.' },
        { step: '3', title: 'Exhala en 4 segundos', desc: 'Expulsa el aire con suavidad por la boca, liberando toda la tensión acumulada.' },
        { step: '4', title: 'Pausa en vacío 4 segundos', desc: 'Quédate sin aire de forma tranquila durante 4 segundos antes de volver a inhalar.' },
      ],
      benefitsTitle: 'Beneficios Científicos de la Respiración Cuadrada Contra el Estrés y la Ansiedad',
      benefits: [
        { title: 'Reducción inmediata de la ansiedad', desc: 'Estimula el nervio vago y activa el sistema parasimpático para rebajar los niveles de cortisol.' },
        { title: 'Máxima concentración y claridad mental', desc: 'Equilibra el intercambio de oxígeno y dióxido de carbono en la corteza prefrontal del cerebro.' },
        { title: 'Aumento de la variabilidad cardíaca (VFC)', desc: 'Mejora la resiliencia cardiovascular y el autocontrol frente a situaciones de alto estrés.' },
        { title: 'Fácil de practicar en cualquier lugar', desc: 'No requiere equipo; nuestro temporizador interactivo te guía paso a paso sin necesidad de contar mentalmente.' },
      ],
      scienceTitle: 'La Base Científica: ¿Por Qué la Respiración en Caja Regula el Sistema Nervioso?',
      scienceDesc1: 'Durante un episodio de estrés o pánico, la respiración se vuelve superficial y rápida. La retención pulmonar eleva la oxigenación arterial, mientras que la exhalación controlada estimula los barorreceptores que ordenan al corazón reducir su frecuencia.',
      scienceDesc2: 'La retención en vacío entrena la tolerancia al CO2 celular, optimizando la liberación de oxígeno a los tejidos según el efecto Bohr y evitando la hiperventilación.',
      whoUsesTitle: '¿Quién Utiliza la Respiración Táctica de los Navy SEALs?',
      whoUsesDesc: 'Popularizada internacionalmente por los Navy SEALs de EE. UU. para mantener la calma bajo fuego enemigo, hoy en día es utilizada por cirujanos, deportistas profesionales, conferenciantes y ejecutivos antes de situaciones de alta tensión.',
    },
    faqs: [
      {
        question: '¿Qué es la respiración cuadrada (box breathing o sama vritti pranayama)?',
        answer: 'La respiración cuadrada (originaria de la tradición yogui como Sama Vritti Pranayama y adoptada por los Navy SEALs como box breathing) es un método de respiración en 4 fases de igual duración: 4 segundos de inhalación, 4 segundos de retención con pulmones llenos, 4 segundos de exhalación y 4 segundos de retención sin aire. Su simetría neutraliza la ansiedad y restablece el control mental.',
      },
      {
        question: '¿Cómo hacer la respiración cuadrada 4-4-4-4 correctamente?',
        answer: 'Siéntate erguido o recuéstate con calma. Inhala por la nariz durante 4 segundos, retén el aire en los pulmones 4 segundos, exhala por la boca suavemente durante 4 segundos y permanece con los pulmones vacíos durante 4 segundos. Nuestro temporizador visual interactivo te guía en cada ciclo sin que tengas que contar mentalmente.',
      },
      {
        question: '¿Cuánto tiempo al día se debe practicar para calmar la ansiedad?',
        answer: 'De 3 a 5 minutos (entre 4 y 8 ciclos completos) es suficiente para experimentar una reducción notable del estrés y la frecuencia cardíaca. Puedes extenderlo a 10 o 15 minutos para meditar o relajarte antes de dormir.',
      },
      {
        question: '¿Puedo ajustar los segundos si soy principiante?',
        answer: '¡Por supuesto! Si 4 segundos te resulta largo, puedes comenzar con 2 o 3 segundos por fase. Nuestro temporizador permite personalizar los segundos de 2 a 10 s para adaptarse a tu capacidad pulmonar.',
      },
      {
        question: '¿Cuál es la diferencia entre respiración cuadrada y 4-7-8?',
        answer: 'La respiración cuadrada (4-4-4-4) busca equilibrio, claridad mental y calma activa durante el día. La técnica 4-7-8 alarga la exhalación a 8 segundos con un efecto fuertemente sedante, diseñada para conciliar el sueño.',
      },
    ],
  },


  de: {
    metaTitle: 'Box-Atmung (Kastenatmung) — Geführter Timer für Fokus',
    metaDescription: 'Lerne die Box-Atmung (4-4-4-4 Kastenatmung) mit unserem kostenlosen Online-Timer. Baue Stress ab und stärke deinen Fokus in nur 4 Minuten.',
    keywords: 'box atmung, kastenatmung, quadratatmung, quadratische atmung, box breathing deutsch, box breathing, box breathing timer, navy seals atmung, sama vritti pranayama, samavritti pranayama, sama vritti, box atmung anleitung, 4-4-4-4 atmung, 4x4 atmung, atemuebungen gegen panikattacken, gefuehrte atmung timer, atemquadrat online, gleichmaessige atmung',
    canonicalPath: '/de/box-breathing/',
    badge: 'TAKTISCHE RUHE & FOKUS-ENGINE UNTER DRUCK',
    heroTitle: 'Box-Atmung\nQuadratische Atmung 4-4-4-4',
    heroSubtitle: 'Das taktische Atemprotokoll (Kastenatmung & Sama Vritti) von US Navy SEALs, Spitzenathleten und Medizinern, um das Nervensystem in 4 Minuten zu regulieren, Cortisol zu senken und messerscharfen Fokus zurückzugewinnen.',
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
      whatIsTitle: 'Was ist die Box-Atmung (Kastenatmung, Quadratatmung & Sama Vritti)?',
      whatIsDesc1: 'Die Box-Atmung – im Englischen als Box Breathing bekannt und im Yoga als Sama Vritti Pranayama verwurzelt – ist eine strukturierte Atemtechnik aus vier gleich langen Phasen: Einatmen, Lungen voll anhalten, Ausatmen und Lungen leer anhalten.',
      whatIsDesc2: 'Indem jede Kante des „Quadrats“ exakt gleich lang ist (klassisch 4 Sekunden), wird das vegetative Nervensystem sofort beruhigt und die Kampf-oder-Flucht-Reaktion effektiv unterbrochen.',
      howToTitle: 'Kastenatmung Anleitung: Die 4-4-4-4 Methode Schritt für Schritt',
      howToSteps: [
        { step: '1', title: '4 Sekunden lang einatmen', desc: 'Atme langsam durch die Nase tief in den Bauchraum ein, bis die Lungen gefüllt sind.' },
        { step: '2', title: '4 Sekunden Atem anhalten', desc: 'Halte die Luft entspannt an. Halte Schultern, Nacken und Gesichtsmuskeln locker.' },
        { step: '3', title: '4 Sekunden lang ausatmen', desc: 'Lass den Atem ruhig und stetig durch den Mund entweichen, um Anspannung loszulassen.' },
        { step: '4', title: '4 Sekunden leer halten', desc: 'Pausiere entspannt mit leeren Lungen für vier Schläge vor dem nächsten Einatmen.' },
      ],
      benefitsTitle: 'Wissenschaftlich belegte Wirkung der Box-Atmung bei Stress und Panik',
      benefits: [
        { title: 'Sofortige Cortisol- & Stresssenkung', desc: 'Stimuliert gezielt den Vagusnerv und aktiviert den beruhigenden Parasympathikus.' },
        { title: 'Gesteigerte Konzentration & mentale Klarheit', desc: 'Gleicht den Sauerstoff-Kohlendioxid-Haushalt im präfrontalen Kortex aus.' },
        { title: 'Höhere Herzratenvariabilität (HRV)', desc: 'Stärkt die kardiovaskuläre Widerstandskraft und emotionale Selbstbeherrschung.' },
        { title: 'Unterbricht Panikschleifen sofort', desc: 'Der feste Zählrhythmus stoppt kreisende Gedanken und körperliche Unruhe.' },
      ],
      scienceTitle: 'Die Physiologie: Warum das Atemquadrat das vegetative Nervensystem beruhigt',
      scienceDesc1: 'Bei Stress wird die Atmung flach und schnell, was das Herz rasen lässt. Das kontrollierte Anhalten der vollen Lungen verbessert den Gasaustausch, während das langsame Ausatmen Barorezeptoren aktiviert, die das Herz verlangsamen.',
      scienceDesc2: 'Die Pause bei leeren Lungen trainiert die CO2-Toleranz im Gewebe, verbessert die Sauerstoffabgabe nach dem Bohr-Effekt und schützt vor Hyperventilation.',
      whoUsesTitle: 'Wer nutzt die Navy SEALs Atmung zur mentalen Fokussierung?',
      whoUsesDesc: 'Weltweit bekannt gemacht durch Elitesoldaten wie die Navy SEALs, wird sie heute von Notärzten, Profisportlern, Piloten und Führungskräften vor entscheidenden Herausforderungen genutzt.',
    },
    faqs: [
      {
        question: 'Was ist die Box-Atmung (Kastenatmung, Quadratatmung & Sama Vritti)?',
        answer: 'Die Box-Atmung (im Yoga als Sama Vritti Pranayama verwurzelt und durch die US Navy SEALs als Box Breathing weltweit bekannt) ist eine Methode mit 4 gleich langen Abschnitten: 4 Sek. einatmen, 4 Sek. halten, 4 Sek. ausatmen, 4 Sek. leer anhalten. Sie beruhigt das vegetative Nervensystem innerhalb weniger Atemzüge.',
      },
      {
        question: 'Wie funktioniert die Box-Atmung Schritt für Schritt (4-4-4-4)?',
        answer: 'Setze dich aufrecht hin oder lege dich entspannt ab. Atme 4 Sekunden durch die Nase ein, halte den Atem für 4 Sekunden mit vollen Lungen an, atme 4 Sekunden ruhig durch den Mund aus und pausiere 4 Sekunden mit leeren Lungen. Unser visueller Online-Timer führt dich präzise durch jeden Zyklus.',
      },
      {
        question: 'Hilft die Kastenatmung bei akuten Panikattacken und Prüfungsangst?',
        answer: 'Ja. Durch den symmetrischen 4-Takt-Rhythmus wird der beruhigende Parasympathikus über den Vagusnerv sofort aktiviert, der Puls verlangsamt und das Gedankenkarussell gestoppt.',
      },
      {
        question: 'Wie lange sollte man die Box-Atmung durchführen?',
        answer: 'Bereits 3 bis 5 Minuten (ca. 4 bis 8 Wiederholungen) genügen, um den Puls zu senken und innere Gelassenheit zu spüren. Zur Meditation oder vor dem Einschlafen sind 10 bis 15 Minuten ideal.',
      },
      {
        question: 'Kann ich als Anfänger die Sekunden anpassen?',
        answer: 'Ja, natürlich! Wem 4 Sekunden zu lang sind, kann mit 2 oder 3 Sekunden beginnen. Unser Timer lässt sich von 2 bis 10 Sekunden flexibel einstellen.',
      },
    ],
  },

  fr: {
    metaTitle: 'Respiration Carrée (Box Breathing): Minuteur Guidé Calme',
    metaDescription: 'Pratiquez la respiration carrée (box breathing 4-4-4-4) avec notre minuteur guidé gratuit. Apaisez le stress et retrouvez le calme en 4 minutes.',
    keywords: 'respiration carree, box breathing, box breathing francais, respiration navy seals, comment faire la respiration carree, respiration en boite, sama vritti pranayama, samavritti pranayama, sama vritti, technique respiration 4 4 4 4, respiration 4x4, respiration carree angoisse, chronometre respiration carree, minuteur respiration, respiration militaire anti stress, respiration en quatre temps, respiration egale',
    canonicalPath: '/fr/box-breathing/',
    badge: 'CALME TACTIQUE & CONCENTRATION SOUS PRESSION',
    heroTitle: 'Respiration Carrée\nBox Breathing 4-4-4-4',
    heroSubtitle: 'Le protocole respiratoire tactique (Sama Vritti Pranayama) utilisé par les forces spéciales (Navy SEALs), sportifs d’élite et thérapeutes pour réinitialiser le système nerveux et calmer le stress en 4 minutes.',
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
      whatIsTitle: 'Qu’est-ce que la Respiration Carrée (Box Breathing, Sama Vritti ou Méthode Navy SEALs) ?',
      whatIsDesc1: 'La respiration carrée (ou respiration en boîte, issue de la pratique millénaire du Sama Vritti Pranayama) est une technique de maîtrise du souffle reposant sur 4 phases de durée rigoureusement égale : inspiration, rétention poumons pleins, expiration et rétention poumons vides.',
      whatIsDesc2: 'En accordant à chaque côté du « carré » la même durée (classiquement 4 secondes), vous stoppez l’emballement du système nerveux sympathique, réduisez la fréquence cardiaque et rétablissez l’équilibre mental en quelques minutes.',
      howToTitle: 'Comment Faire la Respiration Carrée 4-4-4-4 Étape par Étape',
      howToSteps: [
        { step: '1', title: 'Inspirez pendant 4 secondes', desc: 'Inspirez lentement par les narines vers le bas de l’abdomen en sentant votre diaphragme s’abaisser.' },
        { step: '2', title: 'Retenez 4 secondes (poumons pleins)', desc: 'Gardez l’air sans forcer. Relâchez les épaules et décrispez les muscles du visage.' },
        { step: '3', title: 'Expirez pendant 4 secondes', desc: 'Videz vos poumons progressivement par la bouche en chassant toutes les tensions.' },
        { step: '4', title: 'Pause de 4 secondes (poumons vides)', desc: 'Marquez un arrêt paisible sans air pendant 4 secondes avant de réinspirer.' },
      ],
      benefitsTitle: 'Bienfaits Validés par la Science : Stress, Angoisse et Clarté Mentale',
      benefits: [
        { title: 'Diminution rapide du cortisol', desc: 'Stimule directement le nerf vague et déclenche la réponse apaisante du système parasympathique.' },
        { title: 'Gain de concentration et clarté d’esprit', desc: 'Optimise l’équilibre entre oxygène et dioxyde de carbone dans le cortex préfrontal.' },
        { title: 'Amélioration de la variabilité de la fréquence cardiaque (VRC)', desc: 'Renforce la capacité d’adaptation cardiovasculaire et la maîtrise émotionnelle face aux imprévus.' },
        { title: 'Arrêt immédiat des montées d’angoisse', desc: 'La cadence à 4 temps empêche les ruminations mentales et détend les contractions musculaires.' },
      ],
      scienceTitle: 'Physiologie : Pourquoi le Cycle en Carré Régule le Système Nerveux',
      scienceDesc1: 'Sous l’effet de l’anxiété, la respiration devient superficielle et rapide. La pause poumons pleins augmente l’oxygénation du sang, tandis que l’expiration allongée enclenche les barorécepteurs qui ordonnent au cœur de ralentir.',
      scienceDesc2: 'La pause poumons vides habitue l’organisme au CO2, favorise le relargage de l’oxygène dans les tissus via l’effet Bohr et prévient toute hyperventilation.',
      whoUsesTitle: 'Qui Utilise la Respiration Carrée des Forces Spéciales ?',
      whoUsesDesc: 'Popularisée par les commandos de marine américains (Navy SEALs) pour garder leur sang-froid dans des conditions extrêmes, elle est aujourd’hui adoptée par les urgentistes, les sportifs professionnels et les dirigeants.',
    },
    faqs: [
      {
        question: 'Qu’est-ce que la respiration carrée (box breathing ou sama vritti pranayama) ?',
        answer: 'Issue du Sama Vritti Pranayama et popularisée par les Navy SEALs sous le nom de box breathing, la respiration carrée est un exercice de maîtrise du souffle articulé en 4 temps égaux : 4s d’inspiration, 4s de rétention poumons pleins, 4s d’expiration et 4s de pause poumons vides. Sa régularité dissipe instantanément le stress.',
      },
      {
        question: 'Comment pratiquer la respiration carrée 4-4-4-4 étape par étape ?',
        answer: 'Installez-vous confortablement, dos droit. Inspirez lentement par le nez pendant 4s, bloquez l’air poumons pleins pendant 4s, expirez avec fluidité par la bouche pendant 4s et maintenez l’immobilité poumons vides pendant 4s. Notre minuteur visuel interactif vous guide sans que vous ayez à compter.',
      },
      {
        question: 'La respiration carrée est-elle efficace contre les crises d’angoisse et de panique ?',
        answer: 'Oui, c’est l’une des méthodes les plus puissantes. En stimulant le nerf vague et en rééquilibrant les gaz sanguins, elle envoie au cerveau un signal direct d’apaisement qui stoppe les crises d’angoisse et les tremblements.',
      },
      {
        question: 'Combien de temps faut-il pratiquer la respiration carrée chaque jour ?',
        answer: 'Une séance de 3 à 5 minutes (environ 4 à 8 cycles complets) suffit pour ressentir un apaisement physique et mental net. Vous pouvez prolonger jusqu’à 10 ou 15 minutes le soir ou en méditation.',
      },
      {
        question: 'Peut-on modifier la durée de 4 secondes ?',
        answer: 'Tout à fait. Pour les débutants, débuter à 2 ou 3 secondes par phase est idéal. Notre minuteur interactif vous permet d’ajuster la cadence de 2 à 10 secondes selon vos capacités.',
      },
    ],
  },

  pt: {
    metaTitle: 'Respiração Quadrada (Box Breathing): Temporizador Guiado',
    metaDescription: 'Aprenda a respiração quadrada (box breathing 4-4-4-4) com nosso timer guiado grátis. Reduza a ansiedade e aumente o foco com a técnica Navy SEALs.',
    keywords: 'respiracao quadrada, box breathing portugues, tecnica de respiracao quadrada, respiracao 4 4 4 4, respiracao 4x4, respiracao quadrada como fazer, respiracao dos navy seals, timer respiracao quadrada, samavritti pranayama, exercicios de respiracao ansiedade, respiracao em caixa',
    canonicalPath: '/pt/box-breathing/',
    badge: 'CALMA TÁTICA & FOCO SOB PRESSÃO EXTREMA',
    heroTitle: 'Respiração Quadrada\nBox Breathing 4-4-4-4',
    heroSubtitle: 'O protocolo tático de respiração quadrada utilizado pelos Navy SEALs, atletas e médicos para resetar o sistema nervoso, reduzir o cortisol e recuperar o foco em 4 minutos.',
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
      whatIsTitle: 'O que é a Respiração Quadrada (Box Breathing ou Respiração 4x4)?',
      whatIsDesc1: 'A respiração quadrada—conhecida em inglês como box breathing ou square breathing e ligada à prática milenar de Sama Vritti Pranayama—é um exercício de respiração focado em 4 tempos idênticos: inspirar, reter cheio, expirar e reter vazio.',
      whatIsDesc2: 'Ao igualar os 4 lados do "quadrado" no mesmo tempo (geralmente 4 segundos), você interrompe a resposta de estresse do organismo, acalma o batimento cardíaco e recupera o autocontrole em minutos.',
      howToTitle: 'Respiração Quadrada: Como Fazer a Técnica 4x4 Passo a Passo',
      howToSteps: [
        { step: '1', title: 'Inspire por 4 segundos', desc: 'Puxe o ar lentamente pelo nariz até encher a região do abdômen e diafragma.' },
        { step: '2', title: 'Segure o ar por 4 segundos', desc: 'Mantenha os pulmões cheios de forma descontraída, relaxando os ombros.' },
        { step: '3', title: 'Expire por 4 segundos', desc: 'Solte o ar devagar pela boca, libertando o corpo de qualquer tensão acumulada.' },
        { step: '4', title: 'Pause vazio por 4 segundos', desc: 'Fique sem ar com tranquilidade durante 4 contagens antes da próxima inspiração.' },
      ],
      benefitsTitle: 'Benefícios comprovados da respiração quadrada (box breathing)',
      benefits: [
        { title: 'Alívio instantâneo do estresse e ansiedade', desc: 'Estimula o nervo vago e aciona o sistema nervoso parassimpático, baixando o cortisol rapidamente.' },
        { title: 'Melhora da concentração e tomada de decisão', desc: 'Equilibra os níveis de oxigênio e gás carbônico no cérebro, facilitando o raciocínio sob pressão.' },
        { title: 'Aumento da variabilidade da frequência cardíaca (VFC)', desc: 'Promove resiliência cardiovascular e estabilidade emocional em situações difíceis.' },
        { title: 'Interrompe crises de pânico rapidamente', desc: 'O ritmo compassado 4x4 impede a hiperventilação e devolve a sensação de segurança ao corpo.' },
      ],
      scienceTitle: 'A ciência por trás da respiração quadrada',
      scienceDesc1: 'Sob estresse agudo, a respiração tende a ficar curta e rápida. A retenção com pulmões cheios otimiza a oxigenação, enquanto a expiração prolongada estimula os barorreceptores que ordenam ao coração desacelerar.',
      scienceDesc2: 'A retenção com pulmões vazios treina a tolerância celular ao CO2, favorecendo a liberação de oxigênio para os tecidos pelo efeito Bohr.',
      whoUsesTitle: 'Quem utiliza a respiração dos Navy SEALs?',
      whoUsesDesc: 'Adotada oficialmente pelas forças especiais norte-americanas (Navy SEALs), hoje é amplamente empregada por cirurgiões, atletas olímpicos, pilotos e executivos para manter a lucidez em momentos cruciais.',
    },
    faqs: [
      {
        question: 'O que é o método de respiração quadrada (box breathing)?',
        answer: 'A respiração quadrada (também conhecida como box breathing, respiração 4x4 ou respiração dos Navy SEALs) é uma técnica de respiração em 4 etapas iguais: 4s de inspiração, 4s segurando cheio, 4s de expiração e 4s segurando vazio. Essa simetria regula o sistema nervoso autônomo e corta picos de estresse.',
      },
      {
        question: 'Como fazer a respiração quadrada corretamente?',
        answer: 'Sente-se confortavelmente com a coluna ereta. Inspire pelo nariz por 4 segundos, segure o ar nos pulmões por 4 segundos, expire suavemente pela boca por 4 segundos e pause com os pulmões vazios por 4 segundos. Use nosso timer visual gratuito para guiar seu ritmo sem precisar contar mentalmente.',
      },
      {
        question: 'Quantos minutos devo praticar para aliviar a ansiedade?',
        answer: 'Entre 3 e 5 minutos (cerca de 4 a 8 ciclos completos) já proporcionam alívio perceptível e reduzem a frequência cardíaca. Sessões de 10 a 15 minutos são excelentes para meditação ou para dormir melhor.',
      },
      {
        question: 'Qual a diferença entre a respiração quadrada e a técnica 4-7-8?',
        answer: 'A respiração quadrada (4-4-4-4) foca em equilíbrio, clareza mental e foco calmo durante o dia. Já a técnica 4-7-8 enfatiza uma expiração demorada (8 segundos) com efeito fortemente sedativo, sendo indicada para combater a insônia.',
      },
    ],
  },

  ja: {
    metaTitle: 'ボックス呼吸法（四角呼吸）ガイド付きタイマー＆解説',
    metaDescription: '米海軍ネイビーシールズ採用のボックス呼吸法（四角形呼吸法・スクエア呼吸 4-4-4-4・サマヴリッティ）を無料タイマーで実践。吸う・止める・吐く・止めるのリズムで緊張をほぐし、自律神経を整えて即効で集中力を高めます。',
    keywords: 'ボックス呼吸法, ボックス呼吸, ボックス呼吸 やり方, 四角形呼吸法, スクエア呼吸, box breathing, ネイビーシールズ 呼吸法, 4-4-4-4 呼吸法, 4x4 呼吸法, サマ・ヴリッティ・プラーナーヤーマ, サマヴリッティ, sama vritti pranayama, 緊張をほぐす 呼吸法, ボックス呼吸 タイマー 無料, 呼吸法 タイマー, 自律神経 呼吸法, ボックスブリージング, 等間隔呼吸法',
    canonicalPath: '/ja/box-breathing/',
    badge: '戦術的冷静さと極限の集中力を引き出す呼吸エンジン',
    heroTitle: 'ボックス呼吸法\n四角形呼吸法 4-4-4-4',
    heroSubtitle: '米海軍ネイビーシールズやトップアスリート、医師が実践する戦術的呼吸法（サマ・ヴリッティ・プラーナーヤーマ）。わずか4分間で自律神経を整え、コルチゾールを抑制して極限の集中力を取り戻します。',
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
      whatIsTitle: 'ボックス呼吸法（四角形呼吸・スクエア呼吸・サマヴリッティ）とは？',
      whatIsDesc1: 'ボックス呼吸法（Box Breathing）は、ヨガの伝統的な呼吸法「サマ・ヴリッティ・プラーナヤーマ」に起源を持ち、「吸う・止める・吐く・止める」の4つの動作を同じ秒数（標準は4秒ずつ）繰り返す呼吸コントロール法です。',
      whatIsDesc2: '四角形の4辺をなぞるように対称的なリズムを刻むことで、過剰に興奮した交感神経（闘争・逃走反応）を鎮め、瞬時に副交感神経を優位にして心拍数を安定させます。',
      howToTitle: 'ボックス呼吸法の正しいやり方（4ステップ実践ガイド）',
      howToSteps: [
        { step: '1', title: '4秒かけて吸う', desc: '鼻から静かに息を吸い込み、横隔膜を下げて下腹部を膨らませます。' },
        { step: '2', title: '4秒間息を止める', desc: '息をいっぱいに満たした状態で4秒キープ。肩の力を抜いてリラックスします。' },
        { step: '3', title: '4秒かけて吐く', desc: '口から細く長く息を吐き出し、身体の緊張をすべて解き放ちます。' },
        { step: '4', title: '4秒間息を止めて待つ', desc: '肺が空になった状態で4秒静止し、次の吸気への準備を整えます。' },
      ],
      benefitsTitle: '科学的に実証されている効果：緊張緩和・集中力・自律神経安定',
      benefits: [
        { title: '即効性のあるストレス軽減・コルチゾール抑制', desc: '迷走神経を刺激して副交感神経を活性化し、パニックや強い不安感を素早く鎮めます。' },
        { title: '高い集中力と認知機能の向上', desc: '血中の酸素と二酸化炭素のバランスを最適化し、前頭前野の判断力をクリアにします。' },
        { title: '心拍変動（HRV）の向上', desc: '呼吸と心拍のリズムを同調させ、プレッシャーに強い心血管系の回復力を養います。' },
        { title: 'どこでも手軽に実践可能', desc: '道具は不要。当サイトの無料タイマーを使えば頭で秒数を数えずに自然とリズムに乗ることができます。' },
      ],
      scienceTitle: '生理学的メカニズム：なぜ四角形のリズムが脳と身体を鎮めるのか？',
      scienceDesc1: 'プレッシャーにさらされると呼吸は浅く速くなり、脳は危険信号を受け取ります。満たした息を止めることで血中酸素濃度を高め、続く長い呼気が圧受容器を刺激して心拍数を落とします。',
      scienceDesc2: '空の状態で止めるステップは体内のCO2耐性を高め、ボーア効果によって赤血球から脳や筋肉組織へ効率的に酸素を運搬できるように促します。',
      whoUsesTitle: '米海軍ネイビーシールズやアスリートが極限状態で実践する理由',
      whoUsesDesc: '極限状態での判断力が求められる米海軍特殊部隊（Navy SEALs）のメンタルトレーニングとして広く認知され、現在では救急外科医、オリンピック選手、航空機パイロット、ビジネスリーダーが勝負の前や不安の克服に愛用しています。',
    },
    faqs: [
      {
        question: 'ボックス呼吸法（四角形呼吸・スクエア呼吸・サマヴリッティ）とは？',
        answer: 'ボックス呼吸法（ヨガのサマ・ヴリッティ・プラーナヤーマをルーツとし、米海軍特殊部隊ネイビーシールズが導入したことで世界的に広まった技法）は、吸う・止める・吐く・止めるの4工程を均等な時間（標準は4秒ずつ）繰り返す呼吸法です。自律神経を瞬時に整えます。',
      },
      {
        question: '本番前の極度の緊張やパニック時にも効果がありますか？',
        answer: 'はい、即効性があります。等間隔の呼吸リズムが迷走神経を刺激し、心拍の急上昇を抑えて脳へ「安全である」という信号を送るため、試合前やプレゼン前の震えや焦燥感を数分で鎮めます。',
      },
      {
        question: '1回あたり何分くらい行うのが効果的ですか？',
        answer: '3分〜5分間（約4〜8サイクル）実践するだけで、心拍が落ち着き頭がすっきりするのを感じられます。朝の集中力アップや夜の睡眠前なら10分程度行うのもおすすめです。',
      },
      {
        question: '4秒が息苦しい場合、秒数を変えても効果はありますか？',
        answer: 'はい、全く問題ありません。初心者は無理せず「2秒」や「3秒」ずつから始めてみてください。当ツールのカスタム設定で2秒〜10秒まで自由に設定できます。',
      },
      {
        question: 'ボックス呼吸法と4-7-8呼吸法はどう使い分けるべきですか？',
        answer: 'ボックス呼吸（4-4-4-4）は昼間でも眠くならず「冷静な集中力」を養うのに適しています。一方、4-7-8呼吸法は息を長く吐くため鎮静効果が高く、就寝前の入眠サポートに最適です。',
      },
    ],
  },

  it: {
    metaTitle: 'Respirazione Quadrata (Box Breathing): Timer Guidato Calma',
    metaDescription: 'Impara la respirazione quadrata (box breathing 4-4-4-4) con il nostro timer guidato gratuito. Riduci lo stress e ritrova la calma in soli 4 minuti.',
    keywords: 'respirazione quadrata, box breathing italiano, box breathing, respirazione dei navy seals, respirazione quadrata come si fa, respirazione a scatola, sama vritti pranayama, samavritti pranayama, sama vritti, respirazione 4 4 4 4, respirazione 4x4, respirazione guidata online, timer respirazione quadrata gratis, esercizi di respirazione contro ansia, respirazione in quattro tempi, respirazione uniforme',
    canonicalPath: '/it/box-breathing/',
    badge: 'CALMA TATTICA E CONCENTRAZIONE SOTTO PRESSIONE',
    heroTitle: 'Respirazione Quadrata\nBox Breathing 4-4-4-4',
    heroSubtitle: 'Il protocollo tattico (Sama Vritti Pranayama) utilizzato dai Navy SEALs, atleti professionisti e medici per azzerare lo stress, abbassare il cortisolo e ritrovare il pieno controllo mentale in 4 minuti.',
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
      whatIsTitle: 'Cos’è la Respirazione Quadrata (Box Breathing, Sama Vritti o Tecnica dei Navy SEALs)?',
      whatIsDesc1: 'La respirazione quadrata—nota in inglese come box breathing o square breathing e riconducibile alla millenaria pratica yogica del Sama Vritti Pranayama—è una tecnica di controllo del respiro strutturata su 4 tempi identici: inspirazione, apnea a polmoni pieni, espirazione e apnea a polmoni vuoti.',
      whatIsDesc2: 'Mantenendo ciascun lato del "quadrato" della medesima durata (convenzionalmente 4 secondi), si blocca la reazione di allarme del sistema nervoso simpatico, abbassando la frequenza cardiaca in pochissimi minuti.',
      howToTitle: 'Come si Fa la Respirazione Quadrata 4-4-4-4 Passo dopo Passo',
      howToSteps: [
        { step: '1', title: 'Inspira per 4 secondi', desc: 'Inspira dal naso portando l’aria verso il basso ventre e sentendo il diaframma espandersi.' },
        { step: '2', title: 'Trattieni il respiro per 4 secondi', desc: 'Mantieni i polmoni pieni con serenità, rilassando le spalle e i muscoli facciali.' },
        { step: '3', title: 'Espira per 4 secondi', desc: 'Rilascia l’aria con costanza dalla bocca, liberando ogni tensione accumulata.' },
        { step: '4', title: 'Trattieni a vuoto per 4 secondi', desc: 'Resta in pausa a polmoni vuoti per quattro secondi prima di ricominciare.' },
      ],
      benefitsTitle: 'Benefici Dimostrati dalla Scienza Contro Ansia, Stress e Panico',
      benefits: [
        { title: 'Diminuzione immediata del cortisolo', desc: 'Attiva il nervo vago e stimola il sistema parasimpatico per spegnere l’ansia.' },
        { title: 'Focalizzazione e lucidità cognitiva', desc: 'Riequilibra il rapporto tra ossigeno e anidride carbonica nella corteccia prefrontale.' },
        { title: 'Maggiore variabilità della frequenza cardiaca (HRV)', desc: 'Migliora la resilienza del sistema cardiovascolare e il controllo emotivo.' },
        { title: 'Stop istantaneo a panico e tremori', desc: 'Il conteggio a quattro tempi interrompe i pensieri ricorrenti e la respirazione iperventilata.' },
      ],
      scienceTitle: 'Fisiologia: Perché la Respirazione a Scatola Calma Immediatamente il Cuore',
      scienceDesc1: 'Sotto stress, il respiro diviene corto e affrettato. L’apnea a pieni polmoni incrementa la saturazione arteriosa, mentre la lenta espirazione stimola i barocettori che inducono il cuore a rallentare.',
      scienceDesc2: 'L’apnea a polmoni vuoti allena la tolleranza al CO2, favorendo il rilascio di ossigeno nei tessuti secondo l’effetto Bohr.',
      whoUsesTitle: 'Chi Utilizza la Respirazione Tattica dei Navy SEALs?',
      whoUsesDesc: 'Resa celebre dai Navy SEALs americani per preservare la calma in situazioni estreme, è oggi regolarmente utilizzata da chirurghi, piloti, atleti professionisti e manager prima di decisioni decisive.',
    },
    faqs: [
      {
        question: 'In cosa consiste la respirazione quadrata (box breathing o sama vritti pranayama)?',
        answer: 'La respirazione quadrata (originaria dello yoga come Sama Vritti Pranayama e resa celebre dai Navy SEALs come box breathing) è un esercizio suddiviso in 4 fasi di uguale durata: 4s di inspirazione, 4s di apnea a pieni polmoni, 4s di espirazione e 4s di apnea a polmoni vuoti. La perfetta simmetria rasserena mente e corpo.',
      },
      {
        question: 'Come si fa la respirazione quadrata 4-4-4-4 passo dopo passo?',
        answer: 'Siediti dritto o sdraiati comodamente. Inspira dal naso per 4 secondi, trattieni il respiro a polmoni pieni per 4 secondi, espira dolcemente dalla bocca per 4 secondi e resta in apnea a polmoni vuoti per 4 secondi. Il nostro timer visivo gratuito scandisce ogni fase senza dover contare mentalmente.',
      },
      {
        question: 'La respirazione quadrata funziona contro ansia improvvisa e attacchi di panico?',
        answer: 'Sì, agisce direttamente sul sistema nervoso autonomo. Stimola il nervo vago e riequilibra i livelli di ossigeno e anidride carbonica, riducendo rapidamente tachicardia, tremori e pensieri incontrollati.',
      },
      {
        question: 'Per quanti minuti al giorno è consigliabile praticarla?',
        answer: 'Praticare per 3-5 minuti (tra i 4 e gli 8 cicli) è sufficiente per avvertire un evidente abbassamento dello stress. Si può estendere a 10-15 minuti per rilassarsi prima di dormire o prima di una sfida importante.',
      },
      {
        question: 'Posso impostare tempi inferiori a 4 secondi se sono principiante?',
        answer: 'Certamente. Se 4 secondi risultano faticosi, inizia con 2 o 3 secondi per lato. Il nostro timer interattivo permette di impostare qualsiasi valore da 2 a 10 secondi per adattarsi al tuo ritmo naturale.',
      },
    ],
  },
};
