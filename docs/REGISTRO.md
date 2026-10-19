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

## 2026-10-19 — Capitoli 2–10 (percorso A1.1 completo)

**Fatto**
- Motore a più capitoli (`chapterData`): passi, punti di avanzamento, calamita e titolo per capitolo;
  pulsante «Capitolo successivo →» alla fine; pagina Parole divisa per capitolo; frigo pieno = complimenti.
- Contenuti originali in `js/chapters/ch2.js … ch10.js`: metro e lettere (2), bar e numeri 1–10 (3),
  «essere», Lei e nazionalità (4), casa e genere (5), mercato e numeri fino a 100 (6), famiglia ed età (7),
  trasporti, orari e direzioni (8), articolo determinativo (9), giorni, mesi e Baba Marta (10).
- Capitolo 4 rinominato «Откъде си?» (era «Аз съм от Италия»): va bene anche per chi non è italiano.
- Nuovi personaggi disegnati: Desi, signor Petrov, Ivaylo, nonna Ruzha, la signora del mercato; 9 calamite.
- Opzione `noTl` per le attività di lettura (le lettere latine darebbero la risposta), anche in cap. 1 att. 3.
- Audio di riserva Dimitar per 428 frasi (6,3 MB). Elenco frasi da controllare rigenerato (992 righe).
- Stato di revisione per capitolo (`REVIEW` in content.js): cap. 1 controllato con AI, 2–10 da controllare.

**Verificato**
- `tests/content.test.mjs` (ora su tutti i capitoli: struttura, traduzioni, personaggi, calamite,
  lettere con ripetizioni, traslitterazione delle parole) e `tests/audio.test.mjs`: passano.
- Browser, formato telefono: partita automatica dei 10 capitoli di fila (150 attività, ognuna prima
  sbagliata con «Proviamo insieme»), 10 calamite, nessun errore, nessuno sconfinamento orizzontale.

**Da fare**
- Revisione AI del bulgaro dei capitoli 2–10 in una sessione separata, poi applicare le correzioni.
- Prova di Mario sul telefono. Dubbi aperti per il madrelingua (cap. 1 e successivi).

## 2026-10-19 — Revisione AI del bulgaro, capitoli 2–10

- Revisione da sessione separata (ruolo «insegnante di bulgaro»): [REVISIONE-AI-cap2-10.md](REVISIONE-AI-cap2-10.md).
  Bulgaro corretto; 13 piccole correzioni (soprattutto spiegazioni italiane, 4 testi IT che presuppongono
  un giocatore maschio, «улица Витоша» → «булевард Витоша»), miglioramenti facoltativi e 16 dubbi per un madrelingua.
  File `js` non modificati: le correzioni le applica la sessione principale.

## 2026-10-19 — Correzioni dalla revisione AI dei capitoli 2–10

- Applicate le 13 correzioni di [REVISIONE-AI-cap2-10.md](REVISIONE-AI-cap2-10.md) e la stessa del cap. 1:
  testi italiani che presupponevano un giocatore maschio («Bravo», «invitato», «viaggiatore») resi neutri;
  «булевард Витоша»; «завивам надясно»; БАНКА al posto di БАНЯ (lettera Я non ancora vista); «quasi sempre»
  per il genere (eccezione баща); «uno dei simboli» per la rosa; accento su «Еди́н»; piccole frasi italiane.
- Non applicati (facoltativi, da decidere con Mario): ciliegie al mercato in inverno, cicogna già il 1° marzo.
- `REVIEW` = controllato con AI per tutti i capitoli; avviso nel gioco aggiornato. I 16 dubbi restano per
  il madrelingua.
- Verificato: content.test, audio.test (2 frasi riregistrate), partita automatica dei 10 capitoli senza errori.

## 2026-10-19 — Stagioni coerenti (scelta di Mario)

- Cap. 6: le ciliegie (estive) sostituite con i mandarini (invernali) in tutto il capitolo; prezzo
  nell'ascolto 3 € (opzioni 3/13/30).
- Cap. 10: Mila non dice più di aver visto una cicogna il 1° marzo; l'ascolto ora è sui colori della
  мартеница («бяла и червена»), con la nota che le cicogne tornano verso fine marzo.
- Verificato: content.test, audio.test (9 frasi riregistrate), capitoli 6 e 10 giocati in inglese fino
  alla calamita, nessun errore. Le frasi nuove sono da far confermare al madrelingua insieme alle altre.

## 2026-10-19 — Musica di sottofondo bulgara

- Richiesta di Mario: musica tradizionale bulgara senza alcun rischio di diritti.
- Scelta: **melodia originale** composta per il gioco in stile tradizionale (non una canzone esistente:
  le registrazioni hanno diritti degli esecutori, e molte canzoni «popolari» hanno autori moderni).
  Ritmo di ръченица 7/8 (2+2+3), scala con 2ª bassa e 3ª alta, гайда con bordone e кавал in alternanza,
  тъпан. Suonata dal browser con Web Audio (`js/music.js`): nessun file audio.
- Comandi: pulsante ♫ in alto, interruttore e volume nelle impostazioni (predefinito 20%); parte al primo
  tocco (regola dei browser), si abbassa mentre parla la voce, si ferma se si cambia app o scheda.
- Su iPhone la musica rispetta il silenzioso: tolti dalla voce normale i due trucchi per il silenzioso
  (non funzionavano con la voce e avrebbero fatto suonare la musica in silenzioso).
- Verificato (Mac): parte al primo clic, ♫ la spegne e riaccende, nessun errore. **Ascolto e giudizio
  sul suono: Mario.**

## 2026-10-19 — Testi approvati da Mario · cinque temi musicali

- Mario ha controllato i testi e annullato la revisione del madrelingua: `REVIEW` = approvato per tutti i
  capitoli; l'avviso «in revisione» non compare più. Elenco frasi aggiornato (stato «approvato da Mario»).
- Musica: 5 temi originali, uno per ambiente, tutti con la struttura chiesta da Mario
  intro → A → B → bridge → controtema → bridge → A → B → conclusione (che torna alla tonica e si lega all'intro):
  Пътят (menu/viaggio, лесно 3+2+2, кавал) · Градът (cap. 1–3, ръченица 2+2+3, гайда) ·
  Домът (cap. 4, 5, 7, право хоро 2/4, кавал e гъдулка) · Пазарът (cap. 6, 8, пайдушко 2+3, гайда) ·
  Празникът (cap. 9, 10, копаница 2+2+3+2+2, гайда e гъдулка). Intro con кавал, bridge con тамбура
  pizzicata, controtema con lo strumento secondario, тъпан sempre in ritmo; bordone continuo.
  Cambio di ambiente: dissolvenza e ripartenza dall'intro del nuovo tema.
- `tests/music.test.mjs`: ogni battuta ha la durata giusta, conclusione sulla tonica, 5 temi usati.
- Verificato nel browser: cambio tema tra Viaggio e capitoli 1, 4, 6, 9; giro completo del tema della città
  nell'ordine esatto, poi di nuovo intro. Nessun errore. Ascolto: Mario.
- 2026-10-19 — Frigo: aggiunta la maniglia anche sullo sportello di sotto (richiesta di Mario). Verificato nel browser.

## 2026-10-19 — Versione di prova online (GitHub Pages)

- Scelta di Mario: repository **pubblico** `mariodolcestilnovo-sys/zdravey` + GitHub Pages (gratuito).
- Prima di caricare: nessun segreto nei file; l'indirizzo e-mail con il nome del Mac di Mario (2 commit delle
  sessioni di revisione) sostituito con l'indirizzo anonimo di GitHub; impostato quello anonimo per i
  prossimi commit in questa cartella. Aggiunti `.nojekyll` e `robots.txt` (non indicizzare).
- Sito: https://mariodolcestilnovo-sys.github.io/zdravey/ — ogni push su `main` lo aggiorna.
- Verificato online (browser, formato telefono): pagina, codice e audio rispondono; `.git` non accessibile;
  nuovo giocatore dal benvenuto, 10 capitoli completi, 10 calamite, font caricato, HTTPS, nessun errore.
- Il plugin GitHub dell'app Claude resta non funzionante (manca la chiave GITHUB_PERSONAL_ACCESS_TOKEN):
  non serve, si usa `gh` dal terminale.

## 2026-10-19 — Musica «ambient» negli esercizi (solo in locale)

- Richiesta di Mario: nei capitoli la musica era troppo incalzante. Nuova modalità ambient, solo dentro i
  capitoli (menu, viaggio e frigo restano come prima): stesse melodie e struttura, tempo ×1,6, niente
  bacchetta del тъпан (solo un colpo grave e morbido a inizio battuta), melodia sul кавал morbido,
  controtema con un tappeto morbido, bordone più basso, eco leggera, volume al 70%.
- Opzione nelle impostazioni «Musica rilassata durante gli esercizi» (attiva di default).
- Verificato (Mac, locale): frigo → tema normale; cap. 3 e 9 → tema giusto in ambient; struttura rispettata;
  nessun errore. **Non ancora pubblicato** (si pubblica quando Mario dice «pubblica»).
- 2026-10-19 — Volume musica: parte al **5%** come nell'altra app (anche per chi era rimasto al vecchio 20%
  predefinito; chi l'aveva regolato a mano lo mantiene). Cursore nelle impostazioni a passi dell'1%,
  separato dalla voce. Verificato: 20 → 5 al ricaricamento, voce Daria a volume pieno mentre suona la musica,
  cursore ricordato. Solo in locale, non pubblicato.
- 2026-10-19 — Ambient ritoccato (Mario: dentro il gioco si sentivano solo bordone e тъпан): melodia
  «lontana» alla sua altezza normale (non più кавал un'ottava sopra), suono morbido e scuro, ~6 volte più
  forte del bordone; eco più presente; тъпан morbido su ogni gruppo del ritmo, senza bacchetta; tempo solo
  leggermente più lento (×1,25); volume ambient 85%. Bordone invariato. Fuori dal gioco nessun cambiamento.
  Verificato (Mac): cap. 4 → tema «casa» ambient, sezioni in ordine, nessun errore. Ascolto: Mario. Solo locale.
- 2026-10-19 — Ambient rifatto secondo Mario («martellante» era la melodia, non il ritmo): niente eco;
  bordone pieno e un po' più presente; тъпан con il ritmo completo di ogni tema (colpi gravi + «pa» della
  bacchetta, all'80%); melodia solo accennata, una nota lunga e morbida per battuta (nessuna nell'intro);
  tempo leggermente rallentato (×1,25). Fuori dal gioco invariato. Verificato (Mac): cap. 1 ambient con
  sezioni in ordine, frigo con tema normale, nessun errore. Ascolto: Mario. Solo locale.
- 2026-10-19 — Pubblicato su GitHub Pages su richiesta di Mario («pubblica»): musica ambient e volume al 5%.

## 2026-10-19 — Programma: passi 0 e 1

- Programma concordato in [PROGRAMMA.md](PROGRAMMA.md) (idee dall'app dell'italiano, letta solo in lettura).
- Passo 0: punto di ripristino `ripristino-01-online-2026-10-19` (versione online), su Mac e GitHub; [BACKUPS.md](BACKUPS.md).
- Passo 1: ♫ e ⚙ sempre visibili, anche nel benvenuto (da ⚙ si torna al punto del benvenuto). ♫ apre il
  pannello audio: audio del gioco (generale), musica, effetti, voce — ognuno con interruttore e volume in %
  (musica 5%, effetti 65%, voce 100% di partenza) — stile musicale (automatico o uno dei 5 temi fisso) e
  musica rilassata negli esercizi. Con l'audio generale spento l'icona diventa 🔇. Stesso pannello nelle impostazioni.
- Verificato (browser, telefono): pannello dal benvenuto; spegni/riaccendi tutto; volume voce 60% applicato
  alla voce; stile «festa» fisso e ritorno ad automatico; ⚙ dal benvenuto e dal nome con ritorno; nessun errore.
  Solo in locale.
- 2026-10-19 — Passo 2, avanti automatico: dopo una risposta giusta al primo colpo, conto alla rovescia di 10 s
  con barra, ⏸/▶ e «Continua» immediato. Pausa (ripartenza solo con ▶) se si apre un pannello o la guida o se
  l'app va in background; mentre parla la voce il conto si ferma e poi riprende. Niente conto dopo errori e nel
  messaggio libero. Opzione nelle impostazioni (attiva). Numeri nascosti al lettore di schermo (frase fissa).
  Verificato (browser): 3 s → «7», pausa ferma, guida → ▶, avanzamento all'attività 2; nessun conto dopo un
  errore, nel messaggio libero o con l'opzione spenta; capitoli 1, 5, 10 completi senza errori. Solo in locale.
- 2026-10-19 — Passo 3, non perdere il punto: uscendo da un esercizio verso viaggio, frigo, parole o impostazioni
  la pagina viene «parcheggiata» com'è (risposte parziali, testo, tastiera, riscontro) e rimessa al ritorno; in
  quelle pagine c'è «↩ Torna all'esercizio» (vale anche «Continua» dal viaggio). Il conto alla rovescia torna in
  pausa. Se nel frattempo si cambia lingua, l'esercizio riparte pulito nella lingua nuova.
  Verificato (browser): parole riordinate a metà → frigo → parole → ritorno, intatte; conto alla rovescia in pausa
  da 8 s e poi avanti; testo libero con tastiera aperta intatto dopo le impostazioni; cap. 3 e 8 completi con
  una deviazione nel frigo; nessun errore. Solo in locale.
- 2026-10-19 — Passo 4, nessuna risposta regalata: segno d'errore persistente; «Proviamo insieme» a gradini —
  1) regola della guida per la fase; 2) scelte: toglie UNA opzione sbagliata solo se ne restano almeno due;
  ascolto: frase più lenta, poi testo; abbinamenti: una sola coppia illuminata; riordino: pezzi giusti in verde,
  poi il pezzo successivo. Verificato nel browser su scelta, abbinamento e riordino. Solo in locale.
- 2026-10-19 — Passo 5: negli ascolti ⏸ Pausa / ▶ Riprendi / ⏹ Stop accanto a «Ascolta», attivi solo mentre la voce parla (voce del dispositivo o frase registrata). Verificato nel browser (pausa, ripresa, stop). Solo in locale.
- 2026-10-19 — Passo 6: tutorial guidato con faretto (js/tour.js), 9 passi: benvenuto della guida, sfida del frigo, capitoli, Frigo, Parole, ♫, Aa, ⚙, «Gioca». Parte alla prima apertura del Viaggio (anche per chi aveva già giocato), Salta/Esc, Indietro, rivedibile da Impostazioni. Dopo il benvenuto «Iniziamo!» porta al Viaggio con il tutorial. Verificato su telefono (faretto sul bersaglio, scheda sopra/sotto). Solo in locale.
- 2026-10-19 — Passo 7: sul telefono la barra in basso si nasconde scorrendo giù, torna scorrendo su e si vede sempre tutta in fondo alla pagina e in cima; sul computer e durante il tutorial resta visibile. Verificato con scorrimenti veri nel browser (giù → nascosta, su → visibile, fondo → visibile). Solo in locale.
- 2026-10-19 — Passo 8: test di orientamento facoltativo (js/placement.js), 11 domande (una per capitolo, due per il cirillico) più «Non lo so»; consiglia il primo capitolo con un errore, senza voti né certificazioni. Invito nel Viaggio solo a chi non ha ancora iniziato; «No, grazie» lo nasconde; rifacibile da Impostazioni. Verificato nel browser (errore al cap. 4 → consiglio cap. 4 → apertura). Solo in locale.
- 2026-10-19 — Passo 9, accessibilità: nuova sezione nelle impostazioni con modalità lettore di schermo (niente conto alla rovescia, niente musica automatica né animazioni, barra sempre visibile, fuoco sul risultato), testo più grande, contrasto alto, pulsanti più grandi, comandi a sinistra per mancini, animazioni ridotte. Il riscontro di ogni risposta ora scorre al centro dello schermo (non resta sotto la barra). Verificato nel browser. Solo in locale.
- 2026-10-19 — Passi 10 e 11: «📤 Condividi il frigo» nel Frigo crea sul dispositivo un'immagine 1080×1920 (titolo, frigo con le calamite conquistate e grigie, «Ho conquistato N calamite su 10!», indirizzo del sito, © 2026 Zario; senza il nome del giocatore), con anteprima e poi pannello di condivisione del telefono o scaricamento. Firma «© 2026 Zario» sotto le schermate iniziali, il Viaggio e le Impostazioni, e nel README. Corretto anche il testo del frigo («le calamite grigie si conquistano finendo i capitoli»). Verificato nel browser. Solo in locale.
- 2026-10-19 — Prova finale del programma (passi 0–11): giocatore nuovo da zero (firma e comandi nel benvenuto,
  voce spenta dal pannello, tutorial saltato, test rifiutato), 10 capitoli completi con un errore e gli aiuti in
  ogni attività (140 aiuti) e una deviazione per capitolo, 10 calamite, nessun errore, nessuno sconfinamento.
  content/music/audio test passano. **Non ancora pubblicato** (in attesa di «pubblica»).
