import type { Unit } from '../../../../types';
import { lesson, unit, x } from '../../../curriculum/build';
import { ru3 } from '../build';

/** Unit fce-u07: word formation with prefixes, negatives, adverbs and irregular changes (Part 3). */
export const fceU07: Unit = unit(
  {
    id: 'fce-u07',
    emoji: '🔁',
    level: 4,
    part: 'RU3',
    title: x('Formation des mots : préfixes et changements', 'تكوين الكلمات: السوابق والتغييرات', 'Word formation: prefixes and changes', 'Formación de palabras: prefijos y cambios'),
    subtitle: x(
      'un-, in-, im-, ir-, dis-, mis-, over-, under-, re-, -ly, deep → depth',
      'un- وin- وim- وir- وdis- وmis- وover- وunder- وre- و‎-ly وdeep ← depth',
      'un-, in-, im-, ir-, dis-, mis-, over-, under-, re-, -ly, deep → depth',
      'un-, in-, im-, ir-, dis-, mis-, over-, under-, re-, -ly, deep → depth',
    ),
    lesson: lesson(
      x(
        'Repérer quand le mot doit être négatif, adverbe ou complètement transformé, et l’écrire sans faute.',
        'معرفة متى يجب أن تكون الكلمة منفية أو ظرفًا أو متحوّلة تمامًا، وكتابتها دون خطأ.',
        'Spot when the word must be negative, an adverb or fully changed, and spell it correctly.',
        'Detectar cuándo la palabra debe ser negativa, un adverbio o cambiar del todo, y escribirla sin errores.',
      ),
      [
        x(
          'Lisez toute la phrase : un sens négatif (« but », « unfortunately », « refused ») annonce souvent un préfixe. im- devant p/m (impossible), ir- devant r (irresponsible), il- devant l (illegal), sinon un-, in- ou dis- (unwise, inaccurate, dishonest).',
          'اقرأ الجملة كلها: المعنى السلبي («but» و«unfortunately» و«refused») يدل غالبًا على سابقة. im- قبل p/m (impossible)، وir- قبل r (irresponsible)، وil- قبل l (illegal)، وإلا فـun- أو in- أو dis- (unwise وinaccurate وdishonest).',
          'A negative meaning often needs a prefix: im- before p/m, ir- before r, il- before l, else un-/in-/dis-.',
          'Lee toda la frase: un sentido negativo («but», «unfortunately», «refused») suele pedir un prefijo. im- delante de p/m (impossible), ir- delante de r (irresponsible), il- delante de l (illegal); si no, un-, in- o dis- (unwise, inaccurate, dishonest).',
        ),
        x(
          'Les préfixes de sens : mis- = mal (misunderstand), over- = trop (overbooked), under- = pas assez (underestimate, undercooked), re- = de nouveau (reopen).',
          'سوابق تغيّر المعنى: mis- = بشكل خاطئ (misunderstand)، وover- = أكثر من اللازم (overbooked)، وunder- = أقل من اللازم (underestimate وundercooked)، وre- = من جديد (reopen).',
          'mis- = wrongly, over- = too much, under- = too little, re- = again.',
          'Prefijos de sentido: mis- = mal (misunderstand), over- = demasiado (overbooked), under- = demasiado poco (underestimate, undercooked), re- = de nuevo (reopen).',
        ),
        x(
          'Un verbe ou un adjectif à modifier → adverbe en -ly : surprising → surprisingly, wide → widely. Un mot peut prendre plusieurs changements : succeed → unsuccessfully.',
          'لوصف فعل أو صفة نحتاج إلى ظرف بـ‎-ly: surprising ← surprisingly، وwide ← widely. وقد تتغيّر الكلمة عدة مرات: succeed ← unsuccessfully.',
          'To modify a verb or adjective use -ly; several changes can combine (succeed → unsuccessfully).',
          'Para modificar un verbo o un adjetivo → adverbio en -ly: surprising → surprisingly, wide → widely. Una palabra puede sumar varios cambios: succeed → unsuccessfully.',
        ),
        x(
          'Changements irréguliers à apprendre par cœur : deep → depth, long → length, high → height, strong → strength, life → lives, child → children.',
          'تغييرات شاذة تُحفظ: deep ← depth، وlong ← length، وhigh ← height، وstrong ← strength، وlife ← lives، وchild ← children.',
          'Learn the irregular ones: depth, length, height, strength, lives.',
          'Cambios irregulares que hay que memorizar: deep → depth, long → length, high → height, strong → strength, life → lives, child → children.',
        ),
      ],
      'Unfortunately, Omar tried UNSUCCESSFULLY to reach a DEPTH of thirty metres.',
      x(
        '« Unfortunately » → sens négatif ; « tried » + adverbe : succeed → unsuccessfully ; « a … of » → nom : deep → depth.',
        '«Unfortunately» ← معنى سلبي، و«tried» + ظرف: succeed ← unsuccessfully، و«a … of» ← اسم: deep ← depth.',
        'Negative adverb after “tried”; noun after “a”.',
        '«Unfortunately» → sentido negativo; «tried» + adverbio: succeed → unsuccessfully; «a … of» → sustantivo: deep → depth.',
      ),
    ),
  },
  [
    ru3('fce-u07-s1-q1', 4, 'It’s ___ to swim off this beach today – the currents are far too strong.', 'POSSIBLE', ['impossible'], x(
      '« the currents are far too strong » → sens négatif ; devant p, le préfixe est im- : impossible.',
      '«the currents are far too strong» ← معنى سلبي، وقبل p تكون السابقة im-: impossible.',
      'Strong currents → negative: impossible.',
      '«the currents are far too strong» → sentido negativo; delante de p, el prefijo es im-: impossible.',
    )),
    ru3('fce-u07-s1-q2', 4, 'Sorry, I ___ your message – I thought the match was on Tuesday, not Thursday.', 'UNDERSTAND', ['misunderstood'], x(
      'Il a mal compris (« I thought… Tuesday, not Thursday ») → mis- ; et le prétérit : misunderstood.',
      'فهم الرسالة خطأً («I thought… Tuesday, not Thursday») ← mis- مع الماضي: misunderstood.',
      'Understood wrongly, in the past: misunderstood.',
      'Entendió mal («I thought… Tuesday, not Thursday») → mis-, y en pasado: misunderstood.',
    )),
    ru3('fce-u07-s1-q3', 4, 'The information on that website is often ___, so always check another source.', 'ACCURATE', ['inaccurate'], x(
      '« so always check another source » → l’information n’est pas fiable : accurate → inaccurate (in-).',
      '«so always check another source» ← المعلومات غير موثوقة: accurate ← inaccurate (in-).',
      'You must check elsewhere → inaccurate.',
      '«so always check another source» → la información no es fiable: accurate → inaccurate (in-).',
    )),
    ru3('fce-u07-s1-q4', 4, 'Many teenagers ___ how much time they spend online – the real figure is usually much higher.', 'ESTIMATE', ['underestimate'], x(
      '« the real figure is usually much higher » → ils estiment trop bas : under- + estimate = underestimate.',
      '«the real figure is usually much higher» ← تقديرهم أقل من الحقيقة: under- + estimate = underestimate.',
      'The real figure is higher → underestimate.',
      '«the real figure is usually much higher» → calculan por debajo: under- + estimate = underestimate.',
    )),
    ru3('fce-u07-s1-q5', 4, 'In some places, the lake reaches a ___ of more than forty metres.', 'DEEP', ['depth'], x(
      '« a … of forty metres » → nom ; changement irrégulier : deep → depth.',
      '«a … of forty metres» ← اسم، وتغيير شاذ: deep ← depth.',
      '“a ___ of” → noun: depth.',
      '«a … of forty metres» → sustantivo; cambio irregular: deep → depth.',
    )),
    ru3('fce-u07-s1-q6', 4, 'Karim spent the winter in the gym to build up his ___ before the rowing season.', 'STRONG', ['strength'], x(
      'Après « his », il faut un nom ; changement irrégulier : strong → strength.',
      'بعد «his» نحتاج إلى اسم، وتغيير شاذ: strong ← strength.',
      'After “his” → noun: strength.',
      'Después de «his» hace falta un sustantivo; cambio irregular: strong → strength.',
    )),
    ru3('fce-u07-s1-q7', 4, 'Despite queuing online for hours, Inès was ___ in her attempt to get tickets for the concert.', 'SUCCEED', ['unsuccessful'], x(
      '« Despite » annonce un échec ; « was … in » → adjectif négatif : succeed → unsuccessful.',
      '«Despite» تدل على الفشل، و«was … in» ← صفة منفية: succeed ← unsuccessful.',
      '“Despite” → failure: unsuccessful.',
      '«Despite» anuncia un fracaso; «was … in» → adjetivo negativo: succeed → unsuccessful.',
    )),
    ru3('fce-u07-s1-q8', 4, 'Most experts agree that it is ___ to let young children use social media without any supervision.', 'RESPONSIBLE', ['irresponsible'], x(
      '« without any supervision » → jugement négatif ; devant r, le préfixe est ir- : irresponsible.',
      '«without any supervision» ← حكم سلبي، وقبل r تكون السابقة ir-: irresponsible.',
      'Negative judgement; ir- before r: irresponsible.',
      '«without any supervision» → juicio negativo; delante de r, el prefijo es ir-: irresponsible.',
    )),
    ru3('fce-u07-s1-q9', 4, 'The science museum was closed for two years, but it finally ___ last month with a brand-new space section.', 'OPEN', ['reopened'], x(
      'Fermé puis ouvert de nouveau → re- ; « last month » → prétérit : reopened.',
      'أُغلق ثم فُتح من جديد ← re-، و«last month» ← الماضي: reopened.',
      'Opened again, in the past: reopened.',
      'Cerrado y abierto de nuevo → re-; «last month» → pasado: reopened.',
    )),
    ru3('fce-u07-s1-q10', 4, '___, the train from Tunis arrived on time despite the heavy snow.', 'SURPRISE', ['Surprisingly'], x(
      'Un adverbe de commentaire en tête de phrase, suivi d’une virgule : surprise → surprising → surprisingly.',
      'ظرف تعليقي في أول الجملة تليه فاصلة: surprise ← surprising ← surprisingly.',
      'Sentence adverb: surprisingly.',
      'Adverbio de comentario al inicio de la frase, seguido de coma: surprise → surprising → surprisingly.',
    )),
  ],
  [
    ru3('fce-u07-s2-q1', 4, 'It is ___ to copy a classmate’s essay and hand it in as your own work.', 'HONEST', ['dishonest'], x(
      'Copier le travail d’un autre est malhonnête : honest → dishonest (dis-).',
      'نسخ عمل زميل غير نزيه: honest ← dishonest (dis-).',
      'Copying is not honest: dishonest.',
      'Copiar el trabajo de otro es deshonesto: honest → dishonest (dis-).',
    )),
    ru3('fce-u07-s2-q2', 4, 'The flight to Madrid was ___, so three passengers had to wait for the next one.', 'BOOK', ['overbooked'], x(
      'Trop de réservations pour les places disponibles → over- : overbooked.',
      'حجوزات أكثر من المقاعد المتاحة ← over-: overbooked.',
      'Too many bookings → overbooked.',
      'Demasiadas reservas para las plazas disponibles → over-: overbooked.',
    )),
    ru3('fce-u07-s2-q3', 4, 'Youssef felt completely ___ for the exam because he hadn’t read the last three chapters.', 'PREPARE', ['unprepared', 'underprepared'], x(
      '« hadn’t read the last three chapters » → pas (assez) prêt : unprepared, ou underprepared.',
      '«hadn’t read the last three chapters» ← غير مستعد (بما يكفي): unprepared أو underprepared.',
      'He hadn’t studied: unprepared (or underprepared).',
      '«hadn’t read the last three chapters» → no (suficientemente) preparado: unprepared o underprepared.',
    )),
    ru3('fce-u07-s2-q4', 4, 'The chicken was still pink in the middle – it was clearly ___, so I sent it back.', 'COOK', ['undercooked'], x(
      '« still pink in the middle » → pas assez cuit : under- + cooked = undercooked.',
      '«still pink in the middle» ← غير مطهوّ بما يكفي: under- + cooked = undercooked.',
      'Still pink → not cooked enough: undercooked.',
      '«still pink in the middle» → poco hecho: under- + cooked = undercooked.',
    )),
    ru3('fce-u07-s2-q5', 4, 'The new pedestrian bridge has a total ___ of about three hundred metres.', 'LONG', ['length'], x(
      '« a total … of » → nom ; changement irrégulier : long → length.',
      '«a total … of» ← اسم، وتغيير شاذ: long ← length.',
      '“a total ___ of” → noun: length.',
      '«a total … of» → sustantivo; cambio irregular: long → length.',
    )),
    ru3('fce-u07-s2-q6', 4, 'Can you check the ___ of this bookcase? I’m worried it’s too tall for my room.', 'HIGH', ['height'], x(
      '« the … of » → nom ; « too tall » confirme la mesure verticale : high → height.',
      '«the … of» ← اسم، و«too tall» تؤكد القياس العمودي: high ← height.',
      '“too tall” → noun height.',
      '«the … of» → sustantivo; «too tall» confirma la medida vertical: high → height.',
    )),
    ru3('fce-u07-s2-q7', 4, 'Unfortunately, Omar tried ___ to persuade his parents to let him travel alone.', 'SUCCESS', ['unsuccessfully'], x(
      '« Unfortunately » → échec ; « tried » + adverbe : success → unsuccessfully (un- + -ful + -ly).',
      '«Unfortunately» ← فشل، و«tried» + ظرف: success ← unsuccessfully (un- + ‎-ful + ‎-ly).',
      'Failure + adverb: unsuccessfully.',
      '«Unfortunately» → fracaso; «tried» + adverbio: success → unsuccessfully (un- + -ful + -ly).',
    )),
    ru3('fce-u07-s2-q8', 4, 'In most countries it is ___ to drive a car without a licence.', 'LEGAL', ['illegal'], x(
      'Conduire sans permis est interdit ; devant l, le préfixe est il- : illegal.',
      'القيادة دون رخصة ممنوعة، وقبل l تكون السابقة il-: illegal.',
      'Not allowed; il- before l: illegal.',
      'Conducir sin carné está prohibido; delante de l, el prefijo es il-: illegal.',
    )),
    ru3('fce-u07-s2-q9', 4, 'The new library is ___ used by students who need a quiet place to work in the evenings.', 'WIDE', ['widely'], x(
      'L’adverbe modifie le participe « used » : wide → widely (« widely used » = très utilisé).',
      'الظرف يصف اسم المفعول «used»: wide ← widely («widely used» = مستعمل على نطاق واسع).',
      'Adverb before “used”: widely.',
      'El adverbio modifica el participio «used»: wide → widely («widely used» = muy utilizado).',
    )),
    ru3('fce-u07-s2-q10', 4, 'The firefighters’ quick reaction saved many ___ during the forest fire last summer.', 'LIFE', ['lives'], x(
      '« many » + pluriel ; pluriel irrégulier : life → lives (f devient v).',
      '«many» + جمع، وجمع شاذ: life ← lives (يتحول f إلى v).',
      '“many” + plural: lives.',
      '«many» + plural; plural irregular: life → lives (la f pasa a v).',
    )),
  ],
);
