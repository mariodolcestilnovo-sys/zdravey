// Capitolo 3 — Кафе и баница. Testi bulgari da controllare (vedi REVIEW in content.js).
const t = (it, en) => ({ it, en });

export default {
  intro: [
    { who: 'narrator', it: 'Sotto casa c’è un piccolo bar con il forno. Dietro il banco c’è Desi, che sorride a tutti.', en: 'Below your building there’s a small café with a bakery. Behind the counter is Desi, who smiles at everyone.', sign: 'КАФЕ – БАНИЦА', signHelp: t('Caffè – banitsa', 'Coffee – banitsa') },
    { who: 'desi', bg: 'Здравейте! Какво ще обичате?', it: 'Salve! Che cosa desidera?', en: 'Hello! What would you like?' },
    { who: 'mila', bg: 'Тук правят най-хубавата баница в квартала!', it: 'Qui fanno la banitsa più buona del quartiere!', en: 'They make the best banitsa in the neighbourhood here!' }
  ],
  outro: [
    { who: 'desi', bg: 'Приятен ден!', it: 'Buona giornata!', en: 'Have a nice day!' },
    { who: 'mila', bg: 'Баницата е много вкусна!', it: 'La banitsa è buonissima!', en: 'The banitsa is delicious!' },
    { who: 'narrator', it: 'Hai conquistato la calamita della [[баница]], la sfoglia al formaggio della colazione bulgara.', en: 'You’ve won the [[баница]] magnet, the cheese pastry of a Bulgarian breakfast.' }
  ],
  teaching: [
    {
      it: 'Al bar ti chiedono [[Какво ще обичате?]] = che cosa desidera? Per ordinare: [[Едно кафе, моля]] = un caffè, per favore. [[Моля]] = per favore (e anche «prego»). [[Благодаря]] = grazie.',
      en: 'At the café they ask [[Какво ще обичате?]] = what would you like? To order: [[Едно кафе, моля]] = a coffee, please. [[Моля]] = please (and also “you’re welcome”). [[Благодаря]] = thank you.'
    },
    {
      it: '«Uno» cambia con la parola: [[един чай]] (maschile), [[една баница]] (femminile), [[едно кафе]] (neutro). Contare da 1 a 10: [[едно, две, три, четири, пет, шест, седем, осем, девет, десет]].',
      en: '“One” changes with the word: [[един чай]] (masculine), [[една баница]] (feminine), [[едно кафе]] (neuter). Counting 1 to 10: [[едно, две, три, четири, пет, шест, седем, осем, девет, десет]].'
    },
    {
      it: 'Per il prezzo: [[Колко струва?]] = quanto costa? La Bulgaria usa l’euro: [[евро]] non cambia mai ([[три евро]]). I centesimi: [[петдесет цента]]. Quando ti danno qualcosa: [[Заповядайте!]] = ecco a lei! Per pagare: [[Сметката, моля]] = il conto, per favore.',
      en: 'For the price: [[Колко струва?]] = how much is it? Bulgaria uses the euro: [[евро]] never changes ([[три евро]]). Cents: [[петдесет цента]]. When they hand you something: [[Заповядайте!]] = here you are! To pay: [[Сметката, моля]] = the bill, please.'
    }
  ],
  activities: [
    // — Scopri —
    { phase: 0, kind: 'choice', who: 'desi', bg: 'Здравейте! Какво ще обичате?', bgHelp: t('Salve! Che cosa desidera?', 'Hello! What would you like?'),
      title: t('Al banco', 'At the counter'),
      prompt: t('Desi ti chiede che cosa desideri. Rispondi.', 'Desi asks what you would like. Answer.'),
      options: ['Едно кафе, моля.', 'Казвам се кафе.', 'Довиждане, кафе!'], answer: 0,
      explain: t('[[Едно кафе, моля]] = un caffè, per favore.', '[[Едно кафе, моля]] = a coffee, please.') },

    { phase: 0, kind: 'match',
      title: t('Il menu', 'The menu'),
      prompt: t('Abbina ogni parola al suo significato.', 'Match each word with its meaning.'),
      pairs: [['Кафе', t('Caffè', 'Coffee')], ['Чай', t('Tè', 'Tea')], ['Вода', t('Acqua', 'Water')], ['Баница', t('Banitsa (sfoglia al formaggio)', 'Banitsa (cheese pastry)')]],
      explain: t('Con queste parole fai già colazione in Bulgaria.', 'With these words you can already have breakfast in Bulgaria.') },

    { phase: 0, kind: 'choice',
      title: t('La parola gentile', 'The polite word'),
      prompt: t('Che cosa significa [[моля]] quando chiedi qualcosa?', 'What does [[моля]] mean when you ask for something?'),
      options: [t('Per favore', 'Please'), t('Grazie', 'Thank you'), t('Ciao', 'Hi')], answer: 0,
      explain: t('[[Моля]] = per favore. Dopo un «grazie» significa anche «prego».', '[[Моля]] = please. After a “thank you” it also means “you’re welcome”.') },

    { phase: 0, kind: 'listen', who: 'desi', say: 'Една баница и едно кафе.', bgHelp: t('Una banitsa e un caffè.', 'A banitsa and a coffee.'),
      title: t('L’ordine prima di te', 'The order before yours'),
      prompt: t('Ascolta (o leggi) Desi che ripete l’ordine della signora prima di te. Che cosa ha preso?', 'Listen to (or read) Desi repeating the order of the lady before you. What did she get?'),
      options: [t('Una banitsa e un caffè', 'A banitsa and a coffee'), t('Un tè e un’acqua', 'A tea and a water'), t('Due caffè', 'Two coffees')], answer: 0,
      explain: t('[[една баница]] e [[едно кафе]]: «una» e «un» in bulgaro.', '[[една баница]] and [[едно кафе]]: “a” in Bulgarian.') },

    { phase: 0, kind: 'choice', who: 'guide',
      title: t('Uno, una…', 'One, a…'),
      prompt: t('[[Баница]] è femminile (finisce in -а). Quale parola ci va davanti?', '[[Баница]] is feminine (it ends in -а). Which word goes before it?'),
      options: ['една', 'един', 'едно'], answer: 0,
      explain: t('[[една баница]]: femminile. [[един чай]]: maschile. [[едно кафе]]: neutro.', '[[една баница]]: feminine. [[един чай]]: masculine. [[едно кафе]]: neuter.') },

    // — Prova —
    { phase: 1, kind: 'match',
      title: t('I numeri', 'Numbers'),
      prompt: t('Abbina ogni numero bulgaro alla cifra.', 'Match each Bulgarian number with the digit.'),
      pairs: [['едно', t('1', '1')], ['три', t('3', '3')], ['пет', t('5', '5')], ['десет', t('10', '10')]],
      explain: t('[[едно, три, пет, десет]] = 1, 3, 5, 10.', '[[едно, три, пет, десет]] = 1, 3, 5, 10.') },

    { phase: 1, kind: 'order',
      title: t('Il tuo ordine', 'Your order'),
      prompt: t('Comincia con [[Едно]] e ordina un caffè.', 'Start with [[Едно]] and order a coffee.'),
      answer: ['Едно', 'кафе,', 'моля.'],
      explain: t('[[Едно кафе, моля.]] Breve e gentile.', '[[Едно кафе, моля.]] Short and polite.') },

    { phase: 1, kind: 'choice',
      title: t('Un tè', 'A tea'),
      prompt: t('Vuoi un tè. Quale frase è giusta?', 'You want a tea. Which sentence is right?'),
      options: ['Един чай, моля.', 'Една чай, моля.', 'Едно чай, моля.'], answer: 0,
      explain: t('[[чай]] finisce in consonante: è maschile, quindi [[един чай]].', '[[чай]] ends in a consonant: it’s masculine, so [[един чай]].') },

    { phase: 1, kind: 'letters',
      title: t('Scrivi «tè»', 'Spell “tea”'),
      prompt: t('Componi la parola che si legge «chay» (tè).', 'Build the word that reads “chay” (tea).'),
      answer: 'ЧАЙ', pool: ['Ш', 'А', 'Й', 'Ч', 'Я'],
      explain: t('[[Ч-А-Й]]: [[Ч]] come la c di «ciao», [[Й]] una i breve.', '[[Ч-А-Й]]: [[Ч]] = ch, [[Й]] = short y.') },

    { phase: 1, kind: 'choice', who: 'desi', bg: 'Седем евро, моля.', bgHelp: t('Sette euro, per favore.', 'Seven euros, please.'), hideTr: true,
      title: t('Quanto paghi?', 'How much do you pay?'),
      prompt: t('Desi ti dice il totale. Quanto paghi?', 'Desi tells you the total. How much do you pay?'),
      options: ['7 €', '6 €', '8 €'], latinOptions: true, answer: 0,
      explain: t('[[седем]] = 7. [[шест]] = 6, [[осем]] = 8.', '[[седем]] = 7. [[шест]] = 6, [[осем]] = 8.') },

    // — Usa —
    { phase: 2, kind: 'choice', who: 'narrator',
      title: t('Il prezzo della banitsa', 'The price of the banitsa'),
      prompt: t('Mila vuole sapere quanto costa la banitsa. Quale frase usa?', 'Mila wants to know how much the banitsa is. Which sentence does she use?'),
      options: ['Колко струва баницата?', 'Къде е баницата?', 'Как се казва баницата?'], answer: 0,
      explain: t('[[Колко струва…?]] = quanto costa…? [[баницата]] = la banitsa.', '[[Колко струва…?]] = how much is…? [[баницата]] = the banitsa.') },

    { phase: 2, kind: 'read', sign: 'БАНИЦА – 2 €\nКАФЕ – 1,50 €',
      title: t('Il cartello dei prezzi', 'The price board'),
      prompt: t('Leggi il cartello. Quanto costa il caffè?', 'Read the board. How much is the coffee?'),
      options: ['1,50 €', '2 €', '3 €'], latinOptions: true, answer: 0,
      explain: t('[[КАФЕ]] costa 1,50 €: [[едно евро и петдесет цента]].', '[[КАФЕ]] costs €1.50: [[едно евро и петдесет цента]].') },

    { phase: 2, kind: 'choice', who: 'desi', bg: 'Заповядайте!', bgHelp: t('Ecco a lei!', 'Here you are!'),
      title: t('Ecco il caffè', 'Here’s the coffee'),
      prompt: t('Desi ti dà il caffè. Che cosa rispondi?', 'Desi hands you the coffee. What do you answer?'),
      options: ['Благодаря!', 'Как се казваш?', 'Лека нощ!'], answer: 0,
      explain: t('Quando ti danno qualcosa: [[Благодаря!]] E Desi risponde [[Моля!]] (prego).', 'When someone hands you something: [[Благодаря!]] And Desi answers [[Моля!]] (you’re welcome).') },

    { phase: 2, kind: 'order',
      title: t('Quanto costa?', 'How much is it?'),
      prompt: t('Comincia con [[Колко]] e chiedi quanto costa un caffè.', 'Start with [[Колко]] and ask how much a coffee is.'),
      answer: ['Колко', 'струва', 'едно', 'кафе?'],
      explain: t('[[Колко струва едно кафе?]] = quanto costa un caffè?', '[[Колко струва едно кафе?]] = how much is a coffee?') },

    { phase: 2, kind: 'free',
      title: t('La tua colazione', 'Your breakfast'),
      prompt: t('Ordina la tua colazione da Desi: saluta, chiedi due cose e ringrazia.', 'Order your breakfast from Desi: say hello, ask for two things and say thank you.'),
      example: 'Здравейте! Едно кафе и една баница, моля. Благодаря!',
      explain: t('Hai fatto il tuo primo ordine in bulgaro! Questa prova non viene corretta e il testo non viene salvato.', 'You placed your first order in Bulgarian! This task is not marked and the text is not saved.') }
  ],
  words: [
    ['Кафе́', 'kafé', t('Caffè', 'Coffee')],
    ['Чай', 'chay', t('Tè', 'Tea')],
    ['Вода́', 'vodá', t('Acqua', 'Water')],
    ['Ба́ница', 'bánitsa', t('Banitsa (sfoglia al formaggio)', 'Banitsa (cheese pastry)')],
    ['Мо́ля', 'mólya', t('Per favore / prego', 'Please / you’re welcome')],
    ['Какво́ ще оби́чате?', 'kakvó shte obíchate?', t('Che cosa desidera?', 'What would you like?')],
    ['Еди́н / една́ / едно́', 'edín / edná / ednó', t('Uno / una / uno (neutro)', 'One (masc. / fem. / neut.)')],
    ['Едно́, две, три… де́сет', 'ednó, dve, tri… déset', t('Uno, due, tre… dieci', 'One, two, three… ten')],
    ['Ко́лко стру́ва?', 'kólko strúva?', t('Quanto costa?', 'How much is it?')],
    ['Е́вро / цент', 'évro / tsent', t('Euro / centesimo', 'Euro / cent')],
    ['Заповя́дайте!', 'zapovyádayte!', t('Ecco a lei!', 'Here you are!')],
    ['Сме́тката, мо́ля', 'smétkata, mólya', t('Il conto, per favore', 'The bill, please')],
    ['Прия́тен ден!', 'priyáten den!', t('Buona giornata!', 'Have a nice day!')]
  ]
};
