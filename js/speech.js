// Voce bulgara del browser (Web Speech API). Nessun servizio esterno.
const synth = typeof window !== 'undefined' ? window.speechSynthesis : undefined;
let voices = [];
let lastError = '';
const listeners = new Set();

// Su iPhone (Safari e Chrome) l'audio delle pagine segue l'interruttore del silenzioso.
// Con audioSession «playback» la voce si sente anche in silenzioso, come un video.
function wakeAudio() {
  try { if (navigator.audioSession && navigator.audioSession.type !== 'playback') navigator.audioSession.type = 'playback'; } catch { /* non supportato */ }
}

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

export const bulgarianVoices = () => load();
export const hasSpeech = () => !!synth;
export const onVoices = fn => { listeners.add(fn); fn(voices); };
export const lastSpeechError = () => lastError;
export const allVoicesCount = () => synth?.getVoices().length || 0;

// Parla anche se l'elenco delle voci è vuoto: con lang="bg-BG" il sistema sceglie da solo
// la voce bulgara installata (succede su alcuni iPhone).
export function speak(text, { voiceURI, rate = 0.9, onend, onstart } = {}) {
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
  u.onend = () => { lastError = ''; onend?.(); };
  u.onerror = e => { lastError = e.error || 'error'; onend?.(); };
  keep.push(u); keep = keep.slice(-5);
  synth.resume?.(); // Chrome a volte resta in pausa dopo un cambio di scheda
  synth.speak(u);
  return true;
}

export function stop() { if (synth?.speaking || synth?.pending) synth.cancel(); }

// Diagnostica: prova la sintesi in modi diversi e riporta cosa succede (per capire i problemi su iPhone).
let keep = []; // tiene vive le frasi: alcuni browser le perdono prima di leggerle
export function diagnose(mode, log) {
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
  if (synth.speaking || synth.pending) synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  if (v) u.voice = v;
  u.lang = v?.lang || lang;
  u.volume = 1; u.rate = 1;
  u.onstart = () => log(`  ${at()}: è partita`);
  u.onend = () => log(`  ${at()}: finita`);
  u.onerror = e => log(`  ${at()}: ERRORE ${e.error}`);
  keep.push(u); keep = keep.slice(-5);
  synth.speak(u);
  setTimeout(() => log(`  dopo 3 s: speaking=${synth.speaking} pending=${synth.pending} paused=${synth.paused}`), 3000);
}
