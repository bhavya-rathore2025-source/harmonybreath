import type { SupportedLanguage } from './ui';

export interface SubjectOptions {
  general: string;
  feedback: string;
  bug: string;
  feature: string;
  privacy: string;
  other: string;
}

export interface ContactContent {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalPath: string;
  breadcrumbName: string;
  badge: string;
  title: string;
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  subjectOptions: SubjectOptions;
  messageLabel: string;
  messagePlaceholder: string;
  submitBtn: string;
  disclaimer: string;
  reachTitle: string;
  emailAddress: string;
  responseNotice: string;
}

export const contactI18n: Record<SupportedLanguage, ContactContent> = {
  en: {
    metaTitle: 'Contact Us — HarmonyBreath',
    metaDescription: 'Get in touch with the HarmonyBreath team. Reach out with questions, feedback, or suggestions about our free breathwork platform.',
    keywords: 'contact HarmonyBreath, breathwork feedback, breathing app support, contact team, wellness questions, breathwork questions',
    canonicalPath: '/contact/',
    breadcrumbName: 'Contact',
    badge: 'Get in Touch',
    title: 'Contact Us',
    subtitle: "Have a question, suggestion, or feedback? We'd love to hear from you.",
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'Select a subject',
    subjectOptions: {
      general: 'General Inquiry',
      feedback: 'Feedback & Suggestions',
      bug: 'Bug Report',
      feature: 'Feature Request',
      privacy: 'Privacy Question',
      other: 'Other',
    },
    messageLabel: 'Message',
    messagePlaceholder: 'Write your message here...',
    submitBtn: 'Send Message',
    disclaimer: 'This form uses Formspree. Your message will be sent securely. No data is stored on our servers.',
    reachTitle: 'Other Ways to Reach Us',
    emailAddress: 'happyharmonybreath@gmail.com',
    responseNotice: 'We aim to respond within 48 hours during business days.',
  },
  es: {
    metaTitle: 'Contacto — HarmonyBreath',
    metaDescription: 'Ponte en contacto con el equipo de HarmonyBreath. Escríbenos con preguntas, sugerencias o comentarios sobre nuestra plataforma de respiración.',
    keywords: 'contacto HarmonyBreath, soporte respiración consciente, preguntas ejercicios de respiración, sugerencias aplicación respiración',
    canonicalPath: '/es/contact/',
    breadcrumbName: 'Contacto',
    badge: 'Ponte en Contacto',
    title: 'Contáctanos',
    subtitle: '¿Tienes alguna pregunta, sugerencia o comentario? Nos encantaría saber de ti.',
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'tu@correo.com',
    subjectLabel: 'Asunto',
    subjectPlaceholder: 'Selecciona un asunto',
    subjectOptions: {
      general: 'Consulta general',
      feedback: 'Comentarios y sugerencias',
      bug: 'Reporte de error',
      feature: 'Solicitud de función',
      privacy: 'Pregunta de privacidad',
      other: 'Otro',
    },
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Escribe tu mensaje aquí...',
    submitBtn: 'Enviar mensaje',
    disclaimer: 'Este formulario utiliza Formspree. Tu mensaje se enviará de forma segura. No se almacenan datos en nuestros servidores.',
    reachTitle: 'Otras formas de contactarnos',
    emailAddress: 'happyharmonybreath@gmail.com',
    responseNotice: 'Nuestro objetivo es responder dentro de las 48 horas en días laborables.',
  },
  de: {
    metaTitle: 'Kontakt — HarmonyBreath',
    metaDescription: 'Nehmen Sie Kontakt mit dem HarmonyBreath-Team auf. Kontaktieren Sie uns bei Fragen, Feedback oder Vorschlägen zu unserer Atemarbeitsplattform.',
    keywords: 'Kontakt HarmonyBreath, Atemübungen Feedback, Atem App Support, Fragen zu Atemtechniken, Kundensupport',
    canonicalPath: '/de/contact/',
    breadcrumbName: 'Kontakt',
    badge: 'Kontakt Aufnehmen',
    title: 'Kontaktieren Sie uns',
    subtitle: 'Haben Sie Fragen, Anregungen oder Feedback? Wir freuen uns, von Ihnen zu hören.',
    nameLabel: 'Name',
    namePlaceholder: 'Ihr Name',
    emailLabel: 'E-Mail',
    emailPlaceholder: 'ihre@email.de',
    subjectLabel: 'Betreff',
    subjectPlaceholder: 'Wählen Sie einen Betreff',
    subjectOptions: {
      general: 'Allgemeine Anfrage',
      feedback: 'Feedback & Vorschläge',
      bug: 'Fehlerbericht',
      feature: 'Funktionsanfrage',
      privacy: 'Datenschutzfrage',
      other: 'Sonstiges',
    },
    messageLabel: 'Nachricht',
    messagePlaceholder: 'Schreiben Sie Ihre Nachricht hier...',
    submitBtn: 'Nachricht senden',
    disclaimer: 'Dieses Formular verwendet Formspree. Ihre Nachricht wird sicher übertragen. Es werden keine Daten auf unseren Servern gespeichert.',
    reachTitle: 'Weitere Kontaktmöglichkeiten',
    emailAddress: 'happyharmonybreath@gmail.com',
    responseNotice: 'Wir bemühen uns, an Werktagen innerhalb von 48 Stunden zu antworten.',
  },
  fr: {
    metaTitle: 'Contact — HarmonyBreath',
    metaDescription: "Contactez l'équipe d'HarmonyBreath. Écrivez-nous pour toute question, suggestion ou retour sur notre plateforme de respiration consciente.",
    keywords: 'contact HarmonyBreath, support respiration guidée, questions exercices respiratoires, avis application respiration',
    canonicalPath: '/fr/contact/',
    breadcrumbName: 'Contact',
    badge: 'Prendre Contact',
    title: 'Contactez-nous',
    subtitle: 'Vous avez une question, une suggestion ou un retour ? Nous serions ravis de vous lire.',
    nameLabel: 'Nom',
    namePlaceholder: 'Votre nom',
    emailLabel: 'E-mail',
    emailPlaceholder: 'votre@email.fr',
    subjectLabel: 'Sujet',
    subjectPlaceholder: 'Sélectionnez un sujet',
    subjectOptions: {
      general: 'Demande générale',
      feedback: 'Retours & suggestions',
      bug: 'Signalement de bug',
      feature: 'Demande de fonctionnalité',
      privacy: 'Question sur la confidentialité',
      other: 'Autre',
    },
    messageLabel: 'Message',
    messagePlaceholder: 'Écrivez votre message ici...',
    submitBtn: 'Envoyer le message',
    disclaimer: 'Ce formulaire utilise Formspree. Votre message est transmis de manière sécurisée. Aucune donnée n’est stockée sur nos serveurs.',
    reachTitle: 'Autres moyens de nous contacter',
    emailAddress: 'happyharmonybreath@gmail.com',
    responseNotice: 'Nous nous efforçons de répondre sous 48 heures les jours ouvrés.',
  },
  pt: {
    metaTitle: 'Contato — HarmonyBreath',
    metaDescription: 'Entre em contato com a equipe do HarmonyBreath. Envie dúvidas, sugestões ou feedbacks sobre nossa plataforma gratuita de respiração.',
    keywords: 'contato HarmonyBreath, suporte exercícios de respiração, dúvidas respiração guiada, feedback aplicativo respiração',
    canonicalPath: '/pt/contact/',
    breadcrumbName: 'Contato',
    badge: 'Entre em Contato',
    title: 'Fale Conosco',
    subtitle: 'Tem alguma dúvida, sugestão ou feedback? Adoraríamos ouvir você.',
    nameLabel: 'Nome',
    namePlaceholder: 'Seu nome',
    emailLabel: 'E-mail',
    emailPlaceholder: 'seu@email.com',
    subjectLabel: 'Assunto',
    subjectPlaceholder: 'Selecione um assunto',
    subjectOptions: {
      general: 'Dúvida geral',
      feedback: 'Feedback e sugestões',
      bug: 'Relato de problema',
      feature: 'Sugestão de recurso',
      privacy: 'Dúvida sobre privacidade',
      other: 'Outro',
    },
    messageLabel: 'Mensagem',
    messagePlaceholder: 'Escreva sua mensagem aqui...',
    submitBtn: 'Enviar mensagem',
    disclaimer: 'Este formulário utiliza Formspree. Sua mensagem será enviada com segurança. Nenhum dado é armazenado em nossos servidores.',
    reachTitle: 'Outras formas de nos contatar',
    emailAddress: 'happyharmonybreath@gmail.com',
    responseNotice: 'Buscamos responder em até 48 horas durante dias úteis.',
  },
  ja: {
    metaTitle: 'お問い合わせ — HarmonyBreath',
    metaDescription: 'HarmonyBreathチームへのお問い合わせ。無料の呼吸法プラットフォームに関するご質問、ご意見、フィードバックをお寄せください。' ,
    keywords: 'HarmonyBreath お問い合わせ, 呼吸法 サポート, マインドフルネス 質問, 呼吸アプリ フィードバック',
    canonicalPath: '/ja/contact/',
    breadcrumbName: 'お問い合わせ',
    badge: 'お問い合わせ',
    title: 'お問い合わせ',
    subtitle: 'ご質問、ご提案、フィードバックなどがございましたら、お気軽にお寄せください。',
    nameLabel: 'お名前',
    namePlaceholder: 'お名前を入力してください',
    emailLabel: 'メールアドレス',
    emailPlaceholder: 'your@email.com',
    subjectLabel: '件名',
    subjectPlaceholder: '件名を選択してください',
    subjectOptions: {
      general: '一般的なお問い合わせ',
      feedback: 'ご意見・ご感想',
      bug: '不具合のご報告',
      feature: '機能のリクエスト',
      privacy: 'プライバシーに関するご質問',
      other: 'その他',
    },
    messageLabel: 'メッセージ',
    messagePlaceholder: 'メッセージを入力してください...',
    submitBtn: '送信する',
    disclaimer: 'このフォームはFormspreeを利用しています。メッセージは安全に送信され、当サーバーにデータが保存されることはありません。',
    reachTitle: 'その他の連絡方法',
    emailAddress: 'happyharmonybreath@gmail.com',
    responseNotice: '営業日基準で48時間以内の返答を心がけております。',
  },
  it: {
    metaTitle: 'Contatti — HarmonyBreath',
    metaDescription: 'Mettiti in contatto con il team di HarmonyBreath. Scrivici per domande, suggerimenti o feedback sulla nostra piattaforma di respirazione.',
    keywords: 'contatti HarmonyBreath, supporto respirazione consapevole, domande esercizi di respirazione, feedback app respirazione',
    canonicalPath: '/it/contact/',
    breadcrumbName: 'Contatti',
    badge: 'Mettiti in Contatto',
    title: 'Contattaci',
    subtitle: 'Hai una domanda, un suggerimento o un feedback? Ci farebbe molto piacere ascoltarti.',
    nameLabel: 'Nome',
    namePlaceholder: 'Il tuo nome',
    emailLabel: 'E-mail',
    emailPlaceholder: 'tua@email.it',
    subjectLabel: 'Oggetto',
    subjectPlaceholder: 'Seleziona un oggetto',
    subjectOptions: {
      general: 'Richiesta generale',
      feedback: 'Feedback e suggerimenti',
      bug: 'Segnalazione di errore',
      feature: 'Richiesta di funzionalità',
      privacy: 'Domanda sulla privacy',
      other: 'Altro',
    },
    messageLabel: 'Messaggio',
    messagePlaceholder: 'Scrivi qui il tuo messaggio...',
    submitBtn: 'Invia messaggio',
    disclaimer: 'Questo modulo utilizza Formspree. Il tuo messaggio verrà inviato in modo sicuro. Nessun dato viene memorizzato sui nostri server.',
    reachTitle: 'Altri modi per contattarci',
    emailAddress: 'happyharmonybreath@gmail.com',
    responseNotice: 'Ci impegniamo a rispondere entro 48 ore nei giorni lavorativi.',
  },
};
