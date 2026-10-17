# Relecture B2 — examen blanc complet 1 (`fce-full-1`)

82 items relus (Reading and Use of English : 52 · Listening : 30) : **68 OK · 3 BLOQUANT · 3 À CORRIGER · 2 DOUTEUX · 6 MINEUR**

Sources : `src/data/exams/b2First/mocks/full-1-reading.ts` et `full-1-listening.ts` (identifiants `fce-m3-…`). Le contrôle automatique `npx vitest run src/data/exams/b2First` passe (9 tests).

## Jugement d'ensemble

**C'est un sujet de B2 First crédible, publiable une fois les 3 items BLOQUANT corrigés.** Il respecte la structure de l'examen : 7 + 4 parties, avec le bon nombre d'items par partie (8/8/8/6/6/6/10 et 8/10/5/7) et le bon nombre d'options (4 en RU1 et RU5, 3 en LI1 et LI4, 7 phrases en RU6, 8 propositions en LI3). Les thèmes sont variés et adaptés au public (street food, code, habitudes, guide de montagne, cinéma de quartier, jeunes entrepreneurs, tortues marines, musique, restauration), et les contextes mélangent Maghreb, Europe et monde. L'anglais est naturel et l'orthographe britannique est cohérente. Les explications sont justes et cohérentes entre les quatre langues, à une exception près (`fce-m3-ru4-3`, où les quatre langues affirment une règle fausse).

**Clés.** Aucune clé de QCM n'est fausse. Les 3 BLOQUANT sont tous des items à réponse tapée où une réponse correcte serait refusée (`ru2-8`, `ru4-3`, `li2-3`). Deux items RU4 acceptent au contraire une réponse qui change le sens (`ru4-2`, `ru4-6`).

**Contrôles demandés.**

- **RU6** : chaque trou admet une seule phrase (D, E, G, A, C, F). La phrase en trop, B, ne convient à aucun trou : elle n'a pas de lien logique au trou 2 ou 4, et au trou 6 elle contredit le bail de dix ans accordé ensuite. C'est un bon leurre, car il reprend les « eighteen months ». Il reste une incohérence de contenu entre A et C (voir `ru6-4`).
- **RU7** : les 10 questions ont chacune une seule section possible (2 par section). Les leurres croisés sont bien construits, par exemple B « someone suggested I should charge for it » face à A pour « charge more ».
- **LI3** : chaque locuteur correspond à une seule proposition (B, D, F, G, A). C, E et H sont bien en trop, avec des pièges réels : les vidéos abandonnées (S1), la flûte à bec (S5) et le frère (S2).
- **LI2** : les 10 réponses s'entendent mot pour mot dans le script et suivent l'ordre du script. Chacune a un distracteur réaliste (« ten weeks », « six », « white », « insect repellent », « plastic », « the market », « research », « university website »), sauf `li2-3` et `li2-6`. Les nombres en chiffres sont acceptés par `isAcceptedAnswer` (« 12 weeks », « 4 »).
- **RU4** : les 6 réponses font de 3 à 5 mots et contiennent le mot clé inchangé (AS, DUE, SPITE, SUCCEEDED, LOOKING, THOUGHT).

**Longueur des textes, comparée au vrai examen.**

| Partie | Mots | Vrai examen | Avis |
| --- | --- | --- | --- |
| RU1 / RU2 / RU3 | 220 / 221 / 197 | 150 à 200 environ | Correct (RU1 et RU2 un peu longs, sans gêne). |
| RU5 | 593 | 550 à 650 | Conforme. |
| RU6 | 301 (≈ 410 avec les phrases) | 500 à 600 environ | **Trop court** (voir le tableau des remarques sur l'ensemble). |
| RU7 | 488 | 600 à 700 environ | Un peu court. |
| LI1 | 86 à 107 par extrait | ≈ 30 s | Conforme. |
| LI2 | 459 | ≈ 3 à 4 min | Conforme. |
| LI3 | 353 (≈ 70 par locuteur) | ≈ 30 s par locuteur | Conforme. |
| LI4 | 552 | ≈ 3 à 4 min | Conforme. |

**Équilibre de difficulté.** Les items se répartissent ainsi : niveau 3 (B1) : 16 · niveau 4 (B2) : 52 · niveau 5 (C1) : 14. Ce profil correspond bien au B2 First. Le sujet est toutefois **un peu plus facile que le vrai examen** sur trois points :

- en RU2, 3 trous sur 8 testent des prépositions ou des particules très fréquentes (« proud of », « keen on », « gave up ») ;
- en RU4, deux items ne demandent qu'une transformation au lieu des deux habituelles (`ru4-1`, `ru4-3`) ;
- en RU7, plusieurs questions reprennent les mots du texte au lieu de les paraphraser (`ru7-2`, `ru7-9`).

Le Listening est bien calibré : les pièges sont nombreux et le schéma « d'abord X, en fait Y » est réaliste. La Part 5 (RU5) est de bon niveau, avec une question de référence (`ru5-6`) et une question sur le sens global d'une anecdote (`ru5-5`).

## Remarques sur l'ensemble de l'épreuve (hors décompte des items)

| id | verdict | critère | problème | correction proposée |
| --- | --- | --- | --- | --- |
| `RU6_TEXT` (`fce-m3-ru6-1` à `-6`) | À CORRIGER | 4. Format | Le texte fait 301 mots, soit environ 410 avec les six phrases insérées. Le texte de la Part 6 du vrai examen fait 500 à 600 mots environ, et chaque paragraphe y est plus développé autour du trou. | Allonger chaque paragraphe d'une ou deux phrases sans toucher aux indices de cohésion autour des trous. Par exemple, après « The answer surprised them. », ajouter : « Most of them had assumed it belonged to a property developer waiting for prices to rise. » ; à la fin du 4e paragraphe, ajouter : « The rest of the money came from a local bank, which agreed to sponsor the Saturday matinées. » |
| `RU7_TEXT` (`fce-m3-ru7-1` à `-10`) | MINEUR | 4. Format | 488 mots, contre 600 à 700 au vrai examen. | Ajouter 2 ou 3 phrases neutres par section (sans créer de nouvelle correspondance avec les 10 questions). |

## Items

| id | verdict | critère | problème | correction proposée |
| --- | --- | --- | --- | --- |
| `fce-m3-ru2-8` | BLOQUANT | 1. Clé (réponses acceptées) | « technology is something they can create, as **much** as something they use » est parfaitement correct et naturel (« autant que »). Un bon candidat peut taper « much », qui serait compté faux. | Réponses : `['well', 'much']`. Explications — fr : « Locution « as well as » (en plus de) ou « as much as » (autant que) : la technologie est à créer, pas seulement à utiliser. » ; ar : «العبارة «as well as» (بالإضافة إلى) أو «as much as» (بقدر ما): التكنولوجيا شيء يُصنع لا يُستعمل فقط.» ; en : Linker: “as well as” (or “as much as”). ; es : «Locución «as well as» (además de) o «as much as» (tanto como): la tecnología se crea, no solo se usa.» |
| `fce-m3-ru4-3` | BLOQUANT | 1. Clé (réponses acceptées) + 5. Explications | « The match continued **in spite of** heavy rain » est correct (3 mots, contient SPITE), mais seul « in spite of the » est accepté. Les quatre explications affirment à tort que « the » est nécessaire devant « heavy rain ». De plus, l'item ne demande qu'une seule transformation, ce qui est faible pour la Part 4. | Réponses : `['in spite of the', 'in spite of']`. Explications — fr : « « Although » + proposition → « in spite of » + groupe nominal : « in spite of (the) heavy rain ». » ; ar : «‏«Although» + جملة ← «in spite of» + مركّب اسمي: «in spite of (the) heavy rain».» ; en : “Although + clause” → “in spite of (the) + noun”. ; es : «‏«Although» + oración → «in spite of» + sintagma nominal: «in spite of (the) heavy rain».» Pour un item plus exigeant, on peut aussi remplacer la phrase 2 par : `The match continued ___ heavily.`, avec les réponses `['in spite of it raining', 'in spite of the rain falling']` (à faire valider). |
| `fce-m3-li2-3` | BLOQUANT | 1. Clé (réponses acceptées) | « The interns lived in an old **school** at the edge of a fishing village » donne l'information exacte, et la phrase est correcte. L'item `li2-7` accepte d'ailleurs le nom seul (« notebook »). Un candidat qui écrit « school » serait compté faux. | Réponses : `['school building', 'school']`. |
| `fce-m3-ru4-6` | À CORRIGER | 1. Clé (réponse acceptée à tort) | « were thought to have arrived » est accepté. Or la phrase de départ est au présent (« People think »), et « were thought » veut dire que l'on croyait cela autrefois : le sens change. Au vrai examen, cette réponse serait refusée. | Réponses : `['are thought to have arrived']`. |
| `fce-m3-ru4-2` | À CORRIGER | 1. Clé (réponse acceptée à tort) | « was mainly due to » est accepté, alors que « mainly » ajoute une information absente de la phrase de départ (la grève n'est plus la seule cause). « entirely » ajoute aussi une nuance que Cambridge ne valoriserait pas. | Réponses : `['was due to']`. Si l'on tient à garder un intensif, conserver seulement `'was entirely due to'`. |
| `fce-m3-ru6-4` | À CORRIGER | 3. Cohérence du texte | A promet « a seat with the donor's name on it » pour chaque contribution, et le texte dit ensuite que « more than six hundred people had contributed ». Or C (trou 5) indique que la salle n'a que « three hundred seats ». Un lecteur attentif relève l'incohérence. La clé n'est pas touchée. | Phrase A : « In desperation, they launched an online appeal, promising to print the name of everyone who made a contribution on a wall in the foyer. » (l'indice « contribution » → « had contributed » est conservé ; explications inchangées). |
| `fce-m3-ru2-6` | DOUTEUX | 1. Clé (réponses acceptées) | « there were moments when he almost gave **in** » (céder, s'avouer vaincu) est correct et assez naturel face à des bugs qui « took me days to fix ». « up » reste la réponse la plus naturelle. Un enseignant doit trancher. | Si l'on accepte : `['up', 'in']`, et ajouter à l'explication fr : « (« gave in », céder, est aussi accepté) », en reprenant la même mention en ar, en et es. Sinon, rendre « in » impossible : « …when he almost gave ___ **on the whole idea**. » (seul « up on » convient). |
| `fce-m3-li2-9` | DOUTEUX | 1. Clé (réponses acceptées) | « moved to the **school** » reste vrai et compréhensible, mais il perd la précision « primary ». Le nom seul est accepté en `li2-7` et proposé en `li2-3`. | À trancher par un enseignant. Si l'on applique la même règle qu'en `li2-3` : `['primary school', 'school']`. |
| `fce-m3-ru4-1` | MINEUR | 4. Niveau | Une seule transformation, très guidée (« better than » → « not as well as »), alors qu'un item RU4 en teste en général deux. Le niveau 3 est donc juste, mais l'item est faible pour un examen blanc complet. | Remplacer par : phrase 1 « Leila speaks English much better than I do. », mot clé NEARLY, phrase 2 « I don't speak English ___ Leila. », réponses `['nearly as well as', 'nearly so well as']`. |
| `fce-m3-ru7-2` | MINEUR | 2. Distracteurs / format | La question reprend le texte mot pour mot (« throw away » ↔ « throw the whole lot away »). Au vrai examen, la question paraphrase le texte. | Question : « Which person had to start again after a first attempt failed completely? » |
| `fce-m3-ru7-9` | MINEUR | 2. Distracteurs / format | Même problème : « other people working for them » ↔ « three other students working for me ». | Question : « Which person now employs some of their fellow students? » |
| `fce-m3-ru7-8` | MINEUR | 5. Explications | L'explication anglaise met entre guillemets une citation qui n'est pas dans le texte (« worn twice and then thrown away »). Le texte dit « wear twice and then throw away ». | en : C hated clothes “people wear twice and then throw away”. |
| `fce-m3-li4-4` | MINEUR | 5. Explications | Les explications fr et es citent « If the tomatoes are bad, there are no tomatoes. » en coupant la phrase sans points de suspension. Le script dit « …there are no tomatoes on the menu. » | fr : « « It changes every week, because I write it… after I’ve been to the market. If the tomatoes are bad, there are no tomatoes on the menu. » » ; es : «It changes every week, because I write it… after I’ve been to the market. If the tomatoes are bad, there are no tomatoes on the menu.» |
| `fce-m3-ru2-5` | MINEUR | 5. Explications (arabe) | « تقريبًا أبدًا » est un calque de « almost never », peu naturel en arabe standard. | ar : «‏«hardly ever» تعني «نادرًا ما»: ظرف التكرار «ever» يكمّل «hardly» قبل الفعل.» |
