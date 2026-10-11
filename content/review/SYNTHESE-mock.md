# Synthèse : relecture des TOEIC blancs (688 items)

Date : 2026-10-11. Grille appliquée : [GRILLE.md](GRILLE.md). Les corrections des items BLOQUANT et À CORRIGER ont été appliquées (voir la dernière section).

## Méthode

Deux passes indépendantes ont été faites, puis une vérification manuelle.

1. **Résolution à l'aveugle** : 7 agents ont résolu les 688 items sans clé ni explications et sans accès au code. Les options étaient affichées dans l'ordre mélangé de l'application.
2. **Relecture selon la grille** : 7 agents ont relu les mêmes items avec la clé, en appliquant `GRILLE.md`. Les rapports détaillés sont dans `mock-*.md`.
3. **Vérification** : chaque item classé BLOQUANT a été relu dans la source avant d'être retenu ici.

## Résultat de la résolution à l'aveugle

**688 réponses sur 688 concordent avec la clé.** Aucune clé n'est fausse. Les solveurs ont signalé 10 items comme ambigus. Ils recoupent la liste ci-dessous (`f1-r7-52`, `f2-r5-1`, `m6-l2-3`, etc.).

## Bilan de la relecture selon la grille

| Rapport | OK | BLOQUANT | À CORRIGER | DOUTEUX | MINEUR |
| --- | --- | --- | --- | --- | --- |
| [Complet 1, écoute](mock-full-1-listening.md) | 84 | 2 | 0 | 1 | 7 |
| [Complet 1, lecture](mock-full-1-reading.md) | 92 | 1 | 3 | 1 | 3 |
| [Complet 2, écoute](mock-full-2-listening.md) | 86 | 0 | 2 | 0 | 6 |
| [Complet 2, lecture](mock-full-2-reading.md) | 91 | 1 | 2 | 1 | 5 |
| [Mini 1 et 2](mock-mini-1-2.md) | 86 | 1 | 3 | 1 | 9 |
| [Mini 3 et 4](mock-mini-3-4.md) | 91 | 0 | 3 | 1 | 5 |
| [Mini 5 et 6](mock-mini-5-6.md) | 91 | 1 | 3 | 0 | 5 |
| **Total** | **621** | **6** | **16** | **5** | **40** |

## À corriger avant publication

### BLOQUANT : deux réponses défendables (6 items, tous vérifiés dans la source)

| id | Problème |
| --- | --- |
| `f1-l2-12` | À « Didn't the new software arrive last week? », le distracteur « Next week, I think. » est aussi une réponse naturelle. |
| `f1-l3-39` | Prise à la lettre, la phrase « the first morning they're here » désigne mardi. La clé « Wednesday » ne tient que si l'on recoupe avec l'inspection. Il faut reformuler la réplique. |
| `f1-r5-5` | « checked the server when the power went off » est aussi grammatical que « were checking ». |
| `f2-r5-1` | « The bank is open at eight o'clock » est aussi correct que « opens ». |
| `m2-r5-8` | « conditioned on » est une formule courante en anglais américain, à côté de « conditional on ». |
| `m6-r7-1` | « Water and coffee » sont des boissons comprises, donc le distracteur « A free drink » est lui aussi vrai. |

La correction exacte de chaque item figure dans le rapport correspondant.

### Incohérences dans les documents (clé inchangée)

- `f1-r7-47` : la lettre dit que le projet s'est terminé « more than 12 months ago », alors qu'il s'est terminé en décembre de l'année précédente et que la date limite est le 30 juin, soit environ 6 mois. C'est à corriger en priorité.
- `f1-r7-52` : il faut préciser que les frais de 40 dinars s'ajoutent à ceux du 2e bagage.
- `f2-l3-38` : l'audio ne dit pas à quel étage se trouvent les locuteurs.
- `f2-l3-4` à `f2-l3-6` : le dialogue sur la pause et le déjeuner est illogique.
- `f1-r7-26` : la comparaison est fautive (« rent … higher than the first office »).

### Quasi-doublons d'items existants (8 items)

Ces items reprennent une question du test de niveau ou d'une unité, ce que la règle du projet interdit :

- `m1-r5-2` (reprend `a4-g3`), `m2-r5-6` (`a4-v1`), `m3-r5-1` (`a2-g2`), `m3-r5-3` (`a5-g3`), `m4-r5-5` (`a3-g2`), `m6-r5-6` (`a4-v2`), `f2-r5-23` (`a6-g1`) ;
- `m6-r5-5` reprend `b1-gi-s2-q1`, du curriculum B1.

Le contrôle des quasi-doublons de `content:check` ne les a pas détectés : il compare le texte, alors que ces items reprennent le même point testé, le même cadre et les mêmes options. Il faudrait le renforcer, par exemple en comparant aussi les ensembles d'options.

### Autres corrections

- `m6-l2-3` : « How much does the fee include? » doit devenir « What does the fee include? ».
- `m2-r7-14` : « قبل الجمعة » et « antes del viernes » excluent vendredi, alors que « by Friday » l'inclut.
- `f2-r7-28` : « A safety training » est fautif, car le nom est indénombrable dans ce sens.

## À trancher par un enseignant (DOUTEUX)

- `m4-r5-7` et `f2-r5-25` : le subjonctif est attendu, mais l'indicatif est accepté en anglais britannique.
- `f1-r5-4` : « closed for public holidays » face à « closed on public holidays ».
- `f1-l2-21` et `m1-l2-4` : un distracteur de partie 2 peut se lire comme une réponse naturelle.

## Corrections appliquées (2026-10-11)

Les 6 items BLOQUANT et les 16 items À CORRIGER ont été corrigés dans `src/data/mock/`. Les propositions des rapports ont été reprises, avec ces écarts :

- 3 propositions de remplacement reprenaient elles-mêmes un item du curriculum. Elles ont été remplacées par d'autres items :
  - `f2-r5-23` : la proposition reprenait « Only after… », déjà testé par `c1-ag-q1`. Le nouvel item est « At no time ___ the customer informed of the delay. ».
  - `m3-r5-3` : la proposition reprenait « look forward to », déjà testé par `b1-gi-s2-q4`. Le nouvel item est « thinking about ___ ».
  - `m6-r5-5` : la proposition reprenait « consider », déjà testé par `b1-gi-s3-q1`. Le nouvel item est « put off ___ ».
- `f1-l3-39` : une nouvelle résolution à l'aveugle a montré que la 2e réplique restait ambiguë, car le responsable pouvait être là toute la journée le jour de l'inspection. La réplique et le graphique ont été précisés : « he isn’t available at all », « safety inspection (no visits) ».

Vérification :
- les 26 items modifiés ou touchés par un texte modifié ont été résolus de nouveau à l'aveugle, et tous concordent avec la clé ;
- `npx tsc --noEmit`, `npm test` (151 tests) et `npm run content:check` (50 tests) passent.

## Suite proposée

1. Renforcer le contrôle des quasi-doublons de `content:check`, par exemple en comparant aussi les ensembles d'options.
2. Soumettre les 5 items DOUTEUX et les 40 MINEUR à l'enseignant.
