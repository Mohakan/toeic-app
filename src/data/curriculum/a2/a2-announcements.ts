import type { Unit } from '../../../types';
import { lesson, listen, respond, unit, x } from '../build';

export const a2Announcements: Unit = unit(
  {
    id: 'a2-announcements',
    emoji: '📣',
    level: 2,
    part: 'L4 · L2',
    title: x('Annonces publiques', 'الإعلانات العامة', 'Public announcements', 'Anuncios públicos'),
    subtitle: x('Partie 4 : où, qui, quoi faire ?', 'الجزء 4: أين ومن وماذا نفعل؟', 'Part 4: where, who, what to do?', 'Parte 4: ¿dónde, quién, qué hacer?'),
    lesson: lesson(
      x('Comprendre une annonce dans un magasin, une gare, un avion ou un bureau.', 'فهم إعلان في متجر أو محطة أو طائرة أو مكتب.', 'Understand announcements in shops, stations, planes and offices.', 'Entender un anuncio en una tienda, una estación, un avión o una oficina.'),
      [
        x('Le début indique le lieu ou le public : « Attention, shoppers », « Good morning, passengers ».', 'البداية تحدد المكان أو الجمهور: «Attention, shoppers» و«Good morning, passengers».', 'The opening tells you the place or audience.', 'El principio indica el lugar o el público: «Attention, shoppers», «Good morning, passengers».'),
        x('Repère l’information clé : un changement, une consigne, une heure ou un lieu.', 'حدّد المعلومة الأساسية: تغيير أو تعليمة أو ساعة أو مكان.', 'Find the key information: a change, an instruction, a time, a place.', 'Localiza la información clave: un cambio, una instrucción, una hora o un lugar.'),
        x('Questions fréquentes : Where is the announcement made? Who is speaking? What should listeners do?', 'أسئلة شائعة: Where is the announcement made? وWho is speaking? وWhat should listeners do?', 'Typical questions: where, who, what to do.', 'Preguntas frecuentes: Where is the announcement made? Who is speaking? What should listeners do?'),
      ],
      'Attention, shoppers: the store will close in fifteen minutes.',
      x('Lieu : un magasin. But : annoncer la fermeture.', 'المكان: متجر. الهدف: الإعلان عن الإغلاق.', 'Place: a store. Purpose: closing time.', 'Lugar: una tienda. Objetivo: anunciar el cierre.'),
    ),
  },
  [
    listen('a2-an-s1-l1', 'L4', 2, 'Attention, shoppers. Our store will close in fifteen minutes. Please bring your items to the checkout.', 'Where is the announcement made?', ['In a store', 'At an airport', 'In an office', 'On a train'], x(
      '« Shoppers », « store », « checkout » → un magasin.',
      '«Shoppers» و«store» و«checkout» ← متجر.',
      'Shoppers, store, checkout → a store.',
      '«Shoppers», «store», «checkout» → una tienda.',
    )),
    listen('a2-an-s1-l2', 'L4', 2, 'Good morning, passengers. This is your captain speaking. We will land in Tunis in about twenty minutes. The weather is sunny and warm.', 'Who is speaking?', ['A pilot', 'A flight attendant', 'A tour guide', 'A passenger'], x(
      '« This is your captain speaking » : le commandant de bord, donc un pilote.',
      '«This is your captain speaking»: قائد الطائرة أي الطيار.',
      '“Your captain” = the pilot.',
      '«This is your captain speaking»: el comandante, es decir, un piloto.',
    )),
    listen('a2-an-s1-l3', 'L4', 2, 'Hello, everyone, and welcome to the factory. My name is Leila, and I will be your guide today. The tour takes about one hour.', 'How long is the tour?', ['About one hour', 'About two hours', 'Thirty minutes', 'All day'], x(
      '« The tour takes about one hour ».',
      '«The tour takes about one hour» أي ساعة تقريبًا.',
      '“About one hour”.',
      '«The tour takes about one hour»: alrededor de una hora.',
    )),
    listen('a2-an-s1-l4', 'L4', 2, 'This is an announcement for the owner of a blue car, number TU 4521. Your lights are on. Please return to the parking lot.', 'What is the problem?', ['A car’s lights are on', 'A car is blocking the exit', 'A car has been stolen', 'A car is in the wrong place'], x(
      '« Your lights are on » : les phares sont restés allumés.',
      '«Your lights are on»: أضواء السيارة مشتعلة.',
      'The lights are on.',
      '«Your lights are on»: las luces se han quedado encendidas.',
    )),
    listen('a2-an-s1-l5', 'L4', 2, 'Thank you for calling Sunny Travel. All our agents are busy. Please stay on the line or visit our website to book online.', 'What can callers do on the website?', ['Book online', 'Talk to an agent', 'Pay a bill', 'Cancel a flight'], x(
      '« Visit our website to book online » : réserver en ligne.',
      '«Visit our website to book online»: الحجز عبر الإنترنت.',
      'Book online.',
      '«Visit our website to book online»: reservar en línea.',
    )),
    listen('a2-an-s1-l6', 'L4', 2, 'Good afternoon, students. The library will close early today, at four p.m., because of a staff meeting.', 'Why will the library close early?', ['Because of a staff meeting', 'Because of repairs', 'Because of a holiday', 'Because of a power cut'], x(
      'La raison suit « because of » : une réunion du personnel.',
      'السبب بعد «because of»: اجتماع الموظفين.',
      '“Because of a staff meeting”.',
      'La razón va después de «because of»: una reunión del personal.',
    )),
    listen('a2-an-s1-l7', 'L4', 2, 'Welcome to Radio Coast. Today’s weather: cloudy in the morning, with rain in the afternoon. Don’t forget your umbrella!', 'What will the weather be like in the afternoon?', ['Rainy', 'Sunny', 'Cloudy', 'Windy'], x(
      '« Rain in the afternoon » ; les nuages, c’est le matin.',
      '«Rain in the afternoon»، أما الغيوم ففي الصباح.',
      'Rain in the afternoon; clouds in the morning.',
      '«Rain in the afternoon»; las nubes son por la mañana.',
    )),
    respond('a2-an-s1-l8', 2, 'Did you hear the announcement?', ['Yes, our flight is delayed.', 'It’s very loud.', 'No, I announced it.'], x(
      'Réponse naturelle : oui, avec le contenu de l’annonce.',
      'رد طبيعي: نعم مع مضمون الإعلان.',
      'Yes, with what it said.',
      'Respuesta natural: sí, con lo que decía el anuncio.',
    )),
    respond('a2-an-s1-l9', 2, 'Where is the lost and found office?', ['Next to the information desk.', 'A black umbrella.', 'Yesterday afternoon.'], x(
      '« Where » → un lieu.',
      '«Where» ← مكان.',
      '“Where” → a place.',
      '«Where» → un lugar.',
    )),
    respond('a2-an-s1-l10', 2, 'Is the store open on Sunday?', ['Only in the morning.', 'It’s a big store.', 'Yes, I opened it.'], x(
      'Réponse précise et nuancée : seulement le matin.',
      'رد دقيق: في الصباح فقط.',
      'Only in the morning.',
      'Respuesta precisa: solo por la mañana.',
    )),
  ],
  [
    listen('a2-an-s2-l1', 'L4', 2, 'Attention, all staff. There will be a fire drill at eleven a.m. today. When you hear the alarm, please leave the building by the stairs.', 'How should staff leave the building?', ['By the stairs', 'By the elevator', 'Through the parking garage', 'Through a window'], x(
      '« Leave the building by the stairs ».',
      '«Leave the building by the stairs» أي عبر الدرج.',
      '“By the stairs”.',
      '«Leave the building by the stairs»: por las escaleras.',
    )),
    listen('a2-an-s2-l2', 'L4', 2, 'Ladies and gentlemen, the 6:15 bus to Hammamet is now boarding at gate four.', 'What is happening now?', ['A bus is boarding', 'A bus is arriving', 'A train is leaving', 'A flight is landing'], x(
      '« Is now boarding » = l’embarquement commence.',
      '«Is now boarding» = بدأ الصعود.',
      '“Now boarding”.',
      '«Is now boarding» = está embarcando.',
    )),
    listen('a2-an-s2-l3', 'L4', 2, 'Welcome to Fresh Foods. Today only, all vegetables are half price. Visit our fruit and vegetable section at the back of the store.', 'Where is the vegetable section?', ['At the back of the store', 'At the entrance', 'Upstairs', 'Next to the checkout'], x(
      '« At the back of the store » = au fond du magasin.',
      '«At the back of the store» = في آخر المتجر.',
      '“At the back”.',
      '«At the back of the store» = al fondo de la tienda.',
    )),
    listen('a2-an-s2-l4', 'L4', 2, 'Hello, this is Dr. Saidi’s office. We are closed for the holidays and will open again on 3 January. For emergencies, please call 555-0170.', 'When will the office open again?', ['On 3 January', 'Tomorrow', 'On 1 January', 'Next week'], x(
      '« Will open again on 3 January ».',
      '«Will open again on 3 January» أي يوم 3 يناير.',
      '“On 3 January”.',
      '«Will open again on 3 January»: el 3 de enero.',
    )),
    listen('a2-an-s2-l5', 'L4', 2, 'Good evening and welcome to tonight’s concert. Please turn off your phones. The concert will start in five minutes.', 'What are listeners asked to do?', ['Turn off their phones', 'Buy tickets', 'Wait outside', 'Leave their bags'], x(
      '« Please turn off your phones ».',
      '«Please turn off your phones» أي إطفاء الهواتف.',
      '“Turn off your phones”.',
      '«Please turn off your phones»: apagar los teléfonos.',
    )),
    listen('a2-an-s2-l6', 'L4', 2, 'Attention, passengers on flight 302 to Paris. Your departure gate has changed. Please go to gate B7.', 'What has changed?', ['The departure gate', 'The departure time', 'The destination', 'The airline'], x(
      '« Your departure gate has changed » : la porte d’embarquement.',
      '«Your departure gate has changed»: بوابة المغادرة.',
      'The gate changed.',
      '«Your departure gate has changed»: la puerta de embarque.',
    )),
    listen('a2-an-s2-l7', 'L4', 2, 'Hi everyone, it’s Sam from HR. Please remember to send me your holiday requests by the end of this week.', 'What should listeners send?', ['Holiday requests', 'Travel receipts', 'Their résumés', 'Timesheets'], x(
      '« Send me your holiday requests » = les demandes de congés.',
      '«Send me your holiday requests» = طلبات العطل.',
      '“Holiday requests”.',
      '«Send me your holiday requests» = las solicitudes de vacaciones.',
    )),
    respond('a2-an-s2-l8', 2, 'What time does the concert start?', ['At eight o’clock.', 'In the city park.', 'The tickets are sold out.'], x(
      '« What time » → une heure.',
      '«What time» ← ساعة.',
      '“What time” → a time.',
      '«What time» → una hora.',
    )),
    respond('a2-an-s2-l9', 2, 'Was the train late again?', ['Yes, about twenty minutes.', 'By train.', 'The station is near.'], x(
      'Oui + durée du retard.',
      'نعم + مدة التأخير.',
      'Yes, with how late.',
      'Sí + duración del retraso.',
    )),
    respond('a2-an-s2-l10', 2, 'Who made that announcement?', ['The station manager, I think.', 'About the delay.', 'Ten minutes ago.'], x(
      '« Who » → une personne.',
      '«Who» ← شخص.',
      '“Who” → a person.',
      '«Who» → una persona.',
    )),
  ],
  [
    listen('a2-an-s3-l1', 'L4', 2, 'Attention, please. The swimming pool will close in ten minutes. Please leave the water now.', 'Where is the announcement made?', ['At a swimming pool', 'At a beach', 'In a gym class', 'In a hotel restaurant'], x(
      '« The swimming pool will close » → à la piscine.',
      '«The swimming pool will close» ← في المسبح.',
      'At a swimming pool.',
      '«The swimming pool will close» → en la piscina.',
    )),
    listen('a2-an-s3-l2', 'L4', 2, 'Good morning, this is the station manager. Because of bad weather, all trains will run more slowly today. We are sorry for any delays.', 'Why are trains slower today?', ['Because of bad weather', 'Because of repairs', 'Because of a strike', 'Because of an accident'], x(
      '« Because of bad weather » = à cause du mauvais temps.',
      '«Because of bad weather» = بسبب سوء الأحوال الجوية.',
      'Bad weather.',
      '«Because of bad weather» = por el mal tiempo.',
    )),
    listen('a2-an-s3-l3', 'L4', 2, 'Welcome aboard the City Tour bus. On your left, you can see the old harbor. Our next stop is the National Museum.', 'What is the next stop?', ['The National Museum', 'The old harbor', 'The city center', 'The train station'], x(
      '« Our next stop is the National Museum ». Le port se voit sur la gauche.',
      '«Our next stop is the National Museum». أما الميناء فيُرى على اليسار.',
      'The museum; the harbor is on the left.',
      '«Our next stop is the National Museum». El puerto se ve a la izquierda.',
    )),
    listen('a2-an-s3-l4', 'L4', 2, 'Hello, customers. Our café on the second floor is now open. Today, all coffees are just one dollar.', 'How much is a coffee today?', ['One dollar', 'Two dollars', 'It is free', 'Ten dollars'], x(
      '« All coffees are just one dollar ». « Second floor » est l’étage.',
      '«All coffees are just one dollar». أما «second floor» فالطابق.',
      'One dollar; “second” is the floor.',
      '«All coffees are just one dollar». «Second floor» es la planta.',
    )),
    listen('a2-an-s3-l5', 'L4', 2, 'This is a message for Ms. Haddad. Please come to the information desk. Your colleague is waiting for you.', 'Who is waiting for Ms. Haddad?', ['Her colleague', 'Her driver', 'A doctor', 'Her manager'], x(
      '« Your colleague is waiting for you ».',
      '«Your colleague is waiting for you» أي زميلها.',
      'Her colleague.',
      '«Your colleague is waiting for you»: su compañero.',
    )),
    listen('a2-an-s3-l6', 'L4', 2, 'Good afternoon, everyone. Today’s meeting is moved from Room 4 to Room 9 because the projector in Room 4 is broken.', 'Why is the meeting moved?', ['A projector is broken', 'Room 4 is too small', 'Room 9 is more modern', 'The meeting is cancelled'], x(
      '« Because the projector in Room 4 is broken ».',
      '«Because the projector in Room 4 is broken» أي جهاز العرض معطّل.',
      'The projector is broken.',
      '«Because the projector in Room 4 is broken»: el proyector está roto.',
    )),
    listen('a2-an-s3-l7', 'L4', 2, 'Attention, drivers. The car park will be closed on Sunday for cleaning. Please park on Station Road.', 'Where should drivers park on Sunday?', ['On Station Road', 'In the car park', 'At the station', 'Behind the shop'], x(
      '« Please park on Station Road ».',
      '«Please park on Station Road» أي في شارع المحطة.',
      '“On Station Road”.',
      '«Please park on Station Road»: en Station Road.',
    )),
    respond('a2-an-s3-l8', 2, 'Can you repeat the gate number?', ['Sure, it’s gate twelve.', 'I can’t repeat it.', 'At twelve o’clock.'], x(
      'On redonne le numéro. « At twelve o’clock » répète « twelve » mais parle d’une heure.',
      'نعيد ذكر الرقم. و«At twelve o’clock» تكرر «twelve» لكنها ساعة.',
      'Give the number again; option 3 is a time.',
      'Se repite el número. «At twelve o’clock» repite «twelve», pero es una hora.',
    )),
    respond('a2-an-s3-l9', 2, 'How long will the delay be?', ['About half an hour.', 'Since this morning.', 'At the airport.'], x(
      '« How long » → une durée.',
      '«How long» ← مدة.',
      '“How long” → a duration.',
      '«How long» → una duración.',
    )),
    respond('a2-an-s3-l10', 2, 'Is this announcement about our flight?', ['Yes, it’s boarding now.', 'No, I flew.', 'It’s a loud voice.'], x(
      'Oui + information utile : l’embarquement commence.',
      'نعم + معلومة مفيدة: بدأ الصعود.',
      'Yes, with useful information.',
      'Sí + información útil: está embarcando.',
    )),
  ],
);
