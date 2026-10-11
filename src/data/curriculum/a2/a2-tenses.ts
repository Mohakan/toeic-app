import type { Unit } from '../../../types';
import { g, lesson, listen, order, respond, unit, x } from '../build';

export const a2Tenses: Unit = unit(
  {
    id: 'a2-tenses',
    emoji: '⏳',
    level: 2,
    part: 'R5',
    title: x('Les temps au travail', 'الأزمنة في العمل', 'Tenses at work', 'Los tiempos verbales en el trabajo'),
    subtitle: x('Présent simple, présent continu, prétérit', 'المضارع البسيط والمستمر والماضي', 'Present simple, continuous, past', 'Presente simple, presente continuo, pasado simple'),
    lesson: lesson(
      x('Choisir le bon temps grâce aux indicateurs de temps.', 'اختيار الزمن المناسب بفضل مؤشرات الوقت.', 'Pick the right tense from time markers.', 'Elegir el tiempo correcto gracias a los marcadores temporales.'),
      [
        x('Habitude (usually, every day) → présent simple : she works.', 'العادة (usually, every day) ← المضارع البسيط: she works.', 'Habit → present simple: she works.', 'Hábito (usually, every day) → presente simple: she works.'),
        x('Action en cours (now, at the moment) → be + -ing : she is working.', 'فعل جارٍ (now, at the moment) ← be + -ing: she is working.', 'Action in progress → be + -ing.', 'Acción en curso (now, at the moment) → be + -ing: she is working.'),
        x('Passé terminé (yesterday, last week, ago) → prétérit : she worked.', 'ماضٍ منتهٍ (yesterday, last week, ago) ← الماضي البسيط: she worked.', 'Finished past → past simple: she worked.', 'Pasado terminado (yesterday, last week, ago) → pasado simple: she worked.'),
      ],
      'Mr. Kim usually takes the train, but today he is driving.',
      x('« usually » → habitude ; « today » + action en cours → présent continu.', '«usually» ← عادة، و«today» مع فعل جارٍ ← المضارع المستمر.', '“usually” → habit; “today” in progress → continuous.', '«usually» → hábito; «today» con una acción en curso → presente continuo.'),
    ),
  },
  [
    g('a2-t-q1', 2, 'Our manager usually ___ the report on Monday morning.', ['reads', 'read', 'is reading', 'reading'], x(
      '« Usually » = habitude : présent simple avec -s à la 3e personne.',
      '«Usually» = عادة: مضارع بسيط مع -s للمفرد الغائب.',
      '“Usually” = habit: present simple with -s.',
      '«Usually» = hábito: presente simple con -s en tercera persona.',
    )),
    g('a2-t-q2', 2, 'Please be quiet. Mr. Ali ___ on the phone with a client right now.', ['is speaking', 'speaks', 'spoke', 'speak'], x(
      '« Right now » = en ce moment : présent continu.',
      '«Right now» = الآن: المضارع المستمر.',
      '“Right now”: present continuous.',
      '«Right now» = en este momento: presente continuo.',
    )),
    g('a2-t-q3', 2, 'The delegation ___ in Paris last week.', ['arrived', 'arrives', 'is arriving', 'arrive'], x(
      '« Last week » = passé terminé : prétérit.',
      '«Last week» = ماضٍ منتهٍ: الماضي البسيط.',
      '“Last week” = finished past.',
      '«Last week» = pasado terminado: pasado simple.',
    )),
    g('a2-t-q4', 2, 'I ___ the email two hours ago, but she has not answered yet.', ['sent', 'send', 'am sending', 'sends'], x(
      '« Ago » se construit toujours avec le prétérit. « Send » est irrégulier : sent.',
      '«Ago» تأتي دائمًا مع الماضي البسيط. والفعل «send» شاذ: sent.',
      '“Ago” always takes the past simple. “Send” → “sent”.',
      '«Ago» siempre va con el pasado simple. «Send» es irregular: «sent».',
    )),
    g('a2-t-q5', 2, 'The company ___ not open on public holidays.', ['does', 'is', 'do', 'has'], x(
      'Négation au présent simple : does not + verbe de base.',
      'النفي في المضارع البسيط: does not + فعل أساسي.',
      'Present simple negative: does not + base verb.',
      'Negación en presente simple: does not + verbo en forma base.',
    )),
    g('a2-t-q6', 2, '___ you finish the presentation yesterday?', ['Did', 'Do', 'Were', 'Have'], x(
      'Question au prétérit : Did + sujet + verbe de base.',
      'السؤال في الماضي البسيط: Did + فاعل + فعل أساسي.',
      'Past question: Did + subject + base verb.',
      'Pregunta en pasado simple: Did + sujeto + verbo en forma base.',
    )),
    order('a2-t-o1', 'She does not work on Sundays', x('La négation est « does not ».', 'النفي هو «does not».', 'The negative is “does not”.', 'La negación es «does not».'), x(
      'Présent simple négatif : sujet + does not + verbe de base.',
      'النفي في المضارع البسيط: فاعل + does not + فعل أساسي.',
      'Subject + does not + base verb.',
      'Presente simple negativo: sujeto + does not + verbo en forma base.',
    )),
    order('a2-t-o2', 'They signed the contract yesterday', x('« yesterday » se met à la fin.', '«yesterday» في النهاية.', '“yesterday” goes last.', '«yesterday» va al final.'), x(
      'Sujet + verbe au passé + complément + indicateur de temps.',
      'فاعل + فعل ماضٍ + مفعول + ظرف زمان.',
      'Subject + past verb + object + time.',
      'Sujeto + verbo en pasado + complemento + marcador temporal.',
    )),
  ],
  [
    g('a2-t-s2-q1', 2, 'Look! The technician ___ the photocopier now.', ['is repairing', 'repairs', 'repaired', 'repair'], x(
      '« Look! » et « now » : action en cours → présent continu.',
      '«Look!» و«now»: فعل جارٍ ← المضارع المستمر.',
      '“Look!” and “now”: action in progress → present continuous.',
      '«Look!» y «now»: acción en curso → presente continuo.',
    )),
    g('a2-t-s2-q2', 2, 'We ___ a new client last Friday.', ['met', 'meet', 'are meeting', 'meets'], x(
      '« Last Friday » = passé terminé ; « meet » est irrégulier : « met ».',
      '«Last Friday» = ماضٍ منتهٍ، والفعل «meet» شاذ: «met».',
      '“Last Friday” → past simple; “meet” → “met”.',
      '«Last Friday» = pasado terminado; «meet» es irregular: «met».',
    )),
    g('a2-t-s2-q3', 2, 'Ms. Ruiz ___ in the Madrid office, but this month she is working in Paris.', ['usually works', 'is usually working', 'worked usually', 'usually work'], x(
      'Habitude (« usually ») → présent simple avec -s ; la situation temporaire (« this month ») est au présent continu.',
      'العادة («usually») ← مضارع بسيط مع -s، أما الوضع المؤقت («this month») فبالمضارع المستمر.',
      'Habit → present simple; the temporary situation → continuous.',
      'Hábito («usually») → presente simple con -s; la situación temporal («this month») va en presente continuo.',
    )),
    g('a2-t-s2-q4', 2, 'The train ___ at 7:15 every morning.', ['leaves', 'is leaving', 'left', 'leave'], x(
      'Horaire régulier (« every morning ») → présent simple : « leaves ».',
      'موعد منتظم («every morning») ← مضارع بسيط: «leaves».',
      'A regular timetable → present simple.',
      'Horario regular («every morning») → presente simple: «leaves».',
    )),
    g('a2-t-s2-q5', 2, 'I ___ the report yesterday, but I didn’t send it.', ['finished', 'finish', 'am finishing', 'finishes'], x(
      '« Yesterday » → prétérit : « finished ».',
      '«Yesterday» ← الماضي البسيط: «finished».',
      '“Yesterday” → past simple.',
      '«Yesterday» → pasado simple: «finished».',
    )),
    g('a2-t-s2-q6', 2, 'Why ___ you wearing a suit today?', ['are', 'do', 'did', 'is'], x(
      '« Wearing » + « today » → présent continu : « are you wearing ».',
      '«Wearing» مع «today» ← المضارع المستمر: «are you wearing».',
      '“Wearing” + “today” → “are you wearing”.',
      '«Wearing» + «today» → presente continuo: «are you wearing».',
    )),
    g('a2-t-s2-q7', 2, 'They ___ go to the conference last year.', ['didn’t', 'don’t', 'weren’t', 'aren’t'], x(
      'Passé négatif avec un verbe d’action : didn’t + verbe de base.',
      'النفي في الماضي مع فعل حدث: didn’t + فعل أساسي.',
      'Past negative: didn’t + base verb.',
      'Pasado negativo con un verbo de acción: didn’t + verbo base.',
    )),
    order('a2-t-s2-o1', 'We are preparing the new catalog this week', x('Le verbe est « are preparing ».', 'الفعل هو «are preparing».', 'The verb is “are preparing”.', 'El verbo es «are preparing».'), x(
      'Projet en cours (« this week ») → be + -ing.',
      'عمل جارٍ («this week») ← be + -ing.',
      'Ongoing work this week → be + -ing.',
      'Trabajo en curso («this week») → be + -ing.',
    )),
    order('a2-t-s2-o2', 'Did you call the supplier yesterday', x('Commence par « Did ».', 'ابدأ بـ «Did».', 'Start with “Did”.', 'Empieza por «Did».'), x(
      'Question au prétérit : Did + sujet + verbe de base.',
      'السؤال في الماضي: Did + فاعل + فعل أساسي.',
      'Past question: Did + subject + base verb.',
      'Pregunta en pasado: Did + sujeto + verbo base.',
    )),
    respond('a2-t-s2-l1', 2, 'What are you working on at the moment?', ['A presentation for the sales team.', 'Every Monday.', 'Yes, I worked.'], x(
      'On décrit la tâche en cours.',
      'نصف المهمة الجارية.',
      'Describe the current task.',
      'Se describe la tarea en curso.',
    )),
  ],
  [
    g('a2-t-s3-q1', 2, 'At the moment, the manager ___ with a customer.', ['is talking', 'talks', 'talked', 'talk'], x(
      '« At the moment » → présent continu.',
      '«At the moment» ← المضارع المستمر.',
      '“At the moment” → present continuous.',
      '«At the moment» → presente continuo.',
    )),
    g('a2-t-s3-q2', 2, 'Our company ___ furniture to hotels all over Europe. It is our main business.', ['sells', 'is selling', 'sold', 'sell'], x(
      'Activité permanente de l’entreprise → présent simple.',
      'نشاط دائم للشركة ← مضارع بسيط.',
      'A permanent activity → present simple.',
      'Actividad permanente de la empresa → presente simple.',
    )),
    g('a2-t-s3-q3', 2, 'Two years ago, Mr. Kim ___ to Canada for work.', ['moved', 'moves', 'is moving', 'move'], x(
      '« Two years ago » → prétérit.',
      '«Two years ago» ← الماضي البسيط.',
      '“Ago” → past simple.',
      '«Two years ago» → pasado simple.',
    )),
    g('a2-t-s3-q4', 2, 'How often ___ you travel for work?', ['do', 'are', 'did', 'does'], x(
      'Fréquence d’une habitude → présent simple : « How often do you… ? ».',
      'تكرار عادة ← مضارع بسيط: «How often do you…?».',
      'Frequency of a habit → “do you”.',
      'Frecuencia de un hábito → presente simple: «How often do you…?».',
    )),
    g('a2-t-s3-q5', 2, 'She ___ the email this morning, so she knows about the change.', ['read', 'reads', 'is reading', 'reading'], x(
      'Action terminée ce matin → prétérit « read » (prononcé « red »).',
      'فعل انتهى هذا الصباح ← الماضي «read» (يُنطق «red»).',
      'Finished this morning → past “read”.',
      'Acción terminada esta mañana → pasado «read» (se pronuncia «red»).',
    )),
    g('a2-t-s3-q6', 2, 'I can’t talk now. I ___ for a train.', ['am waiting', 'wait', 'waited', 'waits'], x(
      '« Now » → action en cours : « am waiting ».',
      '«Now» ← فعل جارٍ: «am waiting».',
      '“Now” → “am waiting”.',
      '«Now» → acción en curso: «am waiting».',
    )),
    g('a2-t-s3-q7', 2, 'The meeting ___ two hours yesterday.', ['lasted', 'last', 'is lasting', 'lasts'], x(
      '« Yesterday » → prétérit régulier : « lasted ».',
      '«Yesterday» ← الماضي المنتظم: «lasted».',
      '“Yesterday” → “lasted”.',
      '«Yesterday» → pasado regular: «lasted».',
    )),
    order('a2-t-s3-o1', 'The office was closed last Monday', x('Commence par « The office ».', 'ابدأ بـ «The office».', 'Start with “The office”.', 'Empieza por «The office».'), x(
      'Passé de « be » : was + adjectif + moment.',
      'ماضي «be»: was + صفة + وقت.',
      'Past of “be”: was + adjective + time.',
      'Pasado de «be»: was + adjetivo + momento.',
    )),
    listen('a2-t-s3-l1', 'L3', 2, 'W: Did you go to the trade fair last week?\nM: No, I was sick. But my colleague went and took a lot of notes.', 'Why didn’t the man go to the trade fair?', ['He was sick', 'He was on vacation', 'He had a meeting', 'He missed his flight'], x(
      '« No, I was sick » = il était malade.',
      '«No, I was sick» = كان مريضًا.',
      '“I was sick”.',
      '«No, I was sick» = estaba enfermo.',
    )),
    respond('a2-t-s3-l2', 2, 'When did you start working here?', ['About two years ago.', 'Every day at nine.', 'I’m working now.'], x(
      'Question au passé (« did ») → un moment passé : « two years ago ».',
      'سؤال في الماضي («did») ← وقت ماضٍ: «two years ago».',
      'Past question → a past time.',
      'Pregunta en pasado («did») → un momento pasado: «two years ago».',
    )),
  ],
);
