import type { Unit } from '../../../types';
import { lesson, match, respond, unit, x } from '../build';

export const b2Part2Traps: Unit = unit(
  {
    id: 'b2-part2-traps',
    emoji: '🪤',
    level: 4,
    part: 'L2',
    title: x('Pièges de la Partie 2', 'فخاخ الجزء 2', 'Part 2 traps', 'Trampas de la Parte 2'),
    subtitle: x('Réponses indirectes et suggestions', 'إجابات غير مباشرة واقتراحات', 'Indirect answers and suggestions', 'Respuestas indirectas y sugerencias'),
    lesson: lesson(
      x('Reconnaître les réponses naturelles mais indirectes, et éviter les pièges sonores.', 'التعرّف على الإجابات الطبيعية غير المباشرة وتجنّب الفخاخ الصوتية.', 'Recognise natural indirect answers and avoid sound traps.', 'Reconocer las respuestas naturales pero indirectas y evitar las trampas de sonido.'),
      [
        x('La bonne réponse ne répond pas toujours directement : « Has the report been sent? » → « Ask Maria, she handled it. »', 'لا تجيب الإجابة الصحيحة دائمًا مباشرة: «Has the report been sent?» ← «Ask Maria, she handled it.»', 'The right answer can be indirect.', 'La respuesta correcta no siempre responde directamente: «Has the report been sent?» → «Ask Maria, she handled it.»'),
        x('« Why don’t we… ? » est une suggestion : on ne répond pas par « Because… ».', '«Why don’t we…?» اقتراح: لا نجيب بـ «Because…».', '“Why don’t we…?” is a suggestion.', '«Why don’t we…?» es una sugerencia: no se responde con «Because…».'),
        x('Méfie-toi des mots identiques ou proches (copy / coffee, meet / meat).', 'احذر من الكلمات المتطابقة أو المتشابهة (copy/coffee وmeet/meat).', 'Beware of repeated or similar-sounding words.', 'Desconfía de las palabras idénticas o parecidas (copy / coffee, meet / meat).'),
      ],
      'Shouldn’t we wait for the final figures? — Good point, let’s move it to Friday.',
      x('Suggestion acceptée, sans « Yes » ni « No ».', 'اقتراح مقبول دون «Yes» أو «No».', 'Suggestion accepted without yes/no.', 'Sugerencia aceptada, sin «Yes» ni «No».'),
    ),
  },
  [
    respond('b2-t-l1', 4, 'Has the conference room been booked for Monday?', ['Ms. Ruiz usually handles that.', 'The conference was interesting.', 'Yes, on a Monday morning flight.'], x(
      'Réponse indirecte : on renvoie à la personne responsable. Les deux autres reprennent « conference » et « Monday ».',
      'إجابة غير مباشرة: الإحالة إلى المسؤولة. الخياران الآخران يكرران «conference» و«Monday».',
      'Indirect: it points to the person in charge. The others reuse “conference” and “Monday”.',
      'Respuesta indirecta: remite a la persona responsable. Las otras repiten «conference» y «Monday».',
    )),
    respond('b2-t-l2', 4, 'Why don’t we take a taxi to the airport?', ['Good idea, the train is full anyway.', 'Because it’s at the airport.', 'It took two hours.'], x(
      'Suggestion → accepter. « Because… » répond à tort à une demande de cause.',
      'اقتراح ← قبول. «Because…» تجيب خطأ عن سؤال سبب.',
      'Suggestion → accept; “Because…” is the trap.',
      'Sugerencia → se acepta. «Because…» responde por error a una pregunta por la causa.',
    )),
    respond('b2-t-l3', 4, 'Who’s responsible for ordering office supplies?', ['It changed last month — check with Ahmed.', 'Yes, we need more paper.', 'It was very responsible.'], x(
      'Réponse indirecte mais pertinente : on oriente vers une personne.',
      'إجابة غير مباشرة لكنها مناسبة: توجيه إلى شخص.',
      'Indirect but relevant: points to a person.',
      'Respuesta indirecta pero pertinente: remite a una persona.',
    )),
    respond('b2-t-l4', 4, 'Isn’t the training session scheduled for tomorrow?', ['No, it was moved to Thursday.', 'The train leaves at six.', 'I scheduled a meeting.'], x(
      '« Train » ressemble à « training » : piège sonore. La bonne réponse corrige l’information.',
      '«Train» تشبه «training»: فخ صوتي. الإجابة الصحيحة تصحّح المعلومة.',
      '“Train” vs “training” is a sound trap.',
      '«Train» se parece a «training»: trampa de sonido. La respuesta correcta corrige la información.',
    )),
    respond('b2-t-l5', 4, 'How about meeting in the lobby at noon?', ['That works for me.', 'About twelve people.', 'The lobby is large.'], x(
      '« How about…? » = proposition → « That works for me ».',
      '«How about…?» = اقتراح ← «That works for me».',
      '“How about…?” = proposal.',
      '«How about…?» = propuesta → «That works for me».',
    )),
    respond('b2-t-l6', 4, 'Should I print the agenda or just email it?', ['Email is fine.', 'Yes, you should.', 'The printer is new.'], x(
      'Question à choix : on choisit une option.',
      'سؤال اختيار: نختار أحد الخيارين.',
      'Choice question: pick one.',
      'Pregunta de elección: se elige una de las opciones.',
    )),
    respond('b2-t-l7', 4, 'The quarterly report is due on Friday, isn’t it?', ['Actually, the deadline was extended.', 'It was a good quarter.', 'Four times a year.'], x(
      'Réponse qui corrige l’information (« Actually… »).',
      'إجابة تصحح المعلومة («Actually…»).',
      'The answer corrects the information.',
      'La respuesta corrige la información («Actually…»).',
    )),
    match('b2-part2-traps-w1', ['attendee', 'keynote', 'venue-hire', 'seating-plan', 'dress-code'], x(
      'Mots B2 sur les événements : relis l’exemple de chaque mot dans l’onglet Mots.',
      'مفردات B2 حول الفعاليات: راجع مثال كل كلمة في قسم الكلمات.',
      'B2 words about events: review each example in the Words tab.',
      'Palabras B2 sobre los eventos: repasa el ejemplo de cada una en la pestaña Palabras.',
    )),
  ],
  [
    respond('b2-t-s2-l1', 4, 'Didn’t you order more paper last week?', ['I did, but it hasn’t arrived yet.', 'The paper is white.', 'I’ll order a pizza.'], x(
      'Réponse directe avec une précision. « Order a pizza » répète « order » : piège.',
      'إجابة مباشرة مع توضيح. و«order a pizza» تكرر «order»: فخ.',
      'Direct answer; “order” is a repeated-word trap.',
      'Respuesta directa con un detalle. «Order a pizza» repite «order»: trampa.',
    )),
    respond('b2-t-s2-l2', 4, 'Who’s going to replace Ms. Lee while she’s away?', ['Her assistant will cover for her.', 'She’ll be away for a week.', 'In her office.'], x(
      '« Who » → une personne. « Cover for » = remplacer.',
      '«Who» ← شخص، و«cover for» = ينوب عن.',
      '“Who” → a person.',
      '«Who» → una persona. «Cover for» = sustituir.',
    )),
    respond('b2-t-s2-l3', 4, 'Why don’t you ask the IT department for help?', ['I already have. They’re coming at three.', 'Because my computer is new.', 'The department is upstairs.'], x(
      'Suggestion → on répond qu’on l’a déjà fait. « Because… » est le piège.',
      'اقتراح ← نجيب بأننا فعلنا ذلك. و«Because…» هي الفخ.',
      'Already done; “Because…” is the trap.',
      'Sugerencia → se responde que ya se ha hecho. «Because…» es la trampa.',
    )),
    respond('b2-t-s2-l4', 4, 'Would you rather meet in the morning or after lunch?', ['Either is fine with me.', 'Yes, I would.', 'Lunch was great.'], x(
      'Question à choix → « Either is fine » (les deux me vont) est une réponse valable.',
      'سؤال اختيار ← «Either is fine» (كلاهما يناسبني) إجابة مقبولة.',
      '“Either is fine” answers a choice question.',
      'Pregunta de elección → «Either is fine» (me vale cualquiera) es una respuesta válida.',
    )),
    respond('b2-t-s2-l5', 4, 'When will the new catalog be ready?', ['The designers are still working on it.', 'It has two hundred pages.', 'In the catalog room.'], x(
      'Réponse indirecte : pas encore prêt, les designers y travaillent.',
      'إجابة غير مباشرة: ليس جاهزًا بعد، فالمصممون يعملون عليه.',
      'Indirect: not ready yet.',
      'Respuesta indirecta: todavía no está listo, los diseñadores siguen trabajando.',
    )),
    respond('b2-t-s2-l6', 4, 'The client called about the invoice, didn’t she?', ['Yes, she says it’s been paid twice.', 'The client is in Rome.', 'I’ll invoice you.'], x(
      'Confirmation + information sur le problème.',
      'تأكيد + معلومة عن المشكلة.',
      'Confirms and adds the issue.',
      'Confirmación + información sobre el problema.',
    )),
    respond('b2-t-s2-l7', 4, 'Where should I put these boxes?', ['Just leave them by the door for now.', 'They’re very heavy.', 'I boxed them yesterday.'], x(
      '« Where » → un lieu, ici sous forme de consigne.',
      '«Where» ← مكان في شكل تعليمة.',
      'A place, as an instruction.',
      '«Where» → un lugar, aquí en forma de instrucción.',
    )),
    respond('b2-t-s2-l8', 4, 'Can you finish the report by Friday?', ['It depends on when I get the figures.', 'I reported it.', 'The report was long.'], x(
      'Réponse conditionnelle et naturelle.',
      'إجابة شرطية طبيعية.',
      'A natural conditional answer.',
      'Respuesta condicional y natural.',
    )),
    respond('b2-t-s2-l9', 4, 'How did the presentation go?', ['Better than I expected.', 'At ten o’clock.', 'In the large room.'], x(
      '« How did … go? » → une évaluation.',
      '«How did … go?» ← تقييم.',
      'An evaluation.',
      '«How did … go?» → una valoración.',
    )),
    respond('b2-t-s2-l10', 4, 'Haven’t we met somewhere before?', ['Yes, I think it was at the trade fair in Lyon.', 'I meet clients every day.', 'No, it’s not here.'], x(
      'Oui + où : le salon de Lyon.',
      'نعم + المكان: معرض ليون.',
      'Yes, and where.',
      'Sí + dónde: en la feria de Lyon.',
    )),
    match('b2-part2-traps-w2', ['prioritize', 'coordinate', 'punctual', 'remote-work', 'office-manager'], x(
      'Mots B2 sur le travail de bureau : relis l’exemple de chaque mot dans l’onglet Mots.',
      'مفردات B2 حول العمل المكتبي: راجع مثال كل كلمة في قسم الكلمات.',
      'B2 words about office work: review each example in the Words tab.',
      'Palabras B2 sobre el trabajo de oficina: repasa el ejemplo de cada una en la pestaña Palabras.',
    )),
  ],
  [
    respond('b2-t-s3-l1', 4, 'Why is the printer making that noise?', ['I think the paper is stuck.', 'I printed ten pages.', 'It’s on the second floor.'], x(
      '« Why » → une cause probable.',
      '«Why» ← سبب محتمل.',
      'A likely cause.',
      '«Why» → una causa probable.',
    )),
    respond('b2-t-s3-l2', 4, 'Should I book the flight now or wait for a better price?', ['Prices usually go up, so book it now.', 'Yes, I booked a hotel.', 'The flight was smooth.'], x(
      'Question à choix → choisir et justifier.',
      'سؤال اختيار ← نختار ونبرر.',
      'Choose and justify.',
      'Pregunta de elección → elegir y justificar.',
    )),
    respond('b2-t-s3-l3', 4, 'Who approved this budget?', ['It went through the finance committee.', 'About two million dollars.', 'Yes, it’s approved.'], x(
      '« Who » → ici un comité : réponse indirecte mais pertinente.',
      '«Who» ← هنا لجنة: إجابة غير مباشرة لكنها مناسبة.',
      'A committee: indirect but relevant.',
      '«Who» → aquí un comité: respuesta indirecta pero pertinente.',
    )),
    respond('b2-t-s3-l4', 4, 'You’re coming to the training session, aren’t you?', ['I wouldn’t miss it.', 'The train leaves at five.', 'It was a long session.'], x(
      '« I wouldn’t miss it » = oui, bien sûr. « Train » imite « training ».',
      '«I wouldn’t miss it» = نعم بالتأكيد. و«train» تقلّد «training».',
      '“I wouldn’t miss it” = yes.',
      '«I wouldn’t miss it» = sí, claro. «Train» imita a «training».',
    )),
    respond('b2-t-s3-l5', 4, 'What’s the fastest way to get to the airport?', ['Take the express train from Central Station.', 'About forty minutes.', 'The airport is new.'], x(
      '« What’s the fastest way » → un moyen de transport.',
      '«What’s the fastest way» ← وسيلة نقل.',
      'A way to get there.',
      '«What’s the fastest way» → un medio de transporte.',
    )),
    respond('b2-t-s3-l6', 4, 'Has the shipment left the warehouse yet?', ['Let me check with logistics.', 'It weighs twenty kilos.', 'The warehouse is big.'], x(
      'Réponse indirecte typique : je vérifie.',
      'إجابة غير مباشرة نموذجية: سأتحقق.',
      'Indirect: I’ll check.',
      'Respuesta indirecta típica: lo compruebo.',
    )),
    respond('b2-t-s3-l7', 4, 'Why don’t we hire a temporary assistant?', ['That would really help with the workload.', 'Because she is temporary.', 'He was hired last year.'], x(
      'Suggestion → on l’évalue positivement. « Because… » est le piège.',
      'اقتراح ← تقييم إيجابي. و«Because…» هي الفخ.',
      'Evaluate the suggestion.',
      'Sugerencia → se valora positivamente. «Because…» es la trampa.',
    )),
    respond('b2-t-s3-l8', 4, 'Where can I find the latest sales figures?', ['They’re on the shared drive.', 'They’re higher than last year.', 'Next Monday.'], x(
      '« Where » → un lieu (ici numérique).',
      '«Where» ← مكان (رقمي هنا).',
      'A place (here digital).',
      '«Where» → un lugar (aquí digital).',
    )),
    respond('b2-t-s3-l9', 4, 'Do you know how to use the new scheduling software?', ['Not yet, but there’s a training on Monday.', 'The schedule is full.', 'Yes, it’s new.'], x(
      'Non + solution prévue.',
      'لا + حل مقرر.',
      'No, with a solution.',
      'No + solución prevista.',
    )),
    respond('b2-t-s3-l10', 4, 'Isn’t the office closed on Friday?', ['Only in the afternoon.', 'The office is on the third floor.', 'I closed the window.'], x(
      'Réponse qui nuance l’information.',
      'إجابة تدقّق المعلومة.',
      'It qualifies the information.',
      'Respuesta que matiza la información.',
    )),
    match('b2-part2-traps-w3', ['room-service', 'wake-up-call', 'late-check-out', 'complimentary', 'amenities'], x(
      'Mots B2 sur les voyages d’affaires : relis l’exemple de chaque mot dans l’onglet Mots.',
      'مفردات B2 حول سفر العمل: راجع مثال كل كلمة في قسم الكلمات.',
      'B2 words about business travel: review each example in the Words tab.',
      'Palabras B2 sobre los viajes de negocios: repasa el ejemplo de cada una en la pestaña Palabras.',
    )),
  ],
);
