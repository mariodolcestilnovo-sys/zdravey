// Correzione tollerante delle risposte scritte in bulgaro (idea P1, tabella «Tolleranza» della specifica §3).
// - maiuscole, punteggiatura e spazi in più: ignorati;
// - risposta in lettere latine (es. «zdravey»): accettata con un avviso e la forma cirillica;
// - una lettera sbagliata in una parola lunga: «piccolo errore», accettato mostrando la forma giusta;
// - confusioni tipiche del bulgaro (ъ/а, и/й, щ/шт, е/ѐ): accettate ma EVIDENZIATE con un consiglio mirato.
import { toLatin } from './translit.js';

const norm = s => s.replace(/́/g, '').toLowerCase().replace(/[.,!?¡¿;:«»"“”()…–—]/g, ' ').replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
const latinNorm = s => norm(s).normalize('NFD').replace(/[̀-ͯ]/g, '');
const hasLatin = s => /[a-z]/i.test(s) && !/[а-яё]/i.test(s);

function distance(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}
// Confusioni tipiche: [scritto, giusto]
const CONFUSIONS = [['а', 'ъ'], ['ъ', 'а'], ['и', 'й'], ['й', 'и'], ['ѐ', 'е'], ['шт', 'щ']];
function confusion(given, right) {
  for (const [g, r] of CONFUSIONS) {
    if (!right.includes(r)) continue;
    // prova a sostituire ogni occorrenza di r con g, una alla volta
    let idx = right.indexOf(r);
    while (idx !== -1) {
      if (right.slice(0, idx) + g + right.slice(idx + r.length) === given) return { given: g, right: r };
      idx = right.indexOf(r, idx + 1);
    }
  }
  return null;
}

// Restituisce { ok, kind: 'exact'|'latin'|'small'|'confusion'|'wrong', right, confusion }
export function checkWritten(input, answers) {
  const list = (Array.isArray(answers) ? answers : [answers]).filter(Boolean);
  const given = norm(input);
  if (!given) return { ok: false, kind: 'empty', right: list[0] };
  for (const ans of list) if (norm(ans) === given) return { ok: true, kind: 'exact', right: ans };
  if (hasLatin(input)) {
    for (const ans of list) if (latinNorm(toLatin(norm(ans))) === latinNorm(input)) return { ok: true, kind: 'latin', right: ans };
  }
  for (const ans of list) {
    const c = confusion(given, norm(ans));
    if (c) return { ok: true, kind: 'confusion', right: ans, confusion: c };
  }
  for (const ans of list) {
    const r = norm(ans), max = r.length >= 10 ? 2 : r.length >= 5 ? 1 : 0;
    if (max && distance(given, r) <= max) return { ok: true, kind: 'small', right: ans };
  }
  return { ok: false, kind: 'wrong', right: list[0] };
}
