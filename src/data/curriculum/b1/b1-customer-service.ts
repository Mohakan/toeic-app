import type { Unit } from '../../../types';
import { g, lesson, listen, match, read, respond, unit, v, x } from '../build';

const JUG = 'Dear customer service,\nI ordered a coffee machine (order #7810) two weeks ago. When it arrived, the glass jug was broken. Could you please send me a new jug? I have attached a photo.\nRegards,\nKarim Dridi';
const STOCK = 'Notice to customers: Because of a problem with our supplier, the blue version of the X2 headphones is out of stock until 15 March. Customers who have already ordered can choose another color or cancel their order for a full refund.';
const RIVIERA = 'Dear Ms. Benali,\nThank you for contacting us about your stay. We are very sorry that the air conditioning in your room did not work. As a gesture of goodwill, we have refunded the cost of one night to your credit card.\nSincerely,\nGuest Relations, Hotel Riviera';

export const b1CustomerService: Unit = unit(
  {
    id: 'b1-customer-service',
    emoji: '🎧',
    level: 3,
    part: 'R5 · R7 · L3',
    title: x('Service client et réclamations', 'خدمة العملاء والشكاوى', 'Customer service and complaints', 'Atención al cliente y reclamaciones'),
    subtitle: x('Problèmes, excuses et solutions', 'المشكلات والاعتذارات والحلول', 'Problems, apologies and solutions', 'Problemas, disculpas y soluciones'),
    lesson: lesson(
      x('Comprendre une réclamation et la réponse de l’entreprise.', 'فهم الشكوى ورد الشركة عليها.', 'Understand a complaint and the company’s reply.', 'Entender una reclamación y la respuesta de la empresa.'),
      [
        x('Vocabulaire : complaint (réclamation), refund, replace, replacement, damaged, defective, warranty, receipt.', 'المفردات: complaint (شكوى) وrefund وreplace وreplacement وdamaged وdefective وwarranty وreceipt.', 'Words: complaint, refund, replace, damaged, defective, warranty.', 'Vocabulario: complaint (reclamación), refund, replace, replacement, damaged, defective, warranty, receipt.'),
        x('Formules d’excuse : We apologize for…, We are sorry for the inconvenience, As a gesture of goodwill…', 'عبارات الاعتذار: We apologize for… وWe are sorry for the inconvenience وAs a gesture of goodwill…', 'Apologies: We apologize for…, As a gesture of goodwill…', 'Fórmulas de disculpa: We apologize for…, We are sorry for the inconvenience, As a gesture of goodwill…'),
        x('Dans une réclamation, repère trois choses : le problème, la demande du client et la solution proposée.', 'في الشكوى حدّد ثلاثة أمور: المشكلة وطلب العميل والحل المقترح.', 'Find the problem, the request and the solution.', 'En una reclamación, localiza tres cosas: el problema, lo que pide el cliente y la solución propuesta.'),
      ],
      'We apologize for the damaged item and will send a replacement free of charge.',
      x('Problème : article abîmé. Solution : un remplacement gratuit.', 'المشكلة: منتج تالف. الحل: استبدال مجاني.', 'Problem: damaged item. Solution: free replacement.', 'Problema: artículo dañado. Solución: una sustitución gratuita.'),
    ),
  },
  [
    match('b1-cs-s1-m1', ['warranty', 'defective', 'refund', 'receipt', 'customer'], x(
      '« Defective » = défectueux ; « warranty » = garantie.',
      '«Defective» = معيب، و«warranty» = ضمان.',
      '“Defective” and “warranty”.',
      '«Defective» = defectuoso; «warranty» = garantía.',
    )),
    v('b1-cs-s1-q1', 3, 'The customer wants to ___ about the late delivery.', ['complain', 'explain', 'contain', 'obtain'], x(
      '« Complain about » = se plaindre de.',
      '«Complain about» = يشتكي من.',
      '“Complain about”.',
      '«Complain about» = quejarse de.',
    )),
    v('b1-cs-s1-q2', 3, 'If the item is damaged, we will ___ it free of charge.', ['replace', 'repeat', 'remind', 'remove'], x(
      '« Replace » = remplacer un article abîmé.',
      '«Replace» = استبدال منتج تالف.',
      '“Replace” a damaged item.',
      '«Replace» = sustituir un artículo dañado.',
    )),
    v('b1-cs-s1-q3', 3, 'Please keep your ___ in case you need to return the product.', ['receipt', 'recipe', 'reception', 'receiver'], x(
      'Pour retourner un produit : le reçu, « receipt ». « Recipe » = recette de cuisine.',
      'لإرجاع منتج نحتاج الوصل «receipt». أما «recipe» فوصفة طبخ.',
      '“Receipt”; “recipe” is a trap.',
      'Para devolver un producto: el recibo, «receipt». «Recipe» = receta de cocina.',
    )),
    v('b1-cs-s1-q4', 3, 'The laptop is still under ___, so the repair is free.', ['warranty', 'warning', 'warehouse', 'wardrobe'], x(
      '« Under warranty » = sous garantie.',
      '«Under warranty» = تحت الضمان.',
      '“Under warranty”.',
      '«Under warranty» = en garantía.',
    )),
    read('b1-cs-s1-r1', 'R7', 3, JUG, 'What is the problem?', ['Part of the product was broken', 'The order was late', 'The wrong color was sent', 'The price was wrong'], x(
      '« The glass jug was broken » : une partie du produit était cassée.',
      '«The glass jug was broken»: جزء من المنتج مكسور.',
      'Part of the product was broken.',
      '«The glass jug was broken»: una parte del producto estaba rota.',
    )),
    read('b1-cs-s1-r2', 'R7', 3, JUG, 'What does Mr. Dridi ask for?', ['A replacement jug', 'A full refund', 'A new coffee machine', 'A discount'], x(
      '« Could you please send me a new jug? ».',
      '«Could you please send me a new jug?» أي إبريق بديل.',
      'He asks for a new jug only.',
      '«Could you please send me a new jug?»: una jarra nueva.',
    )),
    listen('b1-cs-s1-l1', 'L3', 3, 'W: Hello, I bought this jacket yesterday, but there’s a hole in the sleeve.\nM: I’m sorry about that. Would you like a new one or your money back?', 'What does the man offer?', ['A replacement or a refund', 'A free repair', 'A discount on her next purchase', 'A different jacket'], x(
      '« A new one or your money back » = remplacement ou remboursement.',
      '«A new one or your money back» = استبدال أو استرداد المبلغ.',
      'Replacement or refund.',
      '«A new one or your money back» = cambio o reembolso.',
    )),
    respond('b1-cs-s1-l2', 3, 'Can I speak to someone about a problem with my bill?', ['Certainly, I’ll transfer you to billing.', 'Your bill is paid.', 'I have a problem too.'], x(
      'On oriente vers le bon service.',
      'نوجّه إلى القسم المناسب.',
      'Transfer to the right department.',
      'Se dirige al servicio adecuado.',
    )),
    read('b1-cs-s1-r3', 'R7', 3, 'Return policy: unused items can be returned within 30 days with a receipt. Sale items cannot be returned. Refunds are made to the original payment method.', 'Which items cannot be returned?', ['Sale items', 'Unused items', 'Items with a receipt', 'Electronics'], x(
      '« Sale items cannot be returned » = les articles soldés.',
      '«Sale items cannot be returned» = المنتجات المخفضة.',
      'Sale items.',
      '«Sale items cannot be returned» = los artículos rebajados.',
    )),
  ],
  [
    match('b1-cs-s2-m1', ['feedback', 'survey', 'discount', 'loyalty', 'tracking'], x(
      '« Feedback » = avis ; « tracking number » = numéro de suivi.',
      '«Feedback» = ملاحظات، و«tracking number» = رقم التتبع.',
      '“Feedback” and “tracking”.',
      '«Feedback» = opinión; «tracking number» = número de seguimiento.',
    )),
    v('b1-cs-s2-q1', 3, 'We ___ for the delay and will deliver your order tomorrow.', ['apologize', 'appreciate', 'apply', 'approve'], x(
      '« Apologize for » = s’excuser de.',
      '«Apologize for» = يعتذر عن.',
      '“Apologize for”.',
      '«Apologize for» = disculparse por.',
    )),
    v('b1-cs-s2-q2', 3, 'The package was ___ during shipping. The box was crushed.', ['damaged', 'managed', 'arranged', 'changed'], x(
      'Boîte écrasée → colis abîmé : « damaged ».',
      'علبة مسحوقة ← طرد تالف: «damaged».',
      'Crushed box → “damaged”.',
      'Caja aplastada → paquete dañado: «damaged».',
    )),
    v('b1-cs-s2-q3', 3, 'Customers can ___ their order online with the tracking number.', ['track', 'trick', 'truck', 'trap'], x(
      '« Track an order » = suivre une commande.',
      '«Track an order» = تتبّع طلبية.',
      '“Track an order”.',
      '«Track an order» = seguir un pedido.',
    )),
    v('b1-cs-s2-q4', 3, 'Thank you for your ___. We will use your comments to improve our service.', ['feedback', 'feed', 'background', 'backup'], x(
      'Des commentaires = « feedback ».',
      'التعليقات = «feedback».',
      'Comments = “feedback”.',
      'Comentarios = «feedback».',
    )),
    read('b1-cs-s2-r1', 'R7', 3, STOCK, 'Why is the product unavailable?', ['There is a problem with a supplier', 'It has been discontinued', 'It is too expensive', 'It is defective'], x(
      '« Because of a problem with our supplier ».',
      '«Because of a problem with our supplier» أي مشكلة مع المورّد.',
      'A supplier problem.',
      '«Because of a problem with our supplier»: un problema con el proveedor.',
    )),
    read('b1-cs-s2-r2', 'R7', 3, STOCK, 'What can customers who have already ordered do?', ['Choose another color or cancel', 'Wait for a free gift', 'Pay a lower price', 'Collect it in the store'], x(
      '« Choose another color or cancel their order for a full refund ».',
      'الخياران: «Choose another color or cancel their order for a full refund».',
      'Another color or cancel.',
      '«Choose another color or cancel their order for a full refund».',
    )),
    listen('b1-cs-s2-l1', 'L3', 3, 'M: Hi, I’m calling because my internet has been very slow since Monday.\nW: I’m sorry to hear that. I’ll send a technician tomorrow morning. Is nine o’clock OK?', 'What will happen tomorrow morning?', ['A technician will visit', 'The man will get a refund', 'The internet will be cut', 'The man will buy a new router'], x(
      '« I’ll send a technician tomorrow morning ».',
      '«I’ll send a technician tomorrow morning» أي زيارة تقني.',
      'A technician will come.',
      '«I’ll send a technician tomorrow morning»: irá un técnico.',
    )),
    respond('b1-cs-s2-l2', 3, 'Would you like to fill in a short survey?', ['Sure, how long will it take?', 'I filled the car.', 'I’m a customer.'], x(
      'On accepte et on demande une précision utile.',
      'نقبل ونطلب توضيحًا مفيدًا.',
      'Accept and ask a useful question.',
      'Se acepta y se pide un dato útil.',
    )),
    listen('b1-cs-s2-l3', 'L4', 3, 'Thank you for calling Clear Phone. If you want to report a problem with your phone, press one. If you have a question about your bill, press two.', 'What should callers with a billing question do?', ['Press two', 'Press one', 'Visit a store', 'Send an email'], x(
      '« A question about your bill, press two ».',
      '«A question about your bill, press two» أي الضغط على 2.',
      'Billing questions: press two.',
      '«A question about your bill, press two»: pulsar el 2.',
    )),
  ],
  [
    match('b1-cs-s3-m1', ['inventory', 'vendor', 'quote', 'stock', 'supplier'], x(
      '« Quote » = devis ; « inventory » = stock, inventaire.',
      '«Quote» = عرض سعر، و«inventory» = المخزون.',
      '“Quote” and “inventory”.',
      '«Quote» = presupuesto; «inventory» = inventario.',
    )),
    v('b1-cs-s3-q1', 3, 'The manager offered a 10% ___ because the order was late.', ['discount', 'account', 'amount', 'count'], x(
      'Une réduction de prix = « discount ».',
      'تخفيض في السعر = «discount».',
      'A price reduction = “discount”.',
      'Una rebaja de precio = «discount».',
    )),
    v('b1-cs-s3-q2', 3, 'Our customer service team is ___ 24 hours a day.', ['available', 'valuable', 'variable', 'avoidable'], x(
      '« Available » = disponible.',
      '«Available» = متاح.',
      '“Available”.',
      '«Available» = disponible.',
    )),
    v('b1-cs-s3-q3', 3, 'Please fill ___ the form to request a refund.', ['in', 'on', 'at', 'up'], x(
      '« Fill in a form » = remplir un formulaire.',
      '«Fill in a form» = ملء استمارة.',
      '“Fill in a form”.',
      '«Fill in a form» = rellenar un formulario.',
    )),
    g('b1-cs-s3-q4', 3, 'The customer was not ___ with the quality of the repair.', ['satisfied', 'satisfying', 'satisfaction', 'satisfy'], x(
      '« Be satisfied with » : adjectif en -ed pour la personne.',
      '«Be satisfied with»: صفة بـ -ed للشخص.',
      '“Satisfied with”.',
      '«Be satisfied with»: adjetivo en -ed para la persona.',
    )),
    read('b1-cs-s3-r1', 'R7', 3, RIVIERA, 'Why did Ms. Benali contact the hotel?', ['The air conditioning did not work', 'Her room was too small', 'She was charged twice', 'Breakfast was not served'], x(
      '« The air conditioning in your room did not work ».',
      '«The air conditioning in your room did not work» أي تعطل المكيّف.',
      'The air conditioning.',
      '«The air conditioning in your room did not work»: el aire acondicionado no funcionaba.',
    )),
    read('b1-cs-s3-r2', 'R7', 3, RIVIERA, 'What has the hotel done?', ['Refunded one night', 'Offered a free stay', 'Changed her room', 'Sent her a gift'], x(
      '« We have refunded the cost of one night ».',
      '«We have refunded the cost of one night» أي استرداد ثمن ليلة.',
      'Refunded one night.',
      '«We have refunded the cost of one night»: reembolsado una noche.',
    )),
    listen('b1-cs-s3-l1', 'L3', 3, 'W: I ordered a blue sofa, but you delivered a grey one.\nM: I’m very sorry. We’ll pick up the grey sofa and bring the blue one on Saturday.', 'What was the problem?', ['The wrong color was delivered', 'The sofa was damaged', 'The delivery was late', 'The sofa was too big'], x(
      'Bleu commandé, gris livré : mauvaise couleur.',
      'طُلبت زرقاء وسُلّمت رمادية: لون خاطئ.',
      'Wrong color.',
      'Pidió uno azul y le entregaron uno gris: color equivocado.',
    )),
    respond('b1-cs-s3-l2', 3, 'Why was my order cancelled?', ['The item was out of stock.', 'Last Tuesday.', 'By email.'], x(
      '« Why » → une raison.',
      '«Why» ← سبب.',
      '“Why” → a reason.',
      '«Why» → una razón.',
    )),
    read('b1-cs-s3-r3', 'R7', 3, 'Customer survey results: 85% of customers were satisfied with our delivery times. However, only 60% were happy with the packaging. We will use new boxes from next month.', 'What will the company change?', ['The packaging', 'The delivery times', 'The prices', 'The website'], x(
      '« We will use new boxes » : l’emballage change.',
      '«We will use new boxes»: يتغير التغليف.',
      'The packaging.',
      '«We will use new boxes»: cambia el embalaje.',
    )),
  ],
);
