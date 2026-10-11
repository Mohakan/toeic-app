import type { Unit } from '../../../types';
import { g, lesson, listen, match, read, respond, unit, v, x } from '../build';

export const a2Travel: Unit = unit(
  {
    id: 'a2-travel',
    emoji: '✈️',
    level: 2,
    part: 'R5 · L2',
    title: x('Voyages d’affaires', 'رحلات العمل', 'Business travel', 'Viajes de negocios'),
    subtitle: x('Aéroport, hôtel, transports', 'المطار والفندق والنقل', 'Airport, hotel, transport', 'Aeropuerto, hotel, transporte'),
    lesson: lesson(
      x('Maîtriser le vocabulaire du voyage, très fréquent au TOEIC.', 'إتقان مفردات السفر الشائعة جدًا في التوييك.', 'Master travel vocabulary, very frequent on the TOEIC.', 'Dominar el vocabulario de viajes, muy frecuente en el TOEIC.'),
      [
        x('Flight (vol), departure / arrival, boarding pass, luggage (indénombrable : pas de « luggages »).', 'Flight (رحلة جوية) وdeparture/arrival وboarding pass وluggage (غير معدود: لا نقول luggages).', 'Flight, departure/arrival, boarding pass, luggage (uncountable).', 'Flight (vuelo), departure/arrival, boarding pass, luggage (incontable: nunca «luggages»).'),
        x('Book / reserve = réserver ; cancel = annuler ; delay = retard.', 'Book/reserve = يحجز، cancel = يلغي، delay = تأخير.', 'Book/reserve, cancel, delay.', 'Book/reserve = reservar; cancel = cancelar; delay = retraso.'),
      ],
      'Your flight to Montreal is delayed. Please keep your boarding pass.',
      x('« delayed » : le vol part plus tard que prévu.', '«delayed»: الرحلة ستقلع متأخرة.', '“delayed”: leaves later than planned.', '«delayed»: el vuelo sale más tarde de lo previsto.'),
    ),
  },
  [
    match('a2-tr-m1', ['ticket', 'luggage', 'departure', 'boarding', 'delay'], x(
      '« Luggage » est indénombrable : « a piece of luggage ».',
      '«Luggage» غير معدود: نقول «a piece of luggage».',
      '“Luggage” is uncountable.',
      '«Luggage» es incontable: «a piece of luggage».',
    )),
    v('a2-tr-q1', 2, 'I would like to ___ a single room for three nights.', ['reserve', 'reverse', 'remove', 'refuse'], x(
      '« Reserve a room » = réserver une chambre.',
      '«Reserve a room» = يحجز غرفة.',
      '“Reserve a room”.',
      '«Reserve a room» = reservar una habitación.',
    )),
    v('a2-tr-q2', 2, 'Passengers must show their ___ at the gate before getting on the plane.', ['boarding passes', 'receipts', 'menus', 'invoices'], x(
      'On montre la carte d’embarquement à la porte : « boarding pass ».',
      'نُظهر بطاقة الصعود عند البوابة: «boarding pass».',
      'You show your “boarding pass” at the gate.',
      'En la puerta de embarque se enseña la tarjeta de embarque: «boarding pass».',
    )),
    v('a2-tr-q3', 2, 'The train was ___ because of the snow, so the trip took four hours.', ['delayed', 'reserved', 'printed', 'served'], x(
      'Un trajet plus long à cause de la neige : le train a été retardé.',
      'رحلة أطول بسبب الثلج: تأخر القطار.',
      'A longer trip because of snow: “delayed”.',
      'Un trayecto más largo por la nieve: el tren se retrasó, «delayed».',
    )),
    respond('a2-tr-l1', 2, 'Would you like a window or an aisle seat?', ['A window seat, please.', 'Yes, I would.', 'It’s on the left.'], x(
      'Question à choix « A or B » : on choisit une option. « Yes » ne convient pas.',
      'سؤال اختيار «A or B»: نختار أحد الخيارين. «Yes» لا تناسب.',
      'An “A or B” question: choose one. “Yes” does not fit.',
      'Pregunta de elección «A or B»: se elige una opción. «Yes» no encaja.',
    )),
    respond('a2-tr-l2', 2, 'How long is the flight to Dubai?', ['About five hours.', 'Gate twelve.', 'Two bags.'], x(
      '« How long » → une durée.',
      '«How long» ← مدة.',
      '“How long” → a duration.',
      '«How long» → una duración.',
    )),
    listen('a2-tr-l3', 'L4', 2, 'Good evening, passengers. The train to Sfax will depart from platform three instead of platform one. Please move to platform three now.', 'What has changed?', ['The platform', 'The departure time', 'The destination', 'The ticket price'], x(
      '« Platform three instead of platform one » : seul le quai change.',
      '«Platform three instead of platform one»: تغيّر الرصيف فقط.',
      'Only the platform changed.',
      '«Platform three instead of platform one»: solo cambia el andén.',
    )),
  ],
  [
    match('a2-tr-s2-m1', ['itinerary', 'accommodation', 'fare', 'arrival', 'reserve'], x(
      '« Fare » = prix d’un billet de transport ; « accommodation » = hébergement.',
      '«Fare» = أجرة النقل، و«accommodation» = الإقامة.',
      '“Fare” = ticket price; “accommodation” = place to stay.',
      '«Fare» = tarifa de transporte; «accommodation» = alojamiento.',
    )),
    v('a2-tr-s2-q1', 2, 'Please check in at least two hours before ___.', ['departure', 'arrival', 'delivery', 'dessert'], x(
      'On s’enregistre avant le départ : « departure ».',
      'التسجيل يكون قبل المغادرة: «departure».',
      'You check in before “departure”.',
      'Uno se registra antes de la salida: «departure».',
    )),
    v('a2-tr-s2-q2', 2, 'The hotel offers a free ___ from the airport.', ['shuttle', 'shelf', 'shower', 'shoulder'], x(
      '« Shuttle » = navette. Les autres mots se ressemblent seulement à l’écrit.',
      '«Shuttle» = حافلة نقل. الكلمات الأخرى متشابهة شكلًا فقط.',
      '“Shuttle” = a free bus.',
      '«Shuttle» = autobús lanzadera. Las otras palabras solo se parecen en la forma.',
    )),
    v('a2-tr-s2-q3', 2, 'The ___ allowance is 23 kilograms per passenger.', ['baggage', 'package', 'language', 'passage'], x(
      '« Baggage allowance » = franchise bagages.',
      '«Baggage allowance» = الوزن المسموح للأمتعة.',
      '“Baggage allowance”.',
      '«Baggage allowance» = equipaje permitido.',
    )),
    v('a2-tr-s2-q4', 2, 'We need to ___ our flight because of the storm.', ['change', 'charge', 'chance', 'chain'], x(
      '« Change our flight » = modifier notre vol.',
      '«Change our flight» = تغيير رحلتنا.',
      '“Change our flight”.',
      '«Change our flight» = cambiar nuestro vuelo.',
    )),
    respond('a2-tr-s2-l1', 2, 'Is breakfast included in the price?', ['Yes, it’s served from seven to ten.', 'It’s a nice price.', 'No, I didn’t eat.'], x(
      'Oui / non + précision utile (les horaires).',
      'نعم/لا + توضيح مفيد (المواعيد).',
      'Yes, with useful details.',
      'Sí / no + un dato útil (el horario).',
    )),
    respond('a2-tr-s2-l2', 2, 'How do I get to the hotel from the airport?', ['You can take the airport shuttle.', 'At six p.m.', 'For three nights.'], x(
      '« How do I get to… » → un moyen d’y aller.',
      '«How do I get to…» ← وسيلة للوصول.',
      '“How do I get to…” → a way to get there.',
      '«How do I get to…» → una forma de llegar.',
    )),
    listen('a2-tr-s2-l3', 'L4', 2, 'Attention, please. Gate C12 is now closed. Passengers for flight 450 to Rome should go to gate C18.', 'What should passengers for flight 450 do?', ['Go to gate C18', 'Stay at gate C12', 'Check in again', 'Wait for an announcement'], x(
      '« Should go to gate C18 » : changement de porte.',
      '«Should go to gate C18»: تغيير البوابة.',
      '“Go to gate C18”.',
      '«Should go to gate C18»: cambio de puerta.',
    )),
    read('a2-tr-s2-r1', 'R7', 2, 'Hotel Atlas — Check-in: from 2 p.m. · Check-out: by 11 a.m. · Late check-out until 2 p.m.: $20', 'How much does a late check-out cost?', ['$20', '$11', '$2', 'It is free'], x(
      '« Late check-out until 2 p.m.: $20 ».',
      '«Late check-out until 2 p.m.: $20» أي 20 دولارًا.',
      '“Late check-out: $20”.',
      '«Late check-out until 2 p.m.: $20»: 20 $.',
    )),
    listen('a2-tr-s2-l4', 'L3', 2, 'M: I’d like a return ticket to Sousse, please.\nW: For today?\nM: Yes, and I’ll come back on Sunday.', 'What kind of ticket does the man want?', ['A return ticket', 'A one-way ticket', 'A first-class ticket', 'A monthly pass'], x(
      '« A return ticket » = un aller-retour.',
      '«A return ticket» = تذكرة ذهاب وإياب.',
      '“A return ticket”.',
      '«A return ticket» = un billete de ida y vuelta.',
    )),
  ],
  [
    match('a2-tr-s3-m1', ['commute', 'layover', 'amenities', 'delay', 'luggage'], x(
      '« Layover » = escale ; « commute » = trajet domicile-travail.',
      '«Layover» = توقف عبور، و«commute» = التنقل اليومي إلى العمل.',
      '“Layover” and “commute” are frequent travel words.',
      '«Layover» = escala; «commute» = trayecto al trabajo.',
    )),
    v('a2-tr-s3-q1', 2, 'There is a two-hour ___ in Frankfurt before our flight to Tokyo.', ['layover', 'overlay', 'takeover', 'leftover'], x(
      'Arrêt entre deux vols : « layover ».',
      'توقف بين رحلتين: «layover».',
      'A stop between flights: “layover”.',
      'Parada entre dos vuelos: «layover».',
    )),
    g('a2-tr-s3-q2', 2, 'The flight was ___, so we stayed one more night at the hotel.', ['cancelled', 'canceling', 'cancel', 'cancels'], x(
      'Passif au passé : was + participe passé « cancelled ».',
      'المبني للمجهول في الماضي: was + اسم المفعول «cancelled».',
      'Past passive: was + past participle.',
      'Pasiva en pasado: was + participio «cancelled».',
    )),
    v('a2-tr-s3-q3', 2, 'Can I have a ___ seat? I want to see the view.', ['window', 'aisle', 'middle', 'back'], x(
      'Pour voir le paysage, il faut une place côté hublot : « window seat ».',
      'لرؤية المنظر نحتاج مقعدًا بجانب النافذة: «window seat».',
      'To see the view: a “window” seat.',
      'Para ver el paisaje hace falta un asiento de ventanilla: «window seat».',
    )),
    v('a2-tr-s3-q4', 2, 'You need your ___ to travel to another country.', ['passport', 'password', 'passenger', 'passage'], x(
      'Pour voyager à l’étranger : le passeport. « Password » (mot de passe) est un piège.',
      'للسفر إلى الخارج: جواز السفر. و«password» (كلمة المرور) فخ.',
      '“Passport”; “password” is a trap.',
      'Para viajar al extranjero: el pasaporte. «Password» (contraseña) es una trampa.',
    )),
    respond('a2-tr-s3-l1', 2, 'Where is the check-in desk for Tunisair?', ['In Terminal 2, next to the café.', 'At four o’clock.', 'I checked it.'], x(
      '« Where » → un lieu.',
      '«Where» ← مكان.',
      '“Where” → a place.',
      '«Where» → un lugar.',
    )),
    respond('a2-tr-s3-l2', 2, 'Do you have a room for tonight?', ['Yes, we have a double room.', 'It’s a long night.', 'No, I don’t sleep.'], x(
      'Réponse de l’hôtel : oui, avec le type de chambre.',
      'رد الفندق: نعم مع نوع الغرفة.',
      'Yes, with the room type.',
      'Respuesta del hotel: sí, con el tipo de habitación.',
    )),
    listen('a2-tr-s3-l3', 'L4', 2, 'Welcome aboard. Our flight time to Istanbul is two hours and fifteen minutes. Please keep your seat belt fastened while seated.', 'How long is the flight?', ['Two hours and fifteen minutes', 'Two hours', 'Fifteen minutes', 'Two hours and fifty minutes'], x(
      '« Two hours and fifteen minutes ». Attention : fifteen (15) ≠ fifty (50).',
      '«Two hours and fifteen minutes». انتبه: fifteen (15) ≠ fifty (50).',
      'Fifteen ≠ fifty.',
      '«Two hours and fifteen minutes». Cuidado: fifteen (15) ≠ fifty (50).',
    )),
    read('a2-tr-s3-r1', 'R7', 2, 'Car rental — Small car: $35 per day · Large car: $55 per day · GPS: $5 per day · Free cancellation up to 24 hours before pickup.', 'How much does a large car with GPS cost per day?', ['$60', '$55', '$40', '$35'], x(
      'Grande voiture 55 $ + GPS 5 $ = 60 $ par jour.',
      'سيارة كبيرة 55 دولارًا + GPS بـ 5 = 60 دولارًا في اليوم.',
      '$55 + $5 = $60.',
      'Coche grande 55 $ + GPS 5 $ = 60 $ al día.',
    )),
    listen('a2-tr-s3-l4', 'L3', 2, 'W: Our train leaves at 8:10. Let’s take a taxi to the station.\nM: Good idea. I’ll call one now.', 'What will the man do?', ['Call a taxi', 'Buy train tickets', 'Drive to the station', 'Check the timetable'], x(
      '« I’ll call one now » = il va appeler un taxi.',
      '«I’ll call one now» = سيطلب سيارة أجرة.',
      '“I’ll call one now”.',
      '«I’ll call one now» = va a llamar a un taxi.',
    )),
  ],
);
