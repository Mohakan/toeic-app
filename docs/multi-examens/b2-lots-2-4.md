# Toki Quest B2 : lots 2 à 4 (24 nouvelles unités)

Rédigé le 2026-10-17. Ce document complète le plan `docs/multi-examens/b2-60h.md` et le guide `docs/multi-examens/b2-contenu.md`, qui reste la référence pour le format.

## Les unités

Chaque unité a un mini-cours et **3 séries de 10 exercices**. Le parcours trie les unités par niveau (`src/data/exams/b2First/curriculum.ts`).

| Unité | Niveau | Parties | Sujet | Ce qui la distingue des unités existantes |
| --- | --- | --- | --- | --- |
| **Lot 2 : B1** | | | | |
| u13 | 3 | RU2 · RU4 | Temps du présent et du passé : present simple et continuous, verbes d'état, past simple et continuous, present perfect ou past simple, for / since | u04 et u08 ne traitent pas les temps |
| u14 | 3 | RU2 · RU4 | Le futur : will, going to, present continuous, future continuous et perfect, propositions de temps (when, as soon as, until + présent) | nouveau |
| u15 | 3 | RU2 · RU4 | Comparer : comparatifs, superlatifs, as … as, too / enough, the more … the more | nouveau |
| u16 | 3 | RU2 | Articles, quantifieurs (much, many, few, a little, plenty of, none of), dénombrables et indénombrables | u02 fait des mots grammaticaux en général |
| u17 | 3 | RU1 · RU2 | Prépositions dépendantes : verbes, adjectifs et noms suivis d'une préposition (depend on, keen on, the reason for) | nouveau |
| u18 | 3 | RU1 | Mots souvent confondus : lend / borrow, rob / steal, remind / remember, say / tell, fun / funny, actual / current, etc. | u01 fait des collocations |
| u19 | 3 | RU5 · RU7 | Lire au niveau B1 : idée principale, détails et repérage dans des textes plus courts | u06 et u09 sont au niveau B2 |
| u20 | 3 | LI1 · LI2 | Écouter au niveau B1 : chiffres, dates, noms épelés, détails, sujet d'un extrait | u10 et u11 sont au niveau B2 |
| **Lot 3 : B2** | | | | |
| u21 | 4 | RU4 · RU2 | Conditionnels : les quatre types, mixtes, in case, as long as, supposing, but for | u08 traite unless, otherwise et wish |
| u22 | 4 | RU4 · RU2 | Passif avancé : it is said that, be said to, get / have something done, need doing | u04 traite le passif simple |
| u23 | 4 | RU4 · RU1 | Verbes introducteurs : admit, deny, accuse of, warn, persuade, refuse, blame for, apologise for | u04 traite le discours indirect de base |
| u24 | 4 | RU2 · RU4 | Propositions relatives (définissantes ou non, whose, where, prépositions) et participiales | nouveau |
| u25 | 4 | RU4 · RU1 | Gérondif ou infinitif : stop / remember / try / regret + -ing ou to, verbes de construction | nouveau |
| u26 | 4 | RU3 | Formation des mots : verbes (-en, -ise, -ify, en-) et noms de personnes (-er, -or, -ist, -ant, -ee) | u03 et u07 traitent les noms, adjectifs et préfixes |
| u27 | 4 | RU5 · RU6 | Lire : attitude et intention de l'auteur, renvois (it, this, they), sens d'un mot en contexte | u06 fait de la compréhension générale |
| u28 | 4 | LI1 · LI4 | Écouter : opinions, accord et désaccord, sentiment des locuteurs | u10 porte sur la compréhension générale |
| **Lot 4 : B2 et C1** | | | | |
| u29 | 5 | RU4 · RU2 | Modaux : déduction au présent et au passé, obligation, didn't need to ou needn't have, be supposed to, be bound to | u08 n'en traite qu'une partie |
| u30 | 5 | RU1 | Collocations et expressions idiomatiques avancées (come to terms with, take for granted, make allowances for) | u01 est au niveau B1 et B2 |
| u31 | 4 | RU1 · RU2 | Verbes à particule à trois mots et sens figurés (put up with, come up with, look down on, carry out) | u05 traite les verbes à deux mots |
| u32 | 5 | RU2 · RU4 | Insistance : phrases clivées (What I need is…, It was … that) et inversions (Not only, Never, Only when, Little did) | u12 traite hardly, no sooner et not until : ne pas les reprendre |
| u33 | 5 | RU6 | Cohérence d'un texte : pronoms, connecteurs et chaînes de sens pour la Partie 6 | u06 est au niveau B2 |
| u34 | 5 | RU7 | Partie 7 : repérer les paraphrases et éviter les mots pièges | u09 est au niveau B2 |
| u35 | 5 | LI3 | Partie 3 : intentions et sentiments des locuteurs, paraphrases | u11 est au niveau B2 |
| u36 | 5 | LI2 · LI4 | Parties 2 et 4 au niveau C1 : distracteurs, inférence, attitude | u10 et u11 sont au niveau B2 |

## Règles pour les rédacteurs

- **Modèle** : suivre le guide `b2-contenu.md`, et prendre une unité existante de même type comme modèle de fichier (u02 pour RU2, u04 pour RU4, u06 pour RU5 · RU6, u09 pour RU7, u10 et u11 pour l'écoute).
- **Identifiants** : `fce-uNN-s1-q1` à `fce-uNN-s3-q10`. L'export s'appelle `fceUNN` (par exemple `fceU13`) et a le type `Unit`.
- **Niveaux** : chaque item a le niveau de l'unité, avec 2 ou 3 items par série un niveau au-dessus.
- **Originalité** :
  - aucun item ne reprend un item existant : unités, examens blancs, test de niveau ;
  - aucun texte ou script ne reprend le thème d'un autre (faire une recherche dans `src/data/exams/b2First/`) ;
  - rien n'est copié de Cambridge.
- **Variété** : prénoms et contextes variés (Maghreb, Europe, Amérique latine, monde) ; thèmes de la vie des 15-30 ans.
- **Réponses tapées** : lister toutes les réponses correctes. Le moteur traite déjà comme équivalents les contractions et leur forme pleine, les nombres en lettres et en chiffres, et ignore les virgules.
- **Textes et scripts** : ils sont partagés entre items à l'aide d'une constante. En RU6, les phrases A, B, C… restent dans le même ordre pour tous les items du texte, et l'ordre des clés est mélangé. En RU7 et LI3, l'ordre des réponses ne suit pas l'ordre du texte.
