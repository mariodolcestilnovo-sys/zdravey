// Tutorial guidato con «faretto»: illumina un comando alla volta e spiega a cosa serve.
// Saltabile in ogni momento (Salta o tasto Esc) e rivedibile dalle impostazioni.

let layer = null, steps = [], idx = 0, done = null, labels = {};

function place() {
  const st = steps[idx];
  const spot = layer.querySelector('.tour-spot'), card = layer.querySelector('.tour-card');
  const el = st.target ? document.querySelector(st.target) : null;
  if (el) {
    el.scrollIntoView({ block: 'nearest' });
    const r = el.getBoundingClientRect(), pad = 6;
    Object.assign(spot.style, { display: 'block', left: r.left - pad + 'px', top: r.top - pad + 'px', width: r.width + pad * 2 + 'px', height: r.height + pad * 2 + 'px' });
    // la scheda va sotto il bersaglio, oppure sopra se non c'è spazio
    const below = r.bottom + 12, h = card.offsetHeight;
    card.style.top = (below + h < window.innerHeight - 8 ? below : Math.max(8, r.top - h - 12)) + 'px';
    card.classList.remove('center');
  } else {
    spot.style.display = 'none';
    card.style.top = ''; card.classList.add('center');
  }
}

function render() {
  const st = steps[idx], last = idx === steps.length - 1;
  layer.querySelector('.tour-card').innerHTML = `
    ${st.html}
    <p class="tour-count">${idx + 1} / ${steps.length}</p>
    <div class="tour-row">
      <button type="button" class="btn ghost small" data-t="skip">${labels.skip}</button>
      <span class="tour-gap"></span>
      ${idx ? `<button type="button" class="btn ghost small" data-t="back">← ${labels.back}</button>` : ''}
      <button type="button" class="btn small" data-t="next">${last ? labels.done : labels.next + ' →'}</button>
    </div>`;
  place();
  layer.querySelector('[data-t="next"]').focus();
}

function close() {
  window.removeEventListener('resize', place);
  document.removeEventListener('keydown', onKey, true);
  layer?.remove(); layer = null;
  const cb = done; done = null; cb?.();
}
function onKey(e) {
  if (e.key === 'Escape') { e.preventDefault(); close(); }
}

// steps: [{ target: selettore CSS o null (scheda al centro), html }]
export function startTour(list, text, onDone) {
  if (layer) close();
  steps = list; idx = 0; done = onDone; labels = text;
  layer = document.createElement('div');
  layer.className = 'tour';
  layer.setAttribute('role', 'dialog'); layer.setAttribute('aria-modal', 'true'); layer.setAttribute('aria-label', text.title);
  layer.innerHTML = '<div class="tour-spot" aria-hidden="true"></div><div class="tour-card"></div>';
  layer.addEventListener('click', e => {
    const b = e.target.closest('[data-t]'); if (!b) return;
    if (b.dataset.t === 'skip') close();
    else if (b.dataset.t === 'back') { idx = Math.max(0, idx - 1); render(); }
    else if (idx === steps.length - 1) close();
    else { idx++; render(); }
  });
  document.body.appendChild(layer);
  window.addEventListener('resize', place);
  document.addEventListener('keydown', onKey, true);
  render();
}
export const tourOpen = () => !!layer;
