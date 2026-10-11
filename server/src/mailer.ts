import nodemailer from 'nodemailer';

export type Lang = 'fr' | 'ar' | 'en' | 'es';
export const LANGS: Lang[] = ['fr', 'ar', 'en', 'es'];

export interface Mail {
  to: string;
  subject: string;
  text: string;
}

export interface Mailer {
  send(mail: Mail): Promise<void>;
}

/** Development: the message is written to the log instead of being sent. */
export const logMailer = (log: (line: string) => void): Mailer => ({
  send: async (mail) => log(`[mail] to=${mail.to} subject="${mail.subject}"\n${mail.text}`),
});

/** Production: SMTP, for example smtps://user:password@smtp.example.com:465 */
export function smtpMailer(url: string, from: string): Mailer {
  const transport = nodemailer.createTransport(url);
  return {
    send: async (mail) => {
      await transport.sendMail({ from, ...mail });
    },
  };
}

const RESET: Record<Lang, (code: string) => Omit<Mail, 'to'>> = {
  fr: (code) => ({
    subject: 'Toki Quest : ton code pour changer de mot de passe',
    text: `Bonjour,\n\nVoici ton code : ${code}\n\nSaisis-le dans l’application dans les 30 minutes pour choisir un nouveau mot de passe.\n\nSi tu n’as rien demandé, ignore ce message : ton mot de passe reste inchangé.\n\nToki et l’équipe Toki Quest`,
  }),
  ar: (code) => ({
    subject: 'Toki Quest: رمز تغيير كلمة المرور',
    text: `مرحبًا،\n\nهذا هو رمزك: ${code}\n\nأدخله في التطبيق خلال 30 دقيقة لاختيار كلمة مرور جديدة.\n\nإن لم تطلب ذلك، فتجاهل هذه الرسالة: تبقى كلمة مرورك كما هي.\n\nتوكي وفريق Toki Quest`,
  }),
  en: (code) => ({
    subject: 'Toki Quest: your code to change your password',
    text: `Hello,\n\nHere is your code: ${code}\n\nEnter it in the app within 30 minutes to choose a new password.\n\nIf you did not ask for this, ignore this message: your password stays the same.\n\nToki and the Toki Quest team`,
  }),
  es: (code) => ({
    subject: 'Toki Quest: tu código para cambiar la contraseña',
    text: `Hola:\n\nEste es tu código: ${code}\n\nEscríbelo en la aplicación en los próximos 30 minutos para elegir una contraseña nueva.\n\nSi no lo pediste, ignora este mensaje: tu contraseña no cambia.\n\nToki y el equipo de Toki Quest`,
  }),
};

export const resetMail = (to: string, lang: Lang, code: string): Mail => ({ to, ...RESET[lang](code) });
