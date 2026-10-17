import type { Unit } from '../../../../types';
import { lesson, unit, x } from '../../../curriculum/build';
import { ru7 } from '../build';

const SECTIONS = ['A', 'B', 'C', 'D'];

const GAP_YEAR = `A — Yousra, Rabat
After my baccalaureate I spent nine months volunteering at a marine research station in the Canary Islands. Most days I counted turtles on the beach at dawn and typed up data in the afternoon, which was less glamorous than the brochure had suggested. What surprised me was how much I enjoyed the routine. I had always thought of myself as someone who needed constant change, but having a fixed timetable made me calmer. My Spanish improved enormously, partly because the other volunteers came from Chile and Argentina and nobody spoke French. I’m now studying biology in Madrid, and the station has already invited me back next summer.

B — Matteo, Turin
My parents weren’t keen on the idea at first. They thought a year off would mean I’d never go back to studying, so I promised to pay for everything myself. I worked in the kitchen of a ski resort for four months, washing dishes for twelve hours a day, and then used the money to travel through South-East Asia. Looking back, the kitchen taught me more than the travelling did: I learnt to keep going when I was exhausted. The trip itself had some low points. I lost my passport in Hanoi and spent a week sorting it out, which was stressful but made me far more organised, and I still plan everything carefully today.

C — Aïcha, Lyon
I didn’t plan a gap year; it happened because I missed the deadline for my university application. Rather than sit at home, I took a job in a bookshop and started an online course in graphic design. By the spring I had designed posters for three local events, and one of them appeared in the regional newspaper. That changed everything. I had always intended to study law, but I applied for a design degree instead. Some friends who went straight to university say I wasted a year. I don’t see it that way at all.

D — Kenji, Osaka
I spent my year teaching English at a primary school in rural Ghana. The first few weeks were hard: I was homesick, and the children found my accent hilarious. I almost came home after a month. What kept me there was a colleague, Ama, who showed me how to plan lessons around games rather than textbooks. By the end, I was the one giving advice to new volunteers. Ama and I have kept in touch, and we’re hoping to write a short guide for teachers together. If anything, I’m sorry I didn’t stay longer.`;

const CITY_APPS = `A — CityHop
CityHop promises to get you anywhere in the city by bus, tram or metro, and on the whole it delivers. Journeys are calculated in seconds, and the live map shows exactly where your tram is, which is reassuring on a cold evening. My main complaint is that after an hour of use my phone was almost flat. The app is free, but an advert appears every time you open it, which quickly becomes irritating. Still, if you have just moved here or are visiting for a weekend, it is the most reliable way to find your way around.

B — GreenPlate
GreenPlate connects you with cafés and bakeries that have food left over at closing time, sold at a fraction of the normal price. Creating an account took ages, because the app kept rejecting my bank card, and I nearly deleted it before I had bought anything. Once that was sorted out, though, it ran smoothly. The choice depends heavily on your address: in the centre there are dozens of shops taking part, but in my suburb there were only two. Even so, I like knowing that perfectly good bread and pastries are not ending up in the bin.

C — Quietly
Quietly is aimed at students and remote workers looking for a calm place to study. Users rate libraries, cafés and parks for noise, wifi and the number of sockets. The idea is brilliant, but the information is only as good as the people who add it, and several of the “silent” cafés I tried turned out to be packed and loud. The team behind it clearly pays attention, however: when I reported that a library had closed, it disappeared from the map within a day. I would recommend it, as long as you do not trust every rating.

D — StreetStories
StreetStories offers audio walking tours narrated by local residents rather than professional guides, and that is what makes it special. On the tour of the old port, a retired fisherman described the harbour as it was fifty years ago, and I found it genuinely moving. Some recordings are of poor quality, with traffic in the background, but somehow that only adds to the charm. Each tour costs three euros, which seems fair. I have already done four, and next month I am going to record one about my own neighbourhood, as the app invites users to do.`;

const YOUNG_BUSINESS = `A — Salma, Tunis
It started with my grandmother’s wardrobe. When she moved into a smaller flat, she gave me bags of old dresses and curtains, and instead of taking them to a charity shop, I turned them into tote bags and sold them to classmates. Two years later I sell online to customers as far away as Canada. People assume the hardest part is the sewing, but I could already do that. What I hadn’t bargained for was having to learn photography from scratch, because nobody buys a bag from a blurry picture. I still work from my bedroom, which my mother tolerates more or less patiently. My one rule is that every bag is made from something that already existed. A supplier has offered me cheap new fabric several times, and I’ve always said no.

B — Lukas, Graz
I make hot sauce. It began as a joke: one summer I grew far too many chillies on my balcony and had no idea what to do with them. A friend tasted my first batch and dared me to sell it at the Saturday market. I sold out in an hour, which was flattering but misleading, because the following weeks were much slower. What I underestimated was the paperwork. Food safety rules are strict, quite rightly, and it took four months and two failed inspections before my kitchen was approved. I very nearly gave up at that point. Now I supply three local restaurants, and the head chef of one of them has started suggesting new flavours, which I find really exciting.

C — Valentina, Bogotá
I set up a dog-walking service in my second year at university, mainly because I needed money and I love animals. I expected it to be a nice little side job. In fact, within six months I had more clients than I could handle, and I had to take on two other students to help. Becoming somebody’s boss at twenty felt strange. One of them was older than me, and at first I found it incredibly awkward to tell him he was late. My grades suffered that year, I’ll admit, and I had to retake an exam. These days I’m stricter with myself: the business gets my afternoons, never my mornings.

D — Youssef, Casablanca
My website matches secondary school pupils with university students who give maths lessons online. The idea came from my own experience: I failed maths at fifteen, and a cousin got me through the next exam over video calls. Building the site was the easy part, since I’d studied programming. Persuading parents to trust it was much harder. For the first year, almost all my customers were people my family knew, and I wondered whether strangers would ever sign up. Then a teacher mentioned the site on a popular radio programme, and the next morning there were two hundred new registrations. I’d love to say I planned that, but it was pure luck.`;

/** Unit fce-u09: multiple matching (Part 7), finding the paraphrase. */
export const fceU09: Unit = unit(
  {
    id: 'fce-u09',
    emoji: '🧩',
    level: 4,
    part: 'RU7',
    title: x(
      'Appariement multiple : trouver la paraphrase',
      'المطابقة المتعددة: البحث عن إعادة الصياغة',
      'Multiple matching: find the paraphrase',
      'Emparejamiento múltiple: encontrar la paráfrasis',
    ),
    subtitle: x(
      'Partie 7 : quatre textes, dix questions',
      'الجزء 7: أربعة نصوص وعشرة أسئلة',
      'Part 7: four texts, ten questions',
      'Parte 7: cuatro textos, diez preguntas',
    ),
    lesson: lesson(
      x(
        'Associer chaque question à la bonne section en repérant une idée reformulée, pas les mêmes mots.',
        'ربط كل سؤال بالقسم الصحيح بالبحث عن فكرة معاد صياغتها، لا عن الكلمات نفسها.',
        'Match each question to a section by spotting a paraphrase, not the same words.',
        'Asociar cada pregunta con la sección correcta buscando una idea reformulada, no las mismas palabras.',
      ),
      [
        x(
          'Lire d’abord les questions et souligner l’idée clé de chacune (un regret, une surprise, une critique…).',
          'اقرأ الأسئلة أولًا وضع خطًا تحت الفكرة الأساسية في كل سؤال (ندم، مفاجأة، انتقاد…).',
          'Read the questions first and underline the key idea.',
          'Leer primero las preguntas y subrayar la idea clave de cada una (un lamento, una sorpresa, una crítica…).',
        ),
        x(
          'La bonne section dit la même chose avec d’autres mots : « almost came home » = « considered giving up ».',
          'القسم الصحيح يقول الشيء نفسه بكلمات أخرى: «almost came home» = «considered giving up».',
          'The answer uses other words: “almost came home” = “considered giving up”.',
          'La sección correcta dice lo mismo con otras palabras: «almost came home» = «considered giving up».',
        ),
        x(
          'Piège : un mot de la question qui apparaît tel quel dans une autre section. Vérifier que l’idée entière correspond (qui, quand, positif ou négatif).',
          'فخ: كلمة من السؤال تظهر حرفيًا في قسم آخر. تأكد من تطابق الفكرة كاملة (من، متى، إيجابي أم سلبي).',
          'Trap: the same word in the wrong section; check the whole idea.',
          'Trampa: una palabra de la pregunta que aparece tal cual en otra sección. Comprobar que toda la idea coincide (quién, cuándo, positivo o negativo).',
        ),
        x(
          'Une même section peut répondre à plusieurs questions : ne pas éliminer une section déjà utilisée.',
          'قد يجيب قسم واحد عن عدة أسئلة: لا تستبعد قسمًا سبق استعماله.',
          'A section can answer several questions.',
          'Una misma sección puede responder a varias preguntas: no descartar una sección ya usada.',
        ),
      ],
      'Question: Who found the work duller than expected? Text: “less glamorous than the brochure had suggested”.',
      x(
        '« duller than expected » reformule « less glamorous than the brochure had suggested ».',
        '«duller than expected» إعادة صياغة لـ «less glamorous than the brochure had suggested».',
        'Same idea, different words.',
        '«duller than expected» reformula «less glamorous than the brochure had suggested».',
      ),
    ),
  },
  [
    ru7('fce-u09-s1-q1', 4, GAP_YEAR, 'Which person changed their mind about what to study?', SECTIONS, 2, x(
      'Aïcha : « I had always intended to study law, but I applied for a design degree instead ».',
      'عائشة: «I had always intended to study law, but I applied for a design degree instead».',
      'C: law → a design degree instead.',
      'Aïcha: «I had always intended to study law, but I applied for a design degree instead».',
    )),
    ru7('fce-u09-s1-q2', 4, GAP_YEAR, 'Which person was surprised to discover that a regular schedule suited them?', SECTIONS, 0, x(
      'Yousra : « What surprised me was how much I enjoyed the routine… a fixed timetable made me calmer ».',
      'يسرى: «What surprised me was how much I enjoyed the routine… a fixed timetable made me calmer».',
      'A: enjoyed the routine, a fixed timetable.',
      'Yousra: «What surprised me was how much I enjoyed the routine… a fixed timetable made me calmer».',
    )),
    ru7('fce-u09-s1-q3', 4, GAP_YEAR, 'Which person made a promise in order to overcome family objections?', SECTIONS, 1, x(
      'Matteo : « My parents weren’t keen… so I promised to pay for everything myself ».',
      'ماتيو: «My parents weren’t keen… so I promised to pay for everything myself».',
      'B: parents not keen → promised to pay.',
      'Matteo: «My parents weren’t keen… so I promised to pay for everything myself».',
    )),
    ru7('fce-u09-s1-q4', 4, GAP_YEAR, 'Which person seriously considered giving up soon after arriving?', SECTIONS, 3, x(
      'Kenji : « I almost came home after a month » = il a failli abandonner.',
      'كينجي: «I almost came home after a month» = كاد يتخلى.',
      'D: “almost came home after a month”.',
      'Kenji: «I almost came home after a month» = estuvo a punto de abandonar.',
    )),
    ru7('fce-u09-s1-q5', 4, GAP_YEAR, 'Which person says an unpleasant incident had a lasting effect on the way they do things?', SECTIONS, 1, x(
      'Matteo : le passeport perdu « made me far more organised, and I still plan everything carefully today ».',
      'ماتيو: ضياع جواز السفر «made me far more organised, and I still plan everything carefully today».',
      'B: lost passport → still plans carefully.',
      'Matteo: el pasaporte perdido «made me far more organised, and I still plan everything carefully today».',
    )),
    ru7('fce-u09-s1-q6', 4, GAP_YEAR, 'Which person had some of their work seen by a wide audience?', SECTIONS, 2, x(
      'Aïcha : une de ses affiches « appeared in the regional newspaper ». Le guide de Kenji n’existe pas encore.',
      'عائشة: أحد ملصقاتها «appeared in the regional newspaper». أما دليل كينجي فلم يُكتب بعد.',
      'C: a poster in the regional newspaper.',
      'Aïcha: uno de sus carteles «appeared in the regional newspaper». La guía de Kenji aún no existe.',
    )),
    ru7('fce-u09-s1-q7', 4, GAP_YEAR, 'Which person found their work duller than they had been led to expect?', SECTIONS, 0, x(
      'Yousra : « less glamorous than the brochure had suggested ».',
      'يسرى: «less glamorous than the brochure had suggested».',
      'A: “less glamorous than the brochure”.',
      'Yousra: «less glamorous than the brochure had suggested».',
    )),
    ru7('fce-u09-s1-q8', 4, GAP_YEAR, 'Which person regrets that their experience did not last longer?', SECTIONS, 3, x(
      'Kenji : « I’m sorry I didn’t stay longer ».',
      'كينجي: «I’m sorry I didn’t stay longer».',
      'D: “sorry I didn’t stay longer”.',
      'Kenji: «I’m sorry I didn’t stay longer».',
    )),
    ru7('fce-u09-s1-q9', 4, GAP_YEAR, 'Which person has been offered the chance to return to the place where they spent the year?', SECTIONS, 0, x(
      'Yousra : « the station has already invited me back next summer ».',
      'يسرى: «the station has already invited me back next summer».',
      'A: “invited me back next summer”.',
      'Yousra: «the station has already invited me back next summer».',
    )),
    ru7('fce-u09-s1-q10', 4, GAP_YEAR, 'Which person feels that a tiring job was more educational than a later part of the year?', SECTIONS, 1, x(
      'Matteo : « the kitchen taught me more than the travelling did ».',
      'ماتيو: «the kitchen taught me more than the travelling did».',
      'B: the kitchen taught more than travelling.',
      'Matteo: «the kitchen taught me more than the travelling did».',
    )),
  ],
  [
    ru7('fce-u09-s2-q1', 4, CITY_APPS, 'In which review does the writer complain that the app uses up a lot of battery?', SECTIONS, 0, x(
      'CityHop : « after an hour of use my phone was almost flat » (batterie presque vide).',
      'CityHop: «after an hour of use my phone was almost flat» (البطارية شبه فارغة).',
      'A: “my phone was almost flat”.',
      'CityHop: «after an hour of use my phone was almost flat» (batería casi agotada).',
    )),
    ru7('fce-u09-s2-q2', 4, CITY_APPS, 'In which review does the writer say the app is more useful in some areas than in others?', SECTIONS, 1, x(
      'GreenPlate : « dozens of shops » dans le centre mais « only two » en banlieue.',
      'GreenPlate: «dozens of shops» في المركز لكن «only two» في الضاحية.',
      'B: dozens in the centre, two in the suburb.',
      'GreenPlate: «dozens of shops» en el centro pero «only two» en las afueras.',
    )),
    ru7('fce-u09-s2-q3', 4, CITY_APPS, 'In which review does the writer say the developers respond quickly when users point out a problem?', SECTIONS, 2, x(
      'Quietly : la bibliothèque fermée signalée « disappeared from the map within a day ».',
      'Quietly: المكتبة المغلقة التي أبلغ عنها «disappeared from the map within a day».',
      'C: fixed “within a day”.',
      'Quietly: la biblioteca cerrada que señaló «disappeared from the map within a day».',
    )),
    ru7('fce-u09-s2-q4', 4, CITY_APPS, 'In which review does the writer intend to add some content of their own to the app?', SECTIONS, 3, x(
      'StreetStories : « next month I am going to record one about my own neighbourhood ».',
      'StreetStories: ينوي الكاتب تسجيل جولة عن حيّه: «next month I am going to record one about my own neighbourhood».',
      'D: going to record a tour.',
      'StreetStories: «next month I am going to record one about my own neighbourhood».',
    )),
    ru7('fce-u09-s2-q5', 4, CITY_APPS, 'In which review does the writer warn that information provided by other users is not always accurate?', SECTIONS, 2, x(
      'Quietly : des cafés notés « silent » étaient « packed and loud » ; « do not trust every rating ».',
      'Quietly: مقاهٍ مصنفة «silent» كانت «packed and loud»؛ «do not trust every rating».',
      'C: “silent” cafés were loud.',
      'Quietly: cafés valorados como «silent» estaban «packed and loud»; «do not trust every rating».',
    )),
    ru7('fce-u09-s2-q6', 4, CITY_APPS, 'In which review does the writer describe almost giving up on the app before really using it?', SECTIONS, 1, x(
      'GreenPlate : « I nearly deleted it before I had bought anything » à cause de la carte bancaire refusée.',
      'GreenPlate: «I nearly deleted it before I had bought anything» بسبب رفض البطاقة البنكية.',
      'B: “nearly deleted it before I had bought anything”.',
      'GreenPlate: «I nearly deleted it before I had bought anything» porque rechazaba su tarjeta.',
    )),
    ru7('fce-u09-s2-q7', 4, CITY_APPS, 'In which review does the writer say a technical weakness actually makes the experience more appealing?', SECTIONS, 3, x(
      'StreetStories : la mauvaise qualité sonore « only adds to the charm ».',
      'StreetStories: رداءة جودة الصوت «only adds to the charm».',
      'D: poor sound “adds to the charm”.',
      'StreetStories: la mala calidad del sonido «only adds to the charm».',
    )),
    ru7('fce-u09-s2-q8', 4, CITY_APPS, 'In which review is the writer annoyed by the way the app earns money?', SECTIONS, 0, x(
      'CityHop est gratuit mais affiche une publicité à chaque ouverture, « which quickly becomes irritating ».',
      'CityHop مجاني لكنه يعرض إعلانًا عند كل فتح، «which quickly becomes irritating».',
      'A: adverts are “irritating”.',
      'CityHop es gratis pero muestra un anuncio cada vez, «which quickly becomes irritating».',
    )),
    ru7('fce-u09-s2-q9', 4, CITY_APPS, 'In which review does the writer recommend the app especially to newcomers and tourists?', SECTIONS, 0, x(
      'CityHop : « if you have just moved here or are visiting for a weekend » = nouveaux arrivants et touristes.',
      'CityHop: «if you have just moved here or are visiting for a weekend» = الوافدون الجدد والسياح.',
      'A: “just moved here or visiting”.',
      'CityHop: «if you have just moved here or are visiting for a weekend» = recién llegados y turistas.',
    )),
    ru7('fce-u09-s2-q10', 4, CITY_APPS, 'In which review does the writer appreciate the app because it helps to reduce waste?', SECTIONS, 1, x(
      'GreenPlate : « good bread and pastries are not ending up in the bin » = moins de gaspillage.',
      'GreenPlate: «good bread and pastries are not ending up in the bin» = هدر أقل.',
      'B: food not ending up in the bin.',
      'GreenPlate: «good bread and pastries are not ending up in the bin» = menos desperdicio.',
    )),
  ],
  [
    ru7('fce-u09-s3-q1', 5, YOUNG_BUSINESS, 'Which person says that an early success gave a false impression of how the business would go?', SECTIONS, 1, x(
      'Lukas : « I sold out in an hour, which was flattering but misleading, because the following weeks were much slower ».',
      'لوكاس: «I sold out in an hour, which was flattering but misleading, because the following weeks were much slower».',
      'B: sold out, “flattering but misleading”.',
      'Lukas: «I sold out in an hour, which was flattering but misleading, because the following weeks were much slower».',
    )),
    ru7('fce-u09-s3-q2', 4, YOUNG_BUSINESS, 'Which person had to master a skill they had not expected to need?', SECTIONS, 0, x(
      'Salma : « What I hadn’t bargained for was having to learn photography from scratch » ; la couture, elle savait déjà la faire.',
      'سلمى: «What I hadn’t bargained for was having to learn photography from scratch»، أما الخياطة فكانت تتقنها من قبل.',
      'A: she “hadn’t bargained for” learning photography.',
      'Salma: «What I hadn’t bargained for was having to learn photography from scratch»; coser ya sabía.',
    )),
    ru7('fce-u09-s3-q3', 4, YOUNG_BUSINESS, 'Which person felt uncomfortable about being in charge of other people?', SECTIONS, 2, x(
      'Valentina : « Becoming somebody’s boss at twenty felt strange… I found it incredibly awkward to tell him he was late ».',
      'فالنتينا: «Becoming somebody’s boss at twenty felt strange… I found it incredibly awkward to tell him he was late».',
      'C: being a boss felt “awkward”.',
      'Valentina: «Becoming somebody’s boss at twenty felt strange… I found it incredibly awkward to tell him he was late».',
    )),
    ru7('fce-u09-s3-q4', 4, YOUNG_BUSINESS, 'Which person admits that the business had a negative effect on their studies?', SECTIONS, 2, x(
      'Valentina : « My grades suffered that year, I’ll admit, and I had to retake an exam ».',
      'فالنتينا: «My grades suffered that year, I’ll admit, and I had to retake an exam».',
      'C: “my grades suffered”.',
      'Valentina: «My grades suffered that year, I’ll admit, and I had to retake an exam».',
    )),
    ru7('fce-u09-s3-q5', 5, YOUNG_BUSINESS, 'Which person has turned down an offer that would go against a principle of their business?', SECTIONS, 0, x(
      'Salma : sa règle est de n’utiliser que des tissus qui existaient déjà, et l’offre de « cheap new fabric », « I’ve always said no ».',
      'سلمى: قاعدتها ألّا تستعمل إلا أقمشة موجودة من قبل، ولذلك رفضت عرض «cheap new fabric»: «I’ve always said no».',
      'A: her “one rule”, so she refused new fabric.',
      'Salma: su regla es usar solo telas que ya existían; ante la «cheap new fabric», «I’ve always said no».',
    )),
    ru7('fce-u09-s3-q6', 4, YOUNG_BUSINESS, 'Which person benefited from publicity that they had not arranged themselves?', SECTIONS, 3, x(
      'Youssef : un professeur a parlé du site à la radio, deux cents inscriptions, et « I’d love to say I planned that, but it was pure luck ».',
      'يوسف: ذكر أستاذ الموقع في برنامج إذاعي فجاءت مئتا تسجيل، و«I’d love to say I planned that, but it was pure luck».',
      'D: a radio mention, “pure luck”.',
      'Youssef: un profesor habló de la web en la radio y «I’d love to say I planned that, but it was pure luck».',
    )),
    ru7('fce-u09-s3-q7', 4, YOUNG_BUSINESS, 'Which person almost abandoned the business because of official requirements?', SECTIONS, 1, x(
      'Lukas : la « paperwork », les règles d’hygiène et « two failed inspections » : « I very nearly gave up at that point ».',
      'لوكاس: الأوراق الإدارية وقواعد السلامة الغذائية و«two failed inspections»: «I very nearly gave up at that point».',
      'B: paperwork and inspections, “nearly gave up”.',
      'Lukas: el papeleo, las normas de higiene y «two failed inspections»: «I very nearly gave up at that point».',
    )),
    ru7('fce-u09-s3-q8', 4, YOUNG_BUSINESS, 'Which person got the idea for the business from a difficulty they had experienced?', SECTIONS, 3, x(
      'Youssef : « The idea came from my own experience: I failed maths at fifteen ». Salma, elle, part d’un cadeau, pas d’une difficulté.',
      'يوسف: «The idea came from my own experience: I failed maths at fifteen». أما فكرة سلمى فجاءت من هدية لا من صعوبة.',
      'D: he “failed maths at fifteen”.',
      'Youssef: «The idea came from my own experience: I failed maths at fifteen». Lo de Salma nace de un regalo, no de una dificultad.',
    )),
    ru7('fce-u09-s3-q9', 5, YOUNG_BUSINESS, 'Which person is pleased that a customer is contributing ideas to their product?', SECTIONS, 1, x(
      'Lukas : un restaurant client, et « the head chef… has started suggesting new flavours, which I find really exciting ».',
      'لوكاس: رئيس الطهاة في أحد المطاعم الزبونة «has started suggesting new flavours, which I find really exciting».',
      'B: a chef he supplies suggests flavours.',
      'Lukas: un restaurante cliente, y «the head chef… has started suggesting new flavours, which I find really exciting».',
    )),
    ru7('fce-u09-s3-q10', 4, YOUNG_BUSINESS, 'Which person now limits the amount of time they give to the business?', SECTIONS, 2, x(
      'Valentina : « the business gets my afternoons, never my mornings » = une limite de temps.',
      'فالنتينا: «the business gets my afternoons, never my mornings» = وضعت حدًّا للوقت.',
      'C: “afternoons, never my mornings”.',
      'Valentina: «the business gets my afternoons, never my mornings» = un límite de tiempo.',
    )),
  ],
);
