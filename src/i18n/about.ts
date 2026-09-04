import type { SupportedLanguage } from './ui';

export interface AboutTechniqueItem {
  id: string;
  slug: string;
  name: string;
  desc: string;
}

export interface AboutPrincipleItem {
  title: string;
  desc: string;
}

export interface AboutContent {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalPath: string;
  breadcrumbName: string;
  badge: string;
  title: string;
  subtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  offerTitle: string;
  offerIntro: string;
  techniques: AboutTechniqueItem[];
  principlesTitle: string;
  principles: AboutPrincipleItem[];
  teamTitle: string;
  teamParagraphs: string[];
}

export const aboutI18n: Record<SupportedLanguage, AboutContent> = {
  en: {
    metaTitle: 'About Us — HarmonyBreath',
    metaDescription: 'HarmonyBreath is a free, privacy-first breathwork platform. Learn about our mission to make breathing techniques accessible to everyone.',
    keywords: 'about HarmonyBreath, breathwork mission, privacy first breathwork, free breathing exercises, online breathing timers, conscious breathing platform, meditation technology',
    canonicalPath: '/about/',
    breadcrumbName: 'About',
    badge: 'Our Mission',
    title: 'About HarmonyBreath',
    subtitle: 'Making breathwork accessible, private, and free for everyone.',
    storyTitle: 'Our Story',
    storyParagraphs: [
      'HarmonyBreath was created with a simple vision: to provide a high-quality, well-crafted breathwork tool that respects your privacy. In a digital landscape where user data is often treated as a commodity, we set out to prove that a wellness platform can be both effective and completely private.',
      'We believe that conscious breathing is one of the most powerful tools available for improving mental and physical health. Yet most breathwork apps require accounts, collect data, or charge subscription fees. HarmonyBreath exists to remove those barriers.',
    ],
    offerTitle: 'What We Offer',
    offerIntro: 'HarmonyBreath is a curated platform featuring several well-known breathing techniques, each with dedicated guided timers and educational content:',
    techniques: [
      {
        id: 'wim-hof',
        slug: 'wim-hof',
        name: 'Wim Hof Method',
        desc: 'Energizing rhythmic breathing with breath retention holds.',
      },
      {
        id: 'box-breathing',
        slug: 'box-breathing',
        name: 'Box Breathing (4-4-4-4)',
        desc: 'Equal-cadence breathing for staying calm and composed.',
      },
      {
        id: '4-7-8',
        slug: '4-7-8-breathing',
        name: '4-7-8 Relaxing Breath',
        desc: 'Extended exhalation technique for relaxation and winding down.',
      },
      {
        id: 'diaphragmatic',
        slug: 'diaphragmatic-breathing',
        name: 'Diaphragmatic / Belly Breathing',
        desc: 'Deep abdominal breathing for grounding and relaxation.',
      },
      {
        id: 'nadi-shodhana',
        slug: 'nadi-shodhana',
        name: 'Nadi Shodhana',
        desc: 'Alternate nostril pranayama for balance and mental focus.',
      },
      {
        id: 'physiological-sigh',
        slug: 'physiological-sigh',
        name: 'Physiological Sigh',
        desc: 'Double inhale followed by an extended exhale for fast stress reset and mood regulation.',
      },
    ],
    principlesTitle: 'Our Principles',
    principles: [
      {
        title: 'Privacy by Design.',
        desc: 'Your practice stays on your device. No accounts, no tracking, no data collection. HarmonyBreath operates with a strict zero-data policy.',
      },
      {
        title: 'Technique-Faithful.',
        desc: 'Every technique on our platform follows its traditional, established pattern, so our guided sessions keep to the rhythm each practice is known for.',
      },
      {
        title: '100% Free.',
        desc: 'No subscriptions, no paywalls, no premium tiers. All techniques and features are available to everyone without charge, forever.',
      },
      {
        title: 'Open & Transparent.',
        desc: 'We believe in openness. Our approach is straightforward: build tools that help people breathe better, without hidden agendas.',
      },
    ],
    teamTitle: 'Our Team',
    teamParagraphs: [
      'HarmonyBreath is built by a small, independent team passionate about breathwork, meditation technology, and digital privacy. We are practitioners ourselves — we use HarmonyBreath daily and are committed to continuous improvement based on real user feedback.',
    ],
  },

  es: {
    metaTitle: 'Sobre Nosotros — HarmonyBreath',
    metaDescription: 'HarmonyBreath es una plataforma de respiración consciente gratuita y centrada en la privacidad. Conoce nuestra misión de hacer el breathwork accesible para todos.',
    keywords: 'sobre HarmonyBreath, plataforma de respiración consciente, ejercicios de respiración gratis, breathwork sin registro, temporizador de respiración privado, técnicas de pranayama, salud mental respiración',
    canonicalPath: '/es/about/',
    breadcrumbName: 'Nosotros',
    badge: 'Nuestra Misión',
    title: 'Sobre HarmonyBreath',
    subtitle: 'Haciendo que la respiración consciente sea accesible, privada y gratuita para todos.',
    storyTitle: 'Nuestra Historia',
    storyParagraphs: [
      'HarmonyBreath nació con una visión clara: brindar una herramienta de respiración consciente de alta calidad, cuidadosamente diseñada y que respete rigurosamente tu privacidad. En un ecosistema digital donde los datos personales se comercializan constantemente, decidimos demostrar que una plataforma de bienestar puede ser altamente efectiva y a la vez 100% privada.',
      'Creemos firmemente que la respiración consciente es uno de los recursos más poderosos para mejorar la salud física y mental. Sin embargo, la mayoría de las aplicaciones exigen registros, recopilan métricas personales o imponen costosas suscripciones. HarmonyBreath existe para derribar esas barreras.',
    ],
    offerTitle: 'Lo Que Ofrecemos',
    offerIntro: 'HarmonyBreath es una plataforma curada con las técnicas de respiración más reconocidas a nivel mundial, cada una con temporizadores guiados interactivos y guías educativas completas:',
    techniques: [
      {
        id: 'wim-hof',
        slug: 'wim-hof',
        name: 'Método Wim Hof',
        desc: 'Respiración rítmica energizante con retenciones prolongadas del aire.',
      },
      {
        id: 'box-breathing',
        slug: 'box-breathing',
        name: 'Respiración Cuadrada (4-4-4-4)',
        desc: 'Cadencia simétrica de cuatro fases para conservar el aplomo y la compostura.',
      },
      {
        id: '4-7-8',
        slug: '4-7-8-breathing',
        name: 'Respiración Relajante 4-7-8',
        desc: 'Técnica de exhalación prolongada ideal para inducir el descanso y calmar la mente.',
      },
      {
        id: 'diaphragmatic',
        slug: 'diaphragmatic-breathing',
        name: 'Respiración Diafragmática / Abdominal',
        desc: 'Respiración abdominal profunda para enraizamiento, calma y oxigenación óptima.',
      },
      {
        id: 'nadi-shodhana',
        slug: 'nadi-shodhana',
        name: 'Nadi Shodhana (Fosas Alternadas)',
        desc: 'Pranayama tradicional con respiración nasal alternada para el equilibrio y el foco mental.',
      },
      {
        id: 'physiological-sigh',
        slug: 'physiological-sigh',
        name: 'Suspiro Fisiológico',
        desc: 'Doble inhalación seguida de una exhalación profunda para reducir el estrés en segundos.',
      },
    ],
    principlesTitle: 'Nuestros Principios',
    principles: [
      {
        title: 'Privacidad por Diseño.',
        desc: 'Tu práctica permanece exclusivamente en tu dispositivo. Sin cuentas, sin rastreadores y sin recolección de datos. Operamos bajo una estricta política de cero datos.',
      },
      {
        title: 'Fidelidad a la Técnica.',
        desc: 'Cada método en nuestra plataforma respeta sus proporciones y cadencias originales comprobadas, asegurando sesiones auténticas y precisas.',
      },
      {
        title: '100% Gratuito.',
        desc: 'Sin suscripciones, sin muros de pago ni niveles premium. Todas las funciones y técnicas están a disposición de cualquier persona, sin costo alguno, para siempre.',
      },
      {
        title: 'Abierto y Transparente.',
        desc: 'Creemos en la honestidad. Nuestra única meta es crear herramientas sencillas y útiles que ayuden a las personas a respirar mejor, sin agendas ocultas.',
      },
    ],
    teamTitle: 'Nuestro Equipo',
    teamParagraphs: [
      'HarmonyBreath está creado por un equipo pequeño e independiente apasionado por la respiración consciente, la tecnología para la meditación y la privacidad digital. Somos practicantes diarios de estas técnicas y nos dedicamos a perfeccionar la plataforma continuamente basándonos en la experiencia real de los usuarios.',
    ],
  },

  de: {
    metaTitle: 'Über Uns — HarmonyBreath',
    metaDescription: 'HarmonyBreath ist eine kostenlose, datenschutzorientierte Plattform für Atemarbeit. Erfahre mehr über unsere Mission, Atemtechniken für alle zugänglich zu machen.',
    keywords: 'über HarmonyBreath, Atemübungen Plattform, kostenlose Atemarbeit, Privatsphäre Atem App, geführte Atemübungen, Pranayama online, Entspannung Atemtechnik',
    canonicalPath: '/de/about/',
    breadcrumbName: 'Über uns',
    badge: 'Unsere Mission',
    title: 'Über HarmonyBreath',
    subtitle: 'Atemarbeit zugänglich, privat und für jeden kostenlos gestalten.',
    storyTitle: 'Unsere Geschichte',
    storyParagraphs: [
      'HarmonyBreath entstand aus einer klaren Vision: ein erstklassiges, durchdachtes Werkzeug für bewusste Atemarbeit zu schaffen, das deine Privatsphäre bedingungslos respektiert. In einer digitalen Welt, in der Nutzerdaten allzu oft als Handelsware gelten, beweisen wir, dass eine Wellness-Plattform hochgradig wirksam und zugleich vollkommen privat sein kann.',
      'Wir sind überzeugt, dass bewusstes Atmen eines der stärksten Instrumente zur Förderung geistiger und körperlicher Gesundheit ist. Dennoch verlangen die meisten Apps Benutzerkonten, sammeln Tracking-Daten oder erheben teure Abo-Gebühren. HarmonyBreath existiert, um diese Hürden restlos zu beseitigen.',
    ],
    offerTitle: 'Was Wir Bieten',
    offerIntro: 'HarmonyBreath ist eine kuratierte Plattform mit renommierten Atemtechniken, jeweils begleitet von interaktiven Timern und fundierten Erklärungen:',
    techniques: [
      {
        id: 'wim-hof',
        slug: 'wim-hof',
        name: 'Wim-Hof-Methode',
        desc: 'Energetisierende Rhythmusatmung kombiniert mit Atemanhalten für Vitalität und Resilienz.',
      },
      {
        id: 'box-breathing',
        slug: 'box-breathing',
        name: 'Box Breathing (4-4-4-4)',
        desc: 'Gleichschenklige Vier-Phasen-Atmung für Ruhe, Fokus und taktische Gelassenheit.',
      },
      {
        id: '4-7-8',
        slug: '4-7-8-breathing',
        name: '4-7-8 Beruhigende Atmung',
        desc: 'Sanftes Muster mit langer Ausatmung zum Abschalten, Entspannen und besseren Einschlafen.',
      },
      {
        id: 'diaphragmatic',
        slug: 'diaphragmatic-breathing',
        name: 'Zwerchfell- & Bauchatmung',
        desc: 'Tiefe Bauchatmung für innere Erdung, Stressabbau und optimalen Gasaustausch.',
      },
      {
        id: 'nadi-shodhana',
        slug: 'nadi-shodhana',
        name: 'Nadi Shodhana (Wechselatmung)',
        desc: 'Traditionelles yogisches Pranayama im Wechsel der Nasenlöcher für geistige Balance.',
      },
      {
        id: 'physiological-sigh',
        slug: 'physiological-sigh',
        name: 'Physiologischer Seufzer',
        desc: 'Doppelte Einatmung mit verlängerter Ausatmung zur schnellen Senkung des Stresspegels.',
      },
    ],
    principlesTitle: 'Unsere Grundsätze',
    principles: [
      {
        title: 'Privacy by Design.',
        desc: 'Deine Praxis bleibt auf deinem Gerät. Keine Konten, kein Tracking, keine Datenerfassung. HarmonyBreath arbeitet mit einer strikten Zero-Data-Policy.',
      },
      {
        title: 'Techniktreue.',
        desc: 'Jede Methode folgt ihren traditionellen und wissenschaftlich etablierten Mustern, damit deine Sitzungen die beabsichtigte Wirkung präzise entfalten.',
      },
      {
        title: '100% Kostenlos.',
        desc: 'Keine Abonnements, keine Bezahlschranken, keine versteckten Premium-Pakete. Alle Übungen und Funktionen stehen jedem dauerhaft uneingeschränkt offen.',
      },
      {
        title: 'Offen & Transparent.',
        desc: 'Wir setzen auf Einfachheit und Klarheit. Unser Antrieb: Werkzeuge zu bauen, die Menschen dabei helfen, besser zu atmen — ganz ohne Hintergedanken.',
      },
    ],
    teamTitle: 'Unser Team',
    teamParagraphs: [
      'HarmonyBreath wird von einem kleinen, unabhängigen Team entwickelt, das sich für bewusste Atemarbeit, Meditationstechnologie und digitale Privatsphäre begeistert. Wir praktizieren diese Techniken selbst täglich und entwickeln die Plattform kontinuierlich auf Basis echten Nutzerfeedbacks weiter.',
    ],
  },

  fr: {
    metaTitle: 'À Propos de Nous — HarmonyBreath',
    metaDescription: 'HarmonyBreath est une plateforme de respiration guidée gratuite et respectueuse de la vie privée. Découvrez notre mission et nos engagements.',
    keywords: 'à propos de HarmonyBreath, plateforme respiration guidée, exercices de respiration gratuits, breathwork sans inscription, minuteur respiration privé, cohérence cardiaque, pranayama',
    canonicalPath: '/fr/about/',
    breadcrumbName: 'À propos',
    badge: 'Notre Mission',
    title: 'À Propos de HarmonyBreath',
    subtitle: 'Rendre la respiration consciente accessible, confidentielle et gratuite pour tous.',
    storyTitle: 'Notre Histoire',
    storyParagraphs: [
      'HarmonyBreath est né d’une vision simple : concevoir un outil de respiration guidée soigné, de haute qualité et respectueux de votre vie privée. Dans un monde numérique où les données personnelles sont exploitées à des fins commerciales, nous avons choisi de prouver qu’une plateforme de bien-être peut être à la fois remarquablement efficace et entièrement confidentielle.',
      'Nous sommes convaincus que la respiration consciente constitue l’un des moyens les plus puissants pour améliorer la santé physique et mentale. Pourtant, la plupart des applications imposent des inscriptions, collectent des données ou facturent des abonnements récurrents. HarmonyBreath a été conçu pour éliminer ces contraintes.',
    ],
    offerTitle: 'Ce Que Nous Proposons',
    offerIntro: 'HarmonyBreath réunit une sélection rigoureuse des méthodes de respiration les plus reconnues, chacune dotée de minuteurs guidés et de guides pédagogiques approfondis :',
    techniques: [
      {
        id: 'wim-hof',
        slug: 'wim-hof',
        name: 'Méthode Wim Hof',
        desc: 'Respiration rythmée énergisante accompagnée de phases de rétention poumons vides.',
      },
      {
        id: 'box-breathing',
        slug: 'box-breathing',
        name: 'Respiration Carrée (4-4-4-4)',
        desc: 'Cadence égale en quatre phases pour instaurer le calme et préserver le sang-froid.',
      },
      {
        id: '4-7-8',
        slug: '4-7-8-breathing',
        name: 'Respiration Relaxante 4-7-8',
        desc: 'Technique d’expiration allongée pour apaiser le système nerveux et préparer le sommeil.',
      },
      {
        id: 'diaphragmatic',
        slug: 'diaphragmatic-breathing',
        name: 'Respiration Diaphragmatique / Ventrale',
        desc: 'Respiration abdominale profonde favorisant l’ancrage et une oxygénation naturelle.',
      },
      {
        id: 'nadi-shodhana',
        slug: 'nadi-shodhana',
        name: 'Nadi Shodhana (Respiration Alternée)',
        desc: 'Pranayama ancestral alternant les narines pour harmoniser l’esprit et aiguiser la concentration.',
      },
      {
        id: 'physiological-sigh',
        slug: 'physiological-sigh',
        name: 'Soupir Physiologique',
        desc: 'Double inspiration suivie d’une longue expiration pour un soulagement instantané du stress.',
      },
    ],
    principlesTitle: 'Nos Principes',
    principles: [
      {
        title: 'Confidentialité Dès la Conception.',
        desc: 'Votre pratique reste exclusivement sur votre appareil. Aucun compte, aucun traçage, aucune collecte de données. HarmonyBreath applique une politique zéro donnée absolue.',
      },
      {
        title: 'Fidélité aux Techniques.',
        desc: 'Chaque exercice reproduit fidèlement ses rythmes traditionnels et scientifiquement établis pour garantir des séances justes et bénéfiques.',
      },
      {
        title: '100% Gratuit.',
        desc: 'Aucun abonnement, aucun contenu payant ni formule premium. L’intégralité de nos fonctionnalités reste accessible à tous sans frais, pour toujours.',
      },
      {
        title: 'Ouvert & Transparent.',
        desc: 'Nous croyons en une approche directe : développer des outils clairs et bienveillants qui vous aident à mieux respirer, sans intentions cachées.',
      },
    ],
    teamTitle: 'Notre Équipe',
    teamParagraphs: [
      'HarmonyBreath est développé par une petite équipe indépendante et passionnée par le souffle, la méditation et la protection des libertés numériques. Nous pratiquons nous-mêmes ces exercices chaque jour et nous attachons à faire évoluer la plateforme à partir des retours authentiques de nos utilisateurs.',
    ],
  },

  pt: {
    metaTitle: 'Sobre Nós — HarmonyBreath',
    metaDescription: 'O HarmonyBreath é uma plataforma de respiração consciente gratuita e com foco total na privacidade. Conheça nossa missão e nossos valores.',
    keywords: 'sobre o HarmonyBreath, plataforma de respiração consciente, exercícios de respiração gratuitos, breathwork sem cadastro, temporizador de respiração privado, pranayama, foco e calma',
    canonicalPath: '/pt/about/',
    breadcrumbName: 'Sobre',
    badge: 'Nossa Missão',
    title: 'Sobre o HarmonyBreath',
    subtitle: 'Tornando a respiração consciente acessível, privada e gratuita para todas as pessoas.',
    storyTitle: 'Nossa História',
    storyParagraphs: [
      'O HarmonyBreath nasceu com um propósito bem definido: disponibilizar uma ferramenta de respiração consciente refinada, intuitiva e que respeite integralmente sua privacidade. Em um ambiente digital no qual informações pessoais são tratadas como mercadoria, decidimos provar que uma plataforma de bem-estar pode aliar máxima eficácia à privacidade irrestrita.',
      'Acreditamos que a respiração consciente é uma das ferramentas mais potentes para equilibrar a mente e fortalecer a saúde física. No entanto, a grande maioria dos aplicativos exige cadastros, monitora hábitos ou impõe mensalidades recorrentes. O HarmonyBreath existe para superar essas barreiras.',
    ],
    offerTitle: 'O Que Oferecemos',
    offerIntro: 'O HarmonyBreath reúne uma seleção criteriosa das técnicas respiratórias mais consagradas, cada uma equipada com cronômetros visuais guiados e orientações educativas detalhadas:',
    techniques: [
      {
        id: 'wim-hof',
        slug: 'wim-hof',
        name: 'Método Wim Hof',
        desc: 'Respiração rítmica intensa acompanhada de retenções prolongadas do ar.',
      },
      {
        id: 'box-breathing',
        slug: 'box-breathing',
        name: 'Respiração Quadrada (4-4-4-4)',
        desc: 'Quatro fases simétricas para resgatar o equilíbrio emocional e o foco.',
      },
      {
        id: '4-7-8',
        slug: '4-7-8-breathing',
        name: 'Respiração Relaxante 4-7-8',
        desc: 'Padrão com expiração estendida ideal para relaxar o corpo e induzir o sono.',
      },
      {
        id: 'diaphragmatic',
        slug: 'diaphragmatic-breathing',
        name: 'Respiração Diafragmática / Abdominal',
        desc: 'Respiração lenta pela barriga para ancoragem, serenidade e renovação do ar.',
      },
      {
        id: 'nadi-shodhana',
        slug: 'nadi-shodhana',
        name: 'Nadi Shodhana (Respiração Pelas Narinas)',
        desc: 'Pranayama tradicional com respiração alternada para harmonia mental e clareza.',
      },
      {
        id: 'physiological-sigh',
        slug: 'physiological-sigh',
        name: 'Suspiro Fisiológico',
        desc: 'Dupla inspiração com expiração prolongada para desarmar o estresse imediatamente.',
      },
    ],
    principlesTitle: 'Nossos Princípios',
    principles: [
      {
        title: 'Privacidade por Princípio.',
        desc: 'Sua prática não sai do seu navegador. Sem contas, sem rastreamento e sem coleta de dados. Operamos com rígida política de dados zero.',
      },
      {
        title: 'Fidelidade às Técnicas.',
        desc: 'Cada prática adota rigorosamente as proporções e cadências originais já estabelecidas, garantindo sessões seguras e autênticas.',
      },
      {
        title: '100% Gratuito.',
        desc: 'Sem assinaturas, sem cobranças futuras nem recursos bloqueados. Todas as técnicas estão livres e disponíveis a qualquer momento.',
      },
      {
        title: 'Aberto & Transparente.',
        desc: 'Valorizamos a clareza e a simplicidade: construímos soluções úteis para você respirar com mais qualidade, sem interesses ocultos.',
      },
    ],
    teamTitle: 'Nossa Equipe',
    teamParagraphs: [
      'O HarmonyBreath é mantido por uma equipe pequena e independente dedicada ao estudo do breathwork, da meditação e da privacidade digital. Usamos essas práticas no nosso próprio cotidiano e aprimoramos o projeto constantemente com base na vivência de quem respira conosco.',
    ],
  },

  ja: {
    metaTitle: '私たちについて — HarmonyBreath',
    metaDescription: 'HarmonyBreath は完全無料・プライバシー最優先の呼吸法トレーニングプラットフォームです。すべての人のための呼吸法のミッションをご紹介します。',
    keywords: 'HarmonyBreathについて, 呼吸法 プラットフォーム, 無料 呼吸トレーニング, プライバシー重視 呼吸アプリ, マインドフルネス呼吸, 自律神経 呼吸法, ヴィムホフ ボックス呼吸',
    canonicalPath: '/ja/about/',
    breadcrumbName: '概要',
    badge: '私たちの使命',
    title: 'HarmonyBreath について',
    subtitle: 'だれでも安心・安全に、完全無料で呼吸法を実践できる世界を目指して。',
    storyTitle: '私たちのストーリー',
    storyParagraphs: [
      'HarmonyBreath は、「個人のプライバシーを完全に尊重した、洗練された高品質な呼吸法ツールを提供する」という強い想いから誕生しました。個人データの収集や商業利用が当たり前となった現代において、私たちは完全なプライバシーと優れたウェルネス体験が両立できることを証明したいと考えました。',
      '意識的な呼吸は、心身の健康と精神の平静を取り戻すためのもっとも力強い自己調整法です。しかし既存の多くのアプリは、アカウント登録の強制、ユーザー追跡、高額な定期購読（サブスクリプション）を求めます。HarmonyBreath はそうした障壁をすべて取り払うために作られました。',
    ],
    offerTitle: '提供している呼吸法',
    offerIntro: 'HarmonyBreath は、世界的に信頼されている代表的な呼吸法を厳選し、専用のビジュアルタイマーと解説ガイドを提供しています：',
    techniques: [
      {
        id: 'wim-hof',
        slug: 'wim-hof',
        name: 'ヴィム・ホフ法',
        desc: '力強い連続呼吸と息止め（リテンション）を組み合わせた活力・回復力アップ法。',
      },
      {
        id: 'box-breathing',
        slug: 'box-breathing',
        name: 'ボックス呼吸法 (4-4-4-4)',
        desc: '吸気・静止・呼気・静止を均等に行い、極度の緊張下でも冷静さを取り戻す呼吸。',
      },
      {
        id: '4-7-8',
        slug: '4-7-8-breathing',
        name: '4-7-8 リラックス呼吸法',
        desc: '呼気を長くとることで副交感神経を刺激し、入眠や深い休息を導く呼吸法。',
      },
      {
        id: 'diaphragmatic',
        slug: 'diaphragmatic-breathing',
        name: '腹式呼吸・横隔膜呼吸',
        desc: 'お腹を大きく使って酸素を全身に行き渡らせる、自然で安定した基本呼吸。',
      },
      {
        id: 'nadi-shodhana',
        slug: 'nadi-shodhana',
        name: 'ナディ・ショーダナ（片鼻呼吸法）',
        desc: '左右の鼻孔を交互に使う伝統的なプラーナヤーマで、心身の調和を整えます。',
      },
      {
        id: 'physiological-sigh',
        slug: 'physiological-sigh',
        name: '生理学的ため息（サイコフィジカル・サイ）',
        desc: '二重吸気と長い呼気により、自律神経の興奮を数分でリセットする科学的手法。',
      },
    ],
    principlesTitle: '私たちが大切にする原則',
    principles: [
      {
        title: 'プライバシー・バイ・デザイン',
        desc: '練習データはあなたの端末内にのみ保持されます。登録不要、追跡なし、データ収集ゼロポリシーを徹底しています。',
      },
      {
        title: 'オリジナルへの忠実性',
        desc: '各呼吸法が持つ本来の秒数比率やリズムを忠実に再現し、正しく安全な練習環境を提供します。',
      },
      {
        title: '永久に完全無料',
        desc: 'サブスクリプションも有料課金も一切ありません。すべての機能が、いつでも誰でも無料で利用できます。',
      },
      {
        title: 'オープン＆透明性',
        desc: '裏側の意図や隠し事は一切ありません。「人々がより良く呼吸できるツールを作る」という純粋な目的で運営しています。',
      },
    ],
    teamTitle: '運営チームについて',
    teamParagraphs: [
      'HarmonyBreath は、呼吸法、瞑想テクノロジー、そしてデジタルプライバシーの保護に情熱を注ぐ少人数の独立チームによって開発・運営されています。私たち自身も日々の実践者であり、ユーザーの皆さまの声に耳を傾けながら、継続的な改善を重ねています。',
    ],
  },

  it: {
    metaTitle: 'Chi Siamo — HarmonyBreath',
    metaDescription: 'HarmonyBreath è una piattaforma di respirazione consapevole gratuita e rispettosa della privacy. Scopri la nostra missione per rendere il respiro accessibile a tutti.',
    keywords: 'chi siamo HarmonyBreath, piattaforma breathwork, esercizi di respirazione gratis, respirazione consapevole senza registrazione, timer respirazione privato, pranayama, benessere mentale',
    canonicalPath: '/it/about/',
    breadcrumbName: 'Chi siamo',
    badge: 'La Nostra Missione',
    title: 'Chi siamo — HarmonyBreath',
    subtitle: 'Rendere la respirazione consapevole accessibile, privata e gratuita per chiunque.',
    storyTitle: 'La Nostra Storia',
    storyParagraphs: [
      'HarmonyBreath nasce da una visione trasparente: offrire uno strumento per il respiro consapevole raffinato, impeccabile e rigorosamente rispettoso della privacy. In un’epoca in cui i dati personali vengono costantemente mercificati, abbiamo voluto dimostrare che una piattaforma per il benessere può essere incredibilmente efficace e al tempo stesso totalmente privata.',
      'Siamo convinti che la respirazione consapevole sia una delle risorse più straordinarie per migliorare la salute fisica e l’equilibrio mentale. Tuttavia, la maggior parte delle applicazioni impone registrazioni, monitora le abitudini o richiede costosi abbonamenti. HarmonyBreath è nata per abbattere ognuna di queste barriere.',
    ],
    offerTitle: 'Cosa Offriamo',
    offerIntro: 'HarmonyBreath mette a disposizione una selezione delle tecniche di respirazione più efficaci e riconosciute a livello internazionale, ciascuna dotata di timer interattivi dedicati e approfondimenti pratici:',
    techniques: [
      {
        id: 'wim-hof',
        slug: 'wim-hof',
        name: 'Metodo Wim Hof',
        desc: 'Respirazione ritmica potente con apnee a polmoni vuoti per sviluppare energia e resilienza.',
      },
      {
        id: 'box-breathing',
        slug: 'box-breathing',
        name: 'Box Breathing (Respirazione Quadrata)',
        desc: 'Quattro fasi di uguale durata per ritrovare concentrazione, lucidità e calma interiore.',
      },
      {
        id: '4-7-8',
        slug: '4-7-8-breathing',
        name: 'Respirazione Rilassante 4-7-8',
        desc: 'Espirazione distesa e prolungata per calmare il sistema nervoso e favorire il sonno profondo.',
      },
      {
        id: 'diaphragmatic',
        slug: 'diaphragmatic-breathing',
        name: 'Respirazione Diaframmatica / Addominale',
        desc: 'Respiro addominale profondo per radicamento, distensione muscolare e ossigenazione completa.',
      },
      {
        id: 'nadi-shodhana',
        slug: 'nadi-shodhana',
        name: 'Nadi Shodhana (A Narici Alternate)',
        desc: 'Pranayama classico a narici alternate per riequilibrare mente ed emisferi cerebrali.',
      },
      {
        id: 'physiological-sigh',
        slug: 'physiological-sigh',
        name: 'Sospiro Fisiologico',
        desc: 'Doppia inspirazione con espirazione lenta per azzerare lo stress in pochi respiri.',
      },
    ],
    principlesTitle: 'I Nostri Principi',
    principles: [
      {
        title: 'Privacy by Design.',
        desc: 'La tua pratica resta custodita nel tuo dispositivo. Nessun account, nessun tracciamento e zero raccolta dati. Applichiamo una rigorosa politica no-data.',
      },
      {
        title: 'Fedeltà alle Tecniche.',
        desc: 'Ogni pratica mantiene i tempi e i rapporti codificati dalla tradizione e dalla scienza, garantendo sessioni autentiche ed equilibrate.',
      },
      {
        title: '100% Gratuito.',
        desc: 'Niente abbonamenti, niente paywall né opzioni a pagamento. Ogni funzionalità è libera e fruibile da chiunque senza spendere un centesimo, per sempre.',
      },
      {
        title: 'Aperto & Trasparente.',
        desc: 'Crediamo nella chiarezza: costruiamo strumenti puliti per aiutarti a respirare meglio giorno dopo giorno, senza secondi fini.',
      },
    ],
    teamTitle: 'Il Nostro Team',
    teamParagraphs: [
      'HarmonyBreath è sviluppato da un piccolo team indipendente appassionato di respirazione consapevole, tecnologia per la meditazione e tutela della privacy digitale. Siamo noi stessi praticanti quotidiani e perfezioniamo la piattaforma con cura costante basandoci sulle esperienze reali di chi la utilizza.',
    ],
  },
};
