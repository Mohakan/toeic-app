import type { Unit } from '../../../types';
import { lesson, listen, unit, withGraphic, x } from '../build';

const DELIVERY = 'DELIVERY SCHEDULE — Week 23\nMonday: Sousse\nTuesday: Sfax\nWednesday: Bizerte\nThursday: Nabeul';

const FLOORS = 'BUILDING DIRECTORY\nFloor 1: Reception, Cafeteria\nFloor 2: Sales, Marketing\nFloor 3: Accounting\nFloor 4: Human Resources';

const MENU = 'LUNCH MENU — Café Jasmin\nCouscous with fish — 14 dinars\nGrilled chicken — 12 dinars\nVegetable pasta — 10 dinars\nSalad of the day — 8 dinars';

const AGENDA = 'WORKSHOP AGENDA\n9:00 Welcome — Ms. Ayari\n9:30 New sales tools — Mr. Gharbi\n10:30 Coffee break\n11:00 Customer data — Ms. Laabidi';

const TICKETS = 'TRAIN TIMES — Tunis to Sousse\n7:15 → 9:20 (direct)\n8:00 → 10:45 (one change)\n9:30 → 11:35 (direct)\n10:10 → 12:50 (one change)';

const SURVEY = 'CUSTOMER SURVEY — What should we improve?\nDelivery speed: 42%\nPrices: 27%\nProduct range: 19%\nCustomer service: 12%';

export const b2SpeakerIntent: Unit = unit(
  {
    id: 'b2-speaker-intent',
    emoji: '🎧',
    level: 4,
    part: 'L3 · L4',
    title: x('Intention et sous-entendus', 'القصد والمعنى الضمني', 'Intention and implied meaning', 'Intención y sobrentendidos'),
    subtitle: x('Parties 3 et 4 : « Why does the speaker say… ? »', 'الجزءان 3 و4: «Why does the speaker say…؟»', 'Parts 3 and 4: “Why does the speaker say…?”', 'Partes 3 y 4: «Why does the speaker say…?»'),
    lesson: lesson(
      x('Comprendre pourquoi quelqu’un dit une phrase, pas seulement ce qu’elle signifie.', 'فهم لماذا يقول المتحدث جملة ما، لا معناها فقط.', 'Understand why a speaker says something, not just what it means.', 'Entender por qué alguien dice una frase, no solo lo que significa.'),
      [
        x('Le sens dépend du contexte : « That’s a long way » peut être un refus poli.', 'المعنى يتوقف على السياق: «That’s a long way» قد تكون رفضًا مهذبًا.', 'Context decides: “That’s a long way” can be a polite no.', 'El sentido depende del contexto: «That’s a long way» puede ser una negativa cortés.'),
        x('Écoute la phrase d’avant et la réaction d’après : elles révèlent l’intention.', 'استمع إلى الجملة السابقة ورد الفعل اللاحق: هما يكشفان القصد.', 'The lines before and after reveal the intention.', 'Escucha la frase anterior y la reacción posterior: revelan la intención.'),
        x('Les réponses correctes reformulent souvent : « to express doubt », « to offer help ».', 'الإجابات الصحيحة غالبًا ما تعيد الصياغة: «to express doubt» و«to offer help».', 'Correct options paraphrase: “to express doubt”, “to offer help”.', 'Las respuestas correctas suelen reformular: «to express doubt», «to offer help».'),
      ],
      'W: Can you finish the slides tonight? M: I’m leaving at six for my daughter’s concert.',
      x('Il ne dit pas « non », mais c’est un refus.', 'لا يقول «لا»، لكنه رفض.', 'He doesn’t say “no”, but it’s a refusal.', 'No dice «no», pero es una negativa.'),
    ),
  },
  [
    listen('b2-si-l1', 'L3', 4, 'W: Could you drive to the airport to pick up our visitors tomorrow?\nM: I’ve got a client meeting from nine until noon.', 'Why does the man say, “I’ve got a client meeting from nine until noon”?', ['To explain why he can’t help', 'To invite the woman to a meeting', 'To ask for directions', 'To confirm the visitors’ arrival'], x(
      'Il refuse indirectement en donnant une raison.',
      'يرفض بشكل غير مباشر بذكر سبب.',
      'An indirect refusal.',
      'Rechaza de forma indirecta dando una razón.',
    )),
    listen('b2-si-l2', 'L3', 4, 'M: The new coffee machine cost almost two thousand dinars.\nW: Two thousand? For a coffee machine?', 'What does the woman imply?', ['The price seems too high', 'She wants to buy one', 'The machine is broken', 'She doesn’t drink coffee'], x(
      'La répétition étonnée exprime la surprise devant le prix.',
      'التكرار المندهش يعبّر عن الاستغراب من السعر.',
      'Surprised repetition = too expensive.',
      'La repetición sorprendida expresa asombro ante el precio.',
    )),
    listen('b2-si-l3', 'L3', 4, 'W: I’m not sure how to fill in this customs form.\nM: I did one last week. Bring it over here.', 'Why does the man say, “Bring it over here”?', ['To offer help', 'To refuse a request', 'To complain about a form', 'To ask for a document'], x(
      'Il a de l’expérience et propose de l’aider.',
      'لديه خبرة ويعرض المساعدة.',
      'He offers to help.',
      'Tiene experiencia y se ofrece a ayudar.',
    )),
    listen('b2-si-l4', 'L4', 4, 'Many of you have asked whether the parking lot will be ready by June. Well, the workers started last week, so don’t sell your bus pass just yet.', 'What does the speaker mean when she says, “don’t sell your bus pass just yet”?', ['The parking lot will not be ready soon', 'Bus prices will go down', 'Employees must take the bus', 'The bus service will stop'], x(
      'Humour : les travaux viennent de commencer, le parking ne sera pas vite prêt.',
      'دعابة: الأشغال بدأت للتو، فالموقف لن يكون جاهزًا قريبًا.',
      'The work has just started.',
      'Humor: las obras acaban de empezar, el aparcamiento no estará listo pronto.',
    )),
    withGraphic(listen('b2-si-l5', 'L3', 4, 'M: Our customers in Sfax need their order before Wednesday.\nW: That’s fine. The truck goes there the day after Sousse.', 'Look at the schedule. When will the order be delivered?', ['Tuesday', 'Monday', 'Wednesday', 'Thursday'], x(
      'Croiser : « the day after Sousse » (lundi) → mardi, Sfax dans le planning.',
      'الربط: «the day after Sousse» (الاثنين) ← الثلاثاء، صفاقس في الجدول.',
      'Sousse is Monday, so Sfax is Tuesday.',
      'Cruzar: «the day after Sousse» (lunes) → martes, Sfax en el horario.',
    )), DELIVERY),
    withGraphic(listen('b2-si-l6', 'L3', 4, 'W: I have an interview with the HR manager at ten.\nM: Take the lift to the top floor. Their office is right in front of you.', 'Look at the directory. Which floor will the woman go to?', ['Floor 4', 'Floor 1', 'Floor 2', 'Floor 3'], x(
      '« Top floor » + Human Resources → étage 4.',
      '«Top floor» + الموارد البشرية ← الطابق 4.',
      'Top floor = Floor 4 (HR).',
      '«Top floor» + Recursos Humanos → planta 4.',
    )), FLOORS),
    withGraphic(listen('b2-si-l7', 'L3', 4, 'M: I don’t eat meat, and I’d like something warm today.\nW: Then the pasta is your best choice.', 'Look at the menu. How much will the man pay?', ['10 dinars', '14 dinars', '12 dinars', '8 dinars'], x(
      'Plat chaud sans viande → pâtes aux légumes, 10 dinars.',
      'طبق ساخن بدون لحم ← معكرونة بالخضر، 10 دنانير.',
      'Vegetable pasta: 10 dinars.',
      'Plato caliente sin carne → pasta de verduras, 10 dinares.',
    )), MENU),
    listen('b2-si-l8', 'L4', 4, 'Before we begin, I know some of you were expecting a longer break today. Unfortunately, our guest speaker has a flight at three, so we’ve had to adjust the program.', 'Why has the program been changed?', ['A speaker has to leave early', 'The room is not available', 'A flight was cancelled', 'Fewer people came'], x(
      '« Our guest speaker has a flight at three » : il doit partir tôt.',
      '«Our guest speaker has a flight at three»: عليه المغادرة مبكرًا.',
      'The speaker must leave for a flight.',
      '«Our guest speaker has a flight at three»: tiene que irse pronto.',
    )),
    listen('b2-si-l9', 'L3', 4, 'W: Should we ask Mr. Kaci to review the budget?\nM: He’s been with the finance team for twenty years.', 'What does the man imply about Mr. Kaci?', ['He is well qualified for the task', 'He is about to retire', 'He is too busy', 'He doesn’t like budgets'], x(
      'Vingt ans d’expérience → c’est la bonne personne.',
      'عشرون سنة خبرة ← إنه الشخص المناسب.',
      'Long experience = good choice.',
      'Veinte años de experiencia → es la persona adecuada.',
    )),
    listen('b2-si-l10', 'L4', 4, 'Thank you for calling Atlas Bank. Our offices are now closed. If you have lost your card, please press one to block it immediately. For all other questions, please call back tomorrow from 8 a.m.', 'Why would a caller press one?', ['To block a lost card', 'To open an account', 'To speak to a manager', 'To check opening hours'], x(
      '« If you have lost your card, please press one ».',
      '«If you have lost your card, please press one»: لإيقاف البطاقة.',
      'To block a lost card.',
      '«If you have lost your card, please press one»: para bloquear la tarjeta.',
    )),
  ],
  [
    listen('b2-si-s2-l1', 'L3', 4, 'M: Do you want to join us for dinner after the conference?\nW: My train leaves at seven.', 'Why does the woman say, “My train leaves at seven”?', ['To decline an invitation', 'To ask for a ticket', 'To suggest a restaurant', 'To complain about the train'], x(
      'Refus implicite : elle doit partir.',
      'رفض ضمني: عليها المغادرة.',
      'An implicit no.',
      'Negativa implícita: tiene que irse.',
    )),
    listen('b2-si-s2-l2', 'L3', 4, 'W: The client wants the designs by Monday.\nM: Monday? We haven’t even received her logo yet.', 'What does the man imply?', ['The deadline is unrealistic', 'The logo is ready', 'He finished the designs', 'The client is in a hurry'], x(
      'Sans logo, lundi semble impossible.',
      'بدون الشعار يبدو يوم الاثنين مستحيلًا.',
      'Monday seems impossible.',
      'Sin el logotipo, el lunes parece imposible.',
    )),
    listen('b2-si-s2-l3', 'L3', 4, 'M: These boxes are really heavy.\nW: There’s a trolley in the storage room.', 'Why does the woman mention the trolley?', ['To suggest a solution', 'To ask for help', 'To complain about the room', 'To describe a delivery'], x(
      'Elle propose d’utiliser le chariot.',
      'تقترح استعمال العربة.',
      'She suggests using it.',
      'Propone usar la carretilla.',
    )),
    withGraphic(listen('b2-si-s2-l4', 'L3', 4, 'W: I’d like to hear the talk on sales tools, but I have a call at nine thirty.\nM: Then you’ll have to catch the speaker during the coffee break.', 'Look at the agenda. Who does the woman want to talk to?', ['Mr. Gharbi', 'Ms. Ayari', 'Ms. Laabidi', 'The caterer'], x(
      '« Sales tools » → Mr. Gharbi (9 h 30).',
      '«Sales tools» ← السيد الغربي (9:30).',
      'Sales tools = Mr. Gharbi.',
      '«Sales tools» → el Sr. Gharbi (9:30).',
    )), AGENDA),
    withGraphic(listen('b2-si-s2-l5', 'L3', 4, 'M: I need to be in Sousse before eleven, and I don’t want to change trains.\nW: Then you’ll have to take the earliest one.', 'Look at the timetable. Which train will the man take?', ['7:15', '8:00', '9:30', '10:10'], x(
      'Avant 11 h et direct → seul le train de 7 h 15 convient.',
      'قبل 11:00 ومباشر ← قطار 7:15 فقط.',
      'Direct and before 11:00 → 7:15.',
      'Antes de las 11:00 y directo → solo el tren de las 7:15.',
    )), TICKETS),
    withGraphic(listen('b2-si-s2-l6', 'L4', 4, 'Thanks to everyone who answered our survey. As you can see, our biggest priority is clear, so from next month we will work with a second delivery company.', 'Look at the graphic. Which result led to the decision?', ['42%', '27%', '19%', '12%'], x(
      'Deuxième transporteur → vitesse de livraison, 42 %.',
      'شركة توصيل ثانية ← سرعة التوصيل، 42%.',
      'Delivery speed: 42%.',
      'Segunda empresa de reparto → velocidad de entrega, 42 %.',
    )), SURVEY),
    listen('b2-si-s2-l7', 'L4', 4, 'I’ll keep this short because I know lunch is waiting. The only change this month is that expense reports must now be submitted through the new app.', 'Why does the speaker say, “I know lunch is waiting”?', ['To explain why he will be brief', 'To invite staff to lunch', 'To announce a new cafeteria', 'To apologize for being late'], x(
      'Il justifie la brièveté de son message.',
      'يبرّر قِصَر رسالته.',
      'He will keep it short.',
      'Justifica la brevedad de su mensaje.',
    )),
    listen('b2-si-s2-l8', 'L3', 4, 'W: Have you seen the sales figures for May?\nM: I have. Let’s just say the team will be happy at the next meeting.', 'What does the man imply?', ['The results are good', 'The meeting is cancelled', 'The figures are missing', 'The team is unhappy'], x(
      'L’équipe sera contente → bons résultats.',
      'الفريق سيكون سعيدًا ← نتائج جيدة.',
      'Good results.',
      'El equipo estará contento → buenos resultados.',
    )),
    listen('b2-si-s2-l9', 'L3', 4, 'M: Can we hold the training in Room 12?\nW: It only has ten chairs, and we’re expecting twenty-five people.', 'What does the woman mean?', ['The room is too small', 'The training is cancelled', 'More chairs have arrived', 'Room 12 is booked'], x(
      'Dix chaises pour vingt-cinq personnes → trop petit.',
      'عشرة كراسٍ لخمسة وعشرين شخصًا ← صغيرة جدًا.',
      'Too few chairs.',
      'Diez sillas para veinticinco personas → demasiado pequeña.',
    )),
    listen('b2-si-s2-l10', 'L4', 4, 'Good afternoon, this is Leila from Delta Travel. I’m calling about your trip to Rome. The hotel you chose is full on the 12th, but a similar hotel next door has rooms. Please call me back to confirm.', 'Why is the speaker calling?', ['To propose an alternative hotel', 'To cancel a flight', 'To ask for payment', 'To offer a discount'], x(
      'Hôtel complet → elle propose un hôtel voisin.',
      'الفندق ممتلئ ← تقترح فندقًا مجاورًا.',
      'She suggests another hotel.',
      'Hotel completo → propone un hotel vecino.',
    )),
  ],
  [
    listen('b2-si-s3-l1', 'L3', 4, 'W: Is the new printer easy to use?\nM: Even I figured it out, and I’m terrible with machines.', 'What does the man imply?', ['The printer is simple to use', 'He broke the printer', 'He needs training', 'The printer is expensive'], x(
      'S’il a réussi malgré ses difficultés, c’est facile.',
      'إذا نجح رغم صعوباته فهو سهل.',
      'If he managed, it is easy.',
      'Si él lo consiguió pese a sus dificultades, es fácil.',
    )),
    listen('b2-si-s3-l2', 'L3', 4, 'M: Should I bring the samples to the meeting?\nW: The client said she’d already seen them.', 'What does the woman mean?', ['The samples are not necessary', 'The client is unhappy', 'The samples are lost', 'The meeting is cancelled'], x(
      'La cliente les a déjà vus → inutile de les apporter.',
      'العميلة رأتها من قبل ← لا داعي لإحضارها.',
      'No need to bring them.',
      'La clienta ya los vio → no hace falta llevarlos.',
    )),
    listen('b2-si-s3-l3', 'L3', 4, 'W: We still haven’t found a venue for the company party.\nM: My cousin manages a restaurant with a big terrace.', 'Why does the man mention his cousin?', ['To suggest a possible venue', 'To invite his cousin', 'To complain about a restaurant', 'To cancel the party'], x(
      'Il propose le restaurant de son cousin.',
      'يقترح مطعم ابن عمه.',
      'He suggests a venue.',
      'Propone el restaurante de su primo.',
    )),
    listen('b2-si-s3-l4', 'L4', 4, 'As you know, the server will be updated tonight. If you’re planning to work late, well, I hope you like paper and pens.', 'What does the speaker imply?', ['Computers will not be available tonight', 'Staff must buy paper', 'The server is new', 'Working late is forbidden'], x(
      'Humour : sans serveur, il faudra travailler sur papier.',
      'دعابة: بدون خادم سيكون العمل على الورق.',
      'No computer access tonight.',
      'Humor: sin servidor, habrá que trabajar en papel.',
    )),
    withGraphic(listen('b2-si-s3-l5', 'L3', 4, 'M: We need to deliver to Bizerte, but the truck isn’t free that day.\nW: Then let’s move it to the next stop on the schedule.', 'Look at the schedule. Which day will the Bizerte order be delivered?', ['Thursday', 'Wednesday', 'Tuesday', 'Monday'], x(
      'Bizerte = mercredi ; la tournée suivante = jeudi.',
      'بنزرت = الأربعاء، والجولة التالية = الخميس.',
      'The stop after Wednesday is Thursday.',
      'Bizerta = miércoles; la parada siguiente = jueves.',
    )), DELIVERY),
    withGraphic(listen('b2-si-s3-l6', 'L3', 4, 'W: I need to drop off these invoices with the accountants.\nM: They’re one floor above Sales.', 'Look at the directory. Which floor will the woman go to?', ['Floor 3', 'Floor 2', 'Floor 4', 'Floor 1'], x(
      'Sales = étage 2 ; un étage au-dessus = 3 (Accounting).',
      'المبيعات = الطابق 2، والطابق الأعلى = 3 (المحاسبة).',
      'Above Floor 2 → Floor 3.',
      'Ventas = planta 2; una planta más arriba = 3 (Contabilidad).',
    )), FLOORS),
    withGraphic(listen('b2-si-s3-l7', 'L3', 4, 'M: I only have twelve dinars, and I’m really hungry.\nW: Then take the most filling dish you can afford.', 'Look at the menu. What will the man probably order?', ['Grilled chicken', 'Couscous with fish', 'Vegetable pasta', 'Salad of the day'], x(
      'Avec 12 dinars, le plat le plus copieux possible → le poulet (12).',
      'بـ 12 دينارًا، أكثر طبق مشبع ممكن ← الدجاج (12).',
      'The most he can pay: 12 dinars.',
      'Con 12 dinares, el plato más contundente posible → el pollo (12).',
    )), MENU),
    listen('b2-si-s3-l8', 'L4', 4, 'Our new online booking system has been very popular. In fact, so popular that the phones have been surprisingly quiet this week.', 'What does the speaker suggest?', ['Fewer customers are calling', 'The phones are broken', 'Bookings have dropped', 'Staff need new phones'], x(
      'Les clients réservent en ligne → moins d’appels.',
      'الزبائن يحجزون عبر الإنترنت ← مكالمات أقل.',
      'Customers book online instead.',
      'Los clientes reservan en línea → menos llamadas.',
    )),
    listen('b2-si-s3-l9', 'L3', 4, 'W: Did you finish reading the proposal?\nM: I got to page three and then the phone started ringing.', 'What does the man mean?', ['He hasn’t finished the proposal', 'The proposal is three pages long', 'He lost his phone', 'He called the client'], x(
      'Interrompu à la page 3 → pas terminé.',
      'توقف في الصفحة 3 ← لم ينتهِ.',
      'He stopped on page three.',
      'Interrumpido en la página 3 → no ha terminado.',
    )),
    listen('b2-si-s3-l10', 'L4', 4, 'Welcome aboard flight 708 to Paris. We’re waiting for a few passengers from a connecting flight, so we should be leaving in about fifteen minutes. Thank you for your patience.', 'Why is the flight delayed?', ['Some passengers are still coming', 'The weather is bad', 'There is a technical problem', 'The crew is late'], x(
      '« Waiting for a few passengers from a connecting flight ».',
      '«Waiting for a few passengers from a connecting flight»: انتظار مسافرين.',
      'Waiting for connecting passengers.',
      '«Waiting for a few passengers from a connecting flight»: esperan a unos pasajeros.',
    )),
  ],
);
