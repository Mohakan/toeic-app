import type { Unit } from '../../../types';
import { lesson, listen, read, respond, unit, v, x } from '../build';

const NOTE_ANA = 'Hi Tom, I’m at the dentist. I’ll be at the office at 11. Can you start the meeting without me? — Ana';

export const a1Messages: Unit = unit(
  {
    id: 'a1-messages',
    emoji: '💬',
    level: 1,
    part: 'R7 · L4',
    title: x('Messages courts et formulaires', 'رسائل قصيرة واستمارات', 'Short messages and forms', 'Mensajes cortos y formularios'),
    subtitle: x('SMS, notes, messages vocaux', 'رسائل نصية وملاحظات ورسائل صوتية', 'Texts, notes and voicemails', 'SMS, notas y mensajes de voz'),
    lesson: lesson(
      x('Comprendre qui écrit ou appelle, et ce qu’il faut faire.', 'فهم من يكتب أو يتصل وما المطلوب.', 'Understand who is writing or calling, and what to do.', 'Entender quién escribe o llama, y qué hay que hacer.'),
      [
        x('Dans un message court, repère trois choses : qui écrit, à qui, et l’action demandée.', 'في الرسالة القصيرة حدّد ثلاثة أمور: من يكتب ولمن وما الإجراء المطلوب.', 'In a short message, find who writes, to whom, and the action.', 'En un mensaje corto, localiza tres cosas: quién escribe, a quién y qué se pide.'),
        x('Formulaires : first name (prénom), last name (nom), date of birth, signature ; « required » = obligatoire, « optional » = facultatif.', 'الاستمارات: first name (الاسم) وlast name (اللقب) وdate of birth وsignature، و«required» = إجباري و«optional» = اختياري.', 'Forms: first / last name, date of birth; “required” vs “optional”.', 'Formularios: first name (nombre), last name (apellido), date of birth, signature; «required» = obligatorio, «optional» = opcional.'),
        x('Abréviations fréquentes : ASAP (dès que possible), Rm. (salle), No. (numéro), Tel. (téléphone).', 'اختصارات شائعة: ASAP (في أقرب وقت) وRm. (قاعة) وNo. (رقم) وTel. (هاتف).', 'Common abbreviations: ASAP, Rm., No., Tel.', 'Abreviaturas frecuentes: ASAP (lo antes posible), Rm. (sala), No. (número), Tel. (teléfono).'),
      ],
      'Hi Sam, the meeting is now in Rm. 3. Please call me ASAP. — Ines',
      x('Qui : Ines. Action : l’appeler dès que possible.', 'من: إيناس. الإجراء: الاتصال بها في أقرب وقت.', 'Who: Ines. Action: call her as soon as possible.', 'Quién: Ines. Acción: llamarla lo antes posible.'),
    ),
  },
  [
    read('a1-ms-s1-r1', 'R7', 1, NOTE_ANA, 'What does Ana ask Tom to do?', ['Start the meeting', 'Call the dentist', 'Wait for her outside', 'Cancel the meeting'], x(
      '« Can you start the meeting without me? » : commencer la réunion.',
      '«Can you start the meeting without me?»: بدء الاجتماع.',
      '“Can you start the meeting without me?”.',
      '«Can you start the meeting without me?»: empezar la reunión.',
    )),
    read('a1-ms-s1-r2', 'R7', 1, NOTE_ANA, 'Why is Ana late?', ['She is at the dentist', 'She missed the bus', 'She is sick at home', 'She is in another meeting'], x(
      '« I’m at the dentist » : elle est chez le dentiste.',
      '«I’m at the dentist»: هي عند طبيب الأسنان.',
      '“I’m at the dentist”.',
      '«I’m at the dentist»: está en el dentista.',
    )),
    read('a1-ms-s1-r3', 'R7', 1, 'Registration form — First name: Leila · Last name: Mansour · Date of birth: 12/03/1998 · Phone: 555-0147', 'What is the woman’s last name?', ['Mansour', 'Leila', 'Medina', 'March'], x(
      '« Last name » = nom de famille : Mansour. « Leila » est le prénom.',
      '«Last name» = اللقب: Mansour. أما «Leila» فهو الاسم.',
      '“Last name”: Mansour; “Leila” is the first name.',
      '«Last name» = apellido: Mansour. «Leila» es el nombre.',
    )),
    read('a1-ms-s1-r4', 'R7', 1, 'Note: The photocopier on Floor 2 is broken. Please use the one on Floor 3. Thank you! — Office Manager', 'Who wrote the note?', ['The office manager', 'A technician', 'A customer', 'The director'], x(
      'La signature est « Office Manager ».',
      'التوقيع هو «Office Manager».',
      'It is signed “Office Manager”.',
      'La firma es «Office Manager».',
    )),
    read('a1-ms-s1-r5', 'R7', 1, 'Text message: Your package will arrive today between 2 and 5 p.m. Reply STOP to cancel alerts.', 'When will the package arrive?', ['This afternoon', 'Tomorrow morning', 'Tonight after 8', 'Next week'], x(
      '« Today between 2 and 5 p.m. » = cet après-midi.',
      '«Today between 2 and 5 p.m.» = بعد ظهر اليوم.',
      '“Today between 2 and 5 p.m.” = this afternoon.',
      '«Today between 2 and 5 p.m.» = esta tarde.',
    )),
    read('a1-ms-s1-r6', 'R7', 1, 'Chat — Rami (9:05): Is the client meeting at 10 or 11? · Julie (9:06): At 11, in Room B.', 'Where is the client meeting?', ['In Room B', 'In Room 10', 'In Room 11', 'At the client’s office'], x(
      'Julie répond : « At 11, in Room B ». 10 et 11 sont des heures.',
      'تجيب جولي: «At 11, in Room B». أما 10 و11 فساعات.',
      '“In Room B”; 10 and 11 are times.',
      'Julie responde: «At 11, in Room B». 10 y 11 son horas.',
    )),
    listen('a1-ms-s1-l1', 'L4', 1, 'Hello, this is Mark from Speedy Taxis. Your taxi is outside the hotel now. It’s a black car.', 'Where is the taxi?', ['Outside the hotel', 'At the airport', 'At the station', 'In the parking lot'], x(
      '« Your taxi is outside the hotel now ».',
      '«Your taxi is outside the hotel now» أي أمام الفندق.',
      '“Outside the hotel”.',
      '«Your taxi is outside the hotel now»: delante del hotel.',
    )),
    listen('a1-ms-s1-l2', 'L4', 1, 'Hi Lina, it’s Omar. I can’t come to dinner tonight. I have to work late. Sorry!', 'Why is Omar calling?', ['To cancel a dinner', 'To invite Lina to dinner', 'To ask for help with work', 'To change the restaurant'], x(
      '« I can’t come to dinner tonight » : il annule le dîner.',
      '«I can’t come to dinner tonight»: يلغي العشاء.',
      'He cancels the dinner.',
      '«I can’t come to dinner tonight»: cancela la cena.',
    )),
    v('a1-ms-s1-q1', 1, 'Please write your ___ number on the form so we can call you.', ['phone', 'page', 'plane', 'price'], x(
      'Pour pouvoir appeler : « phone number ».',
      'لكي نتصل بك: «phone number».',
      'To call you: “phone number”.',
      'Para poder llamar: «phone number».',
    )),
    respond('a1-ms-s1-l3', 1, 'Can I leave a message for Mr. Kim?', ['Of course. What’s your name?', 'He is a message.', 'Yes, I left.'], x(
      'On accepte et on commence à prendre le message.',
      'نقبل ونبدأ في تدوين الرسالة.',
      'Accept and start taking the message.',
      'Se acepta y se empieza a tomar el recado.',
    )),
  ],
  [
    read('a1-ms-s2-r1', 'R7', 1, 'Hi team, the office is closed tomorrow for cleaning. Please work from home. — Hana', 'What should the team do tomorrow?', ['Work from home', 'Clean the office', 'Come in early', 'Meet Hana'], x(
      '« Please work from home » = travailler depuis la maison.',
      '«Please work from home» = العمل من البيت.',
      '“Please work from home”.',
      '«Please work from home» = trabajar desde casa.',
    )),
    read('a1-ms-s2-r2', 'R7', 1, 'Reminder: Dentist appointment — Tuesday 4 June, 3:30 p.m. Please call 555-0193 to cancel.', 'What should the patient do to cancel?', ['Call the office', 'Send an email', 'Visit the clinic', 'Do nothing'], x(
      '« Please call 555-0193 to cancel » : il faut téléphoner.',
      '«Please call 555-0193 to cancel»: يجب الاتصال هاتفيًا.',
      '“Please call … to cancel”.',
      '«Please call 555-0193 to cancel»: hay que llamar.',
    )),
    read('a1-ms-s2-r3', 'R7', 1, 'Membership form — Required: name, email, signature. Optional: phone number.', 'Which information is optional?', ['Phone number', 'Name', 'Email', 'Signature'], x(
      '« Optional: phone number » = le téléphone est facultatif.',
      '«Optional: phone number» = رقم الهاتف اختياري.',
      'The phone number is optional.',
      '«Optional: phone number» = el teléfono es opcional.',
    )),
    read('a1-ms-s2-r4', 'R7', 1, 'Lost cat! Grey with a white face. Her name is Milo. Please call Sara at 555-0128.', 'What does the cat look like?', ['Grey with a white face', 'Black with white feet', 'Small and white', 'Brown and grey'], x(
      '« Grey with a white face » = gris avec une tête blanche.',
      '«Grey with a white face» = رمادي بوجه أبيض.',
      '“Grey with a white face”.',
      '«Grey with a white face» = gris con la cara blanca.',
    )),
    read('a1-ms-s2-r5', 'R7', 1, 'From: IT Support — Subject: New password. Please change your password before Friday. It must have at least 8 characters.', 'What must employees do before Friday?', ['Change their password', 'Buy a new computer', 'Write to IT support', 'Delete old emails'], x(
      '« Please change your password before Friday ».',
      '«Please change your password before Friday» أي تغيير كلمة المرور.',
      '“Please change your password”.',
      '«Please change your password before Friday»: cambiar la contraseña.',
    )),
    read('a1-ms-s2-r6', 'R7', 1, 'Paul, the client called at 2:15. Please call him back. His number is on your desk. — Mia', 'What should Paul do?', ['Call the client back', 'Visit the client', 'Send an email to Mia', 'Find a new number'], x(
      '« Please call him back » = rappeler le client.',
      '«Please call him back» = معاودة الاتصال بالعميل.',
      '“Please call him back”.',
      '«Please call him back» = devolver la llamada al cliente.',
    )),
    listen('a1-ms-s2-l1', 'L4', 1, 'Good morning, this is a message for Mr. Chen. Your car is ready. You can pick it up after four p.m. today.', 'When can Mr. Chen get his car?', ['After 4 p.m. today', 'Tomorrow morning', 'Before noon today', 'Next week'], x(
      '« After four p.m. today ».',
      '«After four p.m. today» أي بعد الرابعة اليوم.',
      '“After four p.m. today”.',
      '«After four p.m. today»: hoy después de las 16 h.',
    )),
    listen('a1-ms-s2-l2', 'L4', 1, 'Hi, it’s Julia from the bookshop. The book you ordered is here. We are open until seven.', 'Why is Julia calling?', ['A book has arrived', 'The shop is closing', 'She wants to buy a book', 'The order is cancelled'], x(
      '« The book you ordered is here » : le livre commandé est arrivé.',
      '«The book you ordered is here»: وصل الكتاب المطلوب.',
      'The ordered book has arrived.',
      '«The book you ordered is here»: ha llegado el libro encargado.',
    )),
    v('a1-ms-s2-q1', 1, 'Please ___ your full name in capital letters.', ['write', 'ride', 'right', 'wait'], x(
      '« Write your name » = écrire son nom. « Right » se prononce comme « write » : piège.',
      '«Write your name» = اكتب اسمك. و«right» تُنطق مثل «write»: فخ.',
      '“Write”; “right” sounds the same.',
      '«Write your name» = escribir el nombre. «Right» suena igual que «write»: trampa.',
    )),
    respond('a1-ms-s2-l3', 1, 'Who left this note on my desk?', ['I think it was Karim.', 'On your desk.', 'Yes, it’s a note.'], x(
      '« Who » → une personne.',
      '«Who» ← شخص.',
      '“Who” → a person.',
      '«Who» → una persona.',
    )),
  ],
  [
    read('a1-ms-s3-r1', 'R7', 1, 'Hi Mom, I’m at the station. My train is late. I’ll be home at 8 instead of 7. — Yara', 'What time will Yara get home?', ['At 8', 'At 7', 'At 6', 'At 9'], x(
      '« At 8 instead of 7 » = à 20 h au lieu de 19 h.',
      '«At 8 instead of 7» = في الثامنة بدل السابعة.',
      '“At 8 instead of 7”.',
      '«At 8 instead of 7» = a las 8 en lugar de a las 7.',
    )),
    read('a1-ms-s3-r2', 'R7', 1, 'Visitor badge — Name: Ken Ito · Company: BlueSky Ltd. · Visiting: Ms. Lopez, Floor 5 · Valid: today only', 'Who is Ken Ito visiting?', ['Ms. Lopez', 'BlueSky Ltd.', 'The security desk', 'Mr. Ito'], x(
      '« Visiting: Ms. Lopez ». BlueSky Ltd. est son entreprise.',
      '«Visiting: Ms. Lopez». أما BlueSky Ltd. فشركته.',
      '“Visiting: Ms. Lopez”.',
      '«Visiting: Ms. Lopez». BlueSky Ltd. es su empresa.',
    )),
    read('a1-ms-s3-r3', 'R7', 1, 'Message from reception: A delivery for you is at the front desk. Please pick it up before 6 p.m.', 'What should the employee do?', ['Pick up a delivery', 'Call reception', 'Send a package', 'Wait for a visitor'], x(
      '« Please pick it up » = venir chercher la livraison.',
      '«Please pick it up» = استلام الطرد.',
      '“Please pick it up”.',
      '«Please pick it up» = recoger la entrega.',
    )),
    read('a1-ms-s3-r4', 'R7', 1, 'Order form — Item: blue chair · Quantity: 4 · Delivery: Monday', 'How many chairs are ordered?', ['Four', 'One', 'Two', 'Five'], x(
      '« Quantity: 4 ».',
      '«Quantity: 4» أي أربعة.',
      '“Quantity: 4”.',
      '«Quantity: 4»: cuatro.',
    )),
    read('a1-ms-s3-r5', 'R7', 1, 'Hi Nour, can we move our lunch to Thursday? I have a meeting on Wednesday. — Sam', 'When does Sam want to have lunch?', ['On Thursday', 'On Wednesday', 'On Monday', 'Today'], x(
      '« Move our lunch to Thursday » : le déjeuner passe au jeudi.',
      '«Move our lunch to Thursday»: نقل الغداء إلى الخميس.',
      '“Move our lunch to Thursday”.',
      '«Move our lunch to Thursday»: pasar la comida al jueves.',
    )),
    read('a1-ms-s3-r6', 'R7', 1, 'Wi-Fi for guests — Network: CityHotel-Guest · Password: welcome2026 · Free for all guests', 'How much does the Wi-Fi cost for guests?', ['It is free', '$5 a day', '$2 an hour', '$10 a night'], x(
      '« Free for all guests » = gratuit.',
      '«Free for all guests» = مجاني.',
      '“Free for all guests”.',
      '«Free for all guests» = gratis.',
    )),
    listen('a1-ms-s3-l1', 'L4', 1, 'Hello, this is the City Library. Please return the books you borrowed by next Monday. Thank you.', 'What is the message about?', ['Returning books', 'A new library card', 'A library event', 'Lost books'], x(
      '« Please return the books » : rendre les livres.',
      '«Please return the books»: إرجاع الكتب.',
      '“Please return the books”.',
      '«Please return the books»: devolver los libros.',
    )),
    listen('a1-ms-s3-l2', 'L4', 1, 'Hi Adam, it’s Lea. I’m outside the cinema. The film starts in ten minutes. Where are you?', 'Where is Lea?', ['Outside the cinema', 'At home', 'At the bus stop', 'At the office'], x(
      '« I’m outside the cinema » = devant le cinéma.',
      '«I’m outside the cinema» = أمام السينما.',
      '“Outside the cinema”.',
      '«I’m outside the cinema» = delante del cine.',
    )),
    v('a1-ms-s3-q1', 1, 'Please sign and ___ the form to the front desk.', ['return', 'repeat', 'rest', 'read'], x(
      '« Return the form » = rapporter le formulaire.',
      '«Return the form» = إعادة الاستمارة.',
      '“Return the form”.',
      '«Return the form» = devolver el formulario.',
    )),
    respond('a1-ms-s3-l3', 1, 'Did you get my message?', ['Yes, I’ll call you back soon.', 'It’s a long message.', 'At my desk.'], x(
      'Question oui / non → « Yes », avec la suite logique : rappeler.',
      'سؤال نعم/لا ← «Yes» مع الخطوة المنطقية: معاودة الاتصال.',
      'Yes, and the logical next step.',
      'Pregunta de sí o no → «Yes», con el paso lógico siguiente: devolver la llamada.',
    )),
  ],
);
