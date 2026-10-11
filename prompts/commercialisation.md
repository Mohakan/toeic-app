# Stratégie de commercialisation de Toki Quest

Version du 2026-10-08. Les décisions marquées **(décidé)** ont été prises par l’équipe ; les autres sont des recommandations à valider.

## 1. Le modèle : un essai complet mais limité, puis un plan complet

L’objectif de l’essai est de faire vivre **toute l’expérience** : se positionner, apprendre, pratiquer l’oral, passer un examen blanc. Il en montre la valeur, mais ne suffit pas pour préparer l’examen. Le plan complet ouvre tout, en un seul paiement.

| | Essai gratuit | Plan complet |
| --- | --- | --- |
| Téléchargement, inscription | ✅ | ✅ |
| Test de niveau adaptatif | ✅ (aussi à refaire) | ✅ |
| Parcours Listening & Reading | **4 unités**, celles qui suivent le niveau mesuré | Les 60 unités |
| Oral et prononciation | **1 lot** au niveau de l’apprenant : 2 textes à lire, 2 photos, 1 série de questions, 1 document, 1 opinion | Tout : 60 textes, 22 photos, 30 séries, 30 documents, 40 opinions |
| Simulations orales | — | Les 4 simulations des 11 tâches |
| TOEIC blancs | Le **TOEIC blanc express** (20 questions) | + 6 mini et 2 complets |
| Vocabulaire, révision espacée, progression, Toki | ✅ pour ce que l’apprenant a débloqué | ✅ |
| Prix | 0 | **9 $** à l’international, **20 DT** en Tunisie, paiement unique **(décidé)** |

**Inscrits Sabil** : ils ont le plan complet gratuitement, sans payer **(décidé)**. Leurs comptes sont transmis par Sabil à notre serveur (voir § 5). Sabil n’est **pas mentionné** sur la page d’accueil ni dans les écrans d’offre.

### Règles de l’essai

- Les 4 unités d’essai sont **fixées au premier test de niveau**. Un nouveau test ne les change pas, sinon refaire le test ouvrirait sans fin de nouvelles unités. Sans test, ce sont les 4 premières unités A1.
- Le lot oral d’essai est fixé de la même façon, au niveau mesuré (de A1 à C1).
- Ce qui est déjà commencé ou réussi reste accessible. Les révisions espacées des questions manquées restent gratuites : elles concernent du contenu déjà débloqué.
- Un contenu verrouillé reste **visible**, avec un cadenas : l’apprenant voit ce qu’il gagnerait. Le toucher ouvre l’écran d’offre.

**Pourquoi un paiement unique** plutôt qu’un abonnement : l’apprenant prépare un examen précis, en quelques semaines ou mois. Un prix unique et bas est plus facile à accepter, surtout en Tunisie, et ne crée pas de frustration après l’examen. Un abonnement pourra venir plus tard pour des contenus renouvelés.

## 2. Prix et paiement (décidé : stores + paiement web en Tunisie)

| Canal | Où | Prix | Notes |
| --- | --- | --- | --- |
| **App Store** (achat intégré non consommable) | Dans l’app iOS | 9 $ ou le palier le plus proche ; prix local selon le pays | Commission Apple de 15 % (programme petites entreprises) |
| **Google Play** (produit intégré) | Dans l’app Android | 9 $ ; prix local, au plus près de 20 DT pour la Tunisie si Google le permet | Commission de 15 % |
| **Paiement web tunisien** (Konnect, choisi au lot M4 ; Flouci reste possible derrière la même interface) | Sur le site, pas dans l’app | **20 DT** | Carte bancaire tunisienne, e-Dinar ; débloque le compte, sans commission de store |

**Règles des stores, à respecter impérativement**
- Dans l’app, le seul moyen de payer est l’**achat intégré** du store (Apple 3.1.1, Google Payments policy).
- L’app ne contient **aucun lien, bouton ni texte** qui renvoie vers le paiement web, ni de prix web comparatif (anti-contournement).
- Un compte débloqué ailleurs (paiement web, Sabil) peut être utilisé dans l’app : c’est autorisé pour un service multiplateforme, si l’achat intégré est aussi proposé dans l’app. À **revérifier** avec les règles en vigueur au moment de la soumission.
- « **Restaurer mes achats** » doit être présent (exigence Apple).

**Affichage du prix dans l’app** : c’est le prix renvoyé par le store, qui fait foi. En attendant l’intégration, l’app affiche 20 DT si la région de l’appareil est la Tunisie, et 9 $ sinon.

## 3. Parcours de l’apprenant

1. **Page d’accueil** : Toki, la promesse, les deux offres (essai et plan complet), un bouton « Commencer gratuitement ».
2. **Inscription** (lot M3, fait) : e-mail, mot de passe et année de naissance. Le compte est proposé avant le test de niveau, avec « Plus tard » : il sert à retrouver une offre sur un autre appareil et à reconnaître un inscrit Sabil. Il n’est pas imposé pour payer dans l’app, car Apple refuse qu’un compte soit exigé sans fonction qui en dépende (règle 5.1.1) ; le lot M4 reliera l’achat au compte quand l’apprenant en a un.
3. **Test de niveau**, puis le parcours, avec les 4 unités d’essai mises en avant.
4. **Moments d’offre**, sans harcèlement : en touchant un contenu verrouillé, à la fin de la 4ᵉ unité d’essai, et après le TOEIC blanc express (« Ton score estimé : … Passe au plan complet pour t’entraîner sur 8 TOEIC blancs »).
5. **Paiement**, puis déblocage immédiat de tout le contenu.

## 4. Architecture (décidé : serveur maison)

```
App Expo ──(HTTPS, jeton)──> API Node (serveur maison) ──> base PostgreSQL
   │  achats intégrés                ▲   ▲
   │  (StoreKit / Play Billing)      │   └── Webhook paiement web (Konnect ou Flouci)
   └──> reçu ──> /purchases/verify ──┘
                                     └── API partenaire Sabil (appelée par Sabil)
```

- **Côté app** : un module de droits d’accès (`src/services/access.ts`, livré au lot M1) décide de ce qui est ouvert, à partir de l’offre de l’apprenant (`free` ou `full`) et de son contenu d’essai. Il fonctionne déjà sans serveur. Au lot M3, l’offre vient du serveur et l’app la garde en cache pour l’usage hors ligne.
- **Côté serveur** (lots M3 à M5) : Node.js et TypeScript (Fastify recommandé), PostgreSQL, hébergement en Europe ou en Tunisie.
  - Tables : `users`, `entitlements` (source `store_ios`, `store_android`, `web_tn`, `sabil` ; dates ; état), `purchases`, `sabil_accounts`.
  - **La progression reste sur l’appareil** au départ. La synchroniser est une option ultérieure (lot M7) ; elle demanderait un consentement explicite, car des élèves peuvent être mineurs.

## 5. API partenaire pour Sabil (décidé : Sabil appelle notre API)

À chaque inscription ou désinscription, Sabil appelle notre serveur. L’élève est reconnu par son **e-mail**, et par son identifiant Sabil s’il est fourni. S’il crée un compte Toki Quest avec le même e-mail, avant ou après l’appel, il obtient le plan complet.

- `PUT /partner/sabil/accounts/{sabilId}` : crée ou met à jour un inscrit. Corps : `{ "email": "...", "firstName": "...", "status": "active", "validUntil": "2027-06-30" }`.
- `DELETE /partner/sabil/accounts/{sabilId}` : fin de l’inscription. L’accès complet se termine à la date convenue (`validUntil`, ou tout de suite).
- `POST /partner/sabil/accounts:batch` : envoi groupé, jusqu’à 500 comptes, pour la reprise initiale.
- **Sécurité** : clé d’API propre à Sabil (en-tête `Authorization: Bearer`), signature HMAC-SHA256 du corps (`X-Signature`) et horodatage (`X-Timestamp`, ± 5 min) contre le rejeu, HTTPS seulement, journal des appels, limite de débit. Opérations idempotentes, donc les appels peuvent être répétés sans risque.
- **Données minimales** : e-mail, prénom facultatif, statut et dates. Aucune autre donnée de Sabil n’est stockée. Un contrat de traitement des données entre Sabil et l’éditeur est à prévoir.

La spécification OpenAPI complète sera livrée au lot M5, avec un environnement de test pour Sabil.

## 6. Données personnelles

- Le passage à des comptes change la promesse actuelle (« tout reste sur ton appareil ») : l’e-mail et les droits d’accès seront sur le serveur. Il faut mettre à jour l’écran d’accueil, la politique de confidentialité et les fiches des stores.
- **Tunisie** : loi organique n° 2004-63 sur la protection des données personnelles et déclaration à l’INPDP. **Europe** : RGPD pour les utilisateurs de l’UE.
- **Mineurs** : demander l’âge ; comptes dès 13 ans (décidé au lot M6, pour la règle américaine COPPA et les règles « Familles » des stores), accord d’un parent entre 13 et 15 ans. Avant 13 ans, l’app s’utilise sans compte. Ne rien collecter d’inutile.
- L’audio de l’oral n’est **jamais** envoyé au serveur, ce qui ne change pas.

## 7. Page d’accueil (lot M2)

- **Toki au centre** : il accueille, il porte la promesse « Joue. Progresse. Réussis. », et les écrans d’offre lui donnent la parole.
- Deux cartes d’offre : **Essai gratuit** (ce qu’il contient) et **Plan complet** (tout, en un seul paiement), avec le prix local.
- Preuves concrètes : 60 unités, 1 000 mots, 8 TOEIC blancs, l’oral avec reconnaissance vocale, un test de niveau adaptatif.
- Un seul appel à l’action : « Commencer gratuitement ».
- **Rien sur Sabil.**
- Plus tard, un site web reprendra la même page, avec le paiement tunisien, ce qui ne peut pas se faire dans l’app.

## 8. Indicateurs à suivre

- **Activation** : part des installations qui finissent le test de niveau, puis la première unité.
- **Conversion** : part des comptes gratuits qui achètent, par pays et par canal. Au début, viser 3 à 5 %.
- **Moment de l’achat** : après quelle unité, ou après le TOEIC blanc express.
- **Inscrits Sabil actifs**, et rétention à 7 et 30 jours.
- **Mesure respectueuse de la vie privée** : des compteurs agrégés côté serveur, sans traceur publicitaire.

## 9. Lots de mise en œuvre

| Lot | Contenu | Critère de fin |
| --- | --- | --- |
| **M0** | Ce document | Décisions validées |
| **M1** | Droits d’accès dans l’app : contenu d’essai fixé, cadenas, écran d’offre, réglage de test réservé au développement | Tests verts ; essai et plan complet vérifiés dans l’app |
| **M2** | Page d’accueil retravaillée : Toki, offres, prix local | Vérifiée en français et en arabe |
| **M3** ✅ | Serveur maison : comptes (inscription, connexion, mot de passe oublié), droits d’accès, app connectée, cache hors ligne | API testée ; app connectée en développement — fait le 2026-10-08, voir [server/README.md](../server/README.md) |
| **M4** (code fait) | Paiements : achats intégrés iOS et Android (vérification des reçus côté serveur, restauration), paiement web tunisien et son webhook | Achat de test réussi sur les deux stores et en web — **reste à faire** : produits dans les stores, compte Konnect, achats de test réels |
| **M5** (code fait) | API Sabil : spécification OpenAPI, endpoints sécurisés, environnement de test, documentation pour Sabil | Appels de test de Sabil validés — **reste à faire** : héberger l’environnement de test et remettre ses clés à Sabil ([server/docs/sabil.md](../server/docs/sabil.md)) |
| **M6** (fait, sauf décisions et données de l’éditeur) | Mentions légales, politique de confidentialité, fiches des stores, conformité des écrans d’offre aux règles des stores | Prêt pour la soumission — voir [store/conformite.md](../store/conformite.md) : nom face à la marque TOEIC®, coordonnées de l’éditeur, relecture juridique, captures |
| **M7** (option) | Synchronisation de la progression entre appareils, avec consentement | — |

## 10. Risques et points ouverts

- **Refus en store** si un écran mentionne le paiement web : à vérifier à chaque version (lot M6).
- **Prix local en Tunisie sur les stores** : les paliers d’Apple et de Google ne tombent pas forcément sur 20 DT. Le paiement web garantit ce prix.
- **Partage de compte** : limiter le nombre d’appareils actifs par compte (par exemple 3) au lot M3.
- **Hors ligne** : le droit d’accès est mis en cache et revérifié à la reconnexion, avec une tolérance (par exemple 30 jours).
- **Sabil** : il faudra confirmer avec eux le format de l’e-mail, la durée d’accès après la fin d’une inscription, et leur capacité à signer les appels.
