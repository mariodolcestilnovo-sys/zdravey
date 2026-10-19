// Memoria delle parole e ripasso dilazionato (idea P1 del documento clean room, §6 della specifica).
// Per ogni parola si stima l'«emivita» h (in giorni): dopo h giorni la probabilità di ricordarla scende al 50%.
//   p_ricordo = 2^(−Δ / h)      h = 2^(θ · x)      x = [1, √giuste, √sbagliate, esposizioni]
// I pesi θ sono fissi (non ci sono dati di altri giocatori): una parola nuova dura circa 1,5 giorni,
// ogni risposta giusta allunga il ricordo, ogni errore lo accorcia. Tutto resta nel localStorage.
import { chapters, chapterData } from './content.js';

const THETA = [0.6, 1.1, -0.9, 0.08];
const DAY = 86400000;
const strip = s => s.replace(/́/g, '');
export const normBg = s => strip(s).toLowerCase().replace(/[.,!?¡¿;:«»"“”()…–—-]/g, ' ').replace(/\s+/g, ' ').trim();

// Parole ripassabili: le voci semplici delle liste (senza «/» o «…»).
export const WORDS = [];
for (const c of chapters) {
  (chapterData[c.id]?.words || []).forEach(([w, tl, m], i) => {
    const bg = strip(w);
    if (/[/…]/.test(bg)) return;
    WORDS.push({ id: `${c.id}-${i}`, ch: c.id, bg, tl, m, key: normBg(bg) });
  });
}
const byKey = WORDS.slice().sort((a, b) => b.key.length - a.key.length);

export function halfLife(m) {
  const x = THETA[0] + THETA[1] * Math.sqrt(m.r || 0) + THETA[2] * Math.sqrt(m.w || 0) + THETA[3] * (m.n || 0);
  return 2 ** Math.max(-3, Math.min(9, x));
}
export function recall(m, now = Date.now()) {
  if (!m || m.t == null || !m.n) return null;
  return 2 ** (-((now - m.t) / DAY) / halfLife(m));
}
export function record(mem, id, ok, now = Date.now()) {
  const m = (mem[id] ||= { r: 0, w: 0, n: 0, t: 0 });
  if (ok) m.r++; else m.w++;
  m.n++; m.t = now;
}
// Prima esposizione (fine capitolo): conta come una risposta giusta solo se la parola è ancora nuova.
export function expose(mem, id, now = Date.now()) { if (!mem[id]) record(mem, id, true, now); }

// Parole che compaiono in un testo bulgaro (per collegare un'attività alle parole della lista).
export function wordsIn(text) {
  const t = ' ' + normBg(text) + ' ';
  return byKey.filter(w => w.key && t.includes(' ' + w.key + ' ')).map(w => w.id);
}
export function activityText(a) {
  return [a.bg, a.say, a.sign, a.example, ...(a.options || []).filter(o => typeof o === 'string'),
    ...(Array.isArray(a.answer) ? a.answer : [typeof a.answer === 'string' ? a.answer : '']), ...(a.pairs || []).map(p => p[0])]
    .filter(Boolean).join(' · ');
}

// Livello di «freschezza» per l'indicatore a 3 tacche: 0 = mai vista, 1 = da ripassare, 2 = così così, 3 = fresca.
export function freshness(m, now = Date.now()) {
  const p = recall(m, now);
  if (p == null) return 0;
  return p > 0.8 ? 3 : p > 0.5 ? 2 : 1;
}

// Le n parole da ripassare: prima quelle già viste con il ricordo più basso, poi le nuove dei capitoli iniziati.
export function pickReview(mem, startedChapters, n = 10, now = Date.now()) {
  const pool = WORDS.filter(w => startedChapters.includes(w.ch));
  const seen = pool.filter(w => mem[w.id]).sort((a, b) => recall(mem[a.id], now) - recall(mem[b.id], now));
  const fresh = pool.filter(w => !mem[w.id]);
  return [...seen, ...fresh].slice(0, n);
}
