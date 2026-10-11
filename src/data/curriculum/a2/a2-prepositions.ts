import type { Unit } from '../../../types';
import { g, lesson, order, unit, x } from '../build';

export const a2Prepositions: Unit = unit(
  {
    id: 'a2-prepositions',
    emoji: '📍',
    level: 2,
    part: 'R5',
    title: x('Prépositions de temps et de lieu', 'حروف الجر للزمان والمكان', 'Prepositions of time and place', 'Preposiciones de tiempo y de lugar'),
    subtitle: x('in, on, at, by, until…', 'in وon وat وby وuntil…', 'in, on, at, by, until…', 'in, on, at, by, until…'),
    lesson: lesson(
      x('Choisir la bonne préposition, une question presque certaine en Partie 5.', 'اختيار حرف الجر الصحيح، وهو سؤال شبه مؤكد في الجزء 5.', 'Pick the right preposition, a near-certain Part 5 question.', 'Elegir la preposición correcta, una pregunta casi segura en la Parte 5.'),
      [
        x('Temps : at 5 p.m. · on Friday / on 3 May · in June / in 2026 / in the morning.', 'الزمن: at 5 p.m. · on Friday/on 3 May · in June/in 2026/in the morning.', 'Time: at + clock, on + day/date, in + month/year/part of day.', 'Tiempo: at 5 p.m. · on Friday / on 3 May · in June / in 2026 / in the morning.'),
        x('Lieu : at the station (point) · on the third floor · in the office (intérieur).', 'المكان: at the station (نقطة) · on the third floor · in the office (داخل).', 'Place: at a point, on a floor/surface, in a space.', 'Lugar: at the station (un punto) · on the third floor · in the office (dentro).'),
        x('by Friday = au plus tard vendredi · until Friday = jusqu’à vendredi.', 'by Friday = في موعد أقصاه الجمعة · until Friday = حتى الجمعة.', 'by = deadline · until = continuing up to.', 'by Friday = como muy tarde el viernes · until Friday = hasta el viernes.'),
      ],
      'Please send the report by Friday. I will be in Tunis until Thursday.',
      x('« by » = échéance ; « until » = durée qui continue.', '«by» = موعد نهائي و«until» = مدة مستمرة.', '“by” = deadline; “until” = duration.', '«by» = fecha límite; «until» = algo que dura hasta ese momento.'),
    ),
  },
  [
    g('a2-p-q1', 2, 'The seminar will take place ___ 14 June.', ['on', 'in', 'at', 'by'], x(
      'Date précise → « on ».',
      'تاريخ محدد ← «on».',
      'Specific date → “on”.',
      'Fecha concreta → «on».',
    )),
    g('a2-p-q2', 2, 'The accounting office is ___ the second floor.', ['on', 'in', 'at', 'to'], x(
      'Étage → « on the … floor ».',
      'الطابق ← «on the … floor».',
      'Floors take “on”.',
      'Con las plantas se usa «on the … floor».',
    )),
    g('a2-p-q3', 2, 'Please return the signed form ___ next Monday at the latest.', ['by', 'until', 'since', 'during'], x(
      '« At the latest » = échéance → « by ».',
      '«At the latest» = موعد أقصى ← «by».',
      '“At the latest” = deadline → “by”.',
      '«At the latest» = fecha límite → «by».',
    )),
    g('a2-p-q4', 2, 'The shop is open ___ 8 a.m. to 9 p.m.', ['from', 'since', 'by', 'at'], x(
      'Plage horaire : from … to …',
      'مجال زمني: from … to …',
      'Range: from … to …',
      'Franja horaria: from … to …',
    )),
    g('a2-p-q5', 2, 'Mr. Garcia has worked here ___ 2019.', ['since', 'for', 'from', 'during'], x(
      '« Since » + point de départ (2019). « For » + durée (for six years).',
      '«Since» + نقطة بداية (2019)، و«for» + مدة (for six years).',
      '“since” + starting point; “for” + duration.',
      '«since» + punto de partida (2019); «for» + duración (for six years).',
    )),
    g('a2-p-q6', 2, 'We will wait for you ___ the entrance of the hotel.', ['at', 'on', 'in', 'to'], x(
      'Point précis → « at the entrance ».',
      'نقطة محددة ← «at the entrance».',
      'A point → “at the entrance”.',
      'Un punto concreto → «at the entrance».',
    )),
    g('a2-p-q7', 2, 'The museum is closed ___ the renovation work.', ['during', 'while', 'since', 'until'], x(
      '« During » + nom. « While » serait suivi d’un sujet et d’un verbe.',
      '«During» + اسم، أما «while» فيليها فاعل وفعل.',
      '“during” + noun; “while” + clause.',
      '«during» + sustantivo; «while» iría seguido de sujeto y verbo.',
    )),
  ],
  [
    g('a2-p-s2-q1', 2, 'The office is closed ___ Christmas Day.', ['on', 'in', 'at', 'during'], x(
      'Jour précis (une fête) → « on Christmas Day ».',
      'يوم محدد (عيد) ← «on Christmas Day».',
      'A specific day → “on”.',
      'Día concreto (una fiesta) → «on Christmas Day».',
    )),
    g('a2-p-s2-q2', 2, 'Please hand in your report ___ Wednesday.', ['by', 'until', 'since', 'for'], x(
      'Date limite → « by Wednesday » (au plus tard mercredi).',
      'موعد نهائي ← «by Wednesday» (في موعد أقصاه الأربعاء).',
      'Deadline → “by”.',
      'Fecha límite → «by Wednesday» (como muy tarde el miércoles).',
    )),
    g('a2-p-s2-q3', 2, 'I have lived in Tunis ___ five years.', ['for', 'since', 'from', 'during'], x(
      'Durée (five years) → « for ». « Since » s’emploie avec un point de départ.',
      'مدة (five years) ← «for». أما «since» فمع نقطة بداية.',
      'Duration → “for”; “since” + starting point.',
      'Duración (five years) → «for». «Since» va con un punto de partida.',
    )),
    g('a2-p-s2-q4', 2, 'The meeting room is ___ the end of the corridor.', ['at', 'on', 'in', 'to'], x(
      'Expression fixe : « at the end of » (au bout de).',
      'تعبير ثابت: «at the end of» (في نهاية).',
      'Fixed phrase: “at the end of”.',
      'Expresión fija: «at the end of» (al final de).',
    )),
    g('a2-p-s2-q5', 2, 'We are in the office ___ 9 a.m. ___ 5 p.m.', ['from / to', 'since / to', 'at / until', 'by / at'], x(
      'Plage horaire : « from … to … ».',
      'مجال زمني: «from … to …».',
      'Time range: “from … to …”.',
      'Franja horaria: «from … to …».',
    )),
    g('a2-p-s2-q6', 2, 'Our new store is ___ Main Street.', ['on', 'at', 'in', 'to'], x(
      'Avec un nom de rue sans numéro → « on Main Street ».',
      'مع اسم شارع دون رقم ← «on Main Street».',
      'Street name without a number → “on”.',
      'Con un nombre de calle sin número → «on Main Street».',
    )),
    g('a2-p-s2-q7', 2, 'The shop stays open ___ 10 p.m. on Fridays.', ['until', 'by', 'since', 'for'], x(
      'Action qui continue jusqu’à un moment → « until ».',
      'فعل مستمر حتى وقت معين ← «until».',
      'Continuing up to a time → “until”.',
      'Acción que continúa hasta un momento → «until».',
    )),
    g('a2-p-s2-q8', 2, 'The flight arrives ___ the morning.', ['in', 'on', 'at', 'to'], x(
      'Partie de la journée → « in the morning ».',
      'جزء من اليوم ← «in the morning».',
      'Part of the day → “in”.',
      'Parte del día → «in the morning».',
    )),
    g('a2-p-s2-q9', 2, 'Nobody has used this room ___ last summer.', ['since', 'for', 'during', 'ago'], x(
      'Point de départ (last summer) avec le present perfect → « since ».',
      'نقطة بداية (last summer) مع المضارع التام ← «since».',
      'Starting point with the present perfect → “since”.',
      'Punto de partida (last summer) con el present perfect → «since».',
    )),
    order('a2-p-s2-o1', 'The conference starts at nine on Monday', x('L’heure vient avant le jour.', 'الساعة قبل اليوم.', 'The time comes before the day.', 'La hora va antes del día.'), x(
      '« at » + heure, « on » + jour.',
      '«at» + ساعة و«on» + يوم.',
      '“at” + time, “on” + day.',
      '«at» + hora, «on» + día.',
    )),
  ],
  [
    g('a2-p-s3-q1', 2, 'I’ll be on vacation ___ two weeks.', ['for', 'since', 'during', 'by'], x(
      'Durée → « for two weeks ».',
      'مدة ← «for two weeks».',
      'Duration → “for”.',
      'Duración → «for two weeks».',
    )),
    g('a2-p-s3-q2', 2, 'Please don’t use your phone ___ the presentation.', ['during', 'while', 'since', 'for'], x(
      '« During » + nom (the presentation). « While » serait suivi d’un sujet et d’un verbe.',
      '«During» + اسم (the presentation). أما «while» فيليها فاعل وفعل.',
      '“During” + noun; “while” + clause.',
      '«During» + sustantivo (the presentation). «While» iría seguido de sujeto y verbo.',
    )),
    g('a2-p-s3-q3', 2, 'The cafeteria is ___ the ground floor.', ['on', 'in', 'at', 'to'], x(
      'Étage → « on the ground floor ».',
      'الطابق ← «on the ground floor».',
      'Floors take “on”.',
      'Planta → «on the ground floor».',
    )),
    g('a2-p-s3-q4', 2, 'She was born ___ 1995.', ['in', 'on', 'at', 'since'], x(
      'Année → « in 1995 ».',
      'السنة ← «in 1995».',
      'Year → “in”.',
      'Año → «in 1995».',
    )),
    g('a2-p-s3-q5', 2, 'The training starts ___ 2:30.', ['at', 'in', 'on', 'to'], x(
      'Heure précise → « at 2:30 ».',
      'ساعة محددة ← «at 2:30».',
      'Clock time → “at”.',
      'Hora concreta → «at 2:30».',
    )),
    g('a2-p-s3-q6', 2, 'We have a meeting ___ the morning of 3 June.', ['on', 'in', 'at', 'by'], x(
      'Matin d’un jour précis → « on the morning of… » (et non « in »).',
      'صباح يوم محدد ← «on the morning of…» (لا «in»).',
      'Morning of a specific day → “on”.',
      'Mañana de un día concreto → «on the morning of…» (y no «in»).',
    )),
    g('a2-p-s3-q7', 2, 'Please wait ___ I finish this call.', ['until', 'by', 'during', 'since'], x(
      'Attendre jusqu’à ce que… → « until » + proposition.',
      'الانتظار إلى أن… ← «until» + جملة.',
      '“Wait until” + clause.',
      'Esperar hasta que… → «until» + oración.',
    )),
    g('a2-p-s3-q8', 2, 'The package will arrive ___ three days.', ['in', 'on', 'at', 'since'], x(
      'Délai à partir de maintenant → « in three days » (dans trois jours).',
      'مهلة انطلاقًا من الآن ← «in three days» (بعد ثلاثة أيام).',
      'Time from now → “in”.',
      'Plazo desde ahora → «in three days» (dentro de tres días).',
    )),
    g('a2-p-s3-q9', 2, 'The keys are ___ the drawer, under the papers.', ['in', 'on', 'at', 'to'], x(
      'À l’intérieur d’un tiroir → « in ».',
      'داخل الدرج ← «in».',
      'Inside a drawer → “in”.',
      'Dentro de un cajón → «in».',
    )),
    order('a2-p-s3-o1', 'Please send the documents by Friday', x('« by Friday » se place à la fin.', '«by Friday» في النهاية.', '“by Friday” goes last.', '«by Friday» va al final.'), x(
      'Please + verbe + objet + date limite (by Friday).',
      'Please + فعل + مفعول + موعد نهائي (by Friday).',
      'Please + verb + object + deadline.',
      'Please + verbo + objeto + fecha límite (by Friday).',
    )),
  ],
);
