# Punti di ripristino

Ogni punto è un'etichetta git («tag»): una fotografia del gioco che si può riprendere in qualsiasi momento.
Le etichette sono salvate sia sul Mac sia su GitHub.

| Etichetta | Data | Che cosa contiene |
|---|---|---|
| `ripristino-01-online-2026-10-19` | 19/10/2026 | Versione online prima del programma di miglioramenti: 10 capitoli A1.1, 5 temi musicali con ambient nei capitoli, musica al 5%, voce Daria, tastiera fonetica (commit 0084dad) |

## Come tornare a un punto di ripristino
- Per **guardarlo**: `git checkout <etichetta>` (poi `git checkout main` per tornare all'ultima versione).
- Per **rimettere online** quella versione: chiedere a Claude, che crea un commit che riporta i file a quel punto
  e lo pubblica solo dopo il via libera di Mario. Nessuna cancellazione della storia.
