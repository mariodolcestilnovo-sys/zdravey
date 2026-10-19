// Capitolo 10 — Честита Баба Марта! Testi bulgari da controllare (vedi REVIEW in content.js).
const t = (it, en) => ({ it, en });

export default {
  intro: [
    { who: 'narrator', it: 'È il 1° marzo. Tutta la Bulgaria porta braccialetti bianchi e rossi. Oggi nonna Ruzha arriva a vedere il frigo!', en: 'It’s 1 March. All of Bulgaria is wearing white and red bracelets. Today Granny Ruzha is coming to see the fridge!' },
    { who: 'mila', bg: 'Честита Баба Марта! Това е твоята мартеница.', it: 'Buona Baba Marta! Questa è la tua martenitsa.', en: 'Happy Baba Marta! This is your martenitsa.' },
    { who: 'mila', bg: 'Носи я, докато видиш щъркел или цъфнало дърво.', it: 'Portala finché non vedi una cicogna o un albero in fiore.', en: 'Wear it until you see a stork or a tree in blossom.' }
  ],
  outro: [
    { who: 'ruzha', bg: 'Това е най-хубавият хладилник в София!', it: 'Questo è il frigo più bello di Sofia!', en: 'This is the most beautiful fridge in Sofia!' },
    { who: 'mila', bg: 'Благодаря ти за всичко! Вече говориш български!', it: 'Grazie di tutto! Ormai parli bulgaro!', en: 'Thank you for everything! You speak Bulgarian now!' },
    { who: 'narrator', it: 'Il frigo è pieno: dieci calamite! Hai finito il percorso A1.1. Il viaggio continuerà con l’A1.2.', en: 'The fridge is full: ten magnets! You’ve finished level A1.1. The journey will continue with A1.2.' }
  ],
  teaching: [
    {
      it: '[[Честита Баба Марта!]] = buona Baba Marta! È l’augurio del 1° marzo, l’inizio della primavera. Si regala la [[мартеница]] (bianca e rossa) e si dice [[Бъди здрав!]] (a un uomo) o [[Бъди здрава!]] (a una donna) = sta’ in salute!',
      en: '[[Честита Баба Марта!]] = happy Baba Marta! It’s the 1 March greeting, the start of spring. People give a [[мартеница]] (white and red) and say [[Бъди здрав!]] (to a man) or [[Бъди здрава!]] (to a woman) = stay healthy!'
    },
    {
      it: 'I giorni: [[понеделник]], [[вторник]], [[сряда]], [[четвъртък]], [[петък]], [[събота]], [[неделя]]. [[Днес е събота]] = oggi è sabato. [[в неделя]] = domenica (quando?).',
      en: 'The days: [[понеделник]], [[вторник]], [[сряда]], [[четвъртък]], [[петък]], [[събота]], [[неделя]] (Monday to Sunday). [[Днес е събота]] = today is Saturday. [[в неделя]] = on Sunday.'
    },
    {
      it: 'I mesi: [[януари]], [[февруари]], [[март]], [[април]]… Le date usano «primo, secondo»: [[първи март]] = 1° marzo, [[втори март]] = 2 marzo. [[Кога?]] = quando?',
      en: 'The months: [[януари]], [[февруари]], [[март]], [[април]]… Dates use “first, second”: [[първи март]] = 1 March, [[втори март]] = 2 March. [[Кога?]] = when?'
    }
  ],
  activities: [
    // — Scopri —
    { phase: 0, kind: 'choice',
      title: t('L’augurio del giorno', 'Today’s greeting'),
      prompt: t('È il 1° marzo. Che cosa dici a tutti?', 'It’s 1 March. What do you say to everyone?'),
      options: ['Честита Баба Марта!', 'Честит рожден ден!', 'Лека нощ!'], answer: 0,
      explain: t('[[Честита Баба Марта!]] Oggi lo dicono tutti, per strada, al bar, al lavoro.', '[[Честита Баба Марта!]] Everyone says it today, in the street, at cafés, at work.') },

    { phase: 0, kind: 'match',
      title: t('Le parole della primavera', 'Spring words'),
      prompt: t('Abbina ogni parola al suo significato.', 'Match each word with its meaning.'),
      pairs: [['мартеница', t('braccialetto bianco e rosso', 'white and red bracelet')], ['щъркел', t('cicogna', 'stork')], ['пролет', t('primavera', 'spring')], ['здраве', t('salute', 'health')]],
      explain: t('La [[мартеница]] si porta fino all’arrivo della primavera: la prima cicogna ([[щъркел]]) è il segnale.', 'The [[мартеница]] is worn until spring arrives: the first [[щъркел]] is the sign.') },

    { phase: 0, kind: 'choice',
      title: t('Un augurio a Ivaylo', 'A wish for Ivaylo'),
      prompt: t('Regali una мартеница a Ivaylo, un uomo. Che cosa gli auguri?', 'You give Ivaylo, a man, a martenitsa. What do you wish him?'),
      options: ['Бъди здрав!', 'Бъди здрава!', 'Бъди здраво!'], answer: 0,
      explain: t('A un uomo [[Бъди здрав!]], a una donna [[Бъди здрава!]]', 'To a man [[Бъди здрав!]], to a woman [[Бъди здрава!]]') },

    { phase: 0, kind: 'listen', who: 'mila', say: 'Видях щъркел! Пролетта идва!', bgHelp: t('Ho visto una cicogna! Arriva la primavera!', 'I saw a stork! Spring is coming!'),
      title: t('Che cosa ha visto?', 'What did she see?'),
      prompt: t('Ascolta (o leggi) Mila. Che cosa ha visto?', 'Listen to (or read) Mila. What did she see?'),
      options: [t('Una cicogna', 'A stork'), t('Un albero', 'A tree'), t('Un gatto', 'A cat')], answer: 0,
      explain: t('[[щъркел]] = cicogna. [[пролетта]] = la primavera.', '[[щъркел]] = stork. [[пролетта]] = spring.') },

    { phase: 0, kind: 'choice', who: 'guide',
      title: t('La tradizione', 'The tradition'),
      prompt: t('Secondo la tradizione, quando vedi una cicogna, che cosa fai con la tua мартеница?', 'By tradition, when you see a stork, what do you do with your martenitsa?'),
      options: [t('La togli e la appendi a un albero in fiore', 'Take it off and hang it on a blossoming tree'), t('La regali al portiere', 'Give it to the porter'), t('La metti nel frigo', 'Put it in the fridge')], answer: 0,
      explain: t('Si appende a un albero in fiore (o si mette sotto una pietra) per augurare salute e fortuna.', 'You hang it on a blossoming tree (or put it under a stone) for health and good luck.') },

    // — Prova —
    { phase: 1, kind: 'match',
      title: t('I giorni', 'The days'),
      prompt: t('Abbina ogni giorno.', 'Match each day.'),
      pairs: [['понеделник', t('lunedì', 'Monday')], ['сряда', t('mercoledì', 'Wednesday')], ['петък', t('venerdì', 'Friday')], ['неделя', t('domenica', 'Sunday')]],
      explain: t('In bulgaro i giorni si scrivono con la lettera minuscola.', 'In Bulgarian, days are written with a small letter.') },

    { phase: 1, kind: 'choice',
      title: t('Dopo il sabato', 'After Saturday'),
      prompt: t('Che giorno viene dopo [[събота]] (sabato)?', 'Which day comes after [[събота]] (Saturday)?'),
      options: ['неделя', 'понеделник', 'петък'], answer: 0,
      explain: t('[[събота]], poi [[неделя]]: il fine settimana.', '[[събота]], then [[неделя]]: the weekend.') },

    { phase: 1, kind: 'order',
      title: t('Che giorno è oggi?', 'What day is it today?'),
      prompt: t('Comincia con [[Днес]]: «Oggi è sabato».', 'Start with [[Днес]]: “Today is Saturday”.'),
      answer: ['Днес', 'е', 'събота.'],
      explain: t('[[Днес]] = oggi.', '[[Днес]] = today.') },

    { phase: 1, kind: 'letters', noTl: true,
      title: t('Marzo', 'March'),
      prompt: t('Componi la parola che si legge «mart» (marzo).', 'Build the word that reads “mart” (March).'),
      answer: 'МАРТ', pool: ['Р', 'П', 'М', 'Т', 'Я', 'А'],
      explain: t('[[М-А-Р-Т]]: il mese della мартеница.', '[[М-А-Р-Т]]: the martenitsa month.') },

    { phase: 1, kind: 'choice', who: 'ruzha', bg: 'Пристигам в неделя.', bgHelp: t('Arrivo domenica.', 'I’m arriving on Sunday.'), hideTr: true,
      title: t('La telefonata', 'The phone call'),
      prompt: t('Nonna Ruzha ti chiama per la prossima visita. Quando arriva?', 'Granny Ruzha calls about her next visit. When is she arriving?'),
      options: ['в неделя', 'в събота', 'в петък'], answer: 0,
      explain: t('[[в неделя]] = domenica. [[Пристигам]] = arrivo.', '[[в неделя]] = on Sunday. [[Пристигам]] = I’m arriving.') },

    // — Usa —
    { phase: 2, kind: 'match',
      title: t('I mesi', 'The months'),
      prompt: t('Abbina ogni mese.', 'Match each month.'),
      pairs: [['януари', t('gennaio', 'January')], ['февруари', t('febbraio', 'February')], ['март', t('marzo', 'March')], ['април', t('aprile', 'April')]],
      explain: t('I mesi somigliano ai nostri: facile!', 'The months look like English ones: easy!') },

    { phase: 2, kind: 'choice',
      title: t('La data', 'The date'),
      prompt: t('Come si dice «1° marzo»?', 'How do you say “1 March”?'),
      options: ['първи март', 'едно март', 'първа март'], answer: 0,
      explain: t('Le date usano l’ordinale: [[първи март]], [[втори март]].', 'Dates use ordinals: [[първи март]] (the first of March), [[втори март]].') },

    { phase: 2, kind: 'choice', who: 'ruzha', bg: 'Хладилникът е пълен! Браво, {name}!', bgHelp: t('Il frigo è pieno! Complimenti, {name}!', 'The fridge is full! Well done, {name}!'), hideTr: true,
      title: t('Il frigo', 'The fridge'),
      prompt: t('Nonna Ruzha guarda il frigo. Com’è?', 'Granny Ruzha looks at the fridge. What’s it like?'),
      options: [t('Pieno', 'Full'), t('Vuoto', 'Empty'), t('Rotto', 'Broken')], answer: 0,
      explain: t('[[пълен]] = pieno. Al capitolo 1 era [[празен]], vuoto!', '[[пълен]] = full. In chapter 1 it was [[празен]], empty!') },

    { phase: 2, kind: 'choice',
      title: t('Un regalo anche per te', 'A present for you too'),
      prompt: t('Nonna Ruzha regala una мартеница anche a te. Che cosa rispondi?', 'Granny Ruzha gives you a martenitsa too. What do you answer?'),
      options: ['Благодаря! Честита Баба Марта!', 'Довиждане, хладилник!', 'Аз съм първи март.'], answer: 0,
      explain: t('Ringrazi e ricambi l’augurio: [[Благодаря! Честита Баба Марта!]]', 'Thank her and return the wish: [[Благодаря! Честита Баба Марта!]]') },

    { phase: 2, kind: 'free',
      title: t('Gli auguri di primavera', 'Spring wishes'),
      prompt: t('Scrivi un messaggio di auguri per Baba Marta a una persona cara.', 'Write a Baba Marta message to someone you care about.'),
      example: 'Честита Баба Марта! Бъди здрава и щастлива!',
      explain: t('Che bel messaggio! Questa prova non viene corretta e il testo non viene salvato.', 'What a lovely message! This task is not marked and the text is not saved.') }
  ],
  words: [
    ['Чести́та Ба́ба Ма́рта!', 'chestíta bába márta!', t('Buona Baba Marta!', 'Happy Baba Marta!')],
    ['Мартени́ца', 'martenítsa', t('Braccialetto bianco e rosso', 'White and red bracelet')],
    ['Бъди́ здрав / здра́ва!', 'badí zdrav / zdráva!', t('Sta’ in salute! (a lui / a lei)', 'Stay healthy! (to him / to her)')],
    ['Щъ́ркел', 'shtárkel', t('Cicogna', 'Stork')],
    ['Про́лет', 'prólet', t('Primavera', 'Spring')],
    ['Днес', 'dnes', t('Oggi', 'Today')],
    ['Понеде́лник / вто́рник', 'ponedélnik / vtórnik', t('Lunedì / martedì', 'Monday / Tuesday')],
    ['Сря́да / четвъ́ртък', 'sryáda / chetvártak', t('Mercoledì / giovedì', 'Wednesday / Thursday')],
    ['Пе́тък / съ́бота / неде́ля', 'pétak / sábota / nedélya', t('Venerdì / sabato / domenica', 'Friday / Saturday / Sunday')],
    ['Януа́ри / февруа́ри', 'yanuári / fevruári', t('Gennaio / febbraio', 'January / February')],
    ['Март / апри́л', 'mart / apríl', t('Marzo / aprile', 'March / April')],
    ['Пъ́рви март', 'párvi mart', t('Primo marzo', 'The first of March')],
    ['Кога́?', 'kogá?', t('Quando?', 'When?')]
  ]
};
