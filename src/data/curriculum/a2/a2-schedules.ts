import type { Unit } from '../../../types';
import { g, lesson, listen, read, unit, v, x } from '../build';

const TRAINING = 'Training schedule — Monday: Excel basics, Room 2, 9–11 a.m. · Wednesday: Customer service, Room 5, 2–4 p.m. · Friday: Safety, Room 2, 10 a.m.–12 p.m.';
const FERRY = 'Ferry timetable — Tunis to Palermo: departs Tuesday and Friday at 7 p.m. Arrives the next morning at 8 a.m.';
const PROGRAM = 'Conference program — 9:00 Welcome · 9:30 Keynote: Digital marketing (Ms. Okoye) · 11:00 Coffee break · 11:30 Workshops · 13:00 Lunch';
const DOCTORS = 'Doctors’ schedule — Dr. Amri: Monday and Wednesday, 9 a.m.–1 p.m. · Dr. Kahn: Tuesday and Thursday, 2–6 p.m. · Friday: no appointments';
const CINEMA = 'Cinema Atlas — "The Last Train": 4:30 p.m., 7:00 p.m., 9:30 p.m. · "City Lights": 6:00 p.m., 8:45 p.m. · Tickets: $8, students $5';

export const a2Schedules: Unit = unit(
  {
    id: 'a2-schedules',
    emoji: '🗒️',
    level: 2,
    part: 'R7 · L4',
    title: x('Plannings et horaires', 'الجداول والمواعيد', 'Schedules and timetables', 'Horarios y calendarios'),
    subtitle: x('Lire un programme, entendre un changement', 'قراءة برنامج وفهم تغيير', 'Read a program, hear a change', 'Leer un programa, entender un cambio'),
    lesson: lesson(
      x('Trouver vite une heure, un jour ou un lieu dans un planning.', 'إيجاد ساعة أو يوم أو مكان بسرعة في جدول.', 'Find a time, day or place in a schedule quickly.', 'Encontrar rápido una hora, un día o un lugar en un horario.'),
      [
        x('Un planning se lit par colonnes : jour, heure, lieu, personne. Cherche d’abord la colonne que demande la question.', 'يُقرأ الجدول بأعمدة: اليوم والساعة والمكان والشخص. ابحث أولًا عن العمود الذي يطلبه السؤال.', 'Read by columns; look for the one the question asks about.', 'Un horario se lee por columnas: día, hora, lugar, persona. Busca primero la columna que pide la pregunta.'),
        x('Mots utiles : depart / arrive, from … to, every (chaque), daily (tous les jours), weekly, except (sauf).', 'كلمات مفيدة: depart/arrive وfrom … to وevery (كل) وdaily (يوميًا) وweekly وexcept (باستثناء).', 'Useful words: depart, arrive, every, daily, except.', 'Palabras útiles: depart / arrive, from … to, every (cada), daily (a diario), weekly, except (excepto).'),
        x('Attention aux changements : delayed (retardé), cancelled (annulé), moved to (déplacé à), instead of (au lieu de).', 'انتبه للتغييرات: delayed (متأخر) وcancelled (ملغى) وmoved to (نُقل إلى) وinstead of (بدلًا من).', 'Watch for changes: delayed, cancelled, moved to, instead of.', 'Atención a los cambios: delayed (retrasado), cancelled (cancelado), moved to (trasladado a), instead of (en lugar de).'),
      ],
      'Bus 12 — every 20 minutes, 6 a.m. to 11 p.m., except Sundays.',
      x('Fréquence : toutes les 20 minutes ; pas de bus le dimanche.', 'التكرار: كل 20 دقيقة، ولا حافلة يوم الأحد.', 'Every 20 minutes; no bus on Sundays.', 'Frecuencia: cada 20 minutos; no hay autobús los domingos.'),
    ),
  },
  [
    read('a2-sc-s1-r1', 'R7', 2, TRAINING, 'When is the customer service training?', ['Wednesday afternoon', 'Monday morning', 'Friday morning', 'Wednesday morning'], x(
      '« Wednesday: Customer service… 2–4 p.m. » = mercredi après-midi.',
      '«Wednesday: Customer service… 2–4 p.m.» = الأربعاء بعد الظهر.',
      'Wednesday, 2–4 p.m.',
      '«Wednesday: Customer service… 2–4 p.m.» = el miércoles por la tarde.',
    )),
    read('a2-sc-s1-r2', 'R7', 2, TRAINING, 'Which training takes place in Room 5?', ['Customer service', 'Excel basics', 'Safety', 'All of them'], x(
      'Seule la formation « Customer service » a lieu en salle 5.',
      'وحده تدريب «Customer service» في القاعة 5.',
      'Only “Customer service” is in Room 5.',
      'Solo la formación «Customer service» es en la sala 5.',
    )),
    read('a2-sc-s1-r3', 'R7', 2, TRAINING, 'How long is the Excel training?', ['Two hours', 'One hour', 'Three hours', 'Four hours'], x(
      'De 9 h à 11 h = deux heures.',
      'من 9 إلى 11 = ساعتان.',
      '9 to 11 = two hours.',
      'De 9 a 11 = dos horas.',
    )),
    read('a2-sc-s1-r4', 'R7', 2, FERRY, 'On which days does the ferry leave?', ['Tuesday and Friday', 'Every day', 'Monday and Thursday', 'Only on Friday'], x(
      '« Departs Tuesday and Friday ».',
      '«Departs Tuesday and Friday» أي الثلاثاء والجمعة.',
      '“Tuesday and Friday”.',
      '«Departs Tuesday and Friday»: martes y viernes.',
    )),
    read('a2-sc-s1-r5', 'R7', 2, FERRY, 'When does the ferry arrive in Palermo?', ['The next morning', 'The same evening', 'Two days later', 'At 7 p.m.'], x(
      '« Arrives the next morning at 8 a.m. ».',
      '«Arrives the next morning at 8 a.m.» أي صباح اليوم التالي.',
      '“The next morning”.',
      '«Arrives the next morning at 8 a.m.»: a la mañana siguiente.',
    )),
    read('a2-sc-s1-r6', 'R7', 2, 'Gym hours — Weekdays: 6 a.m.–10 p.m. · Weekends: 8 a.m.–6 p.m. · The pool is closed for cleaning on Mondays.', 'When is the pool closed?', ['On Mondays', 'On weekends', 'Every evening', 'After 6 p.m.'], x(
      '« The pool is closed for cleaning on Mondays ».',
      '«The pool is closed for cleaning on Mondays» أي يوم الإثنين.',
      '“On Mondays”.',
      '«The pool is closed for cleaning on Mondays»: los lunes.',
    )),
    listen('a2-sc-s1-l1', 'L4', 2, 'Attention, passengers. The 10:30 train to Bizerte is delayed by fifteen minutes. It will now leave at 10:45 from platform three.', 'What time will the train leave?', ['10:45', '10:30', '10:15', '11:30'], x(
      '10 h 30 + 15 minutes de retard = 10 h 45.',
      '10:30 + 15 دقيقة تأخير = 10:45.',
      '10:30 + 15 minutes = 10:45.',
      '10:30 + 15 minutos de retraso = 10:45.',
    )),
    listen('a2-sc-s1-l2', 'L4', 2, 'Good morning. Here is today’s plan: we start with a short meeting at nine, then we visit the factory at ten thirty, and lunch is at one.', 'What will the group do at ten thirty?', ['Visit the factory', 'Have lunch', 'Start a meeting', 'Go home'], x(
      '« We visit the factory at ten thirty ».',
      '«We visit the factory at ten thirty» أي زيارة المصنع.',
      '“Visit the factory at ten thirty”.',
      '«We visit the factory at ten thirty»: visitar la fábrica.',
    )),
    listen('a2-sc-s1-l3', 'L3', 2, 'W: Is the dentist open on Saturday?\nM: Yes, but only in the morning, from nine to twelve.', 'When is the dentist open on Saturday?', ['From 9 to 12', 'All day', 'In the afternoon', 'It is closed'], x(
      '« Only in the morning, from nine to twelve ».',
      '«Only in the morning, from nine to twelve» أي من 9 إلى 12.',
      '“From nine to twelve”.',
      '«Only in the morning, from nine to twelve»: de 9 a 12.',
    )),
    g('a2-sc-s1-q1', 2, 'The bus to the airport runs ___ 30 minutes.', ['every', 'each of', 'all', 'any'], x(
      'Fréquence → « every 30 minutes » (toutes les 30 minutes).',
      'التكرار ← «every 30 minutes» (كل 30 دقيقة).',
      'Frequency → “every”.',
      'Frecuencia → «every 30 minutes» (cada 30 minutos).',
    )),
  ],
  [
    read('a2-sc-s2-r1', 'R7', 2, PROGRAM, 'Who is giving the keynote?', ['Ms. Okoye', 'The workshop leader', 'The director', 'Nobody'], x(
      '« Keynote: Digital marketing (Ms. Okoye) ».',
      '«Keynote: Digital marketing (Ms. Okoye)» أي السيدة أوكوي.',
      'The program shows “Keynote … (Ms. Okoye)”.',
      '«Keynote: Digital marketing (Ms. Okoye)»: la Sra. Okoye.',
    )),
    read('a2-sc-s2-r2', 'R7', 2, PROGRAM, 'What happens at 11:00?', ['A coffee break', 'Lunch', 'The welcome', 'The workshops'], x(
      '« 11:00 Coffee break ».',
      '«11:00 Coffee break» أي استراحة قهوة.',
      'A coffee break.',
      '«11:00 Coffee break»: una pausa para el café.',
    )),
    read('a2-sc-s2-r3', 'R7', 2, 'Library notice: From 1 July, the library will close at 6 p.m. instead of 8 p.m. Morning opening hours do not change.', 'What is changing?', ['The closing time', 'The opening time', 'The address', 'The weekend hours'], x(
      '« Close at 6 p.m. instead of 8 p.m. » : l’heure de fermeture change.',
      '«Close at 6 p.m. instead of 8 p.m.»: يتغير وقت الإغلاق.',
      'The closing time.',
      '«Close at 6 p.m. instead of 8 p.m.»: cambia la hora de cierre.',
    )),
    read('a2-sc-s2-r4', 'R7', 2, DOCTORS, 'When can a patient see Dr. Kahn?', ['Thursday afternoon', 'Monday morning', 'Friday', 'Wednesday morning'], x(
      'Dr. Kahn : mardi et jeudi de 14 h à 18 h.',
      'الدكتور كان: الثلاثاء والخميس من 2 إلى 6 مساءً.',
      'Tuesday and Thursday, 2–6 p.m.',
      'Dr. Kahn: martes y jueves de 14 a 18 h.',
    )),
    read('a2-sc-s2-r5', 'R7', 2, DOCTORS, 'When are there no appointments?', ['On Friday', 'On Monday', 'On Tuesday', 'On Thursday'], x(
      '« Friday: no appointments ».',
      '«Friday: no appointments» أي يوم الجمعة.',
      '“Friday: no appointments”.',
      '«Friday: no appointments»: el viernes.',
    )),
    read('a2-sc-s2-r6', 'R7', 2, 'Weekly team meeting: every Tuesday at 10 a.m. This week only, it is moved to Wednesday at the same time.', 'When is the meeting this week?', ['Wednesday at 10 a.m.', 'Tuesday at 10 a.m.', 'Wednesday at 2 p.m.', 'Thursday at 10 a.m.'], x(
      '« Moved to Wednesday at the same time » = mercredi à 10 h.',
      '«Moved to Wednesday at the same time» = الأربعاء على الساعة 10.',
      'Wednesday, same time (10 a.m.).',
      '«Moved to Wednesday at the same time» = el miércoles a las 10.',
    )),
    listen('a2-sc-s2-l1', 'L4', 2, 'Welcome to the City Museum. Guided tours in English start every hour, from ten a.m. to four p.m. The next tour starts in five minutes.', 'How often do guided tours start?', ['Every hour', 'Every 30 minutes', 'Twice a day', 'Only at ten'], x(
      '« Start every hour » = toutes les heures.',
      '«Start every hour» = كل ساعة.',
      '“Every hour”.',
      '«Start every hour» = cada hora.',
    )),
    listen('a2-sc-s2-l2', 'L4', 2, 'This is a message for all drivers. The North Road is closed today because of repairs. Please use the South Road instead.', 'Why is the North Road closed?', ['Because of repairs', 'Because of an accident', 'Because of snow', 'Because of an event'], x(
      '« Because of repairs » = à cause de travaux.',
      '«Because of repairs» = بسبب الأشغال.',
      '“Because of repairs”.',
      '«Because of repairs» = por obras.',
    )),
    listen('a2-sc-s2-l3', 'L3', 2, 'M: When is the next flight to Cairo?\nW: There’s one at 2:15, but it’s full. The next one is at 6:40.', 'Why can’t the man take the 2:15 flight?', ['It is full', 'It is cancelled', 'It is too expensive', 'It is delayed'], x(
      '« There’s one at 2:15, but it’s full » = complet.',
      '«There’s one at 2:15, but it’s full» = ممتلئة.',
      'It is full.',
      '«There’s one at 2:15, but it’s full» = está completo.',
    )),
    v('a2-sc-s2-q1', 2, 'The shop is open ___, from Monday to Sunday.', ['daily', 'weekly', 'monthly', 'yearly'], x(
      'Du lundi au dimanche = tous les jours : « daily ».',
      'من الإثنين إلى الأحد = يوميًا: «daily».',
      'Every day → “daily”.',
      'De lunes a domingo = todos los días: «daily».',
    )),
  ],
  [
    read('a2-sc-s3-r1', 'R7', 2, CINEMA, 'What time is the first show of "The Last Train"?', ['4:30 p.m.', '6:00 p.m.', '7:00 p.m.', '9:30 p.m.'], x(
      'Premier horaire de « The Last Train » : 16 h 30.',
      'أول عرض لفيلم «The Last Train»: 4:30 مساءً.',
      'First show: 4:30 p.m.',
      'Primera sesión de «The Last Train»: 16:30.',
    )),
    read('a2-sc-s3-r2', 'R7', 2, CINEMA, 'How much is a student ticket?', ['$5', '$8', '$4', '$13'], x(
      '« Students $5 ».',
      '«Students $5» أي 5 دولارات.',
      '“Students $5”.',
      '«Students $5»: 5 $.',
    )),
    read('a2-sc-s3-r3', 'R7', 2, 'Office calendar — 12 May: Board meeting · 15 May: Office closed (public holiday) · 20 May: Fire drill, 11 a.m.', 'What happens on 20 May?', ['A fire drill', 'A board meeting', 'A public holiday', 'A party'], x(
      '« 20 May: Fire drill » = exercice d’évacuation.',
      '«20 May: Fire drill» = تمرين إخلاء.',
      'A fire drill.',
      '«20 May: Fire drill» = simulacro de incendio.',
    )),
    read('a2-sc-s3-r4', 'R7', 2, 'Swimming lessons — Children: Saturday 9–10 a.m. · Adults: Saturday 10–11 a.m. and Wednesday 7–8 p.m.', 'When can adults take lessons?', ['On Saturday and Wednesday', 'Only on Saturday', 'Only on Wednesday', 'Every day'], x(
      'Adultes : samedi et mercredi.',
      'الكبار: السبت والأربعاء.',
      'Saturday and Wednesday.',
      'Adultos: sábado y miércoles.',
    )),
    read('a2-sc-s3-r5', 'R7', 2, 'Because of the storm, all flights to Djerba are cancelled this afternoon. Passengers can rebook on tomorrow’s flights at no extra cost.', 'What can passengers do?', ['Move to a flight tomorrow for free', 'Get a cash refund', 'Take a bus to Djerba', 'Wait for an evening flight'], x(
      '« Rebook on tomorrow’s flights at no extra cost » = changer gratuitement pour demain.',
      '«Rebook on tomorrow’s flights at no extra cost» = الحجز مجانًا على رحلات الغد.',
      'Rebook tomorrow for free.',
      '«Rebook on tomorrow’s flights at no extra cost» = cambiar gratis a un vuelo de mañana.',
    )),
    read('a2-sc-s3-r6', 'R7', 2, 'Shift schedule — Morning shift: 6 a.m.–2 p.m. · Afternoon shift: 2–10 p.m. · Night shift: 10 p.m.–6 a.m.', 'When does the afternoon shift end?', ['At 10 p.m.', 'At 2 p.m.', 'At 6 a.m.', 'At 6 p.m.'], x(
      'Équipe de l’après-midi : 14 h – 22 h.',
      'نوبة بعد الظهر: من 2 إلى 10 مساءً.',
      'The afternoon shift runs from 2 to 10 p.m.',
      'Turno de tarde: de 14 a 22 h.',
    )),
    listen('a2-sc-s3-l1', 'L4', 2, 'Thank you for calling Metro Bank. Our branches are open from nine to five, Monday to Friday, and from nine to one on Saturdays.', 'When do branches close on Saturdays?', ['At one', 'At five', 'At nine', 'They are closed'], x(
      'Le samedi : de 9 h à 13 h.',
      'يوم السبت: من 9 إلى 1.',
      'Saturday: nine to one.',
      'El sábado: de 9 a 13 h.',
    )),
    listen('a2-sc-s3-l2', 'L4', 2, 'Attention, visitors. The museum will close in thirty minutes. The gift shop will stay open for one more hour.', 'What will stay open longer?', ['The gift shop', 'The museum', 'The café', 'The library'], x(
      '« The gift shop will stay open for one more hour ».',
      '«The gift shop will stay open for one more hour» أي متجر الهدايا.',
      'The gift shop.',
      '«The gift shop will stay open for one more hour»: la tienda de regalos.',
    )),
    listen('a2-sc-s3-l3', 'L3', 2, 'W: What time does the film finish?\nM: It starts at eight and it’s two hours long, so at ten.', 'When does the film finish?', ['At ten', 'At eight', 'At twelve', 'At nine'], x(
      '8 h + 2 h = 22 h : « so at ten ».',
      '8 + ساعتان = 10: «so at ten».',
      'Eight plus two hours = ten.',
      '8 + 2 horas = las 10: «so at ten».',
    )),
    v('a2-sc-s3-q1', 2, 'The train was ___, so we arrived one hour late.', ['delayed', 'delivered', 'decided', 'designed'], x(
      'Arrivés en retard → le train était retardé : « delayed ».',
      'وصلنا متأخرين ← القطار تأخر: «delayed».',
      'Arriving late means the train was “delayed”.',
      'Llegamos tarde → el tren se retrasó: «delayed».',
    )),
  ],
);
