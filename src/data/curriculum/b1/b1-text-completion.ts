import type { Unit } from '../../../types';
import { g, lesson, read, unit, x } from '../build';

const MEMO = 'To: All employees\nFrom: Facilities\nThe main entrance will be closed for repairs next week. During this time, please (1) ___ the side door on Park Avenue. We apologize for any (2) ___. The work is expected to be (3) ___ by Friday.';

const NOTICE = 'Dear Ms. Moreau,\nThank you for your (1) ___ for the position of sales assistant. We are pleased to invite you to an interview on 3 April at 10 a.m. Please bring a copy of your diploma. (2) ___ you cannot attend, kindly let us know as soon as possible.';

const WELCOME = 'Dear Ms. Farah,\nWelcome to Delta Logistics! Your first day is Monday, 4 March. Please (1) ___ at the reception desk at 8:30 a.m. Your manager, Mr. Sami Kaci, will (2) ___ you around the office. During the first week, you will attend several (3) ___ sessions about our systems.\nBest regards,\nHuman Resources';

const MAINTENANCE = 'Dear customers,\nOur online store will be (1) ___ for maintenance on Sunday from 2 a.m. to 6 a.m. During this time, you will not be able to place orders. We are sorry for the (2) ___. If you have any questions, please (3) ___ our customer service team at help@shopnow.com.';

const SALES_MEMO = 'To: All sales staff\nSubject: Monthly meeting\nThe monthly sales meeting has been (1) ___ to Thursday, 15 May, because the director is traveling on Wednesday. The meeting will start at 10 a.m. (2) ___ Room 4. Please bring your sales figures for April. Lunch will be (3) ___ after the meeting.';

const HOTEL = 'Dear Mr. Okafor,\nThank you for choosing the Seaside Hotel. We are happy to (1) ___ your reservation for three nights, from 12 to 15 June. Your room has a sea view and (2) ___ breakfast. Check-in starts at 2 p.m. If you need an airport transfer, please let us know (3) ___ your arrival.';

const BANK_AD = 'Looking for a new career? City Bank is (1) ___ customer advisers for its branches in Tunis and Sousse. Candidates should have good communication skills and (2) ___ least one year of experience in sales. We offer a competitive salary and (3) ___ training. Apply online before 30 April.';

const LINA = 'Hi Tom,\nThanks for your email. I’m afraid I can’t attend the workshop on Friday (1) ___ I will be visiting a client in Sfax. Could you (2) ___ me the presentation slides after the session? I would also like to know (3) ___ the next workshop will take place.\nBest,\nLina';

export const b1TextCompletion: Unit = unit(
  {
    id: 'b1-text-completion',
    emoji: '🧩',
    level: 3,
    part: 'R6',
    title: x('Textes à compléter', 'نصوص للإكمال', 'Text completion', 'Textos incompletos'),
    subtitle: x('Partie 6 : lire tout le contexte', 'الجزء 6: قراءة السياق كاملًا', 'Part 6: read the whole context', 'Parte 6: leer todo el contexto'),
    lesson: lesson(
      x('Compléter un texte en tenant compte des phrases avant et après le blanc.', 'إكمال نص مع مراعاة الجمل قبل الفراغ وبعده.', 'Complete a text using the sentences before and after the blank.', 'Completar un texto teniendo en cuenta las frases anteriores y posteriores al hueco.'),
      [
        x('Contrairement à la Partie 5, la réponse dépend souvent du reste du texte (temps, sens, logique).', 'خلافًا للجزء 5، يعتمد الجواب غالبًا على بقية النص (الزمن، المعنى، المنطق).', 'Unlike Part 5, the answer often depends on the rest of the text.', 'A diferencia de la Parte 5, la respuesta suele depender del resto del texto (tiempo, sentido, lógica).'),
        x('Vérifie le temps des verbes déjà présents dans le texte.', 'تحقّق من زمن الأفعال الموجودة في النص.', 'Check the tense of the other verbs.', 'Comprueba el tiempo de los verbos que ya aparecen en el texto.'),
      ],
      'The office will move next month. The new address (___) on our website.',
      x('Annonce future → « will be posted ».', 'إعلان مستقبلي ← «will be posted».', 'Future context → “will be posted”.', 'Anuncio futuro → «will be posted».'),
    ),
  },
  [
    read('b1-tc-r1', 'R6', 3, MEMO, 'Choose the word for blank (1).', ['use', 'uses', 'using', 'used'], x(
      'Après « please », verbe à la forme de base (impératif) : « please use ».',
      'بعد «please» نستعمل الفعل في الشكل الأساسي (الأمر): «please use».',
      'After “please”: base verb.',
      'Después de «please», verbo en forma base (imperativo): «please use».',
    )),
    read('b1-tc-r2', 'R6', 3, MEMO, 'Choose the word for blank (2).', ['inconvenience', 'convenient', 'inconvenient', 'conveniently'], x(
      'Après « any », il faut un nom : « We apologize for any inconvenience ».',
      'بعد «any» نحتاج اسمًا: «We apologize for any inconvenience».',
      'After “any” → noun.',
      'Después de «any» se necesita un sustantivo: «We apologize for any inconvenience».',
    )),
    read('b1-tc-r3', 'R6', 3, MEMO, 'Choose the word for blank (3).', ['completed', 'complete', 'completing', 'completion'], x(
      '« Be expected to be + participe passé » (passif) : « to be completed ».',
      '«Be expected to be + اسم المفعول» (مبني للمجهول): «to be completed».',
      'Passive: “to be completed”.',
      '«Be expected to be + participio» (pasiva): «to be completed».',
    )),
    read('b1-tc-r4', 'R6', 3, NOTICE, 'Choose the word for blank (1).', ['application', 'apply', 'applicant', 'applied'], x(
      'Après « your » → nom ; on remercie pour une candidature : « application ».',
      'بعد «your» ← اسم، والشكر على طلب الترشح: «application».',
      'After “your” → noun: “application”.',
      'Después de «your» → sustantivo; se agradece una candidatura: «application».',
    )),
    read('b1-tc-r5', 'R6', 3, NOTICE, 'Choose the word for blank (2).', ['If', 'Unless', 'Although', 'Because'], x(
      'Sens : « si vous ne pouvez pas venir, prévenez-nous » → « If ».',
      'المعنى: «إذا لم تستطيعي الحضور فأعلمينا» ← «If».',
      'Meaning: “If you cannot attend, let us know”.',
      'Sentido: «si no puede venir, avísenos» → «If».',
    )),
  ],
  [
    read('b1-tc-s2-r1', 'R6', 3, WELCOME, 'Choose the word for blank (1).', ['arrive', 'arrives', 'arrival', 'arriving'], x(
      'Après « please » : verbe de base (impératif).',
      'بعد «please»: الفعل الأساسي (الأمر).',
      'After “please”: base verb.',
      'Después de «please»: verbo base (imperativo).',
    )),
    read('b1-tc-s2-r2', 'R6', 3, WELCOME, 'Choose the word for blank (2).', ['show', 'shows', 'showed', 'showing'], x(
      'Après « will » : verbe de base, « will show you around ».',
      'بعد «will»: الفعل الأساسي «will show you around».',
      'After “will”: base verb.',
      'Después de «will»: verbo base, «will show you around».',
    )),
    read('b1-tc-s2-r3', 'R6', 3, WELCOME, 'Choose the word for blank (3).', ['training', 'trainer', 'trained', 'trains'], x(
      '« Training sessions » = sessions de formation (nom employé comme adjectif).',
      '«Training sessions» = جلسات تدريب (اسم في موقع الصفة).',
      '“Training sessions”.',
      '«Training sessions» = sesiones de formación (sustantivo usado como adjetivo).',
    )),
    read('b1-tc-s2-r4', 'R6', 3, MAINTENANCE, 'Choose the word for blank (1).', ['unavailable', 'unavailability', 'unavailably', 'available'], x(
      'Après « will be » → adjectif ; pendant la maintenance, le site est indisponible : « unavailable ».',
      'بعد «will be» ← صفة، وأثناء الصيانة يكون الموقع غير متاح: «unavailable».',
      'During maintenance → “unavailable”.',
      'Después de «will be» → adjetivo; durante el mantenimiento la tienda no está disponible: «unavailable».',
    )),
    read('b1-tc-s2-r5', 'R6', 3, MAINTENANCE, 'Choose the word for blank (2).', ['trouble', 'troubled', 'troubling', 'troublesome'], x(
      'Après « the » → nom : « We are sorry for the trouble ».',
      'بعد «the» ← اسم: «We are sorry for the trouble».',
      'After “the” → noun.',
      'Después de «the» → sustantivo: «We are sorry for the trouble».',
    )),
    read('b1-tc-s2-r6', 'R6', 3, MAINTENANCE, 'Choose the word for blank (3).', ['contact', 'contacts', 'contacted', 'contacting'], x(
      'Après « please » : verbe de base.',
      'بعد «please»: الفعل الأساسي.',
      'After “please”: base verb.',
      'Después de «please»: verbo base.',
    )),
    read('b1-tc-s2-r7', 'R6', 3, SALES_MEMO, 'Choose the word for blank (1).', ['moved', 'move', 'moving', 'moves'], x(
      'Passif au present perfect : « has been moved ».',
      'المبني للمجهول في المضارع التام: «has been moved».',
      'Passive: “has been moved”.',
      'Pasiva en present perfect: «has been moved».',
    )),
    read('b1-tc-s2-r8', 'R6', 3, SALES_MEMO, 'Choose the word for blank (2).', ['in', 'on', 'at', 'by'], x(
      'Dans une salle → « in Room 4 ».',
      'داخل قاعة ← «in Room 4».',
      'Inside a room → “in”.',
      'Dentro de una sala → «in Room 4».',
    )),
    read('b1-tc-s2-r9', 'R6', 3, SALES_MEMO, 'Choose the word for blank (3).', ['served', 'serve', 'serving', 'service'], x(
      'Passif futur : « will be served ».',
      'المبني للمجهول في المستقبل: «will be served».',
      'Passive: “will be served”.',
      'Pasiva en futuro: «will be served».',
    )),
    g('b1-tc-s2-q1', 3, 'The new procedures will ___ from next month.', ['apply', 'applies', 'applied', 'application'], x(
      'Après « will » : verbe de base.',
      'بعد «will»: الفعل الأساسي.',
      'After “will”: base verb.',
      'Después de «will»: verbo base.',
    )),
  ],
  [
    read('b1-tc-s3-r1', 'R6', 3, HOTEL, 'Choose the word for blank (1).', ['confirm', 'confirmation', 'confirmed', 'confirming'], x(
      'Après « to » : verbe de base, « happy to confirm ».',
      'بعد «to»: الفعل الأساسي «happy to confirm».',
      'After “to”: base verb.',
      'Después de «to»: verbo base, «happy to confirm».',
    )),
    read('b1-tc-s3-r2', 'R6', 3, HOTEL, 'Choose the word for blank (2).', ['includes', 'including', 'include', 'inclusion'], x(
      '« Your room has … and includes … » : deux verbes au présent, sujet singulier.',
      '«Your room has … and includes …»: فعلان في المضارع مع فاعل مفرد.',
      'Two verbs for one singular subject.',
      '«Your room has … and includes …»: dos verbos en presente con un sujeto singular.',
    )),
    read('b1-tc-s3-r3', 'R6', 3, HOTEL, 'Choose the word for blank (3).', ['before', 'after', 'during', 'while'], x(
      'Logique : on prévient l’hôtel avant d’arriver pour organiser le transfert.',
      'منطقيًا: نُعلم الفندق قبل الوصول لتنظيم النقل.',
      'Logically, you tell the hotel before arrival.',
      'Lógica: se avisa al hotel antes de llegar para organizar el traslado.',
    )),
    read('b1-tc-s3-r4', 'R6', 3, BANK_AD, 'Choose the word for blank (1).', ['hiring', 'hired', 'hires', 'hire'], x(
      'Présent continu : « City Bank is hiring » (recrute en ce moment).',
      'المضارع المستمر: «City Bank is hiring» (يوظّف حاليًا).',
      '“Is hiring”.',
      'Presente continuo: «City Bank is hiring» (está contratando).',
    )),
    read('b1-tc-s3-r5', 'R6', 3, BANK_AD, 'Choose the word for blank (2).', ['at', 'in', 'for', 'with'], x(
      'Expression fixe : « at least » (au moins).',
      'تعبير ثابت: «at least» (على الأقل).',
      '“At least”.',
      'Expresión fija: «at least» (al menos).',
    )),
    read('b1-tc-s3-r6', 'R6', 3, BANK_AD, 'Choose the word for blank (3).', ['excellent', 'excellence', 'excellently', 'excel'], x(
      'Devant le nom « training » → adjectif.',
      'قبل الاسم «training» ← صفة.',
      'Before a noun → adjective.',
      'Delante del sustantivo «training» → adjetivo.',
    )),
    read('b1-tc-s3-r7', 'R6', 3, LINA, 'Choose the word for blank (1).', ['because', 'although', 'so', 'unless'], x(
      'Cause : elle ne peut pas venir parce qu’elle voit un client.',
      'السبب: لا تستطيع الحضور لأنها ستزور عميلًا.',
      'A reason → “because”.',
      'Causa: no puede ir porque visita a un cliente.',
    )),
    read('b1-tc-s3-r8', 'R6', 3, LINA, 'Choose the word for blank (2).', ['send', 'sending', 'sent', 'sends'], x(
      'Après « Could you » : verbe de base.',
      'بعد «Could you»: الفعل الأساسي.',
      'After “Could you”: base verb.',
      'Después de «Could you»: verbo base.',
    )),
    read('b1-tc-s3-r9', 'R6', 3, LINA, 'Choose the word for blank (3).', ['when', 'what', 'who', 'which'], x(
      '« … will take place » demande un moment → « when ».',
      '«… will take place» تتطلب وقتًا ← «when».',
      'Asking about a time → “when”.',
      '«… will take place» pide un momento → «when».',
    )),
    g('b1-tc-s3-q1', 3, 'The meeting was cancelled ___ the director was ill.', ['because', 'because of', 'despite', 'so'], x(
      'Suivi d’un sujet + verbe (the director was ill) → « because ». « Because of » va avec un nom.',
      'يليه فاعل + فعل ← «because». أما «because of» فمع الاسم.',
      'Clause → “because”; noun → “because of”.',
      'Seguido de sujeto + verbo (the director was ill) → «because». «Because of» va con un sustantivo.',
    )),
  ],
);
