import type { Unit } from '../../../types';
import { g, lesson, listen, order, respond, unit, x } from '../build';

export const b1Relatives: Unit = unit(
  {
    id: 'b1-relatives',
    emoji: '🔗',
    level: 3,
    part: 'R5 · L3',
    title: x('Les pronoms relatifs', 'الأسماء الموصولة', 'Relative pronouns', 'Los pronombres relativos'),
    subtitle: x('who, which, that, where, whose', 'who وwhich وthat وwhere وwhose', 'who, which, that, where, whose', 'who, which, that, where, whose'),
    lesson: lesson(
      x('Relier deux idées avec le bon pronom relatif.', 'ربط فكرتين بالاسم الموصول المناسب.', 'Link two ideas with the right relative pronoun.', 'Unir dos ideas con el pronombre relativo correcto.'),
      [
        x('who = personne ; which = chose ; that = personne ou chose (relative sans virgules).', 'who = شخص، وwhich = شيء، وthat = شخص أو شيء (في جملة وصل دون فواصل).', 'who = person; which = thing; that = either (no commas).', 'who = persona; which = cosa; that = persona o cosa (relativa sin comas).'),
        x('where = lieu (the office where I work) ; whose = possession (the man whose car…).', 'where = مكان (the office where I work)، وwhose = ملكية (the man whose car…).', 'where = place; whose = possession.', 'where = lugar (the office where I work); whose = posesión (the man whose car…).'),
        x('Entre virgules (information en plus), on n’utilise jamais « that » : who ou which.', 'بين فاصلتين (معلومة إضافية) لا نستعمل «that» أبدًا، بل who أو which.', 'Between commas: never “that”.', 'Entre comas (información adicional) nunca se usa «that»: who o which.'),
      ],
      'The engineer who designed the system works in the office where we met.',
      x('« who » pour la personne ; « where » pour le lieu.', '«who» للشخص و«where» للمكان.', '“who” for the person; “where” for the place.', '«who» para la persona; «where» para el lugar.'),
    ),
  },
  [
    g('b1-rl-s1-q1', 3, 'The woman ___ called this morning is our new client.', ['who', 'which', 'where', 'whose'], x(
      'Une personne, sujet du verbe « called » → « who ».',
      'شخص، فاعل للفعل «called» ← «who».',
      'A person as subject → “who”.',
      'Una persona, sujeto del verbo «called» → «who».',
    )),
    g('b1-rl-s1-q2', 3, 'This is the report ___ I wrote last week.', ['that', 'who', 'where', 'whose'], x(
      'Une chose (the report) dans une relative sans virgules → « that ».',
      'شيء (the report) في جملة وصل دون فواصل ← «that».',
      'A thing, no commas → “that”.',
      'Una cosa (the report) en una relativa sin comas → «that».',
    )),
    g('b1-rl-s1-q3', 3, 'We need a technician ___ can repair the machine today.', ['who', 'where', 'whose', 'what'], x(
      'Une personne (a technician) sujet de « can repair » → « who ».',
      'شخص (a technician) فاعل لـ «can repair» ← «who».',
      'A person → “who”.',
      'Una persona (a technician) sujeto de «can repair» → «who».',
    )),
    g('b1-rl-s1-q4', 3, 'The hotel ___ we had the conference was very modern.', ['where', 'which', 'who', 'whose'], x(
      'Lieu suivi d’une proposition complète (we had the conference) → « where ».',
      'مكان تليه جملة تامة (we had the conference) ← «where».',
      'Place + full clause → “where”.',
      'Lugar seguido de una oración completa (we had the conference) → «where».',
    )),
    g('b1-rl-s1-q5', 3, 'Mr. Kaci, ___ office is next to mine, is very helpful.', ['whose', 'who', 'which', 'that'], x(
      'Possession (son bureau) → « whose office ».',
      'ملكية (مكتبه) ← «whose office».',
      'Possession → “whose”.',
      'Posesión (su despacho) → «whose office».',
    )),
    g('b1-rl-s1-q6', 3, 'The laptop ___ I bought last month is already broken.', ['that', 'who', 'where', 'whose'], x(
      'Une chose, complément de « bought » → « that » (ou which).',
      'شيء، مفعول به لـ «bought» ← «that» (أو which).',
      'A thing → “that”.',
      'Una cosa, complemento de «bought» → «that» (o which).',
    )),
    g('b1-rl-s1-q7', 3, 'Our new product, ___ was launched in May, is very popular.', ['which', 'that', 'who', 'what'], x(
      'Relative entre virgules pour une chose → « which » (jamais « that » entre virgules).',
      'جملة وصل بين فاصلتين لشيء ← «which» (لا «that» أبدًا بين الفواصل).',
      'Between commas → “which”, not “that”.',
      'Relativa entre comas para una cosa → «which» (nunca «that» entre comas).',
    )),
    order('b1-rl-s1-o1', 'The man who called you is waiting outside', x('« who called you » décrit « The man ».', '«who called you» تصف «The man».', '“who called you” describes “The man”.', '«who called you» describe a «The man».'), x(
      'Nom + relative (who…) + verbe principal (is waiting).',
      'اسم + جملة وصل (who…) + الفعل الرئيسي (is waiting).',
      'Noun + relative clause + main verb.',
      'Sustantivo + relativa (who…) + verbo principal (is waiting).',
    )),
    respond('b1-rl-s1-l1', 3, 'Who’s the woman talking to the director?', ['She’s our new accountant.', 'In the meeting room.', 'About the budget.'], x(
      '« Who » → on identifie la personne.',
      '«Who» ← نعرّف بالشخص.',
      'Identify the person.',
      '«Who» → se identifica a la persona.',
    )),
    listen('b1-rl-s1-l2', 'L3', 3, 'W: Do you know a restaurant where we can take the clients?\nM: Yes, there’s a nice one near the river that serves Tunisian food.', 'What does the woman want to find?', ['A restaurant for clients', 'A hotel near the river', 'A taxi', 'A meeting room'], x(
      '« A restaurant where we can take the clients ».',
      '«A restaurant where we can take the clients» أي مطعم للعملاء.',
      'A restaurant for the clients.',
      '«A restaurant where we can take the clients»: un restaurante para los clientes.',
    )),
  ],
  [
    g('b1-rl-s2-q1', 3, 'The city ___ I was born is on the coast.', ['where', 'which', 'who', 'whose'], x(
      'Lieu + proposition complète → « where ».',
      'مكان + جملة تامة ← «where».',
      'Place + clause → “where”.',
      'Lugar + oración completa → «where».',
    )),
    g('b1-rl-s2-q2', 3, 'Is this the bus ___ goes to the airport?', ['that', 'who', 'where', 'whose'], x(
      'Une chose (the bus) sujet de « goes » → « that ».',
      'شيء (the bus) فاعل لـ «goes» ← «that».',
      'A thing as subject → “that”.',
      'Una cosa (the bus) sujeto de «goes» → «that».',
    )),
    g('b1-rl-s2-q3', 3, 'The candidate ___ we interviewed was very experienced.', ['who', 'which', 'where', 'whose'], x(
      'Une personne → « who » (ou whom / that).',
      'شخص ← «who» (أو whom/that).',
      'A person → “who”.',
      'Una persona → «who» (o whom / that).',
    )),
    g('b1-rl-s2-q4', 3, 'The company, ___ headquarters are in Tunis, has 500 employees.', ['whose', 'which', 'who', 'where'], x(
      'Possession (le siège de l’entreprise) → « whose ».',
      'ملكية (مقر الشركة) ← «whose».',
      'Possession → “whose”.',
      'Posesión (la sede de la empresa) → «whose».',
    )),
    g('b1-rl-s2-q5', 3, 'The documents ___ you need are on my desk.', ['that', 'who', 'where', 'whose'], x(
      'Des choses → « that » (ou which).',
      'أشياء ← «that» (أو which).',
      'Things → “that”.',
      'Cosas → «that» (o which).',
    )),
    g('b1-rl-s2-q6', 3, 'Ms. Diallo, ___ works in marketing, will lead the project.', ['who', 'that', 'which', 'whose'], x(
      'Personne, entre virgules → « who » (pas « that »).',
      'شخص بين فاصلتين ← «who» (لا «that»).',
      'A person between commas → “who”.',
      'Persona, entre comas → «who» (no «that»).',
    )),
    g('b1-rl-s2-q7', 3, 'This is the room ___ we keep the office supplies.', ['where', 'which', 'who', 'whose'], x(
      'Lieu + proposition complète (we keep…) → « where ».',
      'مكان + جملة تامة (we keep…) ← «where».',
      'Place + clause → “where”.',
      'Lugar + oración completa (we keep…) → «where».',
    )),
    order('b1-rl-s2-o1', 'This is the office where I worked last year', x('« where » introduit le lieu.', '«where» تقدّم المكان.', '“where” introduces the place.', '«where» introduce el lugar.'), x(
      'Nom de lieu + where + sujet + verbe.',
      'اسم مكان + where + فاعل + فعل.',
      'Place + where + subject + verb.',
      'Lugar + where + sujeto + verbo.',
    )),
    respond('b1-rl-s2-l1', 3, 'Which one is your car?', ['The red one that’s parked by the door.', 'I drive every day.', 'Yes, it’s mine.'], x(
      '« Which one » → on désigne la voiture avec une relative.',
      '«Which one» ← نحدد السيارة بجملة وصل.',
      'Identify it with a relative clause.',
      '«Which one» → se señala el coche con una relativa.',
    )),
    listen('b1-rl-s2-l2', 'L4', 3, 'Welcome to the Science Museum. The exhibition that you are about to see shows the history of space travel. Photos are allowed, but please don’t touch the objects.', 'What does the exhibition show?', ['The history of space travel', 'Modern art', 'The history of the city', 'New technology'], x(
      '« The exhibition that you are about to see shows the history of space travel ».',
      'يقول المتحدث: «The exhibition that you are about to see shows the history of space travel».',
      'The history of space travel.',
      '«The exhibition that you are about to see shows the history of space travel».',
    )),
  ],
  [
    g('b1-rl-s3-q1', 3, 'People ___ arrive late will not be allowed to enter.', ['who', 'which', 'whose', 'where'], x(
      'Des personnes, sujet de « arrive » → « who ».',
      'أشخاص، فاعل لـ «arrive» ← «who».',
      'People → “who”.',
      'Personas, sujeto de «arrive» → «who».',
    )),
    g('b1-rl-s3-q2', 3, 'The email ___ you sent me had no attachment.', ['that', 'who', 'where', 'whose'], x(
      'Une chose → « that ».',
      'شيء ← «that».',
      'A thing → “that”.',
      'Una cosa → «that».',
    )),
    g('b1-rl-s3-q3', 3, 'We visited the factory ___ the new cars are made.', ['where', 'which', 'who', 'whose'], x(
      'Lieu + proposition complète → « where ».',
      'مكان + جملة تامة ← «where».',
      'Place → “where”.',
      'Lugar + oración completa → «where».',
    )),
    g('b1-rl-s3-q4', 3, 'The employee ___ car is parked at the entrance must move it.', ['whose', 'who', 'which', 'that'], x(
      'Possession (la voiture de l’employé) → « whose ».',
      'ملكية (سيارة الموظف) ← «whose».',
      'Possession → “whose”.',
      'Posesión (el coche del empleado) → «whose».',
    )),
    g('b1-rl-s3-q5', 3, 'Our office, ___ is near the station, is easy to reach.', ['which', 'that', 'where', 'who'], x(
      'Chose entre virgules, sujet de « is » → « which ».',
      'شيء بين فاصلتين، فاعل لـ «is» ← «which».',
      'A thing between commas → “which”.',
      'Cosa entre comas, sujeto de «is» → «which».',
    )),
    g('b1-rl-s3-q6', 3, 'Do you know anyone ___ speaks Japanese?', ['who', 'which', 'where', 'whose'], x(
      '« Anyone » = une personne → « who ».',
      '«Anyone» = شخص ← «who».',
      'A person → “who”.',
      '«Anyone» = una persona → «who».',
    )),
    g('b1-rl-s3-q7', 3, 'The book ___ you recommended was very useful.', ['that', 'who', 'where', 'whose'], x(
      'Une chose → « that » (ou which).',
      'شيء ← «that» (أو which).',
      'A thing → “that”.',
      'Una cosa → «that» (o which).',
    )),
    order('b1-rl-s3-o1', 'The client whose order was late called again', x('« whose order » = dont la commande.', '«whose order» = الذي طلبيته.', '“whose order”.', '«whose order» = cuyo pedido.'), x(
      'Nom + whose + nom + verbe, puis le verbe principal.',
      'اسم + whose + اسم + فعل ثم الفعل الرئيسي.',
      'Noun + whose + noun + verb, then main verb.',
      'Sustantivo + whose + sustantivo + verbo y luego el verbo principal.',
    )),
    respond('b1-rl-s3-l1', 3, 'Is that the restaurant you told me about?', ['Yes, the one with the great seafood.', 'I told you yesterday.', 'No, I’m not hungry.'], x(
      'On confirme et on précise.',
      'نؤكد ونوضح.',
      'Confirm and specify.',
      'Se confirma y se precisa.',
    )),
    listen('b1-rl-s3-l2', 'L3', 3, 'M: Who is the person that organized the conference?\nW: That’s Ms. Farid. She works in the events department.', 'Where does Ms. Farid work?', ['In the events department', 'In the sales department', 'In a hotel', 'In the IT department'], x(
      '« She works in the events department ».',
      '«She works in the events department» أي قسم الفعاليات.',
      'The events department.',
      '«She works in the events department»: en el departamento de eventos.',
    )),
  ],
);
