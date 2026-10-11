import type { Unit } from '../../../types';
import { g, lesson, listen, order, respond, unit, v, x } from '../build';

export const a2Modals: Unit = unit(
  {
    id: 'a2-modals',
    emoji: '🚦',
    level: 2,
    part: 'R5 · L2',
    title: x('Can, must, should', 'Can وmust وshould', 'Can, must, should', 'Can, must, should'),
    subtitle: x('Capacité, obligation et conseil', 'القدرة والإلزام والنصيحة', 'Ability, obligation and advice', 'Capacidad, obligación y consejo'),
    lesson: lesson(
      x('Exprimer ce qu’on peut, doit ou devrait faire au travail.', 'التعبير عمّا نستطيع أو يجب أو ينبغي فعله في العمل.', 'Say what you can, must or should do at work.', 'Expresar lo que se puede, se debe o conviene hacer en el trabajo.'),
      [
        x('can = capacité ou permission (She can speak Arabic. Can I sit here?) ; can’t = impossibilité.', 'can = القدرة أو الإذن (She can speak Arabic. Can I sit here?)، وcan’t = الاستحالة.', 'can = ability or permission; can’t = impossibility.', 'can = capacidad o permiso (She can speak Arabic. Can I sit here?); can’t = imposibilidad.'),
        x('must / have to = obligation ; mustn’t = interdiction ; don’t have to = ce n’est pas obligatoire.', 'must/have to = الإلزام، وmustn’t = المنع، وdon’t have to = غير ضروري.', 'must / have to = obligation; mustn’t = prohibition; don’t have to = not necessary.', 'must / have to = obligación; mustn’t = prohibición; don’t have to = no es obligatorio.'),
        x('should = conseil (You should arrive early.). Après un modal : verbe de base sans « to » (sauf « have to »).', 'should = النصيحة (You should arrive early.). وبعد الفعل الناقص: فعل أساسي دون «to» (عدا «have to»).', 'should = advice. After a modal: base verb without “to” (except “have to”).', 'should = consejo (You should arrive early.). Después de un modal: verbo base sin «to» (salvo «have to»).'),
      ],
      'Visitors must sign in, but they don’t have to wear a badge.',
      x('« must » = obligation ; « don’t have to » = pas obligatoire (et non interdit).', '«must» = إلزام، و«don’t have to» = غير ضروري (لا ممنوع).', '“must” = required; “don’t have to” = not required (not forbidden).', '«must» = obligación; «don’t have to» = no es obligatorio (no está prohibido).'),
    ),
  },
  [
    g('a2-md-s1-q1', 2, 'All employees ___ wear a badge in the building.', ['must', 'can', 'should to', 'musts'], x(
      'Règle obligatoire → « must » + verbe de base. Un modal ne prend jamais de -s.',
      'قاعدة إلزامية ← «must» + فعل أساسي. والفعل الناقص لا يأخذ -s أبدًا.',
      'A rule → “must” + base verb; modals never take -s.',
      'Norma obligatoria → «must» + verbo base. Un modal nunca lleva -s.',
    )),
    g('a2-md-s1-q2', 2, 'You ___ smoke here. It is forbidden.', ['mustn’t', 'don’t have to', 'shouldn’t to', 'can'], x(
      '« Forbidden » = interdit → « mustn’t ». « Don’t have to » voudrait dire « pas obligé ».',
      '«Forbidden» = ممنوع ← «mustn’t». أما «don’t have to» فتعني «غير مضطر».',
      'Forbidden → “mustn’t”; “don’t have to” = not necessary.',
      '«Forbidden» = prohibido → «mustn’t». «Don’t have to» significaría «no es obligatorio».',
    )),
    g('a2-md-s1-q3', 2, 'Ms. Reyes ___ speak three languages.', ['can', 'must to', 'cans', 'is can'], x(
      'Capacité → « can » + verbe de base.',
      'القدرة ← «can» + فعل أساسي.',
      'Ability → “can”.',
      'Capacidad → «can» + verbo base.',
    )),
    g('a2-md-s1-q4', 2, 'You look tired. You ___ go home early.', ['should', 'must to', 'can to', 'shoulds'], x(
      'Conseil → « should ».',
      'نصيحة ← «should».',
      'Advice → “should”.',
      'Consejo → «should».',
    )),
    g('a2-md-s1-q5', 2, 'The meeting is optional, so you ___ come.', ['don’t have to', 'mustn’t', 'can’t', 'shouldn’t to'], x(
      '« Optional » = facultatif → « don’t have to ».',
      '«Optional» = اختياري ← «don’t have to».',
      'Optional → “don’t have to”.',
      '«Optional» = opcional → «don’t have to».',
    )),
    g('a2-md-s1-q6', 2, 'I ___ finish this report today. My manager needs it tonight.', ['have to', 'has to', 'having to', 'must to'], x(
      'Obligation avec « I » → « have to ». « Must to » est incorrect.',
      'إلزام مع «I» ← «have to». و«must to» خطأ.',
      'Obligation with “I” → “have to”.',
      'Obligación con «I» → «have to». «Must to» es incorrecto.',
    )),
    g('a2-md-s1-q7', 2, '___ I use your phone, please?', ['Can', 'Must', 'Should', 'Have'], x(
      'Demande de permission → « Can I… ? ».',
      'طلب إذن ← «Can I…?».',
      'Asking permission → “Can I…?”.',
      'Pedir permiso → «Can I…?».',
    )),
    order('a2-md-s1-o1', 'You should book the hotel early', x('Commence par « You should ».', 'ابدأ بـ «You should».', 'Start with “You should”.', 'Empieza por «You should».'), x(
      'Sujet + should + verbe de base + complément.',
      'فاعل + should + فعل أساسي + متمم.',
      'Subject + should + base verb.',
      'Sujeto + should + verbo base + complemento.',
    )),
    respond('a2-md-s1-l1', 2, 'Do I have to bring my laptop to the training?', ['No, we’ll give you one there.', 'Yes, I have a laptop.', 'The training is long.'], x(
      'Réponse utile : non, ce n’est pas nécessaire, un ordinateur sera fourni.',
      'رد مفيد: لا داعي لذلك، سيُوفَّر حاسوب.',
      'Not necessary: one will be provided.',
      'Respuesta útil: no hace falta, se le dará uno allí.',
    )),
    listen('a2-md-s1-l2', 'L4', 2, 'Welcome to the factory tour. For your safety, you must wear a helmet at all times. You can take photos in the visitor area only.', 'What must visitors do?', ['Wear a helmet', 'Take photos', 'Stay in the car', 'Sign a contract'], x(
      '« You must wear a helmet » : obligation. Les photos sont seulement permises (« can »).',
      '«You must wear a helmet»: إلزام. أما الصور فمسموحة فقط («can»).',
      '“Must wear a helmet”; photos are only allowed.',
      '«You must wear a helmet»: obligación. Las fotos solo están permitidas («can»).',
    )),
  ],
  [
    g('a2-md-s2-q1', 2, 'Customers ___ pay by card or in cash.', ['can', 'must to', 'cans', 'are can'], x(
      'Possibilité offerte → « can ».',
      'إمكانية متاحة ← «can».',
      'A possibility → “can”.',
      'Posibilidad → «can».',
    )),
    g('a2-md-s2-q2', 2, 'You ___ park in front of the gate. Trucks need the space.', ['mustn’t', 'don’t have to', 'needn’t to', 'can'], x(
      'Interdiction (les camions ont besoin de la place) → « mustn’t ».',
      'منع (الشاحنات تحتاج المكان) ← «mustn’t».',
      'Prohibition → “mustn’t”.',
      'Prohibición (los camiones necesitan el sitio) → «mustn’t».',
    )),
    g('a2-md-s2-q3', 2, 'It’s a holiday tomorrow, so we ___ go to work.', ['don’t have to', 'mustn’t', 'can’t to', 'shouldn’t to'], x(
      'Jour férié : ce n’est pas obligatoire d’aller travailler → « don’t have to ».',
      'عطلة رسمية: الذهاب إلى العمل غير ضروري ← «don’t have to».',
      'A holiday: not necessary → “don’t have to”.',
      'Día festivo: no es obligatorio ir a trabajar → «don’t have to».',
    )),
    g('a2-md-s2-q4', 2, 'You ___ try the new restaurant. The food is great!', ['should', 'must to', 'can to', 'have'], x(
      'Conseil, recommandation → « should ».',
      'نصيحة وتوصية ← «should».',
      'A recommendation → “should”.',
      'Consejo, recomendación → «should».',
    )),
    g('a2-md-s2-q5', 2, 'Sorry, I ___ come to the party. I’m busy.', ['can’t', 'mustn’t', 'shouldn’t', 'don’t'], x(
      'Impossibilité (je suis occupé) → « can’t ».',
      'استحالة (أنا مشغول) ← «can’t».',
      'Impossibility → “can’t”.',
      'Imposibilidad (estoy ocupado) → «can’t».',
    )),
    g('a2-md-s2-q6', 2, 'Passengers ___ show their passports at the gate.', ['have to', 'has to', 'having to', 'haves to'], x(
      '« Passengers » est pluriel → « have to ».',
      '«Passengers» جمع ← «have to».',
      'Plural → “have to”.',
      '«Passengers» es plural → «have to».',
    )),
    v('a2-md-s2-q7', 2, 'You must ___ the form before you leave.', ['complete', 'compete', 'compare', 'complain'], x(
      '« Complete a form » = remplir un formulaire.',
      '«Complete a form» = ملء استمارة.',
      '“Complete a form”.',
      '«Complete a form» = rellenar un formulario.',
    )),
    order('a2-md-s2-o1', 'Can you send me the report today', x('Commence par « Can you ».', 'ابدأ بـ «Can you».', 'Start with “Can you”.', 'Empieza por «Can you».'), x(
      'Demande : Can you + verbe + me + objet + moment.',
      'طلب: Can you + فعل + me + مفعول + وقت.',
      'Request: Can you + verb + me + object + time.',
      'Petición: Can you + verbo + me + objeto + momento.',
    )),
    respond('a2-md-s2-l1', 2, 'Should I call the client now or later?', ['Later is better. He’s in a meeting.', 'Yes, you should.', 'I called him.'], x(
      'Question à choix (now or later) → on choisit, avec une raison.',
      'سؤال اختيار (now or later) ← نختار مع ذكر السبب.',
      'Choose one, with a reason.',
      'Pregunta de elección (now or later) → se elige, con una razón.',
    )),
    listen('a2-md-s2-l2', 'L3', 2, 'W: Can I park here?\nM: Sorry, this area is for staff only. You have to use the visitor parking behind the building.', 'Where does the woman have to park?', ['Behind the building', 'In the staff area', 'On the street', 'In front of the entrance'], x(
      '« You have to use the visitor parking behind the building ».',
      '«You have to use the visitor parking behind the building» أي خلف المبنى.',
      '“Behind the building”.',
      '«You have to use the visitor parking behind the building»: detrás del edificio.',
    )),
  ],
  [
    g('a2-md-s3-q1', 2, 'You ___ be late for the interview. It makes a bad impression.', ['shouldn’t', 'don’t have to', 'can', 'have to'], x(
      'Conseil négatif → « shouldn’t ».',
      'نصيحة بالنفي ← «shouldn’t».',
      'Negative advice → “shouldn’t”.',
      'Consejo negativo → «shouldn’t».',
    )),
    g('a2-md-s3-q2', 2, 'We ___ leave now if we want to catch the train.', ['must', 'can’t', 'mustn’t', 'don’t have to'], x(
      'Nécessité forte (sinon on rate le train) → « must ».',
      'ضرورة قوية (وإلا فاتنا القطار) ← «must».',
      'Strong necessity → “must”.',
      'Necesidad fuerte (si no, perdemos el tren) → «must».',
    )),
    g('a2-md-s3-q3', 2, 'Can you ___ me with these bags?', ['help', 'to help', 'helping', 'helps'], x(
      'Après « can » : verbe de base, sans « to ».',
      'بعد «can»: فعل أساسي دون «to».',
      'After “can”: base verb.',
      'Después de «can»: verbo base, sin «to».',
    )),
    g('a2-md-s3-q4', 2, 'Students ___ use the library until 10 p.m.', ['can', 'must to', 'cans', 'are can'], x(
      'Permission → « can ».',
      'إذن ← «can».',
      'Permission → “can”.',
      'Permiso → «can».',
    )),
    g('a2-md-s3-q5', 2, 'She ___ wear a uniform at work. It’s a rule.', ['has to', 'have to', 'must to', 'having to'], x(
      'Obligation avec « she » → « has to ».',
      'إلزام مع «she» ← «has to».',
      'Obligation with “she” → “has to”.',
      'Obligación con «she» → «has to».',
    )),
    g('a2-md-s3-q6', 2, 'You ___ bring food. Lunch is included.', ['don’t have to', 'mustn’t', 'can’t', 'have to'], x(
      'Le déjeuner est fourni : ce n’est pas nécessaire → « don’t have to ».',
      'الغداء مشمول: لا داعي ← «don’t have to».',
      'Lunch is included: not necessary.',
      'La comida está incluida: no hace falta → «don’t have to».',
    )),
    v('a2-md-s3-q7', 2, 'You should ___ a taxi. It’s raining.', ['take', 'make', 'do', 'have'], x(
      'Collocation : « take a taxi ».',
      'تلازم: «take a taxi».',
      'Collocation: “take a taxi”.',
      'Colocación: «take a taxi».',
    )),
    order('a2-md-s3-o1', 'Employees must not use their phones here', x('« must not » = interdiction.', '«must not» = منع.', '“must not” = prohibition.', '«must not» = prohibición.'), x(
      'Sujet + must not + verbe de base + complément.',
      'فاعل + must not + فعل أساسي + متمم.',
      'Subject + must not + base verb.',
      'Sujeto + must not + verbo base + complemento.',
    )),
    respond('a2-md-s3-l1', 2, 'Can I pay by check?', ['Sorry, we only accept cards and cash.', 'It’s a big check.', 'Yes, I checked it.'], x(
      'Refus poli avec les moyens acceptés. « Checked » est un piège sonore.',
      'رفض مهذب مع ذكر وسائل الدفع المقبولة. و«checked» فخ صوتي.',
      'A polite no; “checked” is a sound trap.',
      'Negativa cortés con los medios aceptados. «Checked» es una trampa de sonido.',
    )),
    listen('a2-md-s3-l2', 'L4', 2, 'Hello, everyone. Before the exam begins, please remember: you can use a pencil, but you must turn off your phone and put your bag at the back of the room.', 'What can candidates use?', ['A pencil', 'Their phone', 'A dictionary', 'Their bag'], x(
      '« You can use a pencil ». Le téléphone doit être éteint.',
      '«You can use a pencil». أما الهاتف فيجب إطفاؤه.',
      '“You can use a pencil”.',
      '«You can use a pencil». El teléfono debe estar apagado.',
    )),
  ],
);
