# Conformité avant soumission (lot M6)

État au 2026-10-08. ✅ fait et vérifié · ⚠️ à faire par l’équipe · ❗ risque à trancher.

## 1. Décisions à prendre

| # | Point | État | Détail |
| --- | --- | --- | --- |
| 1 | **Marque « TOEIC » dans le nom de l’app** | ✅ | L’app s’appelle **Toki Quest** (décidé le 2026-10-08) : la marque TOEIC® d’ETS n’est plus dans le nom, le sous-titre ni le titre Google Play. Elle reste dans les descriptions, de façon descriptive (« préparation au TOEIC® »), avec la mention « application indépendante, ni affiliée à ETS ni approuvée par ETS ». Identifiants : `app.tokiquest`, produit `toki_quest_full`. |
| 2 | **Compte développeur et ventes depuis la Tunisie** | ❗ | Vérifier que le compte Apple Developer et le compte marchand Google Play peuvent recevoir des paiements avec une entité et une banque tunisiennes. Sinon, publier par une entité dans un pays pris en charge. Sans cela, l’achat intégré est impossible. |
| 3 | **Prix sur les stores** | ⚠️ | Choisir le palier le plus proche de 9 $ (et de 20 DT pour la Tunisie, s’il existe). L’app affiche le prix du store dès qu’il est connu. |

## 2. Règles des stores

| # | Exigence | État | Où |
| --- | --- | --- | --- |
| 4 | Dans l’app, le seul moyen de payer est l’achat intégré (Apple 3.1.1, Google Payments) | ✅ | `purchases.native.ts` ; aucun lien vers le paiement web (test `legal.test.ts` sur les conditions affichées dans l’app) |
| 5 | Bouton « Restaurer mes achats » | ✅ | Écran d’offre |
| 6 | Prix affiché égal à celui du store | ✅ | Écran d’offre et page d’accueil (prix du store, sinon l’estimation locale) |
| 7 | Pas d’abonnement caché ; paiement unique annoncé | ✅ | Écran d’offre (« Paiement unique… »), fiches |
| 8 | Liens vers les conditions et la confidentialité au moment de l’achat et de l’inscription | ✅ | Écran d’offre, écran de compte, accueil, Profil |
| 9 | Compte non exigé pour acheter (Apple 5.1.1) | ✅ | Achat possible sans compte, rattaché ensuite |
| 10 | Suppression du compte dans l’app (Apple 5.1.1 v) | ✅ | Profil > Supprimer mon compte |
| 11 | Suppression du compte sur le web (Google Play) | ✅ | `/account/delete` (serveur) |
| 12 | « Sign in with Apple » non requis | ✅ | Pas de connexion par un service tiers (Google, Facebook…) |
| 13 | Le partenaire n’est nommé ni dans l’app, ni sur la page d’accueil, ni dans les fiches | ✅ | Test `legal.test.ts` ; fiches relues |
| 14 | Réglage de développement « Activer le plan complet » absent des versions publiées | ✅ | Affiché seulement si `__DEV__` ; à vérifier sur la première version de production |
| 15 | Public : 13 ans et plus, hors programme « Familles » / catégorie Enfants | ✅ | Comptes dès 13 ans (année de naissance : 14 ans par l’année) ; accord parental entre 13 et 15 ans |
| 16 | Mentions de marque : « TOEIC® », application indépendante, non affiliée à ETS | ✅ | Profil, mentions légales, conditions, fiches |
| 17 | Nom, sous-titre et mots-clés sans marque d’autrui (Apple 2.3.7, 5.2.1) | ✅ | `app-store.md`, `google-play.md` |
| 18 | Contenu complet, sans texte de remplissage (Apple 2.1, 2.3) | ✅ | Éditeur complet dans `src/data/legal/publisher.ts` : EliteBox, SUARL au capital de 5 000 DT, Sfax ; directeur de la publication Zoubeir KANOUN ; contact support@elitebox-consulting.com ; hébergeur et e-mails Contabo GmbH (Munich). La déclaration INPDP est indiquée « en cours » |

## 3. Données personnelles

| # | Exigence | État | Où |
| --- | --- | --- | --- |
| 19 | Politique de confidentialité publique, fidèle au fonctionnement réel | ✅ | `src/data/legal/` (fr, ar, en), publiée sur `/legal/privacy` |
| 20 | Durées de conservation réellement appliquées | ✅ | `server/src/maintenance.ts` (comptes inactifs 3 ans, sessions, codes, journal partenaire) |
| 21 | Journaux techniques limités à 30 jours | ⚠️ | À régler chez l’hébergeur (le serveur écrit ses journaux sur la sortie standard) |
| 22 | Étiquettes « App Privacy » et « Data safety » cohérentes avec la politique | ✅ | `app-store.md`, `google-play.md`, `ios.privacyManifests` |
| 23 | Manifeste de confidentialité iOS (API à justifier) | ✅ | `app.json` (reprend les raisons déclarées par React Native, Expo et AsyncStorage) |
| 24 | Textes de permission traduits | ✅ | `locales/fr.json`, `ar.json`, `en.json`, `es.json` |
| 25 | Déclaration à l’INPDP (Tunisie, loi 2004-63) | ⚠️ | En cours : reporter le numéro dans `publisher.ts` (champ `inpdpNumber`), puis `npm run legal:export`. À la déclaration, signaler l’hébergement en Allemagne (transfert hors de Tunisie, autorisation éventuelle) et les comptes d’élèves de 13 à 15 ans |
| 26 | Utilisateurs de l’Union européenne (RGPD) | ⚠️ | Si l’app est proposée dans l’UE : désigner un représentant dans l’UE (article 27) et vérifier les transferts selon l’hébergeur |
| 27 | Contrat de traitement des données avec le partenaire | ⚠️ | Voir `server/docs/sabil.md` |
| 28 | Relecture juridique des conditions (rétractation, loi tunisienne n° 2000-83, droit applicable) | ⚠️ | Les textes signalent les passages à valider |

## 4. Technique et contenus de la fiche

| # | Exigence | État | Où |
| --- | --- | --- | --- |
| 29 | Identifiants de l’app | ⚠️ | `app.tokiquest` pour iOS et Android, à confirmer (définitif après la première publication) |
| 30 | Chiffrement : exemption déclarée | ✅ | `ios.config.usesNonExemptEncryption: false` (HTTPS uniquement) |
| 31 | Autorisations Android réduites au nécessaire | ✅ | `android.blockedPermissions` |
| 32 | Icône sans transparence, aux bonnes tailles | ✅ provisoire | `npm run icons` (Toki en SVG) ; à remplacer par l’illustration finale |
| 33 | Captures d’écran, image de présentation Google Play | ⚠️ | Voir les fiches |
| 34 | iPad | ⚠️ | `supportsTablet: true` impose des captures iPad et une vérification de la mise en page ; sinon passer à `false` |
| 35 | Compte de démonstration pour la relecture | ⚠️ | Créer un compte sur le serveur de production, `npm run grant -- <e-mail>`, et le renseigner dans les deux consoles |
| 36 | Version de développement et essais sur de vrais appareils | ⚠️ | `eas init`, puis `eas build --profile development` (`eas.json` prêt, `expo-dev-client` installé) |
| 37 | Serveur en ligne (HTTPS, sauvegardes, e-mails) | ⚠️ | `server/README.md` |
| 38 | Achats de test (bac à sable Apple, piste de test Google, Konnect en bac à sable) | ⚠️ | Voir le lot M4 |
| 39 | Relecture du contenu pédagogique par des enseignants | ⚠️ | `content/PROGRESS.md`, section « À relire » |

## 5. Commandes de contrôle

```bash
npx tsc --noEmit
npm test                 # dont les textes juridiques (même structure en 3 langues, partenaire jamais nommé)
npm run store:check      # longueurs des fiches
npm run legal:export     # régénère les pages /legal/ du serveur après une modification
npx expo-doctor
```
