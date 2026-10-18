// Controlli automatici sui contenuti: node tests/content.test.mjs
import { activities1, teaching1, intro1, outro1, chapters, words1 } from '../js/content.js';
import { toLatin, toCyrillic } from '../js/translit.js';

let errors = 0;
const fail = msg => { errors++; console.error('✗ ' + msg); };
const both = (o, where) => { if (typeof o !== 'object' || !o.it || !o.en) fail(`${where}: manca italiano o inglese`); };

if (activities1.length !== 15) fail(`il capitolo 1 ha ${activities1.length} attività invece di 15`);
[0, 1, 2].forEach(p => { const n = activities1.filter(a => a.phase === p).length; if (n !== 5) fail(`fase ${p}: ${n} attività invece di 5`); });
activities1.forEach((a, i) => {
  const w = `attività ${i + 1}`;
  both(a.title, w + ' titolo'); both(a.prompt, w + ' consegna'); both(a.explain, w + ' spiegazione');
  if (['choice', 'read', 'listen'].includes(a.kind)) {
    if (!(a.answer >= 0 && a.answer < a.options.length)) fail(`${w}: risposta fuori dalle opzioni`);
    if (new Set(a.options.map(o => JSON.stringify(o))).size !== a.options.length) fail(`${w}: opzioni doppie`);
  }
  if (a.kind === 'match' && a.pairs.length < 3) fail(`${w}: troppo poche coppie`);
  if (a.kind === 'letters' && ![...a.answer].every(ch => a.pool.includes(ch))) fail(`${w}: lettere mancanti nel mazzo`);
  if (a.bg && a.who && !a.bgHelp) fail(`${w}: frase bulgara senza traduzione`);
  const bgTexts = JSON.stringify(a).match(/[А-Яа-я]/);
  if (!bgTexts && a.kind !== 'read') fail(`${w}: nessun testo bulgaro`);
});
teaching1.forEach((t, i) => both(t, `spiegazione fase ${i + 1}`));
[...intro1, ...outro1].forEach((s, i) => both(s, `scena ${i + 1}`));
chapters.forEach(c => both(c, `capitolo ${c.id}`));
words1.forEach(([w, tl, m]) => {
  both(m, `parola ${w}`);
  const plain = toLatin(w.replace(/́/g, '')).toLowerCase();
  const tlPlain = tl.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  if (plain !== tlPlain) fail(`parola ${w}: traslitterazione «${tl}» diversa da «${plain}»`);
});

const eq = (a, b) => { if (a !== b) fail(`atteso «${b}», ottenuto «${a}»`); };
eq(toLatin('Здравей'), 'Zdravey'); eq(toLatin('София'), 'Sofia'); eq(toLatin('Щастие'), 'Shtastie'); eq(toLatin('Благодаря'), 'Blagodarya');
eq(toCyrillic('Mario'), 'Марио'); eq(toCyrillic('Sasha'), 'Саша');

console.log(errors ? `\n${errors} problemi` : '✓ contenuti del capitolo 1 in ordine');
process.exit(errors ? 1 : 0);
