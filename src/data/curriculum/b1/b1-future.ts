import type { Unit } from '../../../types';
import { g, lesson, listen, order, respond, unit, x } from '../build';

export const b1Future: Unit = unit(
  {
    id: 'b1-future',
    emoji: '🔮',
    level: 3,
    part: 'R5',
    title: x('Futur, conditionnel et comparaisons', 'المستقبل والشرط والمقارنة', 'Future, conditionals and comparisons', 'Futuro, condicional y comparaciones'),
    subtitle: x('will, going to, if, -er / more', 'will وgoing to وif و-er/more', 'will, going to, if, -er / more', 'will, going to, if, -er / more'),
    lesson: lesson(
      x('Parler de projets et de conditions, et comparer des offres.', 'التحدث عن المشاريع والشروط ومقارنة العروض.', 'Talk about plans and conditions, and compare offers.', 'Hablar de planes y condiciones, y comparar ofertas.'),
      [
        x('Condition réelle : if + présent, will + verbe. Jamais « will » après « if ».', 'الشرط الواقعي: if + مضارع ثم will + فعل. لا نضع «will» بعد «if» أبدًا.', 'Real condition: if + present, will + verb. Never “will” after “if”.', 'Condición real: if + presente, y will + verbo. Nunca «will» después de «if».'),
        x('Comparatif : adjectif court + -er (cheaper) ; long → more + adjectif (more expensive) ; suivi de « than ».', 'المقارنة: صفة قصيرة + -er (cheaper)، وطويلة ← more + صفة (more expensive)، وتليها «than».', 'Comparative: short adj + -er; long → more + adj; then “than”.', 'Comparativo: adjetivo corto + -er (cheaper); largo → more + adjetivo (more expensive); seguido de «than».'),
        x('Superlatif : the cheapest, the most expensive.', 'التفضيل: the cheapest وthe most expensive.', 'Superlative: the cheapest, the most expensive.', 'Superlativo: the cheapest, the most expensive.'),
      ],
      'If the price is lower than last year, we will order more units.',
      x('if + présent (is), puis will ; comparatif « lower than ».', 'if + مضارع (is) ثم will، والمقارنة «lower than».', 'if + present, then will; “lower than”.', 'if + presente (is) y luego will; comparativo «lower than».'),
    ),
  },
  [
    g('b1-f-q1', 3, 'If our supplier ___ its prices again, we will look for a new one.', ['raises', 'will raise', 'raised', 'raising'], x(
      'Après « if » (condition réelle), présent simple et non « will » : « raises ».',
      'بعد «if» (شرط واقعي) نستعمل المضارع البسيط لا «will»: «raises».',
      'After “if” (real condition): present simple, not “will”: “raises”.',
      'Después de «if» (condición real), presente simple y no «will»: «raises».',
    )),
    g('b1-f-q2', 3, 'The new model is ___ than the old one, so we can carry it easily.', ['lighter', 'lightest', 'more light', 'light'], x(
      'Adjectif court + -er + than : « lighter than ».',
      'صفة قصيرة + -er + than: «lighter than».',
      'Short adjective + -er + than.',
      'Adjetivo corto + -er + than: «lighter than».',
    )),
    g('b1-f-q3', 3, 'This is the ___ expensive hotel in the city center.', ['most', 'more', 'much', 'very'], x(
      'Superlatif d’un adjectif long : « the most expensive ».',
      'تفضيل الصفة الطويلة: «the most expensive».',
      'Superlative of a long adjective: “the most”.',
      'Superlativo de un adjetivo largo: «the most expensive».',
    )),
    g('b1-f-q4', 3, 'Look at those clouds. It ___ rain this afternoon.', ['is going to', 'will be', 'is', 'goes to'], x(
      'Prévision fondée sur un indice visible → « be going to ».',
      'توقّع مبني على دليل مرئي ← «be going to».',
      'Prediction from visible evidence → “going to”.',
      'Predicción basada en una evidencia visible → «be going to».',
    )),
    g('b1-f-q5', 3, 'We will not sign the contract ___ the price is reduced.', ['unless', 'if', 'because', 'so'], x(
      '« Unless » = sauf si. Le sens : pas de signature sans baisse du prix.',
      '«Unless» = ما لم. المعنى: لا توقيع دون تخفيض السعر.',
      '“Unless” = except if.',
      '«Unless» = a menos que. El sentido: no se firma sin una bajada de precio.',
    )),
    g('b1-f-q6', 3, 'Our sales were ___ this quarter than in the previous one.', ['better', 'good', 'best', 'more good'], x(
      'Comparatif irrégulier : good → better → the best.',
      'مقارنة شاذة: good ← better ← the best.',
      'Irregular: good → better → best.',
      'Comparativo irregular: good → better → the best.',
    )),
    order('b1-f-o1', 'We will call you if we need more information', x('« if » introduit la condition.', '«if» تبدأ الشرط.', '“if” introduces the condition.', '«if» introduce la condición.'), x(
      'La proposition principale (we will call you) peut précéder « if ».',
      'يمكن أن تسبق الجملة الرئيسية (we will call you) أداة «if».',
      'The main clause can come before “if”.',
      'La oración principal (we will call you) puede ir antes de «if».',
    )),
  ],
  [
    g('b1-f-s2-q1', 3, 'If it ___ tomorrow, the outdoor event will move inside.', ['rains', 'will rain', 'rained', 'raining'], x(
      'Condition réelle : if + présent simple, puis will. Jamais « will » après « if ».',
      'شرط واقعي: if + مضارع بسيط ثم will، ولا نضع «will» بعد «if».',
      'Real condition: if + present, then will.',
      'Condición real: if + presente simple y luego will. Nunca «will» después de «if».',
    )),
    g('b1-f-s2-q2', 3, 'We will miss the train ___ we leave now.', ['unless', 'if', 'because', 'so'], x(
      '« Unless » = sauf si : on rate le train si on ne part pas maintenant.',
      '«Unless» = ما لم: سيفوتنا القطار ما لم نغادر الآن.',
      '“Unless” = if … not.',
      '«Unless» = a menos que: perderemos el tren si no salimos ahora.',
    )),
    g('b1-f-s2-q3', 3, 'The new laptop is ___ than the old model, but it is much faster.', ['more expensive', 'expensiver', 'most expensive', 'as expensive'], x(
      'Adjectif long + than → « more expensive than ».',
      'صفة طويلة + than ← «more expensive than».',
      'Long adjective → “more … than”.',
      'Adjetivo largo + than → «more expensive than».',
    )),
    g('b1-f-s2-q4', 3, 'I think the meeting ___ late today. There are many topics.', ['will finish', 'finishes', 'is finish', 'finished'], x(
      'Prévision personnelle (« I think ») → « will ».',
      'توقّع شخصي («I think») ← «will».',
      'Opinion about the future → “will”.',
      'Predicción personal («I think») → «will».',
    )),
    g('b1-f-s2-q5', 3, 'This is ___ hotel we have ever stayed in.', ['the most comfortable', 'the more comfortable', 'most comfortable', 'the comfortablest'], x(
      'Superlatif d’un adjectif long avec « the » : « the most comfortable ».',
      'تفضيل صفة طويلة مع «the»: «the most comfortable».',
      '“The most” + long adjective.',
      'Superlativo de un adjetivo largo con «the»: «the most comfortable».',
    )),
    g('b1-f-s2-q6', 3, 'If you ___ the form today, we will process it tomorrow.', ['send', 'will send', 'sent', 'sending'], x(
      'if + présent simple : « If you send… ».',
      'if + مضارع بسيط: «If you send…».',
      'if + present simple.',
      'if + presente simple: «If you send…».',
    )),
    g('b1-f-s2-q7', 3, 'Our new office is not ___ big as the old one, but it is more modern.', ['as', 'than', 'more', 'that'], x(
      'Comparaison d’égalité : « not as … as ».',
      'المساواة: «not as … as».',
      '“Not as … as”.',
      'Comparación de igualdad: «not as … as».',
    )),
    order('b1-f-s2-o1', 'If the price is right we will order more', x('Commence par « If ».', 'ابدأ بـ «If».', 'Start with “If”.', 'Empieza por «If».'), x(
      'If + présent (is), puis la conséquence avec « will ».',
      'If + مضارع (is) ثم النتيجة بـ «will».',
      'If + present, then “will”.',
      'If + presente (is) y luego la consecuencia con «will».',
    )),
    respond('b1-f-s2-l1', 3, 'What will you do if the client says no?', ['We’ll try another supplier.', 'He said no yesterday.', 'At the meeting.'], x(
      'Question sur un plan B → on répond avec « will ».',
      'سؤال عن خطة بديلة ← نجيب بـ «will».',
      'A back-up plan with “will”.',
      'Pregunta sobre un plan B → se responde con «will».',
    )),
    listen('b1-f-s2-l2', 'L3', 3, 'W: Are you going to drive to the conference?\nM: No, I’m taking the train. It’s cheaper, and I can work during the trip.', 'Why is the man taking the train?', ['It is cheaper and he can work', 'It is faster than driving', 'His car is broken', 'The conference is near the station'], x(
      '« It’s cheaper, and I can work during the trip » : deux raisons.',
      '«It’s cheaper, and I can work during the trip»: سببان.',
      'Two reasons: cheaper and he can work.',
      '«It’s cheaper, and I can work during the trip»: dos razones.',
    )),
  ],
  [
    g('b1-f-s3-q1', 3, 'If the printer ___ again, call the technician.', ['breaks', 'will break', 'broke', 'is break'], x(
      'if + présent simple, puis un impératif (call).',
      'if + مضارع بسيط ثم صيغة أمر (call).',
      'if + present, then an imperative.',
      'if + presente simple y luego un imperativo (call).',
    )),
    g('b1-f-s3-q2', 3, 'The flight to Cairo is ___ than the flight to Rome.', ['shorter', 'more short', 'shortest', 'short'], x(
      'Adjectif court → « shorter than ».',
      'صفة قصيرة ← «shorter than».',
      'Short adjective → “shorter”.',
      'Adjetivo corto → «shorter than».',
    )),
    g('b1-f-s3-q3', 3, 'Prices will rise ___ we find a cheaper supplier.', ['unless', 'if', 'so', 'because'], x(
      '« Unless » = à moins que : les prix montent sauf si on trouve moins cher.',
      '«Unless» = ما لم: الأسعار ترتفع ما لم نجد مورّدًا أرخص.',
      '“Unless” = except if.',
      '«Unless» = a menos que: los precios subirán salvo que encontremos algo más barato.',
    )),
    g('b1-f-s3-q4', 3, 'I’m sure our customers ___ the new design.', ['will love', 'love', 'loved', 'are love'], x(
      'Prévision (« I’m sure ») → « will ».',
      'توقّع («I’m sure») ← «will».',
      'Prediction → “will”.',
      'Predicción («I’m sure») → «will».',
    )),
    g('b1-f-s3-q5', 3, 'This is the ___ result we have had in five years.', ['best', 'better', 'good', 'most good'], x(
      'Superlatif irrégulier : « the best ».',
      'تفضيل شاذ: «the best».',
      'Irregular superlative: “the best”.',
      'Superlativo irregular: «the best».',
    )),
    g('b1-f-s3-q6', 3, 'We ___ the contract next week. The meeting is already arranged.', ['are signing', 'sign', 'signed', 'will signing'], x(
      'Rendez-vous déjà fixé → présent continu.',
      'موعد محدد مسبقًا ← المضارع المستمر.',
      'An arrangement → present continuous.',
      'Cita ya fijada → presente continuo.',
    )),
    g('b1-f-s3-q7', 3, 'The second hotel is much ___ to the airport.', ['closer', 'close', 'closest', 'more close'], x(
      '« Much » renforce un comparatif : « much closer ».',
      '«Much» تقوّي صيغة المقارنة: «much closer».',
      '“Much” + comparative.',
      '«Much» refuerza un comparativo: «much closer».',
    )),
    order('b1-f-s3-o1', 'We will call you as soon as the parts arrive', x('« as soon as » + présent.', '«as soon as» + مضارع.', '“as soon as” + present.', '«as soon as» + presente.'), x(
      'Comme après « if », on met le présent après « as soon as » (dès que).',
      'كما بعد «if»، نستعمل المضارع بعد «as soon as» (بمجرد أن).',
      'Present after “as soon as”, like after “if”.',
      'Como después de «if», se usa el presente tras «as soon as» (en cuanto).',
    )),
    respond('b1-f-s3-l1', 3, 'Will the new store open before the holidays?', ['Yes, if the work finishes on time.', 'It’s a big store.', 'I went there yesterday.'], x(
      'Réponse conditionnelle naturelle : oui, si les travaux finissent à temps.',
      'رد شرطي طبيعي: نعم إذا انتهت الأشغال في موعدها.',
      'Yes, with a condition.',
      'Respuesta condicional natural: sí, si las obras terminan a tiempo.',
    )),
    listen('b1-f-s3-l2', 'L4', 3, 'Good news, everyone. If sales continue to grow, we will open two more branches next year. We will share more details at the next meeting.', 'What will happen if sales continue to grow?', ['Two more branches will open', 'Salaries will increase', 'The company will move', 'A new product will be launched'], x(
      '« If sales continue to grow, we will open two more branches ».',
      'الشرط مذكور صراحة: «If sales continue to grow, we will open two more branches».',
      'Two more branches.',
      '«If sales continue to grow, we will open two more branches»: dos sucursales más.',
    )),
  ],
);
