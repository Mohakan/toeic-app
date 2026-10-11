import type { Unit } from '../../../types';
import { g, lesson, respond, unit, x } from '../build';

export const a1Questions: Unit = unit(
  {
    id: 'a1-questions',
    emoji: '❓',
    level: 1,
    part: 'L2',
    title: x('Les questions en Wh-', 'أسئلة Wh', 'Wh- questions', 'Las preguntas con Wh-'),
    subtitle: x('Partie 2 : question-réponse', 'الجزء 2: سؤال وجواب', 'Part 2: question-response', 'Parte 2: pregunta-respuesta'),
    lesson: lesson(
      x('Identifier le mot interrogatif pour trouver la bonne réponse.', 'تحديد أداة الاستفهام لإيجاد الإجابة الصحيحة.', 'Identify the question word to find the right answer.', 'Identificar la palabra interrogativa para encontrar la respuesta correcta.'),
      [
        x('Who → une personne · Where → un lieu · When → un moment · Why → une raison · How much → un prix.', 'Who ← شخص · Where ← مكان · When ← وقت · Why ← سبب · How much ← سعر.', 'Who → person · Where → place · When → time · Why → reason · How much → price.', 'Who → una persona · Where → un lugar · When → un momento · Why → una razón · How much → un precio.'),
        x('Une question en Wh- ne se répond jamais par « Yes » ou « No ».', 'لا يُجاب عن سؤال Wh أبدًا بـ «Yes» أو «No».', 'A Wh- question is never answered with “Yes” or “No”.', 'Una pregunta con Wh- nunca se responde con «Yes» o «No».'),
        x('Méfie-toi des réponses qui répètent un mot de la question.', 'احذر من الإجابات التي تكرّر كلمة من السؤال.', 'Beware of answers that repeat a word from the question.', 'Desconfía de las respuestas que repiten una palabra de la pregunta.'),
      ],
      'Where is the meeting room? — On the fifth floor.',
      x('« Where » → réponse avec un lieu.', '«Where» ← جواب بمكان.', '“Where” → a place.', '«Where» → un lugar.'),
    ),
  },
  [
    respond('a1-q-l1', 1, 'Who is your manager?', ['Mr. Trabelsi.', 'On Monday.', 'In the office.'], x(
      '« Who » → une personne : « Mr. Trabelsi ».',
      '«Who» ← شخص: «Mr. Trabelsi».',
      '“Who” → a person.',
      '«Who» → una persona: «Mr. Trabelsi».',
    )),
    respond('a1-q-l2', 1, 'Where is the cafeteria?', ['Next to the elevator.', 'At noon.', 'A sandwich, please.'], x(
      '« Where » → un lieu : « Next to the elevator ».',
      '«Where» ← مكان: «Next to the elevator».',
      '“Where” → a place.',
      '«Where» → un lugar: «Next to the elevator».',
    )),
    respond('a1-q-l3', 1, 'How much is the ticket?', ['Twelve dollars.', 'Two tickets.', 'At the station.'], x(
      '« How much » → un prix. « Two tickets » répète le mot « ticket » : piège.',
      '«How much» ← سعر. «Two tickets» تكرر كلمة «ticket»: فخ.',
      '“How much” → a price. “Two tickets” repeats a word: trap.',
      '«How much» → un precio. «Two tickets» repite la palabra «ticket»: trampa.',
    )),
    respond('a1-q-l4', 1, 'Why are you late?', ['My train was delayed.', 'At eight o’clock.', 'Yes, I am.'], x(
      '« Why » → une raison.',
      '«Why» ← سبب.',
      '“Why” → a reason.',
      '«Why» → una razón.',
    )),
    respond('a1-q-l5', 1, 'Which floor is the sales department on?', ['The fourth one.', 'Very good sales.', 'Yes, it is.'], x(
      '« Which floor » → un étage précis.',
      '«Which floor» ← طابق محدد.',
      '“Which floor” → a specific floor.',
      '«Which floor» → una planta concreta.',
    )),
    respond('a1-q-l6', 1, 'How do you go to work?', ['By bus.', 'Every day.', 'At the factory.'], x(
      '« How do you go » → un moyen de transport.',
      '«How do you go» ← وسيلة نقل.',
      '“How do you go” → a means of transport.',
      '«How do you go» → un medio de transporte.',
    )),
    g('a1-q-q1', 1, '___ is the new receptionist? — Her name is Sara.', ['Who', 'Where', 'When', 'Why'], x(
      'La réponse donne une personne : « Who ».',
      'الجواب يذكر شخصًا: «Who».',
      'The answer is a person: “Who”.',
      'La respuesta es una persona: «Who».',
    )),
  ],
  [
    respond('a1-q-s2-l1', 1, 'Who is the new receptionist?', ['Ms. Farah Kaci.', 'At the front desk.', 'Yes, she is.'], x(
      '« Who » → une personne : « Ms. Farah Kaci ».',
      '«Who» ← شخص: «Ms. Farah Kaci».',
      '“Who” → a person.',
      '«Who» → una persona: «Ms. Farah Kaci».',
    )),
    respond('a1-q-s2-l2', 1, 'Where can I buy a ticket?', ['At the machine over there.', 'Ten dollars.', 'Yes, you can.'], x(
      '« Where » → un lieu. « Ten dollars » répondrait à « How much ».',
      '«Where» ← مكان. «Ten dollars» تجيب عن «How much».',
      '“Where” → a place; “Ten dollars” answers “How much”.',
      '«Where» → un lugar. «Ten dollars» respondería a «How much».',
    )),
    respond('a1-q-s2-l3', 1, 'Why is the shop closed?', ['It’s a public holiday.', 'At six o’clock.', 'Near the bank.'], x(
      '« Why » → une raison : un jour férié.',
      '«Why» ← سبب: عطلة رسمية.',
      '“Why” → a reason.',
      '«Why» → una razón: un día festivo.',
    )),
    respond('a1-q-s2-l4', 1, 'How much is this bag?', ['Thirty dollars.', 'It’s black.', 'In the shop.'], x(
      '« How much » → un prix.',
      '«How much» ← سعر.',
      '“How much” → a price.',
      '«How much» → un precio.',
    )),
    respond('a1-q-s2-l5', 1, 'When does the bus come?', ['In five minutes.', 'At the bus stop.', 'By bus.'], x(
      '« When » → un moment. « At the bus stop » est un lieu.',
      '«When» ← وقت. «At the bus stop» مكان.',
      '“When” → a time; the bus stop is a place.',
      '«When» → un momento. «At the bus stop» es un lugar.',
    )),
    respond('a1-q-s2-l6', 1, 'Which room is ours?', ['The one on the left.', 'Yes, it is.', 'At ten.'], x(
      '« Which » demande de choisir : « The one on the left ».',
      '«Which» يطلب تحديد واحد: «The one on the left».',
      '“Which” asks to pick one.',
      '«Which» pide elegir: «The one on the left».',
    )),
    respond('a1-q-s2-l7', 1, 'How do I get to the station?', ['Turn left at the bank.', 'At eight o’clock.', 'Two tickets.'], x(
      '« How do I get to… » → un itinéraire.',
      '«How do I get to…» ← طريق الوصول.',
      '“How do I get to…” → directions.',
      '«How do I get to…» → una indicación del camino.',
    )),
    respond('a1-q-s2-l8', 1, 'What is your phone number?', ['It’s 555-0192.', 'On my desk.', 'Yes, I have a phone.'], x(
      '« What is your phone number » → un numéro.',
      '«What is your phone number» ← رقم.',
      'The answer is a number.',
      '«What is your phone number» → un número.',
    )),
    g('a1-q-s2-q1', 1, '___ is your office? — On the second floor.', ['Where', 'Who', 'When', 'Why'], x(
      'La réponse est un lieu → « Where ».',
      'الجواب مكان ← «Where».',
      'The answer is a place → “Where”.',
      'La respuesta es un lugar → «Where».',
    )),
    g('a1-q-s2-q2', 1, '___ does the class start? — At 10 a.m.', ['When', 'Where', 'Who', 'How much'], x(
      'La réponse est une heure → « When ».',
      'الجواب ساعة ← «When».',
      'The answer is a time → “When”.',
      'La respuesta es una hora → «When».',
    )),
  ],
  [
    respond('a1-q-s3-l1', 1, 'Who wrote this report?', ['Karim did.', 'Yesterday.', 'It’s ten pages.'], x(
      '« Who » → une personne : « Karim did ».',
      '«Who» ← شخص: «Karim did».',
      '“Who” → a person.',
      '«Who» → una persona: «Karim did».',
    )),
    respond('a1-q-s3-l2', 1, 'Where are the files?', ['In the top drawer.', 'Yes, they are.', 'This morning.'], x(
      '« Where » → un lieu.',
      '«Where» ← مكان.',
      '“Where” → a place.',
      '«Where» → un lugar.',
    )),
    respond('a1-q-s3-l3', 1, 'What time is lunch?', ['At twelve thirty.', 'A sandwich.', 'In the cafeteria.'], x(
      '« What time » → une heure. « A sandwich » répète l’idée de repas : piège.',
      '«What time» ← ساعة. «A sandwich» تستغل فكرة الغداء: فخ.',
      '“What time” → a time; “A sandwich” plays on “lunch”.',
      '«What time» → una hora. «A sandwich» juega con la idea de comida: trampa.',
    )),
    respond('a1-q-s3-l4', 1, 'Why are you here so early?', ['I have a meeting at eight.', 'By train.', 'Yes, very early.'], x(
      '« Why » → une raison : une réunion à 8 h.',
      '«Why» ← سبب: اجتماع على الساعة الثامنة.',
      '“Why” → a reason.',
      '«Why» → una razón: una reunión a las 8.',
    )),
    respond('a1-q-s3-l5', 1, 'How often do you go to Tunis?', ['Once a month.', 'By car.', 'Two hours.'], x(
      '« How often » → une fréquence. « Two hours » répondrait à « How long ».',
      '«How often» ← تكرار. «Two hours» تجيب عن «How long».',
      '“How often” → frequency; “Two hours” answers “How long”.',
      '«How often» → una frecuencia. «Two hours» respondería a «How long».',
    )),
    respond('a1-q-s3-l6', 1, 'Whose coat is this?', ['I think it’s Omar’s.', 'It’s a black coat.', 'Next to the door.'], x(
      '« Whose » → à qui : « Omar’s » (celui d’Omar).',
      '«Whose» ← لمن: «Omar’s» (لعمر).',
      '“Whose” → who owns it.',
      '«Whose» → de quién: «Omar’s» (el de Omar).',
    )),
    respond('a1-q-s3-l7', 1, 'How many chairs do we need?', ['Twelve, I think.', 'Near the window.', 'On Monday.'], x(
      '« How many » → un nombre.',
      '«How many» ← عدد.',
      '“How many” → a number.',
      '«How many» → un número.',
    )),
    respond('a1-q-s3-l8', 1, 'Can I help you?', ['Yes, I’m looking for Room 4.', 'At the help desk.', 'I helped him.'], x(
      'Offre d’aide → on accepte en disant ce qu’on cherche. Les deux autres répètent « help ».',
      'عرض مساعدة ← نقبل ونذكر ما نبحث عنه. الخياران الآخران يكرران «help».',
      'An offer of help → accept and say what you need.',
      'Ofrecimiento de ayuda → se acepta diciendo lo que se busca. Las otras repiten «help».',
    )),
    g('a1-q-s3-q1', 1, '___ is that man? — He is our new director.', ['Who', 'What', 'Where', 'When'], x(
      'La réponse identifie une personne → « Who ».',
      'الجواب يعرّف بشخص ← «Who».',
      'The answer identifies a person → “Who”.',
      'La respuesta identifica a una persona → «Who».',
    )),
    g('a1-q-s3-q2', 1, '___ much is the ticket? — Five dollars.', ['How', 'What', 'Which', 'Who'], x(
      'Prix → « How much ».',
      'السعر ← «How much».',
      'Price → “How much”.',
      'Precio → «How much».',
    )),
  ],
);
