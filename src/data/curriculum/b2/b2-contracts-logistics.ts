import type { Unit } from '../../../types';
import { lesson, listen, match, unit, v, x } from '../build';

export const b2ContractsLogistics: Unit = unit(
  {
    id: 'b2-contracts-logistics',
    emoji: '🚚',
    level: 4,
    part: 'R5 · L3',
    title: x('Contrats et logistique', 'العقود والخدمات اللوجستية', 'Contracts and logistics', 'Contratos y logística'),
    subtitle: x('Achats, stocks et livraisons', 'المشتريات والمخزون والتوصيل', 'Purchasing, stock and shipping', 'Compras, existencias y envíos'),
    lesson: lesson(
      x('Maîtriser le vocabulaire des commandes, contrats et livraisons.', 'إتقان مفردات الطلبيات والعقود والتوصيل.', 'Master the vocabulary of orders, contracts and deliveries.', 'Dominar el vocabulario de pedidos, contratos y entregas.'),
      [
        x('Quote (devis) → order (commande) → shipment (envoi) → invoice (facture).', 'Quote (عرض سعر) ← order (طلبية) ← shipment (شحنة) ← invoice (فاتورة).', 'Quote → order → shipment → invoice.', 'Quote (presupuesto) → order (pedido) → shipment (envío) → invoice (factura).'),
        x('Contrats : terms (conditions), clause, renew (renouveler), expire, breach (violation).', 'العقود: terms (الشروط) وclause (بند) وrenew (تجديد) وexpire (انتهاء) وbreach (إخلال).', 'Contracts: terms, clause, renew, expire, breach.', 'Contratos: terms (condiciones), clause (cláusula), renew (renovar), expire, breach (incumplimiento).'),
        x('In stock / out of stock ; on backorder = commandé, en attente de réapprovisionnement.', 'In stock / out of stock، وon backorder = مطلوب في انتظار التزويد.', 'In stock, out of stock, on backorder.', 'In stock / out of stock; on backorder = pedido pendiente de reposición.'),
      ],
      'The item is on backorder, so the shipment will be expedited as soon as it arrives.',
      x('« Expedite » = accélérer l’envoi.', '«Expedite» = تسريع الإرسال.', '“Expedite” = speed up.', '«Expedite» = acelerar el envío.'),
    ),
  },
  [
    match('b2-cl-m1', ['quote', 'shipment', 'warranty', 'inventory', 'supplier'], x(
      '« Quote » = devis ; « warranty » = garantie ; « inventory » = stock.',
      '«Quote» = عرض سعر و«warranty» = ضمان و«inventory» = جرد المخزون.',
      'Quote = price offer; warranty = guarantee.',
      '«Quote» = presupuesto; «warranty» = garantía; «inventory» = inventario.',
    )),
    v('b2-cl-q1', 4, 'Please send us a ___ for 500 units before we place the order.', ['quote', 'quota', 'quarter', 'quality'], x(
      'Avant de commander, on demande un devis : « quote ».',
      'قبل الطلب نطلب عرض سعر: «quote».',
      'A price offer → quote.',
      'Antes de pedir, se solicita un presupuesto: «quote».',
    )),
    v('b2-cl-q2', 4, 'The item you ordered is currently out of ___.', ['stock', 'store', 'storage', 'stack'], x(
      '« Out of stock » = en rupture de stock.',
      '«Out of stock» = نفد من المخزون.',
      '“Out of stock”.',
      '«Out of stock» = agotado.',
    )),
    v('b2-cl-q3', 4, 'The contract will ___ automatically unless either party cancels it.', ['renew', 'retire', 'revise', 'remove'], x(
      '« Renew automatically » = se renouveler automatiquement.',
      '«Renew automatically» = يتجدد تلقائيًا.',
      'Renew = continue for a new period.',
      '«Renew automatically» = renovarse automáticamente.',
    )),
    v('b2-cl-q4', 4, 'All ___ products will be replaced free of charge.', ['defective', 'effective', 'detective', 'deficient'], x(
      '« Defective » = défectueux. « Effective » = efficace (piège de forme).',
      '«Defective» = معيب، أما «effective» = فعّال (فخ شكلي).',
      'Defective = faulty.',
      '«Defective» = defectuoso. «Effective» = eficaz (trampa de forma).',
    )),
    v('b2-cl-q5', 4, 'Can you ___ this order? The client needs it by tomorrow.', ['expedite', 'expire', 'export', 'expect'], x(
      '« Expedite » = accélérer le traitement.',
      '«Expedite» = تسريع المعالجة.',
      'Expedite = speed up.',
      '«Expedite» = agilizar el trámite.',
    )),
    v('b2-cl-q6', 4, 'You can follow your parcel online with this ___ number.', ['tracking', 'trading', 'training', 'trailing'], x(
      '« Tracking number » = numéro de suivi.',
      '«Tracking number» = رقم التتبع.',
      'Tracking number = to follow a parcel.',
      '«Tracking number» = número de seguimiento.',
    )),
    v('b2-cl-q7', 4, 'Buying in ___ allows us to get a lower price per unit.', ['bulk', 'bulb', 'built', 'bold'], x(
      '« Buy in bulk » = acheter en gros.',
      '«Buy in bulk» = الشراء بالجملة.',
      'Buy in bulk = in large quantities.',
      '«Buy in bulk» = comprar al por mayor.',
    )),
    listen('b2-cl-l1', 'L3', 4, 'W: The supplier says the printer cartridges are on backorder.\nM: Then let’s order a smaller quantity from another vendor to cover the next two weeks.', 'What does the man suggest?', ['Using a different vendor', 'Cancelling the order', 'Waiting two months', 'Buying a new printer'], x(
      '« Order… from another vendor » = un autre fournisseur.',
      '«Order… from another vendor» = مورد آخر.',
      'Another vendor.',
      '«Order… from another vendor» = otro proveedor.',
    )),
    listen('b2-cl-l2', 'L4', 4, 'Attention, warehouse staff. The annual inventory will take place this Saturday. No shipments will leave the building that day, so please make sure all urgent orders are sent by Friday afternoon.', 'What are staff asked to do?', ['Send urgent orders by Friday', 'Work on Sunday', 'Count items at home', 'Order new boxes'], x(
      '« Make sure all urgent orders are sent by Friday afternoon ».',
      '«Make sure all urgent orders are sent by Friday afternoon»: قبل الجمعة.',
      'Urgent orders by Friday.',
      '«Make sure all urgent orders are sent by Friday afternoon»: antes del viernes.',
    )),
  ],
  [
    match('b2-cl-s2-m1', ['vendor', 'bulk', 'backorder', 'tracking', 'expedite'], x(
      '« Vendor » = vendeur, fournisseur ; « backorder » = commande en attente.',
      '«Vendor» = بائع أو مورد، و«backorder» = طلبية معلّقة.',
      'Vendor = seller; backorder = waiting order.',
      '«Vendor» = vendedor, proveedor; «backorder» = pedido pendiente.',
    )),
    v('b2-cl-s2-q1', 4, 'According to the ___ of the agreement, payment is due within 30 days.', ['terms', 'times', 'tests', 'tools'], x(
      '« The terms of the agreement » = les conditions du contrat.',
      '«The terms of the agreement» = شروط الاتفاق.',
      'Terms = conditions.',
      '«The terms of the agreement» = las condiciones del contrato.',
    )),
    v('b2-cl-s2-q2', 4, 'Our lease ___ at the end of December, so we must decide whether to stay.', ['expires', 'explains', 'expands', 'exposes'], x(
      '« Expire » = arriver à échéance.',
      '«Expire» = ينتهي أجله.',
      'Expire = come to an end.',
      '«Expire» = vencer.',
    )),
    v('b2-cl-s2-q3', 4, 'The machine comes with a two-year ___ covering parts and labor.', ['warranty', 'warning', 'warrant', 'ward'], x(
      '« Warranty » = garantie.',
      '«Warranty» = ضمان.',
      'Warranty = guarantee.',
      '«Warranty» = garantía.',
    )),
    v('b2-cl-s2-q4', 4, 'The ___ department handles all purchases above 5,000 dinars.', ['procurement', 'production', 'promotion', 'protection'], x(
      '« Procurement » = service des achats.',
      '«Procurement» = قسم المشتريات.',
      'Procurement = purchasing.',
      '«Procurement» = departamento de compras.',
    )),
    v('b2-cl-s2-q5', 4, 'Late delivery would be a ___ of contract.', ['breach', 'beach', 'branch', 'breath'], x(
      '« Breach of contract » = rupture de contrat.',
      '«Breach of contract» = إخلال بالعقد.',
      'Breach = breaking the contract.',
      '«Breach of contract» = incumplimiento de contrato.',
    )),
    v('b2-cl-s2-q6', 4, 'We decided to ___ our customer service to a company in Tunis.', ['outsource', 'outline', 'outrun', 'outweigh'], x(
      '« Outsource » = externaliser.',
      '«Outsource» = إسناد إلى جهة خارجية.',
      'Outsource = give to another company.',
      '«Outsource» = externalizar.',
    )),
    v('b2-cl-s2-q7', 4, 'The goods are stored in a ___ near the port.', ['warehouse', 'wardrobe', 'workshop', 'waterfront'], x(
      '« Warehouse » = entrepôt.',
      '«Warehouse» = مستودع.',
      'Warehouse = storage building.',
      '«Warehouse» = almacén.',
    )),
    listen('b2-cl-s2-l1', 'L3', 4, 'M: The contract with our cleaning company expires next month.\nW: Their service has been excellent, but let’s ask for a better price before we renew.', 'What does the woman want to do?', ['Negotiate the price', 'Change companies', 'Cancel the contract now', 'Clean the office herself'], x(
      '« Ask for a better price before we renew » = négocier.',
      '«Ask for a better price before we renew» = التفاوض على السعر.',
      'Negotiate before renewing.',
      '«Ask for a better price before we renew» = negociar.',
    )),
    listen('b2-cl-s2-l2', 'L4', 4, 'Hello, this is Sami from Rapid Freight. Your shipment of furniture left Marseille this morning. Because of strong winds, it will reach Tunis one day later than planned, on Thursday instead of Wednesday.', 'Why will the shipment be late?', ['Because of bad weather', 'Because of a strike', 'Because of missing papers', 'Because of a road closure'], x(
      '« Because of strong winds » = mauvais temps.',
      '«Because of strong winds» = طقس سيئ.',
      'Strong winds.',
      '«Because of strong winds» = mal tiempo.',
    )),
  ],
  [
    match('b2-cl-s3-m1', ['procurement', 'defective', 'warehouse', 'comply', 'outsource'], x(
      '« Comply » = se conformer ; « outsource » = externaliser.',
      '«Comply» = يمتثل و«outsource» = يُسند إلى جهة خارجية.',
      'Comply = follow rules; outsource = use another firm.',
      '«Comply» = cumplir; «outsource» = externalizar.',
    )),
    v('b2-cl-s3-q1', 4, 'Please check the ___ before signing: it says we cannot cancel for two years.', ['clause', 'cause', 'claim', 'class'], x(
      '« Clause » = clause d’un contrat.',
      '«Clause» = بند في العقد.',
      'A clause is part of a contract.',
      '«Clause» = cláusula de un contrato.',
    )),
    v('b2-cl-s3-q2', 4, 'We keep a minimum ___ of 200 units in case of sudden demand.', ['inventory', 'invention', 'invitation', 'investment'], x(
      '« Inventory » = stock disponible.',
      '«Inventory» = المخزون المتوفر.',
      'Inventory = stock.',
      '«Inventory» = existencias disponibles.',
    )),
    v('b2-cl-s3-q3', 4, 'The factory was closed because it failed to ___ with safety laws.', ['comply', 'complain', 'compare', 'compile'], x(
      '« Comply with » = respecter des normes.',
      '«Comply with» = الامتثال للمعايير.',
      'Comply with = follow.',
      '«Comply with» = cumplir las normas.',
    )),
    v('b2-cl-s3-q4', 4, 'The ___ was signed by both parties on 3 March.', ['agreement', 'agenda', 'argument', 'alignment'], x(
      '« Agreement » = accord, contrat.',
      '«Agreement» = اتفاق أو عقد.',
      'Agreement = contract.',
      '«Agreement» = acuerdo, contrato.',
    )),
    v('b2-cl-s3-q5', 4, 'The parcel was ___ to the wrong branch and had to be sent again.', ['shipped', 'shaped', 'shopped', 'shared'], x(
      '« Shipped » = expédié.',
      '«Shipped» = أُرسل.',
      'Shipped = sent.',
      '«Shipped» = enviado.',
    )),
    v('b2-cl-s3-q6', 4, 'We are looking for a reliable ___ of packaging materials.', ['supplier', 'supervisor', 'supporter', 'surveyor'], x(
      '« Supplier » = fournisseur.',
      '«Supplier» = مورّد.',
      'Supplier = company that provides goods.',
      '«Supplier» = proveedor.',
    )),
    v('b2-cl-s3-q7', 4, 'Either party may ___ the contract with 60 days’ notice.', ['terminate', 'determine', 'nominate', 'illuminate'], x(
      '« Terminate a contract » = résilier un contrat.',
      '«Terminate a contract» = فسخ العقد.',
      'Terminate = end.',
      '«Terminate a contract» = rescindir un contrato.',
    )),
    listen('b2-cl-s3-l1', 'L3', 4, 'W: Half of the glasses in this delivery are broken.\nM: Take photos of the damaged boxes and send them to the supplier. Our contract says they have to replace anything that arrives broken.', 'What does the man tell the woman to do?', ['Take pictures of the damage', 'Return all the glasses', 'Call the delivery driver', 'Buy new glasses'], x(
      '« Take photos of the damaged boxes ».',
      '«Take photos of the damaged boxes»: تصوير الأضرار.',
      'Take photos.',
      '«Take photos of the damaged boxes»: hacer fotos de los daños.',
    )),
    listen('b2-cl-s3-l2', 'L4', 4, 'Good morning, everyone. Starting next month, all orders over 1,000 dinars must be approved by the procurement department before they are placed. This will help us get better prices from our suppliers.', 'What is the purpose of the new rule?', ['To obtain lower prices', 'To speed up deliveries', 'To reduce paperwork', 'To hire more buyers'], x(
      '« This will help us get better prices ».',
      '«This will help us get better prices»: أسعار أفضل.',
      'Better prices from suppliers.',
      '«This will help us get better prices»: mejores precios.',
    )),
  ],
);
