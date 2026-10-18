// Controlla che ogni frase ascoltabile abbia il suo file audio: node tests/audio.test.mjs
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

const texts = JSON.parse(execFileSync(process.execPath, [new URL('../tools/audio-texts.mjs', import.meta.url).pathname]));
const index = JSON.parse(readFileSync(new URL('../audio/index.json', import.meta.url)));
const missing = texts.filter(t => !index[t] || !existsSync(new URL('../audio/' + index[t], import.meta.url)));
if (missing.length) { console.error('✗ frasi senza audio (rifai tools/make_audio.py):\n' + missing.join('\n')); process.exit(1); }
console.log(`✓ ${texts.length} frasi con il loro file audio`);
