// Illustrazioni SVG originali, semplici e leggere.
const svg = (body, label = '') =>
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">${label ? `<title>${label}</title>` : ''}${body}</svg>`;

export const avatars = {
  mila: svg(`
    <circle cx="50" cy="50" r="48" fill="#fde7e3"/>
    <circle cx="50" cy="22" r="11" fill="#3a2a24"/>
    <path d="M24 52c0-18 11-28 26-28s26 10 26 28v10H24z" fill="#3a2a24"/>
    <ellipse cx="50" cy="52" rx="20" ry="22" fill="#f4c9a8"/>
    <path d="M30 44c6-10 14-14 24-13 7 1 13 5 16 12-10-3-26-4-40 1z" fill="#3a2a24"/>
    <circle cx="42" cy="54" r="2.6" fill="#2b2321"/><circle cx="58" cy="54" r="2.6" fill="#2b2321"/>
    <circle cx="37" cy="61" r="3.5" fill="#f19c8f" opacity=".6"/><circle cx="63" cy="61" r="3.5" fill="#f19c8f" opacity=".6"/>
    <path d="M43 64q7 6 14 0" stroke="#b5483c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M22 98c2-16 13-24 28-24s26 8 28 24z" fill="#ffffff"/>
    <path d="M30 80l40 0-4 7H34z" fill="#c8102e"/>
    <path d="M34 87l6 10M44 87l-3 10M58 87l3 10M66 87l-6 10" stroke="#c8102e" stroke-width="3" stroke-linecap="round"/>`),

  pencho: svg(`
    <circle cx="50" cy="50" r="48" fill="#e3f0f7"/>
    <path d="M30 86l-4 12M44 86l2 12" stroke="#d9412b" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="42" cy="68" rx="24" ry="17" fill="#fff" stroke="#c9d6dd" stroke-width="1.5"/>
    <path d="M22 66q14 18 40 10l-8 10q-22 2-32-20z" fill="#2b2321"/>
    <path d="M56 58q4-24 12-30" stroke="#fff" stroke-width="12" stroke-linecap="round" fill="none"/>
    <circle cx="70" cy="26" r="11" fill="#fff" stroke="#c9d6dd" stroke-width="1.5"/>
    <circle cx="73" cy="23" r="2.5" fill="#2b2321"/>
    <path d="M79 26l18 6-18 2z" fill="#d9412b"/>
    <path d="M60 42l8-4M58 48l8-3" stroke="#c8102e" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="61" cy="44" r="2" fill="#fff" stroke="#c8102e"/>`),

  boyko: svg(`
    <circle cx="50" cy="50" r="48" fill="#efe3d3"/>
    <path d="M26 30q-6-20 6-26 2 12 8 18zM74 30q6-20-6-26-2 12-8 18z" fill="#6b4a2f"/>
    <path d="M18 54c0-22 14-34 32-34s32 12 32 34c0 18-14 34-32 34S18 72 18 54z" fill="#3b2b22"/>
    <path d="M20 56l-4 6 6-1-2 7 6-3M80 56l4 6-6-1 2 7-6-3" stroke="#3b2b22" stroke-width="4" fill="none"/>
    <ellipse cx="50" cy="56" rx="20" ry="22" fill="#c8102e"/>
    <circle cx="41" cy="50" r="6" fill="#fff"/><circle cx="59" cy="50" r="6" fill="#fff"/>
    <circle cx="42" cy="51" r="3" fill="#2b2321"/><circle cx="58" cy="51" r="3" fill="#2b2321"/>
    <path d="M40 66q10 8 20 0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="34" cy="38" r="3" fill="#f3c33b"/><circle cx="50" cy="34" r="3" fill="#2e7d5b"/><circle cx="66" cy="38" r="3" fill="#f3c33b"/>
    <path d="M40 86h20l-3 10H43z" fill="#c9a227"/><circle cx="50" cy="97" r="2" fill="#7a5c12"/>`),

  kiril: svg(`
    <circle cx="50" cy="50" r="48" fill="#f3ead8"/>
    <path d="M20 98c2-20 14-30 30-30s28 10 30 30z" fill="#7a4a2a"/>
    <ellipse cx="50" cy="44" rx="18" ry="20" fill="#f1cfae"/>
    <path d="M32 40c0-14 8-22 18-22s18 8 18 22c-4-8-10-10-18-10s-14 2-18 10z" fill="#9b9b9b"/>
    <path d="M33 50q2 26 17 28 15-2 17-28-6 8-17 8t-17-8z" fill="#d8d4cc"/>
    <circle cx="43" cy="43" r="2.4" fill="#2b2321"/><circle cx="57" cy="43" r="2.4" fill="#2b2321"/>
    <path d="M45 54q5 3 10 0" stroke="#8a6b52" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect x="56" y="70" width="34" height="22" rx="3" fill="#fffaf0" stroke="#c9a227" stroke-width="2"/>
    <text x="73" y="86" font-size="13" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#c8102e">АБВ</text>`),

  narrator: svg(`
    <circle cx="50" cy="50" r="48" fill="#eef2ea"/>
    <rect x="26" y="38" width="48" height="40" rx="7" fill="#c8102e"/>
    <rect x="40" y="28" width="20" height="12" rx="4" fill="none" stroke="#2b2321" stroke-width="4"/>
    <rect x="26" y="52" width="48" height="6" fill="#fff"/>
    <circle cx="36" cy="82" r="4" fill="#2b2321"/><circle cx="64" cy="82" r="4" fill="#2b2321"/>`)
};

export const magnets = {
  sofia: svg(`
    <rect x="6" y="6" width="88" height="88" rx="18" fill="#fffaf2" stroke="#c8102e" stroke-width="4"/>
    <rect x="20" y="58" width="60" height="22" fill="#e9e3d8"/>
    <rect x="30" y="44" width="40" height="16" fill="#efe9dd"/>
    <path d="M36 44q14-20 28 0z" fill="#d4a017"/>
    <path d="M22 58q8-12 16 0zM62 58q8-12 16 0z" fill="#3e8a6a"/>
    <path d="M50 18v8M47 21h6" stroke="#d4a017" stroke-width="2.5"/>
    <path d="M44 80v-10a6 6 0 0 1 12 0v10z" fill="#7a4a2a"/>
    <text x="50" y="91" font-size="9" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#c8102e">СОФИЯ</text>`)
};

export function lockedMagnet(n) {
  return svg(`
    <rect x="6" y="6" width="88" height="88" rx="18" fill="#e6e1da" stroke="#c9c2b8" stroke-width="3" stroke-dasharray="6 5"/>
    <text x="50" y="62" font-size="34" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#b3aaa0">${n}</text>`);
}
