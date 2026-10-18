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

## 2026-10-18 — Richieste di Mario dopo la prima prova sul telefono

**Fatto**
- Lettere latine (Aa) accese di default; si spengono dalle impostazioni. Anche per chi aveva già giocato.
- Traduzioni dei fumetti e dei cartelli già aperte nei capitoli 1–10 (nuova opzione nelle impostazioni).
  Restano chiuse solo dove la traduzione è la risposta (attività 1) e nell'ascolto (attività 4).
- Tastiera fonetica stile QWERTY (disposizione «tradizionale», come su Mac e Windows): я=q, в=w, ъ=y,
  ж=v, ч=`, ш=[, щ=], ю=\. Lettera latina in piccolo su ogni tasto. Con la tastiera aperta, sul computer
  si può scrivere anche con la tastiera vera.
- Voce: ora parla anche se il browser non elenca le voci bulgare (usa lingua bg-BG); niente `cancel()`
  subito prima di parlare (su Safari può ammutolire); dopo 2,5 s senza voce compare un consiglio
  (volume, silenzioso, voce scaricata). Nelle impostazioni si vede quali voci bulgare trova il telefono.

**Verificato**
- Browser, formato telefono: giocatore «vecchio» con lettere latine spente → al ricaricamento accese;
  partita completa 15/15 senza errori; traduzioni aperte; tastiera a schermo e tastiera vera.
- Sul Mac la voce Daria parla. **Non verificato su iPhone**: serve la prova di Mario.

**Da fare**
- Mario: riprovare la voce sul telefono e leggere la riga «Voci bulgare trovate» nelle impostazioni.

## 2026-10-18 — Voce muta su iPhone

- Diagnostica sul telefono di Mario (iPhone, iOS 27, Chrome): la voce Daria parte e finisce in ~1,9 s,
  quindi la sintesi funziona ma il suono non esce. Causa probabile: modalità silenziosa (l'audio web
  su iPhone la rispetta).
- Aggiunto `navigator.audioSession.type = 'playback'` prima di parlare (dove esiste): la voce dovrebbe
  sentirsi anche in silenzioso. La diagnostica ora mostra anche lo stato di audioSession.
- Mac: invariato, funziona. **iPhone: da riprovare.**
- Mario: con il silenzioso tolto la voce si sente → confermato che il problema è il silenzioso.
- `audioSession = 'playback'` da solo non basta per la voce. Aggiunto il «trucco dell'audio muto»: mentre la
  voce parla suona in loop un file audio silenzioso (generato nel browser, 0,5 s), che dovrebbe portare
  la pagina in modalità riproduzione anche in silenzioso. Mac: funziona, voce invariata. **iPhone: da provare.**
- Piano B se non basta: file audio registrati per ogni frase (attenzione: le voci Apple sono solo per
  uso personale; per il gioco pubblico serve una voce con licenza libera o un madrelingua).

## 2026-10-18 — Piano B: frasi registrate

**Fatto**
- Voce libera **Piper «dimitar»** (bulgaro, maschile; licenza MIT, dati CC0; modello 63 MB, solo per
  registrare, non è nel gioco). Registrate le 43 frasi del capitolo 1 in `audio/` (556 KB, AAC).
- Il gioco suona prima il file registrato; se manca (frasi con il nome del giocatore) usa la voce del
  dispositivo. Interruttore nelle impostazioni; pulsante «Frase registrata» nella diagnostica.
- Server di prova: risposte «a pezzi» (Range/206), necessarie a Safari su iPhone per l'audio.
- `tests/audio.test.mjs`: ogni frase ascoltabile ha il suo file.

**Verificato**
- Mac, indirizzo Wi‑Fi: il file parte e finisce; nel capitolo il 🔊 scarica il file giusto (206).
  Partita completa senza errori. `content.test` e `audio.test` passano.

**Da verificare / decidere**
- iPhone in silenzioso: da provare (Mario).
- Qualità della voce dimitar: da ascoltare (accenti tonici possibili errori).
- Licenza: la voce è stata addestrata partendo dalla voce inglese «lessac» di Piper; prima di un uso
  commerciale va controllata anche la licenza di quella base. Per il prototipo va bene.
- Alternativa migliore per il futuro: registrazioni di un madrelingua.

## 2026-10-18 — Silenzioso: Safari sì, Chrome no · voce femminile per Mila

- Mario: in silenzioso le frasi registrate si sentono in **Safari**, non in **Chrome** su iPhone
  (dipende dall'app Chrome, non modificabile da una pagina web). Avviso una tantum e nota nelle
  impostazioni per chi usa Chrome/Firefox/Edge su iPhone: «usa Safari o togli il silenzioso».
- Dimitar è maschile: le frasi dei personaggi femminili (Mila; in futuro Desi, Ruzha) usano la voce del
  dispositivo (Daria su Apple) se c'è, altrimenti il file di Dimitar. Il resto resta a Dimitar.
- Aggiunta la richiesta di modalità «riproduzione» all'avvio e prima degli effetti sonori; diagnostica
  con più dati (audioSession, tempo di riproduzione).
- Mac: cartello → file Dimitar, fumetto di Mila → Daria (verificato).
- **Da provare (Mario):** Safari in silenzioso, fumetto di Mila (voce Daria del dispositivo).
- Idea per dopo: registrazioni di una madrelingua per Mila, oppure una voce femminile libera quando ci sarà.

## 2026-10-18 — Solo Daria, pulsante «indietro»

- Mario (Safari, iPhone): in silenzioso si sente solo il file di Dimitar e non sempre; Daria si sente solo
  senza silenzioso. Decisione di Mario: **tutte le frasi con la voce del dispositivo (Daria)**.
  Dimitar resta solo come riserva automatica se il dispositivo non ha voce bulgara, o se scelto nelle
  impostazioni. Su iPhone, al primo ascolto, un avviso: «togli il silenzioso per sentire la voce».
- Pulsante ← in alto nel capitolo: torna al passo precedente (scena, spiegazione o attività).
- Corretto: se la guida non risultava salvata la spiegazione andava in errore (ora c'è Pencho di riserva).
- Verificato (Mac): cartello letto da Daria, nessun file Dimitar; partita completa con due «indietro»,
  tutte le spiegazioni presenti, calamita, nessun errore in console.
- Android: non provato (rimandato da Mario).
