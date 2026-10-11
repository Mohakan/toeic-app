import type { Unit } from '../../../types';
import { lesson, listen, respond, unit, x } from '../build';

export const b1Conversations: Unit = unit(
  {
    id: 'b1-conversations',
    emoji: '💬',
    level: 3,
    part: 'L3',
    title: x('Conversations au travail', 'محادثات في العمل', 'Workplace conversations', 'Conversaciones en el trabajo'),
    subtitle: x('Partie 3 : qui, quoi, et ensuite ?', 'الجزء 3: من، ماذا، وما التالي؟', 'Part 3: who, what, and what next?', 'Parte 3: ¿quién, qué y qué pasa después?'),
    lesson: lesson(
      x('Comprendre le sujet d’une conversation et ce que les personnes vont faire.', 'فهم موضوع المحادثة وما سيفعله الأشخاص.', 'Understand the topic and what the speakers will do.', 'Entender el tema de una conversación y lo que van a hacer las personas.'),
      [
        x('Les questions suivent l’ordre de la conversation.', 'تتبع الأسئلة ترتيب المحادثة.', 'Questions follow the order of the conversation.', 'Las preguntas siguen el orden de la conversación.'),
        x('« What will the man do next? » : la réponse est souvent à la fin.', '«What will the man do next?»: الجواب غالبًا في النهاية.', '“What will … do next?”: usually at the end.', '«What will the man do next?»: la respuesta suele estar al final.'),
        x('Les bonnes réponses reformulent : « I’ll email it » → « Send a document ».', 'الإجابات الصحيحة تعيد الصياغة: «I’ll email it» ← «Send a document».', 'Correct answers paraphrase.', 'Las respuestas correctas reformulan: «I’ll email it» → «Send a document».'),
      ],
      'W: The projector isn’t working. M: I’ll call the technician right away.',
      x('Ensuite, l’homme va contacter un technicien.', 'بعد ذلك سيتصل الرجل بتقني.', 'Next, the man will contact a technician.', 'Después, el hombre va a llamar a un técnico.'),
    ),
  },
  [
    listen('b1-c-l1', 'L3', 3, 'W: The elevator is being repaired this morning.\nM: Then let’s take the stairs to the meeting. It’s only on the third floor.', 'What does the man suggest?', ['Using the stairs', 'Waiting for the elevator', 'Cancelling the meeting', 'Moving to another floor'], x(
      '« Let’s take the stairs » = prendre l’escalier.',
      '«Let’s take the stairs» = استعمال الدرج.',
      '“Let’s take the stairs”.',
      '«Let’s take the stairs» = subir por las escaleras.',
    )),
    listen('b1-c-l2', 'L3', 3, 'M: Hi, I ordered a laptop last week, but I received the wrong color.\nW: I’m sorry about that. Please send it back and we’ll ship the right one at no extra cost.', 'What problem does the man have?', ['He received the wrong item', 'His laptop is broken', 'His order is late', 'He was charged twice'], x(
      '« I received the wrong color » : le produit reçu n’est pas le bon.',
      '«I received the wrong color»: المنتج المستلم ليس المطلوب.',
      '“I received the wrong color”: it is the wrong item.',
      '«I received the wrong color»: el producto recibido no es el correcto.',
    )),
    listen('b1-c-l3', 'L3', 3, 'W: Are we still meeting the clients at the restaurant tonight?\nM: Yes, but they asked to move it to eight o’clock.\nW: OK, I’ll call the restaurant to change the reservation.', 'What will the woman do next?', ['Contact the restaurant', 'Meet the clients at seven', 'Cancel the dinner', 'Send an invitation'], x(
      '« I’ll call the restaurant » = contacter le restaurant.',
      '«I’ll call the restaurant» = الاتصال بالمطعم.',
      '“I’ll call the restaurant”.',
      '«I’ll call the restaurant» = ponerse en contacto con el restaurante.',
    )),
    listen('b1-c-l4', 'L3', 3, 'M: Have you finished the sales report?\nW: Almost. I’m just waiting for the figures from the Lyon office.\nM: They should arrive by noon.', 'What is the woman waiting for?', ['Figures from another office', 'Her manager’s approval', 'A new computer', 'A meeting room'], x(
      '« Waiting for the figures from the Lyon office » : les chiffres d’un autre bureau.',
      '«Waiting for the figures from the Lyon office»: أرقام من مكتب آخر.',
      'She waits for figures from another office.',
      '«Waiting for the figures from the Lyon office»: las cifras de otra oficina.',
    )),
    listen('b1-c-l5', 'L3', 3, 'W: Excuse me, where can I find printer paper?\nM: It’s in the supply room, but it’s locked. Ask Karen at reception for the key.', 'What should the woman do?', ['Ask a receptionist for a key', 'Buy paper at a store', 'Use the supply room computer', 'Call Karen at home'], x(
      '« Ask Karen at reception for the key ».',
      'التعليمة: «Ask Karen at reception for the key».',
      'Ask the receptionist for the key.',
      '«Ask Karen at reception for the key»: pedir la llave en recepción.',
    )),
    respond('b1-c-l6', 3, 'Would you like me to book the conference room?', ['Yes, that would be great.', 'It’s a big room.', 'I booked a hotel.'], x(
      'Offre « Would you like me to… ? » → accepter ou refuser poliment.',
      'عرض «Would you like me to…?» ← قبول أو رفض بلطف.',
      'An offer → accept or decline.',
      'Ofrecimiento «Would you like me to…?» → aceptar o rechazar con cortesía.',
    )),
  ],
  [
    listen('b1-c-s2-l1', 'L3', 3, 'M: Did you book the restaurant for Friday?\nW: Yes, a table for eight at seven thirty.\nM: Great, I’ll tell the clients.', 'What will the man do next?', ['Inform the clients', 'Call the restaurant', 'Change the time', 'Book a hotel'], x(
      '« I’ll tell the clients » = informer les clients (reformulé).',
      '«I’ll tell the clients» = إبلاغ العملاء (بإعادة صياغة).',
      '“Tell the clients” = inform them.',
      '«I’ll tell the clients» = informar a los clientes (reformulado).',
    )),
    listen('b1-c-s2-l2', 'L3', 3, 'W: The projector in Room 3 isn’t working.\nM: Let’s use the large screen in Room 5 instead. It’s free all morning.', 'What does the man suggest?', ['Moving to another room', 'Calling a technician', 'Cancelling the meeting', 'Buying a new projector'], x(
      '« Let’s use the large screen in Room 5 » : changer de salle.',
      '«Let’s use the large screen in Room 5»: الانتقال إلى قاعة أخرى.',
      'Use Room 5 instead.',
      '«Let’s use the large screen in Room 5»: cambiar de sala.',
    )),
    listen('b1-c-s2-l3', 'L3', 3, 'M: How was the job interview?\nW: It went well. They’ll let me know by Thursday.', 'When will the woman get an answer?', ['By Thursday', 'Today', 'Next month', 'On Monday'], x(
      '« They’ll let me know by Thursday » : réponse d’ici jeudi.',
      '«They’ll let me know by Thursday»: الرد قبل الخميس.',
      '“By Thursday”.',
      '«They’ll let me know by Thursday»: respuesta antes del jueves.',
    )),
    listen('b1-c-s2-l4', 'L3', 3, 'W: I need to send this package to Montreal. How long will it take?\nM: Standard delivery takes a week, but express takes two days.\nW: I’ll take express, please.', 'Which service will the woman choose?', ['Express delivery', 'Standard delivery', 'Overnight delivery', 'Pickup at the store'], x(
      '« I’ll take express, please ».',
      '«I’ll take express, please» أي التوصيل السريع.',
      '“I’ll take express”.',
      '«I’ll take express, please»: el envío exprés.',
    )),
    listen('b1-c-s2-l5', 'L3', 3, 'M: Excuse me, I think there’s a mistake on my bill. I didn’t order dessert.\nW: I’m so sorry. I’ll correct it right away.', 'What is the problem?', ['The bill includes something he did not order', 'The food is cold', 'The dessert is late', 'He cannot pay by card'], x(
      '« I didn’t order dessert » : l’addition contient un dessert non commandé.',
      '«I didn’t order dessert»: الحساب يتضمن تحلية لم يطلبها.',
      'An item he did not order is on the bill.',
      '«I didn’t order dessert»: la cuenta incluye un postre que no pidió.',
    )),
    listen('b1-c-s2-l6', 'L3', 3, 'W: Are you coming to Karim’s farewell party tonight?\nM: I’d love to, but I have to finish a report. I’ll try to come later.', 'Why might the man be late?', ['He has to finish a report', 'He has a meeting', 'His car is broken', 'He is not invited'], x(
      '« I have to finish a report ».',
      '«I have to finish a report» أي عليه إنهاء تقرير.',
      'He must finish a report.',
      '«I have to finish a report»: tiene que terminar un informe.',
    )),
    listen('b1-c-s2-l7', 'L3', 3, 'M: We’re running out of printer paper.\nW: I’ll order some this afternoon. How many boxes do we need?\nM: Five should be enough.', 'How many boxes will be ordered?', ['Five', 'Two', 'Ten', 'Fifteen'], x(
      '« Five should be enough ».',
      '«Five should be enough» أي خمس علب.',
      'Five boxes.',
      '«Five should be enough»: cinco cajas.',
    )),
    listen('b1-c-s2-l8', 'L3', 3, 'W: Hi, I’d like to return these shoes. They’re too small.\nM: Do you have the receipt?\nW: Yes, here it is.', 'Why does the woman want to return the shoes?', ['They are too small', 'They are damaged', 'They are the wrong color', 'They are too expensive'], x(
      '« They’re too small ».',
      '«They’re too small» أي صغيرة جدًا.',
      'They are too small.',
      '«They’re too small»: le quedan pequeños.',
    )),
    respond('b1-c-s2-l9', 3, 'Could you show me how to use the new scanner?', ['Sure, it’s very simple.', 'It scanned well.', 'On the second floor.'], x(
      'Demande d’aide → on accepte.',
      'طلب مساعدة ← نقبل.',
      'A request → accept.',
      'Petición de ayuda → se acepta.',
    )),
    respond('b1-c-s2-l10', 3, 'Why don’t we have the meeting in the café?', ['Good idea, it’s quieter there.', 'Because it’s closed.', 'Coffee, please.'], x(
      '« Why don’t we… ? » = suggestion : on l’accepte. « Because… » est le piège.',
      '«Why don’t we…?» = اقتراح نقبله. و«Because…» هي الفخ.',
      'A suggestion; “Because…” is the trap.',
      '«Why don’t we…?» = sugerencia: se acepta. «Because…» es la trampa.',
    )),
  ],
  [
    listen('b1-c-s3-l1', 'L3', 3, 'M: Have you seen the new schedule for next week?\nW: Yes, our team meeting is now on Tuesday instead of Monday.', 'What has changed?', ['The day of the meeting', 'The time of the meeting', 'The meeting room', 'The team leader'], x(
      '« On Tuesday instead of Monday » : le jour change.',
      '«On Tuesday instead of Monday»: تغيّر اليوم.',
      'The day changed.',
      '«On Tuesday instead of Monday»: cambia el día.',
    )),
    listen('b1-c-s3-l2', 'L3', 3, 'W: The client wants the designs earlier, by Wednesday.\nM: That’s difficult. Can we ask for one more day?\nW: I’ll call them and ask.', 'What will the woman do?', ['Call the client', 'Finish the designs', 'Hire a designer', 'Cancel the project'], x(
      '« I’ll call them and ask » : elle va appeler le client.',
      '«I’ll call them and ask»: ستتصل بالعميل.',
      'She will call the client.',
      '«I’ll call them and ask»: va a llamar al cliente.',
    )),
    listen('b1-c-s3-l3', 'L3', 3, 'M: Is there a pharmacy near the hotel?\nW: Yes, there’s one across the street. It’s open until ten.', 'Where is the pharmacy?', ['Across the street from the hotel', 'Inside the hotel', 'Next to the station', 'At the airport'], x(
      '« There’s one across the street » = en face de l’hôtel.',
      '«There’s one across the street» = في الجهة المقابلة للفندق.',
      'Across the street.',
      '«There’s one across the street» = enfrente del hotel.',
    )),
    listen('b1-c-s3-l4', 'L3', 3, 'W: I’m thinking of buying a new laptop.\nM: You should wait until next month. There’s usually a big sale in November.', 'Why does the man suggest waiting?', ['Prices will probably be lower', 'A new model will arrive', 'The store is closed', 'The laptop is out of stock'], x(
      '« A big sale in November » : les prix seront sans doute plus bas.',
      '«A big sale in November»: الأسعار ستكون غالبًا أقل.',
      'A sale → lower prices.',
      '«A big sale in November»: probablemente los precios serán más bajos.',
    )),
    listen('b1-c-s3-l5', 'L3', 3, 'M: Hello, I’m calling about the sales position. Is it still available?\nW: Yes, it is. Could you send us your résumé by email?', 'What does the woman ask the man to do?', ['Send his résumé', 'Come for an interview', 'Call back tomorrow', 'Fill in a form'], x(
      '« Could you send us your résumé by email? ».',
      '«Could you send us your résumé by email?» أي إرسال سيرته الذاتية.',
      'Send his résumé.',
      '«Could you send us your résumé by email?»: enviar su currículum.',
    )),
    listen('b1-c-s3-l6', 'L3', 3, 'W: How did the presentation go?\nM: Very well. The clients asked a lot of questions, and they want a second meeting.', 'What do the clients want?', ['Another meeting', 'A lower price', 'A new presentation', 'A product sample'], x(
      '« They want a second meeting ».',
      '«They want a second meeting» أي اجتماعًا ثانيًا.',
      'A second meeting.',
      '«They want a second meeting»: otra reunión.',
    )),
    listen('b1-c-s3-l7', 'L3', 3, 'M: The air conditioning in my office is too strong.\nW: I’ll ask the maintenance team to check it this afternoon.', 'Who will check the air conditioning?', ['The maintenance team', 'The woman', 'The man', 'An outside company'], x(
      '« I’ll ask the maintenance team to check it ».',
      '«I’ll ask the maintenance team to check it» أي فريق الصيانة.',
      'The maintenance team.',
      '«I’ll ask the maintenance team to check it»: el equipo de mantenimiento.',
    )),
    listen('b1-c-s3-l8', 'L3', 3, 'W: Our flight is delayed by three hours.\nM: Then let’s have lunch at the airport restaurant while we wait.', 'What will the speakers probably do?', ['Have lunch at the airport', 'Take another flight', 'Go back to the hotel', 'Rent a car'], x(
      '« Let’s have lunch at the airport restaurant ».',
      '«Let’s have lunch at the airport restaurant» أي الغداء في المطار.',
      'Lunch at the airport.',
      '«Let’s have lunch at the airport restaurant»: comer en el aeropuerto.',
    )),
    respond('b1-c-s3-l9', 3, 'Who’s going to pick up the visitors from the airport?', ['Omar is, at four o’clock.', 'By taxi.', 'They visited us.'], x(
      '« Who » → une personne.',
      '«Who» ← شخص.',
      '“Who” → a person.',
      '«Who» → una persona.',
    )),
    respond('b1-c-s3-l10', 3, 'Have you finished the budget report yet?', ['Almost, I need one more hour.', 'It’s a big budget.', 'Yes, I reported it.'], x(
      'Réponse naturelle : presque, encore une heure.',
      'رد طبيعي: تقريبًا، أحتاج ساعة أخرى.',
      'Almost; one more hour.',
      'Respuesta natural: casi, necesito una hora más.',
    )),
  ],
);
