import { phases, guides, chapters, chapterData, REVIEW_STATUS } from './content.js';
import { avatars, magnets, lockedMagnet, seasonalMagnets } from './art.js';
import * as mem from './memory.js';
import { checkWritten } from './check.js';
import * as habit from './habit.js';
import { toLatin, toCyrillic } from './translit.js';
import * as voice from './speech.js';
import * as music from './music.js';
import { startTour, tourOpen } from './tour.js';
import { placement, suggestChapter } from './placement.js';
import { fridgeImage, shareOrDownload } from './share.js';

const SITE = 'mariodolcestilnovo-sys.github.io/zdravey';
const COPYRIGHT = '© 2026 Zario';

// ───────── Testi dell'interfaccia ─────────
const UI = {
  it: {
    subtitle: 'La sfida della Мартеница', journey: 'Viaggio', fridge: 'Frigo', words: 'Parole', settings: 'Impostazioni',
    chooseLang: 'In che lingua vuoi gli aiuti?', langIt: 'Italiano', langEn: 'English',
    nameQ: 'Come ti chiami?', namePh: 'Il tuo nome (anche inventato)', nameBg: 'Il tuo nome in cirillico', nameBgHint: 'L’abbiamo scritto noi: se vuoi, correggilo con la tastiera.',
    localNote: 'Nessun account: il tuo nome e i progressi restano solo su questo dispositivo.',
    next: 'Avanti', back: 'Indietro', start: 'Iniziamo!', chooseGuide: 'Scegli la tua guida', guideNote: 'La guida ti spiega le parole nuove. Puoi cambiarla quando vuoi.',
    cont: 'Continua', check: 'Controlla', correct: 'Giusto!', notYet: 'Non ancora: riprova!', together: 'Proviamo insieme', listen: 'Ascolta', stopVoice: 'Ferma', showText: 'Mostra il testo', translate: 'Traduci',
    noVoice: 'Questo dispositivo non ha una voce bulgara: leggi il testo. Il gioco funziona lo stesso.',
    iosSilent: 'Su iPhone la voce non si sente con il silenzioso attivo: toglilo per ascoltare.',
    noVoiceHelp: 'Non si sente niente? Alza il volume, togli il silenzioso e controlla che la voce bulgara sia scaricata. Puoi sempre leggere il testo.',
    voiceOff: 'La voce è spenta: puoi accenderla nelle impostazioni.', voicesFound: 'Voci bulgare trovate', showTrLabel: 'Traduzioni già aperte (capitoli 1–10)',
    writeIt: 'Scrivilo in cirillico.', retryTag: 'Di nuovo, più difficile', retryIntro: n => `Prima del finale ripassiamo ${n === 1 ? 'l’attività che' : `le ${n} attività che`} ti ${n === 1 ? 'ha' : 'hanno'} fatto sbagliare, in una forma un po’ più difficile.`, sumGreat: 'Ottimo!', sumGood: 'Bene!', sumReview: 'Da ripassare: niente paura, il ripasso di 5 minuti ti aiuta.', sumFirst: 'giuste al primo colpo', sumWords: 'parole nuove', sumMin: 'min', goldHave: 'Hai già la calamita dorata di questo capitolo!', goldTry: 'Prova senza aiuti: calamita dorata', goldNote: 'Senza lettere latine, traduzioni né aiuti, scrivendo le risposte. Al massimo 2 errori.', goldTitle: 'Prova senza aiuti', goldWon: 'Complimenti: calamita dorata conquistata!', goldMissed: n => `${n} errori: per la calamita dorata ne servono al massimo 2. Riprova quando vuoi!`, easier: 'Più facile', harderBtn: 'Più difficile: scrivo io', inARow: n => `${n} di fila`, goalsDone: 'Obiettivi del giorno completati: una nappina per il tuo frigo!', seasonalWon: 'Sfida del mese completata: nuova calamita di stagione nel frigo!', yourAnswer: 'La tua risposta (cirillico o lettere latine)', wLatin: r => `Hai scritto in lettere latine: va bene! In cirillico è <b lang="bg">${r}</b>.`, wSmall: r => `Piccolo errore: si scrive <b lang="bg">${r}</b>.`, wConf: (r, g, w) => `Attento: qui ci vuole <b lang="bg">${r}</b>, non <b lang="bg">${g}</b> → <b lang="bg">${w}</b>.`, almost: 'Quasi perfetto!', letters: 'lettere', reviewTip: 'Ripassa con calma: ogni parola ricordata dura più a lungo nella memoria.', reviewNone: 'Prima gioca almeno un capitolo: poi il ripasso userà le sue parole.', reviewTitle: 'Ripasso di 5 minuti', reviewDone: 'Ripasso finito!', reviewScore: (ok, n) => `${ok} su ${n} giuste al primo colpo.`, reviewNext: 'Le parole che hai sbagliato torneranno presto; quelle giuste più avanti.', speakNow: 'Parla', noSpeak: 'Ora non posso parlare', speakPrivacy: 'Il riconoscimento della voce è quello del browser: in Chrome l’audio passa dai server di Google, in Safari spesso resta sul dispositivo. Il gioco non registra niente.', listening: 'Ti ascolto…', speakAgain: 'Riprova a parlare', noListen: 'Ora non posso ascoltare', noListenOn: 'Ascolto in pausa per 15 minuti: leggi il testo.', tassels: n => `${n} ${n === 1 ? 'nappina' : 'nappine'} della Мартеница (obiettivi del giorno completati)`, seasonTitle: 'Calamite di stagione', seasonNote: (n, t, name) => `Sfida del mese: completa tutti gli obiettivi del giorno per ${t} giorni (${n}/${t}) e vinci «${name}».`, freshT: ['Mai vista', 'Da ripassare', 'Così così', 'Fresca'], streak: n => `${n} ${n === 1 ? 'giorno' : 'giorni'} di fila`, calendar: 'Calendario', goal_acts: '3 attività', goal_run: '5 giuste di fila', goal_review: 'Un ripasso di 5 minuti', calNote: n => `Ogni giorno in cui giochi aggiunge un filo bianco e rosso. Ogni mese hai ${n} giorni di riposo gratuiti che non rompono la serie.`, calActive: 'giocato', calRest: 'riposo', milestones: 'Traguardi: 7, 30 e 100 giorni.',
    activity: 'Attività', of: 'di', help: 'Aiuto della guida', keyboard: 'Tastiera cirillica', example: 'Mostra un esempio', send: 'Invia', sent: 'Messaggio inviato!', prevStep: 'Torna indietro', plTitle: 'Test di orientamento', plOffer: 'Sai già un po’ di bulgaro? Fai il test di orientamento: 11 domande, circa 2 minuti. Ti suggerisce da quale capitolo partire.', plYes: 'Fai il test', plNo: 'No, grazie', plQ: (i, n) => `Domanda ${i} di ${n}`, plNote: 'Non è un esame: serve solo a orientarti. Puoi sempre scegliere qualsiasi capitolo.', plGo: n => `Vai al capitolo ${n}`, plResult: (n, title) => `Ti consigliamo di partire dal capitolo ${n}: «${title}».`, plAll: 'Complimenti: conosci già le basi di tutti i 10 capitoli! Scegli liberamente da dove ripassare.', plDontKnow: 'Non lo so', tourTitle: 'Tutorial', tourSkip: 'Salta', tourDone: 'Iniziamo!', tourAgain: 'Rivedi il tutorial', tour1: r => `Ti mostro i comandi in un minuto. La tua guida, ${r}, ti accompagna in tutto il viaggio.`, tour2: 'Questa è la sfida: riempire il frigo di calamite entro il 1° marzo. La barra mostra quante ne hai.', tour3: 'Ogni capitolo è una tappa della storia, con 15 attività. Puoi sceglierli liberamente.', tour4: 'Il frigo: qui finiscono le calamite che conquisti. Toccane una per rigiocare quel capitolo.', tour5: 'Le parole di ogni capitolo, con la pronuncia e la vocale accentata.', tour6: 'L’audio: musica, effetti e voce, ognuno con il suo volume. Qui puoi anche spegnere tutto.', tour7: 'Aa mostra o nasconde le lettere latine sotto il cirillico.', tour8: 'Le impostazioni: lingua, nome, guida, lettura… e qui puoi rivedere questo tutorial.', tour9: 'Negli esercizi trovi anche 💡 per la spiegazione della guida e ← per tornare indietro. Ora tocca a te: premi «Gioca»!', lPause: 'Pausa', lResume: 'Riprendi', lStop: 'Stop', backToGame: 'Torna all’esercizio', nextCh: 'Capitolo', yourMsg: 'Il tuo messaggio',
    aiSlot: 'Consiglio automatico: in arrivo. Stiamo provando un’AI gratuita che potrà darti un suggerimento sulle frasi libere.',
    reward: 'Nuova calamita!', toFridge: 'Vai al frigo', toJourney: 'Torna al viaggio',
    challenge: (n, tot) => `Riempi il frigo entro il 1° marzo: ${n} di ${tot} calamite.`,
    play: 'Gioca', resume: 'Continua', replay: 'Rigioca', soon: 'In preparazione', done: 'Completato',
    fridgeTitle: 'Il tuo frigo', fridgeEmpty: 'Le calamite grigie si conquistano finendo i capitoli.', shareBtn: 'Condividi il frigo', shareGo: 'Condividi o salva l’immagine', shareLine1: (n, t) => `Ho conquistato ${n} calamite su ${t}!`, shareLine2: 'Imparo il bulgaro giocando', shareAlt: n => `Il mio frigo con ${n} calamite`, shareNote: 'L’immagine è creata sul tuo dispositivo, in formato «storia» per i social. Non contiene il tuo nome.', shareSaved: 'Immagine salvata', fridgeFull: 'Frigo pieno! Hai finito il percorso A1.1: complimenti!',
    wordsTitle: 'Le parole', wordsNote: 'La vocale rossa e sottolineata è quella da dire più forte. Nei testi bulgari normali non si segna.',
    review: 'Testi bulgari in revisione: da far controllare a un madrelingua.', reviewAi: 'Testi bulgari controllati con l’AI, in attesa di conferma da un madrelingua.',
    sHelpLang: 'Lingua degli aiuti', sName: 'Il tuo nome', sGuide: 'La tua guida', sTranslit: 'Traslitterazione (lettere latine sotto il cirillico)',
    sVoice: 'Voce bulgara', sVoicePick: 'Scegli la voce', sRate: 'Velocità', sTest: 'Prova la voce', diag: 'Diagnostica della voce', diagNote: 'Tocca un pulsante alla volta, poi copia il testo che compare e mandalo a chi sviluppa il gioco.', diagLang: 'Solo lingua bulgara', diagFile: 'Frase registrata', sClips: 'Usa la voce registrata maschile (Dimitar) al posto di quella del dispositivo', sClipsNote: n => `${n} frasi registrate con una voce maschile libera (Dimitar, Piper): su iPhone con Safari si sentono anche in silenzioso. Se il dispositivo non ha una voce bulgara, il gioco le usa da solo.`, sSounds: 'Suoni', sVibrate: 'Vibrazione', sVibrateNo: 'Vibrazione non disponibile su questo dispositivo',
    sForms: 'Lettere in stile bulgaro moderno', sFormsNote: 'Molti libri e marchi bulgari usano queste forme; i cartelli spesso no. All’inizio è più facile la forma classica.',
    sDisplay: 'Lettura e suoni', sMusic: 'Musica', aPanel: 'Audio', aAll: 'Audio del gioco', aFx: 'Effetti sonori', aVoice: 'Voce bulgara', aStyle: 'Stile musicale', aAuto: 'Automatico: cambia con l’ambiente', themeNames: { road: 'La strada (menu e viaggio)', city: 'La città (cap. 1–3)', home: 'La casa (cap. 4, 5, 7)', market: 'Il mercato (cap. 6, 8)', feast: 'La festa (cap. 9, 10)' }, sMusicOn: 'Musica di sottofondo', sMusicCalm: 'Musica rilassata durante gli esercizi (più lenta, senza tamburo)', sMusicVol: 'Volume della musica', sMusicNote: 'Melodia originale in stile tradizionale bulgaro (ръченица in 7/8, гайда, кавал e тъпан), creata per questo gioco e suonata dal browser: nessun diritto d’autore di terzi.', sAuto: 'Avanti automatico dopo la risposta giusta (10 secondi)', autoIn: 'Avanti tra', autoSr: 'Si passa da soli all’attività successiva tra 10 secondi. Puoi mettere in pausa o premere Continua.', autoPause: 'Metti in pausa', autoPlay: 'Riprendi il conto alla rovescia', sA11y: 'Accessibilità', sSr: 'Modalità lettore di schermo', sSrNote: 'Avanzamento solo manuale, niente conto alla rovescia, niente musica automatica né animazioni; il fuoco va sul risultato di ogni risposta.', sContrast: 'Contrasto alto', sTargets: 'Pulsanti più grandi', sLefty: 'Comandi a sinistra (mancini)', sBig: 'Testo più grande', sMotion: 'Riduci le animazioni', sData: 'I tuoi dati', sDataNote: 'Il viaggio è salvato solo in questo browser. Nessun dato viene inviato.',
    sReset: 'Cancella i progressi', sResetQ: 'Vuoi davvero cancellare nome e progressi da questo dispositivo?', sSave: 'Salva', saved: 'Salvato',
    tipsTitle: 'Tre comandi utili', tips: ['🔊 ascolta la frase in bulgaro (se il dispositivo ha la voce).', 'Aa mostra o nasconde le lettere latine sotto il cirillico.', '💡 riapre la spiegazione della guida.'],
    close: 'Chiudi', phase: 'Fase', menu: 'Menu principale'
  },
  en: {
    subtitle: 'The Martenitsa Challenge', journey: 'Journey', fridge: 'Fridge', words: 'Words', settings: 'Settings',
    chooseLang: 'Which language do you want for help?', langIt: 'Italiano', langEn: 'English',
    nameQ: 'What’s your name?', namePh: 'Your name (or a made-up one)', nameBg: 'Your name in Cyrillic', nameBgHint: 'We wrote it for you: fix it with the keyboard if you like.',
    localNote: 'No account: your name and progress stay on this device only.',
    next: 'Next', back: 'Back', start: 'Let’s start!', chooseGuide: 'Choose your guide', guideNote: 'Your guide explains new words. You can change guide any time.',
    cont: 'Continue', check: 'Check', correct: 'Correct!', notYet: 'Not yet: try again!', together: 'Let’s do it together', listen: 'Listen', stopVoice: 'Stop', showText: 'Show the text', translate: 'Translate',
    noVoice: 'This device has no Bulgarian voice: read the text. The game still works.',
    iosSilent: 'On iPhone the voice can’t be heard in silent mode: switch it off to listen.',
    noVoiceHelp: 'Can’t hear anything? Turn the volume up, switch off silent mode and check the Bulgarian voice is downloaded. You can always read the text.',
    voiceOff: 'The voice is off: you can turn it on in Settings.', voicesFound: 'Bulgarian voices found', showTrLabel: 'Translations already open (chapters 1–10)',
    writeIt: 'Write it in Cyrillic.', retryTag: 'Again, a bit harder', retryIntro: n => `Before the ending, let’s review the ${n === 1 ? 'activity' : `${n} activities`} you got wrong, in a slightly harder form.`, sumGreat: 'Excellent!', sumGood: 'Well done!', sumReview: 'Worth reviewing: don’t worry, the 5-minute review helps.', sumFirst: 'right first time', sumWords: 'new words', sumMin: 'min', goldHave: 'You already have this chapter’s golden magnet!', goldTry: 'No-help test: golden magnet', goldNote: 'No Latin letters, translations or help, writing the answers. At most 2 mistakes.', goldTitle: 'No-help test', goldWon: 'Well done: golden magnet won!', goldMissed: n => `${n} mistakes: the golden magnet needs at most 2. Try again whenever you like!`, easier: 'Easier', harderBtn: 'Harder: I’ll write it', inARow: n => `${n} in a row`, goalsDone: 'Daily goals completed: a tassel for your fridge!', seasonalWon: 'Monthly challenge completed: a new seasonal magnet on your fridge!', yourAnswer: 'Your answer (Cyrillic or Latin letters)', wLatin: r => `You wrote in Latin letters: that’s fine! In Cyrillic it’s <b lang="bg">${r}</b>.`, wSmall: r => `Small mistake: it’s spelt <b lang="bg">${r}</b>.`, wConf: (r, g, w) => `Careful: this needs <b lang="bg">${r}</b>, not <b lang="bg">${g}</b> → <b lang="bg">${w}</b>.`, almost: 'Almost perfect!', letters: 'letters', reviewTip: 'Take your time: every word you remember lasts longer in your memory.', reviewNone: 'Play at least one chapter first: the review will then use its words.', reviewTitle: '5-minute review', reviewDone: 'Review done!', reviewScore: (ok, n) => `${ok} of ${n} right first time.`, reviewNext: 'The words you got wrong will come back soon; the right ones later.', speakNow: 'Speak', noSpeak: 'I can’t speak now', speakPrivacy: 'Speech recognition is the browser’s: in Chrome the audio goes through Google’s servers, in Safari it often stays on the device. The game records nothing.', listening: 'Listening…', speakAgain: 'Try speaking again', noListen: 'I can’t listen now', noListenOn: 'Listening paused for 15 minutes: read the text.', tassels: n => `${n} martenitsa ${n === 1 ? 'tassel' : 'tassels'} (daily goals completed)`, seasonTitle: 'Seasonal magnets', seasonNote: (n, t, name) => `Monthly challenge: complete all the daily goals on ${t} days (${n}/${t}) and win “${name}”.`, freshT: ['Never seen', 'Needs review', 'So-so', 'Fresh'], streak: n => `${n} ${n === 1 ? 'day' : 'days'} in a row`, calendar: 'Calendar', goal_acts: '3 activities', goal_run: '5 right in a row', goal_review: 'One 5-minute review', calNote: n => `Every day you play adds a white and red thread. Each month you get ${n} free rest days that don’t break the streak.`, calActive: 'played', calRest: 'rest', milestones: 'Milestones: 7, 30 and 100 days.',
    activity: 'Activity', of: 'of', help: 'Guide’s help', keyboard: 'Cyrillic keyboard', example: 'Show an example', send: 'Send', sent: 'Message sent!', prevStep: 'Go back', plTitle: 'Placement test', plOffer: 'Do you already know some Bulgarian? Take the placement test: 11 questions, about 2 minutes. It suggests which chapter to start from.', plYes: 'Take the test', plNo: 'No, thanks', plQ: (i, n) => `Question ${i} of ${n}`, plNote: 'It’s not an exam: it only helps you find your place. You can always pick any chapter.', plGo: n => `Go to chapter ${n}`, plResult: (n, title) => `We suggest starting from chapter ${n}: “${title}”.`, plAll: 'Well done: you already know the basics of all 10 chapters! Pick freely where to review.', plDontKnow: 'I don’t know', tourTitle: 'Tutorial', tourSkip: 'Skip', tourDone: 'Let’s go!', tourAgain: 'Replay the tutorial', tour1: r => `I’ll show you the controls in a minute. Your guide, ${r}, is with you for the whole journey.`, tour2: 'This is the challenge: fill the fridge with magnets by 1 March. The bar shows how many you have.', tour3: 'Each chapter is a step of the story, with 15 activities. You can pick them freely.', tour4: 'The fridge: the magnets you win end up here. Tap one to replay that chapter.', tour5: 'The words of every chapter, with pronunciation and the stressed vowel.', tour6: 'Audio: music, effects and voice, each with its own volume. You can also turn everything off here.', tour7: 'Aa shows or hides Latin letters under the Cyrillic.', tour8: 'Settings: language, name, guide, reading… and you can replay this tutorial here.', tour9: 'In the exercises you’ll also find 💡 for your guide’s explanation and ← to go back. Now it’s your turn: press “Play”!', lPause: 'Pause', lResume: 'Resume', lStop: 'Stop', backToGame: 'Back to the exercise', nextCh: 'Chapter', yourMsg: 'Your message',
    aiSlot: 'Automatic tip: coming soon. We’re testing a free AI that could give you a hint on free sentences.',
    reward: 'New magnet!', toFridge: 'Go to the fridge', toJourney: 'Back to the journey',
    challenge: (n, tot) => `Fill the fridge by 1 March: ${n} of ${tot} magnets.`,
    play: 'Play', resume: 'Continue', replay: 'Play again', soon: 'Coming soon', done: 'Completed',
    fridgeTitle: 'Your fridge', fridgeEmpty: 'You win the grey magnets by finishing the chapters.', shareBtn: 'Share the fridge', shareGo: 'Share or save the image', shareLine1: (n, t) => `I’ve won ${n} of ${t} magnets!`, shareLine2: 'Learning Bulgarian through play', shareAlt: n => `My fridge with ${n} magnets`, shareNote: 'The image is created on your device, in “story” format for social media. It does not include your name.', shareSaved: 'Image saved', fridgeFull: 'The fridge is full! You’ve finished level A1.1: congratulations!',
    wordsTitle: 'Words', wordsNote: 'The red, underlined vowel is the stressed one. Normal Bulgarian texts don’t mark it.',
    review: 'Bulgarian texts under review: to be checked by a native speaker.', reviewAi: 'Bulgarian texts checked with AI, awaiting confirmation by a native speaker.',
    sHelpLang: 'Help language', sName: 'Your name', sGuide: 'Your guide', sTranslit: 'Transliteration (Latin letters under Cyrillic)',
    sVoice: 'Bulgarian voice', sVoicePick: 'Choose the voice', sRate: 'Speed', sTest: 'Test the voice', diag: 'Voice diagnostics', diagNote: 'Tap one button at a time, then copy the text that appears and send it to the game developer.', diagLang: 'Bulgarian language only', diagFile: 'Recorded sentence', sClips: 'Use the recorded male voice (Dimitar) instead of the device voice', sClipsNote: n => `${n} sentences recorded with a free male voice (Dimitar, Piper): on iPhone with Safari they play even in silent mode. If the device has no Bulgarian voice, the game uses them automatically.`, sSounds: 'Sounds', sVibrate: 'Vibration', sVibrateNo: 'Vibration not available on this device',
    sForms: 'Modern Bulgarian letter shapes', sFormsNote: 'Many Bulgarian books and brands use these shapes; signs often don’t. The classic shapes are easier at first.',
    sDisplay: 'Reading and sounds', sMusic: 'Music', aPanel: 'Audio', aAll: 'Game audio', aFx: 'Sound effects', aVoice: 'Bulgarian voice', aStyle: 'Music style', aAuto: 'Automatic: changes with the setting', themeNames: { road: 'The road (menu and journey)', city: 'The city (ch. 1–3)', home: 'Home (ch. 4, 5, 7)', market: 'The market (ch. 6, 8)', feast: 'The feast (ch. 9, 10)' }, sMusicOn: 'Background music', sMusicCalm: 'Relaxed music during exercises (slower, no drum)', sMusicVol: 'Music volume', sMusicNote: 'An original tune in traditional Bulgarian style (ръченица in 7/8, гайда, кавал and тъпан), made for this game and played by the browser: no third-party copyright.', sAuto: 'Auto-advance after a correct answer (10 seconds)', autoIn: 'Next in', autoSr: 'The next activity starts by itself in 10 seconds. You can pause or press Continue.', autoPause: 'Pause', autoPlay: 'Resume the countdown', sA11y: 'Accessibility', sSr: 'Screen reader mode', sSrNote: 'Manual advance only, no countdown, no automatic music or animations; focus moves to the result of each answer.', sContrast: 'High contrast', sTargets: 'Larger buttons', sLefty: 'Controls on the left (left-handed)', sBig: 'Larger text', sMotion: 'Reduce animations', sData: 'Your data', sDataNote: 'Your journey is saved in this browser only. No data is sent anywhere.',
    sReset: 'Delete progress', sResetQ: 'Do you really want to delete your name and progress from this device?', sSave: 'Save', saved: 'Saved',
    tipsTitle: 'Three useful buttons', tips: ['🔊 listen to the sentence in Bulgarian (if your device has the voice).', 'Aa shows or hides Latin letters under the Cyrillic.', '💡 reopens your guide’s explanation.'],
    close: 'Close', phase: 'Phase', menu: 'Main menu'
  }
};

// ───────── Salvataggio locale ─────────
const KEY = 'zdravey.v1';
const DEFAULTS = {
  lang: null, name: '', nameBg: '', guide: null, translit: true, showTr: true,
  autoAdvance: true, audioOn: true, music: true, musicVol: 5, musicCalm: true, musicStyle: 'auto', sfxVol: 65, voiceVol: 100, voiceOn: true, useClips: false, voiceURI: '', rate: 0.9, sounds: true, vibrate: true, bigText: false, reduceMotion: false,
  bgForms: false, tipsSeen: false, progress: {}, magnets: []
};
function loadState() {
  try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; }
  catch { return { ...DEFAULTS }; }
}
let S = loadState();
// Versione 2: lettere latine e traduzioni visibili di default (richiesta di Mario).
if ((S.prefsV || 1) < 2) { S.translit = true; S.showTr = true; S.prefsV = 2; save(); }
// Versione 3: voce del dispositivo per tutte le frasi; Dimitar solo se scelto o come riserva.
if (S.prefsV < 3) { S.useClips = false; S.prefsV = 3; save(); }
// Versione 4: la musica parte al 5% (come nell'altra app); chi aveva scelto un volume lo mantiene.
if (S.prefsV < 4) { if (S.musicVol === 20 || S.musicVol == null) S.musicVol = 5; S.prefsV = 4; save(); }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch { /* memoria non disponibile: si gioca lo stesso */ } }

// ───────── Utilità ─────────
const $ = (sel, root = document) => root.querySelector(sel);
const app = $('#app');
const L = () => S.lang || 'it';
const T = key => UI[L()][key];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const nameBg = () => S.nameBg || 'Алекс';
const guideKey = () => (guides[S.guide] ? S.guide : 'pencho');
const fillName = s => s.replaceAll('{name}', nameBg());
const help = o => (typeof o === 'string' ? o : o[L()]);
const shuffle = arr => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const prefersReduced = () => S.reduceMotion || matchMedia('(prefers-reduced-motion: reduce)').matches;

// Testo bulgaro: span lang="bg" + traslitterazione (visibile solo se attiva).
function bg(text, cls = '') {
  const s = fillName(text);
  return `<span class="bg ${cls}" lang="bg">${esc(s)}</span><span class="tl" aria-hidden="true">${esc(toLatin(s))}</span>`;
}
// Testo di aiuto con [[bulgaro]] incorporato.
function rich(o) {
  const s = fillName(help(o));
  return esc(s).replace(/\[\[(.+?)\]\]/g, (_, b) => `<span class="bg" lang="bg">${b}</span><span class="tl inline" aria-hidden="true">(${esc(toLatin(b.replace(/&#39;/g, "'")))})</span>`);
}
// Personaggi femminili: per loro si preferisce la voce femminile del dispositivo (le frasi registrate sono maschili).
const FEMALE = new Set(['mila', 'desi', 'ruzha', 'vendor']);
const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
function speakBtn(text, who = '') {
  return `<button class="icon-btn speak" data-say="${esc(fillName(text))}" data-who="${who}" aria-label="${T('listen')}" title="${T('listen')}">🔊</button>`;
}

// ───────── Suoni, vibrazione, coriandoli ─────────
let actx;
function tone(freqs, dur = 0.12, type = 'sine', gap = 0.09) {
  if (!S.audioOn || !S.sounds) return;
  const peak = 0.18 * (S.sfxVol ?? 65) / 100;
  if (peak <= 0.0002) return;
  try {
    actx ||= new (window.AudioContext || window.webkitAudioContext)();
    window.__sfxCtx = actx;
    freqs.forEach((f, i) => {
      const o = actx.createOscillator(), g = actx.createGain(), t0 = actx.currentTime + i * gap;
      o.type = type; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(peak, t0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.connect(g).connect(actx.destination); o.start(t0); o.stop(t0 + dur + 0.02);
    });
  } catch { /* audio non disponibile */ }
}
const sfx = {
  ok() { tone([660, 880]); if (S.vibrate) navigator.vibrate?.(35); confetti(); },
  no() { tone([220], 0.18, 'triangle'); if (S.vibrate) navigator.vibrate?.([20, 40, 20]); },
  tap() { tone([520], 0.05); },
  magnet() { tone([523, 659, 784, 1047], 0.2, 'sine', 0.12); if (S.vibrate) navigator.vibrate?.([40, 60, 80]); confetti(40); }
};
function confetti(n = 22) {
  if (prefersReduced()) return;
  const box = document.createElement('div'); box.className = 'confetti'; box.setAttribute('aria-hidden', 'true');
  for (let i = 0; i < n; i++) {
    const p = document.createElement('i');
    p.style.left = 50 + (Math.random() * 60 - 30) + '%';
    p.style.setProperty('--dx', (Math.random() * 300 - 150) + 'px');
    p.style.setProperty('--dy', (Math.random() * -260 - 80) + 'px');
    p.style.background = i % 2 ? '#c8102e' : '#ffffff';
    p.style.animationDelay = Math.random() * 0.1 + 's';
    box.appendChild(p);
  }
  document.body.appendChild(box); setTimeout(() => box.remove(), 1400);
}

// ───────── Voce ─────────
document.addEventListener('click', e => {
  const b = e.target.closest('[data-say]');
  if (!b) return;
  if (!S.audioOn || !S.voiceOn) { toast(T('voiceOff')); return; }
  if (!voice.hasSpeech()) { toast(T('noVoice')); return; }
  b.classList.add('speaking');
  let started = false;
  if (isIOS && !S.iosSilentTold) { S.iosSilentTold = true; save(); toast(T('iosSilent')); }
  voice.speak(b.dataset.say, { female: FEMALE.has(b.dataset.who), voiceURI: S.voiceURI, rate: S.rate, volume: S.voiceVol / 100, onstart: () => { started = true; }, onend: () => b.classList.remove('speaking') });
  setTimeout(() => { if (!started) { b.classList.remove('speaking'); toast(T('noVoiceHelp')); } }, 2500);
});
let toastTimer;
function toast(msg) {
  let el = $('#toast'); el.textContent = msg; el.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.hidden = true; }, 3500);
}

const reviewText = () => T(REVIEW_STATUS === 'ai-checked' ? 'reviewAi' : 'review');

// ───────── Struttura generale ─────────
let view = 'journey';
function applyPrefs() {
  voice.setUseClips(S.useClips !== false);
  document.documentElement.lang = L();
  document.title = 'Здравей! – ' + T('subtitle');
  document.body.classList.toggle('translit', S.translit);
  document.body.classList.toggle('big', S.bigText);
  document.body.classList.toggle('bgforms', S.bgForms);
  document.body.classList.toggle('calm', prefersReduced() || S.screenReader);
  document.body.classList.toggle('contrast', !!S.contrast);
  document.body.classList.toggle('bigtargets', !!S.bigTargets);
  document.body.classList.toggle('lefty', !!S.leftHanded);
  document.body.classList.toggle('sr', !!S.screenReader);
  const tb = $('#translit-btn'); tb.setAttribute('aria-pressed', S.translit); tb.title = T('sTranslit'); tb.setAttribute('aria-label', T('sTranslit'));
  $('#settings-btn').setAttribute('aria-label', T('settings'));
  const mb = $('#music-btn'); mb.setAttribute('aria-label', T('aPanel')); mb.title = T('aPanel');
  mb.querySelector('span').textContent = S.audioOn ? '♫' : '🔇'; mb.classList.toggle('muted', !S.audioOn);
  $('#brand-sub').textContent = T('subtitle');
  $('#review-note').textContent = '⚠ ' + reviewText();
  $('#review-note').hidden = REVIEW_STATUS === 'native-approved';
  const nav = $('#nav'); nav.setAttribute('aria-label', T('menu'));
  nav.querySelectorAll('button').forEach(b => {
    b.querySelector('span').textContent = T(b.dataset.view);
    b.setAttribute('aria-current', b.dataset.view === view ? 'page' : 'false');
  });
  // ♫ e ⚙ ci sono sempre, anche nel benvenuto; la barra in basso solo dopo la scelta della guida.
  $('#topbar').hidden = false;
  $('#nav').hidden = !S.lang || !S.guide;
  // Firma: nelle schermate iniziali, nel viaggio e nelle impostazioni (e nell'immagine da condividere).
  const cp = $('#copyright'); cp.textContent = COPYRIGHT; cp.hidden = !(onboarding() || view === 'journey' || view === 'settings');
}

$('#translit-btn').addEventListener('click', () => { S.translit = !S.translit; save(); applyPrefs(); });
$('#settings-btn').addEventListener('click', () => go('settings'));
$('#music-btn').addEventListener('click', openAudioPanel);
function syncMusic() {
  music.setVolume(S.musicVol / 100);
  if (S.audioOn && S.music && !document.hidden) music.start(); else music.stop();
}
const onboarding = () => !S.lang || !S.guide;
// Tema musicale: automatico per ambiente oppure quello scelto nel pannello audio.
function syncTheme() {
  const auto = music.themeFor(onboarding() ? 'welcome' : view, current.ch);
  music.setTheme(S.musicStyle && S.musicStyle !== 'auto' ? S.musicStyle : auto, view === 'chapter' && !onboarding() && S.musicCalm !== false);
}
voice.setSpeakHooks({
  start: () => { music.duck(true); if (auto) auto.held = true; },
  end: () => { music.duck(false); if (auto) auto.held = false; }
});
// Il browser permette l'audio solo dopo un gesto: la musica parte al primo tocco.
document.addEventListener('pointerdown', () => { if (!S.screenReader) syncMusic(); }, { once: true });
document.addEventListener('keydown', () => { if (!S.screenReader) syncMusic(); }, { once: true });
$('#nav').addEventListener('click', e => { const b = e.target.closest('button[data-view]'); if (b) go(b.dataset.view); });

function go(v) {
  if (view === 'chapter' && v !== 'chapter') parkChapter();
  stopAuto();
  voice.stop();
  view = v; applyPrefs();
  // Ogni ambiente ha il suo tema; dentro i capitoli la musica è «ambient» per concentrarsi.
  syncTheme();
  const restored = v === 'chapter' && restoreChapter();
  if (!restored) ({ journey: renderJourney, fridge: renderFridge, words: renderWords, settings: renderSettings, chapter: renderStep, placement: renderPlacement })[v]();
  if (v !== 'chapter') addBackToGame();
  if (v === 'journey' && !S.tourSeen) setTimeout(runTour, 250);
  window.scrollTo(0, restored ? restored.scroll : 0);
  const target = restored?.focus?.isConnected ? restored.focus : $('h1, h2', app);
  if (target) { if (!restored?.focus) target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
}

// ───────── Non perdere il punto ─────────
// Uscendo da un esercizio verso viaggio, frigo, parole o impostazioni, la pagina dell'esercizio viene «parcheggiata»
// così com'è (risposte parziali, riscontro, pulsanti) e rimessa al suo posto al ritorno.
let parked = null;
function parkChapter() {
  // si parcheggia solo un esercizio in corso, non le schermate finali
  const steps = session ? session.steps : chapterData[current.ch] ? stepsFor(current.ch) : [];
  const st = steps[current.step];
  if (!st || st.type === 'end' || st.type === 'reward') { parked = null; return; }
  const focus = app.contains(document.activeElement) ? document.activeElement : null;
  const frag = document.createDocumentFragment();
  while (app.firstChild) frag.appendChild(app.firstChild);
  parked = { ch: current.ch, step: current.step, lang: S.lang, frag, focus, scroll: window.scrollY, autoLeft: auto ? auto.left : null };
}
function restoreChapter() {
  const p = parked;
  if (!p || p.ch !== current.ch || p.step !== current.step || p.lang !== S.lang) { parked = null; return null; }
  parked = null;
  app.replaceChildren(p.frag);
  const el = $('.feedback .auto', app);
  if (el && p.autoLeft != null) startAuto(el, p.autoLeft, false); // il conto alla rovescia aspetta in pausa
  return p;
}
function addBackToGame() {
  if (!parked) return;
  const b = document.createElement('button');
  b.className = 'btn back-to-game';
  b.textContent = '↩ ' + T('backToGame');
  b.addEventListener('click', () => { current = { ch: parked.ch, step: parked.step }; go('chapter'); });
  app.prepend(b);
}

// ───────── Benvenuto ─────────
let welcomeStep = 0;
function renderWelcome(stepN = 0) {
  welcomeStep = stepN;
  applyPrefs();
  if (stepN === 0) {
    app.innerHTML = `
      <section class="welcome card">
        <div class="hero-avatar">${avatars.mila}</div>
        <h1 class="logo"><span lang="bg">Здравей!</span></h1>
        <p class="logo-sub"><span lang="it">La sfida della <span lang="bg">Мартеница</span></span> · <span lang="en">The Martenitsa Challenge</span></p>
        <h2 class="q">In che lingua vuoi gli aiuti? <span class="muted" lang="en">Which language do you want for help?</span></h2>
        <div class="lang-choice">
          <button class="big-btn" data-lang="it"><span class="flag" aria-hidden="true">🇮🇹</span> Italiano</button>
          <button class="big-btn" data-lang="en"><span class="flag" aria-hidden="true">🇬🇧</span> English</button>
        </div>
      </section>`;
    app.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => { S.lang = b.dataset.lang; save(); renderWelcome(1); }));
  } else if (stepN === 1) {
    app.innerHTML = `
      <section class="welcome card">
        <h1>${T('nameQ')}</h1>
        <label class="field"><span>${T('namePh')}</span>
          <input id="name-in" autocomplete="given-name" maxlength="24" value="${esc(S.name)}"></label>
        <label class="field"><span>${T('nameBg')}</span>
          <input id="namebg-in" lang="bg" class="bg-input" maxlength="24" autocomplete="off" spellcheck="false" value="${esc(S.nameBg)}"></label>
        <p class="muted small">${T('nameBgHint')}</p>
        <button class="link-btn kb-toggle" aria-expanded="false">⌨ ${T('keyboard')}</button>
        <div class="kb-slot"></div>
        <p class="note">🔒 ${T('localNote')}</p>
        <div class="row">
          <button class="btn ghost" id="b-back">${T('back')}</button>
          <button class="btn" id="b-next">${T('next')}</button>
        </div>
      </section>`;
    const nameIn = $('#name-in'), bgIn = $('#namebg-in');
    let touched = !!S.nameBg && S.nameBg !== toCyrillic(S.name, L());
    nameIn.addEventListener('input', () => { if (!touched) bgIn.value = toCyrillic(nameIn.value.trim(), L()); });
    bgIn.addEventListener('input', () => { touched = true; });
    attachKeyboard($('.kb-toggle'), $('.kb-slot'), bgIn, () => { touched = true; });
    $('#b-back').addEventListener('click', () => renderWelcome(0));
    $('#b-next').addEventListener('click', () => {
      S.name = nameIn.value.trim(); S.nameBg = bgIn.value.trim() || toCyrillic(S.name, L()); save(); renderWelcome(2);
    });
    nameIn.focus();
  } else {
    app.innerHTML = `
      <section class="welcome card">
        <h1>${T('chooseGuide')}</h1>
        <p class="muted">${T('guideNote')}</p>
        <div class="guides" role="radiogroup" aria-label="${T('chooseGuide')}">
          ${Object.entries(guides).map(([k, g]) => `
            <button class="guide-card" role="radio" aria-checked="${S.guide === k}" data-guide="${k}">
              <span class="avatar">${avatars[k]}</span>
              <span class="g-name">${bg(g.bgName)} <span class="muted">· ${g[L()].role}</span></span>
              <span class="g-hello">${esc(g[L()].hello)}</span>
            </button>`).join('')}
        </div>
        <div class="row">
          <button class="btn ghost" id="b-back">${T('back')}</button>
          <button class="btn" id="b-start" ${S.guide ? '' : 'disabled'}>${T('start')}</button>
        </div>
      </section>`;
    app.querySelectorAll('[data-guide]').forEach(b => b.addEventListener('click', () => {
      S.guide = b.dataset.guide; save(); sfx.tap();
      app.querySelectorAll('[data-guide]').forEach(x => x.setAttribute('aria-checked', x === b));
      $('#b-start').disabled = false;
    }));
    $('#b-back').addEventListener('click', () => renderWelcome(1));
    $('#b-start').addEventListener('click', () => go('journey')); // il viaggio parte con il tutorial guidato
  }
  const h = $('h1', app); h?.setAttribute('tabindex', '-1');
}

// ───────── Tastiera cirillica sullo schermo ─────────
// Tastiera fonetica bulgara (stile QWERTY, «tradizionale»): ogni lettera sta sul tasto latino che le somiglia.
const KB_ROWS = [
  [['q', 'я'], ['w', 'в'], ['e', 'е'], ['r', 'р'], ['t', 'т'], ['y', 'ъ'], ['u', 'у'], ['i', 'и'], ['o', 'о'], ['p', 'п']],
  [['a', 'а'], ['s', 'с'], ['d', 'д'], ['f', 'ф'], ['g', 'г'], ['h', 'х'], ['j', 'й'], ['k', 'к'], ['l', 'л'], ['[', 'ш']],
  [['z', 'з'], ['x', 'ь'], ['c', 'ц'], ['v', 'ж'], ['b', 'б'], ['n', 'н'], ['m', 'м'], ['`', 'ч'], [']', 'щ'], ['\\', 'ю']]
];
const PHONETIC = Object.fromEntries(KB_ROWS.flat());
function attachKeyboard(toggle, slot, input, onType) {
  let upper = true;
  const draw = () => {
    slot.innerHTML = `<div class="kb" role="group" aria-label="${T('keyboard')}">
      ${KB_ROWS.map(r => `<div class="kb-row">${r.map(([lat, ch]) => { const c = upper ? ch.toUpperCase() : ch; return `<button type="button" class="key" data-k="${c}"><span lang="bg">${c}</span><small aria-hidden="true">${esc(lat)}</small></button>`; }).join('')}</div>`).join('')}
      <div class="kb-row">
        <button type="button" class="key wide" data-act="case" aria-label="${upper ? 'абв' : 'АБВ'}">⇧</button>
        ${['!', '?', ',', '.'].map(p => `<button type="button" class="key" data-k="${p}">${p}</button>`).join('')}
        <button type="button" class="key wider" data-k=" " aria-label="␣">␣</button>
        <button type="button" class="key wide" data-act="del" aria-label="⌫">⌫</button>
      </div></div>`;
    slot.querySelector('[data-act="case"]').setAttribute('aria-pressed', upper);
  };
  const insert = k => {
    const start = input.selectionStart ?? input.value.length, end = input.selectionEnd ?? input.value.length;
    input.value = input.value.slice(0, start) + k + input.value.slice(end); input.setSelectionRange(start + k.length, start + k.length);
    onType?.(); input.dispatchEvent(new Event('input'));
  };
  slot.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.act === 'case') { upper = !upper; draw(); return; }
    if (b.dataset.act === 'del') {
      const start = input.selectionStart ?? input.value.length, end = input.selectionEnd ?? input.value.length;
      const from = start === end ? Math.max(0, start - 1) : start;
      input.value = input.value.slice(0, from) + input.value.slice(end); input.setSelectionRange(from, from);
      onType?.(); input.dispatchEvent(new Event('input'));
    } else {
      insert(b.dataset.k);
      if (upper && /[А-Я]/.test(b.dataset.k)) { upper = false; draw(); }
    }
    sfx.tap();
  });
  // Con la tastiera aperta, anche la tastiera vera del computer scrive in cirillico fonetico.
  input.addEventListener('keydown', e => {
    if (toggle.getAttribute('aria-expanded') !== 'true' || e.ctrlKey || e.metaKey || e.altKey) return;
    const ch = PHONETIC[e.key.toLowerCase()] ?? (e.key === '~' ? 'ч' : e.key === '{' ? 'ш' : e.key === '}' ? 'щ' : e.key === '|' ? 'ю' : undefined);
    if (!ch) return;
    e.preventDefault();
    const shifted = e.key !== e.key.toLowerCase() || '~{}|'.includes(e.key);
    insert(shifted ? ch.toUpperCase() : ch);
    if (upper) { upper = false; draw(); }
  });
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', open);
    if (open) { upper = !input.value; draw(); } else slot.innerHTML = '';
  });
}

// ───────── Barra in basso che si ritira (solo telefono) ─────────
// Scorrendo verso il basso si nasconde, scorrendo verso l'alto torna; in fondo alla pagina si vede sempre tutta.
{
  let lastY = window.scrollY;
  const narrow = matchMedia('(max-width: 719px)');
  window.addEventListener('scroll', () => {
    const nav = $('#nav'), y = window.scrollY;
    const atBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 4;
    if (!narrow.matches || S.screenReader || tourOpen() || atBottom || y < 60) nav.classList.remove('away');
    else if (y > lastY + 6) nav.classList.add('away');
    else if (y < lastY - 6) nav.classList.remove('away');
    lastY = y;
  }, { passive: true });
}

// ───────── Tutorial guidato ─────────
function runTour() {
  if (tourOpen() || view !== 'journey') return;
  $('#nav').classList.remove('away'); // la barra in basso deve vedersi durante il tutorial
  const g = guides[guideKey()];
  const steps = [
    { target: null, html: `<div class="tour-hero">${avatars[guideKey()]}</div><h2>${bg('Добре дошли!')}</h2><p>${T('tour1')(g[L()].role)}</p>` },
    { target: '.challenge', html: `<h2>${T('journey')}</h2><p>${T('tour2')}</p>` },
    { target: '.chapter:first-child .btn', html: `<p>${T('tour3')}</p>` },
    { target: '#nav [data-view="fridge"]', html: `<p>${T('tour4')}</p>` },
    { target: '#nav [data-view="words"]', html: `<p>${T('tour5')}</p>` },
    { target: '#music-btn', html: `<p>${T('tour6')}</p>` },
    { target: '#translit-btn', html: `<p>${T('tour7')}</p>` },
    { target: '#settings-btn', html: `<p>${T('tour8')}</p>` },
    { target: '.chapter:first-child .btn', html: `<p>${T('tour9')}</p>` }
  ];
  startTour(steps, { title: T('tourTitle'), skip: T('tourSkip'), back: T('back'), next: T('next'), done: T('tourDone') }, () => { S.tourSeen = true; save(); });
}

// ───────── Viaggio ─────────
function chapterProgress(id) { return S.progress[id] || { step: 0, done: 0, completed: false }; }
function renderJourney() {
  const won = S.magnets.length;
  app.innerHTML = `
    <section class="journey">
      <div class="challenge card">
        <div class="avatar sm">${avatars.mila}</div>
        <div><h1>${T('journey')}</h1><p>${T('challenge')(won, chapters.length)}</p>
          <div class="meter" role="img" aria-label="${won}/${chapters.length}"><i style="width:${won / chapters.length * 100}%"></i></div></div>
      </div>
      ${todayCard()}
      ${!S.placementDone && !S.placementNo && !Object.keys(S.progress).length ? `<div class="card pl-offer"><p>🧭 ${T('plOffer')}</p><div class="row"><button class="btn ghost" id="pl-no">${T('plNo')}</button><button class="btn" id="pl-yes">${T('plYes')}</button></div></div>` : ''}
      <ol class="chapters">
        ${chapters.map(c => {
          const p = chapterProgress(c.id), ready = !!chapterData[c.id];
          const label = !ready ? T('soon') : p.completed ? T('replay') : p.step > 0 ? T('resume') : T('play');
          return `<li class="chapter ${ready ? '' : 'locked'} ${p.completed ? 'completed' : ''}">
            <span class="ch-num" aria-hidden="true">${c.id}</span>
            <span class="ch-text"><span class="ch-bg">${bg(c.bg)}</span><span class="ch-help">${esc(c[L()])}</span>
              ${ready && !p.completed && p.step > 0 ? `<span class="small muted">${T('activity')} ${Math.min(p.done + 1, 15)} ${T('of')} 15</span>` : ''}
              ${p.completed ? `<span class="small ok">✓ ${T('done')}${(S.gold || []).includes(c.magnet) ? ' · 🥇' : ''}</span>` : ''}
              ${p.completed && !(S.gold || []).includes(c.magnet) ? `<button class="link-btn small gold-link" data-mastery="${c.id}">🥇 ${T('goldTry')}</button>` : ''}</span>
            <button class="btn ${ready ? '' : 'ghost'}" ${ready ? `data-open="${c.id}"` : 'disabled'}>${label}</button>
          </li>`;
        }).join('')}
      </ol>
    </section>`;
  app.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => openChapter(+b.dataset.open)));
  $('#pl-yes')?.addEventListener('click', () => { pq = { i: 0, answers: [] }; go('placement'); });
  bindToday();
  app.querySelectorAll('[data-mastery]').forEach(b => b.addEventListener('click', () => startMastery(+b.dataset.mastery)));
  $('#pl-no')?.addEventListener('click', () => { S.placementNo = true; save(); go('journey'); });
}

// ───────── Test di orientamento ─────────
let pq = { i: 0, answers: [] };
function renderPlacement() {
  const n = placement.length;
  if (pq.i >= n) {
    S.placementDone = true; save();
    const ch = suggestChapter(pq.answers), c = chapters.find(x => x.id === ch);
    app.innerHTML = `<section class="card placement">
      <h1>🧭 ${T('plTitle')}</h1>
      <p class="pl-result">${ch ? `${T('plResult')(ch, c[L()])}` + `<br>${bg(c.bg)}` : T('plAll')}</p>
      <p class="muted small">${T('plNote')}</p>
      <div class="row">${ch ? `<button class="btn" id="pl-go">${T('plGo')(ch)}</button>` : ''}<button class="btn ghost" id="pl-back">${T('toJourney')}</button></div>
    </section>`;
    $('#pl-go')?.addEventListener('click', () => openChapter(ch));
    $('#pl-back').addEventListener('click', () => go('journey'));
    return;
  }
  const q = placement[pq.i];
  const order = shuffle(q.options.map((_, k) => k));
  app.innerHTML = `<section class="card placement act no-tl">
    <p class="phase-tag p0">🧭 ${T('plQ')(pq.i + 1, n)}</p>
    <h2 class="prompt">${rich(q.prompt)}</h2>
    <div class="options">${order.map(k => `<div class="opt-wrap"><button class="opt" data-k="${k}">${q.latin ? `<span>${esc(q.options[k])}</span>` : typeof q.options[k] === 'string' ? bg(q.options[k]) : `<span>${esc(help(q.options[k]))}</span>`}</button></div>`).join('')}
      <div class="opt-wrap"><button class="opt dont-know" data-k="-1"><span>🤷 ${T('plDontKnow')}</span></button></div></div>
    <p class="muted small">${T('plNote')}</p>
  </section>`;
  app.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => { pq.answers[pq.i] = +b.dataset.k; pq.i++; sfx.tap(); go('placement'); }));
}

// ───────── Frigo ─────────
function renderFridge() {
  app.innerHTML = `
    <section>
      <h1>${T('fridgeTitle')}</h1>
      <div class="fridge" role="list">
        <div class="fridge-handle" aria-hidden="true"></div>
        <div class="fridge-handle low" aria-hidden="true"></div>
        ${chapters.map(c => {
          const won = S.magnets.includes(c.magnet);
          return won
            ? `<button role="listitem" class="magnet won ${(S.gold || []).includes(c.magnet) ? 'gold' : ''}" data-open="${c.id}" aria-label="${esc(c.bg)} – ${esc(c[L()])}">${magnets[c.magnet]}</button>`
            : `<div role="listitem" class="magnet" aria-label="${c.id}: ${T('soon')}">${lockedMagnet(c.id)}</div>`;
        }).join('')}
      </div>
      <p class="muted center">${S.magnets.length >= chapters.length ? T('fridgeFull') : T('fridgeEmpty')}</p>
      ${S.tassels ? `<p class="center tassels">🧶 ${T('tassels')(S.tassels)}</p>` : ''}
      <div class="row wrap center-row"><button class="btn ghost" id="review-btn">🔁 ${T('reviewTitle')}</button><button class="btn share-btn" id="share-fridge">📤 ${T('shareBtn')}</button></div>
      <h2 class="season-title">${T('seasonTitle')}</h2>
      <p class="muted small">${T('seasonNote')(habit.monthProgress(S), habit.MONTH_TARGET, habit.SEASONAL[new Date().getMonth()][L()])}</p>
      <div class="season-row" role="list">${habit.SEASONAL.map((m, k) => {
        const won = (S.seasonal || []).some(x => +x.slice(5, 7) === k + 1);
        return `<div role="listitem" class="magnet small-mag ${won ? 'won' : 'locked-s'}" aria-label="${esc(m.bg)} – ${esc(m[L()])}${won ? '' : ' (' + T('soon') + ')'}" title="${esc(m.bg)} – ${esc(m[L()])}">${seasonalMagnets[k]}</div>`;
      }).join('')}</div>
    </section>`;
  app.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => openChapter(+b.dataset.open)));
  $('#share-fridge').addEventListener('click', shareFridge);
  $('#review-btn').addEventListener('click', startReview);
}

// ───────── Condividi il frigo ─────────
async function shareFridge() {
  const btn = $('#share-fridge'); btn.disabled = true;
  try {
    const n = S.magnets.length;
    const blob = await fridgeImage(chapters, S.magnets, {
      subtitle: T('subtitle'), line1: T('shareLine1')(n, chapters.length), line2: T('shareLine2'),
      url: SITE, copyright: COPYRIGHT
    });
    const url = URL.createObjectURL(blob);
    openDialog(`<h2>📤 ${T('shareBtn')}</h2><img class="share-preview" src="${url}" alt="${esc(T('shareAlt')(n))}">
      <button class="btn" id="share-go">${T('shareGo')}</button><p class="muted small">${T('shareNote')}</p>`);
    $('#share-go').addEventListener('click', async () => {
      const r = await shareOrDownload(blob, 'zdravey-frigo.png', 'Здравей!', `${T('shareLine1')(n, chapters.length)} https://${SITE}/`);
      if (r === 'downloaded') toast('✓ ' + T('shareSaved'));
    });
  } finally { btn.disabled = false; }
}

// ───────── Parole ─────────
function renderWords() {
  app.innerHTML = `
    <section>
      <h1>${T('wordsTitle')}</h1>
      <p class="muted">${T('wordsNote')}</p>
      <ul class="words">
        ${wordsList()}
      </ul>
    </section>`;
}

// Indicatore discreto (3 tacche) di quanto una parola è «fresca» nella memoria.
function fresh(id) {
  if (!mem.WORDS.some(w => w.id === id)) return '';
  const f = mem.freshness(S.mem?.[id]);
  return `<span class="fresh f${f}" title="${T('freshT')[f]}" aria-label="${T('freshT')[f]}"><i></i><i></i><i></i></span>`;
}
// Scheda «oggi» nel viaggio: fili della Мартеница e obiettivi del giorno.
function todayCard() {
  if (!Object.keys(S.progress).length && !(S.days || []).length) return '';
  const st = habit.streak(S), goals = habit.goalProgress(S);
  return `<div class="card today">
    <div class="today-head"><p class="streak">🧵 ${T('streak')(st.count)}</p><button class="link-btn" id="cal-btn">📅 ${T('calendar')}</button></div>
    <ul class="goals">${goals.map(g => `<li class="${g.value >= g.target ? 'done' : ''}"><span>${g.value >= g.target ? '✓' : '○'} ${T('goal_' + g.id)}</span><span class="g-bar" aria-hidden="true"><i style="width:${g.value / g.target * 100}%"></i></span><span class="g-num">${g.value}/${g.target}</span></li>`).join('')}</ul>
    <button class="btn ghost small" id="review-btn2">🔁 ${T('reviewTitle')}</button>
  </div>`;
}
function bindToday() {
  $('#review-btn2')?.addEventListener('click', startReview);
  $('#cal-btn')?.addEventListener('click', () => {
    const cal = habit.monthCalendar(S), st = habit.streak(S);
    const names = L() === 'it' ? ['L', 'M', 'M', 'G', 'V', 'S', 'D'] : ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const month = new Date(cal.year, cal.month, 1).toLocaleDateString(L() === 'it' ? 'it-IT' : 'en-GB', { month: 'long', year: 'numeric' });
    openDialog(`<h2>🧵 ${T('streak')(st.count)}</h2><p class="muted small">${T('calNote')(habit.REST_PER_MONTH)}</p>
      <p class="cal-month">${month}</p>
      <div class="cal">${names.map(n => `<b>${n}</b>`).join('')}${'<span></span>'.repeat(cal.offset)}${cal.cells.map(c => `<span class="${c.state} ${c.today ? 'today' : ''}" title="${c.key}">${c.d}</span>`).join('')}</div>
      <p class="small"><span class="cal-key active"></span> ${T('calActive')} <span class="cal-key rest"></span> ${T('calRest')}</p>
      <p class="muted small">${T('milestones')}</p>`);
  });
}

function wordsList() {
  const last = S.lastCh || 1;
  return chapters.filter(c => chapterData[c.id]).map(c => `
    <details class="w-chapter" ${c.id === last ? 'open' : ''}><summary>${c.id}. ${bg(c.bg)} <span class="muted">· ${esc(c[L()])}</span></summary>
      <ul class="words">
        ${chapterData[c.id].words.map(([w, tl, m], i) => `<li>${speakBtn(w.replace(/\u0301/g, ''))}${fresh(`${c.id}-${i}`)}<span class="w-bg" lang="bg">${esc(w).replace(/(.)\u0301/g, '<span class="stress">$1</span>')}</span><span class="w-tl">${esc(tl)}</span><span class="w-help">${esc(help(m))}</span></li>`).join('')}
      </ul>
    </details>`).join('');
}

// ───────── Impostazioni ─────────
function renderSettings() {
  const vibOk = 'vibrate' in navigator;
  const vs = voice.bulgarianVoices();
  app.innerHTML = `
    <section class="settings">
      ${onboarding() ? `<button class="btn ghost small" id="s-back-welcome">← ${T('back')}</button>` : ''}
      <h1>${T('settings')}</h1>
      <fieldset><legend>${T('sHelpLang')}</legend>
        <div class="seg">${['it', 'en'].map(l => `<button data-setlang="${l}" aria-pressed="${S.lang === l}">${l === 'it' ? '🇮🇹 Italiano' : '🇬🇧 English'}</button>`).join('')}</div>
      </fieldset>
      <fieldset><legend>${T('sName')}</legend>
        <label class="field"><span>${T('namePh')}</span><input id="s-name" maxlength="24" value="${esc(S.name)}"></label>
        <label class="field"><span>${T('nameBg')}</span><input id="s-namebg" lang="bg" class="bg-input" maxlength="24" spellcheck="false" value="${esc(S.nameBg)}"></label>
        <button class="link-btn kb-toggle" aria-expanded="false">⌨ ${T('keyboard')}</button><div class="kb-slot"></div>
        <button class="btn small" id="s-savename">${T('sSave')}</button>
      </fieldset>
      <fieldset><legend>${T('sGuide')}</legend>
        <div class="seg">${Object.entries(guides).map(([k, g]) => `<button data-setguide="${k}" aria-pressed="${S.guide === k}"><span class="avatar xs">${avatars[k]}</span><span lang="bg">${g.bgName}</span></button>`).join('')}</div>
      </fieldset>
      <fieldset><legend>${T('aPanel')}</legend>
        <div class="audio-panel">${audioPanelHTML()}</div>
      </fieldset>
      <fieldset><legend>${T('sVoice')}</legend>
        ${toggle('useClips', T('sClips'))}
        <p class="muted small">${T('sClipsNote')(voice.clipCount())}</p>
        ${isIOS ? `<p class="note small">📱 ${T('iosSilent')}</p>` : ''}
        ${vs.length ? `<label class="field"><span>${T('sVoicePick')}</span><select id="s-voice">${vs.map(v => `<option value="${esc(v.voiceURI)}" ${v.voiceURI === S.voiceURI ? 'selected' : ''}>${esc(v.name)}</option>`).join('')}</select></label>` : `<p class="note">${T('noVoiceHelp')}</p>`}
        <p class="muted small">${T('voicesFound')}: ${vs.length ? vs.map(v => esc(v.name)).join(', ') : '0'} (${voice.allVoicesCount()})</p>
        <label class="field"><span>${T('sRate')}: <output id="rate-out">${Math.round(S.rate * 100)}%</output></span><input type="range" id="s-rate" min="0.6" max="1.2" step="0.05" value="${S.rate}"></label>
        <button class="btn small ghost" data-say="Здравей! Казвам се Мила." data-who="mila" ${voice.hasSpeech() ? '' : 'disabled'}>🔊 ${T('sTest')}</button>
        <details class="diag"><summary>🔧 ${T('diag')}</summary>
          <p class="muted small">${T('diagNote')}</p>
          <div class="row wrap">
            ${vs.map((v, i) => `<button class="btn small ghost" data-diag="voice:${i}">${esc(v.name)} ${i + 1}</button>`).join('')}
            <button class="btn small ghost" data-diag="lang">${T('diagLang')}</button>
            <button class="btn small ghost" data-diag="en">English</button>
            <button class="btn small ghost" data-diag="file">${T('diagFile')}</button>
          </div>
          <pre id="diag-log" class="diag-log" aria-live="polite"></pre>
        </details>
      </fieldset>
      <fieldset><legend>${T('sDisplay')}</legend>
        ${toggle('translit', T('sTranslit'))}
        ${toggle('showTr', T('showTrLabel'))}
        ${toggle('bgForms', T('sForms'))}
        <p class="muted small forms-demo"><span lang="bg">д л и т</span> → ${T('sFormsNote')}</p>
        ${vibOk ? toggle('vibrate', T('sVibrate')) : `<p class="muted small">${T('sVibrateNo')}</p>`}
        ${toggle('autoAdvance', T('sAuto'))}
        <button class="btn small ghost" id="s-tour">🔦 ${T('tourAgain')}</button>
        <button class="btn small ghost" id="s-placement">🧭 ${T('plTitle')}</button>
      </fieldset>
      <fieldset><legend>${T('sA11y')}</legend>
        ${toggle('screenReader', T('sSr'))}
        <p class="muted small">${T('sSrNote')}</p>
        ${toggle('bigText', T('sBig'))}
        ${toggle('contrast', T('sContrast'))}
        ${toggle('bigTargets', T('sTargets'))}
        ${toggle('leftHanded', T('sLefty'))}
        ${toggle('reduceMotion', T('sMotion'))}
      </fieldset>
      <fieldset><legend>${T('sData')}</legend>
        <p>🔒 ${T('sDataNote')}</p>
        <button class="btn small danger" id="s-reset">${T('sReset')}</button>
      </fieldset>
      ${REVIEW_STATUS === 'native-approved' ? '' : `<p class="muted small">⚠ ${reviewText()}</p>`}
    </section>`;
  app.querySelectorAll('[data-setlang]').forEach(b => b.addEventListener('click', () => { S.lang = b.dataset.setlang; save(); go('settings'); }));
  app.querySelectorAll('[data-setguide]').forEach(b => b.addEventListener('click', () => { S.guide = b.dataset.setguide; save(); go('settings'); }));
  app.querySelectorAll('[data-toggle]').forEach(c => { if (!c.closest('.audio-panel')) c.addEventListener('change', () => {
    S[c.dataset.toggle] = c.checked;
    // Modalità lettore di schermo: niente timer e niente musica che parte da sola (si riaccende dal pannello ♫).
    if (c.dataset.toggle === 'screenReader' && c.checked) { S.autoAdvance = false; S.music = false; syncMusic(); }
    save(); applyPrefs();
    if (c.dataset.toggle === 'screenReader') go('settings');
  }); });
  $('#s-voice')?.addEventListener('change', e => { S.voiceURI = e.target.value; save(); });
  const diagLog = $('#diag-log');
  const dlog = line => { diagLog.textContent += line + '\n'; };
  app.querySelectorAll('[data-diag]').forEach(b => b.addEventListener('click', () => {
    if (!diagLog.textContent) dlog(`${navigator.userAgent.replace(/^Mozilla\/5.0 /, '')}\nvoci totali: ${voice.allVoicesCount()}, bulgare: ${voice.bulgarianVoices().length}`);
    voice.diagnose(b.dataset.diag, dlog);
  }));
  bindAudioPanel(app.querySelector('.audio-panel'));
  $('#s-tour')?.addEventListener('click', () => { S.tourSeen = false; save(); go('journey'); });
  $('#s-placement')?.addEventListener('click', () => { pq = { i: 0, answers: [] }; go('placement'); });
  $('#s-back-welcome')?.addEventListener('click', () => { view = 'journey'; renderWelcome(welcomeStep); });
  $('#s-rate').addEventListener('input', e => { S.rate = +e.target.value; $('#rate-out').textContent = Math.round(S.rate * 100) + '%'; save(); });
  attachKeyboard($('.kb-toggle'), $('.kb-slot'), $('#s-namebg'));
  $('#s-savename').addEventListener('click', () => {
    S.name = $('#s-name').value.trim(); S.nameBg = $('#s-namebg').value.trim() || toCyrillic(S.name, L()); save(); toast('✓ ' + T('saved'));
  });
  $('#s-reset').addEventListener('click', () => {
    if (!confirm(T('sResetQ'))) return;
    try { localStorage.removeItem(KEY); } catch { /* niente */ }
    S = { ...DEFAULTS }; view = 'journey'; parked = null; renderWelcome(0);
  });
}
// ───────── Pannello audio (♫): tutto l'audio, musica, effetti, voce, stile ─────────
function audioRow(key, volKey, label) {
  return `<div class="a-row">${toggle(key, label)}
    <label class="a-vol"><span class="sr-only">${label}</span><input type="range" min="0" max="100" step="1" data-vol="${volKey}" value="${S[volKey]}" aria-label="${label}"><output>${S[volKey]}%</output></label></div>`;
}
function audioPanelHTML() {
  const names = T('themeNames');
  return `${toggle('audioOn', T('aAll'))}
    <div class="a-group" ${S.audioOn ? '' : 'data-off'}>
      ${audioRow('music', 'musicVol', T('sMusic'))}
      ${audioRow('sounds', 'sfxVol', T('aFx'))}
      ${audioRow('voiceOn', 'voiceVol', T('aVoice'))}
      <label class="field"><span>${T('aStyle')}</span><select data-style>
        <option value="auto" ${S.musicStyle === 'auto' ? 'selected' : ''}>${T('aAuto')}</option>
        ${Object.entries(music.THEMES).map(([k, th]) => `<option value="${k}" ${S.musicStyle === k ? 'selected' : ''}>${th.name} · ${names[k]}</option>`).join('')}
      </select></label>
      ${toggle('musicCalm', T('sMusicCalm'))}
      <p class="muted small">${T('sMusicNote')}</p>
    </div>`;
}
function bindAudioPanel(root) {
  if (!root) return;
  root.querySelectorAll('[data-toggle]').forEach(c => c.addEventListener('change', () => {
    S[c.dataset.toggle] = c.checked; save(); applyPrefs(); syncMusic(); syncTheme();
    if (c.dataset.toggle === 'audioOn') { root.querySelector('.a-group').toggleAttribute('data-off', !S.audioOn); if (!S.audioOn) voice.stop(); }
  }));
  root.querySelectorAll('[data-vol]').forEach(r => r.addEventListener('input', () => {
    const k = r.dataset.vol; S[k] = +r.value; r.nextElementSibling.textContent = S[k] + '%'; save();
    if (k === 'musicVol') music.setVolume(S.musicVol / 100);
  }));
  root.querySelectorAll('[data-vol="sfxVol"]').forEach(r => r.addEventListener('change', () => sfx.tap()));
  root.querySelector('[data-style]').addEventListener('change', e => { S.musicStyle = e.target.value; save(); syncMusic(); syncTheme(); });
}
function openAudioPanel() {
  openDialog(`<h2>♫ ${T('aPanel')}</h2><div class="audio-panel">${audioPanelHTML()}</div>`);
  bindAudioPanel($('#dialog-body .audio-panel'));
}

function toggle(key, label) {
  return `<label class="switch"><input type="checkbox" data-toggle="${key}" ${S[key] ? 'checked' : ''}><span class="track" aria-hidden="true"></span><span>${label}</span></label>`;
}

// ───────── Capitolo: sequenza di passi ─────────
// intro → [spiegazione fase + 5 attività] × 3 → outro → calamita
const stepCache = {};
// Sessione speciale in corso (ripasso di 5 minuti o prova senza aiuti), altrimenti null.
let session = null;
function baseSteps(ch) {
  if (stepCache[ch]) return stepCache[ch];
  const d = chapterData[ch];
  const s = d.intro.map(x => ({ type: 'scene', x }));
  phases.forEach((_, p) => {
    s.push({ type: 'teach', phase: p });
    d.activities.forEach((a, i) => { if (a.phase === p) s.push({ type: 'act', i }); });
  });
  d.outro.forEach(x => s.push({ type: 'scene', x }));
  s.push({ type: 'reward' });
  return (stepCache[ch] = s);
}
// Gli errori tornano: le attività sbagliate al primo colpo si ripresentano, più difficili, prima del finale.
function stepsFor(ch) {
  if (session) return session.steps;
  const base = baseSteps(ch), retry = S.progress[ch]?.retry || [];
  if (!retry.length) return base;
  const at = base.length - 1 - chapterData[ch].outro.length;
  return [...base.slice(0, at), { type: 'retryIntro' }, ...retry.map((_, k) => ({ type: 'act', i: 15 + k })), ...base.slice(at)];
}
function chapterActs(ch) {
  const base = chapterData[ch], retry = S.progress[ch]?.retry || [];
  return retry.length ? { ...base, activities: [...base.activities, ...retry.map(i => harder(base.activities[i]))] } : base;
}
const D = () => (session ? session.data : chapterActs(current.ch));
const CH = () => (session ? session.meta : chapters.find(c => c.id === current.ch));
const P = () => (session ? session.prog : S.progress[current.ch]);
let current = { ch: 1, step: 0 };
let runInChapter = 0; // risposte giuste di fila al primo colpo

const canSpeak = () => !!(window.SpeechRecognition || window.webkitSpeechRecognition) && Date.now() >= (S.noSpeakUntil || 0) && S.audioOn !== false;
// ───────── Ripasso di 5 minuti e prova senza aiuti ─────────
const startedChapters = () => chapters.map(c => c.id).filter(id => S.progress[id] || S.magnets.includes(chapters.find(c => c.id === id).magnet));
const pickOthers = (list, w, n, f) => shuffle(list.filter(x => f(x) !== f(w))).slice(0, n);
function reviewActivities(words) {
  const meaning = w => w.m, others = (w, n) => pickOthers(mem.WORDS, w, n, x => x.m.it);
  const can = S.audioOn && S.voiceOn && voice.hasSpeech();
  return words.map((w, k) => {
    const base = { phase: 0, words: [w.id], title: { it: 'Ripasso', en: 'Review' } };
    const ex = { it: `[[${w.bg}]] (${w.tl}) = ${w.m.it}`, en: `[[${w.bg}]] (${w.tl}) = ${w.m.en}` };
    const type = ['meaning', 'reverse', 'write', can ? 'listen' : 'reverse', /^[А-Яа-я]{2,7}$/.test(w.bg) ? 'letters' : 'write', canSpeak() ? 'speak' : 'meaning'][k % 6];
    if (type === 'meaning') return { ...base, kind: 'choice', noTl: true, prompt: { it: `Che cosa vuol dire [[${w.bg}]]?`, en: `What does [[${w.bg}]] mean?` }, options: [meaning(w), ...others(w, 2).map(meaning)], answer: 0, explain: ex };
    if (type === 'reverse') return { ...base, kind: 'choice', noTl: true, prompt: { it: `Come si dice «${w.m.it}»?`, en: `How do you say “${w.m.en}”?` }, options: [w.bg, ...pickOthers(mem.WORDS, w, 2, x => x.bg).map(x => x.bg)], answer: 0, explain: ex };
    if (type === 'listen') return { ...base, kind: 'listen', who: 'narrator', say: w.bg, bgHelp: w.m, prompt: { it: 'Ascolta: quale parola senti?', en: 'Listen: which word do you hear?' }, options: [w.bg, ...pickOthers(mem.WORDS, w, 2, x => x.bg).map(x => x.bg)], answer: 0, explain: ex };
    if (type === 'letters') { const up = w.bg.toUpperCase(); return { ...base, kind: 'letters', noTl: true, prompt: { it: `Componi la parola che si legge «${w.tl}» (${w.m.it}).`, en: `Build the word that reads “${w.tl}” (${w.m.en}).` }, answer: up, pool: shuffle([...up, ...shuffle([...'БВГДЖЗКЛМНПРСТФХЦЧШЩЪЮЯ'].filter(x => !up.includes(x))).slice(0, 2)]), explain: ex }; }
    if (type === 'speak') return { ...base, kind: 'speak', say: w.bg, bgHelp: w.m, prompt: { it: 'Ripeti ad alta voce:', en: 'Say it out loud:' }, explain: ex };
    return { ...base, kind: 'write', prompt: { it: `Scrivi in cirillico: «${w.m.it}».`, en: `Write in Cyrillic: “${w.m.en}”.` }, answer: w.bg, explain: ex };
  });
}
function startSession(kind, meta, activities, extra = {}) {
  session = { kind, meta, data: { activities, teaching: extra.teaching || [T('reviewTip'), T('reviewTip'), T('reviewTip')].map(x => ({ it: x, en: x })), intro: [], outro: [], words: [] },
    steps: [...activities.map((_, i) => ({ type: 'act', i })), { type: 'end' }], prog: { step: 0, done: 0 }, results: [], start: Date.now(), ...extra };
  current = { ch: meta.id, step: 0 }; runInChapter = 0;
  go('chapter');
}
function startReview() {
  const started = startedChapters();
  if (!started.length) { toast(T('reviewNone')); return; }
  const words = mem.pickReview(S.mem || {}, started, 10);
  startSession('review', { id: 'R', bg: 'Преговор', it: T('reviewTitle'), en: T('reviewTitle') }, reviewActivities(words));
}
function startMastery(ch) {
  const c = chapters.find(x => x.id === ch), d = chapterData[ch];
  startSession('mastery', { ...c }, d.activities.filter(a => a.kind !== 'free').map(a => ({ ...a, hideTr: true })), { teaching: d.teaching, ch });
}
function renderSessionEnd(head) {
  const ok = session.results.filter(Boolean).length, n = session.results.length;
  let body;
  if (session.kind === 'review') {
    const ev = habit.onReview(S); save();
    if (ev.includes('goals')) setTimeout(() => toast('🧶 ' + T('goalsDone')), 400);
    if (ev.includes('seasonal')) setTimeout(() => toast('🎁 ' + T('seasonalWon')), 1600);
    body = `<h2>🔁 ${T('reviewDone')}</h2><p class="sum-label">${T('reviewScore')(ok, n)}</p><p class="muted">${T('reviewNext')}</p>`;
  } else {
    const errors = n - ok, pass = errors <= 2, c = chapters.find(x => x.id === session.ch);
    if (pass) { S.gold ||= []; if (!S.gold.includes(c.magnet)) S.gold.push(c.magnet); save(); sfx.magnet(); }
    body = `<h2>🥇 ${T('goldTitle')}</h2>
      <div class="magnet big ${pass ? 'gold pop' : ''}">${magnets[c.magnet]}</div>
      <p class="sum-label">${pass ? T('goldWon') : T('goldMissed')(errors)}</p>`;
  }
  app.innerHTML = `${head}<section class="card reward">${body}
    <div class="row"><button class="btn" id="to-fridge">${T('toFridge')}</button><button class="btn ghost" id="to-journey">${T('toJourney')}</button></div></section>`;
  const back = v => { session = null; go(v); };
  $('#to-fridge').addEventListener('click', () => back('fridge'));
  $('#to-journey').addEventListener('click', () => back('journey'));
}

// ───────── Scrittura e versioni «più difficili» ─────────
const bgString = o => typeof o === 'string' && /[А-Яа-я]/.test(o);
// Un'attività si può fare scrivendo se la risposta è una parola o frase bulgara.
function canWrite(a) {
  if (a.kind === 'order' || a.kind === 'letters') return true;
  return (a.kind === 'choice' || a.kind === 'read') && !a.latinOptions && bgString(a.options?.[a.answer]);
}
function toWrite(a) {
  if (!canWrite(a)) return a;
  const answer = a.kind === 'order' ? a.answer.join(' ') : a.kind === 'letters' ? a.answer : a.options[a.answer];
  return { ...a, kind: 'write', answer, from: a.kind, prompt: { it: a.prompt.it + ' ' + UI.it.writeIt, en: a.prompt.en + ' ' + UI.en.writeIt } };
}
// Versione più difficile per il ripasso degli errori a fine capitolo.
function harder(a) {
  const h = canWrite(a) ? toWrite(a) : { ...a };
  return { ...h, phase: 2, isRetry: true, title: { it: '🔁 ' + a.title.it, en: '🔁 ' + a.title.en }, hideTr: true };
}

function openChapter(id) {
  session = null;
  const p = chapterProgress(id);
  if (p.completed && !p.replay) S.progress[id] = { step: 0, done: 0, completed: true, replay: true };
  else S.progress[id] = p;
  save();
  current = { ch: id, step: S.progress[id].step };
  if (!S.progress[id].step) { S.progress[id].started = Date.now(); S.progress[id].first = {}; S.progress[id].retry = []; runInChapter = 0; }
  S.lastCh = id; save();
  go('chapter');
}
function advance() {
  const p = P();
  const steps = stepsFor(current.ch), st = steps[current.step];
  if (st.type === 'act') p.done = Math.max(p.done, st.i + 1);
  current.step = Math.min(current.step + 1, steps.length - 1);
  p.step = current.step; save();
  go('chapter');
}

// Torna al passo precedente (scena, spiegazione o attività). L'attività si rifà da capo.
function goBack() {
  if (current.step === 0) return;
  current.step -= 1;
  P().step = current.step; save();
  go('chapter');
}

function speakerHTML(who) {
  const key = who === 'guide' ? guideKey() : who;
  return `<div class="avatar">${avatars[key] || avatars.narrator}</div>`;
}
const trOpen = item => (S.showTr && !session && current.ch <= 10 && !item?.hideTr ? 'open' : '');
function bubble(item) {
  // item: { who, bg, bgHelp|it/en }
  const tr = item.bgHelp ? help(item.bgHelp) : item[L()];
  return `<div class="speaker">${speakerHTML(item.who)}
    <div class="bubble">
      <p class="bg-line">${bg(item.bg)} ${speakBtn(item.bg, item.who === 'guide' ? guideKey() : item.who)}</p>
      ${tr ? `<details class="tr" ${trOpen(item)}><summary>${T('translate')}</summary><p>${esc(fillName(tr))}</p></details>` : ''}
    </div></div>`;
}

function renderStep() {
  const d = D(), c = CH(), prog = P();
  const st = stepsFor(current.ch)[current.step];
  const actIndex = st.type === 'act' ? st.i : st.type === 'teach' ? d.activities.findIndex(a => a.phase === st.phase) - 1 : null;
  const head = `<div class="ch-head">
      <button class="icon-btn" id="back-btn" aria-label="${T('prevStep')}" title="${T('prevStep')}" ${current.step === 0 ? 'disabled' : ''}>←</button>
      <span class="ch-title">${session?.kind === 'review' ? '🔁 ' : session ? '🥇 ' : c.id + '. '}${bg(c.bg)}</span>
      <button class="icon-btn" id="help-btn" ${session?.kind === 'mastery' ? 'hidden' : ''} aria-label="${T('help')}" title="${T('help')}">💡</button>
    </div>
    <div class="dots" aria-hidden="true">${d.activities.map((a, i) => `<i class="${i < (prog.done || 0) ? 'on' : ''} ${actIndex === i ? 'cur' : ''} p${a.phase}"></i>`).join('')}</div>`;

  if (st.type === 'scene') {
    const x = st.x;
    app.innerHTML = `${head}<section class="card scene">
      ${x.who === 'narrator'
        ? `<div class="speaker">${speakerHTML('narrator')}<div class="bubble narr"><h2 class="sr-only">${T('journey')}</h2><p>${rich(x)}</p></div></div>
           ${x.sign ? `<div class="sign">${bg(x.sign)} ${speakBtn(x.sign)}<details class="tr" ${trOpen(x)}><summary>${T('translate')}</summary><p>${esc(help(x.signHelp))}</p></details></div>` : ''}`
        : `<h2 class="sr-only">Мила</h2>${bubble(x)}`}
      <button class="btn cont">${T('cont')}</button></section>`;
    $('.cont').addEventListener('click', advance);
  } else if (st.type === 'teach') {
    const g = guides[guideKey()];
    app.innerHTML = `${head}<section class="card teach">
      <p class="phase-tag p${st.phase}">${T('phase')} ${st.phase + 1} · ${help(phases[st.phase])}</p>
      <div class="speaker">${speakerHTML('guide')}<div class="bubble"><h2 class="g-title">${bg(g.bgName)}</h2>
        ${st.phase === 0 && c.id === 1 ? `<p>${esc(g[L()].hello)}</p>` : ''}<p>${rich(d.teaching[st.phase])}</p></div></div>
      <button class="btn cont">${T('cont')}</button></section>`;
    $('.cont').addEventListener('click', advance);
  } else if (st.type === 'act') {
    renderActivity(head, st.i);
  } else if (st.type === 'retryIntro') {
    app.innerHTML = `${head}<section class="card teach">
      <p class="phase-tag p2">🔁 ${T('retryTag')}</p>
      <div class="speaker">${speakerHTML('guide')}<div class="bubble"><h2 class="g-title">${bg(guides[guideKey()].bgName)}</h2><p>${T('retryIntro')((prog.retry || []).length)}</p></div></div>
      <button class="btn cont">${T('cont')}</button></section>`;
    $('.cont').addEventListener('click', advance);
  } else if (st.type === 'end') {
    renderSessionEnd(head);
  } else {
    const p = prog;
    if (!S.magnets.includes(c.magnet)) S.magnets.push(c.magnet);
    S.mem ||= {};
    d.words.forEach((_, i) => mem.expose(S.mem, `${c.id}-${i}`)); // le parole del capitolo entrano nel ripasso
    const firstOk = Object.values(p.first || {}).filter(Boolean).length, counted = Object.keys(p.first || {}).length || 15;
    const pct = Math.round(firstOk / counted * 100), mins = p.started ? Math.max(1, Math.round((Date.now() - p.started) / 60000)) : null;
    const label = pct >= 90 ? T('sumGreat') : pct >= 70 ? T('sumGood') : T('sumReview');
    p.completed = true; p.done = 15; delete p.replay; p.retry = []; save();
    app.innerHTML = `${head}<section class="card reward">
      <h2>${T('reward')}</h2>
      <div class="magnet big pop ${(S.gold || []).includes(c.magnet) ? 'gold' : ''}">${magnets[c.magnet]}</div>
      <p>${bg(c.magnetBg)} · ${esc(c[L()])}</p>
      <div class="summary"><p class="sum-label">${label}</p>
        <ul class="sum-list"><li><b>${pct}%</b> ${T('sumFirst')}</li><li><b>${d.words.length}</b> ${T('sumWords')}</li>${mins ? `<li><b>${mins}</b> ${T('sumMin')}</li>` : ''}</ul></div>
      ${(S.gold || []).includes(c.magnet) ? `<p class="ok">🥇 ${T('goldHave')}</p>` : `<button class="btn ghost" id="mastery">🥇 ${T('goldTry')}</button><p class="muted small">${T('goldNote')}</p>`}
      ${chapterData[c.id + 1] ? `<button class="btn" id="next-ch">${T('nextCh')} ${c.id + 1} →</button>` : ''}
      <div class="row"><button class="btn" id="to-fridge">${T('toFridge')}</button><button class="btn ghost" id="to-journey">${T('toJourney')}</button></div>
    </section>`;
    sfx.magnet();
    $('#to-fridge').addEventListener('click', () => go('fridge'));
    $('#to-journey').addEventListener('click', () => go('journey'));
    $('#next-ch')?.addEventListener('click', () => openChapter(c.id + 1));
    $('#mastery')?.addEventListener('click', () => startMastery(c.id));
  }
  $('#back-btn').addEventListener('click', goBack);
  $('#help-btn').addEventListener('click', () => {
    const ph = st.type === 'act' ? d.activities[st.i].phase : st.type === 'teach' ? st.phase : 0;
    openDialog(`<div class="speaker">${speakerHTML('guide')}<div class="bubble"><h2>${bg(guides[guideKey()].bgName)}</h2><p>${rich(d.teaching[ph])}</p></div></div>`);
  });
  if (!S.tipsSeen && st.type === 'act') {
    S.tipsSeen = true; save();
    openDialog(`<h2>${T('tipsTitle')}</h2><ul class="tips">${T('tips').map(x => `<li>${esc(x)}</li>`).join('')}</ul>`);
  }
}

function openDialog(html) {
  const d = $('#dialog');
  $('#dialog-body').innerHTML = html;
  $('#dialog-close').textContent = T('close');
  d.showModal();
}
$('#dialog-close').addEventListener('click', () => $('#dialog').close());

// ───────── Avanti automatico ─────────
// Il tempo scorre solo mentre il riscontro è visibile e senza interruzioni. Guida, pannelli e app in background
// lo mettono in pausa e si riparte solo con ▶; mentre parla la voce il conto si ferma e poi riprende.
const AUTO_SECONDS = 10;
let auto = null;
function stopAuto() { if (auto) { clearInterval(auto.timer); auto = null; } }
function pauseAuto() { if (auto && auto.running) { auto.running = false; drawAuto(); } }
function drawAuto() {
  if (!auto) return;
  if (!auto.el.isConnected) { stopAuto(); return; }
  const { el, left, running } = auto, b = el.querySelector('.auto-btn');
  el.querySelector('.auto-bar i').style.width = (left / AUTO_SECONDS * 100) + '%';
  el.querySelector('.auto-left').textContent = Math.ceil(left);
  b.textContent = running ? '⏸' : '▶';
  b.setAttribute('aria-label', running ? T('autoPause') : T('autoPlay')); b.title = b.getAttribute('aria-label');
  el.classList.toggle('paused', !running);
}
function startAuto(el, left = AUTO_SECONDS, running = true) {
  stopAuto();
  auto = { left, running, held: false, el, timer: null };
  el.querySelector('.auto-btn').onclick = () => { if (auto) { auto.running = !auto.running; drawAuto(); } };
  auto.timer = setInterval(() => {
    if (!auto) return;
    if (!auto.el.isConnected) { stopAuto(); return; }
    if (!auto.running) return;
    if (document.hidden || $('#dialog').open) { pauseAuto(); return; }
    if (auto.held) return; // la voce sta parlando
    auto.left -= 0.1;
    if (auto.left <= 0) { stopAuto(); advance(); return; }
    drawAuto();
  }, 100);
  drawAuto();
}

// ───────── Attività ─────────
function renderActivity(head, i) {
  const orig = D().activities[i], total = D().activities.length;
  const mastery = session?.kind === 'mastery';
  // «Più difficile»: banco di parole sostituito dalla scrittura (sempre nella prova senza aiuti). La scelta è ricordata.
  const a = (S.hard || mastery) && orig.kind !== 'write' ? toWrite(orig) : orig;
  const tag = orig.isRetry ? `🔁 ${T('retryTag')}` : session?.kind === 'review' ? `🔁 ${T('activity')} ${i + 1} ${T('of')} ${total}` : `${T('activity')} ${i + 1} ${T('of')} ${session ? total : 15} · ${help(phases[a.phase])}`;
  const top = `<p class="phase-tag p${a.phase}">${tag}</p>
    ${canWrite(orig) && !mastery && !orig.isRetry ? `<button class="link-btn hard-toggle" id="hard-toggle">${S.hard ? '🧩 ' + T('easier') : '✍ ' + T('harderBtn')}</button>` : ''}
    <h2>${esc(help(a.title))}</h2>`;
  const ctx = a.bg && a.who ? bubble(a) : a.who === 'guide' ? `<div class="speaker">${speakerHTML('guide')}</div>` : '';
  app.innerHTML = `${head}<section class="card act kind-${a.kind} ${a.noTl || mastery || a.kind === 'write' ? 'no-tl' : ''} ${mastery ? 'no-help' : ''}">
    ${top}${a.kind === 'listen' ? '' : ctx}
    <p class="prompt">${rich(a.prompt)}</p>
    <div class="hint-box" hidden></div>
    <div class="work"></div>
    <div class="feedback" role="status" aria-live="polite"></div>
  </section>`;
  const work = $('.work'), fb = $('.feedback');
  let tries = 0;
  $('#hard-toggle')?.addEventListener('click', () => { S.hard = !S.hard; save(); go('chapter'); });

  const success = (title = T('correct'), extra = '') => {
    sfx.ok();
    const firstTry = tries === 0, prog = P();
    if (a.kind !== 'free') {
      S.mem ||= {};
      mem.wordsIn(mem.activityText(orig)).forEach(id => mem.record(S.mem, id, firstTry));
      if (session) session.results.push(firstTry);
      else {
        if (i < 15) (prog.first ||= {})[i] = firstTry;
        if (!firstTry && !orig.isRetry && i < 15 && !(prog.retry ||= []).includes(i)) prog.retry.push(i);
      }
      runInChapter = firstTry ? runInChapter + 1 : 0;
      if (runInChapter >= 3) title += ` · ${T('inARow')(runInChapter)}`;
    }
    const events = habit.onActivity(S, a.kind === 'free' ? null : firstTry);
    save();
    if (events.includes('goals')) setTimeout(() => toast('🧶 ' + T('goalsDone')), 400);
    if (events.includes('seasonal')) setTimeout(() => { toast('🎁 ' + T('seasonalWon')); sfx.magnet(); }, 1600);
    work.querySelectorAll('button').forEach(b => { if (!b.classList.contains('speak')) b.disabled = true; });
    fb.className = 'feedback good';
    // Avanti automatico solo dopo una risposta giusta al primo colpo (niente dopo errori o nel messaggio libero).
    const useAuto = S.autoAdvance && !S.screenReader && tries === 0 && a.kind !== 'free';
    fb.innerHTML = `<p class="fb-title">✓ ${title}</p><p>${rich(a.explain)}</p>${extra}
      ${useAuto ? `<div class="auto"><button type="button" class="icon-btn auto-btn"></button><span class="auto-bar" aria-hidden="true"><i></i></span><span class="auto-text" aria-hidden="true">${T('autoIn')} <b class="auto-left">${AUTO_SECONDS}</b> s</span><span class="sr-only">${T('autoSr')}</span></div>` : ''}
      <button class="btn cont">${T('cont')}</button>`;
    const c = $('.cont', fb); c.addEventListener('click', () => { stopAuto(); advance(); });
    if (S.screenReader) { const ttl = $('.fb-title', fb); ttl.setAttribute('tabindex', '-1'); ttl.focus({ preventScroll: true }); } else c.focus({ preventScroll: true });
    fb.scrollIntoView({ block: 'center', behavior: prefersReduced() ? 'auto' : 'smooth' }); // non sotto la barra in basso
    if (useAuto) startAuto($('.auto', fb));
  };
  // «Proviamo insieme» a gradini: prima la regola della guida, poi aiuti mirati che non svelano la risposta.
  // Ogni aiuto è { ok: () => si può usare adesso?, run: () => applicalo }.
  let hintsUsed = 0;
  const guideTip = { ok: () => true, run: () => {
    const box = $('.hint-box');
    box.innerHTML = `<span class="avatar xs">${avatars[guideKey()]}</span><p><b>${bg(guides[guideKey()].bgName)}:</b> ${rich(D().teaching[a.phase])}</p>`;
    box.hidden = false;
  } };
  const fail = (kindHints = []) => {
    sfx.no(); tries++; runInChapter = 0;
    const levels = mastery ? [] : [guideTip, ...kindHints]; // nella prova senza aiuti non ci sono aiuti
    const next = levels.slice(hintsUsed).find(h => h.ok());
    fb.className = 'feedback bad';
    fb.innerHTML = `<p class="fb-title">${T('notYet')}</p>${next ? `<button class="btn ghost small" id="together">🤝 ${T('together')}</button>` : ''}`;
    $('#together', fb)?.addEventListener('click', () => {
      next.run(); hintsUsed = levels.indexOf(next) + 1;
      fb.innerHTML = ''; fb.className = 'feedback';
    });
  };

  if (a.kind === 'choice' || a.kind === 'read' || a.kind === 'listen') {
    let pre = '';
    if (a.kind === 'listen') {
      const paused15 = Date.now() < (S.noListenUntil || 0);
      const can = S.audioOn && S.voiceOn && voice.hasSpeech() && !paused15;
      pre = `<div class="speaker">${speakerHTML(a.who)}<div class="bubble">
          <div class="listen-row" ${can ? '' : 'hidden'}>
            <button class="btn listen-btn" data-say="${esc(a.say)}" data-who="${a.who || ''}">🔊 ${T('listen')}</button>
            <button class="icon-btn" id="l-pause" disabled aria-label="${T('lPause')}" title="${T('lPause')}">⏸</button>
            <button class="icon-btn" id="l-stop" disabled aria-label="${T('lStop')}" title="${T('lStop')}">⏹</button>
          </div>
          <details class="tr" ${can ? '' : 'open'}><summary>${T('showText')}</summary><p class="bg-line">${bg(a.say)}</p><p class="muted">${esc(help(a.bgHelp))}</p></details>
          ${can ? `<button class="link-btn" id="no-listen">🙉 ${T('noListen')}</button>` : `<p class="note small">${paused15 ? T('noListenOn') : T('noVoice')}</p>`}
        </div></div>`;
    }
    if (a.sign) pre += `<div class="sign ${a.signStyle || ''}">${bg(a.sign)}</div>`;
    const order = shuffle(a.options.map((o, k) => k));
    work.innerHTML = `${pre}<div class="options ${a.signOptions ? 'signs' : ''}">${order.map(k => {
      const o = a.options[k];
      const label = a.latinOptions ? `<span>${esc(o)}</span>` : typeof o === 'string' ? bg(o) : `<span>${esc(help(o))}</span>`;
      return `<div class="opt-wrap"><button class="opt" data-k="${k}">${label}</button>${typeof o === 'string' && !a.latinOptions ? speakBtn(o) : ''}</div>`;
    }).join('')}</div>`;
    if (a.kind === 'listen') setTimeout(bindListenControls, 0);
    setTimeout(() => $('#no-listen')?.addEventListener('click', () => { S.noListenUntil = Date.now() + 15 * 60000; save(); go('chapter'); }), 0);
    work.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
      if (+b.dataset.k === a.answer) { b.classList.add('is-right'); success(); }
      else {
        b.classList.add('wrong'); b.disabled = true; // il segno d'errore resta
        const wrongLeft = () => [...work.querySelectorAll('.opt:not(:disabled)')].filter(x => +x.dataset.k !== a.answer);
        const hints = [];
        // Ascolto: prima la frase più lenta, poi il testo
        if (a.kind === 'listen') {
          hints.push({ ok: () => S.audioOn && S.voiceOn && voice.hasSpeech(), run: () => voice.speak(a.say, { female: FEMALE.has(a.who), voiceURI: S.voiceURI, rate: 0.6, volume: S.voiceVol / 100 }) });
          hints.push({ ok: () => true, run: () => { const d = work.querySelector('details.tr'); if (d) d.open = true; } });
        }
        // Scelte: toglie UNA opzione sbagliata, solo se ne restano almeno due (mai la sola risposta giusta)
        hints.push({ ok: () => wrongLeft().length >= 2, run: () => { const x = wrongLeft()[0]; x.disabled = true; x.classList.add('faded'); } });
        fail(hints);
      }
    }));
  }

  if (a.kind === 'match') {
    const right = shuffle(a.pairs.map((_, k) => k));
    work.innerHTML = `<div class="match">
      <div class="col">${a.pairs.map((p, k) => `<button class="m-item left" data-k="${k}" aria-pressed="false">${bg(p[0])}</button>`).join('')}</div>
      <div class="col">${right.map(k => `<button class="m-item right" data-k="${k}">${esc(help(a.pairs[k][1]))}</button>`).join('')}</div>
    </div>`;
    let sel = null, matched = 0;
    work.querySelectorAll('.m-item.left').forEach(b => b.addEventListener('click', () => {
      work.querySelectorAll('.m-item.left').forEach(x => x.setAttribute('aria-pressed', 'false'));
      b.setAttribute('aria-pressed', 'true'); sel = b; sfx.tap();
      if (S.audioOn && S.voiceOn) voice.speak(a.pairs[+b.dataset.k][0], { voiceURI: S.voiceURI, rate: S.rate, volume: S.voiceVol / 100 });
    }));
    work.querySelectorAll('.m-item.right').forEach(b => b.addEventListener('click', () => {
      if (!sel) { work.querySelectorAll('.m-item.left:not(:disabled)').forEach(toastFlash); return; }
      if (sel.dataset.k === b.dataset.k) {
        [sel, b].forEach(x => { x.disabled = true; x.classList.add('is-right'); x.setAttribute('aria-pressed', 'false'); });
        sel = null; matched++;
        if (matched === a.pairs.length) success(); else tone([700], 0.08);
      } else {
        b.classList.add('shake'); setTimeout(() => b.classList.remove('shake'), 400);
        // Abbinamenti: illumina la coppia giusta per una sola parola
        fail([{ ok: () => !!work.querySelector('.m-item.left:not(:disabled)'), run: () => {
          const k = (sel && !sel.disabled ? sel : work.querySelector('.m-item.left:not(:disabled)')).dataset.k;
          [work.querySelector(`.m-item.left[data-k="${k}"]`), work.querySelector(`.m-item.right[data-k="${k}"]`)].forEach(x => x.classList.add('glow'));
        } }]);
      }
    }));
  }

  if (a.kind === 'order' || a.kind === 'letters') {
    const joiner = a.kind === 'letters' ? '' : ' ';
    const target = a.kind === 'letters' ? [...a.answer] : a.answer.map(fillName);
    let pool = a.kind === 'letters' ? shuffle(a.pool) : shuffle(target);
    if (a.kind === 'order') { let n = 0; while (pool.join() === target.join() && n++ < 10) pool = shuffle(target); }
    let line = [], marks = false;
    const draw = () => {
      work.innerHTML = `
        <div class="line ${a.kind}" aria-label="${T('check')}">${line.length ? line.map((w, k) => `<button class="tile in ${marks && w === target[k] ? 'placed' : ''}" data-line="${k}" lang="bg">${esc(w)}</button>`).join('') : '<span class="placeholder">…</span>'}</div>
        <div class="pool">${pool.map((w, k) => `<button class="tile" data-pool="${k}" lang="bg">${esc(w)}</button>`).join('')}</div>
        <p class="tl-preview tl">${esc(toLatin(line.join(joiner)))}</p>
        <button class="btn" id="check" ${line.length ? '' : 'disabled'}>${T('check')}</button>`;
      work.querySelectorAll('[data-pool]').forEach(b => b.addEventListener('click', () => { line.push(pool.splice(+b.dataset.pool, 1)[0]); sfx.tap(); draw(); refocus('[data-pool]'); }));
      work.querySelectorAll('[data-line]').forEach(b => b.addEventListener('click', () => { pool.push(line.splice(+b.dataset.line, 1)[0]); sfx.tap(); draw(); refocus('[data-line]'); }));
      $('#check').addEventListener('click', () => {
        if (line.join(joiner) === target.join(joiner)) {
          work.querySelectorAll('.tile').forEach(t => t.disabled = true); $('#check').hidden = true;
          if (S.audioOn && S.voiceOn && a.kind === 'order') voice.speak(line.join(' '), { voiceURI: S.voiceURI, rate: S.rate, volume: S.voiceVol / 100 });
          success();
        } else fail([
          // 1) segna in verde i pezzi già al posto giusto, senza spostarli
          { ok: () => true, run: () => { marks = true; draw(); } },
          // 2) mette a posto la parte iniziale corretta e aggiunge il pezzo successivo
          { ok: () => true, run: () => {
            const all = [...line, ...pool];
            let k = 0; while (k < line.length && line[k] === target[k]) k++;
            const fixed = target.slice(0, k + 1);
            fixed.forEach(w => all.splice(all.indexOf(w), 1));
            line = fixed; pool = all; draw();
          } }
        ]);
      });
    };
    const refocus = sel => (work.querySelector(sel) || $('#check'))?.focus();
    draw();
  }

  if (a.kind === 'speak') {
    const words = fillName(a.say).split(/\s+/);
    work.innerHTML = `
      <p class="bg-line speak-line">${words.map((w, k) => `<span class="sw" data-w="${k}" lang="bg">${esc(w)}</span>`).join(' ')} ${speakBtn(a.say)}</p>
      <p class="tl-preview" aria-hidden="true">${esc(toLatin(fillName(a.say)))}</p>
      <div class="row wrap"><button class="btn" id="mic">🎤 ${T('speakNow')}</button><button class="link-btn" id="no-speak">🤐 ${T('noSpeak')}</button></div>
      <p class="muted small">${T('speakPrivacy')}</p>`;
    const want = words.map(w => mem.normBg(w));
    const mark = heard => { const got = mem.normBg(heard).split(' '); work.querySelectorAll('.sw').forEach((el, k) => el.classList.toggle('heard', got.some(g => checkWritten(g, want[k]).ok))); return work.querySelectorAll('.sw.heard').length === want.length; };
    $('#no-speak').addEventListener('click', () => { S.noSpeakUntil = Date.now() + 15 * 60000; save(); stopAuto(); advance(); });
    $('#mic').addEventListener('click', () => {
      const R = window.SpeechRecognition || window.webkitSpeechRecognition;
      const rec = new R(); rec.lang = 'bg-BG'; rec.interimResults = true; rec.maxAlternatives = 3;
      const btn = $('#mic'); btn.disabled = true; btn.textContent = '👂 ' + T('listening');
      let done = false;
      rec.onresult = e => {
        const txt = [...e.results].map(r => [...r].map(x => x.transcript).join(' ')).join(' ');
        if (mark(txt) && !done) { done = true; rec.stop(); success(); }
      };
      rec.onerror = rec.onend = () => { if (!done && btn.isConnected) { btn.disabled = false; btn.textContent = '🎤 ' + T('speakAgain'); fail([{ ok: () => true, run: () => voice.speak(a.say, { voiceURI: S.voiceURI, rate: 0.6, volume: S.voiceVol / 100 }) }]); done = true; } };
      try { rec.start(); } catch { btn.disabled = false; }
    });
  }

  if (a.kind === 'write') {
    const answers = [fillName(a.answer)];
    work.innerHTML = `
      <label class="field"><span>${T('yourAnswer')}</span><input id="w-in" lang="bg" class="bg-input w-in" autocomplete="off" autocapitalize="off" spellcheck="false"></label>
      <p class="tl-preview" id="w-tl" aria-hidden="true"></p>
      <button class="link-btn kb-toggle" aria-expanded="false">⌨ ${T('keyboard')}</button>
      <div class="kb-slot"></div>
      <button class="btn" id="check" disabled>${T('check')}</button>`;
    const inp = $('#w-in');
    inp.addEventListener('input', () => { $('#check').disabled = !inp.value.trim(); $('#w-tl').textContent = /[а-я]/i.test(inp.value) ? toLatin(inp.value) : ''; });
    inp.addEventListener('keydown', e => { if (e.key === 'Enter' && inp.value.trim()) { e.preventDefault(); $('#check').click(); } });
    attachKeyboard($('.kb-toggle'), $('.kb-slot'), inp);
    if (!S.screenReader) setTimeout(() => inp.focus({ preventScroll: true }), 50);
    $('#check').addEventListener('click', () => {
      const r = checkWritten(inp.value, answers), right = esc(r.right);
      if (r.ok) {
        inp.disabled = true; $('.kb-slot').innerHTML = '';
        const note = r.kind === 'latin' ? T('wLatin')(right) : r.kind === 'small' ? T('wSmall')(right)
          : r.kind === 'confusion' ? T('wConf')(esc(r.confusion.right), esc(r.confusion.given), right) : '';
        success(r.kind === 'exact' ? T('correct') : T('almost'), note ? `<p class="w-note" lang="${L()}">${note}</p>` : '');
      } else {
        fail([
          { ok: () => true, run: () => { inp.value = [...answers[0]][0]; inp.dispatchEvent(new Event('input')); inp.focus(); } },
          { ok: () => true, run: () => { const box = $('.hint-box'); box.hidden = false; box.insertAdjacentHTML('beforeend', `<p>🔤 ${esc(toLatin(answers[0]))} · ${[...answers[0]].length} ${T('letters')}</p>`); } }
        ]);
      }
    });
  }

  if (a.kind === 'free') {
    work.innerHTML = `
      <label class="field"><span>${T('yourMsg')}</span><textarea id="free-in" rows="3" lang="bg" spellcheck="false" autocomplete="off"></textarea></label>
      <p class="tl-preview tl" id="free-tl"></p>
      <div class="row wrap"><button class="link-btn kb-toggle" aria-expanded="false">⌨ ${T('keyboard')}</button>
        <details class="tr"><summary>${T('example')}</summary><p class="bg-line">${bg(a.example)} ${speakBtn(a.example)}</p></details></div>
      <div class="kb-slot"></div>
      <button class="btn" id="send" disabled>${T('send')} ✉</button>`;
    const ta = $('#free-in');
    ta.addEventListener('input', () => { $('#send').disabled = !ta.value.trim(); $('#free-tl').textContent = toLatin(ta.value); });
    attachKeyboard($('.kb-toggle'), $('.kb-slot'), ta);
    $('#send').addEventListener('click', () => {
      ta.value = ''; ta.disabled = true; // il testo non viene conservato
      $('.kb-slot').innerHTML = '';
      success(T('sent'), `<div class="ai-slot" data-ai-slot><span aria-hidden="true">🤖</span> ${T('aiSlot')}</div>`);
    });
  }
}
// Comandi Pausa / Riprendi / Stop dell'ascolto: si accendono mentre la voce parla.
function bindListenControls() {
  const p = $('#l-pause'), st = $('#l-stop');
  if (!p) return;
  p.addEventListener('click', () => { if (voice.isPaused()) voice.resume(); else voice.pause(); refresh(); });
  st.addEventListener('click', () => { voice.stop(); refresh(); });
  const refresh = () => {
    if (!p.isConnected) { clearInterval(timer); return; }
    const busy = voice.isBusy(), paused = voice.isPaused();
    p.disabled = st.disabled = !busy;
    p.textContent = paused ? '▶' : '⏸';
    const label = paused ? T('lResume') : T('lPause'); p.setAttribute('aria-label', label); p.title = label;
  };
  const timer = setInterval(refresh, 200);
}
function toastFlash(el) { el?.classList.add('glow'); setTimeout(() => el?.classList.remove('glow'), 900); }

// ───────── Avvio ─────────
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
voice.onVoices(() => { if (view === 'settings' && S.lang && S.guide) { renderSettings(); addBackToGame(); } });
document.addEventListener('visibilitychange', () => { if (document.hidden) { voice.stop(); music.stop(); } else if (S.music && music.wasStarted()) music.start(); });
if (!S.lang || !S.guide) renderWelcome(S.lang ? 1 : 0);
else go('journey');
