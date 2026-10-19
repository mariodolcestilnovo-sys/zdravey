// Musica di sottofondo ORIGINALE in stile tradizionale bulgaro, generata dal browser (Web Audio).
// Nessuna registrazione né melodia di terzi: composizione nuova del progetto, quindi niente diritti da pagare.
// Ritmo di ръченица (7/8 = 2+2+3), scala con 2ª abbassata e 3ª alzata, гайда con bordone, кавал e тъпан.

const EIGHTH = 0.15; // secondi per ottavo (battuta di 7/8 ≈ 1,05 s)
// Nota MIDI: re = 62. Ogni battuta = 7 ottavi. [nota, durata in ottavi]; 0 = pausa.
const D = 62, Eb = 63, Fs = 66, G = 67, A = 69, Bb = 70, C = 72, D5 = 74;
const TUNE = [
  // A
  [[A, 2], [Bb, 2], [A, 3]], [[G, 1], [Fs, 1], [G, 2], [A, 3]], [[Bb, 2], [A, 1], [G, 1], [Fs, 3]], [[Eb, 2], [Fs, 2], [D, 3]],
  // A'
  [[A, 2], [Bb, 2], [C, 3]], [[Bb, 1], [A, 1], [G, 2], [A, 3]], [[Bb, 2], [A, 1], [G, 1], [Fs, 1], [G, 2]], [[A, 7]],
  // B
  [[D5, 2], [C, 2], [Bb, 3]], [[C, 1], [Bb, 1], [A, 2], [Bb, 3]], [[A, 2], [G, 2], [Fs, 1], [G, 2]], [[A, 4], [G, 1], [A, 2]],
  // B'
  [[D5, 2], [C, 2], [Bb, 1], [C, 2]], [[Bb, 1], [A, 1], [G, 2], [Fs, 3]], [[G, 1], [Fs, 1], [Eb, 2], [Fs, 3]], [[D, 7]]
];
const hz = m => 440 * 2 ** ((m - 69) / 12);

let ctx, master, duckGain, timer, nextTime = 0, bar = 0, round = 0, playing = false, volume = 0.2;

function setup() {
  if (ctx) return;
  ctx = new (window.AudioContext || window.webkitAudioContext)();
  master = ctx.createGain(); master.gain.value = 0;
  duckGain = ctx.createGain(); duckGain.gain.value = 1;
  master.connect(duckGain).connect(ctx.destination);
}

// Гайда: onda a dente di sega filtrata, vibrato leggero, piccolo abbellimento prima della nota.
function gaida(t, midi, dur, grace) {
  const o = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain(), vib = ctx.createOscillator(), vg = ctx.createGain();
  o.type = 'sawtooth'; f.type = 'lowpass'; f.frequency.value = 2200; f.Q.value = 2;
  vib.frequency.value = 5.5; vg.gain.value = 3; vib.connect(vg).connect(o.frequency);
  if (grace) { o.frequency.setValueAtTime(hz(midi + 2), t); o.frequency.setValueAtTime(hz(midi), t + 0.035); }
  else o.frequency.setValueAtTime(hz(midi), t);
  g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.16, t + 0.01);
  g.gain.setValueAtTime(0.16, t + dur - 0.03); g.gain.linearRampToValueAtTime(0.0001, t + dur);
  o.connect(f).connect(g).connect(master);
  o.start(t); vib.start(t); o.stop(t + dur + 0.02); vib.stop(t + dur + 0.02);
}
// Кавал: sinusoide morbida con un soffio di rumore.
function kaval(t, midi, dur) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'triangle'; o.frequency.setValueAtTime(hz(midi + 12), t);
  g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.13, t + 0.04);
  g.gain.setValueAtTime(0.13, t + dur - 0.05); g.gain.linearRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(master); o.start(t); o.stop(t + dur + 0.02);
  noise(t, Math.min(dur, 0.12), 0.025, 2500, 'bandpass');
}
// Тъпан: colpo grave (mazza) e colpo secco (bacchetta).
function bass(t, accent) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'sine'; o.frequency.setValueAtTime(95, t); o.frequency.exponentialRampToValueAtTime(48, t + 0.18);
  g.gain.setValueAtTime(accent ? 0.5 : 0.32, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
  o.connect(g).connect(master); o.start(t); o.stop(t + 0.3);
}
function noise(t, dur, level, freq, type = 'highpass') {
  const len = Math.max(1, Math.floor(ctx.sampleRate * dur)), buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  s.buffer = buf; f.type = type; f.frequency.value = freq; g.gain.value = level;
  s.connect(f).connect(g).connect(master); s.start(t);
}
// Bordone: re e la gravi, sempre accesi finché suona la musica.
let drones = [];
function startDrone(t) {
  drones = [D - 24, A - 24].map((m, i) => {
    const o = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    o.type = 'sawtooth'; o.frequency.value = hz(m); f.type = 'lowpass'; f.frequency.value = 700;
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(i ? 0.035 : 0.05, t + 1);
    o.connect(f).connect(g).connect(master); o.start(t);
    return o;
  });
}
function stopDrone(t) { drones.forEach(o => { try { o.stop(t); } catch { /* già fermo */ } }); drones = []; }

function scheduleBar(t) {
  const notes = TUNE[bar];
  const useKaval = round % 2 === 1;
  let pos = 0;
  notes.forEach(([m, len], i) => {
    const start = t + pos * EIGHTH, dur = len * EIGHTH;
    if (m) (useKaval ? kaval : gaida)(start, m, dur, !useKaval && i === 0 && len >= 2);
    pos += len;
  });
  // ръченица: 2 + 2 + 3 → colpi gravi su 0, 2, 4 (accento sul lungo), bacchetta sugli altri ottavi
  [0, 2, 4].forEach(e => bass(t + e * EIGHTH, e === 4));
  [1, 3, 5, 6].forEach(e => noise(t + e * EIGHTH, 0.04, 0.05, 6000));
  bar = (bar + 1) % TUNE.length;
  if (bar === 0) round++;
}

function tick() {
  while (nextTime < ctx.currentTime + 0.4) { scheduleBar(nextTime); nextTime += 7 * EIGHTH; }
}

export function start() {
  setup();
  if (playing) return;
  playing = true;
  ctx.resume?.();
  nextTime = ctx.currentTime + 0.1;
  master.gain.cancelScheduledValues(ctx.currentTime);
  master.gain.setValueAtTime(0, ctx.currentTime);
  master.gain.linearRampToValueAtTime(volume, ctx.currentTime + 1.5);
  startDrone(nextTime);
  tick(); timer = setInterval(tick, 100);
}
export function stop() {
  if (!ctx || !playing) return;
  playing = false; clearInterval(timer);
  master.gain.cancelScheduledValues(ctx.currentTime);
  master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
  master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
  stopDrone(ctx.currentTime + 0.45);
}
export function setVolume(v) {
  volume = Math.max(0, Math.min(1, v)) * 0.6;
  if (ctx && playing) master.gain.setTargetAtTime(volume, ctx.currentTime, 0.1);
}
// Abbassa la musica mentre parla la voce.
export function duck(on) {
  if (!ctx) return;
  duckGain.gain.setTargetAtTime(on ? 0.25 : 1, ctx.currentTime, 0.15);
}
export const isPlaying = () => playing;
export const wasStarted = () => !!ctx;
