import type { LegalTexts } from './types';

/** English translation; the French version prevails. */
export const en: LegalTexts = {
  privacy: (f) => ({
    title: 'Privacy policy',
    sections: [
      {
        title: 'In short',
        body: [
          '• Without an account, everything stays on your device: nothing is sent to our servers.',
          '• With an account, our server keeps only your e-mail, your year of birth and your plan.',
          '• Your voice is never recorded by the app nor sent to our servers.',
          '• No advertising, no trackers, no sale of data.',
        ],
      },
      { title: 'Who is responsible', body: [`Toki Quest is published by ${f('name')} (${f('address')}). For any question about your data: ${f('privacyEmail')}.`] },
      {
        title: 'What stays on your device',
        body: [
          'Your first name, your goal, your placement results, your progress, your answers, your words to review, your speaking results (the recognized text and the scores) and your settings are stored only on your device. They are erased if you delete the app or reset your data in the Profile.',
        ],
      },
      {
        title: 'The microphone and speech recognition',
        body: [
          'The microphone is used only during speaking exercises, and only if you agreed. Speech recognition is done by your device: Apple on iPhone and iPad, Google on Android, or your browser on the web. Depending on the device, this service may process your voice on its own servers, under its own rules.',
          'Toki Quest never keeps the recording and never sends it to its servers. It keeps only the recognized text and your scores, on your device. You can withdraw your agreement at any time in the Speaking screen: your speaking results are then erased.',
        ],
      },
      {
        title: 'If you create an account',
        body: [
          'The account is optional. It lets you find your plan again on another device. Our server keeps:',
          '• your e-mail address and your password, stored in an irreversible encrypted form (we do not know it);',
          '• your year of birth and, if you are 13 to 15, the date of your parent’s agreement;',
          '• the app language, to write to you in your language;',
          '• the signed-in devices (device type, sign-in dates), at most three at a time;',
          '• your plan and purchases (transaction identifier, amount, currency, status).',
          'Your progress is not sent to the server.',
        ],
      },
      {
        title: 'Access offered by a training partner',
        body: [
          'If you are enrolled with a partner training organization, it sends us your e-mail, your first name (optional), the status of your enrolment and its end date. These data are used only to open the full plan when you create an account with the same e-mail. We send it no data about your use of the app.',
        ],
      },
      {
        title: 'Payments',
        body: [
          'In the app, payment is made through the App Store (Apple) or Google Play. For a payment made outside the app in Tunisia, the provider is Konnect. We never see your bank details: we only receive the confirmation of the purchase.',
        ],
      },
      {
        title: 'Why, and on what basis',
        body: [
          '• Providing the account, the plan and purchases: performance of the contract.',
          '• Using the microphone: your consent, which you can withdraw.',
          '• Protecting the service (attempt limits, technical logs): our legitimate interest.',
          '• Keeping purchase records: our accounting obligations.',
        ],
      },
      {
        title: 'Who receives your data',
        body: [
          `Only the providers the service needs: the server host (${f('host')}), the e-mail delivery service (${f('mailProvider')}), and Apple, Google and Konnect for payments. They act on our behalf, or under their own terms for payments. We do not sell or rent any data, and the app contains neither advertising nor audience measurement.`,
        ],
      },
      {
        title: 'How long',
        body: [
          '• Account: until it is deleted, or after 3 years without use, unless a full plan is in force.',
          '• Signed-out devices: 90 days. Password codes: 1 day.',
          '• Log of exchanges with the training partner: 90 days.',
          '• Purchases: 10 years, for accounting obligations.',
          '• Server technical logs (including the IP address): 30 days at most.',
        ],
      },
      {
        title: 'Security',
        body: [
          'Exchanges are encrypted (HTTPS). Passwords and sign-in tokens are stored in an irreversible encrypted form. On your phone, the sign-in token is kept in the system’s secure keychain.',
        ],
      },
      {
        title: 'Younger users',
        body: [
          'You must be at least 13 to create an account, and a parent or legal guardian must agree between 13 and 15. Under 13, the app is used without an account: nothing then leaves the device. A child under 15 should use the microphone only with a parent’s agreement.',
        ],
      },
      {
        title: 'Your rights',
        body: [
          `You can access your data, correct it, erase it, object to its processing, restrict its use and get a copy of it. You can delete your account yourself in the Profile (Delete my account). For anything else, write to ${f('privacyEmail')}.`,
          `You can also contact the Tunisian data protection authority (INPDP) or, if you live in the European Union, the authority of your country. INPDP declaration: ${f('inpdpNumber')}.`,
        ],
      },
      { title: 'Where your data are', body: [`The server is hosted by ${f('host')}. If data are processed outside Tunisia or the European Union, it is with the safeguards required by law.`] },
      { title: 'Changes', body: ['If this policy changes, the new version is published here with its date, and you are told in the app about any important change.'] },
    ],
  }),

  terms: (f) => ({
    title: 'Terms of use and sale',
    sections: [
      {
        title: 'Purpose',
        body: [
          `These terms govern the use of the Toki Quest app, published by ${f('name')}, and the purchase of the full plan. By creating an account or buying the full plan, you accept them. If you are under 15, your parent or legal guardian must accept them with you.`,
        ],
      },
      {
        title: 'The service',
        body: [
          'Toki Quest helps you prepare for the TOEIC® Listening & Reading and TOEIC® Speaking tests: placement test, exercise path, practice tests, vocabulary and speaking.',
          'Toki Quest is an independent app. It is neither affiliated with nor endorsed by ETS. TOEIC® is a registered trademark of ETS (Educational Testing Service). The scores and levels shown are estimates: they do not guarantee any result at the official test.',
        ],
      },
      { title: 'Free trial', body: ['The free trial, with no time limit, includes the placement test, the express practice test, 4 units chosen for your level and one set of speaking exercises. The rest of the content is reserved for the full plan.'] },
      {
        title: 'Full plan',
        body: [
          'The full plan opens all the content of the app. It is a one-time payment, with no subscription or renewal. It is personal and gives access to the content for as long as the service exists.',
          'In the app, it is bought through the App Store or Google Play in-app purchase, at the price shown by the store at the time of purchase. Payment, invoice and any refund are handled by the store under its terms. “Restore my purchases” finds a purchase again on a new device.',
          'Access obtained outside the app (through a training partner, or by a purchase made elsewhere) depends on the terms presented when it was obtained. Access offered by a partner lasts as long as the enrolment with that partner.',
        ],
      },
      {
        title: 'Right of withdrawal',
        body: [
          'The digital content of the full plan is supplied immediately after purchase. By asking for this immediate access, you agree that it starts at once and, if you are a consumer in the European Union, you acknowledge losing your 14-day right of withdrawal. Refund requests for in-app purchases are made to Apple or Google.',
        ],
      },
      { title: 'Your account', body: ['You give an accurate e-mail address and keep your password secret. The account can be signed in on three devices at a time. You can delete it at any time in the Profile.'] },
      {
        title: 'Fair use',
        body: [
          'The app is for personal, non-commercial use. It is forbidden to copy, resell or distribute its content, to share an account with other people, to bypass the app’s protections or to disrupt its operation.',
        ],
      },
      {
        title: 'Intellectual property',
        body: [
          `The texts, exercises, recordings, illustrations and the Toki mascot belong to ${f('name')}. The photographs come from Wikimedia Commons and remain under their licenses; their authors are credited in the app.`,
        ],
      },
      {
        title: 'Availability and liability',
        body: [
          'We do our best to keep the app running without interruption, but it may be suspended for maintenance or in case of a technical problem. The content may change. We cannot be held liable for a test result or for indirect damage, within the limits allowed by law.',
        ],
      },
      { title: 'End of the service or of an account', body: ['In case of serious breach of these terms, we may suspend an account after warning you. Should the service stop, we would announce it at least 3 months in advance.'] },
      { title: 'Personal data', body: ['The processing of your data is described in the privacy policy.'] },
      {
        title: 'Governing law and disputes',
        body: [
          'These terms are governed by Tunisian law. If you are a consumer living in another country, you keep the protection of the mandatory rules of your country. In case of disagreement, write to us first to find an amicable solution; failing that, the competent courts will decide.',
          `Contact: ${f('contactEmail')}.`,
        ],
      },
    ],
  }),

  notice: (f) => ({
    title: 'Legal notice',
    sections: [
      {
        title: 'Publisher',
        body: [
          `${f('name')}, ${f('legalForm')}.`,
          `Address: ${f('address')}.`,
          `Company register: ${f('registration')}. Tax identification number: ${f('taxId')}.`,
          `Director of publication: ${f('director')}.`,
          `Contact: ${f('contactEmail')}.`,
        ],
      },
      { title: 'Hosting', body: [`${f('host')}.`] },
      { title: 'Trademarks', body: ['TOEIC® is a registered trademark of ETS (Educational Testing Service). Toki Quest is an independent app, neither affiliated with nor endorsed by ETS.'] },
      { title: 'Credits', body: ['Photographs: Wikimedia Commons, authors and licenses listed in the app (Profile, Photo credits). Sounds and mascot: original creation.'] },
    ],
  }),

  sale: (f) => ({
    title: 'Website sale conditions (Tunisia)',
    sections: [
      { title: 'Offer', body: [`The Toki Quest full plan can be bought on this website by users in Tunisia, for 20 TND including taxes, as a one-time payment. Seller: ${f('name')}, ${f('address')}.`] },
      {
        title: 'Payment',
        body: [
          'Payment is made through Konnect (bank card, e-Dinar or Konnect wallet). We never see your bank details. The full plan opens on your account as soon as Konnect confirms the payment; then simply sign in to the app with the same e-mail.',
        ],
      },
      {
        title: 'Withdrawal and refund',
        body: [
          'The digital content is supplied immediately after payment, at your request. If access does not open or in case of double payment, write to us: we will refund or fix it within 14 days.',
          `Contact: ${f('contactEmail')}.`,
        ],
      },
      { title: 'Other terms', body: ['The Toki Quest terms of use and privacy policy also apply.'] },
    ],
  }),
};
