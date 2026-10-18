// Voce bulgara del browser (Web Speech API). Nessun servizio esterno.
const synth = typeof window !== 'undefined' ? window.speechSynthesis : undefined;
let voices = [];
const listeners = new Set();

function load() {
  if (!synth) return;
  voices = synth.getVoices().filter(v => v.lang && v.lang.toLowerCase().replace('_', '-').startsWith('bg'));
  listeners.forEach(fn => fn(voices));
}
if (synth) {
  load();
  synth.addEventListener?.('voiceschanged', load);
  // Alcuni browser caricano le voci in ritardo.
  setTimeout(load, 400); setTimeout(load, 1500);
}

export const bulgarianVoices = () => voices;
export const hasSpeech = () => !!synth;
export const onVoices = fn => { listeners.add(fn); fn(voices); };

export function speak(text, { voiceURI, rate = 0.9, onend } = {}) {
  if (!synth || !voices.length) return false;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text.replace(/[«»]/g, ''));
  u.voice = voices.find(v => v.voiceURI === voiceURI) || voices[0];
  u.lang = u.voice.lang;
  u.rate = rate;
  u.onend = u.onerror = () => onend?.();
  synth.speak(u);
  return true;
}

export function stop() { synth?.cancel(); }
