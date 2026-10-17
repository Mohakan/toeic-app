import type { Exercise } from '../../../../types';
import { x } from '../../../curriculum/build';
import { ru1, ru2, ru3, ru4, ru5, ru6, ru7 } from '../build';

/**
 * Full mock test fce-full-2, Reading and Use of English (52 items: RU1 8, RU2 8, RU3 8, RU4 6, RU5 6, RU6 6, RU7 10).
 * Writing guide: docs/multi-examens/b2-contenu.md.
 * Topics: solar power in desert towns, language-exchange friendships, second-hand fashion,
 * everyday transformations, a novelist who began at sixteen, ocean rowing, gap years.
 */

/** Part 3 helper: `ru3` takes no text, so the shared gapped text is attached here. */
const withText = (exercise: Exercise, passage: string): Exercise =>
  exercise.kind === 'type' ? { ...exercise, item: { ...exercise.item, passage } } : exercise;

// RU1: solar power in desert towns.
const RU1_TEXT = `For centuries, the people of the oasis towns of southern Morocco have (1) ___ the desert sun as an enemy, something to hide from during the long summer afternoons. Today, many of them are beginning to see it in a very different light. Near Ouarzazate, rows of giant mirrors stretch as (2) ___ as the eye can see, producing electricity for hundreds of thousands of homes. But some of the most interesting changes are (3) ___ place on a much smaller scale.

In one village, a group of young people has (4) ___ up a cooperative that installs solar panels on the roofs of houses and schools. Before the project, families had to (5) ___ do with noisy diesel generators that broke down frequently and were expensive to run. ‘Now my grandmother can keep her medicine cold even during power cuts,’ says Salma, 22, one of the founders. The cooperative also trains local teenagers to (6) ___ the panels, which need cleaning regularly because of the sand.

Not everyone is convinced, however. Some older residents worry that the shiny panels do not (7) ___ in with their traditional mud-brick houses. The cooperative has responded by placing panels in gardens wherever possible, and most families agree that a slightly more modern look is a small (8) ___ to pay for reliable electricity.`;

// RU2: language-exchange friendships.
const RU2_TEXT = `When Inès, a nursing student from Sfax, joined an online language exchange, she simply wanted to improve her German before an internship in Hamburg. She was paired (1) ___ Hanna, a student in Leipzig who was hoping to learn Arabic. Twice a week they spoke for an hour: thirty minutes in German, thirty in Arabic. ‘At first we only talked about the weather and our courses,’ Inès remembers. ‘But it wasn’t (2) ___ before we were telling each other everything.’

What made the exchange work, they agree, was that (3) ___ of them was an expert. ‘When Hanna corrected me, I never felt stupid, because ten minutes later I would be correcting her,’ says Inès. Researchers who study language learning are not surprised. They point out that people learn faster when they feel relaxed, and (4) ___ is far easier to relax with a friend than with a teacher.

Last summer, Hanna finally travelled to Tunisia. (5) ___ though they had spoken almost every week for two years, the two young women were nervous about meeting face to face. ‘I was afraid we would have nothing to say,’ laughs Hanna. In the end, they stayed up talking (6) ___ the sun came up. Hanna, (7) ___ Arabic is now good enough to joke with Inès’s grandmother, is planning to spend a semester in Tunis. ‘The language was the reason we met,’ she says, ‘but it’s no longer the reason we stay in touch. (8) ___ anything, we sometimes forget to practise.’`;

// RU3: second-hand fashion.
const RU3_TEXT = `When Yasmine Belkacem opened a stall selling second-hand clothes at a market in Marseille, her friends thought it was a strange (1) ___ (DECIDE) for a business graduate. Five years later, her shop has a waiting list for its monthly sales. The (2) ___ (POPULAR) of pre-owned fashion among young people has grown remarkably in that time. For many buyers, the main reason is (3) ___ (ENVIRONMENT): producing a single pair of new jeans can use thousands of litres of water. Others are attracted by the prices, or simply by the (4) ___ (EXCITE) of finding a unique piece that nobody else is wearing.

Yasmine admits that some of the clothes she receives are badly (5) ___ (WEAR) or stained, so she has to be very (6) ___ (SELECT) about what she puts on sale. ‘I would rather sell fewer items than disappoint a customer,’ she explains. She also runs workshops where she shows people how to repair (7) ___ (DAMAGE) clothes instead of throwing them away. Critics argue that buying second-hand does little to reduce the (8) ___ (PRODUCE) of new clothes. Yasmine disagrees: ‘Every jacket that gets a second life is one less that needs to be made.’`;

// RU5: a novelist who began writing at sixteen.
const RU5_TEXT = `Amal Rahmouni was sixteen when she started writing her first novel, in the back pages of her maths exercise book, during lessons she found impossible to follow. ‘My teacher thought I was taking very careful notes,’ she says, smiling. ‘In a way, I was. I was writing down everything people around me said, and exactly the way they said it.’ Twelve years and four novels later, she is one of the most talked-about young writers in Spain, and her latest book, set in the Valencia neighbourhood where she grew up as the daughter of Moroccan parents, has been translated into eleven languages.

Success did not come quickly. That first novel, which took her almost three years to finish, was rejected by every publisher she sent it to. Amal still keeps the letters. ‘Some were polite, some were very short. One editor wrote that the story was promising, but that the characters all sounded like the same person, and that this person was clearly a teenager. At the time I was furious. Now I think it was the most useful thing anyone has ever told me.’ She put the manuscript away in a drawer and, rather than starting another book immediately, spent a year doing almost nothing but listening: on buses, in her parents’ shop, at the market on Saturday mornings.

She is honest about how hard it was to keep going. Her parents, who had arrived in Spain with very little, hoped she would study pharmacy, and for two years she did, writing late at night after her classes. ‘I wasn’t brave enough to choose,’ she admits. ‘I thought that if I failed as a writer, at least I would have something to fall back on.’ It was her younger brother, she says, who finally made her decide. After reading a short story she had left on the kitchen table, he asked her why she was studying something she never talked about. ‘He was twelve. He didn’t mean anything by it. But I couldn’t stop thinking about the question.’

Her second novel, written in a small flat she shared with three other students, was accepted by an independent publisher in Barcelona. It sold only a few thousand copies, but it caught the attention of a well-known critic, who described it as the most convincing portrait of teenage life in a Spanish city for a generation. Almost overnight, Amal found herself giving interviews and appearing at literary festivals, an experience she describes as ‘wonderful and terrifying in equal measure’.

These days, she spends a lot of time visiting secondary schools, where students often ask her for advice about getting published. Her answer usually disappoints them. ‘They want me to tell them about agents and contracts. I tell them to stop worrying about being published and to write the book that only they could write. Nobody else has grown up in your street, with your family. That’s the only real advantage a young writer has, and most of them throw it away by copying the authors they admire.’

Amal still writes by hand first, in cheap exercise books like the one she used at sixteen, and only types up her work once a draft is complete. She admits that this habit is not very efficient. ‘I lose pages, I can’t always read my own handwriting, and it takes me twice as long as it should. But when I write on a screen, I keep going back to change things, and I never get to the end. On paper, the mistakes stay there, and somehow that gives me permission to carry on.’`;

// RU6: a two-person ocean rowing challenge.
const RU6_TEXT = `Last December, two friends from Valencia, Lucía Marín and Rania Cherif, pushed a seven-metre boat away from the harbour in La Gomera, in the Canary Islands. Fifty-one days later, they arrived in Antigua, in the Caribbean, having rowed almost 5,000 kilometres with no engine and no sail. (1) ___ Neither of them had sat in a rowing boat before the age of twenty-five.

The idea came to them during a long walk in the Pyrenees. Rania had just read a book by an ocean rower and kept talking about it. ‘Eventually Lucía said, “Why don’t we just do it, then?”’ Rania remembers. ‘I thought she was joking. (2) ___’ The next two years were spent training, raising money from local companies and learning skills they had never imagined needing, from repairing a water-making machine to stitching a wound.

At sea, the pair settled into a strict routine. One of them rowed for two hours while the other ate, slept or tried to dry her clothes, and then they swapped, day and night. (3) ___ ‘You never get more than ninety minutes of sleep at a time,’ explains Lucía. ‘After a week, you stop noticing. After a month, you start to see things that aren’t there.’ On one occasion, she spent twenty minutes trying to warn Rania about a ship that turned out to be a cloud.

The hardest moment came in the third week, when a storm kept them shut in the tiny cabin for nearly three days. Twice, huge waves turned the boat completely over. (4) ___ ‘We had practised capsizing in a swimming pool, so we knew exactly what to do,’ says Rania. ‘But knowing it and doing it in the dark, in the middle of the ocean, are very different things.’

Surprisingly, both women say they never argued seriously. They put this down to a rule they agreed on before leaving: any complaint, however small, had to be said out loud within an hour. (5) ___ ‘At home, I would have kept quiet about her humming the same song for three days,’ laughs Lucía. ‘Out there, I told her, she stopped, and that was the end of it.’

Since their return, they have been invited to speak at schools all over Spain and Morocco. What they want young people to understand, they say, is not that ocean rowing is for everyone. (6) ___ ‘We weren’t athletes or sailors,’ says Rania. ‘We were just two people who decided to take a ridiculous idea seriously.’`;
const RU6_SENTENCES = [
  'A Their families followed their progress every day on a map that was updated online.',
  'B It was only when she started comparing the prices of second-hand boats the next morning that I realised she meant it.',
  'C What makes their achievement even more remarkable is that, until quite recently, both were complete beginners.',
  'D That way, small irritations never had the chance to grow into real resentment.',
  'E Each time, it turned the right way up within seconds, but much of their food and equipment was soaked.',
  'F This pattern continued for the whole crossing, without a single day off.',
  'G It is that most of us give up long before we reach our real limits.',
];

// RU7: five students describe their gap year.
const RU7_TEXT = `Five students talk about the year they took off between school and university.

A — Yanis, Oran
I spent my year as a technician with a small theatre company touring villages in the south of France. I had never touched a lighting desk before, and I was younger than everyone else in the company by at least ten years, which I found intimidating at first. Solving technical problems ten minutes before a show taught me to stay calm when things go wrong, and that has helped me more in my engineering exams than any revision technique I learnt at school.

B — Clara, Hamburg
I had a clear plan: to volunteer on a turtle conservation project in Costa Rica. In reality, the project was badly run, and most of the volunteers seemed more interested in the beaches than in the turtles. I left after a month, feeling I had wasted my savings. Looking back, though, that disappointment taught me to check things properly before committing to them. I spent the rest of the year as an intern at a marine research centre in Kiel, which is how I chose my degree.

C — Rim, Sousse
Unlike most of my friends, I didn’t go abroad. I worked as a receptionist at the local hospital and taught myself Korean in the evenings. People assumed I’d be bored, but it was the first time I had chosen what to learn for myself, and I discovered that I learn far better without the pressure of exams. My only regret is that I didn’t keep in touch with my school friends, who had all gone to university. When I finally started, a year behind them, I felt rather lonely.

D — Mateo, Bilbao
I went to Australia on a working holiday visa with my best friend. Within three weeks we had fallen out over money and gone our separate ways. Being alone on the other side of the world was hard, but it forced me to start conversations with strangers, something I had always been terrible at. I picked fruit, worked on a sheep farm and ended up sharing a house with people from six different countries. I still chat to some of them online every week.

E — Aya, Lyon
My gap year wasn’t really a year off: I spent it helping my aunt set up a small catering business in Marrakech. I dealt with suppliers, did the accounts and even built the website. I was paid very little, but at nineteen I was trusted with decisions that most people only make in their thirties. The one thing I would do differently is take a proper holiday at the end. I went straight from the busiest summer of the business into my first term, and I spent most of it exhausted.`;
const RU7_SECTIONS = ['A', 'B', 'C', 'D', 'E'];

export const fceFull2Reading: Exercise[] = [
  // ── Reading and Use of English Part 1 ──
  ru1('fce-m4-ru1-1', 4, 'Gap (1): For centuries, the people of the oasis towns of southern Morocco have ___ the desert sun as an enemy.', ['regarded', 'thought', 'believed', 'supposed'], x(
    'Structure « regard sth as sth » = considérer comme. « Think », « believe » et « suppose » ne se construisent pas avec « as » + nom.',
    'التركيب «regard sth as sth» يعني «يعدّ الشيء كذا». أما «think» و«believe» و«suppose» فلا تُستعمل مع «as» متبوعة باسم.',
    'Only “regard” takes the pattern “sth as an enemy”.',
    'Estructura «regard sth as sth» = considerar como. «Think», «believe» y «suppose» no se construyen con «as» + sustantivo.',
  ), RU1_TEXT),
  ru1('fce-m4-ru1-2', 3, 'Gap (2): Near Ouarzazate, rows of giant mirrors stretch as ___ as the eye can see.', ['far', 'long', 'wide', 'much'], x(
    'Expression figée « as far as the eye can see » = à perte de vue. « As long as » exprime une condition ou une durée.',
    'التعبير الثابت «as far as the eye can see» يعني «على مدّ البصر». أما «as long as» فتعبّر عن شرط أو مدة.',
    'Fixed phrase: “as far as the eye can see”.',
    'Expresión fija «as far as the eye can see» = hasta donde alcanza la vista. «As long as» expresa condición o duración.',
  ), RU1_TEXT),
  ru1('fce-m4-ru1-3', 3, 'Gap (3): But some of the most interesting changes are ___ place on a much smaller scale.', ['taking', 'having', 'making', 'getting'], x(
    'Collocation « take place » = avoir lieu. Aucun autre verbe ne forme cette expression avec « place ».',
    'المتلازمة «take place» تعني «يحدث، يجري». ولا يكوّن أيّ فعل آخر هذا التعبير مع «place».',
    'Collocation: “take place” = happen.',
    'Colocación «take place» = tener lugar. Ningún otro verbo forma esta expresión con «place».',
  ), RU1_TEXT),
  ru1('fce-m4-ru1-4', 4, 'Gap (4): In one village, a group of young people has ___ up a cooperative that installs solar panels on the roofs of houses and schools.', ['set', 'put', 'made', 'brought'], x(
    'Verbe à particule « set up » une entreprise, une coopérative = créer, fonder. « Put up » = construire, héberger ; « bring up » = élever, évoquer.',
    'الفعل المركب «set up» شركة أو تعاونية يعني «يؤسّس». أما «put up» فتعني «يبني، يستضيف»، و«bring up» تعني «يربّي، يطرح موضوعًا».',
    'Phrasal verb: “set up” an organisation = found it.',
    'Phrasal verb «set up» una empresa o cooperativa = fundar. «Put up» = construir, alojar; «bring up» = criar, sacar un tema.',
  ), RU1_TEXT),
  ru1('fce-m4-ru1-5', 5, 'Gap (5): Before the project, families had to ___ do with noisy diesel generators that broke down frequently and were expensive to run.', ['make', 'get', 'put', 'have'], x(
    'Expression « make do with sth » = se contenter de quelque chose d’insuffisant, faute de mieux : ici des générateurs bruyants et peu fiables.',
    'التعبير «make do with sth» يعني «يكتفي بشيء غير كافٍ لعدم وجود بديل»، وهنا المولّدات المزعجة وغير الموثوقة.',
    'Fixed phrase: “make do with” = manage with something inadequate.',
    'Expresión «make do with sth» = apañarse con algo insuficiente a falta de algo mejor: aquí, generadores ruidosos y poco fiables.',
  ), RU1_TEXT),
  ru1('fce-m4-ru1-6', 4, 'Gap (6): The cooperative also trains local teenagers to ___ the panels, which need cleaning regularly because of the sand.', ['maintain', 'preserve', 'sustain', 'conserve'], x(
    '« Maintain » une machine ou un équipement = l’entretenir, ce que confirme « need cleaning regularly ». « Preserve » et « conserve » visent la protection ; « sustain » = faire durer un effort.',
    '«Maintain» آلة أو معدّات تعني «يصونها»، ويؤكّد ذلك «need cleaning regularly». أما «preserve» و«conserve» فتعنيان الحماية، و«sustain» تعني «يُديم جهدًا».',
    'You “maintain” equipment; the panels “need cleaning regularly”.',
    '«Maintain» un equipo = hacer su mantenimiento, como confirma «need cleaning regularly». «Preserve» y «conserve» = proteger; «sustain» = mantener un esfuerzo.',
  ), RU1_TEXT),
  ru1('fce-m4-ru1-7', 4, 'Gap (7): Some older residents worry that the shiny panels do not ___ in with their traditional mud-brick houses.', ['fit', 'match', 'suit', 'go'], x(
    'Verbe à particule « fit in with » = s’accorder avec, s’intégrer à. « Match » et « suit » s’emploient sans « in with », et « go with » ne prend pas « in ».',
    'الفعل المركب «fit in with» يعني «ينسجم مع». أما «match» و«suit» فتُستعملان دون «in with»، و«go with» لا تأخذ «in».',
    'Phrasal verb: “fit in with” = look right next to.',
    'Phrasal verb «fit in with» = encajar con. «Match» y «suit» se usan sin «in with», y «go with» no lleva «in».',
  ), RU1_TEXT),
  ru1('fce-m4-ru1-8', 4, 'Gap (8): Most families agree that a slightly more modern look is a small ___ to pay for reliable electricity.', ['price', 'cost', 'fee', 'charge'], x(
    'Expression figée « a small price to pay for sth » = un faible inconvénient en échange d’un grand avantage. Les autres noms ne forment pas cette expression.',
    'التعبير الثابت «a small price to pay for sth» يعني «ثمن زهيد مقابل فائدة كبيرة». ولا تكوّن الأسماء الأخرى هذا التعبير.',
    'Fixed phrase: “a small price to pay for” something.',
    'Expresión fija «a small price to pay for sth» = un pequeño precio a cambio de una gran ventaja. Los otros sustantivos no forman esta expresión.',
  ), RU1_TEXT),

  // ── Part 2 ──
  ru2('fce-m4-ru2-1', 3, 'Gap (1): She was paired ___ Hanna, a student in Leipzig who was hoping to learn Arabic.', ['with'], x(
    'Le verbe « pair » se construit avec « with » : « be paired with sb » = être mis en binôme avec quelqu’un.',
    'الفعل «pair» يُستعمل مع «with»: «be paired with sb» يعني «يُوضع في ثنائي مع شخص».',
    'Dependent preposition: “be paired with” sb.',
    'El verbo «pair» se construye con «with»: «be paired with sb» = ser emparejado con alguien.',
  ), RU2_TEXT),
  ru2('fce-m4-ru2-2', 4, 'Gap (2): ‘But it wasn’t ___ before we were telling each other everything.’', ['long'], x(
    'Expression « it wasn’t long before… » = il n’a pas fallu longtemps avant que… Le contraste avec « At first » l’annonce.',
    'التعبير «it wasn’t long before…» يعني «لم يمضِ وقت طويل حتى…»، ويمهّد له التقابل مع «At first».',
    'Fixed phrase: “it wasn’t long before…”.',
    'Expresión «it wasn’t long before…» = no pasó mucho tiempo antes de que… El contraste con «At first» lo anuncia.',
  ), RU2_TEXT),
  ru2('fce-m4-ru2-3', 4, 'Gap (3): What made the exchange work, they agree, was that ___ of them was an expert.', ['neither'], x(
    'Il s’agit de deux personnes et le verbe est au singulier affirmatif (« was ») : « neither of them » = aucune des deux. « None » s’emploie pour plus de deux.',
    'الحديث عن شخصين والفعل مفرد مثبت («was»): «neither of them» تعني «لا أحد منهما». أما «none» فتُستعمل لأكثر من اثنين.',
    'Two people, positive verb → “neither of them”.',
    'Son dos personas y el verbo es afirmativo («was»): «neither of them» = ninguna de las dos. «None» se usa para más de dos.',
  ), RU2_TEXT),
  ru2('fce-m4-ru2-4', 4, 'Gap (4): They point out that people learn faster when they feel relaxed, and ___ is far easier to relax with a friend than with a teacher.', ['it'], x(
    'Sujet apparent « it » devant « is easier to + infinitif » : le vrai sujet est « to relax with a friend ».',
    'الفاعل الشكلي «it» قبل «is easier to + مصدر»، والفاعل الحقيقي هو «to relax with a friend».',
    'Dummy subject: “it is easier to…”.',
    'Sujeto formal «it» delante de «is easier to + infinitivo»: el sujeto real es «to relax with a friend».',
  ), RU2_TEXT),
  ru2('fce-m4-ru2-5', 4, 'Gap (5): ___ though they had spoken almost every week for two years, the two young women were nervous about meeting face to face.', ['Even'], x(
    'Concession avant « though » : « Even though » = bien que. Malgré deux ans d’échanges, elles étaient nerveuses.',
    'تعارض قبل «though»: «Even though» تعني «على الرغم من أنّ»، فرغم عامين من الحديث كانتا متوترتين.',
    'Concession: “Even though” + clause.',
    'Concesión delante de «though»: «Even though» = aunque. A pesar de dos años de charlas, estaban nerviosas.',
  ), RU2_TEXT),
  ru2('fce-m4-ru2-6', 3, 'Gap (6): In the end, they stayed up talking ___ the sun came up.', ['until', 'till'], x(
    'Limite dans le temps d’une action qui dure (« stayed up talking ») : « until » (ou « till ») the sun came up.',
    'نهاية زمنية لفعل ممتد («stayed up talking»): «until» (أو «till») the sun came up.',
    'End point of an ongoing action: “until”.',
    'Límite temporal de una acción que dura («stayed up talking»): «until» (o «till») the sun came up.',
  ), RU2_TEXT),
  ru2('fce-m4-ru2-7', 4, 'Gap (7): Hanna, ___ Arabic is now good enough to joke with Inès’s grandmother, is planning to spend a semester in Tunis.', ['whose'], x(
    'Pronom relatif possessif : « Hanna, whose Arabic… » = l’arabe de Hanna. Le nom « Arabic » suit directement le trou.',
    'اسم موصول للملكية: «Hanna, whose Arabic…» أي «عربيّة هانا». والاسم «Arabic» يأتي مباشرة بعد الفراغ.',
    'Possessive relative: “whose Arabic”.',
    'Pronombre relativo posesivo: «Hanna, whose Arabic…» = el árabe de Hanna. El sustantivo «Arabic» sigue al hueco.',
  ), RU2_TEXT),
  ru2('fce-m4-ru2-8', 5, 'Gap (8): ‘___ anything, we sometimes forget to practise.’', ['If'], x(
    'Expression « if anything » = au contraire, si l’on peut dire : elle renforce l’idée que la langue n’est plus la raison de leur amitié.',
    'التعبير «if anything» يعني «بل على العكس»، ويؤكّد أن اللغة لم تعد سبب صداقتهما.',
    'Fixed phrase: “if anything” = if there is a difference, it is the opposite.',
    'Expresión «if anything» = más bien, al contrario: refuerza la idea de que el idioma ya no es el motivo de su amistad.',
  ), RU2_TEXT),

  // ── Part 3 ──
  withText(ru3('fce-m4-ru3-1', 3, 'Gap (1): Her friends thought it was a strange ___ for a business graduate.', 'DECIDE', ['decision'], x(
    'Après l’article « a » et l’adjectif « strange », il faut un nom : « decision ».',
    'بعد أداة النكرة «a» والصفة «strange» نحتاج إلى اسم: «decision».',
    '“a strange ___” needs a noun: decision.',
    'Tras el artículo «a» y el adjetivo «strange» hace falta un sustantivo: «decision».',
  )), RU3_TEXT),
  withText(ru3('fce-m4-ru3-2', 4, 'Gap (2): The ___ of pre-owned fashion among young people has grown remarkably in that time.', 'POPULAR', ['popularity'], x(
    'Entre « The » et « of », il faut un nom, sujet de « has grown » : « popularity » (suffixe -ity).',
    'بين «The» و«of» نحتاج إلى اسم يكون فاعلًا لـ«has grown»: «popularity» (اللاحقة -ity).',
    '“The ___ of” needs a noun: popularity.',
    'Entre «The» y «of» hace falta un sustantivo, sujeto de «has grown»: «popularity» (sufijo -ity).',
  )), RU3_TEXT),
  withText(ru3('fce-m4-ru3-3', 4, 'Gap (3): For many buyers, the main reason is ___: producing a single pair of new jeans can use thousands of litres of water.', 'ENVIRONMENT', ['environmental'], x(
    'Après « is », un adjectif attribut : « environmental » (raison liée à l’environnement, illustrée par l’eau consommée).',
    'بعد «is» نحتاج إلى صفة خبرية: «environmental» (سبب بيئي يوضّحه استهلاك الماء).',
    'Adjective after “is”: environmental.',
    'Tras «is», un adjetivo atributo: «environmental» (motivo ambiental, ilustrado por el agua consumida).',
  )), RU3_TEXT),
  withText(ru3('fce-m4-ru3-4', 4, 'Gap (4): Others are attracted by the prices, or simply by the ___ of finding a unique piece that nobody else is wearing.', 'EXCITE', ['excitement'], x(
    'Entre « the » et « of », il faut un nom : « excitement » (suffixe -ment).',
    'بين «the» و«of» نحتاج إلى اسم: «excitement» (اللاحقة -ment).',
    '“the ___ of” needs a noun: excitement.',
    'Entre «the» y «of» hace falta un sustantivo: «excitement» (sufijo -ment).',
  )), RU3_TEXT),
  withText(ru3('fce-m4-ru3-5', 4, 'Gap (5): Yasmine admits that some of the clothes she receives are badly ___ or stained.', 'WEAR', ['worn'], x(
    'Après « are badly », un participe passé à valeur d’adjectif, coordonné à « stained » : « worn » (participe irrégulier de « wear »).',
    'بعد «are badly» نحتاج إلى اسم مفعول بمعنى الصفة، معطوف على «stained»: «worn» (اسم المفعول الشاذ من «wear»).',
    'Past participle like “stained”: worn.',
    'Tras «are badly», un participio con valor de adjetivo, coordinado con «stained»: «worn» (participio irregular de «wear»).',
  )), RU3_TEXT),
  withText(ru3('fce-m4-ru3-6', 5, 'Gap (6): So she has to be very ___ about what she puts on sale.', 'SELECT', ['selective'], x(
    'Après « be very », un adjectif : « selective » = exigeant dans ses choix. L’idée est confirmée par « I would rather sell fewer items ».',
    'بعد «be very» نحتاج إلى صفة: «selective» أي «انتقائي». ويؤكّد ذلك قولها «I would rather sell fewer items».',
    'Adjective after “very”: selective.',
    'Tras «be very», un adjetivo: «selective» = exigente al elegir. Lo confirma «I would rather sell fewer items».',
  )), RU3_TEXT),
  withText(ru3('fce-m4-ru3-7', 3, 'Gap (7): She also runs workshops where she shows people how to repair ___ clothes instead of throwing them away.', 'DAMAGE', ['damaged'], x(
    'Devant le nom « clothes », un adjectif ; on répare des vêtements abîmés → participe passé « damaged ».',
    'قبل الاسم «clothes» نحتاج إلى صفة، والملابس التي تُصلَح هي الملابس التالفة ← اسم المفعول «damaged».',
    'Adjective before “clothes”: damaged.',
    'Delante del sustantivo «clothes», un adjetivo; se repara la ropa estropeada → participio «damaged».',
  )), RU3_TEXT),
  withText(ru3('fce-m4-ru3-8', 4, 'Gap (8): Critics argue that buying second-hand does little to reduce the ___ of new clothes.', 'PRODUCE', ['production'], x(
    'Entre « the » et « of », il faut un nom désignant l’action de fabriquer : « production ». « Product » désigne l’objet fabriqué.',
    'بين «the» و«of» نحتاج إلى اسم يدلّ على عملية التصنيع: «production». أما «product» فتعني المنتَج نفسه.',
    '“the ___ of new clothes” = the making of them: production.',
    'Entre «the» y «of» hace falta un sustantivo que designe la acción de fabricar: «production». «Product» es el objeto fabricado.',
  )), RU3_TEXT),

  // ── Part 4 ──
  ru4('fce-m4-ru4-1', 4, 'Karim speaks Spanish better than anyone else in our class.', 'WELL', 'Nobody else in our class speaks Spanish ___ Karim.', ['as well as', 'so well as'], x(
    'Le superlatif implicite devient une comparaison d’égalité négative : « Nobody else… speaks Spanish as well as Karim ».',
    'تتحوّل المقارنة إلى مساواة منفية: «Nobody else… speaks Spanish as well as Karim».',
    '“better than anyone” → “nobody… as well as”.',
    'La comparación se convierte en igualdad negativa: «Nobody else… speaks Spanish as well as Karim».',
  )),
  ru4('fce-m4-ru4-2', 5, 'I’m sure Nadia didn’t forget your birthday on purpose.', "CAN'T", 'Nadia ___ your birthday on purpose.', ["can't have forgotten"], x(
    'Déduction négative sur le passé (« I’m sure… didn’t ») : « can’t have + participe passé » → « can’t have forgotten ».',
    'استنتاج منفي عن الماضي («I’m sure… didn’t»): «can’t have + اسم المفعول» ← «can’t have forgotten».',
    'Negative deduction about the past: can’t have + past participle.',
    'Deducción negativa sobre el pasado («I’m sure… didn’t»): «can’t have + participio» → «can’t have forgotten».',
  )),
  ru4('fce-m4-ru4-3', 4, 'Lina has got up at six every day for years, so she doesn’t find it difficult.', 'USED', 'Lina ___ up at six every day.', ['is used to getting', 'has got used to getting', 'has become used to getting'], x(
    'Habitude acquise : « be used to + -ing » = être habitué à. Attention : « used to get up » parlerait d’une habitude passée terminée.',
    'عادة مكتسبة: «be used to + -ing» تعني «معتاد على». وانتبه: «used to get up» تدل على عادة ماضية انتهت.',
    'Being accustomed: be used to + -ing.',
    'Costumbre adquirida: «be used to + -ing» = estar acostumbrado a. Ojo: «used to get up» indicaría un hábito pasado ya terminado.',
  )),
  ru4('fce-m4-ru4-4', 4, 'Omar started learning the guitar three years ago, and he is still learning it.', 'BEEN', 'Omar ___ the guitar for three years.', ['has been learning'], x(
    'Action commencée dans le passé et toujours en cours, avec « for » : present perfect continu « has been learning ».',
    'فعل بدأ في الماضي وما زال مستمرًا، مع «for»: المضارع التام المستمر «has been learning».',
    'Started in the past and still going + “for” → present perfect continuous.',
    'Acción que empezó en el pasado y continúa, con «for»: present perfect continuo «has been learning».',
  )),
  ru4('fce-m4-ru4-5', 4, '‘Why don’t we take the train instead of driving?’ said Lina.', 'SUGGESTED', 'Lina ___ the train instead of driving.', ['suggested taking', 'suggested catching', 'suggested that we take', 'suggested that we should take', 'suggested we take', 'suggested we should take', 'suggested that they take', 'suggested they take', 'suggested that they should take', 'suggested they should take'], x(
    '« Why don’t we…? » est une proposition → « suggest + -ing » ou « suggest (that) we (should) + base verbale ». Jamais « suggest to take ».',
    '«Why don’t we…?» اقتراح ← «suggest + -ing» أو «suggest (that) we (should) + الفعل المجرد»، ولا يصح «suggest to take».',
    'Suggestion → suggest + -ing (never “suggest to”).',
    '«Why don’t we…?» es una propuesta → «suggest + -ing» o «suggest (that) we (should) + infinitivo sin to». Nunca «suggest to take».',
  )),
  ru4('fce-m4-ru4-6', 5, 'People say that the old bridge was built by the Romans.', 'SAID', 'The old bridge ___ built by the Romans.', ['is said to have been'], x(
    'Passif de « say » avec infinitif passé, car la construction est antérieure : « is said to have been built ».',
    'المبني للمجهول من «say» مع مصدر ماضٍ، لأن البناء سابق: «is said to have been built».',
    'Reporting passive about the past: is said to have been.',
    'Pasiva de «say» con infinitivo perfecto, porque la construcción es anterior: «is said to have been built».',
  )),

  // ── Part 5 ──
  ru5('fce-m4-ru5-1', 4, RU5_TEXT, 'What does Amal suggest about the writing she did in maths lessons?', ['She was already paying close attention to how people speak.', 'Her teacher encouraged her to write during lessons.', 'It helped her to understand the maths she was taught.', 'She was writing to escape from problems at home.'], x(
    '« I was writing down everything people around me said, and exactly the way they said it » : elle observait déjà la façon de parler des gens. Le professeur croyait qu’elle prenait des notes.',
    '«I was writing down everything people around me said, and exactly the way they said it»: كانت تلاحظ طريقة كلام الناس. أما المعلم فكان يظن أنها تدوّن الدرس.',
    '“…everything people around me said, and exactly the way they said it.”',
    '«I was writing down everything people around me said, and exactly the way they said it»: ya observaba cómo habla la gente. El profesor creía que tomaba apuntes.',
  )),
  ru5('fce-m4-ru5-2', 4, RU5_TEXT, 'How does Amal feel now about the editor’s comment on her first novel?', ['She sees it as valuable advice.', 'She still thinks it was unfair.', 'She believes it was meant to discourage her.', 'She regrets reacting to it so angrily.'], x(
    '« At the time I was furious. Now I think it was the most useful thing anyone has ever told me » : elle y voit un conseil précieux. Elle ne dit pas regretter sa colère.',
    '«At the time I was furious. Now I think it was the most useful thing anyone has ever told me»: تعدّه نصيحة قيّمة، ولا تقول إنها نادمة على غضبها.',
    '“…the most useful thing anyone has ever told me.”',
    '«At the time I was furious. Now I think it was the most useful thing anyone has ever told me»: lo ve como un consejo valioso. No dice lamentar su enfado.',
  )),
  ru5('fce-m4-ru5-3', 4, RU5_TEXT, 'After her first novel was rejected, Amal', ['tried to improve the way her characters spoke.', 'started writing a second novel straight away.', 'rewrote it for a different publisher.', 'got a job in her parents’ shop.'], x(
    'L’éditeur trouvait que tous les personnages parlaient pareil ; elle passe donc un an « doing almost nothing but listening » dans les bus et au marché. Elle ne commence pas tout de suite un autre livre (« rather than starting another book immediately »).',
    'رأى المحرّر أن الشخصيات كلها تتكلم بالطريقة نفسها، فقضت سنة «doing almost nothing but listening». ولم تبدأ كتابًا آخر فورًا («rather than starting another book immediately»).',
    'She spent a year “listening” so her characters would not all sound the same.',
    'El editor decía que todos los personajes hablaban igual; ella pasa un año «doing almost nothing but listening». No empieza otro libro enseguida («rather than starting another book immediately»).',
  )),
  ru5('fce-m4-ru5-4', 4, RU5_TEXT, 'Why did Amal study pharmacy for two years?', ['She wanted a safe option in case writing did not work out.', 'Her brother advised her to choose a practical subject.', 'She was more interested in science than literature at the time.', 'She needed to earn money for her family.'], x(
    '« If I failed as a writer, at least I would have something to fall back on » : la pharmacie était une solution de secours. C’est au contraire son frère qui l’a poussée à choisir l’écriture.',
    '«If I failed as a writer, at least I would have something to fall back on»: كانت الصيدلة خيارًا احتياطيًا. أما أخوها فهو من دفعها إلى اختيار الكتابة.',
    '“…something to fall back on.”',
    '«If I failed as a writer, at least I would have something to fall back on»: la farmacia era un plan B. Fue su hermano quien la empujó hacia la escritura.',
  )),
  ru5('fce-m4-ru5-5', 4, RU5_TEXT, 'How did Amal react to suddenly becoming well known?', ['She had mixed feelings about it.', 'She found it mostly frightening.', 'She felt she did not deserve it.', 'She was disappointed that it did not increase her sales.'], x(
    '« Wonderful and terrifying in equal measure » : autant de joie que de peur, donc des sentiments partagés, et non surtout de la peur.',
    '«Wonderful and terrifying in equal measure»: فرح وخوف بالقدر نفسه، أي مشاعر متضاربة، لا خوف في الغالب.',
    '“Wonderful and terrifying in equal measure” = mixed feelings.',
    '«Wonderful and terrifying in equal measure»: tanta alegría como miedo, es decir, sentimientos encontrados, no sobre todo miedo.',
  )),
  ru5('fce-m4-ru5-6', 4, RU5_TEXT, 'Why does Amal write her first drafts by hand?', ['It stops her from constantly changing what she has written.', 'It is quicker than typing on a computer.', 'It reminds her of the time when she was sixteen.', 'It makes her handwriting easier to read.'], x(
    '« On a screen, I keep going back to change things, and I never get to the end. On paper, the mistakes stay there » : le papier l’empêche de tout réécrire. Elle reconnaît que c’est plus lent (« twice as long »).',
    '«On a screen, I keep going back to change things… On paper, the mistakes stay there»: الورق يمنعها من التعديل المستمر، وتعترف بأنه أبطأ («twice as long»).',
    'On screen she “keeps going back to change things”; on paper she carries on.',
    '«On a screen, I keep going back to change things… On paper, the mistakes stay there»: el papel le impide corregir sin parar. Reconoce que es más lento («twice as long»).',
  )),

  // ── Part 6 ──
  ru6('fce-m4-ru6-1', 4, RU6_TEXT, 'Which sentence fits gap 1?', RU6_SENTENCES, 2, x(
    'C annonce que les deux femmes étaient « complete beginners », ce que la phrase suivante précise : « Neither of them had sat in a rowing boat before the age of twenty-five ».',
    'الجملة C تذكر أن المرأتين كانتا «complete beginners»، وتوضّح ذلك الجملة التالية: «Neither of them had sat in a rowing boat before the age of twenty-five».',
    'C (“complete beginners”) is explained by “Neither of them had sat in a rowing boat…”.',
    'C anuncia que eran «complete beginners», y la frase siguiente lo precisa: «Neither of them had sat in a rowing boat before the age of twenty-five».',
  )),
  ru6('fce-m4-ru6-2', 4, RU6_TEXT, 'Which sentence fits gap 2?', RU6_SENTENCES, 1, x(
    'Après « I thought she was joking », B montre le moment où Rania comprend que c’était sérieux : « I realised she meant it ».',
    'بعد «I thought she was joking» تأتي الجملة B لتبيّن اللحظة التي أدركت فيها رانيا الجدية: «I realised she meant it».',
    'B follows “I thought she was joking”: “I realised she meant it”.',
    'Tras «I thought she was joking», B muestra el momento en que Rania entiende que iba en serio: «I realised she meant it».',
  )),
  ru6('fce-m4-ru6-3', 4, RU6_TEXT, 'Which sentence fits gap 3?', RU6_SENTENCES, 5, x(
    '« This pattern » reprend le roulement de deux heures « day and night » décrit juste avant, et explique le manque de sommeil évoqué ensuite.',
    'عبارة «This pattern» تحيل على التناوب كل ساعتين «day and night» المذكور قبلها، وتفسّر قلة النوم المذكورة بعدها.',
    '“This pattern” refers back to the two-hour shifts “day and night”.',
    '«This pattern» retoma los turnos de dos horas «day and night» descritos antes y explica la falta de sueño que sigue.',
  )),
  ru6('fce-m4-ru6-4', 5, RU6_TEXT, 'Which sentence fits gap 4?', RU6_SENTENCES, 4, x(
    '« Each time, it turned the right way up » renvoie à « Twice, huge waves turned the boat completely over » ; la citation sur les « capsizing » suit logiquement.',
    'عبارة «Each time, it turned the right way up» تحيل على «Twice, huge waves turned the boat completely over»، ويليها منطقيًا الاقتباس عن الانقلاب «capsizing».',
    '“Each time, it…” refers to the boat turning over “twice”.',
    '«Each time, it turned the right way up» remite a «Twice, huge waves turned the boat completely over»; la cita sobre «capsizing» sigue con lógica.',
  )),
  ru6('fce-m4-ru6-5', 4, RU6_TEXT, 'Which sentence fits gap 5?', RU6_SENTENCES, 3, x(
    '« That way » renvoie à la règle de dire toute plainte dans l’heure ; l’exemple de la chanson fredonnée illustre une « small irritation » réglée tout de suite.',
    'عبارة «That way» تحيل على قاعدة التعبير عن كل شكوى خلال ساعة، ومثال الأغنية المكرّرة يوضّح «small irritation» حُلّت فورًا.',
    '“That way” refers to the one-hour complaint rule.',
    '«That way» remite a la regla de expresar cualquier queja en una hora; el ejemplo de la canción ilustra una «small irritation» resuelta enseguida.',
  )),
  ru6('fce-m4-ru6-6', 5, RU6_TEXT, 'Which sentence fits gap 6?', RU6_SENTENCES, 6, x(
    'La structure « is not that… It is that… » oppose deux idées : ce n’est pas que l’aviron soit pour tous, c’est que nous abandonnons avant nos vraies limites. La citation finale le confirme.',
    'التركيب «is not that… It is that…» يقابل بين فكرتين: ليس التجديف للجميع، بل إننا نستسلم قبل بلوغ حدودنا الحقيقية، ويؤكّد ذلك الاقتباس الأخير.',
    '“…is not that… It is that…” completes the contrast.',
    'La estructura «is not that… It is that…» opone dos ideas: no es que el remo sea para todos, sino que abandonamos antes de nuestros límites reales.',
  )),

  // ── Part 7 ──
  ru7('fce-m4-ru7-1', 4, RU7_TEXT, 'Which person says that something they learnt at work has helped them with their studies?', RU7_SECTIONS, 0, x(
    'Yanis (A) : rester calme face aux pannes « has helped me more in my engineering exams than any revision technique ».',
    'يانيس (A): تعلّم الهدوء أمام الأعطال، و«has helped me more in my engineering exams than any revision technique».',
    'A: it “has helped me more in my engineering exams”.',
    'Yanis (A): mantener la calma ante los fallos «has helped me more in my engineering exams than any revision technique».',
  )),
  ru7('fce-m4-ru7-2', 3, RU7_TEXT, 'Which person was much younger than the people they worked with?', RU7_SECTIONS, 0, x(
    'Yanis (A) : « I was younger than everyone else in the company by at least ten years ».',
    'يانيس (A): «I was younger than everyone else in the company by at least ten years».',
    'A: “younger than everyone else… by at least ten years”.',
    'Yanis (A): «I was younger than everyone else in the company by at least ten years».',
  )),
  ru7('fce-m4-ru7-3', 4, RU7_TEXT, 'Which person was disappointed by the way a project was organised?', RU7_SECTIONS, 1, x(
    'Clara (B) : « the project was badly run » ; elle est partie au bout d’un mois.',
    'كلارا (B): «the project was badly run»، وغادرت بعد شهر.',
    'B: “the project was badly run”.',
    'Clara (B): «the project was badly run»; se marchó al cabo de un mes.',
  )),
  ru7('fce-m4-ru7-4', 4, RU7_TEXT, 'Which person says a bad experience made them more careful about future decisions?', RU7_SECTIONS, 1, x(
    'Clara (B) : « that disappointment taught me to check things properly before committing to them ». Mateo (D) tire une autre leçon : parler aux inconnus.',
    'كلارا (B): «that disappointment taught me to check things properly before committing to them». أما ماتيو (D) فتعلّم درسًا آخر: التحدث إلى الغرباء.',
    'B: it “taught me to check things properly before committing”.',
    'Clara (B): «that disappointment taught me to check things properly before committing to them». Mateo (D) aprende otra cosa: hablar con desconocidos.',
  )),
  ru7('fce-m4-ru7-5', 4, RU7_TEXT, 'Which person discovered a way of learning that suits them better?', RU7_SECTIONS, 2, x(
    'Rim (C) : « I discovered that I learn far better without the pressure of exams ».',
    'ريم (C): «I discovered that I learn far better without the pressure of exams».',
    'C: “I learn far better without the pressure of exams”.',
    'Rim (C): «I discovered that I learn far better without the pressure of exams».',
  )),
  ru7('fce-m4-ru7-6', 4, RU7_TEXT, 'Which person felt isolated when they began university?', RU7_SECTIONS, 2, x(
    'Rim (C) : « When I finally started, a year behind them, I felt rather lonely ». Mateo (D) est seul pendant son voyage, pas à l’université.',
    'ريم (C): «When I finally started, a year behind them, I felt rather lonely». أما ماتيو (D) فكان وحيدًا أثناء سفره لا في الجامعة.',
    'C: “When I finally started… I felt rather lonely.”',
    'Rim (C): «When I finally started, a year behind them, I felt rather lonely». Mateo (D) estuvo solo durante el viaje, no en la universidad.',
  )),
  ru7('fce-m4-ru7-7', 3, RU7_TEXT, 'Which person stopped travelling with the friend they had set off with?', RU7_SECTIONS, 3, x(
    'Mateo (D) : « we had fallen out over money and gone our separate ways ».',
    'ماتيو (D): «we had fallen out over money and gone our separate ways».',
    'D: “fallen out over money and gone our separate ways”.',
    'Mateo (D): «we had fallen out over money and gone our separate ways».',
  )),
  ru7('fce-m4-ru7-8', 5, RU7_TEXT, 'Which person overcame a difficulty in dealing with people they did not know?', RU7_SECTIONS, 3, x(
    'Mateo (D) : « it forced me to start conversations with strangers, something I had always been terrible at ».',
    'ماتيو (D): «it forced me to start conversations with strangers, something I had always been terrible at».',
    'D: talking to strangers, “something I had always been terrible at”.',
    'Mateo (D): «it forced me to start conversations with strangers, something I had always been terrible at».',
  )),
  ru7('fce-m4-ru7-9', 4, RU7_TEXT, 'Which person was given a lot of responsibility at a young age?', RU7_SECTIONS, 4, x(
    'Aya (E) : « at nineteen I was trusted with decisions that most people only make in their thirties ».',
    'آية (E): «at nineteen I was trusted with decisions that most people only make in their thirties».',
    'E: “at nineteen I was trusted with decisions…”.',
    'Aya (E): «at nineteen I was trusted with decisions that most people only make in their thirties».',
  )),
  ru7('fce-m4-ru7-10', 4, RU7_TEXT, 'Which person wishes they had rested before starting university?', RU7_SECTIONS, 4, x(
    'Aya (E) : « The one thing I would do differently is take a proper holiday at the end… I spent most of it exhausted ».',
    'آية (E): «The one thing I would do differently is take a proper holiday at the end… I spent most of it exhausted».',
    'E: she would “take a proper holiday at the end”.',
    'Aya (E): «The one thing I would do differently is take a proper holiday at the end… I spent most of it exhausted».',
  )),
];
