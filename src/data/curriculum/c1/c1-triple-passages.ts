import type { Unit } from '../../../types';
import { lesson, match, read, unit, x } from '../build';

const FORUM = [
  'Mediterranean Logistics Forum — Hammamet, 14–15 October\nDay 1: Keynote by Dr. Amel Zribi on port automation; afternoon workshops.\nDay 2: Panel on green shipping; networking lunch.\nEarly registration (before 1 September): 450 dinars. Standard: 600 dinars. Members of the Tunisian Logistics Association receive a further 10% off either rate. Rooms at the venue hotel are available at a special rate until 15 September.',
  'REGISTRATION FORM\nName: Walid Chebbi\nCompany: Carthage Freight\nAssociation member: Yes\nDays attending: Day 2 only\nDate submitted: 28 August\nHotel room required: No',
  'From: Walid Chebbi\nTo: Forum organizers\nDate: 20 September\nSubject: Change to my registration\nHello, my plans have changed and I will now be able to attend both days. Could you update my registration? I would also like to book a room for the night of 14 October, if any are still available.\nBest regards,\nWalid Chebbi',
].join('\n\n');

const VACANCY = [
  'INTERNAL VACANCY — Regional Sales Manager (South)\nBased in Sfax. Responsibilities include managing a team of eight and developing new accounts in Gabès and Medenine. Candidates must have at least five years of sales experience, including two in a management role. Applications close on 10 May.',
  'From: Imen Saidi\nTo: HR Department\nDate: 6 May\nI would like to apply for the Regional Sales Manager position. I have worked in our Tunis sales team for six years and have led the corporate accounts unit for the past three. Although I currently live in Tunis, I would be happy to relocate. Please note that I will be on leave from 12 to 19 May.',
  'INTERVIEW SCHEDULE — Regional Sales Manager\n13 May, 10:00 — Mehdi Trabelsi\n15 May, 14:00 — Imen Saidi\n16 May, 9:30 — Sonia Gharbi\n21 May, 11:00 — Ramzi Ayed',
].join('\n\n');

const WARRANTY = [
  'WARRANTY TERMS — Zéphyr air conditioners\nAll units are covered for two years from the date of purchase. Repairs are free of charge, provided the unit was installed by an approved technician. Damage caused by incorrect installation is not covered. To make a claim, customers must present the original receipt.',
  'From: Leila Mzoughi\nTo: Zéphyr Customer Service\nDate: 3 July\nI bought a Zéphyr AC-90 from Electro Plus on 12 August last year. It was installed by the store’s own technician, who is on your approved list. Since last week, the unit has been making a loud noise and no longer cools the room. I have attached a copy of my receipt.',
  'From: Zéphyr Customer Service\nTo: Leila Mzoughi\nDate: 4 July\nDear Ms. Mzoughi,\nThank you for your message. Your unit is still under warranty, so the repair will be free of charge. A technician will visit you on 9 July between 8 a.m. and noon. Please note that he will need to see the original receipt during the visit.',
].join('\n\n');

const OFFICE_MOVE = [
  'MEMO — Office move\nOn the weekend of 22–23 March, the finance and legal departments will move to the new building on Avenue Habib Bourguiba. Staff should pack their personal items in the boxes provided by Thursday 20 March. Computers will be moved by the IT team; please do not disconnect them yourselves.',
  'NEW BUILDING — FLOOR ALLOCATION\nGround floor: Reception, meeting rooms\nFloor 1: Finance\nFloor 2: Legal\nFloor 3: Available for future use',
  'From: Rym Ferjani (Legal)\nTo: Facilities\nDate: 18 March\nHi, my team handles a lot of confidential client files, and the archive room on our new floor looks quite small. Would it be possible to use part of the empty floor above us for storage? Also, I will be on a business trip on the day the boxes must be ready. Could mine be packed on Friday instead?',
].join('\n\n');

const CATERING = [
  'REQUEST FOR PROPOSALS — Staff cafeteria\nThe Lac Business Center is seeking a catering company to run its staff cafeteria from 1 September. Proposals must include a daily menu with at least one vegetarian dish, a price per meal not exceeding 12 dinars, and proof of food safety certification. Deadline: 30 June.',
  'PROPOSALS RECEIVED\nSaveurs du Sahel: 11 dinars per meal; two vegetarian dishes daily; certificate attached.\nChef Express: 9.5 dinars per meal; vegetarian dish on request only; certificate attached.\nGreen Table: 12.5 dinars per meal; fully vegetarian menu; certificate pending.',
  'From: Hatem Ouali, Facilities Manager\nTo: Management Committee\nDate: 3 July\nAfter reviewing the proposals, I recommend that we accept the only one that meets all of our requirements. Although it is not the cheapest, the sample meals we tasted were excellent. I suggest a one-year contract with an option to renew.',
].join('\n\n');

const SHOWROOM = [
  'You are invited to the opening of our new showroom\nThursday 5 June, 6:30–9:00 p.m. — Nour Furniture, 12 Rue de Marseille, Tunis\nA short presentation of our autumn collection will begin at 7:00 p.m. Guests who confirm by 30 May will receive a 15% voucher valid on any purchase made during the evening. RSVP: events@nourfurniture.tn',
  'RSVP LIST — updated 31 May\nAhmed Bouzid — confirmed 27 May\nSarra Jelassi — confirmed 29 May\nNabil Hamdi — confirmed 31 May\nOlfa Rekik — declined',
  'From: Nabil Hamdi\nTo: events@nourfurniture.tn\nDate: 4 June\nThank you for the invitation. Unfortunately, I will only be able to arrive at around 7:30. Will I still be able to see the new collection? I was also hoping to buy a dining table that evening.',
].join('\n\n');

export const c1TriplePassages: Unit = unit(
  {
    id: 'c1-triple-passages',
    emoji: '🗂️',
    level: 5,
    part: 'R7',
    title: x('Triples documents', 'الوثائق الثلاثية', 'Triple passages', 'Documentos triples'),
    subtitle: x('Partie 7 : croiser trois textes', 'الجزء 7: الربط بين ثلاثة نصوص', 'Part 7: connect three texts', 'Parte 7: cruzar tres textos'),
    lesson: lesson(
      x('Relier dates, prix et conditions répartis sur trois documents.', 'ربط التواريخ والأسعار والشروط الموزعة على ثلاث وثائق.', 'Connect dates, prices and conditions across three documents.', 'Relacionar fechas, precios y condiciones repartidos en tres documentos.'),
      [
        x('Lis d’abord les questions : beaucoup demandent de comparer une règle (doc 1) et un cas réel (doc 2 ou 3).', 'اقرأ الأسئلة أولًا: كثير منها يقارن قاعدة (الوثيقة 1) بحالة واقعية (الوثيقة 2 أو 3).', 'Rule in one text, case in another.', 'Lee primero las preguntas: muchas comparan una regla (doc. 1) con un caso real (doc. 2 o 3).'),
        x('Note les dates limites et compare-les aux dates des e-mails et formulaires.', 'سجّل المواعيد النهائية وقارنها بتواريخ الرسائل والاستمارات.', 'Compare deadlines with dates.', 'Anota las fechas límite y compáralas con las fechas de los correos y formularios.'),
        x('Les questions « What is suggested » portent souvent sur une conséquence non écrite (remise perdue, offre expirée).', 'أسئلة «What is suggested» تتعلق غالبًا بنتيجة غير مكتوبة (خصم ضائع، عرض منتهٍ).', '“Suggested” = an unstated consequence.', 'Las preguntas «What is suggested» suelen tratar una consecuencia no escrita (descuento perdido, oferta caducada).'),
      ],
      'Offer: special hotel rate until 15 September. E-mail dated 20 September: “I’d like to book a room.”',
      x('La réservation arrive après la fin de l’offre.', 'الحجز يأتي بعد انتهاء العرض.', 'The request comes after the offer ends.', 'La reserva llega después de que acabe la oferta.'),
    ),
  },
  [
    read('c1-tp-r1', 'R7', 5, FORUM, 'What is indicated about the forum?', ['It includes a session on environmentally friendly transport', 'It takes place in Tunis', 'It lasts three days', 'It is free for association members'], x(
      '« Panel on green shipping » = transport écologique.',
      '«Panel on green shipping» = نقل صديق للبيئة.',
      'Green shipping panel.',
      '«Panel on green shipping» = transporte ecológico.',
    )),
    read('c1-tp-r2', 'R7', 5, FORUM, 'Which rate is Mr. Chebbi most likely entitled to?', ['The early rate with a member discount', 'The standard rate', 'The standard rate with a member discount', 'A free pass'], x(
      'Formulaire du 28 août (avant le 1er septembre) + membre de l’association → tarif réduit − 10 %.',
      'استمارة 28 أوت (قبل 1 سبتمبر) + عضو في الجمعية ← التعريفة المبكرة − 10%.',
      'Early rate (28 August) + member discount.',
      'Formulario del 28 de agosto (antes del 1 de septiembre) + socio → tarifa anticipada − 10 %.',
    )),
    read('c1-tp-r3', 'R7', 5, FORUM, 'Which session did Mr. Chebbi originally plan to miss?', ['Dr. Zribi’s keynote', 'The panel on green shipping', 'The networking lunch', 'The closing dinner'], x(
      '« Day 2 only » → il manquait le jour 1, donc la conférence du Dr Zribi.',
      '«Day 2 only» ← كان سيغيب عن اليوم الأول، أي محاضرة د. الزريبي.',
      'Day 2 only, so he missed Day 1.',
      '«Day 2 only» → se perdía el día 1, es decir, la conferencia de la Dra. Zribi.',
    )),
    read('c1-tp-r4', 'R7', 5, FORUM, 'Why might Mr. Chebbi not get the special hotel rate?', ['He made his request after the offer ended', 'He is not an association member', 'He wants too many nights', 'He is attending only one day'], x(
      'Offre valable jusqu’au 15 septembre ; e-mail du 20 septembre.',
      'العرض صالح حتى 15 سبتمبر والرسالة بتاريخ 20 سبتمبر.',
      'Offer ended 15 September.',
      'Oferta válida hasta el 15 de septiembre; correo del 20 de septiembre.',
    )),
    read('c1-tp-r5', 'R7', 5, FORUM, 'In the e-mail, the word “update” is closest in meaning to', ['modify', 'cancel', 'confirm', 'upgrade'], x(
      '« Update my registration » = modifier mon inscription.',
      '«Update my registration» = تعديل التسجيل.',
      '“Update” = modify.',
      '«Update my registration» = modificar mi inscripción.',
    )),
    read('c1-tp-r6', 'R7', 5, VACANCY, 'What is a requirement for the position?', ['Experience as a manager', 'Living in Gabès', 'A degree in economics', 'Knowledge of Italian'], x(
      '« Including two in a management role ».',
      '«Including two in a management role»: خبرة في الإدارة.',
      'Two years in management.',
      '«Including two in a management role»: experiencia como responsable.',
    )),
    read('c1-tp-r7', 'R7', 5, VACANCY, 'What is suggested about Ms. Saidi?', ['She meets the experience requirements', 'She already manages eight people', 'She currently lives in Sfax', 'She applied after the deadline'], x(
      'Six ans de vente, dont trois à la tête d’une unité : plus que le minimum.',
      'ست سنوات في المبيعات منها ثلاث في التسيير: أكثر من المطلوب.',
      'Six years, three as a leader.',
      'Seis años en ventas, tres al frente de una unidad: más que el mínimo.',
    )),
    read('c1-tp-r8', 'R7', 5, VACANCY, 'What problem does the schedule show?', ['Ms. Saidi’s interview is during her leave', 'Two interviews are at the same time', 'Ms. Saidi is not on the list', 'All interviews are after her return'], x(
      'Entretien le 15 mai ; congé du 12 au 19 mai.',
      'المقابلة يوم 15 ماي والعطلة من 12 إلى 19 ماي.',
      '15 May falls in her leave.',
      'Entrevista el 15 de mayo; permiso del 12 al 19 de mayo.',
    )),
    read('c1-tp-r9', 'R7', 5, VACANCY, 'Who is scheduled for the latest interview?', ['Ramzi Ayed', 'Sonia Gharbi', 'Mehdi Trabelsi', 'Imen Saidi'], x(
      '21 mai, 11 h → Ramzi Ayed.',
      '21 ماي على الساعة 11 ← رمزي العايد.',
      '21 May = Ramzi Ayed.',
      '21 de mayo, 11:00 → Ramzi Ayed.',
    )),
    read('c1-tp-r10', 'R7', 5, VACANCY, 'What does Ms. Saidi say about relocating?', ['She is willing to move', 'She refuses to move', 'She has already moved', 'She prefers to work remotely'], x(
      '« I would be happy to relocate ».',
      '«I would be happy to relocate»: مستعدة للانتقال.',
      'Happy to relocate.',
      '«I would be happy to relocate»: dispuesta a mudarse.',
    )),
    match('c1-triple-passages-w1', ['chauffeur', 'travel-policy', 'cancellation-fee', 'fuel-surcharge', 'en-route'], x(
      'Mots C1 sur les voyages d’affaires : relis l’exemple de chaque mot dans l’onglet Mots.',
      'مفردات C1 حول سفر العمل: راجع مثال كل كلمة في قسم الكلمات.',
      'C1 words about business travel: review each example in the Words tab.',
      'Palabras C1 sobre los viajes de negocios: repasa el ejemplo de cada una en la pestaña Palabras.',
    )),
  ],
  [
    read('c1-tp-s2-r1', 'R7', 5, WARRANTY, 'How long does the warranty last?', ['Two years', 'One year', 'Six months', 'Five years'], x(
      '« Covered for two years from the date of purchase ».',
      '«Covered for two years»: سنتان.',
      'It lasts two years.',
      '«Covered for two years»: dos años.',
    )),
    read('c1-tp-s2-r2', 'R7', 5, WARRANTY, 'Why is Ms. Mzoughi’s repair covered?', ['The unit is under two years old and was properly installed', 'She bought an extended warranty', 'The damage was caused by a technician', 'She bought the unit online'], x(
      'Croiser : achat en août dernier (< 2 ans) + technicien agréé (condition du doc 1).',
      'الربط: الشراء في أوت الماضي (أقل من سنتين) + تقني معتمد (شرط الوثيقة 1).',
      'Under two years + approved installer.',
      'Cruzar: compra en agosto pasado (< 2 años) + técnico autorizado (condición del doc. 1).',
    )),
    read('c1-tp-s2-r3', 'R7', 5, WARRANTY, 'What problem does Ms. Mzoughi report?', ['The unit is noisy and does not cool', 'The unit was delivered late', 'The installation was incorrect', 'The receipt was lost'], x(
      '« Loud noise and no longer cools the room ».',
      '«Loud noise and no longer cools»: ضجيج وعدم تبريد.',
      'Noise and no cooling.',
      '«Loud noise and no longer cools»: ruido y no enfría.',
    )),
    read('c1-tp-s2-r4', 'R7', 5, WARRANTY, 'What must Ms. Mzoughi do on 9 July?', ['Show the original receipt', 'Pay for the parts', 'Take the unit to the store', 'Call Electro Plus'], x(
      '« He will need to see the original receipt during the visit ».',
      '«He will need to see the original receipt»: إظهار الوصل الأصلي.',
      'Show the original receipt.',
      '«He will need to see the original receipt»: mostrar el recibo original.',
    )),
    read('c1-tp-s2-r5', 'R7', 5, WARRANTY, 'What is implied about the copy she sent?', ['It is not enough on its own', 'It shows the wrong date', 'It was never received', 'It replaces the original'], x(
      'Elle a envoyé une copie, mais l’original est exigé (doc 1 et doc 3).',
      'أرسلت نسخة، لكن الأصل مطلوب (الوثيقتان 1 و3).',
      'The original is still required.',
      'Envió una copia, pero se exige el original (doc. 1 y doc. 3).',
    )),
    read('c1-tp-s2-r6', 'R7', 5, OFFICE_MOVE, 'By what date should staff normally pack their items?', ['20 March', '18 March', '22 March', '23 March'], x(
      '« By Thursday 20 March ».',
      '«By Thursday 20 March»: قبل 20 مارس.',
      'By 20 March.',
      '«By Thursday 20 March»: antes del 20 de marzo.',
    )),
    read('c1-tp-s2-r7', 'R7', 5, OFFICE_MOVE, 'What are staff told not to do?', ['Disconnect their computers', 'Pack personal items', 'Use the boxes provided', 'Work on the weekend'], x(
      '« Please do not disconnect them yourselves ».',
      '«Please do not disconnect them»: عدم فصل الحواسيب.',
      'Do not disconnect computers.',
      '«Please do not disconnect them»: no desconectar los ordenadores.',
    )),
    read('c1-tp-s2-r8', 'R7', 5, OFFICE_MOVE, 'Which floor does Ms. Ferjani want to use for storage?', ['Floor 3', 'Floor 2', 'Floor 1', 'The ground floor'], x(
      'Legal = étage 2 ; l’étage vide au-dessus = étage 3.',
      'القانونية = الطابق 2، والطابق الفارغ فوقه = الطابق 3.',
      'The empty floor above Legal.',
      'Legal = planta 2; la planta vacía de arriba = planta 3.',
    )),
    read('c1-tp-s2-r9', 'R7', 5, OFFICE_MOVE, 'Why does Ms. Ferjani want extra space?', ['To store confidential documents', 'To hold client meetings', 'To expand her team', 'To set up a cafeteria'], x(
      '« Confidential client files… use part of the empty floor for storage ».',
      '«Confidential client files… for storage»: لتخزين ملفات سرية.',
      'Storage for confidential files.',
      '«Confidential client files… for storage»: para guardar expedientes confidenciales.',
    )),
    read('c1-tp-s2-r10', 'R7', 5, OFFICE_MOVE, 'What is suggested about Ms. Ferjani’s business trip?', ['It is on the packing deadline', 'It is on the moving weekend', 'It was cancelled', 'It is in the new building'], x(
      'Elle part « le jour où les cartons doivent être prêts » = le 20 mars (doc 1).',
      'تسافر «يوم تجهيز الصناديق» = 20 مارس (الوثيقة 1).',
      'On 20 March, the deadline.',
      'Se va «el día en que las cajas deben estar listas» = el 20 de marzo (doc. 1).',
    )),
    match('c1-triple-passages-w2', ['gastronomy', 'delicacy', 'gourmet', 'artisanal', 'tasting-menu'], x(
      'Mots C1 sur la restauration : relis l’exemple de chaque mot dans l’onglet Mots.',
      'مفردات C1 حول المطاعم: راجع مثال كل كلمة في قسم الكلمات.',
      'C1 words about dining: review each example in the Words tab.',
      'Palabras C1 sobre la restauración: repasa el ejemplo de cada una en la pestaña Palabras.',
    )),
  ],
  [
    read('c1-tp-s3-r1', 'R7', 5, CATERING, 'What is the purpose of the first document?', ['To find a company to run a cafeteria', 'To advertise a new restaurant', 'To announce new menu prices', 'To hire a facilities manager'], x(
      '« Seeking a catering company to run its staff cafeteria ».',
      '«Seeking a catering company»: البحث عن شركة إطعام.',
      'Looking for a caterer.',
      '«Seeking a catering company»: busca una empresa de catering.',
    )),
    read('c1-tp-s3-r2', 'R7', 5, CATERING, 'Why does Chef Express not meet the requirements?', ['It does not guarantee a daily vegetarian dish', 'Its price is too high', 'It has no certificate', 'It applied after the deadline'], x(
      'Exigence : au moins un plat végétarien par jour ; Chef Express : « on request only ».',
      'المطلوب طبق نباتي يوميًا، وChef Express: «on request only».',
      'Vegetarian only on request.',
      'Requisito: al menos un plato vegetariano al día; Chef Express: «on request only».',
    )),
    read('c1-tp-s3-r3', 'R7', 5, CATERING, 'Which company does Mr. Ouali most likely recommend?', ['Saveurs du Sahel', 'Chef Express', 'Green Table', 'Lac Business Center'], x(
      'Seule offre conforme (prix ≤ 12, végétarien chaque jour, certificat), et pas la moins chère.',
      'العرض الوحيد المطابق (سعر ≤ 12، طبق نباتي يوميًا، شهادة) وليس الأرخص.',
      'The only compliant, not cheapest.',
      'La única oferta que cumple (precio ≤ 12, vegetariano a diario, certificado), y no es la más barata.',
    )),
    read('c1-tp-s3-r4', 'R7', 5, CATERING, 'Why was Green Table’s proposal unsuitable?', ['Its price is too high and its certificate is missing', 'It arrived after the deadline', 'It offers no vegetarian food', 'Its sample meals were poor'], x(
      '12,5 dinars > 12, et certificat « pending ».',
      '12.5 دينارًا > 12 والشهادة «pending».',
      'Over 12 dinars, no certificate yet.',
      '12,5 dinares > 12, y certificado «pending».',
    )),
    read('c1-tp-s3-r5', 'R7', 5, CATERING, 'What does Mr. Ouali suggest about the contract?', ['It should be for one year and renewable', 'It should start on 30 June', 'It should be signed with two companies', 'It should be paid in advance'], x(
      '« A one-year contract with an option to renew ».',
      '«A one-year contract with an option to renew»: سنة قابلة للتجديد.',
      'One year, renewable.',
      '«A one-year contract with an option to renew»: un año renovable.',
    )),
    read('c1-tp-s3-r6', 'R7', 5, SHOWROOM, 'What is the event?', ['The opening of a showroom', 'A furniture auction', 'A company anniversary', 'A design competition'], x(
      '« The opening of our new showroom ».',
      '«The opening of our new showroom»: افتتاح صالة عرض.',
      'A showroom opening.',
      '«The opening of our new showroom»: la inauguración de una sala de exposición.',
    )),
    read('c1-tp-s3-r7', 'R7', 5, SHOWROOM, 'What will happen at 7:00 p.m.?', ['A collection will be presented', 'Doors will open', 'Vouchers will be handed out', 'The showroom will close'], x(
      '« A short presentation of our autumn collection will begin at 7:00 ».',
      '«A short presentation… at 7:00»: تقديم المجموعة.',
      'The collection presentation.',
      '«A short presentation… at 7:00»: presentación de la colección.',
    )),
    read('c1-tp-s3-r8', 'R7', 5, SHOWROOM, 'How many guests confirmed in time to receive the voucher?', ['Two', 'Three', 'Four', 'One'], x(
      'Avant le 30 mai : Bouzid (27) et Jelassi (29). Hamdi a confirmé le 31.',
      'قبل 30 ماي: بوزيد (27) والجلاصي (29)، أما الحامدي فأكّد يوم 31.',
      'Only Bouzid and Jelassi.',
      'Antes del 30 de mayo: Bouzid (27) y Jelassi (29). Hamdi confirmó el 31.',
    )),
    read('c1-tp-s3-r9', 'R7', 5, SHOWROOM, 'Why is Mr. Hamdi concerned?', ['He will miss the presentation', 'He cannot find the address', 'He has lost his invitation', 'He wants to bring a guest'], x(
      'Arrivée vers 19 h 30, présentation à 19 h.',
      'يصل حوالي 19:30 والتقديم على الساعة 19:00.',
      'He arrives after 7:00.',
      'Llega hacia las 19:30 y la presentación es a las 19:00.',
    )),
    read('c1-tp-s3-r10', 'R7', 5, SHOWROOM, 'What is suggested about Mr. Hamdi’s planned purchase?', ['It will not be discounted with the voucher', 'It must be made online', 'It will be delivered on 5 June', 'It is already paid for'], x(
      'Confirmation du 31 mai, après la date limite : pas de bon de 15 %.',
      'تأكيد يوم 31 ماي بعد الموعد: لا قسيمة 15%.',
      'He confirmed too late for the voucher.',
      'Confirmó el 31 de mayo, tras la fecha límite: sin vale del 15 %.',
    )),
    match('c1-triple-passages-w3', ['rental-yield', 'title-deed', 'tenancy', 'mixed-use', 'appreciate'], x(
      'Mots C1 sur l’immobilier : relis l’exemple de chaque mot dans l’onglet Mots.',
      'مفردات C1 حول العقارات: راجع مثال كل كلمة في قسم الكلمات.',
      'C1 words about property: review each example in the Words tab.',
      'Palabras C1 sobre el sector inmobiliario: repasa el ejemplo de cada una en la pestaña Palabras.',
    )),
  ],
);
