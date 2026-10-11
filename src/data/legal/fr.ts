import type { LegalTexts } from './types';

/** Version française : elle fait foi. À faire relire par un juriste avant publication. */
export const fr: LegalTexts = {
  privacy: (f) => ({
    title: 'Politique de confidentialité',
    sections: [
      {
        title: 'En bref',
        body: [
          '• Sans compte, tout reste sur ton appareil : rien n’est envoyé à nos serveurs.',
          '• Avec un compte, notre serveur garde seulement ton e-mail, ton année de naissance et ton offre.',
          '• Ta voix n’est jamais enregistrée par l’application ni envoyée à nos serveurs.',
          '• Aucune publicité, aucun traceur, aucune revente de données.',
        ],
      },
      {
        title: 'Qui est responsable',
        body: [`Toki Quest est édité par ${f('name')} (${f('address')}). Pour toute question sur tes données : ${f('privacyEmail')}.`],
      },
      {
        title: 'Ce qui reste sur ton appareil',
        body: [
          'Ton prénom, ton objectif, tes résultats au test de niveau, ta progression, tes réponses, tes mots à revoir, tes résultats à l’oral (le texte reconnu et les scores) et tes réglages sont enregistrés uniquement sur ton appareil. Ils sont effacés si tu supprimes l’application ou si tu réinitialises tes données dans le Profil.',
        ],
      },
      {
        title: 'Le micro et la reconnaissance vocale',
        body: [
          'Le micro n’est utilisé que pendant les exercices d’oral, et seulement si tu l’as accepté. La reconnaissance de la voix est faite par ton appareil : Apple sur iPhone et iPad, Google sur Android, ou ton navigateur sur le web. Selon l’appareil, ce service peut traiter ta voix sur ses propres serveurs, selon ses propres règles.',
          'Toki Quest ne garde jamais l’enregistrement et ne l’envoie jamais à ses serveurs. Il garde seulement le texte reconnu et tes scores, sur ton appareil. Tu peux retirer ton accord à tout moment dans l’écran Oral : tes résultats oraux sont alors effacés.',
        ],
      },
      {
        title: 'Si tu crées un compte',
        body: [
          'Le compte est facultatif. Il sert à retrouver ton offre sur un autre appareil. Notre serveur garde :',
          '• ton adresse e-mail et ton mot de passe, enregistré sous une forme chiffrée irréversible (nous ne le connaissons pas) ;',
          '• ton année de naissance et, si tu as entre 13 et 15 ans, la date de l’accord de ton parent ;',
          '• la langue de l’application, pour t’écrire dans ta langue ;',
          '• les appareils connectés (type d’appareil, dates de connexion), au plus trois à la fois ;',
          '• ton offre et tes achats (identifiant de la transaction, montant, devise, état).',
          'Ta progression n’est pas envoyée au serveur.',
        ],
      },
      {
        title: 'Accès offert par un partenaire de formation',
        body: [
          'Si tu es inscrit auprès d’un organisme de formation partenaire, celui-ci nous transmet ton e-mail, ton prénom (facultatif), l’état de ton inscription et sa date de fin. Ces données servent uniquement à t’ouvrir le plan complet quand tu crées un compte avec le même e-mail. Nous ne lui transmettons aucune donnée sur ton utilisation de l’application.',
        ],
      },
      {
        title: 'Paiements',
        body: [
          'Dans l’application, le paiement est fait par l’App Store (Apple) ou Google Play. Pour un paiement fait hors de l’application en Tunisie, le prestataire est Konnect. Nous ne voyons jamais tes coordonnées bancaires : nous recevons seulement la confirmation de l’achat.',
        ],
      },
      {
        title: 'Pourquoi et sur quelle base',
        body: [
          '• Fournir le compte, l’offre et les achats : exécution du contrat.',
          '• Utiliser le micro : ton consentement, que tu peux retirer.',
          '• Protéger le service (limites d’essais, journaux techniques) : notre intérêt légitime.',
          '• Garder les traces des achats : nos obligations comptables.',
        ],
      },
      {
        title: 'Qui reçoit tes données',
        body: [
          `Uniquement les prestataires nécessaires au service : l’hébergeur du serveur (${f('host')}), le service d’envoi des e-mails (${f('mailProvider')}), Apple, Google et Konnect pour les paiements. Ils agissent pour notre compte ou selon leurs propres conditions pour les paiements. Nous ne vendons et ne louons aucune donnée, et l’application ne contient ni publicité ni outil de mesure d’audience.`,
        ],
      },
      {
        title: 'Combien de temps',
        body: [
          '• Compte : jusqu’à sa suppression, ou après 3 ans sans utilisation, sauf si un plan complet est en cours.',
          '• Appareils déconnectés : 90 jours. Codes de mot de passe : 1 jour.',
          '• Journal des échanges avec le partenaire de formation : 90 jours.',
          '• Achats : 10 ans, pour les obligations comptables.',
          '• Journaux techniques du serveur (dont l’adresse IP) : 30 jours au plus.',
        ],
      },
      {
        title: 'Sécurité',
        body: [
          'Les échanges sont chiffrés (HTTPS). Les mots de passe et les jetons de connexion sont stockés sous une forme chiffrée irréversible. Sur ton téléphone, le jeton de connexion est gardé dans le trousseau sécurisé du système.',
        ],
      },
      {
        title: 'Les plus jeunes',
        body: [
          'Il faut avoir au moins 13 ans pour créer un compte, et l’accord d’un parent ou responsable légal entre 13 et 15 ans. Avant 13 ans, l’application s’utilise sans compte : rien ne quitte alors l’appareil. Un enfant de moins de 15 ans ne doit utiliser le micro qu’avec l’accord d’un parent.',
        ],
      },
      {
        title: 'Tes droits',
        body: [
          `Tu peux accéder à tes données, les corriger, les effacer, t’opposer à leur traitement, en limiter l’usage et en obtenir une copie. Tu peux supprimer ton compte toi-même dans le Profil (Supprimer mon compte). Pour le reste, écris à ${f('privacyEmail')}.`,
          `Tu peux aussi saisir l’Instance nationale de protection des données personnelles (INPDP, Tunisie) ou, si tu vis dans l’Union européenne, l’autorité de ton pays (en France, la CNIL). Déclaration INPDP : ${f('inpdpNumber')}.`,
        ],
      },
      {
        title: 'Où sont tes données',
        body: [
          `Le serveur est hébergé par ${f('host')}. Si des données sont traitées hors de Tunisie ou de l’Union européenne, c’est avec les garanties prévues par la loi.`,
        ],
      },
      {
        title: 'Changements',
        body: ['Si cette politique change, la nouvelle version est publiée ici avec sa date, et tu en es informé dans l’application en cas de changement important.'],
      },
    ],
  }),

  terms: (f) => ({
    title: 'Conditions d’utilisation et de vente',
    sections: [
      {
        title: 'Objet',
        body: [
          `Ces conditions régissent l’utilisation de l’application Toki Quest, éditée par ${f('name')}, et l’achat du plan complet. En créant un compte ou en achetant le plan complet, tu les acceptes. Si tu as moins de 15 ans, ton parent ou responsable légal doit les accepter avec toi.`,
        ],
      },
      {
        title: 'Le service',
        body: [
          'Toki Quest aide à préparer le TOEIC® Listening & Reading et le TOEIC® Speaking : test de niveau, parcours d’exercices, TOEIC blancs, vocabulaire et oral.',
          'Toki Quest est une application indépendante. Elle n’est ni affiliée à ETS, ni approuvée par ETS. TOEIC® est une marque déposée d’ETS (Educational Testing Service). Les scores et niveaux affichés sont des estimations : ils ne garantissent aucun résultat à l’examen officiel.',
        ],
      },
      {
        title: 'Essai gratuit',
        body: [
          'L’essai gratuit, sans limite de durée, comprend le test de niveau, le TOEIC blanc express, 4 unités choisies selon le niveau et un lot d’exercices d’oral. Le reste du contenu est réservé au plan complet.',
        ],
      },
      {
        title: 'Plan complet',
        body: [
          'Le plan complet ouvre tout le contenu de l’application. C’est un paiement unique, sans abonnement ni renouvellement. Il est personnel et donne accès au contenu tant que le service existe.',
          'Dans l’application, il s’achète par l’achat intégré de l’App Store ou de Google Play, au prix indiqué par le store au moment de l’achat. Le paiement, la facture et les éventuels remboursements relèvent du store et de ses conditions. « Restaurer mes achats » permet de retrouver un achat sur un nouvel appareil.',
          'Un accès obtenu hors de l’application (par un partenaire de formation, ou par un achat fait ailleurs) dépend des conditions présentées lors de son obtention. Un accès offert par un partenaire dure le temps de l’inscription auprès de ce partenaire.',
        ],
      },
      {
        title: 'Droit de rétractation',
        body: [
          'Le contenu numérique du plan complet est fourni immédiatement après l’achat. En demandant cet accès immédiat, tu acceptes qu’il commence tout de suite et, si tu es un consommateur de l’Union européenne, tu reconnais perdre ton droit de rétractation de 14 jours. Les demandes de remboursement des achats intégrés se font auprès d’Apple ou de Google.',
        ],
      },
      {
        title: 'Ton compte',
        body: [
          'Tu donnes une adresse e-mail exacte et tu gardes ton mot de passe secret. Le compte peut être connecté sur trois appareils à la fois. Tu peux le supprimer à tout moment dans le Profil.',
        ],
      },
      {
        title: 'Bon usage',
        body: [
          'L’application est destinée à un usage personnel et non commercial. Il est interdit de copier, revendre ou diffuser son contenu, de partager un compte avec d’autres personnes, de contourner les protections de l’application ou d’en perturber le fonctionnement.',
        ],
      },
      {
        title: 'Propriété intellectuelle',
        body: [
          `Les textes, exercices, enregistrements, illustrations et la mascotte Toki appartiennent à ${f('name')}. Les photographies proviennent de Wikimedia Commons et restent soumises à leurs licences ; leurs auteurs sont crédités dans l’application.`,
        ],
      },
      {
        title: 'Disponibilité et responsabilité',
        body: [
          'Nous faisons notre possible pour que l’application fonctionne sans interruption, mais elle peut être suspendue pour maintenance ou en cas de problème technique. Le contenu peut évoluer. Notre responsabilité ne peut être engagée pour un résultat à l’examen ni pour un dommage indirect, dans les limites permises par la loi.',
        ],
      },
      {
        title: 'Fin du service ou du compte',
        body: [
          'En cas de manquement grave à ces conditions, nous pouvons suspendre un compte après t’avoir prévenu. Si le service devait s’arrêter, nous l’annoncerions au moins 3 mois à l’avance.',
        ],
      },
      {
        title: 'Données personnelles',
        body: ['Le traitement de tes données est décrit dans la politique de confidentialité.'],
      },
      {
        title: 'Loi applicable et litiges',
        body: [
          'Ces conditions sont soumises au droit tunisien. Si tu es un consommateur résidant dans un autre pays, tu gardes la protection des règles impératives de ton pays. En cas de désaccord, écris-nous d’abord pour trouver une solution amiable ; à défaut, les tribunaux compétents seront saisis.',
          `Contact : ${f('contactEmail')}.`,
        ],
      },
    ],
  }),

  notice: (f) => ({
    title: 'Mentions légales',
    sections: [
      {
        title: 'Éditeur',
        body: [
          `${f('name')}, ${f('legalForm')}.`,
          `Adresse : ${f('address')}.`,
          `Registre national des entreprises : ${f('registration')}. Matricule fiscal : ${f('taxId')}.`,
          `Directeur de la publication : ${f('director')}.`,
          `Contact : ${f('contactEmail')}.`,
        ],
      },
      { title: 'Hébergement', body: [`${f('host')}.`] },
      {
        title: 'Marques',
        body: ['TOEIC® est une marque déposée d’ETS (Educational Testing Service). Toki Quest est une application indépendante, ni affiliée à ETS ni approuvée par ETS.'],
      },
      { title: 'Crédits', body: ['Photographies : Wikimedia Commons, auteurs et licences indiqués dans l’application (Profil, Crédits des photos). Sons et mascotte : création originale.'] },
    ],
  }),

  sale: (f) => ({
    title: 'Conditions de vente sur le site (Tunisie)',
    sections: [
      {
        title: 'Offre',
        body: [
          `Le plan complet de Toki Quest peut être acheté sur ce site par les utilisateurs en Tunisie, au prix de 20 DT TTC, en paiement unique. Vendeur : ${f('name')}, ${f('address')}.`,
        ],
      },
      {
        title: 'Paiement',
        body: [
          'Le paiement est fait par Konnect (carte bancaire, e-Dinar ou portefeuille Konnect). Nous ne voyons jamais tes coordonnées bancaires. Le plan complet s’ouvre sur ton compte dès que Konnect confirme le paiement ; il suffit ensuite de te connecter dans l’application avec le même e-mail.',
        ],
      },
      {
        title: 'Rétractation et remboursement',
        body: [
          'Le contenu numérique est fourni immédiatement après le paiement, à ta demande. Si l’accès ne s’ouvre pas ou en cas de double paiement, écris-nous : nous rembourserons ou corrigerons sous 14 jours. [À valider par un juriste au regard de la loi n° 2000-83 relative aux échanges et au commerce électroniques.]',
          `Contact : ${f('contactEmail')}.`,
        ],
      },
      { title: 'Autres conditions', body: ['Les conditions d’utilisation et la politique de confidentialité de Toki Quest s’appliquent aussi.'] },
    ],
  }),
};
