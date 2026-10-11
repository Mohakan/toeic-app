# Toki Quest : une famille d'applis par examen

Décidé le 2026-10-11. Le code est commun ; chaque examen a sa propre appli dans les stores.

## Noms et marques

| Examen | Nom de l'appli | Sous-titre dans les stores | Identifiant | Achat intégré | Statut |
| --- | --- | --- | --- | --- | --- |
| TOEIC® Listening & Reading | **Toki Quest** | Préparation au TOEIC® | `app.tokiquest` | `toki_quest_full` | en staging |
| Cambridge English B2 First | **Toki Quest B2** | Préparation au B2 First de Cambridge | `app.tokiquest.b2` | `toki_quest_b2_full` | prêt à construire |
| IELTS™ Academic | **Toki Quest Academic** | Préparation à l'IELTS™ Academic | `app.tokiquest.academic` | `toki_quest_academic_full` | prévu |

- **Les noms d'applis ne contiennent aucune marque d'examen.** TOEIC appartient à ETS, IELTS au British Council, à IDP et à Cambridge, et B2 First à Cambridge University Press & Assessment. Apple (règle 5.2.1) et Google peuvent refuser un nom qui reprend la marque d'un tiers. L'examen est donc nommé dans le sous-titre et les mots-clés, avec la mention « appli indépendante, non affiliée à … ».
  - Un test vérifie que les noms d'applis ne contiennent pas ces marques (`src/exams/catalog.test.ts`).
  - À faire valider par un conseil en propriété intellectuelle avant de créer les fiches.
- **« B2 »** désigne un niveau du CECR. Le terme est libre de droits.
- **« Academic »** renvoie à l'IELTS Academic sans utiliser la marque.

## Pourquoi trois applis plutôt qu'une

- **Visibilité** : on cherche « IELTS » ou « TOEIC » dans les stores, et une fiche dédiée se classe mieux.
- **Publics différents** : le TOEIC sert à l'emploi, l'IELTS Academic aux études à l'étranger, le B2 First aux lycéens et étudiants. L'accueil, les prix et les messages diffèrent.
- **Applis plus légères** : chacune n'embarque que le contenu de son examen.
- **Compte commun** (`server/`) : il permettra plus tard de proposer une appli sœur.

## Cohérence visuelle

Les trois applis gardent la charte : Toki, Rubik, le bandeau, les composants (`docs/design/direction-visuelle.md`). Chaque appli ne change que :

- **la couleur du bandeau et du fond de l'icône** : bleu ciel pour TOEIC, une teinte à choisir pour les autres, avec le contraste AA vérifié dans `src/theme.test.ts` ;
- **l'accessoire de Toki** : un casque audio pour TOEIC (existant), une écharpe d'étudiant pour B2, une toque de diplômé pour Academic.

## Fait (étape 2, lot 1)

- `src/exams/catalog.ts` définit pour chaque examen :
  - son nom d'appli, son slug, ses identifiants de store et son produit d'achat ;
  - son libellé d'examen et le propriétaire de la marque ;
  - son échelle de score : TOEIC 10–990, Cambridge English Scale 140–190, bandes IELTS 0–9.
- `app.config.ts` choisit l'examen avec `EXPO_PUBLIC_EXAM` (TOEIC par défaut).
  - La config TOEIC générée est identique à l'ancienne, à `extra.exam` près.
  - Construire un examen « prévu » échoue avec un message explicite.
- `src/exams/current.ts` fournit l'examen de la build à l'appli ; le produit d'achat (`PRODUCT_ID`) en vient.
- `tsconfig.json` : `noEmit` et `allowImportingTsExtensions`, pour que `app.config.ts` puisse importer le catalogue (le chargeur de config d'Expo exige l'extension `.ts`).

Lancer une variante : `EXPO_PUBLIC_EXAM=b2First npx expo start`. La valeur sera mise dans un profil EAS par appli quand la variante passera « live ».

## Fait (étape 2 complète et Toki Quest B2)

1. **Parties d'examen** : `src/exams/config.ts` décrit, pour TOEIC et B2 First, les parties, le plan des tests blancs, l'échelle de score, les seuils CECR, les objectifs, les stades de Toki, le test blanc gratuit et l'identité (couleur du bandeau, accessoire de Toki).
2. **Score par examen** : TOEIC 10–990 (somme des sections), Cambridge English Scale 122–190 (moyenne des épreuves).
3. **Contenu par examen** : `data/units`, `data/mock` et `data/assessment` servent le contenu de l'examen de la build. Les textes propres à un examen sont dans `src/i18n/examStrings.ts`, et un test vérifie qu'aucune mention du TOEIC ne reste dans les autres applis. Les fonctions TOEIC Speaking sont masquées hors de l'appli TOEIC.
4. **Nouveaux types d'exercices** : réponse tapée (`TypedItem`, normalisation, contractions équivalentes, décompte Cambridge) et QCM à ordre fixe. Les leçons, les révisions, l'estimation de niveau et les tests blancs gèrent les deux.
5. **Serveur** : achats et droits par examen (migration 4), plusieurs applis par store (`STORE_APPS`), en-tête `x-toki-exam`.

**Toki Quest B2**, construit avec `EXPO_PUBLIC_EXAM=b2First` ou les profils EAS `*-b2` :

- **Identité** : bandeau Lavande, Toki en écharpe, icônes dans `assets/b2/` (`node scripts/make-icons.cjs b2`).
- **Contenu** :
  - 12 unités de B1 à C1 (2 séries de 10 exercices), sur les 7 parties de Reading and Use of English et les 4 parties de Listening ;
  - un test de niveau de 60 questions ;
  - 2 examens blancs mini de 39 questions.

  Il a été relu (voir `content/review/SYNTHESE-b2.md`).

## Reste à faire

- **EAS** : créer le projet `toki-quest-b2` (`bunx eas-cli init` ou `npx eas-cli@latest init` avec `EXPO_PUBLIC_EXAM=b2First`). Créer aussi les fiches App Store et Play Store, ainsi que le produit `toki_quest_b2_full`.
- **Serveur** : renseigner `STORE_APPS` en production.
- **Contenu B2** : un examen blanc complet, puis le Writing et le Speaking (correction par IA).
- **Toki Quest Academic** : même chemin que B2.
