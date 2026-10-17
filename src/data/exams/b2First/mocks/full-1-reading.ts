import type { Exercise, Localized } from '../../../../types';
import { x } from '../../../curriculum/build';
import { ru1, ru2, ru3, ru4, ru5, ru6, ru7 } from '../build';

/**
 * Full mock test fce-full-1, Reading and Use of English (52 items: RU1 8, RU2 8, RU3 8, RU4 6, RU5 6, RU6 6, RU7 10).
 * Writing guide: docs/multi-examens/b2-contenu.md.
 * Topics: street-food markets, learning to code, the science of habits, everyday transformations,
 * a young mountain guide, restoring a neighbourhood cinema, five young entrepreneurs.
 */

// RU1: street-food markets.
const RU1_TEXT = `Walk through the old medina of Tunis after dark, or around the night markets of Taipei, and you will soon (1) ___ to the conclusion that street food is far more than a quick snack. For millions of people, it is the cheapest way to eat well, and for many tourists, it is the main (2) ___ for choosing one destination over another. Yet in recent years, street-food markets have found themselves at the (3) ___ of a heated debate. Councils in several European cities have tried to move vendors indoors, arguing that open-air stalls (4) ___ a risk to public health. Vendors, on the other hand, insist that their kitchens are as clean as any restaurant’s, and point out that customers can (5) ___ an eye on exactly how their meal is prepared. In Marseille, a compromise has now been (6) ___: stalls stay outside, but every cook must complete a short hygiene course and display a certificate. The scheme has been such a success that other cities are planning to (7) ___ suit. For Samira Ouali, who has sold grilled sardines near the Old Port for twelve years, it was worth the effort. ‘(8) ___ from the certificate on my stall, I learnt a lot about storing fish safely,’ she says. ‘My customers trust me even more now.’`;

// RU2: learning to code as a teenager.
const RU2_TEXT = `Yassine Mansouri was only thirteen (1) ___ he built his first website, a page about his favourite football club in Oran. ‘It looked terrible,’ he laughs, ‘but I was incredibly proud (2) ___ it.’ Like many teenagers, he taught himself, using free videos and online forums. His parents had no idea what he was doing in his room every evening, but they were happy to see him so keen (3) ___ something.

Now nineteen and studying computer science in Lille, Yassine believes that coding is one of the most useful skills a young person can learn, and (4) ___ just for those who want to work in IT. ‘You don’t need to be a genius at maths,’ he insists. ‘What matters most is patience. Programs hardly (5) ___ work the first time, so you have to get used to finding your own mistakes.’

He admits there were moments when he almost gave (6) ___. ‘Some bugs took me days to fix. But every time I solved one, I understood a little more about (7) ___ computers actually work.’ These days he runs free coding workshops for younger students in his old neighbourhood. ‘The aim isn’t to turn everyone into a programmer,’ he explains. ‘It’s to show them that technology is something they can create, as (8) ___ as something they use.’`;

// RU3: the science of habits. The stems appear in the text, as in the real exam.
const RU3_TEXT = `Why is it so hard to stop checking our phones? According to psychologists, around 40 per cent of what we do each day is not the result of a conscious (1) ___ (DECIDE) but of habit. When an action is repeated in the same situation, the brain gradually learns to carry it out almost (2) ___ (EFFORT), freeing our attention for other tasks.

Researchers have found that (3) ___ (REPEAT) matters far more than motivation. Contrary to popular belief, it is also (4) ___ (REAL) to expect a new habit to form in just three weeks: in one study, participants needed an average of more than two months. Much depends on the (5) ___ (EXIST) of a clear trigger, such as finishing breakfast or arriving home, which reminds us to act.

This explains why people who rely on (6) ___ (DETERMINE) alone so often give up. Experts advise starting with tiny changes; small (7) ___ (IMPROVE), they say, add up over time. The same logic works in reverse. The trick is to make bad habits (8) ___ (CONVENIENT): if your phone is charging in another room, you are far less likely to scroll through it in bed.`;

/** Word formation item of the shared RU3 text (the ru3 helper takes no passage). */
const ru3t = (id: string, level: number, prompt: string, cue: string, answers: [string, ...string[]], explain: Localized): Exercise =>
  ru3(id, level, prompt, cue, answers, explain, RU3_TEXT);

// RU5: a young mountain guide.
const RU5_TEXT = `The first time I led a group to the summit of Toubkal on my own, I was twenty-one and more frightened than any of the eight people following me. I had grown up in Imlil, a village at the foot of the mountain, and I had climbed it dozens of times with my uncle, who has been a guide for thirty years. But climbing behind someone and being the one everybody looks to are two very different things. That morning, as we set off in the dark, I kept repeating his advice in my head: walk slower than you want to, and never let them see you worry.

People often assume I became a guide because it was expected of me. In fact, the opposite is true. In my family, guiding was seen as a job for men, and my mother hoped I would become a teacher. It was my uncle who changed her mind, although not in the way I expected. He never argued with her. He simply started taking me with him on short walks with tourists, and let her hear from the visitors how well I explained the plants and the history of the valley. After a year, she was the one telling the neighbours I would make a fine guide.

Getting qualified was harder than I had imagined. The course in Tabant lasted several months and covered everything from first aid to reading weather maps. I was the youngest person there and one of only two women. I remember struggling most with the navigation exams. On the mountain I always knew where I was, almost by instinct, but turning that instinct into compass bearings and grid references on paper felt like learning a foreign language. I failed the first test and seriously considered giving up. What kept me going was not confidence but stubbornness: I could not face returning to Imlil and admitting defeat.

Nowadays I spend about half the year on the mountain. The work is physically demanding, but that is not what tires me most. What really exhausts me is managing people’s expectations. Many visitors arrive having read online that Toubkal is an easy climb, and some of them are not prepared for the altitude. Last spring a young man from Lyon insisted on continuing even though he was clearly unwell. Telling him to turn back, when he had travelled so far and paid so much, was one of the hardest conversations I have ever had. He was furious with me at the time. A week later he sent me a message thanking me.

There are things about the job I would change. Tourism has brought money to the valley, but it has also brought rubbish, and on busy weekends the path to the refuge can feel like a city street. Some of the younger guides and I now organise clean-ups at the end of each season, and we try to persuade visitors to carry their waste back down. It is a small thing, but small things add up.

Would I ever do anything else? Sometimes, on a freezing night in the refuge, listening to someone snore on the other side of the dormitory, I wonder. Then the next morning I watch the sun come up over the ridge, and I see the faces of the people who have just reached the top, many of whom did not believe they could. That moment never gets old. My uncle says that the day it does, I should stop. I don’t think that day is coming any time soon.`;

// RU6: restoring an old neighbourhood cinema.
const RU6_TEXT = `For more than seventy years, the Rex was where families from the surrounding streets spent their Saturday evenings. When it closed in 2009, most people assumed it would be turned into flats. For ten years the building stood empty, its famous neon sign broken and its doors covered in posters. (1) ___ Then, in 2019, a group of students from the local film school decided to find out who owned it.

The answer surprised them. Most of them had assumed it belonged to a property developer waiting for prices to rise. In fact, the building belonged to the city council, which had no plans for it and was paying a security company to keep it locked. (2) ___ The council agreed, on one condition: the students had eighteen months to prove that the project could pay for itself.

The first challenge was the building itself. Water had come through the roof, and much of the original decoration had been damaged. (3) ___ Instead, volunteers spent their weekends carefully cleaning the plaster ceiling, and a retired carpenter rebuilt the ticket office using photographs from the 1950s. Few of them had ever done this kind of work before, so a local painter gave up her Saturdays to show them how.

Money was the next problem. Old projectors were cheap to buy but impossible to repair, while a modern digital one cost more than the group had raised in a whole year. (4) ___ Within a month, more than six hundred people had contributed, many of them pensioners who remembered queuing outside the Rex as teenagers. The rest of the money came from a local bank, which agreed to sponsor the Saturday matinées.

The Rex reopened last October with a screening of a classic Egyptian musical. (5) ___ Since then, the programme has mixed new releases with older films, and every Sunday morning there is a free screening for children. Once a month, students from the film school also show their own short films, followed by a discussion with the audience.

Not everyone has been won over. Some residents complain about noise from the queues on Friday nights, and the café next door says it has lost customers to the cinema bar. (6) ___ Even so, the cinema covered its costs within its first year, and the council has now given the students a ten-year lease. Most of them have graduated since the project began, but every one of them still works a shift at the Rex at least once a month.`;
const RU6_SENTENCES = [
  'A In desperation, they launched an online appeal, promising that everyone who made a contribution would have their name printed on a wall in the foyer.',
  'B The council, however, refused to give them any more time.',
  'C Every one of the three hundred seats was sold, and some of the audience sang along to every song.',
  'D Local children used its entrance as a goal for street football, and pigeons nested above the screen.',
  'E So the students made an offer: they would run it as a non-profit cinema if they could use it without paying rent.',
  'F The students say they are working with both to find solutions, including a new exit at the back of the building.',
  'G Paying professionals to restore it would have cost far more than the group could ever afford.',
];

// RU7: five young people who started small businesses.
const RU7_TEXT = `Five young people describe how they started their own small businesses.

A — Rania, Sfax
My grandparents have olive groves outside Sfax, so when I started making soap in my student flat, the main ingredient was free. My very first batch was a disaster: it never hardened, and I had to throw the whole lot away. Once I got the recipe right, I sold bars to friends for almost nothing, because I was embarrassed to ask for more. Eventually a customer told me I was undervaluing my work. I doubled my prices, expecting complaints, and not a single person stopped buying. These days I sell at two weekend markets in the city centre, and I’ve started adding dried herbs from my grandmother’s garden. My favourite bar still smells of the lavender she grows by her kitchen door.

B — Jonas, Hamburg
I’d been fixing my friends’ bikes for years before someone suggested I should charge for it. Now I have a small van full of tools and I go to people’s homes or offices, so they don’t have to waste time taking their bike to a shop. What I love most is the variety: one morning I’m fixing a child’s first bike, and that afternoon a racing bike worth more than my van. I’ve never paid for any kind of advertising; every customer I have heard about me from someone else. Winter used to be a worry, because hardly anyone cycles when the roads are icy, so now I run evening classes where people learn to do basic repairs themselves.

C — Camila, Valencia
I’ve always hated the idea of buying clothes that people wear twice and then throw away, so I opened a shop where customers swap clothes instead of buying them. They pay a small monthly fee and can exchange up to five items a week. The shop is tiny, so every Sunday evening I sort through everything people have brought in and decide what goes on the rails. Anything too worn to swap is sent to a local recycling project. I started it with a friend from school, but we had very different ideas about where the business should go: she wanted to open a second shop straight away, while I wanted to grow slowly. In the end she left. We’re on speaking terms again now, but it took a while.

D — Mehdi, Casablanca
I take photos of products for small online shops: jewellery, ceramics, handmade bags. My favourite clients are craftspeople who have never sold online before, because a good picture can make all the difference to how a simple object looks on a screen. At first I used a camera that belonged to my cousin, but to look professional I needed proper lights and lenses, so I took out a bank loan. Paying it back every month was the most stressful part of the first year. The other thing I had to learn was that not every job is worth taking. When I started, I accepted everything, even clients who wanted fifty photos by the next morning. Now I turn those people down politely.

E — Sara, Lisbon
I started walking dogs to earn some extra money during my first year at university. Because I choose my own hours, I can arrange the walks around my lectures and exams, which would be impossible with a job in a shop or a café. Most of my clients are older people or families who work long hours, and some of the dogs have been with me since the very first week. The business grew so quickly that I now have three other students working for me. My parents thought it was a hobby that would never make money, and to be honest, the hardest part isn’t the dogs; it’s keeping up with the tax forms and invoices.`;
const RU7_SECTIONS = ['A', 'B', 'C', 'D', 'E'];

export const fceFull1Reading: Exercise[] = [
  // ── Reading and Use of English Part 1 ──
  ru1('fce-m3-ru1-1', 4, 'Gap (1): Walk through the old medina of Tunis after dark, or around the night markets of Taipei, and you will soon ___ to the conclusion that street food is far more than a quick snack.', ['come', 'reach', 'arrive', 'draw'], x(
    'Seul « come » se construit avec « to the conclusion » : « come to the conclusion ». On dit « reach / draw a conclusion » (sans « to ») et « arrive at a conclusion ».',
    'الفعل «come» وحده يُستعمل مع «to the conclusion»: «come to the conclusion». أما «reach / draw a conclusion» فبدون «to»، و«arrive» تُستعمل مع «at».',
    'Only “come to the conclusion”; reach/draw a conclusion, arrive at one.',
    'Solo «come» va con «to the conclusion». Se dice «reach / draw a conclusion» (sin «to») y «arrive at a conclusion».',
  ), RU1_TEXT),
  ru1('fce-m3-ru1-2', 3, 'Gap (2): For many tourists, it is the main ___ for choosing one destination over another.', ['reason', 'cause', 'ground', 'point'], x(
    '« The main reason for doing sth » = la principale raison de faire qqch. « Cause » désigne l’origine d’un problème (« the cause of »), « grounds » s’emploie au pluriel.',
    '«the main reason for doing sth» تعني «السبب الرئيسي لفعل شيء». أما «cause» فتدل على مصدر مشكلة («the cause of»)، و«grounds» تأتي بصيغة الجمع.',
    '“the main reason for doing something”.',
    '«The main reason for doing sth» = el motivo principal. «Cause» es el origen de un problema («the cause of»); «grounds» va en plural.',
  ), RU1_TEXT),
  ru1('fce-m3-ru1-3', 4, 'Gap (3): Yet in recent years, street-food markets have found themselves at the ___ of a heated debate.', ['centre', 'middle', 'midst', 'inside'], x(
    'La préposition « at the » impose « at the centre of a debate » (au cœur du débat). On dit « in the middle of » et « in the midst of », avec « in ».',
    'حرف الجر «at the» يفرض «at the centre of a debate» (في قلب النقاش). أما «middle» و«midst» فتُستعملان مع «in»: «in the middle of» و«in the midst of».',
    '“at the centre of”; “middle” and “midst” take “in”.',
    '«At the» exige «at the centre of a debate». Se dice «in the middle of» e «in the midst of», con «in».',
  ), RU1_TEXT),
  ru1('fce-m3-ru1-4', 5, 'Gap (4): Councils in several European cities have tried to move vendors indoors, arguing that open-air stalls ___ a risk to public health.', ['pose', 'make', 'place', 'raise'], x(
    'Collocation « pose a risk to » = représenter un risque pour. « Make », « place » et « raise » ne se combinent pas avec « a risk to ».',
    'المتلازمة «pose a risk to» تعني «يشكّل خطرًا على». الأفعال «make» و«place» و«raise» لا تُستعمل مع «a risk to».',
    'Collocation: “pose a risk to” something.',
    'Colocación «pose a risk to» = suponer un riesgo para. «Make», «place» y «raise» no se combinan con «a risk to».',
  ), RU1_TEXT),
  ru1('fce-m3-ru1-5', 4, 'Gap (5): Vendors point out that customers can ___ an eye on exactly how their meal is prepared.', ['keep', 'have', 'hold', 'put'], x(
    'Expression figée « keep an eye on sth » = surveiller. « Have an eye for » signifie « avoir l’œil pour », et « hold / put an eye on » n’existent pas.',
    'التعبير الثابت «keep an eye on sth» يعني «يراقب». أما «have an eye for» فتعني «لديه ذوق في»، و«hold / put an eye on» غير مستعملتين.',
    'Fixed phrase: “keep an eye on” = watch.',
    'Expresión fija «keep an eye on» = vigilar. «Have an eye for» significa «tener buen ojo para».',
  ), RU1_TEXT),
  ru1('fce-m3-ru1-6', 4, 'Gap (6): In Marseille, a compromise has now been ___: stalls stay outside, but every cook must complete a short hygiene course.', ['reached', 'arrived', 'gained', 'landed'], x(
    'Collocation « reach a compromise » = parvenir à un compromis. « Arrive » est intransitif (« arrive at »), donc impossible au passif ; « gain » et « land » ne vont pas avec « compromise ».',
    'المتلازمة «reach a compromise» تعني «يتوصل إلى حل وسط». الفعل «arrive» لازم («arrive at») فلا يُبنى للمجهول هنا، و«gain» و«land» لا تُستعملان مع «compromise».',
    'Collocation: “reach a compromise”.',
    'Colocación «reach a compromise» = llegar a un acuerdo. «Arrive» es intransitivo («arrive at»); «gain» y «land» no van con «compromise».',
  ), RU1_TEXT),
  ru1('fce-m3-ru1-7', 5, 'Gap (7): The scheme has been such a success that other cities are planning to ___ suit.', ['follow', 'keep', 'take', 'make'], x(
    'Expression figée « follow suit » = faire de même, suivre l’exemple. Aucun autre verbe ne se combine avec « suit » dans ce sens.',
    'التعبير الثابت «follow suit» يعني «يحذو حذوه». لا يُستعمل أي فعل آخر مع «suit» بهذا المعنى.',
    'Fixed phrase: “follow suit” = do the same.',
    'Expresión fija «follow suit» = seguir el ejemplo. Ningún otro verbo se combina con «suit» en este sentido.',
  ), RU1_TEXT),
  ru1('fce-m3-ru1-8', 3, 'Gap (8): ‘___ from the certificate on my stall, I learnt a lot about storing fish safely,’ she says.', ['Apart', 'Except', 'Instead', 'Rather'], x(
    'Le « from » qui suit impose « Apart from » = en plus de, outre. On dit « except for », « instead of » et « rather than ».',
    'حرف الجر «from» بعد الفراغ يفرض «Apart from» بمعنى «إضافةً إلى». أما الكلمات الأخرى فتُستعمل هكذا: «except for» و«instead of» و«rather than».',
    'Only “apart from”; except for, instead of, rather than.',
    'El «from» que sigue exige «Apart from» = además de. Se dice «except for», «instead of» y «rather than».',
  ), RU1_TEXT),

  // ── Part 2 ──
  ru2('fce-m3-ru2-1', 3, 'Gap (1): Yassine Mansouri was only thirteen ___ he built his first website.', ['when'], x(
    '« He was thirteen when he built… » : « when » introduit le moment où l’action a eu lieu.',
    '«He was thirteen when he built…»: الأداة «when» تقدّم الوقت الذي وقع فيه الحدث.',
    'Time clause: “was thirteen when he built…”.',
    '«He was thirteen when he built…»: «when» introduce el momento de la acción.',
  ), RU2_TEXT),
  ru2('fce-m3-ru2-2', 3, 'Gap (2): ‘It looked terrible,’ he laughs, ‘but I was incredibly proud ___ it.’', ['of'], x(
    'L’adjectif « proud » se construit avec « of » : « proud of sth ».',
    'الصفة «proud» تُستعمل مع حرف الجر «of»: «proud of sth».',
    'Dependent preposition: “proud of”.',
    'El adjetivo «proud» va con «of»: «proud of sth».',
  ), RU2_TEXT),
  ru2('fce-m3-ru2-3', 3, 'Gap (3): His parents had no idea what he was doing, but they were happy to see him so keen ___ something.', ['on'], x(
    'L’adjectif « keen » (passionné par) se construit avec « on » : « keen on sth ».',
    'الصفة «keen» (شغوف بـ) تُستعمل مع حرف الجر «on»: «keen on sth».',
    'Dependent preposition: “keen on”.',
    'El adjetivo «keen» (entusiasmado por) va con «on»: «keen on sth».',
  ), RU2_TEXT),
  ru2('fce-m3-ru2-4', 4, 'Gap (4): Yassine believes that coding is one of the most useful skills a young person can learn, and ___ just for those who want to work in IT.', ['not'], x(
    '« And not just for those who… » : « not just » = pas seulement ; la négation élargit l’idée à tous les jeunes.',
    '«and not just for those who…»: «not just» تعني «ليس فقط»، والنفي هنا يوسّع الفكرة لتشمل جميع الشباب.',
    '“and not just for…” = not only.',
    '«And not just for those who…»: «not just» = no solo; la negación amplía la idea a todos los jóvenes.',
  ), RU2_TEXT),
  ru2('fce-m3-ru2-5', 4, 'Gap (5): ‘Programs hardly ___ work the first time, so you have to get used to finding your own mistakes.’', ['ever'], x(
    '« Hardly ever » = presque jamais. L’adverbe de fréquence complète « hardly » devant le verbe.',
    '«hardly ever» تعني «نادرًا جدًّا / تقريبًا أبدًا». ظرف التكرار «ever» يكمّل «hardly» قبل الفعل.',
    '“hardly ever” = almost never.',
    '«Hardly ever» = casi nunca. El adverbio completa «hardly» delante del verbo.',
  ), RU2_TEXT),
  ru2('fce-m3-ru2-6', 3, 'Gap (6): He admits there were moments when he almost gave ___.', ['up'], x(
    'Verbe à particule « give up » = abandonner, ce qui correspond aux bugs qui lui ont pris des jours.',
    'الفعل المركب «give up» يعني «يستسلم / يتخلى»، وهو ما يناسب الأخطاء البرمجية التي استغرقت أيامًا.',
    'Phrasal verb: “give up” = stop trying.',
    'Phrasal verb «give up» = rendirse, que encaja con los errores que tardaba días en resolver.',
  ), RU2_TEXT),
  ru2('fce-m3-ru2-7', 4, 'Gap (7): ‘Every time I solved one, I understood a little more about ___ computers actually work.’', ['how'], x(
    'Question indirecte après « about » : « how computers work » = la façon dont fonctionnent les ordinateurs.',
    'سؤال غير مباشر بعد «about»: «how computers work» أي «كيف تعمل الحواسيب».',
    'Indirect question: “about how computers work”.',
    'Pregunta indirecta tras «about»: «how computers work» = cómo funcionan los ordenadores.',
  ), RU2_TEXT),
  ru2('fce-m3-ru2-8', 4, 'Gap (8): ‘It’s to show them that technology is something they can create, as ___ as something they use.’', ['well'], x(
    'Locution « as well as » = autant que, en plus de : la technologie est à créer, pas seulement à utiliser.',
    'العبارة «as well as» تعني «وكذلك / بالإضافة إلى»: التكنولوجيا شيء يُصنع لا يُستعمل فقط.',
    'Linker: “as well as” = and also.',
    'Locución «as well as» = además de: la tecnología se crea, no solo se usa.',
  ), RU2_TEXT),

  // ── Part 3 ──
  ru3t('fce-m3-ru3-1', 3, 'Gap (1): Around 40 per cent of what we do each day is not the result of a conscious ___ but of habit.', 'DECIDE', ['decision'], x(
    'Après l’article « a » et l’adjectif « conscious », il faut un nom : « decision ».',
    'بعد أداة النكرة «a» والصفة «conscious» نحتاج إلى اسم: «decision».',
    'Adjective + ___ needs a noun: decision.',
    'Tras el artículo «a» y el adjetivo «conscious» hace falta un sustantivo: «decision».',
  )),
  ru3t('fce-m3-ru3-2', 5, 'Gap (2): The brain gradually learns to carry it out almost ___, freeing our attention for other tasks.', 'EFFORT', ['effortlessly'], x(
    'Le verbe « carry it out » est modifié par un adverbe ; l’idée « sans effort » donne « effort » + « -less » + « -ly » : « effortlessly ».',
    'الفعل «carry it out» يحتاج إلى ظرف؛ ومعنى «دون جهد» يعطي «effort» + «-less» + «-ly»: «effortlessly».',
    'Adverb meaning “without effort”: effortlessly.',
    'El verbo «carry it out» necesita un adverbio; la idea de «sin esfuerzo» da «effortlessly».',
  )),
  ru3t('fce-m3-ru3-3', 4, 'Gap (3): Researchers have found that ___ matters far more than motivation.', 'REPEAT', ['repetition'], x(
    'Sujet du verbe « matters », mis en parallèle avec le nom « motivation » : il faut le nom « repetition ».',
    'الفراغ فاعل للفعل «matters» ويوازي الاسم «motivation»، لذا نحتاج إلى الاسم «repetition».',
    'Subject noun parallel to “motivation”: repetition.',
    'Sujeto de «matters», paralelo al sustantivo «motivation»: hace falta «repetition».',
  )),
  ru3t('fce-m3-ru3-4', 5, 'Gap (4): Contrary to popular belief, it is also ___ to expect a new habit to form in just three weeks.', 'REAL', ['unrealistic'], x(
    '« Contrary to popular belief » et la durée réelle (plus de deux mois) indiquent un sens négatif : « un- » + « realistic » → « unrealistic ».',
    'عبارة «Contrary to popular belief» والمدة الحقيقية (أكثر من شهرين) تدلان على معنى منفي: «un-» + «realistic» ← «unrealistic».',
    'Negative meaning (it takes two months): unrealistic.',
    '«Contrary to popular belief» y la duración real (más de dos meses) indican un sentido negativo: «unrealistic».',
  )),
  ru3t('fce-m3-ru3-5', 4, 'Gap (5): Much depends on the ___ of a clear trigger, such as finishing breakfast or arriving home.', 'EXIST', ['existence'], x(
    'Entre « the » et « of », il faut un nom : « existence » (suffixe -ence).',
    'بين «the» و«of» نحتاج إلى اسم: «existence» (اللاحقة -ence).',
    '“the ___ of” needs a noun: existence.',
    'Entre «the» y «of» hace falta un sustantivo: «existence» (sufijo -ence).',
  )),
  ru3t('fce-m3-ru3-6', 4, 'Gap (6): This explains why people who rely on ___ alone so often give up.', 'DETERMINE', ['determination'], x(
    'Après la préposition « on », il faut un nom : « determination » (la volonté), opposé aux petits changements conseillés ensuite.',
    'بعد حرف الجر «on» نحتاج إلى اسم: «determination» (العزيمة)، في مقابل التغييرات الصغيرة التي يُنصح بها بعد ذلك.',
    'After “rely on”, a noun: determination.',
    'Tras la preposición «on» hace falta un sustantivo: «determination» (la fuerza de voluntad).',
  )),
  ru3t('fce-m3-ru3-7', 4, 'Gap (7): Experts advise starting with tiny changes; small ___, they say, add up over time.', 'IMPROVE', ['improvements'], x(
    'Après l’adjectif « small », il faut un nom, au pluriel car le verbe est « add up » : « improvements ».',
    'بعد الصفة «small» نحتاج إلى اسم بصيغة الجمع لأن الفعل «add up» جمع: «improvements».',
    'Plural noun (verb “add up”): improvements.',
    'Tras el adjetivo «small» hace falta un sustantivo en plural, porque el verbo es «add up»: «improvements».',
  )),
  ru3t('fce-m3-ru3-8', 4, 'Gap (8): The trick is to make bad habits ___: if your phone is charging in another room, you are far less likely to scroll through it in bed.', 'CONVENIENT', ['inconvenient'], x(
    '« Make sth + adjectif » ; le téléphone placé dans une autre pièce rend l’habitude difficile, donc sens négatif : « inconvenient ».',
    'التركيب «make sth + صفة»؛ ووضع الهاتف في غرفة أخرى يجعل العادة صعبة، فالمعنى منفي: «inconvenient».',
    'Phone in another room → negative: inconvenient.',
    '«Make sth + adjetivo»; dejar el móvil en otra habitación dificulta el hábito, así que sentido negativo: «inconvenient».',
  )),

  // ── Part 4 ──
  ru4('fce-m3-ru4-1', 3, 'Leila speaks English better than I do.', 'AS', 'I don’t speak English ___ Leila.', ['as well as', 'so well as'], x(
    'Comparatif de supériorité → comparatif d’égalité négatif : « not as well as » ; « well » est l’adverbe de « speak ».',
    'صيغة التفضيل ← مقارنة المساواة المنفية: «not as well as»؛ والظرف «well» يصف الفعل «speak».',
    '“better than” → “not as well as”.',
    'Comparativo de superioridad → comparativo de igualdad negativo: «not as well as»; «well» es el adverbio de «speak».',
  )),
  ru4('fce-m3-ru4-2', 4, 'The flight was delayed because of a strike by air traffic controllers.', 'DUE', 'The delay to the flight ___ a strike by air traffic controllers.', ['was due to', 'was entirely due to', 'was mainly due to'], x(
    'Le nom « delay » devient sujet : « The delay… was due to » = était dû à ; « due to » remplace « because of ».',
    'يصبح الاسم «delay» فاعلًا: «The delay… was due to» أي «كان بسبب»؛ و«due to» تحل محل «because of».',
    '“because of” → “was due to”.',
    'El sustantivo «delay» pasa a ser sujeto: «The delay… was due to» = se debió a.',
  )),
  ru4('fce-m3-ru4-3', 4, 'Although the rain was heavy, the match continued.', 'SPITE', 'The match continued ___ heavy rain.', ['in spite of the'], x(
    '« Although » + proposition → « in spite of » + groupe nominal ; « the » est nécessaire devant « heavy rain ».',
    '«Although» + جملة ← «in spite of» + مركّب اسمي؛ ونحتاج إلى «the» قبل «heavy rain».',
    '“Although + clause” → “in spite of the + noun”.',
    '«Although» + oración → «in spite of» + sintagma nominal; hace falta «the» delante de «heavy rain».',
  )),
  ru4('fce-m3-ru4-4', 4, 'Maya managed to find a cheap flight to Istanbul in the end.', 'SUCCEEDED', 'In the end, Maya ___ a cheap flight to Istanbul.', ['succeeded in finding'], x(
    '« Manage to do sth » = « succeed in doing sth » : « succeed » + « in » + forme en -ing.',
    '«manage to do sth» = «succeed in doing sth»: الفعل «succeed» + «in» + صيغة -ing.',
    '“managed to find” → “succeeded in finding”.',
    '«Manage to do sth» = «succeed in doing sth»: «succeed» + «in» + forma en -ing.',
  )),
  ru4('fce-m3-ru4-5', 4, 'I can’t wait to see you at the festival next month.', 'LOOKING', 'I ___ you at the festival next month.', ['am looking forward to seeing'], x(
    '« Can’t wait to » = « be looking forward to » ; « to » y est une préposition, donc suivi de -ing : « seeing ».',
    '«can’t wait to» = «be looking forward to»؛ و«to» هنا حرف جر، لذا يليه الفعل بصيغة -ing: «seeing».',
    '“look forward to” + -ing: seeing.',
    '«Can’t wait to» = «be looking forward to»; «to» es preposición, así que va con -ing: «seeing».',
  )),
  ru4('fce-m3-ru4-6', 5, 'People think that the island’s first inhabitants arrived 3,000 years ago.', 'THOUGHT', 'The island’s first inhabitants ___ 3,000 years ago.', ['are thought to have arrived', 'were thought to have arrived'], x(
    'Passif impersonnel : « People think that… arrived » → « are thought to have arrived » ; l’infinitif passé marque l’action antérieure.',
    'المبني للمجهول غير الشخصي: «People think that… arrived» ← «are thought to have arrived»؛ والمصدر الماضي «to have arrived» يدل على حدث سابق.',
    'Passive reporting: “are thought to have arrived”.',
    'Pasiva impersonal: «People think that… arrived» → «are thought to have arrived»; el infinitivo perfecto marca anterioridad.',
  )),

  // ── Part 5 ──
  ru5('fce-m3-ru5-1', 4, RU5_TEXT, 'How did the writer feel the first time she led a group to the summit alone?', ['She was more anxious than the people she was guiding.', 'She was confident because she knew the route so well.', 'She was annoyed that the group was walking so slowly.', 'She regretted not asking her uncle to come with her.'], x(
    '« More frightened than any of the eight people following me » : elle était plus inquiète que son groupe, même si elle connaissait la montagne.',
    '«more frightened than any of the eight people following me»: كانت أكثر قلقًا من أفراد مجموعتها رغم معرفتها بالجبل.',
    '“more frightened than any of the eight people following me”.',
    '«More frightened than any of the eight people following me»: estaba más nerviosa que su grupo, aunque conocía la montaña.',
  )),
  ru5('fce-m3-ru5-2', 4, RU5_TEXT, 'What made the writer’s mother change her mind about guiding?', ['hearing visitors praise her daughter’s work', 'long discussions with the writer’s uncle', 'seeing her daughter pass the guiding course', 'the advice of other people in the village'], x(
    '« He never argued with her… let her hear from the visitors how well I explained » : ce sont les compliments des visiteurs qui l’ont convaincue.',
    '«He never argued with her… let her hear from the visitors how well I explained»: ثناء الزوار على ابنتها هو ما أقنعها.',
    'The uncle “let her hear from the visitors how well I explained”.',
    '«He never argued with her… let her hear from the visitors how well I explained»: fueron los elogios de los visitantes.',
  )),
  ru5('fce-m3-ru5-3', 5, RU5_TEXT, 'What did the writer find hardest about the guiding course?', ['expressing in technical terms what she knew by instinct', 'being one of very few women on the course', 'having to study the course materials in a foreign language', 'learning the first-aid skills needed in the mountains'], x(
    '« Turning that instinct into compass bearings and grid references on paper » ; la « foreign language » n’est qu’une comparaison (« felt like »).',
    '«turning that instinct into compass bearings and grid references on paper»؛ أما «foreign language» فمجرد تشبيه («felt like»).',
    '“turning that instinct into compass bearings… on paper”.',
    '«Turning that instinct into compass bearings and grid references on paper»; la «foreign language» es solo una comparación.',
  )),
  ru5('fce-m3-ru5-4', 4, RU5_TEXT, 'According to the writer, what is the most tiring part of her job?', ['dealing with visitors who think the climb will be easy', 'the physical effort of walking for days', 'sleeping in a crowded, noisy refuge', 'organising clean-ups at the end of the season'], x(
    '« What really exhausts me is managing people’s expectations… read online that Toubkal is an easy climb » ; l’effort physique « is not what tires me most ».',
    '«What really exhausts me is managing people’s expectations… read online that Toubkal is an easy climb»؛ أما الجهد البدني فـ«is not what tires me most».',
    '“What really exhausts me is managing people’s expectations.”',
    '«What really exhausts me is managing people’s expectations»; el esfuerzo físico «is not what tires me most».',
  )),
  ru5('fce-m3-ru5-5', 4, RU5_TEXT, 'What does the story of the young man from Lyon illustrate?', ['A decision that upsets a client can still be the right one.', 'Visitors who pay more expect to reach the summit.', 'The writer finds it easy to refuse what clients want.', 'The writer later regretted being so strict with him.'], x(
    'Il était « furious » sur le moment, mais « a week later he sent me a message thanking me » : la décision était juste malgré sa colère. Elle parle d’une conversation « one of the hardest ».',
    'كان «furious» في البداية، لكن «a week later he sent me a message thanking me»: القرار كان صائبًا رغم غضبه، وقد وصفت المحادثة بأنها «one of the hardest».',
    'Furious at first, then “sent me a message thanking me”.',
    'Estaba «furious», pero «a week later he sent me a message thanking me»: la decisión era correcta pese a su enfado.',
  )),
  ru5('fce-m3-ru5-6', 5, RU5_TEXT, 'In the final paragraph, ‘the day it does’ refers to the day when the writer', ['no longer feels moved by the moment at the summit.', 'can no longer bear the nights in the refuge.', 'stops believing that her clients can reach the top.', 'decides to follow her uncle into retirement.'], x(
    '« It » reprend « that moment », dans « That moment never gets old » : le jour où ce moment au sommet ne l’émouvra plus.',
    'الضمير «it» يعود على «that moment» في جملة «That moment never gets old»: أي اليوم الذي تفقد فيه تلك اللحظة على القمة أثرها فيها.',
    '“it” = “that moment”, which “never gets old”.',
    '«It» retoma «that moment» de «That moment never gets old»: el día en que ese momento en la cumbre deje de emocionarla.',
  )),

  // ── Part 6 ──
  ru6('fce-m3-ru6-1', 4, RU6_TEXT, 'Which sentence fits gap 1?', RU6_SENTENCES, 3, x(
    'La phrase D prolonge la description du bâtiment abandonné (« stood empty… broken… posters ») avant « Then, in 2019 ».',
    'الجملة D تكمل وصف المبنى المهجور («stood empty… broken… posters») قبل «Then, in 2019».',
    'D continues the description of the empty building.',
    'La frase D continúa la descripción del edificio abandonado antes de «Then, in 2019».',
  )),
  ru6('fce-m3-ru6-2', 4, RU6_TEXT, 'Which sentence fits gap 2?', RU6_SENTENCES, 4, x(
    '« The council agreed, on one condition » répond à une proposition : l’offre des étudiants de la phrase E (« made an offer »).',
    'عبارة «The council agreed, on one condition» ردّ على اقتراح، وهو عرض الطلاب في الجملة E («made an offer»).',
    '“The council agreed” answers the offer in E.',
    '«The council agreed, on one condition» responde a una propuesta: la oferta de los estudiantes de la frase E.',
  )),
  ru6('fce-m3-ru6-3', 4, RU6_TEXT, 'Which sentence fits gap 3?', RU6_SENTENCES, 6, x(
    'G explique pourquoi on n’a pas fait appel à des professionnels ; « Instead, volunteers… » présente la solution de remplacement.',
    'الجملة G تشرح سبب عدم الاستعانة بالمحترفين، ثم تقدّم «Instead, volunteers…» البديل.',
    'G (too expensive) is followed by “Instead, volunteers…”.',
    'G explica por qué no se contrató a profesionales; «Instead, volunteers…» presenta la alternativa.',
  )),
  ru6('fce-m3-ru6-4', 5, RU6_TEXT, 'Which sentence fits gap 4?', RU6_SENTENCES, 0, x(
    'Face au manque d’argent, A introduit l’appel aux dons ; « more than six hundred people had contributed » renvoie à « contribution ».',
    'أمام نقص المال، تقدّم الجملة A نداء التبرعات؛ وعبارة «more than six hundred people had contributed» تحيل إلى «contribution».',
    'A’s appeal explains “six hundred people had contributed”.',
    'Ante la falta de dinero, A presenta la campaña de donaciones; «had contributed» remite a «contribution».',
  )),
  ru6('fce-m3-ru6-5', 4, RU6_TEXT, 'Which sentence fits gap 5?', RU6_SENTENCES, 2, x(
    'C décrit la séance de réouverture : « sang along to every song » renvoie à la comédie musicale, puis « Since then » enchaîne.',
    'الجملة C تصف عرض الافتتاح: «sang along to every song» تحيل إلى الفيلم الغنائي، ثم تأتي «Since then».',
    'C: “sang along” refers to the musical.',
    'C describe la sesión de reapertura: «sang along to every song» remite al musical, y luego sigue «Since then».',
  )),
  ru6('fce-m3-ru6-6', 4, RU6_TEXT, 'Which sentence fits gap 6?', RU6_SENTENCES, 5, x(
    '« Both » dans F reprend les deux mécontents cités (les habitants et le café) ; B est exclue car le conseil a finalement accordé un bail de dix ans.',
    'كلمة «both» في الجملة F تعود على الطرفين المستائين (السكان والمقهى)؛ وتُستبعد B لأن البلدية منحت في النهاية عقد إيجار لعشر سنوات.',
    '“both” = the residents and the café.',
    '«Both» en F retoma a los dos descontentos (vecinos y cafetería); B se descarta porque el ayuntamiento concedió un contrato de diez años.',
  )),

  // ── Part 7 ──
  ru7('fce-m3-ru7-1', 4, RU7_TEXT, 'Which person borrowed money to buy equipment?', RU7_SECTIONS, 3, x(
    'Mehdi (D) : « I needed proper lights and lenses, so I took out a bank loan ».',
    'مهدي (D): «I needed proper lights and lenses, so I took out a bank loan».',
    'D: “so I took out a bank loan”.',
    'Mehdi (D): «I needed proper lights and lenses, so I took out a bank loan».',
  )),
  ru7('fce-m3-ru7-2', 3, RU7_TEXT, 'Which person had to throw away the first things they made?', RU7_SECTIONS, 0, x(
    'Rania (A) : « My very first batch was a disaster… I had to throw the whole lot away ».',
    'رانية (A): «My very first batch was a disaster… I had to throw the whole lot away».',
    'A: “I had to throw the whole lot away”.',
    'Rania (A): «My very first batch was a disaster… I had to throw the whole lot away».',
  )),
  ru7('fce-m3-ru7-3', 4, RU7_TEXT, 'Which person says the business fits easily around their studies?', RU7_SECTIONS, 4, x(
    'Sara (E) : « I can arrange the walks around my lectures and exams ».',
    'سارة (E): «I can arrange the walks around my lectures and exams».',
    'E: “around my lectures and exams”.',
    'Sara (E): «I can arrange the walks around my lectures and exams».',
  )),
  ru7('fce-m3-ru7-4', 4, RU7_TEXT, 'Which person disagreed with a partner about how fast to expand?', RU7_SECTIONS, 2, x(
    'Camila (C) : son amie voulait « open a second shop straight away, while I wanted to grow slowly ».',
    'كاميلا (C): صديقتها أرادت «open a second shop straight away, while I wanted to grow slowly».',
    'C: “a second shop straight away… grow slowly”.',
    'Camila (C): su amiga quería «open a second shop straight away, while I wanted to grow slowly».',
  )),
  ru7('fce-m3-ru7-5', 4, RU7_TEXT, 'Which person gets all their customers through word of mouth?', RU7_SECTIONS, 1, x(
    'Jonas (B) : « I’ve never paid for any kind of advertising; every customer I have heard about me from someone else ».',
    'يوناس (B): «I’ve never paid for any kind of advertising; every customer I have heard about me from someone else».',
    'B: “heard about me from someone else”.',
    'Jonas (B): «every customer I have heard about me from someone else».',
  )),
  ru7('fce-m3-ru7-6', 4, RU7_TEXT, 'Which person now refuses clients with unreasonable demands?', RU7_SECTIONS, 3, x(
    'Mehdi (D) : les clients qui voulaient « fifty photos by the next morning » — « Now I turn those people down politely ».',
    'مهدي (D): الزبائن الذين أرادوا «fifty photos by the next morning» — «Now I turn those people down politely».',
    'D: “Now I turn those people down politely.”',
    'Mehdi (D): los clientes que pedían «fifty photos by the next morning» — «Now I turn those people down politely».',
  )),
  ru7('fce-m3-ru7-7', 4, RU7_TEXT, 'Which person was advised by a customer to charge more?', RU7_SECTIONS, 0, x(
    'Rania (A) : « a customer told me I was undervaluing my work », puis elle a doublé ses prix.',
    'رانية (A): «a customer told me I was undervaluing my work»، فضاعفت أسعارها بعد ذلك.',
    'A: “a customer told me I was undervaluing my work”.',
    'Rania (A): «a customer told me I was undervaluing my work», y después duplicó sus precios.',
  )),
  ru7('fce-m3-ru7-8', 5, RU7_TEXT, 'Which person started the business because of something they disliked about consumer habits?', RU7_SECTIONS, 2, x(
    'Camila (C) : « I’ve always hated the idea of buying clothes that people wear twice and then throw away ».',
    'كاميلا (C): «I’ve always hated the idea of buying clothes that people wear twice and then throw away».',
    'C hated clothes “worn twice and then thrown away”.',
    'Camila (C): «I’ve always hated the idea of buying clothes that people wear twice and then throw away».',
  )),
  ru7('fce-m3-ru7-9', 3, RU7_TEXT, 'Which person now has other people working for them?', RU7_SECTIONS, 4, x(
    'Sara (E) : « I now have three other students working for me ».',
    'سارة (E): «I now have three other students working for me».',
    'E: “three other students working for me”.',
    'Sara (E): «I now have three other students working for me».',
  )),
  ru7('fce-m3-ru7-10', 4, RU7_TEXT, 'Which person found another way to earn money at a quiet time of year?', RU7_SECTIONS, 1, x(
    'Jonas (B) : en hiver « hardly anyone cycles », alors il donne « evening classes » de réparation.',
    'يوناس (B): في الشتاء «hardly anyone cycles»، لذلك يقدّم «evening classes» لتعليم التصليح.',
    'B: winter is quiet, so “evening classes”.',
    'Jonas (B): en invierno «hardly anyone cycles», así que da «evening classes» de reparación.',
  )),
];
