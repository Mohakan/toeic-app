# Prompt : étendre TOEIC Quest à 60 heures de travail et 1 000 mots

> À donner tel quel à un agent de développement dans le dossier `C:\projets\toeic-app`.
> Le travail est découpé en **lots**. Un lot = une session. L'agent reprend toujours là où le fichier `content/PROGRESS.md` s'est arrêté.

---

## Rôle

Tu es à la fois **concepteur pédagogique spécialiste du TOEIC Listening & Reading** et **développeur React Native / TypeScript** sur le projet TOEIC Quest. Tu produis du contenu original, juste et prêt à être relu par un enseignant, puis tu l'intègres dans le code existant sans casser les tests.

## Contexte du projet (à lire avant toute action)

1. Lis `AGENTS.md`, `README.md`, `src/types.ts`, `src/data/curriculum/build.ts`, un fichier de niveau (`src/data/curriculum/b1.ts`), `src/data/vocab.ts` et `src/services/placement.test.ts`.
2. **Public :** adultes et étudiants francophones, arabophones et hispanophones qui préparent le TOEIC L&R. Les langues d'aide sont le français, l'arabe standard moderne, l'espagnol et l'anglais ; le contenu d'examen est toujours en anglais.
3. **Existant :**
   - 27 unités de A1 à C1, chacune avec un mini-cours, soit 176 exercices ;
   - 144 mots de vocabulaire ;
   - un test de niveau adaptatif fondé sur l'IRT, avec 54 items ;
   - une estimation de niveau continue.
4. **Lot 0 déjà fait :** séries (`unit(spec, set1, set2, set3)`), révision espacée, TOEIC blancs (`src/data/mock/`), une unité par fichier (`src/data/curriculum/<niveau>/<unité>.ts`), un thème par fichier (`src/data/vocab/<thème>.ts`), `npm run content:stats` et `npm run content:check`. Commence par lire `content/PROGRESS.md`.
5. **Conventions à respecter :**
   - utiliser les helpers `x(fr, ar, en, es)`, `g`, `v`, `read`, `listen`, `respond`, `order`, `match`, `withGraphic`, `lesson` et `unit` ;
   - les items de partie 2 (`respond`) ont 3 options, tous les autres QCM en ont 4 ;
   - aucune question du test de niveau (`src/data/assessment.ts`) ne doit être reprise, même reformulée de près ;
   - **dans chaque QCM, l'option 1 est la bonne réponse** (les options sont mélangées ensuite par `withShuffledOptions`) ;
   - pour les conversations, préfixer chaque ligne par `W:` (femme) ou `M:` (homme) ;
   - aucun texte affiché codé en dur dans les composants : tout passe par `src/i18n/strings.ts`.

## Objectif mesurable

Atteindre **au moins 60 heures** de travail estimé et **1 000 mots** de vocabulaire. Le temps se mesure avec le script `npm run content:stats`, que tu crées au lot 0. Le budget visé :

| Bloc | Volume | Hypothèse de temps | Heures |
| --- | --- | --- | --- |
| Mini-cours | 60 unités | 3 min | 3 |
| Exercices d'unités | 60 unités × 3 séries × 10 = **1 800 items** | 1,3 min en moyenne, correction comprise | 39 |
| TOEIC blancs | 2 complets (194 items, 2 h) + 6 mini (50 items, 30 min) = **~690 items** | durée réelle | 7 |
| Révision espacée des erreurs | réutilise les items existants | 5 min par jour sur 60 jours | 5 |
| Vocabulaire | 1 000 mots | ~25 s par mot (découverte + 4 révisions) | 7 |
| **Total** | **~2 500 items nouveaux, 1 000 mots** | | **≈ 61 h** |

Barème de temps de `content:stats` (voir `src/data/contentStats.ts`) :
- par exercice : R5 = 1 min, R6 = 1,5 min, R7 = 1,5 min, L2 = 1 min, L3 / L4 = 2 min, `order` = 1 min, `match` = 2 min ;
- lecture des textes : 0,25 min par 50 mots, comptée une seule fois par texte ;
- reprises en fin de leçon : +20 % ; révision espacée : +12 % ;
- mini-cours : 3 min ; vocabulaire : 25 s par mot ;
- TOEIC blancs : leur durée réelle (les tests démo ne comptent pas).

## Architecture à mettre en place (lot 0, avant le contenu)

1. **Séries d'exercices :**
   - remplacer `Unit.exercises` par `Unit.sets: ExerciseSet[]`, avec `ExerciseSet = { id; exercises: Exercise[] }`, 3 séries par unité ;
   - quand l'apprenant rejoue une unité, il reçoit la série suivante ;
   - l'unité est validée après la première série réussie à 70 % ou plus ;
   - migrer les unités existantes : la série 1 reprend les exercices actuels ;
   - garder la compatibilité des progressions enregistrées : `UnitResult` reste indexé par `unit.id`, et on ajoute `setsDone`.
2. **Révision espacée des erreurs :**
   - chaque exercice raté au premier essai entre dans une file de type Leitner (boîtes 1, 3, 7, 14 et 30 jours) ;
   - l'accueil propose « Révision du jour » quand la file contient des exercices à revoir ;
   - les réponses de révision alimentent aussi `practiceResponses`.
3. **TOEIC blancs :**
   - nouveau type `MockTest = { id; kind: 'full' | 'mini'; durationMin; sections: { part; items }[] }` ;
   - un écran chronométré, pause autorisée, **sans correction pendant le test** ;
   - un rapport final :
     - scores oral et écrit estimés avec le moteur IRT existant (`levelEstimate`), et leur intervalle de confiance ;
     - réussite par partie ;
     - correction détaillée.
   - la partie 1 (photos) est exclue faute de vraies images : les tests complets comptent 94 items d'écoute (P2 25, P3 39, P4 30) et 100 items de lecture (P5 30, P6 16, P7 54). Le rapport doit l'indiquer.
4. **Organisation des fichiers :**
   - `src/data/curriculum/<niveau>/<unité>.ts`, une unité par fichier ;
   - `src/data/mock/<id>.ts` ;
   - `src/data/vocab/<thème>.ts` ;
   - un fichier ne doit jamais dépasser environ 1 500 lignes.
5. **Outillage :**
   - `npm run content:stats` affiche les heures estimées, le nombre d'items par niveau, par partie et par compétence, et le nombre de mots par niveau et par thème ;
   - `npm run content:check` lance les contrôles de qualité décrits plus bas.
6. **Suivi :** créer `content/PROGRESS.md` avec la liste des lots, leur statut, et les chiffres de `content:stats` après chaque lot.

Les tests existants doivent continuer à passer. Ajoute les tests du nouveau comportement : rotation des séries, file de révision, chronomètre et score d'un TOEIC blanc.

## Plan des unités (60 au total, 12 par niveau)

Garde les 27 unités existantes et ajoute 33 unités, en couvrant à chaque niveau :

- **Grammaire (Partie 5)** :
  - A1 : be, have, there is, articles, pluriels, pronoms et possessifs, présent simple ;
  - A2 : présent continu, prétérit, can / must / should, comparatifs, prépositions, quantifieurs (some, any, much, many) ;
  - B1 : futur, present perfect, conditionnel 1, gérondif ou infinitif, familles de mots, pronoms relatifs simples ;
  - B2 : passif, past perfect, conditionnels 2 et 3, connecteurs, discours indirect, modaux au passé, inversions simples ;
  - C1 : inversions, subjonctif, conditionnels mixtes, propositions participiales, accords complexes, phrasal verbs d'affaires.
- **Écoute** : parties 2, 3 et 4 à tous les niveaux. À partir de B1, inclure des items « intention du locuteur » (*What does the man mean when he says…?*) et, à partir de B2, des items avec graphique (`withGraphic`).
- **Lecture** :
  - partie 6 dès B1, avec insertion de phrase dès B2 ;
  - partie 7 à tous les niveaux : textes simples, puis doubles à partir de B2 et triples en C1 ;
  - types de documents variés : e-mail, annonce, formulaire, article, chat, publicité, facture, planning.
- **Thèmes du monde professionnel**, répartis équitablement : bureau, RH, finance, marketing et ventes, achats, production, technologie, voyages, restauration, événements, santé, immobilier, juridique et contrats, environnement et énergie.

Chaque nouvelle unité : `lesson` (objectif, 2 à 4 points à retenir, 1 exemple), puis 3 séries de 10 exercices **différents** visant la même compétence, avec une difficulté croissante dans la série.

## Vocabulaire : 1 000 mots

- **Répartition par niveau** : A1 100, A2 150, B1 250, B2 300, C1 200.
- **Répartition par thème** : les 14 thèmes ci-dessus, entre 50 et 90 mots chacun. Ajoute les 4 nouveaux thèmes (`health`, `property`, `legal`, `environment`) au type `VocabTheme` et à `themeNames`.
- **Pour chaque mot** :
  - l'anglais (mot ou expression figée : collocations, phrasal verbs) ;
  - une traduction française, une traduction arabe standard moderne et une traduction espagnole, précises dans le contexte professionnel ;
  - une phrase d'exemple originale de 6 à 14 mots en contexte de travail ;
  - le niveau, le thème et un emoji pertinent.
- **Priorité de sélection** : les mots les plus fréquents en anglais des affaires et dans les supports de type TOEIC, les faux amis pour francophones (eventually, actually, library, achieve…) et les familles de mots utiles en partie 5.
- **Interdiction :** recopier une liste commerciale existante. Construis ta propre sélection.
- **Lien avec les exercices :** chaque unité doit réutiliser au moins 10 mots de son niveau. Les exercices `match` ne citent que des mots existants.

## Règles de qualité (non négociables)

1. **Originalité :** ne reproduis jamais de questions, textes ou audios officiels d'ETS ni de manuels commerciaux. Tout est écrit pour ce projet. Les noms de personnes et d'entreprises sont fictifs et variés (maghrébins, européens, asiatiques, africains, américains).
2. **Une seule bonne réponse, vérifiée :**
   - relis chaque item en te demandant si un candidat expert pourrait défendre un autre choix ; si oui, réécris l'item ;
   - les distracteurs sont plausibles et sanctionnent une erreur précise (temps, forme du mot, faux ami, mot répété à l'oral, question en Wh- à laquelle on répondrait par oui ou non).
3. **Niveau juste :**
   - A1 et A2 : phrases courtes et vocabulaire courant ;
   - C1 : registre soutenu, inférence, nuances ;
   - longueur maximale des textes des parties 6 et 7 (vérifiée par `content:check`) : A1 60 mots, A2 90, B1 150, B2 260, C1 350 (doubles et triples compris).
4. **Explications pédagogiques** dans les quatre langues d'aide (fr, ar, en, es) :
   - 1 à 2 phrases, qui disent **pourquoi** la bonne réponse est juste et, si c'est utile, pourquoi le piège principal est faux ;
   - le français et l'espagnol tutoient, l'arabe est en arabe standard moderne correct et non dialectal ;
   - garde les citations anglaises entre guillemets (« » en français, «» en arabe).
5. **Équilibre :** pas plus de 30 % des items d'une série sur une même règle, et une bonne réponse répartie équitablement sur les 4 positions après mélange (déjà testé).
6. **Écoute :** des phrases naturelles à l'oral, qui restent compréhensibles par une synthèse vocale (pas de sigles ambigus, nombres écrits comme on les dit si c'est utile : « two thirty »).
7. **Sécurité et neutralité :** aucun contenu politique, religieux, médical sensible ou stéréotypé. Les mises en situation sont professionnelles et respectueuses.

## Contrôles automatiques (`content:check` et tests vitest)

Étendre `src/services/placement.test.ts` ou créer `src/data/content.test.ts` pour vérifier :
- l'unicité des identifiants d'unités, de séries, d'exercices, de mots et d'items de TOEIC blanc ;
- l'absence de doublon dans les consignes et les textes (normaliser casse, ponctuation et espaces) ;
- que chaque QCM a 3 options en partie 2 (comme le vrai format) et 4 options dans les autres parties ;
- que les options sont distinctes et que les explications sont présentes dans les trois langues (plus de 10 caractères) ;
- la présence d'un audio pour chaque item d'écoute, et d'un texte pour chaque item des parties 6 et 7 ;
- que les longueurs de texte respectent les fourchettes par niveau ;
- que chaque mot cité dans les exercices existe dans le vocabulaire ;
- les quotas par niveau et par thème ;
- que les TOEIC blancs respectent exactement la répartition par partie indiquée ;
- que `content:stats` donne au moins 60 h et au moins 1 000 mots (ce dernier test n'est activé qu'au lot final).

## Découpage en lots

| Lot | Contenu | Critère de fin |
| --- | --- | --- |
| 0 | Architecture : séries, révision, TOEIC blanc, réorganisation des fichiers, `content:stats`, `content:check`, `PROGRESS.md` | tests verts ; l'app tourne avec le contenu existant migré |
| 1–2 | A1 : séries 2 et 3 des 5 unités existantes, puis 7 nouvelles unités | 12 unités A1 × 30 items |
| 3–4 | A2 (même logique) | 12 unités A2 |
| 5–7 | B1 | 12 unités B1 |
| 8–10 | B2 | 12 unités B2 |
| 11–12 | C1 | 12 unités C1 |
| 13–16 | Vocabulaire, environ 215 mots par lot (par niveau), et rattachement aux unités | 1 000 mots |
| 17–18 | 6 mini TOEIC blancs | 300 items |
| 19–22 | 2 TOEIC blancs complets | 388 items |
| 23 | Recalibrage des niveaux, relecture croisée, statistiques finales | au moins 60 h et 1 000 mots, `content:check` vert |

## Volet TOEIC Speaking (lots S0 à S6)

Objectif : préparer aussi le **TOEIC Speaking** (11 tâches, score sur 200) grâce à la **reconnaissance vocale de l'appareil**. Ce volet a son propre budget, d'environ **12 heures**, qui s'ajoute aux 60 h de L&R sans les remplacer.

**Les 11 tâches du format officiel et ce que l'app peut mesurer :**

| Tâches | Type | Préparation / réponse | Retour possible avec la reconnaissance vocale |
| --- | --- | --- | --- |
| 1–2 | Lire un texte à voix haute | 45 s / 45 s | **Mesurable** : mots reconnus comparés au texte (alignement mot à mot), mots manqués ou mal prononcés surlignés, débit en mots par minute |
| 3–4 | Décrire une photo | 45 s / 30 s | Nécessite de vraies images : **différé** tant que des photos libres de droits ne sont pas fournies |
| 5–7 | Répondre à des questions | 3 s / 15 à 30 s | **Indicatif** : réponse donnée ou non, longueur, mots-clés attendus, débit |
| 8–10 | Répondre à partir d'un document (planning, programme) | 45 s de lecture / 15 à 30 s | **Indicatif** : présence des informations du document (heure, lieu, nom) dans la réponse |
| 11 | Exprimer une opinion | 45 s / 60 s | **Indicatif** : longueur, connecteurs d'argumentation (because, for example, in addition), débit |

**Règles spécifiques :**
- **Honnêteté de la mesure :** seule la lecture à voix haute reçoit un score de précision. Pour les autres tâches, l'app affiche un retour pédagogique explicitement marqué « indicatif ». Elle ne prédit jamais un score Speaking sur 200.
- **Limites à expliquer à l'apprenant :** la reconnaissance vocale juge l'intelligibilité, pas la phonétique fine. Un accent marqué, du bruit ou un micro médiocre peuvent fausser le résultat.
- **Données vocales d'élèves (sensibles) :**
  - utiliser la reconnaissance **sur l'appareil** chaque fois que la plateforme le permet ;
  - ne jamais conserver ni envoyer l'audio à un serveur du projet, et conserver seulement le texte reconnu et les indicateurs ;
  - demander un consentement explicite avant le premier usage du micro, avec un écran clair et une possibilité de refus sans perdre l'accès au reste de l'app ;
  - quand le mode sur l'appareil n'est pas disponible, la reconnaissance du système (Apple, Google ou le navigateur) peut traiter la voix sur les serveurs du fabricant : l'écran de consentement doit le dire clairement.
- **Technique :**
  - passer par une interface `SpeechRecognitionService` (`src/services/recognition.ts`) avec une implémentation pour l'appareil, sur le modèle de `ListeningService` ;
  - choisir la bibliothèque compatible avec le SDK Expo du projet (`npx expo install`), et documenter qu'elle exige un *development build* (pas Expo Go) ;
  - sur le web, utiliser la Web Speech API si elle est disponible, sinon afficher un message clair ;
  - l'alignement texte attendu / texte reconnu (distance d'édition au niveau des mots) est une fonction pure et testée.
- **Contenu :** chaque tâche a ses consignes et un modèle de réponse dans les 4 langues d'aide, ses mots-clés attendus et un niveau CECRL. Les textes à lire suivent les longueurs officielles, autour de 40 à 60 mots.

**Lots du volet Speaking :**

| Lot | Contenu | Critère de fin |
| --- | --- | --- |
| S0 | Architecture : service de reconnaissance, écran de consentement, permission micro, alignement mot à mot, enregistrement des indicateurs, onglet ou section « Oral », tests | tests verts ; la lecture à voix haute fonctionne de bout en bout sur un appareil réel |
| S1 | 60 textes à lire à voix haute (12 par niveau, de A1 à C1) | `content:check` vert |
| S2 | 90 questions des tâches 5 à 7, avec modèles de réponse et mots-clés | idem |
| S3 | 30 documents et 90 questions des tâches 8 à 10 | idem |
| S4 | 40 sujets d'opinion pour la tâche 11 | idem |
| S5 | 4 simulations Speaking chronométrées (tâches 1–2 et 5–11), avec un bilan indicatif par tâche | idem |
| S6 | Tâches 3–4 (photos), seulement si des images libres de droits sont fournies | images intégrées, `content:check` vert |

Barème de temps Speaking pour `content:stats` : lecture à voix haute 3 min, question 1,5 min, tâche sur document 2 min, opinion 3 min, simulation 20 min.

**À chaque lot :**
1. lire `content/PROGRESS.md` ;
2. produire le contenu du lot seulement ;
3. lancer `npx tsc --noEmit`, `npm test` et `npm run content:check`, et corriger jusqu'à ce que tout passe ;
4. vérifier un échantillon dans l'app (`npx expo start --web`), en français et en arabe ;
5. mettre à jour `content/PROGRESS.md` avec les chiffres de `content:stats` et les points à faire relire par un humain ;
6. résumer en 5 lignes ce qui a été ajouté et ce qui reste.

Ne génère pas plusieurs lots dans une même session : la qualité prime sur la vitesse.

## Ce que tu ne fais pas

- Pas de dépendance nouvelle sans nécessité claire, et toujours via `npx expo install`.
- Pas d'appel à un service payant ni d'API externe pour générer le contenu ou l'audio.
- Ne pas modifier le moteur IRT ni la banque du test de niveau, sauf pour lire les estimations dans le rapport d'un TOEIC blanc.
- Ne pas présenter les scores comme des scores officiels ETS.

## Livrable final

- 60 unités (12 par niveau), chacune avec un mini-cours et 3 séries de 10 exercices ;
- 1 000 mots en 14 thèmes ;
- 6 mini TOEIC blancs et 2 complets, avec un rapport fondé sur l'IRT ;
- une révision espacée des erreurs ;
- `npm run content:stats` qui affiche au moins 60 h ;
- le volet Speaking : lecture à voix haute mesurée, tâches 5 à 11 avec retour indicatif, 4 simulations, et environ 12 h supplémentaires ;
- tous les tests verts ;
- `content/PROGRESS.md` à jour, avec la liste des items signalés pour relecture humaine.
