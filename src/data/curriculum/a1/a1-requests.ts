import type { Unit } from '../../../types';
import { g, lesson, listen, order, read, respond, unit, v, x } from '../build';

export const a1Requests: Unit = unit(
  {
    id: 'a1-requests',
    emoji: '🙏',
    level: 1,
    part: 'R5 · R7 · L2',
    title: x('Consignes et demandes polies', 'التعليمات والطلبات المهذبة', 'Instructions and polite requests', 'Instrucciones y peticiones corteses'),
    subtitle: x('Impératif, can / could, let’s', 'الأمر وcan/could وlet’s', 'Imperatives, can / could, let’s', 'Imperativo, can / could, let’s'),
    lesson: lesson(
      x('Comprendre une consigne et faire une demande polie.', 'فهم تعليمة وتقديم طلب مهذب.', 'Understand instructions and make polite requests.', 'Entender una instrucción y hacer una petición cortés.'),
      [
        x('Impératif = verbe de base : Close the door. À la forme négative : Don’t (do not) + verbe.', 'الأمر = الفعل الأساسي: Close the door. وفي النفي: Don’t (do not) + فعل.', 'Imperative = base verb; negative: Don’t + verb.', 'Imperativo = verbo base: Close the door. En negativa: Don’t (do not) + verbo.'),
        x('Demande polie : Can you / Could you + verbe de base ? « Could » est plus poli.', 'الطلب المهذب: Can you/Could you + فعل أساسي؟ و«Could» أكثر تهذيبًا.', 'Polite request: Can / Could you + base verb? “Could” is more polite.', 'Petición cortés: Can you / Could you + verbo base. «Could» es más cortés.'),
        x('Proposition : Let’s + verbe (Let’s start.). Réponses : Sure / Of course / Sorry, I can’t.', 'الاقتراح: Let’s + فعل (Let’s start.). والردود: Sure / Of course / Sorry, I can’t.', 'Suggestion: Let’s + verb. Answers: Sure / Of course / Sorry, I can’t.', 'Propuesta: Let’s + verbo (Let’s start.). Respuestas: Sure / Of course / Sorry, I can’t.'),
      ],
      'Could you send me the agenda, please? Let’s meet at ten.',
      x('Demande polie avec « Could you… please ? », puis proposition avec « Let’s ».', 'طلب مهذب بـ «Could you… please?» ثم اقتراح بـ «Let’s».', 'A polite request, then a suggestion with “Let’s”.', 'Petición cortés con «Could you… please?» y luego una propuesta con «Let’s».'),
    ),
  },
  [
    g('a1-rq-s1-q1', 1, 'Please ___ the door when you leave.', ['close', 'closes', 'closing', 'to close'], x(
      'Après « Please », impératif : verbe de base « close ».',
      'بعد «Please» يأتي الأمر: الفعل الأساسي «close».',
      'After “Please”: base verb.',
      'Después de «Please», imperativo: verbo base «close».',
    )),
    g('a1-rq-s1-q2', 1, '___ touch the machine. It is very hot.', ['Don’t', 'Doesn’t', 'Not', 'No'], x(
      'Interdiction à l’impératif : « Don’t » + verbe.',
      'النهي بصيغة الأمر: «Don’t» + فعل.',
      'Negative imperative: “Don’t” + verb.',
      'Prohibición en imperativo: «Don’t» + verbo.',
    )),
    g('a1-rq-s1-q3', 1, 'Could you ___ me the price list, please?', ['send', 'sends', 'sending', 'sent'], x(
      'Après « Could you », verbe de base : « send ».',
      'بعد «Could you» الفعل الأساسي: «send».',
      'After “Could you”: base verb.',
      'Después de «Could you», verbo base: «send».',
    )),
    g('a1-rq-s1-q4', 1, '___ start the meeting now. Everyone is here.', ['Let’s', 'Let', 'Lets us', 'We let'], x(
      'Proposition : « Let’s » (= let us) + verbe.',
      'اقتراح: «Let’s» (= let us) + فعل.',
      'Suggestion: “Let’s” + verb.',
      'Propuesta: «Let’s» (= let us) + verbo.',
    )),
    g('a1-rq-s1-q5', 1, 'Can you ___ more slowly, please?', ['speak', 'speaks', 'speaking', 'to speak'], x(
      'Après « Can you », verbe de base, sans « to ».',
      'بعد «Can you» الفعل الأساسي دون «to».',
      'After “Can you”: base verb, no “to”.',
      'Después de «Can you», verbo base, sin «to».',
    )),
    v('a1-rq-s1-q6', 1, 'Please ___ your name on the list.', ['write', 'wear', 'wait', 'watch'], x(
      '« Write your name » = écris ton nom.',
      '«Write your name» = اكتب اسمك.',
      '“Write your name”.',
      '«Write your name» = escribe tu nombre.',
    )),
    read('a1-rq-s1-r1', 'R7', 1, 'Before you leave: turn off your computer, close the windows, and lock the door.', 'What should people do last?', ['Lock the door', 'Turn off the computer', 'Close the windows', 'Leave the keys'], x(
      'La dernière consigne de la liste est « lock the door ».',
      'آخر تعليمة في القائمة «lock the door».',
      'The last step is “lock the door”.',
      'La última instrucción de la lista es «lock the door».',
    )),
    respond('a1-rq-s1-l1', 1, 'Could you help me carry these boxes?', ['Of course. Where do they go?', 'Yes, they are boxes.', 'I carried it yesterday.'], x(
      'Demande d’aide → accepter. Les autres réponses reprennent les mots de la question.',
      'طلب مساعدة ← قبول. الإجابات الأخرى تكرر كلمات السؤال.',
      'A request for help → accept.',
      'Petición de ayuda → aceptar. Las otras respuestas repiten palabras de la pregunta.',
    )),
    order('a1-rq-s1-o1', 'Could you open the window please', x('Commence par « Could you ».', 'ابدأ بـ «Could you».', 'Start with “Could you”.', 'Empieza por «Could you».'), x(
      'Could you + verbe de base + objet + please.',
      'Could you + فعل أساسي + مفعول + please.',
      'Could you + base verb + object + please.',
      'Could you + verbo base + objeto + please.',
    )),
    listen('a1-rq-s1-l2', 'L4', 1, 'Good morning, everyone. Please turn off your phones and take a seat. The training starts in five minutes.', 'What are listeners asked to do?', ['Turn off their phones', 'Leave the room', 'Call the trainer', 'Open their laptops'], x(
      '« Please turn off your phones and take a seat ».',
      'المطلوب في الإعلان: «Please turn off your phones and take a seat».',
      '“Please turn off your phones”.',
      '«Please turn off your phones and take a seat».',
    )),
  ],
  [
    g('a1-rq-s2-q1', 1, 'Please ___ late for the meeting.', ['don’t be', 'not be', 'no be', 'doesn’t be'], x(
      'Impératif négatif de « be » : « don’t be ».',
      'الأمر المنفي من «be»: «don’t be».',
      'Negative imperative: “don’t be”.',
      'Imperativo negativo de «be»: «don’t be».',
    )),
    v('a1-rq-s2-q2', 1, 'Could you ___ the light, please? It’s dark in here.', ['turn on', 'turn off', 'turn in', 'turn to'], x(
      'Il fait sombre, on demande d’allumer : « turn on ».',
      'المكان مظلم فنطلب إشعال الضوء: «turn on».',
      'It is dark: “turn on” the light.',
      'Está oscuro, así que se pide encender: «turn on».',
    )),
    g('a1-rq-s2-q3', 1, '___ your seat belt.', ['Fasten', 'Fastens', 'Fastening', 'To fasten'], x(
      'Consigne à l’impératif : verbe de base « Fasten ».',
      'تعليمة بصيغة الأمر: الفعل الأساسي «Fasten».',
      'Instruction: base verb.',
      'Instrucción en imperativo: verbo base «Fasten».',
    )),
    g('a1-rq-s2-q4', 1, 'Let’s ___ a break now.', ['take', 'takes', 'taking', 'to take'], x(
      'Après « Let’s », verbe de base : « take a break ».',
      'بعد «Let’s» الفعل الأساسي: «take a break».',
      'After “Let’s”: base verb.',
      'Después de «Let’s», verbo base: «take a break».',
    )),
    v('a1-rq-s2-q5', 1, 'Can I ___ your phone, please? Mine is broken.', ['borrow', 'lend', 'give', 'sell'], x(
      '« Borrow » = emprunter (je prends). « Lend » = prêter (je donne) : on les confond souvent.',
      '«Borrow» = يستعير (آخذ) و«lend» = يُعير (أعطي): كثيرًا ما نخلط بينهما.',
      '“Borrow” = take for a while; “lend” = give for a while.',
      '«Borrow» = pedir prestado (yo tomo). «Lend» = prestar (yo doy): se confunden a menudo.',
    )),
    v('a1-rq-s2-q6', 1, 'Please ___ here. Write your name at the bottom.', ['sign', 'sing', 'sigh', 'send'], x(
      '« Sign » = signer. « Sing » (chanter) est un piège de forme.',
      '«Sign» = يوقّع. و«sing» (يغني) فخ شكلي.',
      '“Sign” = put your name; “sing” is a trap.',
      '«Sign» = firmar. «Sing» (cantar) es una trampa de forma.',
    )),
    read('a1-rq-s2-r1', 'R7', 1, 'Dear guests, please do not leave towels by the pool. Return them to the front desk before 6 p.m.', 'Where should guests return towels?', ['To the front desk', 'To the pool', 'To their rooms', 'To the restaurant'], x(
      '« Return them to the front desk ».',
      '«Return them to the front desk» أي إلى الاستقبال.',
      '“Return them to the front desk”.',
      '«Return them to the front desk»: a recepción.',
    )),
    respond('a1-rq-s2-l1', 1, 'Let’s have lunch together today.', ['Good idea. Is noon OK?', 'I had lunch.', 'It’s a big lunch.'], x(
      'Proposition → accepter et proposer une heure.',
      'اقتراح ← قبول واقتراح موعد.',
      'A suggestion → accept and suggest a time.',
      'Propuesta → aceptar y proponer una hora.',
    )),
    order('a1-rq-s2-o1', 'Please do not park in front of the gate', x('Commence par « Please do not ».', 'ابدأ بـ «Please do not».', 'Start with “Please do not”.', 'Empieza por «Please do not».'), x(
      'Please + do not + verbe + lieu (in front of the gate).',
      'Please + do not + فعل + مكان (in front of the gate).',
      'Please + do not + verb + place.',
      'Please + do not + verbo + lugar (in front of the gate).',
    )),
    listen('a1-rq-s2-l2', 'L3', 1, 'M: Could you print this report for me?\nW: Sure. How many copies do you need?\nM: Five, please.', 'How many copies does the man need?', ['Five', 'Two', 'Four', 'Ten'], x(
      'L’homme répond : « Five, please ».',
      'يجيب الرجل: «Five, please».',
      'He says “Five, please”.',
      'El hombre responde: «Five, please».',
    )),
  ],
  [
    g('a1-rq-s3-q1', 1, '___ worry. I can help you.', ['Don’t', 'Doesn’t', 'Not', 'No'], x(
      '« Don’t worry » = ne t’inquiète pas.',
      '«Don’t worry» = لا تقلق.',
      '“Don’t worry”.',
      '«Don’t worry» = no te preocupes.',
    )),
    g('a1-rq-s3-q2', 1, 'Could you ___ me your email address?', ['give', 'gives', 'giving', 'gave'], x(
      'Après « Could you », verbe de base.',
      'بعد «Could you» الفعل الأساسي.',
      'After “Could you”: base verb.',
      'Después de «Could you», verbo base.',
    )),
    g('a1-rq-s3-q3', 1, 'Please ___ careful. The floor is wet.', ['be', 'do', 'is', 'are'], x(
      'Impératif de « be » + adjectif : « be careful ».',
      'الأمر من «be» + صفة: «be careful».',
      'Imperative of “be” + adjective.',
      'Imperativo de «be» + adjetivo: «be careful».',
    )),
    g('a1-rq-s3-q4', 1, 'Let’s ___ the bus. It’s faster.', ['take', 'takes', 'taking', 'took'], x(
      'Après « Let’s », verbe de base.',
      'بعد «Let’s» الفعل الأساسي.',
      'After “Let’s”: base verb.',
      'Después de «Let’s», verbo base.',
    )),
    g('a1-rq-s3-q5', 1, '___ you tell me the way to the station, please?', ['Could', 'Do', 'Are', 'Have'], x(
      'Demande polie : « Could you tell me… ? ».',
      'طلب مهذب: «Could you tell me…?».',
      'Polite request: “Could you…?”.',
      'Petición cortés: «Could you tell me…?».',
    )),
    v('a1-rq-s3-q6', 1, 'Please ___ your phone off during the film.', ['switch', 'swap', 'sweep', 'swim'], x(
      '« Switch off » = éteindre.',
      '«Switch off» = يطفئ.',
      '“Switch off” = turn off.',
      '«Switch off» = apagar.',
    )),
    read('a1-rq-s3-r1', 'R7', 1, 'Printer instructions: 1. Put the paper in tray 2. 2. Choose “Color”. 3. Press the green button.', 'What should you press?', ['The green button', 'Tray 2', 'The red button', '“Color” twice'], x(
      'Étape 3 : « Press the green button ».',
      'الخطوة 3: «Press the green button».',
      'Step 3: “Press the green button”.',
      'Paso 3: «Press the green button».',
    )),
    respond('a1-rq-s3-l1', 1, 'Can you close the window, please?', ['Sure, no problem.', 'It’s a big window.', 'I’m closed.'], x(
      'Demande → accepter : « Sure, no problem ».',
      'طلب ← قبول: «Sure, no problem».',
      'A request → accept.',
      'Petición → aceptar: «Sure, no problem».',
    )),
    order('a1-rq-s3-o1', 'Let’s meet in front of the hotel', x('Commence par « Let’s ».', 'ابدأ بـ «Let’s».', 'Start with “Let’s”.', 'Empieza por «Let’s».'), x(
      'Let’s + verbe + lieu.',
      'Let’s + فعل + مكان.',
      'Let’s + verb + place.',
      'Let’s + verbo + lugar.',
    )),
    listen('a1-rq-s3-l2', 'L4', 1, 'Hello, this is the dentist’s office. Please arrive ten minutes early for your appointment and bring your insurance card.', 'What should the listener bring?', ['An insurance card', 'A photo', 'Some money', 'A letter'], x(
      '« Bring your insurance card » = apporter sa carte d’assurance.',
      '«Bring your insurance card» = إحضار بطاقة التأمين.',
      '“Bring your insurance card”.',
      '«Bring your insurance card» = traer la tarjeta del seguro.',
    )),
  ],
);
