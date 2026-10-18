// Voce bulgara del browser (Web Speech API). Nessun servizio esterno.
const synth = typeof window !== 'undefined' ? window.speechSynthesis : undefined;
let voices = [];
let lastError = '';
const listeners = new Set();

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
  synth.resume?.(); // Chrome a volte resta in pausa dopo un cambio di scheda
  synth.speak(u);
  return true;
}

export function stop() { if (synth?.speaking || synth?.pending) synth.cancel(); }
