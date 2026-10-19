// Capitolo 9 — При баба Ружа. Testi bulgari da controllare (vedi REVIEW in content.js).
const t = (it, en) => ({ it, en });

export default {
  intro: [
    { who: 'narrator', it: 'Nonna Ruzha vive in una vecchia casa colorata nella città vecchia di Plovdiv. Dalla cucina arriva un profumo buonissimo.', en: 'Granny Ruzha lives in a colourful old house in Plovdiv’s old town. A wonderful smell is coming from the kitchen.' },
    { who: 'ruzha', bg: 'Добре дошли, деца! Влизайте!', it: 'Benvenuti, ragazzi! Entrate!', en: 'Welcome, children! Come in!' },
    { who: 'ruzha', bg: 'Супата е готова, хлябът е топъл.', it: 'La zuppa è pronta, il pane è caldo.', en: 'The soup is ready, the bread is warm.' }
  ],
  outro: [
    { who: 'ruzha', bg: 'На първи март ще дойда в София да видя хладилника!', it: 'Il primo marzo verrò a Sofia a vedere il frigo!', en: 'On the first of March I’ll come to Sofia to see the fridge!' },
    { who: 'narrator', it: 'Nonna Ruzha ti regala una piccola rosa di legno: è la calamita di questo capitolo.', en: 'Granny Ruzha gives you a little wooden rose: it’s this chapter’s magnet.' }
  ],
  teaching: [
    {
      it: 'In bulgaro l’articolo «il, la» si attacca in fondo alla parola! [[хляб]] = pane → [[хлябът]] = il pane. [[супа]] = zuppa → [[супата]] = la zuppa. [[мляко]] = latte → [[млякото]] = il latte.',
      en: 'In Bulgarian “the” sticks to the end of the word! [[хляб]] = bread → [[хлябът]] = the bread. [[супа]] = soup → [[супата]] = the soup. [[мляко]] = milk → [[млякото]] = the milk.'
    },
    {
      it: 'Le regole: femminile [[-та]] ([[къщата]], la casa); neutro [[-то]] ([[кафето]], il caffè); plurale [[-те]] ([[доматите]], i pomodori). Maschile: [[-ът]] quando la parola è il soggetto ([[Хлябът е топъл]]), [[-а]] negli altri casi ([[Ям хляба]], mangio il pane). Alcune parole hanno [[-ят]]: [[чаят]], il tè.',
      en: 'The rules: feminine [[-та]] ([[къщата]], the house); neuter [[-то]] ([[кафето]], the coffee); plural [[-те]] ([[доматите]], the tomatoes). Masculine: [[-ът]] when the word is the subject ([[Хлябът е топъл]]), [[-а]] otherwise ([[Ям хляба]], I eat the bread). Some words take [[-ят]]: [[чаят]], the tea.'
    },
    {
      it: 'Anche gli aggettivi cambiano: [[топъл хляб]], [[топла супа]], [[топло мляко]] (caldo, calda). [[студен]] = freddo, [[вкусен]] = buono (da mangiare). [[Много е вкусно!]] = è buonissimo! La rosa è il simbolo della Bulgaria: [[розово масло]] = olio di rosa, dalla Valle delle Rose.',
      en: 'Adjectives change too: [[топъл хляб]], [[топла супа]], [[топло мляко]] (warm). [[студен]] = cold, [[вкусен]] = tasty. [[Много е вкусно!]] = it’s delicious! The rose is Bulgaria’s symbol: [[розово масло]] = rose oil, from the Valley of Roses.'
    }
  ],
  activities: [
    // — Scopri —
    { phase: 0, kind: 'choice',
      title: t('Il pane', 'The bread'),
      prompt: t('Nonna Ruzha dice [[хлябът]]. Che cosa significa?', 'Granny Ruzha says [[хлябът]]. What does it mean?'),
      options: [t('il pane', 'the bread'), t('un pane', 'a loaf'), t('i pani', 'the loaves')], answer: 0,
      explain: t('[[-ът]] in fondo = «il». [[хлябът]] = il pane.', '[[-ът]] at the end = “the”. [[хлябът]] = the bread.') },

    { phase: 0, kind: 'match',
      title: t('Con e senza articolo', 'With and without “the”'),
      prompt: t('Abbina ogni parola al suo significato.', 'Match each word with its meaning.'),
      pairs: [['хляб', t('pane', 'bread')], ['хлябът', t('il pane', 'the bread')], ['супа', t('zuppa', 'soup')], ['супата', t('la zuppa', 'the soup')]],
      explain: t('L’articolo è la fine della parola: [[-ът]], [[-та]].', 'The article is the end of the word: [[-ът]], [[-та]].') },

    { phase: 0, kind: 'choice', who: 'ruzha', bg: 'Супата е готова!', bgHelp: t('La zuppa è pronta!', 'The soup is ready!'), hideTr: true,
      title: t('Pronto in tavola', 'Dinner’s ready'),
      prompt: t('Che cosa è pronto?', 'What is ready?'),
      options: [t('La zuppa', 'The soup'), t('Il pane', 'The bread'), t('Il caffè', 'The coffee')], answer: 0,
      explain: t('[[супата]] = la zuppa. [[готова]] = pronta.', '[[супата]] = the soup. [[готова]] = ready.') },

    { phase: 0, kind: 'listen', who: 'ruzha', say: 'Млякото е в хладилника.', bgHelp: t('Il latte è nel frigo.', 'The milk is in the fridge.'),
      title: t('Il latte', 'The milk'),
      prompt: t('Ascolta (o leggi) nonna Ruzha. Dov’è il latte?', 'Listen to (or read) Granny Ruzha. Where is the milk?'),
      options: [t('Nel frigo', 'In the fridge'), t('Sul tavolo', 'On the table'), t('In bagno', 'In the bathroom')], answer: 0,
      explain: t('[[в хладилника]] = nel frigo.', '[[в хладилника]] = in the fridge.') },

    { phase: 0, kind: 'choice', who: 'guide',
      title: t('La casa', 'The house'),
      prompt: t('Quale parola significa «la casa»?', 'Which word means “the house”?'),
      options: ['къщата', 'къща', 'къщи'], answer: 0,
      explain: t('[[къща]] = casa, [[къщата]] = la casa, [[къщи]] = case.', '[[къща]] = house, [[къщата]] = the house, [[къщи]] = houses.') },

    // — Prova —
    { phase: 1, kind: 'choice',
      title: t('Il caffè', 'The coffee'),
      prompt: t('Aggiungi l’articolo: [[кафе]] → ?', 'Add the article: [[кафе]] → ?'),
      options: ['кафето', 'кафета', 'кафеът'], answer: 0,
      explain: t('[[кафе]] è neutro: [[кафето]]. ([[кафета]] = caffè, plurale).', '[[кафе]] is neuter: [[кафето]]. ([[кафета]] = coffees, plural).') },

    { phase: 1, kind: 'choice',
      title: t('Il pane è caldo', 'The bread is warm'),
      prompt: t('Il pane è il soggetto. Completa: [[___ е топъл.]]', 'The bread is the subject. Complete: [[___ е топъл.]]'),
      options: ['Хлябът', 'Хляба', 'Хлябата'], answer: 0,
      explain: t('Soggetto maschile: [[-ът]]. [[Хлябът е топъл.]]', 'Masculine subject: [[-ът]]. [[Хлябът е топъл.]]') },

    { phase: 1, kind: 'match',
      title: t('Tutti con l’articolo', 'All with “the”'),
      prompt: t('Abbina ogni parola al suo significato.', 'Match each word with its meaning.'),
      pairs: [['чаят', t('il tè', 'the tea')], ['розата', t('la rosa', 'the rose')], ['млякото', t('il latte', 'the milk')], ['доматите', t('i pomodori', 'the tomatoes')]],
      explain: t('[[-ят]], [[-та]], [[-то]], [[-те]]: quattro modi di dire «il, la, i».', '[[-ят]], [[-та]], [[-то]], [[-те]]: four ways to say “the”.') },

    { phase: 1, kind: 'order',
      title: t('Il pane è buonissimo', 'The bread is delicious'),
      prompt: t('Comincia con [[Хлябът]]: «Il pane è molto buono».', 'Start with [[Хлябът]]: “The bread is very tasty”.'),
      answer: ['Хлябът', 'е', 'много', 'вкусен.'],
      explain: t('[[много]] = molto. [[вкусен]] = buono (maschile, come [[хляб]]).', '[[много]] = very. [[вкусен]] = tasty (masculine, like [[хляб]]).') },

    { phase: 1, kind: 'letters', noTl: true,
      title: t('La rosa', 'The rose'),
      prompt: t('Componi la parola che si legge «roza» (rosa).', 'Build the word that reads “roza” (rose).'),
      answer: 'РОЗА', pool: ['О', 'С', 'А', 'Р', 'Я', 'З'],
      explain: t('[[Р-О-З-А]]: [[З]] è la s di «rosa»!', '[[Р-О-З-А]]: [[З]] = z.') },

    // — Usa —
    { phase: 2, kind: 'choice',
      title: t('La zuppa è calda', 'The soup is warm'),
      prompt: t('La zuppa è calda. Quale frase è giusta?', 'The soup is warm. Which sentence is right?'),
      options: ['Супата е топла.', 'Супата е топъл.', 'Супата е топло.'], answer: 0,
      explain: t('[[супа]] è femminile: [[топла]].', '[[супа]] is feminine: [[топла]].') },

    { phase: 2, kind: 'choice', who: 'ruzha', bg: 'Искаш ли още супа?', bgHelp: t('Vuoi ancora zuppa?', 'Would you like more soup?'),
      title: t('Ancora zuppa?', 'More soup?'),
      prompt: t('Hai già mangiato tanto. Rispondi con gentilezza: «no, grazie, era buonissima».', 'You’ve already eaten a lot. Answer kindly: “no, thank you, it was delicious”.'),
      options: ['Не, благодаря. Много беше вкусна!', 'Да, супата е готова.', 'Не, хлябът.'], answer: 0,
      explain: t('[[беше]] = era. [[Много беше вкусна!]] = era buonissima! Alle nonne fa sempre piacere.', '[[беше]] = was. [[Много беше вкусна!]] = it was delicious! Grannies always love that.') },

    { phase: 2, kind: 'read', sign: 'РОЗОВО МАСЛО\nКазанлък',
      title: t('Il regalo della nonna', 'Granny’s present'),
      prompt: t('Nonna Ruzha ti regala una bottiglietta. Che cosa c’è dentro?', 'Granny Ruzha gives you a little bottle. What’s inside?'),
      options: [t('Olio di rosa', 'Rose oil'), t('Latte', 'Milk'), t('Miele', 'Honey')], answer: 0,
      explain: t('[[розово масло]] = olio di rosa. [[Казанлък]] è la città della Valle delle Rose.', '[[розово масло]] = rose oil. [[Казанлък]] is the town of the Valley of Roses.') },

    { phase: 2, kind: 'choice',
      title: t('Il latte è freddo', 'The milk is cold'),
      prompt: t('Vuoi dire che il latte è freddo. ([[студен]] = freddo)', 'You want to say the milk is cold. ([[студен]] = cold)'),
      options: ['Млякото е студено.', 'Млякото е студен.', 'Млякото е студена.'], answer: 0,
      explain: t('[[мляко]] è neutro: [[студено]].', '[[мляко]] is neuter: [[студено]].') },

    { phase: 2, kind: 'free',
      title: t('La tavola della nonna', 'Granny’s table'),
      prompt: t('Descrivi la tavola di nonna Ruzha con l’articolo: che cosa c’è e com’è.', 'Describe Granny Ruzha’s table using “the”: what’s there and what it’s like.'),
      example: 'Хлябът е топъл, супата е вкусна и млякото е студено.',
      explain: t('Che appetito! Questa prova non viene corretta e il testo non viene salvato.', 'Looks delicious! This task is not marked and the text is not saved.') }
  ],
  words: [
    ['Хляб / хля́бът', 'hlyab / hlyábat', t('Pane / il pane', 'Bread / the bread')],
    ['Су́па / су́пата', 'súpa / súpata', t('Zuppa / la zuppa', 'Soup / the soup')],
    ['Мля́ко / мля́кото', 'mlyáko / mlyákoto', t('Latte / il latte', 'Milk / the milk')],
    ['Къ́ща / къ́щата', 'káshta / káshtata', t('Casa / la casa', 'House / the house')],
    ['Ро́за', 'róza', t('Rosa', 'Rose')],
    ['То́пъл / то́пла / то́пло', 'tópal / tópla / tóplo', t('Caldo / calda / caldo (neutro)', 'Warm (masc. / fem. / neut.)')],
    ['Студе́н', 'studén', t('Freddo', 'Cold')],
    ['Вку́сен / вку́сна', 'vkúsen / vkúsna', t('Buono / buona (da mangiare)', 'Tasty')],
    ['Гото́в / гото́ва', 'gotóv / gotóva', t('Pronto / pronta', 'Ready')],
    ['Мно́го', 'mnógo', t('Molto', 'Very / a lot')],
    ['Ро́зово ма́сло', 'rózovo máslo', t('Olio di rosa', 'Rose oil')]
  ]
};
