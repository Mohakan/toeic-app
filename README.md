# Toki Quest

Application mobile (iOS / Android, Expo + React Native + TypeScript) de préparation au TOEIC pour les francophones, arabophones et hispanophones. Prototype avec données locales, sans backend.

## Parcours

1. Accueil et choix de la langue d'aide (français, arabe avec RTL, espagnol, anglais)
2. Onboarding : prénom, score visé, objectif quotidien
3. **Test de niveau adaptatif** (24 questions au plus) avec une jauge de précision de la mesure
4. Résultat : score d'oral et d'écrit (5–495 chacun) avec un intervalle de confiance, niveau CECRL, déroulé du test question par question, point de départ du parcours
5. Accueil : carte « Départ → Aujourd'hui → Objectif » sur l'échelle CECRL, parcours d'unités regroupées par niveau avec « Tu es ici »
6. Leçons ludiques en plusieurs séries ; une unité est validée à 70 % de réussite au premier essai, et les réponses mettent à jour l'estimation du niveau
7. Révision du jour : les exercices ratés reviennent après 1, 3, 7, 14 puis 30 jours
8. TOEIC blancs chronométrés (onglet Examens), avec un rapport IRT par section et une correction détaillée
9. Mots à revoir (répétition espacée), progression, profil (choix de la voix anglaise)

## Mesure du niveau

| Étape | Méthode | Code |
| --- | --- | --- |
| Modèle | IRT à 3 paramètres (Birnbaum, 1968), D = 1,702 | `src/services/irt.ts` |
| Estimation | EAP bayésien, erreur type = écart-type a posteriori (Bock & Mislevy, 1982). A priori N(−0,9 ; 1,2), centré sur le niveau typique du public visé (≈ 550) et non sur la frontière B1/B2 (785) | `src/services/irt.ts` |
| Choix des items | Information de Fisher maximale, oral et écrit mesurés séparément, équilibrage du contenu (Kingsbury & Zara, 1989), tirage parmi les 2 meilleurs items pour limiter l'exposition | `src/services/placement.ts` |
| Arrêt | Erreur type ≤ 0,40 sur chaque section, au moins 16 items (dont 6 par section), au plus 30 | `src/services/placement.ts` |
| Conditions | Écoute limitée à 2 passages, sans ralenti (test de niveau et TOEIC blancs) ; c = 0,25 pour 4 choix | `src/components/McqQuestion.tsx` |
| Scores | Échelles 5–495 ancrées sur les seuils CECRL publiés par ETS (Tannenbaum & Wylie, 2008) | `src/services/scoring.ts` |
| Validation | Étude de récupération par simulation de Monte-Carlo | `src/services/simulation.ts` |

« Je ne sais pas » est compté comme une erreur : sous le modèle 3PL, sa vraisemblance a la même forme qu'une mauvaise réponse. En revanche, il évite qu'une réponse devinée par chance gonfle l'estimation.

Résultats de la simulation (`npm run simulate` : 1 000 candidats tirés dans la population visée, banque de 55 items) :

| Indicateur | Oral | Écrit |
| --- | --- | --- |
| Corrélation niveau vrai / estimé | 0,89 | 0,89 |
| RMSE (logits) | 0,56 | 0,55 |
| Biais | −0,01 | +0,01 |
| Couverture de l'intervalle à 90 % | 89 % | 90 % |

Placés à un niveau CECRL près : 100 % ; niveau exact : 73 %. Longueur moyenne : 30 items. La banque est trop petite pour que l'arrêt anticipé se déclenche.

`npm run placement:sim` montre le biais par niveau réel, et ce qui se passe si les items sont plus faciles qu'annoncé.

Limites, à lever avant tout usage officiel :

- Les paramètres des items sont provisoires (fixés par niveau). Ils sont à calibrer sur 300 à 500 candidats réels.
- Il faut une analyse DIF francophones / arabophones.
- Il faut étudier la validité concurrente avec des scores TOEIC officiels.
- La simulation valide l'algorithme sous le modèle, pas les items eux-mêmes.

## Écoute

L'app choisit explicitement une voix **anglaise** (les voix neuronales sont privilégiées) : sans ça, un appareil réglé en français lit l'anglais avec une voix française. On peut changer de voix dans le profil.

Si aucune voix anglaise n'est installée, la section écoute n'est pas évaluée (« Non évalué ») plutôt que de fausser le score. À terme, des enregistrements de locuteurs natifs (accents US, UK, CA, AU, comme au TOEIC) remplaceront la synthèse vocale.

## Oral (TOEIC Speaking)

L'onglet Examens propose une section **Oral**. Pour la lecture à voix haute (tâches 1 et 2), l'app compare le texte attendu à ce que la reconnaissance vocale a entendu, mot à mot : mots reconnus, mots sautés, mots entendus autrement, débit. C'est une mesure d'intelligibilité, pas un score TOEIC officiel.

Pour les questions (tâches 5 à 7), 30 situations de 3 questions, le chronométrage est celui de l'examen (3 s de préparation, puis 15, 15 et 30 s). Le bilan est seulement **indicatif**, sans score : réponse entendue, longueur, débit, idées attendues mentionnées, avec un exemple de réponse et un conseil.

Pour les tâches 8 à 10 (30 documents : emplois du temps, itinéraires, programmes), l'apprenant lit le document pendant 45 s, puis entend 3 questions. Le bilan, lui aussi indicatif, vérifie si les informations du document (heures, lieux, prix) figurent dans la réponse.

Pour les tâches 3 et 4, l'apprenant décrit une photo (45 s de préparation, 30 s de réponse). Le bilan indicatif relève les éléments attendus, le présent continu et les expressions de lieu. Les photos viennent de Wikimedia Commons (CC0 ou domaine public) : voir l'écran « Crédits des photos » et `src/data/speaking/photos/credits.ts`.

Quatre **simulations** enchaînent les 11 tâches dans les conditions de l'examen, avec un contenu inédit, puis donnent un bilan par tâche, toujours sans score sur 200.

Pour la tâche 11 (40 sujets d'opinion), l'apprenant a 45 s pour préparer et 60 s pour défendre son avis. Le bilan indicatif relève la longueur, le débit et les connecteurs d'argumentation utilisés (avis, raison, exemple, ajout, opposition, conclusion).

- **Consentement :** un écran explicite précède le premier usage du micro. Le refus n'empêche rien d'autre dans l'app. On peut retirer son accord à tout moment, ce qui efface aussi les résultats oraux.
- **Confidentialité :** l'audio n'est jamais conservé ni envoyé à un serveur du projet ; seuls le texte reconnu et les indicateurs sont gardés, sur l'appareil. La reconnaissance se fait sur l'appareil quand c'est possible. Sinon, Apple, Google ou le navigateur peuvent traiter la voix sur leurs serveurs, ce que dit l'écran de consentement.
- **Technique :** `expo-speech-recognition` derrière `src/services/recognition.ts`, l'alignement mot à mot dans `src/services/alignment.ts`, les textes dans `src/data/speaking/`.

**Tester la reconnaissance :**
- **Sur le web :** ouvrir `npx expo start --web` dans **Chrome** ou **Edge**, qui exposent la Web Speech API. Le navigateur demande l'accès au micro au premier enregistrement.
- **Sur téléphone :** il faut un *development build*, car le module natif n'existe pas dans **Expo Go**. Dans Expo Go, la section Oral affiche « Reconnaissance vocale indisponible » sans planter. Pour créer le build :

```bash
npx expo run:android            # ou npx expo run:ios (Xcode requis)
npx eas-cli@latest build --profile development --platform android   # alternative dans le cloud
```

## Identité visuelle : Toki et sa palette

Référence : `Toki – Brief mascotte & palette.md`.

- **Palette** (`src/theme.ts`) : Bleu Ciel Toki, Bleu Nuit, Orange Soleil, Pêche, Or Score (réservé aux récompenses), Nuage, Brume, Encre, Vert Réussite, Rouge Doux.
  - Les couleurs vives ne passent pas le contraste AA en texte. Les textes et icônes utilisent donc des teintes foncées dérivées, et les libellés des boutons vifs sont en Encre.
  - `src/theme.test.ts` vérifie le contraste de chaque couleur de texte.
- **Boutons** : `primary` en Bleu Ciel, `play` en Orange Soleil pour l'action principale d'un écran (« Jouer »), `success` et `danger` aux couleurs d'état.
- **Toki** (`src/components/Toki.tsx`) : version vectorielle **provisoire**, dessinée d'après le brief, en attendant les illustrations du designer.
  - 5 expressions (accueil, joie, encouragement, réflexion, neutre) et 5 stades selon le score estimé : Poussin, Apprenti, Pro, Pilote, Doré (`src/services/toki.ts`).
  - Il est en miroir en arabe, et chaque partie est dessinée sur un calque séparé.
  - `Mascot` (`ui.tsx`) l'affiche partout où était l'ancien hibou.

## Effets sonores

- Un son bref suit chaque réponse dans les leçons et les révisions. Une mauvaise paire dans un exercice d'association est signalée tout de suite.
- Un son plus festif accompagne une unité validée pour la première fois, et un autre un niveau CECR estimé plus haut. Le nouveau niveau est aussi annoncé à l'écran.
- Profil : interrupteur « Effets sonores » et choix entre 3 sons pour la bonne réponse (Bulle, Carillon, Marimba) et pour l'erreur (Toc, Doux, Glissé), avec écoute au toucher.
- Les sons sont générés par `node scripts/make-sounds.cjs` (aucun droit de tiers) et lus avec `expo-audio`. Ils respectent le mode silencieux et se mêlent aux autres sons du téléphone sans les couper.

## Offres et accès

Stratégie complète : [prompts/commercialisation.md](prompts/commercialisation.md).

- **Essai gratuit**, sans limite de temps : le test de niveau, le TOEIC blanc express, 4 unités choisies selon le niveau et un lot d'exercices oraux (2 textes, 2 photos, 1 série de questions, 1 document, 1 sujet d'opinion) au niveau de l'apprenant. Le contenu d'essai est fixé à la fin du premier test de niveau ; un contenu déjà commencé reste toujours ouvert.
- **Plan complet**, en paiement unique : 9 $ à l'international, 20 DT en Tunisie (selon la région de l'appareil).
- Le contenu hors essai reste visible avec un cadenas « Plan complet » ; le toucher ouvre l'écran d'offre avec une explication adaptée. Les écrans de tâches ont aussi un garde-fou qui renvoie vers l'offre.
- L'offre revient à deux moments de réussite : après la 4ᵉ unité d'essai validée, et à la fin du TOEIC blanc express.
- Règles des stores : dans l'app, l'achat intégré est le seul moyen de payer, avec un bouton « Restaurer mes achats » ; aucun autre canal ni partenaire n'est nommé.
- Code : `src/services/access.ts` (règles pures, testées), `src/state/useAccess.ts`, `src/state/useAccessGuard.ts`, `src/services/pricing.ts`, `src/screens/PaywallScreen.tsx`.

## Achat du plan complet

- **Dans l'app** : achat intégré non consommable `toki_quest_full` (App Store, Google Play) avec `expo-iap`, qui demande une version de développement (`npx expo run:ios|android` ou `eas build --profile development`). Le prix affiché est celui du store, sinon l'estimation locale.
- Le reçu est vérifié par le serveur avant tout déblocage ; la transaction du store n'est terminée qu'ensuite, pour ne jamais perdre un paiement. Au lancement, une restauration silencieuse revérifie l'achat et le rattache au compte si l'apprenant est connecté (`src/services/purchases.native.ts`, `src/state/usePurchases.ts`).
- Messages prévus : paiement en attente, à confirmer plus tard, achat rattaché à un autre compte, rien à restaurer, erreur.
- **Hors de l'app** : page de paiement web pour la Tunisie (20 DT, Konnect), servie par le serveur ; l'app n'y renvoie jamais (règles des stores).

## Mentions légales et publication

- Politique de confidentialité, conditions d'utilisation et de vente, mentions légales : `src/data/legal/` (français, qui fait foi ; arabe ; anglais), lisibles hors ligne dans l'app (Profil, inscription, écran d'offre, accueil) et publiées par le serveur sous `/legal/` (`npm run legal:export` après une modification). Les coordonnées de l'éditeur sont à remplir dans `src/data/legal/publisher.ts` : en attendant, les textes affichent « [à compléter] ».
- Fiches des stores, réponses aux questionnaires (confidentialité, public, classification) et notes pour la relecture : [store/](store/conformite.md) ; `npm run store:check` contrôle les longueurs.
- Grille de conformité avant soumission : [store/conformite.md](store/conformite.md).
- Icônes provisoires générées depuis Toki : `npm run icons` (ffmpeg avec librsvg).
- Comptes dès 13 ans ; avant 13 ans, l'app s'utilise sans compte.

## Comptes

- Serveur maison dans [server/](server/README.md) : inscription, connexion, mot de passe oublié (code à 6 chiffres par e-mail), suppression du compte, offre de l'apprenant.
- Dans l'app, le compte est proposé après la présentation, avant le test de niveau, avec « Plus tard » ; on peut aussi se connecter depuis l'accueil et gérer son compte dans le Profil. Avant 15 ans, l'accord d'un parent est demandé.
- Le jeton de session est dans le trousseau du téléphone (`expo-secure-store`) ; sur le web, dans le stockage du navigateur.
- L'offre renvoyée par le serveur est gardée pour l'usage hors ligne. Elle est revérifiée au lancement et au retour dans l'app (au plus une fois par heure). Sans contact avec le serveur pendant 30 jours, ou après sa date de fin, l'app revient à l'essai jusqu'à la prochaine vérification (`src/services/planCache.ts`).
- Sans `EXPO_PUBLIC_API_URL` (fichier `.env.local`, voir `.env.example`), aucun compte n'est proposé et l'app fonctionne comme avant, sur l'appareil seulement.

## Lancer

```bash
npm install
npx expo start        # puis i (iOS), a (Android) ou w (web)
npm test              # IRT, test adaptatif, simulation, intégrité du contenu
npm run simulate      # affiche les métriques de validation
npm run content:check # contrôle qualité du contenu
npm run content:stats # heures d'étude estimées, volumes par niveau, partie et thème
npx tsc --noEmit      # typage
npm run dev --prefix server   # API des comptes sur http://127.0.0.1:4000 (voir server/README.md)
```

## Organisation

- `src/data/assessment.ts` : banque du test de niveau (jamais réutilisée ailleurs, ce que vérifie `content:check`)
- `src/data/curriculum/<niveau>/<unité>.ts` : une unité = mini-cours + séries d'exercices ; dans chaque QCM, la première option est la bonne réponse, puis les options sont mélangées
- `src/data/vocab/<thème>.ts`, `src/data/mock/` : vocabulaire et TOEIC blancs
- `content/PROGRESS.md` : avancement vers l'objectif de 60 h et 1 000 mots ([prompt](prompts/contenu-60h.md))
- `src/services` : IRT, test adaptatif, scores, simulation, parcours, synthèse vocale
- `src/state` : progression persistée localement (AsyncStorage), estimation de niveau continue
- `src/i18n` : textes fr / ar / en, direction du texte
- `src/screens`, `src/components`, `src/navigation`

## Limites actuelles

- Contenu : 54 questions de placement ; 60 unités A1 → C1, chacune avec un mini-cours et 3 séries (1 748 exercices au total) ; 1 000 mots en 14 thèmes ; 2 TOEIC blancs complets et 6 mini (688 items inédits). Tout est à faire relire par des enseignants avant publication.
- Partie TOEIC 1 (photos) de l'écrit non couverte. Les tâches Speaking 3 et 4 utilisent 28 photos CC0 ou domaine public de Wikimedia Commons, créditées dans l'app ; elles pourraient servir plus tard à la partie 1.
- Oral : la lecture à voix haute (60 textes), les questions (90, tâches 5 à 7) et les documents (30 documents, 90 questions, tâches 8 à 10) sont en place ; les opinions (40 sujets, tâche 11), la description de photos (20 photos, tâches 3 et 4) et 4 simulations complètes des 11 tâches, d'environ 20 minutes.
- Achat : le code est en place (achat intégré avec `expo-iap`, vérifié par le serveur ; paiement web Konnect pour la Tunisie ; API Sabil), mais aucun achat réel n'a encore été fait : il faut créer le produit `toki_quest_full` dans App Store Connect et la Play Console, un compte marchand Konnect, et une version de développement de l'app (`expo-iap` ne fonctionne pas dans Expo Go ni sur le web, où le bouton annonce que le paiement arrive bientôt). En développement, un bouton active le plan complet.
- Serveur : pas encore hébergé ; le fournisseur d'e-mails, le domaine et les sauvegardes restent à choisir.
- Application indépendante, non affiliée à ETS.
