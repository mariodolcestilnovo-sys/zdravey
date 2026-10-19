// Capitolo 8 — Маршрутка до Пловдив. Testi bulgari da controllare (vedi REVIEW in content.js).
const t = (it, en) => ({ it, en });

export default {
  intro: [
    { who: 'narrator', it: 'Sabato andate a Plovdiv da nonna Ruzha. Alla stazione degli autobus vi aspetta un minibus: l’autista si chiama Ivaylo.', en: 'On Saturday you’re going to Plovdiv to see Granny Ruzha. A minibus is waiting at the bus station: the driver is called Ivaylo.', sign: 'АВТОГАРА', signHelp: t('Stazione degli autobus', 'Bus station') },
    { who: 'ivaylo', bg: 'Добро утро! За Пловдив ли сте?', it: 'Buongiorno! Andate a Plovdiv?', en: 'Good morning! Are you going to Plovdiv?' }
  ],
  outro: [
    { who: 'ivaylo', bg: 'Добре дошли в Пловдив!', it: 'Benvenuti a Plovdiv!', en: 'Welcome to Plovdiv!' },
    { who: 'mila', bg: 'Пловдив е един от най-старите градове в Европа!', it: 'Plovdiv è una delle città più antiche d’Europa!', en: 'Plovdiv is one of the oldest cities in Europe!' },
    { who: 'narrator', it: 'Hai conquistato la calamita di Plovdiv, con il suo teatro romano.', en: 'You’ve won the Plovdiv magnet, with its Roman theatre.' }
  ],
  teaching: [
    {
      it: 'I mezzi: [[автобус]], [[маршрутка]] (minibus), [[влак]] (treno), [[такси]]. [[билет]] = biglietto. [[Един билет до Пловдив, моля]] = un biglietto per Plovdiv, per favore. [[до]] = fino a, per.',
      en: 'Transport: [[автобус]] (bus), [[маршрутка]] (minibus), [[влак]] (train), [[такси]] (taxi). [[билет]] = ticket. [[Един билет до Пловдив, моля]] = a ticket to Plovdiv, please. [[до]] = to.'
    },
    {
      it: 'Gli orari: [[В колко часа тръгва?]] = a che ora parte? [[В осем часа]] = alle otto. [[В девет и половина]] = alle nove e mezza. [[Пристига]] = arriva.',
      en: 'Times: [[В колко часа тръгва?]] = what time does it leave? [[В осем часа]] = at eight o’clock. [[В девет и половина]] = at half past nine. [[Пристига]] = it arrives.'
    },
    {
      it: 'Le direzioni: [[наляво]] = a sinistra, [[надясно]] = a destra, [[направо]] = dritto. [[после]] = poi. [[Къде е спирката?]] = dov’è la fermata?',
      en: 'Directions: [[наляво]] = left, [[надясно]] = right, [[направо]] = straight on. [[после]] = then. [[Къде е спирката?]] = where is the stop?'
    }
  ],
  activities: [
    // — Scopri —
    { phase: 0, kind: 'read', sign: 'АВТОГАРА',
      title: t('Il cartello grande', 'The big sign'),
      prompt: t('Che cosa indica questo cartello?', 'What does this sign show?'),
      options: [t('La stazione degli autobus', 'The bus station'), t('L’aeroporto', 'The airport'), t('Il mercato', 'The market')], answer: 0,
      explain: t('[[автогара]] = stazione degli autobus. La stazione dei treni è [[гара]].', '[[автогара]] = bus station. The train station is [[гара]].') },

    { phase: 0, kind: 'match',
      title: t('I mezzi', 'Transport'),
      prompt: t('Abbina ogni mezzo al suo nome.', 'Match each vehicle with its name.'),
      pairs: [['Автобус', t('Autobus', 'Bus')], ['Влак', t('Treno', 'Train')], ['Такси', t('Taxi', 'Taxi')], ['Маршрутка', t('Minibus', 'Minibus')]],
      explain: t('[[маршрутка]] è il minibus: piccolo, veloce, con posti limitati.', '[[маршрутка]] is the minibus: small, fast, limited seats.') },

    { phase: 0, kind: 'choice', who: 'ivaylo', bg: 'За Пловдив ли сте?', bgHelp: t('Andate a Plovdiv?', 'Are you going to Plovdiv?'),
      title: t('Per Plovdiv?', 'To Plovdiv?'),
      prompt: t('Ivaylo vi chiede dove andate. Rispondi «sì».', 'Ivaylo asks where you’re going. Answer “yes”.'),
      options: ['Да, за Пловдив.', 'Не, за Пловдив.', 'Пловдив е.'], answer: 0,
      explain: t('[[Да, за Пловдив]] = sì, per Plovdiv.', '[[Да, за Пловдив]] = yes, to Plovdiv.') },

    { phase: 0, kind: 'listen', who: 'ivaylo', say: 'Маршрутката тръгва в осем часа.', bgHelp: t('Il minibus parte alle otto.', 'The minibus leaves at eight.'),
      title: t('La partenza', 'Departure'),
      prompt: t('Ascolta (o leggi) Ivaylo. A che ora parte il minibus?', 'Listen to (or read) Ivaylo. What time does the minibus leave?'),
      options: ['8:00', '9:00', '10:00'], latinOptions: true, answer: 0,
      explain: t('[[в осем часа]] = alle otto.', '[[в осем часа]] = at eight o’clock.') },

    { phase: 0, kind: 'choice', who: 'guide',
      title: t('Il biglietto', 'The ticket'),
      prompt: t('Vuoi un biglietto per Plovdiv. Quale frase usi?', 'You want a ticket to Plovdiv. Which sentence do you use?'),
      options: ['Един билет до Пловдив, моля.', 'Една билет до Пловдив, моля.', 'Един билет Пловдив до, моля.'], answer: 0,
      explain: t('[[билет]] è maschile: [[един билет]]. [[до Пловдив]] = per Plovdiv.', '[[билет]] is masculine: [[един билет]]. [[до Пловдив]] = to Plovdiv.') },

    // — Prova —
    { phase: 1, kind: 'match',
      title: t('Gli orari', 'Times'),
      prompt: t('Abbina ogni orario.', 'Match each time.'),
      pairs: [['в осем часа', t('alle 8', 'at 8')], ['в девет часа', t('alle 9', 'at 9')], ['в десет часа', t('alle 10', 'at 10')], ['в девет и половина', t('alle 9:30', 'at 9:30')]],
      explain: t('[[и половина]] = e mezza.', '[[и половина]] = half past.') },

    { phase: 1, kind: 'order',
      title: t('A che ora parte?', 'What time does it leave?'),
      prompt: t('Comincia con [[В]] e chiedi a che ora parte.', 'Start with [[В]] and ask what time it leaves.'),
      answer: ['В', 'колко', 'часа', 'тръгва?'],
      explain: t('[[В колко часа тръгва?]] = a che ora parte?', '[[В колко часа тръгва?]] = what time does it leave?') },

    { phase: 1, kind: 'choice', who: 'ivaylo', bg: 'Билетът е десет евро.', bgHelp: t('Il biglietto costa dieci euro.', 'The ticket is ten euros.'), hideTr: true,
      title: t('Il prezzo del viaggio', 'The fare'),
      prompt: t('Quanto costa il biglietto?', 'How much is the ticket?'),
      options: ['10 €', '2 €', '12 €'], latinOptions: true, answer: 0,
      explain: t('[[десет]] = 10. [[две]] = 2, [[дванайсет]] = 12.', '[[десет]] = 10. [[две]] = 2, [[дванайсет]] = 12.') },

    { phase: 1, kind: 'read', sign: 'СОФИЯ – ПЛОВДИВ\nТръгва: 8:00\nПристига: 10:15',
      title: t('L’orario', 'The timetable'),
      prompt: t('Leggi l’orario. A che ora arriva a Plovdiv?', 'Read the timetable. What time does it arrive in Plovdiv?'),
      options: ['10:15', '8:00', '8:15'], latinOptions: true, answer: 0,
      explain: t('[[Пристига]] = arriva: alle 10:15. [[Тръгва]] = parte: alle 8:00.', '[[Пристига]] = arrives: at 10:15. [[Тръгва]] = leaves: at 8:00.') },

    { phase: 1, kind: 'letters', noTl: true,
      title: t('Il treno', 'The train'),
      prompt: t('Componi la parola che si legge «vlak» (treno).', 'Build the word that reads “vlak” (train).'),
      answer: 'ВЛАК', pool: ['Л', 'Х', 'К', 'В', 'Р', 'А'],
      explain: t('[[В-Л-А-К]]: ricorda che [[В]] si legge v.', '[[В-Л-А-К]]: remember [[В]] reads v.') },

    // — Usa —
    { phase: 2, kind: 'choice',
      title: t('La freccia', 'The arrow'),
      prompt: t('Siete arrivati. Il navigatore mostra ←. Dove andate?', 'You’ve arrived. The map shows ←. Which way do you go?'),
      options: ['Наляво.', 'Надясно.', 'Направо.'], answer: 0,
      explain: t('← = [[наляво]], a sinistra.', '← = [[наляво]], left.') },

    { phase: 2, kind: 'match',
      title: t('Le direzioni', 'Directions'),
      prompt: t('Abbina ogni direzione alla freccia.', 'Match each direction with its arrow.'),
      pairs: [['наляво', t('← a sinistra', '← left')], ['надясно', t('→ a destra', '→ right')], ['направо', t('↑ dritto', '↑ straight on')]],
      explain: t('[[наляво, надясно, направо]]: tre parole che si somigliano, attenzione!', '[[наляво, надясно, направо]]: three similar words, careful!') },

    { phase: 2, kind: 'choice', who: 'ivaylo', bg: 'Спирката е направо, после надясно.', bgHelp: t('La fermata è dritto, poi a destra.', 'The stop is straight on, then right.'), hideTr: true,
      title: t('Verso la fermata', 'To the stop'),
      prompt: t('Ivaylo vi spiega la strada per la fermata dell’autobus urbano. Come ci arrivate?', 'Ivaylo explains the way to the city bus stop. How do you get there?'),
      options: [t('Dritto, poi a destra', 'Straight on, then right'), t('A sinistra, poi dritto', 'Left, then straight on'), t('Sempre a destra', 'Always right')], answer: 0,
      explain: t('[[направо]] = dritto, [[после]] = poi, [[надясно]] = a destra.', '[[направо]] = straight on, [[после]] = then, [[надясно]] = right.') },

    { phase: 2, kind: 'choice',
      title: t('Grazie, Ivaylo', 'Thanks, Ivaylo'),
      prompt: t('Scendete e ringrazi Ivaylo. Che cosa dici?', 'You get off and thank Ivaylo. What do you say?'),
      options: ['Благодаря, приятен ден!', 'Един билет, моля!', 'В колко часа?'], answer: 0,
      explain: t('[[Благодаря, приятен ден!]] = grazie, buona giornata!', '[[Благодаря, приятен ден!]] = thank you, have a nice day!') },

    { phase: 2, kind: 'free',
      title: t('Come arrivi', 'How you get there'),
      prompt: t('Scrivi a Mila come arrivi a casa sua: mezzo, ora e direzione.', 'Write to Mila how you’re getting to her place: transport, time and direction.'),
      example: 'Взимам автобуса в девет часа. После вървя направо и завивам надясно.',
      explain: t('Un messaggio perfetto per viaggiare! Questa prova non viene corretta e il testo non viene salvato.', 'A seasoned traveller’s message! This task is not marked and the text is not saved.') }
  ],
  words: [
    ['Автога́ра', 'avtogára', t('Stazione degli autobus', 'Bus station')],
    ['Авто́бус', 'avtóbus', t('Autobus', 'Bus')],
    ['Маршру́тка', 'marshrútka', t('Minibus', 'Minibus')],
    ['Влак', 'vlak', t('Treno', 'Train')],
    ['Такси́', 'taksí', t('Taxi', 'Taxi')],
    ['Еди́н биле́т до…', 'edín bilét do…', t('Un biglietto per…', 'A ticket to…')],
    ['В ко́лко ча́са?', 'v kólko chása?', t('A che ora?', 'At what time?')],
    ['Тръ́гва / присти́га', 'trágva / pristíga', t('Parte / arriva', 'Leaves / arrives')],
    ['И полови́на', 'i polovína', t('E mezza', 'Half past')],
    ['Наля́во / надя́сно', 'nalyávo / nadyásno', t('A sinistra / a destra', 'Left / right')],
    ['Напра́во', 'naprávo', t('Dritto', 'Straight on')],
    ['По́сле', 'pósle', t('Poi', 'Then')]
  ]
};
