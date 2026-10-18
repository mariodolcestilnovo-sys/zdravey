// Contenuti originali. Tutte le frasi bulgare sono «da far controllare a un madrelingua»
// finché Mario non cambia lo stato in REVIEW_STATUS.
// Convenzioni: [[...]] dentro i testi di aiuto = testo bulgaro; {name} = nome del giocatore in cirillico.

export const REVIEW_STATUS = 'ai-checked'; // pending → ai-checked → native-approved

export const phases = [
  { it: 'Scopri', en: 'Discover' },
  { it: 'Prova', en: 'Practise' },
  { it: 'Usa', en: 'Use it' }
];

export const guides = {
  pencho: {
    bgName: 'Пенчо',
    it: { role: 'la cicogna', hello: 'Clap clap! Sono Pencho, la cicogna. Torno in Bulgaria ogni primavera: questo viaggio lo facciamo insieme.' },
    en: { role: 'the stork', hello: 'Clack clack! I’m Pencho the stork. I fly back to Bulgaria every spring: let’s do this journey together.' }
  },
  boyko: {
    bgName: 'Бойко',
    it: { role: 'il kuker', hello: 'Sono Boyko, il kuker. Con i miei campanacci spavento solo l’inverno. Con te sarò gentile, promesso.' },
    en: { role: 'the kuker', hello: 'I’m Boyko the kuker. My big bells only scare winter away. I’ll be kind to you, promise.' }
  },
  kiril: {
    bgName: 'Кирил',
    it: { role: 'il maestro delle lettere', hello: 'Sono Kiril, il maestro delle lettere. Il cirillico sembra un mistero, ma molte lettere le conosci già.' },
    en: { role: 'the letter master', hello: 'I’m Kiril, the letter master. Cyrillic looks like a mystery, but you already know many of its letters.' }
  }
};

export const chapters = [
  { id: 1, bg: 'Здравей, София!', it: 'All’aeroporto di Sofia', en: 'At Sofia airport', magnet: 'sofia' },
  { id: 2, bg: 'Буквите в метрото', it: 'Le lettere della metro', en: 'Letters in the metro', magnet: 'metro' },
  { id: 3, bg: 'Кафе и баница', it: 'Caffè e banitsa', en: 'Coffee and banitsa', magnet: 'banitsa' },
  { id: 4, bg: 'Аз съм от Италия', it: 'Da dove vieni', en: 'Where you are from', magnet: 'passport' },
  { id: 5, bg: 'Новият апартамент', it: 'Il nuovo appartamento', en: 'The new flat', magnet: 'key' },
  { id: 6, bg: 'На Женския пазар', it: 'Al mercato', en: 'At the market', magnet: 'pepper' },
  { id: 7, bg: 'Рожденият ден на Мила', it: 'Il compleanno di Mila', en: 'Mila’s birthday', magnet: 'cake' },
  { id: 8, bg: 'Маршрутка до Пловдив', it: 'In minibus a Plovdiv', en: 'Minibus to Plovdiv', magnet: 'bus' },
  { id: 9, bg: 'При баба Ружа', it: 'Da nonna Ruzha', en: 'At Granny Ruzha’s', magnet: 'rose' },
  { id: 10, bg: 'Честита Баба Марта!', it: 'Buona Baba Marta!', en: 'Happy Baba Marta!', magnet: 'martenitsa' }
];

// Parole del capitolo: l'accento (´) indica la sillaba forte. Da controllare.
export const words1 = [
  ['Здраве́й', 'zdravéy', { it: 'Ciao (a una persona)', en: 'Hi (to one person)' }],
  ['Здраве́йте', 'zdravéyte', { it: 'Salve / Buongiorno (cortese o a più persone)', en: 'Hello (polite or to several people)' }],
  ['Да', 'da', { it: 'Sì', en: 'Yes' }],
  ['Не', 'ne', { it: 'No', en: 'No' }],
  ['Благодаря́', 'blagodaryá', { it: 'Grazie', en: 'Thank you' }],
  ['Ка́звам се…', 'kázvam se…', { it: 'Mi chiamo…', en: 'My name is…' }],
  ['Как се ка́зваш?', 'kak se kázvash?', { it: 'Come ti chiami?', en: 'What’s your name?' }],
  ['Аз съм…', 'az sam…', { it: 'Io sono…', en: 'I am…' }],
  ['Добро́ у́тро', 'dobró útro', { it: 'Buongiorno (mattina)', en: 'Good morning' }],
  ['До́бър ден', 'dóbar den', { it: 'Buongiorno (di giorno)', en: 'Good day / Hello' }],
  ['До́бър ве́чер', 'dóbar vécher', { it: 'Buonasera', en: 'Good evening' }],
  ['Ле́ка нощ', 'léka nosht', { it: 'Buonanotte', en: 'Good night' }],
  ['Как си?', 'kak si?', { it: 'Come stai?', en: 'How are you?' }],
  ['Добре́', 'dobré', { it: 'Bene', en: 'Fine / Well' }],
  ['Ча́о', 'cháo', { it: 'Ciao (andando via)', en: 'Bye' }],
  ['Дови́ждане', 'dovízhdane', { it: 'Arrivederci', en: 'Goodbye' }],
  ['И́зход', 'ízhod', { it: 'Uscita', en: 'Exit' }],
  ['Вход', 'vhod', { it: 'Entrata', en: 'Entrance' }]
];

// Spiegazioni della guida, una per fase.
export const teaching1 = [
  {
    it: '[[Здравей]] = ciao, a una persona che conosci o a un coetaneo. [[Здравейте]] = salve: con il Lei o a più persone. [[Да]] = sì, [[Не]] = no. Sei lettere sono «amiche», uguali alle nostre: [[А К М О Т Е]]. Con queste leggi già [[МАМА]] e [[ТАТКО]] (papà)!',
    en: '[[Здравей]] = hi, to one person you know or someone your age. [[Здравейте]] = hello: polite, or to several people. [[Да]] = yes, [[Не]] = no. Six letters are “friends”, just like ours: [[А К М О Т Е]]. With them you can already read [[МАМА]] and [[ТАТКО]] (dad)!'
  },
  {
    it: '[[Казвам се Мила]] = mi chiamo Mila. [[Как се казваш?]] = come ti chiami? [[Аз съм…]] = io sono… Il saluto cambia con l’ora: [[Добро утро]] la mattina, [[Добър ден]] durante il giorno, [[Добър вечер]] la sera, [[Лека нощ]] quando ci si saluta la sera tardi, mai arrivando.',
    en: '[[Казвам се Мила]] = my name is Mila. [[Как се казваш?]] = what’s your name? [[Аз съм…]] = I am… Greetings change with the time: [[Добро утро]] in the morning, [[Добър ден]] during the day, [[Добър вечер]] in the evening, [[Лека нощ]] when parting late in the evening, never on arrival.'
  },
  {
    it: '[[Как си?]] = come stai? Rispondi [[Добре, благодаря!]] = bene, grazie! Quando vai via: [[Чао!]] tra amici, [[Довиждане!]] in modo cortese. Sui cartelli: [[ИЗХОД]] = uscita, [[ВХОД]] = entrata.',
    en: '[[Как си?]] = how are you? Answer [[Добре, благодаря!]] = fine, thanks! When you leave: [[Чао!]] with friends, [[Довиждане!]] politely. On signs: [[ИЗХОД]] = exit, [[ВХОД]] = entrance.'
  }
];

// Scene della storia. who: narrator | mila | guide
export const intro1 = [
  { who: 'narrator', it: 'Atterri all’aeroporto di Sofia. Da oggi vivi qui! All’uscita una ragazza tiene un cartello bianco e rosso.', en: 'You land at Sofia airport. From today you live here! At the exit, a girl holds a white and red sign.', sign: 'ДОБРЕ ДОШЛИ!', signHelp: { it: 'Benvenuti!', en: 'Welcome!' } },
  { who: 'mila', bg: 'Здравей! Аз съм Мила, твоята съседка.', it: 'Ciao! Sono Mila, la tua vicina di casa.', en: 'Hi! I’m Mila, your neighbour.' },
  { who: 'mila', bg: 'Твоят хладилник е празен!', it: 'Il tuo frigo è vuoto!', en: 'Your fridge is empty!' },
  { who: 'narrator', it: 'Mila ti lancia una sfida: riempire il frigo di calamite da tutta la Bulgaria entro il 1° marzo, il giorno di [[Баба Марта]], quando ci si regala la [[мартеница]], il braccialetto bianco e rosso. Quel giorno arriva sua nonna Ruzha!', en: 'Mila sets you a challenge: fill the fridge with magnets from all over Bulgaria by 1 March, [[Баба Марта]] day, when people give each other a [[мартеница]], the white and red bracelet. That’s when her granny Ruzha arrives!' },
  { who: 'mila', bg: 'До първи март – пълен хладилник! Става ли?', it: 'Entro il primo marzo, frigo pieno! Ci stai?', en: 'By the first of March, a full fridge! Deal?' }
];

export const outro1 = [
  { who: 'mila', bg: 'Браво, {name}! Това е първият магнит за твоя хладилник.', it: 'Bravo, {name}! Questa è la prima calamita per il tuo frigo.', en: 'Well done, {name}! This is the first magnet for your fridge.' },
  { who: 'narrator', it: 'Hai conquistato la calamita di Sofia. Il frigo comincia a riempirsi!', en: 'You’ve won the Sofia magnet. The fridge is starting to fill up!' }
];

const t = (it, en) => ({ it, en });

// 15 attività: 5 Scopri, 5 Prova, 5 Usa.
export const activities1 = [
  // — Scopri —
  // hideTr: la traduzione del fumetto è la risposta, quindi resta chiusa.
  { phase: 0, kind: 'choice', who: 'mila', bg: 'Здравей!', bgHelp: t('Ciao!', 'Hi!'), hideTr: true,
    title: t('Il primo saluto', 'The first greeting'),
    prompt: t('Mila ti saluta. Che cosa vuol dire [[Здравей]]?', 'Mila greets you. What does [[Здравей]] mean?'),
    options: [t('Ciao!', 'Hi!'), t('Grazie!', 'Thank you!'), t('Arrivederci!', 'Goodbye!')], answer: 0,
    explain: t('[[Здравей]] è il saluto informale: lo dici a una persona che conosci o a un coetaneo.', '[[Здравей]] is the informal greeting: you say it to one person you know or someone your age.') },

  { phase: 0, kind: 'match',
    title: t('Le prime parole', 'First words'),
    prompt: t('Abbina ogni parola bulgara al suo significato.', 'Match each Bulgarian word with its meaning.'),
    pairs: [['Здравей', t('Ciao', 'Hi')], ['Благодаря', t('Grazie', 'Thank you')], ['Да', t('Sì', 'Yes')], ['Не', t('No', 'No')]],
    explain: t('Con queste quattro parole puoi già salutare, ringraziare e rispondere.', 'With these four words you can already greet, thank and answer.') },

  { phase: 0, kind: 'read', sign: 'МАМА', signStyle: 'phone',
    title: t('Chi chiama?', 'Who’s calling?'),
    prompt: t('Squilla il telefono di Mila. Sullo schermo c’è scritto [[МАМА]]. Come si legge?', 'Mila’s phone rings. The screen says [[МАМА]]. How do you read it?'),
    options: ['mama', 'nana', 'tata'], latinOptions: true, answer: 0,
    explain: t('[[М]] = m, [[А]] = a. Sei lettere sono «amiche»: [[А К М О Т Е]].', '[[М]] = m, [[А]] = a. Six letters are “friends”: [[А К М О Т Е]].') },

  { phase: 0, kind: 'listen', who: 'mila', say: 'Казвам се Мила.', bgHelp: t('Mi chiamo Mila.', 'My name is Mila.'),
    title: t('Ascolta il nome', 'Listen for the name'),
    prompt: t('Ascolta (o leggi) la ragazza. Come si chiama?', 'Listen to (or read) the girl. What’s her name?'),
    options: ['Мила', 'Мария', 'Ема'], answer: 0,
    explain: t('[[Казвам се…]] = mi chiamo… La ragazza dice [[Казвам се Мила]].', '[[Казвам се…]] = my name is… The girl says [[Казвам се Мила]].') },

  { phase: 0, kind: 'choice', who: 'guide',
    title: t('Il gesto della testa', 'The head gesture'),
    prompt: t('Chiedi a Mila se è stanca. Lei alza il mento con un piccolo scatto e dice [[Не]]. Che cosa intende?', 'You ask Mila if she’s tired. She tosses her chin up and says [[Не]]. What does she mean?'),
    options: [t('No', 'No'), t('Sì', 'Yes'), t('Forse', 'Maybe')], answer: 0,
    explain: t('[[Не]] = no. In Bulgaria, tradizionalmente, il «no» è un piccolo scatto della testa all’indietro (il mento va in su); il «sì» è un dondolio della testa da una spalla all’altra. Molti bulgari, soprattutto in città, usano anche i gesti come i nostri: ascolta sempre la parola!', '[[Не]] = no. Traditionally in Bulgaria, “no” is a short upward toss of the head (chin up); “yes” is a wobble of the head from side to side. Many Bulgarians, especially in cities, also use Western gestures: always listen to the word!') },

  // — Prova —
  { phase: 1, kind: 'order',
    title: t('La frase di Mila', 'Mila’s sentence'),
    prompt: t('Comincia con [[Казвам]] e ricomponi la frase: «Mi chiamo Mila».', 'Start with [[Казвам]] and rebuild the sentence: “My name is Mila”.'),
    answer: ['Казвам', 'се', 'Мила.'],
    explain: t('[[Казвам се Мила]]. [[се]] non può mai stare all’inizio della frase: quando la frase comincia con il verbo, [[се]] va subito dopo.', '[[Казвам се Мила]]. [[се]] can never start a sentence: when the sentence begins with the verb, [[се]] comes right after it.') },

  { phase: 1, kind: 'letters', who: 'mila', bg: 'Ти ли си {name}?', bgHelp: t('Sei tu {name}?', 'Are you {name}?'),
    title: t('Sei proprio tu?', 'Is it really you?'),
    prompt: t('Mila controlla che sei proprio tu. Rispondi «sì»: componi la parola con le lettere.', 'Mila checks it’s really you. Answer “yes”: build the word with the letters.'),
    answer: 'ДА', pool: ['Н', 'А', 'Д', 'Е'],
    explain: t('[[ДА]] = sì. [[Д]] si legge come la nostra d.', '[[ДА]] = yes. [[Д]] sounds like our d.') },

  { phase: 1, kind: 'choice', who: 'narrator',
    title: t('Una nuova conoscenza', 'Someone new'),
    prompt: t('Un ragazzo con lo zaino ti sorride. Chiedigli come si chiama.', 'A boy with a backpack smiles at you. Ask him his name.'),
    options: ['Как се казваш?', 'Казвам се как?', 'Как си казваш?'], answer: 0,
    explain: t('[[Как се казваш?]] = come ti chiami? Attenzione: [[се]], non [[си]].', '[[Как се казваш?]] = what’s your name? Careful: [[се]], not [[си]].') },

  { phase: 1, kind: 'choice', who: 'narrator',
    title: t('Il controllo passaporti', 'Passport control'),
    prompt: t('L’agente del controllo passaporti ti guarda. Salutalo in modo cortese.', 'The passport officer looks at you. Greet him politely.'),
    options: ['Здравейте!', 'Чао!', 'Лека нощ!'], answer: 0,
    explain: t('[[Здравейте]] è cortese, con il Lei. [[Чао]] è da amici e [[Лека нощ]] si dice salutandosi la sera tardi, non arrivando. Anche [[Добър ден]] va benissimo con un funzionario.', '[[Здравейте]] is polite. [[Чао]] is for friends and [[Лека нощ]] is said when parting late in the evening, not on arrival. [[Добър ден]] also works well with an official.') },

  { phase: 1, kind: 'match',
    title: t('I saluti del giorno', 'Greetings through the day'),
    prompt: t('Abbina ogni saluto al momento giusto.', 'Match each greeting with the right time.'),
    pairs: [['Добро утро', t('Buongiorno (mattina)', 'Good morning')], ['Добър ден', t('Buongiorno (di giorno)', 'Good day')], ['Добър вечер', t('Buonasera', 'Good evening')], ['Лека нощ', t('Buonanotte', 'Good night')]],
    explain: t('Il saluto cambia con l’ora, come in italiano.', 'The greeting changes with the time of day.') },

  // — Usa —
  { phase: 2, kind: 'order',
    title: t('Presentati', 'Introduce yourself'),
    prompt: t('Comincia con [[Здравей!]] e presentati a Mila: «Ciao! Io sono…»', 'Start with [[Здравей!]] and introduce yourself to Mila: “Hi! I am…”'),
    answer: ['Здравей!', 'Аз', 'съм', '{name}.'],
    explain: t('[[Аз съм…]] = io sono… Hai unito saluto e nome!', '[[Аз съм…]] = I am… You put a greeting and your name together!') },

  { phase: 2, kind: 'read', who: 'mila', bg: 'Хайде към изхода!', bgHelp: t('Andiamo verso l’uscita!', 'Let’s head for the exit!'),
    title: t('Il cartello giusto', 'The right sign'),
    prompt: t('Mila vuole andare verso l’uscita. Quale cartello seguite?', 'Mila wants to head for the exit. Which sign do you follow?'),
    options: ['ИЗХОД', 'ВХОД', 'КАФЕ'], signOptions: true, answer: 0,
    explain: t('[[ИЗХОД]] = uscita, [[ВХОД]] = entrata, [[КАФЕ]] = caffè.', '[[ИЗХОД]] = exit, [[ВХОД]] = entrance, [[КАФЕ]] = coffee.') },

  { phase: 2, kind: 'choice', who: 'mila', bg: 'Как си?', bgHelp: t('Come stai?', 'How are you?'),
    title: t('Come stai?', 'How are you?'),
    prompt: t('In taxi Mila ti chiede come stai. Rispondi.', 'In the taxi Mila asks how you are. Answer.'),
    options: ['Добре, благодаря!', 'Казвам се добре.', 'Довиждане!'], answer: 0,
    explain: t('[[Добре, благодаря!]] = bene, grazie! È la risposta più comune.', '[[Добре, благодаря!]] = fine, thanks! It’s the most common answer.') },

  { phase: 2, kind: 'choice', who: 'mila', bg: 'Чао! До утре!', bgHelp: t('Ciao! A domani!', 'Bye! See you tomorrow!'),
    title: t('Sotto casa', 'Outside home'),
    prompt: t('Siete arrivati sotto casa e Mila ti saluta. Che cosa rispondi?', 'You’ve arrived home and Mila says goodbye. What do you answer?'),
    options: ['Чао!', 'Добро утро!', 'Как се казваш?'], answer: 0,
    explain: t('Tra amici, quando vai via, dici [[Чао!]]. In modo cortese: [[Довиждане!]] Attento: [[утре]] = domani, [[утро]] = mattina.', 'With friends, when you leave, say [[Чао!]]. Politely: [[Довиждане!]] Careful: [[утре]] = tomorrow, [[утро]] = morning.') },

  { phase: 2, kind: 'free',
    title: t('Il messaggio per Mila', 'A message for Mila'),
    prompt: t('Scrivi a Mila un breve messaggio: un saluto, il tuo nome e un grazie. Puoi usare la tastiera cirillica.', 'Write Mila a short message: a greeting, your name and a thank you. You can use the Cyrillic keyboard.'),
    example: 'Здравей! Аз съм {name}. Благодаря, Мила!',
    explain: t('Hai scritto il tuo primo messaggio in bulgaro! Questa prova libera non viene corretta e il testo non viene salvato.', 'You wrote your first message in Bulgarian! This free task is not marked and the text is not saved.') }
];
