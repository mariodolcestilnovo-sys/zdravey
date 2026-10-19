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

  desi: svg(`
    <circle cx="50" cy="50" r="48" fill="#fff1d6"/>
    <path d="M26 56c0-20 10-32 24-32s24 12 24 32l-4 18H30z" fill="#b5532a"/>
    <ellipse cx="50" cy="52" rx="19" ry="21" fill="#f1c7a3"/>
    <path d="M31 46c4-12 12-16 20-16 9 0 16 5 18 15-8-6-26-7-38 1z" fill="#b5532a"/>
    <circle cx="43" cy="53" r="2.5" fill="#2b2321"/><circle cx="57" cy="53" r="2.5" fill="#2b2321"/>
    <path d="M43 62q7 6 14 0" stroke="#b5483c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M20 98c2-15 13-23 30-23s28 8 30 23z" fill="#2e7d5b"/>
    <path d="M38 76h24v22H38z" fill="#fff"/><circle cx="50" cy="86" r="4" fill="#7a4a2a"/>`),

  petrov: svg(`
    <circle cx="50" cy="50" r="48" fill="#e6ebf2"/>
    <path d="M20 98c2-18 14-27 30-27s28 9 30 27z" fill="#1f3b5c"/>
    <path d="M44 72l6 10 6-10" fill="#fff"/><path d="M48 76h4l-1 12h-2z" fill="#c8102e"/>
    <ellipse cx="50" cy="47" rx="18" ry="21" fill="#f0c9a6"/>
    <path d="M32 40c1-12 9-18 18-18s17 6 18 18c-5-5-11-7-18-7s-13 2-18 7z" fill="#8c8c8c"/>
    <path d="M38 58q12 5 24 0" stroke="#8c8c8c" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="43" cy="47" r="2.3" fill="#2b2321"/><circle cx="57" cy="47" r="2.3" fill="#2b2321"/>
    <path d="M40 43h7M53 43h7" stroke="#6b6b6b" stroke-width="2"/>
    <path d="M30 27h40l-4 -8H34z" fill="#1f3b5c"/>`),

  ivaylo: svg(`
    <circle cx="50" cy="50" r="48" fill="#e3f0e8"/>
    <path d="M20 98c2-18 14-27 30-27s28 9 30 27z" fill="#6b7f3a"/>
    <ellipse cx="50" cy="50" rx="19" ry="21" fill="#e9b98f"/>
    <path d="M31 46c0-14 8-21 19-21s19 7 19 21c-4-6-10-9-19-9s-15 3-19 9z" fill="#2b2321"/>
    <path d="M36 60q14 12 28 0v6q-14 10-28 0z" fill="#2b2321" opacity=".85"/>
    <circle cx="43" cy="50" r="2.4" fill="#2b2321"/><circle cx="57" cy="50" r="2.4" fill="#2b2321"/>
    <path d="M44 61q6 3 12 0" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M28 30q22-12 44 0v6H28z" fill="#c8102e"/>`),

  ruzha: svg(`
    <circle cx="50" cy="50" r="48" fill="#fde7ef"/>
    <path d="M20 98c2-18 14-27 30-27s28 9 30 27z" fill="#7a2f4a"/>
    <path d="M36 74h28l-2 6H38z" fill="#fff"/>
    <ellipse cx="50" cy="50" rx="19" ry="21" fill="#f0c9a6"/>
    <path d="M30 46c0-16 9-24 20-24s20 8 20 24c-5-8-12-11-20-11s-15 3-20 11z" fill="#d8d4cc"/>
    <circle cx="50" cy="24" r="8" fill="#d8d4cc"/>
    <circle cx="43" cy="51" r="2.4" fill="#2b2321"/><circle cx="57" cy="51" r="2.4" fill="#2b2321"/>
    <path d="M39 46q4-3 8 0M53 46q4-3 8 0" stroke="#a09a90" stroke-width="1.5" fill="none"/>
    <path d="M43 61q7 5 14 0" stroke="#b5483c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <circle cx="37" cy="58" r="3.5" fill="#f19c8f" opacity=".6"/><circle cx="63" cy="58" r="3.5" fill="#f19c8f" opacity=".6"/>
    <circle cx="70" cy="30" r="5" fill="#d6336c"/><circle cx="70" cy="30" r="2" fill="#a61e4d"/>`),

  vendor: svg(`
    <circle cx="50" cy="50" r="48" fill="#fff4e0"/>
    <path d="M20 98c2-18 14-27 30-27s28 9 30 27z" fill="#2e7d5b"/>
    <path d="M30 80h40v18H30z" fill="#f3e2c0"/>
    <ellipse cx="50" cy="52" rx="18" ry="20" fill="#e8b48a"/>
    <path d="M28 50c0-20 10-30 22-30s22 10 22 30c-3-12-12-18-22-18s-19 6-22 18z" fill="#c8102e"/>
    <path d="M28 50q-4 10 4 14M72 50q4 10-4 14" stroke="#c8102e" stroke-width="5" fill="none"/>
    <circle cx="36" cy="30" r="2" fill="#fff"/><circle cx="50" cy="26" r="2" fill="#fff"/><circle cx="64" cy="30" r="2" fill="#fff"/>
    <circle cx="43" cy="53" r="2.4" fill="#2b2321"/><circle cx="57" cy="53" r="2.4" fill="#2b2321"/>
    <path d="M43 62q7 5 14 0" stroke="#9c3b2e" stroke-width="2.5" fill="none" stroke-linecap="round"/>`),

  narrator: svg(`
    <circle cx="50" cy="50" r="48" fill="#eef2ea"/>
    <rect x="26" y="38" width="48" height="40" rx="7" fill="#c8102e"/>
    <rect x="40" y="28" width="20" height="12" rx="4" fill="none" stroke="#2b2321" stroke-width="4"/>
    <rect x="26" y="52" width="48" height="6" fill="#fff"/>
    <circle cx="36" cy="82" r="4" fill="#2b2321"/><circle cx="64" cy="82" r="4" fill="#2b2321"/>`)
};

export const magnets = {
  metro: svg(`<rect x="6" y="6" width="88" height="88" rx="18" fill="#fffaf2" stroke="#c8102e" stroke-width="4"/><circle cx="50" cy="44" r="26" fill="#1f5fa8"/><text x="50" y="56" font-size="34" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="900" fill="#fff">М</text><text x="50" y="91" font-size="9" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#c8102e">МЕТРО</text>`),
  banitsa: svg(`<rect x="6" y="6" width="88" height="88" rx="18" fill="#fffaf2" stroke="#c8102e" stroke-width="4"/><circle cx="50" cy="46" r="27" fill="#e2a64b"/><path d="M50 46m-22 0a22 22 0 1 0 44 0a17 17 0 1 0-34 0a12 12 0 1 0 24 0a7 7 0 1 0-14 0" fill="none" stroke="#a8682a" stroke-width="3"/><text x="50" y="91" font-size="9" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#c8102e">БАНИЦА</text>`),
  passport: svg(`<rect x="6" y="6" width="88" height="88" rx="18" fill="#fffaf2" stroke="#c8102e" stroke-width="4"/><rect x="30" y="18" width="40" height="56" rx="5" fill="#7a1f2b"/><circle cx="50" cy="42" r="10" fill="none" stroke="#d4a017" stroke-width="2.5"/><path d="M40 42h20M50 32v20" stroke="#d4a017" stroke-width="1.5"/><rect x="38" y="60" width="24" height="3" fill="#d4a017"/><text x="50" y="91" font-size="9" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#c8102e">ПАСПОРТ</text>`),
  key: svg(`<rect x="6" y="6" width="88" height="88" rx="18" fill="#fffaf2" stroke="#c8102e" stroke-width="4"/><circle cx="34" cy="44" r="14" fill="none" stroke="#c9a227" stroke-width="7"/><path d="M47 44h32M68 44v10M76 44v8" stroke="#c9a227" stroke-width="7" stroke-linecap="round"/><text x="50" y="91" font-size="9" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#c8102e">КЛЮЧ</text>`),
  pepper: svg(`<rect x="6" y="6" width="88" height="88" rx="18" fill="#fffaf2" stroke="#c8102e" stroke-width="4"/><path d="M50 24c-3-6 2-10 6-10" stroke="#2e7d5b" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M38 30q12-8 24 0c8 8 6 30-12 44-18-14-20-36-12-44z" fill="#d62828"/><path d="M44 34q-4 14 2 26" stroke="#ff8a80" stroke-width="3" fill="none" stroke-linecap="round"/><text x="50" y="91" font-size="9" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#c8102e">ЧУШКА</text>`),
  cake: svg(`<rect x="6" y="6" width="88" height="88" rx="18" fill="#fffaf2" stroke="#c8102e" stroke-width="4"/><rect x="26" y="44" width="48" height="26" rx="4" fill="#f4b6c2"/><rect x="26" y="44" width="48" height="8" fill="#fff"/><path d="M36 44v-12M50 44v-12M64 44v-12" stroke="#4a90d9" stroke-width="4"/><path d="M36 30q-3-4 0-7q3 3 0 7M50 30q-3-4 0-7q3 3 0 7M64 30q-3-4 0-7q3 3 0 7" fill="#f4a300"/><text x="50" y="91" font-size="9" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#c8102e">ТОРТА</text>`),
  bus: svg(`<rect x="6" y="6" width="88" height="88" rx="18" fill="#fffaf2" stroke="#c8102e" stroke-width="4"/><path d="M18 70a32 32 0 0 1 64 0z" fill="#e9dcc3"/><path d="M26 70a24 24 0 0 1 48 0M34 70a16 16 0 0 1 32 0" fill="none" stroke="#b8a37a" stroke-width="3"/><path d="M50 38v32M30 52l10 6M70 52l-10 6" stroke="#b8a37a" stroke-width="2"/><text x="50" y="91" font-size="9" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#c8102e">ПЛОВДИВ</text>`),
  rose: svg(`<rect x="6" y="6" width="88" height="88" rx="18" fill="#fffaf2" stroke="#c8102e" stroke-width="4"/><path d="M50 48v28" stroke="#2e7d5b" stroke-width="4"/><path d="M50 62q-12-2-14-10q10 0 14 10z" fill="#2e7d5b"/><circle cx="50" cy="38" r="16" fill="#e64980"/><path d="M50 38m-9 0a9 9 0 1 0 18 0a6 6 0 1 0-12 0a3 3 0 1 0 6 0" fill="none" stroke="#a61e4d" stroke-width="2.5"/><text x="50" y="91" font-size="9" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#c8102e">РОЗА</text>`),
  martenitsa: svg(`<rect x="6" y="6" width="88" height="88" rx="18" fill="#fffaf2" stroke="#c8102e" stroke-width="4"/><path d="M50 20v14" stroke="#c8102e" stroke-width="3"/><path d="M50 20v14" stroke="#fff" stroke-width="1.2" stroke-dasharray="3 3"/><circle cx="36" cy="44" r="9" fill="#fff" stroke="#c9c2b8" stroke-width="1.5"/><path d="M28 52h16l4 22H24z" fill="#fff" stroke="#c9c2b8" stroke-width="1.5"/><circle cx="64" cy="44" r="9" fill="#c8102e"/><path d="M56 52h16l4 22H52z" fill="#c8102e"/><path d="M36 34q14-6 28 0" stroke="#c8102e" stroke-width="2" fill="none"/><text x="50" y="91" font-size="9" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#c8102e">МАРТЕНИЦА</text>`),
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

export const seasonalMagnets = [
  svg(`<rect x="6" y="6" width="88" height="88" rx="44" fill="#fffaf2" stroke="#c8102e" stroke-width="4"/><path d="M50 70V30M50 40l-12-10M50 48l12-10M50 56l-10-6" stroke="#7a4a2a" stroke-width="4" stroke-linecap="round"/><circle cx="38" cy="30" r="4" fill="#c8102e"/><circle cx="62" cy="38" r="4" fill="#fff" stroke="#c8102e"/><circle cx="40" cy="50" r="3" fill="#d4a017"/><text x="50" y="88" font-size="8" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#2b2321">СУРВАКАНЕ</text>`),
  svg(`<rect x="6" y="6" width="88" height="88" rx="44" fill="#fffaf2" stroke="#6a2c70" stroke-width="4"/><circle cx="44" cy="36" r="7" fill="#6a2c70"/><circle cx="56" cy="36" r="7" fill="#6a2c70"/><circle cx="50" cy="47" r="7" fill="#6a2c70"/><circle cx="44" cy="57" r="6" fill="#6a2c70"/><circle cx="56" cy="57" r="6" fill="#6a2c70"/><path d="M50 22v8" stroke="#2e7d5b" stroke-width="3"/><path d="M52 24q10-6 14 2" stroke="#2e7d5b" stroke-width="3" fill="none"/><text x="50" y="88" font-size="8" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#2b2321">ТРИФОН</text>`),
  svg(`<rect x="6" y="6" width="88" height="88" rx="44" fill="#fffaf2" stroke="#c8102e" stroke-width="4"/><circle cx="50" cy="34" r="10" fill="#f1cfae"/><path d="M38 34q12-22 24 0" fill="#d8d4cc"/><path d="M34 74q16-30 32 0z" fill="#c8102e"/><path d="M40 58h20" stroke="#fff" stroke-width="3"/><text x="50" y="88" font-size="8" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#2b2321">БАБА МАРТА</text>`),
  svg(`<rect x="6" y="6" width="88" height="88" rx="44" fill="#fffaf2" stroke="#c8102e" stroke-width="4"/><ellipse cx="40" cy="52" rx="13" ry="17" fill="#c8102e"/><ellipse cx="60" cy="50" rx="12" ry="16" fill="#e8b61a"/><path d="M34 46q6 4 12 0" stroke="#fff" stroke-width="2" fill="none"/><text x="50" y="88" font-size="8" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#2b2321">ВЕЛИКДЕН</text>`),
  svg(`<rect x="6" y="6" width="88" height="88" rx="44" fill="#fffaf2" stroke="#1f5fa8" stroke-width="4"/><text x="50" y="58" font-size="30" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="900" fill="#1f5fa8">АБВ</text><text x="50" y="88" font-size="8" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#2b2321">24 МАЙ</text>`),
  svg(`<rect x="6" y="6" width="88" height="88" rx="44" fill="#fffaf2" stroke="#2e7d5b" stroke-width="4"/><circle cx="50" cy="46" r="20" fill="none" stroke="#2e7d5b" stroke-width="6"/><circle cx="36" cy="34" r="4" fill="#f3c33b"/><circle cx="64" cy="36" r="4" fill="#f3c33b"/><circle cx="50" cy="66" r="4" fill="#e64980"/><circle cx="31" cy="54" r="3" fill="#fff"/><text x="50" y="88" font-size="8" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#2b2321">ЕНЬОВДЕН</text>`),
  svg(`<rect x="6" y="6" width="88" height="88" rx="44" fill="#fffaf2" stroke="#1f5fa8" stroke-width="4"/><circle cx="62" cy="32" r="9" fill="#f3c33b"/><path d="M18 58q8-6 16 0t16 0t16 0t16 0v14H18z" fill="#4a90d9"/><path d="M18 66q8-6 16 0t16 0t16 0t16 0" stroke="#fff" stroke-width="2" fill="none"/><text x="50" y="88" font-size="8" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#2b2321">МОРЕТО</text>`),
  svg(`<rect x="6" y="6" width="88" height="88" rx="44" fill="#fffaf2" stroke="#2e7d5b" stroke-width="4"/><path d="M16 64l20-30 12 16 10-12 26 26z" fill="#7a8b99"/><path d="M36 34l6 9-6-2-6 2z" fill="#fff"/><ellipse cx="50" cy="68" rx="18" ry="4" fill="#4a90d9"/><text x="50" y="88" font-size="8" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#2b2321">РИЛА</text>`),
  svg(`<rect x="6" y="6" width="88" height="88" rx="44" fill="#fffaf2" stroke="#2e7d5b" stroke-width="4"/><rect x="26" y="30" width="48" height="10" fill="#fff" stroke="#ccc"/><rect x="26" y="40" width="48" height="10" fill="#2e7d5b"/><rect x="26" y="50" width="48" height="10" fill="#c8102e"/><path d="M26 28v44" stroke="#7a4a2a" stroke-width="3"/><text x="50" y="88" font-size="8" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#2b2321">СЪЕДИНЕНИЕ</text>`),
  svg(`<rect x="6" y="6" width="88" height="88" rx="44" fill="#fffaf2" stroke="#e07b00" stroke-width="4"/><ellipse cx="50" cy="50" rx="22" ry="17" fill="#e07b00"/><path d="M40 36q-2 14 0 28M50 33v34M60 36q2 14 0 28" stroke="#b35f00" stroke-width="2" fill="none"/><path d="M50 33q2-8 8-8" stroke="#2e7d5b" stroke-width="3" fill="none"/><text x="50" y="88" font-size="8" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#2b2321">ТИКВЕНИК</text>`),
  svg(`<rect x="6" y="6" width="88" height="88" rx="44" fill="#fffaf2" stroke="#7a4a2a" stroke-width="4"/><rect x="28" y="36" width="44" height="30" rx="3" fill="#f3e2c0" stroke="#7a4a2a" stroke-width="2"/><path d="M50 36v30" stroke="#7a4a2a" stroke-width="2"/><path d="M60 22v12" stroke="#d4a017" stroke-width="4"/><path d="M60 18q3 3 0 6q-3-3 0-6" fill="#f4a300"/><text x="50" y="88" font-size="8" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#2b2321">БУДИТЕЛИ</text>`),
  svg(`<rect x="6" y="6" width="88" height="88" rx="44" fill="#fffaf2" stroke="#c8102e" stroke-width="4"/><circle cx="50" cy="48" r="20" fill="#e2a64b"/><path d="M50 30v36M32 48h36M37 35l26 26M63 35L37 61" stroke="#b5732a" stroke-width="2"/><circle cx="50" cy="48" r="4" fill="#d4a017"/><text x="50" y="88" font-size="8" text-anchor="middle" font-family="Sofia Sans, sans-serif" font-weight="800" fill="#2b2321">КОЛЕДА</text>`),
];
