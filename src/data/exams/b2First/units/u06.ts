import type { Unit } from '../../../../types';
import { lesson, unit, x } from '../../../curriculum/build';
import { ru5, ru6 } from '../build';

/** Unit fce-u06: Reading Parts 5 and 6, multiple choice and gapped text (cohesion clues). */

const S1_TEXT = `When Yasmine Belhadj opened a repair café in a disused garage in Sfax, most of her neighbours assumed it would close within a month. "People kept asking me where the profit was," she remembers. "I didn't have an answer, because there wasn't one." The idea was simple: once a fortnight, anyone could bring a broken toaster, lamp or bicycle, and volunteers would try to fix it for free while the owner watched and, ideally, learned.

What Yasmine had not expected was how much the visitors would teach each other. Retired electricians found themselves explaining wiring to teenagers, and the teenagers in return showed them how to find spare parts online. "The repairs were almost an excuse," she says. "What people really came for was the conversation."

Not everything went smoothly. In the first winter, the garage roof leaked so badly that two sessions had to be cancelled, and several volunteers drifted away. Yasmine admits she nearly gave up. It was a nine-year-old girl, who arrived with a radio that had belonged to her grandfather, who changed her mind. When the radio finally crackled into life, the girl burst into tears, and so, Yasmine confesses, did half the room.

Today the café has moved to a community hall and runs every Saturday. Yasmine is careful not to exaggerate what it achieves. "We're not going to solve the waste problem on our own," she says. "But every object we save is one less thing in a landfill, and every person who learns to fix something is a little less helpless." She pauses. "That second part matters more to me than the first."`;

const S1_GAPPED = `Last spring, my friend Tomás and I decided to cycle from Marrakech to the Atlantic coast at Essaouira. On paper it looked easy: under 200 kilometres, mostly downhill. (1) We had not taken the wind into account.

From the moment we left the city, a strong westerly wind blew straight into our faces. On the first day we managed only forty kilometres, and by evening our legs were shaking. (2) Instead, we found a small guesthouse in a village whose name I never learned, where the owner served us the best tagine I have ever eaten.

The next morning, Tomás discovered that his back tyre was flat. This was not a disaster in itself. (3) Unfortunately, he had left it on the kitchen table in Marrakech.

Help came from an unexpected direction. A boy of about twelve, who had been watching us from a doorway, disappeared and came back with his uncle, who was carrying a toolbox. (4) Within twenty minutes the tyre was as good as new, and neither of them would accept any money.

We reached Essaouira two days later than planned, sunburnt and exhausted. (5) Looking back, though, those delays gave us the best memories of the whole trip.`;

const S1_SENTENCES = [
  'A. That, at least, was what we told ourselves before we set off.',
  'B. We had planned to camp, but neither of us had the energy to put up the tent.',
  'C. After all, he had packed a repair kit for exactly this situation.',
  'D. Together they patched the inner tube while I held the bike steady.',
  'E. My original plan had been to arrive in time for a music festival, which we missed completely.',
  'F. The village had no shop, and the nearest town was thirty kilometres away.',
  'G. Tomás, meanwhile, had packed far more clothes than he could possibly need.',
];

const S2_TEXT = `When my editor suggested that I spend a month without a smartphone, I laughed. I work as a journalist; my phone is my notebook, my camera, my map and, if I'm honest, my main source of entertainment. But the more I protested, the more I realised that my reaction proved her point.

The first week was harder than I had imagined. I kept reaching into my pocket for something that wasn't there, sometimes dozens of times an hour. Without a map app, I got lost twice in a city I have lived in for eleven years, and I missed a train because I had no idea it had been moved to a different platform. My colleagues found my old-fashioned paper diary hilarious.

Somewhere in the second week, however, something shifted. I began to notice things I had walked past for years: a tiny bookshop near the station, the names of the streets, the faces of the people on the bus. I also slept better, perhaps because I no longer read the news in bed until midnight.

I would love to say that I have given up my phone for good, but that would not be true. When the month ended, I switched it back on within minutes. What has changed is the way I use it. The notifications are off, the phone stays in another room at night, and I have deleted the two apps that used to swallow most of my evenings. It is a compromise, not a revolution. Still, I suspect that is the only kind of change most of us can actually keep.`;

const S2_GAPPED = `In the centre of Rotterdam, on top of a former office building, there is a farm. It produces vegetables, herbs and even honey for local restaurants. (1) Yet projects like this one are becoming more common in cities all over the world.

The advantages are obvious. Food grown on a roof travels a few hundred metres rather than hundreds of kilometres to reach the people who eat it. (2) In summer, they can reduce the temperature inside a building by several degrees, which means less money spent on air conditioning.

There are difficulties, of course. Not every roof is strong enough to carry the weight of wet soil, and strengthening an old building can be expensive. (3) For this reason, many rooftop farms use lightweight systems in which plants grow in water rather than in earth.

The people who run these farms also point to a less obvious benefit. (4) Office workers come up at lunchtime to help with the harvest, and schools bring pupils to see where their food actually comes from.

Nobody claims that rooftop farms will feed an entire city. (5) What they can do, however, is remind people that food does not simply appear on supermarket shelves.`;

const S2_SENTENCES = [
  'A. Ten years ago, most people would have found the idea ridiculous.',
  'B. Green roofs also help to keep buildings cool.',
  'C. Even then, engineers may allow only a thin layer of soil.',
  'D. They have a way of bringing neighbours and colleagues together.',
  'E. The amount they produce is simply too small.',
  'F. Restaurants are usually willing to pay more for such fresh produce.',
  'G. Many of them also sell their vegetables at weekly markets.',
];

const S3_TEXT = `At nineteen, Salma Haddad spends most Sunday mornings being shouted at. She is a youth football referee in Rabat, and she started almost by accident. "My little brother's team arrived for a match one day and the referee never came," she explains. "Somebody had to do it, and I was the only adult there who understood the offside rule."

That first match, she admits, was a disaster. She forgot to start her watch, gave a penalty she still believes was wrong, and spent the second half trying to avoid the eyes of the parents along the touchline. Yet when the coach asked whether she would come back the following week, she heard herself saying yes.

What kept her going was not the football itself so much as the challenge of staying calm. "Players and parents test you all the time," she says. "If you lose your temper, you've lost the match, whatever the score." She now attends a monthly course run by the national federation, where she has learned, among other things, to explain a decision in a few words rather than arguing about it.

The role has changed her in ways she did not anticipate. At university she used to dread speaking in seminars; now, she says, a room of twenty students seems "rather relaxing" compared with two hundred angry spectators.

She is realistic about the future. Few women referee at the top level, and she knows the path is long. "I'm not doing this to become famous," she insists. "I'm doing it because those kids deserve a fair game. And, honestly, I'd miss the shouting."`;

const S3_GAPPED = `The summer I turned eighteen, my uncle offered me a job in his bakery in the old part of Tunis. I accepted immediately, mainly because the pay was good. (1) My shift began at two in the morning, when the rest of the city was asleep.

On my first night, my uncle handed me an apron and pointed at a mountain of dough. (2) He showed me just once how to fold and shape a loaf, then left me to get on with it. My first attempts looked more like stones than bread.

The real problem, though, was not the work but the hours. During the day I could hardly stay awake, and I began cancelling plans with my friends. (3) After a fortnight, I seriously considered telling my uncle that I wanted to stop.

What changed my mind was the customers. At six o'clock, the first of them would arrive: taxi drivers finishing their night, nurses on their way to the hospital, students heading for early lectures. (4) Some of them had been buying their bread there for thirty years, and they knew my uncle's whole family history.

By the end of August, I could shape two hundred loaves an hour without thinking. (5) I still feel guilty if I sleep in the afternoon, but whenever I smell fresh bread, I am back in that hot little room at four in the morning.`;

const S3_SENTENCES = [
  'A. Those were the only hours when the oven was cool enough to clean.',
  'B. Eventually, they simply stopped inviting me.',
  'C. What he had failed to mention was the timetable.',
  'D. More importantly, I had learned to love the strange, quiet world of the night.',
  'E. Luckily, the rest of the class had the same problem.',
  'F. He was not a man who believed in long explanations.',
  'G. Every one of them seemed to have a story to tell.',
];

export const fceU06: Unit = unit(
  {
    id: 'fce-u06',
    emoji: '📖',
    level: 4,
    part: 'RU5 · RU6',
    title: x('Lire : QCM et phrases manquantes', 'القراءة: الاختيار من متعدد والجمل الناقصة', 'Reading: multiple choice and gapped text', 'Lectura: opción múltiple y frases que faltan'),
    subtitle: x('Pronoms, connecteurs et repères de temps', 'الضمائر وأدوات الربط ومؤشرات الزمن', 'Pronouns, linkers and time references', 'Pronombres, conectores y referencias temporales'),
    lesson: lesson(
      x(
        'Répondre aux questions sur un texte (Partie 5) et replacer les phrases manquantes (Partie 6) grâce aux indices de cohésion.',
        'الإجابة عن أسئلة نص (الجزء 5) وإعادة الجمل الناقصة إلى مكانها (الجزء 6) بالاعتماد على مؤشرات الترابط.',
        'Answer questions on a text (Part 5) and put missing sentences back (Part 6) using cohesion clues.',
        'Responder preguntas sobre un texto (Parte 5) y recolocar las frases que faltan (Parte 6) gracias a las pistas de cohesión.',
      ),
      [
        x(
          'Partie 5 : lisez d’abord la question, trouvez le passage concerné, puis comparez chaque option avec le texte. La bonne réponse reformule le texte ; les pièges reprennent ses mots avec un autre sens.',
          'الجزء 5: اقرأ السؤال أولًا، وحدّد المقطع المعني، ثم قارن كل خيار بالنص. الإجابة الصحيحة تعيد صياغة النص، أما الفخاخ فتستعمل كلماته بمعنى آخر.',
          'Part 5: read the question, find the passage, compare each option. The key paraphrases; traps reuse words.',
          'Parte 5: lee primero la pregunta, localiza el pasaje y compara cada opción con el texto. La respuesta correcta lo parafrasea; las trampas repiten sus palabras con otro sentido.',
        ),
        x(
          'Pronoms et démonstratifs (it, they, this, that, these) : ils renvoient à un nom placé juste avant. Vérifiez qu’ils trouvent leur référent dans la phrase précédente.',
          'الضمائر وأسماء الإشارة (it وthey وthis وthat وthese) تحيل إلى اسم سابق مباشرة. تأكد من وجود ما تحيل إليه في الجملة السابقة.',
          'Pronouns (it, they, this, that) must refer back to a noun just before.',
          'Pronombres y demostrativos (it, they, this, that, these): remiten a un sustantivo justo anterior. Comprueba que su referente está en la frase previa.',
        ),
        x(
          'Connecteurs : « however », « yet », « instead » annoncent un contraste ; « also », « too » ajoutent une idée du même type ; « for this reason » introduit une conséquence.',
          'أدوات الربط: «however» و«yet» و«instead» تدل على تناقض، و«also» و«too» تضيف فكرة من النوع نفسه، و«for this reason» تقدّم نتيجة.',
          'Linkers: however/yet/instead = contrast; also/too = addition; for this reason = result.',
          'Conectores: «however», «yet», «instead» anuncian un contraste; «also», «too» añaden una idea del mismo tipo; «for this reason» introduce una consecuencia.',
        ),
        x(
          'Repères de temps et logique du récit (the next morning, before we set off, looking back) : la phrase choisie doit respecter l’ordre des événements. Relisez toujours le texte complet à la fin.',
          'مؤشرات الزمن ومنطق السرد (the next morning وbefore we set off وlooking back): يجب أن تحترم الجملة المختارة ترتيب الأحداث. أعد قراءة النص كاملًا في النهاية.',
          'Time references must fit the order of events; reread the whole text at the end.',
          'Referencias temporales y lógica del relato (the next morning, before we set off, looking back): la frase elegida debe respetar el orden de los hechos. Relee siempre el texto completo al final.',
        ),
      ],
      'He had packed a repair kit for exactly this situation. Unfortunately, he had left it at home.',
      x(
        '« it » renvoie à « a repair kit », et « Unfortunately » marque le contraste avec la phrase précédente.',
        '«it» يحيل إلى «a repair kit»، و«Unfortunately» تدل على التناقض مع الجملة السابقة.',
        '“it” = the repair kit; “Unfortunately” shows the contrast.',
        '«it» remite a «a repair kit», y «Unfortunately» marca el contraste con la frase anterior.',
      ),
    ),
  },
  [
    ru5('fce-u06-s1-q1', 4, S1_TEXT, 'What did Yasmine’s neighbours think when she opened the repair café?', ['It would not last long.', 'It would be popular with retired people.', 'The garage was too small for it.', 'She would need help from the town council.'], x(
      '« most of her neighbours assumed it would close within a month » : ils pensaient que le projet ne durerait pas.',
      '«most of her neighbours assumed it would close within a month»: ظنّوا أن المشروع لن يدوم طويلًا.',
      'They “assumed it would close within a month”.',
      '«most of her neighbours assumed it would close within a month»: creían que el proyecto no duraría.',
    )),
    ru5('fce-u06-s1-q2', 4, S1_TEXT, 'What surprised Yasmine in the early days of the café?', ['Visitors shared their skills with one another.', 'Teenagers were better at repairs than adults.', 'Few people wanted to learn how to fix things.', 'Spare parts were difficult to find.'], x(
      '« What Yasmine had not expected was how much the visitors would teach each other » : les visiteurs s’apprenaient mutuellement des choses.',
      '«What Yasmine had not expected was how much the visitors would teach each other»: كان الزوار يعلّم بعضهم بعضًا.',
      'She had not expected “how much the visitors would teach each other”.',
      '«What Yasmine had not expected was how much the visitors would teach each other»: los visitantes se enseñaban unos a otros.',
    )),
    ru5('fce-u06-s1-q3', 4, S1_TEXT, 'What does Yasmine mean when she says “The repairs were almost an excuse”?', ['The social side of the café mattered more to visitors.', 'Many of the objects could not actually be repaired.', 'The volunteers did not take the work seriously.', 'People invented problems with their devices.'], x(
      'La phrase suivante l’explique : « What people really came for was the conversation ».',
      'الجملة التالية توضّح ذلك: «What people really came for was the conversation».',
      'Next sentence: people “really came for the conversation”.',
      'La frase siguiente lo explica: «What people really came for was the conversation».',
    )),
    ru5('fce-u06-s1-q4', 4, S1_TEXT, 'Why did Yasmine decide not to give up?', ['She was moved by a child’s reaction to a successful repair.', 'The volunteers who had left came back to help.', 'She found a better place for the café.', 'A local radio station offered to support the project.'], x(
      '« It was a nine-year-old girl… who changed her mind » : les larmes de la fillette quand la radio a remarché l’ont touchée.',
      '«It was a nine-year-old girl… who changed her mind»: تأثرت بدموع الطفلة حين عاد الراديو إلى العمل.',
      'A girl crying when her grandfather’s radio worked “changed her mind”.',
      '«It was a nine-year-old girl… who changed her mind»: le conmovieron las lágrimas de la niña cuando la radio volvió a funcionar.',
    )),
    ru5('fce-u06-s1-q5', 4, S1_TEXT, 'According to the last paragraph, what matters most to Yasmine?', ['People becoming more able to help themselves.', 'Reducing the amount of rubbish sent to landfill.', 'Opening the café more often.', 'Making the café bigger than it is now.'], x(
      '« That second part matters more to me » : la seconde partie, c’est que chacun devient « a little less helpless ».',
      '«That second part matters more to me»: الجزء الثاني هو أن يصبح الشخص «a little less helpless».',
      '“That second part” = people becoming “less helpless”.',
      '«That second part matters more to me»: la segunda parte es que cada persona sea «a little less helpless».',
    )),
    ru6('fce-u06-s1-q6', 4, S1_GAPPED, 'Which sentence fits gap 1?', S1_SENTENCES, 0, x(
      '« That » reprend « it looked easy », et la phrase suivante (« We had not taken the wind into account ») montre que c’était une illusion.',
      '«That» يحيل إلى «it looked easy»، والجملة التالية («We had not taken the wind into account») تبيّن أنه كان وهمًا.',
      '“That” = “it looked easy”; the next sentence shows they were wrong.',
      '«That» retoma «it looked easy», y la frase siguiente («We had not taken the wind into account») muestra que era una ilusión.',
    )),
    ru6('fce-u06-s1-q7', 4, S1_GAPPED, 'Which sentence fits gap 2?', S1_SENTENCES, 1, x(
      '« Instead » s’oppose au projet de camper : au lieu de monter la tente, ils trouvent une maison d’hôtes.',
      '«Instead» تقابل خطة التخييم: بدلًا من نصب الخيمة وجدوا دار ضيافة.',
      '“Instead” contrasts with the plan to camp.',
      '«Instead» se opone al plan de acampar: en lugar de montar la tienda, encuentran una casa de huéspedes.',
    )),
    ru6('fce-u06-s1-q8', 4, S1_GAPPED, 'Which sentence fits gap 3?', S1_SENTENCES, 2, x(
      '« it » dans « he had left it » renvoie à « a repair kit », et « Unfortunately » contraste avec « After all ».',
      '«it» في «he had left it» يحيل إلى «a repair kit»، و«Unfortunately» تقابل «After all».',
      '“it” = the repair kit; “Unfortunately” contrasts with it.',
      '«it» en «he had left it» remite a «a repair kit», y «Unfortunately» contrasta con «After all».',
    )),
    ru6('fce-u06-s1-q9', 4, S1_GAPPED, 'Which sentence fits gap 4?', S1_SENTENCES, 3, x(
      '« they » = le garçon et son oncle, qui vient d’arriver avec la boîte à outils ; « neither of them » reprend ensuite ces deux personnes.',
      '«they» = الفتى وعمّه الذي جاء بصندوق الأدوات، ثم تحيل «neither of them» إلى الشخصين نفسيهما.',
      '“they” = the boy and his uncle with the toolbox.',
      '«they» = el chico y su tío, que llega con la caja de herramientas; luego «neither of them» retoma a esas dos personas.',
    )),
    ru6('fce-u06-s1-q10', 4, S1_GAPPED, 'Which sentence fits gap 5?', S1_SENTENCES, 4, x(
      'Arriver deux jours en retard explique le festival manqué ; « though » oppose ensuite ce regret aux bons souvenirs.',
      'الوصول متأخرين يومين يفسّر تفويت المهرجان، ثم تقابل «though» هذا الأسف بالذكريات الجميلة.',
      'Arriving late → missed festival; “though” contrasts it with good memories.',
      'Llegar dos días tarde explica el festival perdido; «though» opone luego esa pena a los buenos recuerdos.',
    )),
  ],
  [
    ru5('fce-u06-s2-q1', 4, S2_TEXT, 'What does the writer mean by “my reaction proved her point”?', ['Her strong objection showed how dependent she was on her phone.', 'Her editor had expected her to refuse.', 'She agreed that journalists use phones too much.', 'She found the idea amusing rather than worrying.'], x(
      'Plus elle protestait (« the more I protested »), plus elle voyait sa dépendance : c’était justement l’argument de sa rédactrice.',
      'كلما احتجّت («the more I protested») أدركت تعلّقها بالهاتف، وهذا بالضبط ما أرادت رئيسة التحرير إثباته.',
      'The more she protested, the clearer her dependence was.',
      'Cuanto más protestaba («the more I protested»), más veía su dependencia: justo lo que quería demostrar su editora.',
    )),
    ru5('fce-u06-s2-q2', 4, S2_TEXT, 'What does the writer say about the first week?', ['She found it difficult to break a habit.', 'Her colleagues offered to help her.', 'She often borrowed other people’s phones.', 'She got lost in a city she did not know.'], x(
      '« I kept reaching into my pocket… dozens of times an hour » : une habitude difficile à perdre. Elle connaît la ville depuis onze ans.',
      '«I kept reaching into my pocket… dozens of times an hour»: عادة يصعب التخلص منها. وهي تعرف المدينة منذ إحدى عشرة سنة.',
      'She “kept reaching into her pocket”: a hard habit to break.',
      '«I kept reaching into my pocket… dozens of times an hour»: un hábito difícil de dejar. Conoce la ciudad desde hace once años.',
    )),
    ru5('fce-u06-s2-q3', 4, S2_TEXT, 'Why does the writer think she slept better?', ['She stopped reading the news late at night.', 'She was more tired from walking.', 'She was less worried about her work.', 'She went to bed earlier than before.'], x(
      '« perhaps because I no longer read the news in bed until midnight ».',
      'نامت أفضل لأنها توقفت عن قراءة الأخبار في السرير: «perhaps because I no longer read the news in bed until midnight».',
      'She “no longer read the news in bed until midnight”.',
      '«perhaps because I no longer read the news in bed until midnight».',
    )),
    ru5('fce-u06-s2-q4', 4, S2_TEXT, 'What does “it” refer to in “I switched it back on within minutes”?', ['Her phone', 'The notifications', 'Her paper diary', 'The news'], x(
      'La phrase précédente parle de « given up my phone » : « it » reprend le téléphone, seul nom singulier qu’on rallume.',
      'الجملة السابقة تتحدث عن «given up my phone»، فـ«it» يحيل إلى الهاتف، وهو الاسم المفرد الوحيد الذي يُعاد تشغيله.',
      '“it” refers back to “my phone” in the previous sentence.',
      'La frase anterior habla de «given up my phone»: «it» retoma el teléfono, el único sustantivo singular que se vuelve a encender.',
    )),
    ru5('fce-u06-s2-q5', 4, S2_TEXT, 'How does the writer feel about the changes she has made?', ['They are modest but realistic.', 'They have completely transformed her life.', 'They are unlikely to last.', 'They have made her job harder.'], x(
      '« a compromise, not a revolution », mais « the only kind of change most of us can actually keep » : modeste et durable.',
      '«a compromise, not a revolution» لكنه «the only kind of change most of us can actually keep»: تغيير متواضع وواقعي.',
      '“A compromise, not a revolution”, but one people “can actually keep”.',
      '«a compromise, not a revolution», pero «the only kind of change most of us can actually keep»: modesto y realista.',
    )),
    ru6('fce-u06-s2-q6', 4, S2_GAPPED, 'Which sentence fits gap 1?', S2_SENTENCES, 0, x(
      '« the idea » reprend la ferme sur un toit, et « Yet » oppose « ridiculous » à « becoming more common ».',
      '«the idea» تحيل إلى المزرعة فوق السطح، و«Yet» تقابل «ridiculous» بـ«becoming more common».',
      '“the idea” = a roof farm; “Yet” contrasts “ridiculous” with “more common”.',
      '«the idea» retoma la granja en un tejado, y «Yet» opone «ridiculous» a «becoming more common».',
    )),
    ru6('fce-u06-s2-q7', 4, S2_GAPPED, 'Which sentence fits gap 2?', S2_SENTENCES, 1, x(
      '« also » ajoute un deuxième avantage, et « they » dans la phrase suivante renvoie à « Green roofs » qui rafraîchissent les bâtiments.',
      '«also» تضيف فائدة ثانية، و«they» في الجملة التالية تحيل إلى «Green roofs» التي تبرّد المباني.',
      '“also” adds an advantage; “they” = green roofs that cool buildings.',
      '«also» añade una segunda ventaja, y «they» en la frase siguiente remite a «Green roofs», que refrescan los edificios.',
    )),
    ru6('fce-u06-s2-q8', 4, S2_GAPPED, 'Which sentence fits gap 3?', S2_SENTENCES, 2, x(
      '« Even then » = même après le renforcement ; une couche de terre mince explique « For this reason… lightweight systems ».',
      '«Even then» = حتى بعد التقوية؛ وطبقة التربة الرقيقة تفسّر «For this reason… lightweight systems».',
      'Only a thin layer of soil → “For this reason”, lightweight systems.',
      '«Even then» = incluso tras el refuerzo; una capa fina de tierra explica «For this reason… lightweight systems».',
    )),
    ru6('fce-u06-s2-q9', 4, S2_GAPPED, 'Which sentence fits gap 4?', S2_SENTENCES, 3, x(
      'La phrase présente le « less obvious benefit » (rapprocher les gens), illustré ensuite par les employés et les écoles.',
      'الجملة تقدّم «less obvious benefit» (جمع الناس)، ثم يأتي المثالان: الموظفون والمدارس.',
      'It names the “less obvious benefit”, then examples follow.',
      'La frase presenta el «less obvious benefit» (unir a la gente), ilustrado luego con los empleados y los colegios.',
    )),
    ru6('fce-u06-s2-q10', 4, S2_GAPPED, 'Which sentence fits gap 5?', S2_SENTENCES, 4, x(
      'La production trop faible explique pourquoi elles ne nourriront pas une ville ; « however » introduit ensuite ce qu’elles peuvent faire.',
      'الإنتاج الضئيل يفسّر لماذا لن تُطعم مدينة كاملة، ثم تقدّم «however» ما يمكنها فعله.',
      'Too small an amount → cannot feed a city; “however” → what they can do.',
      'La producción demasiado pequeña explica por qué no alimentarán una ciudad; «however» introduce luego lo que sí pueden hacer.',
    )),
  ],
  [
    ru5('fce-u06-s3-q1', 4, S3_TEXT, 'How did Salma begin refereeing?', ['She stepped in when the official referee did not appear.', 'Her brother’s coach asked her to train as a referee.', 'She wanted to understand the offside rule better.', 'She used to play in her brother’s team.'], x(
      '« the referee never came… Somebody had to do it » : elle a remplacé l’arbitre absent.',
      '«the referee never came… Somebody had to do it»: حلّت محلّ الحكم الغائب.',
      'The referee “never came” and “somebody had to do it”.',
      '«the referee never came… Somebody had to do it»: sustituyó al árbitro ausente.',
    )),
    ru5('fce-u06-s3-q2', 4, S3_TEXT, 'What is surprising about Salma’s reaction to her first match?', ['She agreed to return although it had gone badly.', 'She thought the parents had treated her unfairly.', 'She asked the coach for advice about the penalty.', 'She believed she had made no serious mistakes.'], x(
      '« Yet » oppose le match raté (« a disaster ») à sa réponse : « she heard herself saying yes ».',
      '«Yet» تقابل المباراة الفاشلة («a disaster») بجوابها: «she heard herself saying yes».',
      '“Yet” contrasts “a disaster” with her saying yes.',
      '«Yet» opone el partido fallido («a disaster») a su respuesta: «she heard herself saying yes».',
    )),
    ru5('fce-u06-s3-q3', 4, S3_TEXT, 'According to Salma, what matters most for a referee?', ['Keeping control of your emotions.', 'Knowing every rule perfectly.', 'Being fit enough to follow the play.', 'Explaining each decision in detail.'], x(
      '« the challenge of staying calm… If you lose your temper, you’ve lost the match ». Le piège « in detail » contredit « in a few words ».',
      '«the challenge of staying calm… If you lose your temper, you’ve lost the match». والفخ «in detail» يناقض «in a few words».',
      'Staying calm: “If you lose your temper, you’ve lost the match”.',
      '«the challenge of staying calm… If you lose your temper, you’ve lost the match». La trampa «in detail» contradice «in a few words».',
    )),
    ru5('fce-u06-s3-q4', 5, S3_TEXT, 'Why does Salma now describe a seminar as “rather relaxing”?', ['Speaking in front of others no longer frightens her as it once did.', 'She prefers her studies to refereeing.', 'Her fellow students are calmer than she used to think.', 'She spends less time preparing for her seminars.'], x(
      '« she used to dread speaking in seminars » ; comparé à « two hundred angry spectators », parler en public ne lui fait plus peur.',
      '«she used to dread speaking in seminars»، ومقارنةً بـ«two hundred angry spectators» لم تعد تخاف من الكلام أمام الناس.',
      'She “used to dread speaking”; now it seems easy by comparison.',
      '«she used to dread speaking in seminars»; comparado con «two hundred angry spectators», hablar en público ya no le da miedo.',
    )),
    ru5('fce-u06-s3-q5', 5, S3_TEXT, 'What does the last paragraph show about Salma?', ['She is motivated by fairness rather than ambition.', 'She expects to referee at the top level soon.', 'She finds the shouting the hardest part of the job.', 'She thinks women should not have to wait so long for success.'], x(
      '« I’m not doing this to become famous… those kids deserve a fair game » : la justice, pas l’ambition.',
      '«I’m not doing this to become famous… those kids deserve a fair game»: الدافع هو العدل لا الطموح.',
      'Not “to become famous” but because kids “deserve a fair game”.',
      '«I’m not doing this to become famous… those kids deserve a fair game»: la justicia, no la ambición.',
    )),
    ru6('fce-u06-s3-q6', 4, S3_GAPPED, 'Which sentence fits gap 1?', S3_SENTENCES, 2, x(
      '« he » = l’oncle, et « the timetable » est précisé juste après : « My shift began at two in the morning ».',
      '«he» = العمّ، و«the timetable» يتّضح مباشرة بعدها: «My shift began at two in the morning».',
      '“he” = the uncle; “the timetable” is explained next: a 2 a.m. start.',
      '«he» = el tío, y «the timetable» se aclara justo después: «My shift began at two in the morning».',
    )),
    ru6('fce-u06-s3-q7', 4, S3_GAPPED, 'Which sentence fits gap 2?', S3_SENTENCES, 5, x(
      '« long explanations » prépare « He showed me just once… then left me to get on with it ».',
      '«long explanations» تمهّد لـ«He showed me just once… then left me to get on with it».',
      'No long explanations → he showed her “just once”.',
      '«long explanations» prepara «He showed me just once… then left me to get on with it».',
    )),
    ru6('fce-u06-s3-q8', 5, S3_GAPPED, 'Which sentence fits gap 3?', S3_SENTENCES, 1, x(
      '« they » = « my friends » : à force d’annulations, ils ne l’invitent plus. « Eventually » suit « I began cancelling plans ».',
      '«they» = «my friends»: بعد كثرة الإلغاء توقفوا عن دعوته. و«Eventually» تأتي بعد «I began cancelling plans».',
      '“they” = his friends, after he kept cancelling plans.',
      '«they» = «my friends»: tras tantas cancelaciones, dejan de invitarlo. «Eventually» sigue a «I began cancelling plans».',
    )),
    ru6('fce-u06-s3-q9', 4, S3_GAPPED, 'Which sentence fits gap 4?', S3_SENTENCES, 6, x(
      '« them » = les clients énumérés juste avant ; « a story to tell » est illustré par « Some of them… thirty years ».',
      '«them» = الزبائن المذكورون قبلها، و«a story to tell» يوضّحها «Some of them… thirty years».',
      '“them” = the customers; “Some of them…” gives the stories.',
      '«them» = los clientes enumerados justo antes; «a story to tell» se ilustra con «Some of them… thirty years».',
    )),
    ru6('fce-u06-s3-q10', 4, S3_GAPPED, 'Which sentence fits gap 5?', S3_SENTENCES, 3, x(
      '« More importantly » ajoute un acquis plus profond que la technique (two hundred loaves) ; « the night » annonce le souvenir de « four in the morning ».',
      '«More importantly» تضيف مكسبًا أعمق من المهارة (two hundred loaves)، و«the night» تمهّد لذكرى «four in the morning».',
      '“More importantly” adds to the skill; “the night” links to the memory.',
      '«More importantly» añade un logro más profundo que la técnica (two hundred loaves); «the night» anuncia el recuerdo de «four in the morning».',
    )),
  ],
);
