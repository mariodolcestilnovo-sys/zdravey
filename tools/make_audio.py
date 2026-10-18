"""Registra in file audio le frasi bulgare del gioco con Piper (voce libera «dimitar»).

Uso (dalla cartella del progetto):
  node tools/audio-texts.mjs > /tmp/testi.json
  PYTHON_CON_PIPER tools/make_audio.py /tmp/testi.json MODELLO.onnx CARTELLA_ESPEAK_DATA

Crea audio/<codice>.m4a (AAC, va bene su iPhone, Android e computer) e audio/index.json
(frase → file). Le frasi già registrate non vengono rifatte. Serve macOS (afconvert).
"""
import hashlib
import json
import subprocess
import sys
import tempfile
import wave
from pathlib import Path

from piper import PiperVoice

texts_file, model, espeak_dir = sys.argv[1:4]
root = Path(__file__).resolve().parent.parent
out = root / 'audio'
out.mkdir(exist_ok=True)
index_path = out / 'index.json'
index = json.loads(index_path.read_text()) if index_path.exists() else {}

texts = json.loads(Path(texts_file).read_text())
voice = PiperVoice.load(model, espeak_data_dir=espeak_dir)
made = 0
for t in texts:
    name = hashlib.sha1(t.encode('utf-8')).hexdigest()[:12] + '.m4a'
    if index.get(t) == name and (out / name).exists():
        continue
    with tempfile.TemporaryDirectory() as tmp:
        wav = Path(tmp) / 'a.wav'
        with wave.open(str(wav), 'wb') as w:
            voice.synthesize_wav(t, w)
        subprocess.run(['afconvert', '-f', 'm4af', '-d', 'aac', '-b', '48000', str(wav), str(out / name)], check=True)
    index[t] = name
    made += 1

# Toglie le frasi che non esistono più nel gioco.
for t in list(index):
    if t not in texts:
        (out / index.pop(t)).unlink(missing_ok=True)

index_path.write_text(json.dumps(dict(sorted(index.items())), ensure_ascii=False, indent=1))
print(f'{made} nuove registrazioni, {len(index)} frasi in audio/index.json')
