import type { Unit } from '../../../types';
import { lesson, listen, match, order, read, respond, unit, v, x } from '../build';

const LAUNCH_MEMO = 'To: Product team\nRe: Spring launch\nDue to a shortage of components, we have decided to (1) ___ the launch of the X5 headphones until June. Our supplier in Taiwan has promised to deliver the missing parts by mid-April. (2) ___ In the meantime, the marketing team will (3) ___ a new campaign focused on the improved battery life.';

const MERGER_NEWS = 'The planned merger between Nour Telecom and Atlas Mobile has (1) ___ after the two companies failed to agree on the value of Atlas’s network. Analysts had expected the deal to (2) ___ by the end of the year. (3) ___ Nour Telecom said it would now focus on expanding its own network in the south.';

const HR_NOTICE = 'Dear colleagues,\nAs part of our cost-saving plan, we will not (1) ___ any new permanent staff this year. However, no employees will be (2) ___. Instead, we will (3) ___ spending on travel and external consultants. This plan was approved by the board on Tuesday.';

export const c1PhrasalVerbs: Unit = unit(
  {
    id: 'c1-phrasal-verbs',
    emoji: '🔧',
    level: 5,
    part: 'R5 · R6',
    title: x('Verbes à particule des affaires', 'الأفعال المركبة في عالم الأعمال', 'Business phrasal verbs', 'Phrasal verbs de negocios'),
    subtitle: x('Put off, take over, lay off, fall through…', 'Put off وtake over وlay off وfall through…', 'Put off, take over, lay off, fall through…', 'Put off, take over, lay off, fall through…'),
    lesson: lesson(
      x('Comprendre et employer les verbes à particule fréquents dans les textes professionnels.', 'فهم الأفعال المركبة الشائعة في النصوص المهنية واستعمالها.', 'Understand and use common business phrasal verbs.', 'Entender y usar los phrasal verbs frecuentes en textos profesionales.'),
      [
        x('Le sens dépend de la particule : put off (reporter) ≠ put forward (proposer) ≠ put up (augmenter, héberger).', 'المعنى يتوقف على الأداة: put off (تأجيل) ≠ put forward (اقتراح) ≠ put up (رفع، استضافة).', 'The particle changes the meaning.', 'El sentido depende de la partícula: put off (aplazar) ≠ put forward (proponer) ≠ put up (subir, alojar).'),
        x('Le TOEIC remplace souvent un verbe simple par un verbe à particule : postpone = put off ; cancel = call off.', 'غالبًا ما يعوّض TOEIC فعلًا بسيطًا بفعل مركب: postpone = put off وcancel = call off.', 'Postpone = put off; cancel = call off.', 'El TOEIC suele sustituir un verbo simple por un phrasal verb: postpone = put off; cancel = call off.'),
        x('Séparables : « set it up », jamais « set up it » avec un pronom.', 'قابلة للفصل: «set it up» وليس «set up it» مع الضمير.', 'Pronoun goes in the middle: set it up.', 'Separables: «set it up», nunca «set up it» con pronombre.'),
      ],
      'The deal fell through, so the board called off the press conference.',
      x('Fall through = échouer ; call off = annuler.', 'Fall through = فشل وcall off = ألغى.', 'Fall through = fail; call off = cancel.', 'Fall through = fracasar; call off = cancelar.'),
    ),
  },
  [
    v('c1-pv-q1', 5, 'Bad weather forced the organizers to ___ the outdoor ceremony.', ['call off', 'call on', 'call up', 'call back'], x(
      '« Call off » = annuler.',
      '«Call off» = ألغى.',
      'Call off = cancel.',
      '«Call off» = cancelar.',
    )),
    v('c1-pv-q2', 5, 'A larger group is expected to ___ the struggling airline.', ['take over', 'take off', 'take after', 'take in'], x(
      '« Take over » = racheter, prendre le contrôle.',
      '«Take over» = استحوذ على.',
      'Take over = acquire.',
      '«Take over» = adquirir, tomar el control.',
    )),
    v('c1-pv-q3', 5, 'Our lawyers will ___ a new contract by Friday.', ['draw up', 'draw back', 'draw out', 'draw in'], x(
      '« Draw up a contract » = rédiger un contrat.',
      '«Draw up a contract» = صياغة عقد.',
      'Draw up = write a document.',
      '«Draw up a contract» = redactar un contrato.',
    )),
    v('c1-pv-q4', 5, 'Ms. Lee will ___ with the client after the meeting to confirm the details.', ['follow up', 'follow on', 'follow through', 'follow out'], x(
      '« Follow up with someone » = relancer, recontacter.',
      '«Follow up with someone» = متابعة شخص.',
      'Follow up = contact again.',
      '«Follow up with someone» = hacer un seguimiento.',
    )),
    v('c1-pv-q5', 5, 'The company plans to ___ its new app in three more countries next year.', ['roll out', 'roll over', 'roll back', 'roll up'], x(
      '« Roll out » = déployer, lancer progressivement.',
      '«Roll out» = إطلاق تدريجي.',
      'Roll out = launch widely.',
      '«Roll out» = desplegar, lanzar progresivamente.',
    )),
    read('c1-pv-r1', 'R6', 5, LAUNCH_MEMO, 'Choose the best option for blank (1).', ['put off', 'put up', 'put on', 'put forward'], x(
      '« Until June » → reporter : « put off ».',
      '«Until June» ← تأجيل: «put off».',
      'Postpone = put off.',
      '«Until June» → aplazar: «put off».',
    )),
    read('c1-pv-r2', 'R6', 5, LAUNCH_MEMO, 'Choose the sentence that best fits blank (2).', ['If this date is met, production can start in May.', 'The headphones were a great success last year.', 'Taiwan is a popular destination for tourists.', 'Please return your old headphones to the store.'], x(
      'La phrase relie la date de livraison (mi-avril) au lancement de juin.',
      'الجملة تربط موعد التسليم (منتصف أفريل) بإطلاق جوان.',
      'It links the delivery date to the launch.',
      'La frase enlaza la fecha de entrega (mediados de abril) con el lanzamiento de junio.',
    )),
    read('c1-pv-r3', 'R6', 5, LAUNCH_MEMO, 'Choose the best option for blank (3).', ['come up with', 'come down with', 'come across as', 'come out of'], x(
      '« Come up with a campaign » = imaginer, proposer une campagne.',
      '«Come up with a campaign» = ابتكار حملة.',
      'Come up with = create.',
      '«Come up with a campaign» = idear una campaña.',
    )),
    order('c1-pv-o1', 'We need to sort out the problem before Friday', x('Commence par « We need ».', 'ابدأ بـ «We need».', 'Start with “We need”.', 'Empieza por «We need».'), x(
      '« Sort out » = régler un problème.',
      '«Sort out» = حلّ مشكلة.',
      'Sort out = solve.',
      '«Sort out» = resolver un problema.',
    )),
    respond('c1-pv-l1', 5, 'Why did Mr. Ben Salah turn down the offer?', ['He felt the salary was too low.', 'He turned it upside down.', 'The offer is valid until May.'], x(
      '« Turn down » = refuser → on donne la raison.',
      '«Turn down» = رفض ← نذكر السبب.',
      'Turn down = refuse.',
      '«Turn down» = rechazar → se da la razón.',
    )),
    match('c1-phrasal-verbs-w1', ['phase-out', 'wear-and-tear', 'lean-manufacturing', 'streamline', 'outsource'], x(
      'Mots C1 sur la production : relis l’exemple de chaque mot dans l’onglet Mots.',
      'مفردات C1 حول الإنتاج: راجع مثال كل كلمة في قسم الكلمات.',
      'C1 words about production: review each example in the Words tab.',
      'Palabras C1 sobre la producción: repasa el ejemplo de cada una en la pestaña Palabras.',
    )),
  ],
  [
    v('c1-pv-s2-q1', 5, 'The CEO has decided to ___ after fifteen years at the head of the group.', ['step down', 'step up', 'step in', 'step on'], x(
      '« Step down » = démissionner d’un poste de direction.',
      '«Step down» = التنحي عن منصب.',
      'Step down = resign.',
      '«Step down» = dimitir de un cargo directivo.',
    )),
    v('c1-pv-s2-q2', 5, 'We have ___ printer paper; could you order some more?', ['run out of', 'run into', 'run over', 'run through'], x(
      '« Run out of » = ne plus avoir de.',
      '«Run out of» = نفاد.',
      'Run out of = have none left.',
      '«Run out of» = quedarse sin.',
    )),
    v('c1-pv-s2-q3', 5, 'Because of the crisis, the factory had to ___ two hundred workers.', ['lay off', 'lay out', 'lay down', 'lay by'], x(
      '« Lay off » = licencier (pour raisons économiques).',
      '«Lay off» = تسريح عمال.',
      'Lay off = dismiss for economic reasons.',
      '«Lay off» = despedir (por motivos económicos).',
    )),
    v('c1-pv-s2-q4', 5, 'The meeting has been ___ to Tuesday so that the director can attend.', ['brought forward', 'brought about', 'brought up', 'brought off'], x(
      '« Bring forward » = avancer une date.',
      '«Bring forward» = تقديم موعد.',
      'Bring forward = move earlier.',
      '«Bring forward» = adelantar una fecha.',
    )),
    v('c1-pv-s2-q5', 5, 'Can you ___ why the invoice was paid twice?', ['look into', 'look up to', 'look over at', 'look out'], x(
      '« Look into » = examiner, enquêter sur.',
      '«Look into» = التحقيق في.',
      'Look into = investigate.',
      '«Look into» = investigar.',
    )),
    read('c1-pv-s2-r1', 'R6', 5, MERGER_NEWS, 'Choose the best option for blank (1).', ['fallen through', 'fallen behind', 'fallen for', 'fallen off'], x(
      'Fusion abandonnée faute d’accord → « fall through » (échouer).',
      'اندماج فشل لغياب الاتفاق ← «fall through».',
      'Fall through = fail to happen.',
      'Fusión abandonada por falta de acuerdo → «fall through» (fracasar).',
    )),
    read('c1-pv-s2-r2', 'R6', 5, MERGER_NEWS, 'Choose the best option for blank (2).', ['go through', 'go off', 'go over', 'go by'], x(
      '« A deal goes through » = un accord est conclu.',
      '«A deal goes through» = إتمام الصفقة.',
      'Go through = be completed.',
      '«A deal goes through» = un acuerdo se cierra.',
    )),
    read('c1-pv-s2-r3', 'R6', 5, MERGER_NEWS, 'Choose the sentence that best fits blank (3).', ['Shares in both companies fell sharply on the news.', 'The network covers most of the country’s mountains.', 'Atlas Mobile was founded by a former engineer.', 'Customers can now pay their bills online.'], x(
      'Conséquence directe de l’échec annoncé : la réaction de la Bourse.',
      'نتيجة مباشرة للفشل المعلن: رد فعل البورصة.',
      'The market reacts to the news.',
      'Consecuencia directa del fracaso anunciado: la reacción de la Bolsa.',
    )),
    order('c1-pv-s2-o1', 'The client backed out of the deal at the last minute', x('Commence par « The client ».', 'ابدأ بـ «The client».', 'Start with “The client”.', 'Empieza por «The client».'), x(
      '« Back out of » = se retirer d’un engagement.',
      '«Back out of» = الانسحاب من التزام.',
      'Back out of = withdraw.',
      '«Back out of» = echarse atrás.',
    )),
    listen('c1-pv-s2-l1', 'L3', 5, 'W: Did the bank go ahead with the loan?\nM: Not yet. They want us to set aside more money for unexpected costs before they sign off on it.', 'What does the bank want?', ['A larger reserve for unexpected costs', 'A new business plan', 'A lower loan amount', 'A meeting with the CEO'], x(
      '« Set aside more money for unexpected costs » = une réserve plus importante.',
      '«Set aside more money»: احتياطي أكبر.',
      'A bigger reserve.',
      '«Set aside more money»: una reserva mayor.',
    )),
    match('c1-phrasal-verbs-w2', ['tender', 'sourcing', 'requisition', 'consolidate', 'drop-shipping'], x(
      'Mots C1 sur les achats et la logistique : relis l’exemple de chaque mot dans l’onglet Mots.',
      'مفردات C1 حول المشتريات والخدمات اللوجستية: راجع مثال كل كلمة في قسم الكلمات.',
      'C1 words about purchasing and logistics: review each example in the Words tab.',
      'Palabras C1 sobre las compras y la logística: repasa el ejemplo de cada una en la pestaña Palabras.',
    )),
  ],
  [
    v('c1-pv-s3-q1', 5, 'Ms. Haddad agreed to ___ the project while her colleague is on leave.', ['take on', 'take apart', 'take down', 'take back'], x(
      '« Take on » = prendre en charge (une responsabilité).',
      '«Take on» = تولّي مسؤولية.',
      'Take on = accept responsibility.',
      '«Take on» = asumir (una responsabilidad).',
    )),
    v('c1-pv-s3-q2', 5, 'The firm has had to ___ its expansion plans because of rising costs.', ['scale back', 'scale up', 'scale over', 'scale in'], x(
      '« Scale back » = réduire l’ampleur.',
      '«Scale back» = تقليص.',
      'Scale back = reduce.',
      '«Scale back» = reducir.',
    )),
    v('c1-pv-s3-q3', 5, 'Please ___ your expense reports by the end of the month.', ['hand in', 'hand out', 'hand over to', 'hand down'], x(
      '« Hand in » = remettre, rendre (un document).',
      '«Hand in» = تسليم وثيقة.',
      'Hand in = submit.',
      '«Hand in» = entregar (un documento).',
    )),
    v('c1-pv-s3-q4', 5, 'The new manager will ___ her experience in retail to improve sales.', ['draw on', 'draw up', 'draw back', 'draw off'], x(
      '« Draw on experience » = s’appuyer sur son expérience.',
      '«Draw on experience» = الاستفادة من الخبرة.',
      'Draw on = use.',
      '«Draw on experience» = recurrir a su experiencia.',
    )),
    v('c1-pv-s3-q5', 5, 'Over 300 people have ___ for the free webinar.', ['signed up', 'signed off', 'signed over', 'signed in to'], x(
      '« Sign up for » = s’inscrire à.',
      '«Sign up for» = التسجيل في.',
      'Sign up = register.',
      '«Sign up for» = inscribirse en.',
    )),
    read('c1-pv-s3-r1', 'R6', 5, HR_NOTICE, 'Choose the best option for blank (1).', ['take on', 'take off', 'take out', 'take up with'], x(
      '« Take on staff » = embaucher.',
      '«Take on staff» = توظيف.',
      'Take on = hire.',
      '«Take on staff» = contratar.',
    )),
    read('c1-pv-s3-r2', 'R6', 5, HR_NOTICE, 'Choose the best option for blank (2).', ['laid off', 'laid out', 'laid down', 'laid up'], x(
      '« No employees will be laid off » = aucun licenciement.',
      '«No employees will be laid off» = لا تسريح.',
      'No dismissals.',
      '«No employees will be laid off» = ningún despido.',
    )),
    read('c1-pv-s3-r3', 'R6', 5, HR_NOTICE, 'Choose the best option for blank (3).', ['cut back on', 'cut off from', 'cut in on', 'cut out of'], x(
      '« Cut back on spending » = réduire les dépenses.',
      '«Cut back on spending» = تقليص النفقات.',
      'Cut back on = reduce.',
      '«Cut back on spending» = recortar gastos.',
    )),
    order('c1-pv-s3-o1', 'They came up with a better solution', x('Commence par « They ».', 'ابدأ بـ «They».', 'Start with “They”.', 'Empieza por «They».'), x(
      '« Come up with » = trouver, proposer.',
      '«Come up with» = ابتكر.',
      'Come up with = think of.',
      '«Come up with» = idear.',
    )),
    listen('c1-pv-s3-l1', 'L4', 5, 'Before we wrap up, a quick update: the IT team will be phasing in the new e-mail system over the next two weeks, so please back up any important files by Friday.', 'What are listeners asked to do?', ['Save copies of important files', 'Install new software', 'Attend a training', 'Change their passwords'], x(
      '« Back up any important files » = faire une sauvegarde.',
      '«Back up any important files» = حفظ نسخ احتياطية.',
      'Back up = save copies.',
      '«Back up any important files» = hacer copias de seguridad.',
    )),
    match('c1-phrasal-verbs-w3', ['cross-sell', 'upsell', 'conversion-rate', 'market-penetration', 'customer-retention'], x(
      'Mots C1 sur le marketing : relis l’exemple de chaque mot dans l’onglet Mots.',
      'مفردات C1 حول التسويق: راجع مثال كل كلمة في قسم الكلمات.',
      'C1 words about marketing: review each example in the Words tab.',
      'Palabras C1 sobre el marketing: repasa el ejemplo de cada una en la pestaña Palabras.',
    )),
  ],
);
