import type { MockTest } from '../../../../types';
import { x } from '../../../curriculum/build';
import { b2Mock, li1, li2, li3, li4, ru1, ru2, ru3, ru4, ru5, ru6, ru7 } from '../build';

/**
 * Mini mock test fce-mini-2 (docs/multi-examens/b2-contenu.md).
 * Topics: sleep science, a language café, a cycling trip, citizen science, train journeys, a repair café.
 */

// RU1: sleep science.
const RU1_TEXT = `Scientists have long known that teenagers need more sleep than adults, but new research suggests that the problem is not simply that young people go to bed too late. During adolescence, the body’s internal clock naturally (1) ___ later by up to two hours. Forcing teenagers to get up early for school therefore (2) ___ them of the sleep they need. In several countries, schools that have (3) ___ back their start time by just forty minutes have reported better attendance and fewer students falling asleep in class. Critics argue that later classes would (4) ___ havoc with parents’ working hours, but the results have been hard to ignore.`;

// RU2: a language café.
const RU2_TEXT = `Every Thursday evening, a small café near the university in Granada fills with people speaking a mixture of languages. The idea is simple: you sit at a table (1) ___ has a flag showing the language being practised, and you chat for twenty minutes before moving on. Nobody is a teacher, so there is no need to worry (2) ___ making mistakes. ‘I was nervous the first time,’ admits Youssef, a Moroccan engineering student, ‘but within a few weeks I was looking forward to it (3) ___ week.’ The café now attracts so (4) ___ people that the owner has had to open a second room.`;

// RU5: a cycling trip.
const RU5_TEXT = `Last summer, Meriem and her cousin Leïla cycled from Tunis to Tozeur, a journey of nearly 500 kilometres that took them eleven days. Neither of them was what you would call an athlete. ‘I’d only ever cycled to the beach and back,’ says Meriem, laughing. ‘Leïla had to lend me her old bike.’

Their families were not enthusiastic. Meriem’s father worried about the traffic, and her grandmother was convinced they would get lost. In the end, it was a compromise that won them over: the cousins agreed to send a photo and their location every evening. ‘Honestly, that became one of the best parts of the trip,’ Leïla says. ‘By the end, half our relatives were following us online and sending us advice we didn’t need.’

The hardest days were not the ones they had expected. The climb into the hills around Kasserine, which they had dreaded for weeks, turned out to be manageable because they set off at dawn. What nearly defeated them was a flat stretch near the salt lakes, where a strong wind blew in their faces all afternoon and there was nowhere to shelter. ‘We covered thirty kilometres in five hours,’ Meriem recalls. ‘At one point I sat at the side of the road and cried.’

Would they do it again? Both say yes, but in different ways. Leïla wants to go further next time, possibly crossing into Algeria. Meriem is more interested in slowing down. ‘We were always counting kilometres,’ she says. ‘Next time I want to stop in the villages and actually talk to people.’`;

// RU6: citizen science.
const RU6_TEXT = `Every February, thousands of people around the world go outside after dark, look up and count stars. They are taking part in a project that measures light pollution: the glow from streetlights, shops and car parks that hides the night sky. (1) ___ By comparing the number of stars visible in different places, scientists can build a map showing where the problem is getting worse.

Participants need no special equipment. They simply find a well-known group of stars, such as Orion, and compare what they see with a set of charts on their phone. (2) ___ Over the years, the results have matched satellite measurements surprisingly well, which suggests that ordinary people are better observers than critics had feared.

The data has already had real effects. In one Spanish town, volunteers’ counts showed the sky growing brighter year after year. (3) ___ Two years later, the number of stars visible from the town centre had almost doubled.`;
const RU6_SENTENCES = [
  'A In some large cities, fewer than twenty stars can be seen on a clear night.',
  'B Light pollution also confuses birds that migrate at night.',
  'C Each chart shows the same stars as they would appear under skies of different brightness.',
  'D Unfortunately, the town could not afford to change anything.',
  'E The local council responded by replacing its streetlights with dimmer, downward-facing lamps.',
  'F Some participants now organise star-watching evenings for their neighbours.',
];

// RU7: train journeys.
const RU7_TEXT = `Four travellers describe a long train journey they have taken.

A — Hamza
I took the night train from Vienna to Rome. I’d booked a bed in a six-person compartment and expected to sleep badly, but in fact I slept better than I do at home. The real let-down was breakfast: a dry bread roll and a coffee I simply couldn’t drink.

B — Chiara
I crossed Canada from Toronto to Vancouver in four days. The scenery in the Rockies was incredible, but what I remember most is the people. Every evening I played cards with a retired farmer and his wife, and three years later we still write to each other.

C — Ali
I chose the train from Cairo to Aswan because it was supposed to be cheaper than flying. Unfortunately, I left it far too late to book, and the only seats left were in first class. Next time I’ll reserve months in advance.

D — Ingrid
I travelled from Oslo to Bergen with my laptop, planning to finish an essay on the way. In the end I hardly opened it: I spent seven hours staring out of the window at the mountains and frozen lakes.`;
const RU7_SECTIONS = ['A', 'B', 'C', 'D'];

// LI1: four short extracts.
const LI1_SLEEP = `M: You look tired. Is everything all right?
W: The neighbours had a party until three in the morning.
M: Again? You should go and talk to them.
W: I did, after the last one, and they were really apologetic. That’s not really the issue, though. The problem is that once something wakes me up, I just can’t get back to sleep. Earplugs don’t help; they just hurt my ears. I think I’ll try the meditation app my sister uses.`;
const LI1_COOKING = `I signed up for the Thai cooking class mainly because a friend was going. I’m not really into cooking; I basically live on pasta. But the teacher was brilliant. She never gave us exact quantities; she made us taste everything and adjust it ourselves. That completely changed how I think about recipes. Since then I’ve cooked something I’ve never made before every weekend, and I’ve even bought a set of proper knives.`;
const LI1_PHONE = `W: I’m thinking of getting the new phone that’s just come out.
M: But yours works fine, doesn’t it?
W: It does, except that the battery barely lasts until lunchtime.
M: Then why not just get the battery replaced? It costs a fraction of the price of a new phone.
W: Really? I assumed you couldn’t do that with my model.
M: My cousin had exactly the same one done last month. It only took an hour.`;
const LI1_SWIM = `I was thirty-two when I finally had my first swimming lesson. For years I’d told people I just didn’t like water, which wasn’t true; I was embarrassed that I couldn’t swim. What I wasn’t prepared for was how quickly it came. After six lessons I could swim a whole length of the pool. My only regret is that I let embarrassment stop me for so long. I could have been doing this since I was a teenager.`;

// LI2: a hedgehog count.
const LI2_TALK = `Good evening. I’m Tom Price from the Wildlife Trust, and I’m here to tell you about our Hedgehog Count. Hedgehogs have become much rarer in the countryside, but surprisingly, their numbers in towns seem to be stable. To find out why, we need your help. From the first of May, we’re asking people to spend one hour in their garden or local park just after sunset, which is when hedgehogs are most active. You don’t need to see the animal itself: footprints count too. To make footprints easier to spot, you can put a shallow tray of sand near a hedge. And please don’t leave out milk, because it makes hedgehogs ill. If you want to help them, a bowl of water is much better. Record what you find on our website, and at the end of the summer every participant will receive a map showing the results.`;

// LI3: sleep.
const LI3_SCRIPT = `Speaker 1: For years I lay awake doing calculations: if I fall asleep now, I’ll get five hours, if I fall asleep in ten minutes… Once I accepted that some nights are just shorter, and that I can still get through the next day, the anxiety went. And funnily enough, I started dropping off sooner.
Speaker 2: I bought blackout curtains and moved my desk into the living room, so the bedroom is only for sleeping now. It sounds simple, but it’s the best thing I’ve done in years.
Speaker 3: My doctor sent me to a sleep clinic, where a specialist went through all my habits and gave me a step-by-step plan. Within a month I was sleeping through the night.
Speaker 4: I’ve tried everything: herbal tea, no coffee after midday, reading instead of scrolling. Some nights are better than others, but honestly, I’m still waking up at four most mornings.
Speaker 5: I started cycling to work instead of taking the bus. Within a couple of weeks I was so tired by ten o’clock that I fell asleep the moment my head touched the pillow.`;
const LI3_OPTIONS = [
  'A A change to my evening routine made the biggest difference.',
  'B Advice from an expert helped me.',
  'C I stopped worrying about how much I slept.',
  'D Changing my bedroom made a real difference.',
  'E Physical activity improved my sleep.',
  'F I still haven’t found a solution.',
];

// LI4: a repair café.
const LI4_INTERVIEW = `Interviewer: My guest today is Bilal Amrani, who, at seventeen, runs a monthly repair café in his neighbourhood in Brussels. Bilal, what exactly happens there?
Bilal: People bring things that are broken, like toasters, lamps, bikes or clothes, and volunteers help them fix them. The important word is ‘help’. We don’t take the object away and repair it; the owner sits with us and learns how to do it.
Interviewer: Where did the idea come from?
Bilal: My grandfather used to repair radios, and when he died we found boxes of his tools in the garage. My mum wanted to throw them out. I couldn’t bear that, so I started fixing things for the neighbours, and it grew from there.
Interviewer: Was it hard to find volunteers?
Bilal: Not at all, surprisingly. Lots of retired people have skills that nobody asks them for any more. The hard part was finding a place to meet. For the first six months we used a launderette, which was incredibly noisy. Now the local library lends us a room for free.
Interviewer: What has the project taught you?
Bilal: Patience, mostly. Some repairs take three visits. And I’ve learnt that people are often more interested in chatting than in the actual repair. For some of our older visitors, it’s the only real conversation they have all week.`;

export const fceMini2: MockTest = b2Mock(
  'fce-mini-2',
  'mini',
  45,
  x('B2 First blanc mini n° 2', 'اختبار B2 First تجريبي مصغّر رقم 2', 'Mini practice test 2', 'B2 First de práctica mini n.º 2'),
  [
    // ── Reading and Use of English Part 1 ──
    ru1('fce-m2-ru1-1', 4, 'Gap (1): During adolescence, the body’s internal clock naturally ___ later by up to two hours.', ['shifts', 'turns', 'passes', 'changes'], x(
      '« Shift » = se décaler, se déplacer : l’horloge se décale plus tard. « Change later » ou « pass later » ne se disent pas dans ce sens.',
      '«shift» تعني «يتزحزح أو ينزاح»: الساعة البيولوجية تنزاح إلى وقت لاحق. ولا يقال «change later» أو «pass later» بهذا المعنى.',
      '“Shift” = move to a different time.',
      '«Shift» = desplazarse: el reloj se desplaza más tarde. «Change later» o «pass later» no tienen este sentido.',
    ), RU1_TEXT),
    ru1('fce-m2-ru1-2', 4, 'Gap (2): Forcing teenagers to get up early for school therefore ___ them of the sleep they need.', ['deprives', 'prevents', 'stops', 'removes'], x(
      'Construction « deprive sb of sth » = priver qqn de qqch. « Prevent / stop sb from », « remove sth from » : aucun ne se construit avec « sb of ».',
      'التركيب «deprive sb of sth» يعني «يحرم شخصًا من شيء». أما «prevent / stop sb from» و«remove sth from» فلا تُستعمل مع «sb of».',
      'Pattern: “deprive someone of something”.',
      'Estructura «deprive sb of sth» = privar a alguien de algo. «Prevent / stop sb from» y «remove sth from» no van con «sb of».',
    ), RU1_TEXT),
    ru1('fce-m2-ru1-3', 5, 'Gap (3): In several countries, schools that have ___ back their start time by just forty minutes have reported better attendance.', ['pushed', 'held', 'kept', 'drawn'], x(
      '« Push back » = repousser, retarder (une heure, une date). « Hold back » et « keep back » = retenir ; « draw back » = reculer.',
      '«push back» تعني «يؤجّل أو يؤخّر» (موعدًا). أما «hold back» و«keep back» فتعنيان «يكبح»، و«draw back» تعني «يتراجع».',
      '“Push back” a time = make it later.',
      '«Push back» = retrasar (una hora, una fecha). «Hold back» y «keep back» = contener; «draw back» = retroceder.',
    ), RU1_TEXT),
    ru1('fce-m2-ru1-4', 5, 'Gap (4): Critics argue that later classes would ___ havoc with parents’ working hours.', ['play', 'make', 'do', 'take'], x(
      'Expression figée « play havoc with sth » = semer la pagaille dans.',
      'التعبير الثابت «play havoc with sth» يعني «يُحدث فوضى في».',
      'Fixed phrase: “play havoc with”.',
      'Expresión fija «play havoc with algo» = causar estragos en.',
    ), RU1_TEXT),

    // ── Part 2 ──
    ru2('fce-m2-ru2-1', 3, 'Gap (1): The idea is simple: you sit at a table ___ has a flag showing the language being practised.', ['that', 'which'], x(
      'Pronom relatif sujet pour une chose (« a table ») : « that » ou « which ».',
      'ضمير وصل في موقع الفاعل يعود على شيء («a table»): «that» أو «which».',
      'Relative pronoun for a thing: that / which.',
      'Pronombre relativo sujeto para una cosa («a table»): «that» o «which».',
    ), RU2_TEXT),
    ru2('fce-m2-ru2-2', 3, 'Gap (2): Nobody is a teacher, so there is no need to worry ___ making mistakes.', ['about', 'over'], x(
      'Le verbe « worry » se construit avec « about » (ou « over ») + -ing.',
      'الفعل «worry» يُستعمل مع «about» (أو «over») + صيغة -ing.',
      'Dependent preposition: “worry about”.',
      'El verbo «worry» va con «about» (o «over») + -ing.',
    ), RU2_TEXT),
    ru2('fce-m2-ru2-3', 4, 'Gap (3): ‘…but within a few weeks I was looking forward to it ___ week.’', ['every', 'each', 'all'], x(
      'Fréquence : « every week » (ou « each week ») = chaque semaine.',
      'التكرار: «every week» (أو «each week») = كل أسبوع.',
      'Frequency: every / each week.',
      'Frecuencia: «every week» (o «each week») = cada semana.',
    ), RU2_TEXT),
    ru2('fce-m2-ru2-4', 4, 'Gap (4): The café now attracts so ___ people that the owner has had to open a second room.', ['many'], x(
      '« So + many + nom pluriel dénombrable (people) + that » exprime la conséquence.',
      '«so + many + اسم جمع معدود (people) + that» للتعبير عن النتيجة.',
      '“so many + plural noun + that”.',
      '«So + many + sustantivo plural contable (people) + that» expresa la consecuencia.',
    ), RU2_TEXT),

    // ── Part 3 ──
    ru3('fce-m2-ru3-1', 3, 'Lack of sleep can seriously affect your ___ to concentrate.', 'ABLE', ['ability'], x(
      'Après le possessif « your », il faut un nom : « ability » (« ability to do sth »).',
      'بعد الضمير «your» نحتاج إلى اسم: «ability» («ability to do sth»).',
      'After “your”, a noun: ability.',
      'Tras el posesivo «your» hace falta un sustantivo: «ability».',
    )),
    ru3('fce-m2-ru3-2', 4, 'The two cyclists were completely ___ when they finally reached the top of the pass.', 'EXHAUST', ['exhausted'], x(
      'Les cyclistes ressentent la fatigue → adjectif en -ed : « exhausted ».',
      'الدراجان يشعران بالتعب ← صفة بـ-ed: «exhausted».',
      'People feel it → -ed adjective.',
      'Los ciclistas sienten el cansancio → adjetivo en -ed: «exhausted».',
    )),
    ru3('fce-m2-ru3-3', 5, 'Taking part in the experiment is completely ___, and you can leave at any time.', 'VOLUNTEER', ['voluntary'], x(
      'Après « is completely », il faut un adjectif : « voluntary » (facultatif), confirmé par « you can leave at any time ».',
      'بعد «is completely» نحتاج إلى صفة: «voluntary» (اختياري)، ويؤكدها «you can leave at any time».',
      'Adjective needed: voluntary = not compulsory.',
      'Tras «is completely» hace falta un adjetivo: «voluntary», confirmado por «you can leave at any time».',
    )),
    ru3('fce-m2-ru3-4', 5, 'The open-air festival was cancelled because of the ___ weather forecast.', 'FAVOUR', ['unfavourable', 'unfavorable'], x(
      'Adjectif devant « weather forecast », au sens négatif puisque le festival est annulé : « unfavourable ».',
      'صفة قبل «weather forecast» بمعنى سلبي لأن المهرجان أُلغي: «unfavourable».',
      'Negative adjective: the festival was cancelled.',
      'Adjetivo delante de «weather forecast», con sentido negativo porque se canceló el festival: «unfavourable».',
    )),

    // ── Part 4 ──
    ru4('fce-m2-ru4-1', 5, 'Nobody has told me about the new rules yet.', 'STILL', 'I ___ about the new rules.', ["still haven't been told", 'still have not been told', 'have still not been told'], x(
      '« Yet » au négatif → « still » + present perfect, et passage au passif : « I still haven’t been told ».',
      '«yet» في النفي ← «still» + المضارع التام، مع التحويل إلى المبني للمجهول: «I still haven’t been told».',
      '“still” + present perfect passive.',
      '«Yet» en negativa → «still» + present perfect en pasiva: «I still haven’t been told».',
    )),
    ru4('fce-m2-ru4-2', 4, 'The museum was so crowded that we couldn’t see the paintings properly.', 'TOO', 'The museum was ___ us to see the paintings properly.', ['too crowded for', 'far too crowded for', 'much too crowded for'], x(
      '« So… that we couldn’t » = « too + adjectif + for sb + to do ».',
      '«so… that we couldn’t» = «too + صفة + for sb + to do».',
      '“so … that … couldn’t” → too + adj + for sb to.',
      '«So… that we couldn’t» = «too + adjetivo + for sb + to do».',
    )),
    ru4('fce-m2-ru4-3', 4, 'It wasn’t necessary for you to bring any food.', 'NEED', 'You ___ any food.', ["didn't need to bring", 'did not need to bring', "needn't have brought", 'need not have brought', 'had no need to bring'], x(
      'Absence d’obligation dans le passé : « didn’t need to bring » (ou « needn’t have brought » si la nourriture a été apportée).',
      'نفي الضرورة في الماضي: «didn’t need to bring» (أو «needn’t have brought» إذا كان الطعام قد أُحضر فعلًا).',
      'Past lack of necessity: didn’t need to / needn’t have.',
      'Falta de obligación en el pasado: «didn’t need to bring» (o «needn’t have brought» si se trajo la comida).',
    )),

    // ── Part 5 ──
    ru5('fce-m2-ru5-1', 4, RU5_TEXT, 'How did the cousins persuade their families to accept the trip?', ['They promised to keep in touch every day.', 'They agreed to avoid busy roads.', 'They took a more experienced cyclist with them.', 'They invited relatives to join them for part of the journey.'], x(
      '« The cousins agreed to send a photo and their location every evening » : c’est ce compromis qui a convaincu les familles.',
      '«The cousins agreed to send a photo and their location every evening»: هذا الحل الوسط هو ما أقنع العائلتين.',
      '“Agreed to send a photo and their location every evening.”',
      '«The cousins agreed to send a photo and their location every evening»: ese compromiso convenció a las familias.',
    )),
    ru5('fce-m2-ru5-2', 4, RU5_TEXT, 'Which part of the journey was the most difficult?', ['a flat section where the wind was against them', 'the climb into the hills near Kasserine', 'the early-morning starts', 'a day when they got lost'], x(
      '« What nearly defeated them was a flat stretch… a strong wind blew in their faces » ; la montée s’est révélée « manageable ».',
      '«What nearly defeated them was a flat stretch… a strong wind blew in their faces»؛ أما الصعود فكان «manageable».',
      '“A strong wind blew in their faces” on a flat stretch.',
      '«What nearly defeated them was a flat stretch… a strong wind blew in their faces»; la subida fue «manageable».',
    )),
    ru5('fce-m2-ru5-3', 4, RU5_TEXT, 'What does Meriem say about a future trip?', ['She would like to travel at a more relaxed pace.', 'She wants to cover a longer distance.', 'She is not sure she wants to go again.', 'She would prefer to go without Leïla.'], x(
      'Meriem veut « slowing down… stop in the villages and actually talk to people ». C’est Leïla qui veut aller plus loin.',
      'مريم تريد «slowing down… stop in the villages and actually talk to people». أما ليلى فهي التي تريد الذهاب أبعد.',
      'Meriem is “more interested in slowing down”.',
      'Meriem quiere «slowing down… stop in the villages and actually talk to people». Es Leïla quien quiere ir más lejos.',
    )),

    // ── Part 6 ──
    ru6('fce-m2-ru6-1', 4, RU6_TEXT, 'Which sentence fits gap 1?', RU6_SENTENCES, 0, x(
      'La phrase A illustre le ciel caché (« fewer than twenty stars ») et prépare « By comparing the number of stars visible in different places ».',
      'الجملة A تمثّل لاختفاء السماء («fewer than twenty stars») وتمهّد لـ«By comparing the number of stars visible in different places».',
      'A (number of stars in cities) leads to “By comparing the number of stars”.',
      'La frase A ilustra el cielo oculto («fewer than twenty stars») y prepara «By comparing the number of stars visible in different places».',
    )),
    ru6('fce-m2-ru6-2', 4, RU6_TEXT, 'Which sentence fits gap 2?', RU6_SENTENCES, 2, x(
      'La phrase C explique les « charts on their phone » mentionnés juste avant (« Each chart shows… »).',
      'الجملة C تشرح «charts on their phone» المذكورة قبلها مباشرة («Each chart shows…»).',
      'C explains the charts just mentioned.',
      'La frase C explica los «charts on their phone» mencionados justo antes («Each chart shows…»).',
    )),
    ru6('fce-m2-ru6-3', 4, RU6_TEXT, 'Which sentence fits gap 3?', RU6_SENTENCES, 4, x(
      'Il faut une action qui explique que les étoiles visibles aient « almost doubled » : la mairie « responded by replacing its streetlights » (E). D contredit ce résultat.',
      'نحتاج إلى إجراء يفسّر أن عدد النجوم «almost doubled»: البلدية «responded by replacing its streetlights» (E). أما D فتناقض هذه النتيجة.',
      'E explains why the stars “almost doubled”.',
      'Hace falta una acción que explique que las estrellas «almost doubled»: el ayuntamiento «responded by replacing its streetlights» (E).',
    )),

    // ── Part 7 ──
    ru7('fce-m2-ru7-1', 3, RU7_TEXT, 'Which person was disappointed by the food on board?', RU7_SECTIONS, 0, x(
      'Hamza (A) : « The real let-down was breakfast: a dry bread roll and a coffee I simply couldn’t drink ».',
      'حمزة (A): «The real let-down was breakfast: a dry bread roll and a coffee I simply couldn’t drink».',
      'A: “The real let-down was breakfast.”',
      'Hamza (A): «The real let-down was breakfast: a dry bread roll and a coffee I simply couldn’t drink».',
    )),
    ru7('fce-m2-ru7-2', 4, RU7_TEXT, 'Which person made friends they are still in contact with?', RU7_SECTIONS, 1, x(
      'Chiara (B) : « three years later we still write to each other ».',
      'كيارا (B): «three years later we still write to each other».',
      'B: “we still write to each other”.',
      'Chiara (B): «three years later we still write to each other».',
    )),
    ru7('fce-m2-ru7-3', 4, RU7_TEXT, 'Which person ended up paying more than they had intended?', RU7_SECTIONS, 2, x(
      'Ali (C) voulait économiser, mais « the only seats left were in first class ».',
      'علي (C) أراد التوفير، لكن «the only seats left were in first class».',
      'C: “the only seats left were in first class”.',
      'Ali (C) quería ahorrar, pero «the only seats left were in first class».',
    )),
    ru7('fce-m2-ru7-4', 4, RU7_TEXT, 'Which person did less work during the journey than they had planned?', RU7_SECTIONS, 3, x(
      'Ingrid (D) : « planning to finish an essay… In the end I hardly opened it ».',
      'إنغريد (D): «planning to finish an essay… In the end I hardly opened it».',
      'D: “In the end I hardly opened it.”',
      'Ingrid (D): «planning to finish an essay… In the end I hardly opened it».',
    )),

    // ── Listening Part 1 ──
    li1('fce-m2-li1-1', 4, LI1_SLEEP, 'You hear two friends talking. What is the woman’s main problem?', ['She finds it hard to get back to sleep.', 'Her neighbours refuse to keep the noise down.', 'Her earplugs have stopped working.'], x(
      '« The problem is that once something wakes me up, I just can’t get back to sleep. » Les voisins se sont excusés.',
      '«The problem is that once something wakes me up, I just can’t get back to sleep.» أما الجيران فقد اعتذروا.',
      '“The problem is… I just can’t get back to sleep.”',
      '«The problem is that once something wakes me up, I just can’t get back to sleep.» Los vecinos se disculparon.',
    )),
    li1('fce-m2-li1-2', 4, LI1_COOKING, 'You hear a man talking about a cooking class. How has the class affected him?', ['He now enjoys trying new dishes.', 'He has decided to train as a chef.', 'He follows recipes more carefully.'], x(
      '« Since then I’ve cooked something I’ve never made before every weekend » : il aime essayer de nouveaux plats. Il goûte et ajuste au lieu de suivre les recettes.',
      '«Since then I’ve cooked something I’ve never made before every weekend»: صار يحب تجربة أطباق جديدة، ويتذوق ويعدّل بدل اتباع الوصفات بدقة.',
      'He cooks “something I’ve never made before every weekend”.',
      '«Since then I’ve cooked something I’ve never made before every weekend»: le gusta probar platos nuevos.',
    )),
    li1('fce-m2-li1-3', 3, LI1_PHONE, 'You hear two friends talking about a phone. What does the man suggest?', ['repairing her current phone', 'buying a cheaper model', 'borrowing his cousin’s phone'], x(
      '« Why not just get the battery replaced? » : il conseille de réparer son téléphone actuel.',
      '«Why not just get the battery replaced?»: ينصحها بإصلاح هاتفها الحالي.',
      '“Why not just get the battery replaced?”',
      '«Why not just get the battery replaced?»: le aconseja reparar su teléfono actual.',
    )),
    li1('fce-m2-li1-4', 4, LI1_SWIM, 'You hear a woman talking about learning to swim. How does she feel about it now?', ['She wishes she had started earlier.', 'She is embarrassed by her slow progress.', 'She still does not enjoy being in water.'], x(
      '« My only regret is that I let embarrassment stop me for so long » ; ses progrès ont été rapides (« how quickly it came »).',
      '«My only regret is that I let embarrassment stop me for so long»؛ وكان تقدّمها سريعًا («how quickly it came»).',
      '“My only regret is that I let embarrassment stop me for so long.”',
      '«My only regret is that I let embarrassment stop me for so long»; avanzó rápido («how quickly it came»).',
    )),

    // ── Listening Part 2 ──
    li2('fce-m2-li2-1', 4, LI2_TALK, 'Hedgehog numbers in towns appear to be ___.', ['stable'], x(
      'On entend : « their numbers in towns seem to be stable ».',
      'نسمع: «their numbers in towns seem to be stable».',
      'Heard: “seem to be stable”.',
      'Se oye: «their numbers in towns seem to be stable».',
    )),
    li2('fce-m2-li2-2', 3, LI2_TALK, 'Volunteers should watch for one hour just after ___.', ['sunset'], x(
      'On entend : « spend one hour… just after sunset ».',
      'نسمع: «spend one hour… just after sunset».',
      'Heard: “just after sunset”.',
      'Se oye: «spend one hour… just after sunset».',
    )),
    li2('fce-m2-li2-3', 4, LI2_TALK, 'A shallow tray of ___ makes footprints easier to spot.', ['sand'], x(
      'On entend : « you can put a shallow tray of sand near a hedge ».',
      'نسمع: «you can put a shallow tray of sand near a hedge».',
      'Heard: “a shallow tray of sand”.',
      'Se oye: «you can put a shallow tray of sand near a hedge».',
    )),
    li2('fce-m2-li2-4', 4, LI2_TALK, 'Instead of milk, people should leave out a bowl of ___.', ['water'], x(
      'Le lait rend les hérissons malades ; on entend : « a bowl of water is much better ».',
      'الحليب يُمرض القنافذ؛ ونسمع: «a bowl of water is much better».',
      'Heard: “a bowl of water is much better”.',
      'La leche los enferma; se oye: «a bowl of water is much better».',
    )),

    // ── Listening Part 3 ──
    li3('fce-m2-li3-1', 4, LI3_SCRIPT, 'Which statement matches what Speaker 2 says?', LI3_OPTIONS, 3, x(
      'Locuteur 2 : rideaux occultants et bureau déplacé, « the bedroom is only for sleeping now » → D.',
      'المتحدث 2: ستائر معتمة ونقل المكتب، «the bedroom is only for sleeping now» ← D.',
      'Speaker 2 changed the bedroom → D.',
      'Hablante 2: cortinas opacas y escritorio fuera, «the bedroom is only for sleeping now» → D.',
    )),
    li3('fce-m2-li3-2', 4, LI3_SCRIPT, 'Which statement matches what Speaker 4 says?', LI3_OPTIONS, 5, x(
      'Locuteur 4 : il a tout essayé mais « I’m still waking up at four most mornings » → pas encore de solution (F). Ses changements du soir n’ont pas marché, donc pas A.',
      'المتحدث 4: جرّب كل شيء لكن «I’m still waking up at four most mornings» ← لم يجد حلًا بعد (F). تغييرات المساء لم تنجح، فليست A.',
      'Speaker 4: “still waking up at four” → F.',
      'Hablante 4: lo ha probado todo pero «I’m still waking up at four most mornings» → F, no A.',
    )),
    li3('fce-m2-li3-3', 4, LI3_SCRIPT, 'Which statement matches what Speaker 5 says?', LI3_OPTIONS, 4, x(
      'Locuteur 5 : « I started cycling to work… so tired by ten o’clock » → l’activité physique (E).',
      'المتحدث 5: «I started cycling to work… so tired by ten o’clock» ← النشاط البدني (E).',
      'Speaker 5: cycling to work → E.',
      'Hablante 5: «I started cycling to work… so tired by ten o’clock» → actividad física (E).',
    )),

    // ── Listening Part 4 ──
    li4('fce-m2-li4-1', 4, LI4_INTERVIEW, 'What is special about the way Bilal’s repair café works?', ['Owners help to repair their own things.', 'Volunteers take broken items home to fix them.', 'Only electrical items are accepted.'], x(
      '« We don’t take the object away and repair it; the owner sits with us and learns how to do it. »',
      'يجلس صاحب الغرض مع المتطوعين ويتعلّم الإصلاح: «the owner sits with us and learns how to do it».',
      '“The owner sits with us and learns how to do it.”',
      '«We don’t take the object away…; the owner sits with us and learns how to do it.»',
    )),
    li4('fce-m2-li4-2', 4, LI4_INTERVIEW, 'What was the main difficulty when Bilal started?', ['finding a suitable place to meet', 'persuading people to volunteer', 'getting the right tools'], x(
      '« The hard part was finding a place to meet » (la laverie était trop bruyante). Les bénévoles : « Not at all ».',
      '«The hard part was finding a place to meet» (كانت المغسلة صاخبة جدًا). أما المتطوعون فـ«Not at all».',
      '“The hard part was finding a place to meet.”',
      '«The hard part was finding a place to meet» (la lavandería era muy ruidosa). Voluntarios: «Not at all».',
    )),
    li4('fce-m2-li4-3', 5, LI4_INTERVIEW, 'What has Bilal learnt about the people who visit the café?', ['Many come mainly for the company.', 'Most expect repairs to be finished quickly.', 'They prefer to bring clothes rather than electrical items.'], x(
      '« People are often more interested in chatting than in the actual repair… the only real conversation they have all week. »',
      'كثير من الزوار يأتون للحديث أكثر من الإصلاح: «more interested in chatting than in the actual repair».',
      'They are “more interested in chatting than in the actual repair”.',
      '«People are often more interested in chatting than in the actual repair… the only real conversation they have all week.»',
    )),
  ],
);
