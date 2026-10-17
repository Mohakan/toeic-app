import type { Unit } from '../../../../types';
import { lesson, order, unit, x } from '../../../curriculum/build';
import { ru1 } from '../build';

const VOLUNTEER =
  'Last summer, Yasmine decided to (1) ___ part in a volunteer project in a village in the Atlas Mountains. She had always been keen (2) ___ learning about rural life, and helping to build a small school (3) ___ a real difference to her confidence.';

const CYCLING =
  'When Matteo moved to Lyon for his studies, he found it hard to (1) ___ friends. Then he decided to (2) ___ advantage of the city’s excellent bike lanes and set up a weekend cycling club. The club is now so popular that Matteo is a little worried (3) ___ finding enough leaders for all the rides.';

const DUNES =
  'Every spring, Anouar and his friends from Tozeur (1) ___ a real effort to clean up the desert trails near their town. Most visitors are not (2) ___ of how much plastic is left in the sand, so the group also (3) ___ research into where the rubbish comes from and shares the results online.';

/** Unit fce-u01: Part 1 multiple-choice cloze, collocations and fixed phrases. */
export const fceU01: Unit = unit(
  {
    id: 'fce-u01',
    emoji: '🧩',
    level: 3,
    part: 'RU1',
    title: x('Collocations et expressions figées', 'المتلازمات اللفظية والتعابير الثابتة', 'Collocations and fixed phrases', 'Colocaciones y expresiones fijas'),
    subtitle: x('make / do, take, pay, catch, adjectif + préposition', 'make / do وtake وpay وcatch، الصفة + حرف الجر', 'make / do, take, pay, catch, adjective + preposition', 'make / do, take, pay, catch, adjetivo + preposición'),
    lesson: lesson(
      x(
        'Réussir la Partie 1 : choisir le mot qui forme une collocation avec les mots autour du trou.',
        'النجاح في الجزء الأول: اختيار الكلمة التي تشكّل متلازمة لفظية مع الكلمات المحيطة بالفراغ.',
        'Succeed in Part 1: choose the word that forms a collocation with the words around the gap.',
        'Aprobar la Parte 1: elegir la palabra que forma colocación con las palabras alrededor del hueco.',
      ),
      [
        x(
          'Partie 1 : 8 trous, 4 options de sens proche. Une seule va avec les mots voisins : lisez toute la phrase, surtout le mot qui suit le trou.',
          'الجزء الأول: 8 فراغات و4 خيارات متقاربة المعنى. خيار واحد فقط يتلاءم مع الكلمات المجاورة: اقرأ الجملة كاملة، وخاصة الكلمة التي تلي الفراغ.',
          'Part 1: 8 gaps, 4 similar options. Only one fits the nearby words: read the whole sentence, especially the word after the gap.',
          'Parte 1: 8 huecos, 4 opciones parecidas. Solo una encaja con las palabras vecinas: lee toda la frase, sobre todo la palabra que sigue al hueco.',
        ),
        x(
          'make : a decision, a mistake, progress, friends, a difference. do : homework, a favour, the washing-up, research.',
          'make: a decision وa mistake وprogress وfriends وa difference. وdo: homework وa favour وthe washing-up وresearch.',
          'make: a mistake, progress, friends, a difference. do: homework, a favour, the washing-up.',
          'make: a decision, a mistake, progress, friends, a difference. do: homework, a favour, the washing-up, research.',
        ),
        x(
          'take part in, take a break, take advantage of, take this opportunity ; pay attention to ; catch a cold, catch someone’s eye.',
          'take part in وtake a break وtake advantage of وtake this opportunity، وpay attention to، وcatch a cold وcatch someone’s eye.',
          'take part / a break / advantage of; pay attention to; catch someone’s eye.',
          'take part in, take a break, take advantage of, take this opportunity; pay attention to; catch a cold, catch someone’s eye.',
        ),
        x(
          'Adjectif + préposition : good at, keen on, interested in, worried about, proud of, responsible for, famous for.',
          'الصفة + حرف الجر: good at وkeen on وinterested in وworried about وproud of وresponsible for وfamous for.',
          'Adjective + preposition: good at, keen on, proud of, famous for.',
          'Adjetivo + preposición: good at, keen on, interested in, worried about, proud of, responsible for, famous for.',
        ),
      ],
      'Yasmine made a lot of progress and took part in every activity.',
      x(
        '« made progress » (et non « did ») ; « took part in » (et non « made part »).',
        '«made progress» (وليس «did»)، و«took part in» (وليس «made part»).',
        '“made progress”, “took part in”.',
        '«made progress» (no «did»); «took part in» (no «made part»).',
      ),
    ),
  },
  [
    ru1('fce-u01-s1-q1', 3, '(1) Last summer, Yasmine decided to ___ part in a volunteer project.', ['take', 'make', 'have', 'get'], x(
      'Expression figée : « take part in » = participer à.',
      'تعبير ثابت: «take part in» = يشارك في.',
      'Fixed phrase: “take part in”.',
      'Expresión fija: «take part in» = participar en.',
    ), VOLUNTEER),
    ru1('fce-u01-s1-q2', 3, '(2) She had always been keen ___ learning about rural life.', ['on', 'in', 'at', 'of'], x(
      '« keen on » + nom ou -ing = passionné par.',
      '«keen on» + اسم أو صيغة -ing = مولع بـ.',
      '“keen on” + noun or -ing.',
      '«keen on» + sustantivo o -ing = entusiasta de.',
    ), VOLUNTEER),
    ru1('fce-u01-s1-q3', 3, '(3) Helping to build a small school ___ a real difference to her confidence.', ['made', 'did', 'gave', 'put'], x(
      'Collocation : « make a difference (to) » = avoir un effet important.',
      'متلازمة: «make a difference (to)» = يُحدث فرقاً.',
      'Collocation: “make a difference”.',
      'Colocación: «make a difference (to)» = marcar la diferencia.',
    ), VOLUNTEER),
    ru1('fce-u01-s1-q4', 3, 'Could you ___ me a favour and water my plants while I’m away?', ['do', 'make', 'give', 'take'], x(
      'On dit « do someone a favour » = rendre service.',
      'نقول «do someone a favour» = يُسدي معروفاً.',
      'We say “do someone a favour”.',
      'Se dice «do someone a favour» = hacer un favor.',
    )),
    ru1('fce-u01-s1-q5', 3, 'Please ___ attention to the safety instructions before you start the climb.', ['pay', 'take', 'keep', 'put'], x(
      'Collocation : « pay attention to » = faire attention à.',
      'متلازمة: «pay attention to» = ينتبه إلى.',
      'Collocation: “pay attention to”.',
      'Colocación: «pay attention to» = prestar atención a.',
    )),
    ru1('fce-u01-s1-q6', 4, 'The colourful poster ___ my eye as I walked past the gallery.', ['caught', 'took', 'kept', 'won'], x(
      '« catch someone’s eye » = attirer le regard de quelqu’un.',
      '«catch someone’s eye» = يلفت نظر شخص ما.',
      '“catch someone’s eye” = attract attention.',
      '«catch someone’s eye» = llamar la atención de alguien.',
    )),
    ru1('fce-u01-s1-q7', 3, 'Omar has ___ a lot of progress with his Spanish since he moved to Seville.', ['made', 'done', 'had', 'got'], x(
      'Collocation : « make progress » (jamais « do progress »).',
      'متلازمة: «make progress» (ولا نقول «do progress»).',
      'Collocation: “make progress”.',
      'Colocación: «make progress» (nunca «do progress»).',
    )),
    ru1('fce-u01-s1-q8', 3, 'Leila is really good ___ solving maths puzzles.', ['at', 'in', 'on', 'for'], x(
      'Adjectif + préposition : « good at » + compétence.',
      'صفة + حرف جر: «good at» + مهارة.',
      '“good at” + a skill.',
      'Adjetivo + preposición: «good at» + habilidad.',
    )),
    ru1('fce-u01-s1-q9', 4, 'I’d like to ___ this opportunity to thank everyone who helped organise the festival.', ['take', 'make', 'have', 'get'], x(
      'Expression figée : « take this opportunity to » = profiter de l’occasion pour.',
      'تعبير ثابت: «take this opportunity to» = أغتنم هذه الفرصة لـ.',
      'Fixed phrase: “take this opportunity to”.',
      'Expresión fija: «take this opportunity to» = aprovechar la ocasión para.',
    )),
    order('fce-u01-s1-o1', 'She has made a lot of new friends at university', x(
      'Commence par « She has made ».',
      'ابدأ بـ «She has made».',
      'Start with “She has made”.',
      'Empieza por «She has made».',
    ), x(
      '« make friends » : sujet + has made + a lot of new friends + lieu.',
      '«make friends»: الفاعل + has made + a lot of new friends + المكان.',
      '“make friends”: subject + has made + object + place.',
      '«make friends»: sujeto + has made + a lot of new friends + lugar.',
    )),
  ],
  [
    ru1('fce-u01-s2-q1', 3, '(1) When Matteo moved to Lyon, he found it hard to ___ friends.', ['make', 'do', 'get', 'take'], x(
      'Collocation : « make friends » = se faire des amis.',
      'متلازمة: «make friends» = يكوّن صداقات.',
      'Collocation: “make friends”.',
      'Colocación: «make friends» = hacer amigos.',
    ), CYCLING),
    ru1('fce-u01-s2-q2', 3, '(2) He decided to ___ advantage of the city’s excellent bike lanes.', ['take', 'make', 'have', 'get'], x(
      'Expression figée : « take advantage of » = profiter de.',
      'تعبير ثابت: «take advantage of» = يستفيد من.',
      'Fixed phrase: “take advantage of”.',
      'Expresión fija: «take advantage of» = aprovechar.',
    ), CYCLING),
    ru1('fce-u01-s2-q3', 3, '(3) Matteo is a little worried ___ finding enough leaders for all the rides.', ['about', 'on', 'at', 'with'], x(
      'Adjectif + préposition : « worried about » + -ing.',
      'صفة + حرف جر: «worried about» + صيغة -ing.',
      '“worried about” + -ing.',
      'Adjetivo + preposición: «worried about» + -ing.',
    ), CYCLING),
    ru1('fce-u01-s2-q4', 3, 'Nadia ___ a mistake in the last question but still passed the exam.', ['made', 'did', 'took', 'had'], x(
      'Collocation : « make a mistake » = faire une erreur.',
      'متلازمة: «make a mistake» = يرتكب خطأً.',
      'Collocation: “make a mistake”.',
      'Colocación: «make a mistake» = cometer un error.',
    )),
    ru1('fce-u01-s2-q5', 3, 'I don’t mind ___ the washing-up if you cook dinner tonight.', ['doing', 'making', 'taking', 'having'], x(
      'Tâches ménagères avec « do » : « do the washing-up ».',
      'الأعمال المنزلية تُستعمل مع «do»: «do the washing-up».',
      'Housework takes “do”: “do the washing-up”.',
      'Las tareas de casa van con «do»: «do the washing-up».',
    )),
    ru1('fce-u01-s2-q6', 4, 'Sorry, I didn’t ___ what you said. Could you repeat it?', ['catch', 'take', 'hold', 'keep'], x(
      '« catch what someone says » = bien entendre ce que quelqu’un dit.',
      '«catch what someone says» = يسمع ما يقوله شخص ما بوضوح.',
      '“catch” = hear clearly.',
      '«catch what someone says» = oír bien lo que alguien dice.',
    )),
    ru1('fce-u01-s2-q7', 3, 'Let’s ___ a break. We’ve been studying for three hours.', ['take', 'make', 'do', 'put'], x(
      'Collocation : « take a break » = faire une pause.',
      'متلازمة: «take a break» = يأخذ استراحة.',
      'Collocation: “take a break”.',
      'Colocación: «take a break» = tomarse un descanso.',
    )),
    ru1('fce-u01-s2-q8', 3, 'The city council is responsible ___ keeping the parks clean.', ['for', 'of', 'to', 'with'], x(
      'Adjectif + préposition : « responsible for » + -ing.',
      'صفة + حرف جر: «responsible for» + صيغة -ing.',
      '“responsible for” + -ing.',
      'Adjetivo + preposición: «responsible for» + -ing.',
    )),
    ru1('fce-u01-s2-q9', 3, 'Chefchaouen is famous ___ its blue-painted houses.', ['for', 'of', 'by', 'with'], x(
      'Adjectif + préposition : « famous for » = célèbre pour.',
      'صفة + حرف جر: «famous for» = مشهور بـ.',
      '“famous for” = known for.',
      'Adjetivo + preposición: «famous for» = famoso por.',
    )),
    order('fce-u01-s2-o1', 'Karim is very proud of his little sister', x(
      'Commence par « Karim is ».',
      'ابدأ بـ «Karim is».',
      'Start with “Karim is”.',
      'Empieza por «Karim is».',
    ), x(
      'Adjectif + préposition : « proud of » + nom.',
      'صفة + حرف جر: «proud of» + اسم.',
      '“proud of” + noun.',
      'Adjetivo + preposición: «proud of» + sustantivo.',
    )),
  ],
  [
    ru1('fce-u01-s3-q1', 3, '(1) Every spring, Anouar and his friends ___ a real effort to clean up the desert trails near their town.', ['make', 'do', 'take', 'have'], x(
      'Collocation : « make an effort » = faire un effort (jamais « do an effort »).',
      'متلازمة: «make an effort» = يبذل جهدًا (ولا نقول «do an effort»).',
      'Collocation: “make an effort”, never “do an effort”.',
      'Colocación: «make an effort» = hacer un esfuerzo (nunca «do an effort»).',
    ), DUNES),
    ru1('fce-u01-s3-q2', 4, '(2) Most visitors are not ___ of how much plastic is left in the sand.', ['aware', 'familiar', 'sensitive', 'alert'], x(
      'La préposition « of » décide : « aware of » = conscient de. On dit « familiar with », « sensitive to », « alert to ».',
      'حرف الجر «of» هو الحاسم: «aware of» = مدرك لـ. أما «familiar» فتأتي مع «with»، و«sensitive» و«alert» مع «to».',
      '“of” decides: “aware of”; “familiar with”, “sensitive/alert to”.',
      'La preposición «of» decide: «aware of» = consciente de. Se dice «familiar with», «sensitive to», «alert to».',
    ), DUNES),
    ru1('fce-u01-s3-q3', 3, '(3) The group also ___ research into where the rubbish comes from.', ['does', 'makes', 'takes', 'gets'], x(
      'Collocation : « do research (into) » = faire des recherches sur ; « make research » est incorrect.',
      'متلازمة: «do research (into)» = يُجري بحثًا في، ولا يصح «make research».',
      'Collocation: “do research into”.',
      'Colocación: «do research (into)» = investigar sobre; «make research» es incorrecto.',
    ), DUNES),
    ru1('fce-u01-s3-q4', 3, 'Grandma Fatima loves it when we ___ her a visit on Sunday afternoons.', ['pay', 'make', 'do', 'take'], x(
      'Expression figée : « pay someone a visit » = rendre visite à quelqu’un.',
      'تعبير ثابت: «pay someone a visit» = يزور شخصًا ما.',
      'Fixed phrase: “pay someone a visit”.',
      'Expresión fija: «pay someone a visit» = hacerle una visita a alguien.',
    )),
    ru1('fce-u01-s3-q5', 3, 'The old wooden roof ___ fire during the storm, but luckily nobody was hurt.', ['caught', 'lit', 'burned', 'made'], x(
      'Collocation : « catch fire » = prendre feu ; « lit » et « burned » ne se construisent pas avec « fire » ici.',
      'متلازمة: «catch fire» = تشتعل فيه النار؛ ولا تُستعمل «lit» ولا «burned» مع «fire» بهذا المعنى.',
      'Collocation: “catch fire” = start burning.',
      'Colocación: «catch fire» = prenderse fuego; «lit» y «burned» no se combinan así con «fire».',
    )),
    ru1('fce-u01-s3-q6', 3, 'Lucía’s accent is very similar ___ her mother’s, so people often confuse them on the phone.', ['to', 'with', 'as', 'from'], x(
      'Adjectif + préposition : « similar to » = semblable à.',
      'صفة + حرف جر: «similar to» = مشابه لـ.',
      '“similar to” = like.',
      'Adjetivo + preposición: «similar to» = parecido a.',
    )),
    ru1('fce-u01-s3-q7', 3, 'I always ___ my best in exams, even when the questions are really difficult.', ['do', 'make', 'take', 'have'], x(
      'Expression figée : « do your best » = faire de son mieux.',
      'تعبير ثابت: «do your best» = يبذل قصارى جهده.',
      'Fixed phrase: “do your best”.',
      'Expresión fija: «do your best» = hacer todo lo posible.',
    )),
    ru1('fce-u01-s3-q8', 4, 'With the right training, Yuki is perfectly capable ___ running a half marathon in under two hours.', ['of', 'for', 'to', 'at'], x(
      'Adjectif + préposition : « capable of » + -ing ; « able » se construit avec « to », pas « capable ».',
      'صفة + حرف جر: «capable of» + صيغة ‎-ing؛ أما «able» فتأتي مع «to».',
      '“capable of” + -ing (but “able to”).',
      'Adjetivo + preposición: «capable of» + -ing; «able» va con «to», no «capable».',
    )),
    ru1('fce-u01-s3-q9', 4, 'The storm ___ a lot of damage to the olive trees on my uncle’s farm near Sfax.', ['did', 'made', 'gave', 'put'], x(
      'Collocation : « do damage (to) » = causer des dégâts ; « make damage » est une erreur fréquente.',
      'متلازمة: «do damage (to)» = يُلحق ضررًا بـ، و«make damage» خطأ شائع.',
      'Collocation: “do damage to”.',
      'Colocación: «do damage (to)» = causar daños; «make damage» es un error frecuente.',
    )),
    ru1('fce-u01-s3-q10', 3, 'After weeks of thinking, Halima finally ___ a decision about which job offer to accept.', ['made', 'did', 'got', 'had'], x(
      'Collocation : « make a decision » = prendre une décision.',
      'متلازمة: «make a decision» = يتخذ قرارًا.',
      'Collocation: “make a decision”.',
      'Colocación: «make a decision» = tomar una decisión.',
    )),
  ],
);
