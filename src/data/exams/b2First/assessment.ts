import type { Localized, McqItem } from '../../../types';
import { withShuffledOptions } from '../../shuffle';

const L = (fr: string, ar: string, en: string, es: string): Localized => ({ fr, ar, en, es });

/** Three-option listening items: a blind guess succeeds one time in three. */
const C3 = { c: 1 / 3 };

/**
 * Toki Quest B2 placement bank: 10 items per level (1 = A1 ... 6 = C1+), per level 3 grammar,
 * 2 vocab, 2 reading and 3 listening items. Authors write the key first (answer: 0);
 * withShuffledOptions moves it to a stable, item-specific position.
 */
const rawBank: McqItem[] = [
  // ---------- Level 1 (A1) ----------
  {
    id: 'fce-a1-1', skill: 'grammar', part: 'RU1', level: 1,
    prompt: 'My brother and I ___ from Tunisia.',
    options: ['are', 'is', 'am', 'be'], answer: 0,
    explain: L(
      '« My brother and I » = « we » (pluriel) : on utilise « are ».',
      '«My brother and I» تعني «we» (جمع)، لذلك نستعمل «are».',
      '“My brother and I” means “we”, so the verb is “are”.',
      '«My brother and I» equivale a «we» (plural): se usa «are».',
    ),
  },
  {
    id: 'fce-a1-2', skill: 'grammar', part: 'RU1', level: 1,
    prompt: 'There ___ two cats in the garden.',
    options: ['are', 'is', 'has', 'have'], answer: 0,
    explain: L(
      '« There are » + pluriel (« two cats ») pour dire qu’une chose existe.',
      'نستعمل «There are» مع الجمع («two cats») للتعبير عن وجود الشيء.',
      '“There are” is used with a plural noun (“two cats”).',
      '«There are» se usa con un sustantivo plural («two cats»).',
    ),
  },
  {
    id: 'fce-a1-3', skill: 'grammar', part: 'RU1', level: 1,
    prompt: 'Where ___ you live?',
    options: ['do', 'does', 'are', 'is'], answer: 0,
    explain: L(
      'Question au présent simple avec « you » : auxiliaire « do » + verbe « live ».',
      'سؤال في المضارع البسيط مع «you»: الفعل المساعد «do» ثم الفعل «live».',
      'A present simple question with “you” uses “do” + the base verb “live”.',
      'Pregunta en presente simple con «you»: auxiliar «do» + verbo «live».',
    ),
  },
  {
    id: 'fce-a1-4', skill: 'vocab', part: 'RU1', level: 1,
    prompt: 'It’s very hot today. Let’s go to the ___ and swim in the sea.',
    options: ['beach', 'library', 'kitchen', 'bank'], answer: 0,
    explain: L(
      'On nage dans la mer à la plage : « beach ».',
      'نسبح في البحر على الشاطئ: «beach».',
      'You swim in the sea at the beach.',
      'Se nada en el mar en la playa: «beach».',
    ),
  },
  {
    id: 'fce-a1-5', skill: 'vocab', part: 'RU1', level: 1,
    prompt: 'My mother’s sister is my ___.',
    options: ['aunt', 'cousin', 'niece', 'grandmother'], answer: 0,
    explain: L(
      'La sœur de la mère est la tante : « aunt ».',
      'أخت الأم هي الخالة: «aunt».',
      'Your mother’s sister is your aunt.',
      'La hermana de la madre es la tía: «aunt».',
    ),
  },
  {
    id: 'fce-a1-6', skill: 'reading', part: 'RU5', level: 1,
    passage: 'Hi Sami, I’m at the sports centre with Leila. We’re playing tennis and it’s really fun! Come and play with us. The sports centre is next to the train station. Bring your racket and some water. See you soon, Karim',
    prompt: 'What are Karim and Leila doing?',
    options: ['Playing tennis', 'Swimming', 'Waiting at the station', 'Buying water'], answer: 0,
    explain: L(
      'Karim écrit : « We’re playing tennis ». La gare indique seulement où se trouve le centre.',
      'يكتب كريم: «We’re playing tennis». أما المحطة فتدل فقط على مكان المركز.',
      'Karim writes: “We’re playing tennis”. The station only says where the centre is.',
      'Karim escribe: «We’re playing tennis». La estación solo indica dónde está el centro.',
    ),
  },
  {
    id: 'fce-a1-7', skill: 'reading', part: 'RU5', level: 1,
    passage: 'CITY MUSEUM. Open Tuesday to Sunday, 10 a.m. to 6 p.m. Closed on Mondays. Tickets: adults €8, students €5, children under 12 free. The café is on the first floor. You can take photos, but please do not touch the paintings.',
    prompt: 'When can you NOT visit the museum?',
    options: ['On Monday', 'On Sunday morning', 'On Tuesday at 5 p.m.', 'On Saturday afternoon'], answer: 0,
    explain: L(
      'Le panneau dit « Closed on Mondays » : le musée est fermé le lundi.',
      'تقول اللافتة «Closed on Mondays»: المتحف مغلق يوم الاثنين.',
      'The notice says “Closed on Mondays”.',
      'El cartel dice «Closed on Mondays»: el museo cierra los lunes.',
    ),
  },
  {
    id: 'fce-a1-8', skill: 'listening', part: 'LI1', level: 1, irt: C3,
    audio: 'W: Hello. Can I have a coffee, please?\nM: Small or large?\nW: Large, please. And a glass of water.\nM: OK. That’s three euros fifty.\nW: Here you are.\nM: Thank you. Have a nice day!',
    prompt: 'How much does the woman pay?',
    options: ['€3.50', '€3.15', '€5.30'], answer: 0,
    explain: L(
      'L’homme dit « three euros fifty » : 3,50 €.',
      'يقول الرجل «three euros fifty» أي 3.50 يورو.',
      'The man says “three euros fifty”.',
      'El hombre dice «three euros fifty»: 3,50 €.',
    ),
  },
  {
    id: 'fce-a1-9', skill: 'listening', part: 'LI1', level: 1, irt: C3,
    audio: 'Hi, I’m Yasmine. I’m sixteen and I live in Rabat with my parents and my little brother. I love music. I play the guitar every evening after school, and on Saturdays I sing in a band with my friends.',
    prompt: 'What does Yasmine do every evening?',
    options: ['She plays the guitar.', 'She sings in a band.', 'She looks after her brother.'], answer: 0,
    explain: L(
      'Elle dit « I play the guitar every evening ». Elle chante dans un groupe le samedi seulement.',
      'تقول «I play the guitar every evening». أما الغناء مع الفرقة فيوم السبت فقط.',
      'She says “I play the guitar every evening”; she sings in the band on Saturdays.',
      'Dice «I play the guitar every evening»; canta en el grupo solo los sábados.',
    ),
  },
  {
    id: 'fce-a1-10', skill: 'listening', part: 'LI1', level: 1, irt: C3,
    audio: 'M: Excuse me, where is the post office?\nW: Go straight on and turn left at the bank. The post office is opposite the park.\nM: Opposite the park?\nW: Yes. It’s about five minutes on foot.\nM: Thanks a lot.',
    prompt: 'Where is the post office?',
    options: ['Opposite the park', 'Next to the bank', 'Inside the park'], answer: 0,
    explain: L(
      'La femme dit « opposite the park » (en face du parc). La banque est l’endroit où l’on tourne.',
      'تقول المرأة «opposite the park» أي مقابل الحديقة. أما البنك فهو مكان الانعطاف.',
      'The woman says “opposite the park”; the bank is where you turn left.',
      'La mujer dice «opposite the park» (enfrente del parque); el banco es donde se gira.',
    ),
  },

  // ---------- Level 2 (A2) ----------
  {
    id: 'fce-a2-1', skill: 'grammar', part: 'RU1', level: 2,
    prompt: 'We ___ to Spain last summer.',
    options: ['went', 'go', 'have gone', 'are going'], answer: 0,
    explain: L(
      '« Last summer » est un moment passé terminé : prétérit « went ».',
      '«Last summer» زمن ماضٍ منتهٍ، فنستعمل الماضي البسيط «went».',
      '“Last summer” is a finished past time, so we use the past simple “went”.',
      '«Last summer» es un tiempo pasado terminado: pasado simple «went».',
    ),
  },
  {
    id: 'fce-a2-2', skill: 'grammar', part: 'RU1', level: 2,
    prompt: 'This phone is ___ than my old one.',
    options: ['cheaper', 'more cheap', 'cheapest', 'the cheaper'], answer: 0,
    explain: L(
      '« than » demande un comparatif ; adjectif court : « cheap » → « cheaper ».',
      'كلمة «than» تتطلب صيغة المقارنة؛ والصفة قصيرة: «cheap» ← «cheaper».',
      '“Than” needs a comparative; short adjective: “cheap” → “cheaper”.',
      '«Than» exige un comparativo; adjetivo corto: «cheap» → «cheaper».',
    ),
  },
  {
    id: 'fce-a2-3', skill: 'grammar', part: 'RU1', level: 2,
    prompt: 'Look at those dark clouds! It ___ rain.',
    options: ['is going to', 'goes to', 'is raining to', 'will to'], answer: 0,
    explain: L(
      'Prédiction fondée sur un indice visible (les nuages) : « be going to » + verbe.',
      'تنبؤ مبني على دليل مرئي (الغيوم): «be going to» + الفعل.',
      'A prediction based on present evidence (the clouds): “be going to” + verb.',
      'Predicción basada en una evidencia visible (las nubes): «be going to» + verbo.',
    ),
  },
  {
    id: 'fce-a2-4', skill: 'vocab', part: 'RU1', level: 2,
    prompt: 'I can’t come to the party because I have to ___ for my exam tomorrow.',
    options: ['study', 'learn', 'teach', 'know'], answer: 0,
    explain: L(
      'On dit « study for an exam » (réviser pour un examen) ; « learn » ne se construit pas avec « for an exam ».',
      'نقول «study for an exam» أي نذاكر للامتحان؛ ولا يُستعمل «learn» مع «for an exam».',
      'The collocation is “study for an exam”.',
      'Se dice «study for an exam» (estudiar para un examen); «learn» no va con «for an exam».',
    ),
  },
  {
    id: 'fce-a2-5', skill: 'vocab', part: 'RU1', level: 2,
    prompt: 'Our flight was ___ because of the snow, so we left four hours late.',
    options: ['delayed', 'missed', 'booked', 'crowded'], answer: 0,
    explain: L(
      'Partir quatre heures en retard : le vol était « delayed » (retardé).',
      'المغادرة متأخرة أربع ساعات تعني أن الرحلة كانت «delayed» أي متأخرة.',
      'Leaving four hours late means the flight was delayed.',
      'Salir cuatro horas tarde significa que el vuelo fue «delayed» (retrasado).',
    ),
  },
  {
    id: 'fce-a2-6', skill: 'reading', part: 'RU5', level: 2,
    passage: 'Hi Tom, Thanks for inviting me to your birthday party on Saturday! I’d love to come, but I’m working at the bakery until 4 p.m. Can I come after that? I’ll take the bus, so I’ll probably arrive about half an hour late. Is it OK if I bring my cousin Mehdi? He’s staying with us this week. Love, Nadia',
    prompt: 'Why will Nadia be late for the party?',
    options: ['She has to work first.', 'She has to collect her cousin.', 'She missed the bus.', 'She has an exam.'], answer: 0,
    explain: L(
      'Nadia écrit « I’m working at the bakery until 4 p.m. » : elle travaille d’abord.',
      'تكتب نادية «I’m working at the bakery until 4 p.m.»: عليها أن تعمل أولاً.',
      'Nadia writes: “I’m working at the bakery until 4 p.m.”',
      'Nadia escribe «I’m working at the bakery until 4 p.m.»: primero trabaja.',
    ),
  },
  {
    id: 'fce-a2-7', skill: 'reading', part: 'RU5', level: 2,
    passage: 'GREEN BIKES – Rent a bike and discover the city! Price: €4 for one hour or €15 for the whole day. You must show an ID card. Helmets are free. Please return your bike before 8 p.m. If you bring it back after 8 p.m., you pay an extra €10.',
    prompt: 'What happens if you return the bike at 9 p.m.?',
    options: ['You pay an extra €10.', 'You lose your ID card.', 'You pay for your helmet.', 'You get €4 back.'], answer: 0,
    explain: L(
      'Le texte dit : « If you bring it back after 8 p.m., you pay an extra €10 ».',
      'يقول النص: «If you bring it back after 8 p.m., you pay an extra €10».',
      'The notice says you pay an extra €10 after 8 p.m.',
      'El texto dice: «If you bring it back after 8 p.m., you pay an extra €10».',
    ),
  },
  {
    id: 'fce-a2-8', skill: 'listening', part: 'LI1', level: 2, irt: C3,
    audio: 'M: Hi, I’d like to book a table for Friday evening.\nW: For how many people?\nM: Four, please. At eight o’clock, if possible.\nW: Sorry, we’re full at eight. We have a table at half past eight or at nine.\nM: Half past eight is fine.',
    prompt: 'What time is the table for?',
    options: ['8.30', '8.00', '9.00'], answer: 0,
    explain: L(
      'Le restaurant est complet à 8 h ; l’homme accepte « half past eight » (8 h 30).',
      'المطعم ممتلئ عند الثامنة؛ ويقبل الرجل «half past eight» أي الثامنة والنصف.',
      'Eight is full; the man accepts “half past eight”.',
      'A las ocho está lleno; el hombre acepta «half past eight» (8.30).',
    ),
  },
  {
    id: 'fce-a2-9', skill: 'listening', part: 'LI1', level: 2, irt: C3,
    audio: 'Good afternoon, everyone, and welcome to the castle. The tour takes about one hour. Please stay with the group, and don’t take photos inside the towers. At the end of the tour, you can visit the gift shop or have a drink in the garden café.',
    prompt: 'What are visitors asked not to do?',
    options: ['Take photos inside the towers', 'Have a drink in the garden', 'Buy things in the shop'], answer: 0,
    explain: L(
      'Le guide dit « don’t take photos inside the towers ». Le café et la boutique sont proposés.',
      'يقول المرشد «don’t take photos inside the towers». أما المقهى والمتجر فهما متاحان.',
      'The guide says “don’t take photos inside the towers”.',
      'El guía dice «don’t take photos inside the towers»; la cafetería y la tienda se ofrecen.',
    ),
  },
  {
    id: 'fce-a2-10', skill: 'listening', part: 'LI1', level: 2, irt: C3,
    audio: 'W: How was your weekend, Omar?\nM: Not great. I wanted to go hiking in the mountains with my friends, but it rained all day on Saturday. So we stayed at home and watched films. Then on Sunday I had to help my dad in the garden.',
    prompt: 'Why didn’t Omar go hiking?',
    options: ['Because of the weather', 'Because he had to help his father', 'Because his friends were busy'], answer: 0,
    explain: L(
      'Omar dit « it rained all day on Saturday ». Il aide son père seulement dimanche.',
      'يقول عمر «it rained all day on Saturday». ومساعدة والده كانت يوم الأحد فقط.',
      'Omar says “it rained all day on Saturday”; he helped his dad on Sunday.',
      'Omar dice «it rained all day on Saturday»; ayudó a su padre el domingo.',
    ),
  },

  // ---------- Level 3 (B1) ----------
  {
    id: 'fce-a3-1', skill: 'grammar', part: 'RU1', level: 3,
    prompt: 'If it ___ tomorrow, we’ll have the picnic indoors.',
    options: ['rains', 'will rain', 'rained', 'would rain'], answer: 0,
    explain: L(
      'Premier conditionnel : « if » + présent simple, puis « will ». Pas de « will » après « if ».',
      'الشرط الأول: «if» + المضارع البسيط ثم «will»، ولا نستعمل «will» بعد «if».',
      'First conditional: “if” + present simple, then “will”.',
      'Primer condicional: «if» + presente simple, luego «will».',
    ),
  },
  {
    id: 'fce-a3-2', skill: 'grammar', part: 'RU1', level: 3,
    prompt: 'I ___ in this town since I was ten.',
    options: ['have lived', 'live', 'am living', 'lived'], answer: 0,
    explain: L(
      '« since » + point de départ, situation qui dure jusqu’à maintenant : present perfect.',
      '«since» مع نقطة البداية لحالة مستمرة حتى الآن: نستعمل المضارع التام.',
      '“Since” + a starting point for a situation that continues now: present perfect.',
      '«Since» + punto de partida de algo que continúa: present perfect.',
    ),
  },
  {
    id: 'fce-a3-3', skill: 'grammar', part: 'RU1', level: 3,
    prompt: 'The film ___ we watched last night was really boring.',
    options: ['that', 'who', 'what', 'where'], answer: 0,
    explain: L(
      'Relatif pour une chose (« the film ») : « that » (ou « which »). « who » = personnes.',
      'ضمير الوصل للأشياء («the film») هو «that» أو «which»، أما «who» فللأشخاص.',
      'A relative pronoun for a thing (“the film”) is “that” or “which”.',
      'Relativo para una cosa («the film»): «that» (o «which»); «who» es para personas.',
    ),
  },
  {
    id: 'fce-a3-4', skill: 'vocab', part: 'RU1', level: 3,
    prompt: 'Could you ___ my cat while I’m on holiday?',
    options: ['look after', 'look for', 'look up', 'look into'], answer: 0,
    explain: L(
      '« look after » = s’occuper de. « look for » = chercher.',
      '«look after» تعني يعتني بـ، أما «look for» فتعني يبحث عن.',
      '“Look after” means take care of.',
      '«Look after» significa cuidar; «look for» es buscar.',
    ),
  },
  {
    id: 'fce-a3-5', skill: 'vocab', part: 'RU1', level: 3,
    prompt: 'I’m really ___ in history, so I want to study it at university.',
    options: ['interested', 'interesting', 'keen', 'fond'], answer: 0,
    explain: L(
      'On dit « interested in » pour une personne. « keen » va avec « on », « fond » avec « of ».',
      'نقول «interested in» للشخص؛ أما «keen» فتأتي مع «on» و«fond» مع «of».',
      '“Interested in”; “keen” takes “on” and “fond” takes “of”.',
      'Se dice «interested in»; «keen» va con «on» y «fond» con «of».',
    ),
  },
  {
    id: 'fce-a3-6', skill: 'reading', part: 'RU5', level: 3,
    passage: 'Last summer, Inès spent six weeks volunteering at a turtle rescue centre in Greece. She had expected to spend her days on the beach, but most of her work was actually cleaning tanks and preparing food for injured turtles. “It was hard and sometimes boring,” she admits, “but when we released a turtle back into the sea, I understood why it was worth it.” She now plans to study marine biology.',
    prompt: 'How did Inès feel about the work?',
    options: [
      'It was often dull, but in the end it felt worthwhile.',
      'It was just as relaxing as she had expected.',
      'It was so boring that she left early.',
      'It made her decide not to study biology.',
    ],
    answer: 0,
    explain: L(
      'Elle dit « hard and sometimes boring » mais ajoute « I understood why it was worth it ».',
      'تقول إنه كان «hard and sometimes boring» لكنها تضيف «I understood why it was worth it».',
      'She says it was “sometimes boring” but “worth it”.',
      'Dice «hard and sometimes boring» pero añade «I understood why it was worth it».',
    ),
  },
  {
    id: 'fce-a3-7', skill: 'reading', part: 'RU5', level: 3,
    passage: 'This year, the university library will be open 24 hours a day during the exam period, from 15 May to 30 June. For the rest of the year, opening hours stay the same: 8 a.m. to 10 p.m. Students who use the library after 10 p.m. must show their student card at the entrance. Group study rooms can be booked online up to three days in advance.',
    prompt: 'What is true about the library?',
    options: [
      'It will only stay open all night during the exam period.',
      'Students need their card to enter at any time of day.',
      'Group rooms can be booked a week in advance.',
      'Its normal opening hours will change next year.',
    ],
    answer: 0,
    explain: L(
      'L’ouverture 24 h/24 vaut seulement « during the exam period » ; la carte n’est demandée qu’après 22 h.',
      'الفتح طوال اليوم يكون فقط «during the exam period»، والبطاقة مطلوبة بعد العاشرة ليلاً فقط.',
      'It opens 24 hours only “during the exam period”; the card is needed only after 10 p.m.',
      'Abre 24 horas solo «during the exam period»; el carné solo se pide después de las 22 h.',
    ),
  },
  {
    id: 'fce-a3-8', skill: 'listening', part: 'LI1', level: 3, irt: C3,
    audio: 'W: Did you get the job at the sports shop?\nM: Well, they offered it to me, but I said no.\nW: Why? You were so excited about it.\nM: The pay was fine, but they wanted me to work every Saturday and Sunday, and I play football at weekends. I’ll look for something in the evenings instead.',
    prompt: 'Why did the man turn down the job?',
    options: ['The hours clashed with his football.', 'The pay was too low.', 'He preferred to work at weekends.'], answer: 0,
    explain: L(
      'Il devait travailler le week-end « and I play football at weekends ». Le salaire était correct (« fine »).',
      'كان عليه العمل في عطلة نهاية الأسبوع «and I play football at weekends»، والأجر كان مقبولاً («fine»).',
      'The job was at weekends “and I play football at weekends”; the pay was fine.',
      'Tenía que trabajar los fines de semana «and I play football at weekends»; el sueldo estaba bien.',
    ),
  },
  {
    id: 'fce-a3-9', skill: 'listening', part: 'LI1', level: 3, irt: C3,
    audio: 'And now the travel news. Because of repair work on the line, there will be no trains between Lyon and Grenoble this weekend. Buses will replace the trains, but journeys will take about forty minutes longer. Passengers with bicycles are advised to travel on Friday, as bikes are not allowed on the replacement buses.',
    prompt: 'Why should people with bikes travel on Friday?',
    options: ['Bikes can’t go on the buses.', 'Trains are cheaper on Fridays.', 'The buses will be full at the weekend.'], answer: 0,
    explain: L(
      'L’annonce dit « bikes are not allowed on the replacement buses ».',
      'يقول الإعلان «bikes are not allowed on the replacement buses».',
      'The announcement says bikes are not allowed on the replacement buses.',
      'El anuncio dice «bikes are not allowed on the replacement buses».',
    ),
  },
  {
    id: 'fce-a3-10', skill: 'listening', part: 'LI1', level: 3, irt: C3,
    audio: 'M: Have you decided which flat to take?\nW: I’m still thinking. The one near the university is tiny, but I could walk to class. The other one is bigger and cheaper, but it’s forty minutes away by bus.\nM: So what matters more to you?\nW: Honestly, I hate wasting time travelling. I think I’ll take the small one.',
    prompt: 'Which flat will the woman probably choose, and why?',
    options: [
      'The small one, because it’s near the university',
      'The big one, because it’s cheaper',
      'The small one, because it’s cheaper',
    ],
    answer: 0,
    explain: L(
      'Elle déteste « wasting time travelling » et choisit « the small one », proche de l’université. C’est l’autre qui est moins cher.',
      'تكره «wasting time travelling» وتختار «the small one» القريبة من الجامعة؛ والشقة الأخرى هي الأرخص.',
      'She hates “wasting time travelling”, so she takes the small flat near the university.',
      'Odia «wasting time travelling» y elige «the small one», cerca de la universidad; la otra es la más barata.',
    ),
  },

  // ---------- Level 4 (B2) ----------
  {
    id: 'fce-a4-1', skill: 'grammar', part: 'RU1', level: 4,
    prompt: 'By the time we reached the stadium, the match ___.',
    options: ['had already started', 'already started', 'has already started', 'would already start'], answer: 0,
    explain: L(
      'Action antérieure à un autre moment passé (« by the time we reached ») : plus-que-parfait.',
      'حدث سابق لحدث آخر في الماضي («by the time we reached»): نستعمل الماضي التام.',
      'An action before another past moment (“by the time we reached”) takes the past perfect.',
      'Acción anterior a otro momento pasado («by the time we reached»): pluscuamperfecto.',
    ),
  },
  {
    id: 'fce-a4-2', skill: 'grammar', part: 'RU1', level: 4,
    prompt: 'I’d rather you ___ my phone without asking.',
    options: ['didn’t use', 'don’t use', 'not use', 'won’t use'], answer: 0,
    explain: L(
      '« I’d rather » + autre sujet est suivi du prétérit, même pour parler du présent : « you didn’t use ».',
      'بعد «I’d rather» مع فاعل آخر نستعمل الماضي البسيط حتى للحاضر: «you didn’t use».',
      '“I’d rather” + another subject is followed by the past simple.',
      '«I’d rather» + otro sujeto va seguido de pasado simple: «you didn’t use».',
    ),
  },
  {
    id: 'fce-a4-3', skill: 'grammar', part: 'RU1', level: 4,
    prompt: 'She suggested ___ the train instead of driving.',
    options: ['taking', 'to take', 'us to take', 'take'], answer: 0,
    explain: L(
      '« suggest » est suivi de la forme en -ing (ou de « that… »), jamais de « to » ni de « someone to ».',
      'يأتي بعد «suggest» الفعل بصيغة ‎-ing (أو «that…»)، ولا يأتي بعده «to» ولا «someone to».',
      '“Suggest” is followed by -ing (or a “that” clause), never by “to”.',
      '«Suggest» va seguido de -ing (o «that…»), nunca de «to» ni de «someone to».',
    ),
  },
  {
    id: 'fce-a4-4', skill: 'vocab', part: 'RU1', level: 4,
    prompt: 'Rising sea levels ___ a serious threat to many coastal cities.',
    options: ['pose', 'make', 'do', 'cause'], answer: 0,
    explain: L(
      'Collocation : « pose a threat » (représenter une menace).',
      'التلازم اللفظي هو «pose a threat» أي يشكّل تهديداً.',
      'The collocation is “pose a threat”.',
      'La colocación es «pose a threat» (suponer una amenaza).',
    ),
  },
  {
    id: 'fce-a4-5', skill: 'vocab', part: 'RU1', level: 4,
    prompt: 'Karim’s parents were worried, but in the end they ___ him to travel alone.',
    options: ['allowed', 'let', 'made', 'accepted'], answer: 0,
    explain: L(
      '« allow someone to do » ; « let » et « make » se construisent sans « to », « accept » ne prend pas ce schéma.',
      'نقول «allow someone to do»؛ أما «let» و«make» فلا يأتي بعدهما «to»، و«accept» لا يُستعمل بهذا التركيب.',
      '“Allow someone to do”; “let” and “make” take no “to”.',
      '«Allow someone to do»; «let» y «make» van sin «to», y «accept» no admite esta estructura.',
    ),
  },
  {
    id: 'fce-a4-6', skill: 'reading', part: 'RU5', level: 4,
    passage: 'When Copenhagen began building separate cycle lanes in the 1980s, critics predicted traffic chaos. Instead, the number of people cycling rose steadily, and today almost half of all trips to work or school are made by bike. Interestingly, surveys show that most riders are not driven by environmental concerns. Asked why they cycle, the majority simply say that it is the fastest and most convenient way to get around. Planners elsewhere have taken note: if you want people to change their habits, make the greener option the easier one.',
    prompt: 'According to the text, why do most people in Copenhagen cycle?',
    options: [
      'It is quicker and more practical than other options.',
      'They want to protect the environment.',
      'Cars have been banned from the city centre.',
      'Critics persuaded them that traffic was chaotic.',
    ],
    answer: 0,
    explain: L(
      'Les cyclistes disent que c’est « the fastest and most convenient way » ; le texte précise qu’ils ne sont pas motivés par l’environnement.',
      'يقول راكبو الدراجات إنها «the fastest and most convenient way»، والنص يوضح أن البيئة ليست دافعهم.',
      'They say it is “the fastest and most convenient way”, not for environmental reasons.',
      'Dicen que es «the fastest and most convenient way»; el texto aclara que no es por el medio ambiente.',
    ),
  },
  {
    id: 'fce-a4-7', skill: 'reading', part: 'RU5', level: 4,
    passage: 'Reviewers have praised Amira Haddad’s first novel for its vivid descriptions of 1960s Tunis, and they are right to do so: the markets and cafés almost come alive on the page. The characters, however, are another matter. The narrator’s sister, in particular, changes her mind so often and with so little explanation that it becomes hard to care what happens to her. Still, for readers who value atmosphere over plot, this is a book worth picking up.',
    prompt: 'What is the reviewer’s opinion of the novel?',
    options: [
      'The setting is impressive, but some characters are unconvincing.',
      'Other reviewers have praised the descriptions too much.',
      'The plot is more interesting than the setting.',
      'The narrator’s sister is the most memorable character.',
    ],
    answer: 0,
    explain: L(
      'Le critique approuve les descriptions (« they are right to do so ») mais « the characters are another matter ».',
      'يوافق الناقد على مدح الأوصاف («they are right to do so») لكن «the characters are another matter».',
      'The reviewer agrees about the descriptions, but “the characters are another matter”.',
      'El crítico aprueba las descripciones («they are right to do so») pero «the characters are another matter».',
    ),
  },
  {
    id: 'fce-a4-8', skill: 'listening', part: 'LI1', level: 4, irt: C3,
    audio: 'W: So, how did your presentation go?\nM: Better than I’d feared, actually. I was convinced I’d forget everything, and I did lose my place once, but nobody seemed to notice. The questions at the end were the hard part. One professor asked me about a study I’d never even heard of.\nW: What did you say?\nM: I just admitted I didn’t know it and promised to look it up.',
    prompt: 'What did the man find most difficult?',
    options: ['Answering the questions', 'Remembering what to say', 'Admitting a mistake to his classmates'], answer: 0,
    explain: L(
      'Il dit « The questions at the end were the hard part ». Il a perdu le fil une fois, mais personne ne l’a remarqué.',
      'يقول «The questions at the end were the hard part». وقد تاه مرة لكن لم يلاحظ أحد.',
      'He says “The questions at the end were the hard part”.',
      'Dice «The questions at the end were the hard part»; se perdió una vez, pero nadie lo notó.',
    ),
  },
  {
    id: 'fce-a4-9', skill: 'listening', part: 'LI1', level: 4, irt: C3,
    audio: 'Hi, it’s Lucía. I’m afraid I can’t make it to the climbing session tonight after all. My shift at the café has been changed and I won’t finish until nine. Could you ask Marco if he’d like to take my place tonight? I’ve already paid for the session, so he wouldn’t need to pay anything. I’ll come on Thursday instead.',
    prompt: 'What does Lucía ask the listener to do?',
    options: ['Offer her place to Marco', 'Pay for Marco’s session', 'Change her shift at the café'], answer: 0,
    explain: L(
      'Elle demande : « Could you ask Marco if he’d like to take my place tonight? ». La séance est déjà payée.',
      'تطلب: «Could you ask Marco if he’d like to take my place tonight?»، والحصة مدفوعة مسبقاً.',
      'She asks the listener to ask Marco to take her place; the session is already paid.',
      'Pide: «Could you ask Marco if he’d like to take my place tonight?»; la sesión ya está pagada.',
    ),
  },
  {
    id: 'fce-a4-10', skill: 'listening', part: 'LI1', level: 4, irt: C3,
    audio: 'People often assume that the hardest part of running a marathon is the race itself. In my experience, it’s the months before. Getting up at six to train in the dark, saying no to nights out with friends: that’s what really tests you. On the day, the crowd carries you along. I’ve never once thought about giving up during a race, but I’ve lost count of the times I nearly gave up training.',
    prompt: 'What is the speaker’s main point about marathons?',
    options: ['Preparing for one is harder than running it.', 'The crowd makes the race more stressful.', 'She often wants to stop in the middle of a race.'], answer: 0,
    explain: L(
      'Le plus dur, dit-elle, ce sont « the months before » ; pendant la course, « the crowd carries you along ».',
      'تقول إن الأصعب هو «the months before»، أما يوم السباق فـ«the crowd carries you along».',
      'The hardest part is “the months before”; on the day the crowd helps.',
      'Lo más duro son «the months before»; el día de la carrera «the crowd carries you along».',
    ),
  },

  // ---------- Level 5 (C1) ----------
  {
    id: 'fce-a5-1', skill: 'grammar', part: 'RU1', level: 5,
    prompt: 'Not until the results were published ___ how serious the problem was.',
    options: ['did we realise', 'we realised', 'we did realise', 'realised we'], answer: 0,
    explain: L(
      'Une phrase qui commence par « Not until… » impose l’inversion sujet-auxiliaire : « did we realise ».',
      'الجملة التي تبدأ بـ«Not until…» تتطلب قلب الفاعل والفعل المساعد: «did we realise».',
      'A sentence starting with “Not until…” needs inversion: “did we realise”.',
      'Una frase que empieza por «Not until…» exige inversión: «did we realise».',
    ),
  },
  {
    id: 'fce-a5-2', skill: 'grammar', part: 'RU1', level: 5,
    prompt: 'Had I known about the strike, I ___ a different route.',
    options: ['would have taken', 'would take', 'had taken', 'will have taken'], answer: 0,
    explain: L(
      '« Had I known » = « If I had known » (troisième conditionnel) → « would have taken ».',
      '«Had I known» تعني «If I had known» (الشرط الثالث)، فنستعمل «would have taken».',
      '“Had I known” = “If I had known” (third conditional) → “would have taken”.',
      '«Had I known» = «If I had known» (tercer condicional) → «would have taken».',
    ),
  },
  {
    id: 'fce-a5-3', skill: 'grammar', part: 'RU1', level: 5,
    prompt: 'The new stadium, ___ cost was first estimated at €200 million, ended up costing twice as much.',
    options: ['whose', 'which', 'of which', 'that its'], answer: 0,
    explain: L(
      'Possession (le coût du stade) : relatif « whose » + nom. « of which » exigerait « the cost of which ».',
      'للملكية (تكلفة الملعب) نستعمل «whose» + اسم؛ و«of which» تحتاج إلى «the cost of which».',
      'Possession (the stadium’s cost): “whose” + noun.',
      'Posesión (el coste del estadio): «whose» + sustantivo; «of which» exigiría «the cost of which».',
    ),
  },
  {
    id: 'fce-a5-4', skill: 'vocab', part: 'RU1', level: 5,
    prompt: 'The leaked emails have ___ serious doubt on the minister’s version of events.',
    options: ['cast', 'made', 'put', 'set'], answer: 0,
    explain: L(
      'Collocation figée : « cast doubt on something » (mettre en doute).',
      'التلازم اللفظي الثابت هو «cast doubt on something» أي يثير الشك في.',
      'The fixed collocation is “cast doubt on something”.',
      'Colocación fija: «cast doubt on something» (poner en duda).',
    ),
  },
  {
    id: 'fce-a5-5', skill: 'vocab', part: 'RU1', level: 5,
    prompt: 'Her argument doesn’t ___ water: the figures she quotes are ten years out of date.',
    options: ['hold', 'keep', 'carry', 'take'], answer: 0,
    explain: L(
      'Expression : « not hold water » = ne pas tenir debout (un argument faible).',
      'التعبير «not hold water» يعني أن الحجة لا تصمد.',
      'The idiom is “not hold water” (an argument that is not convincing).',
      'La expresión es «not hold water» (un argumento que no se sostiene).',
    ),
  },
  {
    id: 'fce-a5-6', skill: 'reading', part: 'RU5', level: 5,
    passage: 'The “digital detox” industry promises that a weekend without screens will leave us calmer and more focused. The research, however, is less clear-cut. Several studies have found that participants do report feeling better after a break, but their mood returns to its previous level within days of reconnecting. Some researchers argue that this is hardly surprising: if the problem lies in how we use our devices day to day, a short holiday from them is about as effective as a crash diet. Lasting change, they suggest, depends on small, sustainable adjustments, such as turning off notifications.',
    prompt: 'Why do the researchers mention a “crash diet”?',
    options: [
      'To show that short, extreme breaks only have temporary effects',
      'To suggest that detox weekends are bad for our health',
      'To compare heavy phone use with an eating disorder',
      'To argue that screen time makes people gain weight',
    ],
    answer: 0,
    explain: L(
      'Comme un régime express, la pause est brève et extrême : l’humeur revient « to its previous level within days ».',
      'مثل الحمية السريعة، الانقطاع قصير ومتطرف: يعود المزاج «to its previous level within days».',
      'Like a crash diet, a short break works only briefly: mood returns “within days”.',
      'Como una dieta exprés, la pausa es breve: el ánimo vuelve «to its previous level within days».',
    ),
  },
  {
    id: 'fce-a5-7', skill: 'reading', part: 'RU5', level: 5,
    passage: 'For decades, the town of Chefchaouen welcomed tourists with open arms; their spending kept many small businesses alive. Lately, though, some residents have begun to voice mixed feelings. It is not that they want visitors to stay away (few could afford that), but they resent being treated as part of the scenery. One shopkeeper put it neatly: “They photograph my door, my cat, my grandmother. Very few of them come in, or even say hello.”',
    prompt: 'What bothers some residents most?',
    options: [
      'Visitors see them as a backdrop rather than as people.',
      'They would prefer tourists to stop coming.',
      'Tourism no longer brings money into the town.',
      'Shops are being replaced by hotels.',
    ],
    answer: 0,
    explain: L(
      'Ils n’aiment pas « being treated as part of the scenery » ; le texte dit qu’ils ne veulent pas que les touristes partent.',
      'يزعجهم «being treated as part of the scenery»، والنص يوضح أنهم لا يريدون رحيل السياح.',
      'They “resent being treated as part of the scenery”; they do not want visitors to stay away.',
      'Les molesta «being treated as part of the scenery»; no quieren que los turistas dejen de venir.',
    ),
  },
  {
    id: 'fce-a5-8', skill: 'listening', part: 'LI1', level: 5, irt: C3,
    audio: 'M: I read your article on the new metro line. You were pretty harsh.\nW: Was I? I thought I was being fair. Nobody’s disputing that the city needs it. My point was that the families who’ll lose their homes weren’t consulted until the plans had already been approved.\nM: The council says it followed the legal procedure.\nW: Legally, maybe. That doesn’t make it right.',
    prompt: 'What is the woman’s main criticism?',
    options: ['Residents were consulted too late.', 'The city doesn’t need a new metro line.', 'The council broke the law.'], answer: 0,
    explain: L(
      'Elle reproche que les familles « weren’t consulted until the plans had already been approved ». Elle admet que la ligne est utile et ne parle pas d’illégalité.',
      'تنتقد أن العائلات «weren’t consulted until the plans had already been approved»، وتقر بأن الخط ضروري ولا تتحدث عن مخالفة القانون.',
      'Families “weren’t consulted until the plans had already been approved”; she accepts it was legal.',
      'Critica que las familias «weren’t consulted until the plans had already been approved»; no habla de ilegalidad.',
    ),
  },
  {
    id: 'fce-a5-9', skill: 'listening', part: 'LI1', level: 5, irt: C3,
    audio: 'If you’re expecting this exhibition to be a celebration of the artist’s genius, you may come away disappointed. The curators have chosen to focus less on the famous paintings, only three of which are on show, and more on the assistants and suppliers who made them possible. It’s a bold decision, and one I largely admire, though I suspect many visitors will feel slightly short-changed.',
    prompt: 'What is the speaker’s view of the exhibition?',
    options: [
      'She admires its approach but expects some visitors to be disappointed.',
      'She thinks it shows too many of the famous paintings.',
      'She sees it as a celebration of the artist’s genius.',
    ],
    answer: 0,
    explain: L(
      '« one I largely admire » (approbation) + « many visitors will feel slightly short-changed » (déception attendue).',
      '«one I largely admire» (إعجاب) + «many visitors will feel slightly short-changed» (خيبة متوقعة).',
      '“One I largely admire”, but “many visitors will feel slightly short-changed”.',
      '«One I largely admire» (aprobación) + «many visitors will feel slightly short-changed».',
    ),
  },
  {
    id: 'fce-a5-10', skill: 'listening', part: 'LI1', level: 5, irt: C3,
    audio: 'W: You’re not still thinking of leaving the orchestra, are you?\nM: I’ve more or less made up my mind. It’s not the music. I love the music. It’s that rehearsals have taken over my whole life, and I’ve got my final exams in the spring.\nW: Couldn’t you just take a few months off?\nM: I asked. Apparently it’s all or nothing.',
    prompt: 'Why is the man likely to leave the orchestra?',
    options: ['He can’t combine rehearsals with his studies.', 'He no longer enjoys the music.', 'He has been asked to leave.'], answer: 0,
    explain: L(
      'Les répétitions prennent toute sa vie et il a ses examens ; une pause est refusée (« all or nothing »). Il aime la musique.',
      'التدريبات تستهلك حياته ولديه امتحانات، والتوقف المؤقت مرفوض («all or nothing»)، وهو يحب الموسيقى.',
      'Rehearsals take over his life before his exams, and a break is not allowed.',
      'Los ensayos ocupan toda su vida y tiene exámenes; no puede tomarse una pausa («all or nothing»).',
    ),
  },

  // ---------- Level 6 (C1+) ----------
  {
    id: 'fce-a6-1', skill: 'grammar', part: 'RU1', level: 6,
    prompt: 'Little ___ that the decision would be reversed only a week later.',
    options: ['did they suspect', 'they suspected', 'had suspected they', 'they did suspect'], answer: 0,
    explain: L(
      '« Little » en tête de phrase (sens négatif) entraîne l’inversion : « did they suspect ».',
      '«Little» في بداية الجملة (معنى النفي) يتطلب القلب: «did they suspect».',
      'Negative “Little” at the start of a sentence requires inversion: “did they suspect”.',
      '«Little» al inicio (sentido negativo) exige inversión: «did they suspect».',
    ),
  },
  {
    id: 'fce-a6-2', skill: 'grammar', part: 'RU1', level: 6,
    prompt: 'It’s high time the council ___ something about the traffic in the old town.',
    options: ['did', 'does', 'has done', 'will do'], answer: 0,
    explain: L(
      '« It’s high time » + sujet est suivi du prétérit (irréel), avec un sens présent : « did ».',
      'بعد «It’s high time» + فاعل نستعمل الماضي البسيط بمعنى الحاضر: «did».',
      '“It’s high time” + subject takes the past simple with present meaning.',
      '«It’s high time» + sujeto va seguido de pasado simple con sentido presente: «did».',
    ),
  },
  {
    id: 'fce-a6-3', skill: 'grammar', part: 'RU1', level: 6,
    prompt: '___ to the rules, she would never have been disqualified.',
    options: ['Had she kept', 'If she kept', 'Were she to keep', 'Should she keep'], answer: 0,
    explain: L(
      '« would never have been » = troisième conditionnel : condition passée inversée « Had she kept ».',
      '«would never have been» شرط ثالث، فالشرط الماضي المقلوب هو «Had she kept».',
      '“Would never have been” is a third conditional: inverted past condition “Had she kept”.',
      '«Would never have been» es tercer condicional: condición pasada invertida «Had she kept».',
    ),
  },
  {
    id: 'fce-a6-4', skill: 'vocab', part: 'RU1', level: 6,
    prompt: 'The two reports reach such different conclusions that it is hard to ___ them.',
    options: ['reconcile', 'compromise', 'accommodate', 'negotiate'], answer: 0,
    explain: L(
      '« reconcile » = rendre compatibles deux choses qui semblent contradictoires.',
      '«reconcile» تعني التوفيق بين أمرين يبدوان متناقضين.',
      '“Reconcile” means make two conflicting things compatible.',
      '«Reconcile» significa hacer compatibles dos cosas que parecen contradictorias.',
    ),
  },
  {
    id: 'fce-a6-5', skill: 'vocab', part: 'RU1', level: 6,
    prompt: 'The committee’s reply was so ___ that nobody could tell whether it supported the plan or not.',
    options: ['equivocal', 'emphatic', 'unanimous', 'explicit'], answer: 0,
    explain: L(
      '« equivocal » = ambigu, qui ne prend pas position ; « emphatic » et « explicit » disent le contraire.',
      '«equivocal» تعني غامض لا يحدد موقفاً؛ أما «emphatic» و«explicit» فعكس ذلك.',
      '“Equivocal” means ambiguous, so nobody could tell its position.',
      '«Equivocal» significa ambiguo; «emphatic» y «explicit» dicen lo contrario.',
    ),
  },
  {
    id: 'fce-a6-6', skill: 'reading', part: 'RU5', level: 6,
    passage: 'It is tempting to read the fall in reported playground accidents as straightforward proof that safer equipment works. Yet the same period saw children spending far less time playing outdoors at all. Fewer hours on the climbing frame would produce fewer broken arms even if not a single swing had been replaced. Some researchers go further, suggesting that by removing all risk we may be depriving children of the chance to learn how to judge it, a skill whose absence may only become apparent later in life.',
    prompt: 'What does the writer imply about safer playground equipment?',
    options: [
      'Its effect on accident rates may have been overestimated.',
      'It has led to more broken arms than before.',
      'It has encouraged children to play outdoors more.',
      'It is clearly the main reason accidents have fallen.',
    ],
    answer: 0,
    explain: L(
      'La baisse peut s’expliquer par le moindre temps passé dehors, « even if not a single swing had been replaced » : l’effet des équipements est peut-être surestimé.',
      'قد يُفسَّر الانخفاض بقلة اللعب في الخارج «even if not a single swing had been replaced»، فربما بولغ في تقدير أثر المعدات.',
      'Fewer accidents may come from less outdoor play, so the equipment’s effect may be overstated.',
      'La bajada puede deberse a jugar menos fuera, «even if not a single swing had been replaced»: su efecto quizá se sobrestima.',
    ),
  },
  {
    id: 'fce-a6-7', skill: 'reading', part: 'RU5', level: 6,
    passage: 'Translators are fond of saying that a good translation should be invisible: the reader should never be reminded that the text was first written in another language. But invisibility comes at a price. Smoothing away every unfamiliar turn of phrase can strip a novel of precisely the strangeness that made it worth translating in the first place. Some recent translators have therefore chosen to leave a degree of foreignness in place, trusting readers to tolerate, and even enjoy, a little resistance.',
    prompt: 'What is the writer’s point about “invisible” translations?',
    options: [
      'They may remove what made the original special.',
      'They are impossible to achieve in practice.',
      'Readers find them more enjoyable than foreign-sounding ones.',
      'They are more faithful to the original text.',
    ],
    answer: 0,
    explain: L(
      'Gommer l’étrangeté peut « strip a novel of precisely the strangeness that made it worth translating ».',
      'إزالة الغرابة قد «strip a novel of precisely the strangeness that made it worth translating».',
      'Smoothing everything can remove “the strangeness that made it worth translating”.',
      'Suavizarlo todo puede «strip a novel of precisely the strangeness that made it worth translating».',
    ),
  },
  {
    id: 'fce-a6-8', skill: 'listening', part: 'LI1', level: 6, irt: C3,
    audio: 'M: So the funding’s been approved? That’s fantastic!\nW: Well, yes and no. They’ve approved it in principle, but it’s conditional on us finding a partner university by June, which, given how long these things take, is optimistic to say the least.\nM: But surely that’s just a formality?\nW: I wish I shared your confidence.',
    prompt: 'How does the woman feel about the funding?',
    options: [
      'Doubtful that a condition can be met in time',
      'Delighted that the money is now guaranteed',
      'Confident that finding a partner is a formality',
    ],
    answer: 0,
    explain: L(
      'Trouver un partenaire avant juin est « optimistic to say the least » et elle répond « I wish I shared your confidence » : elle doute.',
      'إيجاد شريك قبل يونيو «optimistic to say the least»، وتقول «I wish I shared your confidence»: إنها متشككة.',
      '“Optimistic to say the least” and “I wish I shared your confidence” show doubt.',
      '«Optimistic to say the least» y «I wish I shared your confidence» muestran que duda.',
    ),
  },
  {
    id: 'fce-a6-9', skill: 'listening', part: 'LI1', level: 6, irt: C3,
    audio: 'What struck me about the documentary was not so much what it said as what it left out. The director interviews dozens of farmers about the drought, and their stories are genuinely moving. But not once does anyone ask why water from the region is still being sold to industry at a fraction of its value. It’s a curious omission for a film that otherwise prides itself on asking awkward questions.',
    prompt: 'What criticism does the speaker make of the documentary?',
    options: [
      'It avoids an important question about who gets the water.',
      'The farmers’ stories are not very convincing.',
      'It asks too many awkward questions.',
    ],
    answer: 0,
    explain: L(
      '« what it left out » : personne ne demande pourquoi l’eau est vendue à l’industrie. Les témoignages sont « genuinely moving ».',
      '«what it left out»: لا أحد يسأل لماذا تُباع المياه للصناعة، أما الشهادات فـ«genuinely moving».',
      'The film never asks why the water is sold to industry; the farmers’ stories are moving.',
      '«What it left out»: nadie pregunta por qué el agua se vende a la industria; los testimonios son «genuinely moving».',
    ),
  },
  {
    id: 'fce-a6-10', skill: 'listening', part: 'LI1', level: 6, irt: C3,
    audio: 'W: I gather you weren’t exactly thrilled with the new coach’s plan.\nM: It’s not that I object to it as such. On paper, it’s perfectly sensible. What bothers me is that half the team found out about it on social media before we’d been told anything officially.\nW: So it’s the way it was handled.\nM: Exactly. Get that wrong and even the best idea will meet resistance.',
    prompt: 'What is the man unhappy about?',
    options: ['How the plan was communicated', 'What the plan actually involves', 'Being dropped from the team'], answer: 0,
    explain: L(
      'Le plan est « perfectly sensible » ; ce qui le gêne, c’est que l’équipe l’a appris « on social media » : « the way it was handled ».',
      'الخطة «perfectly sensible»؛ ما يزعجه أن الفريق علم بها «on social media»، أي «the way it was handled».',
      'The plan is sensible; the problem is “the way it was handled”.',
      'El plan es «perfectly sensible»; le molesta que el equipo se enterara «on social media».',
    ),
  },
];

/** Toki Quest B2 placement bank. */
export const b2FirstAssessmentBank: McqItem[] = rawBank.map(withShuffledOptions);
