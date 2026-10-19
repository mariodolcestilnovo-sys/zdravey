// Controlli sulla musica: node tests/music.test.mjs
import { THEMES, ORDER, barLength, themeFor } from '../js/music.js';

let errors = 0;
const fail = m => { errors++; console.error('✗ ' + m); };
for (const [key, th] of Object.entries(THEMES)) {
  const len = barLength(th);
  for (const sec of new Set(ORDER)) {
    if (!th[sec]?.length) { fail(`${key}: manca la sezione ${sec}`); continue; }
    th[sec].forEach((bar, i) => {
      const notes = bar.trim().split(/\s+/).map(t => t.split(':').map(Number));
      const sum = notes.reduce((a, [, l]) => a + l, 0);
      if (sum !== len) fail(`${key} ${sec} battuta ${i + 1}: ${sum} ottavi invece di ${len}`);
      notes.forEach(([d]) => { if (!(d >= -3 && d <= 10)) fail(`${key} ${sec}: grado fuori misura ${d}`); });
    });
  }
  // La conclusione deve finire sulla tonica, così si lega all'intro.
  const last = th.coda.at(-1).trim().split(/\s+/).at(-1).split(':').map(Number)[0];
  if (last % 7 !== 0) fail(`${key}: la conclusione non torna alla tonica`);
}
const used = new Set(['journey', 'fridge', 'words', 'settings'].map(v => themeFor(v, 1)));
for (let c = 1; c <= 10; c++) used.add(themeFor('chapter', c));
if (used.size !== 5) fail(`temi usati: ${[...used].join(', ')} (ne servono 5)`);
const secs = Object.values(THEMES).map(th => ORDER.reduce((a, s) => a + th[s].length * barLength(th) * th.eighth, 0));
console.log(errors ? `\n${errors} problemi` : `✓ 5 temi in ordine (durata di un giro: ${secs.map(s => Math.round(s) + ' s').join(', ')})`);
process.exit(errors ? 1 : 0);
