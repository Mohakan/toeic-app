# Suivi du contenu : objectif 60 h et 1 000 mots

Référence : [prompts/contenu-60h.md](../prompts/contenu-60h.md). Chaque session traite **un seul lot**, puis met ce fichier à jour.

Commandes de contrôle :

```bash
npx tsc --noEmit
npm test
npm run content:check
npm run content:stats
```

## État final du volet Listening & Reading (après le lot 23)

| Indicateur | Actuel | Objectif |
| --- | --- | --- |
| Temps d'étude estimé | 67,5 h | ≥ 60 h ✅ |
| Unités | 60 (12 par niveau, de A1 à C1) | 60 (12 par niveau) ✅ |
| Séries d'exercices | 180 (3 par unité) | 180 (3 par unité) ✅ |
| Exercices | 1 748 | ~1 800 ✅ |
| TOEIC blancs | 2 complets · 6 mini (688 items inédits) · 1 démo | 2 complets · 6 mini ✅ |
| Mots | 1 000 (14 thèmes ; A1 100 · A2 150 · B1 250 · B2 300 · C1 200) | 1 000 (14 thèmes) ✅ |
| Langues d'aide | fr · ar · es · en | fr · ar · es · en |

Détail du temps d'étude : mini-cours 3,0 h · exercices 38,3 h · reprises 7,7 h · révision 4,6 h · TOEIC blancs 7,0 h · vocabulaire 6,9 h. Le volet Listening & Reading du plan est terminé ; `content:check` (26 contrôles) vérifie en permanence les objectifs de 60 h et de 1 000 mots. Il reste la relecture humaine (voir plus bas) et le volet Speaking.

## À relire par un humain avant publication

Tout le contenu a été écrit sans relecture par un enseignant. Par ordre de priorité :

1. **TOEIC blancs** (`src/data/mock/`, 688 items). Une relecture par agents a été faite le 2026-10-11 et 22 items ont été corrigés (voir [content/review/SYNTHESE-mock.md](review/SYNTHESE-mock.md)). Restent 5 items DOUTEUX et 40 items MINEUR à soumettre à l'enseignant : ils servent à mesurer, donc une erreur de clé fausse le score. En priorité, les calculs et les questions avec document :
   - partie 7 : `m2-r7-13`, `m4-r7-13`, `m6-r7-7`, `f1-r7-37`, `f1-r7-52`, `f2-r7-21`, `f2-r7-33` ;
   - questions avec document : `f1-l3-39`, `f1-l4-30`, `f2-l3-36`, `f2-l4-26`.
2. **Inférences de partie 7 aux niveaux B2 et C1** : `b2-mp-*`, `b2-na-*`, `c1-in-*` et `c1-tp-*` (triples documents).
3. **Traductions** :
   - l’espagnol de tout le contenu, ajouté au lot 0 à partir du français et de l’anglais ;
   - l’arabe des termes juridiques et financiers C1 du vocabulaire ;
   - les 49 explications arabes réécrites au lot 23.
4. **Mini-cours** : 60 mini-cours, en particulier les 6 de B2 et les 7 de C1 ajoutés en dernier.
5. **Niveaux du vocabulaire** : les 33 mots recalibrés au lot 23, ainsi que les homonymes signalés par l’audit (*minutes*, *reception*, *plant*, *fine*, *transfer*, *network*).

Les identifiants détaillés de chaque lot figurent dans le journal ci-dessous.

## Lots

| Lot | Contenu | Statut |
| --- | --- | --- |
| 0 | Architecture : séries, révision espacée, TOEIC blancs, un fichier par unité et par thème, `content:stats`, `content:check` | ✅ terminé (2026-10-06) |
| 1 | A1 : séries 2 et 3 des 5 unités existantes (100 exercices) | ✅ terminé (2026-10-06) |
| 2 | A1 : 7 nouvelles unités, chacune avec un mini-cours et 3 séries de 10 (210 exercices) | ✅ terminé (2026-10-06) |
| 3 | A2 : séries 2 et 3 des 5 unités existantes (100 exercices) | ✅ terminé (2026-10-06) |
| 4 | A2 : 7 nouvelles unités, chacune avec un mini-cours et 3 séries de 10 (210 exercices) | ✅ terminé (2026-10-06) |
| 5 | B1 : séries 2 et 3 des 6 unités existantes (120 exercices) | ✅ terminé (2026-10-06) |
| 6 | B1 : 3 nouvelles unités (present perfect, -ing / to, relatifs ; 90 exercices) | ✅ terminé (2026-10-06) |
| 7 | B1 : 3 nouvelles unités (connecteurs, service client, articles et annonces ; 90 exercices) | ✅ terminé (2026-10-06) |
| 8 | B2 : séries 2 et 3 des 6 unités existantes (120 exercices) | ✅ terminé (2026-10-06) |
| 9 | B2 : 3 nouvelles unités (conditionnels, discours indirect, modaux au passé ; 90 exercices) | ✅ terminé (2026-10-06) |
| 10 | B2 : 3 nouvelles unités (intention du locuteur, contrats et logistique, articles de presse ; 90 exercices) | ✅ terminé (2026-10-06) |
| 11 | C1 : séries 2 et 3 des 5 unités existantes (100 exercices) | ✅ terminé (2026-10-06) |
| 12 | C1 : 7 nouvelles unités (inversion, subjonctif et accords, conditionnels avancés, participes, verbes à particule, réponses indirectes, triples documents ; 210 exercices) | ✅ terminé (2026-10-06) |
| 13 | Vocabulaire A1 (79) et A2 (113), 4 nouveaux thèmes : santé, immobilier, juridique, environnement | ✅ terminé (2026-10-06) |
| 14 | Vocabulaire B1 (207 mots) | ✅ terminé (2026-10-06) |
| 15 | Vocabulaire B2 (269 mots) | ✅ terminé (2026-10-06) |
| 16 | Vocabulaire C1 (188 mots, dont faux amis), contrôle des quotas dans `content:check` | ✅ terminé (2026-10-06) |
| 17 | Mini TOEIC blancs 1 à 3 (150 items) | ✅ terminé (2026-10-06) |
| 18 | Mini TOEIC blancs 4 à 6 (150 items), contrôle des quasi-doublons dans `content:check` | ✅ terminé (2026-10-06) |
| 19 | TOEIC blanc complet 1 : écoute (94 items) | ✅ terminé (2026-10-06) |
| 20 | TOEIC blanc complet 1 : lecture (100 items) | ✅ terminé (2026-10-06) |
| 21 | TOEIC blanc complet 2 : écoute (94 items) | ✅ terminé (2026-10-06) |
| 22 | TOEIC blanc complet 2 : lecture (100 items) | ✅ terminé (2026-10-06) |
| 23 | Recalibrage, relecture croisée, lien unités–mots, statistiques finales | ✅ terminé (2026-10-07) |

### Volet TOEIC Speaking (budget séparé d'environ 12 h)

| Lot | Contenu | Statut |
| --- | --- | --- |
| S0 | Reconnaissance vocale, consentement, micro, alignement mot à mot, section « Oral » | ✅ terminé (2026-10-07), à valider sur un appareil réel |
| S1 | 60 textes à lire à voix haute (tâches 1–2) | ✅ terminé (2026-10-07) |
| S2 | 90 questions (tâches 5–7) | ✅ terminé (2026-10-07), à valider sur un appareil réel |
| S3 | 30 documents et 90 questions (tâches 8–10) | ✅ terminé (2026-10-07), à valider sur un appareil réel |
| S4 | 40 sujets d'opinion (tâche 11) | ✅ terminé (2026-10-07), à valider sur un appareil réel |
| S5 | 4 simulations Speaking chronométrées | ✅ terminé (2026-10-07), à valider sur un appareil réel |
| S6 | Tâches 3–4 (photos) | ✅ terminé (2026-10-07) : 28 photos CC0 ou domaine public de Wikimedia Commons, à valider sur un appareil réel |

## Journal

### Éditeur (2026-10-08)

- Complété avec les informations fournies : SUARL au capital de 5 000 DT ; directeur de la publication Zoubeir KANOUN, gérant ; contact et données personnelles support@elitebox-consulting.com ; hébergeur et service d'e-mails Contabo GmbH, Munich ; déclaration INPDP en cours (affichée « en cours », « قيد الإنجاز », « in progress »). Plus aucun champ « [à compléter] » dans les textes ; fiches des stores mises à jour (contact, copyright).

- Coordonnées reprises des mentions légales publiées par la même société (consultées le 2026-10-08) : EliteBox, Avenue Habib Khanfir, 3041 Sfax, Tunisie ; RNE 1770372T ; MF 1770372T/A/M/000. Pages juridiques régénérées.
- Non repris : l'adresse de contact, qui est sur le domaine du partenaire et le nommerait dans l'app. Restent à fournir : forme juridique et capital, directeur de la publication, e-mails de Toki Quest, hébergeur, service d'e-mails, numéro INPDP.

### Changement de nom (2026-10-08) — « Toki Quest »

- L'application s'appelle désormais **Toki Quest** : la marque TOEIC® d'ETS n'est plus dans le nom (app, textes système, e-mails, pages web, textes juridiques, fiches des stores). Elle reste dans les descriptions des stores, de façon descriptive (« préparation au TOEIC® »), avec la mention d'indépendance vis-à-vis d'ETS.
- Identifiants renommés avant toute publication : `app.tokiquest` (iOS et Android), slug `toki-quest`, produit intégré `toki_quest_full`, domaines d'exemple `tokiquest.app`. La clé de stockage interne (`toeic-quest/v1`) ne change pas, pour garder les progressions existantes.
- Vérifié : typage, 151 tests de l'app, 49 du serveur, `store:check`, `expo-doctor` 21/21, pages juridiques régénérées.

### Commercialisation, lot M6 (2026-10-08) — mentions légales et stores

- **Textes juridiques** (`src/data/legal/`) : politique de confidentialité, conditions d'utilisation et de vente, mentions légales, et conditions de vente web (publiées sur le site seulement) ; en français, arabe et anglais ; coordonnées de l'éditeur réunies dans `publisher.ts` (« [à compléter] » tant qu'elles manquent). Les conditions affichées dans l'app ne renvoient pas au paiement web, et le partenaire n'est jamais nommé (vérifié par des tests).
- **App** : écran juridique (3 onglets, lisible hors ligne) ; liens depuis l'accueil, l'inscription, l'écran d'offre et le Profil ; comptes dès 13 ans ; prix du store sur l'accueil, et « Gratuit » sur la carte d'essai.
- **Configuration** : nom, identifiants `app.toeicquest`, chiffrement exempté, manifeste de confidentialité iOS, trois autorisations Android retirées, textes système traduits (`locales/`), icônes provisoires générées depuis Toki (`npm run icons`), `eas.json` et `expo-dev-client`.
- **Serveur** : pages `/legal/`, suppression du compte sur le web (`/account/delete`, exigée par Google Play), tâche de conservation quotidienne (comptes inactifs 3 ans, sessions, codes, journal partenaire), date de dernière activité (migration 3), âge minimal.
- **Stores** : fiches App Store et Google Play en 3 langues, réponses « App Privacy », « Data safety », public et classification, notes pour la relecture ; `npm run store:check` ; grille [store/conformite.md](../store/conformite.md).
- **Vérifié** : typage, 151 tests de l'app et 49 du serveur, `content:check`, `store:check`, `expo-doctor` 21/21 ; dans le navigateur (le panneau étant masqué, vérifié par le texte de la page) : liens et « Gratuit » sur l'accueil, écran juridique en français et en arabe (texte aligné à droite).
- **Non vérifié** : la configuration native (icônes, manifeste, permissions, textes traduits) n'a pas été construite ; elle le sera à la première version de développement. Les textes juridiques n'ont pas été relus par un juriste.

### Commercialisation, lots M4 et M5 (2026-10-08) — paiements et API Sabil

- **Serveur** :
  - migration 2 (état des paiements, journal des appels partenaires) ; interfaces Apple, Google Play et Konnect (`server/src/providers.ts`) ;
  - achats intégrés : vérification des transactions signées Apple (bibliothèque officielle) et des jetons Google Play (compte de service), rattachement au compte, refus d'un achat déjà rattaché ailleurs, notifications de remboursement Apple et Google ; un ancien reçu ne rouvre pas un achat remboursé ;
  - paiement web en Tunisie (Konnect, 20 DT) : page `/pay` en français et en arabe, avec une politique de sécurité stricte ; webhook qui redemande l'état à Konnect (montant et devise) avant d'ouvrir le plan ;
  - API Sabil : création, lecture, fin d'inscription (immédiate ou datée), envoi groupé de 500 inscrits, clé d'API et signature HMAC, refus des signatures rejouées, journal des appels ; spécification OpenAPI, guide pour Sabil (Node et PHP), outil `npm run sabil:call`.
- **App** : `expo-iap` 5.6.3, achat et restauration (`purchases.native.ts`), restauration silencieuse au lancement et rattachement après connexion, prix du store sur l'écran d'offre, messages pour chaque issue ; un achat fait sur le store de l'appareil vaut sans compte (30 jours sans nouvelle vérification au plus).
- **Vérifié** :
  - serveur : 45 tests (11 achats sur les stores, 5 paiement web, 8 API Sabil), typage, `npm audit` sans vulnérabilité ;
  - app : typage, 147 tests, `expo-doctor`, lint inchangé (15 erreurs déjà présentes) ;
  - de bout en bout, avec l'API locale : appel Sabil signé, compte créé avec cet e-mail qui obtient le plan complet (le mot « Sabil » n'apparaît pas à l'écran), fin d'inscription qui ramène l'essai ; page `/pay` en français et en arabe, mauvais mot de passe refusé, « paiement indisponible » sans Konnect. Compte, base de développement, secrets de test et stockage du navigateur supprimés.
- **Non vérifié** : aucun achat réel ni en bac à sable (il faut les produits dans les stores, le compte Konnect et une version de développement sur téléphone) ; la vérification réelle par Apple, Google et Konnect n'a donc jamais tourné, seules les doublures des tests l'ont fait.

### Commercialisation, lot M3 (2026-10-08) — serveur et comptes

- **Serveur** (`server/`) : Node 22, Fastify 5, PostgreSQL en production et PGlite en développement et pour les tests. Tables `users`, `sessions`, `password_resets`, `entitlements`, `purchases` et `sabil_accounts`, avec migrations versionnées.
  - Inscription (accord parental avant 15 ans), connexion, déconnexion, mot de passe oublié avec un code à 6 chiffres envoyé par e-mail (30 min, 5 essais), langue, suppression du compte.
  - Offre calculée à partir des droits actifs et des inscriptions partenaires (par e-mail) ; script `npm run grant`.
  - Sécurité : scrypt, jetons hachés, 3 appareils au plus, limites de débit, CORS restreint, aucun mot de passe dans les journaux.
- **App** : client d'API, jeton dans `expo-secure-store`, écran de compte (5 modes), compte proposé avant le test de niveau, connexion depuis l'accueil, carte « Compte » dans le Profil, synchronisation de l'offre avec un cache hors ligne de 30 jours.
- **Vérifié** :
  - serveur : 21 tests (API complète sur PGlite) et typage ;
  - app : typage, 146 tests (dont 6 pour le cache de l'offre), `expo-doctor` 21/21 ; lint inchangé (15 erreurs déjà présentes) ;
  - dans le navigateur, avec l'API locale : refus sans accord parental puis inscription d'un mineur, plan complet attribué par le serveur et appliqué au lancement, déconnexion, code oublié (code faux refusé, bon code accepté, reconnexion), écran de suppression en arabe et suppression effective, message quand le serveur est injoignable. Compte de test supprimé, base de développement et stockage du navigateur effacés.
- **Non vérifié** : un vrai PostgreSQL (Docker n'a pas été lancé ; seul PGlite a servi), l'envoi SMTP réel, le trousseau sur un vrai téléphone, l'expiration hors ligne de 30 jours en conditions réelles (couverte seulement par des tests).
- **Attention** : la machine a une variable `DATABASE_URL` pour un autre projet ; le serveur lit donc `TOEIC_DATABASE_URL`. La première tentative de démarrage a essayé de s'y connecter et a été refusée (mot de passe), sans rien écrire.

### Commercialisation, lots M0 à M2 (2026-10-08)

- **M0** : stratégie dans [prompts/commercialisation.md](../prompts/commercialisation.md) (offres, prix, canaux de paiement, architecture serveur, API partenaire, données personnelles, lots M0 à M7).
- **M1, gestion d'accès dans l'app** :
  - règles pures dans `src/services/access.ts` (6 tests) et prix local dans `src/services/pricing.ts` (2 tests) ;
  - `plan` et `trial` dans l'état, validés au chargement. Le contenu d'essai est fixé à la fin du premier test de niveau ;
  - cadenas sur le parcours, les TOEIC blancs (le TOEIC express en premier pendant l'essai) et l'oral ; garde-fous dans les 7 écrans de tâches ;
  - écran d'offre (Toki, avantages, prix, achat et restauration) ; carte « Ton offre » dans le Profil ;
  - offre proposée après la 4ᵉ unité d'essai validée et à la fin du TOEIC express.
- **M2, page d'accueil** : Toki et sa bulle, « Joue. Progresse. Réussis. », 4 chiffres clés, les deux offres avec le prix local, un seul bouton « Commencer gratuitement ». Aucun partenaire nommé.
- Vérifié : `tsc`, 140 tests, `content:check` (50) ; lint inchangé (les 15 erreurs existaient déjà). Dans le navigateur, en français : cadenas, écran d'offre, message d'achat indisponible, passage au plan complet par le bouton de développement, retour à l'essai, carte de fin d'essai. En arabe : page d'accueil. Profil de test supprimé.
- Non vérifié : le parcours complet d'une leçon jusqu'à l'offre de fin d'essai, et la fin du TOEIC express, ainsi que le rendu sur un vrai téléphone.
- Reste : M3 (serveur et comptes), M4 (achats intégrés et paiement web en Tunisie), M5 (API partenaire), M6 (mentions légales, fiches des stores), M7 (synchronisation, en option).

### Test de niveau : correction d’une surestimation (2026-10-07)

**Signalement** : l’utilisateur, de niveau moyen en anglais, a obtenu presque le score maximal.

**Diagnostic**
- `npm run placement:sim` : 300 passages simulés par profil, avec le vrai moteur et la vraie banque. Quatre causes se cumulaient :
  1. **Écoute** : réécoute illimitée et version ralentie pendant le test, alors qu’au TOEIC on n’entend qu’une fois.
  2. **A priori** N(0, 1) centré sur θ = 0, soit **785** (frontière B1/B2) : les apprenants faibles et moyens étaient tirés vers le haut (+107 pour un A2, +15 à +34 pour un B1, même avec des items parfaitement calibrés).
  3. **Items surévalués** : plusieurs questions annoncées B2+ ou C1 se résolvaient par repérage de mots-clés, car leurs distracteurs n’avaient aucun rapport avec le texte. En simulation, des items plus faciles d’½ à 1 niveau font sortir un B1 à 670 entre **785 et 861**.
  4. **Test court** (10 à 24 items) : il s’arrêtait presque toujours au maximum, sans atteindre la précision visée.
- L’ancienne simulation (`npm run simulate`) affichait un biais nul parce qu’elle tirait ses candidats dans la même population que l’a priori, centrée sur 785.

**Corrections**
- Écoute limitée à **2 passages, sans ralenti**, dans le test de niveau et les TOEIC blancs (`McqQuestion`, prop `maxPlays`). Le compteur est conservé pendant la pause d’un TOEIC blanc. L’entraînement garde la réécoute illimitée et le ralenti.
- A priori **N(−0,9 ; 1,2)**, centré sur le niveau typique du public (≈ 550), avec un large écart pour atteindre les bons niveaux. La fiabilité affichée et la jauge de précision en tiennent compte.
- Test plus long : **16 à 30 items**, au moins 6 par section, erreur type visée 0,40. Probabilité de réussite au hasard c = **0,25** pour 4 choix (au lieu de 0,20).
- **Banque** :
  - 8 questions des niveaux 5 et 6 réécrites : la bonne réponse paraphrase le texte, et les distracteurs reprennent ses mots avec un autre sens, comme au TOEIC ;
  - 3 questions déclassées d’un niveau (*used to working*, l’inversion *Not only did they…*, *compliant*) ;
  - 1 nouvelle question de lecture C1 (`a6-r2`), pour garder au moins 3 items de lecture au niveau 6.
- L’écran de résultat dit plus clairement que l’estimation est indicative, que les questions ne sont pas calibrées sur de vrais candidats et qu’il vaut mieux se fier à l’intervalle. Les textes de la méthode et de l’introduction du test sont à jour.

**Résultat en simulation**
- Avec des items bien calibrés, le biais par niveau réel passe à +27 (A2), −22 et −37 (B1), −47 (B2) : le test est devenu légèrement prudent.
- Dans la population visée (`npm run simulate`) : biais −0,01 / +0,01, RMSE 0,56 / 0,55 logit, couverture à 90 % de 89 / 90 %, niveau CECR exact à 73 %.
- Si les items restent plus faciles qu’annoncé, le score reste gonflé (+77 pour un B1 si l’écart est d’un demi-niveau). Les distracteurs réécrits et l’écoute limitée visent cet effet, mais seule une **calibration sur des réponses réelles** (300 à 500 candidats) peut le corriger vraiment.

**Vérifié** : typage, `npm test` (132), `content:check` (50). Dans le navigateur, le test annonce « 30 questions au plus » ; une question d’écoute affiche « Écoutes restantes : 2 sur 2 », passe à 1 puis 0, puis désactive le bouton, sans bouton de ralenti. Le profil de test a été supprimé.

**Pour l’utilisateur** : un test de niveau déjà passé garde son ancien résultat. Il faut le refaire depuis le Profil (« Refaire le test de niveau »).

**À faire relire** : les 8 questions réécrites et la nouvelle question `a6-r2`.

### Effets sonores et accès à l’oral (2026-10-07)

**Sons**
- `expo-audio` 57.0.5 et sa dépendance `expo-asset`, installés par `npx expo install`.
  - Plugin configuré sans lecture en arrière-plan (inutile ici, et ce sont des permissions de moins à justifier), avec le même texte de permission micro que l’oral.
  - `expo-doctor` : 21/21.
- 8 sons générés par `scripts/make-sounds.cjs`, sans aucune source extérieure (44,1 kHz, environ 490 Ko en tout) :
  - succès : Bulle, Carillon, Marimba ;
  - erreur : Toc, Doux, Glissé, tous graves et ronds, jamais agressifs ;
  - unité terminée ;
  - nouveau niveau.
- Les premiers sons ont été jugés « pas top » par l’utilisateur. Ils sont remplacés, et le choix entre 3 sons a été ajouté pour la bonne réponse et l’erreur, les deux sons qui reviennent souvent. Par défaut : Bulle et Toc, les plus discrets.
- Où ils jouent :
  - `ExerciseRunner` : après chaque réponse, dans les leçons et les révisions ;
  - `MatchExercise` : à chaque mauvaise paire ;
  - `LessonScreen` : en fin de série, s’il y a quelque chose à fêter. `celebrationFor` (fonction pure et testée) choisit entre unité validée pour la première fois et niveau CECR estimé plus haut ; le niveau l’emporte. Le nouveau niveau est aussi annoncé dans une carte dorée.
  - Les TOEIC blancs restent silencieux, comme à l’examen.
- Service `createFeedbackSounds` (fabrique testée) : lecteurs créés au premier usage, rembobinés à chaque lecture, volume 0,7, jamais d’erreur remontée. Le mode audio par défaut est gardé : le son suit le mode silencieux et se mêle aux autres sons.
- Profil : interrupteur « Effets sonores » et deux rangées de 3 choix ; toucher un son le choisit et le fait entendre.
- Vérifié :
  - typage, `npm test` (132), `content:check` (50) ;
  - dans le navigateur, en interceptant les lectures audio :
    - une série réussie à 100 % donne 8 fois `success-pop` puis `unit-complete` ;
    - une mauvaise paire donne le son d’erreur, et les bonnes paires restent silencieuses ;
    - l’interrupteur coupe tous les sons ;
    - les 6 choix jouent chacun le bon fichier et sont enregistrés.
- **Non vérifié** : l’écoute réelle des sons (je ne peux pas les entendre ; c’est aussi pourquoi le choix est proposé) ; le son de niveau dans l’app, qui demande une vraie progression après un test de niveau (sa logique est testée).

**Accès à l’oral**
- L’utilisateur ne trouvait pas les exercices de prononciation, accessibles seulement par une carte de l’onglet Examens. Une carte « Oral et prononciation » est ajoutée sur l’écran Parcours, sous « Prochaine étape », avec un bouton « Pratiquer l’oral ».
- À la première visite, l’écran Oral montre d’abord le consentement au micro ; les listes d’exercices apparaissent après l’accord.

### Identité visuelle (2026-10-07) — palette Toki et mascotte provisoire

Application du brief `Toki – Brief mascotte & palette.md`. Deux décisions ont été prises par l’utilisateur : un Toki provisoire en SVG, et des libellés en Encre sur les boutons vifs.

**Palette** (`src/theme.ts`)
- Les 10 couleurs du brief deviennent les jetons de l’app : le Bleu Ciel domine, l’Orange reste ponctuel, l’Or est réservé aux récompenses.
- Le turquoise, absent du brief, est supprimé. Les bandes de niveau du parcours vont maintenant d’une teinte claire au Bleu Ciel.
- **Contraste** : le blanc sur Bleu Ciel (2,98:1) et sur Orange (2,36:1) n’atteint pas le seuil AA demandé par le brief. Les libellés des boutons vifs sont donc en Encre (5,3:1 et 6,6:1).
  - Les textes et icônes en couleur utilisent des teintes foncées dérivées : Bleu Nuit, et des variantes foncées du vert, du rouge, de l’orange et de l’or, toutes au moins à 4,5:1.
  - Le passage a été fait par script sur les propriétés `color`. Les remplissages (barres de progression, légende du graphique de résultats) gardent les couleurs vives.
  - Le badge « Tu es ici » est passé du texte blanc au texte Encre.
- **Boutons** : `primary` en Bleu Ciel, nouvelle variante `play` en Orange Soleil, utilisée pour « Commencer » sur le Parcours. Les étoiles de fin de série sont en Or Score.
- `src/theme.test.ts` vérifie les couleurs du brief et le contraste AA de chaque couple texte/fond et des libellés de boutons.

**Toki provisoire**
- `src/components/Toki.tsx` (`react-native-svg` 15.15.4, installé par `npx expo install`, inclus dans Expo Go) : un faucon rond en goutte, ventre Pêche en cœur, bec et pattes Orange, sourcils Bleu Nuit, mèche de 3 plumes, ailes-mains, queue en éventail, contours Bleu Nuit arrondis.
- **5 expressions** : neutre, joie, encouragement (aile sur la tête, mèche tombante), réflexion (aile sous le bec), accueil (coucou et clin d’œil).
- **5 stades**, selon le score estimé, avec `tokiStage` (fonction pure et testée) :
  - Poussin : coquille d’œuf, sans casque ;
  - Apprenti : casque audio et sac à dos ;
  - Pro : nœud papillon ;
  - Pilote : lunettes d’aviateur et écharpe ;
  - Doré : couronne de plumes, reflets Or et halo.
- En miroir en arabe. Chaque partie est un calque séparé, prêt pour une future animation.
- Le hibou emoji, que le brief exclut, est remplacé partout. Les usages ont été réaffectés : joie après une réussite, encouragement après un échec, accueil sur l’écran d’accueil.

**Vérifié**
- Typage, `npm test` (124), `content:check` (50), `expo-doctor` (21/21).
- Galerie temporaire (retirée ensuite) des 5 stades, des 5 expressions et de la version 48 px. Trois défauts y ont été corrigés : l’arceau du casque ressemblait à un grand sourire, l’aile d’encouragement cachait un œil, et l’aile de réflexion partait vers l’extérieur.
- Dans le navigateur : écran d’accueil en français (palette, bouton Bleu Ciel avec libellé Encre), Parcours en arabe (un seul bouton Orange), Toki en miroir en arabe. Le profil de test a été supprimé.

**Non fait** : ce sont les livrables du brief pour le designer.
- Les 5 autres expressions : danse, concentration, surprise, fatigue, triomphe.
- Le model sheet, l’icône d’app (`assets/` et `app.json` inchangés) et les fichiers sources pour l’animation.
- Le mode sombre : l’app est configurée en clair, avec `userInterfaceStyle: light`.

### Photos de réserve (2026-10-07)

- Les 7 photos en réserve ont été téléchargées à la demande de l’utilisateur (960 px, licence relue sur Commons) dans `content/photos-reserve/`, hors de l’application, avec un avis pour chacune dans `content/photos-reserve/README.md`.
- 2 photos ont été **intégrées** à la demande de l’utilisateur :
  - **p31**, ex-r36 : un chauffeur-livreur dans sa camionnette, domaine public. Aucun logo visible dans le cadre ; tâche `ph-a2-5` (A2).
  - **p32**, ex-r32 : un abri de bus animé à Rio, CC0. Seulement des adultes, visages reconnaissables dans un lieu public, comme Commons le signale ; tâche `ph-b2-5` (B2).
- 5 photos restent écartées ou déconseillées : r31 (bière Guinness), r33 (foule avec des adolescentes), r34 (logos IKEA, Dell, Nike), r35 (plaques d’immatriculation), r37 (logo UPS).
- 22 photos d’entraînement au total (A1 4 · A2 5 · B1 4 · B2 5 · C1 4) et 30 fichiers dans `assets/speaking-photos/` (environ 5,7 Mo). Les crédits sont à jour. Le contrôle des quotas est passé à 4–5–4–5–4 et reste exact.
- Vérifié : typage, `npm test` (119), `content:check` (50). Dans le navigateur, les deux photos se chargent en 960 px, avec leurs proportions et leur crédit ; le profil de test a été supprimé.
- À faire relire : les deux nouvelles descriptions modèles.

### Correction (2026-10-07) — citations anglaises dans les textes arabes

**Problème** : dans les aides en arabe, une citation anglaise qui finit par « … » ou par une ponctuation (`«I largely agree, as long as…»: …`) s’affichait avec ses points de suspension et ses guillemets du mauvais côté. Ces caractères sont « neutres » pour l’algorithme bidirectionnel d’Unicode : entre de l’anglais et de l’arabe, ils prennent la direction du paragraphe. Le défaut touchait les conseils de tous les lots Speaking et les plans des tâches.

**Correction**
- `src/i18n/bidi.ts` : la fonction pure `isolateLatin` entoure chaque passage latin d’un isolat de gauche à droite (U+2066 … U+2069), au moment de l’affichage. Le contenu n’est pas modifié.
- Une ponctuation finale (. ? !) reste dans l’isolat seulement si un guillemet fermant suit. Sinon, c’est le point de la phrase arabe et il reste dehors.
- `AppText` applique cette fonction aux textes en arabe uniquement. `EnglishText` et les autres langues ne changent pas.

**Vérifié**
- Typage, `npm test` (119, dont 6 tests pour `isolateLatin`), `content:check` (50).
- Dans le navigateur, en arabe, sur le plan de la tâche 11 (5 lignes avec des citations) : la position des caractères, mesurée à l’écran, montre que « … » reste à droite du mot anglais et que les guillemets « » sont dans le bon sens.
- Sur la phrase signalée, la même mesure sans la correction place bien « … » du mauvais côté, ce qui confirme la cause.
- Le profil de test a été supprimé (vérifié vide).
- **Non vérifié** : le rendu sur Android et iOS. Les isolats Unicode y sont pris en charge par les versions récentes ; sur un système qui les ignorerait, l’affichage resterait celui d’avant.

### Lot S6 (2026-10-07) — tâches 3 et 4 (décrire une photo)

**Photos**
- **Recherche** : sur Wikimedia Commons, licences **CC0 ou domaine public** uniquement. Environ 700 résultats ont été passés en revue sur vignettes, puis 41 photos à plus grande taille. La liste soumise à l’utilisateur est dans `content/photos-candidates.md` : 30 photos proposées et 7 en réserve.
- **Téléchargement**, après accord explicite de l’utilisateur pour les 30 photos proposées : versions de 960 px générées par Wikimedia (taille standard la plus proche des 1 024 px annoncés). La licence a été relue sur Commons au moment du téléchargement.
- **Vérification en taille réelle** : 2 photos retirées, p05 (logo Nike au premier plan) et p16 (affiches publicitaires montrant un enfant, avec une marque). **28 photos** restent dans `assets/speaking-photos/` (5,4 Mo).
- `src/data/speaking/photos/credits.ts` : registre fichier, titre, page Commons, auteur, licence et dimensions. L’écran **« Crédits des photos »** (`PhotoCreditsScreen`) cite chaque auteur et ouvre la page source. Il est accessible depuis l’écran Oral et depuis chaque photo.

**Contenu**
- 20 tâches d’entraînement, 4 par niveau de A1 à C1, dans `src/data/speaking/photos/<niveau>.ts` : des objets seuls et des scènes simples en A1, des scènes plus chargées en C1 (carrefour, tarmac, séance de réflexion, récolte).
- 8 tâches de simulation, 2 par simulation (`photos` dans `s1…s4.ts`).
- Pour chaque photo :
  - un exemple de description d’environ 30 s (40 à 80 mots), écrit d’après la photo examinée en taille réelle ;
  - 3 à 4 éléments attendus ;
  - un conseil ;
  - une **description de la photo pour les personnes malvoyantes** (texte alternatif), dans les 4 langues.

**Écran `PhotoScreen`** (route `Photo`)
- 45 s de préparation (avec un plan en 4 étapes, sauf en simulation), puis 30 s de réponse.
- **Bilan indicatif, sans score** :
  - longueur et débit ;
  - éléments attendus ;
  - **présent continu** (« is/are + -ing », hors adjectifs courants comme *interesting*) ;
  - **expressions de lieu** (*in the foreground*, *on the left*…) ;
  - exemple à écouter, conseil, et description de la photo.
- Fonction pure `describeFeatures`, testée.
- **Simulations** : elles comptent maintenant les **11 tâches** dans l’ordre officiel (1–2, 3–4, 5–7, 8–10, 11). L’introduction n’annonce plus l’absence des photos, et le bilan inclut les tâches 3 et 4.
- **Écran Oral** : section « Décrire une photo », filtrée par niveau.

**Outillage**
- `content:check` passe à 50 contrôles, dont :
  - 4 photos par niveau et 2 par simulation ;
  - chaque fichier du dossier a un crédit (CC0 ou domaine public, auteur, page Commons) ;
  - chaque photo est utilisée une seule fois et toutes sont utilisées ;
  - textes dans les 4 langues ;
  - modèle de 40 à 80 mots, sans chiffres, avec au moins une expression de lieu, une action ou un « there is/are », et tous les éléments attendus.
- Le contrôle des titres en double couvre aussi les photos.
- Le test lit le dossier d’images avec `fs` : il référence `@types/node`, déjà fourni par Expo, sans nouvelle dépendance.
- `content:stats` compte 20 photos à 2 min chacune : **12,3 h de Speaking**, ce qui atteint l’objectif d’environ 12 h.

**Vérifié**
- Typage, `npm test` (113), `content:check` (50).
- Dans le navigateur, avec un profil de test supprimé ensuite (`removeItem` puis rechargement ; vérifié vide) et une reconnaissance vocale simulée :
  - les images sont bien intégrées par Metro (960 px) ;
  - en français, A1 « Un joggeur dans le parc » : crédit affiché, préparation de 45 s, bilan correct (39 mots, 4/4 éléments, 2 présents continus, 3 expressions de lieu) ; l’écran des crédits charge ses 28 vignettes ;
  - en arabe, en largeur téléphone : l’introduction de la simulation 2 liste les 11 tâches, et la tâche 3 s’affiche avec le bandeau « المحاكاة 2 · المهمة 3 ».
- Corrigé pendant ces essais : sur le web, la photo sortait à la verticale et recadrée, car `aspectRatio` n’était pas respecté sur l’image elle-même. Le ratio est maintenant posé sur un conteneur : 343 × 257 px sur un écran de 375 px.
- **Non vérifié** : le rendu sur un téléphone réel et le micro réel ; la description des photos par un lecteur d’écran.

**À faire relire**
- Les 28 descriptions modèles, à comparer aux photos.
- Le choix de garder p10 (un petit enfant de dos dans une file d’attente), p12 (enseignes commerciales nombreuses, dont un logo partiel) et p21 (couleurs d’une compagnie aérienne).
- Les 7 photos en réserve, si on veut plus de variété (peu de bureaux et de restaurants).

### Lot S5 (2026-10-07) — 4 simulations Speaking chronométrées

**Ajouté**
- 4 simulations, chacune avec les 9 tâches sans photo dans l’ordre officiel : tâches 1 et 2 (lecture), 5 à 7 (questions), 8 à 10 (document), 11 (opinion). Durée d’environ 20 minutes.
- **Contenu inédit**, comme pour les TOEIC blancs écrits : 8 textes à lire, 4 situations à 3 questions, 4 documents et 4 sujets d’opinion, de niveau B1 (simulations 1 et 2) et B2 (3 et 4). Les fichiers sont dans `src/data/speaking/simulations/s1…s4.ts`. Ce contenu est accessible par identifiant, mais n’apparaît pas dans les listes d’entraînement.
- **Déroulé** :
  - les écrans existants passent en mode simulation (paramètre `sim`) : pas d’introduction, pas de bilan intermédiaire, passage automatique à la tâche suivante, même sans réponse ;
  - un bandeau indique la simulation, la tâche et l’avancement ;
  - conditions d’examen : ni modèle à écouter, ni conseil, ni plan, ni bouton « Afficher la question » ;
  - pour les tâches 5 à 7, la mise en situation est affichée et lue avant la première question, comme à l’examen ;
  - `navigation.replace` ne garde qu’un écran de la simulation dans la pile : la flèche de retour quitte la simulation à tout moment.
- **Écran `SimulationScreen`** (route `Simulation`) :
  - sans `runId`, l’introduction : ordre des tâches et temps officiels, absence des tâches 3 et 4, conseil de s’isoler, accès au dernier bilan ;
  - avec `runId`, le bilan par tâche : précision mesurée pour la lecture ; nombre de réponses et idées attendues pour les tâches 5 à 10 ; longueur (avec la mention « réponse courte »), connecteurs et idées pour la tâche 11. Chaque tâche a un bouton « Refaire cette tâche ».
  - Le bilan rappelle que l’application ne donne **pas de score sur 200**.
- Les tentatives d’une même passe partagent un `runId`. Le bilan est calculé par `simulationReport`, et le dernier passage est retrouvé par `lastRunId` (fonctions pures et testées).
- **Écran Oral** : section « Simulations complètes » en tête, avec la mention « Déjà fait ».
- Débit de lecture : il n’est plus calculé pour une capture de moins de 5 s, comme pour les autres tâches.

**Outillage**
- `content:check` passe à 46 contrôles. Les règles de qualité (longueur, chiffres, 4 langues, connecteurs, idées présentes dans le modèle et dans le document, titres distincts par niveau) s’appliquent aussi au contenu des simulations. Les quotas par niveau restent limités à l’entraînement.
- Deux contrôles nouveaux : 4 simulations dont toutes les étapes sont accessibles par identifiant, et un contenu absent des listes d’entraînement.
- `content:stats` : 11,6 h de Speaking (4 simulations à 20 min chacune), sur un budget d’environ 12 h.

**Vérifié**
- Typage, `npm test` (108), `content:check` (46).
- Dans le navigateur, avec un profil de test supprimé ensuite (`removeItem` puis rechargement ; vérifié vide) et une reconnaissance vocale simulée :
  - en français, simulation 1 complète : 9 tâches enchaînées ; la tâche 2, sans réponse, est passée automatiquement et rien n’est enregistré ; 8 tentatives partagent le même `runId` ; le bilan est correct (lecture 64 %, 3/3 réponses et 8/8 idées, document 7/8, opinion « réponse courte » avec 6 types de connecteurs) ;
  - « Retour à l’oral » mène à l’écran Oral, et la flèche de retour pendant une tâche quitte la simulation ;
  - en arabe, en largeur téléphone : bandeau « المحاكاة 3 · المهمة 1 », barre d’avancement de droite à gauche, ni modèle ni conseil ; introduction et bilan traduits.
- Corrigé pendant ces essais :
  - le retour depuis « Voir le dernier bilan » sautait l’introduction : `navigate` vers le même écran mettait à jour ses paramètres au lieu d’empiler un écran ; c’est maintenant `push` ;
  - le débit absurde en lecture (720 mots/min) pour une capture très courte ; le premier essai, enregistré avant la correction, garde cette valeur.
- **Non vérifié** : une simulation réelle de 20 minutes avec un micro et une voix (synthèse vocale absente dans le panneau), et le refus du micro en cours de simulation : la tâche reste alors en échec avec « Recommencer », sans passer à la suite.

**À faire relire** : le contenu des 4 simulations (8 textes, 4 situations, 4 documents, 4 sujets) et le niveau annoncé (B1 ou B2).

### Lot S4 (2026-10-07) — 40 sujets d’opinion (tâche 11)

**Ajouté**
- 40 sujets, 8 par niveau de A1 à C1, dans `src/data/speaking/opinions/<niveau>.ts` :
  - A1 et A2 : préférences de la vie courante ;
  - B1 et B2 : vie professionnelle et société (télétravail, réunions, IA et emploi, taxe sur les boissons sucrées…) ;
  - C1 : débats (réputation et profits, âge de la retraite, salaires des dirigeants, revenu universel, tourisme, surveillance des salariés…).
- Pour chaque sujet : la question en anglais, son explication et un conseil d’argumentation dans les 4 langues, un exemple de réponse d’environ une minute (de 70 à 160 mots), et 2 ou 3 idées attendues.
- **Écran `OpinionScreen`** (route `Opinion`), au format officiel :
  - 45 s de préparation, avec la question lue à voix haute et affichée, et un plan en 5 étapes ;
  - un bouton « Parler maintenant » pour écourter la préparation ;
  - 60 s de réponse.
- **Bilan indicatif, sans score** :
  - longueur, débit, idées attendues ;
  - **connecteurs d’argumentation**, classés en 6 types (avis, raison, exemple, ajout, opposition, conclusion), avec ceux qui ont été entendus et des propositions pour les types absents ;
  - un conseil si moins de 4 types sont utilisés.
- Service `connectorsUsed` (fonction pure et testée) dans `responseFeedback.ts`. Seules les réponses d’au moins 3 mots sont enregistrées, en texte et indicateurs (`connectorsFound`).
- **Longueur attendue pour 60 s** : environ 90 mots, au lieu d’un mot par seconde. Sinon, 36 mots étaient jugés suffisants pour une minute d’argumentation. La règle des questions de 15 et 30 s ne change pas.
- **Écran Oral** : section « Donner son opinion », filtrée par niveau, avec la mention « Déjà fait ».

**Outillage**
- `content:check` passe à 44 contrôles :
  - 8 sujets par niveau ;
  - aides dans les 4 langues ;
  - questions sans chiffres ;
  - exemples de 70 à 160 mots, avec **au moins 5 types de connecteurs**, dont un avis et un exemple ;
  - idées attendues présentes dans l’exemple.
- Nouveau contrôle sur tout l’oral : **pas deux titres identiques dans un même niveau**. Il a trouvé 2 doublons, corrigés :
  - le sujet B1 « Le télétravail » est renommé « Maison ou bureau ? » ;
  - le document B2 « إطلاق منتج » est renommé « حفل إطلاق منتج ».
- Les contrôles ont aussi repéré 5 exemples de réponse trop pauvres en connecteurs, corrigés. Le détecteur reconnaît en plus *therefore*, *consequently*, *nevertheless*, *main reason* et *agree* / *disagree* seuls (« I largely agree »).
- `content:stats` : 10,3 h de Speaking (40 sujets à 3 min chacun), sur un budget d’environ 12 h.

**Vérifié**
- Typage, `npm test` (104), `content:check` (44).
- Dans le navigateur, avec un profil de test supprimé ensuite (`removeItem` puis rechargement ; vérifié vide) et une reconnaissance vocale simulée :
  - en français, B1 « Maison ou bureau ? » : plan affiché, préparation interrompue par « Parler maintenant », bilan avec 5 types de connecteurs sur 6 et 2 idées sur 3, tentative enregistrée ;
  - en arabe, C1 « مراكز مدن بلا سيارات » : réponse courte signalée (« 20 كلمة… استهدف 90 »), 3 types de connecteurs sur 6 et le conseil d’en utiliser au moins 4.
- **Non vérifié** : la lecture de la question par la synthèse vocale et le micro réel. Les débits affichés pendant les essais (200 à 360 mots/min) viennent de la simulation, arrêtée après quelques secondes.
- **Défaut repéré**, corrigé ensuite (voir « Correction : citations anglaises en arabe ») : en arabe, l’anglais cité dans un conseil qui finit par « … » (« «I largely agree, as long as…» ») voit ses points de suspension et ses guillemets passer du mauvais côté. Ce problème de texte bidirectionnel touche aussi les conseils des lots S1 à S3 ; il est proposé comme tâche séparée (isoler les passages latins à l’affichage).

**À faire relire** : les 40 exemples de réponse (registre et naturel, surtout en C1) et les explications des questions. Le détecteur de connecteurs est volontairement simple : « so » ou « also » comptent même hors argumentation.

### Lot S3 (2026-10-07) — 30 documents et 90 questions (tâches 8 à 10)

**Ajouté**
- 30 documents de 4 à 6 lignes, 6 par niveau de A1 à C1, dans `src/data/speaking/documents/<niveau>.ts`. Ce sont des emplois du temps, des menus, des horaires, des itinéraires, des programmes de conférence et des ordres du jour. Chaque document a son explication et ses conseils dans les 4 langues.
- Format officiel :
  - 45 s pour lire le document ;
  - un appelant se présente, puis pose 3 questions qu’on entend seulement ;
  - 3 s de préparation, puis 15 s, 15 s et 30 s de réponse ;
  - la dernière question est lue deux fois.
- Les questions suivent la logique de l’examen : la question 8 demande une information, la question 9 contient souvent une erreur à corriger (« Actually, … »), la question 10 demande une synthèse. En C1, il faut déduire ou calculer (sessions avec interprétation, réduction étudiante, module manqué et règle du certificat).
- Les « idées attendues » sont les informations du document : heures, lieux, prix, noms. Les heures sont écrites en lettres (« seven fifteen ») ; la normalisation fait correspondre « 7:15 », que la reconnaissance écrit souvent ainsi.
- **Écran** : `RespondScreen` gère maintenant les tâches 5 à 7 et 8 à 10.
  - Pour un document : explication, puis lecture de 45 s (bouton « Je suis prêt » pour passer), puis les questions ; le document reste affiché jusqu’au bilan.
  - La question n’est pas affichée, comme à l’examen, mais un bouton « Afficher la question » aide les débutants. Elle s’affiche automatiquement si l’appareil n’a pas de voix anglaise.
  - Le bilan reste indicatif et sans score, avec le document en tête.
- Nouveau composant `SpeakingDocumentCard` : tableau toujours en LTR, y compris en arabe.
- **Écran Oral** : section « Répondre à partir d’un document », filtrée par niveau, avec la mention « Déjà fait ».

**Outillage** : `content:check` passe à 39 contrôles :
- 6 documents par niveau, avec les temps 15, 15 et 30 s ;
- identifiants uniques entre les tâches 5 à 7 et 8 à 10 ;
- aides dans les 4 langues ;
- au moins 4 lignes par document, de largeur constante ;
- questions, appelant et exemples de réponse sans chiffres ;
- longueur des exemples ;
- **chaque idée attendue figure à la fois dans le document et dans l’exemple de réponse** ;
- ordre de lecture (`questionAudio` : l’appelant d’abord, la dernière question deux fois).

`content:stats` affiche 8,3 h de Speaking (90 questions sur document à 2 min chacune), sur un budget d’environ 12 h.

**Vérifié**
- Typage, `npm test` (96), `content:check` (39).
- Dans le navigateur, en largeur téléphone (375 px), avec un profil de test supprimé ensuite (`removeItem` puis rechargement ; vérifié vide) et une reconnaissance vocale simulée :
  - en français, B1 « Un voyage d’affaires » : tableau lisible, décompte de 45 s, 3 réponses (2/2, 2/2, 3/4 idées) ; « 7:15 » est bien reconnu comme « seven fifteen » ;
  - B1 « Un salon professionnel » : question masquée, puis affichée avec le bouton ; une question sans réponse n’est pas enregistrée ;
  - en arabe : liste avec « منجز », page en RTL et document en LTR.
- **Non vérifié** : la lecture réelle par la synthèse vocale. Ma fausse synthèse vocale n’a pas été appelée par `expo-speech` dans le panneau, et c’est le délai de secours qui a lancé la préparation. L’ordre de lecture est couvert par un test, mais le rendu sonore (voix, pause entre les deux lectures) reste à écouter sur un appareil réel, comme le micro.

**À faire relire** : les 30 documents (cohérence des horaires et des prix) et les 90 exemples de réponse ; les conseils de C1 qui demandent un calcul (réduction de 50 %, 5 modules sur 6).

### Lot S2 (2026-10-07) — 90 questions (tâches 5 à 7)

**Ajouté**
- 30 situations de 3 questions, soit 90 questions, 6 situations par niveau de A1 à C1, dans `src/data/speaking/questions/<niveau>.ts`. Format officiel : une mise en situation (enquête, entretien téléphonique), puis 3 questions avec 3 s de préparation et 15 s, 15 s, puis 30 s pour répondre.
- Thèmes : vie quotidienne en A1 et A2 (petit-déjeuner, trajet, téléphone, musique…), vie de bureau en B1 et B2 (service client, IA au travail, transports…), sujets de débat en C1 (management, RSE, délocalisation, données personnelles, semaine de quatre jours, formation continue).
- Pour chaque question : un exemple de réponse en anglais, à la bonne longueur pour le temps imparti ; 2 à 4 « idées attendues » (mots-clés avec variantes, par exemple `because|since`) ; un conseil de méthode dans les 4 langues. Chaque situation a aussi une explication en clair dans les 4 langues.
- **Écran `RespondScreen`** (route `Respond`) : situation à lire ou à écouter, puis pour chaque question la lecture par la synthèse vocale, 3 s de préparation et l’enregistrement chronométré, avec un bouton « J’ai terminé ». Si la synthèse vocale manque ou ne signale pas sa fin, la préparation démarre quand même après un délai.
- **Bilan indicatif, sans score**, conformément au plan : réponse entendue, longueur (« courte » sous 60 % d’environ un mot par seconde), débit (seulement au-delà de 5 s), idées attendues mentionnées ou absentes, exemple de réponse à écouter, conseil.
- Seules les réponses d’au moins 3 mots sont enregistrées, sous forme de texte et d’indicateurs (`kind: 'respond'`). Une question sans réponse n’enregistre rien.
- **Écran Oral** : nouvelle section « Répondre à des questions », filtrée par les mêmes niveaux (les filtres sont remontés au-dessus des deux sections), avec la mention « Déjà fait ».
- Correction dans `useSpeechCapture` : le délai de sécurité d’un arrêt pouvait fermer la capture suivante si elle démarrait dans les 4 s. Chaque capture a maintenant un numéro.

**Outillage** : `content:check` passe à 33 contrôles :
- 6 situations par niveau, avec les temps 15, 15 et 30 s ;
- identifiants uniques ;
- aides dans les 4 langues, avec l’arabe en écriture arabe ;
- consignes en forme de question (ou d’impératif, comme « Describe… ») ;
- aucun chiffre ;
- longueur des exemples (12 à 45 mots pour 15 s, 35 à 85 mots pour 30 s) ;
- chaque idée attendue est bien présente dans l’exemple.

`content:stats` affiche 5,3 h de Speaking (60 textes et 90 questions à 1,5 min chacune), sur un budget d’environ 12 h.

**Vérifié**
- Typage, `npm test` (90), `content:check` (33).
- Dans le navigateur, avec un profil de test supprimé ensuite (`removeItem` puis rechargement immédiat ; vérifié vide), avec une reconnaissance vocale simulée, car le panneau bloque le micro :
  - en français, situation C1 « Le management » : arrêt anticipé à la question 1, aucune réponse à la question 2 (le temps s’écoule, rien n’est enregistré), réponse courte à la question 3 ; bilan correct et 2 tentatives enregistrées ;
  - en arabe, situation C1 « البيانات الشخصية » : bilan en RTL, idées attendues en LTR, mention « منجز » dans la liste.
- Corrigé pendant ces essais : un débit absurde (540 mots/min) quand la réponse dure moins de 5 s (il n’est plus affiché) ; l’accord en arabe de « 10 كلمة » (remplacé par « عدد الكلمات: 10 ») ; « i believe » affiché en minuscule.
- **Non vérifié** : la synthèse vocale des questions (pas de voix dans le panneau, donc la préparation démarre au délai de secours) et la reconnaissance réelle au micro. À tester sur un appareil réel, comme pour S0.

**À faire relire** : les 90 exemples de réponse et les mots-clés. Une réponse juste mais formulée autrement peut être marquée « absente » ; le bilan le présente comme indicatif.

### Lot S1 (2026-10-07) — 60 textes à lire à voix haute

**Ajouté**
- 58 textes, pour un total de 60, soit 12 par niveau de A1 à C1. Ils sont rangés dans `src/data/speaking/readAloud/<niveau>.ts`, et l’ancien fichier unique est remplacé par ce dossier.
- Les genres sont ceux du TOEIC : annonces de gare, d’aéroport et de magasin, messages vocaux, publicités, informations, visites guidées, présentations d’intervenants, discours et communiqués.
- La difficulté monte selon le niveau : phrases simples au présent en A1 ; passif, relatives et concessions en B2 ; registre soutenu, incises et propositions participiales en C1.
- Chaque texte compte de 41 à 58 mots (format officiel : 40 à 60). Il a un thème et un conseil de prononciation dans les 4 langues, ciblé sur les difficultés des francophones et des arabophones :
  - les sons *th*, *h* aspiré et *w* ;
  - les terminaisons en *-ed* ;
  - les lettres muettes (*Wednesday*, *fastened*, *building*) ;
  - l’accent de mot (*fif-TEEN* / *FIF-ty*, mots en *-tion*) ;
  - l’intonation des listes, des questions et des incises.
- **Écran Oral** : des filtres A1 à C1, ouverts par défaut sur le niveau estimé de l’apprenant.

**Équité de la mesure**
- Les nombres, heures et numéros de vol sont écrits en lettres, et il n’y a ni abréviation ambiguë (*a.m.*) ni pourcentage.
- Les marques inventées sont simplifiées (*Power Max* au lieu de *PowerMax* ; *Technova* est supprimé), car un moteur de reconnaissance les écrirait de façon imprévisible.
- **Correction de l’alignement** : les accents étaient supprimés avec la lettre, si bien que *café* devenait *caf* et ne correspondait plus au *cafe* écrit par la reconnaissance. Les accents sont maintenant retirés avant la comparaison, avec un nouveau test.
- Limite connue : les noms propres tunisiens (*Hammamet*, *Zribi*, *Mabrouk*…) sont fidèles au contexte, mais un moteur réglé en anglais peut mal les reconnaître. À surveiller lors des essais réels ; si le problème est fréquent, ces mots pourront être exclus du score.

**Outillage** : `content:check` (29 contrôles) vérifie maintenant 12 textes par niveau et une longueur de 40 à 60 mots. `content:stats` affiche 3,0 h de Speaking, sur un budget séparé d’environ 12 h.

**Vérifié**
- Typage, `npm test` (80), `content:check` (29).
- Dans le navigateur, avec un profil de test supprimé ensuite : l’écran Oral s’ouvre sur B2 pour un profil estimé B2 ; filtre C1, puis un texte C1 en français ; filtre A1, puis un texte A1 en arabe.
- Le serveur Metro, lancé avant les installations du lot S0, ne trouvait plus `expo` ni `expo-modules-core`. Il a été redémarré en vidant le cache.

**À faire relire** : les 60 textes, surtout les conseils de prononciation (notations approximatives de type « WENZ-day »), et les traductions des thèmes.

### Lot S0 (2026-10-07) — architecture du volet Speaking

**Ajouté**
- **`expo-speech-recognition` 57.1.0**, installé avec `npx expo install`. Son plugin est configuré dans `app.json`, avec des messages de permission iOS honnêtes : Apple peut traiter la voix. Le module exige un *development build* ; dans Expo Go, il est chargé de façon paresseuse et l’app affiche « indisponible » au lieu de planter.
- **`src/services/recognition.ts`** : l’interface `SpeechRecognitionService`, testable par injection du module ; le câblage à l’appareil est dans `recognitionDevice.ts`.
  - L’audio n’est jamais conservé (`recordingOptions.persist: false`).
  - La reconnaissance sur l’appareil est demandée dès qu’elle est disponible.
  - Sur le web, c’est la Web Speech API qui est utilisée.
- **`src/services/alignment.ts`** : alignement mot à mot par distance d’édition. À coût égal, l’alignement qui retrouve le plus de mots justes est retenu.
  - La normalisation gère casse, ponctuation, contractions, nombres en chiffres (« 9 » = « nine ») et pourcentages.
  - Les résultats distinguent mots reconnus, sautés, entendus autrement et en trop ; les mots en trop ne pénalisent pas le score.
- **Consentement** (`SpeakingScreen`), affiché avant le premier usage du micro :
  - il dit ce qui est écouté et où se fait la reconnaissance (appareil, système ou navigateur), qu’aucun audio n’est conservé, quelles sont les limites de la mesure, et demande l’accord d’un parent en dessous de 15 ans ;
  - le refus est réversible, et le retrait de l’accord efface aussi les résultats.
- **Lecture à voix haute** (`ReadAloudScreen`) :
  - 45 s de préparation avec un modèle à écouter, puis 45 s de lecture avec la transcription en direct ;
  - le résultat donne les mots reconnus, le débit et le texte annoté (barré = sauté, souligné = entendu autrement, à toucher pour voir ce qui a été entendu), avec une légende pour ne pas dépendre de la couleur ;
  - les tentatives où rien n’a été entendu ne sont ni notées ni enregistrées.
- **État** : `speechConsent`, et `speechAttempts` qui garde les 100 dernières tentatives, en texte et indicateurs seulement.
- **Entrée « Oral »** en tête de l’onglet Examens, et 2 premiers textes à lire (`ra-a2-1`, `ra-b1-1`) dans `src/data/speaking/readAloud.ts`.
- **Outillage** :
  - `content:check` (28 contrôles) vérifie les textes à lire : 4 langues, 35 à 65 mots, aucun chiffre ni abréviation ambiguë ;
  - `content:stats` affiche un budget Speaking séparé, sans le compter dans les 60 h.
- **Dépendances** : `expo-doctor` signalait `expo-font` manquant (requis par `@expo/vector-icons` hors d’Expo Go, donc dans le *development build*) et un correctif `expo` en retard. Les deux sont corrigés avec `npx expo install` ; 21 vérifications sur 21 passent.

**Corrigé pendant le lot**
- Avec un micro refusé, la première version affichait et enregistrait un résultat de 0 %. Elle affiche maintenant la cause et « Réessayer », sans rien enregistrer.
- En arabe, les parenthèses du titre « (TOEIC Speaking) » s’affichaient inversées. Elles sont remplacées par un séparateur.

**Vérifié**
- Typage, `npm test` (78, dont 12 tests d’alignement et 6 du service de reconnaissance avec un module simulé), `content:check` (28), `expo-doctor` (21 sur 21).
- Dans le navigateur intégré, avec un profil de test supprimé ensuite, en français puis en arabe : consentement, refus, changement d’avis, acceptation, liste, préparation et compte à rebours, micro refusé, retrait avec effacement.
- Le navigateur intégré bloque le micro. La reconnaissance a donc été **simulée** avec une fausse Web Speech API qui « lit » le texte A2 avec 2 erreurs. Le résultat est de 51 mots sur 53 (96 %), avec *Free* signalé « entendu *tree* » et *main* barré.

**Reste à faire pour valider S0** (critère du plan : « fonctionne de bout en bout sur un appareil réel ») : une vraie lecture avec un vrai micro. Je ne peux pas la faire moi-même. Deux options :
- dans Chrome ou Edge sur ordinateur (`npx expo start --web`) ;
- sur téléphone avec un *development build* (`npx expo run:android`, ou `eas build --profile development`).

Points à observer pendant ce test :
- le débit affiché ;
- la reconnaissance des noms propres (*Green Valley*, *Haddad*) ;
- le comportement en cas de silence.

**À faire relire** : les textes de l’écran de consentement dans les 4 langues, idéalement par une personne au fait des règles sur les données des mineurs, et les 2 textes à lire.

### Lot 23 (2026-10-07)

**Lien unités–mots**
- `src/services/unitWords.ts` calcule les mots d’une série : ceux de ses associations, puis les mots de sa bande de niveau (niveau de l’unité et niveau juste en dessous) présents dans ses textes, formes fléchies comprises.
- 14 unités n’en réutilisaient pas 10 : les unités de grammaire B2 et C1 et `c1-graphics`. Chacune reçoit une association de 5 mots par série, liés à son thème, soit 42 exercices. Les identifiants vont de `<unité>-w1` à `<unité>-w3`.
- **Changement de comportement :** à la fin d’une série, ses mots entrent dans le paquet de l’onglet Mots, au plus 8 à la fois et ceux des associations d’abord. Jusqu’ici, seuls les mots des associations y entraient. Le paquet suit donc le parcours de l’apprenant, au lieu de partir systématiquement du niveau A1.
- Nouveau contrôle : chaque unité réutilise au moins 10 mots de sa bande.

**Recalibrage**
- Il n’existe pas encore de réponses d’apprenants, donc la difficulté réelle des items ne peut pas être estimée. Le recalibrage s’appuie sur des indicateurs de cohérence.
- Aucun item n’est à plus d’un niveau de son unité. La difficulté des TOEIC blancs progresse comme prévu : mini 1–3 < mini 4–6 < tests complets, et la partie 7 est la plus difficile.
- 33 mots ont changé de niveau, sans modifier les quotas :
  - des mots courants surévalués (*department*, *cancel*, *available*, *reservation*…) descendent ;
  - les faux amis *library*, *actually*, *eventually*, *achieve* et *rebook*, classés C1 à cause du piège, redescendent au niveau du mot ;
  - en compensation, des mots plus difficiles montent (*overtime*, *landlord*, *forklift*, *liable*, *non-disclosure agreement*…).
- L’audit des mots trop difficiles pour leur item passe de 71 à 42 signalements. Les signalements restants sont surtout des homonymes (*minutes*, *reception*, *plant*, *fine*) et des mots de contexte qui ne sont pas la cible de la question.
- `a4-l1` (test de niveau) est reclassé de la partie 3 à la partie 4 : c’est un message téléphonique d’une seule personne.

**Relecture croisée automatisée**
- Nouveaux contrôles permanents dans `content:check` :
  - chaque texte d’aide est écrit dans sa langue (arabe seulement dans le texte arabe) ;
  - tutoiement en français et en espagnol ;
  - préfixes `W:` / `M:` dans les conversations et seulement là ;
  - audio sans abréviations difficiles à lire pour la synthèse vocale (`e.g.`, `/`, `&`…) ;
  - objectif du plan : au moins 60 h et 1 000 mots.
- Les phrases d’exemple du vocabulaire doivent maintenant compter de 6 à 14 mots.
- Corrigé :
  - 49 explications arabes ne contenaient que des citations anglaises et des symboles : elles expliquent maintenant en arabe ;
  - 67 phrases d’exemple des mots d’origine étaient trop courtes : elles sont réécrites ;
  - un point de mini-cours espagnol et une explication (`b1-gi-s3-o1`) n’étaient pas traduits.

**Vérifié** :
- typage, `npm test` (58, dont un nouveau test pour `unitWords`), `content:check` (26), `content:stats` (67,5 h ; 1 748 exercices ; 1 000 mots ; 688 items de TOEIC blanc) ;
- dans le navigateur, avec un profil de test fictif : la première série de « Les mots du bureau » parcourue en entier, puis l’ajout de 8 mots au paquet, sans erreur dans la console. (Correction au lot S0 : la suppression de ce profil n’avait pas tenu, car l’application l’a réécrit depuis sa mémoire. Il a été supprimé pour de bon au lot S0, avec un rechargement immédiat.)

Le navigateur intégré a démarré avec un stockage vierge : les données de l’utilisateur n’y étaient pas et n’ont pas été touchées. Pour relancer l’aperçu, `.claude/launch.json` contient désormais la configuration `toeic-web` (`npx expo start --web --port 8081`).

### Lots 19, 20, 21 et 22 (2026-10-06, une seule session à la demande de l’utilisateur)

**Ajouté** : 2 TOEIC blancs complets de 2 heures (`src/data/mock/full-1*.ts` et `full-2*.ts`), soit 388 items inédits expliqués dans les 4 langues. Chaque test suit exactement `FULL_TEST_BLUEPRINT` (194 items, la partie 1 exceptée) :
- partie 2 : 25 questions-réponses ;
- partie 3 : 13 conversations de 3 questions, dont 2 avec un document (tarifs, planning, plan d’étage) ;
- partie 4 : 10 annonces de 3 questions, dont 1 avec un document ;
- partie 5 : 30 phrases ;
- partie 6 : 4 textes de 4 blancs, chacun avec une phrase à insérer ;
- partie 7 : 10 textes simples (29 questions), 2 doubles documents et 3 triples documents (25 questions).

Le niveau monte au fil du test, comme au vrai TOEIC. Les triples documents sont de niveau C1 et restent sous 350 mots. Les fichiers sont découpés par section (écoute / lecture), et le helper `fullTest()` (`src/data/mock/build.ts`) les assemble.

**Corrigé pendant les lots** : 6 items trop proches de leçons existantes ont été remplacés (2 copies exactes, 4 quasi-copies) et une quarantaine d’explications trop courtes ont été allongées. L’annonce `T9` du test 2 était illogique : une intervenante dont l’avion est retardé était avancée dans le programme. Elle est réécrite (l’intervenante doit partir tôt).

**Vérifié** :
- typage, `npm test` (51), `content:check` (21), `content:stats` (65,6 h ; 688 items de TOEIC blanc) ;
- dans le navigateur, le test complet 2 parcouru en entier en espagnol (194 questions) ;
- le rapport final : scores IRT avec une fiabilité de 92 % en écoute et 79 % en lecture, résultats par partie, correction détaillée.

Les données de l’utilisateur ont été restaurées.

**À faire relire** : les 388 items `f1-*` et `f2-*`, en priorité :
- les calculs de partie 7 (`f1-r7-37`, `f1-r7-52`, `f2-r7-21`, `f2-r7-33`) ;
- les questions avec document (`f1-l3-39`, `f1-l4-30`, `f2-l3-36`, `f2-l4-26`).

### Lots 17 et 18 (2026-10-06, une seule session à la demande de l’utilisateur)

**Ajouté** : 6 mini TOEIC blancs de 30 minutes (`src/data/mock/mini-1.ts` à `mini-6.ts`), soit 300 items inédits avec une explication dans les 4 langues. Chaque test suit le gabarit `MINI_TEST_BLUEPRINT` :
- partie 2 : 7 questions-réponses ;
- partie 3 : 3 conversations de 3 questions ;
- partie 4 : 3 annonces (3, 3 et 2 questions) ;
- partie 5 : 8 phrases ;
- partie 6 : 1 texte à 4 blancs, dont une insertion de phrase ;
- partie 7 : 14 questions, sur des textes de 2, 3 et 4 questions puis un double document de 5 questions.

Les niveaux vont de A2 à C1, avec une majorité de B1 et B2. Les tests 4 à 6 sont un peu plus difficiles. Le helper `miniTest()` (`src/data/mock/build.ts`) range les items dans l’ordre officiel des parties.

**Outillage** : nouveau contrôle dans `content:check` (21 contrôles). Il vérifie qu’aucun item de partie 2 ou 5 d’un TOEIC blanc n’est une quasi-copie (≥ 60 % de mots communs) d’une question du test de niveau ou d’une leçon.

**Corrigé pendant le lot** : 19 items trop proches de contenus existants ont été réécrits :
- 5 reprenaient le test de niveau, dont `m2-r5-7` (`a4-g1`) et `m4-l2-2` ;
- 14 reprenaient des leçons.

**Vérifié** :
- typage, `npm test` (51), `content:check` (21), `content:stats` (61,6 h) ;
- dans le navigateur, la liste des 6 mini-tests, puis le mini-test 4 parcouru en entier en français ;
- le rapport final : scores IRT avec intervalles, résultats par partie et correction détaillée ;
- répondre toujours la première option donne 11 / 50, proche du hasard : la position de la bonne réponse est bien répartie.

Les données de l’utilisateur ont été restaurées.

**Limite connue** : dans les parties 3 et 4, chacune des 3 questions rejoue la même conversation. Au vrai TOEIC, l’audio n’est entendu qu’une fois.

**À faire relire** : les 300 items `m1-*` à `m6-*`, en particulier les inférences de partie 7 et les calculs (`m2-r7-13`, `m4-r7-13`, `m6-r7-7`).

### Lots 13, 14, 15 et 16 (2026-10-06, une seule session à la demande de l’utilisateur)

**Ajouté** : 856 mots, pour un total de 1 000. Chaque mot a :
- une traduction en français, en arabe standard moderne et en espagnol ;
- une phrase d’exemple de 6 à 14 mots en contexte professionnel ;
- un niveau, un thème et un emoji.

Répartition par lot :
- **Lot 13** : A1 et A2 (192 mots), avec les 4 nouveaux thèmes `health`, `property`, `legal` et `environment` (type `VocabTheme`, `themeNames`, un fichier par thème).
- **Lot 14** : B1 (207 mots).
- **Lot 15** : B2 (269 mots).
- **Lot 16** : C1 (188 mots), dont des faux amis pour francophones (*eventually*, *actually*, *achieve*, *library*).

Répartition par thème : de 58 (juridique) à 79 (bureau).

**Outillage** : ajout de 2 contrôles à `content:check`, qui en compte maintenant 20 :
- les quotas du plan (A1 100 · A2 150 · B1 250 · B2 300 · C1 200, 14 thèmes de 50 à 90 mots) ;
- l’absence de doublon anglais.

Le script d’insertion vérifie aussi l’unicité des identifiants et la longueur des exemples.

**Vérifié** : typage, `npm test` (50), `content:check` (20), `content:stats` (1 000 mots, 58,6 h), l’écran Mots en arabe (14 thèmes, filtre Santé : 66 mots) et en espagnol. Les données de l’utilisateur ont été restaurées.

**Reste à faire (lot 23)** :
- relier explicitement chaque unité à au moins 10 mots de son niveau, comme le demande le plan ;
- allonger les exemples des 144 mots d’origine, dont certains font moins de 6 mots.

**Suggestion** : l’écran Mots présente les nouveaux mots du niveau A1 vers le C1. Un apprenant classé B2 devra donc passer d’abord par 500 mots plus faciles. Il serait utile de commencer au niveau estimé de l’apprenant.

**À faire relire** : les 856 nouvelles entrées, en particulier les traductions arabes et espagnoles des termes juridiques et financiers C1.

### Lots 11 et 12 (2026-10-06, une seule session à la demande de l’utilisateur)

**Lot 11** : séries 2 et 3 des 5 unités C1 (`c1-advanced-grammar`, `c1-collocations`, `c1-talks`, `c1-inference`, `c1-graphics`), soit 100 exercices. Nouveaux documents : 4 textes de partie 7 de niveau soutenu et 8 documents pour les écoutes avec graphique.

**Lot 12** : 7 unités, soit 210 exercices :
- `c1-inversion` (never before, hardly … when, phrases clivées) ;
- `c1-subjunctive-agreement` (recommend that…, the number of, each, as well as) ;
- `c1-conditionals` (conditionnels mixtes, inversés, but for, otherwise) ;
- `c1-participles` (-ing, -ed, having done, relatives réduites) ;
- `c1-phrasal-verbs` (verbes à particule, avec 3 textes de partie 6) ;
- `c1-indirect-responses` (parties 2 et 3 : réponses implicites, ironie) ;
- `c1-triple-passages` (6 ensembles de 3 documents).

Les 60 unités prévues sont en place, chacune avec 3 séries.

**Corrigé** : `c1-ag-q4` (« Neither the director nor the assistants ___ aware… ») était presque identique à une question du test de niveau ; il est réécrit.

**Vérifié** : typage, `npm test` (48), `content:check` (18 ; il a repéré 2 explications trop courtes, que j’ai corrigées), le premier triple document en français et `c1-inversion` en arabe. Ces tests ont été faits sur une copie des données, restaurées ensuite. Aucun lint n’est configuré dans le projet (`npx expo lint` installerait ESLint).

**À faire relire** : les 310 nouveaux items (`c1-*-s2-*`, `c1-*-s3-*`, `c1-iv-*`, `c1-sa-*`, `c1-cd-*`, `c1-pt-*`, `c1-pv-*`, `c1-ir-*`, `c1-tp-*`) et les 7 mini-cours. Les questions d’inférence des triples documents méritent une relecture particulière.

### Lots 8, 9 et 10 (2026-10-06, une seule session à la demande de l’utilisateur)

**Lot 8** : séries 2 et 3 des 6 unités B2 (`b2-perfect-passive`, `b2-connectors`, `b2-part2-traps`, `b2-multi-passages`, `b2-finance-marketing`, `b2-part6`), soit 120 exercices. Nouveaux documents : 4 paires de doubles documents (partie 7) et 4 textes de partie 6 à 4 blancs, dont une insertion de phrase.

**Lot 9** : `b2-conditionals`, `b2-reported-speech`, `b2-past-modals`, soit 3 unités et 90 exercices.

**Lot 10** : `b2-speaker-intent` (questions « Why does the speaker say… ? » et 12 écoutes avec document), `b2-contracts-logistics` (vocabulaire des achats et des contrats, avec 3 associations reliées aux mots existants) et `b2-news-articles` (6 articles de presse, avec idée principale, détails, NOT et insertion de phrase), soit 3 unités et 90 exercices.

Le niveau B2 compte maintenant 12 unités : la grammaire, puis l’écoute, la lecture et le vocabulaire.

**Corrigé** : `b2-fm-q5` était presque identique à une question du test de niveau (« All visitors must ___ with the safety rules… ») ; il est réécrit.

**Vérifié** : typage, `npm test` (48), `content:check` (18), l’ouverture de `b2-conditionals` en français, l’insertion de phrase de `b2-news-articles` en espagnol et une écoute avec planning de `b2-speaker-intent` en arabe (RTL). Ces tests ont été faits sur une copie des données, restaurées ensuite.

**À faire relire** : les 300 nouveaux items (`b2-*-s2-*`, `b2-*-s3-*`, `b2-cd-*`, `b2-rs-*`, `b2-pm-*`, `b2-si-*`, `b2-cl-*`, `b2-na-*`) et les 6 mini-cours. Comme pour les lots 5 à 7, faire 3 lots en une session rend la relecture humaine d’autant plus nécessaire.

### Lots 5, 6 et 7 (2026-10-06, une seule session à la demande de l’utilisateur)

**Lot 5** : séries 2 et 3 des 6 unités B1 (`b1-future`, `b1-word-forms`, `b1-conversations`, `b1-announcements`, `b1-text-completion`, `b1-hr`), soit 120 exercices. Les textes à compléter ont 6 nouveaux documents de partie 6, de 3 blancs chacun.

**Lot 6** : `b1-present-perfect`, `b1-gerund-infinitive`, `b1-relatives`, soit 3 unités et 90 exercices.

**Lot 7** : `b1-connectors`, `b1-customer-service`, `b1-reading-notices`, soit 3 unités et 90 exercices, dont 7 nouveaux documents de partie 7.

Le niveau B1 compte maintenant 12 unités.

**Vérifié** : typage, `npm test` (48), `content:check` (18 ; il a repéré 5 explications anglaises trop courtes, que j'ai corrigées), la bande B1 complète, la série 2 de `b1-text-completion` en français et `b1-customer-service` en espagnol (sur une copie des données, restaurées ensuite).

**À faire relire** : les 300 nouveaux items (`b1-*-s2-*`, `b1-*-s3-*`, `b1-pp-*`, `b1-gi-*`, `b1-rl-*`, `b1-cn-*`, `b1-cs-*`, `b1-rn-*`) et les 6 mini-cours. Faire 3 lots en une session est contraire à la règle « un lot par session » : une relecture humaine de ces lots est d’autant plus recommandée.

### Lot 4 (2026-10-06)

**Ajouté** : 7 unités A2, chacune avec un mini-cours et 3 séries de 10 exercices, soit 210 exercices en fr, ar, en et es :
- `a2-modals` (can, must, should, have to) ;
- `a2-comparatives` (comparatifs, superlatifs, as … as) ;
- `a2-quantifiers` (some, any, much, many, a few, a little) ;
- `a2-plans` (going to, présent continu à valeur de futur, will) ;
- `a2-schedules` (plannings et horaires, partie 7 et partie 4) ;
- `a2-office-life` (vocabulaire du bureau, partie 5 et associations) ;
- `a2-announcements` (annonces publiques, partie 4).

Le niveau A2 compte maintenant 12 unités : la grammaire d'abord, puis les situations.

**Vérifié** : typage, `npm test` (48), `content:check` (18 ; il a repéré 3 explications anglaises trop courtes, que j'ai corrigées), la bande A2 complète, `a2-modals` en français et `a2-announcements` en arabe (sur une copie des données, restaurées ensuite).

**À faire relire** : les 210 nouveaux items (`a2-md-*`, `a2-cp-*`, `a2-qt-*`, `a2-pl-*`, `a2-sc-*`, `a2-of-*`, `a2-an-*`) et leurs 7 mini-cours.

### Lot 3 (2026-10-06)

**Ajouté** : séries 2 et 3, de 10 exercices chacune, pour les 5 unités A2 (`a2-tenses`, `a2-travel`, `a2-prepositions`, `a2-phone`, `a2-emails`), soit 100 exercices en fr, ar, en et es. Répartition : R5 50 · R7 14 · L2 12 · L3 9 · L4 6 · ordre de mots 7 · associations 2.

**Vérifié** : typage, `npm test` (48), `content:check` (18), la série 2 de `a2-emails` en français et en espagnol (sur une copie des données, restaurées ensuite).

**À faire relire** : les 100 nouveaux items (`a2-*-s2-*` et `a2-*-s3-*`).

### Lot 2 (2026-10-06)

**Ajouté** : 7 unités A1, chacune avec un mini-cours et 3 séries de 10 exercices, soit 210 exercices en fr, ar, en et es :
- `a1-present-simple` (habitudes, négations, questions) ;
- `a1-there-is` (there is / there are, prépositions de lieu) ;
- `a1-pronouns` (pronoms compléments, démonstratifs, possessifs) ;
- `a1-requests` (impératif, can / could, let’s) ;
- `a1-shopping` (prix, achats, restaurant) ;
- `a1-messages` (SMS, notes, formulaires, messages vocaux) ;
- `a1-conversations` (partie 3).

Le niveau A1 compte maintenant 12 unités, dans un ordre progressif.

**Vérifié** : typage, `npm test` (48), `content:check` (18), le parcours A1 complet, une conversation corrigée en français et une question du présent simple en arabe. Les données de l'utilisateur ont été restaurées après les tests.

**À faire relire** : les 210 nouveaux items (`a1-ps-*`, `a1-th-*`, `a1-pr-*`, `a1-rq-*`, `a1-sh-*`, `a1-ms-*`, `a1-cv-*`) et leurs 7 mini-cours.

### Lot 1 (2026-10-06)

**Ajouté** : séries 2 et 3, de 10 exercices chacune, pour les 5 unités A1 (`a1-office`, `a1-be-have`, `a1-time`, `a1-questions`, `a1-signs`), soit 100 exercices expliqués en fr, ar, en et es. Répartition : R5 42 · L2 26 · R7 16 · L4 5 · L3 1 · ordre de mots 6 · associations 4.

**Vérifié** : typage, `npm test` (48), `content:check` (18), la série 2 jouée en entier en français (bilan « non validée » et envoi en révision) et la série 3 ouverte en arabe.

**À faire relire** : les 100 nouveaux items (identifiants `a1-*-s2-*` et `a1-*-s3-*`).

**Remarque** : la série 1 des unités A1 compte de 6 à 8 exercices, les séries 2 et 3 en comptent 10. À compléter si l'on veut des séries homogènes.

### Lot 0 (2026-10-06)

**Ajouté**
- **Espagnol :** quatrième langue d'aide. Il couvre l'interface, toutes les explications, les mini-cours et le vocabulaire.
- **Séries d'exercices :**
  - `Unit.sets` : rejouer une unité sert la série suivante ;
  - une unité est validée avec au moins 70 % de bonnes réponses au premier essai ;
  - les résultats enregistrés avant ce lot restent validés.
- **Révision espacée :** chaque exercice raté au premier essai revient après 1, 3, 7, 14 puis 30 jours. L'accueil affiche une carte « Révision du jour ».
- **TOEIC blancs :**
  - un onglet « Examens », un test chronométré avec pause et sans correction pendant le test ;
  - un rapport final : scores IRT d'écoute et de lecture avec leur intervalle de confiance, résultats par partie, correction détaillée ;
  - un test « démo » de 20 items, tirés des leçons (jamais du test de niveau).
- **Organisation :**
  - `src/data/curriculum/<niveau>/<unité>.ts` ;
  - `src/data/vocab/<thème>.ts` ;
  - `src/data/mock/`.
- **Outillage :**
  - `npm run content:stats` (modèle de temps dans `src/data/contentStats.ts`) ;
  - `npm run content:check` (contrôles dans `src/data/content.test.ts`).

**Corrigé**
- **Copies du test de niveau :** 28 exercices des leçons étaient identiques ou presque à des questions du test. Ils sont remplacés par des items originaux, ce qui évite qu'un apprenant qui refait le test ait déjà vu les questions.
- **Format de la partie 2 :** les items passent à 3 options, comme au vrai TOEIC.

**À faire relire par un humain**
- Les explications en espagnol (797 textes), écrites à partir de l'anglais et du français.
- Les 28 items de remplacement : `b1-f-q1`, `b1-c-l1`, `b1-c-l2`, `b1-a-l1`, `b1-a-l2`, `b1-hr-q1`, `b1-hr-r3`, `b2-pp-q6`, `b2-cn-q5`, `b2-t-l1`, `b2-mp-r4`, `b2-mp-r5`, `b2-fm-q1`, `b2-fm-l1`, `b2-p6-q1`, `c1-ag-q1`, `c1-ag-q2`, `c1-ag-q3`, `c1-ag-q7`, `c1-co-q1`, `c1-co-q2`, `c1-tk-l1`, `c1-tk-l2`, `c1-tk-l4`, `c1-tk-l5`, `c1-in-r1`, `c1-in-r2`, `c1-in-r3`.

**Limites connues**
- Dans les TOEIC blancs, l'audio peut être réécouté, ce qui n'est pas possible au vrai TOEIC. À restreindre quand l'audio enregistré sera disponible.
- Le test démo ne compte pas dans les heures : ses items sont déjà comptés dans les leçons.
