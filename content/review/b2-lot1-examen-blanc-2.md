# Relecture B2 — lot 1, examen blanc complet 2 (`fce-full-2`)

82 items relus (`fce-m4-*`) : **54 OK · 4 BLOQUANT · 10 À CORRIGER · 3 DOUTEUX · 11 MINEUR**

Chaque item est compté une fois, sous son verdict le plus grave. `fce-m4-ru7-8` est compté en À CORRIGER, mais il a aussi une remarque MINEUR. Sources : `src/data/exams/b2First/mocks/full-2-reading.ts` et `full-2-listening.ts`.

## Jugement d'ensemble

**C'est un vrai sujet B2 First, publiable une fois les 4 BLOQUANT corrigés et l'ordre du RU7 refait.** Les thèmes sont variés et adaptés au public (énergie solaire au Maroc, tandem linguistique Sfax–Leipzig, friperie à Marseille, romancière, aviron, année de césure, vélo Séville–Merzouga, petits boulots, photographe animalière). L'anglais est naturel et sans faute. Les clés des QCM et des appariements sont toutes justes. Les explications en arabe et en espagnol suivent bien le français : même raisonnement, mêmes citations, à quelques omissions près qui ne gênent pas.

Le sujet est plutôt **dans la moitié facile** d'un vrai sujet :

- **RU1, RU2, RU4 et LI4 sont bien calibrés.**
- **RU3 est trop facile.** Il n'a aucun préfixe négatif et aucune double transformation (préfixe + suffixe). Seul `worn` est irrégulier. Un vrai Part 3 en contient en général un ou deux.
- **RU5 est un peu direct.** Les six questions reprennent presque mot pour mot une citation. Aucune ne porte sur le sens d'une expression, sur une référence ou sur l'intention de l'auteure, et le 5e paragraphe (les visites dans les lycées) n'a pas de question.
- **RU6 est un peu facile.** Les indices de cohésion sont très visibles (« This pattern », « Each time », « That way », « It is that… »), et la phrase en trop (A) ne ressemble à aucun trou.
- **RU7 a un vrai défaut de format** : les questions suivent l'ordre du texte (A A B B C C D D E E), ce qui donne les réponses.
- **LI2** : plusieurs phrases à compléter reprennent mot pour mot la phrase du script (« dates and ___ », « a small ___ »). Peu de trous ont un vrai distracteur entendu juste à côté.

**Points de format demandés** :

- **RU6** : chaque trou reçoit exactement une phrase (1 C, 2 B, 3 F, 4 E, 5 D, 6 G). A ne convient à aucun trou.
- **RU7 et LI3** : chaque question n'a qu'une seule réponse. En LI3, D, G et H sont en trop. G est exclu au locuteur 3 par « no regrets » et H au locuteur 1 par « I didn't mind ».
- **LI2** : les 10 réponses s'entendent telles quelles dans le script, dans l'ordre des questions.
- **RU4** : toutes les clés font 2 à 5 mots et contiennent le mot clé inchangé. Trois items oublient en revanche des réponses correctes (BLOQUANT ci-dessous).

**Longueur des textes** (nombre de mots, comparé au format réel) :

| Partie | Mots | Format réel | Avis |
| --- | --- | --- | --- |
| RU1 | 221 | env. 150–200 | un peu long, acceptable |
| RU2 | 251 | env. 150–200 | un peu long, acceptable |
| RU3 | 200 | env. 150–200 | conforme |
| RU5 | 599 | 550–650 | conforme |
| RU6 | 416 (+ 7 phrases ≈ 520) | 500–650 avec les phrases | conforme, plutôt court |
| RU7 | 467 | env. 600–700 | **court** |
| LI1 | 90–103 par extrait | 60–120 | conforme |
| LI2 | 492 | env. 550–650 | un peu court |
| LI3 | 381 (≈ 75 par locuteur) | env. 5 × 80–100 | conforme |
| LI4 | 594 | env. 550–700 | conforme |

## Items à reprendre

| id | verdict | critère | problème | correction proposée |
| --- | --- | --- | --- | --- |
| `fce-m4-ru3-8` | BLOQUANT | 1. Clé (réponses acceptées) | « does little to reduce the **overproduction** of new clothes » est correct, naturel et dans le sujet (c'est justement le reproche fait à la mode). C'est une forme de PRODUCE en un mot, mais elle serait refusée. | Réponses : `['production', 'overproduction']`. Explications : ajouter à la fin — fr : « « Overproduction » (surproduction) est aussi accepté. » ; ar : «وتُقبل أيضًا «overproduction» أي الإفراط في الإنتاج.» ; en : “overproduction” is also accepted. ; es : «También se acepta «overproduction» (sobreproducción).» |
| `fce-m4-ru4-3` | BLOQUANT | 1. Clé (réponses acceptées) | « Lina **has grown used to getting** up at six every day » (5 mots, contient USED) est aussi courant que « has got used to » et « has become used to », qui sont acceptés. Il serait refusé. | Réponses : `['is used to getting', 'has got used to getting', 'has become used to getting', 'has grown used to getting']`. Un enseignant peut aussi trancher sur `'has been used to getting'` (5 mots, correct mais moins idiomatique sans « for years »). |
| `fce-m4-ru4-4` | BLOQUANT | 1. Clé (réponses acceptées) · 4. Format | « Omar **has been learning to play** the guitar for three years » (5 mots, contient BEEN) est tout à fait correct et naturel, mais il n'est pas accepté. De plus, l'item ne teste qu'un seul point (le present perfect continu), qui est de niveau B1. Il ne mérite pas le niveau 4. | Réponses : `['has been learning', 'has been learning to play']`. Niveau 3. Ou bien, pour un vrai item B2, prendre la phrase 1 « Omar took up the guitar three years ago. », le mot clé BEEN et la phrase 2 « Omar ___ the guitar for three years. », avec les réponses `['has been playing', 'has been learning', 'has been learning to play']`. Explication — fr : « « Take up » = commencer une activité qui dure encore → present perfect continu avec « for » : « has been playing ». » ; ar : «‏«take up» تعني البدء في نشاط ما زال مستمرًا ← المضارع التام المستمر مع «for»: «has been playing».» ; en : “took up… three years ago” → has been playing for three years. ; es : «‏«Take up» = empezar una actividad que continúa → present perfect continuo con «for»: «has been playing».» |
| `fce-m4-ru4-5` | BLOQUANT | 1. Clé (réponses acceptées) | La liste accepte « suggested catching » mais aucune forme avec « we/they catch », et aucune forme avec « get », pourtant très courant en anglais britannique (« get the train »). Des réponses justes seraient comptées fausses : « suggested getting », « suggested we catch », « suggested that we should get »… | Ajouter : `'suggested getting'`, `'suggested that we catch'`, `'suggested we catch'`, `'suggested that we should catch'`, `'suggested we should catch'`, `'suggested that we get'`, `'suggested we get'`, `'suggested that we should get'`, `'suggested we should get'`, `'suggested that they catch'`, `'suggested they catch'`, `'suggested that they should catch'`, `'suggested they should catch'`, `'suggested that they get'`, `'suggested they get'`, `'suggested that they should get'`, `'suggested they should get'`. Toutes font 5 mots au plus. |
| `fce-m4-ru7-1` à `fce-m4-ru7-10` | À CORRIGER | 4. Format | Les 10 questions suivent l'ordre des sections : A, A, B, B, C, C, D, D, E, E. Au vrai examen, les questions ne suivent jamais l'ordre du texte. Ici, un candidat qui a trouvé deux réponses peut deviner les autres. La partie perd sa fonction (repérer l'information dans tout le texte). | Dans `fceFull2Reading`, mettre les items dans cet ordre : `ru7-3, ru7-9, ru7-5, ru7-1, ru7-8, ru7-6, ru7-2, ru7-10, ru7-7, ru7-4`. Les clés deviennent B E C A D C A E D B. On peut garder les ids, ou les renuméroter de 1 à 10 dans le nouvel ordre. |
| `fce-m4-ru2-3` | DOUTEUX | 1. Clé | « What made the exchange work was that **each** of them was an expert » se défend : chacune est experte de sa langue maternelle, et la phrase suivante (« ten minutes later I would be correcting her ») va dans le sens d'une correction réciproque. La clé « neither » repose sur le paragraphe suivant (« easier to relax with a friend than with a teacher »), qui arrive après le trou. | Lever l'ambiguïté dans le texte et dans le prompt : « What made the exchange work, they agree, was that (3) ___ of them was an expert: they were both learners. » Clé inchangée : `['neither']`. |
| `fce-m4-ru4-1` | DOUTEUX | 1. Clé (réponses acceptées) | « Nobody else in our class speaks Spanish **quite as well as** Karim » (4 mots) garde le sens, puisque personne n'est son égal. C'est une tournure très fréquente, mais elle serait refusée. | Si un enseignant l'accepte : `['as well as', 'so well as', 'quite as well as']`. |
| `fce-m4-ru4-2` | DOUTEUX | 1. Clé (réponses acceptées) | « Nadia **can't possibly have forgotten** your birthday on purpose » (5 mots, la contraction compte pour 2) est naturel et rend le « I'm sure » de départ. Cambridge accepte souvent un adverbe d'insistance qui ne change pas le sens. | Si un enseignant l'accepte : `["can't have forgotten", "can't possibly have forgotten"]`. « cannot » est déjà couvert par la normalisation. |
| `fce-m4-ru3-7` | MINEUR | 4. Format (niveau) | « repair damaged clothes » est l'item le plus facile d'un RU3 déjà facile. Le texte n'a aucun préfixe négatif ni aucune double transformation, alors qu'un vrai Part 3 en a en général un ou deux. | Texte et prompt : « She also runs workshops where she shows people how to repair clothes that are often thrown away (7) ___ (NECESSARY). » Réponses : `['unnecessarily']`, niveau 5. Explications — fr : « Après le verbe « thrown away », il faut un adverbe. Le sens (des vêtements qu'on pourrait réparer) impose le préfixe négatif : « unnecessarily » (un- + -ly). » ; ar : «بعد الفعل «thrown away» نحتاج إلى ظرف، والمعنى (ملابس يمكن إصلاحها) يقتضي البادئة النافية: «unnecessarily» (un- + -ly).» ; en : Adverb after “thrown away”, with a negative prefix: unnecessarily. ; es : «Tras el verbo «thrown away» hace falta un adverbio, y el sentido (ropa que se podría reparar) exige el prefijo negativo: «unnecessarily» (un- + -ly).» |
| `fce-m4-ru6-1` à `fce-m4-ru6-6` | MINEUR | 2. Distracteurs | La phrase en trop A (« Their families followed their progress every day on a map… ») n'a aucun mot de liaison et ne ressemble à aucun trou : on l'écarte d'emblée. Avec des indices aussi visibles que « This pattern », « Each time » et « That way », la partie devient facile. | Remplacer A par une phrase qui semble convenir au trou 1 mais qui contredit le texte : `'A They had both been sailing since they were children, so the open sea held few surprises for them.'` Elle contredit « Neither of them had sat in a rowing boat before the age of twenty-five » et « We weren't athletes or sailors ». Clés inchangées. |
| `fce-m4-ru7-8` | MINEUR | 2. Distracteurs | Yanis (A) dit que ses collègues, plus âgés et inconnus, l'intimidaient « at first ». Un candidat peut y voir une difficulté surmontée avec des inconnus. D reste nettement la meilleure réponse, mais l'énoncé peut être plus précis. | Prompt : « Which person overcame a long-standing difficulty in talking to people they did not know? » (cf. « something I had always been terrible at »). Clé et explications inchangées. |
| `fce-m4-ru1-7` | MINEUR | 5. Explications | L'explication en anglais glose « fit in with » par « look right next to », ce qui n'est ni une définition ni un anglais naturel. | en : Phrasal verb: “fit in with” = match its surroundings. |
| `fce-m4-li2-7` | MINEUR | 2. Distracteurs · 4. Format | La phrase reprend « dates and ___ » tel quel : on répond à l'oreille, sans rien comprendre. Au vrai Part 2, la phrase autour du trou est reformulée. | Prompt : « Adam recommends buying ___ and dates in villages rather than carrying energy bars. » Réponse inchangée : `['bread']`. L'explication reste valable. |
| `fce-m4-li2-3` | MINEUR | 2. Distracteurs | Aucun autre objet n'est cité près de la réponse : « tent » est le seul nom possible et il n'y a pas de piège. | Script : « We'd packed a tent and a small stove. We used the stove almost every day, but the tent only five or six times, because everywhere we went, families invited us to stay. » Réponse inchangée : `['tent']`. Explications — fr : « On entend : « We used the stove almost every day, but the tent only five or six times », car des familles les invitaient. Le réchaud (« stove ») servait tous les jours. » ; ar : «نسمع: «We used the stove almost every day, but the tent only five or six times»، لأن العائلات كانت تستضيفهما، أما الموقد («stove») فاستُعمل كل يوم تقريبًا.» ; en : Heard: “the tent only five or six times”; the stove was used daily. ; es : «Se oye: «We used the stove almost every day, but the tent only five or six times», porque las familias los invitaban. El hornillo («stove») se usaba a diario.» |
| `fce-m4-li4-6` | MINEUR | 5. Explications | La citation entre guillemets n'est pas celle du script. Le script dit « he'd stopped putting out poison… », alors que les explications en fr, ar et es citent « had stopped putting out poison… ». | Remplacer la citation par « he’d stopped putting out poison for them after seeing it » en fr, ar et es. Le reste est inchangé. |

## Ce qui va bien (pour mémoire)

- **RU1** : 8 trous de types variés (collocation, verbe à particule, expression figée, nuance de sens). Les distracteurs sont de la même catégorie et aucun n'est défendable.
- **RU2** : bon équilibre entre préposition, expression, quantifieur, sujet apparent, concession, relatif possessif et « if anything » (niveau C1, bien placé en dernier). « until » et « till » sont bien acceptés tous les deux.
- **RU5** : chaque question a un vrai distracteur tiré du texte (le frère et la pharmacie, « twice as long », « furious »).
- **LI1** : les 8 extraits ont des questions de types variés (opinion, but, relation, lieu, accord, surprise, fonction), avec de bons pièges. Exemples : l'opinion de la femme sur le film, « You won't need to », « My dad says ».
- **LI3** : chaque locuteur a un distracteur bien construit (H pour le locuteur 1, G pour le locuteur 3).
- **LI4** : les distracteurs reprennent des éléments réels de l'entretien (le téléphone, les réseaux sociaux, les magazines, l'Afrique) sans être défendables.
