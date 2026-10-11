import type { Unit } from '../../../types';
import { lesson, listen, respond, unit, x } from '../build';

export const b1Announcements: Unit = unit(
  {
    id: 'b1-announcements',
    emoji: '📢',
    level: 3,
    part: 'L4',
    title: x('Annonces et messages', 'إعلانات ورسائل', 'Announcements and messages', 'Anuncios y mensajes'),
    subtitle: x('Partie 4 : un seul locuteur', 'الجزء 4: متحدث واحد', 'Part 4: one speaker', 'Parte 4: un solo hablante'),
    lesson: lesson(
      x('Identifier le but d’une annonce et le détail demandé.', 'تحديد هدف الإعلان والتفصيل المطلوب.', 'Identify the purpose of a talk and the requested detail.', 'Identificar el objetivo de un anuncio y el detalle que se pide.'),
      [
        x('Le but est donné dans les premières phrases (Welcome to…, I’m calling to…).', 'يُذكر الهدف في الجمل الأولى (Welcome to… وI’m calling to…).', 'The purpose comes first.', 'El objetivo aparece en las primeras frases (Welcome to…, I’m calling to…).'),
        x('Les consignes commencent souvent par « Please » ou « Remember to ».', 'تبدأ التعليمات غالبًا بـ «Please» أو «Remember to».', 'Instructions start with “Please” or “Remember to”.', 'Las instrucciones suelen empezar por «Please» o «Remember to».'),
      ],
      'Attention shoppers: the store will close in fifteen minutes. Please bring your items to the checkout.',
      x('But : prévenir de la fermeture. Consigne : aller en caisse.', 'الهدف: التنبيه للإغلاق. التعليمة: التوجه إلى الصندوق.', 'Purpose: closing soon. Instruction: go to the checkout.', 'Objetivo: avisar del cierre. Instrucción: ir a caja.'),
    ),
  },
  [
    listen('b1-a-l1', 'L4', 3, 'Welcome aboard the City Tour bus. Our first stop will be the old harbor, where you’ll have thirty minutes to walk around. Please be back on the bus by eleven o’clock.', 'What should listeners do by eleven o’clock?', ['Return to the bus', 'Buy a ticket', 'Visit the museum', 'Meet the guide at the harbor'], x(
      '« Please be back on the bus by eleven o’clock » : revenir au bus.',
      '«Please be back on the bus by eleven o’clock»: العودة إلى الحافلة.',
      '“Please be back on the bus by eleven o’clock”.',
      '«Please be back on the bus by eleven o’clock»: volver al autobús.',
    )),
    listen('b1-a-l2', 'L4', 3, 'Good afternoon, shoppers. Because of a power problem, our card machines are not working at the moment. We can only accept cash payments for the next hour.', 'Why can’t customers pay by card?', ['There is a power problem', 'The store is closing', 'The cards have expired', 'The cashier is absent'], x(
      'La cause suit « Because of » : un problème d’électricité.',
      'السبب يأتي بعد «Because of»: عطل كهربائي.',
      'The reason follows “Because of”: a power problem.',
      'La causa aparece después de «Because of»: un problema eléctrico.',
    )),
    listen('b1-a-l3', 'L4', 3, 'Hello, this is Dr. Mansour’s office calling to remind you of your appointment tomorrow at nine thirty. If you need to reschedule, please call us before five p.m. today.', 'What is the purpose of the call?', ['To remind a patient of an appointment', 'To cancel an appointment', 'To ask for a payment', 'To announce a new doctor'], x(
      '« Calling to remind you of your appointment ».',
      'الهدف من المكالمة: «Calling to remind you of your appointment».',
      'It is a reminder.',
      '«Calling to remind you of your appointment»: es un recordatorio.',
    )),
    listen('b1-a-l4', 'L4', 3, 'Good morning, everyone. Before we start, remember that the fire drill is at eleven today. When you hear the alarm, leave by the nearest exit and meet in the parking lot.', 'Where should listeners meet during the drill?', ['In the parking lot', 'At the nearest exit', 'In the meeting room', 'At reception'], x(
      '« Meet in the parking lot ».',
      'مكان اللقاء: «Meet in the parking lot».',
      'They meet in the parking lot.',
      '«Meet in the parking lot»: se reúnen en el aparcamiento.',
    )),
    listen('b1-a-l5', 'L4', 3, 'Thank you for calling Green Bank. Our offices are closed today for the national holiday. For lost or stolen cards, please press one to speak to an agent.', 'Why should a caller press one?', ['To report a lost card', 'To open an account', 'To hear opening hours', 'To leave a message'], x(
      '« For lost or stolen cards, please press one ».',
      'تقول الرسالة: «For lost or stolen cards, please press one».',
      'Press one for lost or stolen cards.',
      '«For lost or stolen cards, please press one».',
    )),
  ],
  [
    listen('b1-a-s2-l1', 'L4', 3, 'Good morning, shoppers. Today is the last day of our summer sale. All shoes and bags are forty percent off until closing time.', 'What is being announced?', ['The last day of a sale', 'A new store opening', 'A change in opening hours', 'A new product line'], x(
      '« The last day of our summer sale » : dernier jour des soldes.',
      '«The last day of our summer sale»: آخر يوم للتخفيضات.',
      'The last day of a sale.',
      '«The last day of our summer sale»: último día de rebajas.',
    )),
    listen('b1-a-s2-l2', 'L4', 3, 'Attention, please. Because of technical problems, the elevators in the east building are not working. Please use the stairs or the elevators in the west building.', 'What are listeners asked to do?', ['Use the stairs or another elevator', 'Leave the building', 'Wait for the technician', 'Call security'], x(
      '« Use the stairs or the elevators in the west building ».',
      'التعليمة: «Use the stairs or the elevators in the west building».',
      'Stairs or another elevator.',
      '«Use the stairs or the elevators in the west building»: escaleras u otro ascensor.',
    )),
    listen('b1-a-s2-l3', 'L4', 3, 'Hello, this is Maria from Speedy Couriers. We tried to deliver your package today, but nobody was home. We will try again tomorrow between nine and twelve.', 'Why is Maria calling?', ['A delivery was not completed', 'A package is damaged', 'A payment is missing', 'An address is wrong'], x(
      '« Nobody was home » : la livraison n’a pas pu être faite.',
      '«Nobody was home»: لم يتم التسليم.',
      'The delivery failed.',
      '«Nobody was home»: no se pudo hacer la entrega.',
    )),
    listen('b1-a-s2-l4', 'L4', 3, 'Welcome to today’s workshop on time management. Before we begin, please write your name on the badge on your table. We will take a break at eleven.', 'What should participants do first?', ['Write their name on a badge', 'Take a break', 'Turn off their phones', 'Sign a list'], x(
      '« Before we begin, please write your name on the badge ».',
      'المطلوب قبل البدء: «Before we begin, please write your name on the badge».',
      'Write their name on the badge.',
      '«Before we begin, please write your name on the badge»: escribir su nombre.',
    )),
    listen('b1-a-s2-l5', 'L4', 3, 'Thank you for calling Atlas Insurance. Our office hours are from eight to six. If you are calling about a car accident, please press one now.', 'Who should press one?', ['People calling about a car accident', 'People asking about office hours', 'New customers', 'People who want to pay a bill'], x(
      '« If you are calling about a car accident, please press one ».',
      'تقول الرسالة: «If you are calling about a car accident, please press one».',
      'Callers about a car accident.',
      '«If you are calling about a car accident, please press one».',
    )),
    listen('b1-a-s2-l6', 'L4', 3, 'Good evening, passengers. We are now arriving at Central Station. This train ends here. Please make sure you take all your belongings.', 'What are passengers reminded to do?', ['Take their belongings', 'Change trains', 'Buy a ticket', 'Stay on the train'], x(
      '« Take all your belongings » = ne rien oublier.',
      '«Take all your belongings» = عدم نسيان الأمتعة.',
      'Take their belongings.',
      '«Take all your belongings» = no olvidar nada.',
    )),
    listen('b1-a-s2-l7', 'L4', 3, 'Hi everyone, it’s Paul from IT. Tonight from ten p.m., we will update the email system. You won’t be able to send emails for about two hours.', 'What will happen tonight?', ['The email system will be updated', 'The office will be closed', 'New computers will be installed', 'Passwords will be changed'], x(
      '« We will update the email system ».',
      '«We will update the email system» أي تحديث نظام البريد.',
      'An email system update.',
      '«We will update the email system»: se actualizará el correo.',
    )),
    listen('b1-a-s2-l8', 'L4', 3, 'Attention, swimmers. For your safety, children under twelve must be with an adult in the pool at all times.', 'Who must be with an adult?', ['Children under twelve', 'All swimmers', 'New members', 'Lifeguards'], x(
      '« Children under twelve must be with an adult ».',
      'القاعدة: «Children under twelve must be with an adult».',
      'Children under twelve.',
      '«Children under twelve must be with an adult»: los menores de doce años.',
    )),
    respond('b1-a-s2-l9', 3, 'Was that train announcement about our platform?', ['Yes, we need to go to platform six.', 'It was very loud.', 'No, I announced it.'], x(
      'Oui + information utile : changer de quai.',
      'نعم + معلومة مفيدة: تغيير الرصيف.',
      'Yes, with what to do.',
      'Sí + información útil: hay que cambiar de andén.',
    )),
    respond('b1-a-s2-l10', 3, 'When will the system be back online?', ['Around midnight, I think.', 'On the computer.', 'Yes, it is online.'], x(
      '« When » → un moment.',
      '«When» ← وقت.',
      '“When” → a time.',
      '«When» → un momento.',
    )),
  ],
  [
    listen('b1-a-s3-l1', 'L4', 3, 'Good afternoon. This is a reminder that the parking lot will be repainted this weekend. Please don’t leave your cars there from Friday evening.', 'What should listeners do?', ['Move their cars before Friday evening', 'Paint the parking lot', 'Park there on Saturday', 'Pay for parking'], x(
      '« Don’t leave your cars there from Friday evening » : déplacer sa voiture avant.',
      '«Don’t leave your cars there from Friday evening»: نقل السيارة قبل ذلك.',
      'Move cars before Friday evening.',
      '«Don’t leave your cars there from Friday evening»: mover el coche antes.',
    )),
    listen('b1-a-s3-l2', 'L4', 3, 'Welcome to the Green Valley Hotel. Breakfast is served on the ground floor from six thirty to ten. The pool is on the roof and is open until nine p.m.', 'Where is the pool?', ['On the roof', 'On the ground floor', 'Next to the restaurant', 'In the garden'], x(
      '« The pool is on the roof ».',
      '«The pool is on the roof» أي على السطح.',
      'On the roof.',
      '«The pool is on the roof»: en la azotea.',
    )),
    listen('b1-a-s3-l3', 'L4', 3, 'Hello, Mr. Diaz. This is Sun Car Rental. Your car is ready, but our office has moved to 40 Harbor Street. Please pick up your car there.', 'What does the speaker say about the office?', ['It has moved', 'It is closed today', 'It is under repair', 'It opens later'], x(
      '« Our office has moved to 40 Harbor Street ».',
      '«Our office has moved to 40 Harbor Street» أي انتقل المكتب.',
      'The office has moved.',
      '«Our office has moved to 40 Harbor Street»: la oficina se ha mudado.',
    )),
    listen('b1-a-s3-l4', 'L4', 3, 'Attention, staff. The cafeteria will serve free breakfast tomorrow to celebrate our company’s twentieth anniversary.', 'Why will breakfast be free?', ['To celebrate an anniversary', 'Because of a holiday', 'To welcome new staff', 'Because the cafeteria is new'], x(
      '« To celebrate our company’s twentieth anniversary ».',
      '«To celebrate our company’s twentieth anniversary» أي ذكرى التأسيس.',
      'An anniversary.',
      '«To celebrate our company’s twentieth anniversary»: un aniversario.',
    )),
    listen('b1-a-s3-l5', 'L4', 3, 'This is a weather alert. Strong winds are expected this afternoon. Drivers should be careful, and outdoor events may be cancelled.', 'What may happen this afternoon?', ['Outdoor events may be cancelled', 'Roads will be closed', 'Schools will close early', 'Trains will stop'], x(
      '« Outdoor events may be cancelled ». « May » = possibilité.',
      '«Outdoor events may be cancelled». و«may» = احتمال.',
      '“May be cancelled”.',
      '«Outdoor events may be cancelled». «May» = posibilidad.',
    )),
    listen('b1-a-s3-l6', 'L4', 3, 'Good morning, everyone. Our guest speaker, Dr. Haddad, is stuck in traffic. She will arrive in about twenty minutes, so we will start with the second session.', 'Why will the program change?', ['The speaker is late', 'The room is not ready', 'The projector is broken', 'Few people have arrived'], x(
      '« Stuck in traffic » : l’intervenante est en retard.',
      '«Stuck in traffic»: المتحدثة متأخرة.',
      'The speaker is late.',
      '«Stuck in traffic»: la ponente llega tarde.',
    )),
    listen('b1-a-s3-l7', 'L4', 3, 'Thank you for shopping at Mega Store. Members of our loyalty program get double points on all purchases this weekend.', 'Who gets double points?', ['Members of the loyalty program', 'All customers', 'New customers', 'Store staff'], x(
      '« Members of our loyalty program get double points ».',
      'الميزة لأعضاء البرنامج: «Members of our loyalty program get double points».',
      'Loyalty program members.',
      '«Members of our loyalty program get double points»: los socios del programa.',
    )),
    listen('b1-a-s3-l8', 'L4', 3, 'Hello, this is the city library. The book you reserved, Business English Today, is now available. You can pick it up within seven days.', 'How long does the listener have to pick up the book?', ['Seven days', 'Two days', 'One month', 'Until tomorrow'], x(
      '« Within seven days ».',
      '«Within seven days» أي خلال سبعة أيام.',
      'Seven days.',
      '«Within seven days»: siete días.',
    )),
    respond('b1-a-s3-l9', 3, 'Did they say why the flight is delayed?', ['Because of the snow in Paris.', 'Two hours, I think.', 'At gate nine.'], x(
      '« Why » → une raison. « Two hours » répondrait à « How long ».',
      '«Why» ← سبب. و«Two hours» تجيب عن «How long».',
      '“Why” → a reason.',
      '«Why» → una razón. «Two hours» respondería a «How long».',
    )),
    respond('b1-a-s3-l10', 3, 'Where should we meet after the tour?', ['At the main entrance.', 'At five o’clock.', 'It was a great tour.'], x(
      '« Where » → un lieu.',
      '«Where» ← مكان.',
      '“Where” → a place.',
      '«Where» → un lugar.',
    )),
  ],
);
