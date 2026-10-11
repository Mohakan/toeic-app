import type { Unit } from '../../../types';
import { lesson, listen, respond, unit, x } from '../build';

export const c1Talks: Unit = unit(
  {
    id: 'c1-talks',
    emoji: '🎙️',
    level: 5,
    part: 'L4',
    title: x('Discours et réunions complexes', 'خطابات واجتماعات معقدة', 'Complex talks and meetings', 'Discursos y reuniones complejos'),
    subtitle: x('Partie 4 : sous-entendus et intentions', 'الجزء 4: الضمني والنوايا', 'Part 4: implications and intentions', 'Parte 4: lo implícito y las intenciones'),
    lesson: lesson(
      x('Comprendre ce que le locuteur sous-entend, pas seulement ce qu’il dit.', 'فهم ما يلمّح إليه المتحدث لا ما يقوله فقط.', 'Understand what the speaker implies, not only says.', 'Entender lo que el hablante da a entender, no solo lo que dice.'),
      [
        x('« What does the speaker imply when she says… ? » : interprète la phrase dans son contexte.', '«What does the speaker imply when she says…?»: فسّر الجملة في سياقها.', 'Interpret the quoted phrase in context.', '«What does the speaker imply when she says…?»: interpreta la frase en su contexto.'),
        x('Repère les mots qui nuancent : that said, as long as, I’d be careful, frankly.', 'انتبه للكلمات التي تُقيّد المعنى: that said وas long as وI’d be careful وfrankly.', 'Watch the hedging words: that said, as long as, I’d be careful, frankly.', 'Fíjate en las palabras que matizan: that said, as long as, I’d be careful, frankly.'),
      ],
      'We expect strong results this year, as long as raw material prices remain stable.',
      x('Optimisme sous condition : tout dépend du prix des matières premières.', 'تفاؤل مشروط: كل شيء يتوقف على أسعار المواد الأولية.', 'Conditional optimism: it all depends on raw material prices.', 'Optimismo condicionado: todo depende del precio de las materias primas.'),
    ),
  },
  [
    listen('c1-tk-l1', 'L4', 5, 'Our sales figures for the quarter look impressive on paper. That said, nearly half of the increase came from a single customer, so I’d be careful about hiring new staff based on these numbers alone.', 'What does the speaker suggest?', ['The growth depends too much on one client', 'New staff should be hired immediately', 'The figures contain errors', 'Sales fell during the quarter'], x(
      '« That said… a single customer… I’d be careful » : la croissance repose sur un seul client.',
      '«That said… a single customer… I’d be careful»: النمو يعتمد على عميل واحد.',
      '“That said… a single customer… I’d be careful”: growth relies on one client.',
      '«That said… a single customer… I’d be careful»: el crecimiento depende de un solo cliente.',
    )),
    listen('c1-tk-l2', 'L4', 5, 'We’re confident the new plant will open in May, as long as the final permits are approved by the city council next month.', 'What does the opening depend on?', ['The approval of permits', 'Hiring more workers', 'Finding new investors', 'Finishing construction early'], x(
      '« As long as » introduit la condition : l’approbation des permis.',
      '«As long as» تقدّم الشرط: الموافقة على التراخيص.',
      '“As long as” introduces the condition: the permits.',
      '«As long as» introduce la condición: la aprobación de los permisos.',
    )),
    listen('c1-tk-l3', 'L4', 5, 'I know many of you were hoping for a decision today. However, the board has asked for an independent review of the costs, so I’d rather not speculate on the outcome until we have the full picture.', 'Why does the speaker avoid giving a decision?', ['An independent review is still pending', 'The board rejected the plan', 'The costs are already known', 'The meeting ran out of time'], x(
      '« The board has asked for an independent review… until we have the full picture ».',
      'ترفض المتحدثة التوقع: «The board has asked for an independent review… until we have the full picture».',
      'A review is pending.',
      '«The board has asked for an independent review… until we have the full picture»: hay una revisión pendiente.',
    )),
    listen('c1-tk-l4', 'L3', 5, 'W: Did you hear that the client wants to cut the budget by twenty percent?\nM: I did. Frankly, at that price we’d have to drop the training sessions, and I doubt they’d be happy with the result.', 'What does the man imply?', ['A lower budget would reduce the quality of the service', 'The client has already signed the contract', 'He agrees to the cut without conditions', 'The training sessions were never planned'], x(
      'Supprimer les formations et un client peu satisfait : le service serait de moindre qualité.',
      'حذف الدورات التدريبية وعميل غير راضٍ: ستنخفض جودة الخدمة.',
      'Dropping the training and an unhappy client: lower service quality.',
      'Suprimir las formaciones y un cliente poco satisfecho: el servicio sería de menor calidad.',
    )),
    respond('c1-tk-l5', 5, 'Why don’t we hold the workshop online this year?', ['That would save on travel costs.', 'Because it was held in Paris.', 'The shop is online.'], x(
      '« Why don’t we…? » est une proposition : on l’évalue. « Because… » et « shop » (écho de « workshop ») sont des pièges.',
      '«Why don’t we…?» اقتراح نقيّمه. «Because…» و«shop» (صدى لـ «workshop») فخاخ.',
      '“Why don’t we…?” is a proposal. “Because…” and “shop” (echoing “workshop”) are traps.',
      '«Why don’t we…?» es una propuesta: se valora. «Because…» y «shop» (eco de «workshop») son trampas.',
    )),
    respond('c1-tk-l6', 5, 'I thought the launch had been postponed.', ['Only for the European market.', 'It was launched at lunch.', 'I post it every week.'], x(
      'Affirmation à nuancer : la bonne réponse précise (« seulement pour l’Europe »). « Lunch » imite « launch ».',
      'تصريح يحتاج تدقيقًا: الإجابة الصحيحة توضّح («فقط للسوق الأوروبية»). «Lunch» تقلّد «launch».',
      'The answer qualifies it; “lunch” mimics “launch”.',
      'Afirmación que hay que matizar: la respuesta correcta precisa («solo para Europa»). «Lunch» imita a «launch».',
    )),
  ],
  [
    listen('c1-tk-s2-l1', 'L4', 5, 'I’ll be honest with you: the pilot program in Sfax didn’t deliver the savings we projected. That said, staff turnover there dropped by a third, which, frankly, may turn out to be the more valuable result.', 'What does the speaker suggest about the pilot program?', ['It had an unexpected benefit', 'It should be stopped at once', 'It saved more money than planned', 'It increased staff turnover'], x(
      'Économies décevantes, mais baisse du turnover jugée « plus précieuse » : bénéfice inattendu.',
      'وفورات مخيّبة لكن انخفاض دوران الموظفين اعتُبر «أثمن»: فائدة غير متوقعة.',
      'Lower turnover was an unexpected gain.',
      'Ahorros decepcionantes, pero la rotación bajó y eso se considera «más valioso»: un beneficio inesperado.',
    )),
    listen('c1-tk-s2-l2', 'L4', 5, 'As most of you know, our contract with Delta Freight expires in March. Rather than renew it automatically, we’ve invited three carriers to submit proposals, and we’ll be asking each department for its delivery requirements next week.', 'What will departments be asked for?', ['Their delivery needs', 'Their annual budgets', 'Names of new carriers', 'Feedback on Delta Freight'], x(
      '« Asking each department for its delivery requirements ».',
      '«Asking each department for its delivery requirements»: احتياجات التوصيل.',
      'Their delivery requirements.',
      '«Asking each department for its delivery requirements»: sus necesidades de entrega.',
    )),
    listen('c1-tk-s2-l3', 'L4', 5, 'Some of you have asked whether the new expense system will slow things down. In our trial, approval times actually fell from ten days to three. I’m not saying there won’t be teething problems, but the numbers speak for themselves.', 'Why does the speaker say, “the numbers speak for themselves”?', ['To argue that the system works well', 'To ask for more data', 'To admit the trial failed', 'To introduce a financial report'], x(
      'Les chiffres (10 → 3 jours) prouvent l’efficacité : argument en faveur du système.',
      'الأرقام (من 10 إلى 3 أيام) تثبت النجاعة: حجة لصالح النظام.',
      'The data proves the point.',
      'Las cifras (de 10 a 3 días) prueban la eficacia: un argumento a favor del sistema.',
    )),
    listen('c1-tk-s2-l4', 'L3', 5, 'W: The client loved the design, but she’s asking us to cut the price by fifteen percent.\nM: Fifteen? We barely break even at the current rate.\nW: I know. Maybe we could offer a smaller first order instead.', 'What does the man imply?', ['The discount would make the project unprofitable', 'The design needs changes', 'The client should pay more', 'The order is too small'], x(
      '« We barely break even » : avec 15 % de moins, on perdrait de l’argent.',
      '«We barely break even»: مع تخفيض 15% سنخسر.',
      'They would lose money.',
      '«We barely break even»: con un 15 % menos, perderían dinero.',
    )),
    listen('c1-tk-s2-l5', 'L3', 5, 'M: Have you read the consultant’s report on the warehouse?\nW: I skimmed it. Their main point is that we’re storing far more stock than we need.\nM: That’s what I’ve been saying for two years.', 'What does the man mean when he says, “That’s what I’ve been saying for two years”?', ['He agrees with the report', 'He disagrees with the consultant', 'He wrote the report', 'He wants a new warehouse'], x(
      'Il défendait déjà cette idée : il est d’accord (avec une pointe d’agacement).',
      'كان يدافع عن هذه الفكرة: إنه موافق (مع شيء من الضيق).',
      'He has held this view for years.',
      'Ya defendía esa idea: está de acuerdo (con cierto fastidio).',
    )),
    listen('c1-tk-s2-l6', 'L3', 5, 'W: Should we postpone the product launch until the reviews come in?\nM: If we wait, our competitor will beat us to the market. I’d rather launch with a few minor flaws and fix them in an update.', 'What is the man’s main concern?', ['Losing the advantage of being first', 'Receiving bad reviews', 'Spending too much on updates', 'Finding product flaws'], x(
      '« Our competitor will beat us to the market » = perdre l’avantage du premier.',
      '«Our competitor will beat us to the market» = خسارة أسبقية الدخول إلى السوق.',
      'Being beaten to the market.',
      '«Our competitor will beat us to the market» = perder la ventaja de llegar primero.',
    )),
    respond('c1-tk-s2-l7', 5, 'Wouldn’t it make more sense to outsource the payroll?', ['We looked into it, but the savings were minimal.', 'Payroll is paid on the 25th.', 'It makes a lot of noise.'], x(
      'Réponse réfléchie : l’idée a été étudiée et écartée.',
      'إجابة مدروسة: دُرست الفكرة واستُبعدت.',
      'Considered and rejected.',
      'Respuesta meditada: la idea se estudió y se descartó.',
    )),
    respond('c1-tk-s2-l8', 5, 'I take it the merger talks have stalled again.', ['Not quite — they’re just waiting for the valuation.', 'I’ll take it to the stall.', 'The talks were in English.'], x(
      'Correction nuancée : pas bloquées, juste en attente.',
      'تصحيح دقيق: ليست متوقفة بل في انتظار التقييم.',
      'A nuanced correction.',
      'Corrección matizada: no están bloqueadas, solo en espera.',
    )),
    respond('c1-tk-s2-l9', 5, 'How come the shipment was released without inspection?', ['The inspector signed it off remotely.', 'It came by sea.', 'It was released in May.'], x(
      '« How come » = pourquoi → une explication.',
      '«How come» = لماذا ← تفسير.',
      '“How come” = why.',
      '«How come» = por qué → una explicación.',
    )),
    respond('c1-tk-s2-l10', 5, 'You’ll be presenting the figures yourself, won’t you?', ['Actually, I’ve asked Leila to do it.', 'The figures are on page four.', 'I bought it myself.'], x(
      'Réponse qui corrige l’hypothèse : une collègue présentera.',
      'إجابة تصحح الافتراض: زميلة ستقدم.',
      'It corrects the assumption.',
      'Respuesta que corrige la suposición: lo presentará una compañera.',
    )),
  ],
  [
    listen('c1-tk-s3-l1', 'L4', 5, 'Good morning, everyone. You may have read in the press that we’re closing the Bizerte branch. Let me be clear: we’re consolidating it with our Tunis office, and every employee will be offered a position there or a relocation package.', 'What is the speaker mainly trying to do?', ['Correct a misleading report', 'Announce job cuts', 'Open a new branch', 'Introduce new employees'], x(
      '« Let me be clear » : elle rectifie l’information de la presse (fusion, pas fermeture).',
      '«Let me be clear»: تصحح خبر الصحافة (دمج وليس غلقًا).',
      'She corrects the press story.',
      '«Let me be clear»: corrige la información de la prensa (fusión, no cierre).',
    )),
    listen('c1-tk-s3-l2', 'L4', 5, 'Thank you for calling the Medina Conference Center. Due to unusually high demand, we are no longer accepting bookings for September. Clients with existing reservations need not take any action; your events will go ahead as planned.', 'What is indicated about existing reservations?', ['They are not affected', 'They must be confirmed again', 'They will be moved to October', 'They require a new deposit'], x(
      '« Need not take any action… will go ahead as planned ».',
      '«Need not take any action… will go ahead as planned»: لا تأثير عليها.',
      'They go ahead as planned.',
      '«Need not take any action… will go ahead as planned»: no se ven afectadas.',
    )),
    listen('c1-tk-s3-l3', 'L4', 5, 'Last year, we spent nearly forty percent of our marketing budget on print ads. Yet according to our surveys, fewer than one in ten new customers found us that way. I’ll leave you to draw your own conclusions.', 'What does the speaker imply?', ['Print advertising is not cost-effective', 'Surveys are unreliable', 'The marketing budget is too small', 'More customers read newspapers'], x(
      '40 % du budget pour moins de 10 % des clients : la presse papier n’est pas rentable.',
      '40% من الميزانية لأقل من 10% من الزبائن: الإعلان الورقي غير مجدٍ.',
      'High cost, low return.',
      'El 40 % del presupuesto para menos del 10 % de los clientes: el papel no es rentable.',
    )),
    listen('c1-tk-s3-l4', 'L3', 5, 'M: Legal says the contract is fine, but the delivery clause is a bit vague.\nW: Vague is risky. If there’s a delay, we’ll have no grounds to claim compensation.\nM: Then I’ll ask them to specify exact dates before we sign.', 'What will the man do?', ['Request more precise delivery terms', 'Sign the contract today', 'Claim compensation', 'Hire a new lawyer'], x(
      '« Ask them to specify exact dates before we sign ».',
      '«Ask them to specify exact dates»: طلب تواريخ دقيقة.',
      'He will ask for exact dates.',
      '«Ask them to specify exact dates»: pedir fechas exactas.',
    )),
    listen('c1-tk-s3-l5', 'L3', 5, 'W: Karim has applied for the team leader position.\nM: He’s brilliant technically, but he’s never managed anyone.\nW: True, though neither had I when I started.', 'Why does the woman say, “neither had I when I started”?', ['To defend Karim’s application', 'To criticize the man', 'To describe her new job', 'To reject Karim'], x(
      'Elle rappelle qu’elle aussi a débuté sans expérience : elle soutient Karim.',
      'تذكّر بأنها بدأت هي أيضًا دون خبرة: تدعم كريم.',
      'She supports Karim.',
      'Recuerda que ella también empezó sin experiencia: apoya a Karim.',
    )),
    listen('c1-tk-s3-l6', 'L3', 5, 'M: The board approved the budget, but with one condition.\nW: Let me guess — another round of cost cuts?\nM: Not this time. They want quarterly progress reports instead of annual ones.', 'What condition did the board set?', ['More frequent reports', 'Further cost cuts', 'A smaller budget', 'A new project leader'], x(
      '« Quarterly progress reports instead of annual ones » = plus fréquents.',
      '«Quarterly progress reports instead of annual ones» = تقارير أكثر تواترًا.',
      'Quarterly instead of annual reports.',
      '«Quarterly progress reports instead of annual ones» = informes más frecuentes.',
    )),
    respond('c1-tk-s3-l7', 5, 'Is there any chance we could extend the deadline?', ['Only if the client agrees in writing.', 'There are many chances.', 'The deadline was last week.'], x(
      'Réponse conditionnelle réaliste.',
      'إجابة شرطية واقعية.',
      'A realistic condition.',
      'Respuesta condicional realista.',
    )),
    respond('c1-tk-s3-l8', 5, 'Hasn’t the new policy been circulated yet?', ['It’s with the legal team for a final check.', 'It goes around the building.', 'Yes, it was a new car.'], x(
      'Réponse indirecte : pas encore, il est en dernière vérification.',
      'إجابة غير مباشرة: ليس بعد، فهو في المراجعة الأخيرة.',
      'Not yet: being checked.',
      'Respuesta indirecta: todavía no, está en revisión final.',
    )),
    respond('c1-tk-s3-l9', 5, 'Who’ll be covering for Ms. Ben Ali during her leave?', ['That hasn’t been decided yet.', 'She’s leaving at five.', 'The cover is blue.'], x(
      'Réponse honnête : pas encore décidé.',
      'إجابة صريحة: لم يُحسم بعد.',
      'Not decided yet.',
      'Respuesta sincera: aún no se ha decidido.',
    )),
    respond('c1-tk-s3-l10', 5, 'I can’t believe the supplier raised prices again.', ['Neither can I. We should look for alternatives.', 'Yes, they raised their hands.', 'The price list is printed.'], x(
      'Accord + proposition d’action.',
      'موافقة + اقتراح إجراء.',
      'Agreement plus a suggestion.',
      'Acuerdo + propuesta de acción.',
    )),
  ],
);
