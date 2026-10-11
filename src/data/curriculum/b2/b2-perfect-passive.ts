import type { Unit } from '../../../types';
import { g, lesson, listen, match, order, respond, unit, v, x } from '../build';

export const b2PerfectPassive: Unit = unit(
  {
    id: 'b2-perfect-passive',
    emoji: '🧱',
    level: 4,
    part: 'R5',
    title: x('Temps parfaits et voix passive', 'الأزمنة التامة والمبني للمجهول', 'Perfect tenses and the passive', 'Tiempos perfectos y voz pasiva'),
    subtitle: x('have done, had done, be done', 'have done وhad done وbe done', 'have done, had done, be done', 'have done, had done, be done'),
    lesson: lesson(
      x('Distinguer prétérit et present perfect, et reconnaître le passif.', 'التمييز بين الماضي البسيط والمضارع التام والتعرف على المبني للمجهول.', 'Tell past simple from present perfect and recognise the passive.', 'Distinguir el pasado simple del present perfect y reconocer la pasiva.'),
      [
        x('Present perfect (have + participe) : lien avec le présent — since, for, already, yet, recently.', 'المضارع التام (have + اسم المفعول): صلة بالحاضر — since وfor وalready وyet وrecently.', 'Present perfect: link to now — since, for, already, yet.', 'Present perfect (have + participio): relación con el presente — since, for, already, yet, recently.'),
        x('Past perfect (had + participe) : action antérieure à une autre action passée.', 'الماضي التام (had + اسم المفعول): فعل سابق لفعل ماضٍ آخر.', 'Past perfect: earlier than another past action.', 'Past perfect (had + participio): acción anterior a otra acción pasada.'),
        x('Passif (be + participe) quand le sujet subit l’action : The order was shipped.', 'المبني للمجهول (be + اسم المفعول) عندما يقع الفعل على الفاعل: The order was shipped.', 'Passive when the subject receives the action.', 'Pasiva (be + participio) cuando el sujeto recibe la acción: The order was shipped.'),
      ],
      'The contract has already been signed, but the payment had not arrived when we called.',
      x('« has been signed » : passif au present perfect ; « had not arrived » : antériorité.', '«has been signed»: مجهول في المضارع التام، و«had not arrived»: أسبقية.', 'Passive present perfect; past perfect for the earlier event.', '«has been signed»: pasiva en present perfect; «had not arrived»: anterioridad.'),
    ),
  },
  [
    g('b2-pp-q1', 4, 'Mr. Silva ___ for the company since 2015.', ['has worked', 'worked', 'works', 'is working'], x(
      '« Since 2015 » + situation qui dure → present perfect.',
      '«Since 2015» مع وضع مستمر ← المضارع التام.',
      '“Since” + ongoing → present perfect.',
      '«Since 2015» + situación que continúa → present perfect.',
    )),
    g('b2-pp-q2', 4, 'The new software ___ by our IT team next week.', ['will be installed', 'will install', 'has installed', 'installing'], x(
      'Le logiciel subit l’action : passif futur « will be installed ».',
      'البرنامج يقع عليه الفعل: مجهول مستقبلي «will be installed».',
      'The software receives the action: future passive.',
      'El programa recibe la acción: pasiva en futuro, «will be installed».',
    )),
    g('b2-pp-q3', 4, 'When the manager arrived, the meeting ___ already ___.', ['had / started', 'has / started', 'was / starting', 'did / start'], x(
      'Action antérieure à « arrived » → past perfect : had started.',
      'فعل سابق لـ «arrived» ← الماضي التام: had started.',
      'Earlier than “arrived” → past perfect.',
      'Acción anterior a «arrived» → past perfect: had started.',
    )),
    g('b2-pp-q4', 4, 'All orders ___ within 48 hours of payment.', ['are shipped', 'ship', 'are shipping', 'have ship'], x(
      'Les commandes sont expédiées (par quelqu’un) : passif présent.',
      'الطلبيات تُشحن (من طرف أحد): مجهول في المضارع.',
      'Orders are shipped by someone: present passive.',
      'Los pedidos son enviados (por alguien): pasiva en presente.',
    )),
    g('b2-pp-q5', 4, 'We ___ the results yet, so we cannot share them.', ['have not received', 'did not receive', 'do not receive', 'are not receiving'], x(
      '« Yet » en phrase négative → present perfect.',
      '«Yet» في جملة منفية ← المضارع التام.',
      '“Yet” in a negative → present perfect.',
      '«Yet» en una frase negativa → present perfect.',
    )),
    g('b2-pp-q6', 4, 'By the end of this year, the company ___ more than 500 new stores.', ['will have opened', 'will open', 'has opened', 'opens'], x(
      '« By the end of this year » : action terminée avant un moment futur → futur antérieur.',
      '«By the end of this year»: فعل يكتمل قبل لحظة مستقبلية ← المستقبل التام.',
      '“By the end of this year”: completed before a future point → future perfect.',
      '«By the end of this year»: acción terminada antes de un momento futuro → futuro perfecto.',
    )),
    order('b2-pp-o1', 'The report was written by the marketing team', x('Commence par « The report ».', 'ابدأ بـ «The report».', 'Start with “The report”.', 'Empieza por «The report».'), x(
      'Passif : sujet + be + participe passé + by + agent.',
      'المبني للمجهول: فاعل + be + اسم المفعول + by + الفاعل الحقيقي.',
      'Passive: subject + be + past participle + by + agent.',
      'Pasiva: sujeto + be + participio + by + agente.',
    )),
    match('b2-perfect-passive-w1', ['supervise', 'approval', 'circulate', 'draft', 'proofread'], x(
      'Mots B2 sur le travail de bureau : relis l’exemple de chaque mot dans l’onglet Mots.',
      'مفردات B2 حول العمل المكتبي: راجع مثال كل كلمة في قسم الكلمات.',
      'B2 words about office work: review each example in the Words tab.',
      'Palabras B2 sobre el trabajo de oficina: repasa el ejemplo de cada una en la pestaña Palabras.',
    )),
  ],
  [
    g('b2-pp-s2-q1', 4, 'The new factory ___ by the mayor next spring.', ['will be opened', 'will open', 'opens', 'has opened'], x(
      '« By the mayor » indique l’agent : passif futur « will be opened ».',
      '«By the mayor» يدل على الفاعل الحقيقي: مبني للمجهول في المستقبل «will be opened».',
      '“By the mayor” → future passive.',
      '«By the mayor» indica el agente: pasiva en futuro «will be opened».',
    )),
    g('b2-pp-s2-q2', 4, 'By the time we arrived, the presentation ___.', ['had already started', 'has already started', 'already starts', 'was already start'], x(
      'Action antérieure à « arrived » → past perfect.',
      'فعل سابق لـ «arrived» ← الماضي التام.',
      'Earlier than “arrived” → past perfect.',
      'Acción anterior a «arrived» → past perfect.',
    )),
    g('b2-pp-s2-q3', 4, 'Several customers ___ about the new prices since Monday.', ['have complained', 'complained', 'had complained', 'complain'], x(
      '« Since Monday » → present perfect.',
      '«Since Monday» ← المضارع التام.',
      '“Since” → present perfect.',
      '«Since Monday» → present perfect.',
    )),
    g('b2-pp-s2-q4', 4, 'The documents must ___ by Friday.', ['be signed', 'sign', 'signed', 'be signing'], x(
      'Modal + passif : must be + participe passé.',
      'فعل ناقص + مجهول: must be + اسم المفعول.',
      'Modal passive: must be + participle.',
      'Modal + pasiva: must be + participio.',
    )),
    g('b2-pp-s2-q5', 4, 'Ms. Haddad ___ head of marketing last year.', ['was appointed', 'has been appointed', 'appointed', 'is appointed'], x(
      '« Last year » → prétérit ; elle subit l’action → passif « was appointed ».',
      '«Last year» ← الماضي البسيط، وهي يقع عليها الفعل ← «was appointed».',
      'Past + passive.',
      '«Last year» → pasado simple; ella recibe la acción → pasiva «was appointed».',
    )),
    g('b2-pp-s2-q6', 4, 'Before she joined our company, Ms. Ruiz ___ in three countries.', ['had worked', 'has worked', 'works', 'was work'], x(
      'Antérieur à « joined » (passé) → past perfect.',
      'سابق لـ «joined» (ماضٍ) ← الماضي التام.',
      'Before another past action → past perfect.',
      'Anterior a «joined» (pasado) → past perfect.',
    )),
    g('b2-pp-s2-q7', 4, 'Our products ___ by distributors in more than 40 countries.', ['are sold', 'sell', 'are selling', 'have sold'], x(
      '« By distributors » → passif présent : « are sold ».',
      '«By distributors» ← مبني للمجهول في المضارع: «are sold».',
      '“By distributors” → present passive.',
      '«By distributors» → pasiva en presente: «are sold».',
    )),
    order('b2-pp-s2-o1', 'The meeting has been postponed until next week', x('Commence par « The meeting ».', 'ابدأ بـ «The meeting».', 'Start with “The meeting”.', 'Empieza por «The meeting».'), x(
      'Passif au present perfect : has been + participe.',
      'مجهول في المضارع التام: has been + اسم المفعول.',
      'Present perfect passive.',
      'Pasiva en present perfect: has been + participio.',
    )),
    respond('b2-pp-s2-l1', 4, 'Has the new manager been chosen yet?', ['Yes, they announced it this morning.', 'He chose the red one.', 'No, I manage.'], x(
      'Oui, avec le moment de l’annonce. « Chose » reprend le verbe de la question : piège.',
      'نعم مع وقت الإعلان. و«chose» تكرر فعل السؤال: فخ.',
      'Yes, with when; “chose” echoes the question.',
      'Sí, con el momento del anuncio. «Chose» repite el verbo de la pregunta: trampa.',
    )),
    listen('b2-pp-s2-l2', 'L4', 4, 'Good morning. I’m pleased to announce that our company has been selected as Supplier of the Year by the National Retail Association.', 'What has happened to the company?', ['It has received an award', 'It has opened a new store', 'It has hired a new director', 'It has lost a client'], x(
      '« Selected as Supplier of the Year » = récompense.',
      '«Selected as Supplier of the Year» = جائزة.',
      'It won an award.',
      '«Selected as Supplier of the Year» = un premio.',
    )),
    match('b2-perfect-passive-w2', ['automation', 'downtime', 'shutdown', 'overhaul', 'breakdown'], x(
      'Mots B2 sur la production : relis l’exemple de chaque mot dans l’onglet Mots.',
      'مفردات B2 حول الإنتاج: راجع مثال كل كلمة في قسم الكلمات.',
      'B2 words about production: review each example in the Words tab.',
      'Palabras B2 sobre la producción: repasa el ejemplo de cada una en la pestaña Palabras.',
    )),
  ],
  [
    g('b2-pp-s3-q1', 4, 'The broken window ___ yesterday afternoon.', ['was repaired', 'repaired', 'has repaired', 'is repairing'], x(
      'La fenêtre subit l’action, au passé → « was repaired ».',
      'النافذة يقع عليها الفعل في الماضي ← «was repaired».',
      'Past passive.',
      'La ventana recibe la acción, en pasado → «was repaired».',
    )),
    g('b2-pp-s3-q2', 4, 'We ___ for the bus for twenty minutes when it finally arrived.', ['had been waiting', 'have been waiting', 'are waiting', 'were wait'], x(
      'Durée avant un moment passé → past perfect continu.',
      'مدة قبل لحظة ماضية ← الماضي التام المستمر.',
      'Duration before a past moment.',
      'Duración antes de un momento pasado → past perfect continuo.',
    )),
    g('b2-pp-s3-q3', 4, 'All employees ___ to attend the safety training.', ['are required', 'require', 'are requiring', 'required'], x(
      '« Be required to » = être obligé de (passif).',
      '«Be required to» = مُلزَم بـ (مجهول).',
      '“Be required to”.',
      '«Be required to» = estar obligado a (pasiva).',
    )),
    g('b2-pp-s3-q4', 4, 'The report ___ yet, so we can’t send it.', ['hasn’t been finished', 'didn’t finish', 'isn’t finishing', 'hasn’t finish'], x(
      '« Yet » + le rapport subit l’action → passif au present perfect.',
      '«Yet» والتقرير يقع عليه الفعل ← مجهول في المضارع التام.',
      'Present perfect passive with “yet”.',
      '«Yet» + el informe recibe la acción → pasiva en present perfect.',
    )),
    g('b2-pp-s3-q5', 4, 'Since 2019, our online shop ___ its sales every year.', ['has increased', 'increased', 'increases', 'had increased'], x(
      '« Since 2019 » → present perfect.',
      '«Since 2019» ← المضارع التام.',
      '“Since” → present perfect.',
      '«Since 2019» → present perfect.',
    )),
    g('b2-pp-s3-q6', 4, 'The winners ___ by email next Monday.', ['will be notified', 'will notify', 'notify', 'are notifying'], x(
      'Les gagnants seront prévenus (par quelqu’un) → passif futur.',
      'الفائزون سيُبلَّغون (من طرف أحد) ← مجهول في المستقبل.',
      'Future passive.',
      'Los ganadores serán avisados (por alguien) → pasiva en futuro.',
    )),
    v('b2-pp-s3-q7', 4, 'The order was ___ to the wrong address.', ['delivered', 'delayed', 'delighted', 'deleted'], x(
      'Envoyée à la mauvaise adresse → livrée : « delivered ».',
      'أُرسلت إلى عنوان خاطئ ← سُلّمت: «delivered».',
      'Sent to the wrong address → “delivered”.',
      'Enviado a la dirección equivocada → entregado: «delivered».',
    )),
    order('b2-pp-s3-o1', 'The results will be announced on Friday', x('Commence par « The results ».', 'ابدأ بـ «The results».', 'Start with “The results”.', 'Empieza por «The results».'), x(
      'Passif futur : will be + participe.',
      'مجهول في المستقبل: will be + اسم المفعول.',
      'Future passive.',
      'Pasiva en futuro: will be + participio.',
    )),
    respond('b2-pp-s3-l1', 4, 'Why was the conference moved to May?', ['The venue was already booked in April.', 'It was very interesting.', 'About three hundred people.'], x(
      '« Why » → une raison.',
      '«Why» ← سبب.',
      '“Why” → a reason.',
      '«Why» → una razón.',
    )),
    listen('b2-pp-s3-l2', 'L3', 4, 'W: Has the client been informed about the delay?\nM: Not yet. I’ve been trying to call her all morning, but she hasn’t answered.', 'What has the man been doing?', ['Trying to call the client', 'Writing a report', 'Meeting the client', 'Fixing the delay'], x(
      '« I’ve been trying to call her all morning ».',
      '«I’ve been trying to call her all morning» أي يحاول الاتصال بها.',
      'Trying to call her.',
      '«I’ve been trying to call her all morning»: intentar llamarla.',
    )),
    match('b2-perfect-passive-w3', ['product-recall', 'machinery', 'component', 'manufacturer', 'operational'], x(
      'Mots B2 sur la production : relis l’exemple de chaque mot dans l’onglet Mots.',
      'مفردات B2 حول الإنتاج: راجع مثال كل كلمة في قسم الكلمات.',
      'B2 words about production: review each example in the Words tab.',
      'Palabras B2 sobre la producción: repasa el ejemplo de cada una en la pestaña Palabras.',
    )),
  ],
);
