import type { Unit } from '../../../types';
import { lesson, match, read, unit, v, x } from '../build';

export const a1Signs: Unit = unit(
  {
    id: 'a1-signs',
    emoji: '🪧',
    level: 1,
    part: 'R7',
    title: x('Panneaux et avis courts', 'لافتات وإعلانات قصيرة', 'Signs and short notices', 'Carteles y avisos breves'),
    subtitle: x('Partie 7 : lire vite', 'الجزء 7: القراءة بسرعة', 'Part 7: read fast', 'Parte 7: leer rápido'),
    lesson: lesson(
      x('Lire la question d’abord, puis chercher l’information dans le texte.', 'قراءة السؤال أولًا ثم البحث عن المعلومة في النص.', 'Read the question first, then scan the text.', 'Leer primero la pregunta y luego buscar la información en el texto.'),
      [
        x('Repère le mot-clé de la question : quand, où, combien, qui.', 'حدّد الكلمة المفتاحية في السؤال: متى، أين، كم، من.', 'Spot the key word in the question: when, where, how much, who.', 'Localiza la palabra clave de la pregunta: cuándo, dónde, cuánto, quién.'),
        x('La bonne réponse reformule souvent le texte avec d’autres mots.', 'الإجابة الصحيحة غالبًا تعيد صياغة النص بكلمات أخرى.', 'The right answer often rephrases the text.', 'La respuesta correcta suele reformular el texto con otras palabras.'),
      ],
      'NO PARKING — Delivery trucks only',
      x('Seuls les camions de livraison peuvent se garer.', 'يُسمح فقط لشاحنات التوصيل بالتوقف.', 'Only delivery trucks may park.', 'Solo los camiones de reparto pueden aparcar.'),
    ),
  },
  [
    read('a1-signs-r1', 'R7', 1, 'STAFF ONLY — Visitors must check in at reception.', 'What must visitors do?', ['Go to reception first', 'Wait outside', 'Call the staff', 'Show a ticket'], x(
      '« Check in at reception » = se présenter à l’accueil.',
      '«Check in at reception» أي التوجه أولًا إلى الاستقبال.',
      '“Check in at reception” = go to reception first.',
      '«Check in at reception» = presentarse primero en recepción.',
    )),
    read('a1-signs-r2', 'R7', 1, 'SALE! All shoes 20% off this weekend only.', 'When does the sale end?', ['After this weekend', 'Next month', 'Today at noon', 'At the end of the year'], x(
      '« This weekend only » : la promotion s’arrête après ce week-end.',
      '«This weekend only»: ينتهي التخفيض بعد عطلة نهاية الأسبوع هذه.',
      '“This weekend only”.',
      '«This weekend only»: la promoción termina después de este fin de semana.',
    )),
    read('a1-signs-r3', 'R7', 1, 'Elevator out of order. Please use the stairs. We are sorry for the inconvenience.', 'What is the problem?', ['The elevator does not work', 'The stairs are closed', 'The building is full', 'The office is moving'], x(
      '« Out of order » = en panne.',
      '«Out of order» أي معطّل.',
      '“Out of order” = not working.',
      '«Out of order» = averiado, no funciona.',
    )),
    read('a1-signs-r4', 'R7', 1, 'Lost & Found: A black umbrella was found in Room 8. Ask at the front desk.', 'Where can the owner get the umbrella?', ['At the front desk', 'In Room 8', 'At the security office', 'In the parking lot'], x(
      '« Ask at the front desk » : l’objet est à l’accueil. « Room 8 » est où il a été trouvé.',
      '«Ask at the front desk»: المظلة في الاستقبال. أما «Room 8» فمكان العثور عليها.',
      '“Ask at the front desk”. Room 8 is where it was found.',
      '«Ask at the front desk»: el paraguas está en recepción. «Room 8» es donde se encontró.',
    )),
    read('a1-signs-r5', 'R7', 1, 'Please turn off your mobile phone during the presentation.', 'What are people asked to do?', ['Switch off their phones', 'Make a phone call', 'Give a presentation', 'Turn off the lights'], x(
      '« Turn off » = éteindre, reformulé par « switch off ».',
      '«Turn off» أي أطفئ، وأعيدت صياغتها بـ «switch off».',
      '“Turn off” is rephrased as “switch off”.',
      '«Turn off» (apagar) se reformula como «switch off».',
    )),
    v('a1-signs-q1', 1, 'The museum is ___ on Mondays, so we can visit it on Tuesday.', ['closed', 'open', 'empty', 'busy'], x(
      'On remet la visite au mardi parce que le musée est fermé le lundi : « closed ».',
      'نؤجل الزيارة إلى الثلاثاء لأن المتحف مغلق يوم الإثنين: «closed».',
      'We visit on Tuesday because it is “closed” on Mondays.',
      'Hacemos la visita el martes porque el lunes está cerrado: «closed».',
    )),
  ],
  [
    read('a1-signs-s2-r1', 'R7', 1, 'CAUTION: Wet floor. Please walk carefully.', 'What is the sign about?', ['The floor is slippery', 'The floor is closed', 'Cleaning staff are needed', 'The building is new'], x(
      '« Wet floor » = sol mouillé, donc glissant.',
      '«Wet floor» = أرضية مبللة، أي زلقة.',
      '“Wet floor” means it is slippery.',
      '«Wet floor» = suelo mojado, es decir, resbaladizo.',
    )),
    read('a1-signs-s2-r2', 'R7', 1, 'EXIT ONLY — No entry.', 'What can people do at this door?', ['Leave the building', 'Enter the building', 'Buy tickets', 'Wait for a bus'], x(
      '« Exit only » = sortie uniquement.',
      '«Exit only» = للخروج فقط.',
      '“Exit only”: you can only leave.',
      '«Exit only» = solo salida.',
    )),
    read('a1-signs-s2-r3', 'R7', 1, 'Shop hours: 9 a.m. – 8 p.m. Closed on public holidays.', 'When is the shop closed?', ['On public holidays', 'Every evening at 6', 'On Saturdays', 'At lunchtime'], x(
      '« Closed on public holidays » = fermé les jours fériés.',
      '«Closed on public holidays» = مغلق في العطل الرسمية.',
      '“Closed on public holidays”.',
      '«Closed on public holidays» = cerrado los días festivos.',
    )),
    read('a1-signs-s2-r4', 'R7', 1, 'Free coffee for staff in the kitchen, 8 to 10 a.m.', 'Who can have free coffee?', ['Employees', 'Visitors', 'Customers', 'Children'], x(
      '« Staff » = le personnel, reformulé par « employees ».',
      '«Staff» = الموظفون، وأعيدت صياغتها بـ «employees».',
      '“Staff” is rephrased as “employees”.',
      '«Staff» = el personal, reformulado como «employees».',
    )),
    read('a1-signs-s2-r5', 'R7', 1, 'Please take a number and wait until it is called.', 'What should people do first?', ['Take a number', 'Call the manager', 'Sit at the desk', 'Pay at the counter'], x(
      'Première étape : « take a number ».',
      'الخطوة الأولى: «take a number».',
      'Step one: “take a number”.',
      'Primer paso: «take a number».',
    )),
    read('a1-signs-s2-r6', 'R7', 1, 'Meeting Room B is booked from 2 to 4 p.m. today.', 'What is true about Room B?', ['It is not free this afternoon', 'It is closed today', 'It is free all day', 'It is booked in the morning'], x(
      '« Booked from 2 to 4 p.m. » = réservée l’après-midi, donc pas libre.',
      '«Booked from 2 to 4 p.m.» = محجوزة بعد الظهر، أي غير متاحة.',
      'Booked 2–4 p.m.: not free this afternoon.',
      '«Booked from 2 to 4 p.m.»: reservada por la tarde, así que no está libre.',
    )),
    v('a1-signs-s2-q1', 1, 'Please ___ your bags at the entrance.', ['leave', 'live', 'love', 'lose'], x(
      '« Leave your bags » = laisser ses sacs. « Live » et « love » se ressemblent à l’écrit.',
      '«Leave your bags» = اترك حقائبك. «Live» و«love» متشابهتان شكلًا.',
      '“Leave your bags”. “Live” and “love” only look similar.',
      '«Leave your bags» = deje sus bolsas. «Live» y «love» solo se parecen en la forma.',
    )),
    v('a1-signs-s2-q2', 1, 'This door is for staff ___.', ['only', 'once', 'open', 'own'], x(
      '« For staff only » = réservé au personnel.',
      '«For staff only» = خاص بالموظفين.',
      '“For staff only”.',
      '«For staff only» = solo para el personal.',
    )),
    v('a1-signs-s2-q3', 1, 'Please ___ quiet in the library.', ['be', 'do', 'have', 'go'], x(
      '« Be quiet » = être silencieux. Avec un adjectif (quiet), on emploie « be ».',
      '«Be quiet» = الزم الهدوء. مع الصفة (quiet) نستعمل «be».',
      'With an adjective (quiet), use “be”.',
      '«Be quiet» = guarde silencio. Con un adjetivo (quiet) se usa «be».',
    )),
    match('a1-signs-s2-m1', ['menu', 'waiter', 'bill', 'table', 'dessert'], x(
      'Au restaurant : « bill » = l’addition, « waiter » = le serveur.',
      'في المطعم: «bill» = الحساب و«waiter» = النادل.',
      'At a restaurant: “bill” and “waiter”.',
      'En el restaurante: «bill» = la cuenta, «waiter» = el camarero.',
    )),
  ],
  [
    read('a1-signs-s3-r1', 'R7', 1, 'Elevator: 8 people maximum.', 'What does the sign tell people?', ['How many people can use the elevator', 'Where the elevator is', 'When the elevator opens', 'Which floor is closed'], x(
      '« 8 people maximum » indique le nombre de personnes autorisées.',
      '«8 people maximum» يحدد عدد الأشخاص المسموح به.',
      'It gives the maximum number of people.',
      '«8 people maximum» indica cuántas personas pueden subir.',
    )),
    read('a1-signs-s3-r2', 'R7', 1, 'Visitors: please sign in at the front desk and wear your badge.', 'What must visitors wear?', ['A badge', 'A uniform', 'A helmet', 'A jacket'], x(
      '« Wear your badge » = porter son badge.',
      '«Wear your badge» = ارتدِ شارتك.',
      '“Wear your badge”.',
      '«Wear your badge» = lleve su credencial.',
    )),
    read('a1-signs-s3-r3', 'R7', 1, 'The ticket office closes 15 minutes before the last train.', 'If the last train leaves at 11 p.m., when does the ticket office close?', ['At 10:45 p.m.', 'At 11:15 p.m.', 'At 11 p.m.', 'At 10:15 p.m.'], x(
      '15 minutes avant 23 h = 22 h 45 (10:45 p.m.).',
      'قبل 11 مساءً بربع ساعة = 10:45 مساءً.',
      '15 minutes before 11 p.m. = 10:45 p.m.',
      '15 minutos antes de las 23 h = las 22:45 (10:45 p.m.).',
    )),
    read('a1-signs-s3-r4', 'R7', 1, 'Lunch menu: Soup $4 · Salad $6 · Pasta $9. Drinks not included.', 'How much is the salad?', ['$6', '$4', '$9', '$10'], x(
      '« Salad $6 ».',
      '«Salad $6» أي 6 دولارات.',
      '“Salad $6”.',
      '«Salad $6»: 6 $.',
    )),
    read('a1-signs-s3-r5', 'R7', 1, 'Please do not leave bags in the hallway.', 'Where should bags not be left?', ['In the hallway', 'In the office', 'At reception', 'In the car'], x(
      '« Do not leave bags in the hallway » : pas de sacs dans le couloir.',
      '«Do not leave bags in the hallway»: لا حقائب في الممر.',
      '“Do not leave bags in the hallway”.',
      '«Do not leave bags in the hallway»: nada de bolsas en el pasillo.',
    )),
    read('a1-signs-s3-r6', 'R7', 1, 'Back in 10 minutes. — Paul', 'What does the note mean?', ['Paul will return soon', 'Paul is on vacation', 'The office is closed today', 'Paul left 10 days ago'], x(
      '« Back in 10 minutes » = de retour dans 10 minutes.',
      '«Back in 10 minutes» = سأعود بعد 10 دقائق.',
      '“Back in 10 minutes”: he will return soon.',
      '«Back in 10 minutes» = vuelvo en 10 minutos.',
    )),
    v('a1-signs-s3-q1', 1, 'The ___ is not working, so please use the stairs.', ['elevator', 'window', 'table', 'menu'], x(
      'On prend l’escalier quand l’ascenseur (« elevator ») est en panne.',
      'نستعمل الدرج عندما يتعطل المصعد («elevator»).',
      'You take the stairs when the “elevator” is not working.',
      'Se usan las escaleras cuando el ascensor («elevator») no funciona.',
    )),
    v('a1-signs-s3-q2', 1, 'Please ___ in the form and give it to the receptionist.', ['fill', 'feel', 'fall', 'fly'], x(
      '« Fill in a form » = remplir un formulaire.',
      '«Fill in a form» = يملأ استمارة.',
      '“Fill in a form”.',
      '«Fill in a form» = rellenar un formulario.',
    )),
    v('a1-signs-s3-q3', 1, 'The ___ brought us the menu and some water.', ['waiter', 'driver', 'doctor', 'teacher'], x(
      'Au restaurant, c’est le serveur (« waiter ») qui apporte le menu.',
      'في المطعم يحضر النادل («waiter») قائمة الطعام.',
      'The “waiter” brings the menu.',
      'En el restaurante, el camarero («waiter») trae la carta.',
    )),
    match('a1-signs-s3-m1', ['factory', 'order', 'delivery', 'ticket', 'chef'], x(
      'Révision : « order » = commande ; « delivery » = livraison.',
      'مراجعة: «order» = طلبية و«delivery» = توصيل.',
      'Review: “order” and “delivery”.',
      'Repaso: «order» = pedido; «delivery» = entrega.',
    )),
  ],
);
