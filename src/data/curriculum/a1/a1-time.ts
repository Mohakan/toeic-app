import type { Unit } from '../../../types';
import { g, lesson, listen, read, respond, unit, v, x } from '../build';

export const a1Time: Unit = unit(
  {
    id: 'a1-time',
    emoji: '🕘',
    level: 1,
    part: 'L2 · R7',
    title: x('Heures, dates et chiffres', 'الساعات والتواريخ والأرقام', 'Times, dates and numbers', 'Horas, fechas y cifras'),
    subtitle: x('Comprendre un horaire', 'فهم جدول المواعيد', 'Understand a schedule', 'Entender un horario'),
    lesson: lesson(
      x('Repérer une heure, un jour ou un chiffre à l’oral et à l’écrit.', 'تحديد الساعة واليوم والرقم شفهيًا وكتابيًا.', 'Catch a time, a day or a number when listening and reading.', 'Captar una hora, un día o una cifra al escuchar y al leer.'),
      [
        x('at + heure (at 9:30), on + jour (on Monday), in + mois (in May).', 'at + ساعة (at 9:30) وon + يوم (on Monday) وin + شهر (in May).', 'at + time, on + day, in + month.', 'at + hora (at 9:30), on + día (on Monday), in + mes (in May).'),
        x('Attention : fifteen (15) / fifty (50), thirteen (13) / thirty (30).', 'انتبه: fifteen (15) وfifty (50)، thirteen (13) وthirty (30).', 'Careful: fifteen / fifty, thirteen / thirty.', 'Cuidado: fifteen (15) / fifty (50), thirteen (13) / thirty (30).'),
        x('a.m. = le matin, p.m. = l’après-midi et le soir.', 'a.m. صباحًا وp.m. بعد الظهر ومساءً.', 'a.m. = morning, p.m. = afternoon and evening.', 'a.m. = por la mañana; p.m. = por la tarde y por la noche.'),
      ],
      'The training is on Tuesday at 2:30 p.m.',
      x('« on » avec le jour, « at » avec l’heure.', '«on» مع اليوم و«at» مع الساعة.', '“on” with the day, “at” with the time.', '«on» con el día, «at» con la hora.'),
    ),
  },
  [
    respond('a1-time-l1', 1, 'What time is the meeting?', ['At ten thirty.', 'In Room 3.', 'Yes, it is.'], x(
      '« What time » demande une heure.',
      '«What time» يسأل عن الساعة.',
      '“What time” asks for a time.',
      '«What time» pide una hora.',
    )),
    respond('a1-time-l2', 1, 'When does the store close on Saturdays?', ['At six p.m.', 'Near the bank.', 'Every customer.'], x(
      '« When » demande un moment : « At six p.m. ».',
      '«When» يسأل عن الوقت: «At six p.m.».',
      '“When” asks for a time: “At six p.m.”.',
      '«When» pide un momento: «At six p.m.».',
    )),
    listen('a1-time-l3', 'L4', 1, 'The bus to the airport leaves every fifteen minutes from stop number four.', 'How often does the bus leave?', ['Every fifteen minutes', 'Every fifty minutes', 'Every four minutes', 'Every hour'], x(
      '« Fifteen » (15) : l’accent est sur « -teen ». « Fifty » (50) accentue « fif- ».',
      '«Fifteen» (15) النبر على «-teen»، و«fifty» (50) النبر على «fif-».',
      '“Fifteen” stresses “-teen”; “fifty” stresses “fif-”.',
      'En «fifteen» (15) el acento cae en «-teen»; en «fifty» (50), en «fif-».',
    )),
    read('a1-time-r1', 'R7', 1, 'City Library — Opening hours: Monday to Friday 9 a.m. – 7 p.m. Saturday 10 a.m. – 2 p.m. Closed on Sunday.', 'When is the library closed?', ['On Sunday', 'On Saturday afternoon', 'On Monday morning', 'Every evening'], x(
      '« Closed on Sunday » : fermée le dimanche.',
      '«Closed on Sunday»: مغلقة يوم الأحد.',
      '“Closed on Sunday”.',
      '«Closed on Sunday»: cerrada el domingo.',
    )),
    read('a1-time-r2', 'R7', 1, 'Dentist appointment: Thursday 12 May, 4:15 p.m. Please arrive ten minutes early.', 'What time should the patient arrive?', ['At 4:05 p.m.', 'At 4:15 p.m.', 'At 4:25 p.m.', 'At 10:00 a.m.'], x(
      'Rendez-vous à 16 h 15, arriver dix minutes plus tôt : 16 h 05.',
      'الموعد 4:15 والوصول قبله بعشر دقائق: 4:05.',
      'Appointment 4:15, arrive ten minutes early: 4:05.',
      'Cita a las 16:15 y hay que llegar diez minutos antes: a las 16:05.',
    )),
    g('a1-time-q1', 1, 'The conference starts ___ Monday.', ['on', 'in', 'at', 'to'], x(
      '« on » + jour de la semaine.',
      '«on» + يوم من الأسبوع.',
      '“on” + day of the week.',
      '«on» + día de la semana.',
    )),
    g('a1-time-q2', 1, 'Our new office opens ___ March.', ['in', 'on', 'at', 'by'], x(
      '« in » + mois.',
      '«in» + الشهر.',
      '“in” + month.',
      '«in» + mes.',
    )),
  ],
  [
    respond('a1-time-s2-l1', 1, 'What time does the bank open?', ['At nine a.m.', 'Near the station.', 'Yes, it does.'], x(
      '« What time » demande une heure.',
      '«What time» يسأل عن الساعة.',
      '“What time” asks for a time.',
      '«What time» pide una hora.',
    )),
    respond('a1-time-s2-l2', 1, 'When is your flight?', ['Tomorrow morning.', 'To Paris.', 'By plane.'], x(
      '« When » demande un moment. « To Paris » donne une destination.',
      '«When» يسأل عن الوقت. «To Paris» تذكر وجهة.',
      '“When” asks for a time; “To Paris” is a destination.',
      '«When» pide un momento. «To Paris» da un destino.',
    )),
    respond('a1-time-s2-l3', 1, 'How long is the meeting?', ['About one hour.', 'In Room 5.', 'With Mr. Ali.'], x(
      '« How long » demande une durée.',
      '«How long» يسأل عن المدة.',
      '“How long” asks for a duration.',
      '«How long» pide una duración.',
    )),
    listen('a1-time-s2-l4', 'L4', 1, 'The museum is open every day from ten a.m. to six p.m., except on Tuesdays.', 'When is the museum closed?', ['On Tuesdays', 'On Sundays', 'At lunchtime', 'On Mondays'], x(
      '« Except on Tuesdays » : il est fermé le mardi.',
      '«Except on Tuesdays»: مغلق يوم الثلاثاء.',
      '“Except on Tuesdays”.',
      '«Except on Tuesdays»: cierra los martes.',
    )),
    listen('a1-time-s2-l5', 'L4', 1, 'Your order number is thirty-four. Please wait at counter three.', 'What is the order number?', ['34', '43', '30', '14'], x(
      '« Thirty-four » = 34. « Three » est le numéro du guichet.',
      '«Thirty-four» = 34. أما «three» فهو رقم الشباك.',
      '“Thirty-four” = 34; “three” is the counter.',
      '«Thirty-four» = 34. «Three» es el número del mostrador.',
    )),
    read('a1-time-s2-r1', 'R7', 1, 'Train to Tunis: departs 8:45, arrives 10:15. Platform 2.', 'What time does the train arrive?', ['10:15', '8:45', '2:00', '10:45'], x(
      '« Arrives 10:15 ». 8:45 est l’heure de départ.',
      '«Arrives 10:15». أما 8:45 فوقت المغادرة.',
      '“Arrives 10:15”; 8:45 is the departure.',
      '«Arrives 10:15». Las 8:45 es la hora de salida.',
    )),
    read('a1-time-s2-r2', 'R7', 1, 'Office closed on Friday 25 May for a public holiday. We open again on Monday 28 May.', 'When does the office open again?', ['On Monday 28 May', 'On Friday 25 May', 'On Saturday 26 May', 'On Sunday 27 May'], x(
      '« We open again on Monday 28 May ».',
      'الجواب في النص: «We open again on Monday 28 May».',
      '“We open again on Monday 28 May”.',
      '«We open again on Monday 28 May»: el lunes 28 de mayo.',
    )),
    g('a1-time-s2-q1', 1, 'The store opens ___ 9 a.m.', ['at', 'on', 'in', 'to'], x(
      'Heure précise → « at ».',
      'ساعة محددة ← «at».',
      'Clock time → “at”.',
      'Hora concreta → «at».',
    )),
    g('a1-time-s2-q2', 1, 'My birthday is ___ June.', ['in', 'on', 'at', 'to'], x(
      'Mois → « in ».',
      'الشهر ← «in».',
      'Month → “in”.',
      'Mes → «in».',
    )),
    g('a1-time-s2-q3', 1, 'We have a meeting ___ Friday morning.', ['on', 'in', 'at', 'to'], x(
      'Jour précis, même avec « morning » → « on Friday morning ».',
      'يوم محدد حتى مع «morning» ← «on Friday morning».',
      'A specific day, even with “morning” → “on”.',
      'Día concreto, incluso con «morning» → «on Friday morning».',
    )),
  ],
  [
    respond('a1-time-s3-l1', 1, 'What day is the training?', ['On Wednesday.', 'At nine.', 'In the training room.'], x(
      '« What day » demande un jour de la semaine.',
      '«What day» يسأل عن يوم من الأسبوع.',
      '“What day” asks for a day.',
      '«What day» pide un día de la semana.',
    )),
    respond('a1-time-s3-l2', 1, 'How many people are coming?', ['About twenty.', 'At noon.', 'By car.'], x(
      '« How many » demande un nombre.',
      '«How many» يسأل عن عدد.',
      '“How many” asks for a number.',
      '«How many» pide un número.',
    )),
    respond('a1-time-s3-l3', 1, 'When do you finish work?', ['At half past five.', 'In the office.', 'Every Monday.'], x(
      '« When do you finish » → une heure : « At half past five » (17 h 30).',
      '«When do you finish» ← ساعة: «At half past five» (5:30).',
      '“When do you finish” → a time.',
      '«When do you finish» → una hora: «At half past five» (17:30).',
    )),
    listen('a1-time-s3-l4', 'L4', 1, 'The next bus to the airport leaves at eleven forty-five.', 'What time does the next bus leave?', ['11:45', '11:15', '12:45', '7:45'], x(
      '« Eleven forty-five » = 11 h 45.',
      '«Eleven forty-five» تعني الساعة 11:45.',
      '“Eleven forty-five” = 11:45.',
      '«Eleven forty-five» = 11:45.',
    )),
    listen('a1-time-s3-l5', 'L3', 1, 'W: Is the meeting at two?\nM: No, it’s at three, in Room 6.', 'What time is the meeting?', ['At three', 'At two', 'At six', 'At one'], x(
      'L’homme corrige : « No, it’s at three ». « Six » est le numéro de la salle.',
      'الرجل يصحح: «No, it’s at three». أما «six» فرقم القاعة.',
      'He corrects her: “it’s at three”; six is the room.',
      'El hombre corrige: «No, it’s at three». «Six» es el número de la sala.',
    )),
    read('a1-time-s3-r1', 'R7', 1, 'Parking: $2 per hour. Maximum 3 hours.', 'How much does it cost to park for two hours?', ['$4', '$2', '$3', '$6'], x(
      '2 $ par heure × 2 heures = 4 $.',
      'دولاران للساعة × ساعتان = 4 دولارات.',
      '$2 per hour × 2 hours = $4.',
      '2 $ por hora × 2 horas = 4 $.',
    )),
    read('a1-time-s3-r2', 'R7', 1, 'Reception desk hours: Monday to Friday 8 a.m. – 6 p.m. Saturday 9 a.m. – 1 p.m.', 'When does the reception desk close on Saturday?', ['At 1 p.m.', 'At 6 p.m.', 'At 9 a.m.', 'At 8 a.m.'], x(
      'Le samedi : 9 h – 13 h. Il ferme à 13 h (1 p.m.).',
      'يوم السبت: من 9 إلى 1 بعد الظهر، فيُغلق على الساعة 1 p.m.',
      'Saturday 9 a.m. – 1 p.m.: it closes at 1 p.m.',
      'El sábado: de 9 a 13 h. Cierra a las 13 h (1 p.m.).',
    )),
    g('a1-time-s3-q1', 1, 'The conference is ___ 2027.', ['in', 'on', 'at', 'by'], x(
      'Année → « in ».',
      'السنة ← «in».',
      'Year → “in”.',
      'Año → «in».',
    )),
    g('a1-time-s3-q2', 1, 'I usually have lunch ___ noon.', ['at', 'in', 'on', 'to'], x(
      '« Noon » (midi) est une heure précise → « at noon ».',
      '«Noon» (منتصف النهار) ساعة محددة ← «at noon».',
      '“Noon” is a clock time → “at noon”.',
      '«Noon» (mediodía) es una hora concreta → «at noon».',
    )),
    v('a1-time-s3-q3', 1, 'There are seven days in a ___.', ['week', 'month', 'year', 'day'], x(
      'Une semaine (« week ») compte sept jours.',
      'الأسبوع («week») سبعة أيام.',
      'A “week” has seven days.',
      'Una semana («week») tiene siete días.',
    )),
  ],
);
