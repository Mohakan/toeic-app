import type { Localized, McqItem } from '../types';
import { withShuffledOptions } from './shuffle';

const L = (fr: string, ar: string, en: string, es: string): Localized => ({ fr, ar, en, es });

/**
 * Placement item bank: 5 items per difficulty level (1 = A1 ... 6 = C1+).
 * Every item must have a verified key and an explanation in the three help languages.
 */
const rawBank: McqItem[] = [
  // ---------- Level 1 ----------
  {
    id: 'a1-g1', skill: 'grammar', part: 'R5', level: 1,
    prompt: 'She ___ a teacher.',
    options: ['am', 'is', 'are', 'be'], answer: 1,
    explain: L(
      '« She » est à la 3e personne du singulier : on utilise « is ».',
      '«She» ضمير للمفرد الغائب، لذلك نستعمل «is».',
      '“She” is third person singular, so we use “is”.',
      '«She» es tercera persona del singular: se usa «is».',
    ),
  },
  {
    id: 'a1-g2', skill: 'grammar', part: 'R5', level: 1,
    prompt: 'We ___ to the office by bus every day.',
    options: ['go', 'goes', 'going', 'gone'], answer: 0,
    explain: L(
      'Avec « we », le présent simple garde la forme de base : « go ».',
      'مع «we» يبقى الفعل في الشكل الأساسي في المضارع البسيط: «go».',
      'With “we”, the present simple keeps the base form: “go”.',
      'Con «we», el presente simple mantiene la forma base: «go».',
    ),
  },
  {
    id: 'a1-v1', skill: 'vocab', part: 'R5', level: 1,
    prompt: 'Please ___ the door. It is cold.',
    options: ['open', 'close', 'read', 'sell'], answer: 1,
    explain: L(
      'Il fait froid, donc on demande de fermer la porte : « close ».',
      'الجو بارد، لذلك نطلب إغلاق الباب: «close».',
      'It is cold, so we ask someone to close the door.',
      'Hace frío, así que pedimos que se cierre la puerta: «close».',
    ),
  },
  {
    id: 'a1-r1', skill: 'reading', part: 'R7', level: 1,
    passage: 'Meeting at 3 p.m. in Room 4. Please bring your laptop.',
    prompt: 'Where is the meeting?',
    options: ['In Room 4', 'In Room 3', 'At 4 p.m.', 'In the café'], answer: 0,
    explain: L(
      'Le texte dit « in Room 4 ». « 3 p.m. » est l’heure, pas le lieu.',
      'يقول النص «in Room 4». أما «3 p.m.» فهو الوقت وليس المكان.',
      'The text says “in Room 4”. “3 p.m.” is the time, not the place.',
      'El texto dice «in Room 4». «3 p.m.» es la hora, no el lugar.',
    ),
  },
  {
    id: 'a1-l1', skill: 'listening', part: 'L4', level: 1,
    audio: 'Good morning. My name is Anna. I work at a bank.',
    prompt: 'Where does Anna work?',
    options: ['At a bank', 'At a school', 'At a hotel', 'At a shop'], answer: 0,
    explain: L(
      'Anna dit : « I work at a bank » (je travaille dans une banque).',
      'تقول آنا: «I work at a bank» أي أعمل في بنك.',
      'Anna says: “I work at a bank”.',
      'Anna dice: «I work at a bank» (trabajo en un banco).',
    ),
  },

  // ---------- Level 2 ----------
  {
    id: 'a2-g1', skill: 'grammar', part: 'R5', level: 2,
    prompt: 'He ___ his email before lunch yesterday.',
    options: ['checks', 'checked', 'checking', 'will check'], answer: 1,
    explain: L(
      '« Yesterday » indique le passé : on met le verbe au prétérit, « checked ».',
      '«Yesterday» يدل على الماضي، فنستعمل الماضي البسيط «checked».',
      '“Yesterday” signals the past, so we use the past simple: “checked”.',
      '«Yesterday» indica pasado: se usa el pasado simple, «checked».',
    ),
  },
  {
    id: 'a2-g2', skill: 'grammar', part: 'R5', level: 2,
    prompt: 'There ___ two printers in the office.',
    options: ['is', 'are', 'was', 'be'], answer: 1,
    explain: L(
      '« Two printers » est pluriel et on est au présent : « There are ».',
      '«Two printers» جمع ونحن في المضارع: «There are».',
      '“Two printers” is plural and we are in the present: “There are”.',
      '«Two printers» es plural y estamos en presente: «There are».',
    ),
  },
  {
    id: 'a2-v1', skill: 'vocab', part: 'R5', level: 2,
    prompt: 'The ___ is on Friday at 10 a.m. We will discuss the new project.',
    options: ['meeting', 'menu', 'mirror', 'mountain'], answer: 0,
    explain: L(
      'On « discute un projet » lors d’une réunion : « meeting ».',
      'نناقش المشروع في اجتماع: «meeting».',
      'We discuss a project in a “meeting”.',
      'Un proyecto se comenta en una reunión: «meeting».',
    ),
  },
  {
    id: 'a2-r1', skill: 'reading', part: 'R7', level: 2,
    passage: 'Notice: The cafeteria will be closed on Monday for cleaning. It will reopen on Tuesday at 8 a.m.',
    prompt: 'When will the cafeteria reopen?',
    options: ['Monday at 8 a.m.', 'Tuesday at 8 a.m.', 'Tuesday at 8 p.m.', 'Wednesday at 8 a.m.'], answer: 1,
    explain: L(
      'Le texte précise : « reopen on Tuesday at 8 a.m. ». Attention à a.m. et p.m.',
      'يذكر النص: «reopen on Tuesday at 8 a.m.». انتبه إلى a.m. و p.m.',
      'The notice says “reopen on Tuesday at 8 a.m.”. Watch a.m. versus p.m.',
      'El aviso dice «reopen on Tuesday at 8 a.m.». Cuidado con a.m. y p.m.',
    ),
  },
  {
    id: 'a2-l1', skill: 'listening', part: 'L2', level: 2,
    audio: 'The train to Boston leaves at nine fifteen from platform two.',
    prompt: 'Which platform does the train leave from?',
    options: ['Platform one', 'Platform two', 'Platform nine', 'Platform fifteen'], answer: 1,
    explain: L(
      '« Platform two » est le quai. « Nine fifteen » est l’heure (9 h 15).',
      '«Platform two» هو الرصيف، أما «nine fifteen» فهو الوقت (9:15).',
      '“Platform two” is the platform; “nine fifteen” is the time.',
      '«Platform two» es el andén; «nine fifteen» es la hora (9:15).',
    ),
  },

  // ---------- Level 3 ----------
  {
    id: 'a3-g1', skill: 'grammar', part: 'R5', level: 3,
    prompt: 'If the shipment ___ on time, we will start production on Monday.',
    options: ['arrives', 'arrived', 'will arrive', 'arriving'], answer: 0,
    explain: L(
      'Condition de type 1 : « if » + présent simple, puis « will » dans la principale.',
      'الشرط من النوع الأول: «if» + مضارع بسيط ثم «will» في الجملة الرئيسية.',
      'First conditional: “if” + present simple, then “will” in the main clause.',
      'Condicional de tipo 1: «if» + presente simple, y «will» en la oración principal.',
    ),
  },
  {
    id: 'a3-g2', skill: 'grammar', part: 'R5', level: 3,
    prompt: 'The manager asked ___ the report was ready.',
    options: ['that', 'whether', 'what', 'who'], answer: 1,
    explain: L(
      'Question indirecte oui/non : on utilise « whether » (ou « if »).',
      'في السؤال غير المباشر الذي جوابه نعم/لا نستعمل «whether» أو «if».',
      'In an indirect yes/no question we use “whether” (or “if”).',
      'En una pregunta indirecta de sí o no se usa «whether» (o «if»).',
    ),
  },
  {
    id: 'a3-v1', skill: 'vocab', part: 'R5', level: 3,
    prompt: 'Employees must ___ their expense reports by the end of the month.',
    options: ['submit', 'subtract', 'subscribe', 'substitute'], answer: 0,
    explain: L(
      '« Submit a report » = remettre un rapport. Les autres verbes n’ont pas ce sens.',
      '«Submit a report» تعني تقديم تقرير. الأفعال الأخرى لا تؤدي هذا المعنى.',
      '“Submit a report” means hand it in. The other verbs do not fit.',
      '«Submit a report» significa entregar un informe. Los otros verbos no encajan.',
    ),
  },
  {
    id: 'a3-r1', skill: 'reading', part: 'R7', level: 3,
    passage:
      'Dear Mr. Lee, Thank you for your application. We would like to invite you for an interview on 14 March at 2 p.m. Please confirm your attendance by replying to this email before 10 March. Best regards, Sandra Cole, Human Resources',
    prompt: 'What is Mr. Lee asked to do?',
    options: ['Send his résumé again', 'Confirm by email that he will attend', 'Call Human Resources on 14 March', 'Bring three references'], answer: 1,
    explain: L(
      'La demande est : « confirm your attendance by replying to this email ».',
      'الطلب هو: «confirm your attendance by replying to this email».',
      'The request is: “confirm your attendance by replying to this email”.',
      'Lo que se pide es: «confirm your attendance by replying to this email».',
    ),
  },
  {
    id: 'a3-l1', skill: 'listening', part: 'L4', level: 3,
    audio: 'Attention passengers: Flight 207 to Lyon has been delayed by forty minutes due to heavy fog. We apologize for the inconvenience.',
    prompt: 'Why is the flight delayed?',
    options: ['A technical problem', 'Bad weather', 'A staff shortage', 'A late aircraft'], answer: 1,
    explain: L(
      '« Heavy fog » (brouillard épais) est une cause météorologique.',
      '«Heavy fog» (ضباب كثيف) سبب مرتبط بالطقس.',
      '“Heavy fog” is a weather reason.',
      '«Heavy fog» (niebla densa) es una causa meteorológica.',
    ),
  },

  // ---------- Level 4 ----------
  {
    id: 'a4-g1', skill: 'grammar', part: 'R5', level: 4,
    prompt: 'By the time the auditors arrive, we ___ all the documents.',
    options: ['will have prepared', 'will prepare', 'prepared', 'are preparing'], answer: 0,
    explain: L(
      '« By the time » + présent annonce une action achevée avant : futur antérieur « will have prepared ».',
      '«By the time» + المضارع يدل على فعل سيكتمل قبل ذلك: «will have prepared».',
      '“By the time” + present points to an action completed before: future perfect “will have prepared”.',
      '«By the time» + presente indica una acción terminada antes: futuro perfecto, «will have prepared».',
    ),
  },
  {
    id: 'a4-g2', skill: 'grammar', part: 'R5', level: 4,
    prompt: 'The new policy, ___ was announced last week, affects all departments.',
    options: ['who', 'which', 'whose', 'what'], answer: 1,
    explain: L(
      'Pour une chose dans une proposition relative non essentielle : « which ».',
      'للدلالة على شيء في جملة وصلٍ إضافية نستعمل «which».',
      'For a thing in a non-defining relative clause we use “which”.',
      'Para una cosa en una oración de relativo explicativa se usa «which».',
    ),
  },
  {
    id: 'a4-v1', skill: 'vocab', part: 'R5', level: 4,
    prompt: 'The company plans to ___ its operations to Asia next year.',
    options: ['expand', 'expend', 'expose', 'expire'], answer: 0,
    explain: L(
      '« Expand » = étendre. « Expend » (dépenser) et « expire » (expirer) sont des faux amis proches.',
      '«Expand» تعني توسيع. أما «expend» (إنفاق) و«expire» (انتهاء) فمتشابهتان في الشكل فقط.',
      '“Expand” means grow. “Expend” (spend) and “expire” are look-alike traps.',
      '«Expand» significa ampliar. «Expend» (gastar) y «expire» (caducar) son trampas de forma.',
    ),
  },
  {
    id: 'a4-r1', skill: 'reading', part: 'R7', level: 4,
    passage:
      'Due to a rise in raw material costs, Hartley Foods will increase prices of its frozen products by 4 percent starting 1 July. Orders placed before that date will be honored at current prices. Customers with questions may contact the sales department.',
    prompt: 'What is stated about orders placed before 1 July?',
    options: ['They will be cancelled', 'They will keep the current price', 'They will cost 4 percent more', 'They must be confirmed again'], answer: 1,
    explain: L(
      '« Honored at current prices » signifie que le prix actuel est maintenu.',
      '«Honored at current prices» تعني الحفاظ على السعر الحالي.',
      '“Honored at current prices” means the current price is kept.',
      '«Honored at current prices» significa que se mantiene el precio actual.',
    ),
  },
  {
    id: 'a4-l1', skill: 'listening', part: 'L4', level: 4,
    audio: 'I am calling about the invoice I received yesterday. It includes a delivery fee, but my contract says shipping is free for orders over five hundred dollars.',
    prompt: 'What is the caller’s problem?',
    options: ['A late delivery', 'An incorrect charge', 'A damaged product', 'A missing order'], answer: 1,
    explain: L(
      'Le client conteste des frais de livraison censés être gratuits : une facturation erronée.',
      'العميل يعترض على رسوم شحن يفترض أنها مجانية: خطأ في الفاتورة.',
      'The caller disputes a delivery fee that should be free: a billing error.',
      'El cliente reclama unos gastos de envío que deberían ser gratuitos: un error de facturación.',
    ),
  },

  // ---------- Level 5 ----------
  {
    id: 'a5-g1', skill: 'grammar', part: 'R5', level: 5,
    prompt: 'Had the committee reviewed the proposal earlier, the budget ___ approved sooner.',
    options: ['would have been', 'would be', 'had been', 'will have been'], answer: 0,
    explain: L(
      '« Had + participe passé » est un « if » inversé (3e conditionnel) : « would have been ».',
      '«Had + اسم المفعول» شرط مقلوب (النوع الثالث): «would have been».',
      '“Had + past participle” is an inverted third conditional: “would have been”.',
      '«Had + participio» es un «if» invertido (condicional de tipo 3): «would have been».',
    ),
  },
  {
    id: 'a5-g2', skill: 'grammar', part: 'R5', level: 5,
    prompt: 'Neither the director nor the assistants ___ aware of the schedule change.',
    options: ['was', 'were', 'is', 'has been'], answer: 1,
    explain: L(
      'Avec « neither… nor », le verbe s’accorde avec le sujet le plus proche : « the assistants » → « were ».',
      'مع «neither… nor» يتبع الفعل الفاعل الأقرب: «the assistants» ← «were».',
      'With “neither… nor”, the verb agrees with the nearer subject: “the assistants” → “were”.',
      'Con «neither… nor», el verbo concuerda con el sujeto más cercano: «the assistants» → «were».',
    ),
  },
  {
    id: 'a5-v1', skill: 'vocab', part: 'R5', level: 5,
    prompt: 'The merger is ___ upon approval from the regulatory authorities.',
    options: ['contingent', 'continuous', 'content', 'contrary'], answer: 0,
    explain: L(
      '« Contingent upon » = dépendant de, soumis à. C’est une expression fréquente au TOEIC.',
      '«Contingent upon» تعني متوقف على. عبارة شائعة في التوييك.',
      '“Contingent upon” means dependent on, a frequent TOEIC phrase.',
      '«Contingent upon» significa supeditado a, una expresión frecuente en el TOEIC.',
    ),
  },
  {
    id: 'a5-r1', skill: 'reading', part: 'R7', level: 5,
    passage:
      'Although remote work has reduced office expenses, several managers report that spontaneous collaboration has declined. The firm is therefore piloting a hybrid schedule requiring staff to be on site two days per week.',
    prompt: 'Why is the firm piloting a hybrid schedule?',
    options: ['To reduce office expenses even more', 'To bring back unplanned teamwork', 'To let managers work remotely full time', 'To require staff on site every day'], answer: 1,
    explain: L(
      '« Therefore » relie la cause (collaboration en baisse) à la décision (horaire hybride).',
      '«Therefore» تربط السبب (تراجع التعاون التلقائي) بالقرار (الجدول الهجين).',
      '“Therefore” links the cause (less spontaneous collaboration) to the decision.',
      '«Therefore» une la causa (menos colaboración espontánea) con la decisión.',
    ),
  },
  {
    id: 'a5-l1', skill: 'listening', part: 'L4', level: 5,
    audio: 'While the quarterly figures exceeded expectations, the finance director cautioned that much of the growth stemmed from one-time contracts and should not be extrapolated.',
    prompt: 'What does the finance director imply?',
    options: ['The quarterly figures fell short of expectations', 'The recent growth may not be repeated', 'New long-term contracts have been signed', 'The results will be extrapolated next quarter'], answer: 1,
    explain: L(
      '« Should not be extrapolated » : on ne peut pas projeter cette croissance dans l’avenir.',
      '«Should not be extrapolated» أي لا يجوز تعميم هذا النمو على المستقبل.',
      '“Should not be extrapolated”: the growth cannot be projected forward.',
      '«Should not be extrapolated»: ese crecimiento no puede proyectarse hacia el futuro.',
    ),
  },

  // ---------- Level 6 ----------
  {
    id: 'a6-g1', skill: 'grammar', part: 'R5', level: 5,
    prompt: 'Not only ___ the deadline, but the team also exceeded the quality targets.',
    options: ['did they meet', 'they met', 'they did meet', 'met they'], answer: 0,
    explain: L(
      'Après « Not only » en début de phrase, on inverse auxiliaire et sujet : « did they meet ».',
      'بعد «Not only» في بداية الجملة نقدّم المساعد على الفاعل: «did they meet».',
      'After sentence-initial “Not only”, auxiliary and subject invert: “did they meet”.',
      'Tras «Not only» al principio de la frase, se invierten auxiliar y sujeto: «did they meet».',
    ),
  },
  {
    id: 'a6-g2', skill: 'grammar', part: 'R5', level: 6,
    prompt: 'The supplier insisted that the order ___ in writing.',
    options: ['be confirmed', 'is confirmed', 'was confirmed', 'would confirm'], answer: 0,
    explain: L(
      'Après « insist that » (exigence), on emploie le subjonctif : la forme de base « be confirmed ».',
      'بعد «insist that» (إصرار/طلب) نستعمل صيغة الأمر غير المباشر: الشكل الأساسي «be confirmed».',
      'After “insist that” (a demand) English uses the subjunctive: base form “be confirmed”.',
      'Tras «insist that» (una exigencia), el inglés usa el subjuntivo: la forma base «be confirmed».',
    ),
  },
  {
    id: 'a6-v1', skill: 'vocab', part: 'R5', level: 5,
    prompt: 'The auditors found that the accounts were ___ with the new regulations.',
    options: ['compliant', 'compliable', 'complying', 'complicit'], answer: 0,
    explain: L(
      '« Compliant with » = conforme à. « Complicit » signifie complice, un faux ami.',
      '«Compliant with» تعني متوافق مع. أما «complicit» فتعني متواطئ.',
      '“Compliant with” means in line with. “Complicit” means involved in wrongdoing.',
      '«Compliant with» significa conforme a. «Complicit» significa cómplice, un falso amigo.',
    ),
  },
  {
    id: 'a6-r1', skill: 'reading', part: 'R7', level: 6,
    passage:
      'The board has deferred its decision on the acquisition pending an independent valuation, citing concerns that the asking price may not reflect the target’s underlying liabilities.',
    prompt: 'Why did the board postpone its decision?',
    options: ['It wants an outside assessment of what the company is really worth', 'The independent valuation showed the price was too low', 'The target’s liabilities have already been paid off', 'It has decided to reject the acquisition'], answer: 0,
    explain: L(
      '« Citing concerns… may not reflect underlying liabilities » : le prix pourrait masquer des dettes.',
      '«Concerns… may not reflect underlying liabilities»: قد يخفي السعر التزامات مالية.',
      '“Concerns… may not reflect underlying liabilities”: the price might hide debts.',
      '«Concerns… may not reflect underlying liabilities»: el precio podría ocultar deudas.',
    ),
  },
  {
    id: 'a6-r2', skill: 'reading', part: 'R7', level: 6,
    passage:
      'Notwithstanding a modest uptick in third-quarter revenue, the chief executive conceded that the turnaround remains fragile and that further cost rationalization cannot be ruled out.',
    prompt: 'What does the chief executive suggest?',
    options: ['More savings measures may still be needed', 'Revenue fell in the third quarter', 'The turnaround has now been completed', 'Costs have already been fully rationalized'], answer: 0,
    explain: L(
      '« Further cost rationalization cannot be ruled out » : d’autres économies restent possibles. « Notwithstanding » signifie « malgré » : le chiffre d’affaires a bien augmenté.',
      '«Further cost rationalization cannot be ruled out» أي أن تخفيضات أخرى في التكاليف ما زالت ممكنة. و«Notwithstanding» تعني «رغم»: فقد ارتفعت الإيرادات فعلًا.',
      '“Further cost rationalization cannot be ruled out”: more savings remain possible. “Notwithstanding” means “despite”: revenue did go up.',
      '«Further cost rationalization cannot be ruled out»: siguen siendo posibles más ahorros. «Notwithstanding» significa «a pesar de»: los ingresos sí subieron.',
    ),
  },
  {
    id: 'a6-l1', skill: 'listening', part: 'L4', level: 6,
    audio: 'Despite the setback in the Asian market, we remain cautiously optimistic, provided that we streamline our supply chain by the end of the third quarter.',
    prompt: 'What condition does the speaker mention?',
    options: ['Recovering from the setback in Asia', 'Making operations leaner by a set date', 'Expanding the supply chain in the third quarter', 'Remaining optimistic about the market'], answer: 1,
    explain: L(
      '« Provided that » introduit la condition : « streamline our supply chain ».',
      '«Provided that» تقدّم الشرط: «streamline our supply chain».',
      '“Provided that” introduces the condition: “streamline our supply chain”.',
      '«Provided that» introduce la condición: «streamline our supply chain».',
    ),
  },

  // ---------- Additional listening items (question-response, conversations, talks) ----------
  {
    id: 'a1-l2', skill: 'listening', part: 'L2', level: 1,
    audio: 'Is this your bag?',
    prompt: 'Choose the best response.',
    options: ['Yes, it’s mine.', 'It’s raining today.', 'At nine o’clock.', 'Two tickets, please.'], answer: 0,
    explain: L(
      'Question fermée sur la possession : « Yes, it’s mine » répond directement.',
      'سؤال عن الملكية جوابه نعم/لا: «Yes, it’s mine» رد مباشر.',
      'A yes/no question about ownership: “Yes, it’s mine” answers it directly.',
      'Pregunta de sí o no sobre la propiedad: «Yes, it’s mine» responde directamente.',
    ),
  },
  {
    id: 'a2-l2', skill: 'listening', part: 'L2', level: 2,
    audio: 'What time does the store open?',
    prompt: 'Choose the best response.',
    options: ['At eight thirty.', 'Near the station.', 'Yes, it’s open.', 'By credit card.'], answer: 0,
    explain: L(
      '« What time » demande une heure. Piège : « Yes » ne répond jamais à une question en Wh-.',
      '«What time» يسأل عن الوقت. فخ: «Yes» لا تجيب أبدًا عن سؤال يبدأ بـ Wh.',
      '“What time” asks for a time. Trap: “Yes” never answers a Wh- question.',
      '«What time» pide una hora. Trampa: «Yes» nunca responde a una pregunta con Wh-.',
    ),
  },
  {
    id: 'a2-l3', skill: 'listening', part: 'L4', level: 2,
    audio: 'Hello, this is Mark from Green Travel. Your tickets are ready. You can pick them up at our office tomorrow after ten a.m.',
    prompt: 'What should the listener do tomorrow?',
    options: ['Collect the tickets', 'Call Mark back', 'Pay online', 'Book a hotel'], answer: 0,
    explain: L(
      '« Pick them up at our office » = venir chercher les billets.',
      '«Pick them up at our office» أي استلام التذاكر من المكتب.',
      '“Pick them up at our office” means collect the tickets.',
      '«Pick them up at our office» significa ir a recoger los billetes.',
    ),
  },
  {
    id: 'a3-l2', skill: 'listening', part: 'L2', level: 3,
    audio: 'Who is in charge of the marketing budget?',
    prompt: 'Choose the best response.',
    options: ['Ms. Tanaka is.', 'About ten thousand dollars.', 'Yes, it was approved.', 'In the marketing office.'], answer: 0,
    explain: L(
      '« Who » attend une personne. Les autres réponses reprennent des mots de la question : piège classique.',
      '«Who» يسأل عن شخص. الإجابات الأخرى تكرر كلمات السؤال: فخ معروف.',
      '“Who” expects a person. The other options reuse words from the question, a classic trap.',
      '«Who» espera una persona. Las otras opciones repiten palabras de la pregunta: una trampa clásica.',
    ),
  },
  {
    id: 'a3-l3', skill: 'listening', part: 'L3', level: 3,
    audio: 'W: Did the printer on this floor get fixed?\nM: Not yet. The technician is coming this afternoon, so use the one on the second floor for now.',
    prompt: 'What does the man suggest?',
    options: ['Using another printer', 'Calling a technician', 'Buying a new printer', 'Printing tomorrow'], answer: 0,
    explain: L(
      '« Use the one on the second floor » : utiliser une autre imprimante en attendant.',
      '«Use the one on the second floor»: استعمال طابعة أخرى مؤقتًا.',
      '“Use the one on the second floor”: use another printer for now.',
      '«Use the one on the second floor»: usar otra impresora mientras tanto.',
    ),
  },
  {
    id: 'a4-l2', skill: 'listening', part: 'L2', level: 4,
    audio: 'Shouldn’t we wait for the final figures before we present the report?',
    prompt: 'Choose the best response.',
    options: ['Good point, let’s move it to Friday.', 'The report has ten pages.', 'Yes, I presented it last year.', 'The figures are on the wall.'], answer: 0,
    explain: L(
      'C’est une suggestion déguisée : on l’accepte (« Good point »). « Figures » sur le mur est un piège de mot répété.',
      'إنه اقتراح غير مباشر: نقبله («Good point»). «Figures» على الحائط فخ تكرار الكلمة.',
      'It is a disguised suggestion: accept it (“Good point”). “Figures on the wall” is a repeated-word trap.',
      'Es una sugerencia encubierta: se acepta («Good point»). «Figures on the wall» es una trampa de palabra repetida.',
    ),
  },
  {
    id: 'a5-l2', skill: 'listening', part: 'L2', level: 5,
    audio: 'Why don’t we outsource the payroll instead of hiring another accountant?',
    prompt: 'Choose the best response.',
    options: ['That might be more cost-effective.', 'Payroll is on the fifteenth.', 'He was hired last month.', 'Because the accountant is out.'], answer: 0,
    explain: L(
      '« Why don’t we… ? » est une proposition, pas une demande de cause : répondre « Because… » est le piège.',
      '«Why don’t we…?» اقتراح وليس سؤالًا عن السبب: الرد بـ «Because…» هو الفخ.',
      '“Why don’t we…?” is a suggestion, not a request for a reason: answering “Because…” is the trap.',
      '«Why don’t we…?» es una propuesta, no una pregunta por la causa: responder «Because…» es la trampa.',
    ),
  },
  {
    id: 'a6-l2', skill: 'listening', part: 'L3', level: 6,
    audio: 'M: The board seems hesitant about the merger.\nW: Understandably. The due diligence flagged some unresolved litigation, and until that’s settled, I doubt they’ll sign off.',
    prompt: 'What does the woman imply?',
    options: ['The deal will stall until a legal dispute is over', 'The board has signed off on the due diligence', 'The litigation was settled before the merger talks', 'The board is hesitant about the price of the merger'], answer: 0,
    explain: L(
      '« Until that’s settled, I doubt they’ll sign off » : pas d’accord tant que le litige n’est pas réglé.',
      '«Until that’s settled, I doubt they’ll sign off»: لا موافقة قبل حل النزاع القانوني.',
      '“Until that’s settled, I doubt they’ll sign off”: no approval before the dispute is resolved.',
      '«Until that’s settled, I doubt they’ll sign off»: no habrá aprobación hasta resolver el litigio.',
    ),
  },
  {
    id: 'a2-l4', skill: 'listening', part: 'L2', level: 2,
    audio: 'Where did you park the car?',
    prompt: 'Choose the best response.',
    options: ['In the underground garage.', 'A blue sedan.', 'About two hours ago.', 'Yes, I can drive.'], answer: 0,
    explain: L(
      '« Where » demande un lieu : « In the underground garage ».',
      '«Where» يسأل عن مكان: «In the underground garage».',
      '“Where” asks for a place: “In the underground garage”.',
      '«Where» pide un lugar: «In the underground garage».',
    ),
  },
  {
    id: 'a3-l4', skill: 'listening', part: 'L2', level: 3,
    audio: 'How often do you visit the factory?',
    prompt: 'Choose the best response.',
    options: ['Twice a month.', 'It’s near the port.', 'By company car.', 'For about an hour.'], answer: 0,
    explain: L(
      '« How often » demande une fréquence. « For about an hour » répondrait à « How long ».',
      '«How often» يسأل عن التكرار. «For about an hour» تجيب عن «How long».',
      '“How often” asks for frequency. “For about an hour” would answer “How long”.',
      '«How often» pide una frecuencia. «For about an hour» respondería a «How long».',
    ),
  },
  {
    id: 'a3-l5', skill: 'listening', part: 'L4', level: 3,
    audio: 'Welcome to the Riverside Museum. Please note that photography is allowed in all galleries, except the special exhibition on the third floor. The museum closes at six p.m.',
    prompt: 'Where is photography not allowed?',
    options: ['In the special exhibition', 'In the main hall', 'On the first floor', 'In the gift shop'], answer: 0,
    explain: L(
      '« Except the special exhibition on the third floor » : l’exception est l’exposition spéciale.',
      '«Except the special exhibition on the third floor»: الاستثناء هو المعرض الخاص.',
      '“Except the special exhibition on the third floor”: that is the exception.',
      '«Except the special exhibition on the third floor»: esa es la excepción.',
    ),
  },
  {
    id: 'a3-l6', skill: 'listening', part: 'L3', level: 3,
    audio: 'M: I’d like to change my flight to Thursday, please.\nW: Certainly. There’s a seat on the morning flight, but there is a fifty-dollar change fee.',
    prompt: 'What does the woman mention?',
    options: ['An extra charge', 'A cancelled flight', 'A free upgrade', 'A full flight'], answer: 0,
    explain: L(
      '« A fifty-dollar change fee » = des frais supplémentaires.',
      '«A fifty-dollar change fee» أي رسوم إضافية.',
      '“A fifty-dollar change fee” is an extra charge.',
      '«A fifty-dollar change fee» es un cargo adicional.',
    ),
  },
  {
    id: 'a4-l3', skill: 'listening', part: 'L2', level: 4,
    audio: 'You’ve already sent the contract to the client, haven’t you?',
    prompt: 'Choose the best response.',
    options: ['I’m waiting for the legal team’s approval.', 'The client is from Canada.', 'Yes, the contract is long.', 'I’ll contact you.'], answer: 0,
    explain: L(
      'Réponse indirecte typique du TOEIC : elle explique pourquoi ce n’est pas encore fait.',
      'رد غير مباشر نموذجي في التوييك: يشرح سبب عدم الإرسال بعد.',
      'A typical indirect TOEIC answer: it explains why it has not been done yet.',
      'Una respuesta indirecta típica del TOEIC: explica por qué todavía no se ha hecho.',
    ),
  },
  {
    id: 'a4-l4', skill: 'listening', part: 'L3', level: 4,
    audio: 'W: Have the brochures for the trade fair arrived?\nM: The printer called. There was a problem with the paper supply, so they’ll be delivered on Monday instead of today.\nW: That’s cutting it close. The fair opens on Tuesday.',
    prompt: 'Why is the woman concerned?',
    options: ['The delivery leaves little time before the fair', 'The brochures contain errors', 'The printer closed down', 'The fair was cancelled'], answer: 0,
    explain: L(
      '« Cutting it close » = c’est très juste : livraison lundi, salon mardi.',
      '«Cutting it close» أي الوقت ضيق جدًا: التسليم الإثنين والمعرض الثلاثاء.',
      '“Cutting it close” means very little margin: delivery Monday, fair Tuesday.',
      '«Cutting it close» significa ir muy justo de tiempo: entrega el lunes, feria el martes.',
    ),
  },
  {
    id: 'a4-l5', skill: 'listening', part: 'L4', level: 4,
    audio: 'This is a reminder that the quarterly safety inspection will take place tomorrow morning. All employees in the warehouse should wear protective equipment and keep emergency exits clear.',
    prompt: 'What are warehouse employees asked to do?',
    options: ['Keep emergency exits clear', 'Leave the building early', 'Attend a training session', 'Inspect the equipment'], answer: 0,
    explain: L(
      'Deux consignes : porter l’équipement et « keep emergency exits clear ».',
      'تعليمتان: ارتداء معدات الحماية و«keep emergency exits clear».',
      'Two instructions: wear protective equipment and “keep emergency exits clear”.',
      'Dos instrucciones: llevar equipo de protección y «keep emergency exits clear».',
    ),
  },
  {
    id: 'a5-l3', skill: 'listening', part: 'L3', level: 5,
    audio: 'M: Did you see the proposal from the new logistics provider?\nW: I did. Their rates are lower, but I’d want references from clients our size before we commit.',
    prompt: 'What does the woman want before making a decision?',
    options: ['Opinions from companies of a similar size', 'A list of the provider’s rates', 'A proposal from another logistics provider', 'A commitment from larger clients'], answer: 0,
    explain: L(
      '« References from clients our size » = l’avis d’entreprises comparables.',
      '«References from clients our size» أي آراء عملاء بحجم مماثل.',
      '“References from clients our size” means feedback from comparable clients.',
      '«References from clients our size» significa la opinión de clientes comparables.',
    ),
  },
  {
    id: 'a5-l4', skill: 'listening', part: 'L4', level: 5,
    audio: 'Following customer feedback, we will be phasing out the paper version of our catalog. Starting in March, product information will be available exclusively through our website and mobile app, which are updated daily.',
    prompt: 'What change is being announced?',
    options: ['The printed catalog is being discontinued', 'Customer feedback will be collected through the app', 'A new edition of the catalog will be printed in March', 'Product prices will change every day'], answer: 0,
    explain: L(
      '« Phasing out the paper version… exclusively through our website and app » : le catalogue devient uniquement numérique.',
      '«Phasing out the paper version… exclusively through our website and app»: يصبح الكتالوج رقميًا فقط.',
      '“Phasing out the paper version… exclusively online”: the catalog becomes digital only.',
      '«Phasing out the paper version… exclusively online»: el catálogo pasa a ser solo digital.',
    ),
  },
  {
    id: 'a3-r2', skill: 'reading', part: 'R7', level: 3,
    passage: 'Staff training on the new booking system will be held on Wednesday from 9 to 11 a.m. in Room 12. Employees who cannot attend must register for the online session on Friday.',
    prompt: 'What should employees who miss Wednesday’s training do?',
    options: ['Sign up for the online session', 'Contact Room 12', 'Train themselves', 'Wait until next month'], answer: 0,
    explain: L(
      '« Must register for the online session on Friday » : s’inscrire à la session en ligne.',
      '«Must register for the online session on Friday»: التسجيل في الجلسة عبر الإنترنت.',
      '“Must register for the online session on Friday”: sign up online.',
      '«Must register for the online session on Friday»: inscribirse en la sesión en línea.',
    ),
  },
  {
    id: 'a2-v2', skill: 'vocab', part: 'R5', level: 2,
    prompt: 'Please ___ a table for four people at the restaurant.',
    options: ['reserve', 'refuse', 'repair', 'remove'], answer: 0,
    explain: L(
      '« Reserve a table » = réserver une table.',
      '«Reserve a table» أي حجز طاولة.',
      '“Reserve a table” means book it.',
      '«Reserve a table» significa reservar una mesa.',
    ),
  },
  {
    id: 'a3-v2', skill: 'vocab', part: 'R5', level: 3,
    prompt: 'The flight was ___ because of a technical problem, so we left the next day.',
    options: ['postponed', 'promoted', 'proposed', 'produced'], answer: 0,
    explain: L(
      'Partir le lendemain = le vol a été reporté : « postponed ».',
      'السفر في اليوم التالي يعني أن الرحلة أُجّلت: «postponed».',
      'Leaving the next day means the flight was “postponed”.',
      'Salir al día siguiente significa que el vuelo se aplazó: «postponed».',
    ),
  },
  {
    id: 'a4-v2', skill: 'vocab', part: 'R5', level: 4,
    prompt: 'All visitors must ___ with the safety rules while on the construction site.',
    options: ['comply', 'complete', 'compete', 'compose'], answer: 0,
    explain: L(
      '« Comply with » = se conformer à. C’est la seule construction possible avec « with the rules ».',
      '«Comply with» تعني الالتزام بـ، وهي الوحيدة المناسبة مع «with the rules».',
      '“Comply with” means follow; it is the only verb that fits “with the rules”.',
      '«Comply with» significa cumplir con; es el único verbo que encaja con «with the rules».',
    ),
  },
  {
    id: 'a4-g3', skill: 'grammar', part: 'R5', level: 4,
    prompt: 'The report must be submitted ___ Friday at the latest.',
    options: ['by', 'until', 'since', 'during'], answer: 0,
    explain: L(
      'Échéance : « by Friday » (au plus tard vendredi). « Until » indique une durée continue.',
      'للموعد النهائي نستعمل «by Friday». أما «until» فتدل على استمرار حتى ذلك الوقت.',
      'For a deadline use “by Friday”. “Until” describes something continuing up to that time.',
      'Para una fecha límite se usa «by Friday». «Until» indica algo que dura hasta ese momento.',
    ),
  },
  {
    id: 'a5-g3', skill: 'grammar', part: 'R5', level: 4,
    prompt: 'The new manager is used to ___ with international teams.',
    options: ['working', 'work', 'worked', 'works'], answer: 0,
    explain: L(
      '« Be used to » (avoir l’habitude de) est suivi de la forme en -ing.',
      '«Be used to» (اعتاد على) يأتي بعدها الفعل بصيغة -ing.',
      '“Be used to” (be accustomed to) is followed by the -ing form.',
      '«Be used to» (estar acostumbrado a) va seguido de la forma en -ing.',
    ),
  },
  {
    id: 'a5-r2', skill: 'reading', part: 'R7', level: 5,
    passage: 'Applicants who meet the minimum requirements will be contacted within ten business days. Owing to the high volume of applications, we regret that we are unable to respond individually to those who are not shortlisted.',
    prompt: 'What can be inferred about applicants who are not contacted within ten days?',
    options: ['They were not selected for the next stage', 'They will receive an individual reply', 'They did not meet the minimum requirements', 'They should contact the company after ten business days'], answer: 0,
    explain: L(
      'Pas de réponse individuelle pour les non-retenus : sans nouvelles après dix jours, la candidature n’est pas retenue.',
      'لا رد فردي لغير المختارين: بلا أخبار بعد عشرة أيام يعني عدم القبول.',
      'Non-shortlisted applicants get no reply, so silence after ten days means not shortlisted.',
      'Los candidatos no preseleccionados no reciben respuesta: sin noticias tras diez días, no has sido preseleccionado.',
    ),
  },
];

export const assessmentBank: McqItem[] = rawBank.map(withShuffledOptions);
