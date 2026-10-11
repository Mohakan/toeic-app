import type { Unit } from '../../../types';
import { g, lesson, listen, order, respond, unit, x } from '../build';

export const b1PresentPerfect: Unit = unit(
  {
    id: 'b1-present-perfect',
    emoji: '✅',
    level: 3,
    part: 'R5 · L3',
    title: x('Present perfect ou prétérit ?', 'المضارع التام أم الماضي البسيط؟', 'Present perfect or past simple?', '¿Present perfect o pasado simple?'),
    subtitle: x('ever, never, already, yet, for, since', 'ever وnever وalready وyet وfor وsince', 'ever, never, already, yet, for, since', 'ever, never, already, yet, for, since'),
    lesson: lesson(
      x('Choisir entre present perfect et prétérit, un piège fréquent de la Partie 5.', 'الاختيار بين المضارع التام والماضي البسيط، وهو فخ شائع في الجزء 5.', 'Choose between present perfect and past simple, a frequent Part 5 trap.', 'Elegir entre present perfect y pasado simple, una trampa frecuente de la Parte 5.'),
      [
        x('Present perfect (have / has + participe) : expérience ou résultat, sans date précise (I have visited Rome. She has finished.).', 'المضارع التام (have/has + اسم المفعول): تجربة أو نتيجة دون تاريخ محدد (I have visited Rome. She has finished.).', 'Present perfect: experience or result, no exact time.', 'Present perfect (have / has + participio): experiencia o resultado, sin fecha concreta (I have visited Rome. She has finished.).'),
        x('Mots repères : ever, never, already, yet, just, so far ; for + durée, since + point de départ.', 'كلمات مرشدة: ever وnever وalready وyet وjust وso far، وfor + مدة، وsince + نقطة بداية.', 'Markers: ever, never, already, yet, just, so far; for / since.', 'Marcadores: ever, never, already, yet, just, so far; for + duración, since + punto de partida.'),
        x('Moment passé précis (yesterday, last week, in 2020, ago, When…?) → prétérit.', 'وقت ماضٍ محدد (yesterday وlast week وin 2020 وago وWhen…?) ← الماضي البسيط.', 'A finished time → past simple.', 'Momento pasado concreto (yesterday, last week, in 2020, ago, When…?) → pasado simple.'),
      ],
      'I have worked here since 2022, and I visited our London office last month.',
      x('« since 2022 » → present perfect ; « last month » → prétérit.', '«since 2022» ← المضارع التام، و«last month» ← الماضي البسيط.', '“since” → perfect; “last month” → past.', '«since 2022» → present perfect; «last month» → pasado simple.'),
    ),
  },
  [
    g('b1-pp-s1-q1', 3, 'I ___ to Japan twice.', ['have been', 'was', 'am', 'had been'], x(
      'Expérience sans date (« twice ») → present perfect : « have been ».',
      'تجربة دون تاريخ («twice») ← المضارع التام: «have been».',
      'Experience without a date → present perfect.',
      'Experiencia sin fecha («twice») → present perfect: «have been».',
    )),
    g('b1-pp-s1-q2', 3, 'She ___ the report yet.', ['hasn’t finished', 'didn’t finish', 'doesn’t finish', 'isn’t finish'], x(
      '« Yet » en fin de phrase négative → present perfect.',
      '«Yet» في آخر جملة منفية ← المضارع التام.',
      '“Yet” in a negative → present perfect.',
      '«Yet» al final de una negativa → present perfect.',
    )),
    g('b1-pp-s1-q3', 3, 'We ___ in this building since 2019.', ['have worked', 'worked', 'work', 'are working'], x(
      '« Since 2019 » et situation qui continue → present perfect.',
      '«Since 2019» مع وضع مستمر ← المضارع التام.',
      '“Since” + ongoing situation → present perfect.',
      '«Since 2019» y situación que continúa → present perfect.',
    )),
    g('b1-pp-s1-q4', 3, 'They ___ the contract last Friday.', ['signed', 'have signed', 'sign', 'has signed'], x(
      '« Last Friday » = moment passé précis → prétérit.',
      '«Last Friday» = وقت ماضٍ محدد ← الماضي البسيط.',
      'A specific past time → past simple.',
      '«Last Friday» = momento pasado concreto → pasado simple.',
    )),
    g('b1-pp-s1-q5', 3, 'Has she ever ___ to Canada?', ['been', 'be', 'was', 'being'], x(
      'Present perfect : has + participe passé « been ».',
      'المضارع التام: has + اسم المفعول «been».',
      'has + past participle.',
      'Present perfect: has + participio «been».',
    )),
    g('b1-pp-s1-q6', 3, 'Mr. Kim has just ___ the meeting room.', ['left', 'leave', 'leaving', 'leaves'], x(
      '« Has just » + participe passé : « left » (participe de leave).',
      '«Has just» + اسم المفعول: «left» (من leave).',
      '“Has just” + past participle.',
      '«Has just» + participio: «left» (participio de leave).',
    )),
    g('b1-pp-s1-q7', 3, 'I have known Sara ___ ten years.', ['for', 'since', 'during', 'ago'], x(
      'Durée (ten years) → « for ».',
      'مدة (ten years) ← «for».',
      'Duration → “for”.',
      'Duración (ten years) → «for».',
    )),
    order('b1-pp-s1-o1', 'Have you sent the invoice yet', x('Commence par « Have you ».', 'ابدأ بـ «Have you».', 'Start with “Have you”.', 'Empieza por «Have you».'), x(
      'Question : Have + sujet + participe + … + yet (à la fin).',
      'سؤال: Have + فاعل + اسم المفعول + … + yet (في النهاية).',
      'Have + subject + participle + yet.',
      'Pregunta: Have + sujeto + participio + … + yet (al final).',
    )),
    respond('b1-pp-s1-l1', 3, 'Have you met our new director?', ['Yes, I met her this morning.', 'No, I’m the director.', 'She meets every Monday.'], x(
      'On répond oui, puis on précise le moment avec le prétérit (this morning).',
      'نجيب بنعم ثم نحدد الوقت بالماضي البسيط (this morning).',
      'Yes, then the time in the past simple.',
      'Se responde que sí y se precisa el momento en pasado simple (this morning).',
    )),
    listen('b1-pp-s1-l2', 'L3', 3, 'W: Has the delivery arrived?\nM: Not yet. The driver called and said he’ll be here in an hour.', 'What does the man say about the delivery?', ['It has not arrived yet', 'It arrived this morning', 'It was cancelled', 'It went to the wrong address'], x(
      '« Not yet » = pas encore.',
      '«Not yet» = ليس بعد.',
      'He says “Not yet”: it has not arrived.',
      '«Not yet» = todavía no.',
    )),
  ],
  [
    g('b1-pp-s2-q1', 3, 'The price of fuel ___ a lot since January.', ['has increased', 'increased', 'increases', 'is increase'], x(
      '« Since January » → present perfect.',
      '«Since January» ← المضارع التام.',
      '“Since” → present perfect.',
      '«Since January» → present perfect.',
    )),
    g('b1-pp-s2-q2', 3, 'Our team ___ three new clients so far this month.', ['has won', 'won', 'wins', 'winning'], x(
      '« So far » (jusqu’ici) → present perfect.',
      '«So far» (حتى الآن) ← المضارع التام.',
      '“So far” → present perfect.',
      '«So far» (hasta ahora) → present perfect.',
    )),
    g('b1-pp-s2-q3', 3, 'When ___ you start working here?', ['did', 'have', 'do', 'are'], x(
      'Question « When…? » sur un moment passé → prétérit : « When did you start… ? ».',
      'سؤال «When…?» عن وقت ماضٍ ← الماضي البسيط: «When did you start…?».',
      '“When” about the past → past simple.',
      'Pregunta «When…?» sobre un momento pasado → pasado simple: «When did you start…?».',
    )),
    g('b1-pp-s2-q4', 3, 'She ___ never ___ a car.', ['has / driven', 'did / drive', 'is / driving', 'was / driven'], x(
      'Expérience (never) → has + participe : « has never driven ».',
      'تجربة (never) ← has + اسم المفعول: «has never driven».',
      'Experience → “has never driven”.',
      'Experiencia (never) → has + participio: «has never driven».',
    )),
    g('b1-pp-s2-q5', 3, 'He moved to Tunis two years ___.', ['ago', 'since', 'for', 'during'], x(
      '« Two years ago » = il y a deux ans (avec le prétérit).',
      '«Two years ago» = قبل سنتين (مع الماضي البسيط).',
      '“Ago” with the past simple.',
      '«Two years ago» = hace dos años (con el pasado simple).',
    )),
    g('b1-pp-s2-q6', 3, 'We haven’t seen Mr. Diaz ___ last week.', ['since', 'for', 'from', 'ago'], x(
      'Point de départ (last week) → « since ».',
      'نقطة بداية (last week) ← «since».',
      'Starting point → “since”.',
      'Punto de partida (last week) → «since».',
    )),
    g('b1-pp-s2-q7', 3, 'The package has ___ arrived. It’s on your desk.', ['already', 'yet', 'ever', 'still'], x(
      'Affirmatif, action déjà faite → « already ». « Yet » s’emploie en question ou négation.',
      'إثبات وفعل تم ← «already». أما «yet» ففي السؤال أو النفي.',
      'Affirmative → “already”; “yet” in questions/negatives.',
      'Afirmativa, acción ya hecha → «already». «Yet» se usa en preguntas o negaciones.',
    )),
    order('b1-pp-s2-o1', 'She has worked in sales for five years', x('Commence par « She has ».', 'ابدأ بـ «She has».', 'Start with “She has”.', 'Empieza por «She has».'), x(
      'has + participe + complément + for + durée.',
      'has + اسم المفعول + متمم + for + مدة.',
      'has + participle + for + duration.',
      'has + participio + complemento + for + duración.',
    )),
    respond('b1-pp-s2-l1', 3, 'How long have you lived in Sousse?', ['Since 2018.', 'Last year.', 'By bus.'], x(
      '« How long have you… » → une durée ou un point de départ : « Since 2018 ».',
      '«How long have you…» ← مدة أو نقطة بداية: «Since 2018».',
      'Duration or starting point.',
      '«How long have you…» → una duración o un punto de partida: «Since 2018».',
    )),
    listen('b1-pp-s2-l2', 'L4', 3, 'Hello, everyone. I’m happy to tell you that we have reached our sales target for the year. Thank you all for your hard work.', 'What has the company done?', ['Reached its sales target', 'Opened a new office', 'Hired new staff', 'Changed its name'], x(
      '« We have reached our sales target » = objectif de ventes atteint.',
      '«We have reached our sales target» = تحقيق هدف المبيعات.',
      'Reached the sales target.',
      '«We have reached our sales target» = objetivo de ventas alcanzado.',
    )),
  ],
  [
    g('b1-pp-s3-q1', 3, 'I ___ the new software yet. Is it good?', ['haven’t tried', 'didn’t try', 'don’t try', 'not tried'], x(
      '« Yet » + négation → present perfect.',
      '«Yet» + نفي ← المضارع التام.',
      '“Yet” → present perfect.',
      '«Yet» + negación → present perfect.',
    )),
    g('b1-pp-s3-q2', 3, 'The meeting ___ at 9 a.m. and finished at noon.', ['started', 'has started', 'starts', 'has start'], x(
      'Récit terminé avec des heures précises → prétérit, comme « finished ».',
      'سرد منتهٍ بساعات محددة ← الماضي البسيط مثل «finished».',
      'A finished event with times → past simple.',
      'Relato terminado con horas concretas → pasado simple, como «finished».',
    )),
    g('b1-pp-s3-q3', 3, 'How many countries ___ you visited?', ['have', 'did', 'do', 'are'], x(
      'Participe « visited » + expérience → « have you visited ».',
      'اسم المفعول «visited» مع التجربة ← «have you visited».',
      '“Have you visited”.',
      'Participio «visited» + experiencia → «have you visited».',
    )),
    g('b1-pp-s3-q4', 3, 'Ms. Ito ___ in Paris last year.', ['was', 'has been', 'is', 'have been'], x(
      '« Last year » → prétérit : « was ».',
      '«Last year» ← الماضي البسيط: «was».',
      '“Last year” → past simple.',
      '«Last year» → pasado simple: «was».',
    )),
    g('b1-pp-s3-q5', 3, 'We have had this printer ___ 2020.', ['since', 'for', 'in', 'ago'], x(
      'Point de départ (2020) avec le present perfect → « since ».',
      'نقطة بداية (2020) مع المضارع التام ← «since».',
      'Starting point → “since”.',
      'Punto de partida (2020) con el present perfect → «since».',
    )),
    g('b1-pp-s3-q6', 3, 'Have you ___ finished the report? That was fast!', ['already', 'yet', 'since', 'ago'], x(
      'Surprise devant une action déjà faite → « already » (entre have et le participe).',
      'دهشة من فعل تم مسبقًا ← «already» (بين have واسم المفعول).',
      'Surprise → “already”.',
      'Sorpresa ante algo ya hecho → «already» (entre have y el participio).',
    )),
    g('b1-pp-s3-q7', 3, 'The company has ___ its prices for the first time in five years.', ['raised', 'risen', 'rose', 'rising'], x(
      '« Raise » (augmenter quelque chose) a un complément : « has raised its prices ». « Rise » n’en a pas.',
      '«Raise» (يرفع شيئًا) يأخذ مفعولًا: «has raised its prices»، أما «rise» فلا.',
      '“Raise” takes an object; “rise” does not.',
      '«Raise» (subir algo) lleva complemento: «has raised its prices». «Rise» no.',
    )),
    order('b1-pp-s3-o1', 'I have never visited the factory', x('« never » se place après « have ».', '«never» بعد «have».', '“never” goes after “have”.', '«never» va después de «have».'), x(
      'have + never + participe.',
      'have + never + اسم المفعول.',
      'have + never + participle.',
      'have + never + participio.',
    )),
    respond('b1-pp-s3-l1', 3, 'Did you call the supplier?', ['Yes, I called him an hour ago.', 'I have a supplier.', 'No, he is a supplier.'], x(
      'Oui + moment précis au prétérit (an hour ago).',
      'نعم + وقت محدد بالماضي البسيط (an hour ago).',
      'Yes, with a past time.',
      'Sí + momento concreto en pasado simple (an hour ago).',
    )),
    listen('b1-pp-s3-l2', 'L3', 3, 'M: Is Ms. Lopez in her office?\nW: No, she has just left for the airport. She’s flying to Madrid.', 'Where is Ms. Lopez going?', ['To the airport', 'To her office', 'To a meeting', 'To the train station'], x(
      '« She has just left for the airport » = elle vient de partir pour l’aéroport.',
      '«She has just left for the airport» = غادرت للتو إلى المطار.',
      'To the airport.',
      '«She has just left for the airport» = acaba de salir hacia el aeropuerto.',
    )),
  ],
);
