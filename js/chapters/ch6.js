// Capitolo 6 — На Женския пазар. Testi bulgari da controllare (vedi REVIEW in content.js).
const t = (it, en) => ({ it, en });

export default {
  intro: [
    { who: 'narrator', it: 'Sabato mattina Mila ti porta al Mercato delle donne, il mercato più antico di Sofia. Colori, voci, profumi!', en: 'On Saturday morning Mila takes you to the Women’s Market, Sofia’s oldest market. Colours, voices, smells!', sign: 'ЖЕНСКИ ПАЗАР', signHelp: t('Mercato delle donne', 'Women’s Market') },
    { who: 'mila', bg: 'Тук всичко е свежо и евтино.', it: 'Qui è tutto fresco e costa poco.', en: 'Everything here is fresh and cheap.' },
    { who: 'vendor', bg: 'Заповядайте! Домати, краставици, череши!', it: 'Prego! Pomodori, cetrioli, ciliegie!', en: 'Come and see! Tomatoes, cucumbers, cherries!' }
  ],
  outro: [
    { who: 'vendor', bg: 'Благодаря! Приятен ден!', it: 'Grazie! Buona giornata!', en: 'Thank you! Have a nice day!' },
    { who: 'mila', bg: 'Сега имаме всичко за шопска салата!', it: 'Adesso abbiamo tutto per l’insalata shopska!', en: 'Now we have everything for a shopska salad!' },
    { who: 'narrator', it: 'Hai conquistato la calamita del peperone. L’insalata [[шопска салата]] è pomodori, cetrioli, peperoni e formaggio bianco.', en: 'You’ve won the pepper magnet. [[шопска салата]] is tomatoes, cucumbers, peppers and white cheese.' }
  ],
  teaching: [
    {
      it: 'Frutta e verdura: [[домати]] (pomodori), [[краставици]] (cetrioli), [[ябълки]] (mele), [[череши]] (ciliegie), [[чушки]] (peperoni). Sono plurali: un pomodoro = [[домат]], una mela = [[ябълка]].',
      en: 'Fruit and vegetables: [[домати]] (tomatoes), [[краставици]] (cucumbers), [[ябълки]] (apples), [[череши]] (cherries), [[чушки]] (peppers). These are plurals: one tomato = [[домат]], one apple = [[ябълка]].'
    },
    {
      it: 'Numeri grandi: [[единайсет]] (11), [[двайсет]] (20), [[трийсет]] (30), [[петдесет]] (50), [[сто]] (100). [[двайсет и пет]] = 25. Si dicono così parlando; nei testi scritti trovi anche [[единадесет]], [[двадесет]], [[тридесет]].',
      en: 'Bigger numbers: [[единайсет]] (11), [[двайсет]] (20), [[трийсет]] (30), [[петдесет]] (50), [[сто]] (100). [[двайсет и пет]] = 25. That’s how people say them; in writing you also see [[единадесет]], [[двадесет]], [[тридесет]].'
    },
    {
      it: '[[Колко струва един килограм?]] = quanto costa un chilo? [[Искам]] = vorrei (va benissimo al mercato). [[Дайте ми…]] = mi dia… [[един килограм домати]] = un chilo di pomodori (senza «di»!). [[половин килограм]] = mezzo chilo.',
      en: '[[Колко струва един килограм?]] = how much is a kilo? [[Искам]] = I’d like (perfect at the market). [[Дайте ми…]] = give me… [[един килограм домати]] = a kilo of tomatoes (no “of”!). [[половин килограм]] = half a kilo.'
    }
  ],
  activities: [
    // — Scopri —
    { phase: 0, kind: 'match',
      title: t('Le bancarelle', 'The stalls'),
      prompt: t('Abbina ogni parola al suo significato.', 'Match each word with its meaning.'),
      pairs: [['Домати', t('Pomodori', 'Tomatoes')], ['Ябълки', t('Mele', 'Apples')], ['Череши', t('Ciliegie', 'Cherries')], ['Чушки', t('Peperoni', 'Peppers')]],
      explain: t('Ora sai leggere quasi tutta la bancarella!', 'Now you can read almost the whole stall!') },

    { phase: 0, kind: 'choice', who: 'vendor', bg: 'Заповядайте, свежи домати!', bgHelp: t('Prego, pomodori freschi!', 'Come and see, fresh tomatoes!'), hideTr: true,
      title: t('La signora del banco', 'The stall lady'),
      prompt: t('Che cosa vende la signora?', 'What is the lady selling?'),
      options: [t('Pomodori', 'Tomatoes'), t('Mele', 'Apples'), t('Pane', 'Bread')], answer: 0,
      explain: t('[[домати]] = pomodori. [[свежи]] = freschi.', '[[домати]] = tomatoes. [[свежи]] = fresh.') },

    { phase: 0, kind: 'choice',
      title: t('Una o tante?', 'One or many?'),
      prompt: t('Una mela è [[ябълка]]. Tante mele sono…', 'One apple is [[ябълка]]. Many apples are…'),
      options: ['ябълки', 'ябълка', 'ябълко'], answer: 0,
      explain: t('Molte parole in [[-а]] fanno il plurale in [[-и]]: [[ябълка → ябълки]].', 'Many words in [[-а]] make the plural with [[-и]]: [[ябълка → ябълки]].') },

    { phase: 0, kind: 'listen', who: 'vendor', say: 'Черешите са по пет евро.', bgHelp: t('Le ciliegie sono a cinque euro.', 'The cherries are five euros.'),
      title: t('Il prezzo delle ciliegie', 'The price of the cherries'),
      prompt: t('Ascolta (o leggi) la signora. Quanto costano le ciliegie?', 'Listen to (or read) the lady. How much are the cherries?'),
      options: ['5 €', '15 €', '50 €'], latinOptions: true, answer: 0,
      explain: t('[[пет]] = 5. [[петнайсет]] = 15, [[петдесет]] = 50.', '[[пет]] = 5. [[петнайсет]] = 15, [[петдесет]] = 50.') },

    { phase: 0, kind: 'choice', who: 'guide',
      title: t('Vorrei…', 'I’d like…'),
      prompt: t('La guida ti insegna [[Искам…]] = vorrei. Quale frase chiede delle mele?', 'Your guide teaches you [[Искам…]] = I’d like. Which sentence asks for apples?'),
      options: ['Искам ябълки, моля.', 'Аз съм ябълки.', 'Къде е ябълки?'], answer: 0,
      explain: t('[[Искам ябълки, моля]] = vorrei delle mele, per favore.', '[[Искам ябълки, моля]] = I’d like some apples, please.') },

    // — Prova —
    { phase: 1, kind: 'match',
      title: t('Le decine', 'Tens'),
      prompt: t('Abbina ogni numero alla cifra.', 'Match each number with the digits.'),
      pairs: [['двайсет', t('20', '20')], ['трийсет', t('30', '30')], ['петдесет', t('50', '50')], ['сто', t('100', '100')]],
      explain: t('[[двайсет, трийсет, петдесет, сто]] = 20, 30, 50, 100.', '[[двайсет, трийсет, петдесет, сто]] = 20, 30, 50, 100.') },

    { phase: 1, kind: 'choice',
      title: t('Venticinque', 'Twenty-five'),
      prompt: t('Come si dice 25?', 'How do you say 25?'),
      options: ['двайсет и пет', 'пет и двайсет', 'двайсет пет'], answer: 0,
      explain: t('Prima le decine, poi [[и]] (e), poi le unità: [[двайсет и пет]].', 'Tens first, then [[и]] (and), then units: [[двайсет и пет]].') },

    { phase: 1, kind: 'letters', noTl: true,
      title: t('Cento', 'A hundred'),
      prompt: t('Componi la parola che si legge «sto» (cento).', 'Build the word that reads “sto” (a hundred).'),
      answer: 'СТО', pool: ['Т', 'Ц', 'О', 'С', 'Р'],
      explain: t('[[С-Т-О]] = 100. Facile da ricordare!', '[[С-Т-О]] = 100. Easy to remember!') },

    { phase: 1, kind: 'read', sign: 'ЧУШКИ – 3 € / кг',
      title: t('Il cartellino', 'The price tag'),
      prompt: t('Leggi il cartellino. Quanto costa un chilo di peperoni?', 'Read the price tag. How much is a kilo of peppers?'),
      options: ['3 €', '30 €', '13 €'], latinOptions: true, answer: 0,
      explain: t('[[кг]] = [[килограм]]. I peperoni costano 3 € al chilo.', '[[кг]] = [[килограм]]. The peppers are €3 a kilo.') },

    { phase: 1, kind: 'order',
      title: t('Il prezzo al chilo', 'The price per kilo'),
      prompt: t('Comincia con [[Колко]] e chiedi quanto costa un chilo.', 'Start with [[Колко]] and ask how much a kilo is.'),
      answer: ['Колко', 'струва', 'един', 'килограм?'],
      explain: t('[[килограм]] è maschile: [[един килограм]].', '[[килограм]] is masculine: [[един килограм]].') },

    // — Usa —
    { phase: 2, kind: 'choice', who: 'vendor', bg: 'Какво искате?', bgHelp: t('Che cosa desidera?', 'What would you like?'),
      title: t('Un chilo di pomodori', 'A kilo of tomatoes'),
      prompt: t('Chiedi un chilo di pomodori.', 'Ask for a kilo of tomatoes.'),
      options: ['Един килограм домати, моля.', 'Един килограм на домати, моля.', 'Едно домати килограм.'], answer: 0,
      explain: t('In bulgaro non serve «di»: [[един килограм домати]].', 'Bulgarian needs no “of”: [[един килограм домати]].') },

    { phase: 2, kind: 'choice', who: 'vendor', bg: 'Шест евро.', bgHelp: t('Sei euro.', 'Six euros.'),
      title: t('Il resto', 'The change'),
      prompt: t('Paghi con dieci euro. Quanto resto ricevi?', 'You pay with ten euros. How much change do you get?'),
      options: ['4 €', '6 €', '16 €'], latinOptions: true, answer: 0,
      explain: t('[[шест]] = 6, quindi 10 − 6 = 4: [[четири евро]].', '[[шест]] = 6, so 10 − 6 = 4: [[четири евро]].') },

    { phase: 2, kind: 'choice',
      title: t('Mezzo chilo', 'Half a kilo'),
      prompt: t('Vuoi anche mezzo chilo di ciliegie. Che cosa dici?', 'You also want half a kilo of cherries. What do you say?'),
      options: ['И половин килограм череши, моля.', 'И половин череши килограм.', 'Череши е половин.'], answer: 0,
      explain: t('[[половин килограм]] = mezzo chilo. [[и]] = e, anche.', '[[половин килограм]] = half a kilo. [[и]] = and, also.') },

    { phase: 2, kind: 'choice', who: 'vendor', bg: 'Нещо друго?', bgHelp: t('Altro?', 'Anything else?'),
      title: t('Altro?', 'Anything else?'),
      prompt: t('Non vuoi altro. Rispondi.', 'You don’t want anything else. Answer.'),
      options: ['Не, това е всичко. Благодаря!', 'Да, сто килограма!', 'Казвам се Нещо.'], answer: 0,
      explain: t('[[Това е всичко]] = è tutto.', '[[Това е всичко]] = that’s all.') },

    { phase: 2, kind: 'free',
      title: t('La lista della spesa', 'The shopping list'),
      prompt: t('Scrivi la tua lista della spesa in bulgaro: tre cose, con le quantità.', 'Write your shopping list in Bulgarian: three things, with quantities.'),
      example: 'Един килограм домати, половин килограм череши и три ябълки.',
      explain: t('La tua lista è pronta! Questa prova non viene corretta e il testo non viene salvato.', 'Your list is ready! This task is not marked and the text is not saved.') }
  ],
  words: [
    ['Паза́р', 'pazár', t('Mercato', 'Market')],
    ['Дома́т / дома́ти', 'domát / domáti', t('Pomodoro / pomodori', 'Tomato / tomatoes')],
    ['Кра́ставица', 'krástavitsa', t('Cetriolo', 'Cucumber')],
    ['Я́бълка / я́бълки', 'yábalka / yábalki', t('Mela / mele', 'Apple / apples')],
    ['Чере́ша / чере́ши', 'cherésha / cheréshi', t('Ciliegia / ciliegie', 'Cherry / cherries')],
    ['Чу́шка / чу́шки', 'chúshka / chúshki', t('Peperone / peperoni', 'Pepper / peppers')],
    ['Килогра́м', 'kilográm', t('Chilo', 'Kilo')],
    ['Полови́н', 'polovín', t('Mezzo', 'Half')],
    ['И́скам', 'ískam', t('Voglio / vorrei', 'I want / I’d like')],
    ['Да́йте ми…', 'dáyte mi…', t('Mi dia…', 'Give me…')],
    ['Два́йсет / три́йсет', 'dváyset / tríyset', t('Venti / trenta', 'Twenty / thirty')],
    ['Петдесе́т / сто', 'petdesét / sto', t('Cinquanta / cento', 'Fifty / a hundred')],
    ['Не́що дру́го?', 'néshto drúgo?', t('Altro?', 'Anything else?')],
    ['Това́ е вси́чко', 'tová e vsíchko', t('È tutto', 'That’s all')]
  ]
};
