import type { Unit } from '../../../../types';
import { lesson, unit, x } from '../../../curriculum/build';
import { ru4 } from '../build';

/** Unit fce-u08: key word transformation (conditionals, wishes, modals of deduction and obligation). */
export const fceU08: Unit = unit(
  {
    id: 'fce-u08',
    emoji: '🤔',
    level: 5,
    part: 'RU4',
    title: x(
      'Transformations : conditions, regrets, déductions',
      'إعادة الصياغة: الشرط والتمني والاستنتاج',
      'Transformations: conditions, regrets, deductions',
      'Transformaciones: condiciones, deseos, deducciones',
    ),
    subtitle: x(
      'unless, otherwise, wish, if only, must have, needn’t have',
      'unless وotherwise وwish وif only وmust have وneedn’t have',
      'unless, otherwise, wish, if only, must have, needn’t have',
      'unless, otherwise, wish, if only, must have, needn’t have',
    ),
    lesson: lesson(
      x(
        'Réécrire conditions, regrets et déductions avec le mot clé imposé, sans changer le sens.',
        'إعادة صياغة جمل الشرط والتمني والاستنتاج بالكلمة المفتاحية المفروضة دون تغيير المعنى.',
        'Rewrite conditions, regrets and deductions with the key word.',
        'Reescribir condiciones, deseos y deducciones con la palabra clave impuesta, sin cambiar el sentido.',
      ),
      [
        x(
          '« unless » = « if … not » (unless you book = if you don’t book) ; « otherwise » = sinon ; « If it hadn’t been for + nom » = sans (thanks to X → if it hadn’t been for X).',
          '«unless» = «if … not» (unless you book = if you don’t book)؛ «otherwise» = وإلا؛ «If it hadn’t been for + اسم» = لولا (thanks to X ← if it hadn’t been for X).',
          'unless = if not; otherwise = or else; if it hadn’t been for = without.',
          '«unless» = «if … not» (unless you book = if you don’t book); «otherwise» = si no; «If it hadn’t been for + sustantivo» = de no ser por (thanks to X → if it hadn’t been for X).',
        ),
        x(
          'Regret : wish / if only + prétérit pour le présent (I wish I could…), + past perfect pour le passé (I wish I had studied), + would pour une habitude agaçante d’autrui.',
          'التمني والندم: wish / if only + الماضي البسيط للحاضر (I wish I could…)، + الماضي التام للماضي (I wish I had studied)، + would لعادة مزعجة عند شخص آخر.',
          'wish + past (now), + past perfect (past), + would (annoying habit).',
          'Deseo y lamento: wish / if only + pasado para el presente (I wish I could…), + past perfect para el pasado (I wish I had studied), + would para un hábito molesto de otro.',
        ),
        x(
          'Déduction sur le passé : must have done (sûr que oui), can’t / couldn’t have done (sûr que non).',
          'الاستنتاج عن الماضي: must have done (متأكد أنه حدث)، can’t / couldn’t have done (متأكد أنه لم يحدث).',
          'Past deduction: must have / can’t have + participle.',
          'Deducción sobre el pasado: must have done (seguro que sí), can’t / couldn’t have done (seguro que no).',
        ),
        x(
          'Obligation et critique : should have done (c’était une erreur de ne pas le faire), needn’t have done (fait, mais inutile), didn’t have to (pas obligé, souvent pas fait).',
          'الإلزام واللوم: should have done (كان خطأ ألا تفعله)، needn’t have done (فُعل لكنه لم يكن ضروريًا)، didn’t have to (لم يكن مُلزمًا، وغالبًا لم يُفعل).',
          'should have / needn’t have / didn’t have to.',
          'Obligación y crítica: should have done (fue un error no hacerlo), needn’t have done (se hizo, pero era innecesario), didn’t have to (no era obligatorio, a menudo no se hizo).',
        ),
      ],
      'I’m sure she missed the bus. → She must have missed the bus.',
      x(
        '« I’m sure » + fait passé → « must have » + participe passé.',
        '«I’m sure» + حدث في الماضي ← «must have» + اسم المفعول.',
        'Certainty about the past → must have + participle.',
        '«I’m sure» + hecho pasado → «must have» + participio.',
      ),
    ),
  },
  [
    ru4('fce-u08-s1-q1', 5, 'If you don’t book early, you won’t get a seat on the night train.', 'UNLESS', 'You won’t get a seat on the night train ___ early.', ['unless you book'], x(
      '« If you don’t book » = « unless you book » : unless contient déjà la négation, le verbe reste affirmatif.',
      '«If you don’t book» = «unless you book»: unless تتضمن النفي، فيبقى الفعل مثبتًا.',
      'unless = if not, so the verb is positive.',
      '«If you don’t book» = «unless you book»: unless ya lleva la negación, el verbo queda en afirmativa.',
    )),
    ru4('fce-u08-s1-q2', 5, 'You need to leave now or you’ll miss the last bus.', 'OTHERWISE', 'You need to leave now, ___ the last bus.', ['otherwise you’ll miss', 'otherwise you will miss'], x(
      '« or » = « otherwise » (sinon), suivi du même futur : « otherwise you’ll miss ».',
      '«or» = «otherwise» (وإلا)، ويليها المستقبل نفسه: «otherwise you’ll miss».',
      'or = otherwise + you’ll miss.',
      '«or» = «otherwise» (si no), seguido del mismo futuro: «otherwise you’ll miss».',
    )),
    ru4('fce-u08-s1-q3', 5, 'Thanks to Mehdi’s help, I passed my driving test.', 'BEEN', 'If it ___ Mehdi’s help, I wouldn’t have passed my driving test.', ['hadn’t been for', 'had not been for'], x(
      '« Thanks to X » au passé → « If it hadn’t been for X » (troisième conditionnel).',
      '«Thanks to X» في الماضي ← «If it hadn’t been for X» (الشرط من النوع الثالث).',
      'Thanks to X → if it hadn’t been for X.',
      '«Thanks to X» en pasado → «If it hadn’t been for X» (tercer condicional).',
    )),
    ru4('fce-u08-s1-q4', 5, 'I regret not applying for the summer course in Dublin.', 'WISH', 'I ___ for the summer course in Dublin.', ['wish I had applied', 'wish I’d applied'], x(
      'Regret sur le passé → wish + past perfect : « wish I had applied ».',
      'ندم على الماضي ← wish + الماضي التام: «wish I had applied».',
      'Past regret: wish + past perfect.',
      'Lamento sobre el pasado → wish + past perfect: «wish I had applied».',
    )),
    ru4('fce-u08-s1-q5', 5, 'It’s a pity I can’t speak Spanish.', 'ONLY', 'If ___ Spanish.', ['only I could speak', 'only I spoke'], x(
      'Regret sur le présent → if only + prétérit ; « can’t » devient « could » : « If only I could speak ».',
      'ندم على الحاضر ← if only + الماضي؛ «can’t» تصبح «could»: «If only I could speak».',
      'Present regret: if only + could.',
      'Lamento sobre el presente → if only + pasado; «can’t» pasa a «could»: «If only I could speak».',
    )),
    ru4('fce-u08-s1-q6', 5, 'I’m sure Leila forgot about the meeting.', 'MUST', 'Leila ___ about the meeting.', ['must have forgotten'], x(
      '« I’m sure » + fait passé → « must have » + participe passé « forgotten ».',
      '«I’m sure» + حدث في الماضي ← «must have» + اسم المفعول «forgotten».',
      'Past certainty → must have forgotten.',
      '«I’m sure» + hecho pasado → «must have» + participio «forgotten».',
    )),
    ru4('fce-u08-s1-q7', 5, 'It’s impossible that Sami saw the film; it hasn’t come out yet.', 'HAVE', 'Sami ___ the film; it hasn’t come out yet.', ['can’t have seen', 'cannot have seen', 'couldn’t have seen', 'could not have seen'], x(
      '« It’s impossible that » + passé → déduction négative « can’t / couldn’t have » + participe « seen ».',
      '«It’s impossible that» + الماضي ← استنتاج منفي «can’t / couldn’t have» + اسم المفعول «seen».',
      'Impossible in the past → can’t have seen.',
      '«It’s impossible that» + pasado → deducción negativa «can’t / couldn’t have» + participio «seen».',
    )),
    ru4('fce-u08-s1-q8', 5, 'We took sandwiches, but it wasn’t necessary because lunch was provided.', 'HAVE', 'We ___ sandwiches because lunch was provided.', ['needn’t have taken', 'need not have taken'], x(
      'Action faite mais inutile → « needn’t have » + participe : « needn’t have taken ». « Didn’t have to » laisserait croire qu’ils n’en ont pas pris.',
      'فعل تمّ لكنه لم يكن ضروريًا ← «needn’t have» + اسم المفعول: «needn’t have taken». أما «didn’t have to» فقد توحي بأنهم لم يأخذوها.',
      'Done but unnecessary → needn’t have taken.',
      'Acción hecha pero innecesaria → «needn’t have» + participio: «needn’t have taken». «Didn’t have to» haría pensar que no los llevaron.',
    )),
    ru4('fce-u08-s1-q9', 5, 'It was a mistake not to tell your parents where you were going.', 'TOLD', 'You ___ your parents where you were going.', ['should have told', 'should’ve told', 'ought to have told'], x(
      'Critique d’une action passée non faite → « should have » + participe : « should have told ».',
      'لوم على فعل لم يُنجز في الماضي ← «should have» + اسم المفعول: «should have told».',
      'Past criticism → should have told.',
      'Crítica de algo que no se hizo → «should have» + participio: «should have told».',
    )),
    ru4('fce-u08-s1-q10', 5, 'Thanks to my fast-track ticket, I wasn’t obliged to queue, so I walked straight in.', 'HAVE', 'Thanks to my fast-track ticket, I ___, so I walked straight in.', ['didn’t have to queue', 'did not have to queue'], x(
      '« Wasn’t obliged to » = absence d’obligation → « didn’t have to queue ». « Needn’t have queued » est faux : il n’a pas fait la queue (walked straight in).',
      '«Wasn’t obliged to» = لا إلزام ← «didn’t have to queue». أما «needn’t have queued» فخطأ لأنه لم يقف في الطابور (walked straight in).',
      'No obligation, not done → didn’t have to queue.',
      '«Wasn’t obliged to» = sin obligación → «didn’t have to queue». «Needn’t have queued» es incorrecto: no hizo cola (walked straight in).',
    )),
  ],
  [
    ru4('fce-u08-s2-q1', 5, 'The match will go ahead if it doesn’t rain heavily.', 'UNLESS', 'The match will go ahead ___ heavily.', ['unless it rains'], x(
      '« if it doesn’t rain » = « unless it rains » : présent après unless, sans négation.',
      '«if it doesn’t rain» = «unless it rains»: المضارع بعد unless ودون نفي.',
      'if it doesn’t rain = unless it rains.',
      '«if it doesn’t rain» = «unless it rains»: presente tras unless, sin negación.',
    )),
    ru4('fce-u08-s2-q2', 5, 'If Zoe hadn’t set an alarm, she would have overslept.', 'OTHERWISE', 'Zoe set an alarm; ___ overslept.', ['otherwise she would have', 'otherwise she’d have', 'otherwise she would’ve'], x(
      '« otherwise » remplace la condition irréelle passée ; on garde « would have » + participe : « otherwise she would have ».',
      '«otherwise» تحلّ محلّ الشرط غير الواقعي في الماضي، ونحتفظ بـ «would have» + اسم المفعول: «otherwise she would have».',
      'otherwise + would have + participle.',
      '«otherwise» sustituye la condición irreal pasada; se mantiene «would have» + participio: «otherwise she would have».',
    )),
    ru4('fce-u08-s2-q3', 5, 'The concert was cancelled only because of the storm.', 'FOR', 'If ___ the storm, the concert would not have been cancelled.', ['it hadn’t been for', 'it had not been for'], x(
      '« only because of X » au passé → « If it hadn’t been for X » (sans X, rien ne serait arrivé).',
      '«only because of X» في الماضي ← «If it hadn’t been for X» (لولا X لما حدث ذلك).',
      'Only because of X → if it hadn’t been for X.',
      '«only because of X» en pasado → «If it hadn’t been for X» (sin X, no habría pasado).',
    )),
    ru4('fce-u08-s2-q4', 5, 'My brother keeps borrowing my headphones without asking, and it annoys me.', 'WISH', 'I ___ borrowing my headphones without asking.', ['wish my brother would stop', 'wish he would stop', 'wish he’d stop', 'wish he wouldn’t keep'], x(
      'Habitude agaçante d’une autre personne → wish + would : « wish my brother would stop » (+ -ing).',
      'عادة مزعجة لشخص آخر ← wish + would: «wish my brother would stop» (+ ‎-ing).',
      'Annoying habit → wish + would stop.',
      'Hábito molesto de otra persona → wish + would: «wish my brother would stop» (+ -ing).',
    )),
    ru4('fce-u08-s2-q5', 5, 'I’m sorry I didn’t take any photos at the waterfall.', 'ONLY', 'If ___ some photos at the waterfall.', ['only I had taken', 'only I’d taken'], x(
      'Regret sur le passé → if only + past perfect : « If only I had taken ».',
      'ندم على الماضي ← if only + الماضي التام: «If only I had taken».',
      'Past regret: if only + past perfect.',
      'Lamento sobre el pasado → if only + past perfect: «If only I had taken».',
    )),
    ru4('fce-u08-s2-q6', 5, 'The streets are wet, so I’m sure it rained during the night.', 'MUST', 'It ___ during the night, because the streets are wet.', ['must have rained'], x(
      'Déduction sûre sur le passé, à partir d’un indice (wet streets) → « must have rained ».',
      'استنتاج مؤكد عن الماضي انطلاقًا من دليل (wet streets) ← «must have rained».',
      'Certain past deduction → must have rained.',
      'Deducción segura sobre el pasado a partir de una pista (wet streets) → «must have rained».',
    )),
    ru4('fce-u08-s2-q7', 5, 'There’s no way Hamza wrote this essay on his own.', 'POSSIBLY', 'Hamza ___ this essay on his own.', ['can’t possibly have written', 'cannot possibly have written', 'couldn’t possibly have written', 'could not possibly have written'], x(
      '« There’s no way » = impossible → « can’t / couldn’t possibly have » + participe « written ».',
      '«There’s no way» = مستحيل ← «can’t / couldn’t possibly have» + اسم المفعول «written».',
      'No way → can’t possibly have written.',
      '«There’s no way» = imposible → «can’t / couldn’t possibly have» + participio «written».',
    )),
    ru4('fce-u08-s2-q8', 5, 'Ikram bought a guidebook, but it was unnecessary because her friend lent her one.', 'NEED', 'Ikram ___ a guidebook, because her friend lent her one.', ['need not have bought'], x(
      'Achat fait mais inutile → « need not have bought » (le mot clé NEED doit rester tel quel, donc pas « needn’t »).',
      'شراء تمّ لكنه لم يكن ضروريًا ← «need not have bought» (يجب أن تبقى الكلمة NEED كما هي، فلا نكتب «needn’t»).',
      'Done but unnecessary → need not have bought.',
      'Compra hecha pero innecesaria → «need not have bought» (la palabra NEED no cambia, así que no «needn’t»).',
    )),
    ru4('fce-u08-s2-q9', 5, 'It was wrong of you to post that photo without asking me.', 'SHOULD', 'You ___ that photo without asking me.', ['shouldn’t have posted', 'should not have posted'], x(
      'Critique d’une action passée faite → « shouldn’t have » + participe : « shouldn’t have posted ».',
      'لوم على فعل تمّ في الماضي ← «shouldn’t have» + اسم المفعول: «shouldn’t have posted».',
      'Criticism of a past action → shouldn’t have posted.',
      'Crítica de algo que se hizo → «shouldn’t have» + participio: «shouldn’t have posted».',
    )),
    ru4('fce-u08-s2-q10', 5, 'Visitors are required to switch their phones off in the theatre.', 'SUPPOSED', 'Visitors ___ their phones off in the theatre.', ['are supposed to switch', 'are supposed to turn'], x(
      'Règle à respecter → « be supposed to » + base verbale : « are supposed to switch ».',
      'قاعدة يجب احترامها ← «be supposed to» + المصدر: «are supposed to switch».',
      'Rule → be supposed to + verb.',
      'Norma que se debe cumplir → «be supposed to» + infinitivo: «are supposed to switch».',
    )),
  ],
);
