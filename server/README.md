# Serveur Toki Quest

API des comptes, des droits d’accès (lot M3), des paiements (lot M4) et du partenaire Sabil (lot M5) de [la stratégie](../prompts/commercialisation.md). Node.js 22, TypeScript, Fastify 5, PostgreSQL.

La progression reste sur l’appareil de l’apprenant. Le serveur garde seulement l’e-mail, le mot de passe haché (scrypt), l’année de naissance, la date de l’accord parental (moins de 15 ans), la langue des e-mails et les droits d’accès.

## Lancer en développement

```bash
cd server
npm install
npm run dev        # http://127.0.0.1:4000, base PGlite dans .data/pglite
npm test           # 45 tests : API complète sur une base PGlite en mémoire, stores et Konnect simulés
npm run typecheck
```

Sans `SMTP_URL`, les e-mails (codes de mot de passe) sont écrits dans le journal du serveur.

Côté app, `EXPO_PUBLIC_API_URL` dans `.env.local` à la racine indique l’adresse du serveur (voir `.env.example`). Sur un téléphone, mettre l’adresse de l’ordinateur sur le réseau local, et lancer le serveur avec `HOST=0.0.0.0`.

**PGlite** (PostgreSQL compilé en WebAssembly) n’accepte qu’un processus à la fois : arrêter le serveur avant `npm run grant`.

Pour essayer avec un vrai PostgreSQL : `docker compose up -d`, puis `TOEIC_DATABASE_URL=postgres://toeic:toeic@localhost:5432/toeic npm run dev`. Le nom `TOEIC_DATABASE_URL` est voulu : une variable `DATABASE_URL` déjà présente sur la machine, pour un autre projet, est ignorée.

## Configuration

Voir [.env.example](.env.example). En production (`NODE_ENV=production`), `TOEIC_DATABASE_URL` et `SMTP_URL` sont obligatoires ; le serveur refuse de démarrer sans eux. `CORS_ORIGINS` liste les origines web autorisées ; `TRUST_PROXY=1` derrière un proxy inverse.

Image Docker : `docker build -t toeic-quest-server .` (port 4000).

## API

Toutes les réponses d’erreur ont la forme `{ "error": "<code>" }`. Authentification : `Authorization: Bearer <jeton>`.

| Méthode et chemin | Corps | Réponse |
| --- | --- | --- |
| `GET /health` | — | `{ ok: true }` |
| `POST /auth/signup` | `email`, `password` (8 à 128), `birthYear`, `parentalConsent` (obligatoire à `true` avant 15 ans), `lang`, `device` | 201 `{ token, user, plan }` ; 409 `email_taken` ; 400 `invalid_email`, `invalid_birth_year`, `parental_consent_required` |
| `POST /auth/login` | `email`, `password`, `device` | `{ token, user, plan }` ; 401 `invalid_credentials` (identique pour un e-mail inconnu) |
| `POST /auth/logout` | — | 204, termine la session de cet appareil |
| `POST /auth/password/forgot` | `email` | 204 dans tous les cas ; envoie un code à 6 chiffres valable 30 min si le compte existe |
| `POST /auth/password/reset` | `email`, `code`, `password`, `device` | `{ token, user, plan }` ; déconnecte tous les autres appareils ; 400 `invalid_code` (5 essais par code) |
| `GET /me` | — | `{ user: { email, birthYear, lang, devices }, plan }` |
| `PATCH /me` | `lang` | 204 |
| `DELETE /me` | `password` | 204, supprime le compte, ses sessions et ses droits |

| `POST /purchases/apple` | `signedTransaction` (JWS StoreKit 2), jeton facultatif | `{ status, plan }` ; 400 `invalid_receipt`, `wrong_product` ; 409 `purchase_linked_elsewhere` ; 503 `store_unavailable` |
| `POST /purchases/google` | `productId`, `purchaseToken`, jeton facultatif | idem |
| `POST /webhooks/apple` | `signedPayload` (App Store Server Notifications V2) | 200 ; remboursement et révocation ferment le plan |
| `POST /webhooks/google` | message Pub/Sub (notifications en temps réel), authentifié par OIDC | 204 ; achat annulé (remboursé) |
| `GET /pay`, `POST /web/checkout`, `GET /webhooks/konnect`, `GET /pay/done` | page de paiement web (Tunisie) | voir plus bas |
| `PUT`, `GET`, `DELETE /partner/sabil/accounts/{sabilId}`, `POST /partner/sabil/accounts:batch` | API partenaire signée | voir [docs/sabil.md](docs/sabil.md) |

`plan` : `{ tier: 'free' | 'full', source, since, validUntil }`. Sources : `store_ios`, `store_android`, `web_tn`, `sabil` (reconnu par l’e-mail), `grant` (attribution manuelle).

## Paiements (lot M4)

**Achats intégrés** (produit non consommable `toki_quest_full`, à créer dans App Store Connect et la Play Console) :

1. L’app achète avec `expo-iap` et envoie au serveur ce que le store lui a donné : la transaction signée (iOS) ou le jeton d’achat (Android).
2. Le serveur vérifie auprès d’Apple (signature JWS avec les certificats racine Apple, bibliothèque officielle) ou de Google (API Play Developer, compte de service), puis enregistre l’achat.
3. L’app termine la transaction du store **seulement après** la réponse du serveur ; sinon elle la retrouve au lancement suivant.
4. Sans compte, l’achat vaut sur l’appareil ; dès que l’apprenant se connecte, il est rattaché à son compte. Un achat déjà rattaché à un autre compte est refusé (`purchase_linked_elsewhere`).
5. Les notifications d’Apple et de Google ferment le plan en cas de remboursement. Un ancien reçu renvoyé ensuite ne le rouvre pas.

**Paiement web en Tunisie** (Konnect : carte bancaire, e-Dinar, portefeuille ; 20 DT) — sur le site uniquement, jamais depuis l’app :

1. `GET /pay` (français, ou `?lang=ar`) : l’apprenant se connecte avec son compte de l’app.
2. `POST /web/checkout` crée le paiement Konnect et renvoie le lien de paiement.
3. Konnect appelle `GET /webhooks/konnect?payment_ref=…` ; le serveur **redemande l’état à Konnect** (montant et devise compris) avant d’ouvrir le plan, puis affiche le résultat (`/pay/done`).

Chaque service est désactivé tant que sa configuration manque (voir [.env.example](.env.example)) : l’API répond alors `store_unavailable` ou `payment_unavailable`.

## API partenaire Sabil (lot M5)

Spécification : [docs/sabil-openapi.yaml](docs/sabil-openapi.yaml). Guide pour l’équipe de Sabil : [docs/sabil.md](docs/sabil.md).

- Clé d’API, signature HMAC-SHA256 de l’horodatage, de la méthode, du chemin et du corps brut, horodatage à ± 5 minutes, chaque signature acceptée une seule fois, journal des appels (90 jours).
- Les routes n’existent que si `SABIL_API_KEY` et `SABIL_HMAC_SECRET` sont définis.
- `npm run sabil:call -- PUT /partner/sabil/accounts/S-1 '{"email":"eleve@example.com"}'` envoie un appel signé (sous Git Bash, préfixer par `MSYS_NO_PATHCONV=1`).

## Sécurité

- Mots de passe : scrypt (N = 2¹⁵, r = 8, p = 1), sel aléatoire ; même temps de réponse pour un e-mail inconnu.
- Jetons de session : 256 bits aléatoires ; seul leur SHA-256 est stocké. Au plus 3 appareils connectés par compte ; une session inutilisée 180 jours expire.
- Limites de débit : 120 requêtes par minute et par adresse IP, et 10 tentatives par quart d’heure pour l’inscription, la connexion, les codes et la suppression.
- Les champs inconnus sont retirés avant traitement ; corps limité à 64 Kio ; les jetons sont masqués dans les journaux, et les corps de requête (donc les mots de passe) n’y sont jamais écrits.

## Attribuer le plan complet à la main

```bash
npm run grant -- eleve@example.com [--until 2027-06-30]
npm run grant -- eleve@example.com --revoke
```

## Reste à faire

- Créer le produit `toki_quest_full` dans App Store Connect et la Play Console, le compte de service Google, l’abonnement Pub/Sub et le compte marchand Konnect ; renseigner les variables.
- Tester un achat réel en bac à sable (TestFlight, piste de test interne de Google Play) et un paiement Konnect en bac à sable : ce n’est pas faisable sans ces comptes.
- Hébergement (HTTPS), sauvegardes de la base, fournisseur d’e-mails, nom de domaine, environnement de test pour Sabil avec ses propres clés.
