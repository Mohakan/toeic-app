import type { Unit } from '../../../../types';
import { lesson, unit, x } from '../../../curriculum/build';
import { ru1, ru2 } from '../build';

/** Unit fce-u05: phrasal verbs (Part 1) and linking words (Part 2). */
export const fceU05: Unit = unit(
  {
    id: 'fce-u05',
    emoji: '🔗',
    level: 4,
    part: 'RU1 · RU2',
    title: x('Verbes à particule et mots de liaison', 'الأفعال المركبة وأدوات الربط', 'Phrasal verbs and linking words', 'Phrasal verbs y conectores'),
    subtitle: x('put off, come up with… ; although, despite, unless', 'put off وcome up with… ؛ although وdespite وunless', 'put off, come up with…; although, despite, unless', 'put off, come up with…; although, despite, unless'),
    lesson: lesson(
      x(
        'Reconnaître les verbes à particule de la Partie 1 et les mots de liaison de la Partie 2.',
        'التعرّف على الأفعال المركبة في الجزء الأول وأدوات الربط في الجزء الثاني.',
        'Recognise phrasal verbs in Part 1 and linking words in Part 2.',
        'Reconocer los phrasal verbs de la Parte 1 y los conectores de la Parte 2.',
      ),
      [
        x(
          'Partie 1 : la particule est souvent donnée, c’est le verbe qui change. Vérifiez le sens complet : put off = reporter, turn down = refuser, run out of = ne plus avoir, come up with = trouver (une idée).',
          'الجزء الأول: غالباً ما تُعطى الأداة ويتغير الفعل. تحقق من المعنى الكامل: put off = يؤجل، وturn down = يرفض، وrun out of = ينفد منه، وcome up with = يبتكر (فكرة).',
          'Part 1: the particle is often given; check the full meaning (put off = postpone, turn down = refuse).',
          'Parte 1: la partícula suele estar dada y cambia el verbo. Comprueba el sentido completo: put off = aplazar, turn down = rechazar, run out of = quedarse sin, come up with = idear.',
        ),
        x(
          'Opposition : although / though + proposition (sujet + verbe) ; despite / in spite of + nom ou -ing.',
          'التعارض: although / though + جملة (فاعل + فعل)، وdespite / in spite of + اسم أو صيغة -ing.',
          'Contrast: although + clause; despite / in spite of + noun or -ing.',
          'Contraste: although / though + oración (sujeto + verbo); despite / in spite of + sustantivo o -ing.',
        ),
        x(
          'Condition : unless = if… not ; as long as / so long as = à condition que ; in case = au cas où (précaution).',
          'الشرط: unless = if… not، وas long as / so long as = بشرط أن، وin case = تحسّباً لـ (احتياط).',
          'Condition: unless = if not; as long as = on condition that; in case = as a precaution.',
          'Condición: unless = if… not; as long as / so long as = siempre que; in case = por si (precaución).',
        ),
        x(
          'Contraste entre deux faits : whereas / while. But : so that + sujet + can / could.',
          'المقارنة بين أمرين: whereas / while. والغاية: so that + فاعل + can / could.',
          'Two contrasting facts: whereas / while. Purpose: so that.',
          'Contraste entre dos hechos: whereas / while. Finalidad: so that + sujeto + can / could.',
        ),
      ],
      'Despite the rain, we didn’t put off the trip, although we came back early.',
      x(
        '« Despite » + nom ; « put off » = reporter ; « although » + sujet + verbe.',
        '«Despite» + اسم، و«put off» = يؤجل، و«although» + فاعل + فعل.',
        '“Despite” + noun; “although” + clause.',
        '«Despite» + sustantivo; «put off» = aplazar; «although» + sujeto + verbo.',
      ),
    ),
  },
  [
    ru1('fce-u05-s1-q1', 4, 'The concert has been ___ off until next month because the singer is ill.', ['put', 'called', 'set', 'turned'], x(
      '« put off » = reporter ; « until next month » exclut « called off » (annuler).',
      '«put off» = يؤجل، وعبارة «until next month» تستبعد «called off» (يلغي).',
      '“put off” = postpone; “until next month” rules out “called off”.',
      '«put off» = aplazar; «until next month» descarta «called off» (cancelar).',
    )),
    ru1('fce-u05-s1-q2', 4, 'Leila ___ up with a brilliant idea for the school’s recycling campaign.', ['came', 'caught', 'kept', 'made'], x(
      '« come up with an idea » = trouver une idée.',
      '«come up with an idea» = يبتكر فكرة.',
      '“come up with an idea” = think of it.',
      '«come up with an idea» = ocurrírsele una idea.',
    )),
    ru1('fce-u05-s1-q3', 4, 'We’ve ___ out of bread. Could you buy some on your way home?', ['run', 'given', 'worn', 'gone'], x(
      '« run out of » = ne plus avoir de ; d’où « buy some ».',
      '«run out of» = نفد منه الشيء، ولذلك «buy some».',
      '“run out of” = have none left.',
      '«run out of» = quedarse sin; por eso «buy some».',
    )),
    ru1('fce-u05-s1-q4', 4, 'Karim was offered a place at a university in Montreal, but he ___ it down because the fees were too high.', ['turned', 'put', 'let', 'broke'], x(
      '« turn down an offer » = refuser une offre.',
      '«turn down an offer» = يرفض عرضاً.',
      '“turn down” = refuse.',
      '«turn down an offer» = rechazar una oferta.',
    )),
    ru1('fce-u05-s1-q5', 3, 'Could you ___ after my cat while I’m on holiday?', ['look', 'take', 'care', 'see'], x(
      '« look after » = s’occuper de ; « take after » = ressembler à.',
      '«look after» = يعتني بـ، أما «take after» = يشبه.',
      '“look after” = take care of.',
      '«look after» = cuidar de; «take after» = parecerse a.',
    )),
    ru2('fce-u05-s1-q6', 4, '___ she had studied hard, Amira failed her driving theory test.', ['Although', 'Though', 'While', 'Whilst'], x(
      'Opposition + proposition complète (she had studied) : « Although » (ou Though / While).',
      'تعارض + جملة كاملة (she had studied): «Although» (أو Though / While).',
      'Contrast + clause → “Although”.',
      'Contraste + oración completa (she had studied): «Although» (o Though / While).',
    )),
    ru2('fce-u05-s1-q7', 4, 'In ___ of the heavy rain, the match went ahead.', ['spite'], x(
      '« in spite of » + nom = malgré.',
      '«in spite of» + اسم = على الرغم من.',
      '“in spite of” + noun.',
      '«in spite of» + sustantivo = a pesar de.',
    )),
    ru2('fce-u05-s1-q8', 4, 'You won’t pass the exam ___ you start revising now.', ['unless'], x(
      '« unless » = if… not : tu échoueras si tu ne révises pas.',
      '«unless» = if… not: سترسب إن لم تراجع الآن.',
      '“unless” = if … not.',
      '«unless» = if… not: suspenderás si no repasas ahora.',
    )),
    ru2('fce-u05-s1-q9', 4, 'You can borrow my bike as ___ as you bring it back by six.', ['long'], x(
      '« as long as » = à condition que.',
      '«as long as» = بشرط أن.',
      '“as long as” = on condition that.',
      '«as long as» = siempre que.',
    )),
    ru2('fce-u05-s1-q10', 5, '___ my brother loves crowded cities, I prefer the peace of the countryside.', ['Whereas', 'While', 'Whilst', 'Although', 'Though'], x(
      'Contraste entre deux personnes : « Whereas » (ou While, Although) + proposition.',
      'مقارنة بين شخصين: «Whereas» (أو While أو Although) + جملة.',
      'Contrast between two facts: “Whereas”.',
      'Contraste entre dos personas: «Whereas» (o While, Although) + oración.',
    )),
  ],
  [
    ru1('fce-u05-s2-q1', 4, 'Rania has decided to ___ up running to get fit before the summer.', ['take', 'give', 'set', 'bring'], x(
      '« take up » = commencer une activité ; « give up » contredit « to get fit ».',
      '«take up» = يبدأ نشاطاً، أما «give up» فتناقض «to get fit».',
      '“take up” = start a hobby.',
      '«take up» = empezar una actividad; «give up» contradice «to get fit».',
    )),
    ru1('fce-u05-s2-q2', 4, 'I can’t ___ up with the noise from my neighbours any longer.', ['put', 'keep', 'make', 'catch'], x(
      '« put up with » = supporter, tolérer.',
      '«put up with» = يتحمّل.',
      '“put up with” = tolerate.',
      '«put up with» = soportar, aguantar.',
    )),
    ru1('fce-u05-s2-q3', 3, 'The plane ___ off two hours late because of the fog.', ['took', 'put', 'went', 'made'], x(
      'Un avion « takes off » = décolle.',
      'الطائرة «takes off» = تُقلع.',
      'A plane “takes off”.',
      'Un avión «takes off» = despega.',
    )),
    ru1('fce-u05-s2-q4', 4, 'Mehdi ___ across some old photos of his grandparents while he was tidying the attic.', ['came', 'got', 'went', 'put'], x(
      '« come across » = trouver par hasard.',
      '«come across» = يعثر على الشيء صدفةً.',
      '“come across” = find by chance.',
      '«come across» = encontrar por casualidad.',
    )),
    ru1('fce-u05-s2-q5', 4, 'We need to ___ out how to get to the stadium before the match starts.', ['work', 'carry', 'give', 'take'], x(
      '« work out » = trouver, comprendre (une solution, un trajet).',
      '«work out» = يكتشف أو يتوصّل إلى (حلّ أو طريق).',
      '“work out” = find the answer.',
      '«work out» = averiguar, resolver.',
    )),
    ru2('fce-u05-s2-q6', 4, '___ her injury, Sofia finished the marathon.', ['Despite'], x(
      'Nom seul (her injury) sans « of » : « Despite » ; « Although » demande un verbe.',
      'اسم وحده (her injury) دون «of»: «Despite»، أما «Although» فتحتاج فعلاً.',
      '“Despite” + noun, without “of”.',
      'Sustantivo solo (her injury) sin «of»: «Despite»; «Although» necesita un verbo.',
    )),
    ru2('fce-u05-s2-q7', 4, 'Take an umbrella in ___ it rains this afternoon.', ['case'], x(
      '« in case » = au cas où (précaution).',
      '«in case» = تحسّباً لـ (احتياط).',
      '“in case” = as a precaution.',
      '«in case» = por si acaso (precaución).',
    )),
    ru2('fce-u05-s2-q8', 4, 'I’ll lend you the money ___ long as you pay me back next week.', ['as', 'so'], x(
      '« as long as » (ou « so long as ») = à condition que.',
      '«as long as» (أو «so long as») = بشرط أن.',
      '“as / so long as” = on condition that.',
      '«as long as» (o «so long as») = siempre que.',
    )),
    ru2('fce-u05-s2-q9', 4, 'Hamza went to the library ___ that he could study in peace.', ['so'], x(
      'But : « so that » + sujet + could.',
      'الغاية: «so that» + فاعل + could.',
      'Purpose: “so that” + could.',
      'Finalidad: «so that» + sujeto + could.',
    )),
    ru2('fce-u05-s2-q10', 4, 'Hurry up, ___ we’ll miss the start of the film.', ['or', 'otherwise'], x(
      '« or » / « otherwise » = sinon : conséquence si on ne se dépêche pas.',
      '«or» / «otherwise» = وإلا: النتيجة إن لم نسرع.',
      '“or / otherwise” = if not.',
      '«or» / «otherwise» = si no: consecuencia de no darse prisa.',
    )),
  ],
);
