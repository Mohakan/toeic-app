import type { Unit } from '../../../types';
import { g, lesson, listen, order, respond, unit, v, x } from '../build';

export const a1PresentSimple: Unit = unit(
  {
    id: 'a1-present-simple',
    emoji: '🔁',
    level: 1,
    part: 'R5 · L2',
    title: x('Le présent simple au quotidien', 'المضارع البسيط في الحياة اليومية', 'The present simple every day', 'El presente simple en el día a día'),
    subtitle: x('Habitudes, négations et questions', 'العادات والنفي والأسئلة', 'Habits, negatives and questions', 'Hábitos, negaciones y preguntas'),
    lesson: lesson(
      x('Parler des habitudes et du travail de tous les jours.', 'التحدث عن العادات والعمل اليومي.', 'Talk about habits and everyday work.', 'Hablar de hábitos y del trabajo diario.'),
      [
        x('Avec he / she / it, le verbe prend -s : she works, he goes, it opens.', 'مع he/she/it يأخذ الفعل -s: she works وhe goes وit opens.', 'With he / she / it, add -s: she works, he goes, it opens.', 'Con he / she / it, el verbo lleva -s: she works, he goes, it opens.'),
        x('Négation : do not / does not + verbe de base (she does not work).', 'النفي: do not/does not + الفعل الأساسي (she does not work).', 'Negative: do not / does not + base verb (she does not work).', 'Negación: do not / does not + verbo base (she does not work).'),
        x('Question : Do / Does + sujet + verbe de base (Does he work here?).', 'السؤال: Do/Does + فاعل + فعل أساسي (Does he work here?).', 'Question: Do / Does + subject + base verb (Does he work here?).', 'Pregunta: Do / Does + sujeto + verbo base (Does he work here?).'),
      ],
      'Ms. Lee starts work at eight, but she does not work on Fridays.',
      x('« starts » prend -s ; à la négation, « does not work » s’écrit sans -s.', '«starts» تأخذ -s، وفي النفي «does not work» دون -s.', '“starts” takes -s; the negative “does not work” has no -s.', '«starts» lleva -s; en negativa, «does not work» va sin -s.'),
    ),
  },
  [
    g('a1-ps-s1-q1', 1, 'Mr. Okafor ___ the office at 6 p.m. every day.', ['leaves', 'leave', 'leaving', 'is leave'], x(
      'Habitude (« every day ») et sujet « he » : présent simple avec -s, « leaves ».',
      'عادة («every day») والفاعل «he»: مضارع بسيط مع -s، «leaves».',
      'A habit with “he”: present simple with -s.',
      'Hábito («every day») y sujeto «he»: presente simple con -s, «leaves».',
    )),
    g('a1-ps-s1-q2', 1, 'The shop ___ on Sundays.', ['does not open', 'do not open', 'not opens', 'no open'], x(
      '« The shop » = it : négation « does not » + verbe de base.',
      '«The shop» = it: النفي «does not» + الفعل الأساسي.',
      '“The shop” = it: “does not” + base verb.',
      '«The shop» = it: negación «does not» + verbo base.',
    )),
    g('a1-ps-s1-q3', 1, '___ your manager speak French?', ['Does', 'Do', 'Is', 'Are'], x(
      'Question au présent simple avec « your manager » (= he / she) : « Does ».',
      'سؤال في المضارع البسيط مع «your manager» (= he/she): «Does».',
      'Present simple question with he/she: “Does”.',
      'Pregunta en presente simple con «your manager» (= he / she): «Does».',
    )),
    g('a1-ps-s1-q4', 1, 'We usually ___ lunch at noon.', ['have', 'has', 'having', 'are have'], x(
      'Avec « we », pas de -s : « have ».',
      'مع «we» لا نضيف -s: «have».',
      'With “we”, no -s: “have”.',
      'Con «we», sin -s: «have».',
    )),
    g('a1-ps-s1-q5', 1, 'My colleagues ___ the train to work.', ['take', 'takes', 'taking', 'is taking'], x(
      '« My colleagues » = they : forme de base « take ». « Is taking » ne s’accorde pas avec un pluriel.',
      '«My colleagues» = they: الشكل الأساسي «take». و«is taking» لا تتوافق مع الجمع.',
      '“My colleagues” = they: base form “take”.',
      '«My colleagues» = they: forma base «take». «Is taking» no concuerda con un plural.',
    )),
    g('a1-ps-s1-q6', 1, 'She ___ not like long meetings.', ['does', 'do', 'is', 'has'], x(
      'Négation avec « she » : does not + verbe de base.',
      'النفي مع «she»: does not + فعل أساسي.',
      'Negative with “she”: does not + base verb.',
      'Negación con «she»: does not + verbo base.',
    )),
    v('a1-ps-s1-q7', 1, 'I ___ my emails every morning before the meeting.', ['check', 'cook', 'close', 'call'], x(
      '« Check my emails » = consulter mes e-mails.',
      '«Check my emails» = أتفقد بريدي الإلكتروني.',
      '“Check my emails”.',
      '«Check my emails» = revisar mis correos.',
    )),
    order('a1-ps-s1-o1', 'He does not work on Fridays', x('La négation est « does not ».', 'النفي هو «does not».', 'The negative is “does not”.', 'La negación es «does not».'), x(
      'Sujet + does not + verbe de base + moment.',
      'فاعل + does not + فعل أساسي + وقت.',
      'Subject + does not + base verb + time.',
      'Sujeto + does not + verbo base + momento.',
    )),
    order('a1-ps-s1-o2', 'Do you start work at eight', x('Commence par « Do » : c’est une question.', 'ابدأ بـ «Do»: إنه سؤال.', 'Start with “Do”: it is a question.', 'Empieza por «Do»: es una pregunta.'), x(
      'Question : Do + sujet + verbe de base + complément.',
      'السؤال: Do + فاعل + فعل أساسي + متمم.',
      'Question: Do + subject + base verb + complement.',
      'Pregunta: Do + sujeto + verbo base + complemento.',
    )),
    respond('a1-ps-s1-l1', 1, 'Do you work on Saturdays?', ['No, only from Monday to Friday.', 'Yes, I am.', 'At the office.'], x(
      'À « Do you…? », on répond avec « do », pas « am ». La bonne réponse précise les jours.',
      'على «Do you…?» نجيب بـ «do» لا «am». الإجابة الصحيحة تحدد الأيام.',
      '“Do you…?” is not answered with “I am”.',
      'A «Do you…?» se responde con «do», no con «am». La respuesta correcta precisa los días.',
    )),
  ],
  [
    g('a1-ps-s2-q1', 1, 'The bank ___ at 9 a.m. from Monday to Friday.', ['opens', 'open', 'opening', 'are open'], x(
      '« The bank » = it : « opens ».',
      'الفاعل «The bank» مفرد (= it)، فنضيف s: «opens».',
      '“The bank” = it: “opens”.',
      '«The bank» = it: «opens».',
    )),
    g('a1-ps-s2-q2', 1, 'Ms. Diaz ___ three languages.', ['speaks', 'speak', 'speaking', 'is speak'], x(
      'Fait général avec « she » : « speaks ».',
      'حقيقة عامة مع «she»: «speaks».',
      'A general fact with “she”: “speaks”.',
      'Hecho general con «she»: «speaks».',
    )),
    g('a1-ps-s2-q3', 1, 'They ___ live in the city center.', ['do not', 'does not', 'are not', 'not'], x(
      'Avec « they » : do not + verbe de base. « Are not live » est incorrect.',
      'مع «they»: do not + فعل أساسي. و«are not live» خطأ.',
      'With “they”: do not + base verb.',
      'Con «they»: do not + verbo base. «Are not live» es incorrecto.',
    )),
    g('a1-ps-s2-q4', 1, '___ the train stop at this station?', ['Does', 'Do', 'Is', 'Has'], x(
      '« The train » = it : « Does … stop? ».',
      'الفاعل «The train» مفرد (= it)، فالسؤال بـ «Does … stop?».',
      '“The train” = it: “Does … stop?”.',
      '«The train» = it: «Does … stop?».',
    )),
    g('a1-ps-s2-q5', 1, 'Our team ___ every Monday at ten.', ['meets', 'meet', 'meeting', 'is meet'], x(
      '« Our team » = it : « meets ».',
      'الفاعل «Our team» مفرد (= it)، فنقول «meets».',
      '“Our team” = it: “meets”.',
      '«Our team» = it: «meets».',
    )),
    g('a1-ps-s2-q6', 1, 'How ___ you go to work?', ['do', 'does', 'are', 'is'], x(
      'Question avec « you » : « How do you… ? ».',
      'سؤال مع «you»: «How do you…?».',
      'Question with “you”: “How do you…?”.',
      'Pregunta con «you»: «How do you…?».',
    )),
    v('a1-ps-s2-q7', 1, 'I ___ at a bank in the city center.', ['work', 'word', 'worry', 'wear'], x(
      '« Work at a bank » = travailler dans une banque.',
      '«Work at a bank» = يعمل في بنك.',
      '“Work at a bank”.',
      '«Work at a bank» = trabajar en un banco.',
    )),
    order('a1-ps-s2-o1', 'My manager speaks English and Arabic', x('Commence par « My manager ».', 'ابدأ بـ «My manager».', 'Start with “My manager”.', 'Empieza por «My manager».'), x(
      'Sujet (he) + verbe en -s + compléments.',
      'فاعل (he) + فعل بـ -s + متممات.',
      'Subject + -s verb + objects.',
      'Sujeto (he) + verbo con -s + complementos.',
    )),
    order('a1-ps-s2-o2', 'Does the store open on Sundays', x('Commence par « Does ».', 'ابدأ بـ «Does».', 'Start with “Does”.', 'Empieza por «Does».'), x(
      'Does + sujet + verbe de base (open, sans -s).',
      'Does + فاعل + فعل أساسي (open دون -s).',
      'Does + subject + base verb (no -s).',
      'Does + sujeto + verbo base (open, sin -s).',
    )),
    listen('a1-ps-s2-l1', 'L4', 1, 'Hello, I’m Sam. I work in the IT department. I start at nine and I finish at five.', 'What time does Sam finish work?', ['At five', 'At nine', 'At four', 'At six'], x(
      '« I finish at five ». Neuf heures est l’heure du début.',
      '«I finish at five». أما التاسعة فهي وقت البدء.',
      '“I finish at five”; nine is when he starts.',
      '«I finish at five». Las nueve es la hora de empezar.',
    )),
  ],
  [
    g('a1-ps-s3-q1', 1, 'Karim ___ to the gym after work.', ['goes', 'go', 'going', 'gos'], x(
      '« Go » + -es avec he : « goes ».',
      '«Go» مع he يصبح «goes».',
      '“Go” becomes “goes” with “he”.',
      '«Go» con he: «goes».',
    )),
    g('a1-ps-s3-q2', 1, 'The printer ___ work. Please call the technician.', ['does not', 'do not', 'is not', 'not'], x(
      '« The printer » = it : does not + verbe de base.',
      '«The printer» = it: does not + فعل أساسي.',
      '“The printer” = it: does not + base verb.',
      '«The printer» = it: does not + verbo base.',
    )),
    g('a1-ps-s3-q3', 1, 'What time ___ the meeting start?', ['does', 'do', 'is', 'are'], x(
      '« The meeting » = it : « What time does … start? ».',
      'الفاعل «The meeting» مفرد (= it)، فنسأل «What time does … start?».',
      '“The meeting” = it: “does”.',
      '«The meeting» = it: «What time does … start?».',
    )),
    g('a1-ps-s3-q4', 1, 'I ___ coffee, but I drink tea.', ['do not drink', 'does not drink', 'not drink', 'am not drink'], x(
      'Avec « I » : do not + verbe de base.',
      'مع «I»: do not + فعل أساسي.',
      'With “I”: do not + base verb.',
      'Con «I»: do not + verbo base.',
    )),
    g('a1-ps-s3-q5', 1, 'She ___ her emails in the evening.', ['reads', 'read', 'reading', 'is read'], x(
      'Habitude avec « she » : « reads ».',
      'عادة مع «she»: «reads».',
      'A habit with “she”: “reads”.',
      'Hábito con «she»: «reads».',
    )),
    g('a1-ps-s3-q6', 1, 'Our customers ___ online.', ['pay', 'pays', 'paying', 'is pay'], x(
      '« Our customers » = they : « pay ».',
      'الفاعل «Our customers» جمع (= they)، فالفعل «pay» بدون s.',
      '“Our customers” = they: “pay”.',
      '«Our customers» = they: «pay».',
    )),
    v('a1-ps-s3-q7', 1, 'He ___ home at 7 a.m. and arrives at the office at 8.', ['leaves', 'lives', 'loves', 'lifts'], x(
      '« Leave home » = partir de chez soi. « Lives » ressemble à « leaves » : piège.',
      '«Leave home» = يغادر البيت. «Lives» تشبه «leaves»: فخ.',
      '“Leave home”; “lives” looks similar: trap.',
      '«Leave home» = salir de casa. «Lives» se parece a «leaves»: trampa.',
    )),
    order('a1-ps-s3-o1', 'We have lunch in the cafeteria', x('Commence par « We ».', 'ابدأ بـ «We».', 'Start with “We”.', 'Empieza por «We».'), x(
      '« Have lunch » = déjeuner ; le lieu vient à la fin.',
      '«Have lunch» = يتغدى، والمكان في النهاية.',
      '“Have lunch”; the place comes last.',
      '«Have lunch» = almorzar; el lugar va al final.',
    )),
    respond('a1-ps-s3-l1', 1, 'Does Ms. Park work in this building?', ['Yes, on the third floor.', 'She is a park.', 'No, I do.'], x(
      'La bonne réponse confirme et précise l’étage. « Park » est un piège sonore.',
      'الإجابة الصحيحة تؤكد وتحدد الطابق. «Park» فخ صوتي.',
      'It confirms and gives the floor; “park” is a sound trap.',
      'La respuesta correcta confirma y precisa la planta. «Park» es una trampa de sonido.',
    )),
    listen('a1-ps-s3-l2', 'L3', 1, 'M: Do you take the bus to work?\nW: No, I walk. I live near the office.', 'How does the woman go to work?', ['She walks', 'She takes the bus', 'She drives', 'She takes a taxi'], x(
      '« No, I walk » : elle y va à pied.',
      '«No, I walk»: تذهب مشيًا.',
      '“No, I walk”.',
      '«No, I walk»: va andando.',
    )),
  ],
);
