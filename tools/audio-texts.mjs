// Elenca tutte le frasi bulgare che il gioco può far ascoltare (senza il nome del giocatore,
// che cambia: quelle restano alla voce del browser). Uscita: JSON su stdout.
import * as C from '../js/content.js';

const texts = new Set();
const add = t => {
  if (!t || t.includes('{name}')) return;
  texts.add(t.replace(/́/g, '').replace(/[«»]/g, '').trim());
};
const isBgText = o => typeof o === 'string' && /[А-Яа-я]/.test(o);

[...C.intro1, ...C.outro1].forEach(s => { add(s.bg); add(s.sign); });
C.activities1.forEach(a => {
  add(a.bg); add(a.say); add(a.sign); add(a.example);
  if (!a.latinOptions) (a.options || []).filter(isBgText).forEach(add);
  (a.pairs || []).forEach(p => add(p[0]));
  if (a.kind === 'order') add(a.answer.join(' '));
});
C.words1.forEach(([w]) => add(w));
add('Здравей! Казвам се Мила.'); // prova della voce nelle impostazioni

console.log(JSON.stringify([...texts], null, 1));
