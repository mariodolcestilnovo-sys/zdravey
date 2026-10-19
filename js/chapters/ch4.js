// Capitolo 4 — Откъде си? Testi bulgari da controllare (vedi REVIEW in content.js).
const t = (it, en) => ({ it, en });

export default {
  intro: [
    { who: 'narrator', it: 'All’ingresso del palazzo ti ferma il portiere, il signor Petrov. È gentile, ma molto formale: dà del Lei a tutti.', en: 'At the building entrance the porter, Mr Petrov, stops you. He’s kind but very formal: he uses the polite form with everyone.' },
    { who: 'petrov', bg: 'Добър ден! Вие живеете на третия етаж, нали?', it: 'Buongiorno! Lei abita al terzo piano, vero?', en: 'Good afternoon! You live on the third floor, don’t you?' },
    { who: 'petrov', bg: 'Казвам се Петров. Аз съм портиерът.', it: 'Mi chiamo Petrov. Sono il portiere.', en: 'My name is Petrov. I’m the porter.' }
  ],
  outro: [
    { who: 'petrov', bg: 'Приятно ми е! Добре дошли в блока!', it: 'Piacere! Benvenuti nel palazzo!', en: 'Nice to meet you! Welcome to the building!' },
    { who: 'narrator', it: 'Hai conquistato la calamita del passaporto.', en: 'You’ve won the passport magnet.' }
  ],
  teaching: [
    {
      it: 'Il verbo «essere»: [[аз съм]] = io sono, [[ти си]] = tu sei, [[той е]] / [[тя е]] = lui è / lei è. [[Откъде си?]] = di dove sei? Risposta: [[Аз съм от Италия]] = vengo dall’Italia.',
      en: 'The verb “to be”: [[аз съм]] = I am, [[ти си]] = you are, [[той е]] / [[тя е]] = he is / she is. [[Откъде си?]] = where are you from? Answer: [[Аз съм от Италия]] = I’m from Italy.'
    },
    {
      it: 'Con il Lei (cortese) si usa [[Вие сте]]: [[Откъде сте?]] = di dov’è? Il signor Petrov parla così. Al plurale: [[ние сме]] = noi siamo, [[вие сте]] = voi siete, [[те са]] = loro sono.',
      en: 'In the polite form you use [[Вие сте]]: [[Откъде сте?]] = where are you from? Mr Petrov talks like this. Plural: [[ние сме]] = we are, [[вие сте]] = you are (all), [[те са]] = they are.'
    },
    {
      it: 'Nazionalità, per lui e per lei: [[италианец]] / [[италианка]], [[българин]] / [[българка]], [[англичанин]] / [[англичанка]]. [[Говорите ли български?]] = parla bulgaro? [[Малко]] = un po’. [[Не разбирам]] = non capisco.',
      en: 'Nationalities, for him and for her: [[италианец]] / [[италианка]] (Italian), [[българин]] / [[българка]] (Bulgarian), [[англичанин]] / [[англичанка]] (English). [[Говорите ли български?]] = do you speak Bulgarian? [[Малко]] = a little. [[Не разбирам]] = I don’t understand.'
    }
  ],
  activities: [
    // — Scopri —
    { phase: 0, kind: 'choice', who: 'petrov', bg: 'Откъде сте?', bgHelp: t('Di dov’è?', 'Where are you from?'),
      title: t('La domanda del portiere', 'The porter’s question'),
      prompt: t('Il signor Petrov ti chiede da dove vieni. Scegli la frase scritta bene.', 'Mr Petrov asks where you’re from. Choose the correctly written sentence.'),
      options: ['Аз съм от Италия.', 'Аз съм Италия.', 'Аз от съм Италия.'], answer: 0,
      explain: t('[[Аз съм от…]] = vengo da… Puoi dire il tuo paese: [[Аз съм от Англия]], [[от Испания]]…', '[[Аз съм от…]] = I’m from… You can say your own country: [[Аз съм от Англия]], [[от Испания]]…') },

    { phase: 0, kind: 'match',
      title: t('I paesi', 'Countries'),
      prompt: t('Abbina ogni paese al suo nome bulgaro.', 'Match each country with its Bulgarian name.'),
      pairs: [['Италия', t('Italia', 'Italy')], ['България', t('Bulgaria', 'Bulgaria')], ['Англия', t('Inghilterra', 'England')], ['Испания', t('Spagna', 'Spain')]],
      explain: t('Molti nomi di paesi finiscono in [[-ия]]: si legge «-ia».', 'Many country names end in [[-ия]]: it reads “-ia”.') },

    { phase: 0, kind: 'choice',
      title: t('Io sono…', 'I am…'),
      prompt: t('Completa: [[Аз ___ от Италия.]]', 'Complete: [[Аз ___ от Италия.]]'),
      options: ['съм', 'си', 'е'], answer: 0,
      explain: t('[[аз съм]] = io sono. [[ти си]] = tu sei, [[той е]] = lui è.', '[[аз съм]] = I am. [[ти си]] = you are, [[той е]] = he is.') },

    { phase: 0, kind: 'listen', who: 'mila', say: 'Аз съм от Пловдив.', bgHelp: t('Sono di Plovdiv.', 'I’m from Plovdiv.'),
      title: t('Di dov’è Mila?', 'Where is Mila from?'),
      prompt: t('Ascolta (o leggi) Mila. Di dov’è?', 'Listen to (or read) Mila. Where is she from?'),
      options: ['Пловдив', 'София', 'Варна'], answer: 0,
      explain: t('Mila vive a Sofia, ma è di [[Пловдив]], la città della nonna.', 'Mila lives in Sofia, but she’s from [[Пловдив]], her granny’s city.') },

    { phase: 0, kind: 'choice', who: 'guide',
      title: t('Tu o Lei?', 'Informal or polite?'),
      prompt: t('Quale domanda è cortese, con il Lei?', 'Which question is polite (formal “you”)?'),
      options: ['Откъде сте?', 'Откъде си?'], answer: 0,
      explain: t('[[Откъде сте?]] è cortese (o per più persone). [[Откъде си?]] è informale, tra amici.', '[[Откъде сте?]] is polite (or plural). [[Откъде си?]] is informal, between friends.') },

    // — Prova —
    { phase: 1, kind: 'match',
      title: t('Il verbo essere', 'The verb “to be”'),
      prompt: t('Abbina ogni forma al suo significato.', 'Match each form with its meaning.'),
      pairs: [['аз съм', t('io sono', 'I am')], ['ти си', t('tu sei', 'you are')], ['тя е', t('lei è', 'she is')], ['ние сме', t('noi siamo', 'we are')]],
      explain: t('[[съм, си, е, сме]]: il verbo cambia con la persona.', '[[съм, си, е, сме]]: the verb changes with the person.') },

    { phase: 1, kind: 'choice',
      title: t('Mila è…', 'Mila is…'),
      prompt: t('Completa: [[Мила ___ от Пловдив.]]', 'Complete: [[Мила ___ от Пловдив.]]'),
      options: ['е', 'си', 'сме'], answer: 0,
      explain: t('Mila è «lei»: [[тя е]], quindi [[Мила е от Пловдив]].', 'Mila is “she”: [[тя е]], so [[Мила е от Пловдив]].') },

    { phase: 1, kind: 'order',
      title: t('Una domanda cortese', 'A polite question'),
      prompt: t('Comincia con [[Откъде]] e chiedi al signor Petrov da dove viene, con il Lei.', 'Start with [[Откъде]] and ask Mr Petrov where he’s from, politely.'),
      answer: ['Откъде', 'сте,', 'господин', 'Петров?'],
      explain: t('[[господин]] = signore, davanti al cognome: [[господин Петров]].', '[[господин]] = Mr, before the surname: [[господин Петров]].') },

    { phase: 1, kind: 'choice', who: 'petrov', bg: 'Аз съм от Варна. Там е морето.', bgHelp: t('Sono di Varna. Lì c’è il mare.', 'I’m from Varna. That’s where the sea is.'), hideTr: true,
      title: t('La città del portiere', 'The porter’s city'),
      prompt: t('Da dove viene il signor Petrov?', 'Where does Mr Petrov come from?'),
      options: [t('Da Varna, sul mare', 'From Varna, by the sea'), t('Da Sofia', 'From Sofia'), t('Da Plovdiv', 'From Plovdiv')], answer: 0,
      explain: t('[[Варна]] è sul Mar Nero. [[морето]] = il mare.', '[[Варна]] is on the Black Sea. [[морето]] = the sea.') },

    { phase: 1, kind: 'choice',
      title: t('Bulgaro o bulgara?', 'Bulgarian: him or her?'),
      prompt: t('Il signor Petrov è di Varna. Lui è…', 'Mr Petrov is from Varna. He is…'),
      options: ['българин', 'българка', 'италианка'], answer: 0,
      explain: t('Per un uomo [[българин]], per una donna [[българка]].', 'For a man [[българин]], for a woman [[българка]].') },

    // — Usa —
    { phase: 2, kind: 'choice', who: 'petrov', bg: 'Говорите ли български?', bgHelp: t('Parla bulgaro?', 'Do you speak Bulgarian?'),
      title: t('Parla bulgaro?', 'Do you speak Bulgarian?'),
      prompt: t('Rispondi in modo sincero: lo parli solo un po’.', 'Answer honestly: you speak only a little.'),
      options: ['Малко.', 'Много добре, аз съм българин.', 'Довиждане.'], answer: 0,
      explain: t('[[Малко]] = un po’. Ai bulgari fa sempre piacere sentirlo!', '[[Малко]] = a little. Bulgarians are always happy to hear it!') },

    { phase: 2, kind: 'choice',
      title: t('Desi è…', 'Desi is…'),
      prompt: t('Desi, la barista, è bulgara. Quale parola la descrive?', 'Desi, the barista, is Bulgarian. Which word describes her?'),
      options: ['българка', 'българин', 'италианец'], answer: 0,
      explain: t('Desi è una donna: [[българка]].', 'Desi is a woman: [[българка]].') },

    { phase: 2, kind: 'choice', who: 'narrator',
      title: t('Troppo veloce!', 'Too fast!'),
      prompt: t('Il signor Petrov parla velocissimo e non capisci niente. Che cosa dici?', 'Mr Petrov talks very fast and you don’t understand a thing. What do you say?'),
      options: ['Извинете, не разбирам.', 'Добре, благодаря!', 'Аз съм от Варна.'], answer: 0,
      explain: t('[[Извинете, не разбирам]] = mi scusi, non capisco. Una frase che salva!', '[[Извинете, не разбирам]] = sorry, I don’t understand. A life-saving sentence!') },

    { phase: 2, kind: 'order',
      title: t('Vicini di casa', 'Neighbours'),
      prompt: t('Comincia con [[Ние]]: «Siamo vicini di casa».', 'Start with [[Ние]]: “We are neighbours”.'),
      answer: ['Ние', 'сме', 'съседи.'],
      explain: t('[[ние сме]] = noi siamo. [[съседи]] = vicini di casa.', '[[ние сме]] = we are. [[съседи]] = neighbours.') },

    { phase: 2, kind: 'free',
      title: t('Presentati al portiere', 'Introduce yourself to the porter'),
      prompt: t('Presentati al signor Petrov con il Lei: saluto, nome, da dove vieni e che parli un po’ di bulgaro.', 'Introduce yourself to Mr Petrov politely: greeting, name, where you’re from, and that you speak a little Bulgarian.'),
      example: 'Добър ден! Казвам се {name}. Аз съм от Италия. Говоря малко български.',
      explain: t('Ottima presentazione, con il Lei. Questa prova non viene corretta e il testo non viene salvato.', 'You introduced yourself politely. This task is not marked and the text is not saved.') }
  ],
  words: [
    ['Откъде́ си?', 'otkadé si?', t('Di dove sei?', 'Where are you from?')],
    ['Откъде́ сте?', 'otkadé ste?', t('Di dov’è? (cortese)', 'Where are you from? (polite)')],
    ['Аз съм от…', 'az sam ot…', t('Vengo da…', 'I’m from…')],
    ['Ти си / той е / тя е', 'ti si / toy e / tya e', t('Tu sei / lui è / lei è', 'You are / he is / she is')],
    ['Ни́е сме / ви́е сте / те са', 'níe sme / víe ste / te sa', t('Noi siamo / voi siete (Lei è) / loro sono', 'We are / you are / they are')],
    ['Италиа́нец / италиа́нка', 'italiánets / italiánka', t('Italiano / italiana', 'Italian (man / woman)')],
    ['Бълга́рин / бълга́рка', 'balgárin / balgárka', t('Bulgaro / bulgara', 'Bulgarian (man / woman)')],
    ['Англича́нин / англича́нка', 'anglichánin / anglichánka', t('Inglese (lui / lei)', 'English (man / woman)')],
    ['Говори́те ли бълга́рски?', 'govoríte li balgárski?', t('Parla bulgaro?', 'Do you speak Bulgarian?')],
    ['Ма́лко', 'málko', t('Un po’', 'A little')],
    ['Не разби́рам', 'ne razbíram', t('Non capisco', 'I don’t understand')],
    ['Прия́тно ми е', 'priyátno mi e', t('Piacere', 'Nice to meet you')],
    ['Съсе́ди', 'sasédi', t('Vicini di casa', 'Neighbours')]
  ]
};
