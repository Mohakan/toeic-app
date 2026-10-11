import type { Unit } from '../../../types';
import { g, lesson, listen, order, respond, unit, x } from '../build';

export const b1Connectors: Unit = unit(
  {
    id: 'b1-connectors',
    emoji: '🧷',
    level: 3,
    part: 'R5 · R6',
    title: x('Relier les idées', 'ربط الأفكار', 'Linking ideas', 'Enlazar ideas'),
    subtitle: x('because, so, but, however, therefore…', 'because وso وbut وhowever وtherefore…', 'because, so, but, however, therefore…', 'because, so, but, however, therefore…'),
    lesson: lesson(
      x('Choisir le connecteur qui exprime la bonne relation : cause, conséquence, opposition ou ajout.', 'اختيار أداة الربط المعبّرة عن العلاقة الصحيحة: سبب أو نتيجة أو تعارض أو إضافة.', 'Choose the linker for cause, result, contrast or addition.', 'Elegir el conector que expresa la relación correcta: causa, consecuencia, oposición o adición.'),
      [
        x('Cause : because + sujet + verbe ; because of / due to + nom.', 'السبب: because + فاعل + فعل، وbecause of/due to + اسم.', 'Cause: because + clause; because of + noun.', 'Causa: because + sujeto + verbo; because of / due to + sustantivo.'),
        x('Conséquence : so, therefore, as a result. Opposition : but, although ; « However, » en début de phrase.', 'النتيجة: so وtherefore وas a result. والتعارض: but وalthough، و«However,» في بداية الجملة.', 'Result: so, therefore, as a result. Contrast: but, although, However,.', 'Consecuencia: so, therefore, as a result. Oposición: but, although; «However,» al principio de la frase.'),
        x('Ajout : and, also, in addition, too.', 'الإضافة: and وalso وin addition وtoo.', 'Addition: and, also, in addition, too.', 'Adición: and, also, in addition, too.'),
      ],
      'Sales were low in May. However, they increased in June, so we hired two more people.',
      x('« However » = opposition ; « so » = conséquence.', '«However» = تعارض و«so» = نتيجة.', '“However” = contrast; “so” = result.', '«However» = oposición; «so» = consecuencia.'),
    ),
  },
  [
    g('b1-cn-s1-q1', 3, 'The office was closed, ___ we worked from home.', ['so', 'because', 'but', 'although'], x(
      'Conséquence (bureau fermé → travail à la maison) → « so ».',
      'نتيجة (المكتب مغلق ← العمل من البيت) ← «so».',
      'A result → “so”.',
      'Consecuencia (oficina cerrada → trabajo en casa) → «so».',
    )),
    g('b1-cn-s1-q2', 3, 'I was late ___ the traffic was terrible.', ['because', 'so', 'however', 'but'], x(
      'Cause + proposition → « because ».',
      'سبب + جملة ← «because».',
      'A cause + clause → “because”.',
      'Causa + oración → «because».',
    )),
    g('b1-cn-s1-q3', 3, 'The hotel was expensive. ___, the service was excellent.', ['However', 'Because', 'So', 'Therefore'], x(
      'Opposition (cher / mais excellent), en début de phrase avec une virgule → « However ».',
      'تعارض (غالٍ / لكن ممتاز) في بداية الجملة مع فاصلة ← «However».',
      'Contrast at the start of a sentence → “However,”.',
      'Oposición (caro / pero excelente), al principio de la frase con coma → «However».',
    )),
    g('b1-cn-s1-q4', 3, 'We wanted to go out, ___ it was raining.', ['but', 'so', 'because', 'also'], x(
      'Opposition entre deux idées → « but ».',
      'تعارض بين فكرتين ← «but».',
      'Contrast → “but”.',
      'Oposición entre dos ideas → «but».',
    )),
    g('b1-cn-s1-q5', 3, 'The flight was cancelled ___ the storm.', ['because of', 'because', 'so', 'although'], x(
      'Cause + nom (the storm) → « because of ».',
      'سبب + اسم (the storm) ← «because of».',
      'Cause + noun → “because of”.',
      'Causa + sustantivo (the storm) → «because of».',
    )),
    g('b1-cn-s1-q6', 3, 'Our prices are low. ___, delivery is free.', ['In addition', 'However', 'Because', 'Although'], x(
      'Ajout d’un autre avantage → « In addition ».',
      'إضافة ميزة أخرى ← «In addition».',
      'Adding a point → “In addition”.',
      'Añadir otra ventaja → «In addition».',
    )),
    g('b1-cn-s1-q7', 3, 'Demand increased. ___, we hired more staff.', ['As a result', 'However', 'Although', 'Because'], x(
      'Conséquence → « As a result ».',
      'نتيجة ← «As a result».',
      'A result → “As a result”.',
      'Consecuencia → «As a result».',
    )),
    order('b1-cn-s1-o1', 'The shop was busy so we waited outside', x('« so » relie la cause et la conséquence.', '«so» تربط السبب بالنتيجة.', '“so” links cause and result.', '«so» une causa y consecuencia.'), x(
      'Cause + so + conséquence.',
      'سبب + so + نتيجة.',
      'Cause + so + result.',
      'Causa + so + consecuencia.',
    )),
    respond('b1-cn-s1-l1', 3, 'Why did the meeting finish early?', ['Because the director had to leave.', 'At three o’clock.', 'In Room 2.'], x(
      '« Why » → une raison avec « because ».',
      '«Why» ← سبب بـ «because».',
      '“Why” → “because…”.',
      '«Why» → una razón con «because».',
    )),
    listen('b1-cn-s1-l2', 'L3', 3, 'W: The train tickets are cheaper than flying.\nM: True, but the train takes six hours, so I’d rather fly.', 'Why does the man prefer to fly?', ['The train takes too long', 'The train is more expensive', 'He likes airports', 'The train is full'], x(
      '« But the train takes six hours, so I’d rather fly ».',
      'السبب: «But the train takes six hours, so I’d rather fly».',
      'The train takes six hours.',
      '«But the train takes six hours, so I’d rather fly»: el tren tarda demasiado.',
    )),
  ],
  [
    g('b1-cn-s2-q1', 3, '___ it was late, she continued working.', ['Although', 'Because', 'So', 'However'], x(
      'Opposition + proposition, en début de phrase → « Although ».',
      'تعارض + جملة في البداية ← «Although».',
      'Contrast + clause → “Although”.',
      'Oposición + oración, al principio de la frase → «Although».',
    )),
    g('b1-cn-s2-q2', 3, 'He didn’t come to work ___ he was sick.', ['because', 'so', 'but', 'although'], x(
      'Cause → « because ».',
      'سبب ← «because».',
      'Cause → “because”.',
      'Causa → «because».',
    )),
    g('b1-cn-s2-q3', 3, 'The product is popular. ___, we need to improve the packaging.', ['However', 'Because', 'So', 'As a result'], x(
      'Opposition (populaire, mais à améliorer) → « However ».',
      'تعارض (رائج لكنه يحتاج تحسينًا) ← «However».',
      'Contrast → “However”.',
      'Oposición (popular, pero hay que mejorarlo) → «However».',
    )),
    g('b1-cn-s2-q4', 3, 'The battery was low, ___ my phone turned off.', ['so', 'because', 'although', 'however'], x(
      'Conséquence → « so ».',
      'نتيجة ← «so».',
      'Result → “so”.',
      'Consecuencia → «so».',
    )),
    g('b1-cn-s2-q5', 3, 'We chose this supplier ___ their quality is excellent.', ['because', 'so', 'despite', 'however'], x(
      'Cause + proposition → « because ».',
      'سبب + جملة ← «because».',
      'Cause → “because”.',
      'Causa + oración → «because».',
    )),
    g('b1-cn-s2-q6', 3, 'She speaks French and Arabic. She ___ speaks some Spanish.', ['also', 'too', 'either', 'so'], x(
      'Ajout avant le verbe → « also ». « Too » se place en fin de phrase.',
      'إضافة قبل الفعل ← «also»، أما «too» ففي آخر الجملة.',
      '“Also” before the verb; “too” at the end.',
      'Adición delante del verbo → «also». «Too» va al final de la frase.',
    )),
    g('b1-cn-s2-q7', 3, 'The road was closed. ___, we took a different route.', ['Therefore', 'However', 'Although', 'Because'], x(
      'Conséquence → « Therefore ».',
      'نتيجة ← «Therefore».',
      'Result → “Therefore”.',
      'Consecuencia → «Therefore».',
    )),
    order('b1-cn-s2-o1', 'I called her but she did not answer', x('« but » oppose les deux idées.', '«but» تعارض بين الفكرتين.', '“but” contrasts the ideas.', '«but» opone las dos ideas.'), x(
      'Proposition + but + proposition opposée.',
      'جملة + but + جملة معارضة.',
      'Clause + but + contrasting clause.',
      'Oración + but + oración opuesta.',
    )),
    respond('b1-cn-s2-l1', 3, 'Do you want to go now, or wait for Sam?', ['Let’s wait. He’ll be here soon.', 'Because he is late.', 'Yes, I want.'], x(
      'Question à choix → choisir et justifier.',
      'سؤال اختيار ← نختار ونبرر.',
      'Choose one option.',
      'Pregunta de elección → elegir y justificar.',
    )),
    listen('b1-cn-s2-l2', 'L4', 3, 'Because of the heavy rain this morning, the outdoor market will open at noon instead of nine. However, the indoor shops are open as usual.', 'What is open as usual?', ['The indoor shops', 'The outdoor market', 'The car park', 'The café'], x(
      '« However, the indoor shops are open as usual ».',
      '«However, the indoor shops are open as usual» أي المحلات الداخلية.',
      'The indoor shops.',
      '«However, the indoor shops are open as usual»: las tiendas interiores.',
    )),
  ],
  [
    g('b1-cn-s3-q1', 3, 'The printer is broken, ___ we can’t print the contracts.', ['so', 'because', 'although', 'unless'], x(
      'Conséquence → « so ».',
      'نتيجة ← «so».',
      'Result → “so”.',
      'Consecuencia → «so».',
    )),
    g('b1-cn-s3-q2', 3, 'We arrived early ___ we wanted good seats.', ['because', 'so', 'however', 'although'], x(
      'Cause → « because ».',
      'سبب ← «because».',
      'Cause → “because”.',
      'Causa → «because».',
    )),
    g('b1-cn-s3-q3', 3, 'The car is old. ___, it works perfectly.', ['However', 'Therefore', 'Because', 'So'], x(
      'Opposition (vieille, mais fonctionne) → « However ».',
      'تعارض (قديمة لكنها تعمل) ← «However».',
      'Contrast → “However”.',
      'Oposición (vieja, pero funciona) → «However».',
    )),
    g('b1-cn-s3-q4', 3, '___ the bad reviews, the film was a success.', ['Despite', 'Although', 'Because', 'So'], x(
      'Opposition + nom (the bad reviews) → « Despite ». « Although » demanderait un verbe.',
      'تعارض + اسم (the bad reviews) ← «Despite». أما «Although» فتحتاج فعلًا.',
      'Contrast + noun → “Despite”.',
      'Oposición + sustantivo (the bad reviews) → «Despite». «Although» exigiría un verbo.',
    )),
    g('b1-cn-s3-q5', 3, 'The company lost money ___ sales fell.', ['because', 'so', 'although', 'however'], x(
      'Cause → « because ».',
      'سبب ← «because».',
      'Cause → “because”.',
      'Causa → «because».',
    )),
    g('b1-cn-s3-q6', 3, 'You can pay by card. You can ___ pay in cash.', ['also', 'too', 'either', 'both'], x(
      'Ajout avant le verbe → « also ».',
      'إضافة قبل الفعل ← «also».',
      '“Also” before the verb.',
      'Adición delante del verbo → «also».',
    )),
    g('b1-cn-s3-q7', 3, 'The meeting was very long, ___ it was useful.', ['but', 'because', 'so', 'therefore'], x(
      'Opposition → « but ».',
      'تعارض ← «but».',
      'Contrast → “but”.',
      'Oposición → «but».',
    )),
    order('b1-cn-s3-o1', 'The store opened late because of a power cut', x('« because of » + nom.', '«because of» + اسم.', '“because of” + noun.', '«because of» + sustantivo.'), x(
      'Fait + because of + cause (nom).',
      'واقعة + because of + سبب (اسم).',
      'Fact + because of + noun.',
      'Hecho + because of + causa (sustantivo).',
    )),
    respond('b1-cn-s3-l1', 3, 'Why is the office so quiet today?', ['Most people are at the conference.', 'Yes, it is quiet.', 'At nine o’clock.'], x(
      'Réponse qui donne la raison, même sans « because ».',
      'إجابة تذكر السبب حتى دون «because».',
      'Gives the reason.',
      'Respuesta que da la razón, aunque sin «because».',
    )),
    listen('b1-cn-s3-l2', 'L3', 3, 'M: Our sales in Europe went down this year.\nW: Yes, but sales in Asia went up, so the total is about the same.', 'What does the woman say about total sales?', ['They are about the same', 'They increased a lot', 'They decreased a lot', 'They are not known yet'], x(
      '« So the total is about the same ».',
      '«So the total is about the same» أي المجموع متقارب.',
      'About the same.',
      '«So the total is about the same»: el total es más o menos igual.',
    )),
  ],
);
