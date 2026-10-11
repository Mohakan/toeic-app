import type { MockTest } from '../../../../types';
import { x } from '../../../curriculum/build';
import { b2Mock, li1, li2, li3, li4, ru1, ru2, ru3, ru4, ru5, ru6, ru7 } from '../build';

/**
 * Mini mock test fce-mini-1 (docs/multi-examens/b2-contenu.md).
 * Topics: urban farming, volunteering, e-sports, a museum, community gardens, city bees.
 */

// RU1: urban farming.
const RU1_TEXT = `Five years ago, the flat roof of a car park in central Lyon was nothing but bare concrete. Today it (1) ___ host to a thriving vegetable farm. The project was started by a group of students who wanted to (2) ___ public attention to how far most food travels before it reaches our plates. At first, many neighbours were doubtful, but the farm soon (3) ___ a reputation for excellent tomatoes. Local restaurants now buy almost everything it grows, and the students have even had to (4) ___ down offers from supermarkets.`;

// RU2: volunteering.
const RU2_TEXT = `When Amira signed up to volunteer at a wildlife centre in Tunisia, she had no idea (1) ___ much the experience would change her. Her day started at six, feeding animals that had been injured by cars or fishing nets. ‘It was exhausting, but I loved every minute (2) ___ it,’ she says. The centre relies entirely (3) ___ donations and volunteers. (4) ___ Amira had planned to stay for two weeks, she ended up staying three months.`;

// RU5: e-sports.
const RU5_TEXT = `When nineteen-year-old Karim Haddad told his parents he wanted to become a professional video gamer, they assumed it was a phase. Three years later, he trains six hours a day with a team based in Marseille, has a coach, a nutritionist and a sports psychologist, and earns more than his older sister, who is a qualified nurse. ‘They’ve stopped asking when I’m going to get a real job,’ he jokes.

Karim’s story is becoming less unusual. Competitive gaming, or e-sports, now fills stadiums, and some universities offer scholarships to talented players. Yet Karim is quick to point out that the glamorous image hides a harder reality. ‘People see the trophies and the prize money, but not the hours of repetition or the pressure of performing in front of thousands of people. Most of the players I started with have already given up.’

What surprised him most was how physical the job is. ‘I used to think fitness had nothing to do with gaming. Now I run every morning, because if your body is tired, your reactions are slower. A tenth of a second can decide a match.’ His team also has strict rules about sleep and screen time outside training, which Karim admits he found hard to accept at first.

Careers in e-sports are short: many players retire before thirty, when their reflexes start to decline. Karim is not worried. He has started an online course in sports management and hopes to stay in the industry as a coach. ‘Gaming taught me discipline,’ he says. ‘That will be useful whatever I do next.’`;

// RU6: a museum.
const RU6_TEXT = `The new Museum of the Sea in Essaouira opened last spring, and it is unlike any museum I have visited. (1) ___ Instead, visitors are invited to touch, listen and even smell. In one room, you can hold a real fishing net and feel how heavy it becomes when it is wet; in another, you can sit in a wooden boat while recorded waves crash around you.

The idea came from Nadia Benali, a fisherman’s daughter who became a marine biologist. (2) ___ ‘I wanted children who had never been on a boat to understand what my father did every day,’ she explains. Her team spent two years interviewing local fishermen and recording their stories, which now play quietly in a dark corridor at the end of the visit.

Not everything works perfectly. The interactive screens on the first floor were often out of order during my visit, and the café is far too small for the number of visitors. (3) ___ Still, these are minor problems for a museum that is barely a year old.`;
const RU6_SENTENCES = [
  'A The museum’s collection of old maps is said to be the largest in the country.',
  'B There are almost no glass cases, and hardly any signs telling you to keep your hands off the exhibits.',
  'C On a busy Saturday, I queued for twenty minutes just to buy a glass of mint tea.',
  'D Tickets are free for local schools on weekday mornings.',
  'E As a child, she was frustrated that museums treated the sea as something to look at rather than experience.',
  'F The building itself used to be a warehouse where fish was stored before being sent to Casablanca.',
];

// RU7: community gardens.
const RU7_TEXT = `Four members of community gardens talk about what gardening means to them.

A — Lina, Rotterdam
I joined the garden because my flat doesn’t even have a balcony, and I’d never grown anything in my life. The older members were incredibly patient with me. What I didn’t expect was how much I would learn about my neighbours’ home countries through the vegetables they planted and the dishes they cooked with them.

B — Tomás, Seville
For me it’s mainly about the environment. We collect rainwater and turn the waste from the local market into compost. I love the work itself, but I sometimes get frustrated: with forty members who all have an opinion, a meeting to decide where to put a new bench can last all evening.

C — Yasmine, Rabat
I’m a nurse and I often work nights, so the garden is where I switch off. I go in the early morning, when nobody else is there yet. To be honest, I don’t care much whether the harvest is good or bad; it’s the silence I come for.

D — Erik, Oslo
Our growing season is very short, so we built a greenhouse out of old windows. I teach physics, and I designed it with my students; it turned into a project for the whole school. Now the teenagers sell herbs from it to pay for their class trips.`;
const RU7_SECTIONS = ['A', 'B', 'C', 'D'];

// LI1: four short extracts.
const LI1_FESTIVAL = `W: Are you still coming to the jazz festival on Saturday?
M: Definitely. Shall we meet at the main gate at seven? The first band doesn’t start until half past.
W: Could we make it six instead? I know it sounds early, but the seats aren’t numbered, and last year we ended up standing right at the back. I’d really like to sit somewhere near the stage this time.
M: Fair enough. I’ll bring some sandwiches, then, since we’ll be waiting a while.
W: Great. I’ll bring the drinks.`;
const LI1_MARATHON = `Everyone told me the last ten kilometres would be the hardest, so I’d prepared myself for that. In fact, I felt fine right up to the finish line. What nearly made me give up came much earlier, at around kilometre twelve, when it suddenly started pouring with rain and my shoes got heavier with every step. I seriously thought about stopping at the next drinks station. Then a woman next to me started singing, and half the runners around us joined in. Silly, really, but it got me through.`;
const LI1_PROJECT = `M: Have you seen the feedback on our history project?
W: Yes, we got a B. I was hoping for better, to be honest.
M: Me too, but look at the comments. The teacher liked the research; it’s the presentation she criticised. She says we read from our notes the whole time.
W: Well, she’s right. We spent so long on the research that we didn’t leave any time to practise speaking.
M: So next time we need to plan our time better, not work harder.
W: Exactly.`;
const LI1_MESSAGE = `Hi Omar, it’s Selma. I know we said we’d go climbing tomorrow, and I’m still really keen. It’s just that the forecast says it’ll get very windy in the mountains in the afternoon, so I wondered if we could set off at eight rather than eleven. I’ll understand if that’s too early after your night shift. If it is, we could always go to the indoor climbing wall in town instead. Anyway, let me know either way.`;

// LI2: city bees.
const LI2_TALK = `Hello everyone, I’m Inès, and I look after the bees on the roof of the city library. The project started four years ago with just two hives; today we have eleven. People often ask whether the bees are dangerous for readers. In fact, the hives are placed behind a high wall, so the bees fly up and away from the building, and nobody has ever been stung. City bees actually do surprisingly well, because parks and balconies offer a huge variety of flowers, and fewer chemicals are used than on farms. Last summer we collected around ninety kilos of honey, which is sold in the library shop, and all the money goes towards buying children’s books. If you’d like to get involved, we run a beginners’ course every spring. The only thing you need to bring is a pair of gloves; we provide the protective suits.`;

// LI3: volunteering.
const LI3_SCRIPT = `Speaker 1: I signed up to help at the food bank for two hours on Saturday mornings. But there was always something else to do: a delivery arriving late, shelves to restock, boxes to carry. I usually got home at dinner time. Not that I minded, but my weekends just disappeared.
Speaker 2: I’d been planning to study law, but after a summer at the animal shelter I realised I wanted to work with animals. I’m now in my second year at veterinary school, and I’ve never regretted the change.
Speaker 3: As a volunteer guide at the castle, I had to explain its history to groups of thirty strangers. The first week my voice was shaking, but by August I was making jokes in front of the crowds. I’m far less nervous about presentations at university now.
Speaker 4: I joined a beach clean-up group, but nobody seemed to know who was in charge. We’d turn up and there would be no bags, or two groups would clean the same beach. I gave up after a month, which is a shame, because the cause really matters.
Speaker 5: I answered phones for a charity helpline. Some callers were angry before I’d even said hello. I learnt to stay calm, let them speak and not take it personally, which has helped me a lot in my part-time job in a shop.`;
const LI3_OPTIONS = [
  'A I made friends I wouldn’t otherwise have met.',
  'B It helped me choose a career.',
  'C It took up more time than I had expected.',
  'D I learnt how to deal with difficult people.',
  'E I was disappointed by the way it was organised.',
  'F It made me more confident about speaking in public.',
];

// LI4: an exhibition designer.
const LI4_INTERVIEW = `Interviewer: Today I’m talking to Sofia Reyes, who designs exhibitions for children at a science museum in Valencia. Sofia, how did you get into this job?
Sofia: Almost by accident. I studied architecture, and I was working for a company that designed shops. A friend at the museum needed someone to plan the layout of a temporary exhibition, so I helped out at weekends. I enjoyed it so much that when a permanent job came up, I applied straight away.
Interviewer: What’s the biggest challenge in designing for children?
Sofia: People assume it’s keeping them interested, but children are naturally curious. The real difficulty is the adults. Parents tend to rush from one room to the next, reading every sign aloud, and the children never get time to actually play with anything. So now we put benches for parents next to each activity, to encourage them to slow down.
Interviewer: Do you test your ideas before an exhibition opens?
Sofia: Always. We invite a class from a local school and simply watch. We don’t ask the children what they think, because they’d only tell us what they think we want to hear. Their behaviour tells us much more: where they stop, what they ignore, what they argue over.
Interviewer: And what’s next for you?
Sofia: An exhibition about water, which opens in March. I’m especially proud of a giant tap that children can turn to see how much water a shower uses.`;

export const fceMini1: MockTest = b2Mock(
  'fce-mini-1',
  'mini',
  45,
  x('B2 First blanc mini n° 1', 'اختبار B2 First تجريبي مصغّر رقم 1', 'Mini practice test 1', 'B2 First de práctica mini n.º 1'),
  [
    // ── Reading and Use of English Part 1 ──
    ru1('fce-m1-ru1-1', 4, 'Gap (1): Today it ___ host to a thriving vegetable farm.', ['plays', 'makes', 'gives', 'holds'], x(
      'Expression figée « play host to » = accueillir, abriter. Les autres verbes ne se combinent pas avec « host to ».',
      'التعبير الثابت «play host to» يعني «يستضيف». الأفعال الأخرى لا تُستعمل مع «host to».',
      'Fixed phrase: “play host to” = be the place where something happens.',
      'Expresión fija «play host to» = albergar, acoger. Los otros verbos no se combinan con «host to».',
    ), RU1_TEXT),
    ru1('fce-m1-ru1-2', 4, 'Gap (2): The project was started by a group of students who wanted to ___ public attention to how far most food travels before it reaches our plates.', ['draw', 'pay', 'catch', 'hold'], x(
      'Collocation « draw (public) attention to sth » = attirer l’attention sur. « Pay attention » signifie « faire attention soi-même » et ne prend pas de complément « public attention to ».',
      'المتلازمة «draw attention to» تعني «يلفت الانتباه إلى». أما «pay attention» فتعني أن ينتبه الشخص بنفسه، ولا تُستعمل مع «public attention to».',
      'Collocation: “draw attention to” something.',
      'Colocación «draw (public) attention to» = llamar la atención sobre. «Pay attention» es «prestar atención uno mismo».',
    ), RU1_TEXT),
    ru1('fce-m1-ru1-3', 4, 'Gap (3): At first, many neighbours were doubtful, but the farm soon ___ a reputation for excellent tomatoes.', ['earned', 'achieved', 'deserved', 'reached'], x(
      'Collocation « earn a reputation for » = se faire une réputation grâce à. « Deserve » = mériter (sans idée d’obtenir), « reach » s’emploie pour un niveau ou un lieu.',
      'المتلازمة «earn a reputation for» تعني «اكتسب سمعة بفضل». أما «deserve» فتعني «استحق» دون حصول فعلي، و«reach» تُستعمل لمستوى أو مكان.',
      'Collocation: “earn a reputation for” something.',
      'Colocación «earn a reputation for» = ganarse una reputación. «Deserve» = merecer, «reach» se usa con un nivel o un lugar.',
    ), RU1_TEXT),
    ru1('fce-m1-ru1-4', 3, 'Gap (4): Local restaurants now buy almost everything it grows, and the students have even had to ___ down offers from supermarkets.', ['turn', 'put', 'let', 'set'], x(
      'Verbe à particule « turn down an offer » = refuser une offre. « Put down », « let down » (décevoir) et « set down » n’ont pas ce sens.',
      'الفعل المركب «turn down an offer» يعني «يرفض عرضًا». أما «put down» و«let down» (يخيّب الظن) و«set down» فلا تحمل هذا المعنى.',
      'Phrasal verb: “turn down” an offer = refuse it.',
      'Phrasal verb «turn down an offer» = rechazar una oferta. «Let down» significa «decepcionar».',
    ), RU1_TEXT),

    // ── Part 2 ──
    ru2('fce-m1-ru2-1', 4, 'Gap (1): When Amira signed up to volunteer at a wildlife centre in Tunisia, she had no idea ___ much the experience would change her.', ['how'], x(
      '« Have no idea how much… » : question indirecte introduite par « how » devant « much ».',
      '«have no idea how much…»: سؤال غير مباشر يبدأ بـ«how» قبل «much».',
      'Indirect question: “no idea how much…”.',
      '«Have no idea how much…»: pregunta indirecta introducida por «how» delante de «much».',
    ), RU2_TEXT),
    ru2('fce-m1-ru2-2', 3, 'Gap (2): ‘It was exhausting, but I loved every minute ___ it,’ she says.', ['of'], x(
      'Expression « every minute of it » : « every minute » + « of » + pronom.',
      'التعبير «every minute of it»: «every minute» + «of» + ضمير.',
      'Fixed phrase: “every minute of it”.',
      'Expresión «every minute of it»: «every minute» + «of» + pronombre.',
    ), RU2_TEXT),
    ru2('fce-m1-ru2-3', 3, 'Gap (3): The centre relies entirely ___ donations and volunteers.', ['on', 'upon'], x(
      'Le verbe « rely » se construit avec « on » (ou « upon », plus soutenu).',
      'الفعل «rely» يُستعمل مع حرف الجر «on» (أو «upon» في الأسلوب الرسمي).',
      'Dependent preposition: “rely on / upon”.',
      'El verbo «rely» va con «on» (o «upon», más formal).',
    ), RU2_TEXT),
    ru2('fce-m1-ru2-4', 4, 'Gap (4): ___ Amira had planned to stay for two weeks, she ended up staying three months.', ['Although', 'Though', 'While', 'Whilst'], x(
      'Opposition entre le projet (deux semaines) et la réalité (trois mois) → connecteur de concession : « Although » (ou « Though », « While »).',
      'تعارض بين الخطة (أسبوعان) والواقع (ثلاثة أشهر) ← أداة تعارض: «Although» (أو «Though» أو «While»).',
      'Contrast between plan and result → “Although”.',
      'Contraste entre el plan (dos semanas) y la realidad (tres meses) → conector concesivo: «Although» (o «Though», «While»).',
    ), RU2_TEXT),

    // ── Part 3 ──
    ru3('fce-m1-ru3-1', 3, 'The city council has finally approved the ___ of a new cycle lane along the river.', 'CONSTRUCT', ['construction'], x(
      'Après « the » et avant « of », il faut un nom : « construction ».',
      'بعد «the» وقبل «of» نحتاج إلى اسم: «construction».',
      '“the ___ of” needs a noun: construction.',
      'Entre «the» y «of» hace falta un sustantivo: «construction».',
    )),
    ru3('fce-m1-ru3-2', 4, 'Many fans found the band’s latest album rather ___ compared with their earlier work.', 'DISAPPOINT', ['disappointing'], x(
      '« Find sth + adjectif » : l’album provoque la déception → adjectif en -ing « disappointing » (les fans, eux, sont « disappointed »).',
      'التركيب «find sth + صفة»: الألبوم يسبب الخيبة ← صفة بـ-ing: «disappointing» (أما المعجبون فهم «disappointed»).',
      'The album causes the feeling → -ing adjective.',
      '«Find algo + adjetivo»: el álbum causa la decepción → adjetivo en -ing «disappointing».',
    )),
    ru3('fce-m1-ru3-3', 4, 'It is ___ to drive in the old town, where the streets are far too narrow for cars.', 'POSSIBLE', ['impossible'], x(
      'Les rues sont « far too narrow for cars » → sens négatif : préfixe « im- » → « impossible ».',
      'الشوارع «far too narrow for cars» ← معنى منفي: البادئة «im-» ← «impossible».',
      '“far too narrow” → negative prefix: impossible.',
      'Las calles son «far too narrow for cars» → sentido negativo: prefijo «im-» → «impossible».',
    )),
    ru3('fce-m1-ru3-4', 5, 'Sami’s ___ to help others made him the obvious choice for team captain.', 'WILLING', ['willingness'], x(
      'Après le possessif « Sami’s », il faut un nom : « willingness » (suffixe -ness).',
      'بعد صيغة الملكية «Sami’s» نحتاج إلى اسم: «willingness» (اللاحقة -ness).',
      'After a possessive, a noun: willingness.',
      'Tras el posesivo «Sami’s» hace falta un sustantivo: «willingness» (sufijo -ness).',
    )),

    // ── Part 4 ──
    ru4('fce-m1-ru4-1', 4, 'It’s a long time since I last went to a concert.', 'BEEN', 'I ___ to a concert for a long time.', ["haven't been", 'have not been'], x(
      '« It’s a long time since I last… » = « I haven’t + participe + for a long time » : present perfect négatif avec « been to ».',
      '«It’s a long time since I last…» = «I haven’t been… for a long time»: المضارع التام المنفي مع «been to».',
      'Present perfect negative + “for a long time”.',
      '«It’s a long time since I last…» = «I haven’t been… for a long time»: present perfect negativo con «been to».',
    )),
    ru4('fce-m1-ru4-2', 4, '‘Don’t forget to bring your passport,’ Leila’s mother told her.', 'REMINDED', 'Leila’s mother ___ her passport.', ['reminded her to bring', 'reminded Leila to bring'], x(
      'Discours rapporté : « remind sb to do sth » remplace « Don’t forget to… ».',
      'الكلام المنقول: «remind sb to do sth» يحل محل «Don’t forget to…».',
      '“Don’t forget to…” → remind sb to do sth.',
      'Estilo indirecto: «remind sb to do sth» sustituye a «Don’t forget to…».',
    )),
    ru4('fce-m1-ru4-3', 4, 'I regret not studying harder for my exams.', 'WISH', 'I ___ harder for my exams.', ['wish I had studied', "wish I'd studied"], x(
      'Regret sur le passé : « wish + past perfect » → « wish I had studied ».',
      'الندم على الماضي: «wish + الماضي التام» ← «wish I had studied».',
      'Past regret: wish + past perfect.',
      'Lamento sobre el pasado: «wish + past perfect» → «wish I had studied».',
    )),

    // ── Part 5 ──
    ru5('fce-m1-ru5-1', 4, RU5_TEXT, 'What does Karim suggest about his parents’ attitude now?', ['They have accepted his career choice.', 'They still hope he will train as a nurse.', 'They are proud that he earns more than his sister.', 'They think he should find a more secure job.'], x(
      '« They’ve stopped asking when I’m going to get a real job » : ses parents ont accepté son choix.',
      '«They’ve stopped asking when I’m going to get a real job»: أي أن والديه تقبّلا اختياره المهني.',
      '“They’ve stopped asking when I’m going to get a real job.”',
      '«They’ve stopped asking when I’m going to get a real job»: sus padres han aceptado su elección.',
    )),
    ru5('fce-m1-ru5-2', 4, RU5_TEXT, 'In the second paragraph, Karim says that people outside e-sports', ['underestimate how demanding the work is.', 'believe players are paid too much.', 'think universities should not support gaming.', 'expect players to give up quickly.'], x(
      '« The glamorous image hides a harder reality… not the hours of repetition or the pressure » : le public sous-estime la difficulté du métier.',
      '«The glamorous image hides a harder reality… not the hours of repetition or the pressure»: الناس يستهينون بصعوبة هذا العمل.',
      'People see trophies, “not the hours of repetition or the pressure”.',
      '«The glamorous image hides a harder reality… not the hours of repetition or the pressure»: la gente subestima lo exigente que es.',
    )),
    ru5('fce-m1-ru5-3', 4, RU5_TEXT, 'Why does Karim go running every morning?', ['It helps him react faster during matches.', 'His team’s rules require it.', 'It reduces the stress of playing in public.', 'He is preparing for a career in another sport.'], x(
      '« If your body is tired, your reactions are slower » : il court pour garder des réflexes rapides. Les règles de l’équipe concernent le sommeil et les écrans, pas la course.',
      '«If your body is tired, your reactions are slower»: يجري ليحافظ على سرعة ردود أفعاله. أما قواعد الفريق فتخص النوم والشاشات لا الجري.',
      '“If your body is tired, your reactions are slower.”',
      '«If your body is tired, your reactions are slower»: corre para reaccionar más rápido. Las reglas del equipo tratan del sueño y las pantallas.',
    )),

    // ── Part 6 ──
    ru6('fce-m1-ru6-1', 4, RU6_TEXT, 'Which sentence fits gap 1?', RU6_SENTENCES, 1, x(
      '« Instead, visitors are invited to touch » répond à l’absence de vitrines et de panneaux « ne pas toucher » de la phrase B.',
      'عبارة «Instead, visitors are invited to touch» تأتي ردًّا على غياب الواجهات الزجاجية ولافتات منع اللمس في الجملة B.',
      'B (no glass cases) is answered by “Instead, … touch”.',
      '«Instead, visitors are invited to touch» responde a la ausencia de vitrinas y de carteles de «no tocar» de la frase B.',
    )),
    ru6('fce-m1-ru6-2', 4, RU6_TEXT, 'Which sentence fits gap 2?', RU6_SENTENCES, 4, x(
      'La phrase E (« As a child, she was frustrated… ») explique l’origine de l’idée et prépare la citation « I wanted children… to understand ».',
      'الجملة E («As a child, she was frustrated…») تشرح أصل الفكرة وتمهّد للاقتباس «I wanted children… to understand».',
      'E explains her motivation before the quotation.',
      'La frase E («As a child, she was frustrated…») explica el origen de la idea y prepara la cita «I wanted children… to understand».',
    )),
    ru6('fce-m1-ru6-3', 4, RU6_TEXT, 'Which sentence fits gap 3?', RU6_SENTENCES, 2, x(
      'La phrase C illustre le problème du café « far too small » (vingt minutes de queue), et « Still, these are minor problems » la suit naturellement.',
      'الجملة C تمثّل لمشكلة المقهى «far too small» (طابور عشرين دقيقة)، وتليها بشكل طبيعي «Still, these are minor problems».',
      'C gives an example of the café being too small.',
      'La frase C ilustra el problema de la cafetería «far too small» (veinte minutos de cola), y «Still, these are minor problems» la sigue.',
    )),

    // ── Part 7 ──
    ru7('fce-m1-ru7-1', 4, RU7_TEXT, 'Which person finds group decision-making slow?', RU7_SECTIONS, 1, x(
      'Tomás (B) : « a meeting to decide where to put a new bench can last all evening ».',
      'توماس (B): «a meeting to decide where to put a new bench can last all evening».',
      'B: a meeting about a bench “can last all evening”.',
      'Tomás (B): «a meeting to decide where to put a new bench can last all evening».',
    )),
    ru7('fce-m1-ru7-2', 4, RU7_TEXT, 'Which person values the garden mainly as a place to be alone?', RU7_SECTIONS, 2, x(
      'Yasmine (C) y va « when nobody else is there » et dit : « it’s the silence I come for ».',
      'ياسمين (C) تذهب «when nobody else is there» وتقول: «it’s the silence I come for».',
      'C: “when nobody else is there… it’s the silence I come for”.',
      'Yasmine (C) va «when nobody else is there» y dice: «it’s the silence I come for».',
    )),
    ru7('fce-m1-ru7-3', 4, RU7_TEXT, 'Which person has learnt about other cultures through gardening?', RU7_SECTIONS, 0, x(
      'Lina (A) découvre « my neighbours’ home countries through the vegetables they planted and the dishes they cooked ».',
      'لينا (A) تعرّفت على «my neighbours’ home countries through the vegetables they planted and the dishes they cooked».',
      'A learnt about “my neighbours’ home countries”.',
      'Lina (A) aprende sobre «my neighbours’ home countries through the vegetables they planted».',
    )),
    ru7('fce-m1-ru7-4', 3, RU7_TEXT, 'Which person involved young people in a building project?', RU7_SECTIONS, 3, x(
      'Erik (D) a construit une serre « with my students », devenue « a project for the whole school ».',
      'إريك (D) بنى دفيئة «with my students» وأصبحت «a project for the whole school».',
      'D built a greenhouse “with my students”.',
      'Erik (D) construyó un invernadero «with my students», que se convirtió en «a project for the whole school».',
    )),

    // ── Listening Part 1 ──
    li1('fce-m1-li1-1', 3, LI1_FESTIVAL, 'You hear two friends talking about a festival. Why does the woman suggest meeting earlier?', ['She wants to get a good place to sit.', 'She needs to buy tickets at the gate.', 'She would like to have dinner first.'], x(
      '« The seats aren’t numbered… I’d really like to sit somewhere near the stage » : elle veut de bonnes places.',
      '«The seats aren’t numbered… I’d really like to sit somewhere near the stage»: تريد مكانًا جيدًا للجلوس.',
      '“I’d really like to sit somewhere near the stage.”',
      '«The seats aren’t numbered… I’d really like to sit somewhere near the stage»: quiere buenos asientos.',
    )),
    li1('fce-m1-li1-2', 4, LI1_MARATHON, 'You hear a young man talking about his first marathon. When did he find the race most difficult?', ['when the weather changed', 'during the final part of the race', 'after he stopped at a drinks station'], x(
      'Le moment critique : « at around kilometre twelve, when it suddenly started pouring with rain ». Il se sentait bien à la fin et ne s’est pas arrêté.',
      'اللحظة الأصعب: «at around kilometre twelve, when it suddenly started pouring with rain». كان بخير في النهاية ولم يتوقف.',
      'The hardest moment came when it “started pouring with rain”.',
      'El momento crítico: «at around kilometre twelve, when it suddenly started pouring with rain». Al final estaba bien y no se detuvo.',
    )),
    li1('fce-m1-li1-3', 4, LI1_PROJECT, 'You hear two students discussing a project. What do they agree about?', ['They did not organise their time well.', 'Their research was not detailed enough.', 'The teacher’s mark was unfair.'], x(
      '« We didn’t leave any time to practise » / « we need to plan our time better » — « Exactly ». La recherche a été appréciée.',
      '«We didn’t leave any time to practise» و«we need to plan our time better» — «Exactly». أما البحث فقد نال الإعجاب.',
      'They agree they must “plan our time better”.',
      '«We didn’t leave any time to practise» / «we need to plan our time better» — «Exactly». La investigación gustó.',
    )),
    li1('fce-m1-li1-4', 3, LI1_MESSAGE, 'You hear a woman leaving a message for a friend. Why is she calling?', ['to suggest changing the start time', 'to cancel their climbing trip', 'to ask Omar to change his shift'], x(
      '« I wondered if we could set off at eight rather than eleven » : elle propose de partir plus tôt ; elle est « still really keen ».',
      '«I wondered if we could set off at eight rather than eleven»: تقترح الانطلاق مبكرًا، وهي ما زالت «still really keen».',
      '“Could we set off at eight rather than eleven.”',
      '«I wondered if we could set off at eight rather than eleven»: propone salir antes; sigue «still really keen».',
    )),

    // ── Listening Part 2 ──
    li2('fce-m1-li2-1', 3, LI2_TALK, 'The hives are placed behind a ___, so the bees fly up and away.', ['high wall', 'wall'], x(
      'On entend : « the hives are placed behind a high wall ».',
      'نسمع: «the hives are placed behind a high wall».',
      'Heard: “behind a high wall”.',
      'Se oye: «the hives are placed behind a high wall».',
    )),
    li2('fce-m1-li2-2', 4, LI2_TALK, 'City bees do well because parks and balconies offer a great variety of ___.', ['flowers'], x(
      'On entend : « parks and balconies offer a huge variety of flowers ».',
      'نسمع: «parks and balconies offer a huge variety of flowers».',
      'Heard: “a huge variety of flowers”.',
      'Se oye: «parks and balconies offer a huge variety of flowers».',
    )),
    li2('fce-m1-li2-3', 4, LI2_TALK, 'The money from the honey is used to buy ___.', ["children's books", 'books'], x(
      'On entend : « all the money goes towards buying children’s books ».',
      'نسمع: «all the money goes towards buying children’s books».',
      'Heard: “buying children’s books”.',
      'Se oye: «all the money goes towards buying children’s books».',
    )),
    li2('fce-m1-li2-4', 4, LI2_TALK, 'People on the beginners’ course must bring their own ___.', ['gloves', 'pair of gloves'], x(
      'On entend : « the only thing you need to bring is a pair of gloves » ; les combinaisons sont fournies.',
      'نسمع: «the only thing you need to bring is a pair of gloves»، أما البدلات الواقية فيوفّرها المشروع.',
      'Heard: “bring… a pair of gloves”; suits are provided.',
      'Se oye: «the only thing you need to bring is a pair of gloves»; los trajes se prestan.',
    )),

    // ── Listening Part 3 ──
    li3('fce-m1-li3-1', 4, LI3_SCRIPT, 'Which statement matches what Speaker 1 says?', LI3_OPTIONS, 2, x(
      'Locuteur 1 : deux heures prévues, mais « I usually got home at dinner time… my weekends just disappeared » → plus de temps que prévu (C).',
      'المتحدث 1: ساعتان فقط في الخطة، لكن «I usually got home at dinner time… my weekends just disappeared» ← وقت أطول من المتوقع (C).',
      'Speaker 1: “my weekends just disappeared” → C.',
      'Hablante 1: dos horas previstas, pero «I usually got home at dinner time… my weekends just disappeared» → C.',
    )),
    li3('fce-m1-li3-2', 4, LI3_SCRIPT, 'Which statement matches what Speaker 3 says?', LI3_OPTIONS, 5, x(
      'Locuteur 3 : « my voice was shaking… I’m far less nervous about presentations » → plus d’assurance à l’oral (F).',
      'المتحدث 3: «my voice was shaking… I’m far less nervous about presentations» ← ثقة أكبر في التحدث أمام الجمهور (F).',
      'Speaker 3: “far less nervous about presentations” → F.',
      'Hablante 3: «my voice was shaking… I’m far less nervous about presentations» → F.',
    )),
    li3('fce-m1-li3-3', 4, LI3_SCRIPT, 'Which statement matches what Speaker 4 says?', LI3_OPTIONS, 4, x(
      'Locuteur 4 : « nobody seemed to know who was in charge… no bags » → mauvaise organisation (E).',
      'المتحدث 4: «nobody seemed to know who was in charge… no bags» ← سوء التنظيم (E).',
      'Speaker 4: “nobody seemed to know who was in charge” → E.',
      'Hablante 4: «nobody seemed to know who was in charge… no bags» → mala organización (E).',
    )),

    // ── Listening Part 4 ──
    li4('fce-m1-li4-1', 4, LI4_INTERVIEW, 'How did Sofia start working in exhibition design?', ['by helping a friend in her free time', 'by studying exhibition design at university', 'by designing a shop for the museum'], x(
      '« A friend at the museum needed someone… so I helped out at weekends » ; elle a étudié l’architecture, pas la muséographie.',
      '«A friend at the museum needed someone… so I helped out at weekends»؛ وقد درست الهندسة المعمارية لا تصميم المعارض.',
      '“I helped out at weekends” for a friend.',
      '«A friend at the museum needed someone… so I helped out at weekends»; estudió arquitectura.',
    )),
    li4('fce-m1-li4-2', 4, LI4_INTERVIEW, 'According to Sofia, what is the main difficulty in designing for children?', ['Adults do not give children enough time at each activity.', 'Children lose interest very quickly.', 'The signs are too hard for children to read.'], x(
      '« The real difficulty is the adults… the children never get time to actually play » ; les enfants sont « naturally curious ».',
      '«The real difficulty is the adults… the children never get time to actually play»؛ فالأطفال «naturally curious».',
      '“The real difficulty is the adults.”',
      '«The real difficulty is the adults… the children never get time to actually play»; los niños son «naturally curious».',
    )),
    li4('fce-m1-li4-3', 5, LI4_INTERVIEW, 'Why doesn’t the museum ask children for their opinions?', ['Their answers might not be honest.', 'They are too young to explain their ideas.', 'Their teachers prefer to give feedback themselves.'], x(
      '« They’d only tell us what they think we want to hear » : leurs réponses ne seraient pas sincères.',
      '«They’d only tell us what they think we want to hear»: أي أن إجاباتهم قد لا تكون صادقة.',
      '“They’d only tell us what they think we want to hear.”',
      '«They’d only tell us what they think we want to hear»: sus respuestas no serían sinceras.',
    )),
  ],
);
