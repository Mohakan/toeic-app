# Toki – Brief mascotte & palette

Oct 7, 2026 · @Zoubeir · mis à jour le 17 oct. 2026 (famille de trois applis)

## Contexte

Toki est la mascotte de **Toki Quest**, une famille d'applications mobiles (iOS et Android) qui préparent de façon ludique aux certifications d'anglais. Le public : des francophones, des arabophones et des hispanophones de 15 à 35 ans, lycéens, étudiants et jeunes actifs, qui ont besoin d'un score ou d'un certificat pour un emploi, des études ou une mobilité.

La famille compte trois applis, une par examen. Elles sont construites sur un **socle commun** (même code, mêmes écrans, même compte) et ont chacune leur fiche dans les stores :

| Appli | Examen préparé | Public principal | Statut |
| --- | --- | --- | --- |
| **Toki Quest** | TOEIC® Listening & Reading | Jeunes actifs, emploi | En staging |
| **Toki Quest B2** | Cambridge English B2 First | Lycéens et étudiants, études et mobilité | Prête à construire |
| **Toki Quest Academic** | IELTS™ Academic | Études supérieures à l'étranger | Prévue |

Les noms des applis ne contiennent aucune marque d'examen. L'examen est nommé dans le sous-titre des stores, avec la mention « appli indépendante, non affiliée à … ».

Toki est un petit faucon. Il incarne le compagnon d'apprentissage : il guide, encourage, réagit aux réponses et grandit avec le score de l'utilisateur. Il doit être reconnaissable en icône d'app (48 px) comme en illustration plein écran.

Slogan de référence : **Joue. Progresse. Réussis.** (العب. تقدّم. انجح. / Play. Progress. Pass.)

## Palette de couleurs

La palette ci-dessous est **commune aux trois applis**. Seule la couleur de l'appli change d'une appli à l'autre (voir « Une couleur par appli » plus bas).

La palette repose sur un duo bleu ciel / orange soleil : le bleu évoque le vol et la confiance, l'orange l'énergie et le jeu. Les deux contrastent fortement et restent lisibles en mode clair comme sombre.

| Rôle | Nom | HEX | Usage |
| --- | --- | --- | --- |
| Principale | Bleu Ciel Toki | #2E9BF0 | Corps de Toki, boutons principaux, en-têtes |
| Principale foncée | Bleu Nuit | #14427A | Ailes, contours, texte sur fond clair, mode sombre |
| Accent | Orange Soleil | #FF8A1F | Bec, pattes, bouton « Jouer », séries de victoires |
| Accent clair | Pêche | #FFD3A8 | Ventre de Toki, fonds de cartes ludiques |
| Récompense | Or Score | #FFC93C | Toki doré (900+), badges, étoiles, trophées |
| Neutre clair | Nuage | #F4F8FC | Fond d'écran principal |
| Neutre moyen | Brume | #A9B8C9 | Éléments inactifs, séparateurs |
| Neutre foncé | Encre | #1C2430 | Texte principal |
| État | Vert Réussite | #2BC48A | Bonne réponse, progression |
| État | Rouge Doux | #F2545B | Mauvaise réponse (jamais agressif) |

Règles d'usage :

- Le bleu domine (environ 60 % de l'interface), l'orange reste ponctuel (10 à 15 %) pour attirer l'œil sur l'action.
- L'or est réservé aux récompenses, pour garder sa valeur.
- Texte : Encre sur Nuage, blanc sur Bleu Nuit ; viser un contraste AA minimum.
- L'interface doit fonctionner en arabe (lecture de droite à gauche) : prévoir les illustrations de Toki en version miroir.

### Une couleur par appli

Chaque appli de la famille a sa propre couleur. On la retrouve à trois endroits seulement : le bandeau en tête d'écran, le fond de l'icône et l'accessoire de Toki. Tout le reste (boutons, états, récompenses, textes) garde la palette commune. Ainsi, les trois applis se reconnaissent comme une même famille, et chacune reste identifiable d'un coup d'œil dans le store.

| Appli | Couleur de l'appli | HEX | Fond de l'icône | Contraste avec Encre |
| --- | --- | --- | --- | --- |
| Toki Quest (TOEIC) | Bleu Ciel Toki | #2E9BF0 | #E7F3FE | 5,3:1 |
| Toki Quest B2 | Lavande | #9B8CFF | #EFEDFF | 5,6:1 |
| Toki Quest Academic | Turquoise (proposition, à valider) | #3CC8C8 | #E3F8F8 | 7,7:1 |

Règles :

- Le texte posé sur la couleur de l'appli est en Encre, avec un contraste AA minimum. Un test automatique le vérifie pour chaque appli (`src/theme.test.ts`).
- La couleur de l'appli ne remplace jamais une couleur d'état : le vert reste la réussite, le rouge doux l'erreur, l'or la récompense, l'orange l'action principale. C'est pour cela que le vert et l'orange sont exclus comme couleur d'appli.
- Dans le code, la couleur de chaque appli est déclarée dans `src/exams/config.ts` (`brand.hero`), et les icônes sont générées par `node scripts/make-icons.cjs <appli>`.

## Description de Toki

Toki est un jeune faucon rond et compact, plus « boule de plumes » que rapace. Il doit paraître vif et malin, jamais menaçant.

**Silhouette et proportions**

- Forme générale : une goutte arrondie, base large, presque sphérique.
- Tête et corps quasi fondus, tête environ 45 % de la hauteur totale (style chibi).
- Hauteur totale : environ 2,5 têtes.
- Silhouette identifiable en noir uni, même à 48 px.

**Tête et visage**

- Grands yeux ovales, brillants, avec deux reflets blancs ; iris Bleu Nuit.
- Au-dessus de chaque œil, une petite marque Bleu Nuit en forme de sourcil : c'est elle qui porte l'expression (clin d'œil au masque facial du vrai faucon).
- Petit bec crochu court, Orange Soleil, arrondi au bout.
- Une mèche de trois plumes sur le sommet du crâne, qui bouge selon l'émotion.

**Corps et plumage**

- Dos et tête Bleu Ciel, ventre Pêche en forme de cœur arrondi.
- Ailes Bleu Nuit, courtes, qui servent de « mains » expressives (pouce levé, montrer du doigt, applaudir).
- Pattes Orange Soleil, petites, trois doigts visibles.
- Queue courte en éventail, trois plumes.

**Accessoires signature**

Ce que Toki porte autour du cou dépend de l'appli. C'est le seul élément de son dessin qui change d'une appli à l'autre :

| Appli | Accessoire | Couleurs |
| --- | --- | --- |
| Toki Quest (TOEIC) | Casque audio autour du cou, rappel de la partie Listening | Bleu Nuit et Orange Soleil |
| Toki Quest B2 | Écharpe d'étudiant, une extrémité rayée qui pend sur le ventre | Lavande, rayures blanches, contour Bleu Nuit |
| Toki Quest Academic | Toque de diplômé, inclinée sur la mèche (proposition) | Bleu Nuit, gland Turquoise |

Autres accessoires, communs aux trois applis :

- Une petite cravate ou un nœud papillon en option, pour les écrans « monde pro ».
- Accessoires contextuels possibles : badge d'embarquement, porte-documents, crayon, trophée.

**Style graphique**

- Illustration vectorielle flat avec ombrage léger (une ombre douce, un éclat).
- Contours arrondis, épaisseur constante, couleur Bleu Nuit plutôt que noir.
- Aucune pointe agressive : serres, bec et plumes toujours arrondis.
- Doit pouvoir s'animer simplement (Lottie ou Rive) : membres et mèche sur des calques séparés.

## Personnalité et expressions

Toki est drôle, encourageant et un peu taquin, comme un grand frère qui croit en toi. Il ne se moque jamais d'une erreur : il dédramatise et relance.

Traits clés : curieux, optimiste, énergique, bienveillant, légèrement espiègle.

| Expression | Moment dans l'appli | Indications de dessin |
| --- | --- | --- |
| Neutre souriant | Écran d'accueil, navigation | Yeux ouverts, petit sourire, mèche droite |
| Joie / fierté | Bonne réponse | Yeux en croissant, ailes levées, mèche dressée |
| Danse | Série de 5 bonnes réponses | Pose dynamique, une patte levée, petites notes de musique |
| Encouragement | Mauvaise réponse | Sourire en coin, une aile posée sur la tête, mèche un peu tombante |
| Réflexion | Indice, question difficile | Aile sous le bec, regard en l'air, point d'interrogation |
| Concentration | Exercice d'écoute | Casque sur les oreilles, yeux fermés, notes qui flottent |
| Surprise | Nouveau record | Yeux grands ouverts, bec ouvert, plumes ébouriffées |
| Fatigue / sommeil | Rappel après inactivité | Paupières lourdes, petit « zzz », bonnet de nuit |
| Triomphe | Examen blanc réussi, passage de niveau | Envol, ailes déployées, confettis Or Score |
| Accueil | Onboarding | Aile qui fait coucou, clin d'œil |

## Évolution par niveau de score

Toki change d'apparence à mesure que le score estimé de l'utilisateur monte. Les cinq stades sont les mêmes dans les trois applis ; seuls les seuils changent, car chaque examen a sa propre échelle. Chaque stade garde la même silhouette de base pour rester reconnaissable.

**Toki Quest (TOEIC Listening & Reading, de 10 à 990)**

| Score estimé | Stade | Apparence |
| --- | --- | --- |
| 10 – 299 | Toki Poussin | Plus petit, duvet ébouriffé, coquille d'œuf en chapeau, pas encore de casque |
| 300 – 549 | Toki Apprenti | Taille standard, casque audio, sac à dos |
| 550 – 784 | Toki Pro | Nœud papillon ou cravate, badge, posture plus assurée |
| 785 – 899 | Toki Pilote | Lunettes d'aviateur, écharpe au vent, ailes un peu plus longues |
| 900 – 990 | Toki Doré | Reflets Or Score sur les plumes, petite couronne de plumes, halo lumineux |

Les seuils suivent à peu près les niveaux de certificat TOEIC (le 785 correspond au palier « or » du certificat L&R). Ils peuvent être ajustés selon la conception pédagogique.

**Toki Quest B2 (Cambridge English Scale, de 122 à 190)**

Les seuils suivent les notes de Cambridge : B1 dès 140, réussite (grade C) dès 160, grade B dès 173, grade A et niveau C1 dès 180.

| Score estimé | Stade |
| --- | --- |
| 122 – 139 | Toki Poussin |
| 140 – 159 | Toki Apprenti |
| 160 – 172 | Toki Pro |
| 173 – 179 | Toki Pilote |
| 180 – 190 | Toki Doré |

Au stade Pilote, Toki porte déjà son écharpe d'étudiant : l'écharpe au vent du stade Pilote n'est pas ajoutée, il garde seulement les lunettes d'aviateur.

**Toki Quest Academic (bandes IELTS, de 0 à 9)** : seuils à définir quand l'appli sera lancée. Proposition : Poussin sous 5, Apprenti de 5 à 5,5, Pro de 6 à 6,5, Pilote de 7 à 7,5, Doré dès 8.

Dans le code, les seuils de chaque appli sont déclarés dans `src/exams/config.ts` (`tokiStages`).

## Livrables attendus

- [ ] Planche de recherche : 3 pistes de Toki en croquis
- [ ] Model sheet final : face, profil, trois-quarts, dos
- [ ] Les 10 expressions du tableau ci-dessus
- [ ] Les 5 stades d'évolution
- [ ] Icône d'app iOS et Android (1024 × 1024 px) et version 48 px lisible, **pour chacune des trois applis** : même Toki, fond et accessoire propres à l'appli
- [ ] Les trois accessoires (casque, écharpe, toque) sur des calques séparés, compatibles avec les 5 stades et les 10 expressions
- [ ] Versions miroir pour l'interface en arabe
- [ ] Fichiers sources vectoriels (SVG / Figma) avec calques séparés pour l'animation
- [ ] Palette exportée en styles Figma ou variables, avec une variable « couleur de l'appli » qui prend la valeur de chaque appli

**À éviter**

- Un hibou ou un oiseau vert : trop proche des applis de langues existantes.
- Un rapace réaliste ou agressif (serres pointues, regard dur).
- Les symboles nationaux, religieux ou drapeaux : Toki doit parler à tous les publics francophones et arabophones.
- Les logos ou chartes des organismes d'examen (TOEIC/ETS, Cambridge, IELTS) dans les visuels de la mascotte et les icônes : ce sont des marques déposées.
- Une mascotte différente par appli : c'est le même Toki partout, seul son accessoire change.
- Le texte intégré dans les illustrations : il sera traduit dans l'interface.
