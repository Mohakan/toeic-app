import type { Unit } from '../../../types';
import { g, lesson, listen, order, respond, unit, v, x } from '../build';

export const a2Plans: Unit = unit(
  {
    id: 'a2-plans',
    emoji: '🗓️',
    level: 2,
    part: 'R5 · L3',
    title: x('Projets et rendez-vous', 'المشاريع والمواعيد', 'Plans and arrangements', 'Planes y citas'),
    subtitle: x('going to, présent continu, will', 'going to والمضارع المستمر وwill', 'going to, present continuous, will', 'going to, presente continuo, will'),
    lesson: lesson(
      x('Parler de projets, de rendez-vous fixés et de décisions immédiates.', 'التحدث عن المشاريع والمواعيد المحددة والقرارات الفورية.', 'Talk about plans, fixed arrangements and instant decisions.', 'Hablar de planes, citas fijadas y decisiones inmediatas.'),
      [
        x('be going to + verbe : projet déjà décidé (We’re going to open a new store.).', 'be going to + فعل: مشروع مقرر مسبقًا (We’re going to open a new store.).', 'be going to: a plan already decided.', 'be going to + verbo: plan ya decidido (We’re going to open a new store.).'),
        x('Présent continu + moment futur : rendez-vous fixé (I’m meeting the client on Monday.).', 'المضارع المستمر + وقت مستقبلي: موعد محدد (I’m meeting the client on Monday.).', 'Present continuous + future time: a fixed arrangement.', 'Presente continuo + momento futuro: cita fijada (I’m meeting the client on Monday.).'),
        x('will : décision prise sur le moment ou offre d’aide (I’ll call him now. I’ll help you.).', 'will: قرار لحظي أو عرض مساعدة (I’ll call him now. I’ll help you.).', 'will: an instant decision or an offer.', 'will: decisión tomada en el momento u ofrecimiento de ayuda (I’ll call him now. I’ll help you.).'),
      ],
      'I’m meeting Ms. Diaz tomorrow, and we’re going to discuss the new budget.',
      x('Rendez-vous fixé (présent continu) et projet décidé (going to).', 'موعد محدد (المضارع المستمر) ومشروع مقرر (going to).', 'An arrangement and a plan.', 'Cita fijada (presente continuo) y plan decidido (going to).'),
    ),
  },
  [
    g('a2-pl-s1-q1', 2, 'Next year, we ___ open a new office in Sfax.', ['are going to', 'going to', 'go to', 'are go'], x(
      'Projet décidé : be + going to + verbe. « Going to » seul est incomplet.',
      'مشروع مقرر: be + going to + فعل. و«going to» وحدها ناقصة.',
      'A plan: be + going to + verb.',
      'Plan decidido: be + going to + verbo. «Going to» solo está incompleto.',
    )),
    g('a2-pl-s1-q2', 2, 'I ___ the client at 3 p.m. tomorrow. It’s in my calendar.', ['am meeting', 'meet', 'met', 'meets'], x(
      'Rendez-vous fixé (dans l’agenda) → présent continu.',
      'موعد محدد (في المفكرة) ← المضارع المستمر.',
      'A fixed arrangement → present continuous.',
      'Cita fijada (en la agenda) → presente continuo.',
    )),
    g('a2-pl-s1-q3', 2, 'The phone is ringing. — Don’t worry, I ___ answer it.', ['will', 'am going', 'answered', 'answers'], x(
      'Décision prise sur le moment → « will ». « Am going » sans « to » est incorrect.',
      'قرار لحظي ← «will». و«am going» دون «to» خطأ.',
      'Instant decision → “will”.',
      'Decisión en el momento → «will». «Am going» sin «to» es incorrecto.',
    )),
    g('a2-pl-s1-q4', 2, 'What ___ you going to do this weekend?', ['are', 'do', 'will', 'is'], x(
      'Question avec going to : « What are you going to… ? ».',
      'السؤال مع going to: «What are you going to…?».',
      '“What are you going to…?”.',
      'Pregunta con going to: «What are you going to…?».',
    )),
    g('a2-pl-s1-q5', 2, 'She ___ start her new job on 1 March.', ['is going to', 'going to', 'will to', 'is go'], x(
      'Projet décidé → « is going to ».',
      'مشروع مقرر ← «is going to».',
      'A decided plan → “is going to”.',
      'Plan decidido → «is going to».',
    )),
    g('a2-pl-s1-q6', 2, 'We ___ to Rome on Friday. The tickets are booked.', ['are flying', 'fly', 'flew', 'flies'], x(
      'Billets réservés = arrangement fixé → présent continu.',
      'التذاكر محجوزة = ترتيب محدد ← المضارع المستمر.',
      'Booked tickets → present continuous.',
      'Billetes reservados = plan fijado → presente continuo.',
    )),
    g('a2-pl-s1-q7', 2, '“This box is heavy.” “I ___ help you.”', ['will', 'am', 'going', 'do'], x(
      'Offre d’aide spontanée → « I will (I’ll) help you ».',
      'عرض مساعدة عفوي ← «I will (I’ll) help you».',
      'A spontaneous offer → “I’ll”.',
      'Ofrecimiento espontáneo → «I will (I’ll) help you».',
    )),
    order('a2-pl-s1-o1', 'We are going to hire two new engineers', x('Commence par « We are going to ».', 'ابدأ بـ «We are going to».', 'Start with “We are going to”.', 'Empieza por «We are going to».'), x(
      'Sujet + be going to + verbe + complément.',
      'فاعل + be going to + فعل + متمم.',
      'Subject + be going to + verb.',
      'Sujeto + be going to + verbo + complemento.',
    )),
    respond('a2-pl-s1-l1', 2, 'What are you doing tomorrow afternoon?', ['I’m visiting a factory.', 'I did it yesterday.', 'At two o’clock.'], x(
      'On décrit son programme avec le présent continu.',
      'نصف برنامجنا بالمضارع المستمر.',
      'Describe your plan.',
      'Se describe el plan con el presente continuo.',
    )),
    listen('a2-pl-s1-l2', 'L3', 2, 'W: Are you coming to the conference next week?\nM: Yes, I’m flying to Lyon on Monday and coming back on Wednesday.', 'When is the man coming back?', ['On Wednesday', 'On Monday', 'Next month', 'On Friday'], x(
      '« Coming back on Wednesday ». Lundi est le jour du départ.',
      '«Coming back on Wednesday». أما الإثنين فيوم السفر.',
      '“Coming back on Wednesday”.',
      '«Coming back on Wednesday». El lunes es el día de salida.',
    )),
  ],
  [
    g('a2-pl-s2-q1', 2, 'They ___ build a new parking lot next year.', ['are going to', 'are going', 'go to', 'going'], x(
      'Projet → be going to + verbe.',
      'مشروع ← be going to + فعل.',
      'A plan → be going to.',
      'Plan → be going to + verbo.',
    )),
    g('a2-pl-s2-q2', 2, 'I ___ lunch with my manager tomorrow.', ['am having', 'have', 'had', 'has'], x(
      'Rendez-vous prévu demain → présent continu.',
      'موعد مقرر غدًا ← المضارع المستمر.',
      'Arrangement → present continuous.',
      'Cita prevista para mañana → presente continuo.',
    )),
    g('a2-pl-s2-q3', 2, 'It’s cold in here. I ___ close the window.', ['will', 'am going', 'closed', 'close to'], x(
      'Décision sur le moment → « will ».',
      'قرار لحظي ← «will».',
      'Instant decision → “will”.',
      'Decisión en el momento → «will».',
    )),
    g('a2-pl-s2-q4', 2, 'Are you ___ to take the train or the bus?', ['going', 'go', 'will', 'went'], x(
      '« Are you going to… ? ».',
      'سؤال عن خطة مستقبلية: «Are you going to…?».',
      '“Are you going to…?”.',
      '«Are you going to…?».',
    )),
    g('a2-pl-s2-q5', 2, 'The new store ___ next month. Everything is ready.', ['is opening', 'opened', 'open', 'opens to'], x(
      'Événement planifié et proche → présent continu.',
      'حدث مخطط وقريب ← المضارع المستمر.',
      'Planned event → present continuous.',
      'Evento planificado y cercano → presente continuo.',
    )),
    g('a2-pl-s2-q6', 2, 'I think it ___ be a great year for the company.', ['will', 'is going', 'going', 'would to'], x(
      'Opinion sur l’avenir (« I think ») → « will ».',
      'رأي في المستقبل («I think») ← «will».',
      'Opinion about the future → “will”.',
      'Opinión sobre el futuro («I think») → «will».',
    )),
    v('a2-pl-s2-q7', 2, 'Ms. Ito is going to ___ the meeting next Monday. She will be in charge.', ['lead', 'lend', 'load', 'leave'], x(
      '« Lead a meeting » = animer une réunion.',
      '«Lead a meeting» = إدارة اجتماع.',
      '“Lead a meeting”.',
      '«Lead a meeting» = dirigir una reunión.',
    )),
    order('a2-pl-s2-o1', 'I am meeting the director on Thursday', x('Commence par « I am meeting ».', 'ابدأ بـ «I am meeting».', 'Start with “I am meeting”.', 'Empieza por «I am meeting».'), x(
      'Rendez-vous : présent continu + jour.',
      'موعد: المضارع المستمر + اليوم.',
      'Arrangement: present continuous + day.',
      'Cita: presente continuo + día.',
    )),
    respond('a2-pl-s2-l1', 2, 'Will you be at the office tomorrow?', ['No, I’m working from home.', 'Yes, I was.', 'The office is big.'], x(
      'Réponse sur le programme de demain.',
      'إجابة عن برنامج الغد.',
      'An answer about tomorrow.',
      'Respuesta sobre el plan de mañana.',
    )),
    listen('a2-pl-s2-l2', 'L4', 2, 'Hi team, quick update: next Friday we are going to have a team lunch at noon. Ali is going to book the restaurant.', 'Who is going to book the restaurant?', ['Ali', 'The whole team', 'The restaurant owner', 'Nobody'], x(
      '« Ali is going to book the restaurant ».',
      '«Ali is going to book the restaurant» أي علي.',
      '“Ali is going to book the restaurant”.',
      '«Ali is going to book the restaurant»: Ali.',
    )),
  ],
  [
    g('a2-pl-s3-q1', 2, 'My sister ___ visit me next week.', ['is going to', 'going to', 'will to', 'goes to'], x(
      'Projet → « is going to ».',
      'مشروع ← «is going to».',
      'A plan → “is going to”.',
      'Plan → «is going to».',
    )),
    g('a2-pl-s3-q2', 2, 'We ___ the new product on 10 June. The date is fixed.', ['are launching', 'launch', 'launched', 'launches'], x(
      'Date fixée → présent continu.',
      'تاريخ محدد ← المضارع المستمر.',
      'A fixed date → present continuous.',
      'Fecha fijada → presente continuo.',
    )),
    g('a2-pl-s3-q3', 2, '“I’m thirsty.” “I ___ get you some water.”', ['will', 'am', 'going', 'do'], x(
      'Offre spontanée → « I’ll get you… ».',
      'عرض عفوي ← «I’ll get you…».',
      'A spontaneous offer → “I’ll”.',
      'Ofrecimiento espontáneo → «I’ll get you…».',
    )),
    g('a2-pl-s3-q4', 2, 'How long ___ you going to stay in Paris?', ['are', 'do', 'will', 'have'], x(
      'Question avec going to : « How long are you going to… ? ».',
      'السؤال مع going to: «How long are you going to…?».',
      '“How long are you going to…?”.',
      'Pregunta con going to: «How long are you going to…?».',
    )),
    g('a2-pl-s3-q5', 2, 'I’m sure you ___ like the new office.', ['will', 'are going', 'liking', 'like to'], x(
      'Prévision personnelle (« I’m sure ») → « will ».',
      'توقّع شخصي («I’m sure») ← «will».',
      'Personal prediction → “will”.',
      'Predicción personal («I’m sure») → «will».',
    )),
    g('a2-pl-s3-q6', 2, 'The director ___ a speech at the event tomorrow.', ['is giving', 'has given', 'gave', 'give'], x(
      'Événement prévu demain → présent continu « is giving ».',
      'حدث مقرر غدًا ← المضارع المستمر «is giving».',
      'Planned for tomorrow → “is giving”.',
      'Evento previsto para mañana → presente continuo «is giving».',
    )),
    v('a2-pl-s3-q7', 2, 'We are going to ___ our new website next month.', ['launch', 'lunch', 'lunge', 'launder'], x(
      '« Launch a website » = lancer un site. « Lunch » est un piège sonore.',
      '«Launch a website» = إطلاق موقع. و«lunch» فخ صوتي.',
      '“Launch”; “lunch” is a sound trap.',
      '«Launch a website» = lanzar una web. «Lunch» es una trampa de sonido.',
    )),
    order('a2-pl-s3-o1', 'Are you going to attend the workshop', x('Commence par « Are you ».', 'ابدأ بـ «Are you».', 'Start with “Are you”.', 'Empieza por «Are you».'), x(
      'Question : Are + sujet + going to + verbe.',
      'سؤال: Are + فاعل + going to + فعل.',
      'Question: Are + subject + going to + verb.',
      'Pregunta: Are + sujeto + going to + verbo.',
    )),
    respond('a2-pl-s3-l1', 2, 'Who is going to present the results?', ['Ms. Fischer, I think.', 'Next Tuesday.', 'Very good results.'], x(
      '« Who » → une personne.',
      '«Who» ← شخص.',
      '“Who” → a person.',
      '«Who» → una persona.',
    )),
    listen('a2-pl-s3-l2', 'L3', 2, 'M: I can’t open this file.\nW: Don’t worry, I’ll send it to you again as a PDF.', 'What will the woman do?', ['Send the file again', 'Open the file', 'Call IT support', 'Print the file'], x(
      '« I’ll send it to you again » : décision immédiate avec « will ».',
      '«I’ll send it to you again»: قرار فوري بـ «will».',
      '“I’ll send it again”.',
      '«I’ll send it to you again»: decisión inmediata con «will».',
    )),
  ],
);
