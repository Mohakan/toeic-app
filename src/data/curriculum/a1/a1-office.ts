import type { Unit } from '../../../types';
import { g, lesson, match, order, respond, unit, v, x } from '../build';

export const a1Office: Unit = unit(
  {
    id: 'a1-office',
    emoji: '🏢',
    level: 1,
    part: 'R5',
    title: x('Les mots du bureau', 'كلمات المكتب', 'Office words', 'Las palabras de la oficina'),
    subtitle: x('Vocabulaire de base du travail', 'مفردات العمل الأساسية', 'Basic workplace vocabulary', 'Vocabulario básico del trabajo'),
    lesson: lesson(
      x('Reconnaître les mots les plus fréquents du monde du travail.', 'التعرّف على أكثر كلمات عالم العمل تداولًا.', 'Recognise the most frequent workplace words.', 'Reconocer las palabras más frecuentes del mundo laboral.'),
      [
        x('« a » devant un son consonne, « an » devant un son voyelle : a meeting, an employee.', '«a» قبل صوت ساكن و«an» قبل صوت متحرك: a meeting وan employee.', '“a” before a consonant sound, “an” before a vowel sound: a meeting, an employee.', '«a» delante de un sonido consonántico, «an» delante de un sonido vocálico: a meeting, an employee.'),
        x('Le pluriel se forme le plus souvent avec -s : one printer, two printers.', 'يُصاغ الجمع غالبًا بإضافة -s: one printer وtwo printers.', 'Most plurals add -s: one printer, two printers.', 'El plural suele formarse con -s: one printer, two printers.'),
        x('Au TOEIC, le vocabulaire du bureau revient dans toutes les parties.', 'في التوييك تتكرّر مفردات المكتب في كل الأجزاء.', 'On the TOEIC, office vocabulary appears in every part.', 'En el TOEIC, el vocabulario de oficina aparece en todas las partes.'),
      ],
      'The manager has an important meeting at nine.',
      x('« an important » : « important » commence par un son voyelle.', '«an important» لأن «important» تبدأ بصوت متحرك.', '“an important”: “important” starts with a vowel sound.', '«an important»: «important» empieza por sonido vocálico.'),
    ),
  },
  [
    match('a1-office-m1', ['meeting', 'colleague', 'manager', 'employee', 'schedule'], x(
      'Ces cinq mots apparaissent dans presque chaque test : apprends-les par paires.',
      'تظهر هذه الكلمات الخمس في كل اختبار تقريبًا: احفظها كأزواج.',
      'These five words appear in almost every test: learn them in pairs.',
      'Estas cinco palabras aparecen en casi todos los tests: apréndelas por parejas.',
    )),
    v('a1-office-q1', 1, 'The ___ on the second floor is not working, so I cannot print my report.', ['printer', 'chef', 'ticket', 'menu'], x(
      '« Print » (imprimer) appelle « printer » (imprimante).',
      'الفعل «print» (يطبع) يناسب «printer» (طابعة).',
      '“Print” goes with “printer”.',
      '«Print» (imprimir) se asocia con «printer» (impresora).',
    )),
    g('a1-office-q2', 1, 'Ms. Haddad is ___ engineer at our company.', ['an', 'a', 'the', 'some'], x(
      '« Engineer » commence par un son voyelle : « an engineer ».',
      'كلمة «engineer» تبدأ بصوت متحرك: «an engineer».',
      '“Engineer” starts with a vowel sound: “an engineer”.',
      '«Engineer» empieza por sonido vocálico: «an engineer».',
    )),
    g('a1-office-q3', 1, 'We have two new ___ in the sales team.', ['employees', 'employee', 'employ', 'employer'], x(
      'Après « two », il faut un nom au pluriel : « employees ».',
      'بعد «two» نحتاج اسمًا في الجمع: «employees».',
      'After “two” you need a plural noun: “employees”.',
      'Después de «two» se necesita un sustantivo en plural: «employees».',
    )),
    match('a1-office-m2', ['printer', 'payment', 'password', 'order', 'delivery'], x(
      '« Order » peut être un nom (une commande) ou un verbe (commander).',
      'كلمة «order» قد تكون اسمًا (طلبية) أو فعلًا (يطلب).',
      '“Order” can be a noun or a verb.',
      '«Order» puede ser sustantivo (un pedido) o verbo (pedir).',
    )),
    v('a1-office-q4', 1, 'Please write your ___ to log in to the computer.', ['password', 'payment', 'delivery', 'dessert'], x(
      'Pour se connecter (« log in »), il faut un mot de passe : « password ».',
      'لتسجيل الدخول («log in») نحتاج كلمة مرور: «password».',
      'To log in you need a “password”.',
      'Para iniciar sesión («log in») se necesita una contraseña: «password».',
    )),
    order('a1-office-o1', 'My colleague works in the sales department', x('Commence par « My ».', 'ابدأ بـ «My».', 'Start with “My”.', 'Empieza por «My».'), x(
      'Ordre de base : sujet (My colleague) + verbe (works) + lieu (in the sales department).',
      'الترتيب الأساسي: فاعل (My colleague) + فعل (works) + مكان (in the sales department).',
      'Basic order: subject + verb + place.',
      'Orden básico: sujeto (My colleague) + verbo (works) + lugar (in the sales department).',
    )),
    order('a1-office-o2', 'The meeting starts at nine', x('Le verbe est « starts ».', 'الفعل هو «starts».', 'The verb is “starts”.', 'El verbo es «starts».'), x(
      'Sujet + verbe + heure. « At » s’utilise avec une heure précise.',
      'فاعل + فعل + ساعة. نستعمل «at» مع الساعة المحددة.',
      'Subject + verb + time. Use “at” with a clock time.',
      'Sujeto + verbo + hora. «At» se usa con una hora concreta.',
    )),
  ],
  [
    match('a1-office-s2-m1', ['customer', 'factory', 'download', 'ticket', 'reserve'], x(
      '« Customer » = client ; « factory » = usine ; « reserve » = réserver.',
      '«Customer» = عميل، «factory» = مصنع، «reserve» = يحجز.',
      '“Customer”, “factory” and “reserve” are core TOEIC words.',
      '«Customer» = cliente; «factory» = fábrica; «reserve» = reservar.',
    )),
    v('a1-office-s2-q1', 1, 'Our new ___ works in the sales department. She is very friendly.', ['colleague', 'computer', 'calendar', 'coffee'], x(
      '« She is very friendly » parle d’une personne : un collègue, « colleague ».',
      '«She is very friendly» تتحدث عن شخص: زميلة، «colleague».',
      '“She is very friendly” describes a person: a “colleague”.',
      '«She is very friendly» habla de una persona: una compañera, «colleague».',
    )),
    v('a1-office-s2-q2', 1, 'Can you ___ the report? I need a paper copy.', ['print', 'paint', 'point', 'plant'], x(
      'Une copie papier (« paper copy ») s’obtient en imprimant : « print ».',
      'النسخة الورقية («paper copy») نحصل عليها بالطباعة: «print».',
      'A “paper copy” means you need to “print” it.',
      'Una copia en papel («paper copy») se obtiene imprimiendo: «print».',
    )),
    g('a1-office-s2-q3', 1, 'There is ___ umbrella next to the door.', ['an', 'a', 'two', 'many'], x(
      '« Umbrella » commence par un son voyelle : « an umbrella ». « Two » et « many » demandent un pluriel.',
      '«Umbrella» تبدأ بصوت متحرك: «an umbrella». أما «two» و«many» فتحتاجان جمعًا.',
      '“Umbrella” starts with a vowel sound: “an umbrella”. “Two” and “many” need a plural.',
      '«Umbrella» empieza por sonido vocálico: «an umbrella». «Two» y «many» exigen plural.',
    )),
    g('a1-office-s2-q4', 1, 'The two ___ are on the third floor.', ['offices', 'office', 'officer', 'officing'], x(
      'Après « two », il faut un nom au pluriel : « offices ».',
      'بعد «two» نحتاج اسمًا في الجمع: «offices».',
      'After “two” you need a plural noun: “offices”.',
      'Después de «two» se necesita un sustantivo en plural: «offices».',
    )),
    g('a1-office-s2-q5', 1, 'I have three ___ today, so I am very busy.', ['meetings', 'meeting', 'meet', 'met'], x(
      '« Three » + nom au pluriel : « meetings ».',
      '«Three» + اسم في الجمع: «meetings».',
      '“Three” + plural noun: “meetings”.',
      '«Three» + sustantivo en plural: «meetings».',
    )),
    v('a1-office-s2-q6', 1, 'The training starts at 9 and ends at 5. Check the ___ for details.', ['schedule', 'printer', 'password', 'umbrella'], x(
      'Les horaires d’une formation se trouvent dans le planning : « schedule ».',
      'مواعيد التدريب نجدها في الجدول الزمني: «schedule».',
      'Training times are in the “schedule”.',
      'Los horarios de una formación están en el calendario: «schedule».',
    )),
    order('a1-office-s2-o1', 'The printer is next to the window', x('Commence par « The printer ».', 'ابدأ بـ «The printer».', 'Start with “The printer”.', 'Empieza por «The printer».'), x(
      'Sujet (The printer) + be (is) + lieu (next to the window).',
      'فاعل (The printer) + be (is) + مكان (next to the window).',
      'Subject + be + place.',
      'Sujeto (The printer) + be (is) + lugar (next to the window).',
    )),
    order('a1-office-s2-o2', 'Our office is on the second floor', x('Commence par « Our ».', 'ابدأ بـ «Our».', 'Start with “Our”.', 'Empieza por «Our».'), x(
      'Possessif + nom (Our office) + is + « on the … floor » pour un étage.',
      'ضمير ملكية + اسم (Our office) + is + «on the … floor» للطابق.',
      'Possessive + noun + is + “on the … floor”.',
      'Posesivo + sustantivo (Our office) + is + «on the … floor» para una planta.',
    )),
    respond('a1-office-s2-l1', 1, 'Where is the printer?', ['Next to the kitchen.', 'Yes, it prints.', 'At nine o’clock.'], x(
      '« Where » demande un lieu : « Next to the kitchen ».',
      '«Where» يسأل عن مكان: «Next to the kitchen».',
      '“Where” asks for a place.',
      '«Where» pregunta por un lugar: «Next to the kitchen».',
    )),
  ],
  [
    match('a1-office-s3-m1', ['manager', 'factory', 'customer', 'schedule', 'password'], x(
      'Révision : ces mots reviennent dans les annonces et les e-mails du TOEIC.',
      'مراجعة: تتكرر هذه الكلمات في إعلانات التوييك ورسائله.',
      'Review: these words recur in TOEIC notices and emails.',
      'Repaso: estas palabras vuelven en los anuncios y correos del TOEIC.',
    )),
    v('a1-office-s3-q1', 1, 'The ___ answers the phone and welcomes visitors.', ['receptionist', 'engineer', 'driver', 'chef'], x(
      'Accueillir les visiteurs et répondre au téléphone : c’est le rôle du réceptionniste.',
      'استقبال الزوار والرد على الهاتف من مهام موظف الاستقبال: «receptionist».',
      'Welcoming visitors and answering the phone is a “receptionist”’s job.',
      'Recibir a los visitantes y atender el teléfono es el trabajo del recepcionista: «receptionist».',
    )),
    v('a1-office-s3-q2', 1, 'Please write the date at the top of the ___.', ['page', 'pen', 'phone', 'plant'], x(
      'On écrit la date en haut d’une page : « page ».',
      'نكتب التاريخ أعلى الصفحة: «page».',
      'You write the date at the top of a “page”.',
      'La fecha se escribe en la parte superior de la página: «page».',
    )),
    g('a1-office-s3-q3', 1, 'He has ___ idea for the new project.', ['an', 'a', 'two', 'many'], x(
      '« Idea » commence par un son voyelle et est au singulier : « an idea ».',
      '«Idea» تبدأ بصوت متحرك وهي مفردة: «an idea».',
      '“Idea” is singular and starts with a vowel sound: “an idea”.',
      '«Idea» está en singular y empieza por sonido vocálico: «an idea».',
    )),
    g('a1-office-s3-q4', 1, 'We need five new ___ for the meeting room.', ['chairs', 'chair', 'chaired', 'chairing'], x(
      '« Five » + pluriel : « chairs ».',
      '«Five» + جمع: «chairs».',
      '“Five” + plural: “chairs”.',
      '«Five» + plural: «chairs».',
    )),
    g('a1-office-s3-q5', 1, '___ computers in this room are new.', ['The', 'A', 'An', 'One'], x(
      '« Computers » est au pluriel : seul « The » convient. « A », « an » et « one » vont avec un singulier.',
      '«Computers» جمع: تصلح «The» فقط، أما «a» و«an» و«one» فمع المفرد.',
      '“Computers” is plural, so only “The” fits.',
      '«Computers» está en plural: solo encaja «The». «A», «an» y «one» van con singular.',
    )),
    v('a1-office-s3-q6', 1, 'I can’t open the file. Can you send it again by ___?', ['email', 'envelope', 'elevator', 'engine'], x(
      'On renvoie un fichier par e-mail : « by email ».',
      'نرسل الملف من جديد عبر البريد الإلكتروني: «by email».',
      'You send a file “by email”.',
      'Un archivo se reenvía por correo electrónico: «by email».',
    )),
    order('a1-office-s3-o1', 'Please send me the file today', x('Commence par « Please ».', 'ابدأ بـ «Please».', 'Start with “Please”.', 'Empieza por «Please».'), x(
      'Demande polie : Please + verbe + me + objet + moment.',
      'طلب مهذب: Please + فعل + me + مفعول + وقت.',
      'Polite request: Please + verb + me + object + time.',
      'Petición cortés: Please + verbo + me + objeto + momento.',
    )),
    order('a1-office-s3-o2', 'The manager has a new laptop', x('Le verbe est « has ».', 'الفعل هو «has».', 'The verb is “has”.', 'El verbo es «has».'), x(
      '« The manager » = he → « has ». L’adjectif « new » se place avant le nom.',
      '«The manager» = he ← «has». والصفة «new» تأتي قبل الاسم.',
      '“The manager” = he → “has”. The adjective comes before the noun.',
      '«The manager» = he → «has». El adjetivo «new» va delante del sustantivo.',
    )),
    respond('a1-office-s3-l1', 1, 'Is this your desk?', ['No, mine is by the window.', 'It is a big desk.', 'At ten o’clock.'], x(
      'Question sur la possession : on répond en indiquant à qui est le bureau. « It is a big desk » ne répond pas à la question.',
      'سؤال عن الملكية: نجيب بتحديد صاحب المكتب. «It is a big desk» لا تجيب عن السؤال.',
      'A question about ownership: say whose desk it is.',
      'Pregunta sobre la propiedad: se responde diciendo de quién es la mesa. «It is a big desk» no responde.',
    )),
  ],
);
