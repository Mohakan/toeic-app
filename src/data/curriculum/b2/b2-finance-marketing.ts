import type { Unit } from '../../../types';
import { lesson, listen, match, unit, v, x } from '../build';

export const b2FinanceMarketing: Unit = unit(
  {
    id: 'b2-finance-marketing',
    emoji: '📈',
    level: 4,
    part: 'R5',
    title: x('Finance et marketing', 'المالية والتسويق', 'Finance and marketing', 'Finanzas y marketing'),
    subtitle: x('Chiffres, ventes et campagnes', 'الأرقام والمبيعات والحملات', 'Figures, sales and campaigns', 'Cifras, ventas y campañas'),
    lesson: lesson(
      x('Comprendre les mots des résultats financiers et des campagnes.', 'فهم مفردات النتائج المالية والحملات.', 'Understand financial results and campaign vocabulary.', 'Entender el vocabulario de los resultados financieros y de las campañas.'),
      [
        x('Revenue (chiffre d’affaires) ≠ profit (bénéfice). Rise / increase ↗, decline / drop ↘.', 'Revenue (إيرادات) ≠ profit (ربح). rise/increase ↗ وdecline/drop ↘.', 'Revenue ≠ profit; rise ↗, decline ↘.', 'Revenue (ingresos) ≠ profit (beneficio). Rise / increase ↗, decline / drop ↘.'),
        x('Faux amis : « actually » = en fait ; « eventually » = finalement.', 'كلمات خادعة: «actually» = في الواقع، «eventually» = في النهاية.', 'False friends: actually, eventually.', 'Falsos amigos: «actually» = en realidad; «eventually» = finalmente.'),
      ],
      'Revenue rose by 8 percent, but profits declined because of higher costs.',
      x('Le chiffre d’affaires monte, le bénéfice baisse.', 'الإيرادات ارتفعت والأرباح انخفضت.', 'Revenue up, profit down.', 'Los ingresos suben y el beneficio baja.'),
    ),
  },
  [
    match('b2-fm-m1', ['revenue', 'profit', 'forecast', 'campaign', 'competitor'], x(
      '« Forecast » = prévision ; « competitor » = concurrent.',
      '«Forecast» = توقّع و«competitor» = منافس.',
      'Forecast and competitor are frequent in Part 7.',
      '«Forecast» = previsión; «competitor» = competidor.',
    )),
    v('b2-fm-q1', 4, 'The new marketing campaign is expected to ___ sales by at least 15 percent.', ['boost', 'boast', 'board', 'bounce'], x(
      '« Boost sales » = stimuler les ventes. « Boast » (se vanter) est un piège de forme.',
      '«Boost sales» = تنشيط المبيعات. «Boast» (يتباهى) فخ شكلي.',
      '“Boost sales” = increase them. “Boast” (brag) is a look-alike trap.',
      '«Boost sales» = impulsar las ventas. «Boast» (presumir) es una trampa de forma.',
    )),
    v('b2-fm-q2', 4, 'According to the latest ___, sales will grow by 5 percent next year.', ['forecast', 'receipt', 'warranty', 'agenda'], x(
      'Une projection sur l’avenir → « forecast ».',
      'تقدير مستقبلي ← «forecast».',
      'A future projection → “forecast”.',
      'Una proyección hacia el futuro → «forecast».',
    )),
    v('b2-fm-q3', 4, 'Customers who join our loyalty program are ___ to a 10% discount.', ['entitled', 'enabled', 'entered', 'engaged'], x(
      '« Be entitled to » = avoir droit à.',
      '«Be entitled to» = يحق له.',
      '“Be entitled to” = have the right to.',
      '«Be entitled to» = tener derecho a.',
    )),
    v('b2-fm-q4', 4, 'The advertising campaign was ___ successful: sales doubled in two months.', ['extremely', 'extreme', 'extremes', 'extremity'], x(
      'Devant l’adjectif « successful » → adverbe.',
      'قبل الصفة «successful» ← حال.',
      'Before an adjective → adverb.',
      'Delante del adjetivo «successful» → adverbio.',
    )),
    v('b2-fm-q5', 4, 'Suppliers must ___ with our new packaging standards.', ['comply', 'complete', 'compete', 'compose'], x(
      '« Comply with » = se conformer à.',
      '«Comply with» = يمتثل لـ.',
      '“Comply with”.',
      '«Comply with» = cumplir con.',
    )),
    listen('b2-fm-l1', 'L4', 4, 'To thank our loyal customers, all members of our rewards program will receive double points on every purchase during the month of November. Simply show your membership card at checkout.', 'What will members receive in November?', ['Double points on purchases', 'A free membership card', 'A 50 percent discount', 'Free delivery'], x(
      '« Double points on every purchase » : des points doublés.',
      '«Double points on every purchase»: نقاط مضاعفة.',
      '“Double points on every purchase”.',
      '«Double points on every purchase»: puntos dobles en cada compra.',
    )),
  ],
  [
    match('b2-fm-s2-m1', ['invoice', 'budget', 'refund', 'survey', 'launch'], x(
      '« Refund » = remboursement ; « launch » = lancement d’un produit.',
      '«Refund» = استرداد المال و«launch» = إطلاق منتج.',
      'Refund = money back; launch = new product release.',
      '«Refund» = reembolso; «launch» = lanzamiento de un producto.',
    )),
    v('b2-fm-s2-q1', 4, 'The company’s profits ___ by 12 percent after the price increase.', ['declined', 'declared', 'deserved', 'defended'], x(
      '« Profits declined » = les bénéfices ont baissé. Les autres verbes n’ont pas de sens ici.',
      '«Profits declined» = انخفضت الأرباح، والأفعال الأخرى لا معنى لها هنا.',
      '“Declined” = went down.',
      '«Profits declined» = los beneficios bajaron. Los demás verbos no tienen sentido aquí.',
    )),
    v('b2-fm-s2-q2', 4, 'We need to reduce our operating ___ before the end of the year.', ['expenses', 'expansions', 'experiences', 'experiments'], x(
      '« Operating expenses » = frais de fonctionnement.',
      '«Operating expenses» = مصاريف التشغيل.',
      '“Operating expenses” = running costs.',
      '«Operating expenses» = gastos de funcionamiento.',
    )),
    v('b2-fm-s2-q3', 4, 'The survey results show that customers are very ___ to price changes.', ['sensitive', 'sensible', 'sensation', 'sensibly'], x(
      '« Sensitive to » = sensible à. Faux ami : « sensible » = raisonnable.',
      '«Sensitive to» = حسّاس لـ. وكلمة «sensible» خادعة وتعني عاقل.',
      'Sensitive ≠ sensible (reasonable).',
      '«Sensitive to» = sensible a. Falso amigo: «sensible» = sensato.',
    )),
    v('b2-fm-s2-q4', 4, 'Our main ___ has just opened a store across the street.', ['competitor', 'competition', 'competitive', 'compete'], x(
      'Une personne ou entreprise qui ouvre un magasin → nom de personne « competitor ».',
      'شخص أو شركة تفتح متجرًا ← اسم فاعل «competitor».',
      'A company → “competitor”.',
      'Una empresa que abre una tienda → sustantivo «competitor».',
    )),
    v('b2-fm-s2-q5', 4, 'The marketing team will ___ the new product at the trade fair in March.', ['launch', 'lunch', 'lack', 'lend'], x(
      '« Launch a product » = lancer un produit. « Lunch » = déjeuner (piège sonore).',
      '«Launch a product» = إطلاق منتج. و«lunch» = غداء (فخ صوتي).',
      '“Launch” a product; “lunch” is a sound trap.',
      '«Launch a product» = lanzar un producto. «Lunch» = almuerzo (trampa sonora).',
    )),
    v('b2-fm-s2-q6', 4, 'The figures are ___ and will be confirmed next week.', ['preliminary', 'permanent', 'punctual', 'previous'], x(
      '« Preliminary » = provisoire, avant confirmation.',
      '«Preliminary» = أولي قبل التأكيد.',
      'Not yet confirmed.',
      '«Preliminary» = provisional, antes de confirmarse.',
    )),
    v('b2-fm-s2-q7', 4, 'Please submit your travel receipts so that we can ___ you.', ['reimburse', 'reinforce', 'remind', 'replace'], x(
      '« Reimburse » = rembourser des frais.',
      '«Reimburse» = يسدّد المصاريف.',
      '“Reimburse” = pay back.',
      '«Reimburse» = reembolsar los gastos.',
    )),
    listen('b2-fm-s2-l1', 'L3', 4, 'W: Our online ads brought a lot of visitors to the website last month.\nM: Yes, but very few of them actually bought anything. I think the prices on the site are too high.', 'What problem does the man mention?', ['Few visitors made a purchase', 'The website was not working', 'The ads were too expensive', 'There were few visitors'], x(
      '« Very few of them actually bought anything ». Les visiteurs, eux, étaient nombreux.',
      '«Very few of them actually bought anything»، أما الزوار فكانوا كثيرين.',
      'Many visitors, few buyers.',
      '«Very few of them actually bought anything». Los visitantes, en cambio, fueron muchos.',
    )),
    listen('b2-fm-s2-l2', 'L4', 4, 'In financial news, Norton Electronics reported record revenue for the third quarter. However, the company warned that profits may fall next year because of rising material costs.', 'What does the company expect next year?', ['Lower profits', 'Record revenue', 'Cheaper materials', 'A new factory'], x(
      '« Profits may fall next year ». Le record concerne le trimestre passé.',
      '«Profits may fall next year»، أما الرقم القياسي فيخص الربع الماضي.',
      '“Profits may fall”.',
      '«Profits may fall next year». El récord es del trimestre pasado.',
    )),
  ],
  [
    match('b2-fm-s3-m1', ['audit', 'merger', 'shareholder', 'market-share', 'feedback'], x(
      '« Merger » = fusion ; « shareholder » = actionnaire.',
      '«Merger» = اندماج و«shareholder» = مساهم.',
      'Merger = two firms join; shareholder = owner of shares.',
      '«Merger» = fusión; «shareholder» = accionista.',
    )),
    v('b2-fm-s3-q1', 4, 'The two banks announced a ___ that will create the country’s largest lender.', ['merger', 'margin', 'mention', 'measure'], x(
      'Deux banques qui s’unissent → « merger » (fusion).',
      'بنكان يتحدان ← «merger» (اندماج).',
      'Two banks joining → merger.',
      'Dos bancos que se unen → «merger» (fusión).',
    )),
    v('b2-fm-s3-q2', 4, 'An external firm will ___ our accounts in January.', ['audit', 'attend', 'adopt', 'admit'], x(
      '« Audit the accounts » = vérifier les comptes.',
      '«Audit the accounts» = تدقيق الحسابات.',
      '“Audit” = check the accounts.',
      '«Audit the accounts» = auditar las cuentas.',
    )),
    v('b2-fm-s3-q3', 4, 'Thanks to its new app, the company has increased its market ___ to 20 percent.', ['share', 'shape', 'sign', 'shelf'], x(
      '« Market share » = part de marché.',
      '«Market share» = الحصة السوقية.',
      '“Market share”.',
      '«Market share» = cuota de mercado.',
    )),
    v('b2-fm-s3-q4', 4, 'The campaign targets young professionals, who are ___ interested in eco-friendly products.', ['increasingly', 'increasing', 'increase', 'increased'], x(
      'Devant l’adjectif « interested » → adverbe « increasingly » (de plus en plus).',
      'قبل الصفة «interested» ← الحال «increasingly» (بشكل متزايد).',
      'Adverb before an adjective.',
      'Delante del adjetivo «interested» → adverbio «increasingly» (cada vez más).',
    )),
    v('b2-fm-s3-q5', 4, 'Shareholders will receive a ___ of €2 per share this year.', ['dividend', 'division', 'deposit', 'discount'], x(
      '« Dividend » = la part des bénéfices versée aux actionnaires.',
      '«Dividend» = نصيب الأرباح الموزّع على المساهمين.',
      'Profit paid to shareholders.',
      '«Dividend» = la parte de los beneficios pagada a los accionistas.',
    )),
    v('b2-fm-s3-q6', 4, 'The project went over ___, so we had to ask for more funding.', ['budget', 'badge', 'bargain', 'balance'], x(
      '« Go over budget » = dépasser le budget.',
      '«Go over budget» = تجاوز الميزانية.',
      '“Over budget” = spent too much.',
      '«Go over budget» = pasarse del presupuesto.',
    )),
    v('b2-fm-s3-q7', 4, 'Customer ___ on the new packaging has been very positive.', ['feedback', 'feeding', 'feature', 'fee'], x(
      '« Customer feedback » = retours, avis des clients.',
      '«Customer feedback» = آراء العملاء.',
      'Customers’ opinions.',
      '«Customer feedback» = las opiniones de los clientes.',
    )),
    listen('b2-fm-s3-l1', 'L3', 4, 'M: Should we lower the price of the new headphones to compete with Zenith?\nW: I’d rather not. Our sound quality is better. Let’s focus the next campaign on that instead.', 'What does the woman suggest?', ['Promoting the product’s quality', 'Lowering the price', 'Stopping the campaign', 'Buying Zenith headphones'], x(
      '« Let’s focus the next campaign on that » = sur la qualité du son.',
      '«Let’s focus the next campaign on that» أي على جودة الصوت.',
      'Focus on sound quality.',
      '«Let’s focus the next campaign on that» = en la calidad del sonido.',
    )),
    listen('b2-fm-s3-l2', 'L4', 4, 'Before we look at the sales figures, a quick reminder: expense reports for October must be submitted by Friday. Late reports will be processed next month.', 'What will happen to late expense reports?', ['They will be processed later', 'They will be rejected', 'They will be paid on Friday', 'They will be sent back'], x(
      '« Late reports will be processed next month » = traités plus tard.',
      '«Late reports will be processed next month» = ستُعالج لاحقًا.',
      'Processed next month.',
      '«Late reports will be processed next month» = se tramitarán más tarde.',
    )),
  ],
);
