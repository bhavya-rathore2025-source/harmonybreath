import type { SupportedLanguage } from './ui';

export interface QuoteItem {
  quote: string;
  author: string;
}

export interface QuotesContent {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  breadcrumbName: string;
  badge: string;
  titleBefore: string;
  titleHighlight: string;
  subtitle: string;
  quotes: QuoteItem[];
  shareTitle: string;
  shareDescBeforeEmail: string;
  shareEmail: string;
  shareDescAfterEmail: string;
}

export const quotesI18n: Record<SupportedLanguage, QuotesContent> = {
  en: {
    metaTitle: 'Quotes for Motivation & Peace — HarmonyBreath',
    metaDescription: 'A curated collection of motivational quotes for peace, calm, resilience, and mindfulness. Read, reflect, and share words that inspire inner stillness.',
    keywords: 'motivational quotes, peace quotes, calm quotes, mindfulness quotes, inspiration, breathwork quotes, inner peace',
    breadcrumbName: 'Quotes',
    badge: 'Words of Wisdom',
    titleBefore: 'Quotes for ',
    titleHighlight: 'Motivation & Peace',
    subtitle: 'A growing collection of words that inspire calm, resilience, and inner stillness.',
    quotes: [
      {
        quote: 'Nothing can bring you peace but yourself.',
        author: 'Ralph Waldo Emerson',
      },
      {
        quote: 'The greatest weapon against stress is our ability to choose one thought over another.',
        author: 'William James',
      },
      {
        quote: 'Smile, breathe and go slowly.',
        author: 'Thich Nhat Hanh',
      },
      {
        quote: 'You have power over your mind - not outside events. Realize this, and you will find strength.',
        author: 'Marcus Aurelius',
      },
      {
        quote: 'Silence is a source of great strength.',
        author: 'Lao Tzu',
      },
      {
        quote: "You can't stop the waves, but you can learn to surf.",
        author: 'Jon Kabat-Zinn',
      },
    ],
    shareTitle: 'Share a Quote',
    shareDescBeforeEmail: 'Have a quote that brings you peace? Send your quote to ',
    shareEmail: 'happyharmonybreath@gmail.com',
    shareDescAfterEmail: ", along with the author's name (or your own).",
  },
  es: {
    metaTitle: 'Frases para la Motivación y la Paz — HarmonyBreath',
    metaDescription: 'Colección de frases inspiradoras sobre la paz, la serenidad, la resiliencia y la atención plena. Reflexiona y comparte citas para cultivar la calma interior.',
    keywords: 'frases de motivacion, frases de paz, frases de serenidad, citas de mindfulness, frases de tranquilidad, inspiracion para respirar, paz interior',
    breadcrumbName: 'Frases de Paz',
    badge: 'Palabras de Sabiduría',
    titleBefore: 'Frases para la ',
    titleHighlight: 'Motivación y la Paz',
    subtitle: 'Una colección en crecimiento de reflexiones que inspiran calma, resiliencia y serenidad interior.',
    quotes: [
      {
        quote: 'Nada puede traerte paz sino tú mismo.',
        author: 'Ralph Waldo Emerson',
      },
      {
        quote: 'La mejor arma contra el estrés es nuestra habilidad para elegir un pensamiento sobre otro.',
        author: 'William James',
      },
      {
        quote: 'Sonríe, respira y ve despacio.',
        author: 'Thich Nhat Hanh',
      },
      {
        quote: 'Tienes poder sobre tu mente, no sobre los acontecimientos externos. Comprende esto y encontrarás la fuerza.',
        author: 'Marco Aurelio',
      },
      {
        quote: 'El silencio es una fuente de gran fuerza.',
        author: 'Lao-Tsé',
      },
      {
        quote: 'No puedes detener las olas, pero puedes aprender a surfear.',
        author: 'Jon Kabat-Zinn',
      },
    ],
    shareTitle: 'Comparte una Frase',
    shareDescBeforeEmail: '¿Tienes una cita que te transmite paz? Envíanos tu propuesta a ',
    shareEmail: 'happyharmonybreath@gmail.com',
    shareDescAfterEmail: ', indicando el nombre del autor (o el tuyo propio).',
  },
  de: {
    metaTitle: 'Zitate für Motivation & inneren Frieden — HarmonyBreath',
    metaDescription: 'Eine kuratierte Sammlung inspirierender Zitate über Gelassenheit, Achtsamkeit und Seelenfrieden. Finde Ruhe und Inspiration für deine Atempraxis.',
    keywords: 'zitate motivation, zitate innerer frieden, achtsamkeit sprueche, gelassenheit zitate, ruhe und entspannung zitate, atemuebung weisheiten',
    breadcrumbName: 'Zitate',
    badge: 'Worte der Weisheit',
    titleBefore: 'Zitate für ',
    titleHighlight: 'Motivation & Frieden',
    subtitle: 'Eine wachsende Sammlung von Worten, die Ruhe, Resilienz und innere Einkehr schenken.',
    quotes: [
      {
        quote: 'Nichts kann dir Frieden bringen außer dir selbst.',
        author: 'Ralph Waldo Emerson',
      },
      {
        quote: 'Die stärkste Waffe gegen den Stress ist unsere Fähigkeit, einen Gedanken einem anderen vorzuziehen.',
        author: 'William James',
      },
      {
        quote: 'Lächle, atme und gehe langsam.',
        author: 'Thich Nhat Hanh',
      },
      {
        quote: 'Du hast Macht über deinen Geist – nicht über äußere Ereignisse. Erkenne dies, und du wirst Stärke finden.',
        author: 'Marc Aurel',
      },
      {
        quote: 'Stille ist eine Quelle großer Kraft.',
        author: 'Laotse',
      },
      {
        quote: 'Du kannst die Wellen nicht aufhalten, aber du kannst lernen zu surfen.',
        author: 'Jon Kabat-Zinn',
      },
    ],
    shareTitle: 'Teile ein Zitat',
    shareDescBeforeEmail: 'Kennst du ein Zitat, das dir Gelassenheit schenkt? Sende deinen Vorschlag an ',
    shareEmail: 'happyharmonybreath@gmail.com',
    shareDescAfterEmail: ', zusammen mit dem Namen des Verfassers (oder deinem eigenen).',
  },
  fr: {
    metaTitle: 'Citations pour la Motivation et la Paix — HarmonyBreath',
    metaDescription: 'Une sélection de citations inspirantes sur la paix intérieure, le calme, la résilience et la pleine conscience. Méditez et partagez ces paroles de sagesse.',
    keywords: 'citations motivation, citations paix interieure, pensees positives calme, pleine conscience citations, serenite esprit, respiration consciente citations',
    breadcrumbName: 'Citations',
    badge: 'Paroles de Sagesse',
    titleBefore: 'Citations pour la ',
    titleHighlight: 'Motivation et la Paix',
    subtitle: 'Un recueil de paroles inspirantes qui cultivent le calme, la force d’âme et la quiétude intérieure.',
    quotes: [
      {
        quote: "Rien ne peut vous apporter la paix si ce n'est vous-même.",
        author: 'Ralph Waldo Emerson',
      },
      {
        quote: 'La meilleure arme contre le stress est notre capacité à choisir une pensée plutôt qu’une autre.',
        author: 'William James',
      },
      {
        quote: 'Souriez, respirez et allez lentement.',
        author: 'Thich Nhat Hanh',
      },
      {
        quote: 'Vous avez du pouvoir sur votre esprit, pas sur les événements extérieurs. Comprenez cela, et vous trouverez la force.',
        author: 'Marc Aurèle',
      },
      {
        quote: 'Le silence est une source de grande force.',
        author: 'Lao Tseu',
      },
      {
        quote: 'Vous ne pouvez pas arrêter les vagues, mais vous pouvez apprendre à surfer.',
        author: 'Jon Kabat-Zinn',
      },
    ],
    shareTitle: 'Partager une Citation',
    shareDescBeforeEmail: 'Vous avez une citation inspirante qui vous apaise ? Envoyez-la à ',
    shareEmail: 'happyharmonybreath@gmail.com',
    shareDescAfterEmail: ', accompagnée du nom de son auteur (ou du vôtre).',
  },
  pt: {
    metaTitle: 'Frases para Motivação e Paz — HarmonyBreath',
    metaDescription: 'Uma coleção de frases inspiradoras sobre paz interior, tranquilidade, resiliência e mindfulness. Palavras sábias para acalmar a mente e respirar com presença.',
    keywords: 'frases de motivacao, frases de paz, frases de tranquilidade, mindfulness frases, resiliencia meditacao, sabedoria respiracao consciente',
    breadcrumbName: 'Frases de Paz',
    badge: 'Palavras de Sabedoria',
    titleBefore: 'Frases para ',
    titleHighlight: 'Motivação e Paz',
    subtitle: 'Uma seleção de reflexões que inspiram serenidade, resiliência e quietude interior.',
    quotes: [
      {
        quote: 'Nada pode lhe trazer paz além de você mesmo.',
        author: 'Ralph Waldo Emerson',
      },
      {
        quote: 'A maior arma contra o estresse é a nossa capacidade de escolher um pensamento em vez de outro.',
        author: 'William James',
      },
      {
        quote: 'Sorria, respire e vá devagar.',
        author: 'Thich Nhat Hanh',
      },
      {
        quote: 'Você tem poder sobre a sua mente, não sobre os acontecimentos externos. Compreenda isso e encontrará força.',
        author: 'Marco Aurélio',
      },
      {
        quote: 'O silêncio é uma fonte de grande força.',
        author: 'Lao Tsé',
      },
      {
        quote: 'Você não pode parar as ondas, mas pode aprender a surfar.',
        author: 'Jon Kabat-Zinn',
      },
    ],
    shareTitle: 'Compartilhe uma Frase',
    shareDescBeforeEmail: 'Tem uma frase que lhe traz serenidade? Envie sua sugestão para ',
    shareEmail: 'happyharmonybreath@gmail.com',
    shareDescAfterEmail: ', junto com o nome do autor (ou o seu próprio).',
  },
  ja: {
    metaTitle: 'モチベーションと心の平安のための名言 — HarmonyBreath',
    metaDescription: '心に静けさ、落ち着き、回復力をもたらす珠玉の名言集。マインドフルネスと呼吸の合間に、内なる平穏を育む言葉をお届けします。',
    keywords: '心に響く名言, モチベーション 言葉, 心の平安 名言, マインドフルネス 格言, 癒しの言葉, ストレス解消 名言, 呼吸法 哲学',
    breadcrumbName: '名言集',
    badge: '知恵の言葉',
    titleBefore: '心を満たす ',
    titleHighlight: 'モチベーションと平安の名言',
    subtitle: '内なる静寂、しなやかな強さ、そして穏やかな心を呼び覚ます言葉のコレクション。',
    quotes: [
      {
        quote: 'あなた自身以外に、あなたに真の平安をもたらすものは存在しない。',
        author: 'ラルフ・ワルド・エマーソン',
      },
      {
        quote: 'ストレスに対抗する最大の武器は、一つの考えの代わりに別の考えを選ぶ力である。',
        author: 'ウィリアム・ジェームズ',
      },
      {
        quote: '微笑みなさい、呼吸しなさい、そしてゆっくり進みなさい。',
        author: 'ティク・ナット・ハン',
      },
      {
        quote: 'あなたがコントロールできるのは己の心だけであり、外の出来事ではない。それを悟れば、大いなる強さが見つかる。',
        author: 'マルクス・アウレリウス',
      },
      {
        quote: '静けさこそが、大いなる力の源泉泉である。',
        author: '老子',
      },
      {
        quote: '押し寄せる波を止めることはできないが、波に乗る術を学ぶことはできる。',
        author: 'ジョン・カバット・ジン',
      },
    ],
    shareTitle: '心に残る名言をシェアする',
    shareDescBeforeEmail: 'あなたに心の平穏を与えてくれるお気に入りの言葉はありますか？ 著者名（またはあなたのお名前）を添えて ',
    shareEmail: 'happyharmonybreath@gmail.com',
    shareDescAfterEmail: ' までお気軽にお送りください。',
  },
  it: {
    metaTitle: 'Citazioni per Motivazione e Pace — HarmonyBreath',
    metaDescription: 'Una raccolta curata di citazioni motivazionali per la pace interiore, la calma, la resilienza e la consapevolezza. Parole che ispirano serenità.',
    keywords: 'citazioni motivazionali, frasi pace interiore, aforismi calma, consapevolezza frasi, serenita mentale, meditazione citazioni, respiro consapevole',
    breadcrumbName: 'Citazioni',
    badge: 'Perle di Saggezza',
    titleBefore: 'Citazioni per ',
    titleHighlight: 'Motivazione e Pace',
    subtitle: 'Una raccolta preziosa di pensieri che ispirano calma, resilienza e quiete interiore.',
    quotes: [
      {
        quote: 'Niente può portarti la pace se non te stesso.',
        author: 'Ralph Waldo Emerson',
      },
      {
        quote: "L'arma più grande contro lo stress è la nostra capacità di scegliere un pensiero piuttosto che un altro.",
        author: 'William James',
      },
      {
        quote: 'Sorridi, respira e vai piano.',
        author: 'Thich Nhat Hanh',
      },
      {
        quote: 'Hai potere sulla tua mente, non sugli eventi esterni. Comprendi questo e troverai la forza.',
        author: 'Marco Aurelio',
      },
      {
        quote: 'Il silenzio è una fonte di grande forza.',
        author: 'Lao Tzu',
      },
      {
        quote: 'Non puoi fermare le onde, ma puoi imparare a fare surf.',
        author: 'Jon Kabat-Zinn',
      },
    ],
    shareTitle: 'Condividi una Citazione',
    shareDescBeforeEmail: 'C’è una citazione che ti dona serenità? Invia la tua proposta a ',
    shareEmail: 'happyharmonybreath@gmail.com',
    shareDescAfterEmail: ", specificando il nome dell'autore (o il tuo).",
  },
};
