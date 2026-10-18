# Здравей! – La sfida della Мартеница

Gioco web per imparare il bulgaro (A1), con aiuti in italiano o inglese.
Progetto separato da Dolce Stilnovo, ispirato alle meccaniche del suo Prototipo 2.

**Stato:** capitolo 1 giocabile in locale. Testi bulgari **da far controllare a un madrelingua**
([elenco](docs/DA-CONTROLLARE.md)). Non pubblicato online.

## Cosa c'è
- Benvenuto: lingua degli aiuti, nome (anche in cirillico, con tastiera fonetica QWERTY sullo schermo), scelta della guida.
- Capitolo 1 «Здравей, София!»: 5 scene, 3 spiegazioni della guida, 15 attività
  (Scopri / Prova / Usa), finale e calamita per il frigo.
- Attività: scelta, abbinamento, riordino di parole, composizione con lettere, lettura di cartelli,
  ascolto, messaggio libero (non corretto, non salvato, con lo spazio pronto per un futuro consiglio AI).
- Errori: si riprova subito, «Proviamo insieme» è facoltativo.
- Frigo con 10 posti, lista delle parole con vocale accentata, impostazioni.
- Cirillico: font Sofia Sans (OFL) con forme classiche predefinite e forme bulgare moderne a scelta;
  traslitterazione ufficiale (Aa, accesa di default); traduzioni aperte nei capitoli 1–10;
  voce bulgara del dispositivo quando c'è.
- Salvataggio solo nel browser (`localStorage`). Nessun account, nessun dato inviato.

## Provare in locale
```sh
node tools/serve.mjs 8091
```
Poi apri http://localhost:8091.

Per provarlo sul telefono con il Wi‑Fi di casa: `node tools/serve.mjs 8093 --lan`, poi sul telefono
apri l'indirizzo che compare (es. http://192.168.1.3:8093). Funziona solo dentro la rete di casa.

## Audio delle frasi
Le frasi bulgare sono registrate in `audio/` (file .m4a) con **Piper**, programma libero che funziona
offline, e la voce bulgara «dimitar» (pacchetto rhasspy/piper-voices, licenza MIT; dati di
addestramento CC0). Su iPhone i file si sentono anche in silenzioso, a differenza della voce del browser.
Le frasi con il nome del giocatore usano la voce del dispositivo. Per rifare l'audio dopo aver cambiato
le frasi (serve un Python con `piper-tts` e il modello scaricato):
```sh
node tools/audio-texts.mjs > testi.json
python tools/make_audio.py testi.json bg_BG-dimitar-medium.onnx CARTELLA/espeak-ng-data
node tests/audio.test.mjs
```
Nota: la cartella `espeak-ng-data` deve stare in un percorso corto (es. `~/.cache/zdv/`).

## Controlli
```sh
node tests/content.test.mjs        # struttura dei contenuti e traslitterazione
node tools/list-bulgarian.mjs      # rigenera docs/DA-CONTROLLARE.md
```

## File
- `js/content.js` – storia, attività, parole (tutti i testi bulgari sono qui)
- `js/app.js` – schermate e logica · `js/art.js` – illustrazioni SVG
- `js/speech.js` – voce del browser · `js/translit.js` – traslitterazione
- `fonts/` – Sofia Sans e variante con forme classiche (`tools/make_classic_font.py`), licenza OFL
- `docs/REGISTRO.md` – registro delle modifiche · `docs/PROPOSTA.md` – proposta approvata
