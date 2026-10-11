import type { Unit } from '../../../types';
import { lesson, listen, respond, unit, x } from '../build';

export const a1Conversations: Unit = unit(
  {
    id: 'a1-conversations',
    emoji: '🗣️',
    level: 1,
    part: 'L3 · L2',
    title: x('Petites conversations', 'محادثات قصيرة', 'Short conversations', 'Conversaciones cortas'),
    subtitle: x('Partie 3 : deux personnes parlent', 'الجزء 3: شخصان يتحدثان', 'Part 3: two people talk', 'Parte 3: dos personas hablan'),
    lesson: lesson(
      x('Comprendre de quoi parlent deux personnes et ce qu’elles vont faire.', 'فهم موضوع حديث شخصين وما سيفعلانه.', 'Understand what two people talk about and what they will do.', 'Entender de qué hablan dos personas y qué van a hacer.'),
      [
        x('La première réplique donne souvent le sujet : un problème, une demande ou un projet.', 'الجملة الأولى تعطي غالبًا الموضوع: مشكلة أو طلب أو مشروع.', 'The first line usually gives the topic.', 'La primera frase suele dar el tema: un problema, una petición o un plan.'),
        x('La question précise « the man » ou « the woman » : écoute surtout cette personne.', 'السؤال يحدد «the man» أو «the woman»: ركّز على هذا الشخص.', 'The question names “the man” or “the woman”: focus on that person.', 'La pregunta indica «the man» o «the woman»: escucha sobre todo a esa persona.'),
        x('La bonne réponse reformule : « I’ll get some paper » → « Bring paper ».', 'الإجابة الصحيحة تعيد الصياغة: «I’ll get some paper» ← «Bring paper».', 'The right answer paraphrases.', 'La respuesta correcta reformula: «I’ll get some paper» → «Bring paper».'),
      ],
      'W: The printer is out of paper. M: I’ll get some from the supply room.',
      x('Sujet : plus de papier. Ensuite : l’homme va chercher du papier.', 'الموضوع: نفاد الورق. بعد ذلك: سيحضر الرجل الورق.', 'Topic: no paper. Next: the man will fetch some.', 'Tema: no queda papel. Después: el hombre va a buscar papel.'),
    ),
  },
  [
    listen('a1-cv-s1-l1', 'L3', 1, 'W: Hi, I’m here to see Mr. Brown.\nM: Please take a seat. He’ll be here in five minutes.', 'What does the man ask the woman to do?', ['Sit down and wait', 'Call Mr. Brown', 'Come back later', 'Go to the fifth floor'], x(
      '« Please take a seat » = asseyez-vous ; Mr. Brown arrive dans cinq minutes.',
      '«Please take a seat» = تفضلي بالجلوس، وسيصل Mr. Brown بعد خمس دقائق.',
      '“Please take a seat”.',
      '«Please take a seat» = siéntese; Mr. Brown llega en cinco minutos.',
    )),
    listen('a1-cv-s1-l2', 'L3', 1, 'M: Is the cafeteria open now?\nW: No, it opens at noon. It’s eleven thirty.', 'What time is it now?', ['11:30', '12:00', '11:00', '12:30'], x(
      '« It’s eleven thirty » = il est 11 h 30. Midi est l’heure d’ouverture.',
      '«It’s eleven thirty» = الساعة 11:30. أما منتصف النهار فوقت الافتتاح.',
      '“It’s eleven thirty”; noon is the opening time.',
      '«It’s eleven thirty» = son las 11:30. Mediodía es la hora de apertura.',
    )),
    listen('a1-cv-s1-l3', 'L3', 1, 'W: I need a taxi to the airport.\nM: OK. When is your flight?\nW: At six this evening.', 'Where does the woman want to go?', ['To the airport', 'To the station', 'To her hotel', 'To the office'], x(
      '« A taxi to the airport ».',
      '«A taxi to the airport» أي إلى المطار.',
      '“A taxi to the airport”.',
      '«A taxi to the airport»: al aeropuerto.',
    )),
    listen('a1-cv-s1-l4', 'L3', 1, 'M: I can’t find my pen.\nW: Here, you can use mine.', 'What does the woman offer?', ['Her pen', 'Her phone', 'A new pen', 'A piece of paper'], x(
      '« You can use mine » = mon stylo.',
      '«You can use mine» = قلمي.',
      '“Mine” = her pen.',
      '«You can use mine» = mi bolígrafo.',
    )),
    listen('a1-cv-s1-l5', 'L3', 1, 'W: How was your trip to Madrid?\nM: Great, but the hotel was very expensive.', 'What was the problem?', ['The price of the hotel', 'The weather', 'The flight', 'The food'], x(
      '« The hotel was very expensive » : l’hôtel était trop cher.',
      '«The hotel was very expensive»: الفندق كان غاليًا جدًا.',
      'The hotel was expensive.',
      '«The hotel was very expensive»: el hotel era muy caro.',
    )),
    listen('a1-cv-s1-l6', 'L3', 1, 'M: Do you want tea or coffee?\nW: Tea, please. With milk.', 'What does the woman want?', ['Tea with milk', 'Coffee with milk', 'Black coffee', 'Water'], x(
      '« Tea, please. With milk ».',
      '«Tea, please. With milk» أي شاي بالحليب.',
      '“Tea, please. With milk”.',
      '«Tea, please. With milk»: té con leche.',
    )),
    listen('a1-cv-s1-l7', 'L3', 1, 'W: The meeting room is very cold.\nM: I’ll close the window.', 'What will the man do?', ['Close the window', 'Open the window', 'Bring a heater', 'Leave the room'], x(
      '« I’ll close the window » = il va fermer la fenêtre.',
      '«I’ll close the window» = سيغلق النافذة.',
      '“I’ll close the window”.',
      '«I’ll close the window» = va a cerrar la ventana.',
    )),
    respond('a1-cv-s1-l8', 1, 'Where is the nearest bank?', ['On Main Street, next to the hotel.', 'It opens at nine.', 'Yes, I have money.'], x(
      '« Where » → un lieu.',
      '«Where» ← مكان.',
      '“Where” → a place.',
      '«Where» → un lugar.',
    )),
    respond('a1-cv-s1-l9', 1, 'When does the next train leave?', ['In about twenty minutes.', 'From platform four.', 'A return ticket.'], x(
      '« When » → un moment. « Platform four » est un lieu.',
      '«When» ← وقت. أما «platform four» فمكان.',
      '“When” → a time.',
      '«When» → un momento. «Platform four» es un lugar.',
    )),
    respond('a1-cv-s1-l10', 1, 'Who is your English teacher?', ['Ms. Clarke.', 'On Tuesdays.', 'In Room 5.'], x(
      '« Who » → une personne.',
      '«Who» ← شخص.',
      '“Who” → a person.',
      '«Who» → una persona.',
    )),
  ],
  [
    listen('a1-cv-s2-l1', 'L3', 1, 'M: Excuse me, where is the post office?\nW: Go straight and turn right at the bank.', 'What does the man want to find?', ['The post office', 'The bank', 'A hotel', 'The station'], x(
      'Il demande : « Where is the post office? ». La banque est un repère.',
      'يسأل: «Where is the post office?». أما البنك فمَعلم للطريق.',
      'He asks for the post office; the bank is a landmark.',
      'Pregunta: «Where is the post office?». El banco es un punto de referencia.',
    )),
    listen('a1-cv-s2-l2', 'L3', 1, 'W: Can we meet on Monday?\nM: Sorry, I’m busy on Monday. What about Tuesday?\nW: Tuesday is fine.', 'When will they meet?', ['On Tuesday', 'On Monday', 'On Wednesday', 'Today'], x(
      'Lundi ne convient pas ; ils choisissent mardi : « Tuesday is fine ».',
      'الإثنين لا يناسب، فيختاران الثلاثاء: «Tuesday is fine».',
      'Monday does not work; “Tuesday is fine”.',
      'El lunes no le va; eligen el martes: «Tuesday is fine».',
    )),
    listen('a1-cv-s2-l3', 'L3', 1, 'M: Your total is twelve dollars.\nW: Can I pay by card?\nM: Yes, of course.', 'How will the woman pay?', ['By card', 'In cash', 'By check', 'Online'], x(
      'Elle demande à payer par carte, et c’est accepté.',
      'تطلب الدفع بالبطاقة ويُقبل طلبها.',
      'She pays by card.',
      'Pide pagar con tarjeta y se lo aceptan.',
    )),
    listen('a1-cv-s2-l4', 'L3', 1, 'W: Is Mr. Lee in the office today?\nM: No, he’s on vacation until Friday.', 'Where is Mr. Lee?', ['On vacation', 'At a meeting', 'At home, sick', 'In another office'], x(
      '« He’s on vacation until Friday » = il est en congé.',
      '«He’s on vacation until Friday» = في عطلة حتى الجمعة.',
      '“He’s on vacation”.',
      '«He’s on vacation until Friday» = está de vacaciones.',
    )),
    listen('a1-cv-s2-l5', 'L3', 1, 'M: The bus is late again.\nW: Let’s take a taxi. We don’t want to miss the film.', 'What does the woman suggest?', ['Taking a taxi', 'Waiting for the bus', 'Walking', 'Going home'], x(
      '« Let’s take a taxi » : elle propose le taxi.',
      '«Let’s take a taxi»: تقترح سيارة أجرة.',
      '“Let’s take a taxi”.',
      '«Let’s take a taxi»: propone coger un taxi.',
    )),
    listen('a1-cv-s2-l6', 'L3', 1, 'W: I’d like to book a room for two nights.\nM: Sure. For which dates?\nW: The fifth and sixth of May.', 'How long will the woman stay?', ['Two nights', 'One night', 'Five nights', 'Six nights'], x(
      '« A room for two nights ». « Fifth » et « sixth » sont des dates.',
      '«A room for two nights». أما «fifth» و«sixth» فتاريخان.',
      '“Two nights”; fifth and sixth are dates.',
      '«A room for two nights». «Fifth» y «sixth» son fechas.',
    )),
    listen('a1-cv-s2-l7', 'L3', 1, 'M: Do you have this shirt in a large size?\nW: Yes, here you are. The fitting room is on the left.', 'Where is the fitting room?', ['On the left', 'On the right', 'Upstairs', 'Next to the door'], x(
      '« The fitting room is on the left ».',
      '«The fitting room is on the left» أي على اليسار.',
      '“On the left”.',
      '«The fitting room is on the left»: a la izquierda.',
    )),
    respond('a1-cv-s2-l8', 1, 'How do you spell your name?', ['K-A-R-I-M.', 'My name is nice.', 'It’s Monday.'], x(
      '« Spell » = épeler : on donne les lettres.',
      '«Spell» = تهجئة: نذكر الحروف.',
      '“Spell” → give the letters.',
      '«Spell» = deletrear: se dicen las letras.',
    )),
    respond('a1-cv-s2-l9', 1, 'Is this the bus to the city center?', ['Yes, it stops at Main Square.', 'It’s a big bus.', 'No, I don’t drive.'], x(
      'Question oui / non avec une précision utile.',
      'سؤال نعم/لا مع توضيح مفيد.',
      'Yes, with a useful detail.',
      'Pregunta de sí o no con un dato útil.',
    )),
    respond('a1-cv-s2-l10', 1, 'What would you like for lunch?', ['A chicken sandwich, please.', 'At one o’clock.', 'In the cafeteria.'], x(
      '« What would you like » → ce qu’on veut manger.',
      '«What would you like» ← ما نريد أكله.',
      'Say what you want.',
      '«What would you like» → lo que se quiere comer.',
    )),
  ],
  [
    listen('a1-cv-s3-l1', 'L3', 1, 'W: Hello, I have a reservation. My name is Sara Haddad.\nM: Welcome, Ms. Haddad. Your room is number 304.', 'What is the woman’s room number?', ['304', '340', '403', '34'], x(
      '« Three oh four » = 304.',
      '«Three oh four» تعني الرقم 304.',
      '“Three oh four” = 304.',
      '«Three oh four» = 304.',
    )),
    listen('a1-cv-s3-l2', 'L3', 1, 'M: Where are you from, Lucia?\nW: I’m from Mexico, but I live in Canada now.', 'Where does Lucia live now?', ['In Canada', 'In Mexico', 'In Spain', 'In the United States'], x(
      '« I live in Canada now ». Le Mexique est son pays d’origine.',
      '«I live in Canada now». أما المكسيك فبلدها الأصلي.',
      '“I live in Canada now”.',
      '«I live in Canada now». México es su país de origen.',
    )),
    listen('a1-cv-s3-l3', 'L3', 1, 'W: The printer doesn’t work.\nM: Call the IT help desk. Their number is on the wall.', 'What does the man tell the woman to do?', ['Call the IT help desk', 'Buy a new printer', 'Use his computer', 'Wait until tomorrow'], x(
      '« Call the IT help desk ».',
      '«Call the IT help desk» أي الاتصال بالدعم التقني.',
      '“Call the IT help desk”.',
      '«Call the IT help desk»: llamar al soporte informático.',
    )),
    listen('a1-cv-s3-l4', 'L3', 1, 'M: How much is a ticket to the museum?\nW: Eight dollars for adults and four for children.', 'How much is a child’s ticket?', ['$4', '$8', '$12', 'Free'], x(
      '« Four for children » = 4 $ pour un enfant.',
      '«Four for children» = 4 دولارات للطفل.',
      '“Four for children”.',
      '«Four for children» = 4 $ para un niño.',
    )),
    listen('a1-cv-s3-l5', 'L3', 1, 'W: What time do you finish today?\nM: At six. Do you want to have dinner?\nW: Yes, good idea.', 'What will they do this evening?', ['Have dinner', 'Go to a meeting', 'Watch a film', 'Work late'], x(
      'Il propose de dîner et elle accepte : « Yes, good idea ».',
      'يقترح العشاء فتوافق: «Yes, good idea».',
      'He suggests dinner and she agrees.',
      'Él propone cenar y ella acepta: «Yes, good idea».',
    )),
    listen('a1-cv-s3-l6', 'L3', 1, 'M: Is it far to the station?\nW: No, it’s only five minutes on foot.', 'How can the man get to the station?', ['He can walk', 'He needs a taxi', 'He can take the bus', 'He needs a car'], x(
      '« Five minutes on foot » = cinq minutes à pied.',
      '«Five minutes on foot» = خمس دقائق مشيًا.',
      '“On foot” = walking.',
      '«Five minutes on foot» = cinco minutos andando.',
    )),
    listen('a1-cv-s3-l7', 'L3', 1, 'W: Can you help me with my bag? It’s very heavy.\nM: Sure. Where do you want it?', 'What is the problem with the bag?', ['It is heavy', 'It is broken', 'It is lost', 'It is too small'], x(
      '« It’s very heavy » = il est très lourd.',
      '«It’s very heavy» = ثقيلة جدًا.',
      '“It’s very heavy”.',
      '«It’s very heavy» = pesa mucho.',
    )),
    respond('a1-cv-s3-l8', 1, 'How long does the trip take?', ['About three hours.', 'By train.', 'Next Monday.'], x(
      '« How long » → une durée.',
      '«How long» ← مدة.',
      '“How long” → a duration.',
      '«How long» → una duración.',
    )),
    respond('a1-cv-s3-l9', 1, 'Can I sit here?', ['Sure, go ahead.', 'I’m sitting.', 'It’s a chair.'], x(
      'Demande de permission → « Sure, go ahead » (allez-y).',
      'طلب إذن ← «Sure, go ahead» (تفضل).',
      'Permission → “Sure, go ahead”.',
      'Petición de permiso → «Sure, go ahead» (adelante).',
    )),
    respond('a1-cv-s3-l10', 1, 'Which bus goes to the airport?', ['Number 15.', 'In ten minutes.', 'Yes, it does.'], x(
      '« Which bus » → un numéro de bus.',
      '«Which bus» ← رقم الحافلة.',
      '“Which bus” → a bus number.',
      '«Which bus» → un número de autobús.',
    )),
  ],
);
