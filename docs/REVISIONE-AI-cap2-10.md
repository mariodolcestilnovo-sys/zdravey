# Revisione AI del bulgaro – Capitoli 2–10

Data: 2026-10-19 · Revisore: Claude (sessione separata, ruolo «insegnante di bulgaro»)
Fonti lette: `js/chapters/ch2.js … ch10.js` (scene, consegne, spiegazioni IT/EN, opzioni, liste `words`), più [REVISIONE-AI-cap1.md](REVISIONE-AI-cap1.md) e [DA-CONTROLLARE.md](DA-CONTROLLARE.md) per il formato.
I file `js` **non sono stati modificati**: le correzioni le decide e le applica la sessione principale.

## In breve

- **Il bulgaro dei capitoli 2–10 è corretto.** Non ho trovato errori di grammatica nelle frasi bulgare: articolo determinativo (‑ът/‑а/‑та/‑то/‑те/‑ят), един/една/едно, concordanza degli aggettivi (топъл/топла/топло, здрав/здрава), forme con «Вие» sono tutti giusti.
- Le traduzioni italiane e inglesi corrispondono alle frasi bulgare.
- **Accenti e traslitterazioni** delle liste parole: tutti giusti (sistema ufficiale 2009). Unica svista: nel capitolo 8 manca l'accento su «Един».
- In **ogni domanda c'è una sola risposta giusta.** Le opzioni sbagliate sono davvero sbagliate.
- Ottimo: nessuna frase bulgara che il giocatore deve dire cambia tra maschile e femminile.
- Da sistemare: **13 piccole correzioni** (quasi tutte nelle spiegazioni italiane, non nel bulgaro), tra cui **4 testi italiani che presuppongono un giocatore maschio** e un esempio con un indirizzo di Sofia sbagliato.
- Alcuni **miglioramenti facoltativi** (💡), tra cui due incoerenze di stagione (ciliegie in inverno, cicogna il 1° marzo).
- **16 dubbi** per un madrelingua, in fondo.

Legenda esito: ✅ ok · ✏️ da correggere · 💡 ok, ma c'è un'alternativa migliore (facoltativa) · ❓ dubbio per il madrelingua

## Elenco veloce delle correzioni (✏️)

| # | Cap. | Dove | Che cosa cambiare |
|---|---|---|---|
| 1 | 2 | Finale 1 (IT) | «Bravo!» presuppone un maschio → «Complimenti!» |
| 2 | 2 | Att. 6, spiegazione IT | «due lettere amiche (М, Т)» → «quattro lettere amiche (М, Е, Т, О)» |
| 3 | 2 | Att. 7, spiegazione | [[БАНЯ]] usa la Я, non ancora insegnata → [[БАНКА]] |
| 4 | 2 | Att. 15, esempio | «улица Витоша» non esiste: Vitosha è un **булевард** |
| 5 | 5 | Spiegazione fase 2 | «si capisce dalla fine» → aggiungere «quasi sempre» (баща e дядо, cap. 7, sono eccezioni) |
| 6 | 5 | Att. 12, spiegazione IT | «si somiglia!» → «somiglia all'italiano!» |
| 7 | 7 | Introduzione 1 (IT) | «Ti ha invitato» presuppone un maschio → «Mila ti invita» |
| 8 | 8 | Att. 15, esempio | «вървя направо и надясно» è goffo |
| 9 | 8 | Att. 15, spiegazione IT | «viaggiatore esperto» presuppone un maschio |
| 10 | 8 | Lista parole | «Един биле́т» → «Еди́н биле́т», «edín bilét» |
| 11 | 9 | Spiegazione fase 3 | «la rosa è il simbolo della Bulgaria» → «uno dei simboli» |
| 12 | 10 | Att. 2, spiegazione IT | «la prima [[щъркел]]» mescola articolo italiano femminile e parola bulgara maschile |
| 13 | 10 | Att. 13, aiuto IT | «Bravo, {name}!» presuppone un maschio → «Complimenti, {name}!» |

Fuori dai capitoli 2–10, ma stesso problema: in `js/content.js` il finale del capitolo 1 ha «Bravo, {name}!» in italiano (sfuggito alla revisione del capitolo 1) → «Complimenti, {name}!».

---

## Capitolo 2 — Буквите в метрото

| Dove | Frase | Esito | Proposta | Motivo breve |
|---|---|---|---|---|
| Intro 1, cartello | МЕТРО | ✅ | – | – |
| Intro 2 | Добро утро! Днес отиваме до центъра с метрото. | ✅ | – | Naturale. «до центъра» con articolo breve dopo preposizione: giusto. |
| Intro 3 | Хайде да четем табелите заедно! | ✅ | – | – |
| Finale 1 | Браво! Вече четеш на кирилица! | ✅ ✏️ (solo IT) | IT: «Complimenti! Leggi già in cirillico!» | Il bulgaro è perfetto («Браво» non cambia). L'italiano «Bravo!» presuppone un giocatore maschio. |
| Spiegazione 1 | В Н Р С У Х, МЕТРО, ХОТЕЛ | ✅ | – | Le «false amiche» sono quelle giuste. |
| Spiegazione 2 | Б Г Д Л П И Й З Ф, ЛЕТИЩЕ, Извинете, Къде е…? | ✅ 💡 | IT: «[[З]] = la s sonora di «sbaglio» (come la z inglese di «zoo»)» | Giusto. Ma «rosa» al centro‑sud si dice con la s sorda: «sbaglio» ha la s sonora in tutta Italia. |
| Spiegazione 3 | Ж Ц Ч Ш Щ Ъ Ю Я ЬО, БИЛЕТ, ЦЕНТЪР, Следваща спирка | ✅ | – | Con il capitolo 1 sono coperte tutte le 30 lettere. |
| Att. 1 | МЕТРО → metro / netpo / mempo | ✅ | – | Una sola risposta giusta. |
| Att. 2 | В, Н, Р, С (abbinamento) | ✅ | – | – |
| Att. 3 | У / Х / Н → «u» | ✅ | – | УЛИЦА = via: giusto. |
| Att. 4 | Следваща спирка: Сердика. → Сердика / Опълченска / Летище София | ✅ ❓ | – | Fermate vere della metro di Sofia; Сердика è in centro. Vedi dubbio 1 (спирка o станция negli annunci). |
| Att. 5 | ХОТЕЛ → h aspirata / x / k | ✅ | – | – |
| Att. 6 | Lettere: МЕТРО | ✅ ✏️ (solo IT) | IT: «[[М-Е-Т-Р-О]]: quattro lettere amiche (М, Е, Т, О) e una falsa amica (Р).» | Anche Е e О sono «lettere amiche» (capitolo 1). L'inglese va già bene. |
| Att. 7 | Б, Г, Д, Л + «Ora leggi БАНЯ, ГАРА, ДОМ» | ✅ ✏️ | Sostituire [[БАНЯ]] con [[БАНКА]] (banca). | [[БАНЯ]] contiene la Я, che arriva solo nella spiegazione 3. [[БАНКА]] usa solo lettere già viste. |
| Att. 8 | ЛЕТИЩЕ СОФИЯ → aeroporto | ✅ | – | Vero: la linea M4 arriva al Terminal 2. |
| Att. 9 | Извинете! / Чао! / Лека нощ! | ✅ | – | – |
| Att. 10 | Извинете, / къде / е / метрото? | ✅ | – | Ordine unico (il «?» resta in fondo). |
| Att. 11 | БИЛЕТ → biglietto | ✅ | – | – |
| Att. 12 | ЦЕНТЪР / ЛЕТИЩЕ / ВХОД | ✅ | – | – |
| Att. 13 | Lettere: ЦЕНТЪР («tsentar») | ✅ | – | Traslitterazione giusta. Bel distrattore Ч/Щ. |
| Att. 14 | Следваща спирка: Сердика | ✅ | – | – |
| Att. 15 | Esempio: София, улица Витоша | ✏️ | «София, булевард Витоша» (oppure «София, улица Граф Игнатиев») | Vitosha a Sofia è un viale: **бул. Витоша**, non «улица». Un residente se ne accorge subito. |
| Parole | Метро́ metró · Ста́нция stántsia · Спи́рка spírka · Сле́дваща spírka slédvashta · Биле́т bilét · Це́нтър tséntar · Ле́тище létishte · У́лица úlitsa · Бу́ква búkva · Табе́ла tabéla · Извине́те izvinéte · Къде́ е kadé e | ✅ | – | Accenti e traslitterazione tutti giusti (-ия finale → -ia). |

## Capitolo 3 — Кафе и баница

| Dove | Frase | Esito | Proposta | Motivo breve |
|---|---|---|---|---|
| Intro 1, cartello | КАФЕ – БАНИЦА | ✅ | – | – |
| Intro 2 | Здравейте! Какво ще обичате? | ✅ | – | È proprio la frase di chi sta al banco. |
| Intro 3 | Тук правят най-хубавата баница в квартала! | ✅ | – | Naturale. |
| Finale 1–2 | Приятен ден! / Баницата е много вкусна! | ✅ | – | – |
| Finale 3 (IT/EN) | «la sfoglia al formaggio della colazione bulgara» | ✅ | – | Giusto (banitsa con сирене e uova). |
| Spiegazione 1 | Какво ще обичате? / Едно кафе, моля / Моля / Благодаря | ✅ | – | «Моля» = per favore e prego: giusto. |
| Spiegazione 2 | един чай / една баница / едно кафе; едно, две… десет | ✅ | – | Per contare in astratto si usa proprio «едно, две, три»: giusto. |
| Spiegazione 3 | Колко струва? / евро / три евро / петдесет цента / Заповядайте! / Сметката, моля | ✅ ❓ | – | Corretto: dal 1° gennaio 2026 la Bulgaria usa l'euro; «евро» non cambia; «петдесет цента» è la forma giusta dopo un numero. Vedi dubbio 2 (nel parlato si dice «цента» o ancora «стотинки»?). |
| Att. 1 | Едно кафе, моля. / Казвам се кафе. / Довиждане, кафе! | ✅ | – | – |
| Att. 2 | Кафе, Чай, Вода, Баница | ✅ | – | – |
| Att. 3 | моля → per favore | ✅ | – | – |
| Att. 4 | Една баница и едно кафе. | ✅ | – | – |
| Att. 5 | една / един / едно + баница | ✅ | – | – |
| Att. 6 | едно, три, пет, десет | ✅ | – | – |
| Att. 7 | Едно / кафе, / моля. | ✅ | – | Ordine unico. |
| Att. 8 | Един чай, моля. (e le due sbagliate) | ✅ | – | «Й» è una consonante: giusto dire che «чай» finisce in consonante. |
| Att. 9 | Lettere: ЧАЙ («chay») | ✅ | – | – |
| Att. 10 | Седем евро, моля. → 7 € | ✅ | – | – |
| Att. 11 | Колко струва баницата? | ✅ | – | Una sola risposta giusta. |
| Att. 12 | БАНИЦА – 2 € / КАФЕ – 1,50 € / едно евро и петдесет цента | ✅ | – | Virgola decimale e «€» dopo il numero: come si scrive in Bulgaria. |
| Att. 13 | Заповядайте! → Благодаря! (Desi: Моля!) | ✅ | – | – |
| Att. 14 | Колко / струва / едно / кафе? | ✅ | – | Ordine unico. |
| Att. 15 | Esempio: Здравейте! Едно кафе и една баница, моля. Благодаря! | ✅ | – | – |
| Parole | Кафе́ kafé · Чай chay · Вода́ vodá · Ба́ница bánitsa · Мо́ля mólya · Какво́ ще оби́чате kakvó shte obíchate · Еди́н/една́/едно́ · Ко́лко стру́ва kólko strúva · Е́вро/цент · Заповя́дайте zapovyádayte · Сме́тката smétkata · Прия́тен ден priyáten den | ✅ | – | Tutti giusti. |

## Capitolo 4 — Откъде си?

| Dove | Frase | Esito | Proposta | Motivo breve |
|---|---|---|---|---|
| Intro 1 (IT/EN) | «il portiere, il signor Petrov» | ✅ ❓ | – | Vedi dubbio 3: nei palazzi bulgari (блок) di solito non c'è un portiere, ma un amministratore (домоуправител). Va bene se il palazzo è nuovo. |
| Intro 2 | Добър ден! Вие живеете на третия етаж, нали? | ✅ 💡 (solo EN) | EN: «Hello! You live on the third floor, don't you?» | Bulgaro perfetto (Вие con la maiuscola, «третия» con articolo breve). «Good afternoon» in inglese fissa un'ora del giorno che il bulgaro non dice. |
| Intro 3 | Казвам се Петров. Аз съм портиерът. | ✅ | – | Presentarsi col cognome è tipico di un signore formale. |
| Finale 1 | Приятно ми е! Добре дошли в блока! | ✅ | – | «Benvenuti» (plurale) in italiano va bene e non presuppone il genere. |
| Spiegazione 1 | аз съм / ти си / той е / тя е / Откъде си? / Аз съм от Италия | ✅ | – | – |
| Spiegazione 2 | Вие сте / Откъде сте? / ние сме / вие сте / те са | ✅ | – | Ben spiegata la differenza tra «Вие» (cortese) e «вие» (plurale). |
| Spiegazione 3 | италианец/италианка, българин/българка, англичанин/англичанка, Говорите ли български?, Малко, Не разбирам | ✅ | – | Facoltativo per chi gioca in inglese: aggiungere [[американец]] / [[американка]]. |
| Att. 1 | Аз съм от Италия. (e le due sbagliate) | ✅ | – | – |
| Att. 2 | Италия, България, Англия, Испания | ✅ | – | – |
| Att. 3 | съм / си / е | ✅ | – | – |
| Att. 4 | Аз съм от Пловдив. | ✅ | – | Coerente con i capitoli 8–9 (nonna a Plovdiv). |
| Att. 5 | Откъде сте? / Откъде си? | ✅ | – | – |
| Att. 6 | аз съм, ти си, тя е, ние сме | ✅ | – | – |
| Att. 7 | Мила ___ от Пловдив → е | ✅ | – | – |
| Att. 8 | Откъде / сте, / господин / Петров? | ✅ | – | Naturale e cortese. Ordine unico. |
| Att. 9 | Аз съм от Варна. Там е морето. | ✅ | – | – |
| Att. 10 | българин / българка / италианка | ✅ | – | – |
| Att. 11 | Говорите ли български? → Малко. | ✅ | – | Una sola risposta giusta. |
| Att. 12 | българка / българин / италианец | ✅ | – | – |
| Att. 13 | Извинете, не разбирам. | ✅ | – | Frase utilissima. |
| Att. 14 | Ние / сме / съседи. | ✅ | – | – |
| Att. 15 | Esempio: Добър ден! Казвам се {name}. Аз съм от Италия. Говоря малко български. | ✅ | – | Nessuna parola che cambia col genere: perfetto. |
| Parole | Откъде́ otkadé · Ни́е/ви́е · Италиа́нец italiánets · Бълга́рин balgárin · Англича́нин anglichánin · Говори́те govoríte · Ма́лко · Не разби́рам · Прия́тно ми е priyátno · Съсе́ди sasédi | ✅ | – | Tutti giusti. |

## Capitolo 5 — Новият апартамент

| Dove | Frase | Esito | Proposta | Motivo breve |
|---|---|---|---|---|
| Intro 2 | Това е твоят нов дом! | ✅ | – | Corretto. (Nel parlato anche «Това е новият ти дом!».) |
| Intro 3 | Хладилникът е в кухнята, нали знаеш! | ✅ ❓ | – | Corretto. Vedi dubbio 4 (suona naturale?). |
| Finale 1 | Сега вече си у дома! | ✅ | – | «у дома» = a casa: espressione giusta. |
| Spiegazione 1 | Това е… / кухнята / кухня, баня, спалня, хол | ✅ | – | – |
| Spiegazione 2 | стол, ключ (той); маса, врата (тя); легло, кафе (то) | ✏️ | IT: «Ogni parola ha un genere, e **quasi sempre** si capisce dalla fine. … (Qualche eccezione: [[баща]], papà, è maschile anche se finisce in -а.)» EN: «…and you can **almost always** tell from the ending…» | Detto come regola assoluta, poi il capitolo 7 la smentisce con [[баща]] e [[дядо]]. L'attività 5 dice già «di solito». |
| Spiegazione 3 | Има / Няма / В хола има телевизор / Къде е ключът? / Тук / там / на масата | ✅ 💡 (solo IT) | IT: «…= in soggiorno c'è un televisore.» | «телевизор» senza articolo = «un televisore», non «la TV». Piccolezza. |
| Att. 1 | Това е кухнята. | ✅ | – | – |
| Att. 2 | Кухня, Баня, Спалня, Хол | ✅ | – | – |
| Att. 3 | Това е… → Questo è… / Това е Мила | ✅ | – | – |
| Att. 4 | Това е спалнята. | ✅ | – | – |
| Att. 5 | кухня / хол / кафе | ✅ | – | – |
| Att. 6 | стол, маса, легло | ✅ | – | – |
| Att. 7 | Маса, Стол, Легло, Врата | ✅ | – | Utile l'avviso «маса = tavolo». |
| Att. 8 | легло → то | ✅ | – | – |
| Att. 9 | Lettere: КЛЮЧ («klyuch») | ✅ | – | – |
| Att. 10 | Това / е / моят / ключ. | ✅ | – | «моят» con articolo pieno: giusto. Ordine unico. |
| Att. 11 | Къде е ключът? → На масата е. | ✅ | – | Risposta naturale. |
| Att. 12 | В банята няма сапун! | ✅ ✏️ (solo IT) | IT: «[[няма]] = non c'è. [[сапун]] = sapone: somiglia all'italiano!» | «si somiglia» non è italiano corretto in questo senso. |
| Att. 13 | В хола няма телевизор. (e le due sbagliate) | ✅ | – | – |
| Att. 14 | Къде е ключът? → Тук е. / Там е. / Няма го. | ✅ 💡 ❓ | Facoltativo nella spiegazione: «Se la mostri, un bulgaro dice anche [[Ето го!]] (eccola!).» | Giusta e unica. Vedi dubbio 5. |
| Att. 15 | Esempio: Това е моят дом. Има кухня, баня и хол. Няма балкон. | ✅ | – | – |
| Parole | Това́ tová · Ку́хня kúhnya · Ба́ня bánya · Спа́лня spálnya · Хол · Ма́са mása · Стол · Легло́ legló · Врата́ vratá · Ключ klyuch · И́ма/ня́ма íma/nyáma · Тук/там · Дом | ✅ | – | Tutti giusti. |

## Capitolo 6 — На Женския пазар

| Dove | Frase | Esito | Proposta | Motivo breve |
|---|---|---|---|---|
| Intro 1 (IT/EN), cartello | ЖЕНСКИ ПАЗАР, «il mercato più antico di Sofia» | ✅ | – | Il Женски пазар è il mercato storico di Sofia; il nome si traduce davvero «Mercato delle donne». |
| Intro 2 | Тук всичко е свежо и евтино. | ✅ | – | – |
| Intro 3 | Заповядайте! Домати, краставици, череши! | ✅ 💡 | Vedi sotto «stagione». | Frase tipica del banco. |
| Finale 1 | Благодаря! Приятен ден! | ✅ | – | – |
| Finale 2 | Сега имаме всичко за шопска салата! | ✅ 💡 | «Сега имаме почти всичко за шопска салата!» (quasi tutto) | Bulgaro giusto, ma non hanno comprato il formaggio (сирене), che nella шопска è essenziale. Un bulgaro lo noterebbe sorridendo. |
| Finale 3 (IT/EN) | шопска салата = pomodori, cetrioli, peperoni, formaggio bianco | ✅ | – | Giusto (spesso anche cipolla e prezzemolo). |
| Spiegazione 1 | домати, краставици, ябълки, череши, чушки / домат / ябълка | ✅ | – | – |
| Spiegazione 2 | единайсет, двайсет, трийсет, петдесет, сто / двайсет и пет / единадесет, двадесет, тридесет | ✅ | – | Ottimo spiegare la forma parlata e quella scritta. |
| Spiegazione 3 | Колко струва един килограм? / Искам / Дайте ми… / един килограм домати / половин килограм | ✅ ❓ | – | Corretto. Vedi dubbio 6 (al mercato si dice anche «Колко е килото?», «Килограм домати, моля»). |
| Att. 1 | Домати, Ябълки, Череши, Чушки | ✅ | – | – |
| Att. 2 | Заповядайте, свежи домати! | ✅ | – | – |
| Att. 3 | ябълки / ябълка / ябълко | ✅ | – | – |
| Att. 4 | Черешите са по пет евро. → 5 € | ✅ ❓ | – | «по пет евро» = a cinque euro (al chilo): giusto. Vedi dubbio 7. |
| Att. 5 | Искам ябълки, моля. (e le due sbagliate) | ✅ | – | – |
| Att. 6 | двайсет, трийсет, петдесет, сто | ✅ | – | – |
| Att. 7 | двайсет и пет / пет и двайсет / двайсет пет | ✅ | – | Una sola giusta. |
| Att. 8 | Lettere: СТО | ✅ | – | – |
| Att. 9 | ЧУШКИ – 3 € / кг | ✅ | – | – |
| Att. 10 | Колко / струва / един / килограм? | ✅ | – | Ordine unico. |
| Att. 11 | Какво искате? → Един килограм домати, моля. | ✅ 💡 | Facoltativo nella spiegazione: «Spesso si dice solo [[Килограм домати, моля]].» | Giusta e unica. Al mercato «един» spesso cade. |
| Att. 12 | Шест евро. → resto 4 € / четири евро | ✅ | – | – |
| Att. 13 | И половин килограм череши, моля. | ✅ | – | – |
| Att. 14 | Нещо друго? → Не, това е всичко. Благодаря! | ✅ | – | «Да, сто килограма!» è grammaticalmente giusta ma è chiaramente lo scherzo sbagliato: va bene. |
| Att. 15 | Esempio: Един килограм домати, половин килограм череши и три ябълки. | ✅ | – | – |
| **Stagione** | череши in tutto il capitolo | 💡 | Sostituire [[череши]] con [[мандарини]] o [[портокали]], oppure lasciare. | La storia va da inverno al 1° marzo: le ciliegie bulgare si trovano a maggio‑giugno. Non è un errore di lingua: decide Mario. |
| Parole | Паза́р pazár · Дома́т domát · Кра́ставица krástavitsa · Я́бълка yábalka · Чере́ша cherésha · Чу́шка chúshka · Килогра́м kilográm · Полови́н polovín · И́скам ískam · Да́йте ми dáyte mi · Два́йсет dváyset · Три́йсет tríyset · Петдесе́т petdesét · Сто · Не́що дру́го néshto drúgo · Това́ е вси́чко tová e vsíchko | ✅ | – | Tutti giusti. |

## Capitolo 7 — Рожденият ден на Мила

| Dove | Frase | Esito | Proposta | Motivo breve |
|---|---|---|---|---|
| Intro 1 (IT) | «Ti ha invitato a casa sua» | ✏️ (solo IT) | IT: «Oggi è il compleanno di Mila! Ti invita a casa sua, con tutta la famiglia.» | «invitato» presuppone un giocatore maschio. Il presente evita il problema. |
| Intro 2 | Влизай! Това е моето семейство. | ✅ | – | – |
| Finale 1 | Благодаря за подаръка! Много е хубав! | ✅ | – | «подарък» maschile → «хубав»: giusto. |
| Finale 2 | Баба Ружа ни кани в Пловдив! | ✅ | – | – |
| Spiegazione 1 | майка, баща (maschile!), брат, сестра, баба, дядо, Честит рожден ден! | ✅ | – | – |
| Spiegazione 2 | Имам / нямам / Имаш ли сестра? / моят брат, моята сестра, моето семейство / майка ми, брат ми | ✅ | – | Ottimo citare «майка ми, брат ми»: è la forma più usata nel parlato. |
| Spiegazione 3 | На колко години си? / На трийсет години съм / Наздраве! | ✅ | – | – |
| Att. 1 | Честит рожден ден! | ✅ | – | – |
| Att. 2 | Майка, Баща, Брат, Сестра | ✅ | – | – |
| Att. 3 | Това е майка ми, а това е баща ми. | ✅ | – | Naturale. |
| Att. 4 | Имам един брат и една сестра. | ✅ | – | (Nel parlato spesso «Имам брат и сестра»; qui «един/една» serve a ripassare.) |
| Att. 5 | дядо / баща / брат | ✅ | – | – |
| Att. 6 | Аз ___ сестра → имам | ✅ | – | – |
| Att. 7 | Нямам брат. / Нямам е брат. / Не съм брат. | ✅ 💡 (solo IT) | IT consegna: «Non hai un fratello. Come lo dici?» | «Non hai fratelli» fa pensare al plurale ([[Нямам братя]]); l'inglese dice già «a brother». |
| Att. 8 | Имаш / ли / сестра? | ✅ | – | – |
| Att. 9 | Lettere: БАБА | ✅ | – | – |
| Att. 10 | моят брат, моята сестра, моето семейство | ✅ | – | – |
| Att. 11 | На трийсет години съм. (e le due sbagliate) | ✅ | – | Una sola giusta. |
| Att. 12 | Днес съм на двайсет и пет години. | ✅ ❓ | – | Corretta. Vedi dubbio 8 («Днес навършвам двайсет и пет» è più vicino a «oggi compio»). |
| Att. 13 | Честит рожден ден, Мила! Бъди здрава и щастлива! | ✅ | – | Augurio tipico; giusto segnalare che è al femminile. |
| Att. 14 | Наздраве! | ✅ | – | Vero: in Bulgaria si guarda negli occhi quando si brinda. |
| Att. 15 | Esempio: Имам майка, баща и една сестра. Сестра ми е на двайсет години. | ✅ | – | – |
| Parole | Семе́йство seméystvo · Ма́йка máyka · Ба́ща báshta · Брат · Сестра́ sestrá · Ба́ба/дя́до bába/dyádo · И́мам/ня́мам · Чести́т ро́жден ден chestít rózhden den · На ко́лко годи́ни си · Наздра́ве nazdráve · По́дарък pódarak | ✅ | – | Tutti giusti. |

## Capitolo 8 — Маршрутка до Пловдив

| Dove | Frase | Esito | Proposta | Motivo breve |
|---|---|---|---|---|
| Intro 1, cartello | АВТОГАРА, minibus, autista Ivaylo | ✅ ❓ | – | Vedi dubbio 9 (oggi Sofia–Plovdiv si fa quasi sempre in pullman o in treno). |
| Intro 2 | Добро утро! За Пловдив ли сте? | ✅ | – | Naturale; «сте» perché siete in due. |
| Finale 1 | Добре дошли в Пловдив! | ✅ | – | – |
| Finale 2 | Пловдив е един от най-старите градове в Европа! | ✅ | – | Grammatica giusta («един от» + plurale); fatto vero. |
| Finale 3 (IT/EN) | teatro romano | ✅ | – | L'Античен театър è il simbolo di Plovdiv. |
| Spiegazione 1 | автобус, маршрутка, влак, такси, билет, Един билет до Пловдив, моля, до | ✅ | – | – |
| Spiegazione 2 | В колко часа тръгва? / В осем часа / В девет и половина / Пристига | ✅ | – | – |
| Spiegazione 3 | наляво, надясно, направо, после, Къде е спирката? | ✅ | – | – |
| Att. 1 | АВТОГАРА / гара | ✅ | – | – |
| Att. 2 | Автобус, Влак, Такси, Маршрутка | ✅ | – | – |
| Att. 3 | Да, за Пловдив. / Не, за Пловдив. / Пловдив е. | ✅ | – | – |
| Att. 4 | Маршрутката тръгва в осем часа. | ✅ | – | – |
| Att. 5 | Един билет до Пловдив, моля. (e le due sbagliate) | ✅ | – | – |
| Att. 6 | в осем / девет / десет часа, в девет и половина | ✅ | – | – |
| Att. 7 | В / колко / часа / тръгва? | ✅ | – | – |
| Att. 8 | Билетът е десет евро. → 10 € | ✅ ❓ | – | Corretto nel parlato. Vedi dubbio 10 («струва» è più formale). |
| Att. 9 | СОФИЯ – ПЛОВДИВ / Тръгва: 8:00 / Пристига: 10:15 | ✅ | – | Durata realistica (circa 2 ore). |
| Att. 10 | Lettere: ВЛАК («vlak») | ✅ | – | – |
| Att. 11 (IT) | ← → Наляво. «Siete arrivati.» | ✅ 💡 (solo IT) | IT: «Eccovi a Plovdiv. Il navigatore mostra ←.» | «arrivati» presuppone che almeno uno dei due sia maschio (Mila è femmina). Piccolezza. |
| Att. 12 | наляво, надясно, направо | ✅ | – | – |
| Att. 13 | Спирката е направо, после надясно. | ✅ ❓ | – | Corretta e chiara. Vedi dubbio 11. |
| Att. 14 | Благодаря, приятен ден! | ✅ | – | – |
| Att. 15 | Esempio: Взимам автобуса в девет часа. После вървя направо и надясно. | ✏️ | «Взимам автобуса в девет часа. После вървя направо и завивам надясно.» | «вървя … надясно» suona goffo: per «giro a destra» si dice «завивам надясно». («Взимам» è accettato accanto a «вземам».) |
| Att. 15 (IT) | «Scrivi a Mila come arrivi a casa sua» | 💡 | «Scrivi a nonna Ruzha come arrivi a casa sua…» | In questo capitolo Mila viaggia con te: scriverle è strano. |
| Att. 15, spiegazione (IT) | «Messaggio da viaggiatore esperto!» | ✏️ (solo IT) | IT: «Messaggio da vero esperto di viaggi!» oppure «Un messaggio perfetto per viaggiare!» | «viaggiatore» presuppone un giocatore maschio. |
| Parole | Автога́ра avtogára · Авто́бус avtóbus · Маршру́тка marshrútka · Влак · Такси́ taksí · **Един** биле́т до… edin bilét · В ко́лко ча́са · Тръ́гва trágva · Присти́га pristíga · И полови́на · Наля́во nalyávo · Надя́сно nadyásno · Напра́во naprávo · По́сле pósle | ✅ ✏️ | «Еди́н биле́т до…», «edín bilét do…» | Tutte giuste, ma su «Един» manca l'accento (nelle altre liste c'è sempre). |

## Capitolo 9 — При баба Ружа

| Dove | Frase | Esito | Proposta | Motivo breve |
|---|---|---|---|---|
| Intro 1 (IT/EN) | casa colorata nella città vecchia di Plovdiv | ✅ | – | Le case del Risorgimento bulgaro nello Старият град: giusto. |
| Intro 2 | Добре дошли, деца! Влизайте! | ✅ | – | Una nonna chiama «деца» anche i giovani adulti: naturale. |
| Intro 3 | Супата е готова, хлябът е топъл. | ✅ | – | – |
| Finale 1 | На първи март ще дойда в София да видя хладилника! | ✅ | – | – |
| Finale 2 (IT/EN) | piccola rosa di legno | ✅ | – | – |
| Spiegazione 1 | хляб → хлябът, супа → супата, мляко → млякото | ✅ | – | – |
| Spiegazione 2 | -та, -то, -те; -ът (soggetto) / -а (altri casi); -ят (чаят) | ✅ 💡 | Aggiungere IT: «Parlando, [[хлябът]] e [[хляба]] si sentono quasi uguali: questa regola conta soprattutto quando scrivi.» EN: «In speech the two forms sound almost the same: the rule matters mostly in writing.» | Regola giusta e ben semplificata per A1. Ma molti bulgari, parlando, non fanno la differenza: meglio dirlo, così il giocatore non si confonde. |
| Spiegazione 3 | топъл хляб, топла супа, топло мляко / студен / вкусен / Много е вкусно! / розово масло | ✅ ✏️ | IT: «La rosa è **uno dei simboli** della Bulgaria…» EN: «The rose is **one of** Bulgaria's symbols…» | Il simbolo ufficiale della Bulgaria è il leone. La rosa è un simbolo molto amato, non «il» simbolo. Bulgaro tutto giusto. |
| Att. 1 | хлябът → il pane / un pane / i pani | ✅ | – | – |
| Att. 2 | хляб, хлябът, супа, супата | ✅ | – | – |
| Att. 3 | Супата е готова! | ✅ | – | – |
| Att. 4 | Млякото е в хладилника. | ✅ | – | – |
| Att. 5 | къщата / къща / къщи | ✅ | – | – |
| Att. 6 | кафето / кафета / кафеът | ✅ | – | – |
| Att. 7 | Хлябът / Хляба / Хлябата + е топъл | ✅ | – | Giusta solo «Хлябът» (lingua scritta). Vedi il 💡 alla spiegazione 2. |
| Att. 8 | чаят, розата, млякото, доматите | ✅ | – | – |
| Att. 9 | Хлябът / е / много / вкусен. | ✅ ❓ | – | Corretta. Vedi dubbio 12 (anche «Хлябът много е вкусен» potrebbe sembrare accettabile a chi ha imparato «Много е вкусно»). |
| Att. 10 | Lettere: РОЗА («roza») | ✅ | – | Simpatico il gioco «З = la s di rosa» (ma vedi il 💡 del cap. 2 sulla s sonora). |
| Att. 11 | Супата е топла. (e le due sbagliate) | ✅ | – | – |
| Att. 12 | Искаш ли още супа? → Не, благодаря. Много беше вкусна! | ✅ | – | Naturale; «вкусна» si riferisce alla zuppa, quindi vale per tutti. |
| Att. 13 | РОЗОВО МАСЛО / Казанлък | ✅ | – | Казанлък è proprio il centro della Valle delle Rose; la boccetta di legno è il souvenir tipico. |
| Att. 14 | Млякото е студено. (e le due sbagliate) | ✅ | – | – |
| Att. 15 | Esempio: Хлябът е топъл, супата е вкусна и млякото е студено. | ✅ | – | – |
| Parole | Хляб/хля́бът hlyab/hlyábat · Су́па/су́пата · Мля́ко/мля́кото mlyáko · Къ́ща/къ́щата káshta · Ро́за róza · То́пъл/то́пла/то́пло tópal · Студе́н studén · Вку́сен/вку́сна vkúsen · Гото́в/гото́ва gotóv · Мно́го mnógo · Ро́зово ма́сло rózovo máslo | ✅ | – | Tutti giusti. |

## Capitolo 10 — Честита Баба Марта!

| Dove | Frase | Esito | Proposta | Motivo breve |
|---|---|---|---|---|
| Intro 1 (IT/EN) | 1° marzo, braccialetti bianchi e rossi | ✅ | – | Giusto (la мартеница può essere anche una spilla o due pupazzetti, Пижо и Пенда, ma il braccialetto è la più comune). |
| Intro 2 | Честита Баба Марта! Това е твоята мартеница. | ✅ | – | – |
| Intro 3 | Носи я, докато видиш щъркел или цъфнало дърво. | ✅ ❓ | – | Corretta e fedele alla tradizione. Vedi dubbio 13 («докато видиш» o «докато не видиш»). |
| Finale 1 | Това е най-хубавият хладилник в София! | ✅ | – | Articolo pieno «-ят» dopo «е»: giusto. |
| Finale 2 | Благодаря ти за всичко! Вече говориш български! | ✅ | – | – |
| Spiegazione 1 | Честита Баба Марта! / мартеница / Бъди здрав! / Бъди здрава! | ✅ | – | – |
| Spiegazione 2 | понеделник … неделя / Днес е събота / в неделя | ✅ | – | – |
| Spiegazione 3 | януари, февруари, март, април / първи март, втори март / Кога? | ✅ | – | – |
| Att. 1 | Честита Баба Марта! | ✅ | – | – |
| Att. 2 | мартеница, щъркел, пролет, здраве | ✅ ✏️ (solo IT) | IT: «La [[мартеница]] si porta fino all'arrivo della primavera: la prima cicogna ([[щъркел]]) è il segnale.» | «la prima щъркел» mette un articolo femminile davanti a una parola bulgara maschile: può confondere proprio mentre si studia il genere. |
| Att. 3 | Бъди здрав! / здрава! / здраво! | ✅ | – | – |
| Att. 4 | Видях щъркел! Пролетта идва! | ✅ 💡 | Facoltativo nella spiegazione: «Di solito le cicogne tornano in Bulgaria verso fine marzo.» | Bulgaro giusto. Ma il 1° marzo vedere una cicogna è raro, e subito prima Mila dice «portala finché non vedi una cicogna». Vedi dubbio 14. |
| Att. 5 | Tradizione: albero in fiore o sotto una pietra | ✅ | – | Entrambe le usanze sono vere. |
| Att. 6 | понеделник, сряда, петък, неделя | ✅ | – | Vero: giorni con la minuscola. |
| Att. 7 | неделя / понеделник / петък | ✅ | – | – |
| Att. 8 | Днес / е / събота. | ✅ | – | – |
| Att. 9 | Lettere: МАРТ | ✅ | – | – |
| Att. 10 | Пристигам в неделя. → в неделя | ✅ | – | – |
| Att. 11 | януари, февруари, март, април | ✅ | – | – |
| Att. 12 | първи март / едно март / първа март | ✅ | – | Una sola giusta. |
| Att. 13 | Хладилникът е пълен! Браво, {name}! | ✅ ✏️ (solo IT) | IT aiuto: «Il frigo è pieno! Complimenti, {name}!» | Il bulgaro è perfetto. L'italiano «Bravo» presuppone un giocatore maschio. |
| Att. 14 | Благодаря! Честита Баба Марта! | ✅ | – | – |
| Att. 15 | Esempio: Честита Баба Марта! Бъди здрава и щастлива! | ✅ | – | Rivolto a una donna: va bene come esempio; il giocatore lo adatta. |
| Parole | Чести́та Ба́ба Ма́рта chestíta bába márta · Мартени́ца martenítsa · Бъди́ здрав/здра́ва badí zdrav/zdráva · Щъ́ркел shtárkel · Про́лет prólet · Днес · Понеде́лник ponedélnik · Вто́рник vtórnik · Сря́да sryáda · Четвъ́ртък chetvártak · Пе́тък pétak · Съ́бота sábota · Неде́ля nedélya · Януа́ри yanuári · Февруа́ри fevruári · Март · Апри́л apríl · Пъ́рви párvi · Кога́ kogá | ✅ | – | Tutti giusti. |

---

## Controlli generali

- **Una sola risposta giusta**: verificato in tutte le 135 attività dei capitoli 2–10 (scelte, abbinamenti, lettere, frasi da ricomporre). Nelle frasi da ricomporre la parola iniziale data e la punteggiatura bastano a rendere l'ordine unico (unico caso al limite: cap. 9 att. 9, dubbio 12).
- **Genere del giocatore, bulgaro**: nessuna frase che il giocatore deve dire o scegliere cambia tra maschile e femminile. Ottimo.
- **Genere del giocatore, italiano**: 4 punti da correggere (cap. 2 finale, cap. 7 intro, cap. 8 att. 15, cap. 10 att. 13) più 1 facoltativo (cap. 8 att. 11). L'inglese non ha questo problema.
- **Cultura**: Женски пазар, шопска салата, Баба Марта e мартеница, cicogna, Казанлък e Valle delle Rose, Plovdiv «una delle città più antiche d'Europa», brindisi guardandosi negli occhi: tutto giusto. Da valutare solo la маршрутка (dubbio 9) e due incoerenze di stagione (ciliegie, cicogna).
- **Livello A1**: le spiegazioni grammaticali sono giuste e semplici. Le uniche da ritoccare sono la regola del genere (cap. 5) e l'articolo maschile parlato/scritto (cap. 9).

## Dubbi da chiedere a un madrelingua

1. **Annuncio in metro (cap. 2)**: nella metro di Sofia l'annuncio dice «Следваща спирка: …» o «Следваща станция: …»?
2. **Centesimi (cap. 3)**: dopo il passaggio all'euro, nel parlato si dice «петдесет цента», «петдесет евроцента» o ancora «петдесет стотинки»?
3. **Portiere (cap. 4)**: in un palazzo di Sofia è realistico un «портиер», o sarebbe più tipico un «домоуправител»?
4. **«Хладилникът е в кухнята, нали знаеш!» (cap. 5)**: suona naturale come battuta scherzosa?
5. **La chiave (cap. 5, att. 14)**: se hai la chiave in mano, un bulgaro dice «Тук е.» o piuttosto «Ето го!» / «Ето я!»?
6. **Al mercato (cap. 6)**: è più tipico «Колко струва един килограм?» o «Колко е килото?»; «Един килограм домати, моля» o «Килограм домати, моля»?
7. **«Черешите са по пет евро.» (cap. 6)**: suona naturale per dire «5 euro al chilo»?
8. **Età (cap. 7)**: per «oggi compio 25 anni», meglio «Днес съм на двайсет и пет години» o «Днес навършвам двайсет и пет»?
9. **Маршрутка Sofia–Plovdiv (cap. 8)**: (come nel cap. 1) oggi esistono ancora i minibus su questa tratta, o si va quasi sempre in pullman o in treno?
10. **«Билетът е десет евро.» (cap. 8)**: va bene nel parlato, o è meglio «Билетът струва десет евро»?
11. **«Спирката е направо, после надясно.» (cap. 8)**: è un modo naturale di indicare la strada, o si direbbe «Вървете направо, после надясно»?
12. **Ordine delle parole (cap. 9, att. 9)**: «Хлябът много е вкусен» è sbagliata o solo meno comune di «Хлябът е много вкусен»?
13. **Мартеница (cap. 10)**: «Носи я, докато видиш щъркел» o «…докато не видиш щъркел»? Quale suona più naturale?
14. **Cicogna il 1° marzo (cap. 10)**: è credibile che Mila veda una cicogna proprio il 1° marzo, o meglio spostare la frase più avanti nel mese?
15. **Шопска салата (cap. 6)**: «Сега имаме всичко за шопска салата!» senza aver comprato il formaggio fa sorridere un bulgaro? Meglio «почти всичко»?
16. **Articolo maschile parlato (cap. 9)**: va bene dire a un principiante che «хлябът» e «хляба» parlando si sentono quasi uguali?
