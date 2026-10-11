# Guide de rédaction : Toki Quest B2 (Cambridge English B2 First)

Ce guide s'adresse à quiconque écrit du contenu pour l'appli B2, qu'il s'agisse d'une personne ou d'un agent.

Le contrôle automatique se lance avec `npx vitest run src/data/exams/b2First`. Il doit passer.

## Public et ton

- **Public** : lycéens, étudiants et jeunes actifs, francophones, arabophones et hispanophones, de 15 à 30 ans. Ils visent le B2 First pour des études, une mobilité ou un emploi.
- **Langue des questions** : l'anglais. Le B2 First est un examen d'**anglais général**, pas d'anglais des affaires.
- **Thèmes** : études, voyages, sport, technologie, environnement, culture, santé, travail des jeunes, vie en ville. On mélange les contextes (Maghreb, Europe, monde) et les prénoms.
- **Originalité** : tout le contenu doit être original. On ne recopie et on ne paraphrase jamais de près un sujet publié par Cambridge, y compris dans les sujets d'entraînement officiels.

## Explications

- Chaque explication existe en 4 langues, construites avec `x(fr, ar, en, es)` :
  - le français utilise les guillemets « » et l'apostrophe ’ ;
  - l'arabe est de l'arabe standard moderne ;
  - l'espagnol et l'anglais suivent.
- Une explication justifie la clé en citant l'indice décisif : un mot du texte, une collocation, une règle. Une bonne explication tient en une ou deux phrases.
- Une explication en anglais peut être plus courte, mais elle doit dépasser 10 caractères.

## Identifiants

Tous les identifiants commencent par `fce-` :

| Contenu | Format | Exemple |
| --- | --- | --- |
| Unité | `fce-u<NN>` | `fce-u04` |
| Exercice d'unité | `fce-u<NN>-s<set>-q<n>` | `fce-u04-s2-q7` |
| Test de niveau | `fce-a<niveau>-<n>` | `fce-a3-5` |
| Item de test blanc | `fce-m<n>-<partie>-<n>` | `fce-m1-ru4-2` |

## Niveaux

Le niveau d'un item va de 1 à 6 : 1 = A1, 2 = A2, 3 = B1, 4 = B2, 5 = C1, 6 = C1+. Les unités vont de 3 à 5.

## Format des parties (helpers de `src/data/exams/b2First/build.ts`)

| Partie | Helper | Format |
| --- | --- | --- |
| RU1 Texte à trous (QCM) | `ru1(id, niveau, phrase, [clé, d1, d2, d3], expl, texte?)` | Un trou `___`. Quatre options du même type : collocation, verbe à particule, nuance de sens. **La clé vient en premier.** |
| RU2 Texte à trous libre | `ru2(id, niveau, phrase, [réponse, variante…], expl, texte?)` | **Un seul mot** : article, préposition, auxiliaire, pronom relatif, connecteur, quantifieur. On liste toutes les réponses correctes. |
| RU3 Formation des mots | `ru3(id, niveau, phrase, 'RADICAL', [réponse…], expl)` | Radical en MAJUSCULES, réponse en un mot, différente du radical (préfixe, suffixe, négation, pluriel). |
| RU4 Transformation avec mot clé | `ru4(id, niveau, phrase1, 'MOT', 'phrase 2 avec ___', [réponse…], expl)` | Réponse de **2 à 5 mots** (une contraction compte pour 2), qui **contient le mot clé** inchangé. On liste les variantes acceptables. |
| RU5 Compréhension | `ru5(id, niveau, texte, question, [clé, d1, d2, d3], expl)` | Texte de 150 à 300 mots, partagé par plusieurs questions. |
| RU6 Phrases manquantes | `ru6(id, niveau, texte, 'Which sentence fits gap 2?', [A…G], indexClé, expl)` | Texte avec trous numérotés `(1)`, `(2)`… et 7 phrases A–G, dans le même ordre pour toutes les questions du texte. Une phrase en trop. |
| RU7 Appariement multiple | `ru7(id, niveau, texte, 'Which person…?', ['A', 'B', 'C', 'D'], indexClé, expl)` | Texte en sections étiquetées « A — … », « B — … ». |
| LI1 Extraits courts | `li1(id, niveau, script, question, [clé, d1, d2], expl)` | Script de 60 à 120 mots, 3 options. Dialogues avec `W:` et `M:` en début de ligne. |
| LI2 Phrases à compléter | `li2(id, niveau, script, 'phrase avec ___', [réponse…], expl)` | Réponse de 1 à 3 mots, **entendue telle quelle dans le script**. |
| LI3 Appariement multiple | `li3(id, niveau, script, 'Speaker 2 …', [A…H], indexClé, expl)` | 5 locuteurs, 6 à 8 propositions A–H, dans le même ordre pour tous. |
| LI4 Entretien | `li4(id, niveau, script, question, [clé, d1, d2], expl)` | Entretien de 150 à 300 mots, 3 options. |

**Règles communes**

- Une seule réponse défendable. Les distracteurs sont plausibles mais faux.
- Dans un texte partagé par plusieurs questions, utiliser la même constante pour le texte et pour la liste d'options (RU6, RU7, LI3).
- Les exercices d'appariement de vocabulaire (`match`) sont interdits : ils reposent sur la liste de mots du TOEIC. Les phrases à remettre en ordre (`order`) sont autorisées.

## Unité

Une unité se construit avec `unit({ id, emoji, level, part, title, subtitle, lesson }, set1, set2)`. Ses éléments :

- `lesson(objectif, [3 à 4 points], 'exemple en anglais', note)`. Le mini-cours enseigne la stratégie de la partie et le point de langue.
- `part` : les parties travaillées, par exemple `'RU2 · RU4'`.
- **Deux séries de 8 à 10 exercices.** La deuxième série reprend le même point avec des phrases nouvelles.
