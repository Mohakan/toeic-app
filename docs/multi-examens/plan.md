# Toki Quest : une famille d'applis

Décidé le 2026-10-11. Le code est commun ; chaque examen a sa propre appli dans les stores. Le 2026-10-17, une quatrième appli sans examen, Toki Quest Savoirs, a été ajoutée au plan (voir plus bas).

## Noms et marques

| Examen | Nom de l'appli | Sous-titre dans les stores | Identifiant | Achat intégré | Statut |
| --- | --- | --- | --- | --- | --- |
| TOEIC® Listening & Reading | **Toki Quest** | Préparation au TOEIC® | `app.tokiquest` | `toki_quest_full` | en staging |
| Cambridge English B2 First | **Toki Quest B2** | Préparation au B2 First de Cambridge | `app.tokiquest.b2` | `toki_quest_b2_full` | prêt à construire |
| IELTS™ Academic | **Toki Quest Academic** | Préparation à l'IELTS™ Academic | `app.tokiquest.academic` | `toki_quest_academic_full` | prévu |
| Aucun : le français des matières | **Toki Quest Savoirs** | Les mots et notions des cours du lycée | `app.tokiquest.savoirs` (proposé) | `toki_quest_savoirs_full` (proposé) | prévu |

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

Les quatre applis gardent la charte : Toki, Rubik, le bandeau, les composants (`docs/design/direction-visuelle.md`). La référence est le brief `Toki – Brief mascotte & palette.md`, aligné sur la planche Figma « Design Toki mascot ». Chaque appli ne change que :

- **sa couleur** (bandeau, fond de l'icône, plumes de la queue de Toki) : Bleu Ciel pour TOEIC, Lavande pour B2, Turquoise pour Academic, Framboise pour Savoirs. Le contraste AA avec l'Encre est vérifié dans `src/theme.test.ts` ;
- **l'accessoire de Toki** : un casque audio pour TOEIC, une écharpe étudiante pour B2, une toque de diplômé pour Academic, un livre des savoirs pour Savoirs.

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

## Version web et site de la famille (2026-10-17)

- `site/` est la page d'accueil de `tokiquest.app`, adaptée de la planche Figma : Toki, les quatre applis, un lien vers la version web de chaque appli lancée, la palette et la mention de non-affiliation. C'est du HTML, du CSS et du JavaScript sans étape de construction.
- Chaque appli du catalogue a un chemin web sans marque (`webPath` dans `src/exams/catalog.ts`) : `/quest`, `/b2`, `/academic`. Un test vérifie que le site ne propose un lien que vers les applis lancées.
- `npm run web:build` exporte la version web de chaque appli lancée dans `dist/web/<chemin>` et copie le site à la racine de `dist/web`, prêt pour un hébergement statique. `npm run web:build -- b2First` n'exporte qu'une appli.
  - Pendant cet export, `TOKI_WEB_EXPORT=1` fixe `experiments.baseUrl` au chemin de l'appli. Les builds natives et le serveur de développement restent à la racine.
- En production, le serveur doit accepter l'origine du site : `CORS_ORIGINS=https://tokiquest.app`.
- Sur le web, l'achat intégré n'existe pas : le bouton d'achat annonce que le paiement arrive bientôt (comportement existant). Les fonctions d'écoute et de micro demandent Chrome ou Edge.

## Toki Quest Savoirs (prévue)

Le public, les matières et l'identité sont décrits dans le brief. Pour le code, cette appli ne rentre pas telle quelle dans le modèle actuel :

- `ExamConfig` est construit autour d'un examen : parties, échelle de score, seuils CECR, tests blancs. Savoirs n'a ni examen ni score officiel. Il lui faut un modèle « matières » : matière, année, notion, mot, avec une progression en part de notions maîtrisées.
- Le contenu est en français, avec des explications dans la langue de l'élève. Aujourd'hui, `EnglishText` et la reconnaissance vocale supposent un contenu en anglais.
- Le catalogue devra accepter une appli sans échelle de score (le champ `scale` deviendrait facultatif).

Étapes proposées :

1. Avec des enseignants, définir la liste des notions par matière et par année. Commencer par les mathématiques et la physique de la première année, car c'est souvent là que l'enseignement passe au français.
2. Généraliser le catalogue et la configuration pour une appli sans examen.
3. Écrire les types d'exercices : mot et définition, schéma légendé, consigne à comprendre.
4. Faire relire le contenu avec la même méthode que pour B2 (`content/review/GRILLE.md`, adaptée aux matières).

## Reste à faire

- **EAS** : créer le projet `toki-quest-b2` (`bunx eas-cli init` ou `npx eas-cli@latest init` avec `EXPO_PUBLIC_EXAM=b2First`). Créer aussi les fiches App Store et Play Store, ainsi que le produit `toki_quest_b2_full`.
- **Serveur** : renseigner `STORE_APPS` en production.
- **Contenu B2** : un examen blanc complet, puis le Writing et le Speaking (correction par IA).
- **Toki Quest Academic** : même chemin que B2.
- **Toki dans les applis** : aligner `src/components/Toki.tsx` et `scripts/make-icons.cjs` sur la planche Figma. Il faut que le casque passe sur la tête (il est dessiné autour du cou aujourd'hui) et que les plumes de la queue prennent la couleur de l'appli. Il faut aussi dessiner la toque et le livre.
- **Site** : choisir l'hébergement de `tokiquest.app` et y publier `dist/web`.
