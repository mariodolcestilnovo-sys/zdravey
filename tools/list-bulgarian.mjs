// Rigenera docs/DA-CONTROLLARE.md con tutte le frasi bulgare del gioco:
// node tools/list-bulgarian.mjs
import { writeFileSync } from 'node:fs';
import * as C from '../js/content.js';

const rows = [];
const add = (where, bg, it) => rows.push([where, bg.replaceAll('{name}', 'Марио'), it || '']);
const inner = s => [...(s.match(/\[\[(.+?)\]\]/g) || [])].map(x => x.slice(2, -2));

for (const ch of C.chapters) {
  const d = C.chapterData[ch.id], P = `Cap. ${ch.id} · `;
  d.intro.forEach((s, i) => { if (s.bg) add(`${P}Introduzione ${i + 1}`, s.bg, s.it); if (s.sign) add(`${P}Introduzione ${i + 1} (cartello)`, s.sign, s.signHelp.it); });
  d.teaching.forEach((t, i) => inner(t.it).forEach(b => add(`${P}Spiegazione fase ${i + 1}`, b)));
  d.activities.forEach((a, i) => {
    const w = `${P}Attività ${i + 1}`;
    if (a.bg) add(w, a.bg, a.bgHelp?.it);
    if (a.say) add(w + ' (ascolto)', a.say, a.bgHelp?.it);
    if (a.sign) add(w + ' (cartello)', a.sign);
    inner(a.prompt.it).concat(inner(a.explain.it)).forEach(b => add(w, b));
    (a.options || []).forEach((o, k) => { if (typeof o === 'string' && !a.latinOptions) add(`${w} opzione${k === a.answer ? ' giusta' : ''}`, o); });
    (a.pairs || []).forEach(p => add(w + ' (abbinamento)', p[0], p[1].it));
    if (a.answer && Array.isArray(a.answer)) add(w + ' (frase da ricomporre)', a.answer.join(' '));
    if (a.example) add(w + ' (esempio)', a.example);
  });
  d.outro.forEach((s, i) => { if (s.bg) add(`${P}Finale ${i + 1}`, s.bg, s.it); });
  d.words.forEach(([w, tl, m]) => add(`${P}Parole (accento e traslitterazione)`, `${w} — ${tl}`, m.it));
}
C.chapters.forEach(c => add(`Titolo capitolo ${c.id}`, c.bg, c.it));

const seen = new Set();
const unique = rows.filter(r => { const k = r[0].split(' (')[0] + r[1]; if (seen.has(k)) return false; seen.add(k); return true; });
const md = `# Frasi bulgare del gioco

Stato per capitolo (\`REVIEW\` in \`js/content.js\`): ${Object.entries(C.REVIEW).map(([k, v]) => `cap. ${k} **${{ pending: 'da controllare', 'ai-checked': 'controllato con AI', 'native-approved': 'approvato da Mario' }[v]}**`).join(' · ')}.
Passaggi seguiti: da controllare → controllata da AI (sessione separata) → approvata da Mario (19/10/2026; revisione del madrelingua annullata da Mario).

File generato con \`node tools/list-bulgarian.mjs\`: non modificarlo a mano. Le correzioni vanno in \`js/content.js\` (capitolo 1) e \`js/chapters/\` (capitoli 2–10).
Il nome del giocatore è mostrato come «Марио».

| Dove | Bulgaro | Significato (it) | Esito |
|---|---|---|---|
${unique.map(r => `| ${r[0]} | ${r[1].replaceAll('|', '/')} | ${r[2].replaceAll('|', '/')} | |`).join('\n')}
`;
writeFileSync(new URL('../docs/DA-CONTROLLARE.md', import.meta.url), md);
console.log(`${unique.length} righe scritte in docs/DA-CONTROLLARE.md`);
