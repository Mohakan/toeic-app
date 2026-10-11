# Direction visuelle : « Ciel ludique » avec retour de jeu

Choisie le 2026-10-11 parmi trois pistes. Les maquettes sont sur la planche « TOEIC Quest – Directions visuelles » : A · Ciel ludique, B · Jeu énergique, C · Premium épuré.

La direction retenue combine :

- **la structure de A** : bandeau Bleu Ciel en tête d'écran, cartes blanches flottantes, barre d'onglets Bleu Nuit ;
- **le retour de jeu de B** : boutons et options en relief, bande de retour colorée avec Toki, pastille de combo ;
- **la sobriété de C** pour les chiffres de résultat : grand chiffre en graisse légère, peu d'ornements.

La palette du brief Toki ne change pas. Ce sont son dosage et les formes qui changent.

## Jetons (`src/theme.ts`)

| Jeton | Avant | Après |
| --- | --- | --- |
| Police | système | **Rubik** (latin et arabe), graisses 300 à 800 |
| `radius` | 10 / 16 / 24 | 12 / 18 / 28 |
| `shadow` | `0 4 12`, encre 8 % | `0 10 28`, Bleu Nuit 12 % |

- Une police chargée a un fichier par graisse. `AppText` et `EnglishText` choisissent donc la famille Rubik d'après `fontWeight` (`fontFamilyFor`). Il ne faut pas fixer `fontFamily` à la main, sauf pour un `Text` ou un `TextInput` brut ; dans ce cas, utiliser `fonts[600]`, etc.
- Seules les 6 graisses utilisées sont embarquées (`App.tsx`). Si leur chargement échoue, le texte s'affiche dans la police système.

## Composants (`src/components/ui.tsx`)

- **`Screen hero={…}`** : bandeau Bleu Ciel aux coins inférieurs arrondis, qui va jusque sous la barre d'état. Le texte y est en Encre (5,3:1).
- **`StatTile`** : chiffre et légende sur fond blanc translucide, à placer dans le bandeau.
- **`Screen footerTone`** : colore la bande du bas, par exemple en vert ou en rouge doux pour le retour sur une réponse.
- **`ProgressBar`** : se remplit avec une animation. L'animation est coupée si le réglage système « Réduire les animations » est actif (`useReducedMotion`).
- **`Button`** : il était déjà en relief et le reste.

## Écrans touchés

- **Accueil** : bandeau avec salutation, série et Toki, plus 2 ou 3 tuiles (série, XP, score estimé).
- **Exercices** :
  - options en relief plus épais, lettre dans un carré arrondi qui se colore ;
  - bande de retour pleine largeur, avec Toki joyeux ou encourageant et une pastille orange de combo.
- **Fin de série** : précision en grand chiffre léger, XP sur une tuile Or Score, bouton principal Orange Soleil.
- **Onglets** : barre Bleu Nuit aux coins supérieurs arrondis. L'onglet actif est en Bleu Ciel avec un libellé en Encre ; les autres libellés sont en blanc.

| Accueil (fr) | Accueil (ar) | Retour sur une réponse |
| --- | --- | --- |
| ![Accueil](accueil-fr.png) | ![Accueil en arabe](accueil-ar.png) | ![Retour](question-retour.png) |

## Règles

- Le bleu domine. L'orange marque l'action principale de l'écran (`variant="play"`). L'or reste réservé aux récompenses.
- Les nouveaux contrastes sont vérifiés dans `src/theme.test.ts`.
- Chaque écran retouché est vérifié en arabe : Toki doit apparaître en miroir et les chiffres doivent être alignés sur leur légende.

## Suite

1. Étendre le bandeau aux écrans Progrès, Examens et Mots.
2. Animer Toki (clignement, saut sur une bonne réponse) et ajouter des confettis en fin d'unité. Cela demande `react-native-reanimated`, à installer avec `npx expo install`.
3. Écran de résultat du test de niveau et Paywall.
