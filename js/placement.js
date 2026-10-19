// Test di orientamento facoltativo: una domanda per capitolo (più una sulla lettura).
// Suggerisce da quale capitolo partire: il primo in cui si sbaglia. Non è un esame e non certifica un livello.
const t = (it, en) => ({ it, en });

export const placement = [
  { ch: 1, prompt: t('Che cosa vuol dire [[Здравей]]?', 'What does [[Здравей]] mean?'),
    options: [t('Ciao', 'Hi'), t('Grazie', 'Thank you'), t('Mi scusi', 'Excuse me')], answer: 0 },
  { ch: 2, prompt: t('Come si legge questa parola: [[РЕСТОРАНТ]]?', 'How do you read this word: [[РЕСТОРАНТ]]?'),
    options: ['restorant', 'pectopaht', 'restopaht'], latin: true, answer: 0 },
  { ch: 2, prompt: t('Quale parola significa «centro»?', 'Which word means “centre”?'),
    options: ['Център', 'Летище', 'Спирка'], answer: 0 },
  { ch: 3, prompt: t('Completa: [[Едно кафе, ___.]] (per favore)', 'Complete: [[Едно кафе, ___.]] (please)'),
    options: ['моля', 'благодаря', 'чао'], answer: 0 },
  { ch: 4, prompt: t('Completa: [[Аз ___ от Италия.]]', 'Complete: [[Аз ___ от Италия.]]'),
    options: ['съм', 'си', 'е'], answer: 0 },
  { ch: 5, prompt: t('Il tavolo, [[маса]], è…', 'The table, [[маса]], is…'),
    options: ['тя', 'той', 'то'], answer: 0 },
  { ch: 6, prompt: t('Come si dice 25?', 'How do you say 25?'),
    options: ['двайсет и пет', 'пет и двайсет', 'двайсет пет'], answer: 0 },
  { ch: 7, prompt: t('Come si dice «ho trent’anni»?', 'How do you say “I’m thirty”?'),
    options: ['На трийсет години съм.', 'Имам трийсет години.', 'Аз съм трийсет.'], answer: 0 },
  { ch: 8, prompt: t('Come si dice «a destra»?', 'How do you say “right” (direction)?'),
    options: ['надясно', 'наляво', 'направо'], answer: 0 },
  { ch: 9, prompt: t('«Il pane è caldo»: [[___ е топъл.]]', '“The bread is warm”: [[___ е топъл.]]'),
    options: ['Хлябът', 'Хляба', 'Хлябата'], answer: 0 },
  { ch: 10, prompt: t('Come si dice «1° marzo»?', 'How do you say “1 March”?'),
    options: ['първи март', 'едно март', 'първа март'], answer: 0 }
];

// Capitolo consigliato: il primo con una risposta sbagliata (tutto giusto → nessun consiglio, scelta libera).
export function suggestChapter(answers) {
  const wrong = placement.find((q, i) => answers[i] !== q.answer);
  return wrong ? wrong.ch : null;
}
