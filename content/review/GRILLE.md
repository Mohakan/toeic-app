# Grille de relecture du contenu d'examen

Cette grille s'applique à tout item QCM : TOEIC blancs, exercices d'unités et test de niveau.
Elle sert aux relecteurs humains comme aux agents (skills superpowers `dispatching-parallel-agents` et `requesting-code-review`).

Rappel : dans la source, **l'option 1 est la bonne réponse**. Les options sont mélangées ensuite par `withShuffledOptions`.

## Verdicts

| Verdict | Sens |
| --- | --- |
| `OK` | Rien à signaler. |
| `BLOQUANT` | Clé fausse, deux réponses défendables, ou question sans réponse dans le texte ou l'audio. L'item fausse le score et doit être corrigé avant publication. |
| `À CORRIGER` | Erreur réelle mais sans effet sur la clé : anglais fautif, explication fausse ou incohérente avec la clé, format non respecté. |
| `MINEUR` | Amélioration souhaitable : formulation peu naturelle, distracteur trop faible, niveau mal calibré. |
| `DOUTEUX` | Le relecteur hésite. L'item est à soumettre à un enseignant. |

Seuls les items qui ne sont pas `OK` figurent dans un rapport.

## Critères

### 1. Clé (priorité absolue)
- La clé est **la seule** réponse correcte. Aucun distracteur n'est défendable, même par un candidat très fort.
- La réponse se trouve dans le texte ou l'audio, explicitement ou par une inférence que seule la clé autorise.
- Les calculs (dates, prix, durées, pourcentages, horaires) sont justes.
- Les questions avec document (graphique, tableau, horaire) sont cohérentes avec ce document.

### 2. Distracteurs
- Ils sont plausibles et du même type grammatical que la clé (même catégorie en partie 5).
- Ils reprennent des mots du texte sans être corrects : c'est le piège TOEIC attendu, à condition qu'ils restent faux.
- En partie 2, les pièges sonores ou de répétition de mot sont attendus, mais le distracteur ne doit pas constituer une réponse naturelle.

### 3. Anglais
- La grammaire, l'orthographe et la ponctuation sont correctes. L'orthographe US ou UK est cohérente à l'intérieur d'un item.
- Le registre est professionnel et naturel, comme le dirait un locuteur natif.
- Dans les dialogues, les tours de parole commencent par `W:` ou `M:`, et les questions « the man » ou « the woman » visent le bon locuteur.

### 4. Format TOEIC
- La partie 2 compte 3 options. Toutes les autres parties en comptent 4.
- Partie 5 : une phrase avec un seul blanc. Partie 6 : un texte avec des blancs numérotés, dont une éventuelle question d'insertion de phrase. Partie 7 : questions de compréhension sur un, deux ou trois documents.
- Le niveau (1 à 6) correspond à la difficulté réelle.

### 5. Explications (fr, ar, en, es)
- Elles justifient **la clé** et non une autre option.
- Elles sont cohérentes entre les quatre langues : même raisonnement, même citation.
- Elles sont correctes dans chaque langue, en arabe standard moderne pour l'arabe.

### 6. Originalité
- Aucun item ne reprend une question du test de niveau (`src/data/assessment.ts`) ni un autre item.

## Format du rapport

Écrire un tableau Markdown, un item par ligne, trié par gravité :

| id | verdict | critère | problème | correction proposée |
| --- | --- | --- | --- | --- |
| `f1-r7-37` | BLOQUANT | 1. Clé | Les options B et C sont toutes deux vraies d'après le 2e paragraphe. | Remplacer C par « … ». |

La correction proposée doit être directement applicable : donner le nouveau texte exact de l'option, de la phrase ou de l'explication.
