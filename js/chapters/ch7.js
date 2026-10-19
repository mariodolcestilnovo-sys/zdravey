// Capitolo 7 — Рожденият ден на Мила. Testi bulgari da controllare (vedi REVIEW in content.js).
const t = (it, en) => ({ it, en });

export default {
  intro: [
    { who: 'narrator', it: 'Oggi è il compleanno di Mila! Ti invita a casa sua, con tutta la famiglia.', en: 'Today is Mila’s birthday! She has invited you to her place, with the whole family.' },
    { who: 'mila', bg: 'Влизай! Това е моето семейство.', it: 'Entra! Questa è la mia famiglia.', en: 'Come in! This is my family.' }
  ],
  outro: [
    { who: 'mila', bg: 'Благодаря за подаръка! Много е хубав!', it: 'Grazie del regalo! È bellissimo!', en: 'Thank you for the present! It’s lovely!' },
    { who: 'mila', bg: 'Баба Ружа ни кани в Пловдив!', it: 'Nonna Ruzha ci invita a Plovdiv!', en: 'Granny Ruzha is inviting us to Plovdiv!' },
    { who: 'narrator', it: 'Hai conquistato la calamita della torta.', en: 'You’ve won the cake magnet.' }
  ],
  teaching: [
    {
      it: 'La famiglia: [[майка]] (madre), [[баща]] (padre: finisce in -а, ma è maschile!), [[брат]] (fratello), [[сестра]] (sorella), [[баба]] (nonna), [[дядо]] (nonno). Per gli auguri: [[Честит рожден ден!]] = buon compleanno!',
      en: 'The family: [[майка]] (mother), [[баща]] (father: it ends in -а, but it’s masculine!), [[брат]] (brother), [[сестра]] (sister), [[баба]] (grandmother), [[дядо]] (grandfather). For wishes: [[Честит рожден ден!]] = happy birthday!'
    },
    {
      it: '[[Имам]] = ho, [[нямам]] = non ho: [[Имам брат]] = ho un fratello. [[Имаш ли сестра?]] = hai una sorella? «Mio, mia»: [[моят брат]], [[моята сестра]], [[моето семейство]]. Parlando si dice spesso anche [[майка ми]], [[брат ми]] (mia madre, mio fratello).',
      en: '[[Имам]] = I have, [[нямам]] = I don’t have: [[Имам брат]] = I have a brother. [[Имаш ли сестра?]] = do you have a sister? “My”: [[моят брат]], [[моята сестра]], [[моето семейство]]. In speech people also say [[майка ми]], [[брат ми]] (my mother, my brother).'
    },
    {
      it: 'L’età: [[На колко години си?]] = quanti anni hai? [[На трийсет години съм]] = ho trent’anni (letteralmente «sono a trent’anni»). Non si dice «ho anni»! Per brindare: [[Наздраве!]]',
      en: 'Age: [[На колко години си?]] = how old are you? [[На трийсет години съм]] = I’m thirty (literally “I am at thirty years”). Bulgarian doesn’t say “I have years”! To toast: [[Наздраве!]] = cheers!'
    }
  ],
  activities: [
    // — Scopri —
    { phase: 0, kind: 'choice',
      title: t('Gli auguri', 'Birthday wishes'),
      prompt: t('È il compleanno di Mila. Che cosa le dici?', 'It’s Mila’s birthday. What do you say to her?'),
      options: ['Честит рожден ден!', 'Лека нощ!', 'Приятно ми е!'], answer: 0,
      explain: t('[[Честит рожден ден!]] = buon compleanno!', '[[Честит рожден ден!]] = happy birthday!') },

    { phase: 0, kind: 'match',
      title: t('La famiglia', 'The family'),
      prompt: t('Abbina ogni parola al suo significato.', 'Match each word with its meaning.'),
      pairs: [['Майка', t('Madre', 'Mother')], ['Баща', t('Padre', 'Father')], ['Брат', t('Fratello', 'Brother')], ['Сестра', t('Sorella', 'Sister')]],
      explain: t('[[майка, баща, брат, сестра]]: la famiglia di base.', '[[майка, баща, брат, сестра]]: the core family.') },

    { phase: 0, kind: 'choice', who: 'mila', bg: 'Това е майка ми, а това е баща ми.', bgHelp: t('Questa è mia madre e questo è mio padre.', 'This is my mother, and this is my father.'), hideTr: true,
      title: t('Le presentazioni', 'Introductions'),
      prompt: t('Chi ti presenta Mila?', 'Who is Mila introducing to you?'),
      options: [t('I genitori', 'Her parents'), t('I nonni', 'Her grandparents'), t('I fratelli', 'Her brother and sister')], answer: 0,
      explain: t('[[майка ми]] = mia madre, [[баща ми]] = mio padre.', '[[майка ми]] = my mother, [[баща ми]] = my father.') },

    { phase: 0, kind: 'listen', who: 'mila', say: 'Имам един брат и една сестра.', bgHelp: t('Ho un fratello e una sorella.', 'I have a brother and a sister.'),
      title: t('Fratelli e sorelle', 'Brothers and sisters'),
      prompt: t('Ascolta (o leggi) Mila. Quanti fratelli e sorelle ha?', 'Listen to (or read) Mila. How many brothers and sisters does she have?'),
      options: [t('Un fratello e una sorella', 'One brother and one sister'), t('Due fratelli', 'Two brothers'), t('Solo una sorella', 'Only a sister')], answer: 0,
      explain: t('[[един брат]] e [[една сестра]].', '[[един брат]] and [[една сестра]].') },

    { phase: 0, kind: 'choice', who: 'guide',
      title: t('Il nonno', 'Grandfather'),
      prompt: t('Quale parola significa «nonno»?', 'Which word means “grandfather”?'),
      options: ['дядо', 'баща', 'брат'], answer: 0,
      explain: t('[[дядо]] = nonno, [[баба]] = nonna. Anche [[дядо]] finisce in vocale, ma è maschile.', '[[дядо]] = grandfather, [[баба]] = grandmother. [[дядо]] ends in a vowel too, but it’s masculine.') },

    // — Prova —
    { phase: 1, kind: 'choice',
      title: t('Ho una sorella', 'I have a sister'),
      prompt: t('Completa: [[Аз ___ сестра.]] (ho una sorella)', 'Complete: [[Аз ___ сестра.]] (I have a sister)'),
      options: ['имам', 'има', 'съм'], answer: 0,
      explain: t('[[аз имам]] = io ho. [[има]] = c’è.', '[[аз имам]] = I have. [[има]] = there is.') },

    { phase: 1, kind: 'choice',
      title: t('Niente fratelli', 'No brothers'),
      prompt: t('Non hai fratelli. Come lo dici?', 'You don’t have a brother. How do you say it?'),
      options: ['Нямам брат.', 'Нямам е брат.', 'Не съм брат.'], answer: 0,
      explain: t('[[нямам]] = non ho. [[Не съм брат]] vorrebbe dire «non sono un fratello».', '[[нямам]] = I don’t have. [[Не съм брат]] would mean “I’m not a brother”.') },

    { phase: 1, kind: 'order',
      title: t('Hai una sorella?', 'Do you have a sister?'),
      prompt: t('Comincia con [[Имаш]] e chiedi «hai una sorella?».', 'Start with [[Имаш]] and ask “do you have a sister?”.'),
      answer: ['Имаш', 'ли', 'сестра?'],
      explain: t('[[ли]] trasforma la frase in domanda: [[Имаш ли…?]]', '[[ли]] turns the sentence into a question: [[Имаш ли…?]]') },

    { phase: 1, kind: 'letters', noTl: true,
      title: t('La nonna', 'Granny'),
      prompt: t('Componi la parola che si legge «baba» (nonna).', 'Build the word that reads “baba” (granny).'),
      answer: 'БАБА', pool: ['А', 'Б', 'П', 'А', 'Б', 'Д'],
      explain: t('[[БАБА]] = nonna. E il nonno è [[ДЯДО]].', '[[БАБА]] = granny. Grandad is [[ДЯДО]].') },

    { phase: 1, kind: 'match',
      title: t('Mio, mia', 'My'),
      prompt: t('Abbina ogni espressione al suo significato.', 'Match each phrase with its meaning.'),
      pairs: [['моят брат', t('mio fratello', 'my brother')], ['моята сестра', t('mia sorella', 'my sister')], ['моето семейство', t('la mia famiglia', 'my family')]],
      explain: t('[[моят]] (maschile), [[моята]] (femminile), [[моето]] (neutro).', '[[моят]] (masculine), [[моята]] (feminine), [[моето]] (neuter).') },

    // — Usa —
    { phase: 2, kind: 'choice', who: 'mila', bg: 'На колко години си?', bgHelp: t('Quanti anni hai?', 'How old are you?'),
      title: t('Quanti anni hai?', 'How old are you?'),
      prompt: t('Mila ti chiede l’età. Fai finta di avere trent’anni.', 'Mila asks your age. Pretend you’re thirty.'),
      options: ['На трийсет години съм.', 'Аз съм трийсет.', 'Имам трийсет години.'], answer: 0,
      explain: t('[[На трийсет години съм]]. «Ho trent’anni» parola per parola ([[Имам трийсет години]]) in bulgaro non si dice.', '[[На трийсет години съм]]. Word-for-word “I have thirty years” ([[Имам трийсет години]]) isn’t Bulgarian.') },

    { phase: 2, kind: 'listen', who: 'mila', say: 'Днес съм на двайсет и пет години.', bgHelp: t('Oggi compio venticinque anni.', 'Today I’m twenty-five.'),
      title: t('Quanti anni compie?', 'How old is she today?'),
      prompt: t('Ascolta (o leggi) Mila. Quanti anni compie?', 'Listen to (or read) Mila. How old is she today?'),
      options: ['25', '15', '35'], latinOptions: true, answer: 0,
      explain: t('[[двайсет и пет]] = 25.', '[[двайсет и пет]] = 25.') },

    { phase: 2, kind: 'read', sign: 'Честит рожден ден, Мила!\nБъди здрава и щастлива!',
      title: t('Il biglietto d’auguri', 'The birthday card'),
      prompt: t('Leggi il biglietto. Che cosa augura a Mila?', 'Read the card. What does it wish Mila?'),
      options: [t('Salute e felicità', 'Health and happiness'), t('Buon viaggio', 'A good trip'), t('Buonanotte', 'Good night')], answer: 0,
      explain: t('[[Бъди здрава и щастлива!]] = stai bene e sii felice! (a una donna).', '[[Бъди здрава и щастлива!]] = be healthy and happy! (to a woman).') },

    { phase: 2, kind: 'choice',
      title: t('Il brindisi', 'The toast'),
      prompt: t('Tutti alzano il bicchiere. Che cosa dici?', 'Everyone raises their glass. What do you say?'),
      options: ['Наздраве!', 'Довиждане!', 'Извинете!'], answer: 0,
      explain: t('[[Наздраве!]] = alla salute! E guarda negli occhi chi brinda con te.', '[[Наздраве!]] = cheers! And look the other person in the eye.') },

    { phase: 2, kind: 'free',
      title: t('La tua famiglia', 'Your family'),
      prompt: t('Presenta la tua famiglia (vera o inventata): chi c’è e quanti anni hanno.', 'Introduce your family (real or made up): who’s in it and how old they are.'),
      example: 'Имам майка, баща и една сестра. Сестра ми е на двайсет години.',
      explain: t('Hai presentato la tua famiglia in bulgaro. Questa prova non viene corretta e il testo non viene salvato.', 'You introduced your family in Bulgarian. This task is not marked and the text is not saved.') }
  ],
  words: [
    ['Семе́йство', 'seméystvo', t('Famiglia', 'Family')],
    ['Ма́йка', 'máyka', t('Madre', 'Mother')],
    ['Ба́ща', 'báshta', t('Padre', 'Father')],
    ['Брат', 'brat', t('Fratello', 'Brother')],
    ['Сестра́', 'sestrá', t('Sorella', 'Sister')],
    ['Ба́ба / дя́до', 'bába / dyádo', t('Nonna / nonno', 'Grandmother / grandfather')],
    ['И́мам / ня́мам', 'ímam / nyámam', t('Ho / non ho', 'I have / I don’t have')],
    ['Чести́т ро́жден ден!', 'chestít rózhden den!', t('Buon compleanno!', 'Happy birthday!')],
    ['На ко́лко годи́ни си?', 'na kólko godíni si?', t('Quanti anni hai?', 'How old are you?')],
    ['На … годи́ни съм', 'na … godíni sam', t('Ho … anni', 'I’m … years old')],
    ['Наздра́ве!', 'nazdráve!', t('Alla salute!', 'Cheers!')],
    ['По́дарък', 'pódarak', t('Regalo', 'Present')]
  ]
};
