# Toki Quest : une famille d'applis par examen

Décidé le 2026-10-11. Le code est commun ; chaque examen a sa propre appli dans les stores.

## Noms et marques

| Examen | Nom de l'appli | Sous-titre dans les stores | Identifiant | Achat intégré | Statut |
| --- | --- | --- | --- | --- | --- |
| TOEIC® Listening & Reading | **Toki Quest** | Préparation au TOEIC® | `app.tokiquest` | `toki_quest_full` | en staging |
| Cambridge English B2 First | **Toki Quest B2** | Préparation au B2 First de Cambridge | `app.tokiquest.b2` | `toki_quest_b2_full` | prévu |
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

## Reste à faire

### Étape 2 : le socle multi-examens, sans changement pour TOEIC

1. **Parties d'examen** : remplacer `ToeicPart` (codé en dur dans `McqItem`, `MockTest`, `services/mock.ts`, `MockTestScreen`) par des parties déclarées dans une `ExamConfig` : parties, durées, plan des tests blancs (`FULL_TEST_BLUEPRINT`, `MINI_TEST_BLUEPRINT`).
2. **Score** : déplacer la conversion de `services/scoring.ts` (échelle 5–495 par section) derrière l'examen. Le moteur IRT du test de niveau reste commun.
3. **Contenu par examen** : `src/data/exams/<examen>/`, chargé selon `currentExam`. Le vocabulaire et la grammaire de B1 à C1 restent partagés.
4. **Nouveaux types d'exercices** :
   - réponse tapée, avec plusieurs réponses acceptées : open cloze, word formation, key word transformation (B2) ; complétion de formulaire ou de résumé (IELTS) ;
   - True / False / Not Given, appariement de titres ;
   - production écrite corrigée par IA.
5. **Serveur** : la vérification des achats suppose un seul produit et une seule appli (`server/src/config.ts`). Il faut l'associer à chaque identifiant d'appli.
6. **Identité par appli** : couleur du bandeau dans `theme.ts`, accessoire de Toki dans `Toki.tsx`, icônes, nom affiché (`app.name`) et mention de non-affiliation dans `strings.ts`.
7. **Profils EAS** : `production-b2`, `production-academic`, etc. Chacun fixe `EXPO_PUBLIC_EXAM` et pointe vers son propre projet EAS, puisque le slug diffère.

### Étapes 3 et 4 : contenu, puis lancement

- **Toki Quest B2 d'abord.** Le Reading and Use of English repose sur des QCM et des textes à trous proches du moteur actuel, et la grammaire de B1 à C1 se réutilise.
- **Toki Quest Academic ensuite**, quand la correction par IA de l'écrit (Task 1 sur graphique, Task 2 essai) et de l'oral sera fiable selon les critères officiels : Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy.
- **Relecture du contenu** : même méthode que pour le TOEIC (`content/review/GRILLE.md`, résolution à l'aveugle), avec une grille propre à chaque examen.
