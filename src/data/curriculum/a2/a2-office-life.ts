import type { Unit } from '../../../types';
import { lesson, match, respond, unit, v, x } from '../build';

export const a2OfficeLife: Unit = unit(
  {
    id: 'a2-office-life',
    emoji: '🗂️',
    level: 2,
    part: 'R5',
    title: x('La vie au bureau', 'الحياة في المكتب', 'Office life', 'La vida en la oficina'),
    subtitle: x('Tâches, services et outils', 'المهام والأقسام والأدوات', 'Tasks, departments and tools', 'Tareas, departamentos y herramientas'),
    lesson: lesson(
      x('Connaître les mots des tâches de bureau les plus fréquentes au TOEIC.', 'معرفة كلمات المهام المكتبية الأكثر تداولًا في التوييك.', 'Know the words for the most frequent office tasks on the TOEIC.', 'Conocer las palabras de las tareas de oficina más frecuentes en el TOEIC.'),
      [
        x('Verbes + noms qui vont ensemble : schedule a meeting, attend a meeting, send an invoice, order supplies, book a room.', 'أفعال وأسماء متلازمة: schedule a meeting وattend a meeting وsend an invoice وorder supplies وbook a room.', 'Verb + noun pairs: schedule a meeting, order supplies, book a room.', 'Verbos y sustantivos que van juntos: schedule a meeting, attend a meeting, send an invoice, order supplies, book a room.'),
        x('Services : accounting (comptabilité), human resources, marketing, IT, sales.', 'الأقسام: accounting (المحاسبة) وhuman resources وmarketing وIT وsales.', 'Departments: accounting, HR, marketing, IT, sales.', 'Departamentos: accounting (contabilidad), human resources, marketing, IT, sales.'),
        x('Astuce Partie 5 : lis toute la phrase. Le contexte avant et après le blanc donne le sens.', 'نصيحة للجزء 5: اقرأ الجملة كاملة، فالسياق قبل الفراغ وبعده يحدد المعنى.', 'Part 5 tip: read the whole sentence for context.', 'Consejo para la Parte 5: lee toda la frase. El contexto antes y después del hueco da el sentido.'),
      ],
      'Please order more office supplies before the deadline on Friday.',
      x('« order supplies » (commander des fournitures) ; « deadline » = date limite.', '«order supplies» (طلب اللوازم)، و«deadline» = موعد نهائي.', '“order supplies”; “deadline”.', '«order supplies» (pedir material); «deadline» = fecha límite.'),
    ),
  },
  [
    match('a2-of-s1-m1', ['deadline', 'agenda', 'supplies', 'memo', 'schedule'], x(
      '« Agenda » = ordre du jour (pas un carnet) ; « memo » = note de service.',
      '«Agenda» = جدول الأعمال (لا مفكرة)، و«memo» = مذكرة داخلية.',
      '“Agenda” = list of topics; “memo” = internal note.',
      '«Agenda» = orden del día (no una libreta); «memo» = nota interna.',
    )),
    match('a2-of-s1-m2', ['interview', 'salary', 'training', 'hire', 'promotion'], x(
      '« Promotion » au travail = un poste plus élevé.',
      '«Promotion» في العمل = منصب أعلى.',
      'A work “promotion” = a higher position.',
      '«Promotion» en el trabajo = un ascenso.',
    )),
    v('a2-of-s1-q1', 2, 'Could you ___ a meeting with the sales team for Thursday?', ['schedule', 'scale', 'score', 'screen'], x(
      '« Schedule a meeting » = organiser / planifier une réunion.',
      '«Schedule a meeting» = تحديد موعد اجتماع.',
      '“Schedule a meeting”.',
      '«Schedule a meeting» = programar una reunión.',
    )),
    v('a2-of-s1-q2', 2, 'The ___ department pays the invoices.', ['accounting', 'marketing', 'cooking', 'driving'], x(
      'C’est la comptabilité (« accounting ») qui paie les factures.',
      'قسم المحاسبة («accounting») هو من يدفع الفواتير.',
      '“Accounting” pays invoices.',
      'Es contabilidad («accounting») quien paga las facturas.',
    )),
    v('a2-of-s1-q3', 2, 'Please read the ___ before the meeting. It lists all the topics.', ['agenda', 'invoice', 'receipt', 'ticket'], x(
      'La liste des sujets d’une réunion : « agenda ».',
      'قائمة مواضيع الاجتماع: «agenda».',
      'A list of meeting topics: “agenda”.',
      'La lista de temas de una reunión: «agenda».',
    )),
    v('a2-of-s1-q4', 2, 'I need to ___ more paper and pens for the office.', ['order', 'offer', 'open', 'owe'], x(
      '« Order » = commander.',
      '«Order» = يطلب (يشتري).',
      '“Order” = buy from a supplier.',
      '«Order» = pedir (encargar).',
    )),
    v('a2-of-s1-q5', 2, 'Mr. Sato is on ___ this week. He is in Spain.', ['vacation', 'vocation', 'location', 'station'], x(
      '« On vacation » = en congé. « Vocation » est un faux ami de forme.',
      '«On vacation» = في عطلة. و«vocation» كلمة متشابهة الشكل.',
      '“On vacation”; “vocation” is a look-alike.',
      '«On vacation» = de vacaciones. «Vocation» es una trampa de forma.',
    )),
    v('a2-of-s1-q6', 2, 'Our office has a small ___ where we can make coffee.', ['kitchen', 'kitten', 'chicken', 'kingdom'], x(
      'On fait le café dans une cuisine : « kitchen ».',
      'نحضّر القهوة في المطبخ: «kitchen».',
      'Coffee is made in a “kitchen”.',
      'El café se prepara en una cocina: «kitchen».',
    )),
    v('a2-of-s1-q7', 2, 'The new employee will ___ his job on Monday.', ['start', 'stay', 'stop', 'store'], x(
      'Un nouvel employé commence : « start ».',
      'الموظف الجديد يبدأ عمله: «start».',
      'A new employee “starts”.',
      'Un empleado nuevo empieza: «start».',
    )),
    respond('a2-of-s1-l1', 2, 'Who is responsible for office supplies?', ['Nadia in the admin team.', 'Pens and paper.', 'Every Friday.'], x(
      '« Who » → une personne.',
      '«Who» ← شخص.',
      '“Who” → a person.',
      '«Who» → una persona.',
    )),
  ],
  [
    match('a2-of-s2-m1', ['invoice', 'budget', 'receipt', 'payment', 'refund'], x(
      '« Invoice » = facture à payer ; « refund » = remboursement.',
      '«Invoice» = فاتورة للدفع، و«refund» = استرداد المبلغ.',
      '“Invoice” vs “refund”.',
      '«Invoice» = factura por pagar; «refund» = reembolso.',
    )),
    match('a2-of-s2-m2', ['update', 'attachment', 'technician', 'install', 'password'], x(
      '« Attachment » = pièce jointe ; « install » = installer.',
      '«Attachment» = مرفق، و«install» = يثبّت.',
      '“Attachment” and “install”.',
      '«Attachment» = archivo adjunto; «install» = instalar.',
    )),
    v('a2-of-s2-q1', 2, 'Please ___ the file to your email.', ['attach', 'attack', 'attend', 'attract'], x(
      '« Attach a file » = joindre un fichier.',
      '«Attach a file» = إرفاق ملف.',
      '“Attach a file”.',
      '«Attach a file» = adjuntar un archivo.',
    )),
    v('a2-of-s2-q2', 2, 'The ___ for the project is next Friday. We must finish by then.', ['deadline', 'headline', 'guideline', 'outline'], x(
      'Date à laquelle il faut finir : « deadline ».',
      'التاريخ الذي يجب الانتهاء فيه: «deadline».',
      'The finish date: “deadline”.',
      'La fecha en que hay que terminar: «deadline».',
    )),
    v('a2-of-s2-q3', 2, 'My computer is very slow. I need to call a ___.', ['technician', 'musician', 'politician', 'magician'], x(
      'Pour un ordinateur : un technicien.',
      'للحاسوب: تقني «technician».',
      'Computers → “technician”.',
      'Para un ordenador: un técnico («technician»).',
    )),
    v('a2-of-s2-q4', 2, 'Can you ___ the meeting room for 2 p.m.?', ['book', 'cook', 'look', 'hook'], x(
      '« Book a room » = réserver une salle.',
      '«Book a room» = حجز قاعة.',
      '“Book a room”.',
      '«Book a room» = reservar una sala.',
    )),
    v('a2-of-s2-q5', 2, 'All ___ must wear their ID cards in the building.', ['employees', 'employment', 'employ', 'employing'], x(
      'Après « All », il faut un nom pluriel de personnes : « employees ».',
      'بعد «All» نحتاج اسم جمع للأشخاص: «employees».',
      'Plural noun for people: “employees”.',
      'Después de «All» hace falta un sustantivo plural de personas: «employees».',
    )),
    v('a2-of-s2-q6', 2, 'Please ___ the lights when you leave the office.', ['turn off', 'turn up', 'turn into', 'turn back'], x(
      'En partant, on éteint : « turn off ».',
      'عند المغادرة نطفئ الأضواء: «turn off».',
      'When leaving: “turn off”.',
      'Al salir se apagan las luces: «turn off».',
    )),
    v('a2-of-s2-q7', 2, 'The ___ is too high. We need to spend less money.', ['cost', 'coast', 'cast', 'case'], x(
      'Dépenser moins → le coût est trop élevé : « cost ».',
      'إنفاق أقل ← التكلفة مرتفعة: «cost».',
      'Spend less → the “cost” is too high.',
      'Gastar menos → el coste es demasiado alto: «cost».',
    )),
    respond('a2-of-s2-l1', 2, 'Has anyone fixed the copier?', ['Yes, the technician came this morning.', 'I made ten copies.', 'It’s a new copier.'], x(
      'Réponse directe : il a été réparé ce matin.',
      'رد مباشر: تم إصلاحها هذا الصباح.',
      'Yes, it was fixed this morning.',
      'Respuesta directa: el técnico vino esta mañana.',
    )),
  ],
  [
    match('a2-of-s3-m1', ['shipment', 'supplier', 'delivery', 'order', 'warehouse'], x(
      '« Warehouse » = entrepôt ; « supplier » = fournisseur.',
      '«Warehouse» = مستودع، و«supplier» = مورّد.',
      '“Warehouse” and “supplier”.',
      '«Warehouse» = almacén; «supplier» = proveedor.',
    )),
    match('a2-of-s3-m2', ['conference', 'speaker', 'register', 'participant', 'attend'], x(
      '« Register » = s’inscrire ; « attend » = assister à.',
      '«Register» = يسجّل، و«attend» = يحضر.',
      '“Register” and “attend”.',
      '«Register» = inscribirse; «attend» = asistir a.',
    )),
    v('a2-of-s3-q1', 2, 'We have to ___ the price list before the new year.', ['update', 'upset', 'uphold', 'uproot'], x(
      '« Update a list » = mettre à jour une liste.',
      '«Update a list» = تحديث قائمة.',
      '“Update a list”.',
      '«Update a list» = actualizar una lista.',
    )),
    v('a2-of-s3-q2', 2, 'Please ___ for the workshop on our website.', ['register', 'resign', 'repair', 'report'], x(
      '« Register for » = s’inscrire à.',
      '«Register for» = التسجيل في.',
      '“Register for”.',
      '«Register for» = inscribirse en.',
    )),
    v('a2-of-s3-q3', 2, 'The ___ is the person who gives a talk at a conference.', ['speaker', 'sponsor', 'visitor', 'buyer'], x(
      'La personne qui fait une présentation : « speaker » (intervenant).',
      'الشخص الذي يلقي العرض: «speaker» (متحدث).',
      'The person giving a talk: “speaker”.',
      'La persona que da una charla: «speaker» (ponente).',
    )),
    v('a2-of-s3-q4', 2, 'The new chairs arrived, but one is ___. We must send it back.', ['broken', 'spoken', 'token', 'woken'], x(
      'On renvoie un produit cassé : « broken ».',
      'نعيد المنتج المكسور: «broken».',
      'You return a “broken” item.',
      'Se devuelve un producto roto: «broken».',
    )),
    v('a2-of-s3-q5', 2, 'Please ___ your colleagues about the new schedule.', ['inform', 'perform', 'reform', 'transform'], x(
      '« Inform someone about something » = informer quelqu’un de quelque chose.',
      '«Inform someone about something» = إبلاغ شخص بأمر ما.',
      '“Inform … about”.',
      '«Inform someone about something» = informar a alguien de algo.',
    )),
    v('a2-of-s3-q6', 2, 'Our team ___ every morning at 9 to plan the day.', ['meets', 'meats', 'melts', 'moves'], x(
      '« Meets » = se réunit. « Meats » (viandes) se prononce pareil.',
      '«Meets» = يجتمع. و«meats» (لحوم) تُنطق بالطريقة نفسها.',
      '“Meets”; “meats” sounds the same.',
      '«Meets» = se reúne. «Meats» (carnes) suena igual.',
    )),
    v('a2-of-s3-q7', 2, 'I can’t find the file. Did you ___ it?', ['delete', 'delay', 'deliver', 'decide'], x(
      'Le fichier a disparu → l’a-t-on supprimé ? « delete ».',
      'الملف اختفى ← هل حُذف؟ «delete».',
      'Missing file → “delete”.',
      'El archivo ha desaparecido → ¿lo has borrado? «delete».',
    )),
    respond('a2-of-s3-l1', 2, 'When is the deadline for the report?', ['Next Monday at noon.', 'It’s a long report.', 'Ms. Kaya wrote it.'], x(
      '« When » → une date.',
      '«When» ← تاريخ.',
      '“When” → a date.',
      '«When» → una fecha.',
    )),
  ],
);
