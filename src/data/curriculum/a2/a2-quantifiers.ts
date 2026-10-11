import type { Unit } from '../../../types';
import { g, lesson, listen, order, respond, unit, v, x } from '../build';

export const a2Quantifiers: Unit = unit(
  {
    id: 'a2-quantifiers',
    emoji: '🧮',
    level: 2,
    part: 'R5 · L2',
    title: x('Quantités : some, any, much, many', 'الكميات: some وany وmuch وmany', 'Quantities: some, any, much, many', 'Cantidades: some, any, much, many'),
    subtitle: x('Dénombrable ou indénombrable ?', 'معدود أم غير معدود؟', 'Countable or uncountable?', '¿Contable o incontable?'),
    lesson: lesson(
      x('Choisir le bon mot de quantité selon le nom.', 'اختيار كلمة الكمية المناسبة حسب الاسم.', 'Choose the right quantity word for the noun.', 'Elegir la palabra de cantidad adecuada según el sustantivo.'),
      [
        x('Dénombrable : chairs, emails, people. Indénombrable : water, information, money, furniture, advice, traffic (jamais de -s).', 'المعدود: chairs وemails وpeople. وغير المعدود: water وinformation وmoney وfurniture وadvice وtraffic (دون -s أبدًا).', 'Countable vs uncountable nouns (no -s).', 'Contable: chairs, emails, people. Incontable: water, information, money, furniture, advice, traffic (nunca llevan -s).'),
        x('many + dénombrable (many chairs) ; much + indénombrable (much time) ; a lot of va avec les deux.', 'many + معدود (many chairs) وmuch + غير معدود (much time)، وa lot of مع الاثنين.', 'many + countable; much + uncountable; a lot of with both.', 'many + contable (many chairs); much + incontable (much time); a lot of va con los dos.'),
        x('some : phrase affirmative et offres ; any : questions et négations. a few + dénombrable, a little + indénombrable.', 'some: في الإثبات والعروض، وany: في السؤال والنفي. a few + معدود وa little + غير معدود.', 'some / any; a few / a little.', 'some: frases afirmativas y ofrecimientos; any: preguntas y negaciones. a few + contable, a little + incontable.'),
      ],
      'We don’t have any paper, but there are a few pens and some coffee.',
      x('« any » à la négation ; « a few pens » (dénombrable) ; « some coffee » (indénombrable).', '«any» في النفي، و«a few pens» (معدود)، و«some coffee» (غير معدود).', '“any” in negatives; “a few” + countable; “some” + uncountable.', '«any» en negativa; «a few pens» (contable); «some coffee» (incontable).'),
    ),
  },
  [
    g('a2-qt-s1-q1', 2, 'How ___ employees work in this office?', ['many', 'much', 'a little', 'any'], x(
      '« Employees » est dénombrable → « How many ».',
      '«Employees» معدود ← «How many».',
      'Countable → “How many”.',
      '«Employees» es contable → «How many».',
    )),
    g('a2-qt-s1-q2', 2, 'We don’t have ___ time before the meeting.', ['much', 'many', 'a few', 'several'], x(
      '« Time » est indénombrable → « much » (phrase négative).',
      '«Time» غير معدود ← «much» (جملة منفية).',
      'Uncountable → “much”.',
      '«Time» es incontable → «much» (frase negativa).',
    )),
    g('a2-qt-s1-q3', 2, 'Is there ___ milk in the fridge?', ['any', 'many', 'a few', 'few'], x(
      'Question + indénombrable → « any ».',
      'سؤال + غير معدود ← «any».',
      'Question → “any”.',
      'Pregunta + incontable → «any».',
    )),
    g('a2-qt-s1-q4', 2, 'Can I have ___ water, please?', ['some', 'many', 'a few', 'several'], x(
      'Demande polie : « some » (même dans une question).',
      'طلب مهذب: «some» (حتى في السؤال).',
      'Polite request → “some”.',
      'Petición cortés: «some» (incluso en una pregunta).',
    )),
    g('a2-qt-s1-q5', 2, 'There are only ___ chairs left in the room.', ['a few', 'a little', 'much', 'any'], x(
      '« Chairs » est dénombrable → « a few ».',
      '«Chairs» معدود ← «a few».',
      'Countable → “a few”.',
      '«Chairs» es contable → «a few».',
    )),
    g('a2-qt-s1-q6', 2, 'I need ___ information about the course.', ['some', 'many', 'a few', 'an'], x(
      '« Information » est indénombrable : pas de « an » ni de « many ».',
      '«Information» غير معدود: لا «an» ولا «many».',
      '“Information” is uncountable.',
      '«Information» es incontable: ni «an» ni «many».',
    )),
    g('a2-qt-s1-q7', 2, 'We received a lot ___ emails this morning.', ['of', 'from', 'with', 'to'], x(
      'Expression fixe : « a lot of ».',
      'تعبير ثابت: «a lot of».',
      '“A lot of”.',
      'Expresión fija: «a lot of».',
    )),
    order('a2-qt-s1-o1', 'There is not much space in this office', x('Commence par « There is not ».', 'ابدأ بـ «There is not».', 'Start with “There is not”.', 'Empieza por «There is not».'), x(
      '« Space » est indénombrable → « not much space ».',
      '«Space» غير معدود ← «not much space».',
      'Uncountable → “not much”.',
      '«Space» es incontable → «not much space».',
    )),
    respond('a2-qt-s1-l1', 2, 'Do we have any printer paper?', ['Yes, there are some boxes in the cupboard.', 'It’s a printer.', 'No, I don’t print.'], x(
      'On répond en indiquant où se trouve le papier.',
      'نجيب بتحديد مكان الورق.',
      'Say where the paper is.',
      'Se responde indicando dónde está el papel.',
    )),
    listen('a2-qt-s1-l2', 'L4', 2, 'Hello, staff. We have only a few parking spaces today because of the repairs. Please take the bus if you can.', 'What is the problem today?', ['There are few parking spaces', 'The buses are late', 'The office is closed', 'The repairs are finished'], x(
      '« Only a few parking spaces » = peu de places.',
      '«Only a few parking spaces» = أماكن قليلة.',
      '“Only a few parking spaces”.',
      '«Only a few parking spaces» = pocas plazas.',
    )),
  ],
  [
    g('a2-qt-s2-q1', 2, 'How ___ does the ticket cost?', ['much', 'many', 'long', 'lot'], x(
      'Prix (argent, indénombrable) → « How much ».',
      'السعر (مال، غير معدود) ← «How much».',
      'Price → “How much”.',
      'Precio (dinero, incontable) → «How much».',
    )),
    g('a2-qt-s2-q2', 2, 'There aren’t ___ restaurants near our hotel.', ['many', 'much', 'a little', 'a'], x(
      '« Restaurants » dénombrable + négation → « many ».',
      '«Restaurants» معدود + نفي ← «many».',
      'Countable negative → “many”.',
      '«Restaurants» contable + negación → «many».',
    )),
    g('a2-qt-s2-q3', 2, 'She has ___ experience in sales. She started last year.', ['a little', 'a few', 'many', 'several'], x(
      '« Experience » (expérience professionnelle) est indénombrable → « a little ».',
      '«Experience» (خبرة مهنية) غير معدود ← «a little».',
      'Uncountable → “a little”.',
      '«Experience» (experiencia laboral) es incontable → «a little».',
    )),
    g('a2-qt-s2-q4', 2, 'Would you like ___ tea?', ['some', 'any', 'many', 'a few'], x(
      'Offre → « some ».',
      'عرض ← «some».',
      'Offer → “some”.',
      'Ofrecimiento → «some».',
    )),
    g('a2-qt-s2-q5', 2, 'We have very ___ furniture in the new office. It looks empty.', ['little', 'few', 'many', 'much of'], x(
      '« Furniture » est indénombrable → « little » (très peu de).',
      '«Furniture» غير معدود ← «little» (قليل جدًا).',
      'Uncountable → “little”.',
      '«Furniture» es incontable → «little» (muy poco).',
    )),
    g('a2-qt-s2-q6', 2, 'I don’t have ___ questions. Everything is clear.', ['any', 'some', 'much', 'a little'], x(
      'Négation → « any ».',
      'النفي ← «any».',
      'Negative → “any”.',
      'Negación → «any».',
    )),
    v('a2-qt-s2-q7', 2, 'There is too much ___ on the road this morning.', ['traffic', 'cars', 'buses', 'people'], x(
      '« Much » + indénombrable : seul « traffic » convient.',
      '«Much» + غير معدود: تصلح «traffic» فقط.',
      '“Much” needs an uncountable noun: “traffic”.',
      '«Much» + incontable: solo encaja «traffic».',
    )),
    order('a2-qt-s2-o1', 'Do you have any questions about the project', x('Commence par « Do you have ».', 'ابدأ بـ «Do you have».', 'Start with “Do you have”.', 'Empieza por «Do you have».'), x(
      'Question → « any » + pluriel.',
      'سؤال ← «any» + جمع.',
      'Question → “any” + plural.',
      'Pregunta → «any» + plural.',
    )),
    respond('a2-qt-s2-l1', 2, 'How many people are coming to the dinner?', ['About fifteen.', 'Very much.', 'At the restaurant.'], x(
      '« How many » → un nombre.',
      '«How many» ← عدد.',
      '“How many” → a number.',
      '«How many» → un número.',
    )),
    listen('a2-qt-s2-l2', 'L3', 2, 'M: Is there any coffee left?\nW: Just a little. I’ll make some more.', 'What will the woman do?', ['Make more coffee', 'Buy tea', 'Go to the café', 'Drink the coffee'], x(
      '« I’ll make some more » = refaire du café.',
      '«I’ll make some more» = تحضير مزيد من القهوة.',
      '“I’ll make some more”.',
      '«I’ll make some more» = preparar más café.',
    )),
  ],
  [
    g('a2-qt-s3-q1', 2, 'We don’t need ___ chairs. Five is enough.', ['many', 'much', 'a little', 'little'], x(
      '« Chairs » dénombrable → « many ».',
      '«Chairs» معدود ← «many».',
      'Countable → “many”.',
      '«Chairs» contable → «many».',
    )),
    g('a2-qt-s3-q2', 2, 'There is ___ water on the floor. Be careful!', ['some', 'many', 'a few', 'several'], x(
      'Affirmatif + indénombrable → « some ».',
      'إثبات + غير معدود ← «some».',
      'Affirmative uncountable → “some”.',
      'Afirmativa + incontable → «some».',
    )),
    g('a2-qt-s3-q3', 2, 'How ___ money do you need for the trip?', ['much', 'many', 'few', 'lot'], x(
      '« Money » est indénombrable → « How much ».',
      '«Money» غير معدود ← «How much».',
      'Uncountable → “How much”.',
      '«Money» es incontable → «How much».',
    )),
    g('a2-qt-s3-q4', 2, 'He gave me ___ good advice.', ['some', 'a', 'many', 'an'], x(
      '« Advice » (conseil) est indénombrable : « some advice », jamais « an advice ».',
      '«Advice» (نصيحة) غير معدود: «some advice» لا «an advice».',
      '“Advice” is uncountable.',
      '«Advice» (consejo) es incontable: «some advice», nunca «an advice».',
    )),
    g('a2-qt-s3-q5', 2, 'Only ___ people came to the presentation, so it was very quiet.', ['a few', 'a little', 'much', 'any'], x(
      '« People » est dénombrable (pluriel) → « a few ».',
      '«People» معدود (جمع) ← «a few».',
      'Countable → “a few”.',
      '«People» es contable (plural) → «a few».',
    )),
    g('a2-qt-s3-q6', 2, 'Have you got ___ change for the parking machine?', ['any', 'many', 'a few', 'few'], x(
      '« Change » (monnaie) est indénombrable + question → « any ».',
      '«Change» (فكة) غير معدود + سؤال ← «any».',
      'Uncountable question → “any”.',
      '«Change» (monedas sueltas) es incontable + pregunta → «any».',
    )),
    v('a2-qt-s3-q7', 2, 'There is a ___ of paper on my desk. Please take it to recycling.', ['pile', 'pill', 'pail', 'pole'], x(
      '« A pile of paper » = une pile de papier.',
      '«A pile of paper» = كومة من الورق.',
      '“A pile of paper”.',
      '«A pile of paper» = una pila de papel.',
    )),
    order('a2-qt-s3-o1', 'I need some help with this form', x('Commence par « I need ».', 'ابدأ بـ «I need».', 'Start with “I need”.', 'Empieza por «I need».'), x(
      '« Help » est indénombrable → « some help ».',
      '«Help» غير معدود ← «some help».',
      'Uncountable → “some help”.',
      '«Help» es incontable → «some help».',
    )),
    respond('a2-qt-s3-l1', 2, 'Is there any parking near the office?', ['Yes, there’s a garage on the next street.', 'I parked yesterday.', 'It’s a big office.'], x(
      'On répond oui et on indique où.',
      'نجيب بنعم ونحدد المكان.',
      'Yes, and where.',
      'Se responde que sí y se indica dónde.',
    )),
    listen('a2-qt-s3-l2', 'L4', 2, 'Attention, shoppers: we have a lot of fresh bread today, but only a few chocolate cakes left. Get yours before they are gone!', 'What is there only a few of?', ['Chocolate cakes', 'Loaves of bread', 'Shopping bags', 'Fresh fruit'], x(
      '« Only a few chocolate cakes left ». Le pain est abondant (« a lot of »).',
      '«Only a few chocolate cakes left». أما الخبز فكثير («a lot of»).',
      '“Only a few chocolate cakes”.',
      '«Only a few chocolate cakes left». El pan abunda («a lot of»).',
    )),
  ],
);
