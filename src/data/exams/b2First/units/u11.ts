import type { Unit } from '../../../../types';
import { lesson, unit, x } from '../../../curriculum/build';
import { li2, li3 } from '../build';

/** Unit fce-u11: Listening Parts 2 and 3, sentence completion and multiple matching. */

const S1_TALK = `Hi everyone. I'm Ines, and last summer I spent eight weeks as a volunteer with a sea turtle project on the island of Kefalonia, in Greece. I'd like to tell you a bit about it, because several of you have asked whether it's worth applying.

First, the practical side. Volunteers stay at a campsite about ten minutes from the beach, and you sleep in tents, so if you need your comforts, this isn't for you. We each paid a fee of four hundred euros, which covered food and accommodation but not flights.

Most people imagine the work is all about holding baby turtles. In fact, the job I did most often was the morning survey. We'd walk along the beach at sunrise looking for tracks in the sand, which show where a female turtle has come up during the night to lay her eggs. When we found a nest, we'd protect it with a metal cage, mainly to stop foxes from digging up the eggs.

The part I found hardest wasn't the early starts. It was talking to tourists. Lots of them put their umbrellas right on top of the nests, and you have to explain the problem politely, sometimes in three languages.

The best moment, of course, was the hatching. Baby turtles find the sea by heading for the brightest horizon, which should be the moonlight on the water. Unfortunately, the lights from beach bars confuse them, so one of our jobs was to make sure they went the right way.

If you want to apply, the deadline is the end of February, and you'll need to send a short video explaining why you want to take part. Don't worry about experience. What they're really looking for is patience.`;

const S1_SPEAKERS = `Speaker 1: I'd always wanted to play the piano, but I live in a tiny studio flat in Lisbon, and there's simply no room for one. So I went for the ukulele instead. It fits in a cupboard, and my neighbours don't complain about the noise. It's not the instrument of my dreams, but I've grown quite fond of it.
Speaker 2: Everyone says you should practise for half an hour a day. I work shifts at a hospital, and some weeks I just don't know where that half hour is supposed to come from. I'd pick up the guitar on a Sunday and realise I hadn't touched it since the Sunday before. I haven't given up, but I've accepted that I'll be a slow learner.
Speaker 3: For the first year I practised the violin alone in my bedroom, and honestly, I was bored. Then a friend dragged me along to an amateur orchestra that meets in a church hall on Thursdays. I'm the worst player there by far, but sitting among forty people making music together, I suddenly wanted to get better. Now I practise every day so I don't let the others down.
Speaker 4: My job in finance is pretty intense, and I was sleeping badly. A doctor suggested I find a hobby to help me switch off, so I took up the drums, which my family thought was hilarious. But after an hour of hitting things, all the tension of the day has gone. I'm not a great drummer, and I don't need to be. That's not why I do it.
Speaker 5: I started saxophone lessons with a teacher who insisted on scales and theory for months before I was allowed to play a real tune. I know some people need that, but I just lost interest. In the end I changed teachers. My new one lets me learn songs I actually like and explains the theory as we go along.`;

const S1_OPTIONS = [
  'A. I was surprised by how quickly I made progress.',
  'B. I regret not starting when I was younger.',
  'C. I find it hard to fit practice into my routine.',
  'D. Playing with other people motivated me.',
  'E. My first teacher’s approach didn’t suit me.',
  'F. It helps me to cope with stress.',
  'G. I chose my instrument for a practical reason.',
  'H. I nearly gave up because of the cost.',
];

const S2_TALK = `Hello, and thanks for coming to this information evening. My name's Samir, and I run the Atlas Trails hiking club for people aged sixteen to twenty-five. I'm going to tell you about our summer trek, so you can decide whether to sign up.

The trek lasts six days and takes us across the High Atlas, from the village of Imlil to a valley called Ait Bouguemez. We walk for five or six hours a day, which doesn't sound much, but some of the paths climb steeply, so a reasonable level of fitness is essential. To prepare, I'd recommend walking up stairs with a full backpack a few times a week. It sounds silly, but it works better than going to the gym.

You won't have to carry everything yourself. Mules carry the tents and the food, so you only need a small daypack with water, a warm jacket and your lunch. Even in July, nights in the mountains can be cold, so please don't forget a good sleeping bag. That's the item people most often regret not bringing.

We sleep in tents most nights, but on the fourth night we stay in a family home in a Berber village. For many people, that's the highlight of the trip. You'll eat with the family, and if you're lucky, they'll show you how to bake bread in a clay oven.

The price includes the guides, the mules and all your meals. You'll need to pay a deposit when you register, and the rest one month before we leave. Places are limited to twelve, so I'd encourage you to sign up soon. Right, any questions?`;

const S2_SPEAKERS = `Speaker 1: I spent a summer working in a fruit-packing warehouse near Valencia. I'd assumed it would be boring but easy. Boring, yes. Easy, absolutely not. Eight hours on your feet, lifting crates, in the heat. The first week I was in bed by nine every night, and my back ached for a month. I did stay till the end of the season, though.
Speaker 2: My first job was in a bookshop in Tunis, and the owner, Madame Jaziri, was in her seventies. She'd read everything. Whenever I recommended a book to a customer, she'd ask me afterwards why I'd chosen it, and she never accepted a lazy answer. Twenty years later, I still ask myself her question whenever I make a decision: why this one, and not another?
Speaker 3: I delivered pizzas on a scooter when I was seventeen. The pay wasn't bad, and for the first couple of months I spent every penny the day I got it. Then the scooter needed a new tyre, and I had nothing left. After that, I started putting a bit aside every week, and I've done it ever since. That's probably the most useful thing the job gave me.
Speaker 4: I worked at the information desk of a big railway station in Lyon. When trains were cancelled, people took it out on whoever was standing behind the desk, which was me. At first I'd get upset, or argue back. Gradually I learned to stay calm, listen, and find something, anything, that I could actually do for them. I use that skill all the time now.
Speaker 5: I helped out at a vet's surgery on Saturday mornings, mostly cleaning cages and answering the phone. At the time I was planning to study law, because that's what my parents wanted. But watching the vets at work, I realised that this was what I wanted to do with my life. I changed my university application a month later, and I've never regretted it.`;

const S2_OPTIONS = [
  'A. It taught me to manage my money.',
  'B. The work was more physically demanding than I’d expected.',
  'C. Someone I worked with had a lasting influence on me.',
  'D. I got the job through a family connection.',
  'E. It helped me to choose my career.',
  'F. I left because of the working hours.',
  'G. I learned how to deal with difficult customers.',
];

const S3_TALK = `Good evening, everyone, and welcome to the camp. My name's Karima, and I'll be your guide for the two nights you're spending with us here in the desert near Zagora. Before it gets dark, let me explain how things work.

People often ask me why we're so far from the nearest town. It's simple. What ruins a night sky isn't clouds, it's light pollution. Here, the closest streetlight is more than forty kilometres away, so on a clear night you can see thousands of stars with your own eyes.

We have two telescopes, but please don't rush to them straight away. Your eyes need time to adjust to the dark, and the thing most likely to spoil that is your phone screen, so keep it in your pocket. If you need to see where you're walking, use the red torch you'll find in your tent. Red light doesn't affect your night vision.

Tonight we'll be looking at Saturn. Most guests expect the colour of the planet to be the highlight, but what really makes people gasp is seeing its rings for the first time.

One practical point: the desert gets surprisingly cold after midnight, sometimes below five degrees, so bring a blanket out with you, not just a jacket. And tomorrow, after breakfast, there's an optional camel ride to the dunes. It isn't included in the price, so sign up at reception if you're interested.

Right, the sun's going down. Let's head over to the viewing area.`;

const S3_SPEAKERS = `Speaker 1: I'd spent weeks studying my first opponent's games online before the chess tournament in Tunis, and I'd convinced myself she was some kind of enemy. She beat me easily. Afterwards we got talking over a terrible cup of coffee in the hall, and it turned out we support the same football team. We message each other almost every day now, and next spring she's coming to stay with my family in Sousse.
Speaker 2: I'm not competitive at all. My grandfather had wanted to enter the regional couscous competition for years, but his hands shake too much now, so he asked me to cook his recipe for him. I only agreed because I couldn't bear to say no to him. We came fourth, and he talked about it for weeks as if we'd won.
Speaker 3: I trained for five months with a running club for the half marathon in Valencia, early mornings along the old river bed, and I loved every minute of it: the jokes, the long breakfasts afterwards. The race itself was a bit of an anticlimax, to be honest. It was hot, I never found my rhythm, and I just wanted it to be over. I've rejoined the club, but I'm not sure I'll race again.
Speaker 4: I signed up for a weekend coding competition for students in Lisbon, mostly out of curiosity. I was studying economics at the time. Our team's app didn't win anything, but over those two days I realised that building something from nothing was what I wanted to spend my life doing. I switched to computer science the following September, and I've never looked back.
Speaker 5: I'd read my poems to friends dozens of times, so when I entered a poetry slam in Marrakech, I assumed it would feel the same. It didn't. I walked onto the stage, saw three hundred faces, and my mouth went completely dry. I even forgot my first line. I'd honestly never imagined my body could react like that. I got through it in the end, and I even reached the second round.`;

const S3_OPTIONS = [
  'A. I took part mainly to please someone else.',
  'B. Losing taught me more than winning would have.',
  'C. The preparation was more enjoyable than the event itself.',
  'D. I was disappointed by the way the event was organised.',
  'E. I became friends with someone I competed against.',
  'F. I hadn’t expected to feel so nervous.',
  'G. I entered without any hope of doing well.',
  'H. The experience changed the direction of my studies.',
];

export const fceU11: Unit = unit(
  {
    id: 'fce-u11',
    emoji: '👂',
    level: 4,
    part: 'LI2 · LI3',
    title: x('Écouter : phrases à compléter et appariement', 'الاستماع: إكمال الجمل والمطابقة', 'Listening: sentence completion and matching', 'Escuchar: completar frases y emparejar'),
    subtitle: x('Mots exacts, reformulations et pièges', 'الكلمات الدقيقة وإعادة الصياغة والفخاخ', 'Exact words, paraphrase and traps', 'Palabras exactas, paráfrasis y trampas'),
    lesson: lesson(
      x(
        'Compléter des phrases avec les mots exacts entendus (Partie 2) et associer cinq locuteurs à leur idée principale (Partie 3).',
        'إكمال جمل بالكلمات المسموعة نفسها (الجزء 2) وربط خمسة متحدثين بفكرتهم الرئيسية (الجزء 3).',
        'Complete sentences with the exact words you hear (Part 2) and match five speakers to their main idea (Part 3).',
        'Completar frases con las palabras exactas que se oyen (Parte 2) y relacionar a cinco hablantes con su idea principal (Parte 3).',
      ),
      [
        x(
          'Partie 2 : avant l’écoute, devinez le type de mot qui manque (nom, pluriel, lieu, objet). Les phrases suivent l’ordre de l’enregistrement.',
          'الجزء 2: قبل الاستماع، توقّع نوع الكلمة الناقصة (اسم، جمع، مكان، شيء). الجمل تتبع ترتيب التسجيل.',
          'Part 2: predict the type of word missing; sentences follow the recording.',
          'Parte 2: antes de escuchar, adivina el tipo de palabra que falta (sustantivo, plural, lugar, objeto). Las frases siguen el orden de la grabación.',
        ),
        x(
          'Écrivez le mot tel que vous l’entendez (1 à 3 mots), sans le transformer, et vérifiez l’orthographe et le pluriel.',
          'اكتب الكلمة كما تسمعها (من كلمة إلى ثلاث) دون تغييرها، وتحقق من الإملاء وصيغة الجمع.',
          'Write the exact words (1–3), check spelling and plurals.',
          'Escribe la palabra tal como la oyes (de 1 a 3 palabras), sin transformarla, y revisa la ortografía y el plural.',
        ),
        x(
          'Attention aux pièges : le locuteur cite souvent une première idée puis la corrige (« The part I found hardest wasn’t…, it was… »).',
          'احذر الفخاخ: كثيرًا ما يذكر المتحدث فكرة أولى ثم يصحّحها («The part I found hardest wasn’t…, it was…»).',
          'Beware: speakers often mention one idea, then correct it.',
          'Cuidado con las trampas: el hablante suele citar una primera idea y luego corregirla («The part I found hardest wasn’t…, it was…»).',
        ),
        x(
          'Partie 3 : les options reformulent ; les locuteurs n’utilisent presque jamais les mêmes mots. Écoutez l’idée générale, puis éliminez les options déjà utilisées.',
          'الجزء 3: الخيارات تعيد الصياغة، والمتحدثون نادرًا ما يستعملون الكلمات نفسها. استمع إلى الفكرة العامة ثم استبعد الخيارات المستعملة.',
          'Part 3: options paraphrase; listen for the main idea and cross out used options.',
          'Parte 3: las opciones parafrasean; los hablantes casi nunca usan las mismas palabras. Escucha la idea general y descarta las opciones ya usadas.',
        ),
      ],
      'Speaker: “A doctor suggested I find a hobby to help me switch off.” → It helps me to cope with stress.',
      x(
        '« switch off » et « all the tension… has gone » reformulent « cope with stress » : le mot « stress » n’est jamais prononcé.',
        '«switch off» و«all the tension… has gone» تعيدان صياغة «cope with stress»، وكلمة «stress» لا تُقال أبدًا.',
        '“Switch off” paraphrases “cope with stress”.',
        '«switch off» y «all the tension… has gone» reformulan «cope with stress»: la palabra «stress» nunca se dice.',
      ),
    ),
  },
  [
    li2('fce-u11-s1-q1', 4, S1_TALK, 'The fee paid by volunteers did not include ___.', ['flights'], x(
      '« covered food and accommodation but not flights » : le mot exact est « flights ».',
      '«covered food and accommodation but not flights»: الكلمة الدقيقة هي «flights».',
      'The fee covered everything “but not flights”.',
      '«covered food and accommodation but not flights»: la palabra exacta es «flights».',
    )),
    li2('fce-u11-s1-q2', 4, S1_TALK, 'The task Ines did most often was the ___.', ['morning survey'], x(
      '« the job I did most often was the morning survey » ; tenir les bébés tortues est l’idée reçue, pas la réalité.',
      '«the job I did most often was the morning survey»، أما حمل السلاحف الصغيرة فهو تصوّر خاطئ.',
      '“The job I did most often was the morning survey”.',
      '«the job I did most often was the morning survey»; sostener las crías es lo que la gente imagina, no la realidad.',
    )),
    li2('fce-u11-s1-q3', 4, S1_TALK, 'The metal cages mainly protected the eggs from ___.', ['foxes'], x(
      '« mainly to stop foxes from digging up the eggs ».',
      'كانت الأقفاص تحمي البيض من الثعالب أساسًا: «mainly to stop foxes from digging up the eggs».',
      'Cages “stop foxes from digging up the eggs”.',
      '«mainly to stop foxes from digging up the eggs».',
    )),
    li2('fce-u11-s1-q4', 4, S1_TALK, 'Ines found it hardest to deal with ___.', ['tourists'], x(
      'Piège : « wasn’t the early starts. It was talking to tourists ».',
      'فخ: «wasn’t the early starts. It was talking to tourists».',
      'Not the early starts: “It was talking to tourists”.',
      'Trampa: «wasn’t the early starts. It was talking to tourists».',
    )),
    li2('fce-u11-s1-q5', 4, S1_TALK, 'Baby turtles can go the wrong way because of the lights from ___.', ['beach bars'], x(
      '« the lights from beach bars confuse them » ; le clair de lune, lui, les guide vers la mer.',
      '«the lights from beach bars confuse them»، أما ضوء القمر فيرشدها إلى البحر.',
      '“The lights from beach bars confuse them”.',
      '«the lights from beach bars confuse them»; la luz de la luna, en cambio, las guía al mar.',
    )),
    li3('fce-u11-s1-q6', 4, S1_SPEAKERS, 'What does Speaker 1 say about learning an instrument?', S1_OPTIONS, 6, x(
      'Pas de place pour un piano (« no room ») : choix du ukulélé parce qu’il « fits in a cupboard » → G.',
      'لا مكان للبيانو («no room»)، فاختار المتحدث آلة اليوكوليلي لأنها «fits in a cupboard» ← G.',
      'No room for a piano, so a ukulele that “fits in a cupboard” → G.',
      'No hay sitio para un piano («no room»): eligió el ukelele porque «fits in a cupboard» → G.',
    )),
    li3('fce-u11-s1-q7', 4, S1_SPEAKERS, 'What does Speaker 2 say about learning an instrument?', S1_OPTIONS, 2, x(
      'Ses horaires à l’hôpital : « I just don’t know where that half hour is supposed to come from » → C.',
      'بسبب مناوباته في المستشفى: «I just don’t know where that half hour is supposed to come from» ← C.',
      'Shift work: he can’t find “that half hour” → C.',
      'Sus turnos en el hospital: «I just don’t know where that half hour is supposed to come from» → C.',
    )),
    li3('fce-u11-s1-q8', 4, S1_SPEAKERS, 'What does Speaker 3 say about learning an instrument?', S1_OPTIONS, 3, x(
      'Seul, on s’ennuyait ; avec l’orchestre « I suddenly wanted to get better » → D.',
      'كان يشعر بالملل وحده، ومع الأوركسترا «I suddenly wanted to get better» ← D.',
      'With the orchestra, “I suddenly wanted to get better” → D.',
      'Solo se aburría; con la orquesta «I suddenly wanted to get better» → D.',
    )),
    li3('fce-u11-s1-q9', 4, S1_SPEAKERS, 'What does Speaker 4 say about learning an instrument?', S1_OPTIONS, 5, x(
      '« a hobby to help me switch off… all the tension of the day has gone » → F (le stress).',
      '«a hobby to help me switch off… all the tension of the day has gone» ← F (التوتر).',
      'Drumming makes “all the tension” go → F.',
      '«a hobby to help me switch off… all the tension of the day has gone» → F (el estrés).',
    )),
    li3('fce-u11-s1-q10', 4, S1_SPEAKERS, 'What does Speaker 5 say about learning an instrument?', S1_OPTIONS, 4, x(
      'Trop de gammes et de théorie : « I just lost interest. In the end I changed teachers » → E.',
      'الكثير من السلالم الموسيقية والنظرية: «I just lost interest. In the end I changed teachers» ← E.',
      'Too much theory: “I lost interest… changed teachers” → E.',
      'Demasiadas escalas y teoría: «I just lost interest. In the end I changed teachers» → E.',
    )),
  ],
  [
    li2('fce-u11-s2-q1', 4, S2_TALK, 'To get fit for the trek, Samir suggests walking up ___ with a full backpack.', ['stairs'], x(
      '« I’d recommend walking up stairs with a full backpack » ; la salle de sport est moins efficace selon lui.',
      '«I’d recommend walking up stairs with a full backpack»، والنادي الرياضي أقل فائدة حسب رأيه.',
      '“Walking up stairs with a full backpack”.',
      '«I’d recommend walking up stairs with a full backpack»; según él, el gimnasio funciona peor.',
    )),
    li2('fce-u11-s2-q2', 4, S2_TALK, 'The tents and the food are carried by ___.', ['mules', 'the mules'], x(
      '« Mules carry the tents and the food » : les randonneurs ne portent qu’un petit sac.',
      '«Mules carry the tents and the food»: لا يحمل المشاركون إلا حقيبة صغيرة.',
      '“Mules carry the tents and the food”.',
      '«Mules carry the tents and the food»: los excursionistas solo llevan una mochila pequeña.',
    )),
    li2('fce-u11-s2-q3', 4, S2_TALK, 'The item people most often regret not bringing is a ___.', ['sleeping bag', 'good sleeping bag'], x(
      '« don’t forget a good sleeping bag. That’s the item people most often regret not bringing ».',
      'كيس النوم هو أكثر ما يندم الناس على عدم إحضاره: «don’t forget a good sleeping bag. That’s the item people most often regret not bringing».',
      '“A good sleeping bag” is what people regret not bringing.',
      '«don’t forget a good sleeping bag. That’s the item people most often regret not bringing».',
    )),
    li2('fce-u11-s2-q4', 4, S2_TALK, 'On the fourth night, the group stays in a ___ in a Berber village.', ['family home'], x(
      '« on the fourth night we stay in a family home in a Berber village » ; les autres nuits, sous la tente.',
      '«on the fourth night we stay in a family home in a Berber village»، أما بقية الليالي ففي الخيام.',
      '“On the fourth night we stay in a family home”.',
      '«on the fourth night we stay in a family home in a Berber village»; las demás noches, en tienda.',
    )),
    li2('fce-u11-s2-q5', 4, S2_TALK, 'When you register, you must pay a ___.', ['deposit'], x(
      '« You’ll need to pay a deposit when you register » ; le reste se paie un mois avant le départ.',
      '«You’ll need to pay a deposit when you register»، والباقي يُدفع قبل الانطلاق بشهر.',
      '“Pay a deposit when you register”.',
      '«You’ll need to pay a deposit when you register»; el resto se paga un mes antes de salir.',
    )),
    li3('fce-u11-s2-q6', 4, S2_SPEAKERS, 'What does Speaker 1 say about their first job?', S2_OPTIONS, 1, x(
      '« I’d assumed it would be boring but easy… Easy, absolutely not » : debout, à porter des caisses → B. Le locuteur est resté jusqu’au bout (pas F).',
      '«I’d assumed it would be boring but easy… Easy, absolutely not»: وقوف طويل وحمل صناديق ← B. وقد بقي المتحدث حتى النهاية (ليس F).',
      '“Easy, absolutely not”: lifting crates all day → B.',
      '«I’d assumed it would be boring but easy… Easy, absolutely not»: de pie, cargando cajas → B. Se quedó hasta el final (no F).',
    )),
    li3('fce-u11-s2-q7', 4, S2_SPEAKERS, 'What does Speaker 2 say about their first job?', S2_OPTIONS, 2, x(
      'La propriétaire, Madame Jaziri : « Twenty years later, I still ask myself her question » → C.',
      'صاحبة المكتبة مدام جزيري: «Twenty years later, I still ask myself her question» ← C.',
      '“Twenty years later, I still ask myself her question” → C.',
      'La dueña, Madame Jaziri: «Twenty years later, I still ask myself her question» → C.',
    )),
    li3('fce-u11-s2-q8', 4, S2_SPEAKERS, 'What does Speaker 3 say about their first job?', S2_OPTIONS, 0, x(
      'Après avoir tout dépensé, « I started putting a bit aside every week » → A (gérer son argent).',
      'بعد أن أنفق كل شيء، «I started putting a bit aside every week» ← A (إدارة المال).',
      'He started “putting a bit aside every week” → A.',
      'Tras gastarlo todo, «I started putting a bit aside every week» → A (administrar el dinero).',
    )),
    li3('fce-u11-s2-q9', 4, S2_SPEAKERS, 'What does Speaker 4 say about their first job?', S2_OPTIONS, 6, x(
      'Des voyageurs en colère : « I learned to stay calm, listen, and find something… that I could actually do for them » → G.',
      'مسافرون غاضبون: «I learned to stay calm, listen, and find something… that I could actually do for them» ← G.',
      'Angry passengers: “I learned to stay calm, listen” → G.',
      'Viajeros enfadados: «I learned to stay calm, listen, and find something… that I could actually do for them» → G.',
    )),
    li3('fce-u11-s2-q10', 4, S2_SPEAKERS, 'What does Speaker 5 say about their first job?', S2_OPTIONS, 4, x(
      '« I realised that this was what I wanted to do with my life. I changed my university application » → E.',
      'اكتشف المتحدث المهنة التي يريدها وغيّر طلب الالتحاق بالجامعة: «I realised that this was what I wanted to do with my life» ← E.',
      'She changed her university plans to work with animals → E.',
      '«I realised that this was what I wanted to do with my life. I changed my university application» → E.',
    )),
  ],
  [
    li2('fce-u11-s3-q1', 5, S3_TALK, 'According to Karima, what spoils a night sky most is ___.', ['light pollution'], x(
      'Piège : « What ruins a night sky isn’t clouds, it’s light pollution ».',
      'فخ: «What ruins a night sky isn’t clouds, it’s light pollution».',
      'Not clouds: “it’s light pollution”.',
      'Trampa: «What ruins a night sky isn’t clouds, it’s light pollution».',
    )),
    li2('fce-u11-s3-q2', 4, S3_TALK, 'Guests are told that their night vision is most likely to be spoilt by their ___.', ['phone screen', 'phone', 'phones', 'phone screens'], x(
      '« the thing most likely to spoil that is your phone screen, so keep it in your pocket ».',
      '«the thing most likely to spoil that is your phone screen, so keep it in your pocket».',
      '“Most likely to spoil that is your phone screen”.',
      '«the thing most likely to spoil that is your phone screen, so keep it in your pocket».',
    )),
    li2('fce-u11-s3-q3', 4, S3_TALK, 'To see where they are walking, guests should use the ___ in their tent.', ['red torch', 'torch'], x(
      '« use the red torch you’ll find in your tent. Red light doesn’t affect your night vision ».',
      '«use the red torch you’ll find in your tent. Red light doesn’t affect your night vision».',
      '“Use the red torch you’ll find in your tent”.',
      '«use the red torch you’ll find in your tent. Red light doesn’t affect your night vision».',
    )),
    li2('fce-u11-s3-q4', 5, S3_TALK, 'What impresses guests most when they look at Saturn is its ___.', ['rings'], x(
      'Piège : on attend « the colour of the planet », mais « what really makes people gasp is seeing its rings ».',
      'فخ: يتوقع الضيوف «the colour of the planet»، لكن «what really makes people gasp is seeing its rings».',
      'Not the colour: “seeing its rings”.',
      'Trampa: se espera «the colour of the planet», pero «what really makes people gasp is seeing its rings».',
    )),
    li2('fce-u11-s3-q5', 4, S3_TALK, 'Because nights are cold, guests should bring a ___ outside, not just a jacket.', ['blanket'], x(
      '« bring a blanket out with you, not just a jacket » : la veste ne suffit pas.',
      '«bring a blanket out with you, not just a jacket»: السترة وحدها لا تكفي.',
      '“Bring a blanket… not just a jacket”.',
      '«bring a blanket out with you, not just a jacket»: la chaqueta no basta.',
    )),
    li3('fce-u11-s3-q6', 4, S3_SPEAKERS, 'What does Speaker 1 say about taking part in a competition?', S3_OPTIONS, 4, x(
      'L’adversaire a gagné facilement, puis « We message each other almost every day now » ; elle viendra à Sousse → E.',
      'فازت المنافسة بسهولة، ثم صارتا صديقتين: «We message each other almost every day now»، وستأتي إلى سوسة ← E.',
      'The opponent won, and now they “message each other almost every day” → E.',
      'Su rival le ganó, y ahora «We message each other almost every day now»; vendrá a Susa → E.',
    )),
    li3('fce-u11-s3-q7', 4, S3_SPEAKERS, 'What does Speaker 2 say about taking part in a competition?', S3_OPTIONS, 0, x(
      'Pour son grand-père : « I only agreed because I couldn’t bear to say no to him » → A.',
      'من أجل جده: «I only agreed because I couldn’t bear to say no to him» ← A.',
      'Agreed only for the grandfather’s sake → A.',
      'Por su abuelo: «I only agreed because I couldn’t bear to say no to him» → A.',
    )),
    li3('fce-u11-s3-q8', 4, S3_SPEAKERS, 'What does Speaker 3 say about taking part in a competition?', S3_OPTIONS, 2, x(
      'L’entraînement : « I loved every minute of it » ; la course : « a bit of an anticlimax » → C.',
      'التدريب: «I loved every minute of it»، أما السباق فـ«a bit of an anticlimax» ← C.',
      'Loved the training; the race was “an anticlimax” → C.',
      'El entrenamiento: «I loved every minute of it»; la carrera: «a bit of an anticlimax» → C.',
    )),
    li3('fce-u11-s3-q9', 5, S3_SPEAKERS, 'What does Speaker 4 say about taking part in a competition?', S3_OPTIONS, 7, x(
      'En économie, le locuteur a compris ce qu’il voulait faire : « I switched to computer science the following September » → H. Ne pas gagner n’est pas la leçon (pas B).',
      'كان المتحدث يدرس الاقتصاد ثم اكتشف ما يريده: «I switched to computer science the following September» ← H. وعدم الفوز ليس هو الدرس (ليس B).',
      'Economics → “switched to computer science” → H.',
      'Estudiaba economía y descubrió su vocación: «I switched to computer science the following September» → H. No ganar no es la lección (no B).',
    )),
    li3('fce-u11-s3-q10', 4, S3_SPEAKERS, 'What does Speaker 5 say about taking part in a competition?', S3_OPTIONS, 5, x(
      'Le locuteur pensait que ce serait comme devant ses amis, mais « my mouth went completely dry… I’d honestly never imagined my body could react like that » → F.',
      'ظنّ المتحدث أن الأمر سيكون كما مع أصدقائه، لكن «my mouth went completely dry… I’d honestly never imagined my body could react like that» ← F.',
      'Dry mouth, forgot the first line: “never imagined” it → F.',
      'Creía que sería como leer ante sus amigos, pero «my mouth went completely dry… I’d honestly never imagined my body could react like that» → F.',
    )),
  ],
);
