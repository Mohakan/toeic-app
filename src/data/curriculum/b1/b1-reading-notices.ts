import type { Unit } from '../../../types';
import { g, lesson, read, unit, v, x } from '../build';

const LIBRARY = 'LOCAL NEWS — The city of Monastir will open a new public library next month. The building, located next to the central park, will have more than 50,000 books, a children’s area and a free computer room. It will be open seven days a week. Mayor Leila Saidi said the project cost 3 million dinars.';
const CLEANING = 'GREEN CLEAN — Office cleaning services. We clean offices of all sizes, in the evening or on weekends. Free price quote within 24 hours. 10% off your first month if you sign up before 30 June. Call 555-0144.';
const CAFETERIA = 'Staff may now purchase lunch at the cafeteria at a 20% discount. Simply show your employee badge at the cash desk. This offer does not include drinks.';
const MOVE = 'Subject: Office move\nDear team,\nAs you know, we are moving to our new office at 12 Harbor Road on 1 April. The movers will pack everything on 30 March, so please clear your desks by Friday, 28 March. Parking at the new office is free for all employees.\nThanks,\nOmar Saleh, Office Manager';
const BIKES = 'BIKE SHARE — Rent a bike at any of our 40 stations in the city. The first 30 minutes are free. After that, each additional 30 minutes costs 1 dinar. Download our app to unlock a bike.';
const COOKING = 'COMMUNITY EVENT — Join us for a free cooking class on Saturday, 10 May, at the Community Center. Chef Amira Ben Salem will show how to prepare three traditional dishes. Places are limited to 20 people, so please register at the front desk.';
const GYM = 'From: Atlas Gym\nDear member, your membership will end on 30 September. Renew before 15 September and get one month free. You can renew online or at reception.';

export const b1ReadingNotices: Unit = unit(
  {
    id: 'b1-reading-notices',
    emoji: '📰',
    level: 3,
    part: 'R7',
    title: x('Articles, publicités et annonces', 'مقالات وإعلانات وبلاغات', 'Articles, ads and notices', 'Artículos, anuncios y avisos'),
    subtitle: x('Partie 7 : but, détails et synonymes', 'الجزء 7: الهدف والتفاصيل والمرادفات', 'Part 7: purpose, details and synonyms', 'Parte 7: objetivo, detalles y sinónimos'),
    lesson: lesson(
      x('Lire différents documents et répondre aux questions de type TOEIC.', 'قراءة وثائق مختلفة والإجابة عن أسئلة من نوع التوييك.', 'Read different documents and answer TOEIC-style questions.', 'Leer distintos documentos y responder a preguntas de tipo TOEIC.'),
      [
        x('Identifie d’abord le type de document (article, publicité, e-mail, avis) : cela t’aide à prévoir le contenu.', 'حدّد أولًا نوع الوثيقة (مقال، إعلان، رسالة، بلاغ): يساعدك ذلك على توقّع المحتوى.', 'Identify the document type first.', 'Identifica primero el tipo de documento (artículo, anuncio, correo, aviso): te ayuda a prever el contenido.'),
        x('Pour « What is NOT mentioned? », vérifie chaque option dans le texte et élimine celles qui y sont.', 'في «What is NOT mentioned?» تحقّق من كل خيار في النص واستبعد ما ورد فيه.', 'For “NOT mentioned”, check and eliminate each option.', 'Para «What is NOT mentioned?», comprueba cada opción en el texto y descarta las que aparecen.'),
        x('La réponse utilise souvent un synonyme : purchase = buy, staff = employees, free of charge = free.', 'الإجابة تستعمل غالبًا مرادفًا: purchase = buy وstaff = employees وfree of charge = free.', 'Answers use synonyms.', 'La respuesta suele usar un sinónimo: purchase = buy, staff = employees, free of charge = free.'),
      ],
      'Staff may purchase lunch at a discount.',
      x('= Les employés peuvent acheter leur déjeuner moins cher.', '= يمكن للموظفين شراء الغداء بسعر أقل.', '= Employees can buy lunch for less.', '= Los empleados pueden comprar la comida más barata.'),
    ),
  },
  [
    read('b1-rn-s1-r1', 'R7', 3, LIBRARY, 'What is the article mainly about?', ['A new library', 'A new park', 'A school project', 'A computer store'], x(
      'Le sujet principal est la nouvelle bibliothèque ; le parc n’est qu’un repère.',
      'الموضوع الرئيسي هو المكتبة الجديدة، أما الحديقة فمَعلم فقط.',
      'The new library; the park is a landmark.',
      'El tema principal es la nueva biblioteca; el parque es solo una referencia.',
    )),
    read('b1-rn-s1-r2', 'R7', 3, LIBRARY, 'Where is the building located?', ['Next to the central park', 'In the city hall', 'Near the beach', 'Inside a school'], x(
      '« Located next to the central park ».',
      '«Located next to the central park» أي بجانب الحديقة المركزية.',
      'Next to the central park.',
      '«Located next to the central park»: junto al parque central.',
    )),
    read('b1-rn-s1-r3', 'R7', 3, LIBRARY, 'What is NOT mentioned about the library?', ['Its daily opening hours', 'Its number of books', 'A children’s area', 'A computer room'], x(
      'Le texte dit « seven days a week », mais ne donne aucun horaire. Les autres éléments sont cités.',
      'يذكر النص «seven days a week» دون أي مواعيد، والعناصر الأخرى مذكورة.',
      'No hours are given; the rest is mentioned.',
      'El texto dice «seven days a week», pero no da horario. Lo demás sí aparece.',
    )),
    read('b1-rn-s1-r4', 'R7', 3, CLEANING, 'What does Green Clean offer?', ['Cleaning services for offices', 'Office furniture', 'Gardening services', 'Computer repairs'], x(
      '« Office cleaning services ».',
      '«Office cleaning services» أي تنظيف المكاتب.',
      'Office cleaning.',
      '«Office cleaning services»: limpieza de oficinas.',
    )),
    read('b1-rn-s1-r5', 'R7', 3, CLEANING, 'How can customers get a discount?', ['By signing up before 30 June', 'By calling after 6 p.m.', 'By choosing weekend cleaning', 'By paying in cash'], x(
      '« 10% off your first month if you sign up before 30 June ».',
      'العرض: «10% off your first month if you sign up before 30 June».',
      'Sign up before 30 June.',
      '«10% off your first month if you sign up before 30 June»: inscribirse antes del 30 de junio.',
    )),
    read('b1-rn-s1-r6', 'R7', 3, CAFETERIA, 'What is true about the discount?', ['It is for employees with a badge', 'It includes drinks', 'It is only on Fridays', 'It is for visitors'], x(
      '« Show your employee badge » ; les boissons ne sont pas incluses.',
      '«Show your employee badge»، والمشروبات غير مشمولة.',
      'For employees with a badge; no drinks.',
      '«Show your employee badge»; las bebidas no están incluidas.',
    )),
    read('b1-rn-s1-r7', 'R7', 3, CAFETERIA, 'The word “purchase” is closest in meaning to', ['buy', 'sell', 'cook', 'share'], x(
      '« Purchase » = acheter : « buy ».',
      '«Purchase» = يشتري: «buy».',
      '“Purchase” = “buy”.',
      '«Purchase» = comprar: «buy».',
    )),
    g('b1-rn-s1-q1', 3, 'The article ___ the opening of a new hospital.', ['describes', 'describing', 'description', 'descriptive'], x(
      'Il manque le verbe conjugué → « describes ».',
      'ينقص الفعل المصرَّف ← «describes».',
      'A conjugated verb is missing.',
      'Falta el verbo conjugado → «describes».',
    )),
    v('b1-rn-s1-q2', 3, 'The museum is open every day ___ Monday.', ['except', 'expect', 'accept', 'excess'], x(
      '« Except » = sauf. « Expect » et « accept » sont des pièges de forme.',
      '«Except» = باستثناء، و«expect» و«accept» فخاخ شكلية.',
      '“Except” = but not.',
      '«Except» = excepto. «Expect» y «accept» son trampas de forma.',
    )),
    read('b1-rn-s1-r8', 'R7', 3, 'Company news: sales of our new electric scooters have doubled since January. Because of this success, the factory in Bizerte will hire 50 more workers this summer.', 'Why will the factory hire more workers?', ['Sales have increased', 'A new factory has opened', 'Many workers have left', 'The company is moving'], x(
      '« Sales … have doubled » → plus de travail, donc embauches.',
      '«Sales … have doubled» ← عمل أكثر وبالتالي توظيف.',
      'Sales doubled.',
      '«Sales … have doubled» → más trabajo, así que contratan.',
    )),
  ],
  [
    read('b1-rn-s2-r1', 'R7', 3, MOVE, 'What is the purpose of the email?', ['To give details about an office move', 'To announce a new parking fee', 'To invite staff to a party', 'To introduce a new manager'], x(
      'Objet « Office move » : informations sur le déménagement.',
      'الموضوع «Office move»: معلومات عن الانتقال.',
      'Details about the move.',
      'Asunto «Office move»: información sobre la mudanza.',
    )),
    read('b1-rn-s2-r2', 'R7', 3, MOVE, 'What must employees do by 28 March?', ['Clear their desks', 'Pack the boxes', 'Visit the new office', 'Pay for parking'], x(
      '« Please clear your desks by Friday, 28 March ». Ce sont les déménageurs qui emballent.',
      '«Please clear your desks by Friday, 28 March». أما التغليف فيقوم به عمال النقل.',
      'Clear their desks; movers pack.',
      '«Please clear your desks by Friday, 28 March». Los empaquetadores son los de la mudanza.',
    )),
    read('b1-rn-s2-r3', 'R7', 3, MOVE, 'What is mentioned about the new office?', ['Parking is free', 'It is bigger', 'It is near the station', 'It has a cafeteria'], x(
      '« Parking at the new office is free ».',
      '«Parking at the new office is free» أي الموقف مجاني.',
      'Free parking.',
      '«Parking at the new office is free»: el aparcamiento es gratis.',
    )),
    read('b1-rn-s2-r4', 'R7', 3, BIKES, 'How much does a 30-minute ride cost?', ['Nothing', '1 dinar', '2 dinars', '40 dinars'], x(
      '« The first 30 minutes are free ».',
      '«The first 30 minutes are free» أي مجانًا.',
      'The first 30 minutes are free.',
      '«The first 30 minutes are free»: gratis.',
    )),
    read('b1-rn-s2-r5', 'R7', 3, BIKES, 'What do users need to unlock a bike?', ['The app', 'A key', 'A ticket from a station', 'An ID card'], x(
      '« Download our app to unlock a bike ».',
      '«Download our app to unlock a bike» أي التطبيق.',
      'You unlock a bike with the app.',
      '«Download our app to unlock a bike»: la aplicación.',
    )),
    read('b1-rn-s2-r6', 'R7', 3, 'Weather update: the heat wave will continue until Thursday, with temperatures above 40°C. The city recommends that people stay indoors between noon and 4 p.m. and drink plenty of water.', 'What does the city recommend?', ['Staying inside in the afternoon', 'Leaving the city', 'Closing schools', 'Turning off air conditioners'], x(
      '« Stay indoors between noon and 4 p.m. » = rester à l’intérieur l’après-midi.',
      '«Stay indoors between noon and 4 p.m.» = البقاء في الداخل بعد الظهر.',
      'Stay inside in the afternoon.',
      '«Stay indoors between noon and 4 p.m.» = quedarse dentro por la tarde.',
    )),
    v('b1-rn-s2-q1', 3, 'The ___ of the article is to inform readers about new bus routes.', ['purpose', 'purchase', 'pursuit', 'purse'], x(
      '« Purpose » = but, objectif.',
      '«Purpose» = الهدف.',
      '“Purpose” = aim.',
      '«Purpose» = objetivo.',
    )),
    g('b1-rn-s2-q2', 3, 'The new rules apply to ___ employees, including managers.', ['all', 'every', 'each of', 'whole'], x(
      '« All » + pluriel. « Every » demanderait un singulier (every employee).',
      '«All» + جمع، أما «every» فتتطلب مفردًا (every employee).',
      '“All” + plural; “every” + singular.',
      '«All» + plural. «Every» exigiría singular (every employee).',
    )),
    v('b1-rn-s2-q3', 3, 'The ad ___ that the offer ends on Sunday.', ['states', 'stays', 'stares', 'stores'], x(
      '« State » = déclarer, indiquer.',
      '«State» = يصرّح، يذكر.',
      '“State” = say officially.',
      '«State» = indicar, afirmar.',
    )),
    read('b1-rn-s2-r7', 'R7', 3, 'Notice: the elevators in Building A will be inspected on Monday morning. During the inspection, please use the stairs or the elevators in Building B.', 'What will happen on Monday morning?', ['The elevators will be inspected', 'Building B will close', 'The stairs will be repaired', 'New elevators will be installed'], x(
      '« Will be inspected on Monday morning » = inspection.',
      '«Will be inspected on Monday morning» = فحص.',
      'An inspection.',
      '«Will be inspected on Monday morning» = inspección.',
    )),
  ],
  [
    read('b1-rn-s3-r1', 'R7', 3, COOKING, 'What is being advertised?', ['A cooking class', 'A restaurant opening', 'A food market', 'A cooking competition'], x(
      '« A free cooking class ».',
      '«A free cooking class» أي درس طبخ.',
      'A cooking class.',
      '«A free cooking class»: una clase de cocina.',
    )),
    read('b1-rn-s3-r2', 'R7', 3, COOKING, 'Why should people register?', ['The number of places is limited', 'The class is expensive', 'The chef is famous', 'The center is closing'], x(
      '« Places are limited to 20 people, so please register ».',
      'السبب: «Places are limited to 20 people, so please register».',
      'Places are limited.',
      '«Places are limited to 20 people, so please register»: las plazas son limitadas.',
    )),
    read('b1-rn-s3-r3', 'R7', 3, COOKING, 'Who will lead the class?', ['Chef Amira Ben Salem', 'A community member', 'The center manager', 'A restaurant owner'], x(
      '« Chef Amira Ben Salem will show… ».',
      '«Chef Amira Ben Salem will show…» أي الطاهية أميرة بن سالم.',
      'Chef Amira Ben Salem.',
      '«Chef Amira Ben Salem will show…»: la chef Amira Ben Salem.',
    )),
    read('b1-rn-s3-r4', 'R7', 3, GYM, 'What will members get if they renew early?', ['One free month', 'A free T-shirt', 'A lower price forever', 'Free personal training'], x(
      '« Renew before 15 September and get one month free ».',
      'العرض: «Renew before 15 September and get one month free».',
      'One free month.',
      '«Renew before 15 September and get one month free»: un mes gratis.',
    )),
    read('b1-rn-s3-r5', 'R7', 3, GYM, 'How can members renew?', ['Online or at reception', 'Only by phone', 'Only online', 'By email'], x(
      '« You can renew online or at reception ».',
      'طريقتا التجديد: «You can renew online or at reception».',
      'Online or at reception.',
      '«You can renew online or at reception»: en línea o en recepción.',
    )),
    read('b1-rn-s3-r6', 'R7', 3, 'Job fair — More than 40 companies will be at the City Exhibition Hall on 22 October, from 10 a.m. to 5 p.m. Entry is free. Bring several copies of your résumé.', 'What should visitors bring?', ['Copies of their résumé', 'An entry ticket', 'A letter from a company', 'Their passport'], x(
      '« Bring several copies of your résumé ». L’entrée est gratuite.',
      '«Bring several copies of your résumé». والدخول مجاني.',
      'Copies of their résumé.',
      '«Bring several copies of your résumé». La entrada es gratis.',
    )),
    read('b1-rn-s3-r7', 'R7', 3, 'Notice to residents: water will be turned off on Elm Street on Tuesday from 9 a.m. to 1 p.m. because of pipe repairs. We apologize for the inconvenience.', 'Why will the water be turned off?', ['Because of pipe repairs', 'Because of a storm', 'To save water', 'Because of a new building'], x(
      '« Because of pipe repairs » = travaux sur les canalisations.',
      '«Because of pipe repairs» = إصلاح الأنابيب.',
      'Pipe repairs.',
      '«Because of pipe repairs» = reparación de tuberías.',
    )),
    v('b1-rn-s3-q1', 3, 'Entry to the exhibition is free of ___.', ['charge', 'change', 'chance', 'choice'], x(
      '« Free of charge » = gratuit.',
      '«Free of charge» = مجاني.',
      '“Free of charge”.',
      '«Free of charge» = gratuito.',
    )),
    g('b1-rn-s3-q2', 3, 'The event was ___ by more than 500 people.', ['attended', 'attending', 'attend', 'attendance'], x(
      'Passif : was + participe passé « attended ».',
      'المبني للمجهول: was + اسم المفعول «attended».',
      'Passive: was + past participle.',
      'Pasiva: was + participio «attended».',
    )),
    read('b1-rn-s3-r8', 'R7', 3, 'Store announcement: from 1 December, we will be open until 10 p.m. every evening to help shoppers during the holiday season.', 'Why will the store stay open later?', ['For the holiday season', 'Because of new staff', 'Because of a sale', 'To clean the store'], x(
      '« To help shoppers during the holiday season ».',
      '«To help shoppers during the holiday season» أي موسم الأعياد.',
      'The holiday season.',
      '«To help shoppers during the holiday season»: la temporada de fiestas.',
    )),
  ],
);
