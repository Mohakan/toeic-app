import type { Unit } from '../../../../types';
import { lesson, unit, x } from '../../../curriculum/build';
import { ru2, ru3, ru4 } from '../build';

/** Unit fce-u12: review of advanced structures toward C1 (Use of English Parts 2, 3 and 4). */
export const fceU12: Unit = unit(
  {
    id: 'fce-u12',
    emoji: '🚀',
    level: 5,
    part: 'RU2 · RU3 · RU4',
    title: x('Vers le C1 : structures avancées', 'نحو C1: تراكيب متقدمة', 'Toward C1: advanced structures', 'Hacia el C1: estructuras avanzadas'),
    subtitle: x(
      'it’s time, would rather, no matter how, hardly, as if, had better, such… that, unless',
      'it’s time وwould rather وno matter how وhardly وas if وhad better وsuch… that وunless',
      'it’s time, would rather, no matter how, hardly, as if, had better, such… that, unless',
      'it’s time, would rather, no matter how, hardly, as if, had better, such… that, unless',
    ),
    lesson: lesson(
      x(
        'Maîtriser les structures qui font la différence en Parties 2, 3 et 4, souvent testées au niveau C1.',
        'إتقان التراكيب التي تصنع الفرق في الأجزاء 2 و3 و4، وكثيرًا ما تُختبر في مستوى C1.',
        'Master the structures that make the difference in Parts 2, 3 and 4.',
        'Dominar las estructuras que marcan la diferencia en las Partes 2, 3 y 4, a menudo evaluadas en nivel C1.',
      ),
      [
        x(
          'Passé « irréel » au sens présent : it’s (high / about) time + sujet + prétérit (It’s time we left) ; would rather + sujet + prétérit (I’d rather you didn’t) ; as if / as though + prétérit (He talks as if he were the boss).',
          'ماضٍ «غير واقعي» بمعنى الحاضر: it’s (high / about) time + فاعل + ماضٍ (It’s time we left)، وwould rather + فاعل + ماضٍ (I’d rather you didn’t)، وas if / as though + ماضٍ (He talks as if he were the boss).',
          'Unreal past: it’s time we left, I’d rather you didn’t, as if he were.',
          'Pasado «irreal» con sentido presente: it’s (high / about) time + sujeto + pasado (It’s time we left); would rather + sujeto + pasado (I’d rather you didn’t); as if / as though + pasado (He talks as if he were the boss).',
        ),
        x(
          'Inversion après un mot négatif en tête : Hardly had I… when… ; No sooner had I… than… (attention : « when » avec hardly, « than » avec no sooner).',
          'القلب بعد كلمة نفي في أول الجملة: Hardly had I… when…، وNo sooner had I… than… (انتبه: «when» مع hardly، و«than» مع no sooner).',
          'Inversion: Hardly had I… when…; No sooner had I… than…',
          'Inversión tras una palabra negativa al inicio: Hardly had I… when…; No sooner had I… than… (ojo: «when» con hardly, «than» con no sooner).',
        ),
        x(
          'Conseil et condition : had better + infinitif sans to (You’d better go) ; unless = if… not ; provided (that) = seulement si ; no matter how + adjectif / adverbe = however.',
          'النصيحة والشرط: had better + مصدر دون to (You’d better go)، وunless = if… not، وprovided (that) = بشرط أن، وno matter how + صفة / ظرف = however.',
          'had better + bare infinitive; unless = if not; provided = only if; no matter how = however.',
          'Consejo y condición: had better + infinitivo sin to (You’d better go); unless = if… not; provided (that) = solo si; no matter how + adjetivo / adverbio = however.',
        ),
        x(
          'Conséquence : so + adjectif (so boring that) mais such (a) + adjectif + nom (such a boring film that). En Partie 4 : 2 à 5 mots, le mot clé inchangé, une contraction compte pour deux.',
          'النتيجة: so + صفة (so boring that) لكن such (a) + صفة + اسم (such a boring film that). في الجزء 4: من كلمتين إلى 5 كلمات، والكلمة المفتاحية دون تغيير، والاختصار يُحسب كلمتين.',
          'so + adjective, such (a) + adjective + noun. Part 4: 2-5 words, key word unchanged.',
          'Consecuencia: so + adjetivo (so boring that), pero such (a) + adjetivo + sustantivo (such a boring film that). En la Parte 4: de 2 a 5 palabras, la palabra clave sin cambios, una contracción cuenta como dos.',
        ),
      ],
      'No sooner had we sat down than it started to rain – it’s high time we bought a tent!',
      x(
        '« No sooner » + inversion + « than » ; « it’s high time » + prétérit (« bought ») pour un présent.',
        '«No sooner» + قلب + «than»، و«it’s high time» + ماضٍ («bought») بمعنى الحاضر.',
        'Inversion after “No sooner”; past after “it’s high time”.',
        '«No sooner» + inversión + «than»; «it’s high time» + pasado («bought») con sentido presente.',
      ),
    ),
  },
  [
    ru2('fce-u12-s1-q1', 5, 'The traffic in the old town is terrible. It’s high time the council ___ something about it.', ['did'], x(
      '« It’s high time » + sujet + prétérit : « the council did something ».',
      '«It’s high time» + فاعل + ماضٍ: «the council did something».',
      '“It’s high time” + past: did.',
      '«It’s high time» + sujeto + pasado: «the council did something».',
    )),
    ru2('fce-u12-s1-q2', 5, '___ sooner had we laid our towels on the beach than it started to pour with rain.', ['No'], x(
      '« … sooner had we… than » : inversion après « No sooner ».',
      '«… sooner had we… than»: قلب بعد «No sooner».',
      '“No sooner had… than”.',
      '«… sooner had we… than»: inversión tras «No sooner».',
    )),
    ru2('fce-u12-s1-q3', 5, 'Please keep the party a secret. I’d rather you ___ tell anyone else about it.', ['didn’t'], x(
      '« would rather » + autre sujet + prétérit ; ici négatif : « you didn’t tell ».',
      '«would rather» + فاعل آخر + ماضٍ، وهنا منفي: «you didn’t tell».',
      '“I’d rather you” + past negative: didn’t.',
      '«would rather» + otro sujeto + pasado; aquí en negativa: «you didn’t tell».',
    )),
    ru3('fce-u12-s1-q4', 5, 'Her ___ to give up, despite a serious knee injury, impressed the whole team.', 'REFUSE', ['refusal'], x(
      'Après « Her », il faut un nom (« refusal to + verbe ») : refuse → refusal (-al, le e disparaît).',
      'بعد «Her» نحتاج إلى اسم («refusal to + فعل»): refuse ← refusal (‎-al مع حذف e).',
      'After “Her” → noun: refusal to…',
      'Después de «Her» hace falta un sustantivo («refusal to + verbo»): refuse → refusal (-al, desaparece la e).',
    )),
    ru3('fce-u12-s1-q5', 5, 'Such was the ___ of the storm that schools along the coast stayed closed for three days.', 'SEVERE', ['severity'], x(
      '« Such was the … of » → nom (structure « Such was the + nom + that ») : severe → severity (-ity).',
      '«Such was the … of» ← اسم (تركيب «Such was the + اسم + that»): severe ← severity (‎-ity).',
      '“Such was the ___ of” → noun: severity.',
      '«Such was the … of» → sustantivo (estructura «Such was the + sustantivo + that»): severe → severity (-ity).',
    )),
    ru4('fce-u12-s1-q6', 5, 'My advice is to apply for the scholarship now, because the deadline is next week.', 'BETTER', '___ for the scholarship now, because the deadline is next week.', ['You had better apply', 'You’d better apply'], x(
      'Conseil fort : had better + infinitif sans to → « You had better apply » / « You’d better apply ».',
      'نصيحة قوية: had better + مصدر دون to ← «You had better apply» أو «You’d better apply».',
      'had better + bare infinitive: You’d better apply.',
      'Consejo firme: had better + infinitivo sin to → «You had better apply» / «You’d better apply».',
    )),
    ru4('fce-u12-s1-q7', 5, 'The film was so boring that we left halfway through.', 'SUCH', 'It was ___ that we left halfway through.', ['such a boring film'], x(
      'Avec un nom, « so » devient « such a » + adjectif + nom : « such a boring film ».',
      'مع الاسم تصبح «so» ‏«such a» + صفة + اسم: «such a boring film».',
      'such a + adjective + noun.',
      'Con un sustantivo, «so» pasa a «such a» + adjetivo + sustantivo: «such a boring film».',
    )),
    ru4('fce-u12-s1-q8', 5, 'Malik had only just got home when his phone rang.', 'HARDLY', 'Malik ___ home when his phone rang.', ['had hardly got', 'had hardly gotten'], x(
      '« only just » = « hardly » ; avec le past perfect, hardly se place après had : « had hardly got … when ».',
      '«only just» = «hardly»، ومع الماضي التام يأتي hardly بعد had: «had hardly got … when».',
      '“only just” = hardly: had hardly got… when.',
      '«only just» = «hardly»; con el past perfect, hardly va después de had: «had hardly got … when».',
    )),
    ru4('fce-u12-s1-q9', 5, 'I would prefer you not to use my laptop while I’m out.', 'RATHER', 'I ___ use my laptop while I’m out.', ['would rather you didn’t', 'would rather you did not'], x(
      '« would rather » + autre sujet + prétérit : « would rather you didn’t use ».',
      '«would rather» + فاعل آخر + ماضٍ: «would rather you didn’t use».',
      'would rather + subject + past: you didn’t.',
      '«would rather» + otro sujeto + pasado: «would rather you didn’t use».',
    )),
    ru4('fce-u12-s1-q10', 5, 'You can borrow my bike, but you must bring it back by six.', 'PROVIDED', 'You can borrow my bike ___ it back by six.', ['provided you bring', 'provided that you bring'], x(
      '« provided (that) » = à condition que, suivi du présent : « provided you bring it back ».',
      '«provided (that)» = بشرط أن، ويليها المضارع: «provided you bring it back».',
      'provided (that) + present: provided you bring.',
      '«provided (that)» = siempre que, seguido de presente: «provided you bring it back».',
    )),
  ],
  [
    ru2('fce-u12-s2-q1', 5, 'Kenji talks ___ if he knew everything about football, but he has never played a match.', ['as'], x(
      '« as if » + prétérit pour une impression fausse : il parle comme s’il savait tout.',
      '«as if» + ماضٍ لانطباع غير صحيح: يتكلم كأنه يعرف كل شيء.',
      '“as if” + past: talks as if he knew.',
      '«as if» + pasado para una impresión falsa: habla como si lo supiera todo.',
    )),
    ru2('fce-u12-s2-q2', 5, 'You won’t get a place on the course ___ you register before Friday.', ['unless'], x(
      '« unless » = « if… not » : pas de place si vous ne vous inscrivez pas avant vendredi.',
      '«unless» = «if… not»: لن تحصل على مكان إن لم تسجّل قبل الجمعة.',
      '“unless” = if not.',
      '«unless» = «if… not»: no hay plaza si no te inscribes antes del viernes.',
    )),
    ru2('fce-u12-s2-q3', 5, 'It was ___ a beautiful evening that we decided to walk home along the river.', ['such'], x(
      '« … a beautiful evening that » : « such » + a + adjectif + nom + that.',
      '«… a beautiful evening that»: «such» + a + صفة + اسم + that.',
      'such + a + adjective + noun + that.',
      '«… a beautiful evening that»: «such» + a + adjetivo + sustantivo + that.',
    )),
    ru3('fce-u12-s2-q4', 5, 'No matter how ___ you are, always check the weather forecast before hiking in the Atlas Mountains.', 'EXPERIENCE', ['experienced'], x(
      '« No matter how » + adjectif ; être expérimenté : experience → experienced.',
      '«No matter how» + صفة، أي مهما كنت ذا خبرة: experience ← experienced.',
      '“No matter how” + adjective: experienced.',
      '«No matter how» + adjetivo; tener experiencia: experience → experienced.',
    )),
    ru3('fce-u12-s2-q5', 5, 'Hardly anyone noticed the ___ of the old bookshop until a café opened in its place.', 'APPEAR', ['disappearance'], x(
      '« the … of » → nom ; la librairie a été remplacée, donc elle a disparu : appear → disappearance (dis- + -ance).',
      '«the … of» ← اسم، والمكتبة استُبدلت أي اختفت: appear ← disappearance (dis- + ‎-ance).',
      'It was replaced → noun disappearance.',
      '«the … of» → sustantivo; la librería fue sustituida, es decir, desapareció: appear → disappearance (dis- + -ance).',
    )),
    ru4('fce-u12-s2-q6', 5, 'However hard I study, I can’t remember all these historical dates.', 'MATTER', 'No ___ study, I can’t remember all these historical dates.', ['matter how hard I'], x(
      '« However hard » = « No matter how hard » + sujet + verbe : « No matter how hard I study ».',
      '«However hard» = «No matter how hard» + فاعل + فعل: «No matter how hard I study».',
      'However hard = no matter how hard.',
      '«However hard» = «No matter how hard» + sujeto + verbo: «No matter how hard I study».',
    )),
    ru4('fce-u12-s2-q7', 5, 'The council should have introduced a recycling scheme a long time ago.', 'HIGH', 'It’s ___ a recycling scheme.', ['high time the council introduced', 'high time they introduced'], x(
      'Reproche sur un retard : « It’s high time » + sujet + prétérit : « high time the council introduced ».',
      'لوم على التأخر: «It’s high time» + فاعل + ماضٍ: «high time the council introduced».',
      'It’s high time + subject + past.',
      'Reproche por el retraso: «It’s high time» + sujeto + pasado: «high time the council introduced».',
    )),
    ru4('fce-u12-s2-q8', 5, 'From the way Tom talks, you would think he was the manager.', 'IF', 'Tom talks ___ the manager.', ['as if he was', 'as if he were'], x(
      'Impression fausse : « as if » + prétérit ; « were » et « was » sont acceptés : « as if he were / was ».',
      'انطباع غير صحيح: «as if» + ماضٍ، وتُقبل «were» و«was»: «as if he were / was».',
      'as if + past: as if he were/was.',
      'Impresión falsa: «as if» + pasado; se aceptan «were» y «was»: «as if he were / was».',
    )),
    ru4('fce-u12-s2-q9', 5, 'We’ll miss the train if we don’t leave now.', 'UNLESS', 'We’ll miss the train ___ now.', ['unless we leave'], x(
      '« if we don’t » = « unless » + verbe affirmatif : « unless we leave ».',
      '«if we don’t» = «unless» + فعل مثبت: «unless we leave».',
      'if… not = unless + positive verb.',
      '«if we don’t» = «unless» + verbo afirmativo: «unless we leave».',
    )),
    ru4('fce-u12-s2-q10', 5, 'I had only just closed my laptop when the power went off.', 'SOONER', 'No ___ my laptop than the power went off.', ['sooner had I closed'], x(
      '« No sooner » en tête → inversion « had I closed », puis « than » : « No sooner had I closed ».',
      '«No sooner» في أول الجملة ← قلب «had I closed» ثم «than»: «No sooner had I closed».',
      'No sooner + inversion: had I closed.',
      '«No sooner» al inicio → inversión «had I closed», luego «than»: «No sooner had I closed».',
    )),
  ],
);
