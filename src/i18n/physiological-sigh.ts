import type { SupportedLanguage } from './ui';

export interface PhysiologicalSighContent {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalPath: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  breadcrumbName: string;
  startPracticeBtn: string;
  allTechniquesBtn: string;
  jumpLinks: {
    timer: string;
    presets: string;
    stats: string;
    about: string;
    faq: string;
  };
  metaDetails: {
    freeBadge: string;
    author: string;
    publishedDate: string;
    updatedDate: string;
  };
  disclosure: {
    title: string;
    desc: string;
  };
  guide: {
    sectionTitle: string;
    sectionSubtitle: string;
    whatIsTitle: string;
    whatIsDesc1: string;
    whatIsDesc2: string;
    howToTitle: string;
    howToSteps: { step: string; title: string; desc: string }[];
    physiologyTitle: string;
    physiologyDesc1: string;
    physiologyDesc2: string;
    researchTitle: string;
    researchDesc1: string;
    researchHighlightsTitle: string;
    researchHighlights: string[];
    benefitsTitle: string;
    benefits: { title: string; desc: string }[];
    safetyTitle: string;
    safetyTips: string[];
    referencesTitle: string;
  };
  editorial: {
    title: string;
    desc: string;
    disclaimer: string;
    learnMore: string;
  };
  faqsTitle: string;
  faqsSubtitle: string;
  faqs: { question: string; answer: string }[];
}

export const physiologicalSighI18n: Record<SupportedLanguage, PhysiologicalSighContent> = {
  en: {
    metaTitle: 'Physiological Sigh & Cyclic Sighing: Complete Guide & Timer',
    metaDescription: 'Practice the Physiological Sigh with our free guided timer. Two quick inhales and a long exhale for instant stress relief based on Stanford research.',
    keywords: 'physiological sigh, cyclic sighing, physiological sigh timer, cyclic sighing timer, huberman sigh, double inhale breathing, stress relief breathing, free breathwork app, stanford breathing study',
    canonicalPath: '/physiological-sigh/',
    badge: 'STANFORD RESEARCHED RAPID STRESS RESET ENGINE',
    heroTitle: 'Physiological Sigh\nFast Stress Relief Timer',
    heroSubtitle: 'Master the Physiological Sigh with our free guided timer. Double inhale followed by a long exhale for rapid stress relief based on Stanford Huberman Lab research.',
    breadcrumbName: 'Physiological Sigh',
    startPracticeBtn: 'Start Practice',
    allTechniquesBtn: '← All Techniques',
    jumpLinks: {
      timer: 'Timer',
      presets: 'Presets',
      stats: 'Stats',
      about: 'About',
      faq: 'FAQ',
    },
    metaDetails: {
      freeBadge: '100% Free & Private',
      author: 'By HarmonyBreath Editorial',
      publishedDate: 'Published 2026-07-25',
      updatedDate: 'Updated 2026-08-15',
    },
    disclosure: {
      title: 'Scientific Research & Editorial Disclosure:',
      desc: 'Content on this page is compiled from peer-reviewed clinical studies conducted at Stanford University and published physiological research. Our goal is to explain the biological mechanisms behind cyclic sighing while providing free, interactive guided timers.',
    },
    guide: {
      sectionTitle: 'Understanding the Physiological Sigh',
      sectionSubtitle: 'The science and practice of double-inhale breathing',
      whatIsTitle: 'What Is the Physiological Sigh?',
      whatIsDesc1: 'The physiological sigh (popularized by neuroscientist Dr. Andrew Huberman and often referred to as the psychological sigh) is an ancient biological reflex that humans and animals spontaneously perform to offload excess carbon dioxide (CO2) and relieve physiological tension.',
      whatIsDesc2: 'Unlike traditional single-breath practices, the physiological sigh relies on a specific sequence: two quick inhales through the nose followed by a long, slow exhale through the mouth. Doing just 1 to 3 sigh cycles can rapidly lower heart rate and reduce real-time autonomic arousal.',
      howToTitle: 'How to Do the Physiological Sigh',
      howToSteps: [
        {
          step: '1',
          title: 'Deep Inhale',
          desc: 'Inhale deeply through your nose, filling your lungs to near maximum capacity.',
        },
        {
          step: '2',
          title: 'Top-Up Inhale ("Sip")',
          desc: 'Without exhaling first, take a second, sharp "sip" of air through your nose to inflate the lungs completely.',
        },
        {
          step: '3',
          title: 'Long Exhale',
          desc: 'Slowly exhale completely through your mouth, letting your breath flow out longer than both inhalations combined.',
        },
      ],
      physiologyTitle: 'The Physiology Behind the Double Inhale',
      physiologyDesc1: 'The human lungs contain hundreds of millions of microscopic air sacs called alveoli. Throughout daily life, shallow breathing and psychological stress cause tiny alveoli to deflate or collapse (a clinical state known as atelectasis). Taking a second, sharp "sip" of air right at the peak of inhalation pops open these deflated air sacs, dramatically expanding total pulmonary surface area.',
      physiologyDesc2: 'When you subsequently engage in a prolonged, unhurried exhalation, the re-inflated alveoli offload carbon dioxide (CO2) far more efficiently. Simultaneously, the extended exhale stimulates the vagus nerve and activates the parasympathetic nervous system, inducing rapid autonomic deceleration and lowering heart rate.',
      researchTitle: 'Evidence-Based Research (Stanford 2023 Study)',
      researchDesc1: 'A landmark 2023 randomized controlled trial conducted by researchers at Stanford University School of Medicine (Balban, Huberman et al., published in Cell Reports Medicine) evaluated 5-minute daily breathwork protocols against mindfulness meditation over one month.',
      researchHighlightsTitle: 'Key Findings from the Stanford Clinical Trial:',
      researchHighlights: [
        'Cyclic sighing produced greater daily mood enhancements and positive affect compared with mindfulness meditation.',
        'Practicing for just 5 minutes per day induced significant reductions in baseline resting respiratory rate over 30 days.',
        'Exhale-emphasized breathwork was identified as the single most effective non-pharmacological protocol for rapidly reducing acute physiological arousal in real time.',
      ],
      benefitsTitle: 'Key Potential Benefits',
      benefits: [
        {
          title: '1. On-Demand Stress Relief',
          desc: 'A quick 1–2 minute session rapidly dials down sympathetic arousal before high-stakes tasks or directly following acute stressful events.',
        },
        {
          title: '2. Enhanced Mood & Composure',
          desc: 'Daily cyclic sighing promotes significant shifts in emotional well-being, feelings of calm, and sustained mental composure.',
        },
        {
          title: '3. Lower Resting Respiratory Rate',
          desc: 'Repeated prolonged exhales train your autonomic nervous system toward calmer, deeper, and more efficient baseline breathing habits.',
        },
        {
          title: '4. Optimal Pulmonary Gas Exchange',
          desc: 'Re-inflates collapsed alveoli, optimizes lung surface area, and accelerates carbon dioxide offloading from the bloodstream.',
        },
      ],
      safetyTitle: 'Safety & Best Practices',
      safetyTips: [
        'Sharp "sip" technique: Take a second, sharp "sip" of air through your nose to inflate the lungs completely without straining your chest muscles.',
        'Listen to your body: If you feel lightheaded, dizzy, or short of breath, pause the session and return to your natural breathing pattern.',
        'Safety first: Never practice breathwork while driving, swimming, bathing, or operating motor vehicles or machinery.',
        'Medical considerations: Breathwork is an educational wellness practice. Consult a qualified healthcare professional if you have underlying respiratory, cardiac, or panic disorders.',
      ],
      referencesTitle: 'Scientific References & Cited Studies',
    },
    editorial: {
      title: 'Written by the HarmonyBreath Editorial Team',
      desc: 'This guide was created by our in-house editorial team of breathwork practitioners and wellness writers, the same people who build and use the HarmonyBreath timers in their daily practice. We research each technique carefully against published physiological literature and keep every article clear, honest, and free of medical overreach.',
      disclaimer: 'This content is for educational purposes only and is not a substitute for professional medical advice.',
      learnMore: 'Learn more about our team',
    },
    faqsTitle: 'Frequently Asked Questions',
    faqsSubtitle: 'Everything you need to know about the Physiological Sigh & Cyclic Sighing',
    faqs: [
      {
        question: 'What is the Huberman cyclic sighing?',
        answer: 'Cyclic sighing is an evidence-based breathwork protocol popularized by Stanford neurobiologist Dr. Andrew Huberman. In a landmark 2023 Stanford clinical trial led with Dr. David Spiegel, participants practiced 5 minutes of cyclic sighing daily—repeating two quick inhales through the nose (one deep breath followed by a sharp "sip" to fully reinflate collapsed alveoli) and a slow, extended exhale through the mouth. The study proved that cyclic sighing produces greater reductions in autonomic anxiety and larger improvements in positive mood than standard mindfulness meditation. You can use our guided timer above to practice the exact 5-minute Stanford protocol.',
      },
      {
        question: 'Does the physiological sigh actually work?',
        answer: 'Yes, scientific evidence confirms its efficacy. A landmark clinical trial from Stanford University School of Medicine demonstrated that practicing cyclic sighing for just 5 minutes a day rapidly reduces anxiety, lowers heart rate and respiratory rate, and improves overall mood more effectively than standard mindfulness meditation.',
      },
      {
        question: 'How many physiological sighs should you do?',
        answer: 'For immediate, real-time stress relief during acute tension, anxiety, or panic, performing 1 to 3 physiological sighs is enough to trigger a rapid parasympathetic relaxation response. For long-term stress resilience and sustained mood elevation, practice cyclic sighing for 5 minutes daily.',
      },
      {
        question: 'Why does it use a double inhale?',
        answer: 'Taking a second, sharp "sip" of air right after the initial inhalation pops open deflated or collapsed lung air sacs (alveoli). This fully inflates the lungs, expands pulmonary surface area, and maximizes oxygenation and carbon dioxide offloading before the long exhale.',
      },
      {
        question: 'What is the difference between a physiological sigh and cyclic sighing?',
        answer: 'A physiological sigh refers to a single double-inhale and long-exhale breath pattern used for immediate on-the-spot calming. Cyclic sighing refers to repeating this double-inhale breathing pattern continuously over a set duration (typically 3 to 5 minutes) for systemic nervous system regulation.',
      },
      {
        question: 'Is physiological sighing safe?',
        answer: 'Yes, physiological sighing is a safe and natural breathwork technique that mimics an innate reflex humans do spontaneously while sleeping or crying. Gently take the second sharp sip without forcing or straining. If you feel lightheaded, pause and return to your natural rhythm. Never practice breathwork while driving or in water.',
      },
    ],
  },
  es: {
    metaTitle: 'Suspiro Fisiológico y Respiración Cíclica: Guía y Timer',
    metaDescription: 'Practica el Suspiro Fisiológico con nuestro temporizador guiado gratis. Doble inhalación y exhalación larga para frenar el estrés al instante.',
    keywords: 'suspiro fisiologico, respiracion ciclica, temporizador suspiro fisiologico, suspiro psicologico huberman, respiracion doble inhalacion, tecnicas de respiracion estres, app respiracion gratis',
    canonicalPath: '/es/physiological-sigh/',
    badge: 'MOTOR DE RESETEO RÁPIDO DEL ESTRÉS INVESTIGADO EN STANFORD',
    heroTitle: 'Suspiro Fisiológico\nReseteo de Respiración Cíclica',
    heroSubtitle: 'Domina el Suspiro Fisiológico con nuestro temporizador guiado gratuito. Doble inhalación seguida de una exhalación prolongada para un rápido alivio del estrés basado en estudios de Stanford.',
    breadcrumbName: 'Suspiro Fisiológico',
    startPracticeBtn: 'Comenzar Práctica',
    allTechniquesBtn: '← Todas las Técnicas',
    jumpLinks: {
      timer: 'Temporizador',
      presets: 'Modos',
      stats: 'Estadísticas',
      about: 'Acerca de',
      faq: 'Preguntas',
    },
    metaDetails: {
      freeBadge: '100% Gratis y Privado',
      author: 'Por el Equipo Editorial de HarmonyBreath',
      publishedDate: 'Publicado el 25/07/2026',
      updatedDate: 'Actualizado el 15/08/2026',
    },
    disclosure: {
      title: 'Divulgación Científica y Editorial:',
      desc: 'El contenido de esta página se basa en estudios clínicos revisados por pares realizados en la Universidad de Stanford e investigaciones fisiológicas. Nuestro objetivo es explicar los mecanismos biológicos del suspiro cíclico proporcionando temporizadores guiados interactivos y gratuitos.',
    },
    guide: {
      sectionTitle: 'Comprender el Suspiro Fisiológico',
      sectionSubtitle: 'La ciencia y la práctica de la respiración con doble inhalación',
      whatIsTitle: '¿Qué es el Suspiro Fisiológico?',
      whatIsDesc1: 'El suspiro fisiológico (popularizado por el neurocientífico Dr. Andrew Huberman y frecuentemente llamado suspiro psicológico) es un reflejo biológico innato que los humanos y animales realizan de forma espontánea para expulsar el exceso de dióxido de carbono (CO2) y liberar la tensión.',
      whatIsDesc2: 'A diferencia de las técnicas de respiración convencionales, se basa en una secuencia precisa: dos inhalaciones rápidas por la nariz seguidas de una exhalación lenta y prolongada por la boca. Realizar de 1 a 3 ciclos basta para reducir rápidamente la frecuencia cardíaca y la excitación autonómica.',
      howToTitle: 'Cómo Realizar el Suspiro Fisiológico',
      howToSteps: [
        {
          step: '1',
          title: 'Inhalación Profunda',
          desc: 'Inhala profundamente por la nariz, llenando tus pulmones casi a su máxima capacidad.',
        },
        {
          step: '2',
          title: 'Segunda Inhalación Rápida',
          desc: 'Sin exhalar primero, toma un segundo sorbo corto y enérgico de aire por la nariz para inflar los pulmones al máximo.',
        },
        {
          step: '3',
          title: 'Exhalación Lenta y Prolongada',
          desc: 'Exhala lentamente por la boca en un suspiro continuo, haciendo que la exhalación dure más que las dos inhalaciones juntas.',
        },
      ],
      physiologyTitle: 'La Fisiología Detrás de la Doble Inhalación',
      physiologyDesc1: 'Los pulmones contienen cientos de millones de sacos microscópicos de aire llamados alvéolos. Con el estrés y la respiración superficial diaria, los alvéolos se desinflan o colapsan (atelectasia). Dar ese segundo sorbo agudo de aire al final de la inhalación reabre estos alvéolos colapsados, expandiendo drásticamente la superficie pulmonar.',
      physiologyDesc2: 'Al realizar después una exhalación prolongada, los alvéolos reabiertos descargan el dióxido de carbono (CO2) acumulado con máxima eficacia. Al mismo tiempo, la exhalación larga estimula el nervio vago y activa el sistema parasimpático, desacelerando el ritmo cardíaco.',
      researchTitle: 'Evidencia Científica (Estudio de Stanford 2023)',
      researchDesc1: 'Un ensayo clínico aleatorizado de 2023 de la Universidad de Stanford (Balban, Huberman et al., Cell Reports Medicine) comparó prácticas diarias de 5 minutos de suspiro cíclico, respiración cuadrada, hiperventilación cíclica y meditación mindfulness durante un mes.',
      researchHighlightsTitle: 'Conclusiones Principales del Estudio de Stanford:',
      researchHighlights: [
        'El suspiro cíclico produjo mayores mejoras en el estado de ánimo diario y el bienestar emocional que la meditación mindfulness.',
        'Practicar solo 5 minutos al día provocó reducciones significativas en la frecuencia respiratoria en reposo tras un mes.',
        'La respiración con énfasis en la exhalación demostró ser el protocolo no farmacológico más eficaz para reducir la activación fisiológica en tiempo real.',
      ],
      benefitsTitle: 'Beneficios Principales Demostrados',
      benefits: [
        {
          title: '1. Alivio Inmediato del Estrés',
          desc: 'Una sesión rápida de 1–2 minutos calma la activación simpática antes de situaciones exigentes o tras eventos estresantes.',
        },
        {
          title: '2. Mejora del Estado de Ánimo',
          desc: 'La práctica diaria favorece un estado anímico positivo, calma mental sostenida y reducción de la ansiedad generalizada.',
        },
        {
          title: '3. Menor Frecuencia Respiratoria en Reposo',
          desc: 'Las exhalaciones lentas reiteradas entrenan al sistema nervioso hacia hábitos respiratorios basales más pausados y eficientes.',
        },
        {
          title: '4. Óptimo Intercambio de Gases Pulmonares',
          desc: 'Reinfla los alvéolos desinflados, amplía la superficie pulmonar y acelera la eliminación del exceso de CO2 en sangre.',
        },
      ],
      safetyTitle: 'Seguridad y Buenas Prácticas',
      safetyTips: [
        'Técnica del segundo sorbo: Toma la segunda inhalación rápida por la nariz sin forzar excesivamente la musculatura del pecho o cuello.',
        'Escucha a tu cuerpo: Si sientes mareo o aturdimiento, detén la sesión y respira con normalidad.',
        'La seguridad es primero: Nunca practiques ejercicios de respiración mientras conduces, nadas, te bañas o manejas maquinaria.',
        'Aviso médico: La respiración consciente es una práctica de bienestar educativo. Consulta a un médico si tienes afecciones cardíacas o respiratorias crónicas.',
      ],
      referencesTitle: 'Referencias Científicas y Estudios Citados',
    },
    editorial: {
      title: 'Escrito por el Equipo Editorial de HarmonyBreath',
      desc: 'Esta guía fue desarrollada por nuestro equipo interno de practicantes de breathwork y redactores de bienestar, quienes usan y prueban las herramientas de HarmonyBreath diariamente. Investigamos cada técnica rigurosamente en la literatura fisiológica médica.',
      disclaimer: 'Este contenido es exclusivamente para fines educativos y no reemplaza el consejo médico profesional.',
      learnMore: 'Conoce más sobre nuestro equipo',
    },
    faqsTitle: 'Preguntas Frecuentes',
    faqsSubtitle: 'Todo lo que necesitas saber sobre el Suspiro Fisiológico y la Respiración Cíclica',
    faqs: [
      {
        question: '¿Qué es el suspiro psicológico de Huberman?',
        answer: 'El suspiro fisiológico—frecuentemente llamado suspiro psicológico—es una técnica rápida para reducir el estrés popularizada por el neurobiólogo Dr. Andrew Huberman. Consiste en dos inhalaciones cortas por la nariz seguidas de una exhalación larga y relajante por la boca para bajar rápidamente la activación autonómica.',
      },
      {
        question: '¿Realmente funciona el suspiro fisiológico?',
        answer: 'Sí, la ciencia lo respalda sólidamente. Un estudio clínico de la Escuela de Medicina de Stanford demostró que practicar suspiros cíclicos durante 5 minutos al día reduce la ansiedad, disminuye la frecuencia cardíaca y respiratoria, y mejora el estado de ánimo de forma más eficaz que la meditación.',
      },
      {
        question: '¿Cuántos suspiros fisiológicos se deben hacer?',
        answer: 'Para un alivio inmediato del estrés en momentos de ansiedad aguda, realizar de 1 a 3 suspiros fisiológicos es suficiente para activar la respuesta de relajación. Para resiliencia a largo plazo y mejora anímica sostenida, practica el suspiro cíclico durante 5 minutos diarios.',
      },
      {
        question: '¿Por qué se hace una doble inhalación?',
        answer: 'Dar un segundo sorbo agudo de aire tras la primera inhalación abre los pequeños sacos pulmonares colapsados (alvéolos). Esto expande al máximo la superficie de los pulmones y permite eliminar mucho más dióxido de carbono en la exhalación posterior.',
      },
      {
        question: '¿Cuál es la diferencia entre suspiro fisiológico y suspiro cíclico?',
        answer: 'El suspiro fisiológico es un único ciclo de respiración (doble inhalación y exhalación larga) para calmarse en el acto. El suspiro cíclico (cyclic sighing) es la repetición continua de este patrón durante una sesión estructurada de 3 a 5 minutos para entrenar el sistema nervioso.',
      },
      {
        question: '¿Es seguro el suspiro fisiológico?',
        answer: 'Sí, es una técnica completamente natural y segura que imita un reflejo que el cuerpo humano realiza de forma espontánea al dormir o tras sollozar. Realiza el segundo sorbo con suavidad y sin forzar. Si sientes mareos, haz una pausa. Nunca respires de forma controlada mientras conduces o estás en el agua.',
      },
    ],
  },
  de: {
    metaTitle: 'Physiologischer Seufzer (Zyklisches Seufzen): Timer & Guide',
    metaDescription: 'Meistere den Physiologischen Seufzer mit unserem kostenlosen Timer. Doppeltes Einatmen und langes Ausatmen für schnellen Stressabbau nach Stanford.',
    keywords: 'physiologischer seufzer, physiologisches seufzen, zyklisches seufzen, physiologischer seufzer timer, physiologisches seufzen timer, physiologischer seufzer wirkung, physiologischer seufzer atmung, huberman seufzer, doppelter atemzug, atemübung stressabbau, kostenlose atem app, stanford atemstudie',
    canonicalPath: '/de/physiological-sigh/',
    badge: 'IN STANFORD ERFORSCHTES SYSTEM FÜR SOFORTIGEN STRESSABBAU',
    heroTitle: 'Physiologischer Seufzer\nZyklisches Seufzen Reset',
    heroSubtitle: 'Meistere den Physiologischen Seufzer mit unserem kostenlosen geführten Timer. Doppeltes Einatmen gefolgt von langem Ausatmen für schnellen Stressabbau nach Erkenntnissen der Stanford University.',
    breadcrumbName: 'Physiologischer Seufzer',
    startPracticeBtn: 'Übung Starten',
    allTechniquesBtn: '← Alle Techniken',
    jumpLinks: {
      timer: 'Timer',
      presets: 'Modi',
      stats: 'Statistiken',
      about: 'Über uns',
      faq: 'FAQ',
    },
    metaDetails: {
      freeBadge: '100% Kostenlos & Privat',
      author: 'Von der HarmonyBreath-Redaktion',
      publishedDate: 'Veröffentlicht am 25.07.2026',
      updatedDate: 'Aktualisiert am 15.08.2026',
    },
    disclosure: {
      title: 'Wissenschaftliche Forschung & Redaktioneller Hinweis:',
      desc: 'Die Inhalte dieser Seite basieren auf peer-reviewed Studien der Stanford University sowie physiologischer Fachliteratur. Unser Ziel ist es, die biologischen Mechanismen des zyklischen Seufzens verständlich zu machen und kostenlose interaktive Atem-Timer bereitzustellen.',
    },
    guide: {
      sectionTitle: 'Den Physiologischen Seufzer verstehen',
      sectionSubtitle: 'Die Wissenschaft und Praxis des Atmens mit doppeltem Einatmen',
      whatIsTitle: 'Was ist ein physiologischer Seufzer (Physiologisches Seufzen)?',
      whatIsDesc1: 'Der physiologische Seufzer (bekannt gemacht durch den Neurowissenschaftler Dr. Andrew Huberman, oft auch als psychologischer Seufzer bezeichnet) ist ein biologischer Schutzreflex, den Menschen und Tiere unbewusst ausführen, um überschüssiges Kohlendioxid (CO2) abzuatmen und Anspannung zu lösen.',
      whatIsDesc2: 'Im Gegensatz zu herkömmlichen Atemübungen nutzt der Seufzer eine spezifische Abfolge: zwei schnelle Einatmungen durch die Nase gefolgt von einer langen, langsamen Ausatmung durch den Mund. Bereits 1 bis 3 Zyklen senken die Herzfrequenz und die akute körperliche Erregung spürbar.',
      howToTitle: 'So funktioniert der Physiologische Seufzer',
      howToSteps: [
        {
          step: '1',
          title: 'Tiefes Einatmen',
          desc: 'Atme tief durch die Nase ein, bis sich deine Lunge fast vollständig gefüllt hat.',
        },
        {
          step: '2',
          title: 'Zweiter kurzer Zug ("Sipp")',
          desc: 'Ohne vorher auszuatmen, nimmst du einen zweiten, kurzen Atemzug durch die Nase, um die Lunge maximal zu füllen.',
        },
        {
          step: '3',
          title: 'Langes, seufzendes Ausatmen',
          desc: 'Atme langsam und vollständig durch den Mund aus – die Ausatmung sollte länger dauern als beide Einatmungen zusammen.',
        },
      ],
      physiologyTitle: 'Die Physiologie hinter dem doppelten Einatmen',
      physiologyDesc1: 'In den Lungen befinden sich hunderte Millionen mikroskopisch kleiner Lungenbläschen (Alveolen). Durch Stress und flache Alltagsatmung fallen diese winzigen Bläschen in sich zusammen (Atelektase). Der zweite kurze Einatemzug öffnet diese kollabierten Alveolen wieder, wodurch sich die Lungenoberfläche schlagartig vergrößert.',
      physiologyDesc2: 'Beim anschließenden langen Ausatmen kann der Körper angesammeltes Kohlendioxid (CO2) wesentlich effizienter abtransportieren. Gleichzeitig stimuliert das verlangsamte Ausatmen den Vagusnerv, aktiviert das parasympathische Nervensystem und verlangsamt den Herzschlag.',
      researchTitle: 'Wissenschaftliche Belege (Stanford-Studie 2023)',
      researchDesc1: 'In einer renommierten randomisierten kontrollierten Studie der Stanford University (Balban, Huberman et al., Cell Reports Medicine 2023) wurden 5-minütige tägliche Atempraktiken wie zyklisches Seufzen, Box-Breathing und Achtsamkeitsmeditation über einen Monat hinweg verglichen.',
      researchHighlightsTitle: 'Hauptergebnisse der Stanford-Studie:',
      researchHighlights: [
        'Zyklisches Seufzen führte zu signifikant größeren Verbesserungen der täglichen Stimmung und des Wohlbefindens als Achtsamkeitsmeditation.',
        'Bereits 5 Minuten tägliche Praxis senkten die Ruhe-Atemfrequenz der Probanden über 30 Tage hinweg messbar.',
        'Atemtechniken mit verlängerter Ausatmung erwiesen sich als die wirksamste Methode, um akute physiologische Erregung in Echtzeit zu drosseln.',
      ],
      benefitsTitle: 'Wichtigste gesundheitliche Vorteile',
      benefits: [
        {
          title: '1. Stressabbau auf Knopfdruck',
          desc: 'Eine kurze 1–2-minütige Sequenz beruhigt das Nervensystem vor fordernden Aufgaben oder unmittelbar nach stressigen Erlebnissen.',
        },
        {
          title: '2. Verbesserte Stimmung & Gelassenheit',
          desc: 'Tägliche Praxis unterstützt positive Gemütszustände, geistige Klarheit und innere Balance.',
        },
        {
          title: '3. Niedrigere Ruhe-Atemfrequenz',
          desc: 'Regelmäßiges Training mit langer Ausatmung gewöhnt den Körper an eine ruhigere, tiefere und gesündere Grundatmung.',
        },
        {
          title: '4. Optimierter Gasaustausch der Lunge',
          desc: 'Reaktiviert kollabierte Lungenbläschen und beschleunigt den Abbau von überschüssigem CO2 aus dem Blutkreislauf.',
        },
      ],
      safetyTitle: 'Sicherheit & Praxistipps',
      safetyTips: [
        'Sanfter Nachzug: Nimm den zweiten Atemzug durch die Nase zügig, aber ohne Verspannung in Hals oder Schultern.',
        'Körpersignale beachten: Solltest du Schwindelgefühl verspüren, pausiere die Übung und atme in deinem natürlichen Rhythmus weiter.',
        'Sicherheit geht vor: Führe Atemübungen niemals beim Autofahren, Schwimmen, Baden oder Bedienen von Maschinen durch.',
        'Medizinischer Hinweis: Breathwork dient dem allgemeinen Wohlbefinden. Bei chronischen Herz- oder Lungenerkrankungen halte Rücksprache mit einem Arzt.',
      ],
      referencesTitle: 'Wissenschaftliche Referenzen & Zitierte Studien',
    },
    editorial: {
      title: 'Verfasst vom HarmonyBreath-Redaktionsteam',
      desc: 'Dieser Leitfaden wurde von unserem Fachteam aus Atemtrainern und Gesundheitsautoren verfasst, die HarmonyBreath täglich selbst nutzen. Wir prüfen jede Methode anhand aktueller wissenschaftlicher Studien auf Herz und Nieren.',
      disclaimer: 'Dieser Inhalt dient ausschließlich Bildungszwecken und ersetzt keine ärztliche Beratung.',
      learnMore: 'Mehr über unser Team erfahren',
    },
    faqsTitle: 'Häufig gestellte Fragen (FAQ)',
    faqsSubtitle: 'Wissenswertes rund um den Physiologischen Seufzer und zyklisches Seufzen',
    faqs: [
      {
        question: 'Was ist der Huberman psychologische Seufzer?',
        answer: 'Der physiologische Seufzer – oft auch psychologischer Seufzer genannt – ist eine hocheffektive Methode zum akuten Stressabbau, die durch den Neurowissenschaftler Dr. Andrew Huberman bekannt wurde. Er besteht aus zwei kurzen Einatmungen durch die Nase gefolgt von einer langen Ausatmung durch den Mund.',
      },
      {
        question: 'Funktioniert der physiologische Seufzer wirklich?',
        answer: 'Ja, klinische Studien bestätigen die Wirksamkeit. Eine Studie der Stanford University School of Medicine zeigte, dass 5 Minuten zyklisches Seufzen pro Tag Angstzustände verringert, Herzfrequenz und Atemfrequenz senkt und die Stimmung effektiver aufhellt als Meditation.',
      },
      {
        question: 'Wie viele physiologische Seufzer sollte man machen?',
        answer: 'Bei akutem Stress reichen bereits 1 bis 3 Seufzer aus, um das Nervensystem spürbar herunterzufahren. Für langfristige Stressresistenz und Stimmungsstabilität empfiehlt sich eine tägliche Praxis von 5 Minuten zyklischem Seufzen.',
      },
      {
        question: 'Warum atmet man zweimal hintereinander ein?',
        answer: 'Der zweite, kurze Zug öffnet kollabierte Lungenbläschen (Alveolen) wieder auf. Dadurch steht für das nachfolgende Ausatmen die maximale Lungenoberfläche zur Verfügung, um Kohlendioxid wirksam abzugeben.',
      },
      {
        question: 'Was ist der Unterschied zwischen physiologischem Seufzer und zyklischem Seufzen?',
        answer: 'Der physiologische Seufzer bezeichnet einen einzelnen Atemzugzyklus (doppeltes Einatmen, langes Ausatmen) für sofortige Beruhigung. Zyklisches Seufzen (Cyclic Sighing) bezeichnet die kontinuierliche Wiederholung dieser Sequenz über 3 bis 5 Minuten.',
      },
      {
        question: 'Ist der physiologische Seufzer sicher?',
        answer: 'Ja, es handelt sich um einen völlig natürlichen Reflex, den der Körper im Schlaf oder nach starkem Weinen automatisch ausführt. Führe die Züge ohne übermäßige Kraftanstrengung durch. Bei Schwindel kurz pausieren. Niemals am Steuer oder im Wasser praktizieren.',
      },
    ],
  },
  fr: {
    metaTitle: 'Soupir Physiologique et Soupir Cyclique: Guide et Minuteur',
    metaDescription: 'Pratiquez le Soupir Physiologique avec notre minuteur gratuit. Double inspiration et longue expiration pour un soulagement rapide validé par Stanford.',
    keywords: 'soupir physiologique, soupir cyclique, minuteur soupir physiologique, huberman respiration, double inspiration, exercices respiration stress, application respiration gratuite, etude stanford respiration',
    canonicalPath: '/fr/physiological-sigh/',
    badge: 'MOTEUR DE RÉINITIALISATION DU STRESS VALIDÉ PAR STANFORD',
    heroTitle: 'Soupir Physiologique\nRéinitialisation par Soupir Cyclique',
    heroSubtitle: 'Maîtrisez le Soupir Physiologique avec notre minuteur guidé gratuit. Double inspiration suivie d\'une longue expiration pour un soulagement rapide du stress d\'après les recherches de Stanford.',
    breadcrumbName: 'Soupir Physiologique',
    startPracticeBtn: 'Commencer la Séance',
    allTechniquesBtn: '← Toutes les Techniques',
    jumpLinks: {
      timer: 'Minuteur',
      presets: 'Modes',
      stats: 'Statistiques',
      about: 'À propos',
      faq: 'FAQ',
    },
    metaDetails: {
      freeBadge: '100% Gratuit et Privé',
      author: 'Par la Rédaction de HarmonyBreath',
      publishedDate: 'Publié le 25/07/2026',
      updatedDate: 'Mis à jour le 15/08/2026',
    },
    disclosure: {
      title: 'Recherche Scientifique & Note Éditoriale :',
      desc: 'Le contenu de cette page est issu d\'études cliniques revues par des pairs menées à l\'Université Stanford et de publications en neurophysiologie. Notre mission est d\'expliquer les mécanismes du soupir cyclique tout en offrant des outils interactifs gratuits.',
    },
    guide: {
      sectionTitle: 'Comprendre le Soupir Physiologique',
      sectionSubtitle: 'La science et la pratique de la respiration à double inspiration',
      whatIsTitle: 'Qu\'est-ce que le Soupir Physiologique ?',
      whatIsDesc1: 'Le soupir physiologique (popularisé par le neurobiologiste Dr Andrew Huberman et souvent nommé soupir psychologique) est un réflexe biologique inné que les humains et les animaux accomplissent spontanément pour évacuer l\'excès de dioxyde de carbone (CO2) et réduire la tension nerveuse.',
      whatIsDesc2: 'Contrairement aux techniques classiques, il suit une séquence précise : deux inspirations rapides par le nez suivies d\'une expiration lente et prolongée par la bouche. Réaliser seulement 1 à 3 cycles permet d\'abaisser immédiatement le rythme cardiaque et l\'excitation du système nerveux.',
      howToTitle: 'Comment Pratiquer le Soupir Physiologique',
      howToSteps: [
        {
          step: '1',
          title: 'Première Inspiration Profonde',
          desc: 'Inspirez profondément par le nez jusqu\'à remplir vos poumons à environ 80-90% de leur capacité.',
        },
        {
          step: '2',
          title: 'Deuxième Inspiration Courte',
          desc: 'Sans expirer, prenez une seconde inspiration brève et nette par le nez pour remplir totalement les poumons.',
        },
        {
          step: '3',
          title: 'Longue Expiration Soupirée',
          desc: 'Expirez lentement et complètement par la bouche en un long soupir relaxant, plus long que les deux inspirations combinées.',
        },
      ],
      physiologyTitle: 'La Physiologie de la Double Inspiration',
      physiologyDesc1: 'Les poumons abritent des centaines de millions d\'alvéoles microscopiques. Sous l\'effet du stress et d\'une respiration superficielle, ces alvéoles ont tendance à s\'affaisser (atélectasie). La deuxième inspiration courte rouvre ces sacs alvéolaires affaissés, décuplant ainsi la surface pulmonaire disponible.',
      physiologyDesc2: 'L\'expiration prolongée qui suit permet alors d\'éliminer le dioxyde de carbone (CO2) accumulé avec une efficacité maximale. Dans le même temps, elle stimule le nerf vague, ce qui ralentit la fréquence cardiaque et favorise un apaisement parasympathique instantané.',
      researchTitle: 'Preuves Scientifiques (Étude Stanford 2023)',
      researchDesc1: 'Un essai clinique randomisé majeur mené par l\'Université Stanford (Balban, Huberman et al., publié dans Cell Reports Medicine en 2023) a comparé 5 minutes quotidiennes de soupir cyclique, de respiration carrée et de méditation de pleine conscience pendant un mois.',
      researchHighlightsTitle: 'Conclusions Clés de l\'Étude de Stanford :',
      researchHighlights: [
        'Le soupir cyclique a entraîné une amélioration de l\'humeur quotidienne et des émotions positives supérieure à celle de la méditation.',
        'Pratiquer 5 minutes par jour a significativement diminué la fréquence respiratoire au repos au bout d\'un mois.',
        'Les exercices axés sur une expiration prolongée se sont révélés être le protocole le plus puissant pour atténuer l\'activation physiologique aiguë en temps réel.',
      ],
      benefitsTitle: 'Bénéfices Majeurs Démontrés',
      benefits: [
        {
          title: '1. Soulagement Immédiat du Stress',
          desc: 'Une courte session de 1 à 2 minutes calme le système sympathique avant une épreuve importante ou après une contrariété.',
        },
        {
          title: '2. Amélioration de l\'Humeur et Calme',
          desc: 'Une pratique quotidienne favorise un état d\'esprit serein, une humeur positive et une diminution de l\'anxiété de fond.',
        },
        {
          title: '3. Diminution du Rythme Respiratoire de Base',
          desc: 'Les expirations lentes répétées rééduquent l\'organisme vers une respiration basale plus ample, économique et apaisante.',
        },
        {
          title: '4. Optimisation des Échanges Gazeux',
          desc: 'Déploie les alvéoles fermées, maximise les surfaces d\'échange et accélère le déchargement du dioxyde de carbone.',
        },
      ],
      safetyTitle: 'Sécurité et Bonnes Pratiques',
      safetyTips: [
        'Geste de la deuxième inspiration : Prenez la seconde inspiration rapidement par le nez, mais sans crispation du cou ou de la cage thoracique.',
        'Écoutez votre corps : Si vous ressentez un léger étourdissement, cessez l\'exercice et reprenez votre respiration naturelle.',
        'Sécurité avant tout : Ne pratiquez jamais d\'exercices respiratoires au volant, dans l\'eau, sous la douche ou en manipulant des machines.',
        'Avertissement médical : La respiration guidée est une pratique de bien-être éducative. En cas de pathologie cardiaque ou respiratoire, demandez l\'avis d\'un médecin.',
      ],
      referencesTitle: 'Références Scientifiques et Publications Citées',
    },
    editorial: {
      title: 'Rédigé par l\'Équipe Éditoriale HarmonyBreath',
      desc: 'Ce guide a été conçu par notre équipe de passionnés de respiration et de rédacteurs santé, les mêmes qui conçoivent et utilisent les minuteurs HarmonyBreath au quotidien. Nous étudions méticuleusement les publications médicales pour chaque pratique.',
      disclaimer: 'Ce contenu est proposé à des fins purement éducatives et ne remplace en aucun cas un avis médical professionnel.',
      learnMore: 'En savoir plus sur notre équipe',
    },
    faqsTitle: 'Foire Aux Questions (FAQ)',
    faqsSubtitle: 'Tout ce que vous devez savoir sur le Soupir Physiologique et le Soupir Cyclique',
    faqs: [
      {
        question: 'Qu\'est-ce que le soupir psychologique de Huberman ?',
        answer: 'Le soupir physiologique — souvent désigné sous le terme de soupir psychologique — est un protocole de décompression rapide mis en lumière par le neurobiologiste Dr Andrew Huberman. Il consiste en deux inspirations rapides par le nez suivies d\'une longue expiration par la bouche pour abaisser immédiatement l\'activation du système nerveux.',
      },
      {
        question: 'Le soupir physiologique est-il réellement efficace ?',
        answer: 'Oui, les essais cliniques confirment son efficacité. Une étude de l\'École de Médecine de Stanford a prouvé que 5 minutes de soupirs cycliques par jour diminuent l\'anxiété, réduisent les fréquences cardiaque et respiratoire, et augmentent la bonne humeur plus vite que la méditation.',
      },
      {
        question: 'Combien de soupirs physiologiques faut-il faire ?',
        answer: 'Pour désamorcer un pic de stress aigu, faire 1 à 3 soupirs physiologiques consécutifs suffit à déclencher la détente vagale. Pour consolider la résilience au stress à long terme, pratiquez le soupir cyclique pendant 5 minutes par jour.',
      },
      {
        question: 'Pourquoi effectuer une double inspiration ?',
        answer: 'Le deuxième souffle bref rouvre instantanément les alvéoles pulmonaires collabées (affaissement partiel des alvéoles). Cela permet d\'exploiter l\'intégralité de la capacité pulmonaire pour évacuer un maximum de CO2 lors de l\'expiration suivante.',
      },
      {
        question: 'Quelle est la différence entre soupir physiologique et soupir cyclique ?',
        answer: 'Le soupir physiologique désigne une unité isolée (deux inspirations, une longue expiration) pour un apaisement immédiat. Le soupir cyclique (cyclic sighing) est la répétition rythmée de ce schéma pendant 3 à 5 minutes continues pour rééquilibrer le système nerveux en profondeur.',
      },
      {
        question: 'Le soupir physiologique est-il sans danger ?',
        answer: 'Oui, c\'est un mécanisme totalement physiologique et sans risque que le corps produit déjà spontanément durant le sommeil ou après des pleurs. Effectuez la seconde inspiration sans forcer. En cas de vertige, reprenez un rythme habituel. Ne jamais pratiquer en conduisant ou dans l\'eau.',
      },
    ],
  },
  pt: {
    metaTitle: 'Suspiro Fisiológico e Suspiro Cíclico: Guia e Temporizador',
    metaDescription: 'Domine o Suspiro Fisiológico com nosso temporizador guiado gratuito. Dupla inalação e expiração longa para alívio rápido comprovado por Stanford.',
    keywords: 'suspiro fisiologico, suspiro ciclico, temporizador suspiro fisiologico, suspiro huberman, respiracao dupla inalacao, exercicios respiratorios ansiedade, app de respiracao gratis, estudo stanford respiracao',
    canonicalPath: '/pt/physiological-sigh/',
    badge: 'SISTEMA DE REDUÇÃO RÁPIDA DE ESTRESSE COMPROVADO POR STANFORD',
    heroTitle: 'Suspiro Fisiológico\nReset por Suspiro Cíclico',
    heroSubtitle: 'Domine o Suspiro Fisiológico com nosso temporizador guiado gratuito. Dupla inalação seguida de uma longa expiração para alívio rápido do estresse comprovado pela Universidade de Stanford.',
    breadcrumbName: 'Suspiro Fisiológico',
    startPracticeBtn: 'Iniciar Prática',
    allTechniquesBtn: '← Todas as Técnicas',
    jumpLinks: {
      timer: 'Temporizador',
      presets: 'Modos',
      stats: 'Estatísticas',
      about: 'Sobre',
      faq: 'Perguntas',
    },
    metaDetails: {
      freeBadge: '100% Gratuito e Privado',
      author: 'Pela Equipe Editorial HarmonyBreath',
      publishedDate: 'Publicado em 25/07/2026',
      updatedDate: 'Atualizado em 15/08/2026',
    },
    disclosure: {
      title: 'Divulgação Científica e Editorial:',
      desc: 'O conteúdo desta página é fundamentado em ensaios clínicos revisados por pares realizados na Universidade de Stanford e literatura fisiológica. Nosso objetivo é explicar a neurobiologia do suspiro cíclico oferecendo ferramentas guiadas interativas gratuitas.',
    },
    guide: {
      sectionTitle: 'Compreendendo o Suspiro Fisiológico',
      sectionSubtitle: 'A ciência e a prática da respiração com dupla inalação',
      whatIsTitle: 'O que é o Suspiro Fisiológico?',
      whatIsDesc1: 'O suspiro fisiológico (popularizado pelo neurocientista Dr. Andrew Huberman e muitas vezes chamado de suspiro psicológico) é um reflexo biológico inato que seres humanos e animais realizam espontaneamente para descarregar o excesso de dióxido de carbono (CO2) e aliviar a tensão corporal.',
      whatIsDesc2: 'Ao contrário de técnicas de respiração tradicionais, baseia-se em uma cadência específica: duas inalações rápidas pelo nariz seguidas de uma expiração longa e vagarosa pela boca. Realizar apenas 1 a 3 ciclos reduz rapidamente os batimentos cardíacos e a hiperativação autonômica.',
      howToTitle: 'Como Fazer o Suspiro Fisiológico',
      howToSteps: [
        {
          step: '1',
          title: 'Inalação Profunda',
          desc: 'Inale profundamente pelo nariz, preenchendo os pulmões até quase a capacidade máxima.',
        },
        {
          step: '2',
          title: 'Segunda Inalação Curta ("Gole")',
          desc: 'Sem soltar o ar, dê uma segunda puxada rápida e firme de ar pelo nariz para encher os pulmões por completo.',
        },
        {
          step: '3',
          title: 'Longa Expiração Soltando o Ar',
          desc: 'Solte o ar devagar pela boca em um suspiro contínuo, fazendo a expiração durar mais que as duas inalações juntas.',
        },
      ],
      physiologyTitle: 'A Fisiologia por Trás da Dupla Inalação',
      physiologyDesc1: 'Os pulmões contêm centenas de milhões de sacos microscópicos de ar chamados alvéolos. Diante do estresse e da respiração superficial diária, esses pequenos sacos desinflam e colapsam (atelectasia). A segunda inalação rápida reabre esses alvéolos murchos, restaurando a área de superfície pulmonar.',
      physiologyDesc2: 'Na expiração longa subsequente, os alvéolos reabertos conseguem eliminar o dióxido de carbono (CO2) de forma significativamente mais eficiente. Paralelamente, o prolongamento do ar saindo estimula o nervo vago, ativando a resposta parassimpática de desaceleração cardíaca.',
      researchTitle: 'Evidências Científicas (Estudo de Stanford de 2023)',
      researchDesc1: 'Um ensaio clínico randomizado de 2023 da Universidade de Stanford (Balban, Huberman et al., Cell Reports Medicine) avaliou a prática diária de 5 minutos de suspiro cíclico, respiração quadrada e meditação mindfulness durante um mês.',
      researchHighlightsTitle: 'Principais Conclusões da Pesquisa de Stanford:',
      researchHighlights: [
        'O suspiro cíclico produziu melhorias no humor diário e no afeto positivo superiores às da meditação mindfulness.',
        'Praticar apenas 5 minutos ao dia resultou em reduções significativas na frequência respiratória em repouso após 30 dias.',
        'Exercícios focados em expirações prolongadas foram comprovados como o protocolo mais potente para reduzir a excitação fisiológica aguda em tempo real.',
      ],
      benefitsTitle: 'Principais Benefícios Comprovados',
      benefits: [
        {
          title: '1. Alívio Imediato da Tensão',
          desc: 'Uma sessão rápida de 1–2 minutos desarma a resposta de luta ou fuga antes de situações desafiadoras ou após momentos de tensão.',
        },
        {
          title: '2. Humor Positivo e Tranquilidade',
          desc: 'A prática diária estimula compostura mental, clareza e redução sustentada dos níveis subjetivos de ansiedade.',
        },
        {
          title: '3. Redução da Frequência Respiratória Basal',
          desc: 'O treino com expirações alongadas reeduca o sistema respiratório para um padrão habitual mais calmo e econômico.',
        },
        {
          title: '4. Troca Gasosa Pulmonar Otimizada',
          desc: 'Reinfla alvéolos colapsados, amplia a área de contato do oxigênio e acelera a eliminação de CO2 do sangue.',
        },
      ],
      safetyTitle: 'Segurança e Melhores Práticas',
      safetyTips: [
        'Técnica do segundo puxão: Puxe a segunda inalação pelo nariz de modo firme, porém sem tensionar os ombros ou o peito.',
        'Respeite seus limites: Se sentir tontura ou vertigem, interrompa o exercício e respire naturalmente.',
        'Segurança em primeiro lugar: Nunca faça exercícios respiratórios enquanto dirige, nada, toma banho ou opera maquinários.',
        'Aviso médico: O breathwork é uma prática integrativa de bem-estar. Consulte um médico caso possua histórico de doenças cardíacas ou pulmonares.',
      ],
      referencesTitle: 'Referências Científicas e Artigos Citados',
    },
    editorial: {
      title: 'Escrito pela Equipe Editorial HarmonyBreath',
      desc: 'Este guia foi desenvolvido por nossa equipe de praticantes de respiração e redatores de saúde, as mesmas pessoas que criam e utilizam os temporizadores HarmonyBreath no dia a dia. Pesquisamos cuidadosamente a literatura médica para cada técnica.',
      disclaimer: 'Este conteúdo destina-se exclusivamente a fins educacionais e não substitui a orientação médica profissional.',
      learnMore: 'Conheça mais sobre nossa equipe',
    },
    faqsTitle: 'Perguntas Frequentes',
    faqsSubtitle: 'Tudo o que você precisa saber sobre o Suspiro Fisiológico e o Suspiro Cíclico',
    faqs: [
      {
        question: 'O que é o suspiro psicológico de Huberman?',
        answer: 'O suspiro fisiológico — frequentemente chamado de suspiro psicológico — é um protocolo de descompressão rápida popularizado pelo neurocientista Dr. Andrew Huberman. Ele consiste em duas inalações rápidas pelo nariz seguidas de uma longa expiração pela boca para reduzir imediatamente a agitação do sistema nervoso.',
      },
      {
        question: 'O suspiro fisiológico realmente funciona?',
        answer: 'Sim, pesquisas clínicas confirmam sua eficácia. Um estudo da Faculdade de Medicina de Stanford demonstrou que praticar o suspiro cíclico por 5 minutos ao dia reduz a ansiedade, diminui os batimentos cardíacos e a frequência respiratória, e melhora o humor mais do que a meditação.',
      },
      {
        question: 'Quantos suspiros fisiológicos devo fazer?',
        answer: 'Para alívio rápido em picos de estresse agudo ou nervosismo, fazer de 1 a 3 suspiros fisiológicos é o bastante para ativar a resposta de calma do nervo vago. Para resiliência a longo prazo, pratique o suspiro cíclico por 5 minutos diariamente.',
      },
      {
        question: 'Por que é feita uma dupla inalação?',
        answer: 'A segunda inalação rápida reabre pequenos sacos de ar nos pulmões que costumam se fechar (alvéolos). Isso maximiza o volume pulmonar útil e permite que a expiração longa seguinte elimine uma quantidade muito maior de gás carbônico.',
      },
      {
        question: 'Qual a diferença entre suspiro fisiológico e suspiro cíclico?',
        answer: 'O suspiro fisiológico refere-se a um único ciclo respiratório (dupla inalação e longa expiração) para alívio pontual. Já o suspiro cíclico (cyclic sighing) consiste na repetição contínua desse padrão durante 3 a 5 minutos para condicionar o sistema nervoso.',
      },
      {
        question: 'O suspiro fisiológico é seguro?',
        answer: 'Sim, é um reflexo fisiológico perfeitamente seguro que nosso próprio organismo realiza sozinho enquanto dormimos ou após chorar. Faça a segunda inalação com tranquilidade sem forçar. Caso sinta tontura, retorne ao ritmo espontâneo. Nunca pratique dirigindo ou dentro da água.',
      },
    ],
  },
  ja: {
    metaTitle: '生理的ため息（サイクリック・サイ）無料タイマー＆科学的解説',
    metaDescription: 'スタンフォード大学医学部の研究に基づく「生理的ため息（サイクリック・サイ / Cyclic Sighing）」を無料の音声＆ビジュアルタイマーで実践。2回連続吸気と長時間の呼気で自律神経を即座に整え、ストレスを解消します。',
    keywords: '生理的ため息, サイクリック・サイ, サイクリックサイイング, 生理的ため息 タイマー, サイクリックサイ タイマー, ヒューバーマン 呼吸法, 2回吸う 呼吸法, ストレス解消 呼吸法, 自律神経 呼吸法, 無料 呼吸アプリ',
    canonicalPath: '/ja/physiological-sigh/',
    badge: 'スタンフォード大学研究に基づく急速ストレス緩和プロトコル',
    heroTitle: '生理的ため息\nサイクリック・サイイング・リセット',
    heroSubtitle: 'スタンフォード大学ヒューバーマン研究室の実証データに基づく「生理的ため息（サイクリック・サイ）」。2回の連続吸気と長い吐く息で、心拍数を速やかに下げ自律神経をリセットします。',
    breadcrumbName: '生理的ため息',
    startPracticeBtn: '練習を開始する',
    allTechniquesBtn: '← すべての呼吸法',
    jumpLinks: {
      timer: 'タイマー',
      presets: 'プリセット',
      stats: '統計',
      about: '概要',
      faq: 'FAQ',
    },
    metaDetails: {
      freeBadge: '完全無料・プライバシー重視',
      author: 'HarmonyBreath 編集部',
      publishedDate: '公開日: 2026-07-25',
      updatedDate: '更新日: 2026-09-24',
    },
    disclosure: {
      title: '科学的根拠と編集情報についての開示:',
      desc: '当ページのコンテンツは、スタンフォード大学などの査読付き医学論文および生理学研究データをもとに編纂されています。身体のメカニズムを正しく理解し、安全に実践できる無料タイマーを提供することを目的としています。',
    },
    guide: {
      sectionTitle: '生理的ため息（Physiological Sigh）のメカニズム',
      sectionSubtitle: '2段階吸気と呼気伸長がもたらす神経科学的根拠',
      whatIsTitle: '生理的ため息とは何か？',
      whatIsDesc1: '生理的ため息（サイクリック・サイとも呼ばれ、神経科学者アンドリュー・ヒューバーマン博士によって広められた呼吸法）は、人間や動物が体内に過剰に蓄積した二酸化炭素（CO2）を排出し、身体の緊張を解除するために本来無意識に行っている生体防御反射です。',
      whatIsDesc2: '一般的な深呼吸と異なり、「鼻から素早く2回続けて吸い、口からゆっくり長く吐き切る」という特殊なサイクルを用います。わずか1〜3回行うだけで、副交感神経が瞬時に活性化し、心拍数と血圧を速やかに低下させます。',
      howToTitle: '生理的ため息の正しい実践ステップ',
      howToSteps: [
        {
          step: '1',
          title: '深い1回目の吸気',
          desc: '鼻から深く息を吸い込み、肺の容量の約8割を満たします。',
        },
        {
          step: '2',
          title: '短く鋭い2回目の吸気（追い吸い）',
          desc: '息を吐き出さずに、もう一度鼻から「クッ」と短く息を吸い足して、肺を完全に膨らませます。',
        },
        {
          step: '3',
          title: '長く静かな呼気（ため息）',
          desc: '口から「ふぅーっ」と脱力するように、吸気時間の2倍以上の時間をかけてゆっくりと息を吐き切ります。',
        },
      ],
      physiologyTitle: 'なぜ「2回吸う」ことが劇的な効果を生むのか？',
      physiologyDesc1: 'ヒトの肺の奥には、酸素と二酸化炭素の交換を担う数億個の微細な空気の袋「肺胞（はいほう）」が存在します。ストレスや浅い呼吸が続くと、肺胞の一部が萎んで潰れてしまいます（無気肺状態）。限界まで吸った後にもう一度短く吸い足すことで、萎んだ肺胞が一気に押し広げられます。',
      physiologyDesc2: '肺胞が開いた状態で長い呼気を行うと、血中に溜まった過剰な二酸化炭素が効率よく排出されます。さらに、息を長く吐く動作が迷走神経を刺激し、心拍数を減速させる反射（呼吸性洞性不整脈）がダイレクトに発動します。',
      researchTitle: 'スタンフォード大学による臨床研究（2023年発表）',
      researchDesc1: 'スタンフォード大学医学部の研究チーム（Balban, Hubermanら、Cell Reports Medicine誌掲載）は、1日5分間の「サイクリック・サイイング（継続的な生理的ため息）」、マインドフルネス瞑想、ボックスブリージングの効果を1ヶ月間にわたり比較検証しました。',
      researchHighlightsTitle: 'スタンフォード大学臨床研究の主要な発見:',
      researchHighlights: [
        'サイクリック・サイイングは、マインドフルネス瞑想と比較して、日中の気分改善およびポジティブ感情の向上において有意に高い効果を示した。',
        '1日わずか5分間の継続で、1ヶ月後の安静時呼吸数が有意に低下し、日常的な自律神経の安定化が確認された。',
        '呼気（吐く息）を強調した呼吸プロトコルは、リアルタイムの急性の興奮やストレス反応を最も素早く抑制することが実証された。',
      ],
      benefitsTitle: '期待できる主な効果とメリット',
      benefits: [
        {
          title: '1. 即座のストレス・パニック鎮静',
          desc: '大事な場面の前や強いプレッシャーを感じた際、1〜2分で交感神経の過剰な興奮を鎮めます。',
        },
        {
          title: '2. 気分の向上と精神の安定',
          desc: '毎日の習慣にすることで、不安感が和らぎ、安定した穏やかな精神状態を保ちやすくなります。',
        },
        {
          title: '3. 安静時呼吸数の正常化',
          desc: '吐く息を長く保つ練習を重ねることで、日常の無意識な呼吸が深くなり、心肺機能の効率が向上します。',
        },
        {
          title: '4. 肺機能とガス交換効率の最適化',
          desc: '萎んだ肺胞を再拡張させ、肺全体の換気面積を回復させて血中二酸化炭素の排出を促進します。',
        },
      ],
      safetyTitle: '安全に行うための注意点',
      safetyTips: [
        '追い吸いのコツ: 2回目の吸気は無理に力まず、鼻から軽く空気を継ぎ足す感覚で行ってください。',
        '身体の感覚を最優先: めまいや違和感を覚えた場合は直ちに中断し、自然な呼吸に戻してください。',
        '安全な環境で実施: 車の運転中、入浴中、遊泳中、重機の操作中には絶対に行わないでください。',
        '医療に関する注意事項: 本呼吸法は健康増進を目的としたセルフケアです。呼吸器系や心疾患の持病がある方は医師にご相談ください。',
      ],
      referencesTitle: '参考文献・引用論文',
    },
    editorial: {
      title: 'HarmonyBreath 編集部について',
      desc: '本ガイドは、自ら呼吸法を日々実践しているウェルネスライターおよび呼吸指導チームによって執筆・監修されています。医学文献に基づいた正確で誠実な情報提供を徹底しています。',
      disclaimer: '当コンテンツは教育・情報提供を目的としており、医師による診断や治療の代わりとなるものではありません。',
      learnMore: '編集チームの詳細はこちら',
    },
    faqsTitle: 'よくある質問（FAQ）',
    faqsSubtitle: '生理的ため息とサイクリック・サイイングに関する疑問にお答えします',
    faqs: [
      {
        question: 'ヒューバーマン博士の「生理的ため息」とは何ですか？',
        answer: 'スタンフォード大学の神経科学者アンドリュー・ヒューバーマン博士が提唱・検証した急速ストレス解消法です。鼻から2回続けて吸い、口からゆっくり長く吐くことで、高ぶった神経系を最短で落ち着かせることができます。',
      },
      {
        question: '生理的ため息には本当に科学的効果がありますか？',
        answer: 'はい、確かなエビデンスが存在します。スタンフォード大学医学部の臨床試験において、1日5分間のサイクリック・サイイングが、一般的なマインドフルネス瞑想よりも効果的に不安を減らし、心拍数と呼吸数を落ち着かせ、気分を向上させることが実証されています。',
      },
      {
        question: '1回に何回くらい行うべきですか？',
        answer: '突発的な緊張やイライラ、パニック時には1〜3回行うだけで即効性のあるリラックス効果が得られます。日常的なストレス耐性の向上やメンタルの安定を目指す場合は、1日5分間のサイクリック・サイイングセッションが推奨されます。',
      },
      {
        question: 'なぜ2回連続で吸う必要があるのですか？',
        answer: '1回目の吸気で膨らみきらなかった肺の奥の微小な空気袋（肺胞）を、2回目の鋭い吸気によって完全に押し広げるためです。これにより肺の換気面積が最大化され、その後の吐く息で大量の二酸化炭素を効率的に排出できます。',
      },
      {
        question: '生理的ため息とサイクリック・サイイングの違いは何ですか？',
        answer: '「生理的ため息」は1回または数回の単発の呼吸動作を指し、その場の緊張緩和に用いられます。「サイクリック・サイイング」はこの呼吸パターンを3〜5分間リズミカルに繰り返すワークを指し、神経系全体の基礎コンディションを底上げします。',
      },
      {
        question: '生理的ため息は安全ですか？',
        answer: 'はい、人間が睡眠中や激しく泣いた後などに無意識に行っている極めて自然で安全な生体反応です。無理に力を入れすぎず、自然なリズムで行ってください。万が一ふらつきを感じた場合は中断しましょう。運転中や水中では絶対に行わないでください。',
      },
    ],
  },
  it: {
    metaTitle: 'Sospiro Fisiologico (Sospiro Ciclico): Timer Online e Benefici',
    metaDescription: 'Pratica il Sospiro Fisiologico con il nostro timer guidato online. Doppia inspirazione ed espirazione lunga per un rapido sollievo dallo stress.',
    keywords: 'sospiro fisiologico, sospiro ciclico, timer sospiro fisiologico, sospiro fisiologico timer online, sospiro huberman, respirazione doppia inspirazione, esercizi respirazione ansia, app respirazione gratis, studio stanford respirazione',
    canonicalPath: '/it/physiological-sigh/',
    badge: 'MOTORE DI RESET RAPIDO DELLO STRESS VALIDATO A STANFORD',
    heroTitle: 'Sospiro Fisiologico\nReset con Sospiro Ciclico',
    heroSubtitle: 'Padroneggia il Sospiro Fisiologico con il nostro timer guidato gratuito. Doppia inspirazione seguita da una lunga espirazione per un sollievo rapido dallo stress validato dalla Stanford University.',
    breadcrumbName: 'Sospiro Fisiologico',
    startPracticeBtn: 'Inizia Pratica',
    allTechniquesBtn: '← Tutte le Tecniche',
    jumpLinks: {
      timer: 'Timer',
      presets: 'Predefiniti',
      stats: 'Statistiche',
      about: 'Chi siamo',
      faq: 'FAQ',
    },
    metaDetails: {
      freeBadge: '100% Gratuito e Privato',
      author: 'A cura del Team Editoriale HarmonyBreath',
      publishedDate: 'Pubblicato il 25/07/2026',
      updatedDate: 'Aggiornato il 24/09/2026',
    },
    disclosure: {
      title: 'Ricerca Scientifica e Nota Editoriale:',
      desc: 'Il contenuto di questa pagina si basa su studi clinici peer-reviewed condotti presso la Stanford University e pubblicazioni di neurofisiologia. Il nostro scopo è illustrare i meccanismi biologici del sospiro ciclico offrendo strumenti guidati gratuiti e intuitivi.',
    },
    guide: {
      sectionTitle: 'Comprendere il Sospiro Fisiologico',
      sectionSubtitle: 'La scienza e la pratica della respirazione con doppia inspirazione',
      whatIsTitle: 'Cos\'è il Sospiro Fisiologico?',
      whatIsDesc1: 'Il sospiro fisiologico (reso celebre dal neuroscienziato Dr. Andrew Huberman e spesso chiamato sospiro psicologico) è un riflesso biologico ancestrale che umani e animali compiono spontaneamente per eliminare l\'eccesso di anidride carbonica (CO2) e sciogliere la tensione.',
      whatIsDesc2: 'A differenza delle tecniche ordinarie, si basa su una sequenza ben definita: due rapide inspirazioni dal naso seguite da una lunga ed estesa espirazione dalla bocca. Eseguire solo da 1 a 3 cicli permette di ridurre rapidamente i battiti cardiaci e l\'iperattività autonoma.',
      howToTitle: 'Come Eseguire il Sospiro Fisiologico',
      howToSteps: [
        {
          step: '1',
          title: 'Prima Inspirazione Profonda',
          desc: 'Inspira profondamente dal naso, riempiendo i polmoni a circa l\'80-90% della loro capienza.',
        },
        {
          step: '2',
          title: 'Seconda Inspirazione Breve ("Sorso")',
          desc: 'Senza espirare prima, prendi un secondo sorso d\'aria rapido e deciso dal naso per riempire totalmente i polmoni.',
        },
        {
          step: '3',
          title: 'Lunga Espirazione di Rilascio',
          desc: 'Espira lentamente e completamente dalla bocca con un sospiro distensivo, prolungando l\'espirazione più delle due inspirazioni sommate.',
        },
      ],
      physiologyTitle: 'La Fisiologia della Doppia Inspirazione',
      physiologyDesc1: 'I polmoni contengono centinaia di milioni di minuscoli sacchetti d\'aria chiamati alveoli. Con lo stress e la respirazione superficiale quotidiana, questi piccoli sacchi tendono a sgonfiarsi o collassare (atelettasia). Il secondo rapido respiro riapre gli alveoli chiusi, espandendo notevolmente la superficie respiratoria.',
      physiologyDesc2: 'Con la successiva espirazione prolungata, gli alveoli riaperti rilasciano l\'anidride carbonica (CO2) accumulata con la massima efficienza. Contemporaneamente, l\'espirazione lunga stimola il nervo vago, attivando il sistema parasimpatico e rallentando il ritmo cardiaco.',
      researchTitle: 'Evidenze Scientifiche (Studio Stanford 2023)',
      researchDesc1: 'Uno studio clinico randomizzato di riferimento condotto dalla Stanford University (Balban, Huberman et al., Cell Reports Medicine 2023) ha messo a confronto sessioni quotidiane di 5 minuti di sospiro ciclico, box breathing e meditazione mindfulness per un mese.',
      researchHighlightsTitle: 'Principali Risultati dello Studio di Stanford:',
      researchHighlights: [
        'Il sospiro ciclico ha prodotto miglioramenti dell\'umore quotidiano e degli stati emotivi positivi superiori rispetto alla meditazione mindfulness.',
        'La pratica di soli 5 minuti al giorno ha indotto riduzioni significative della frequenza respiratoria a riposo dopo 30 giorni.',
        'Il lavoro sul respiro con enfasi sull\'espirazione si è rivelato il metodo più efficace per calmare l\'attivazione fisiologica acuta in tempo reale.',
      ],
      benefitsTitle: 'Principali Benefici Dimostrati',
      benefits: [
        {
          title: '1. Sollievo Istantaneo dallo Stress',
          desc: 'Una breve sessione di 1–2 minuti disattiva l\'allerta del sistema simpatico prima di sfide impegnative o dopo momenti di forte tensione.',
        },
        {
          title: '2. Umore Migliore e Serenità Mentale',
          desc: 'La pratica quotidiana favorisce lucidità, equilibrio emotivo e un calo progressivo dell\'ansia percepita.',
        },
        {
          title: '3. Riduzione della Frequenza Respiratoria a Riposo',
          desc: 'L\'allenamento continuativo con espirazioni lente abitua il corpo a una respirazione basale più profonda, calma e salutare.',
        },
        {
          title: '4. Scambio Gassoso Polmonare Ottimale',
          desc: 'Riapre gli alveoli collassati, massimizza l\'ossigenazione cellulare e accelera la rimozione della CO2 nel sangue.',
        },
      ],
      safetyTitle: 'Sicurezza e Buone Pratiche',
      safetyTips: [
        'Tecnica del secondo respiro: Inspira il secondo sorso d\'aria dal naso con decisione, ma senza contrarre collo o spalle.',
        'Ascolta il tuo corpo: Se avverti leggeri capogiri o senso di vuoto, fermati e riprendi il tuo respiro spontaneo.',
        'La sicurezza prima di tutto: Non praticare mai esercizi di respirazione alla guida, in acqua, nella vasca o manovrando macchinari.',
        'Nota medica: Il breathwork è una pratica educativa di benessere. In caso di patologie cardiovascolari o respiratorie, consulta il medico curante.',
      ],
      referencesTitle: 'Riferimenti Scientifici e Pubblicazioni Citate',
    },
    editorial: {
      title: 'Scritto dal Team Editoriale HarmonyBreath',
      desc: 'Questa guida è stata realizzata dal nostro team interno di esperti di respirazione e divulgatori di benessere, che utilizzano ogni giorno i timer HarmonyBreath. Esaminiamo scrupolosamente la letteratura scientifica per ogni esercizio.',
      disclaimer: 'Questo contenuto ha scopo puramente informativo ed educativo e non sostituisce una consulenza medica professionale.',
      learnMore: 'Scopri di più sul nostro team',
    },
    faqsTitle: 'Domande Frequenti (FAQ)',
    faqsSubtitle: 'Tutto ciò che c\'è da sapere sul Sospiro Fisiologico e sul Sospiro Ciclico',
    faqs: [
      {
        question: 'Cos\'è il sospiro psicologico di Huberman?',
        answer: 'Il sospiro fisiologico — spesso denominato sospiro psicologico — è una tecnica rapida di riduzione dello stress divulgata dal neuroscienziato Dr. Andrew Huberman. Consiste in due inspirazioni dal naso seguite da una lunga espirazione dalla bocca per abbassare immediatamente l\'eccitazione del sistema nervoso.',
      },
      {
        question: 'Il sospiro fisiologico funziona davvero?',
        answer: 'Sì, le prove cliniche ne attestano pienamente l\'efficacia. Uno studio della Stanford University School of Medicine ha dimostrato che 5 minuti di respirazione ciclica al giorno riducono l\'ansia, rallentano frequenza cardiaca e respiratoria e migliorano l\'umore più della meditazione mindfulness.',
      },
      {
        question: 'Quanti sospiri fisiologici bisogna fare?',
        answer: 'Per calmare un picco acuto di tensione, ansia o panico, bastano da 1 a 3 sospiri fisiologici per innescare la risposta di rilassamento vagale. Per una resilienza costante nel tempo, si consiglia una sessione di sospiro ciclico di 5 minuti al giorno.',
      },
      {
        question: 'Perché si fa una doppia inspirazione?',
        answer: 'Il secondo sorso d\'aria rapido riapre gli alveoli polmonari parzialmente sgonfi o collassati. In questo modo si espande al massimo la superficie polmonare per espellere un volume maggiore di anidride carbonica durante la lunga espirazione successiva.',
      },
      {
        question: 'Che differenza c\'è tra sospiro fisiologico e sospiro ciclico?',
        answer: 'Il sospiro fisiologico indica un singolo schema respiratorio (due inspirazioni, una lunga espirazione) utile per calmarsi all\'istante. Il sospiro ciclico (cyclic sighing) è la ripetizione ritmica continuata di questo schema per 3-5 minuti come allenamento del sistema nervoso.',
      },
      {
        question: 'Il sospiro fisiologico è sicuro?',
        answer: 'Sì, è un riflesso naturale e sicuro che il nostro corpo compie automaticamente durante il sonno o dopo aver pianto. Esegui il secondo respiro con delicatezza e senza forzature. In caso di vertigini, fermati. Non praticare mai alla guida o immersi in acqua.',
      },
    ],
  },
};
