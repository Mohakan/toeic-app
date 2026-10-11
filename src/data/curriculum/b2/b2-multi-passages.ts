import type { Unit } from '../../../types';
import { lesson, read, unit, x } from '../build';

const EMAIL_1 = 'From: Laura Benali, Office Manager\nTo: All staff\nSubject: Kitchen renovation\nThe staff kitchen on the fourth floor will be renovated from 10 to 21 March. During this period, a temporary kitchen will be set up in Room 405. Coffee machines will also be available in the lobby.';

const EMAIL_2 = 'From: Tom Reyes\nTo: Laura Benali\nSubject: RE: Kitchen renovation\nHi Laura, my team has a client workshop in Room 405 on 14 March from 9 to 12. Could the temporary kitchen be moved for that morning, or could we use another room? Thanks, Tom';

const COURSES = 'Brightway Training Centre — Spring Courses\nAdvanced Excel (2 days): 8–9 April, €320\nNegotiation Skills (1 day): 15 April, €210\nBusiness Writing (1 day): 22 April, €190\nGroup discount: 15% for three or more participants from the same company. Registration closes one week before each course.';

const REGISTER = 'From: Nadia Mansour\nTo: Brightway Training Centre\nSubject: Registration\nHello, I would like to register three colleagues from our sales department for the Negotiation Skills course. Could you also tell me whether lunch is included? We would prefer to pay by bank transfer.\nBest regards,\nNadia Mansour, Kesra Foods';

const REVIEW = 'Customer review — 2/5\nI bought the Volta X2 coffee maker from your online store on 3 June. The machine works well, but it arrived with a cracked water tank. I have contacted customer service twice, and I am still waiting for a replacement part. — Karim B.';

const REPLY = 'Dear Mr. B.,\nWe are very sorry about your experience. A new water tank was sent to you yesterday by express delivery and should arrive within two days. To thank you for your patience, we have also added a €15 voucher to your account, valid on any purchase until 31 December.\nMaria Lopez, Customer Care Manager';

const ROOMS = 'Conference Room B — Bookings, Thursday 12 May\n9:00–10:30 Finance team (budget review)\n11:00–12:00 Interviews (HR)\n14:00–16:00 Product training (Sales)\nRoom B seats 12 people and has a video-conferencing system. Room C (seats 30) is available all day.';

const ROOM_REQUEST = 'From: Omar Trabelsi\nTo: Facilities\nSubject: Room for Thursday\nHi, I need a room on Thursday 12 May from 10:00 to 11:30 for a video call with our partners in Madrid. About eight people from my team will attend. Could you let me know what is available?\nThanks, Omar';

const JOB = 'Mediterra Hotels is hiring an Events Coordinator for its new hotel in Hammamet, opening in July. Responsibilities: planning conferences and weddings, managing suppliers and preparing budgets. Requirements: three years of experience in events and fluent English and French; Italian is a plus. Send a CV and cover letter to jobs@mediterra.com by 20 May.';

const APPLICATION = 'To: jobs@mediterra.com\nSubject: Events Coordinator position\nDear Hiring Manager,\nPlease find attached my CV and cover letter. For the past four years, I have organized trade fairs and company dinners for a large hotel in Sousse. I speak Arabic, French, English and Italian, and I am available to start in June.\nYours faithfully,\nSalma Gharbi';

export const b2MultiPassages: Unit = unit(
  {
    id: 'b2-multi-passages',
    emoji: '📑',
    level: 4,
    part: 'R7',
    title: x('Doubles documents', 'الوثائق المزدوجة', 'Double passages', 'Documentos dobles'),
    subtitle: x('Partie 7 : croiser deux textes', 'الجزء 7: الربط بين نصين', 'Part 7: connect two texts', 'Parte 7: cruzar dos textos'),
    lesson: lesson(
      x('Relier les informations de deux documents pour répondre.', 'ربط معلومات وثيقتين للإجابة.', 'Connect information across two documents.', 'Relacionar la información de dos documentos para responder.'),
      [
        x('Au moins une question exige les deux textes : cherche le point commun (date, salle, nom).', 'سؤال واحد على الأقل يتطلب النصين: ابحث عن العنصر المشترك (تاريخ، قاعة، اسم).', 'At least one question needs both texts.', 'Al menos una pregunta exige los dos textos: busca el punto común (fecha, sala, nombre).'),
        x('Les questions « What is suggested / implied » demandent une déduction, pas une citation.', 'أسئلة «What is suggested/implied» تتطلب استنتاجًا لا اقتباسًا.', '“suggested / implied” = inference.', 'Las preguntas «What is suggested / implied» piden una deducción, no una cita.'),
      ],
      'E-mail 1: Room 405 = temporary kitchen. E-mail 2: workshop in Room 405 on 14 March.',
      x('Le conflit apparaît seulement en croisant les deux.', 'لا يظهر التعارض إلا بالربط بين الرسالتين.', 'The conflict only appears when combining both.', 'El conflicto solo aparece al cruzar los dos correos.'),
    ),
  },
  [
    read('b2-mp-r1', 'R7', 4, `${EMAIL_1}\n\n${EMAIL_2}`, 'What is the purpose of the first email?', ['To announce a temporary arrangement', 'To invite staff to a workshop', 'To request a new coffee machine', 'To report a broken kitchen'], x(
      'Il annonce une cuisine provisoire pendant les travaux.',
      'يعلن عن مطبخ مؤقت خلال الأشغال.',
      'It announces a temporary kitchen.',
      'Anuncia una cocina provisional durante las obras.',
    )),
    read('b2-mp-r2', 'R7', 4, `${EMAIL_1}\n\n${EMAIL_2}`, 'Why is Tom concerned?', ['His workshop is in the room planned as a kitchen', 'The renovation will be delayed', 'The lobby is too small', 'His client cancelled the meeting'], x(
      'Il faut les deux e-mails : Room 405 = cuisine provisoire ET salle de son atelier.',
      'نحتاج الرسالتين: Room 405 = المطبخ المؤقت وقاعة ورشته معًا.',
      'Both emails: Room 405 is both.',
      'Hacen falta los dos correos: la Room 405 es a la vez la cocina provisional y la sala de su taller.',
    )),
    read('b2-mp-r3', 'R7', 4, `${EMAIL_1}\n\n${EMAIL_2}`, 'When does Tom need a solution?', ['On the morning of 14 March', 'From 10 to 21 March', 'On 21 March', 'Every afternoon'], x(
      '« On 14 March from 9 to 12 » : le matin du 14 mars.',
      '«On 14 March from 9 to 12»: صباح 14 مارس.',
      'The morning of 14 March.',
      '«On 14 March from 9 to 12»: la mañana del 14 de marzo.',
    )),
    read('b2-mp-r4', 'R7', 4, 'Due to rising fuel costs, Blue Line Ferries will add a $3 surcharge to all tickets from 15 August. Passengers who booked before this date will not be charged the surcharge.', 'What is stated about passengers who booked before 15 August?', ['They will not pay the extra fee', 'They must rebook their trip', 'They will receive a refund', 'They will pay $3 more'], x(
      '« Will not be charged the surcharge » = ils ne paieront pas le supplément.',
      '«Will not be charged the surcharge» = لن يدفعوا الرسم الإضافي.',
      '“Will not be charged the surcharge”.',
      '«Will not be charged the surcharge» = no pagarán el recargo.',
    )),
    read('b2-mp-r5', 'R7', 4, 'Although online sales have grown steadily, customer surveys show that many shoppers still want to try products before buying them. Kendall Sports will therefore open three small showrooms in city centers next spring.', 'Why will Kendall Sports open showrooms?', ['Customers want to try products first', 'Online sales have dropped', 'Rent in city centers is cheap', 'Its website will close'], x(
      '« Therefore » relie l’envie d’essayer les produits à la décision. Les ventes en ligne, elles, progressent.',
      '«Therefore» تربط رغبة الزبائن في تجربة المنتجات بالقرار، أما المبيعات عبر الإنترنت فهي في ارتفاع.',
      '“Therefore” links the wish to try products to the decision; online sales are growing.',
      '«Therefore» une el deseo de probar los productos con la decisión; las ventas en línea, en cambio, crecen.',
    )),
  ],
  [
    read('b2-mp-s2-r1', 'R7', 4, `${COURSES}\n\n${REGISTER}`, 'What is the purpose of the email?', ['To sign up employees for a course', 'To cancel a booking', 'To complain about a trainer', 'To apply for a teaching job'], x(
      '« I would like to register three colleagues » : inscrire des collègues.',
      '«I would like to register three colleagues»: تسجيل زملاء.',
      'She registers three colleagues.',
      '«I would like to register three colleagues»: inscribir a unos compañeros.',
    )),
    read('b2-mp-s2-r2', 'R7', 4, `${COURSES}\n\n${REGISTER}`, 'How much will Kesra Foods probably pay per participant?', ['Less than €210', 'Exactly €210', '€320', '€190'], x(
      'Croiser les deux textes : cours à 210 €, trois personnes de la même entreprise → remise de 15 %.',
      'الربط بين النصين: الدورة بـ 210 يورو وثلاثة أشخاص من الشركة نفسها ← تخفيض 15%.',
      '€210 minus the 15% group discount for three people.',
      'Cruzar los dos textos: curso a 210 €, tres personas de la misma empresa → descuento del 15 %.',
    )),
    read('b2-mp-s2-r3', 'R7', 4, `${COURSES}\n\n${REGISTER}`, 'By when must Ms. Mansour register her colleagues?', ['By 8 April', 'By 15 April', 'By 22 April', 'By 1 April'], x(
      'Le cours a lieu le 15 avril ; les inscriptions ferment une semaine avant → 8 avril.',
      'الدورة يوم 15 أفريل والتسجيل يُغلق قبل أسبوع ← 8 أفريل.',
      'One week before 15 April.',
      'El curso es el 15 de abril; la inscripción cierra una semana antes → 8 de abril.',
    )),
    read('b2-mp-s2-r4', 'R7', 4, `${COURSES}\n\n${REGISTER}`, 'What does Ms. Mansour ask about?', ['Whether a meal is provided', 'Where the course takes place', 'Who the trainer is', 'Whether parking is free'], x(
      '« Whether lunch is included » = si le repas est compris.',
      '«Whether lunch is included» = هل الغداء مشمول.',
      'She asks if lunch is included.',
      '«Whether lunch is included» = si la comida está incluida.',
    )),
    read('b2-mp-s2-r5', 'R7', 4, `${COURSES}\n\n${REGISTER}`, 'In the advertisement, the word “closes” is closest in meaning to', ['ends', 'opens', 'moves', 'begins'], x(
      '« Registration closes » = les inscriptions se terminent.',
      '«Registration closes» = ينتهي التسجيل.',
      '“Closes” here means “ends”.',
      '«Registration closes» = la inscripción termina.',
    )),
    read('b2-mp-s2-r6', 'R7', 4, `${REVIEW}\n\n${REPLY}`, 'What problem did Mr. B. have?', ['A part was damaged when it arrived', 'The machine did not work at all', 'He was charged twice', 'The order went to the wrong address'], x(
      '« Arrived with a cracked water tank » ; la machine, elle, fonctionne.',
      '«Arrived with a cracked water tank»، أما الآلة فتعمل.',
      'The water tank arrived cracked.',
      '«Arrived with a cracked water tank»; la máquina, en cambio, funciona.',
    )),
    read('b2-mp-s2-r7', 'R7', 4, `${REVIEW}\n\n${REPLY}`, 'What is suggested about customer service before Ms. Lopez replied?', ['It had not solved his problem', 'It had offered him a refund', 'It was closed in June', 'It had replaced the machine'], x(
      'Déduction : il a appelé deux fois et attend toujours la pièce.',
      'استنتاج: اتصل مرتين وما زال ينتظر القطعة.',
      'He called twice and is still waiting.',
      'Deducción: llamó dos veces y sigue esperando la pieza.',
    )),
    read('b2-mp-s2-r8', 'R7', 4, `${REVIEW}\n\n${REPLY}`, 'When will Mr. B. probably receive the new part?', ['About two days after the reply', 'On 3 June', 'On 31 December', 'In two weeks'], x(
      '« Sent yesterday… should arrive within two days ».',
      '«Sent yesterday… should arrive within two days»: خلال يومين.',
      'Within two days of sending.',
      '«Sent yesterday… should arrive within two days»: en unos dos días.',
    )),
    read('b2-mp-s2-r9', 'R7', 4, `${REVIEW}\n\n${REPLY}`, 'What does Ms. Lopez offer in addition to the part?', ['A voucher for a future purchase', 'A free coffee maker', 'Free delivery for a year', 'A full refund'], x(
      '« A €15 voucher… valid on any purchase » = un bon d’achat.',
      '«A €15 voucher… valid on any purchase» = قسيمة شراء.',
      'A €15 voucher.',
      '«A €15 voucher… valid on any purchase» = un vale de compra.',
    )),
    read('b2-mp-s2-r10', 'R7', 4, `${REVIEW}\n\n${REPLY}`, 'In the review, the word “cracked” is closest in meaning to', ['broken', 'empty', 'heavy', 'missing'], x(
      '« Cracked » = fêlé, donc abîmé.',
      '«Cracked» = مشقوق أي مكسور.',
      '“Cracked” = broken.',
      '«Cracked» = agrietado, es decir, roto.',
    )),
  ],
  [
    read('b2-mp-s3-r1', 'R7', 4, `${ROOMS}\n\n${ROOM_REQUEST}`, 'Why can’t Mr. Trabelsi use Room B for his whole meeting?', ['Part of his time slot is already booked', 'The room is too small for his team', 'It has no video equipment', 'It is closed on Thursdays'], x(
      'Croiser : il veut 10 h–11 h 30, mais Finance occupe B jusqu’à 10 h 30 et les entretiens commencent à 11 h.',
      'الربط: يريد 10:00–11:30، لكن المالية تشغل القاعة B حتى 10:30 والمقابلات تبدأ في 11:00.',
      'Finance until 10:30 and interviews from 11:00.',
      'Cruzar: quiere de 10:00 a 11:30, pero Finanzas ocupa la B hasta las 10:30 y las entrevistas empiezan a las 11:00.',
    )),
    read('b2-mp-s3-r2', 'R7', 4, `${ROOMS}\n\n${ROOM_REQUEST}`, 'What is indicated about Mr. Trabelsi’s meeting?', ['It involves people in another country', 'It is a job interview', 'It will last all day', 'It is about the budget'], x(
      '« A video call with our partners in Madrid » : des partenaires à l’étranger.',
      '«A video call with our partners in Madrid»: شركاء في الخارج.',
      'Partners in Madrid.',
      '«A video call with our partners in Madrid»: socios en el extranjero.',
    )),
    read('b2-mp-s3-r3', 'R7', 4, `${ROOMS}\n\n${ROOM_REQUEST}`, 'Which room is free for the entire meeting?', ['Room C', 'Room B', 'The finance office', 'The HR office'], x(
      '« Room C is available all day ».',
      '«Room C is available all day»: متاحة طوال اليوم.',
      'Room C is free all day.',
      '«Room C is available all day»: libre todo el día.',
    )),
    read('b2-mp-s3-r4', 'R7', 4, `${ROOMS}\n\n${ROOM_REQUEST}`, 'Who is using Room B in the afternoon?', ['The sales department', 'The finance team', 'The HR department', 'Mr. Trabelsi’s team'], x(
      '« 14:00–16:00 Product training (Sales) ».',
      '«14:00–16:00 Product training (Sales)»: قسم المبيعات.',
      'Sales, from 14:00 to 16:00.',
      '«14:00–16:00 Product training (Sales)»: el departamento de ventas.',
    )),
    read('b2-mp-s3-r5', 'R7', 4, `${ROOMS}\n\n${ROOM_REQUEST}`, 'How many people can Room C hold?', ['Up to 30', 'Up to 12', 'About 8', 'Up to 20'], x(
      '« Room C (seats 30) ». 12 = Room B, 8 = l’équipe d’Omar.',
      '«Room C (seats 30)». و12 = القاعة B و8 = فريق عمر.',
      'Room C seats 30.',
      '«Room C (seats 30)». 12 = sala B; 8 = el equipo de Omar.',
    )),
    read('b2-mp-s3-r6', 'R7', 4, `${JOB}\n\n${APPLICATION}`, 'What is the advertisement mainly about?', ['A job at a hotel that has not opened yet', 'A wedding planned for July', 'Conference packages at a hotel', 'A training course for planners'], x(
      'Offre d’emploi pour un nouvel hôtel « opening in July ».',
      'عرض عمل في فندق جديد «opening in July».',
      'A job at a hotel opening in July.',
      'Oferta de empleo para un hotel nuevo «opening in July».',
    )),
    read('b2-mp-s3-r7', 'R7', 4, `${JOB}\n\n${APPLICATION}`, 'Which requirement does Ms. Gharbi go beyond?', ['The years of experience', 'The number of hotels managed', 'The budget limit', 'The application deadline'], x(
      'L’annonce demande 3 ans ; elle en a 4.',
      'الإعلان يطلب 3 سنوات ولديها 4.',
      'Three required, she has four.',
      'El anuncio pide 3 años; ella tiene 4.',
    )),
    read('b2-mp-s3-r8', 'R7', 4, `${JOB}\n\n${APPLICATION}`, 'What is suggested about Ms. Gharbi?', ['She speaks a language the hotel values', 'She has never worked in a hotel', 'She lives in Hammamet', 'She wants a part-time job'], x(
      '« Italian is a plus » + elle parle italien.',
      '«Italian is a plus» وهي تتكلم الإيطالية.',
      'She speaks Italian, “a plus”.',
      '«Italian is a plus» y ella habla italiano.',
    )),
    read('b2-mp-s3-r9', 'R7', 4, `${JOB}\n\n${APPLICATION}`, 'Which task is NOT mentioned in the advertisement?', ['Recruiting hotel staff', 'Managing suppliers', 'Preparing budgets', 'Planning weddings'], x(
      'Fournisseurs, budgets et mariages sont cités ; le recrutement non.',
      'الموردون والميزانيات والأعراس مذكورة، أما التوظيف فلا.',
      'Recruiting is not listed.',
      'Proveedores, presupuestos y bodas aparecen; la contratación no.',
    )),
    read('b2-mp-s3-r10', 'R7', 4, `${JOB}\n\n${APPLICATION}`, 'In the email, the word “organized” is closest in meaning to', ['arranged', 'cleaned', 'sold', 'visited'], x(
      '« Organized trade fairs » = organisé, mis en place.',
      '«Organized trade fairs» = نظّمت.',
      '“Organized” = arranged.',
      '«Organized trade fairs» = organizó, preparó.',
    )),
  ],
);
