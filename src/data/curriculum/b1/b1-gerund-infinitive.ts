import type { Unit } from '../../../types';
import { g, lesson, listen, order, respond, unit, x } from '../build';

export const b1GerundInfinitive: Unit = unit(
  {
    id: 'b1-gerund-infinitive',
    emoji: '🔀',
    level: 3,
    part: 'R5',
    title: x('-ing ou to + verbe ?', '-ing أم to + فعل؟', '-ing or to + verb?', '¿-ing o to + verbo?'),
    subtitle: x('enjoy doing, decide to do, interested in doing', 'enjoy doing وdecide to do وinterested in doing', 'enjoy doing, decide to do, interested in doing', 'enjoy doing, decide to do, interested in doing'),
    lesson: lesson(
      x('Choisir la bonne forme du verbe après un autre verbe ou une préposition.', 'اختيار الشكل الصحيح للفعل بعد فعل آخر أو حرف جر.', 'Choose the right verb form after another verb or a preposition.', 'Elegir la forma correcta del verbo después de otro verbo o de una preposición.'),
      [
        x('Verbes suivis de -ing : enjoy, finish, avoid, suggest, consider, mind, keep (I enjoy working here.).', 'أفعال يليها -ing: enjoy وfinish وavoid وsuggest وconsider وmind وkeep (I enjoy working here.).', 'Verbs + -ing: enjoy, finish, avoid, suggest, consider, mind, keep.', 'Verbos seguidos de -ing: enjoy, finish, avoid, suggest, consider, mind, keep (I enjoy working here.).'),
        x('Verbes suivis de to + verbe : want, need, decide, plan, hope, agree, offer, expect (We decided to hire.).', 'أفعال يليها to + فعل: want وneed وdecide وplan وhope وagree وoffer وexpect (We decided to hire.).', 'Verbs + to: want, need, decide, plan, hope, agree, offer, expect.', 'Verbos seguidos de to + verbo: want, need, decide, plan, hope, agree, offer, expect (We decided to hire.).'),
        x('Après une préposition → -ing : interested in learning, good at organizing, before leaving, look forward to meeting.', 'بعد حرف جر ← -ing: interested in learning وgood at organizing وbefore leaving وlook forward to meeting.', 'After a preposition → -ing.', 'Después de una preposición → -ing: interested in learning, good at organizing, before leaving, look forward to meeting.'),
      ],
      'We decided to postpone the launch, and we are considering moving it to May.',
      x('« decide » + to ; « consider » + -ing.', '«decide» + to و«consider» + -ing.', '“decide” + to; “consider” + -ing.', '«decide» + to; «consider» + -ing.'),
    ),
  },
  [
    g('b1-gi-s1-q1', 3, 'I enjoy ___ with international clients.', ['working', 'to work', 'work', 'worked'], x(
      '« Enjoy » est suivi de -ing.',
      '«Enjoy» يليه -ing.',
      '“Enjoy” + -ing.',
      '«Enjoy» va seguido de -ing.',
    )),
    g('b1-gi-s1-q2', 3, 'We decided ___ a new supplier.', ['to choose', 'choosing', 'choose', 'chose'], x(
      '« Decide » est suivi de « to » + verbe.',
      '«Decide» يليه «to» + فعل.',
      '“Decide” + to.',
      '«Decide» va seguido de «to» + verbo.',
    )),
    g('b1-gi-s1-q3', 3, 'Please avoid ___ the elevator during the fire drill.', ['using', 'to use', 'use', 'used'], x(
      '« Avoid » est suivi de -ing.',
      '«Avoid» يليه -ing.',
      '“Avoid” + -ing.',
      '«Avoid» va seguido de -ing.',
    )),
    g('b1-gi-s1-q4', 3, 'She is interested ___ learning Spanish.', ['in', 'on', 'at', 'for'], x(
      'Expression fixe : « interested in » + -ing.',
      'تعبير ثابت: «interested in» + -ing.',
      '“Interested in” + -ing.',
      'Expresión fija: «interested in» + -ing.',
    )),
    g('b1-gi-s1-q5', 3, 'They hope ___ the project by June.', ['to finish', 'finishing', 'finish', 'finished'], x(
      '« Hope » est suivi de « to » + verbe.',
      '«Hope» يليه «to» + فعل.',
      '“Hope” + to.',
      '«Hope» va seguido de «to» + verbo.',
    )),
    g('b1-gi-s1-q6', 3, 'Thank you for ___ me.', ['helping', 'help', 'to help', 'helped'], x(
      'Après la préposition « for » → -ing.',
      'بعد حرف الجر «for» ← -ing.',
      'After “for” → -ing.',
      'Después de la preposición «for» → -ing.',
    )),
    g('b1-gi-s1-q7', 3, 'Would you mind ___ the window?', ['closing', 'to close', 'close', 'closed'], x(
      '« Would you mind » + -ing = cela vous dérangerait-il de… ?',
      '«Would you mind» + -ing = هل تمانع أن…؟',
      '“Would you mind” + -ing.',
      '«Would you mind» + -ing = ¿le importaría…?',
    )),
    order('b1-gi-s1-o1', 'We plan to open a new branch next year', x('« plan » est suivi de « to ».', '«plan» يليها «to».', '“plan” + to.', '«plan» va seguido de «to».'), x(
      'Sujet + plan + to + verbe + complément + moment.',
      'فاعل + plan + to + فعل + متمم + وقت.',
      'Subject + plan + to + verb.',
      'Sujeto + plan + to + verbo + complemento + momento.',
    )),
    respond('b1-gi-s1-l1', 3, 'Would you like to join us for lunch?', ['I’d love to, thanks.', 'I like lunch.', 'Yes, I joined.'], x(
      'Invitation → « I’d love to » (= I would love to join you).',
      'دعوة ← «I’d love to» (= I would love to join you).',
      'An invitation → “I’d love to”.',
      'Invitación → «I’d love to» (= me encantaría).',
    )),
    listen('b1-gi-s1-l2', 'L3', 3, 'W: Have you finished writing the report?\nM: Almost. I need to check the figures before sending it.', 'What does the man need to do?', ['Check the figures', 'Write the introduction', 'Call the client', 'Print the report'], x(
      '« I need to check the figures before sending it ».',
      '«I need to check the figures before sending it» أي مراجعة الأرقام.',
      'Check the figures.',
      '«I need to check the figures before sending it»: revisar las cifras.',
    )),
  ],
  [
    g('b1-gi-s2-q1', 3, 'The manager suggested ___ the meeting to Friday.', ['moving', 'to move', 'move', 'moved'], x(
      '« Suggest » est suivi de -ing.',
      '«Suggest» يليه -ing.',
      '“Suggest” + -ing.',
      '«Suggest» va seguido de -ing.',
    )),
    g('b1-gi-s2-q2', 3, 'I need ___ my password.', ['to change', 'changing', 'change', 'changed'], x(
      '« Need » + to + verbe (avec un sujet qui agit).',
      '«Need» + to + فعل (مع فاعل يقوم بالفعل).',
      '“Need” + to.',
      '«Need» + to + verbo (con un sujeto que actúa).',
    )),
    g('b1-gi-s2-q3', 3, 'He finished ___ the boxes at six.', ['packing', 'to pack', 'pack', 'packed'], x(
      '« Finish » est suivi de -ing.',
      '«Finish» يليه -ing.',
      '“Finish” + -ing.',
      '«Finish» va seguido de -ing.',
    )),
    g('b1-gi-s2-q4', 3, 'We are looking forward to ___ you in Tunis.', ['seeing', 'see', 'to see', 'saw'], x(
      'Dans « look forward to », « to » est une préposition → -ing.',
      'في «look forward to» تكون «to» حرف جر ← -ing.',
      '“Look forward to” + -ing.',
      'En «look forward to», «to» es una preposición → -ing.',
    )),
    g('b1-gi-s2-q5', 3, 'The company agreed ___ the price.', ['to lower', 'lowering', 'lower', 'lowered'], x(
      '« Agree » est suivi de « to » + verbe.',
      '«Agree» يليه «to» + فعل.',
      '“Agree” + to.',
      '«Agree» va seguido de «to» + verbo.',
    )),
    g('b1-gi-s2-q6', 3, 'Before ___ the office, please turn off your computer.', ['leaving', 'to leave', 'leave', 'left'], x(
      'Après la préposition « before » → -ing.',
      'بعد حرف الجر «before» ← -ing.',
      'After “before” → -ing.',
      'Después de la preposición «before» → -ing.',
    )),
    g('b1-gi-s2-q7', 3, 'Ms. Ali offered ___ me to the station.', ['to drive', 'driving', 'drive', 'drove'], x(
      '« Offer » est suivi de « to » + verbe.',
      '«Offer» يليه «to» + فعل.',
      '“Offer” + to.',
      '«Offer» va seguido de «to» + verbo.',
    )),
    order('b1-gi-s2-o1', 'Thank you for coming to the meeting', x('« for » est suivi de -ing.', '«for» يليها -ing.', '“for” + -ing.', '«for» va seguido de -ing.'), x(
      'Thank you for + -ing + complément.',
      'Thank you for + -ing + متمم.',
      'Thank you for + -ing.',
      'Thank you for + -ing + complemento.',
    )),
    respond('b1-gi-s2-l1', 3, 'Do you mind waiting a few minutes?', ['Not at all.', 'Yes, I wait.', 'It’s a minute.'], x(
      '« Not at all » = pas du tout (ça ne me dérange pas). Attention : « Yes » voudrait dire que ça dérange.',
      '«Not at all» = لا أمانع إطلاقًا. انتبه: «Yes» تعني أنك تمانع.',
      '“Not at all” = no problem.',
      '«Not at all» = en absoluto (no me importa). Ojo: «Yes» significaría que sí molesta.',
    )),
    listen('b1-gi-s2-l2', 'L4', 3, 'Hello, this is Omar from Bright Travel. I’m calling to remind you to send a copy of your passport before Friday. Without it, we can’t book your flight.', 'What does Omar remind the listener to do?', ['Send a copy of a passport', 'Pay for the flight', 'Book a hotel', 'Call the airline'], x(
      '« Remind you to send a copy of your passport ».',
      '«Remind you to send a copy of your passport» أي إرسال نسخة من الجواز.',
      'Send a passport copy.',
      '«Remind you to send a copy of your passport»: enviar una copia del pasaporte.',
    )),
  ],
  [
    g('b1-gi-s3-q1', 3, 'Have you considered ___ a bigger office?', ['renting', 'to rent', 'rent', 'rented'], x(
      '« Consider » est suivi de -ing.',
      '«Consider» يليه -ing.',
      '“Consider” + -ing.',
      '«Consider» va seguido de -ing.',
    )),
    g('b1-gi-s3-q2', 3, 'I want ___ more about the training program.', ['to know', 'knowing', 'know', 'knew'], x(
      '« Want » est suivi de « to » + verbe.',
      '«Want» يليه «to» + فعل.',
      '“Want” + to.',
      '«Want» va seguido de «to» + verbo.',
    )),
    g('b1-gi-s3-q3', 3, 'She is good ___ organizing events.', ['at', 'in', 'on', 'for'], x(
      'Expression fixe : « good at » + -ing.',
      'تعبير ثابت: «good at» + -ing.',
      '“Good at” + -ing.',
      'Expresión fija: «good at» + -ing.',
    )),
    g('b1-gi-s3-q4', 3, 'Keep ___ until you find the answer.', ['trying', 'to try', 'try', 'tried'], x(
      '« Keep » (continuer à) est suivi de -ing.',
      '«Keep» (يواصل) يليه -ing.',
      '“Keep” + -ing.',
      '«Keep» (seguir) va seguido de -ing.',
    )),
    g('b1-gi-s3-q5', 3, 'We expect ___ the results next week.', ['to receive', 'receiving', 'receive', 'received'], x(
      '« Expect » est suivi de « to » + verbe.',
      '«Expect» يليه «to» + فعل.',
      '“Expect” + to.',
      '«Expect» va seguido de «to» + verbo.',
    )),
    g('b1-gi-s3-q6', 3, 'He left without ___ goodbye.', ['saying', 'to say', 'say', 'said'], x(
      'Après la préposition « without » → -ing.',
      'بعد حرف الجر «without» ← -ing.',
      'After “without” → -ing.',
      'Después de la preposición «without» → -ing.',
    )),
    g('b1-gi-s3-q7', 3, 'It’s important ___ the instructions carefully.', ['to read', 'reading', 'read', 'reads'], x(
      '« It’s + adjectif + to + verbe ».',
      '«It’s + صفة + to + فعل».',
      '“It’s important to …”.',
      '«It’s + adjetivo + to + verbo».',
    )),
    order('b1-gi-s3-o1', 'I am interested in working for your company', x('« in » est suivi de -ing.', '«in» يليها -ing.', '“in” + -ing.', '«in» va seguido de -ing.'), x(
      'Après « interested in », le verbe prend -ing.',
      'بعد «interested in» نستعمل -ing.',
      'After “interested in”, use the -ing form.',
      'Tras «interested in», el verbo va en -ing.',
    )),
    respond('b1-gi-s3-l1', 3, 'Why did you decide to change jobs?', ['I wanted to learn new skills.', 'Next month.', 'In the sales department.'], x(
      '« Why » → une raison.',
      '«Why» ← سبب.',
      '“Why” → a reason.',
      '«Why» → una razón.',
    )),
    listen('b1-gi-s3-l2', 'L3', 3, 'M: I forgot to bring my laptop.\nW: Don’t worry. You can use mine for the presentation.', 'What does the woman offer?', ['To lend him her laptop', 'To give the presentation', 'To drive him home', 'To buy a laptop'], x(
      '« You can use mine » = elle lui prête son ordinateur.',
      '«You can use mine» = تعيره حاسوبها.',
      'She lends her laptop.',
      '«You can use mine» = le presta su portátil.',
    )),
  ],
);
