# Registro

## 2026-10-18 — Capitolo 1 giocabile

**Fatto**
- Letto il Prototipo 2 di Dolce Stilnovo (ramo `codex/login-preview`, solo lettura, nessuna modifica).
- Proposta concordata con Mario: [PROPOSTA.md](PROPOSTA.md).
- Creato il progetto in `Documenti/Codex/zdravey` (git locale, nessun repository GitHub ancora).
- Capitolo 1 «Здравей, София!»: benvenuto, scelta guida, 5 scene, 15 attività, calamita, frigo,
  parole, impostazioni. Salvataggio solo locale.
- Cirillico: font Sofia Sans (gratuito, OFL). Il font usa di serie le forme bulgare moderne
  (л, и, д diverse dal solito), che confondono un principiante: creata una variante con le forme
  classiche come predefinite; quelle bulgare si attivano dalle impostazioni. Il logo resta bulgaro.
- Accento tonico mostrato con vocale rossa sottolineata (l'accento grafico sulla я si staccava).
- Messaggio libero: non corretto, non salvato; riquadro pronto per un futuro consiglio AI.
- Elenco frasi da controllare: [DA-CONTROLLARE.md](DA-CONTROLLARE.md) (115 righe, generato).

**Verificato**
- `node tests/content.test.mjs`: struttura delle 15 attività, traduzioni IT/EN, traslitterazione.
- Browser integrato, formato telefono (375×812) e computer: partita completa in italiano e in
  inglese fino alla calamita, anche con risposte sbagliate e «Proviamo insieme» in ogni attività.
  Nessun errore in console. Nessuno sconfinamento orizzontale su telefono.
- Voce: sul Mac c'è la voce bulgara Apple «Daria» e il gioco la usa.
- Corretti durante la prova: barre visibili nel benvenuto, colonna destra degli abbinamenti già
  verde, frasi ripetute due volte, cartelli disallineati, «Giusto!» sul messaggio libero.

**Non verificato / da fare**
- Prova su un telefono vero (iPhone e Android), compresa la voce e la vibrazione.
- Prova con lettore di schermo (VoiceOver).
- Revisione dei testi bulgari: prima con AI in una sessione separata, poi madrelingua facoltativo.
- Prova tecnica AI (online e sul dispositivo) per le frasi libere.
- Repository GitHub: da creare quando Mario lo chiede (nome proposto `zdravey`).
- Capitoli 2–10.
