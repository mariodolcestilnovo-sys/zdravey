// Controlli automatici sui contenuti di tutti i capitoli: node tests/content.test.mjs
import { chapters, chapterData } from '../js/content.js';
import { avatars, magnets } from '../js/art.js';
import { toLatin, toCyrillic } from '../js/translit.js';

let errors = 0;
const fail = msg => { errors++; console.error('✗ ' + msg); };
const both = (o, where) => { if (typeof o !== 'object' || !o || !o.it || !o.en) fail(`${where}: manca italiano o inglese`); };
const count = (arr, x) => arr.filter(y => y === x).length;
const speakers = new Set([...Object.keys(avatars), 'guide']);

for (const c of chapters) {
  const d = chapterData[c.id];
  const C = `cap. ${c.id}`;
  both(c, `${C} titolo`);
  if (!magnets[c.magnet]) fail(`${C}: manca il disegno della calamita «${c.magnet}»`);
  if (!d) { fail(`${C}: nessun contenuto`); continue; }
  if (d.activities.length !== 15) fail(`${C}: ${d.activities.length} attività invece di 15`);
  [0, 1, 2].forEach(p => { const n = d.activities.filter(a => a.phase === p).length; if (n !== 5) fail(`${C} fase ${p + 1}: ${n} attività invece di 5`); });
  if (d.teaching.length !== 3) fail(`${C}: servono 3 spiegazioni`);
  d.teaching.forEach((t, i) => both(t, `${C} spiegazione ${i + 1}`));
  [...d.intro, ...d.outro].forEach((s, i) => {
    both(s, `${C} scena ${i + 1}`);
    if (!speakers.has(s.who)) fail(`${C} scena ${i + 1}: personaggio sconosciuto «${s.who}»`);
  });
  d.activities.forEach((a, i) => {
    const w = `${C} att. ${i + 1}`;
    both(a.title, w + ' titolo'); both(a.prompt, w + ' consegna'); both(a.explain, w + ' spiegazione');
    if (a.who && !speakers.has(a.who)) fail(`${w}: personaggio sconosciuto «${a.who}»`);
    if (['choice', 'read', 'listen'].includes(a.kind)) {
      if (!(a.answer >= 0 && a.answer < a.options.length)) fail(`${w}: risposta fuori dalle opzioni`);
      if (new Set(a.options.map(o => JSON.stringify(o))).size !== a.options.length) fail(`${w}: opzioni doppie`);
      a.options.forEach((o, k) => { if (typeof o === 'object') both(o, `${w} opzione ${k + 1}`); });
    }
    if (a.kind === 'listen' && (!a.say || !a.who)) fail(`${w}: ascolto senza frase o personaggio`);
    if (a.kind === 'match') { if (a.pairs.length < 3) fail(`${w}: troppo poche coppie`); a.pairs.forEach(p => both(p[1], `${w} coppia ${p[0]}`)); }
    if (a.kind === 'letters' && ![...a.answer].every(ch => count(a.pool, ch) >= count([...a.answer], ch))) fail(`${w}: lettere mancanti nel mazzo`);
    if (a.kind === 'order' && a.answer.length < 2) fail(`${w}: frase da riordinare troppo corta`);
    if (a.bg && a.who && !a.bgHelp) fail(`${w}: frase bulgara senza traduzione`);
    if (a.kind === 'free' && !a.example) fail(`${w}: prova libera senza esempio`);
  });
  if (d.activities[14].kind !== 'free') fail(`${C}: l’ultima attività dovrebbe essere la prova libera`);
  d.words.forEach(([wd, tl, m]) => {
    both(m, `${C} parola ${wd}`);
    const plain = toLatin(wd.replace(/́/g, '')).toLowerCase();
    const tlPlain = tl.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    if (plain !== tlPlain) fail(`${C} parola ${wd}: traslitterazione «${tl}» diversa da «${plain}»`);
  });
}

const eq = (a, b) => { if (a !== b) fail(`atteso «${b}», ottenuto «${a}»`); };
eq(toLatin('Здравей'), 'Zdravey'); eq(toLatin('София'), 'Sofia'); eq(toLatin('Щастие'), 'Shtastie'); eq(toLatin('Благодаря'), 'Blagodarya');
eq(toCyrillic('Mario'), 'Марио'); eq(toCyrillic('Sasha'), 'Саша');
for (const [la, bg] of [['Giovanni', 'Джовани'], ['Chiara', 'Киара'], ['Francesca', 'Франческа'], ['Gianluca', 'Джанлука'], ['Giulia', 'Джулия'], ['Luca', 'Лука'], ['Maria', 'Мария'], ['Hugo', 'Уго'], ['Gnocchi', 'Ноки']]) eq(toCyrillic(la, 'it'), bg);

console.log(errors ? `\n${errors} problemi` : `✓ contenuti di ${chapters.length} capitoli in ordine`);
process.exit(errors ? 1 : 0);
