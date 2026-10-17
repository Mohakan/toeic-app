# Synthèse : relecture du lot 1 de Toki Quest B2 (284 items)

Date : 2026-10-17. Méthode : celle de `SYNTHESE-b2.md`, c'est-à-dire un contrôle automatique, une résolution à l'aveugle par 4 agents et une relecture selon la grille par 4 autres agents. Chaque correction a ensuite été appliquée et revérifiée.

## Ce qui a été relu

| Lot | Items | Rapport |
| --- | --- | --- |
| Série 3 des unités 01 à 06 | 60 | `b2-lot1-unites-01-06.md` |
| Série 3 des unités 07 à 12 | 60 | `b2-lot1-unites-07-12.md` |
| Examen blanc complet n° 1 (`fce-full-1`, items `fce-m3-*`) | 82 | `b2-lot1-examen-blanc-1.md` |
| Examen blanc complet n° 2 (`fce-full-2`, items `fce-m4-*`) | 82 | `b2-lot1-examen-blanc-2.md` |

## Résultats

- **Clés des QCM** : la résolution à l'aveugle n'en contredit aucune, sur les 284 items.
- **Items bloquants** : les 10 items bloquants avaient tous la même cause : une réponse correcte n'était pas acceptée dans un item à réponse tapée. Exemples : « in spite of » sans « the », « are not to be used », « wish that I lived », « overproduction ». Les réponses ont été ajoutées.
- **Moteur de correction** (`src/services/typedAnswer.ts`, pour toutes les applis) :
  - un nombre en chiffres vaut le même nombre en lettres (« 12 weeks » = « twelve weeks ») ;
  - les virgules dans une réponse ne comptent plus.
- **Examens blancs** : les deux relecteurs les jugent crédibles, un peu plus faciles que le vrai examen. Ils ont été corrigés :
  - **textes allongés** vers la longueur réelle : RU6 et RU7 du n° 1, RU7 du n° 2 ;
  - **ordre des questions** : l'ordre des réponses de RU7 était prévisible dans le n° 2, il est maintenant mélangé ;
  - **difficulté relevée dans le n° 2** : RU3 teste maintenant des préfixes négatifs, une question de RU5 porte sur un renvoi, et la phrase en trop de RU6 et les distracteurs de LI2 sont plus crédibles.
- **Thèmes en double** : avant la relecture, les extraits et textes qui reprenaient le thème d'un autre item du lot ont été réécrits. C'était le cas d'une leçon de conduite, d'un mois sans réseaux sociaux, d'un ferry pour Tanger et de jeunes entrepreneurs.
- **Format réel** : le contrôle automatique vérifie maintenant que chaque partie d'un examen blanc complet partage un seul texte ou enregistrement, et que les 8 extraits de LI1 sont différents.

## Reste à faire

- Faire valider par un enseignant les items MINEUR et DOUTEUX qui ont été conservés (voir la section « Corrections appliquées » de chaque rapport).
- Les niveaux et les paramètres des questions restent provisoires tant qu'ils n'ont pas été calibrés sur de vrais candidats.
