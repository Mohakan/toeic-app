import type { Unit } from '../../../types';
import { lesson, listen, respond, unit, v, x } from '../build';

export const a2Phone: Unit = unit(
  {
    id: 'a2-phone',
    emoji: '📞',
    level: 2,
    part: 'L2 · L3',
    title: x('Au téléphone', 'على الهاتف', 'On the phone', 'Al teléfono'),
    subtitle: x('Messages et petites conversations', 'رسائل ومحادثات قصيرة', 'Messages and short conversations', 'Mensajes y conversaciones breves'),
    lesson: lesson(
      x('Comprendre qui appelle, pourquoi, et ce qu’il faut faire.', 'فهم من المتصل ولماذا وما المطلوب.', 'Understand who is calling, why, and what to do.', 'Entender quién llama, por qué y qué hay que hacer.'),
      [
        x('Formules : This is… (c’est…), I’m calling about… (j’appelle au sujet de…), Could you call me back?', 'عبارات: This is… (معك…)، I’m calling about… (أتصل بخصوص…)، Could you call me back?', 'Phrases: This is…, I’m calling about…, Could you call me back?', 'Fórmulas: This is… (soy…), I’m calling about… (llamo por…), Could you call me back?'),
        x('Lis les questions avant l’écoute pour savoir quoi chercher.', 'اقرأ الأسئلة قبل الاستماع لتعرف ما تبحث عنه.', 'Read the questions before listening.', 'Lee las preguntas antes de escuchar para saber qué buscar.'),
      ],
      'Hi, this is Omar from Delta Supplies. I’m calling about your order.',
      x('Qui : Omar. Pourquoi : la commande.', 'من: عمر. لماذا: الطلبية.', 'Who: Omar. Why: the order.', 'Quién: Omar. Por qué: el pedido.'),
    ),
  },
  [
    listen('a2-ph-l1', 'L4', 2, 'Hi Sami, this is Nadia from the travel agency. Your hotel booking is confirmed. Please call me back to choose your seat on the plane.', 'Why should Sami call Nadia back?', ['To choose a seat', 'To pay for the hotel', 'To cancel the trip', 'To book a car'], x(
      '« Call me back to choose your seat » : pour choisir son siège.',
      '«Call me back to choose your seat»: لاختيار مقعده.',
      '“Call me back to choose your seat”.',
      '«Call me back to choose your seat»: para elegir su asiento.',
    )),
    listen('a2-ph-l2', 'L3', 2, 'M: Hello, I’d like to speak to Ms. Rossi, please.\nW: I’m sorry, she’s in a meeting. Can I take a message?', 'What does the woman offer to do?', ['Take a message', 'Call back later', 'End the meeting', 'Give an address'], x(
      '« Can I take a message? » = puis-je prendre un message ?',
      '«Can I take a message?» = هل أدوّن رسالة؟',
      '“Can I take a message?”',
      '«Can I take a message?» = ¿quiere dejar un recado?',
    )),
    listen('a2-ph-l3', 'L3', 2, 'W: Hello, City Dental Clinic.\nM: Hi, I need to change my appointment from Tuesday to Thursday.\nW: No problem. Is ten a.m. on Thursday OK?', 'Why is the man calling?', ['To change an appointment', 'To ask for a price', 'To find the address', 'To cancel his insurance'], x(
      '« I need to change my appointment » : modifier son rendez-vous.',
      '«I need to change my appointment»: تغيير موعده.',
      '“I need to change my appointment”.',
      '«I need to change my appointment»: cambiar su cita.',
    )),
    respond('a2-ph-l4', 2, 'Can I speak to the manager, please?', ['Just a moment, I’ll put you through.', 'He manages the team.', 'Yes, I can speak.'], x(
      '« I’ll put you through » = je vous le passe. « He manages » répète un mot de la question.',
      '«I’ll put you through» = سأحوّلك إليه. «He manages» تكرر كلمة من السؤال.',
      '“I’ll put you through”. “He manages” repeats a word.',
      '«I’ll put you through» = le paso con él. «He manages» repite una palabra de la pregunta.',
    )),
    respond('a2-ph-l5', 2, 'Who should I call about the broken printer?', ['The IT help desk.', 'It’s a color printer.', 'Yes, you should.'], x(
      '« Who » → un service ou une personne.',
      '«Who» ← شخص أو مصلحة.',
      '“Who” → a person or a service.',
      '«Who» → una persona o un servicio.',
    )),
    v('a2-ph-q1', 2, 'Ms. Chen is not here. Would you like to leave a ___?', ['message', 'meeting', 'menu', 'machine'], x(
      '« Leave a message » = laisser un message.',
      '«Leave a message» = ترك رسالة.',
      '“Leave a message”.',
      '«Leave a message» = dejar un mensaje.',
    )),
  ],
  [
    listen('a2-ph-s2-l1', 'L4', 2, 'Hi, this is Karen from Blue Office Supplies. Your order of printer paper will arrive tomorrow morning. Please call me if you have any questions.', 'Why is Karen calling?', ['To give information about an order', 'To ask for a payment', 'To sell new printers', 'To cancel a meeting'], x(
      'Elle annonce la livraison de la commande demain matin.',
      'تُعلم بموعد تسليم الطلبية صباح الغد.',
      'She gives information about the order.',
      'Informa de la entrega del pedido mañana por la mañana.',
    )),
    listen('a2-ph-s2-l2', 'L4', 2, 'Hello, you have reached the Garden Hotel. Our reception is open 24 hours. To book a room, press two.', 'What should callers do to book a room?', ['Press two', 'Call back later', 'Send an email', 'Visit the hotel'], x(
      '« To book a room, press two ».',
      '«To book a room, press two» أي اضغط على 2.',
      '“Press two”.',
      '«To book a room, press two»: pulsar el 2.',
    )),
    listen('a2-ph-s2-l3', 'L3', 2, 'W: Hello, can I speak to Mr. Novak?\nM: He’s not at his desk right now. Can I take a message?\nW: Yes, please ask him to call Elena Ross.', 'What does the woman want Mr. Novak to do?', ['Call her back', 'Send her an email', 'Meet her at the office', 'Visit a client'], x(
      '« Ask him to call Elena Ross » = la rappeler.',
      '«Ask him to call Elena Ross» = أن يعاود الاتصال بها.',
      '“Ask him to call” her.',
      '«Ask him to call Elena Ross» = devolverle la llamada.',
    )),
    listen('a2-ph-s2-l4', 'L3', 2, 'M: Hi, I’m calling about the apartment for rent.\nW: Yes, it’s still available. Would you like to see it?\nM: Yes. Is Saturday morning OK?', 'What does the man want to do?', ['See an apartment', 'Sell his apartment', 'Pay the rent', 'Cancel a visit'], x(
      'Il veut visiter l’appartement samedi matin.',
      'يريد زيارة الشقة صباح السبت.',
      'He wants to see the apartment.',
      'Quiere ver el piso el sábado por la mañana.',
    )),
    listen('a2-ph-s2-l5', 'L3', 2, 'W: Sorry, I can’t hear you very well.\nM: I’m on the train. I’ll call you back in ten minutes.', 'Why will the man call back?', ['He is on a noisy train', 'He has another call', 'His battery is low', 'He is in a meeting'], x(
      'Elle l’entend mal parce qu’il est dans le train.',
      'لا تسمعه جيدًا لأنه في القطار.',
      'She cannot hear him: he is on the train.',
      'No lo oye bien porque está en el tren.',
    )),
    respond('a2-ph-s2-l6', 2, 'Could I speak to someone in accounting?', ['Hold on, I’ll transfer you.', 'I can speak English.', 'The account is closed.'], x(
      '« I’ll transfer you » = je vous transfère. « Account » est un piège sonore.',
      '«I’ll transfer you» = سأحوّل مكالمتك. و«account» فخ صوتي.',
      '“I’ll transfer you”; “account” is a sound trap.',
      '«I’ll transfer you» = le paso la llamada. «Account» es una trampa de sonido.',
    )),
    respond('a2-ph-s2-l7', 2, 'Is this a good time to talk?', ['Actually, can I call you back in an hour?', 'It’s ten o’clock.', 'Yes, I talked to him.'], x(
      'Réponse naturelle et indirecte : ce n’est pas le moment, je te rappelle.',
      'رد طبيعي غير مباشر: الوقت غير مناسب، سأعاود الاتصال.',
      'An indirect but natural answer.',
      'Respuesta natural e indirecta: ahora no es buen momento, te llamo luego.',
    )),
    respond('a2-ph-s2-l8', 2, 'Who’s calling, please?', ['It’s Tom Baker from Lex Bank.', 'I’m calling about my order.', 'Yes, please.'], x(
      'On demande qui appelle : on donne son nom. La 2e option dit pourquoi.',
      'السؤال عن هوية المتصل: نذكر الاسم. أما الخيار الثاني فيذكر السبب.',
      'Give your name; option 2 says why.',
      'Se pregunta quién llama: se da el nombre. La 2.ª opción dice por qué.',
    )),
    v('a2-ph-s2-q1', 2, 'Please ___ while I check the information.', ['hold', 'hole', 'hide', 'hurry'], x(
      '« Please hold » = ne quittez pas.',
      '«Please hold» = ابقَ على الخط.',
      '“Please hold” = stay on the line.',
      '«Please hold» = no cuelgue.',
    )),
    v('a2-ph-s2-q2', 2, 'I tried to call you, but your line was ___.', ['busy', 'free', 'quiet', 'empty'], x(
      '« The line is busy » = la ligne est occupée.',
      '«The line is busy» = الخط مشغول.',
      '“Busy” line.',
      '«The line is busy» = la línea está ocupada.',
    )),
  ],
  [
    listen('a2-ph-s3-l1', 'L4', 2, 'This is a reminder from City Dental. Your appointment is tomorrow at nine fifteen. If you can’t come, please call us today.', 'What time is the appointment?', ['9:15', '9:50', '10:15', '9:00'], x(
      '« Nine fifteen » = 9 h 15 (et non 9 h 50).',
      '«Nine fifteen» = 9:15 (لا 9:50).',
      '“Nine fifteen” = 9:15.',
      '«Nine fifteen» = 9:15 (y no 9:50).',
    )),
    listen('a2-ph-s3-l2', 'L4', 2, 'Hi Paul, it’s Mona. The client meeting is now on Thursday, not Wednesday. Same time, same place.', 'What has changed?', ['The day of the meeting', 'The time of the meeting', 'The place of the meeting', 'The client'], x(
      '« Now on Thursday, not Wednesday. Same time, same place » : seul le jour change.',
      '«Now on Thursday, not Wednesday. Same time, same place»: تغيّر اليوم فقط.',
      'Only the day changed.',
      '«Now on Thursday, not Wednesday. Same time, same place»: solo cambia el día.',
    )),
    listen('a2-ph-s3-l3', 'L3', 2, 'M: Good afternoon, Star Electronics.\nW: Hi, my new phone doesn’t turn on.\nM: Did you charge it for two hours?', 'What is the woman’s problem?', ['Her phone does not turn on', 'Her phone is too expensive', 'She lost her phone', 'She cannot find the store'], x(
      '« My new phone doesn’t turn on » : il ne s’allume pas.',
      '«My new phone doesn’t turn on»: لا يشتغل.',
      'It does not turn on.',
      '«My new phone doesn’t turn on»: no se enciende.',
    )),
    listen('a2-ph-s3-l4', 'L3', 2, 'W: I’d like to order a pizza for delivery.\nM: Sure. What’s your address?\nW: 25 Palm Street.', 'What does the man ask for?', ['The woman’s address', 'Her phone number', 'Her name', 'The type of pizza'], x(
      '« What’s your address? ».',
      '«What’s your address?» أي العنوان.',
      'He asks for her address.',
      '«What’s your address?»: la dirección.',
    )),
    listen('a2-ph-s3-l5', 'L3', 2, 'M: Hello, I booked a table for four at eight tonight.\nW: Yes, Mr. Ali.\nM: Can we make it six people?', 'What does the man want to change?', ['The number of people', 'The time', 'The date', 'The restaurant'], x(
      'De quatre à six personnes : le nombre de personnes.',
      'من أربعة إلى ستة أشخاص: عدد الأشخاص.',
      'From four to six people.',
      'De cuatro a seis personas: el número de comensales.',
    )),
    respond('a2-ph-s3-l6', 2, 'Can you tell Ms. Lin I called?', ['Sure, I’ll give her the message.', 'I can tell you.', 'She called yesterday.'], x(
      'Demande de transmettre un message → l’accepter.',
      'طلب إبلاغ رسالة ← القبول.',
      'Accept to pass on the message.',
      'Petición de transmitir un recado → aceptarla.',
    )),
    respond('a2-ph-s3-l7', 2, 'What’s the best number to reach you?', ['My mobile: 555-0186.', 'In the morning.', 'Yes, you can.'], x(
      'On demande un numéro → on le donne.',
      'السؤال عن رقم ← نذكره.',
      'Give the number.',
      'Se pide un número → se da.',
    )),
    respond('a2-ph-s3-l8', 2, 'Why didn’t you answer the phone?', ['I was in a meeting.', 'At three o’clock.', 'The phone is new.'], x(
      '« Why » → une raison.',
      '«Why» ← سبب.',
      '“Why” → a reason.',
      '«Why» → una razón.',
    )),
    v('a2-ph-s3-q1', 2, 'I’ll ___ you back after lunch.', ['call', 'tell', 'say', 'speak'], x(
      '« Call someone back » = rappeler quelqu’un.',
      '«Call someone back» = معاودة الاتصال بشخص.',
      '“Call back”.',
      '«Call someone back» = devolver la llamada a alguien.',
    )),
    v('a2-ph-s3-q2', 2, 'Sorry, you have the wrong ___. There is no Mr. Smith here.', ['number', 'letter', 'address', 'office'], x(
      'Au téléphone : « wrong number » = mauvais numéro.',
      'على الهاتف: «wrong number» = رقم خاطئ.',
      'On the phone: “wrong number”.',
      'Al teléfono: «wrong number» = número equivocado.',
    )),
  ],
);
