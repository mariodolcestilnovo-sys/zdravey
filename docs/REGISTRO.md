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

## 2026-10-18 — Revisione AI del bulgaro, capitolo 1

**Fatto**
- Sessione separata «revisore di bulgaro»: controllate tutte le frasi di [DA-CONTROLLARE.md](DA-CONTROLLARE.md)
  con il contesto di `js/content.js`. Risultato in [REVISIONE-AI-cap1.md](REVISIONE-AI-cap1.md).
- Esito: nessun errore di grammatica, accento o traslitterazione; una sola risposta giusta in ogni domanda.
  4 piccole correzioni proposte nelle spiegazioni (gesto della testa, posto di «се», «Лека нощ»,
  frase sulla Мартеница), alcune alternative facoltative e 10 dubbi per un madrelingua.
- `js/content.js` non modificato: le correzioni le decide e applica la sessione principale.
  `REVIEW_STATUS` resta `pending` finché non vengono applicate.

## 2026-10-18 — Correzioni dalla revisione AI

**Fatto**
- Applicate in `js/content.js` le 4 correzioni della revisione: gesto della testa (il «no» è uno scatto
  del mento in su; anche la consegna dell'attività 5), posto di «се», «Лека нощ» (solo salutandosi la sera),
  frase su Баба Марта e мартеница nell'introduzione.
- Applicati anche alcuni facoltativi: «Добър ден» con un funzionario, утре/утро nell'attività 14,
  esempio «Благодаря, Мила!». Non applicati: «Хладилникът ти» (dubbio 3, decide il madrelingua).
- Nomi in cirillico: regole italiane quando gli aiuti sono in italiano (Giovanni → Джовани, Chiara → Киара).
- `REVIEW_STATUS` = `ai-checked`; l'avviso nel gioco ora dice «controllati con l'AI, in attesa di conferma
  da un madrelingua». I 10 dubbi restano in [REVISIONE-AI-cap1.md](REVISIONE-AI-cap1.md).

**Verificato**
- `node tests/content.test.mjs` (con nuovi casi per i nomi italiani) e rigenerato DA-CONTROLLARE.md.
- Browser, formato telefono: nuovo giocatore «Giovanni», partita completa fino alla calamita, nessun errore.

**Da fare**
- Prova su telefono vero; i 10 dubbi a un madrelingua; prova tecnica AI; capitoli 2–10.
