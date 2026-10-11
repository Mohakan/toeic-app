import type { Unit } from '../../../types';
import { g, lesson, match, order, read, unit, v, x } from '../build';

const LUNCH = 'Subject: Team lunch\nHi everyone, to celebrate the end of the project, we are having a team lunch on Friday at 12:30 at Café Lumière. The company will pay. Please tell me by Wednesday if you can come. — Rania';

const HOURS = 'Subject: New opening hours\nDear customers, from 1 September, our store will open at 8 a.m. instead of 9 a.m. from Monday to Saturday. On Sundays, we will stay closed. — Fresh Market';

export const a2Emails: Unit = unit(
  {
    id: 'a2-emails',
    emoji: '✉️',
    level: 2,
    part: 'R7',
    title: x('E-mails simples', 'رسائل إلكترونية بسيطة', 'Simple emails', 'Correos electrónicos sencillos'),
    subtitle: x('Trouver la demande principale', 'إيجاد الطلب الرئيسي', 'Find the main request', 'Encontrar la petición principal'),
    lesson: lesson(
      x('Repérer qui écrit, à qui, et ce qui est demandé.', 'تحديد الكاتب والمرسل إليه والطلب.', 'Spot who writes, to whom, and what is requested.', 'Identificar quién escribe, a quién y qué se pide.'),
      [
        x('L’objet (Subject) et la première phrase résument souvent le but.', 'موضوع الرسالة (Subject) والجملة الأولى يلخّصان الهدف غالبًا.', 'The subject line and first sentence often give the purpose.', 'El asunto (Subject) y la primera frase suelen resumir el objetivo.'),
        x('Les demandes commencent par : Please…, Could you…, I would like…', 'تبدأ الطلبات بـ: Please… وCould you… وI would like…', 'Requests start with: Please…, Could you…, I would like…', 'Las peticiones empiezan por: Please…, Could you…, I would like…'),
      ],
      'Subject: Lunch order — Could you tell me your choice by 11 a.m.?',
      x('Demande : donner son choix avant 11 h.', 'الطلب: إعطاء الاختيار قبل الساعة 11.', 'Request: give your choice by 11 a.m.', 'Petición: dar tu elección antes de las 11 h.'),
    ),
  },
  [
    read('a2-em-r1', 'R7', 2, 'Hi Paula, I cannot attend Thursday’s training because I have a client visit. Could you send me the slides afterwards? Thanks, Omar', 'Why can’t Omar attend the training?', ['He is meeting a client', 'He is on vacation', 'He is sick', 'He changed jobs'], x(
      'La raison suit « because » : une visite client.',
      'السبب يأتي بعد «because»: زيارة عميل.',
      'The reason follows “because”.',
      'La razón aparece después de «because»: una visita a un cliente.',
    )),
    read('a2-em-r2', 'R7', 2, 'Hi Paula, I cannot attend Thursday’s training because I have a client visit. Could you send me the slides afterwards? Thanks, Omar', 'What does Omar ask Paula to do?', ['Send him the slides', 'Change the training date', 'Visit the client', 'Call him on Thursday'], x(
      '« Could you send me the slides » est sa demande.',
      '«Could you send me the slides» هو طلبه.',
      '“Could you send me the slides”.',
      'Su petición es «Could you send me the slides».',
    )),
    read('a2-em-r3', 'R7', 2, 'To all staff: The parking lot behind Building B will be repaved from 5 to 7 May. Please use the visitor lot on Elm Street during this time.', 'What are employees asked to do?', ['Park on Elm Street', 'Avoid Building B', 'Work from home', 'Leave early on 5 May'], x(
      '« Please use the visitor lot on Elm Street ».',
      'الجواب في الرسالة: «Please use the visitor lot on Elm Street».',
      '“Please use the visitor lot on Elm Street”.',
      '«Please use the visitor lot on Elm Street».',
    )),
    read('a2-em-r4', 'R7', 2, 'Dear customer, thank you for your order #4471. Your package was shipped today and should arrive in 3 to 5 business days. You can follow it with tracking number TR-88213.', 'What is the purpose of the email?', ['To confirm a shipment', 'To ask for payment', 'To cancel an order', 'To offer a discount'], x(
      '« Your package was shipped today » : confirmation d’expédition.',
      '«Your package was shipped today»: تأكيد الشحن.',
      'It confirms the shipment.',
      '«Your package was shipped today»: confirma el envío.',
    )),
    read('a2-em-r5', 'R7', 2, 'SALE: 30% off all office chairs until 15 June. Free delivery for orders over $200.', 'What is true about delivery?', ['It is free for orders above $200', 'It is always free', 'It costs 30%', 'It is not available'], x(
      'Condition : livraison gratuite seulement au-delà de 200 $.',
      'الشرط: التوصيل مجاني فقط فوق 200 دولار.',
      'Free only over $200.',
      'Condición: la entrega es gratuita solo a partir de 200 $.',
    )),
    v('a2-em-q1', 2, 'Please find the ___ attached to this email.', ['invoice', 'interview', 'elevator', 'umbrella'], x(
      'On joint un document à un e-mail : « the invoice » (la facture).',
      'نرفق وثيقة بالرسالة: «the invoice» أي الفاتورة.',
      'You attach a document: “the invoice”.',
      'A un correo se adjunta un documento: «the invoice» (la factura).',
    )),
    match('a2-em-m1', ['invoice', 'receipt', 'refund', 'attachment', 'customer'], x(
      '« Invoice » = facture à payer ; « receipt » = reçu après paiement.',
      '«Invoice» = فاتورة للدفع، و«receipt» = وصل بعد الدفع.',
      '“Invoice” before paying; “receipt” after.',
      '«Invoice» = factura que hay que pagar; «receipt» = recibo tras el pago.',
    )),
  ],
  [
    read('a2-em-s2-r1', 'R7', 2, LUNCH, 'What is the purpose of the email?', ['To invite the team to lunch', 'To announce the end of a contract', 'To change a meeting time', 'To ask for a restaurant suggestion'], x(
      'Objet « Team lunch » et invitation au déjeuner d’équipe.',
      'الموضوع «Team lunch» ودعوة إلى غداء الفريق.',
      'It invites the team to lunch.',
      'Asunto «Team lunch» e invitación a la comida de equipo.',
    )),
    read('a2-em-s2-r2', 'R7', 2, LUNCH, 'What should employees do by Wednesday?', ['Reply to Rania', 'Pay for the lunch', 'Book a table', 'Finish the project'], x(
      '« Please tell me by Wednesday » : répondre à Rania. La société paie le repas.',
      '«Please tell me by Wednesday»: الرد على رانيا. والشركة تدفع ثمن الغداء.',
      'Tell Rania by Wednesday; the company pays.',
      '«Please tell me by Wednesday»: responder a Rania. La empresa paga la comida.',
    )),
    read('a2-em-s2-r3', 'R7', 2, 'Dear Mr. Boateng, your order #5522 (two office chairs) is delayed. It will arrive on 14 May instead of 10 May. We are sorry for the delay. — Comfort Furniture', 'What is the problem?', ['The delivery is late', 'The chairs are broken', 'The order is wrong', 'The price has changed'], x(
      '« Is delayed… 14 May instead of 10 May » : livraison en retard.',
      '«Is delayed… 14 May instead of 10 May»: تأخر التسليم.',
      'The delivery is delayed.',
      '«Is delayed… 14 May instead of 10 May»: la entrega se retrasa.',
    )),
    read('a2-em-s2-r4', 'R7', 2, 'Hi Leo, I left the contract on your desk. Please sign it and give it to Ms. Hassan before 4 p.m. Thanks, Dina', 'Who should receive the signed contract?', ['Ms. Hassan', 'Leo', 'Dina', 'A client'], x(
      '« Give it to Ms. Hassan ».',
      '«Give it to Ms. Hassan» أي تسليمه إلى السيدة حسن.',
      '“Give it to Ms. Hassan”.',
      '«Give it to Ms. Hassan»: entregárselo a la Sra. Hassan.',
    )),
    read('a2-em-s2-r5', 'R7', 2, 'Subject: Parking. From Monday, all visitors must park in the lot behind Building C. The front parking area is for employees only.', 'Where should visitors park?', ['Behind Building C', 'In front of the building', 'On the street', 'In the employee area'], x(
      '« Visitors must park in the lot behind Building C ».',
      'الجواب في النص: «Visitors must park in the lot behind Building C».',
      '“Behind Building C”.',
      '«Visitors must park in the lot behind Building C»: detrás del edificio C.',
    )),
    read('a2-em-s2-r6', 'R7', 2, 'Hello, I would like to book a meeting room for 12 people on 3 July, from 9 to 11 a.m. Do you have a projector? Best, Sami Ben Amor', 'What does Sami ask about?', ['A projector', 'The price', 'Lunch', 'Parking'], x(
      'Sa seule question : « Do you have a projector? ».',
      'سؤاله الوحيد: «Do you have a projector?».',
      'He asks about a projector.',
      'Su única pregunta: «Do you have a projector?».',
    )),
    g('a2-em-s2-q1', 2, 'Thank you for ___ email.', ['your', 'you', 'yours', 'you’re'], x(
      'Devant un nom (email) → adjectif possessif « your ».',
      'قبل الاسم (email) ← «your».',
      'Before a noun → “your”.',
      'Delante de un sustantivo (email) → posesivo «your».',
    )),
    g('a2-em-s2-q2', 2, 'Please find the price list ___ to this email.', ['attached', 'attaching', 'attach', 'attaches'], x(
      'Formule fixe : « Please find … attached » (ci-joint), avec le participe passé.',
      'عبارة ثابتة: «Please find … attached» (مرفقًا) باسم المفعول.',
      'Fixed phrase: “find … attached”.',
      'Fórmula fija: «Please find … attached» (adjunto), con el participio.',
    )),
    v('a2-em-s2-q3', 2, 'I am writing to ___ my reservation for 12 June.', ['confirm', 'confuse', 'contain', 'consider'], x(
      '« Confirm a reservation » = confirmer une réservation.',
      '«Confirm a reservation» = تأكيد حجز.',
      '“Confirm a reservation”.',
      '«Confirm a reservation» = confirmar una reserva.',
    )),
    order('a2-em-s2-o1', 'Please reply to this email by Friday', x('« reply to » + destinataire.', '«reply to» + المرسل إليه.', '“reply to” + recipient.', '«reply to» + destinatario.'), x(
      '« Reply to » + quelque chose, puis la date limite (by Friday).',
      '«Reply to» + شيء، ثم الموعد النهائي (by Friday).',
      '“Reply to” + object, then the deadline.',
      '«Reply to» + algo, y luego la fecha límite (by Friday).',
    )),
  ],
  [
    read('a2-em-s3-r1', 'R7', 2, HOURS, 'What is changing?', ['The opening time', 'The closing time', 'The address', 'The prices'], x(
      '« Will open at 8 a.m. instead of 9 a.m. » : l’heure d’ouverture change.',
      '«Will open at 8 a.m. instead of 9 a.m.»: يتغير وقت الافتتاح.',
      'The opening time changes.',
      '«Will open at 8 a.m. instead of 9 a.m.»: cambia la hora de apertura.',
    )),
    read('a2-em-s3-r2', 'R7', 2, HOURS, 'When is the store closed?', ['On Sundays', 'On Saturdays', 'Every morning', 'In September'], x(
      '« On Sundays, we will stay closed ».',
      '«On Sundays, we will stay closed» أي مغلق يوم الأحد.',
      '“On Sundays, we will stay closed”.',
      '«On Sundays, we will stay closed»: cerrado los domingos.',
    )),
    read('a2-em-s3-r3', 'R7', 2, 'Hi Ahmed, the printer on our floor is broken again. I called IT, and a technician will come at 3 p.m. Until then, please use the printer in Room 210. — Clara', 'When will the technician come?', ['At 3 p.m.', 'At 2:10 p.m.', 'Tomorrow', 'This morning'], x(
      '« A technician will come at 3 p.m. ». 210 est un numéro de salle.',
      '«A technician will come at 3 p.m.». أما 210 فرقم قاعة.',
      '“At 3 p.m.”; 210 is a room.',
      '«A technician will come at 3 p.m.». 210 es un número de sala.',
    )),
    read('a2-em-s3-r4', 'R7', 2, 'Dear Ms. Wong, thank you for your application. Unfortunately, the position is no longer available. We will keep your résumé for future jobs. — HR Department', 'What does the HR department say?', ['The job is no longer open', 'Ms. Wong got the job', 'She must send a new résumé', 'Her interview is on Monday'], x(
      '« The position is no longer available » = le poste n’est plus disponible.',
      '«The position is no longer available» = المنصب لم يعد متاحًا.',
      'The job is no longer available.',
      '«The position is no longer available» = el puesto ya no está disponible.',
    )),
    read('a2-em-s3-r5', 'R7', 2, 'Reminder: Please submit your travel expenses by the 25th of each month. Late forms will be paid the following month. — Accounting', 'What happens to late forms?', ['They are paid the next month', 'They are not paid', 'They are sent back', 'They are paid twice'], x(
      '« Late forms will be paid the following month ».',
      '«Late forms will be paid the following month» أي في الشهر التالي.',
      'Paid the following month.',
      '«Late forms will be paid the following month»: se pagan el mes siguiente.',
    )),
    read('a2-em-s3-r6', 'R7', 2, 'Hi Yuki, can you send me the photos from the trade fair? I need them for the newsletter. Thanks! — Ben', 'Why does Ben need the photos?', ['For the newsletter', 'For a presentation', 'For the website', 'For a client'], x(
      '« I need them for the newsletter ».',
      '«I need them for the newsletter» أي للنشرة.',
      '“For the newsletter”.',
      '«I need them for the newsletter»: para el boletín.',
    )),
    g('a2-em-s3-q1', 2, 'I look forward ___ hearing from you.', ['to', 'for', 'at', 'of'], x(
      'Formule de fin d’e-mail : « look forward to » + -ing.',
      'عبارة ختام: «look forward to» + -ing.',
      '“Look forward to” + -ing.',
      'Fórmula de cierre: «look forward to» + -ing.',
    )),
    v('a2-em-s3-q2', 2, 'Could you ___ me the file again? I can’t open it.', ['send', 'sell', 'spend', 'sign'], x(
      '« Send me the file again » = me renvoyer le fichier.',
      '«Send me the file again» = أعد إرسال الملف.',
      '“Send” the file again.',
      '«Send me the file again» = reenviarme el archivo.',
    )),
    v('a2-em-s3-q3', 2, 'Best ___, Maria Lopez', ['regards', 'regrets', 'records', 'rewards'], x(
      'Formule de politesse : « Best regards » (cordialement).',
      'عبارة مجاملة: «Best regards» (مع التحية).',
      'Closing: “Best regards”.',
      'Fórmula de despedida: «Best regards» (un saludo cordial).',
    )),
    order('a2-em-s3-o1', 'I am writing to ask about your prices', x('Commence par « I am writing ».', 'ابدأ بـ «I am writing».', 'Start with “I am writing”.', 'Empieza por «I am writing».'), x(
      'Début d’e-mail : « I am writing to » + verbe (le but).',
      'بداية رسالة: «I am writing to» + فعل (الغرض).',
      'Email opening: “I am writing to” + purpose.',
      'Inicio de correo: «I am writing to» + verbo (el objetivo).',
    )),
  ],
);
