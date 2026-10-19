// Condividi il frigo: un'immagine formato «storia» (1080×1920) disegnata nel browser,
// poi il pannello di condivisione del telefono oppure lo scaricamento del file.
import { magnets, lockedMagnet } from './art.js';

const W = 1080, H = 1920;
const svgImage = svg => new Promise(resolve => {
  const img = new Image();
  img.onload = () => resolve(img); img.onerror = () => resolve(null);
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.replace('<svg ', '<svg width="300" height="300" '));
});
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}

// chapters: elenco capitoli; won: chiavi delle calamite conquistate; text: { line1, line2, url, copyright }
export async function fridgeImage(chapters, won, text) {
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#fbf7f2'; ctx.fillRect(0, 0, W, H);
  // filo della мартеница in alto e in basso
  for (const y of [0, H - 28]) for (let x = 0; x < W; x += 56) { ctx.fillStyle = (x / 56) % 2 ? '#ffffff' : '#c8102e'; ctx.fillRect(x, y, 56, 28); }
  ctx.textAlign = 'center';
  ctx.fillStyle = '#c8102e'; ctx.font = '900 130px "Sofia Sans", sans-serif'; ctx.fillText('Здравей!', W / 2, 220);
  ctx.fillStyle = '#6d625c'; ctx.font = '600 46px "Zdravey Classic", "Sofia Sans", sans-serif'; ctx.fillText(text.subtitle, W / 2, 290);
  // frigo
  const fx = 150, fy = 360, fw = 780, fh = 1180;
  const grad = ctx.createLinearGradient(fx, 0, fx + fw, 0);
  grad.addColorStop(0, '#f7f9fa'); grad.addColorStop(.55, '#e9eef1'); grad.addColorStop(1, '#dfe6ea');
  ctx.fillStyle = grad; roundRect(ctx, fx, fy, fw, fh, 70); ctx.fill();
  ctx.strokeStyle = '#cfd8de'; ctx.lineWidth = 6; ctx.stroke();
  ctx.fillStyle = '#cfd8de'; ctx.fillRect(fx, fy + fh * 0.38, fw, 6);
  ctx.fillStyle = '#c3ccd2'; roundRect(ctx, fx + fw - 48, fy + 110, 22, 200, 11); ctx.fill(); roundRect(ctx, fx + fw - 48, fy + fh * 0.38 + 50, 22, 280, 11); ctx.fill();
  // calamite 3 per riga
  const size = 200, gap = 36, x0 = fx + 60, y0 = fy + 70;
  for (let i = 0; i < chapters.length; i++) {
    const ch = chapters[i], ok = won.includes(ch.magnet);
    const img = await svgImage(ok ? magnets[ch.magnet] : lockedMagnet(ch.id));
    const x = x0 + (i % 3) * (size + gap), y = y0 + Math.floor(i / 3) * (size + gap + 40);
    if (img) {
      ctx.save(); if (ok) { ctx.translate(x + size / 2, y + size / 2); ctx.rotate(-0.06); ctx.translate(-(x + size / 2), -(y + size / 2)); }
      ctx.shadowColor = 'rgba(0,0,0,.18)'; ctx.shadowBlur = ok ? 14 : 0; ctx.shadowOffsetY = ok ? 6 : 0;
      ctx.drawImage(img, x, y, size, size); ctx.restore();
    }
  }
  // testi
  ctx.fillStyle = '#2b2321'; ctx.font = '800 58px "Zdravey Classic", "Sofia Sans", sans-serif'; ctx.fillText(text.line1, W / 2, 1640);
  ctx.fillStyle = '#6d625c'; ctx.font = '500 42px "Zdravey Classic", "Sofia Sans", sans-serif'; ctx.fillText(text.line2, W / 2, 1710);
  ctx.fillStyle = '#c8102e'; ctx.font = '700 38px "Zdravey Classic", "Sofia Sans", sans-serif'; ctx.fillText(text.url, W / 2, 1790);
  ctx.fillStyle = '#9a8f88'; ctx.font = '500 30px "Zdravey Classic", "Sofia Sans", sans-serif'; ctx.fillText(text.copyright, W / 2, 1850);
  return new Promise(resolve => c.toBlob(resolve, 'image/png'));
}

// Condivide con il pannello del telefono se possibile; altrimenti scarica il file.
export async function shareOrDownload(blob, name, title, text) {
  const file = new File([blob], name, { type: 'image/png' });
  if (navigator.canShare?.({ files: [file] })) {
    try { await navigator.share({ files: [file], title, text }); return 'shared'; }
    catch (e) { if (e?.name === 'AbortError') return 'cancelled'; }
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  return 'downloaded';
}
