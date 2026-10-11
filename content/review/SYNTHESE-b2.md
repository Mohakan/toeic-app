# Synthèse : relecture du contenu de Toki Quest B2 (378 items)

Date : 2026-10-11. Le contenu a été écrit par des agents qui suivaient le guide `docs/multi-examens/b2-contenu.md`. Il a ensuite été relu avec la même méthode que les TOEIC blancs.

## Ce qui a été relu

| Lot | Items |
| --- | --- |
| Unités 01 à 06 | 118 exercices |
| Unités 07 à 12 | 120 exercices |
| Test de niveau | 60 |
| Examens blancs mini 1 et 2 | 78 |

S'y ajoutent 2 phrases à remettre en ordre, non relues.

## Méthode

1. **Contrôle automatique** (`src/data/exams/b2First/content.test.ts`) : format de chaque partie, nombre d'options, réponses tapées (un mot en RU2 et RU3 ; 2 à 5 mots en RU4 avec le mot clé inchangé ; en LI2, réponse entendue dans l'enregistrement), explications en 4 langues, absence de doublons avec le TOEIC.
2. **Résolution à l'aveugle** : 4 agents ont résolu les 376 items sans clé. Pour les réponses tapées, ils ont aussi donné toutes les autres réponses qu'ils jugeaient correctes.
3. **Relecture selon la grille** : 4 agents ont relu les items avec leur clé. Rapports : `b2-unites-01-06.md`, `b2-unites-07-12.md`, `b2-test-de-niveau.md`, `b2-examens-blancs.md`.
4. **Vérification** : chaque signalement a été vérifié dans la source avant d'être corrigé.

## Résultats

- **Clés** : une seule divergence sur 376, `fce-m1-ru1-2`. Le solveur avait choisi « catch », mais « catch public attention **to** » n'est pas correct ; la clé « draw » est juste et l'item est conservé.
- **Correction systémique** : la plupart des signalements bloquants venaient de réponses correctes absentes de la liste, souvent une forme contractée ou pleine. Le moteur de correction (`src/services/typedAnswer.ts`) considère maintenant une contraction et sa forme pleine comme la même réponse : « wouldn’t » = « would not », « he’d » = « he would » ou « he had ». Cette correction vaut pour toutes les applis.
- **Réponses ajoutées** : 18 items (unités 04, 05, 08 et 12, examens blancs) acceptent maintenant des formulations correctes qui étaient refusées. Exemples :
  - « has to be handed in » ;
  - « not for » (mot clé FOR) ;
  - « grown used to » ;
  - « Notwithstanding » ;
  - « all week » ;
  - « had no need to bring ».
- **Variantes écartées** : trois variantes proposées dépassaient 5 mots, la limite de la partie 4. Le contrôle automatique les a refusées et elles n'ont pas été ajoutées.
- **Items réécrits** :
  - `fce-u02-s1-q4` : « again », « now » et « here » convenaient aussi. La phrase impose désormais « anywhere else ».
  - `fce-u12-s1-q3` : la clé « didn’t » comptait pour deux mots en partie 2. La phrase devient « you ___ not tell », de clé « did ».
- **Distracteur remplacé** : `fce-m1-ru1-3` passe de « achieved » à « collected », car « achieved a reputation » est attesté.
- **Test de niveau** : `fce-a6-2`, `fce-a6-3` et `fce-a6-10` passent du niveau 6 au niveau 5, leur difficulté réelle.

## Reste à faire

- Faire valider les items MINEUR et DOUTEUX restants par un enseignant (voir les rapports). Par exemple, deux items du test de niveau disent « She » alors que le genre du locuteur n'est pas précisé.
- Les niveaux et les paramètres des questions restent provisoires tant qu'ils n'ont pas été calibrés sur de vrais candidats.
- Le Writing et le Speaking du B2 First ne sont pas encore couverts.
