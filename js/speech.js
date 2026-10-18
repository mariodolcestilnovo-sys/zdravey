// Voce bulgara del browser (Web Speech API). Nessun servizio esterno.
const synth = typeof window !== 'undefined' ? window.speechSynthesis : undefined;
let voices = [];
let lastError = '';
const listeners = new Set();

// Su iPhone (Safari e Chrome) l'audio delle pagine segue l'interruttore del silenzioso.
// Con audioSession «playback» la voce si sente anche in silenzioso, come un video.
export function playbackSession() {
  try { if (navigator.audioSession && navigator.audioSession.type !== 'playback') navigator.audioSession.type = 'playback'; } catch { /* non supportato */ }
}
// Subito al caricamento, prima che qualunque suono possa mettere la pagina in modalità «sottofondo».
if (typeof navigator !== 'undefined') playbackSession();
function wakeAudio() {
  playbackSession();
  startSilence();
}

// Trucco per iPhone in silenzioso: mentre la voce parla suona un file audio muto in loop.
// Un elemento <audio> attivo porta la pagina in modalità «riproduzione» e l'audio non segue più l'interruttore.
let silence, silenceTimer;
function silentWavUrl() {
  const rate = 8000, n = rate / 2, buf = new ArrayBuffer(44 + n), v = new DataView(buf);
  const w = (o, str) => [...str].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)));
  w(0, 'RIFF'); v.setUint32(4, 36 + n, true); w(8, 'WAVE'); w(12, 'fmt ');
  v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, rate, true); v.setUint32(28, rate, true); v.setUint16(32, 1, true); v.setUint16(34, 8, true);
  w(36, 'data'); v.setUint32(40, n, true);
  for (let i = 0; i < n; i++) v.setUint8(44 + i, 128); // 8 bit: 128 = silenzio
  return URL.createObjectURL(new Blob([buf], { type: 'audio/wav' }));
}
export function startSilence() {
  if (typeof Audio === 'undefined') return;
  clearTimeout(silenceTimer);
  try {
    if (!silence) {
      silence = new Audio(silentWavUrl());
      silence.loop = true;
      silence.setAttribute('playsinline', '');
      silence.setAttribute('x-webkit-airplay', 'deny');
    }
    if (silence.paused) silence.play().catch(() => {});
  } catch { /* niente */ }
}
function stopSilenceSoon() {
  clearTimeout(silenceTimer);
  silenceTimer = setTimeout(() => { try { silence?.pause(); } catch { /* niente */ } }, 800);
}
export const silenceState = () => (silence ? (silence.paused ? 'in pausa' : 'attivo') : 'non creato');

const isBg = v => v.lang && v.lang.toLowerCase().replace('_', '-').startsWith('bg');
function load() {
  if (!synth) return voices;
  const next = synth.getVoices().filter(isBg);
  const changed = next.length !== voices.length;
  voices = next;
  if (changed) listeners.forEach(fn => fn(voices));
  return voices;
}
if (synth) {
  load();
  synth.addEventListener?.('voiceschanged', load);
  // Safari su iPhone carica le voci in ritardo e non sempre avvisa.
  [300, 1000, 2500, 5000].forEach(ms => setTimeout(load, ms));
}

// Frasi registrate (audio/index.json, voce libera Piper «dimitar»): su iPhone si sentono anche in silenzioso.
let clips = {};
export let useClips = false;
export const setUseClips = on => { useClips = on; };
export const clipCount = () => Object.keys(clips).length;
if (typeof fetch !== 'undefined') fetch('audio/index.json').then(r => (r.ok ? r.json() : {})).then(j => { clips = j; }).catch(() => {});
const norm = t => t.replace(/\u0301/g, '').replace(/[«»]/g, '').trim();
let player;
function playClip(text, rate, onstart, onend, force = false) {
  const file = clips[norm(text)];
  if ((!useClips && !force) || !file || typeof Audio === 'undefined') return false;
  playbackSession();
  if (synth?.speaking || synth?.pending) synth.cancel();
  if (!player) { player = new Audio(); player.preload = 'auto'; player.setAttribute('playsinline', ''); }
  player.pause();
  player.onplaying = () => { player.onplaying = null; onstart?.(); };
  player.onended = player.onerror = () => { player.onended = player.onerror = null; onend?.(); };
  player.src = 'audio/' + file;
  player.playbackRate = Math.min(1.2, Math.max(0.6, rate));
  const p = player.play();
  p?.catch?.(() => onend?.());
  return true;
}

export const bulgarianVoices = () => load();
export const hasSpeech = () => !!synth;
export const onVoices = fn => { listeners.add(fn); fn(voices); };
export const lastSpeechError = () => lastError;
export const allVoicesCount = () => synth?.getVoices().length || 0;

// Parla anche se l'elenco delle voci è vuoto: con lang="bg-BG" il sistema sceglie da solo
// la voce bulgara installata (succede su alcuni iPhone).
export function speak(text, { voiceURI, rate = 0.9, onend, onstart, female = false } = {}) {
  // Di norma parla la voce del dispositivo (Daria su Apple). Le frasi registrate (Dimitar, maschile) si usano
  // se scelte nelle impostazioni (tranne per i personaggi femminili) o come riserva se manca la voce bulgara.
  const hasDevice = load().length > 0;
  if (useClips && !(female && hasDevice) && playClip(text, rate, onstart, onend)) return true;
  if (!hasDevice && playClip(text, rate, onstart, onend, true)) return true;
  if (!synth) return false;
  load();
  wakeAudio();
  // Su Safari un cancel() seguito subito da speak() può restare muto: annulla solo se serve.
  if (synth.speaking || synth.pending) synth.cancel();
  const u = new SpeechSynthesisUtterance(text.replace(/[«»]/g, ''));
  const v = voices.find(x => x.voiceURI === voiceURI) || voices[0];
  if (v) u.voice = v;
  u.lang = v?.lang || 'bg-BG';
  u.rate = rate;
  u.onstart = () => onstart?.();
  u.onend = () => { lastError = ''; stopSilenceSoon(); onend?.(); };
  u.onerror = e => { lastError = e.error || 'error'; stopSilenceSoon(); onend?.(); };
  keep.push(u); keep = keep.slice(-5);
  synth.resume?.(); // Chrome a volte resta in pausa dopo un cambio di scheda
  synth.speak(u);
  return true;
}

export function stop() { player?.pause(); if (synth?.speaking || synth?.pending) synth.cancel(); }

// Diagnostica: prova la sintesi in modi diversi e riporta cosa succede (per capire i problemi su iPhone).
let keep = []; // tiene vive le frasi: alcuni browser le perdono prima di leggerle
export function diagnose(mode, log) {
  if (mode === 'file') {
    const t0 = performance.now(), at = () => `${Math.round(performance.now() - t0)} ms`;
    log(`— prova «file registrato»: frasi registrate=${clipCount()}`);
    playbackSession();
    log(`  audioSession=${navigator.audioSession ? navigator.audioSession.type + '/' + (navigator.audioSession.state || '?') : 'assente'} effetti=${window.__sfxCtx ? window.__sfxCtx.state : 'mai creati'}`);
    setTimeout(() => log(`  dopo 1 s: tempo=${player ? player.currentTime.toFixed(2) : '-'} s, volume=${player?.volume}, muto=${player?.muted}, pausa=${player?.paused}`), 1000);
    const was = useClips; useClips = true;
    const ok = playClip('Здравей! Казвам се Мила.', 1, () => log(`  ${at()}: è partita`), () => log(`  ${at()}: finita`));
    useClips = was;
    if (!ok) log('  nessun file per questa frase');
    return;
  }
  if (!synth) { log('speechSynthesis assente'); return; }
  const all = synth.getVoices();
  const bg = all.filter(isBg);
  const t0 = performance.now();
  const at = () => `${Math.round(performance.now() - t0)} ms`;
  let text = 'Здравей! Казвам се Мила.', v = null, lang = 'bg-BG';
  if (mode.startsWith('voice:')) v = bg[+mode.slice(6)] || null;
  if (mode === 'en') { text = 'Hello, this is a test.'; lang = 'en-US'; v = all.find(x => x.lang?.startsWith('en')) || null; }
  log(`— prova «${mode}»: voce=${v ? `${v.name} (${v.lang}, ${v.localService ? 'locale' : 'online'}, ${v.voiceURI})` : 'nessuna, solo lingua ' + lang}`);
  wakeAudio();
  log(`  prima: speaking=${synth.speaking} pending=${synth.pending} paused=${synth.paused} sicuro=${window.isSecureContext} audioSession=${navigator.audioSession ? navigator.audioSession.type : 'assente'}`);
  setTimeout(() => log(`  audio muto: ${silenceState()}`), 300);
  if (synth.speaking || synth.pending) synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  if (v) u.voice = v;
  u.lang = v?.lang || lang;
  u.volume = 1; u.rate = 1;
  u.onstart = () => log(`  ${at()}: è partita`);
  u.onend = () => { log(`  ${at()}: finita`); stopSilenceSoon(); };
  u.onerror = e => { log(`  ${at()}: ERRORE ${e.error}`); stopSilenceSoon(); };
  keep.push(u); keep = keep.slice(-5);
  synth.speak(u);
  setTimeout(() => log(`  dopo 3 s: speaking=${synth.speaking} pending=${synth.pending} paused=${synth.paused}`), 3000);
}

// Al primo tocco prepara già l'audio muto, così la prima frase non arriva prima di lui.
if (typeof document !== 'undefined') {
  document.addEventListener('pointerdown', () => { startSilence(); stopSilenceSoon(); }, { once: true, capture: true });
}
