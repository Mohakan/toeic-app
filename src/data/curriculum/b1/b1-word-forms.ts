import type { Unit } from '../../../types';
import { g, lesson, unit, x } from '../build';

export const b1WordForms: Unit = unit(
  {
    id: 'b1-word-forms',
    emoji: '🧬',
    level: 3,
    part: 'R5',
    title: x('Les familles de mots', 'عائلات الكلمات', 'Word families', 'Las familias de palabras'),
    subtitle: x('Nom, verbe, adjectif ou adverbe ?', 'اسم أم فعل أم صفة أم حال؟', 'Noun, verb, adjective or adverb?', '¿Sustantivo, verbo, adjetivo o adverbio?'),
    lesson: lesson(
      x('Trouver la bonne forme d’un mot grâce à sa place dans la phrase. C’est le type de question le plus fréquent en Partie 5.', 'إيجاد الشكل الصحيح للكلمة بحسب موقعها في الجملة. إنه النوع الأكثر تكرارًا في الجزء 5.', 'Find the right word form from its position. It is the most frequent Part 5 question.', 'Encontrar la forma correcta de una palabra según su posición en la frase. Es el tipo de pregunta más frecuente en la Parte 5.'),
      [
        x('Après un article (a, the) ou un possessif → nom : the decision.', 'بعد أداة تعريف (a, the) أو ضمير ملكية ← اسم: the decision.', 'After an article or possessive → noun.', 'Después de un artículo (a, the) o de un posesivo → sustantivo: the decision.'),
        x('Devant un nom → adjectif : a careful decision.', 'قبل الاسم ← صفة: a careful decision.', 'Before a noun → adjective.', 'Delante de un sustantivo → adjetivo: a careful decision.'),
        x('Pour modifier un verbe → adverbe en -ly : decide carefully.', 'لوصف الفعل ← حال ينتهي بـ -ly: decide carefully.', 'To modify a verb → -ly adverb.', 'Para modificar un verbo → adverbio en -ly: decide carefully.'),
        x('Suffixes : -tion, -ment, -ness (nom) · -ful, -ive, -able (adjectif) · -ly (adverbe).', 'اللواحق: -tion و-ment و-ness (اسم) · -ful و-ive و-able (صفة) · -ly (حال).', 'Suffixes: -tion/-ment/-ness nouns; -ful/-ive/-able adjectives; -ly adverbs.', 'Sufijos: -tion, -ment, -ness (sustantivo) · -ful, -ive, -able (adjetivo) · -ly (adverbio).'),
      ],
      'The team worked efficiently and delivered an impressive result.',
      x('« efficiently » modifie le verbe ; « impressive » qualifie le nom.', '«efficiently» تصف الفعل و«impressive» تصف الاسم.', '“efficiently” modifies the verb; “impressive” describes the noun.', '«efficiently» modifica al verbo; «impressive» califica al sustantivo.'),
    ),
  },
  [
    g('b1-wf-q1', 3, 'The company made a ___ decision to reduce costs.', ['difficult', 'difficulty', 'difficultly', 'difficulties'], x(
      'Devant le nom « decision » → adjectif.',
      'قبل الاسم «decision» ← صفة.',
      'Before the noun → adjective.',
      'Delante del sustantivo «decision» → adjetivo.',
    )),
    g('b1-wf-q2', 3, 'Please read the instructions ___ before using the machine.', ['carefully', 'careful', 'care', 'caring'], x(
      'Le mot modifie le verbe « read » → adverbe en -ly.',
      'الكلمة تصف الفعل «read» ← حال بـ -ly.',
      'It modifies the verb → adverb.',
      'La palabra modifica al verbo «read» → adverbio en -ly.',
    )),
    g('b1-wf-q3', 3, 'The ___ of the new branch is planned for September.', ['opening', 'open', 'opened', 'openly'], x(
      'Après « The » et avant « of » → nom : « the opening ».',
      'بعد «The» وقبل «of» ← اسم: «the opening».',
      'After “The” → noun.',
      'Después de «The» y antes de «of» → sustantivo: «the opening».',
    )),
    g('b1-wf-q4', 3, 'Our customers are very ___ with the new service.', ['satisfied', 'satisfy', 'satisfaction', 'satisfying'], x(
      '« Be satisfied with » = être satisfait de (adjectif en -ed pour la personne qui ressent).',
      '«Be satisfied with» = راضٍ عن (صفة بـ -ed للشخص الذي يشعر).',
      '“satisfied with”: -ed adjective for the person who feels it.',
      '«Be satisfied with» = estar satisfecho con (adjetivo en -ed para la persona que lo siente).',
    )),
    g('b1-wf-q5', 3, 'Ms. Diallo gave an ___ presentation about the market in West Africa.', ['informative', 'inform', 'information', 'informatively'], x(
      'Entre « an » et le nom « presentation » → adjectif (-ive).',
      'بين «an» والاسم «presentation» ← صفة (-ive).',
      'Between “an” and the noun → adjective.',
      'Entre «an» y el sustantivo «presentation» → adjetivo (-ive).',
    )),
    g('b1-wf-q6', 3, 'The new software will ___ the time needed to process orders.', ['reduce', 'reduction', 'reduced', 'reducing'], x(
      'Après « will » → verbe à la forme de base.',
      'بعد «will» ← فعل في الشكل الأساسي.',
      'After “will” → base verb.',
      'Después de «will» → verbo en forma base.',
    )),
    g('b1-wf-q7', 3, 'Applicants must submit their documents ___.', ['electronically', 'electronic', 'electronics', 'electron'], x(
      'La phrase est complète : on ajoute la manière → adverbe.',
      'الجملة تامة: نضيف الطريقة ← حال.',
      'The sentence is complete: add the manner → adverb.',
      'La frase está completa: se añade el modo → adverbio.',
    )),
  ],
  [
    g('b1-wf-s2-q1', 3, 'Thank you for your ___ during the project.', ['help', 'helpful', 'helpfully', 'helped'], x(
      'Après le possessif « your » → un nom : « help ».',
      'بعد ضمير الملكية «your» ← اسم: «help».',
      'After “your” → noun.',
      'Después del posesivo «your» → sustantivo: «help».',
    )),
    g('b1-wf-s2-q2', 3, 'The manager spoke ___ to the new employees.', ['clearly', 'clear', 'clarity', 'clearness'], x(
      'Le mot modifie le verbe « spoke » → adverbe : « clearly ».',
      'الكلمة تصف الفعل «spoke» ← حال: «clearly».',
      'It modifies the verb → adverb.',
      'La palabra modifica al verbo «spoke» → adverbio: «clearly».',
    )),
    g('b1-wf-s2-q3', 3, 'We need a ___ answer by Friday.', ['quick', 'quickly', 'quickness', 'quicken'], x(
      'Entre « a » et le nom « answer » → adjectif : « quick ».',
      'بين «a» والاسم «answer» ← صفة: «quick».',
      'Before a noun → adjective.',
      'Entre «a» y el sustantivo «answer» → adjetivo: «quick».',
    )),
    g('b1-wf-s2-q4', 3, 'The ___ of the new factory will create 200 jobs.', ['construction', 'construct', 'constructive', 'constructively'], x(
      'Après « The » et avant « of » → nom en -tion.',
      'بعد «The» وقبل «of» ← اسم بـ -tion.',
      'After “The” → -tion noun.',
      'Después de «The» y antes de «of» → sustantivo en -tion.',
    )),
    g('b1-wf-s2-q5', 3, 'Our customers are ___ with the speed of our service.', ['impressed', 'impress', 'impression', 'impressive'], x(
      '« Be impressed with » = être impressionné par (adjectif en -ed pour la personne).',
      '«Be impressed with» = معجب بـ (صفة بـ -ed للشخص).',
      '“Impressed with” describes the people.',
      '«Be impressed with» = estar impresionado por (adjetivo en -ed para la persona).',
    )),
    g('b1-wf-s2-q6', 3, 'Please drive ___ near the school.', ['carefully', 'careful', 'care', 'careless'], x(
      'Le mot modifie « drive » → adverbe en -ly.',
      'الكلمة تصف «drive» ← حال بـ -ly.',
      'Modifies the verb → -ly adverb.',
      'La palabra modifica a «drive» → adverbio en -ly.',
    )),
    g('b1-wf-s2-q7', 3, 'The company made a ___ change to its policy.', ['significant', 'significance', 'significantly', 'signify'], x(
      'Devant le nom « change » → adjectif.',
      'قبل الاسم «change» ← صفة.',
      'Before the noun → adjective.',
      'Delante del sustantivo «change» → adjetivo.',
    )),
    g('b1-wf-s2-q8', 3, 'Ms. Lopez is very ___ in marketing.', ['experienced', 'experience', 'experiencing', 'experiences'], x(
      'Après « very » → adjectif : « experienced » (expérimenté).',
      'بعد «very» ← صفة: «experienced» (ذو خبرة).',
      'After “very” → adjective.',
      'Después de «very» → adjetivo: «experienced» (con experiencia).',
    )),
    g('b1-wf-s2-q9', 3, 'The report was ___ written and easy to read.', ['well', 'good', 'goodness', 'better'], x(
      'Pour modifier le participe « written », on emploie l’adverbe « well ».',
      'لوصف اسم المفعول «written» نستعمل الحال «well».',
      'Adverb “well” before a participle.',
      'Para modificar el participio «written» se usa el adverbio «well».',
    )),
    g('b1-wf-s2-q10', 3, 'The ___ of the meeting is to choose a new supplier.', ['purpose', 'purposeful', 'purposely', 'purposed'], x(
      'Après « The » et avant « of » → nom : « purpose » (but).',
      'بعد «The» وقبل «of» ← اسم: «purpose» (الغرض).',
      'After “The” → noun.',
      'Después de «The» y antes de «of» → sustantivo: «purpose» (objetivo).',
    )),
  ],
  [
    g('b1-wf-s3-q1', 3, 'We received many ___ for the sales assistant position.', ['applications', 'apply', 'applicable', 'applied'], x(
      'Après « many » → nom au pluriel : « applications ».',
      'بعد «many» ← اسم في الجمع: «applications».',
      'After “many” → plural noun.',
      'Después de «many» → sustantivo en plural: «applications».',
    )),
    g('b1-wf-s3-q2', 3, 'The new machine works more ___ than the old one.', ['efficiently', 'efficient', 'efficiency', 'efficiencies'], x(
      'Le mot modifie le verbe « works » → adverbe.',
      'الكلمة تصف الفعل «works» ← حال.',
      'Modifies the verb → adverb.',
      'La palabra modifica al verbo «works» → adverbio.',
    )),
    g('b1-wf-s3-q3', 3, 'Her ___ to the team was excellent.', ['contribution', 'contribute', 'contributive', 'contributed'], x(
      'Après « Her » → nom : « contribution ».',
      'بعد «Her» ← اسم: «contribution».',
      'After “Her” → noun.',
      'Después de «Her» → sustantivo: «contribution».',
    )),
    g('b1-wf-s3-q4', 3, 'This product is ___ in three colors.', ['available', 'availability', 'avail', 'availably'], x(
      'Après « is » → adjectif : « available » (disponible).',
      'بعد «is» ← صفة: «available» (متوفر).',
      'After “is” → adjective.',
      'Después de «is» → adjetivo: «available» (disponible).',
    )),
    g('b1-wf-s3-q5', 3, 'The training was very ___. I learned a lot.', ['useful', 'use', 'usefully', 'usage'], x(
      'Après « very » → adjectif : « useful ».',
      'بعد «very» ← صفة: «useful».',
      'After “very” → adjective.',
      'Después de «very» → adjetivo: «useful».',
    )),
    g('b1-wf-s3-q6', 3, 'Mr. Chen ___ the plan at yesterday’s meeting.', ['explained', 'explanation', 'explanatory', 'explaining'], x(
      'Il manque le verbe conjugué, au passé (yesterday) : « explained ».',
      'ينقص الفعل المصرَّف في الماضي (yesterday): «explained».',
      'A past verb is missing.',
      'Falta el verbo conjugado en pasado (yesterday): «explained».',
    )),
    g('b1-wf-s3-q7', 3, 'The hotel staff were extremely ___.', ['helpful', 'help', 'helpfully', 'helping'], x(
      'Après « extremely » + be → adjectif : « helpful ».',
      'بعد «extremely» مع be ← صفة: «helpful».',
      'Adjective after “be”.',
      'Después de «extremely» + be → adjetivo: «helpful».',
    )),
    g('b1-wf-s3-q8', 3, 'Prices have increased ___ this year.', ['slightly', 'slight', 'slightness', 'slighted'], x(
      'Le mot modifie « increased » → adverbe : « slightly » (légèrement).',
      'الكلمة تصف «increased» ← حال: «slightly» (قليلًا).',
      'Adverb modifying the verb.',
      'La palabra modifica a «increased» → adverbio: «slightly» (ligeramente).',
    )),
    g('b1-wf-s3-q9', 3, 'We are looking for a ___ person to manage the team.', ['reliable', 'rely', 'reliability', 'reliably'], x(
      'Entre « a » et « person » → adjectif : « reliable » (fiable).',
      'بين «a» و«person» ← صفة: «reliable» (موثوق).',
      'Before a noun → adjective.',
      'Entre «a» y «person» → adjetivo: «reliable» (fiable).',
    )),
    g('b1-wf-s3-q10', 3, 'The ___ of the new software took two days.', ['installation', 'install', 'installed', 'installable'], x(
      'Après « The » et avant « of » → nom : « installation ».',
      'بعد «The» وقبل «of» ← اسم: «installation».',
      'After “The” → noun.',
      'Después de «The» y antes de «of» → sustantivo: «installation».',
    )),
  ],
);
