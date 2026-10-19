// Abitudine quotidiana gentile (idee P2 del documento clean room, §7.2 e §7.6 della specifica).
// - «Fili della Мартеница»: i giorni di fila in cui si gioca almeno un'attività.
//   Ogni mese ci sono 2 giorni di riposo automatici e gratuiti che non rompono la serie (niente negozio).
// - 3 piccoli obiettivi del giorno; completarli tutti dà una nappina bianco-rossa.
// - Sfida del mese: 10 giorni con tutti gli obiettivi → la calamita di stagione del calendario bulgaro.
// Niente vite, niente classifiche, niente promemoria insistenti. Tutto nel localStorage.

export const REST_PER_MONTH = 2, MONTH_TARGET = 10;
export const GOALS = [
  { id: 'acts', target: 3 },   // 3 attività
  { id: 'run', target: 5 },    // 5 risposte giuste di fila al primo colpo
  { id: 'review', target: 1 }  // un ripasso di 5 minuti
];
const pad = n => String(n).padStart(2, '0');
export const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const addDays = (key, n) => { const [y, m, d] = key.split('-').map(Number); return dayKey(new Date(y, m - 1, d + n)); };
export const monthKey = key => key.slice(0, 7);

function ensure(S, today) {
  S.days ||= [];
  if (!S.goals || S.goals.date !== today) S.goals = { date: today, acts: 0, run: 0, best: 0, review: 0, rewarded: false };
  S.goalDays ||= {}; S.seasonal ||= []; S.tassels ||= 0;
}

// Serie: si conta all'indietro da oggi (o da ieri, se oggi non si è ancora giocato).
export function streak(S, today = dayKey()) {
  const active = new Set(S.days || []), rest = new Set(), restUsed = {};
  let day = active.has(today) ? today : addDays(today, -1), count = 0;
  for (let guard = 0; guard < 800; guard++) {
    if (active.has(day)) { count++; }
    else {
      const m = monthKey(day);
      if ((restUsed[m] || 0) < REST_PER_MONTH && count > 0 && [...active].some(d => d < day)) { restUsed[m] = (restUsed[m] || 0) + 1; rest.add(day); }
      else break;
    }
    day = addDays(day, -1);
  }
  // i giorni di riposo in coda (prima del primo giorno attivo) non contano
  return { count, rest, active };
}

// Chiamata a ogni attività finita bene. Restituisce gli eventi da festeggiare.
export function onActivity(S, firstTry, today = dayKey()) {
  ensure(S, today);
  if (!S.days.includes(today)) { S.days.push(today); S.days = S.days.slice(-500); }
  const g = S.goals;
  g.acts++;
  if (firstTry !== null) { g.run = firstTry ? g.run + 1 : 0; g.best = Math.max(g.best, g.run); }
  return reward(S, today);
}
export function onReview(S, today = dayKey()) {
  ensure(S, today);
  if (!S.days.includes(today)) S.days.push(today);
  S.goals.review = 1;
  return reward(S, today);
}
export function goalProgress(S, today = dayKey()) {
  ensure(S, today);
  const g = S.goals;
  return GOALS.map(x => ({ id: x.id, target: x.target, value: Math.min(x.target, x.id === 'acts' ? g.acts : x.id === 'run' ? g.best : g.review) }));
}
function reward(S, today) {
  const events = [];
  const all = goalProgress(S, today).every(x => x.value >= x.target);
  if (all && !S.goals.rewarded) {
    S.goals.rewarded = true; S.tassels++;
    const m = monthKey(today);
    S.goalDays[m] = (S.goalDays[m] || 0) + 1;
    events.push('goals');
    if (S.goalDays[m] >= MONTH_TARGET && !S.seasonal.includes(m)) { S.seasonal.push(m); events.push('seasonal'); }
  }
  return events;
}
export const monthProgress = (S, today = dayKey()) => { ensure(S, today); return S.goalDays[monthKey(today)] || 0; };

// Calendario di un mese: per ogni giorno 'active' | 'rest' | ''.
export function monthCalendar(S, today = dayKey()) {
  const { rest, active } = streak(S, today);
  const [y, m] = today.split('-').map(Number);
  const first = new Date(y, m - 1, 1), days = new Date(y, m, 0).getDate();
  const offset = (first.getDay() + 6) % 7; // lunedì = 0
  const cells = [];
  for (let d = 1; d <= days; d++) {
    const k = `${y}-${pad(m)}-${pad(d)}`;
    cells.push({ d, key: k, state: active.has(k) ? 'active' : rest.has(k) ? 'rest' : '', today: k === today });
  }
  return { offset, cells, year: y, month: m - 1 };
}

// Calamite di stagione: una per mese, dal calendario bulgaro.
export const SEASONAL = [
  { bg: 'Сурвакане', it: 'Survakane, 1° gennaio', en: 'Survakane, 1 January' },
  { bg: 'Трифон Зарезан', it: 'Trifon Zarezan, la festa delle vigne', en: 'Trifon Zarezan, the vine festival' },
  { bg: 'Баба Марта', it: 'Baba Marta, 1° marzo', en: 'Baba Marta, 1 March' },
  { bg: 'Великден', it: 'Pasqua: le uova rosse', en: 'Easter: the red eggs' },
  { bg: '24 май', it: '24 maggio, festa dell’alfabeto', en: '24 May, alphabet day' },
  { bg: 'Еньовден', it: 'Enyovden, le erbe di mezza estate', en: 'Enyovden, midsummer herbs' },
  { bg: 'Морето', it: 'Il mare d’estate', en: 'The summer sea' },
  { bg: 'Рила', it: 'I laghi di Rila', en: 'The Rila lakes' },
  { bg: 'Съединение', it: '6 settembre, l’Unificazione', en: '6 September, Unification' },
  { bg: 'Тиквеник', it: 'Tikvenik, la sfoglia di zucca', en: 'Tikvenik, the pumpkin pastry' },
  { bg: 'Будители', it: '1° novembre, i Risvegliatori', en: '1 November, the Enlighteners' },
  { bg: 'Коледа', it: 'Natale', en: 'Christmas' }
];
