import type { Unit } from '../../../../types';
import { lesson, unit, x } from '../../../curriculum/build';
import { ru2 } from '../build';

const MARRAKECH =
  'We arrived in Marrakech (1) ___ a hot afternoon in July. Our hotel was in the heart of the medina, so we could walk everywhere (2) ___ needing a taxi. On the first evening, we ate (3) ___ most delicious tagine we had ever tasted, in a tiny restaurant near the main square.';

const CODING =
  'Youssef never took a coding class: at sixteen, he taught (1) ___ to code with free videos online. He practised every evening, (2) ___ though he had a lot of homework. Within a year he had built his first app, a simple game (3) ___ helped younger children practise their times tables.';

/** Unit fce-u02: Part 2 open cloze, grammar words. */
export const fceU02: Unit = unit(
  {
    id: 'fce-u02',
    emoji: '🔤',
    level: 3,
    part: 'RU2',
    title: x('Texte à trous libre', 'النص ذو الفراغات المفتوحة', 'Open cloze: grammar words', 'Texto con huecos abierto'),
    subtitle: x('Articles, prépositions, auxiliaires, pronoms, quantifieurs', 'أدوات التعريف وحروف الجر والأفعال المساعدة والضمائر والمحددات الكمية', 'Articles, prepositions, auxiliaries, pronouns, quantifiers', 'Artículos, preposiciones, auxiliares, pronombres, cuantificadores'),
    lesson: lesson(
      x(
        'Réussir la Partie 2 : trouver le seul petit mot grammatical qui manque.',
        'النجاح في الجزء الثاني: إيجاد الكلمة النحوية الصغيرة الوحيدة الناقصة.',
        'Succeed in Part 2: find the one short grammar word that is missing.',
        'Aprobar la Parte 2: encontrar la única palabra gramatical que falta.',
      ),
      [
        x(
          'Partie 2 : 8 trous, un seul mot par trou, sans options. Lisez d’abord tout le texte pour en saisir le sens général.',
          'الجزء الثاني: 8 فراغات، كلمة واحدة لكل فراغ، دون خيارات. اقرأ النص كله أولاً لتفهم معناه العام.',
          'Part 2: 8 gaps, one word each, no options. Read the whole text first.',
          'Parte 2: 8 huecos, una sola palabra por hueco, sin opciones. Lee primero todo el texto para captar el sentido general.',
        ),
        x(
          'Regardez les mots avant et après le trou : un nom seul demande souvent un article (a, an, the), un verbe un auxiliaire (have, does), un nom après une virgule un pronom relatif (who, which).',
          'انظر إلى الكلمات قبل الفراغ وبعده: الاسم وحده يتطلب غالباً أداة (a وan وthe)، والفعل يتطلب فعلاً مساعداً (have وdoes)، والاسم بعد الفاصلة يتطلب ضميراً موصولاً (who وwhich).',
          'Check the words before and after the gap: article, auxiliary or relative pronoun?',
          'Mira las palabras antes y después del hueco: un sustantivo suele pedir artículo (a, an, the), un verbo un auxiliar (have, does), y tras una coma un relativo (who, which).',
        ),
        x(
          'Mots fréquents : prépositions (on, since, without), quantifieurs (any, many, such), pronoms (himself, who, which), mots de liaison (even, neither, nor).',
          'كلمات متكررة: حروف الجر (on وsince وwithout)، والمحددات الكمية (any وmany وsuch)، والضمائر (himself وwho وwhich)، وأدوات الربط (even وneither وnor).',
          'Frequent words: on, since, without, any, many, who, which, neither.',
          'Palabras frecuentes: preposiciones (on, since, without), cuantificadores (any, many, such), pronombres (himself, who, which), conectores (even, neither, nor).',
        ),
        x(
          'L’orthographe compte. N’écrivez jamais de contraction ni deux mots.',
          'الإملاء مهم. لا تكتب أبداً صيغة مختصرة ولا كلمتين.',
          'Spelling counts. Never write a contraction or two words.',
          'La ortografía cuenta. No escribas nunca una contracción ni dos palabras.',
        ),
      ],
      'My cousin Inès, who lives in Rabat, has never been to the Sahara.',
      x(
        '« who » : relatif pour une personne ; « has » : auxiliaire du present perfect ; « the » devant un nom géographique.',
        '«who»: ضمير موصول للأشخاص، و«has»: فعل مساعد للمضارع التام، و«the» قبل اسم جغرافي.',
        '“who” for a person; “has” is the auxiliary; “the Sahara”.',
        '«who»: relativo para personas; «has»: auxiliar del present perfect; «the» ante un nombre geográfico.',
      ),
    ),
  },
  [
    ru2('fce-u02-s1-q1', 3, '(1) We arrived in Marrakech ___ a hot afternoon in July.', ['on', 'during'], x(
      '« on » + un jour ou une partie de journée précise (on a hot afternoon) ; « during » est aussi accepté.',
      '«on» + يوم أو جزء محدد من اليوم (on a hot afternoon)، وتُقبل أيضاً «during».',
      '“on” + a specific afternoon (“during” is also accepted).',
      '«on» + un día o una parte concreta del día (on a hot afternoon); también se acepta «during».',
    ), MARRAKECH),
    ru2('fce-u02-s1-q2', 3, '(2) We could walk everywhere ___ needing a taxi.', ['without'], x(
      '« without » + -ing = sans : l’hôtel était central, pas besoin de taxi.',
      '«without» + صيغة -ing = دون: الفندق في المركز فلا حاجة إلى سيارة أجرة.',
      '“without” + -ing: no taxi was needed.',
      '«without» + -ing = sin: el hotel era céntrico, no hacía falta taxi.',
    ), MARRAKECH),
    ru2('fce-u02-s1-q3', 3, '(3) We ate ___ most delicious tagine we had ever tasted.', ['the'], x(
      'Superlatif : « the most delicious » ; « we had ever tasted » le confirme.',
      'صيغة التفضيل: «the most delicious»، وعبارة «we had ever tasted» تؤكد ذلك.',
      'Superlative: “the most delicious”.',
      'Superlativo: «the most delicious»; «we had ever tasted» lo confirma.',
    ), MARRAKECH),
    ru2('fce-u02-s1-q4', 4, 'My keys aren’t in my bag, and they aren’t ___ else in the flat either. Have you seen them?', ['anywhere'], x(
      'Phrase négative (aren’t … either) : on emploie « anywhere else » (nulle part ailleurs), pas « somewhere ».',
      'في الجملة المنفية (aren’t … either) نستعمل «anywhere else» (في أي مكان آخر)، لا «somewhere».',
      'Negative sentence (aren’t … either) → “anywhere else”.',
      'Frase negativa (aren’t … either): se usa «anywhere else» (en ninguna otra parte), no «somewhere».',
    )),
    ru2('fce-u02-s1-q5', 3, 'Ahmed is the student ___ won the science competition.', ['who', 'that'], x(
      'Pronom relatif sujet pour une personne : « who » (ou « that », relative déterminative).',
      'ضمير موصول فاعل لشخص: «who» (أو «that» في الجملة الموصولة المحددة).',
      'Relative pronoun for a person: “who” or “that”.',
      'Pronombre relativo sujeto para una persona: «who» (o «that», relativa especificativa).',
    )),
    ru2('fce-u02-s1-q6', 3, 'I’ve lived in Valencia ___ 2019.', ['since'], x(
      'Present perfect + point de départ (2019) → « since ».',
      'المضارع التام + نقطة بداية (2019) ← «since».',
      'Starting point (2019) → “since”.',
      'Present perfect + punto de partida (2019) → «since».',
    )),
    ru2('fce-u02-s1-q7', 3, 'Neither Sara ___ her brother has been to Asia.', ['nor'], x(
      '« neither » va toujours avec « nor » (ni… ni…).',
      '«neither» تأتي دائماً مع «nor» (لا… ولا…).',
      '“neither … nor”.',
      '«neither» va siempre con «nor» (ni… ni…).',
    )),
    ru2('fce-u02-s1-q8', 4, 'The festival, ___ takes place every August, attracts visitors from all over the world.', ['which'], x(
      'Relative entre virgules (non déterminative) pour une chose : « which » ; « that » est impossible après une virgule.',
      'جملة موصولة بين فاصلتين (غير محددة) لشيء: «which»، ولا يجوز «that» بعد الفاصلة.',
      'Non-defining clause for a thing: “which”, never “that”.',
      'Relativa entre comas (explicativa) para una cosa: «which»; «that» es imposible tras una coma.',
    )),
    ru2('fce-u02-s1-q9', 3, '___ you ever tried surfing? It’s great fun.', ['Have'], x(
      'Expérience (ever) au présent → present perfect : « Have you ever tried…? ».',
      'تجربة (ever) في الحاضر ← المضارع التام: «Have you ever tried…?».',
      'Experience with “ever” → “Have you ever…?”.',
      'Experiencia (ever) en presente → present perfect: «Have you ever tried…?».',
    )),
    ru2('fce-u02-s1-q10', 4, 'Lina didn’t enjoy the film, and ___ did I.', ['neither', 'nor'], x(
      'Accord avec une phrase négative : « neither did I » (ou « nor did I ») = moi non plus.',
      'الموافقة على جملة منفية: «neither did I» (أو «nor did I») = ولا أنا.',
      'Agreeing with a negative: “neither / nor did I”.',
      'Acuerdo con una frase negativa: «neither did I» (o «nor did I») = yo tampoco.',
    )),
  ],
  [
    ru2('fce-u02-s2-q1', 3, '(1) At sixteen, he taught ___ to code with free videos online.', ['himself'], x(
      'Pronom réfléchi : « teach himself » = apprendre seul ; « never took a coding class » le confirme.',
      'ضمير انعكاسي: «teach himself» = يتعلم بنفسه، وعبارة «never took a coding class» تؤكد ذلك.',
      'Reflexive: “teach himself” = learn alone.',
      'Pronombre reflexivo: «teach himself» = aprender solo; «never took a coding class» lo confirma.',
    ), CODING),
    ru2('fce-u02-s2-q2', 4, '(2) He practised every evening, ___ though he had a lot of homework.', ['even'], x(
      '« even though » = bien que (renforce l’opposition avec « a lot of homework »).',
      '«even though» = على الرغم من أن (تقوّي التعارض مع «a lot of homework»).',
      '“even though” = although.',
      '«even though» = aunque (refuerza el contraste con «a lot of homework»).',
    ), CODING),
    ru2('fce-u02-s2-q3', 3, '(3) He built a simple game ___ helped younger children practise their times tables.', ['which', 'that'], x(
      'Relative déterminative pour une chose (a game) : « which » ou « that ».',
      'جملة موصولة محددة لشيء (a game): «which» أو «that».',
      'Defining clause for a thing: “which” or “that”.',
      'Relativa especificativa para una cosa (a game): «which» o «that».',
    ), CODING),
    ru2('fce-u02-s2-q4', 3, 'Mehdi wants to become ___ engineer like his mother.', ['an'], x(
      'Métier après « become » : article indéfini, « an » devant un son voyelle (engineer).',
      'المهنة بعد «become»: أداة نكرة، و«an» قبل صوت متحرك (engineer).',
      'Job → indefinite article; “an” before a vowel sound.',
      'Profesión tras «become»: artículo indefinido, «an» ante sonido vocálico (engineer).',
    )),
    ru2('fce-u02-s2-q5', 3, 'There were so ___ people at the concert that we couldn’t see the stage.', ['many'], x(
      '« so many » + nom pluriel dénombrable + « that » (conséquence : on ne voyait pas la scène).',
      '«so many» + اسم جمع معدود + «that» (النتيجة: لم نستطع رؤية المسرح).',
      '“so many” + plural noun + “that”.',
      '«so many» + sustantivo plural contable + «that» (consecuencia: no veíamos el escenario).',
    )),
    ru2('fce-u02-s2-q6', 3, '___ your sister still live near the university, or has she moved?', ['Does'], x(
      'Question au présent simple avec « your sister » (3e personne) : « Does » + base verbale (live).',
      'سؤال في المضارع البسيط مع «your sister» (الغائب المفرد): «Does» + المصدر (live).',
      'Present simple question, third person: “Does … live?”.',
      'Pregunta en presente simple con «your sister» (3.ª persona): «Does» + infinitivo (live).',
    )),
    ru2('fce-u02-s2-q7', 3, 'Each ___ the students received a certificate at the end of the course.', ['of'], x(
      '« each of » + the + nom pluriel.',
      '«each of» + the + اسم جمع.',
      '“each of the” + plural noun.',
      '«each of» + the + sustantivo plural.',
    )),
    ru2('fce-u02-s2-q8', 3, 'I’m really looking forward ___ seeing you next week.', ['to'], x(
      '« look forward to » + -ing : « to » est ici une préposition.',
      '«look forward to» + صيغة -ing: «to» هنا حرف جر.',
      '“look forward to” + -ing.',
      '«look forward to» + -ing: «to» es aquí una preposición.',
    )),
    ru2('fce-u02-s2-q9', 3, 'This is the town ___ my father grew up.', ['where'], x(
      'Relatif de lieu sans préposition à la fin : « where » (= in which).',
      'ضمير موصول للمكان دون حرف جر في الآخر: «where» (= in which).',
      'Place, no preposition at the end → “where”.',
      'Relativo de lugar sin preposición al final: «where» (= in which).',
    )),
    ru2('fce-u02-s2-q10', 4, 'She has ___ a lot of money that she doesn’t know what to spend it on.', ['such'], x(
      '« such a lot of » + nom + « that » (conséquence).',
      '«such a lot of» + اسم + «that» (النتيجة).',
      '“such a lot of … that”.',
      '«such a lot of» + sustantivo + «that» (consecuencia).',
    )),
  ],
);
