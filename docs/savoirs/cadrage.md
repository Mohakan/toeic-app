# Toki Quest Savoirs : cadrage

Rédigé le 2026-10-17. Identité de l'appli (Framboise, Toki au livre des savoirs) : `Toki – Brief mascotte & palette.md`. Place dans la famille : `docs/multi-examens/plan.md`.

## L'idée

Au lycée tunisien, les élèves passent à des cours en français, alors qu'ils ont souvent fait leurs matières scientifiques en arabe jusqu'à la 9e année de base. Beaucoup bloquent sur les mots plutôt que sur les idées : « hypoténuse », « réactif limitant », « mitose », « justifier », « en déduire ».

Toki Quest Savoirs reprend les supports de cours de la 1re à la 4e année secondaire. Il en extrait les notions et les mots difficiles de chaque matière enseignée en français, et les explique simplement, en jouant.

## Public

- Les élèves tunisiens du lycée, de la 1re à la 4e année secondaire (année du baccalauréat).
- Leur langue maternelle est l'arabe ; le français est leur langue d'enseignement.
- L'appli est prévue pour s'ouvrir aux élèves étrangers, non francophones, qui suivent un enseignement en français. Ils peuvent venir d'autres pays du Maghreb, être arrivés dans un lycée francophone ou fréquenter un lycée français à l'étranger. Il suffit d'ajouter la langue de leurs explications (voir « Langues des explications »). Le contenu restera calé sur le programme tunisien tant qu'un autre programme n'est pas ajouté.

## Matières

Français, mathématiques, physique, chimie, SVT, technique et informatique.

En français, les notions sont celles de l'étude de la langue et des textes : figures de style, types de textes, connecteurs et vocabulaire de l'analyse.

## Parcours de l'élève

1. **Année scolaire** : à l'inscription, l'élève choisit son année (1re, 2e, 3e ou 4e) et, à partir de la 2e, sa section. Le contenu est ciblé d'après ces deux réponses.
   - En 1re année, le tronc est commun.
   - En 2e année, les sections sont Lettres, Sciences, Économie et services, et Technologies de l'informatique.
   - En 3e et 4e année, les sections sont Lettres, Mathématiques, Sciences expérimentales, Sciences techniques, Sciences de l'informatique, et Économie et gestion.
   - Chaque section a ses matières et ses coefficients ; par exemple, la section Lettres a peu de sciences. Les listes sont à vérifier sur les programmes officiels en vigueur.
2. **Test de niveau initial** : l'élève passe un test court et adaptatif, matière par matière. Il porte sur les notions des années précédentes et sur celles du début de son année. Le moteur adaptatif de la famille (`src/services/placement.ts`) est réutilisé.
3. **Parcours personnalisé** : le test place l'élève dans le parcours de son année.
   - Les notions d'années précédentes qu'il ne maîtrise pas sont ajoutées en rattrapage.
   - Les notions qu'il connaît déjà sont marquées comme acquises.
4. **Progression** : l'élève suit l'ordre des chapitres de l'année, pour retrouver dans l'appli ce qu'il voit en classe. Il peut aussi aller directement à une matière ou à un chapitre, par exemple la veille d'un devoir.
5. **Révisions** : la révision espacée de la famille reprend les notions oubliées.
6. **Toki grandit** avec la part des notions maîtrisées dans l'année (seuils dans le brief). Il repart du stade Poussin à chaque nouvelle année, et l'élève garde ses badges.

## La fiche notion

Chaque notion a une fiche courte, qui tient sur un écran :

| Élément | Exemple (SVT, 2e année) |
| --- | --- |
| Le mot, avec son article et sa prononciation (audio) | **la mitose** |
| L'explication en français simple, en une ou deux phrases | Division d'une cellule en deux cellules filles identiques. |
| Les explications dans les langues activées par l'élève, s'il en a choisi | arabe : انقسام الخلية إلى خليتين متطابقتين · anglais : *mitosis* |
| Un petit dessin | une cellule qui se divise en deux, dans le style de Toki |
| Une phrase telle qu'on la lit en cours ou dans un énoncé | « Décrire les étapes de la mitose. » |
| Le piège à éviter | ne pas confondre avec la méiose |
| Les liens | le même mot dans une autre matière, et les mots de la même famille |

En arabe, les termes employés sont ceux que l'élève a appris au collège, pour faire le pont entre ses deux langues d'étude.

## Langues des explications

Le contenu à apprendre est toujours en français.

- **Par défaut, en français** : l'explication en français simple est toujours affichée. C'est le cœur de l'appli, puisque l'élève doit apprendre à comprendre les cours en français.
- **Arabe, anglais, espagnol en option** : l'élève peut activer une ou plusieurs de ces langues, à l'inscription ou dans son profil. Leur explication s'affiche alors sous celle en français. Aucune n'est activée par défaut.
- **Indépendante de l'interface** : le choix des langues d'explication ne dépend pas de la langue de l'interface. Par exemple, l'interface peut être en arabe et les explications en français seulement.
- **Liste fixée par la configuration de l'appli** : la liste des langues proposées en option est déclarée dans la configuration. Pour ouvrir l'appli aux élèves étrangers d'une autre langue, il suffit d'ajouter la langue à la configuration et ses traductions au contenu. Le code n'a pas besoin de changer.
- **Langue complète obligatoire** : une langue n'est proposée que si toutes les notions ont leur explication dans cette langue. Le contrôle automatique du contenu le vérifie, pour que l'élève ne tombe jamais sur une explication manquante.
- **Sens de lecture** : les langues qui s'écrivent de droite à gauche (arabe, persan, ourdou, etc.) affichent l'explication dans ce sens, alors que le mot français reste de gauche à droite.

## Prix

- **Accès à vie par année scolaire** : un achat unique ouvre, pour toujours, tout le contenu d'une année scolaire, dans toutes les matières de la section de l'élève et avec le rattrapage des années précédentes. Il n'y a pas d'abonnement à renouveler. L'élève achète l'année suivante quand il passe en classe supérieure. Il garde l'accès aux années déjà achetées, par exemple pour réviser le bac.
- **Essai gratuit** : une partie du contenu reste ouverte sans achat, pour essayer :
  - le test de niveau initial ;
  - le premier chapitre de chaque matière de l'année ;
  - le début du parcours « consignes ».
- **Paiement** : uniquement l'achat intégré des stores au lancement. Le paiement local Konnect n'est pas prévu pour l'instant.
- **Pas de suivi** : il n'y a pas d'espace parent ni d'espace enseignant. La progression reste celle de l'élève, dans son compte.

## Jeux et exercices

L'esprit est celui de la famille : des séries courtes, un retour immédiat avec Toki, des combos, de l'XP et des confettis.

| Jeu | Principe |
| --- | --- |
| Quiz | QCM sur le sens d'un mot ou d'une notion |
| Mot et image | associer le mot au bon dessin, ou l'inverse |
| Memory | retrouver les paires : mot français et dessin, ou mot français et son équivalent dans une langue activée |
| Schéma à légender | placer les mots sur un schéma (cellule, circuit, triangle, montage de chimie) |
| Phrase à trous | compléter une phrase de cours ou d'énoncé |
| Vrai ou faux | une définition ou un exemple |
| Consignes | « Toki, que dois-je faire ? » : comprendre « justifier », « montrer que », « interpréter », « en déduire ». Ce parcours vaut pour toutes les matières. |
| Défi chrono | une série rapide sur un chapitre, pour battre son record |

Les jeux existants (QCM, associations, phrases à remettre en ordre) sont réutilisés. Les schémas à légender et le memory sont à créer.

## Contenu : méthode

1. **Inventaire** : à partir des supports de cours (manuels et programmes officiels de chaque année et de chaque section), relever par chapitre les notions et les mots difficiles.
   - Les supports servent à repérer les notions et leur contexte. Leur texte, leurs exercices et leurs illustrations ne sont pas recopiés, car ils sont protégés par le droit d'auteur.
   - Les définitions, les exemples et les dessins sont écrits pour l'appli.
2. **Priorités** :
   1. les mathématiques et les sciences de 1re année, car c'est là que le passage au français est le plus rude ;
   2. les années suivantes, puis les sections ;
   3. le parcours « consignes », commun à toutes les matières, dès le départ.
3. **Rédaction** : un guide d'écriture par matière, sur le modèle de `docs/multi-examens/b2-contenu.md`. Il fixe la longueur des définitions, le niveau de langue, le style des dessins et la façon d'écrire les explications dans chaque langue.
4. **Relecture** :
   - un contrôle automatique (format, champs remplis, doublons) ;
   - une relecture en aveugle et selon la grille, comme pour B2 (`content/review/GRILLE.md`, adaptée aux matières) ;
   - surtout, une validation par des enseignants tunisiens de chaque matière.
5. **Dessins** : une bibliothèque de petits dessins vectoriels dans le style de Toki (contours Bleu Nuit, formes rondes). Ils ne contiennent pas de texte, pour que les légendes restent traduisibles et utilisables dans les jeux.

## Ce que cela demande au code

| Besoin | Aujourd'hui | À faire |
| --- | --- | --- |
| Appli sans examen | `ExamConfig` : parties, échelle de score, tests blancs | Un modèle « matières » : matière, année, section, chapitre, notion |
| Choix de l'année et de la section | Objectif de score à l'accueil | Écran de choix de l'année et de la section, modifiable dans le profil |
| Langues des explications | Explications en fr, ar, en, es, liées à la langue de l'interface | Le français toujours affiché ; une liste de langues en option dans la configuration (ar, en, es au lancement) ; un choix de l'élève séparé de l'interface ; un contrôle de complétude par langue |
| Accès à vie par année | Un seul achat unique, le plan complet (`toki_quest_full`), avec des droits sans fin | Un achat unique par année scolaire (par exemple `toki_quest_savoirs_1`, jusqu'à `toki_quest_savoirs_4`) ; des droits par appli et par année sur le serveur, qui garde le modèle actuel d'achat sans expiration |
| Contenu gratuit | Tests blancs gratuits (`freeMockIds`) | Une liste de chapitres ouverts par matière et par année |
| Test de niveau | Une échelle par examen | Un test par matière, sur les notions des années jusqu'à celle de l'élève |
| Contenu en français | `EnglishText`, voix anglaise | Un composant de texte et une voix françaises pour le contenu |
| Jeux | QCM, association, remise en ordre, réponse tapée | Mot et image, memory, schéma à légender, défi chrono |
| Images | Photos de la partie 1 du TOEIC | Bibliothèque de dessins vectoriels |
| Catalogue | `scale` obligatoire | `scale` facultatif pour une appli sans examen |

## Décisions (2026-10-17)

- **Prix** : un achat unique par année scolaire, avec un accès à vie au contenu de cette année. Une partie du contenu est ouverte gratuitement pour essayer.
- **Paiement** : l'achat intégré des stores seulement ; pas de Konnect pour l'instant.
- **Suivi** : pas d'espace parent ni enseignant.
- **Langues** : les explications sont en français par défaut. L'arabe, l'anglais et l'espagnol sont proposés en option, et la liste peut s'étendre par configuration aux élèves étrangers non francophones.

## Questions ouvertes

- L'accès à vie se paie-t-il bien par année scolaire, comme le suppose la section « Prix », ou un seul achat ouvre-t-il les quatre années ? Dans ce second cas, le modèle d'achat actuel suffit tel quel.
- Les élèves sont souvent mineurs. Il faut adapter l'accord des parents, la collecte de données et les textes légaux (`store/conformite.md`).
