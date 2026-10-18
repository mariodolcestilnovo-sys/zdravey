// Traslitterazione ufficiale bulgara (Streamlined System, legge del 2009).
const map = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ж: 'zh', з: 'z', и: 'i', й: 'y',
  к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u',
  ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sht', ъ: 'a', ь: 'y', ю: 'yu', я: 'ya'
};

export function toLatin(text) {
  // -ия a fine parola si scrive -ia (София → Sofia).
  const s = text.replace(/ия(?=$|[^а-яА-Я])/g, 'иa').replace(/ИЯ(?=$|[^а-яА-Я])/g, 'ИA');
  let out = '';
  for (const ch of s) {
    const low = ch.toLowerCase();
    const m = map[low];
    if (m === undefined) { out += ch; continue; }
    out += ch === low ? m : m.charAt(0).toUpperCase() + m.slice(1);
  }
  return out;
}

// Proposta di nome in cirillico a partire dal nome latino (modificabile dal giocatore).
const pairs = [
  ['sht', 'щ'], ['sh', 'ш'], ['ch', 'ч'], ['zh', 'ж'], ['ts', 'ц'], ['ya', 'я'], ['yu', 'ю'],
  ['ia', 'ия'], ['j', 'дж'], ['a', 'а'], ['b', 'б'], ['c', 'к'], ['d', 'д'], ['e', 'е'],
  ['f', 'ф'], ['g', 'г'], ['h', 'х'], ['i', 'и'], ['k', 'к'], ['l', 'л'], ['m', 'м'],
  ['n', 'н'], ['o', 'о'], ['p', 'п'], ['q', 'к'], ['r', 'р'], ['s', 'с'], ['t', 'т'],
  ['u', 'у'], ['v', 'в'], ['w', 'у'], ['x', 'кс'], ['y', 'й'], ['z', 'з']
];

// Regole italiane (usate quando gli aiuti sono in italiano): Giovanni → Джовани, Chiara → Киара.
const italian = [
  ['sci', 'ши'], ['sce', 'ше'], ['gli', 'ли'], ['gn', 'н'],
  ['chi', 'ки'], ['che', 'ке'], ['ghi', 'ги'], ['ghe', 'ге'],
  ['gia', 'джа'], ['gio', 'джо'], ['giu', 'джу'], ['gie', 'дже'], ['gi', 'джи'], ['ge', 'дже'],
  ['cia', 'ча'], ['cio', 'чо'], ['ciu', 'чу'], ['cie', 'че'], ['ci', 'чи'], ['ce', 'че'], ['h', '']
];

export function toCyrillic(name, lang = 'en') {
  let src = name.normalize('NFD').replace(/[̀-ͯ]/g, '');
  if (lang === 'it') src = src.replace(/([a-z])\1/gi, '$1'); // doppie semplificate: Anna → Ана
  const rules = lang === 'it' ? [...italian, ...pairs] : pairs;
  let out = '', i = 0;
  while (i < src.length) {
    const rest = src.slice(i).toLowerCase();
    const hit = rules.find(([lat]) => rest.startsWith(lat));
    if (!hit) { out += src[i]; i++; continue; }
    const upper = src[i] !== src[i].toLowerCase();
    out += upper && hit[1] ? hit[1].charAt(0).toUpperCase() + hit[1].slice(1) : hit[1];
    i += hit[0].length;
  }
  // Se la prima lettera era muta (H iniziale), la maiuscola passa alla successiva.
  return /^[A-Z]/.test(src) ? out.charAt(0).toUpperCase() + out.slice(1) : out;
}
