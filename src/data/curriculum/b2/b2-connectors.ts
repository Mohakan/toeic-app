import type { Unit } from '../../../types';
import { g, lesson, listen, order, respond, unit, x } from '../build';

export const b2Connectors: Unit = unit(
  {
    id: 'b2-connectors',
    emoji: '🔗',
    level: 4,
    part: 'R5 · R6',
    title: x('Relatifs et connecteurs logiques', 'الموصولات وأدوات الربط', 'Relatives and linking words', 'Relativos y conectores lógicos'),
    subtitle: x('which, whose, although, despite…', 'which وwhose وalthough وdespite…', 'which, whose, although, despite…', 'which, whose, although, despite…'),
    lesson: lesson(
      x('Relier des idées correctement : cause, opposition, condition, relatif.', 'ربط الأفكار بشكل صحيح: سبب، تعارض، شرط، موصول.', 'Link ideas correctly: cause, contrast, condition, relative.', 'Unir ideas correctamente: causa, oposición, condición, relativo.'),
      [
        x('Although / even though + sujet + verbe · despite / in spite of + nom ou -ing.', 'Although/even though + فاعل + فعل · despite/in spite of + اسم أو -ing.', 'although + clause · despite + noun/-ing.', 'Although / even though + sujeto + verbo · despite / in spite of + sustantivo o -ing.'),
        x('Because + proposition · because of / due to + nom.', 'Because + جملة · because of/due to + اسم.', 'because + clause · because of / due to + noun.', 'Because + oración · because of / due to + sustantivo.'),
        x('Who (personne), which (chose), whose (possession), where (lieu).', 'Who (شخص) وwhich (شيء) وwhose (ملكية) وwhere (مكان).', 'who, which, whose, where.', 'Who (persona), which (cosa), whose (posesión), where (lugar).'),
      ],
      'Despite the delay, the client, whose order was urgent, was satisfied.',
      x('« Despite » + nom ; « whose » = dont la commande.', '«Despite» + اسم، و«whose» = الذي طلبيته.', '“Despite” + noun; “whose” = possession.', '«Despite» + sustantivo; «whose» = cuyo pedido.'),
    ),
  },
  [
    g('b2-cn-q1', 4, '___ the bad weather, the outdoor event was a success.', ['Despite', 'Although', 'Because', 'Even though'], x(
      'Suivi d’un nom (the bad weather) → « Despite ».',
      'يليه اسم (the bad weather) ← «Despite».',
      'Followed by a noun → “Despite”.',
      'Va seguido de un sustantivo (the bad weather) → «Despite».',
    )),
    g('b2-cn-q2', 4, '___ sales increased, profits remained low.', ['Although', 'Despite', 'Due to', 'In spite of'], x(
      'Suivi d’un sujet + verbe (sales increased) → « Although ».',
      'يليه فاعل + فعل ← «Although».',
      'Followed by a clause → “Although”.',
      'Va seguido de sujeto + verbo (sales increased) → «Although».',
    )),
    g('b2-cn-q3', 4, 'The flight was cancelled ___ a strike by air traffic controllers.', ['due to', 'because', 'although', 'so that'], x(
      'Cause + nom (a strike) → « due to ».',
      'سبب + اسم (a strike) ← «due to».',
      'Cause + noun → “due to”.',
      'Causa + sustantivo (a strike) → «due to».',
    )),
    g('b2-cn-q4', 4, 'The candidate ___ résumé impressed us most will be called today.', ['whose', 'who', 'which', 'whom'], x(
      'Possession (le CV du candidat) → « whose ».',
      'ملكية (سيرة المترشح) ← «whose».',
      'Possession → “whose”.',
      'Posesión (el currículum del candidato) → «whose».',
    )),
    g('b2-cn-q5', 4, 'Our latest model, ___ uses 30 percent less energy, will be launched in June.', ['which', 'who', 'whose', 'where'], x(
      'Une chose (le modèle) sujet de la relative entre virgules → « which ».',
      'شيء (الطراز) فاعل في جملة وصل بين فاصلتين ← «which».',
      'A thing as the subject of a non-defining clause → “which”.',
      'Una cosa (el modelo) como sujeto de una oración de relativo entre comas → «which».',
    )),
    g('b2-cn-q6', 4, 'Please arrive early ___ we can start the meeting on time.', ['so that', 'even though', 'despite', 'unless'], x(
      'But → « so that » (afin que).',
      'الغاية ← «so that» (لكي).',
      'Purpose → “so that”.',
      'Finalidad → «so that» (para que).',
    )),
    g('b2-cn-q7', 4, 'This is the hotel ___ we stayed during the conference.', ['where', 'which', 'who', 'whose'], x(
      'Lieu + proposition complète (we stayed) → « where ».',
      'مكان + جملة تامة (we stayed) ← «where».',
      'Place + full clause → “where”.',
      'Lugar + oración completa (we stayed) → «where».',
    )),
  ],
  [
    g('b2-cn-s2-q1', 4, '___ having little experience, she got the job.', ['Despite', 'Although', 'Because', 'However'], x(
      'Opposition + -ing (having) → « Despite ». « Although » demanderait sujet + verbe.',
      'تعارض + -ing (having) ← «Despite». أما «Although» فتحتاج فاعلًا وفعلًا.',
      '“Despite” + -ing.',
      'Oposición + -ing (having) → «Despite». «Although» exigiría sujeto + verbo.',
    )),
    g('b2-cn-s2-q2', 4, 'We will continue the project ___ the budget is approved.', ['provided that', 'despite', 'although', 'due to'], x(
      '« Provided that » = à condition que.',
      '«Provided that» = شريطة أن.',
      '“Provided that” = on condition that.',
      '«Provided that» = siempre que.',
    )),
    g('b2-cn-s2-q3', 4, 'The meeting was postponed ___ the director’s illness.', ['owing to', 'because', 'although', 'so that'], x(
      'Cause + nom (the director’s illness) → « owing to ».',
      'سبب + اسم ← «owing to».',
      'Cause + noun → “owing to”.',
      'Causa + sustantivo (the director’s illness) → «owing to».',
    )),
    g('b2-cn-s2-q4', 4, 'Ms. Kim, ___ team won the award, will speak at the ceremony.', ['whose', 'who', 'which', 'whom'], x(
      'Possession (son équipe) → « whose ».',
      'ملكية (فريقها) ← «whose».',
      'Possession → “whose”.',
      'Posesión (su equipo) → «whose».',
    )),
    g('b2-cn-s2-q5', 4, 'Prices rose sharply. ___, demand remained strong.', ['Nevertheless', 'Therefore', 'Because', 'Unless'], x(
      'Opposition (hausse des prix / demande forte) → « Nevertheless » (néanmoins).',
      'تعارض (ارتفاع الأسعار/طلب قوي) ← «Nevertheless» (ومع ذلك).',
      'Contrast → “Nevertheless”.',
      'Oposición (subida de precios / demanda fuerte) → «Nevertheless» (no obstante).',
    )),
    g('b2-cn-s2-q6', 4, 'Please send the files today ___ we can review them tomorrow.', ['so that', 'in case', 'although', 'even if'], x(
      'But → « so that » (afin que).',
      'الغاية ← «so that» (لكي).',
      'Purpose → “so that”.',
      'Finalidad → «so that» (para que).',
    )),
    g('b2-cn-s2-q7', 4, 'The building ___ we work was built in 1920.', ['in which', 'which', 'who', 'whose'], x(
      '« In which » = « where » : on travaille dans le bâtiment.',
      '«In which» = «where»: نعمل داخل المبنى.',
      '“In which” = where.',
      '«In which» = «where»: trabajamos en ese edificio.',
    )),
    order('b2-cn-s2-o1', 'Although the price was high we signed the contract', x('Commence par « Although ».', 'ابدأ بـ «Although».', 'Start with “Although”.', 'Empieza por «Although».'), x(
      'Although + proposition, puis la proposition principale.',
      'Although + جملة ثم الجملة الرئيسية.',
      'Although + clause, then main clause.',
      'Although + oración y luego la principal.',
    )),
    respond('b2-cn-s2-l1', 4, 'Should we cancel the event because of the rain?', ['Not unless it gets worse.', 'Yes, it rained yesterday.', 'The event starts at six.'], x(
      '« Not unless it gets worse » = pas sauf si ça empire.',
      '«Not unless it gets worse» = لا، إلا إذا ساءت الأمور.',
      'Only if it gets worse.',
      '«Not unless it gets worse» = no, salvo que empeore.',
    )),
    listen('b2-cn-s2-l2', 'L3', 4, 'M: The supplier offered a lower price, but delivery would take three weeks.\nW: Even so, I think we should accept. We have enough stock for a month.', 'Why does the woman want to accept the offer?', ['They have enough stock to wait', 'The supplier is very fast', 'The price is the same', 'They need the goods tomorrow'], x(
      '« We have enough stock for a month » : on peut attendre trois semaines.',
      '«We have enough stock for a month»: يمكن الانتظار ثلاثة أسابيع.',
      'Enough stock to wait.',
      '«We have enough stock for a month»: pueden esperar tres semanas.',
    )),
  ],
  [
    g('b2-cn-s3-q1', 4, '___ the heavy traffic, we arrived on time.', ['In spite of', 'Even though', 'Because', 'Since'], x(
      'Opposition + nom → « In spite of ».',
      'تعارض + اسم ← «In spite of».',
      'Contrast + noun → “In spite of”.',
      'Oposición + sustantivo → «In spite of».',
    )),
    g('b2-cn-s3-q2', 4, 'Take an umbrella ___ it rains.', ['in case', 'unless', 'so that', 'although'], x(
      '« In case » = au cas où.',
      '«In case» = تحسبًا لـ.',
      '“In case” = as a precaution.',
      '«In case» = por si.',
    )),
    g('b2-cn-s3-q3', 4, 'The candidate ___ we hired has ten years of experience.', ['whom', 'whose', 'which', 'where'], x(
      'Personne, complément de « hired » → « whom » (ou who / that).',
      'شخص مفعول به لـ «hired» ← «whom» (أو who/that).',
      'Object person → “whom”.',
      'Persona, complemento de «hired» → «whom» (o who / that).',
    )),
    g('b2-cn-s3-q4', 4, 'Sales fell last quarter. ___, the company remained profitable.', ['Nonetheless', 'Consequently', 'Moreover', 'Because'], x(
      'Opposition → « Nonetheless ».',
      'تعارض ← «Nonetheless».',
      'Contrast → “Nonetheless”.',
      'Oposición → «Nonetheless».',
    )),
    g('b2-cn-s3-q5', 4, '___ the shipment arrives late, we will lose the client.', ['If', 'Unless', 'Although', 'Despite'], x(
      'Condition logique : si l’envoi arrive en retard, on perd le client → « If ».',
      'شرط منطقي: إذا تأخرت الشحنة نخسر العميل ← «If».',
      'A condition → “If”.',
      'Condición lógica: si el envío llega tarde, se pierde al cliente → «If».',
    )),
    g('b2-cn-s3-q6', 4, 'This is the reason ___ we changed suppliers.', ['why', 'which', 'where', 'whose'], x(
      '« The reason why » = la raison pour laquelle.',
      '«The reason why» = السبب الذي من أجله.',
      '“The reason why”.',
      '«The reason why» = la razón por la que.',
    )),
    g('b2-cn-s3-q7', 4, 'The project was a success, ___ it took longer than planned.', ['even though', 'despite', 'because of', 'so'], x(
      'Opposition + proposition → « even though ».',
      'تعارض + جملة ← «even though».',
      'Contrast + clause → “even though”.',
      'Oposición + oración → «even though».',
    )),
    order('b2-cn-s3-o1', 'We hired more staff in order to reduce waiting times', x('« in order to » exprime le but.', '«in order to» تعبّر عن الغاية.', '“in order to” = purpose.', '«in order to» expresa la finalidad.'), x(
      'Action + in order to + verbe (but).',
      'فعل + in order to + فعل (الغاية).',
      'Action + in order to + verb.',
      'Acción + in order to + verbo (finalidad).',
    )),
    respond('b2-cn-s3-l1', 4, 'Is the hotel near the venue, or should we rent a car?', ['It’s within walking distance.', 'The car is red.', 'Yes, it’s a hotel.'], x(
      'Réponse indirecte : on peut y aller à pied, donc pas de voiture.',
      'إجابة غير مباشرة: يمكن الوصول مشيًا، فلا حاجة لسيارة.',
      'Indirect: you can walk there.',
      'Respuesta indirecta: se puede ir andando, así que no hace falta coche.',
    )),
    listen('b2-cn-s3-l2', 'L4', 4, 'Although the new office will not be ready until June, staff can start moving their personal items next week, provided that they label every box clearly.', 'What condition is mentioned?', ['Boxes must be labeled clearly', 'Staff must work from home', 'The move must finish in June', 'Items must be sent by mail'], x(
      '« Provided that they label every box clearly » : la condition.',
      '«Provided that they label every box clearly»: هذا هو الشرط.',
      'Label every box.',
      '«Provided that they label every box clearly»: esa es la condición.',
    )),
  ],
);
