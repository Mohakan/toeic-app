import type { Unit } from '../../../types';
import { lesson, listen, match, unit, v, x } from '../build';

export const c1Collocations: Unit = unit(
  {
    id: 'c1-collocations',
    emoji: '🧠',
    level: 5,
    part: 'R5',
    title: x('Collocations et quasi-synonymes', 'المتلازمات وشبه المترادفات', 'Collocations and near-synonyms', 'Colocaciones y casi sinónimos'),
    subtitle: x('Le mot exact du monde des affaires', 'الكلمة الدقيقة في عالم الأعمال', 'The exact business word', 'La palabra exacta del mundo de los negocios'),
    lesson: lesson(
      x('Choisir entre des mots proches grâce aux combinaisons naturelles.', 'الاختيار بين كلمات متقاربة بفضل التلازمات الطبيعية.', 'Choose between close words using natural combinations.', 'Elegir entre palabras parecidas gracias a las combinaciones naturales.'),
      [
        x('Certains mots vont ensemble : meet a deadline, conduct a survey, raise funds, place an order.', 'بعض الكلمات تتلازم: meet a deadline وconduct a survey وraise funds وplace an order.', 'Collocations: meet a deadline, conduct a survey…', 'Hay palabras que van juntas: meet a deadline, conduct a survey, raise funds, place an order.'),
        x('Lis toute la phrase : la préposition après le blanc donne souvent la clé (contingent upon, compliant with).', 'اقرأ الجملة كاملة: حرف الجر بعد الفراغ غالبًا هو المفتاح (contingent upon وcompliant with).', 'The preposition after the blank is often the key.', 'Lee toda la frase: la preposición que sigue al hueco suele dar la clave (contingent upon, compliant with).'),
      ],
      'We conducted a survey and placed an order based on the results.',
      x('conduct + survey ; place + order.', 'conduct + survey وplace + order.', 'conduct a survey; place an order.', 'conduct + survey; place + order.'),
    ),
  },
  [
    v('c1-co-q1', 5, 'The offer is ___ to final approval by the board of directors.', ['subject', 'dependent', 'reliant', 'conditional'], x(
      'Seul « subject » se construit avec « to » : « subject to approval ». On dit « dependent on », « reliant on », « conditional on ».',
      'وحدها «subject» تُبنى مع «to»: «subject to approval». ونقول «dependent on» و«reliant on» و«conditional on».',
      'Only “subject” takes “to”: “subject to approval”. We say “dependent on”, “reliant on”, “conditional on”.',
      'Solo «subject» se construye con «to»: «subject to approval». Se dice «dependent on», «reliant on», «conditional on».',
    )),
    v('c1-co-q2', 5, 'The director will ___ a speech at the opening ceremony.', ['deliver', 'say', 'tell', 'speak'], x(
      'Collocation : « deliver a speech » (ou « give a speech »). « Say », « tell » et « speak » ne s’emploient pas avec « a speech ».',
      'تلازم: «deliver a speech» (أو «give a speech»). ولا تُستعمل «say» و«tell» و«speak» مع «a speech».',
      'Collocation: “deliver a speech” (or “give”). “Say”, “tell” and “speak” do not go with “a speech”.',
      'Colocación: «deliver a speech» (o «give a speech»). «Say», «tell» y «speak» no se combinan con «a speech».',
    )),
    v('c1-co-q3', 5, 'To ___ the deadline, the team worked through the weekend.', ['meet', 'reach', 'make', 'do'], x(
      'Collocation : « meet a deadline ».',
      'تلازم: «meet a deadline».',
      '“meet a deadline”.',
      'Colocación: «meet a deadline».',
    )),
    v('c1-co-q4', 5, 'The marketing department will ___ a survey of 2,000 customers.', ['conduct', 'perform', 'make', 'lead'], x(
      'Collocation : « conduct a survey ».',
      'تلازم: «conduct a survey».',
      '“conduct a survey”.',
      'Colocación: «conduct a survey».',
    )),
    v('c1-co-q5', 5, 'The charity hopes to ___ $50,000 for the new hospital wing.', ['raise', 'rise', 'arise', 'lift'], x(
      '« Raise funds / money » ; « rise » est intransitif (les prix montent).',
      '«Raise funds/money»، و«rise» لازم (الأسعار ترتفع).',
      '“raise money”; “rise” is intransitive.',
      '«Raise funds / money»; «rise» es intransitivo (los precios suben).',
    )),
    v('c1-co-q6', 5, 'Due to high demand, this item is currently on ___ and will ship in June.', ['backorder', 'backup', 'background', 'backlog'], x(
      '« On backorder » = en rupture, commande en attente de stock.',
      '«On backorder» = طلبية مؤجلة لعدم توفر المخزون.',
      '“on backorder”.',
      '«On backorder» = pedido pendiente por falta de existencias.',
    )),
    v('c1-co-q7', 5, 'Ms. Park was ___ recognized for her outstanding contribution to the project.', ['publicly', 'public', 'publicity', 'publicize'], x(
      'Devant le participe « recognized » → adverbe.',
      'قبل اسم المفعول «recognized» ← حال.',
      'Before the participle → adverb.',
      'Delante del participio «recognized» → adverbio.',
    )),
  ],
  [
    match('c1-co-s2-m1', ['liability', 'niche', 'endorse', 'streamline', 'capacity'], x(
      '« Liability » = responsabilité (juridique) ou dette ; « streamline » = simplifier un processus.',
      '«Liability» = مسؤولية قانونية أو دَين، و«streamline» = تبسيط إجراء.',
      'Liability = legal duty or debt; streamline = simplify.',
      '«Liability» = responsabilidad (legal) o deuda; «streamline» = simplificar un proceso.',
    )),
    v('c1-co-s2-q1', 5, 'The company has decided to ___ its older models and focus on electric vehicles.', ['phase out', 'phase in', 'carry on', 'take up'], x(
      '« Phase out » = retirer progressivement. « Phase in » = introduire progressivement.',
      '«Phase out» = سحب تدريجيًا، و«phase in» = إدخال تدريجيًا.',
      'Phase out = gradually stop.',
      '«Phase out» = retirar progresivamente. «Phase in» = introducir progresivamente.',
    )),
    v('c1-co-s2-q2', 5, 'The new CEO has ___ an ambitious restructuring plan.', ['unveiled', 'uncovered', 'undone', 'unfolded'], x(
      '« Unveil a plan » = dévoiler officiellement un plan.',
      '«Unveil a plan» = الكشف رسميًا عن خطة.',
      'Unveil = present publicly.',
      '«Unveil a plan» = presentar oficialmente un plan.',
    )),
    v('c1-co-s2-q3', 5, 'Our team will ___ a thorough analysis of the competitors’ prices.', ['carry out', 'carry off', 'take out', 'set off'], x(
      '« Carry out an analysis » = réaliser une analyse.',
      '«Carry out an analysis» = إجراء تحليل.',
      'Carry out = perform.',
      '«Carry out an analysis» = realizar un análisis.',
    )),
    v('c1-co-s2-q4', 5, 'The merger could ___ significant savings for both companies.', ['yield', 'yell', 'yearn', 'yawn'], x(
      '« Yield savings » = générer des économies.',
      '«Yield savings» = تحقيق وفورات.',
      'Yield = produce.',
      '«Yield savings» = generar ahorros.',
    )),
    v('c1-co-s2-q5', 5, 'The proposal was ___ rejected by the shareholders: not one voted in favor.', ['unanimously', 'unanimous', 'unanimity', 'unanimousness'], x(
      'Modifie le verbe « rejected » → adverbe « unanimously ».',
      'يصف الفعل «rejected» ← الحال «unanimously».',
      'An adverb modifies the verb.',
      'Modifica el verbo «rejected» → adverbio «unanimously».',
    )),
    v('c1-co-s2-q6', 5, 'We need to ___ the remaining issues before the contract is signed.', ['iron out', 'iron in', 'wear out', 'point out'], x(
      '« Iron out problems » = régler les derniers problèmes.',
      '«Iron out problems» = حلّ المشاكل المتبقية.',
      'Iron out = resolve small problems.',
      '«Iron out problems» = resolver los últimos problemas.',
    )),
    v('c1-co-s2-q7', 5, 'Ms. Ayari has a ___ record of leading successful product launches.', ['proven', 'proved', 'proving', 'proof'], x(
      'Collocation : « a proven track record » = une réussite prouvée.',
      'متلازمة: «a proven track record» = سجل نجاح مثبت.',
      '“A proven track record”.',
      'Colocación: «a proven track record» = una trayectoria probada.',
    )),
    listen('c1-co-s2-l1', 'L3', 5, 'W: The vendor is willing to lower the price, but only if we commit to a three-year contract.\nM: That’s a big commitment. Let’s ask legal to look at the cancellation terms before we agree to anything.', 'What does the man want to do first?', ['Have the cancellation terms reviewed', 'Sign the contract immediately', 'Find another vendor', 'Ask for a lower price'], x(
      '« Ask legal to look at the cancellation terms before we agree ».',
      '«Ask legal to look at the cancellation terms»: مراجعة شروط الإلغاء.',
      'He wants a legal review first.',
      '«Ask legal to look at the cancellation terms»: revisar las condiciones de cancelación.',
    )),
    listen('c1-co-s2-l2', 'L4', 5, 'Before we close, I’d like to acknowledge the logistics team. Thanks to their efforts to streamline our delivery routes, fuel costs have fallen by eleven percent, which more than offsets the rise in shipping volumes.', 'What is the speaker mainly doing?', ['Praising a team’s achievement', 'Announcing new routes', 'Complaining about fuel prices', 'Introducing a new manager'], x(
      '« I’d like to acknowledge the logistics team » = remercier, féliciter.',
      '«I’d like to acknowledge the logistics team» = شكر الفريق والإشادة به.',
      'She thanks the team.',
      '«I’d like to acknowledge the logistics team» = agradecer y felicitar.',
    )),
  ],
  [
    match('c1-co-s3-m1', ['procurement', 'incentive', 'audit', 'prototype', 'expedite'], x(
      '« Incentive » = mesure incitative ; « prototype » = premier modèle d’essai.',
      '«Incentive» = حافز، و«prototype» = نموذج أولي للتجربة.',
      'Incentive = motivation; prototype = first test model.',
      '«Incentive» = incentivo; «prototype» = primer modelo de prueba.',
    )),
    v('c1-co-s3-q1', 5, 'The minister will ___ the new trade agreement at tomorrow’s press conference.', ['outline', 'outlive', 'outrun', 'outgrow'], x(
      '« Outline » = présenter les grandes lignes.',
      '«Outline» = عرض الخطوط العريضة.',
      'Outline = describe the main points.',
      '«Outline» = presentar a grandes rasgos.',
    )),
    v('c1-co-s3-q2', 5, 'Investors remain ___ optimistic despite the slowdown.', ['cautiously', 'cautious', 'caution', 'cautioned'], x(
      'Collocation « cautiously optimistic » = prudemment optimiste ; adverbe devant un adjectif.',
      'متلازمة «cautiously optimistic» = متفائل بحذر، حال قبل صفة.',
      '“Cautiously optimistic”.',
      'Colocación «cautiously optimistic» = prudentemente optimista; adverbio delante de adjetivo.',
    )),
    v('c1-co-s3-q3', 5, 'The firm was ordered to ___ compensation to the affected customers.', ['pay', 'give out', 'spend', 'cost'], x(
      'Collocation : « pay compensation » = verser une indemnité.',
      'متلازمة: «pay compensation» = دفع تعويض.',
      '“Pay compensation”.',
      'Colocación: «pay compensation» = pagar una indemnización.',
    )),
    v('c1-co-s3-q4', 5, 'The two companies agreed to ___ forces to enter the Asian market.', ['join', 'link', 'unite', 'connect'], x(
      'Expression figée : « join forces » = unir ses forces.',
      'تعبير ثابت: «join forces» = توحيد الجهود.',
      'Fixed phrase “join forces”.',
      'Expresión fija: «join forces» = unir fuerzas.',
    )),
    v('c1-co-s3-q5', 5, 'Several employees ___ concerns about the new monitoring software.', ['raised', 'rose', 'arose', 'lifted'], x(
      '« Raise concerns » = exprimer des inquiétudes (transitif). « Rise / arise » sont intransitifs.',
      '«Raise concerns» = إبداء مخاوف (متعدٍّ)، أما «rise / arise» فلازمان.',
      '“Raise” takes an object.',
      '«Raise concerns» = plantear inquietudes (transitivo). «Rise / arise» son intransitivos.',
    )),
    v('c1-co-s3-q6', 5, 'Please ___ the attached file for the full list of conditions.', ['refer to', 'refer at', 'relate on', 'respond at'], x(
      '« Refer to » = se reporter à.',
      '«Refer to» = الرجوع إلى.',
      '“Refer to” = consult.',
      '«Refer to» = remitirse a.',
    )),
    v('c1-co-s3-q7', 5, 'The new tax law will ___ effect on 1 January.', ['take', 'make', 'have', 'come'], x(
      'Expression figée : « take effect » = entrer en vigueur.',
      'تعبير ثابت: «take effect» = يدخل حيّز التنفيذ.',
      '“Take effect” = start to apply.',
      'Expresión fija: «take effect» = entrar en vigor.',
    )),
    listen('c1-co-s3-l1', 'L3', 5, 'M: Our competitor has just launched a cheaper version of our app.\nW: We shouldn’t panic. Our clients pay for reliability, not price. I’d rather invest in better support than start a price war.', 'What does the woman recommend?', ['Improving customer support', 'Lowering prices', 'Launching a new app', 'Buying the competitor'], x(
      '« I’d rather invest in better support than start a price war ».',
      '«I’d rather invest in better support»: تحسين خدمة الدعم.',
      'Invest in support, not a price war.',
      '«I’d rather invest in better support»: mejorar el servicio de asistencia.',
    )),
    listen('c1-co-s3-l2', 'L4', 5, 'Following last month’s audit, all departments must now obtain two quotes for any purchase above ten thousand dinars. This measure takes effect immediately and will be reviewed at the end of the year.', 'What must departments now do?', ['Get two price offers for large purchases', 'Stop all purchases', 'Repeat the audit', 'Report to the board weekly'], x(
      '« Obtain two quotes » = obtenir deux devis.',
      '«Obtain two quotes» = الحصول على عرضي سعر.',
      'Two quotes for big purchases.',
      '«Obtain two quotes» = conseguir dos presupuestos.',
    )),
  ],
);
