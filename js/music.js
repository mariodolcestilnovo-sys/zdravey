// Musica di sottofondo ORIGINALE in stile tradizionale bulgaro, generata dal browser (Web Audio).
// Cinque temi composti per il gioco (nessuna melodia o registrazione di terzi: niente diritti da pagare).
// Ogni tema: intro → A → B → bridge → controtema → bridge → A → B → conclusione, che porta di nuovo all'intro.

// Scale (semitoni dalla tonica)
const HIJAZ = [0, 1, 4, 5, 7, 8, 10];      // 2ª bassa, 3ª alta: il colore «balcanico»
const DORIAN = [0, 2, 3, 5, 7, 9, 10];
const MIXO = [0, 2, 4, 5, 7, 9, 10];
const HARM_MINOR = [0, 2, 3, 5, 7, 8, 11];

// Notazione delle battute: "grado:ottavi", spazi tra le note. Grado 0 = tonica, 7 = ottava sopra, -1 = sotto.
export const ORDER = ['intro', 'A', 'B', 'bridge', 'C', 'bridge', 'A', 'B', 'coda'];

export const THEMES = {
  // Пътят — La strada (menu, viaggio, frigo): лесно 3+2+2, lento, кавал.
  road: {
    name: 'Пътят', groups: [3, 2, 2], eighth: 0.2, tonic: 62, scale: DORIAN, lead: 'kaval', counter: 'gadulka',
    intro: ['0:7', '4:3 3:2 2:2'],
    A: ['4:3 5:2 4:2', '3:3 2:2 1:2', '2:3 3:2 4:2', '0:7'],
    B: ['7:3 6:2 5:2', '4:3 5:2 6:2', '5:3 4:2 3:2', '4:7'],
    bridge: ['2:3 1:2 0:2', '1:3 2:2 3:2'],
    C: ['4:3 4:2 5:2', '6:3 7:2 6:2', '5:3 4:2 2:2', '3:7'],
    coda: ['2:3 1:2 2:2', '1:3 -1:2 0:2']
  },
  // Градът — La città (cap. 1–3): ръченица 2+2+3, гайда.
  city: {
    name: 'Градът', groups: [2, 2, 3], eighth: 0.15, tonic: 62, scale: HIJAZ, lead: 'gaida', counter: 'kaval',
    intro: ['4:7', '2:2 1:2 0:3'],
    A: ['4:2 5:2 4:3', '3:1 2:1 3:2 4:3', '5:2 4:1 3:1 2:3', '1:2 2:2 0:3'],
    B: ['7:2 6:2 5:3', '6:1 5:1 4:2 5:3', '4:2 3:2 2:1 3:2', '4:4 3:1 4:2'],
    bridge: ['0:2 2:2 4:3', '3:2 2:2 1:3'],
    C: ['4:4 5:3', '6:2 5:2 4:3', '3:4 2:3', '4:7'],
    coda: ['5:2 4:2 3:3', '2:2 1:2 0:3']
  },
  // Домът — La casa (cap. 4, 5, 7): право хоро 2+2, caldo, кавал e гъдулка.
  home: {
    name: 'Домът', groups: [2, 2], eighth: 0.18, tonic: 67, scale: MIXO, lead: 'kaval', counter: 'gadulka',
    intro: ['0:4', '4:2 2:2'],
    A: ['0:1 2:1 4:2', '5:2 4:2', '3:1 2:1 1:2', '0:4', '0:1 2:1 4:2', '5:1 6:1 7:2', '6:2 5:2', '4:4'],
    B: ['7:2 6:2', '5:2 4:2', '5:1 4:1 3:2', '2:4', '4:2 5:2', '6:2 5:1 4:1', '3:2 1:2', '0:4'],
    bridge: ['0:2 4:2', '3:2 1:2'],
    C: ['2:4', '4:3 3:1', '2:2 1:2', '0:4', '5:4', '4:3 2:1', '3:2 2:2', '1:4'],
    coda: ['2:2 1:2', '-1:2 0:2']
  },
  // Пазарът — Il mercato e il viaggio (cap. 6, 8): пайдушко 2+3, saltellante, гайда.
  market: {
    name: 'Пазарът', groups: [2, 3], eighth: 0.14, tonic: 69, scale: HARM_MINOR, lead: 'gaida', counter: 'kaval',
    intro: ['0:5', '4:2 3:3'],
    A: ['4:2 5:3', '4:2 3:1 2:2', '3:2 2:1 1:2', '0:5', '4:2 5:3', '6:2 7:3', '6:1 5:1 4:3', '4:5'],
    B: ['7:2 8:3', '7:2 6:1 5:2', '6:2 5:3', '4:5', '3:2 4:3', '5:2 4:1 3:2', '2:2 1:3', '0:5'],
    bridge: ['0:2 2:3', '4:2 2:3'],
    C: ['2:5', '3:2 4:3', '5:5', '4:2 2:3', '3:5', '2:2 1:3', '-1:5', '0:5'],
    coda: ['2:2 1:3', '-1:2 0:3']
  },
  // Празникът — La festa (cap. 9, 10): копаница 2+2+3+2+2, veloce e festosa.
  feast: {
    name: 'Празникът', groups: [2, 2, 3, 2, 2], eighth: 0.12, tonic: 64, scale: HIJAZ, lead: 'gaida', counter: 'gadulka',
    intro: ['0:11', '4:2 3:2 2:3 1:2 0:2'],
    A: ['4:2 5:2 4:3 3:2 4:2', '5:2 4:2 3:3 2:2 1:2', '2:2 3:2 4:3 5:2 4:2', '0:11'],
    B: ['7:2 6:2 5:3 6:2 7:2', '6:2 5:2 4:3 3:2 4:2', '5:2 4:2 3:3 2:2 3:2', '4:11'],
    bridge: ['0:2 0:2 4:3 0:2 0:2', '3:2 3:2 2:3 1:2 1:2'],
    C: ['4:4 5:3 4:4', '3:4 2:3 1:4', '2:4 3:3 4:4', '5:11'],
    coda: ['4:2 3:2 2:3 1:2 2:2', '1:4 -1:3 0:4']
  }
};

// Quale tema per quale ambiente
export function themeFor(view, chapter) {
  if (view !== 'chapter') return 'road'; // menu, benvenuto, frigo, parole, impostazioni
  if (chapter <= 3) return 'city';
  if ([4, 5, 7].includes(chapter)) return 'home';
  if ([6, 8].includes(chapter)) return 'market';
  return 'feast';
}

const parseBar = str => str.trim().split(/\s+/).map(tok => { const [d, l] = tok.split(':'); return [+d, +l]; });
export const barLength = theme => theme.groups.reduce((a, b) => a + b, 0);
const hz = m => 440 * 2 ** ((m - 69) / 12);
const midiOf = (theme, deg) => theme.tonic + theme.scale[((deg % 7) + 7) % 7] + 12 * Math.floor(deg / 7);

// Sequenza completa di battute di un tema, con la sezione di ognuna
function sequence(theme) {
  return ORDER.flatMap(sec => theme[sec].map(b => ({ sec, notes: parseBar(b) })));
}

let ctx, master, duckGain, timer, nextTime = 0, playing = false, volume = 0.12;
let current = 'road', seq = sequence(THEMES.road), idx = 0, drones = [], pending = null;
// Modalità «ambient» (dentro i capitoli): bordone pieno, тъпан con il ritmo completo, melodia solo accennata, niente eco.
let calm = false, echoSend;
const CALM_TEMPO = 1.25, CALM_VOLUME = 0.85;
const level = () => volume * (calm ? CALM_VOLUME : 1);

function setup() {
  if (ctx) return;
  ctx = new (window.AudioContext || window.webkitAudioContext)();
  master = ctx.createGain(); master.gain.value = 0;
  duckGain = ctx.createGain(); duckGain.gain.value = 1;
  master.connect(duckGain).connect(ctx.destination);
  // Eco leggera, usata solo in modalità ambient
  const delay = ctx.createDelay(1), feedback = ctx.createGain(), tone = ctx.createBiquadFilter();
  echoSend = ctx.createGain(); echoSend.gain.value = 0;
  delay.delayTime.value = 0.38; feedback.gain.value = 0.35; tone.type = 'lowpass'; tone.frequency.value = 1800;
  master.connect(echoSend).connect(delay).connect(tone).connect(feedback).connect(delay);
  tone.connect(duckGain);
}

// ── Strumenti ──
function env(g, t, dur, peak, attack = 0.01, release = 0.03) {
  g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(peak, t + attack);
  g.gain.setValueAtTime(peak, Math.max(t + attack, t + dur - release)); g.gain.linearRampToValueAtTime(0.0001, t + dur);
}
// Гайда: dente di sega filtrato, vibrato leggero, abbellimento prima della nota lunga.
function gaida(t, midi, dur, grace) {
  const o = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain(), vib = ctx.createOscillator(), vg = ctx.createGain();
  o.type = 'sawtooth'; f.type = 'lowpass'; f.frequency.value = 2200; f.Q.value = 2;
  vib.frequency.value = 5.5; vg.gain.value = 3; vib.connect(vg).connect(o.frequency);
  if (grace) { o.frequency.setValueAtTime(hz(midi + 2), t); o.frequency.setValueAtTime(hz(midi), t + 0.035); }
  else o.frequency.setValueAtTime(hz(midi), t);
  env(g, t, dur, 0.15);
  o.connect(f).connect(g).connect(master);
  o.start(t); vib.start(t); o.stop(t + dur + 0.02); vib.stop(t + dur + 0.02);
}
// Кавал: suono morbido, un'ottava sopra, con un soffio.
function kaval(t, midi, dur, peak = 0.14, attack = 0.05) {
  const o = ctx.createOscillator(), g = ctx.createGain(), vib = ctx.createOscillator(), vg = ctx.createGain();
  o.type = 'triangle'; o.frequency.setValueAtTime(hz(midi + 12), t);
  vib.frequency.value = 4.5; vg.gain.value = 4; vib.connect(vg).connect(o.frequency);
  env(g, t, dur, peak, attack, Math.min(0.2, dur / 3));
  o.connect(g).connect(master); o.start(t); vib.start(t); o.stop(t + dur + 0.02); vib.stop(t + dur + 0.02);
  noise(t, Math.min(dur, 0.12), calm ? 0.008 : 0.02, 2500, 'bandpass');
}
// Гъдулка: archetto, più vibrato e un po' di ruvidezza.
function gadulka(t, midi, dur) {
  const o = ctx.createOscillator(), o2 = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain(), vib = ctx.createOscillator(), vg = ctx.createGain();
  o.type = 'sawtooth'; o2.type = 'square'; o.frequency.setValueAtTime(hz(midi), t); o2.frequency.setValueAtTime(hz(midi) * 1.003, t);
  f.type = 'lowpass'; f.frequency.value = 1500; f.Q.value = 4;
  vib.frequency.value = 6.2; vg.gain.value = 5; vib.connect(vg).connect(o.frequency); vib.connect(vg).connect(o2.frequency);
  env(g, t, dur, 0.09, 0.06, 0.05);
  o.connect(f); o2.connect(f); f.connect(g).connect(master);
  [o, o2, vib].forEach(x => { x.start(t); x.stop(t + dur + 0.02); });
}
// Tappeto morbido (modalità ambient): due onde un po' stonate tra loro, attacco lento.
function pad(t, midi, dur) {
  const f = ctx.createBiquadFilter(), g = ctx.createGain();
  f.type = 'lowpass'; f.frequency.value = 1200;
  env(g, t, dur, 0.08, Math.min(0.3, dur / 3), Math.min(0.4, dur / 3));
  [0.997, 1.003].forEach(k => { const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.setValueAtTime(hz(midi) * k, t); o.connect(f); o.start(t); o.stop(t + dur + 0.05); });
  f.connect(g).connect(master);
}
// Тамбура: corde pizzicate, per gli accompagnamenti.
function pluck(t, midi, level = 0.1) {
  const o = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  o.type = 'triangle'; o.frequency.setValueAtTime(hz(midi), t);
  f.type = 'lowpass'; f.frequency.setValueAtTime(3000, t); f.frequency.exponentialRampToValueAtTime(600, t + 0.3);
  g.gain.setValueAtTime(level, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
  o.connect(f).connect(g).connect(master); o.start(t); o.stop(t + 0.5);
}
// Тъпан: mazza (grave) e bacchetta (secca).
function bass(t, level) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'sine'; o.frequency.setValueAtTime(95, t); o.frequency.exponentialRampToValueAtTime(48, t + 0.18);
  g.gain.setValueAtTime(level, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
  o.connect(g).connect(master); o.start(t); o.stop(t + 0.3);
}
function noise(t, dur, level, freq, type = 'highpass') {
  const len = Math.max(1, Math.floor(ctx.sampleRate * dur)), buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  s.buffer = buf; f.type = type; f.frequency.value = freq; g.gain.value = level;
  s.connect(f).connect(g).connect(master); s.start(t);
}
// Bordone (tonica e quinta gravi), continuo per tutto il tema.
function startDrone(theme, t) {
  stopDrone(t);
  const soft = calm ? 1.15 : 1; // in ambient il bordone è un po' più presente
  drones = [theme.tonic - 24, theme.tonic - 17].map((m, i) => {
    const o = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    o.type = 'sawtooth'; o.frequency.value = hz(m); f.type = 'lowpass'; f.frequency.value = 700;
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime((i ? 0.03 : 0.045) * soft, t + 1.2);
    o.connect(f).connect(g).connect(master); o.start(t);
    return { o, g };
  });
}
function stopDrone(t) {
  drones.forEach(({ o, g }) => { try { g.gain.setTargetAtTime(0.0001, t, 0.15); o.stop(t + 0.8); } catch { /* già fermo */ } });
  drones = [];
}

// ── Una battuta, secondo la sezione ──
function scheduleBar(t) {
  const th = THEMES[current], { sec, notes } = seq[idx];
  const E = th.eighth * (calm ? CALM_TEMPO : 1), starts = []; let acc = 0;
  th.groups.forEach(g => { starts.push(acc); acc += g; });
  const longest = Math.max(...th.groups);

  // Melodia
  let pos = 0;
  notes.forEach(([deg, len], i) => {
    const start = t + pos * E, dur = len * E, midi = midiOf(th, deg);
    if (calm) { /* in ambient la melodia nota per nota non suona: vedi sotto */ }
    else if (sec === 'intro') kaval(start, midi, dur);
    else if (sec === 'bridge') pluck(start, midi, 0.12);
    else if (sec === 'C') (th.counter === 'gadulka' ? gadulka : th.counter === 'gaida' ? gaida : kaval)(start, midi, dur, false);
    else (th.lead === 'gaida' ? gaida : kaval)(start, midi, dur, th.lead === 'gaida' && i === 0 && len >= 2);
    pos += len;
  });

  if (calm) {
    // Ambient: la melodia è solo accennata — una nota lunga e morbida per battuta (la prima), che segue il giro
    // del tema senza insistere; nell'intro solo ritmo e bordone.
    if (sec !== 'intro') {
      const [deg] = notes[0], midi = midiOf(th, deg), dur = acc * E * 0.95;
      if (sec === 'bridge') pluck(t, midi, 0.07);
      else pad(t, midi, dur);
    }
    // Тъпан con il ritmo completo (colpi gravi sui gruppi, «pa» della bacchetta sugli altri ottavi), un po' più morbido.
    const soft = sec === 'intro' ? 0.6 : 0.8;
    starts.forEach((s, k) => bass(t + s * E, (th.groups[k] === longest ? 0.45 : 0.3) * soft));
    for (let e = 0; e < acc; e++) if (!starts.includes(e)) noise(t + e * E, 0.035, 0.045 * soft, 6000);
    idx = (idx + 1) % seq.length;
    return acc * E;
  }
  // Accompagnamento: тамбура sugli inizi dei gruppi nel controtema e nel secondo giro
  if (sec === 'C' || (sec !== 'intro' && idx > seq.length / 2)) starts.forEach((s, k) => pluck(t + s * E, th.tonic - 12 + (k % 2 ? 7 : 0), 0.05));

  // Тъпан: grave su ogni gruppo (accento sul gruppo lungo), bacchetta sugli altri ottavi; leggero nell'intro
  const soft = sec === 'intro' || sec === 'coda' ? 0.5 : 1;
  starts.forEach((s, k) => bass(t + s * E, (th.groups[k] === longest ? 0.45 : 0.3) * soft));
  if (sec !== 'intro') for (let e = 0; e < acc; e++) if (!starts.includes(e)) noise(t + e * E, 0.035, 0.045 * soft, 6000);

  idx = (idx + 1) % seq.length;
  return acc * E;
}

function tick() {
  while (nextTime < ctx.currentTime + 0.4) {
    nextTime += scheduleBar(nextTime);
  }
}

function begin(name) {
  current = name; seq = sequence(THEMES[name]); idx = 0;
  echoSend.gain.setValueAtTime(0, ctx.currentTime); // niente eco (richiesta di Mario)
  nextTime = ctx.currentTime + 0.15;
  startDrone(THEMES[name], nextTime);
}

export function start() {
  setup();
  if (playing) return;
  playing = true;
  ctx.resume?.();
  master.gain.cancelScheduledValues(ctx.currentTime);
  master.gain.setValueAtTime(0, ctx.currentTime);
  master.gain.linearRampToValueAtTime(level(), ctx.currentTime + 1.5);
  begin(current);
  tick(); timer = setInterval(tick, 100);
}
export function stop() {
  if (!ctx || !playing) return;
  playing = false; clearInterval(timer);
  master.gain.cancelScheduledValues(ctx.currentTime);
  master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
  master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
  stopDrone(ctx.currentTime + 0.3);
}
// Cambia ambiente: dissolvenza e ripartenza dall'intro del nuovo tema.
export function setTheme(name, ambient = false) {
  if (!THEMES[name] || (name === current && ambient === calm)) return;
  calm = ambient;
  if (!ctx || !playing) { current = name; seq = sequence(THEMES[name]); idx = 0; return; }
  clearInterval(timer);
  const now = ctx.currentTime;
  master.gain.cancelScheduledValues(now);
  master.gain.setValueAtTime(master.gain.value, now);
  master.gain.linearRampToValueAtTime(0.0001, now + 0.6);
  stopDrone(now + 0.5);
  clearTimeout(pending);
  pending = setTimeout(() => {
    pending = null;
    if (!playing) return;
    begin(name);
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setValueAtTime(0.0001, ctx.currentTime);
    master.gain.linearRampToValueAtTime(level(), ctx.currentTime + 1.2);
    tick(); timer = setInterval(tick, 100);
  }, 700);
}
export function setVolume(v) {
  volume = Math.max(0, Math.min(1, v)) * 0.6;
  if (ctx && playing && !pending) master.gain.setTargetAtTime(level(), ctx.currentTime, 0.1);
}
// Abbassa la musica mentre parla la voce.
export function duck(on) {
  if (!ctx) return;
  duckGain.gain.setTargetAtTime(on ? 0.25 : 1, ctx.currentTime, 0.15);
}
export const isPlaying = () => playing;
export const wasStarted = () => !!ctx;
export const currentTheme = () => current;
export const isCalm = () => calm;
export const currentSection = () => (seq[(idx - 1 + seq.length) % seq.length] || {}).sec;
