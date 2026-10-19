// Controlli sulla correzione tollerante e sulla memoria: node tests/check.test.mjs
import { checkWritten } from '../js/check.js';
import { WORDS, halfLife, recall, record, wordsIn, pickReview } from '../js/memory.js';

let errors = 0;
const fail = m => { errors++; console.error('✗ ' + m); };
const is = (input, ans, kind, ok = true) => { const r = checkWritten(input, ans); if (r.kind !== kind || r.ok !== ok) fail(`«${input}» vs «${ans}»: atteso ${kind}, ottenuto ${r.kind}`); };
is('Здравей!', 'Здравей', 'exact');
is('здравей', 'Здравей!', 'exact');
is('zdravey', 'Здравей', 'latin');
is('Zdravey!', 'Здравей', 'latin');
is('Благадаря', 'Благодаря', 'small');
is('Здравеи', 'Здравей', 'confusion');
is('Център', 'Център', 'exact');
is('Цантар', 'Център', 'wrong', false);
is('Центар', 'Център', 'confusion');
is('кафе', 'чай', 'wrong', false);
is('да', 'не', 'wrong', false);
is('Добро утро', ['Добро утро', 'Добро утро!'], 'exact');

if (WORDS.length < 80) fail(`troppo poche parole ripassabili: ${WORDS.length}`);
const m = {}; record(m, 'x', true, 0);
const h1 = halfLife(m.x); record(m, 'x', true, 0); if (!(halfLife(m.x) > h1)) fail('una risposta giusta deve allungare il ricordo');
record(m, 'x', false, 0); const h2 = halfLife(m.x); if (!(h2 < halfLife({ r: 2, w: 0, n: 3 }))) fail('un errore deve accorciare il ricordo');
if (Math.abs(recall({ r: 1, w: 0, n: 1, t: 0 }, halfLife({ r: 1, w: 0, n: 1 }) * 86400000) - 0.5) > 1e-9) fail('dopo un’emivita il ricordo deve essere 50%');
if (!wordsIn('Здравей! Аз съм Мила.').length) fail('wordsIn non trova «Здравей»');
const pick = pickReview({}, [1, 2], 10); if (pick.length !== 10 || pick.some(w => w.ch > 2)) fail('pickReview sceglie parole sbagliate');
console.log(errors ? `\n${errors} problemi` : `✓ correzione tollerante e memoria in ordine (${WORDS.length} parole ripassabili)`);
process.exit(errors ? 1 : 0);
