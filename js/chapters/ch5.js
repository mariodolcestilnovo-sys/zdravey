// Capitolo 5 — Новият апартамент. Testi bulgari da controllare (vedi REVIEW in content.js).
const t = (it, en) => ({ it, en });

export default {
  intro: [
    { who: 'narrator', it: 'Finalmente entri con calma nel tuo appartamento. È piccolo ma pieno di luce. Mila ti fa vedere tutto.', en: 'At last you take a proper look at your flat. It’s small but full of light. Mila shows you around.' },
    { who: 'mila', bg: 'Това е твоят нов дом!', it: 'Questa è la tua nuova casa!', en: 'This is your new home!' },
    { who: 'mila', bg: 'Хладилникът е в кухнята, нали знаеш!', it: 'Il frigo è in cucina, lo sai!', en: 'The fridge is in the kitchen, as you know!' }
  ],
  outro: [
    { who: 'mila', bg: 'Сега вече си у дома!', it: 'Adesso sei davvero a casa!', en: 'Now you’re really at home!' },
    { who: 'narrator', it: 'Hai conquistato la calamita della chiave di casa.', en: 'You’ve won the house key magnet.' }
  ],
  teaching: [
    {
      it: '[[Това е…]] = questo è… / questa è… [[Това е кухнята]] = questa è la cucina. Le stanze: [[кухня]] (cucina), [[баня]] (bagno), [[спалня]] (camera da letto), [[хол]] (soggiorno).',
      en: '[[Това е…]] = this is… [[Това е кухнята]] = this is the kitchen. The rooms: [[кухня]] (kitchen), [[баня]] (bathroom), [[спалня]] (bedroom), [[хол]] (living room).'
    },
    {
      it: 'Ogni parola ha un genere, e si capisce dalla fine. Consonante = maschile: [[стол]] (sedia), [[ключ]] (chiave) → [[той]]. [[-а]] o [[-я]] = femminile: [[маса]] (tavolo), [[врата]] (porta) → [[тя]]. [[-о]] o [[-е]] = neutro: [[легло]] (letto), [[кафе]] → [[то]].',
      en: 'Every word has a gender, and you can tell from the ending. Consonant = masculine: [[стол]] (chair), [[ключ]] (key) → [[той]]. [[-а]] or [[-я]] = feminine: [[маса]] (table), [[врата]] (door) → [[тя]]. [[-о]] or [[-е]] = neuter: [[легло]] (bed), [[кафе]] → [[то]].'
    },
    {
      it: '[[Има]] = c’è / ci sono. [[Няма]] = non c’è. [[В хола има телевизор]] = in soggiorno c’è la TV. [[Къде е ключът?]] = dov’è la chiave? [[Тук]] = qui, [[там]] = lì. [[на масата]] = sul tavolo.',
      en: '[[Има]] = there is / there are. [[Няма]] = there isn’t. [[В хола има телевизор]] = there’s a TV in the living room. [[Къде е ключът?]] = where is the key? [[Тук]] = here, [[там]] = there. [[на масата]] = on the table.'
    }
  ],
  activities: [
    // — Scopri —
    { phase: 0, kind: 'choice', who: 'mila', bg: 'Това е кухнята.', bgHelp: t('Questa è la cucina.', 'This is the kitchen.'), hideTr: true,
      title: t('La prima porta', 'The first door'),
      prompt: t('Mila apre una porta. In quale stanza siete?', 'Mila opens a door. Which room are you in?'),
      options: [t('In cucina', 'In the kitchen'), t('In bagno', 'In the bathroom'), t('In camera da letto', 'In the bedroom')], answer: 0,
      explain: t('[[кухнята]] = la cucina. [[Това е…]] = questa è…', '[[кухнята]] = the kitchen. [[Това е…]] = this is…') },

    { phase: 0, kind: 'match',
      title: t('Le stanze', 'The rooms'),
      prompt: t('Abbina ogni stanza al suo nome.', 'Match each room with its name.'),
      pairs: [['Кухня', t('Cucina', 'Kitchen')], ['Баня', t('Bagno', 'Bathroom')], ['Спалня', t('Camera da letto', 'Bedroom')], ['Хол', t('Soggiorno', 'Living room')]],
      explain: t('Quattro stanze, quattro parole: la casa è tua!', 'Four rooms, four words: the flat is yours!') },

    { phase: 0, kind: 'choice',
      title: t('Questo è…', 'This is…'),
      prompt: t('Che cosa significa [[Това е…]]?', 'What does [[Това е…]] mean?'),
      options: [t('Questo è…', 'This is…'), t('Dov’è…?', 'Where is…?'), t('C’è…', 'There is…')], answer: 0,
      explain: t('[[Това е…]] serve per presentare cose e persone: [[Това е Мила]].', '[[Това е…]] introduces things and people: [[Това е Мила]].') },

    { phase: 0, kind: 'listen', who: 'mila', say: 'Това е спалнята.', bgHelp: t('Questa è la camera da letto.', 'This is the bedroom.'),
      title: t('Un’altra stanza', 'Another room'),
      prompt: t('Ascolta (o leggi) Mila. Quale stanza ti mostra?', 'Listen to (or read) Mila. Which room is she showing you?'),
      options: ['спалнята', 'банята', 'хола'], answer: 0,
      explain: t('[[спалнята]] = la camera da letto.', '[[спалнята]] = the bedroom.') },

    { phase: 0, kind: 'choice', who: 'guide',
      title: t('Maschile o femminile?', 'Masculine or feminine?'),
      prompt: t('Le parole che finiscono in [[-а]] o [[-я]] di solito sono femminili. Quale di queste è femminile?', 'Words ending in [[-а]] or [[-я]] are usually feminine. Which of these is feminine?'),
      options: ['кухня', 'хол', 'кафе'], answer: 0,
      explain: t('[[кухня]] finisce in -я: femminile. [[хол]] è maschile, [[кафе]] neutro.', '[[кухня]] ends in -я: feminine. [[хол]] is masculine, [[кафе]] neuter.') },

    // — Prova —
    { phase: 1, kind: 'match',
      title: t('Lui, lei, esso', 'He, she, it'),
      prompt: t('Abbina ogni parola al suo genere.', 'Match each word with its gender.'),
      pairs: [['стол', t('maschile (той)', 'masculine (той)')], ['маса', t('femminile (тя)', 'feminine (тя)')], ['легло', t('neutro (то)', 'neuter (то)')]],
      explain: t('Consonante, [[-а]], [[-о]]: maschile, femminile, neutro.', 'Consonant, [[-а]], [[-о]]: masculine, feminine, neuter.') },

    { phase: 1, kind: 'match',
      title: t('I mobili', 'Furniture'),
      prompt: t('Abbina ogni oggetto al suo significato.', 'Match each object with its meaning.'),
      pairs: [['Маса', t('Tavolo', 'Table')], ['Стол', t('Sedia', 'Chair')], ['Легло', t('Letto', 'Bed')], ['Врата', t('Porta', 'Door')]],
      explain: t('Attenzione: [[маса]] è il tavolo (e in bulgaro è femminile).', 'Careful: [[маса]] is the table (and it’s feminine in Bulgarian).') },

    { phase: 1, kind: 'choice',
      title: t('Il letto è…', 'The bed is…'),
      prompt: t('Il letto, [[легло]], è…', 'The bed, [[легло]], is…'),
      options: ['то', 'той', 'тя'], answer: 0,
      explain: t('[[легло]] finisce in -о: neutro, [[то]].', '[[легло]] ends in -о: neuter, [[то]].') },

    { phase: 1, kind: 'letters', noTl: true,
      title: t('La chiave', 'The key'),
      prompt: t('Componi la parola che si legge «klyuch» (chiave).', 'Build the word that reads “klyuch” (key).'),
      answer: 'КЛЮЧ', pool: ['Л', 'Я', 'К', 'Ч', 'Ю', 'Ш'],
      explain: t('[[К-Л-Ю-Ч]]: [[Ю]] = iu, [[Ч]] = c di «ciao».', '[[К-Л-Ю-Ч]]: [[Ю]] = yu, [[Ч]] = ch.') },

    { phase: 1, kind: 'order',
      title: t('La mia chiave', 'My key'),
      prompt: t('Comincia con [[Това]]: «Questa è la mia chiave».', 'Start with [[Това]]: “This is my key”.'),
      answer: ['Това', 'е', 'моят', 'ключ.'],
      explain: t('[[моят]] = il mio (con le parole maschili come [[ключ]]).', '[[моят]] = my (with masculine words like [[ключ]]).') },

    // — Usa —
    { phase: 2, kind: 'choice', who: 'mila', bg: 'Къде е ключът?', bgHelp: t('Dov’è la chiave?', 'Where is the key?'),
      title: t('Dov’è la chiave?', 'Where is the key?'),
      prompt: t('Mila cerca la chiave. Tu la vedi sul tavolo. Che cosa rispondi?', 'Mila is looking for the key. You see it on the table. What do you say?'),
      options: ['На масата е.', 'Ключът е Мила.', 'Има маса.'], answer: 0,
      explain: t('[[На масата е]] = è sul tavolo.', '[[На масата е]] = it’s on the table.') },

    { phase: 2, kind: 'read', who: 'mila', bg: 'В банята няма сапун!', bgHelp: t('In bagno non c’è il sapone!', 'There’s no soap in the bathroom!'), hideTr: true,
      title: t('Il biglietto di Mila', 'Mila’s note'),
      prompt: t('Mila ti lascia un biglietto sul frigo. Che cosa manca in bagno?', 'Mila leaves you a note on the fridge. What’s missing in the bathroom?'),
      options: [t('Il sapone', 'Soap'), t('La chiave', 'The key'), t('Il tavolo', 'The table')], answer: 0,
      explain: t('[[няма]] = non c’è. [[сапун]] = sapone: si somiglia!', '[[няма]] = there isn’t. [[сапун]] = soap.') },

    { phase: 2, kind: 'choice',
      title: t('Niente TV', 'No TV'),
      prompt: t('In soggiorno non c’è la televisione. Come lo dici?', 'There’s no TV in the living room. How do you say it?'),
      options: ['В хола няма телевизор.', 'В хола има телевизор.', 'Хола няма е телевизор.'], answer: 0,
      explain: t('[[няма]] = non c’è. [[има]] direbbe il contrario.', '[[няма]] = there isn’t. [[има]] would say the opposite.') },

    { phase: 2, kind: 'choice', who: 'mila', bg: 'Къде е ключът?', bgHelp: t('Dov’è la chiave?', 'Where is the key?'),
      title: t('Ce l’hai tu!', 'You’ve got it!'),
      prompt: t('Hai la chiave in mano. Rispondi a Mila: «È qui».', 'You’re holding the key. Answer Mila: “It’s here”.'),
      options: ['Тук е.', 'Там е.', 'Няма го.'], answer: 0,
      explain: t('[[тук]] = qui, vicino a te. [[там]] = lì, lontano.', '[[тук]] = here, near you. [[там]] = there, far away.') },

    { phase: 2, kind: 'free',
      title: t('La tua casa', 'Your home'),
      prompt: t('Descrivi la tua casa (vera o inventata): che stanze ci sono e che cosa c’è o non c’è.', 'Describe your home (real or made up): which rooms there are and what there is or isn’t.'),
      example: 'Това е моят дом. Има кухня, баня и хол. Няма балкон.',
      explain: t('Hai descritto la tua casa in bulgaro. Questa prova non viene corretta e il testo non viene salvato.', 'You described your home in Bulgarian. This task is not marked and the text is not saved.') }
  ],
  words: [
    ['Това́ е…', 'tová e…', t('Questo è…', 'This is…')],
    ['Ку́хня', 'kúhnya', t('Cucina', 'Kitchen')],
    ['Ба́ня', 'bánya', t('Bagno', 'Bathroom')],
    ['Спа́лня', 'spálnya', t('Camera da letto', 'Bedroom')],
    ['Хол', 'hol', t('Soggiorno', 'Living room')],
    ['Ма́са', 'mása', t('Tavolo', 'Table')],
    ['Стол', 'stol', t('Sedia', 'Chair')],
    ['Легло́', 'legló', t('Letto', 'Bed')],
    ['Врата́', 'vratá', t('Porta', 'Door')],
    ['Ключ', 'klyuch', t('Chiave', 'Key')],
    ['И́ма / ня́ма', 'íma / nyáma', t('C’è / non c’è', 'There is / there isn’t')],
    ['Тук / там', 'tuk / tam', t('Qui / lì', 'Here / there')],
    ['Дом', 'dom', t('Casa (focolare)', 'Home')]
  ]
};
