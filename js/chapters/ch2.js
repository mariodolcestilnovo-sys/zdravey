// Capitolo 2 — Буквите в метрото. Testi bulgari da controllare (vedi REVIEW in content.js).
const t = (it, en) => ({ it, en });

export default {
  intro: [
    { who: 'narrator', it: 'Il giorno dopo Mila ti porta in centro con la metro. I cartelli sono tutti in cirillico!', en: 'The next day Mila takes you to the centre by metro. All the signs are in Cyrillic!', sign: 'МЕТРО', signHelp: t('Metro', 'Metro') },
    { who: 'mila', bg: 'Добро утро! Днес отиваме до центъра с метрото.', it: 'Buongiorno! Oggi andiamo in centro con la metro.', en: 'Good morning! Today we’re going to the centre by metro.' },
    { who: 'mila', bg: 'Хайде да четем табелите заедно!', it: 'Dai, leggiamo i cartelli insieme!', en: 'Come on, let’s read the signs together!' }
  ],
  outro: [
    { who: 'mila', bg: 'Браво! Вече четеш на кирилица!', it: 'Complimenti! Leggi già in cirillico!', en: 'Well done! You can already read Cyrillic!' },
    { who: 'narrator', it: 'Hai conquistato la calamita della metro di Sofia.', en: 'You’ve won the Sofia metro magnet.' }
  ],
  teaching: [
    {
      it: 'Attenzione alle lettere «false amiche»: sembrano latine, ma si leggono in un altro modo. [[В]] = v, [[Н]] = n, [[Р]] = r, [[С]] = s, [[У]] = u, [[Х]] = h aspirata. Così [[МЕТРО]] si legge «metro» e [[ХОТЕЛ]] «hotel».',
      en: 'Watch out for the “false friends”: they look Latin but sound different. [[В]] = v, [[Н]] = n, [[Р]] = r, [[С]] = s, [[У]] = u, [[Х]] = h. So [[МЕТРО]] reads “metro” and [[ХОТЕЛ]] “hotel”.'
    },
    {
      it: 'Lettere nuove: [[Б]] = b, [[Г]] = g dura (come in «gatto»), [[Д]] = d, [[Л]] = l, [[П]] = p, [[И]] = i, [[Й]] = i breve (come in «poi»), [[З]] = la s di «rosa», [[Ф]] = f. Sui cartelli: [[ЛЕТИЩЕ]] = aeroporto. Per chiedere: [[Извинете]] = mi scusi, [[Къде е…?]] = dov’è…?',
      en: 'New letters: [[Б]] = b, [[Г]] = hard g (as in “go”), [[Д]] = d, [[Л]] = l, [[П]] = p, [[И]] = i, [[Й]] = short y (as in “boy”), [[З]] = z, [[Ф]] = f. On signs: [[ЛЕТИЩЕ]] = airport. To ask: [[Извинете]] = excuse me, [[Къде е…?]] = where is…?'
    },
    {
      it: 'Le ultime lettere: [[Ж]] = la j francese di «journal», [[Ц]] = la z di «pizza», [[Ч]] = la c di «ciao», [[Ш]] = sc di «scena», [[Щ]] = sht, [[Ъ]] = una «a» breve e scura, [[Ю]] = iu, [[Я]] = ia. [[ЬО]] = io (solo davanti a О). In metro: [[БИЛЕТ]] = biglietto, [[ЦЕНТЪР]] = centro, [[Следваща спирка]] = prossima fermata.',
      en: 'The last letters: [[Ж]] = s in “pleasure”, [[Ц]] = ts, [[Ч]] = ch, [[Ш]] = sh, [[Щ]] = sht, [[Ъ]] = a short, dark “a” (as in “but”), [[Ю]] = yu, [[Я]] = ya. [[ЬО]] = yo (only before О). In the metro: [[БИЛЕТ]] = ticket, [[ЦЕНТЪР]] = centre, [[Следваща спирка]] = next stop.'
    }
  ],
  activities: [
    // — Scopri —
    { phase: 0, kind: 'read', sign: 'МЕТРО', noTl: true,
      title: t('Il primo cartello', 'The first sign'),
      prompt: t('All’ingresso della metro c’è questo cartello. Come si legge?', 'At the metro entrance there’s this sign. How do you read it?'),
      options: ['metro', 'netpo', 'mempo'], latinOptions: true, answer: 0,
      explain: t('[[Р]] si legge r e [[Т]] t: [[МЕТРО]] = metro.', '[[Р]] reads r and [[Т]] t: [[МЕТРО]] = metro.') },

    { phase: 0, kind: 'match', noTl: true,
      title: t('Le false amiche', 'False friends'),
      prompt: t('Abbina ogni lettera bulgara al suo suono.', 'Match each Bulgarian letter with its sound.'),
      pairs: [['В', t('v', 'v')], ['Н', t('n', 'n')], ['Р', t('r', 'r')], ['С', t('s', 's')]],
      explain: t('Sembrano B, H, P e C, ma si leggono v, n, r, s.', 'They look like B, H, P and C, but read v, n, r, s.') },

    { phase: 0, kind: 'choice', noTl: true,
      title: t('La lettera della u', 'The u letter'),
      prompt: t('Quale lettera bulgara si legge «u»?', 'Which Bulgarian letter reads “u”?'),
      options: ['У', 'Х', 'Н'], answer: 0,
      explain: t('[[У]] = u, come in [[УЛИЦА]] (via).', '[[У]] = u, as in [[УЛИЦА]] (street).') },

    { phase: 0, kind: 'listen', who: 'narrator', say: 'Следваща спирка: Сердика.', bgHelp: t('Prossima fermata: Serdika.', 'Next stop: Serdika.'),
      title: t('L’annuncio in metro', 'The metro announcement'),
      prompt: t('Ascolta (o leggi) l’annuncio. Qual è la prossima fermata?', 'Listen to (or read) the announcement. What is the next stop?'),
      options: ['Сердика', 'Опълченска', 'Летище София'], answer: 0,
      explain: t('[[Следваща спирка]] = prossima fermata. [[Сердика]] è la fermata del centro.', '[[Следваща спирка]] = next stop. [[Сердика]] is the stop in the centre.') },

    { phase: 0, kind: 'choice', who: 'guide', noTl: true,
      title: t('La lettera Х', 'The letter Х'),
      prompt: t('Nella parola [[ХОТЕЛ]] la prima lettera si legge…', 'In the word [[ХОТЕЛ]] the first letter reads…'),
      options: [t('h aspirata', 'h'), t('x (ics)', 'x (ex)'), t('k', 'k')], answer: 0,
      explain: t('[[Х]] è una h aspirata, un po’ come in tedesco «Bach»: [[ХОТЕЛ]] = hotel.', '[[Х]] is a breathy h, a bit like Scottish “loch”: [[ХОТЕЛ]] = hotel.') },

    // — Prova —
    { phase: 1, kind: 'letters',
      title: t('Scrivi «metro»', 'Spell “metro”'),
      prompt: t('Componi la parola «metro» con le lettere bulgare.', 'Build the word “metro” with Bulgarian letters.'),
      answer: 'МЕТРО', pool: ['Т', 'О', 'М', 'П', 'Р', 'Е', 'Н'],
      explain: t('[[М-Е-Т-Р-О]]: quattro lettere amiche (М, Е, Т, О) e una falsa amica (Р).', '[[М-Е-Т-Р-О]]: friendly letters plus one false friend (Р).') },

    { phase: 1, kind: 'match', noTl: true,
      title: t('Lettere nuove', 'New letters'),
      prompt: t('Abbina ogni lettera nuova al suo suono.', 'Match each new letter with its sound.'),
      pairs: [['Б', t('b', 'b')], ['Г', t('g', 'g')], ['Д', t('d', 'd')], ['Л', t('l', 'l')]],
      explain: t('[[Б Г Д Л]] = b, g, d, l. Ora leggi [[БАНКА]], [[ГАРА]], [[ДОМ]].', '[[Б Г Д Л]] = b, g, d, l. Now you can read [[БАНКА]], [[ГАРА]], [[ДОМ]].') },

    { phase: 1, kind: 'read', sign: 'ЛЕТИЩЕ СОФИЯ',
      title: t('Un cartello lungo', 'A long sign'),
      prompt: t('Che cosa indica questo cartello?', 'What does this sign point to?'),
      options: [t('L’aeroporto di Sofia', 'Sofia airport'), t('La stazione dei treni', 'The train station'), t('Il centro', 'The centre')], answer: 0,
      explain: t('[[ЛЕТИЩЕ]] = aeroporto. La metro porta anche lì.', '[[ЛЕТИЩЕ]] = airport. The metro goes there too.') },

    { phase: 1, kind: 'choice', who: 'narrator',
      title: t('Mi scusi…', 'Excuse me…'),
      prompt: t('Vuoi chiedere un’informazione a una signora. Come attiri la sua attenzione con cortesia?', 'You want to ask a lady for directions. How do you politely get her attention?'),
      options: ['Извинете!', 'Чао!', 'Лека нощ!'], answer: 0,
      explain: t('[[Извинете]] = mi scusi. È la parola giusta per cominciare una domanda.', '[[Извинете]] = excuse me. It’s the right word to start a question.') },

    { phase: 1, kind: 'order',
      title: t('Dov’è la metro?', 'Where is the metro?'),
      prompt: t('Comincia con [[Извинете,]] e chiedi dov’è la metro.', 'Start with [[Извинете,]] and ask where the metro is.'),
      answer: ['Извинете,', 'къде', 'е', 'метрото?'],
      explain: t('[[метрото]] = la metro: l’articolo si attacca in fondo alla parola. Lo vedremo meglio più avanti.', '[[метрото]] = the metro: the article sticks to the end of the word. More on this later.') },

    // — Usa —
    { phase: 2, kind: 'choice',
      title: t('La macchinetta', 'The ticket machine'),
      prompt: t('Alla macchinetta vedi il pulsante [[БИЛЕТ]]. Che cosa compri?', 'On the machine you see the button [[БИЛЕТ]]. What are you buying?'),
      options: [t('Un biglietto', 'A ticket'), t('Un caffè', 'A coffee'), t('Una mappa', 'A map')], answer: 0,
      explain: t('[[БИЛЕТ]] = biglietto: [[Б]] = b, [[И]] = i, [[Л]] = l.', '[[БИЛЕТ]] = ticket: [[Б]] = b, [[И]] = i, [[Л]] = l.') },

    { phase: 2, kind: 'read',
      title: t('Verso il centro', 'To the centre'),
      prompt: t('Volete uscire in centro. Quale cartello seguite?', 'You want to come out in the centre. Which sign do you follow?'),
      options: ['ЦЕНТЪР', 'ЛЕТИЩЕ', 'ВХОД'], signOptions: true, answer: 0,
      explain: t('[[ЦЕНТЪР]] = centro: [[Ц]] = ts, [[Ъ]] = una a breve.', '[[ЦЕНТЪР]] = centre: [[Ц]] = ts, [[Ъ]] = a short a.') },

    { phase: 2, kind: 'letters',
      title: t('Scrivi «centro»', 'Spell “centre”'),
      prompt: t('Componi la parola che si legge «tsentar» (centro).', 'Build the word that reads “tsentar” (centre).'),
      answer: 'ЦЕНТЪР', pool: ['Е', 'Ъ', 'Ц', 'Р', 'Ч', 'Н', 'Т', 'Щ'],
      explain: t('[[Ц-Е-Н-Т-Ъ-Р]]. Non confondere [[Ц]] (ts) con [[Ч]] (c di «ciao»).', '[[Ц-Е-Н-Т-Ъ-Р]]. Don’t mix up [[Ц]] (ts) and [[Ч]] (ch).') },

    { phase: 2, kind: 'read', sign: 'Следваща спирка: Сердика',
      title: t('Lo schermo del treno', 'The train screen'),
      prompt: t('Sullo schermo del treno compare questa scritta. Che cosa significa?', 'This appears on the train screen. What does it mean?'),
      options: [t('Prossima fermata: Serdika', 'Next stop: Serdika'), t('Uscita: Serdika', 'Exit: Serdika'), t('Biglietti: Serdika', 'Tickets: Serdika')], answer: 0,
      explain: t('[[Следваща спирка]] = prossima fermata. Scendete qui!', '[[Следваща спирка]] = next stop. Time to get off!') },

    { phase: 2, kind: 'free',
      title: t('Il tuo indirizzo', 'Your address'),
      prompt: t('Scrivi in cirillico il nome della tua città o della tua via, con la tastiera fonetica.', 'Write the name of your city or street in Cyrillic, using the phonetic keyboard.'),
      example: 'София, булевард Витоша',
      explain: t('Hai scritto in cirillico da solo! Questa prova non viene corretta e il testo non viene salvato.', 'You wrote in Cyrillic on your own! This task is not marked and the text is not saved.') }
  ],
  words: [
    ['Метро́', 'metró', t('Metro', 'Metro')],
    ['Ста́нция', 'stántsia', t('Stazione', 'Station')],
    ['Спи́рка', 'spírka', t('Fermata', 'Stop')],
    ['Сле́дваща спи́рка', 'slédvashta spírka', t('Prossima fermata', 'Next stop')],
    ['Биле́т', 'bilét', t('Biglietto', 'Ticket')],
    ['Це́нтър', 'tséntar', t('Centro', 'Centre')],
    ['Ле́тище', 'létishte', t('Aeroporto', 'Airport')],
    ['У́лица', 'úlitsa', t('Via, strada', 'Street')],
    ['Бу́ква', 'búkva', t('Lettera (dell’alfabeto)', 'Letter (of the alphabet)')],
    ['Табе́ла', 'tabéla', t('Cartello', 'Sign')],
    ['Извине́те', 'izvinéte', t('Mi scusi', 'Excuse me')],
    ['Къде́ е…?', 'kadé e…?', t('Dov’è…?', 'Where is…?')]
  ]
};
