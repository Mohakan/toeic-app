# Fiche Google Play (Play Console)

Textes prêts à coller ; longueurs vérifiées par `npm run store:check`. Ni Sabil, ni le paiement web n’apparaissent (règles de paiement de Google Play).

> Comme sur l’App Store, la marque TOEIC® (ETS) n’est pas dans le titre : elle figure seulement dans les descriptions, de façon descriptive.

## Informations générales

| Champ | Valeur |
| --- | --- |
| Nom du package | `app.tokiquest` (définitif après la première publication) |
| Langue par défaut | Français (France) – fr-FR |
| Traductions | Anglais (en-US), arabe (ar) |
| Application ou jeu | Application |
| Catégorie | Enseignement |
| Tags | Apprentissage des langues, Préparation aux examens |
| Gratuite ou payante | Gratuite (avec achat intégré) |
| Contient des annonces | Non |
| Adresse e-mail de contact | `support@elitebox-consulting.com` |
| Règles de confidentialité | `https://<PUBLIC_URL>/legal/privacy` |
| Suppression de compte (URL) | `https://<PUBLIC_URL>/account/delete` |

## Français

**Titre** (30) : Toki Quest : anglais d’examen

**Description courte** (80) : Préparation au TOEIC® : test de niveau, 60 unités, oral. Gratuit pour commencer.

**Description complète** (4 000) : reprendre la description française de [app-store.md](app-store.md), identique.

## English

**Title** (30): Toki Quest: exam English

**Short description** (80): TOEIC® preparation: placement test, 60 units, speaking. Free to start.

**Full description** (4,000): the English description of [app-store.md](app-store.md).

## العربية

**العنوان** (30): Toki Quest: إنجليزية الامتحان

**الوصف القصير** (80): تحضير لاختبار TOEIC®: اختبار مستوى و60 وحدة وشفوي. مجاني للبدء.

**الوصف الكامل** (4000): الوصف العربي في [app-store.md](app-store.md).

## Produit intégré

| Champ | Valeur |
| --- | --- |
| ID produit | `toki_quest_full` (le même que `GOOGLE_PRODUCT_ID`) |
| Type | Produit unique (non consommable : l’app ne le consomme jamais) |
| Nom | Plan complet |
| Description | Tout le contenu, en un seul paiement. |
| Prix | 9 USD par défaut ; Tunisie : prix local au plus près de 20 TND si la Play Console le permet |

## Public cible et contenu

| Question | Réponse |
| --- | --- |
| Tranches d’âge visées | 13-15, 16-17, 18 ans et plus (pas les moins de 13 ans : l’app n’est pas inscrite au programme « Familles ») |
| L’app peut-elle attirer les enfants ? | Non par sa présentation ; elle prépare un examen professionnel |
| Classification (questionnaire IARC) | Catégorie « Référence, actualités ou éducation » ; aucune violence, peur, sexualité, langage grossier, drogue, jeu d’argent ; pas d’interaction entre utilisateurs ; achats numériques : oui |
| Applications d’actualités, financières, de santé, gouvernementales | Non |

## Sécurité des données (« Data safety »)

| Type de donnée | Collectée | Partagée | Traitement éphémère | Obligatoire ou facultative | Finalité |
| --- | --- | --- | --- | --- | --- |
| Informations personnelles > Adresse e-mail | Oui | Non | Non | Facultative (compte) | Fonctionnalité de l’app, gestion du compte |
| Informations personnelles > Autres informations (année de naissance) | Oui | Non | Non | Facultative (compte) | Gestion du compte (âge minimal, accord parental) |
| Informations financières > Historique d’achats | Oui | Non | Non | Facultative | Fonctionnalité de l’app |
| Audio > Enregistrements vocaux | Oui, au sens de Google (la reconnaissance vocale du système peut transmettre la voix) | Non | **Oui** : jamais stockée par l’app | Facultative | Fonctionnalité de l’app (exercices d’oral) |
| Localisation, contacts, photos, fichiers, historique, identifiants d’appareil, plantages | Non | — | — | — | — |

- Données chiffrées en transit : **oui** (HTTPS).
- Possibilité de demander la suppression : **oui**, dans l’app (Profil > Supprimer mon compte) et sur `/account/delete`.
- Engagement envers le programme « Familles » : non.

## Autorisations à justifier

| Autorisation | Pourquoi |
| --- | --- |
| `RECORD_AUDIO` | Exercices d’oral : comparer ce que l’apprenant lit au texte attendu, après son accord |
| `com.android.vending.BILLING` | Achat intégré du plan complet |
| `INTERNET` | Compte, offre, achats |

Les autorisations `SYSTEM_ALERT_WINDOW` et de stockage externe, ajoutées par défaut, sont retirées (`android.blockedPermissions` dans `app.json`).

## Éléments graphiques

- Icône 512 × 512 : `assets/icon.png` redimensionnée (provisoire, à remplacer par l’illustration finale de Toki).
- Image de présentation 1024 × 500 : à créer (Toki, slogan « Joue. Progresse. Réussis. »).
- Captures téléphone : 2 à 8, au format 9:16 (par exemple 1080 × 1920).

## Accès pour la relecture

Dans « Accès aux applications », fournir le compte de démonstration (voir [app-store.md](app-store.md)) : la relecture peut ainsi voir tout le contenu.
