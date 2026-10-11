# Guide d'intégration pour Sabil

Ce document s'adresse à l'équipe technique de Sabil. La spécification complète est dans [sabil-openapi.yaml](sabil-openapi.yaml).

## Principe

À chaque inscription, mise à jour ou fin d'inscription d'un élève, Sabil appelle l'API de Toki Quest. L'élève est reconnu par son **e-mail** : s'il crée un compte dans l'application Toki Quest avec le même e-mail, avant ou après l'appel, il obtient le plan complet tant que son inscription est active. Il n'a rien d'autre à faire.

Données transmises : l'identifiant Sabil, l'e-mail, le prénom (facultatif), le statut et la date de fin. Aucune autre donnée n'est demandée ni conservée.

## Appels

| Quand | Appel |
| --- | --- |
| Inscription ou changement (e-mail, date de fin) | `PUT /partner/sabil/accounts/{sabilId}` avec `{ "email", "firstName", "status": "active", "validUntil" }` |
| Fin d'inscription immédiate | `DELETE /partner/sabil/accounts/{sabilId}` |
| Fin d'inscription à une date | `DELETE /partner/sabil/accounts/{sabilId}?endsOn=2027-06-30` (accès jusqu'à ce jour inclus) |
| Reprise initiale, resynchronisation | `POST /partner/sabil/accounts:batch` avec `{ "accounts": [ … ] }`, 500 inscrits au plus par appel |
| Vérification | `GET /partner/sabil/accounts/{sabilId}` |

Toutes les écritures sont idempotentes : en cas de doute (délai dépassé, erreur réseau), il suffit de refaire l'appel, signé à nouveau.

## Signature

Chaque appel porte trois en-têtes :

- `Authorization: Bearer <clé d'API>`
- `X-Timestamp: <heure Unix en secondes>` (écart toléré : 5 minutes ; synchroniser l'horloge par NTP)
- `X-Signature: <HMAC-SHA256 hexadécimal>` de la chaîne `<timestamp>.<MÉTHODE>.<chemin et requête>.<corps brut>`

Le corps signé doit être **exactement** celui qui est envoyé (mêmes octets). Une signature n'est acceptée qu'une fois.

### Node.js

```js
import { createHmac } from 'node:crypto';

async function callToeicQuest(method, path, body) {
  const raw = body ? JSON.stringify(body) : '';
  const ts = String(Math.floor(Date.now() / 1000));
  const signature = createHmac('sha256', process.env.TQ_SECRET).update(`${ts}.${method}.${path}.${raw}`).digest('hex');
  const res = await fetch(`https://api.tokiquest.app${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${process.env.TQ_KEY}`,
      'X-Timestamp': ts,
      'X-Signature': signature,
      ...(raw ? { 'Content-Type': 'application/json' } : {}),
    },
    body: raw || undefined,
  });
  return res;
}

await callToeicQuest('PUT', '/partner/sabil/accounts/S-1001', { email: 'amal@example.com', firstName: 'Amal', validUntil: '2027-06-30' });
```

### PHP

```php
function callToeicQuest(string $method, string $path, ?array $body = null) {
    $raw = $body === null ? '' : json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    $ts = (string) time();
    $signature = hash_hmac('sha256', "$ts.$method.$path.$raw", getenv('TQ_SECRET'));
    $headers = ['Authorization: Bearer ' . getenv('TQ_KEY'), "X-Timestamp: $ts", "X-Signature: $signature"];
    if ($raw !== '') $headers[] = 'Content-Type: application/json';
    $ch = curl_init('https://api.tokiquest.app' . $path);
    curl_setopt_array($ch, [CURLOPT_CUSTOMREQUEST => $method, CURLOPT_HTTPHEADER => $headers, CURLOPT_RETURNTRANSFER => true]);
    if ($raw !== '') curl_setopt($ch, CURLOPT_POSTFIELDS, $raw);
    $response = curl_exec($ch);
    return [curl_getinfo($ch, CURLINFO_HTTP_CODE), $response];
}
```

## Réponses d'erreur

| Code HTTP | `error` | Que faire |
| --- | --- | --- |
| 400 | `invalid_request`, `invalid_email`, `invalid_date` | Corriger la donnée envoyée |
| 401 | `invalid_api_key`, `invalid_timestamp`, `invalid_signature` | Vérifier la clé, l'horloge, la chaîne signée |
| 404 | `not_found` | Inscrit inconnu : l'envoyer d'abord par `PUT` |
| 409 | `replayed_request` | Signature déjà utilisée : signer de nouveau |
| 429 | `too_many_requests` | Ralentir (600 appels par minute au plus) |
| 5xx | — | Réessayer plus tard, avec un délai croissant |

## Environnement de test

Un environnement de test séparé, avec ses propres clés, est mis à disposition de Sabil avant la production. On peut aussi l'essayer en local :

```bash
cd server
SABIL_API_KEY=cle-de-test SABIL_HMAC_SECRET=secret-de-test-d-au-moins-32-caracteres npm run dev
SABIL_API_KEY=cle-de-test SABIL_HMAC_SECRET=secret-de-test-d-au-moins-32-caracteres \
  npm run sabil:call -- PUT /partner/sabil/accounts/S-1 '{"email":"eleve@example.com"}'
```

## Points à confirmer avec Sabil

- Format et unicité des identifiants Sabil, et e-mail réellement utilisé par l'élève.
- Durée d'accès après la fin d'une inscription (fin immédiate, ou date transmise par `endsOn`).
- Capacité à signer les appels (HMAC) et à synchroniser l'horloge.
- Contrat de traitement des données personnelles entre Sabil et l'éditeur de Toki Quest.
