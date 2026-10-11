import type { Unit } from '../../../types';
import { g, lesson, listen, order, read, respond, unit, v, x } from '../build';

export const a2Comparatives: Unit = unit(
  {
    id: 'a2-comparatives',
    emoji: '⚖️',
    level: 2,
    part: 'R5 · R7 · L3',
    title: x('Comparer des offres', 'مقارنة العروض', 'Comparing offers', 'Comparar ofertas'),
    subtitle: x('Comparatifs, superlatifs, as … as', 'صيغ المقارنة والتفضيل وas … as', 'Comparatives, superlatives, as … as', 'Comparativos, superlativos, as … as'),
    lesson: lesson(
      x('Comparer des produits, des prix et des services.', 'مقارنة المنتجات والأسعار والخدمات.', 'Compare products, prices and services.', 'Comparar productos, precios y servicios.'),
      [
        x('Adjectif court + -er + than (cheaper than) ; adjectif long : more + adjectif + than (more expensive than).', 'صفة قصيرة + -er + than (cheaper than)، وصفة طويلة: more + صفة + than (more expensive than).', 'Short adjective + -er + than; long: more + adjective + than.', 'Adjetivo corto + -er + than (cheaper than); adjetivo largo: more + adjetivo + than (more expensive than).'),
        x('Superlatif : the + -est (the cheapest) ; the most + adjectif long (the most comfortable).', 'التفضيل: the + -est (the cheapest)، وthe most + صفة طويلة (the most comfortable).', 'Superlative: the -est / the most + long adjective.', 'Superlativo: the + -est (the cheapest); the most + adjetivo largo (the most comfortable).'),
        x('Irréguliers : good → better → the best ; bad → worse → the worst ; far → farther. Égalité : as + adjectif + as.', 'الشاذة: good ← better ← the best، وbad ← worse ← the worst، وfar ← farther. والمساواة: as + صفة + as.', 'Irregular: good, bad, far. Equality: as … as.', 'Irregulares: good → better → the best; bad → worse → the worst; far → farther. Igualdad: as + adjetivo + as.'),
      ],
      'The new office is bigger and more modern than the old one.',
      x('« bigger » (court : -er, consonne doublée) ; « more modern » (adjectif plus long).', '«bigger» (قصيرة: -er مع مضاعفة الحرف) و«more modern» (صفة أطول).', '“bigger” (-er); “more modern” (longer adjective).', '«bigger» (corto: -er, con consonante doblada); «more modern» (adjetivo más largo).'),
    ),
  },
  [
    g('a2-cp-s1-q1', 2, 'The train is ___ than the bus.', ['faster', 'fast', 'fastest', 'more fast'], x(
      'Adjectif court + -er + than : « faster than ».',
      'صفة قصيرة + -er + than: «faster than».',
      'Short adjective + -er + than.',
      'Adjetivo corto + -er + than: «faster than».',
    )),
    g('a2-cp-s1-q2', 2, 'This hotel is ___ than the one near the station.', ['more comfortable', 'comfortabler', 'most comfortable', 'comfortable'], x(
      'Adjectif long → « more comfortable than ».',
      'صفة طويلة ← «more comfortable than».',
      'Long adjective → “more … than”.',
      'Adjetivo largo → «more comfortable than».',
    )),
    g('a2-cp-s1-q3', 2, 'It’s the ___ restaurant in town. Everyone loves it.', ['best', 'better', 'good', 'most good'], x(
      'Superlatif irrégulier de « good » : « the best ».',
      'تفضيل شاذ من «good»: «the best».',
      'Superlative of “good”: “the best”.',
      'Superlativo irregular de «good»: «the best».',
    )),
    g('a2-cp-s1-q4', 2, 'My new phone is not as ___ as my old one.', ['heavy', 'heavier', 'heaviest', 'more heavy'], x(
      '« as … as » encadre l’adjectif à sa forme simple.',
      '«as … as» تحيط بالصفة في شكلها البسيط.',
      '“as … as” takes the plain adjective.',
      '«as … as» rodea al adjetivo en su forma simple.',
    )),
    g('a2-cp-s1-q5', 2, 'The weather today is ___ than yesterday. It’s raining.', ['worse', 'bad', 'worst', 'badder'], x(
      'Comparatif irrégulier de « bad » : « worse ».',
      'المقارنة الشاذة من «bad»: «worse».',
      'Comparative of “bad”: “worse”.',
      'Comparativo irregular de «bad»: «worse».',
    )),
    g('a2-cp-s1-q6', 2, 'Which is the ___ way to the airport?', ['quickest', 'quicker', 'quick', 'most quick'], x(
      '« The » + superlatif d’un adjectif court : « the quickest ».',
      '«The» + تفضيل صفة قصيرة: «the quickest».',
      '“The” + -est.',
      '«The» + superlativo de un adjetivo corto: «the quickest».',
    )),
    read('a2-cp-s1-r1', 'R7', 2, 'Phone plans — Basic: $15 a month, 5 GB · Plus: $25 a month, 20 GB · Max: $40 a month, unlimited data', 'Which plan is the cheapest?', ['Basic', 'Plus', 'Max', 'They all cost the same'], x(
      'Basic coûte 15 $ par mois : c’est le moins cher.',
      'Basic بـ 15 دولارًا شهريًا: هو الأرخص.',
      'Basic ($15) is the cheapest.',
      'Basic cuesta 15 $ al mes: es el más barato.',
    )),
    order('a2-cp-s1-o1', 'Our new office is bigger than the old one', x('Commence par « Our new office ».', 'ابدأ بـ «Our new office».', 'Start with “Our new office”.', 'Empieza por «Our new office».'), x(
      'Sujet + is + comparatif + than + élément comparé.',
      'فاعل + is + صيغة المقارنة + than + المقارَن به.',
      'Subject + is + comparative + than.',
      'Sujeto + is + comparativo + than + elemento comparado.',
    )),
    respond('a2-cp-s1-l1', 2, 'Which hotel is closer to the conference center?', ['The Plaza. It’s a five-minute walk.', 'It’s a nice hotel.', 'Yes, it’s closed.'], x(
      '« Which » → on choisit un hôtel et on justifie. « Closed » ressemble à « closer » : piège.',
      '«Which» ← نختار فندقًا ونبرر. و«closed» تشبه «closer»: فخ.',
      'Pick one; “closed” sounds like “closer”.',
      '«Which» → se elige un hotel y se justifica. «Closed» se parece a «closer»: trampa.',
    )),
    listen('a2-cp-s1-l2', 'L3', 2, 'M: Should we take the train or fly to Madrid?\nW: Let’s fly. It’s more expensive, but it’s much faster.', 'Why does the woman want to fly?', ['It is faster', 'It is cheaper', 'It is more comfortable', 'The train is full'], x(
      '« More expensive, but much faster » : la raison est la rapidité.',
      '«More expensive, but much faster»: السبب هو السرعة.',
      'It is faster.',
      '«More expensive, but much faster»: el motivo es la rapidez.',
    )),
  ],
  [
    g('a2-cp-s2-q1', 2, 'The blue chair is ___ than the black one.', ['cheaper', 'cheap', 'cheapest', 'more cheap'], x(
      '« Cheap » est court : « cheaper than ».',
      '«Cheap» قصيرة: «cheaper than».',
      'Short adjective: “cheaper”.',
      '«Cheap» es corto: «cheaper than».',
    )),
    g('a2-cp-s2-q2', 2, 'This is the ___ interesting book I have ever read.', ['most', 'more', 'very', 'much'], x(
      '« The » + adjectif long au superlatif : « the most interesting ».',
      '«The» + صفة طويلة في التفضيل: «the most interesting».',
      '“The most” + long adjective.',
      '«The» + adjetivo largo en superlativo: «the most interesting».',
    )),
    g('a2-cp-s2-q3', 2, 'Our sales this year are ___ than last year. We are very happy.', ['higher', 'high', 'highest', 'more high'], x(
      'Comparaison avec l’année dernière → « higher than ».',
      'مقارنة بالسنة الماضية ← «higher than».',
      'Comparison → “higher than”.',
      'Comparación con el año pasado → «higher than».',
    )),
    g('a2-cp-s2-q4', 2, 'The second floor is ___ than the first. It has more desks.', ['larger', 'large', 'largest', 'more large'], x(
      '« Large » + -r : « larger than ».',
      'صيغة المقارنة: «Large» + -r ← «larger than».',
      '“Larger than”.',
      '«Large» + -r: «larger than».',
    )),
    g('a2-cp-s2-q5', 2, 'Sara is the ___ person in our team. She is 24.', ['youngest', 'younger', 'young', 'most young'], x(
      'Toute l’équipe → superlatif : « the youngest ».',
      'الفريق كله ← التفضيل: «the youngest».',
      'Whole team → superlative.',
      'Todo el equipo → superlativo: «the youngest».',
    )),
    g('a2-cp-s2-q6', 2, 'Is Tunis ___ from here than Sousse?', ['farther', 'far', 'farthest', 'more far'], x(
      'Comparatif irrégulier de « far » : « farther ».',
      'المقارنة الشاذة من «far»: «farther».',
      'Comparative of “far”: “farther”.',
      'Comparativo irregular de «far»: «farther».',
    )),
    read('a2-cp-s2-r1', 'R7', 2, 'Delivery options — Standard: 5 days, free · Fast: 2 days, $8 · Next day: $15', 'Which option is the fastest?', ['Next day', 'Fast', 'Standard', 'They are all the same'], x(
      '« Next day » (le lendemain) est plus rapide que 2 jours.',
      '«Next day» (في اليوم التالي) أسرع من يومين.',
      '“Next day” is the fastest.',
      '«Next day» (al día siguiente) es más rápido que 2 días.',
    )),
    v('a2-cp-s2-q7', 2, 'This laptop is ___ than the other one, so I can carry it easily.', ['lighter', 'louder', 'longer', 'lower'], x(
      'On le porte facilement parce qu’il est plus léger : « lighter ».',
      'نحمله بسهولة لأنه أخف: «lighter».',
      'Easy to carry → “lighter”.',
      'Se lleva fácilmente porque es más ligero: «lighter».',
    )),
    respond('a2-cp-s2-l1', 2, 'Is the new printer better than the old one?', ['Yes, it’s much faster.', 'It’s on the second floor.', 'No, I printed it.'], x(
      'Oui / non + justification : « much faster ».',
      'نعم/لا مع التبرير: «much faster».',
      'Yes, with a reason.',
      'Sí / no + justificación: «much faster».',
    )),
    listen('a2-cp-s2-l2', 'L4', 2, 'Good news for shoppers! Our new store is twice as big as the old one, and it is open longer: from 8 a.m. to 10 p.m.', 'What is said about the new store?', ['It is bigger than the old one', 'It is cheaper', 'It is closer to the station', 'It opens later'], x(
      '« Twice as big as the old one » = deux fois plus grand.',
      '«Twice as big as the old one» = أكبر بمرتين.',
      '“Twice as big”.',
      '«Twice as big as the old one» = el doble de grande.',
    )),
  ],
  [
    g('a2-cp-s3-q1', 2, 'The meeting room on the fifth floor is ___ than this one.', ['brighter', 'bright', 'brightest', 'more bright'], x(
      'Adjectif court + -er : « brighter ».',
      'صفة قصيرة + -er: «brighter».',
      '“Brighter”.',
      'Adjetivo corto + -er: «brighter».',
    )),
    g('a2-cp-s3-q2', 2, 'This is the ___ expensive phone in the shop. It costs only $90.', ['least', 'less', 'little', 'lower'], x(
      '« The least expensive » = le moins cher (superlatif de « less »).',
      '«The least expensive» = الأقل ثمنًا (تفضيل «less»).',
      '“The least expensive” = the cheapest.',
      '«The least expensive» = el menos caro (superlativo de «less»).',
    )),
    g('a2-cp-s3-q3', 2, 'His English is ___ than mine.', ['better', 'good', 'best', 'more good'], x(
      'Comparatif de « good » : « better ».',
      'المقارنة من «good»: «better».',
      'Comparative of “good”.',
      'Comparativo de «good»: «better».',
    )),
    g('a2-cp-s3-q4', 2, 'The new software is ___ to use than the old system.', ['easier', 'easy', 'easiest', 'more easy'], x(
      '« Easy » → « easier » (le y devient i).',
      '«Easy» ← «easier» (تتحول y إلى i).',
      '“Easy” → “easier”.',
      '«Easy» → «easier» (la y pasa a i).',
    )),
    g('a2-cp-s3-q5', 2, 'Today is the ___ day of the year so far.', ['hottest', 'hotter', 'hot', 'most hot'], x(
      'Superlatif de « hot » : consonne doublée, « the hottest ».',
      'تفضيل «hot» مع مضاعفة الحرف: «the hottest».',
      '“The hottest”.',
      'Superlativo de «hot» con consonante doblada: «the hottest».',
    )),
    g('a2-cp-s3-q6', 2, 'The red dress is as ___ as the green one.', ['expensive', 'more expensive', 'most expensive', 'expensiver'], x(
      'Égalité : as + adjectif simple + as.',
      'المساواة: as + صفة بسيطة + as.',
      'Equality: as + adjective + as.',
      'Igualdad: as + adjetivo simple + as.',
    )),
    read('a2-cp-s3-r1', 'R7', 2, 'Survey results — Favorite lunch option: Salad bar 42% · Sandwiches 35% · Hot meals 23%', 'Which lunch option is the most popular?', ['The salad bar', 'Sandwiches', 'Hot meals', 'None of them'], x(
      'Le bar à salades a le pourcentage le plus élevé (42 %).',
      'ركن السلطات لديه أعلى نسبة (42٪).',
      'Salad bar: 42%.',
      'La barra de ensaladas tiene el porcentaje más alto (42 %).',
    )),
    order('a2-cp-s3-o1', 'This is the best hotel in the city', x('Commence par « This is ».', 'ابدأ بـ «This is».', 'Start with “This is”.', 'Empieza por «This is».'), x(
      'the + superlatif + nom + in + lieu.',
      'the + صيغة التفضيل + اسم + in + مكان.',
      'the + superlative + noun + in + place.',
      'the + superlativo + sustantivo + in + lugar.',
    )),
    respond('a2-cp-s3-l1', 2, 'Which color do you prefer, blue or grey?', ['Blue, I think. It’s brighter.', 'Yes, I do.', 'It’s a grey car.'], x(
      'Question à choix → choisir et justifier.',
      'سؤال اختيار ← نختار ونبرر.',
      'Choose and justify.',
      'Pregunta de elección → elegir y justificar.',
    )),
    listen('a2-cp-s3-l2', 'L3', 2, 'W: This apartment is nice, but it’s far from the office.\nM: The other one is closer, but it’s smaller and more expensive.', 'What is true about the other apartment?', ['It is closer to the office', 'It is bigger', 'It is cheaper', 'It is farther from the office'], x(
      '« The other one is closer » ; il est aussi plus petit et plus cher.',
      '«The other one is closer»، وهي أيضًا أصغر وأغلى.',
      '“Closer”, but smaller and more expensive.',
      '«The other one is closer»; además es más pequeño y más caro.',
    )),
  ],
);
