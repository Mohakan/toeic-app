import type { Unit } from '../../../types';
import { g, lesson, read, unit, x } from '../build';

const LETTER = 'Dear Mr. Haddad,\nWe are writing to inform you that your subscription to Business Weekly will expire on 31 May. (1) ___ renew now, you will receive a 20% discount on the annual rate. (2) ___. Simply visit our website or call our customer service team. We look forward to (3) ___ you as a reader.';

const PARKING_MEMO = 'To: All employees\nFrom: Facilities Department\nSubject: Parking lot repairs\nThe main parking lot (1) ___ from 3 to 14 June while the surface is repaired. (2) ___, staff may use the temporary lot on Green Street, a five-minute walk from the office. (3) ___ We apologize for the (4) ___ and thank you for your patience.';

const WEBINAR = 'Dear members,\nWe are pleased to invite you to (1) ___ our next webinar, “Growing Your Business Online”, on Tuesday 18 March at 6 p.m. The session will be led by Amira Saidi, a digital marketing consultant. (2) ___ Attendance is (3) ___ for all association members. After registering, you will (4) ___ a link by email.';

const PRICE_NOTICE = 'Dear members,\n(1) ___ 1 July, the monthly membership fee at FitLine Gym will increase from 45 to 50 dinars. This change is (2) ___ rising energy and maintenance costs. (3) ___ Members who pay for a full year before 30 June will keep the (4) ___ rate until next summer.\nThe FitLine Team';

const PRESS_RELEASE = 'TUNIS — Sahel Textiles (1) ___ an agreement with a major European clothing retailer. The deal, (2) ___ is worth €4 million, will double the company’s exports over the next two years. (3) ___ To meet the new demand, Sahel Textiles plans to (4) ___ its factory in Monastir and hire 150 workers.';

export const b2Part6: Unit = unit(
  {
    id: 'b2-part6',
    emoji: '📝',
    level: 4,
    part: 'R6',
    title: x('Partie 6 : lettres et insertion de phrase', 'الجزء 6: رسائل وإدراج جمل', 'Part 6: letters and sentence insertion', 'Parte 6: cartas e inserción de frases'),
    subtitle: x('Cohérence du texte', 'تماسك النص', 'Text coherence', 'Coherencia del texto'),
    lesson: lesson(
      x('Choisir la phrase qui s’insère logiquement dans le texte.', 'اختيار الجملة التي تندرج منطقيًا في النص.', 'Choose the sentence that fits the text logically.', 'Elegir la frase que encaja de forma lógica en el texto.'),
      [
        x('La phrase à insérer doit relier ce qui précède et ce qui suit.', 'يجب أن تربط الجملة المدرجة ما قبلها بما بعدها.', 'The inserted sentence must connect before and after.', 'La frase insertada debe enlazar lo anterior con lo siguiente.'),
        x('Vérifie les pronoms (it, this, they) : à quoi renvoient-ils ?', 'تحقّق من الضمائر (it وthis وthey): إلامَ تعود؟', 'Check what pronouns refer to.', 'Comprueba los pronombres (it, this, they): ¿a qué se refieren?'),
      ],
      '…you will receive a 20% discount. Renewing is quick and easy. Simply visit our website…',
      x('« Renewing is quick and easy » annonce « Simply visit… ».', '«Renewing is quick and easy» تمهّد لـ «Simply visit…».', 'It prepares “Simply visit…”.', '«Renewing is quick and easy» prepara «Simply visit…».'),
    ),
  },
  [
    read('b2-p6-r1', 'R6', 4, LETTER, 'Choose the best option for blank (1).', ['If you', 'Unless you', 'Although you', 'Despite you'], x(
      'Condition positive : « si vous renouvelez maintenant, vous aurez une réduction ».',
      'شرط إيجابي: «إذا جدّدت الآن ستحصل على تخفيض».',
      'Positive condition → “If you”.',
      'Condición positiva: «si renueva ahora, tendrá un descuento» → «If you».',
    )),
    read('b2-p6-r2', 'R6', 4, LETTER, 'Choose the sentence that best fits blank (2).', ['Renewing is quick and easy.', 'Our magazine was founded in 1985.', 'Your last payment was not received.', 'We have changed our office address.'], x(
      'La phrase suivante explique comment renouveler : il faut une transition sur la facilité du renouvellement.',
      'الجملة التالية تشرح طريقة التجديد: نحتاج انتقالًا عن سهولة التجديد.',
      'The next sentence explains how to renew.',
      'La frase siguiente explica cómo renovar: hace falta una transición sobre lo fácil que es renovar.',
    )),
    read('b2-p6-r3', 'R6', 4, LETTER, 'Choose the best option for blank (3).', ['keeping', 'keep', 'kept', 'be kept'], x(
      '« Look forward to » + -ing (« to » est ici une préposition).',
      '«Look forward to» + -ing (لأن «to» هنا حرف جر).',
      '“Look forward to” + -ing.',
      '«Look forward to» + -ing («to» es aquí una preposición).',
    )),
    g('b2-p6-q1', 4, 'Applications must be received ___ 5 p.m. on 30 April.', ['by', 'until', 'since', 'within'], x(
      'Échéance à respecter → « by ». « Until » exprimerait une durée continue.',
      'موعد نهائي ← «by». أما «until» فتعبّر عن مدة مستمرة.',
      'A deadline → “by”. “Until” would mean a continuing period.',
      'Fecha límite → «by». «Until» expresaría una duración continua.',
    )),
    g('b2-p6-q2', 4, 'Ms. Alvarez will be responsible ___ training new employees.', ['for', 'to', 'at', 'with'], x(
      'Collocation : « responsible for ».',
      'تركيب ثابت: «responsible for».',
      '“responsible for”.',
      'Colocación fija: «responsible for».',
    )),
  ],
  [
    read('b2-p6-s2-r1', 'R6', 4, PARKING_MEMO, 'Choose the best option for blank (1).', ['will be closed', 'closed', 'is closing', 'has closed'], x(
      'Travaux à venir (« from 3 to 14 June ») subis par le parking → passif futur.',
      'أشغال قادمة («from 3 to 14 June») والموقف يقع عليه الفعل ← مجهول في المستقبل.',
      'Future passive for a planned closure.',
      'Obras futuras («from 3 to 14 June») que afectan al aparcamiento → pasiva en futuro.',
    )),
    read('b2-p6-s2-r2', 'R6', 4, PARKING_MEMO, 'Choose the best option for blank (2).', ['Meanwhile', 'Therefore', 'Otherwise', 'Instead of'], x(
      '« Meanwhile » = pendant ce temps (durant les travaux).',
      '«Meanwhile» = في الأثناء (خلال الأشغال).',
      '“Meanwhile” = during that time.',
      '«Meanwhile» = mientras tanto (durante las obras).',
    )),
    read('b2-p6-s2-r3', 'R6', 4, PARKING_MEMO, 'Choose the sentence that best fits blank (3).', ['Spaces there are limited, so please arrive early.', 'The new parking lot opened last year.', 'Our cafeteria serves lunch from noon.', 'Thank you for attending the meeting.'], x(
      'La phrase parle du parking provisoire mentionné juste avant : « there » renvoie à Green Street.',
      'الجملة تتحدث عن الموقف المؤقت المذكور قبلها: «there» تعود إلى Green Street.',
      '“There” refers to the Green Street lot.',
      'La frase habla del aparcamiento provisional citado justo antes: «there» remite a Green Street.',
    )),
    read('b2-p6-s2-r4', 'R6', 4, PARKING_MEMO, 'Choose the best option for blank (4).', ['inconvenience', 'convenient', 'conveniently', 'inconvenient'], x(
      'Après « the » → un nom : « inconvenience » (gêne).',
      'بعد «the» ← اسم: «inconvenience» (إزعاج).',
      'After “the” → noun.',
      'Tras «the» → un sustantivo: «inconvenience» (molestia).',
    )),
    read('b2-p6-s2-r5', 'R6', 4, WEBINAR, 'Choose the best option for blank (1).', ['join', 'joining', 'joined', 'joins'], x(
      '« Invite you to » + base verbale : « to join ».',
      '«Invite you to» + المصدر: «to join».',
      '“Invite you to join”.',
      '«Invite you to» + infinitivo: «to join».',
    )),
    read('b2-p6-s2-r6', 'R6', 4, WEBINAR, 'Choose the sentence that best fits blank (2).', ['She has advised more than 200 small businesses.', 'The webinar was cancelled last month.', 'Please return the form by mail.', 'Our offices are closed on Sundays.'], x(
      'La phrase précédente présente l’intervenante : on poursuit avec son expérience.',
      'الجملة السابقة تقدّم المتحدثة، فنواصل بخبرتها.',
      'It continues the speaker’s introduction.',
      'La frase anterior presenta a la ponente: se sigue con su experiencia.',
    )),
    read('b2-p6-s2-r7', 'R6', 4, WEBINAR, 'Choose the best option for blank (3).', ['free of charge', 'charging', 'by charge', 'chargeable'], x(
      '« Free of charge » = gratuit.',
      '«Free of charge» = مجانًا.',
      '“Free of charge” = no cost.',
      '«Free of charge» = gratis.',
    )),
    read('b2-p6-s2-r8', 'R6', 4, WEBINAR, 'Choose the best option for blank (4).', ['receive', 'received', 'receiving', 'reception'], x(
      '« Will » + base verbale → « receive ».',
      '«Will» + المصدر ← «receive».',
      '“Will” + base verb.',
      '«Will» + infinitivo → «receive».',
    )),
    g('b2-p6-s2-q1', 4, 'The price includes breakfast as well ___ airport transfers.', ['as', 'than', 'so', 'like'], x(
      'Expression fixe : « as well as » (ainsi que).',
      'تعبير ثابت: «as well as» (وكذلك).',
      'Fixed phrase “as well as”.',
      'Expresión fija: «as well as» (así como).',
    )),
    g('b2-p6-s2-q2', 4, 'We apologize ___ any delay this may cause.', ['for', 'about', 'of', 'to'], x(
      'Collocation : « apologize for ».',
      'تركيب ثابت: «apologize for».',
      '“apologize for”.',
      'Colocación fija: «apologize for».',
    )),
  ],
  [
    read('b2-p6-s3-r1', 'R6', 4, PRICE_NOTICE, 'Choose the best option for blank (1).', ['Effective', 'Effect', 'Effectively', 'Effecting'], x(
      '« Effective 1 July » = à compter du 1er juillet.',
      '«Effective 1 July» = ابتداءً من 1 جويلية.',
      '“Effective” + date = starting from.',
      '«Effective 1 July» = a partir del 1 de julio.',
    )),
    read('b2-p6-s3-r2', 'R6', 4, PRICE_NOTICE, 'Choose the best option for blank (2).', ['due to', 'in spite of', 'so that', 'unless'], x(
      'Cause + nom (rising energy costs) → « due to ».',
      'سبب + اسم ← «due to».',
      'Cause + noun → “due to”.',
      'Causa + sustantivo (rising energy costs) → «due to».',
    )),
    read('b2-p6-s3-r3', 'R6', 4, PRICE_NOTICE, 'Choose the sentence that best fits blank (3).', ['This is our first price change in four years.', 'Our gym will open a new branch next year.', 'Please bring a towel to every class.', 'Lockers are available at the entrance.'], x(
      'On justifie la hausse : première augmentation depuis quatre ans.',
      'تبرير الزيادة: أول تغيير في الأسعار منذ أربع سنوات.',
      'It softens the price rise.',
      'Se justifica la subida: el primer cambio de precio en cuatro años.',
    )),
    read('b2-p6-s3-r4', 'R6', 4, PRICE_NOTICE, 'Choose the best option for blank (4).', ['current', 'currently', 'currency', 'currents'], x(
      'Devant le nom « rate » → adjectif « current » (actuel).',
      'قبل الاسم «rate» ← الصفة «current» (الحالي).',
      'Adjective before a noun.',
      'Delante del sustantivo «rate» → adjetivo «current» (actual).',
    )),
    read('b2-p6-s3-r5', 'R6', 4, PRESS_RELEASE, 'Choose the best option for blank (1).', ['has signed', 'signing', 'to sign', 'sign'], x(
      'Information récente et sujet singulier → present perfect « has signed ».',
      'خبر حديث وفاعل مفرد ← المضارع التام «has signed».',
      'Recent news → “has signed”.',
      'Noticia reciente y sujeto singular → present perfect «has signed».',
    )),
    read('b2-p6-s3-r6', 'R6', 4, PRESS_RELEASE, 'Choose the best option for blank (2).', ['which', 'who', 'whose', 'where'], x(
      'Relatif pour une chose (l’accord) → « which ».',
      'اسم موصول لغير العاقل (الاتفاق) ← «which».',
      'A thing → “which”.',
      'Relativo para una cosa (el acuerdo) → «which».',
    )),
    read('b2-p6-s3-r7', 'R6', 4, PRESS_RELEASE, 'Choose the sentence that best fits blank (3).', ['The first deliveries are planned for October.', 'The company was founded by two engineers.', 'Customers can call us on weekdays.', 'The factory will close next year.'], x(
      'Après l’accord, on annonce sa mise en œuvre ; la fermeture d’usine contredit la croissance.',
      'بعد الاتفاق نعلن عن تنفيذه، أما غلق المصنع فيناقض النمو.',
      'It continues the deal.',
      'Tras el acuerdo, se anuncia su puesta en marcha; el cierre de la fábrica contradice el crecimiento.',
    )),
    read('b2-p6-s3-r8', 'R6', 4, PRESS_RELEASE, 'Choose the best option for blank (4).', ['expand', 'expansion', 'expansive', 'expanded'], x(
      '« Plans to » + base verbale → « expand ».',
      '«Plans to» + المصدر ← «expand».',
      '“Plans to” + base verb.',
      '«Plans to» + infinitivo → «expand».',
    )),
    g('b2-p6-s3-q1', 4, 'Participants are asked to arrive ___ least fifteen minutes early.', ['at', 'in', 'on', 'for'], x(
      'Expression fixe : « at least » (au moins).',
      'تعبير ثابت: «at least» (على الأقل).',
      'Fixed phrase “at least”.',
      'Expresión fija: «at least» (al menos).',
    )),
    g('b2-p6-s3-q2', 4, 'The manager insisted ___ checking every invoice personally.', ['on', 'in', 'for', 'at'], x(
      'Collocation : « insist on » + -ing.',
      'تركيب ثابت: «insist on» + -ing.',
      '“insist on” + -ing.',
      'Colocación fija: «insist on» + -ing.',
    )),
  ],
);
