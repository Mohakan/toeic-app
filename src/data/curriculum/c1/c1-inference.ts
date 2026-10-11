import type { Unit } from '../../../types';
import { lesson, read, unit, x } from '../build';

const TRAVEL_MEMO = 'MEMO\nTo: All regional managers\nFrom: Sonia Mabrouk, Chief Operating Officer\nRe: Travel policy\nEffective 1 March, all business travel within Tunisia will require approval from a department head rather than from my office. International trips will continue to need my signature. We are making this change in response to feedback that the current process delays routine client visits, sometimes by more than a week. To keep costs under control, however, managers will receive a monthly report comparing their department’s travel spending with its budget. Departments that exceed their budget for two consecutive months will return to the previous approval system. I trust that this arrangement strikes a fair balance between flexibility and accountability.';

const HIGH_STREET = 'Despite predictions that online shopping would empty city centers, foot traffic in Tunis’s main shopping streets rose by six percent last year, according to a report by the Chamber of Commerce. The authors attribute the increase not to a revival of traditional retail but to a shift in what people come for. Restaurants, gyms and service businesses such as repair shops now occupy nearly half of all street-level units, compared with a quarter a decade ago. Clothing stores, by contrast, have declined steadily. The report warns that landlords who insist on high rents for large retail spaces risk leaving them empty for long periods, and it recommends that the city ease planning rules so that units can be divided or converted more quickly.';

const CHAIRMAN = 'Dear Shareholders,\nThis year has tested our resilience. The sharp rise in raw material costs during the first half reduced our operating margin from 14 to 9 percent, and we chose not to pass the full increase on to customers. In hindsight, I believe that was the right decision: our order volume held steady while two of our main competitors lost market share. In the second half, the renegotiation of our long-term supply contracts and the start of production at our Gabès plant began to restore margins. The board is therefore proposing a reduced dividend of 0.40 dinars per share, rather than suspending it altogether. We expect a return to our historical level of profitability within eighteen months, barring any further disruption.\nKhaled Mansouri, Chairman';

const FLEX_FAQ = 'Frequently asked questions — Flexible work policy\nWho is eligible? All permanent employees who have completed their probation period, except those in roles that require a physical presence, such as laboratory and warehouse staff.\nHow many remote days are allowed? Up to two per week, to be agreed with your line manager. Teams must be in the office together at least one fixed day per week.\nCan I work from abroad? Only in exceptional circumstances and for no more than ten working days per year, owing to tax and insurance rules.\nWhat equipment is provided? A laptop and a headset. Employees may also claim up to 300 dinars once for a desk chair, provided they submit a receipt.\nWill the policy change? It will be reviewed after twelve months, taking into account productivity data and staff feedback.';

export const c1Inference: Unit = unit(
  {
    id: 'c1-inference',
    emoji: '🕵️',
    level: 5,
    part: 'R7',
    title: x('Inférence et vocabulaire en contexte', 'الاستنتاج والمفردات في السياق', 'Inference and vocabulary in context', 'Inferencia y vocabulario en contexto'),
    subtitle: x('Partie 7 : lire entre les lignes', 'الجزء 7: القراءة بين السطور', 'Part 7: read between the lines', 'Parte 7: leer entre líneas'),
    lesson: lesson(
      x('Déduire une information implicite et trouver le sens d’un mot dans son contexte.', 'استنتاج معلومة ضمنية وإيجاد معنى كلمة في سياقها.', 'Infer implicit information and word meaning in context.', 'Deducir una información implícita y encontrar el sentido de una palabra en su contexto.'),
      [
        x('« The word X is closest in meaning to » : remplace le mot dans la phrase et vérifie le sens.', '«The word X is closest in meaning to»: عوّض الكلمة في الجملة وتحقق من المعنى.', 'Replace the word and check the meaning.', '«The word X is closest in meaning to»: sustituye la palabra en la frase y comprueba el sentido.'),
        x('Une inférence s’appuie sur le texte : élimine les réponses vraies « en général » mais non soutenues.', 'الاستنتاج يستند إلى النص: استبعد الإجابات الصحيحة «عمومًا» لكن غير المدعومة.', 'Inference must be supported by the text.', 'Una inferencia se apoya en el texto: descarta las respuestas ciertas «en general» pero no respaldadas.'),
      ],
      'Seats are limited, and latecomers may not be admitted once the talk has begun.',
      x('Sous-entendu : il vaut mieux arriver en avance (inférence).', 'المعنى الضمني: من الأفضل الحضور مبكرًا (استنتاج).', 'Implied: it is better to arrive early (inference).', 'Implícito: conviene llegar con antelación (inferencia).'),
    ),
  },
  [
    read('c1-in-r1', 'R7', 5, 'The East Wing parking garage will reopen on Monday after repairs. Employees who were given temporary passes for the Hill Street lot should return them to security by Friday.', 'What can be inferred about the Hill Street passes?', ['They will no longer be needed', 'They are valid for another month', 'They must be renewed online', 'They were issued by mistake'], x(
      'Le garage habituel rouvre et les badges provisoires doivent être rendus : ils ne serviront plus.',
      'المرآب المعتاد يُعاد فتحه ويجب إرجاع البطاقات المؤقتة: لن تعود هناك حاجة إليها.',
      'The usual garage reopens and the temporary passes must be returned: no longer needed.',
      'El aparcamiento habitual reabre y hay que devolver los pases provisionales: ya no harán falta.',
    )),
    read('c1-in-r2', 'R7', 5, 'The board has postponed its vote on the proposed expansion into Brazil, noting that recent currency fluctuations could significantly alter the projected returns. A revised financial analysis is expected by the end of the quarter.', 'The word “alter” is closest in meaning to', ['change', 'confirm', 'improve', 'delay'], x(
      '« Alter » = modifier. Remplace-le dans la phrase : « could change the projected returns ».',
      '«Alter» = يغيّر. عوّضها في الجملة: «could change the projected returns».',
      '“Alter” = change: “could change the projected returns”.',
      '«Alter» = cambiar. Sustitúyelo en la frase: «could change the projected returns».',
    )),
    read('c1-in-r3', 'R7', 5, 'The board has postponed its vote on the proposed expansion into Brazil, noting that recent currency fluctuations could significantly alter the projected returns. A revised financial analysis is expected by the end of the quarter.', 'Why was the vote postponed?', ['Exchange rates may affect expected profits', 'The board rejected the expansion', 'The analysis is already complete', 'Brazil changed its import rules'], x(
      '« Currency fluctuations could… alter the projected returns » : les taux de change pèsent sur les profits attendus.',
      '«Currency fluctuations could… alter the projected returns»: تقلبات العملة قد تؤثر في الأرباح المتوقعة.',
      '“Currency fluctuations could… alter the projected returns”.',
      '«Currency fluctuations could… alter the projected returns»: los tipos de cambio afectan a los beneficios previstos.',
    )),
    read('c1-in-r4', 'R7', 5, 'After a decade of steady growth, Nordline Textiles is shifting its focus from volume to margins. The company will discontinue its lowest-priced product lines and invest in premium fabrics, a segment where competition is less intense.', 'What is suggested about Nordline’s new strategy?', ['It aims for higher profit per item', 'It plans to sell more cheap products', 'It is leaving the textile industry', 'It expects stronger competition'], x(
      '« From volume to margins » + « premium » : gagner plus par article vendu.',
      '«From volume to margins» + «premium»: ربح أكبر لكل قطعة.',
      'Higher margins per item.',
      '«From volume to margins» + «premium»: ganar más por cada artículo vendido.',
    )),
    read('c1-in-r5', 'R7', 5, 'After a decade of steady growth, Nordline Textiles is shifting its focus from volume to margins. The company will discontinue its lowest-priced product lines and invest in premium fabrics, a segment where competition is less intense.', 'The word “discontinue” is closest in meaning to', ['stop producing', 'reduce the price of', 'advertise', 'export'], x(
      '« Discontinue a product line » = arrêter sa production.',
      '«Discontinue a product line» = التوقف عن إنتاجها.',
      '“discontinue” = stop producing.',
      '«Discontinue a product line» = dejar de fabricarla.',
    )),
  ],
  [
    read('c1-in-s2-r1', 'R7', 5, TRAVEL_MEMO, 'What is the main purpose of the memo?', ['To explain a change in approval procedures', 'To announce cuts to travel budgets', 'To ban international business trips', 'To introduce a new operations officer'], x(
      'Le mémo transfère l’approbation des déplacements nationaux aux chefs de département.',
      'المذكرة تنقل الموافقة على التنقلات الوطنية إلى رؤساء الأقسام.',
      'Domestic trips: new approval process.',
      'El memorando traslada la aprobación de los viajes nacionales a los jefes de departamento.',
    )),
    read('c1-in-s2-r2', 'R7', 5, TRAVEL_MEMO, 'Why is the change being made?', ['The old process delayed routine trips', 'Travel costs have fallen sharply', 'Ms. Mabrouk is leaving the company', 'Clients complained about prices'], x(
      '« The current process delays routine client visits, sometimes by more than a week ».',
      '«The current process delays routine client visits»: الإجراء الحالي يؤخر الزيارات.',
      'Delays to routine visits.',
      '«The current process delays routine client visits»: el proceso actual retrasa las visitas.',
    )),
    read('c1-in-s2-r3', 'R7', 5, TRAVEL_MEMO, 'What is implied about departments that overspend?', ['They may lose their new freedom', 'They will be closed down', 'They must pay the costs themselves', 'They will receive a larger budget'], x(
      'Deux mois de dépassement → retour à l’ancien système : ils perdent l’autonomie accordée.',
      'شهران من التجاوز ← العودة إلى النظام القديم: يفقدون الاستقلالية.',
      'They return to the old system.',
      'Dos meses de exceso → vuelta al sistema anterior: pierden la autonomía concedida.',
    )),
    read('c1-in-s2-r4', 'R7', 5, TRAVEL_MEMO, 'Who must approve a business trip to Paris?', ['Ms. Mabrouk', 'A department head', 'The finance team', 'The client'], x(
      '« International trips will continue to need my signature » : la directrice des opérations.',
      '«International trips will continue to need my signature»: مديرة العمليات.',
      'International trips need her signature.',
      '«International trips will continue to need my signature»: la directora de operaciones.',
    )),
    read('c1-in-s2-r5', 'R7', 5, TRAVEL_MEMO, 'In the last sentence, the word “strikes” is closest in meaning to', ['achieves', 'hits', 'stops', 'protests'], x(
      '« Strike a balance » = trouver, atteindre un équilibre.',
      '«Strike a balance» = تحقيق التوازن.',
      '“Strike a balance” = achieve it.',
      '«Strike a balance» = lograr un equilibrio.',
    )),
    read('c1-in-s2-r6', 'R7', 5, HIGH_STREET, 'What is the main finding of the report?', ['City centers attract visitors for new reasons', 'Online shopping has collapsed', 'Clothing stores are growing', 'Rents have fallen sharply'], x(
      'La fréquentation monte grâce aux restaurants et services, pas au commerce traditionnel.',
      'الإقبال ارتفع بفضل المطاعم والخدمات لا التجارة التقليدية.',
      'Visitors come for services now.',
      'La afluencia sube gracias a restaurantes y servicios, no al comercio tradicional.',
    )),
    read('c1-in-s2-r7', 'R7', 5, HIGH_STREET, 'What had been predicted about city centers?', ['They would lose visitors', 'Their rents would rise', 'Their gyms would close', 'They would attract more clothing stores'], x(
      '« Predictions that online shopping would empty city centers ».',
      '«Predictions that online shopping would empty city centers»: توقع خلوّها.',
      'They were expected to empty.',
      '«Predictions that online shopping would empty city centers»: se esperaba que se vaciaran.',
    )),
    read('c1-in-s2-r8', 'R7', 5, HIGH_STREET, 'What share of street-level units did service businesses occupy ten years ago?', ['About 25 percent', 'About 50 percent', 'About 6 percent', 'About 10 percent'], x(
      '« Compared with a quarter a decade ago » : un quart = 25 %.',
      '«Compared with a quarter a decade ago»: الربع = 25%.',
      'A quarter = 25%.',
      '«Compared with a quarter a decade ago»: una cuarta parte = 25 %.',
    )),
    read('c1-in-s2-r9', 'R7', 5, HIGH_STREET, 'What does the report suggest about some landlords?', ['Their expectations may be unrealistic', 'They should sell their buildings', 'They are already lowering rents', 'They prefer clothing stores'], x(
      'Exiger des loyers élevés risque de laisser les locaux vides : attentes irréalistes.',
      'فرض إيجارات مرتفعة قد يترك المحلات فارغة: توقعات غير واقعية.',
      'High rents may leave units empty.',
      'Exigir alquileres altos puede dejar los locales vacíos: expectativas poco realistas.',
    )),
    read('c1-in-s2-r10', 'R7', 5, HIGH_STREET, 'What does the report recommend?', ['Making it easier to change how spaces are used', 'Banning some online sales', 'Raising rents in the center', 'Building new shopping malls'], x(
      '« Ease planning rules so that units can be divided or converted more quickly ».',
      '«Ease planning rules»: تسهيل تحويل المحلات وتقسيمها.',
      'Easier conversion of units.',
      '«Ease planning rules»: facilitar la división o conversión de locales.',
    )),
  ],
  [
    read('c1-in-s3-r1', 'R7', 5, CHAIRMAN, 'Why did the operating margin fall?', ['Material costs increased', 'Sales volume dropped', 'A plant was closed', 'Taxes went up'], x(
      '« The sharp rise in raw material costs… reduced our operating margin ».',
      '«The sharp rise in raw material costs»: ارتفاع كلفة المواد الأولية.',
      'Raw material costs rose.',
      '«The sharp rise in raw material costs»: subida del coste de las materias primas.',
    )),
    read('c1-in-s3-r2', 'R7', 5, CHAIRMAN, 'What can be inferred about the company’s pricing decision?', ['It helped the company keep its customers', 'It caused orders to fall', 'It was reversed in the second half', 'It was criticized by the board'], x(
      'Prix contenus + volumes stables pendant que les concurrents perdaient des parts : la décision a retenu les clients.',
      'أسعار مستقرة وحجم طلبيات ثابت بينما خسر المنافسون حصصًا: القرار حافظ على الزبائن.',
      'Orders held steady.',
      'Precios contenidos + volumen estable mientras la competencia perdía cuota: la decisión retuvo a los clientes.',
    )),
    read('c1-in-s3-r3', 'R7', 5, CHAIRMAN, 'What helped restore margins in the second half?', ['New supply terms and a new plant', 'Higher prices for customers', 'A large number of job cuts', 'A merger with a competitor'], x(
      'Renégociation des contrats d’approvisionnement + démarrage de l’usine de Gabès.',
      'إعادة التفاوض على عقود التزويد وانطلاق مصنع قابس.',
      'Renegotiated contracts and Gabès.',
      'Renegociación de los contratos de suministro + arranque de la planta de Gabès.',
    )),
    read('c1-in-s3-r4', 'R7', 5, CHAIRMAN, 'What is stated about the dividend?', ['It will be lower than usual', 'It will be suspended', 'It will increase', 'It will be paid in shares'], x(
      '« A reduced dividend… rather than suspending it altogether ».',
      '«A reduced dividend… rather than suspending it»: أرباح مخفّضة لا معلّقة.',
      'Reduced, not suspended.',
      '«A reduced dividend… rather than suspending it»: reducido, no suspendido.',
    )),
    read('c1-in-s3-r5', 'R7', 5, CHAIRMAN, 'The phrase “barring any further disruption” is closest in meaning to', ['unless new problems occur', 'because of new problems', 'after new problems are solved', 'including new problems'], x(
      '« Barring » = sauf, à moins que : sauf nouvelle perturbation.',
      '«Barring» = ما لم: ما لم تحدث اضطرابات جديدة.',
      '“Barring” = unless there is.',
      '«Barring» = salvo: a menos que haya nuevas perturbaciones.',
    )),
    read('c1-in-s3-r6', 'R7', 5, FLEX_FAQ, 'Which employees are NOT eligible for the policy?', ['Warehouse workers', 'Permanent sales staff', 'Employees who have passed probation', 'Line managers'], x(
      'Exclus : les postes exigeant une présence physique (laboratoire, entrepôt).',
      'المستثنون: الوظائف التي تتطلب حضورًا فعليًا (مخبر، مستودع).',
      'Roles needing physical presence.',
      'Excluidos: los puestos que exigen presencia física (laboratorio, almacén).',
    )),
    read('c1-in-s3-r7', 'R7', 5, FLEX_FAQ, 'What is required of teams?', ['Meeting in the office on a set day each week', 'Working remotely on Fridays', 'Reporting productivity every day', 'Sharing laptops'], x(
      '« Teams must be in the office together at least one fixed day per week ».',
      '«At least one fixed day per week»: يوم محدد أسبوعيًا في المكتب.',
      'One fixed office day a week.',
      '«At least one fixed day per week»: un día fijo a la semana en la oficina.',
    )),
    read('c1-in-s3-r8', 'R7', 5, FLEX_FAQ, 'Why is working from abroad limited?', ['Because of tax and insurance rules', 'Because of time differences', 'Because of equipment costs', 'Because managers object to it'], x(
      '« Owing to tax and insurance rules ».',
      '«Owing to tax and insurance rules»: بسبب قواعد الضرائب والتأمين.',
      'Tax and insurance rules.',
      '«Owing to tax and insurance rules»: por normas fiscales y de seguros.',
    )),
    read('c1-in-s3-r9', 'R7', 5, FLEX_FAQ, 'What is suggested about the chair allowance?', ['Employees need proof of purchase', 'It is paid every year', 'It also covers headsets', 'It is only for managers'], x(
      '« Provided they submit a receipt » : il faut un justificatif. « Once » exclut un paiement annuel.',
      '«Provided they submit a receipt»: يلزم وصل. و«once» تنفي الدفع السنوي.',
      'A receipt is required.',
      '«Provided they submit a receipt»: hace falta un justificante. «Once» excluye un pago anual.',
    )),
    read('c1-in-s3-r10', 'R7', 5, FLEX_FAQ, 'What will happen after twelve months?', ['The policy will be evaluated', 'Remote work will end', 'Staff will get new laptops', 'Probation will be shortened'], x(
      '« It will be reviewed after twelve months ».',
      '«It will be reviewed after twelve months»: سيتم تقييمها.',
      'It will be reviewed.',
      '«It will be reviewed after twelve months»: se evaluará.',
    )),
  ],
);
