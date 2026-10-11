import type { Unit } from '../../../../types';
import { lesson, unit, x } from '../../../curriculum/build';
import { ru3 } from '../build';

/** Unit fce-u03: word formation with noun and adjective suffixes (Use of English Part 3). */
export const fceU03: Unit = unit(
  {
    id: 'fce-u03',
    emoji: '🧩',
    level: 3,
    part: 'RU3',
    title: x('Formation des mots : les suffixes', 'تكوين الكلمات: اللواحق', 'Word formation: suffixes', 'Formación de palabras: sufijos'),
    subtitle: x(
      'Noms et adjectifs : -tion, -ment, -ness, -ity, -ence, -ful, -ous, -able, -ive, -al',
      'الأسماء والصفات: ‎-tion و‎-ment و‎-ness و‎-ity و‎-ence و‎-ful و‎-ous و‎-able و‎-ive و‎-al',
      'Nouns and adjectives: -tion, -ment, -ness, -ity, -ence, -ful, -ous, -able, -ive, -al',
      'Sustantivos y adjetivos: -tion, -ment, -ness, -ity, -ence, -ful, -ous, -able, -ive, -al',
    ),
    lesson: lesson(
      x(
        'Transformer un mot en CAPITALES en nom ou en adjectif pour compléter la phrase (Partie 3).',
        'تحويل الكلمة المكتوبة بالحروف الكبيرة إلى اسم أو صفة لإكمال الجملة (الجزء 3).',
        'Turn the word in CAPITALS into a noun or an adjective that fits the gap (Part 3).',
        'Transformar la palabra en MAYÚSCULAS en un sustantivo o un adjetivo que complete la frase (Parte 3).',
      ),
      [
        x(
          'Regardez d’abord les mots autour du trou : après « the », « a », « his » ou une préposition, il faut un nom ; avant un nom ou après « be », « very », « so », il faut un adjectif.',
          'انظر أولًا إلى الكلمات المحيطة بالفراغ: بعد «the» و«a» و«his» أو حرف جر نحتاج إلى اسم، وقبل اسم أو بعد «be» و«very» و«so» نحتاج إلى صفة.',
          'Look around the gap: after a determiner or preposition you need a noun; before a noun or after “be/very” an adjective.',
          'Mira primero las palabras alrededor del hueco: después de «the», «a», «his» o una preposición va un sustantivo; antes de un sustantivo o después de «be», «very», «so», un adjetivo.',
        ),
        x(
          'Suffixes de noms : -tion (inform → information), -ment (employ → employment), -ness (kind → kindness), -ity (popular → popularity), -ence (differ → difference).',
          'لواحق الأسماء: ‎-tion (inform ← information)، و‎-ment (employ ← employment)، و‎-ness (kind ← kindness)، و‎-ity (popular ← popularity)، و‎-ence (differ ← difference).',
          'Noun suffixes: -tion, -ment, -ness, -ity, -ence.',
          'Sufijos de sustantivo: -tion (inform → information), -ment (employ → employment), -ness (kind → kindness), -ity (popular → popularity), -ence (differ → difference).',
        ),
        x(
          'Suffixes d’adjectifs : -ful (use → useful), -ous (danger → dangerous), -able (comfort → comfortable), -ive (attract → attractive), -al (nation → national).',
          'لواحق الصفات: ‎-ful (use ← useful)، و‎-ous (danger ← dangerous)، و‎-able (comfort ← comfortable)، و‎-ive (attract ← attractive)، و‎-al (nation ← national).',
          'Adjective suffixes: -ful, -ous, -able, -ive, -al.',
          'Sufijos de adjetivo: -ful (use → useful), -ous (danger → dangerous), -able (comfort → comfortable), -ive (attract → attractive), -al (nation → national).',
        ),
        x(
          'Attention à l’orthographe, comptée à l’examen : on perd souvent une lettre (fame → famous, able → ability, essence → essential).',
          'انتبه إلى الإملاء فهو محسوب في الامتحان: كثيرًا ما يسقط حرف (fame ← famous، وable ← ability، وessence ← essential).',
          'Spelling counts: letters often change (fame → famous, able → ability).',
          'Cuidado con la ortografía, que cuenta en el examen: a menudo se pierde una letra (fame → famous, able → ability, essence → essential).',
        ),
      ],
      'Thank you for your KINDNESS: the guide gave us some really USEFUL advice.',
      x(
        '« your » + trou → nom : kind → kindness ; « really » + trou + nom → adjectif : use → useful.',
        '«your» + فراغ ← اسم: kind ← kindness، و«really» + فراغ + اسم ← صفة: use ← useful.',
        'After “your” → noun; before “advice” → adjective.',
        '«your» + hueco → sustantivo: kind → kindness; «really» + hueco + sustantivo → adjetivo: use → useful.',
      ),
    ),
  },
  [
    ru3('fce-u03-s1-q1', 3, 'The ___ of the new metro line has made life much easier for commuters in Algiers.', 'CONSTRUCT', ['construction'], x(
      'Après « The » et avant « of », il faut un nom : construct → construction (-tion).',
      'بعد «The» وقبل «of» نحتاج إلى اسم: construct ← construction (‎-tion).',
      '“The ___ of” needs a noun: construction.',
      'Después de «The» y antes de «of» hace falta un sustantivo: construct → construction (-tion).',
    )),
    ru3('fce-u03-s1-q2', 3, 'Thank you for your ___ – you really didn’t have to help me carry all those boxes.', 'KIND', ['kindness'], x(
      'Après « your », il faut un nom : kind → kindness (-ness).',
      'بعد «your» نحتاج إلى اسم: kind ← kindness (‎-ness).',
      'After “your” → noun: kindness.',
      'Después de «your» hace falta un sustantivo: kind → kindness (-ness).',
    )),
    ru3('fce-u03-s1-q3', 3, 'Many graduates in Lisbon struggle to find full-time ___ after university.', 'EMPLOY', ['employment'], x(
      '« find full-time … » demande un nom indénombrable : employ → employment (-ment).',
      '«find full-time …» تحتاج إلى اسم غير معدود: employ ← employment (‎-ment).',
      '“full-time ___” → the noun employment.',
      '«find full-time …» pide un sustantivo incontable: employ → employment (-ment).',
    )),
    ru3('fce-u03-s1-q4', 3, 'The band’s ___ grew very quickly after one of their songs went viral.', 'POPULAR', ['popularity'], x(
      'Après le possessif « The band’s », il faut un nom : popular → popularity (-ity).',
      'بعد صيغة الملكية «The band’s» نحتاج إلى اسم: popular ← popularity (‎-ity).',
      'After “The band’s” → noun: popularity.',
      'Después del posesivo «The band’s» hace falta un sustantivo: popular → popularity (-ity).',
    )),
    ru3('fce-u03-s1-q5', 3, 'There is a huge ___ between watching a match on TV and being in the stadium.', 'DIFFER', ['difference'], x(
      '« a huge … between A and B » → nom : differ → difference (-ence).',
      '«a huge … between A and B» ← اسم: differ ← difference (‎-ence).',
      '“a huge ___ between” → difference.',
      '«a huge … between A and B» → sustantivo: differ → difference (-ence).',
    )),
    ru3('fce-u03-s1-q6', 3, 'Our guide gave us some really ___ advice, so we managed to avoid all the tourist traps.', 'USE', ['useful'], x(
      'Adjectif devant « advice » ; « so we managed to avoid… » montre que le conseil a aidé : use → useful (-ful), pas useless.',
      'صفة قبل «advice»، وعبارة «so we managed to avoid…» تبيّن أن النصيحة أفادت: use ← useful (‎-ful) وليس useless.',
      'Adjective; the advice helped, so useful, not useless.',
      'Adjetivo delante de «advice»; «so we managed to avoid…» muestra que el consejo ayudó: use → useful (-ful), no useless.',
    )),
    ru3('fce-u03-s1-q7', 3, 'Cycling in the city centre can be quite ___ because of the heavy traffic.', 'DANGER', ['dangerous'], x(
      'Après « can be quite », il faut un adjectif : danger → dangerous (-ous).',
      'بعد «can be quite» نحتاج إلى صفة: danger ← dangerous (‎-ous).',
      'After “be quite” → adjective: dangerous.',
      'Después de «can be quite» hace falta un adjetivo: danger → dangerous (-ous).',
    )),
    ru3('fce-u03-s1-q8', 3, 'The hostel room was small but very ___, and we slept well every night.', 'COMFORT', ['comfortable'], x(
      '« very » + adjectif ; « we slept well » confirme le sens positif : comfort → comfortable (-able).',
      '«very» + صفة، و«we slept well» تؤكد المعنى الإيجابي: comfort ← comfortable (‎-able).',
      '“very” + adjective: comfortable.',
      '«very» + adjetivo; «we slept well» confirma el sentido positivo: comfort → comfortable (-able).',
    )),
    ru3('fce-u03-s1-q9', 3, 'Lower prices have made train travel more ___ than flying for many families.', 'ATTRACT', ['attractive'], x(
      '« more … than » encadre un adjectif comparatif : attract → attractive (-ive).',
      '«more … than» تحيط بصفة في صيغة المقارنة: attract ← attractive (‎-ive).',
      '“more ___ than” → adjective: attractive.',
      '«more … than» rodea un adjetivo comparativo: attract → attractive (-ive).',
    )),
    ru3('fce-u03-s1-q10', 3, 'Being able to write basic code is now an ___ skill for many jobs.', 'ESSENCE', ['essential'], x(
      'Entre « an » et le nom « skill », il faut un adjectif : essence → essential (-al ; le e final devient ti).',
      'بين «an» والاسم «skill» نحتاج إلى صفة: essence ← essential (‎-al مع تغيّر الحروف الأخيرة).',
      'Adjective before “skill”: essential.',
      'Entre «an» y el sustantivo «skill» hace falta un adjetivo: essence → essential (-al; la e final pasa a ti).',
    )),
  ],
  [
    ru3('fce-u03-s2-q1', 3, 'For more ___ about the summer language course, visit the university website.', 'INFORM', ['information'], x(
      'Après « For more », il faut un nom indénombrable : inform → information (-tion).',
      'بعد «For more» نحتاج إلى اسم غير معدود: inform ← information (‎-tion).',
      '“For more ___” → noun: information.',
      'Después de «For more» hace falta un sustantivo incontable: inform → information (-tion).',
    )),
    ru3('fce-u03-s2-q2', 3, 'Hamza felt a great sense of ___ when he crossed the finish line of his first marathon.', 'ACHIEVE', ['achievement'], x(
      '« a sense of » + nom : achieve → achievement (-ment).',
      '«a sense of» + اسم: achieve ← achievement (‎-ment).',
      '“a sense of” + noun: achievement.',
      '«a sense of» + sustantivo: achieve → achievement (-ment).',
    )),
    ru3('fce-u03-s2-q3', 3, 'Lack of sleep can cause headaches and ___ during the day.', 'TIRED', ['tiredness'], x(
      '« headaches and … » : on coordonne deux noms ; tired → tiredness (-ness).',
      '«headaches and …»: نعطف اسمًا على اسم؛ tired ← tiredness (‎-ness).',
      'Two nouns joined by “and”: tiredness.',
      '«headaches and …»: se coordinan dos sustantivos; tired → tiredness (-ness).',
    )),
    ru3('fce-u03-s2-q4', 3, 'Her ___ to speak four languages helped her get a summer job in tourism.', 'ABLE', ['ability'], x(
      'Après « Her », il faut un nom ; « ability to + verbe » : able → ability (-ity, le e disparaît).',
      'بعد «Her» نحتاج إلى اسم، و«ability to + فعل»: able ← ability (‎-ity مع حذف e).',
      'After “Her” → noun: ability to…',
      'Después de «Her» hace falta un sustantivo; «ability to + verbo»: able → ability (-ity, desaparece la e).',
    )),
    ru3('fce-u03-s2-q5', 3, 'Sofia’s ___ grew a lot after she started giving short presentations in class.', 'CONFIDENT', ['confidence'], x(
      'Après le possessif « Sofia’s », il faut un nom : confident → confidence (-ence).',
      'بعد صيغة الملكية «Sofia’s» نحتاج إلى اسم: confident ← confidence (‎-ence).',
      'After “Sofia’s” → noun: confidence.',
      'Después del posesivo «Sofia’s» hace falta un sustantivo: confident → confidence (-ence).',
    )),
    ru3('fce-u03-s2-q6', 3, 'Be ___ when you cross the road near the school – drivers often go too fast there.', 'CARE', ['careful'], x(
      '« Be » + adjectif ; le danger des voitures appelle un conseil de prudence : care → careful (-ful).',
      '«Be» + صفة، وخطر السيارات يستدعي نصيحة بالحذر: care ← careful (‎-ful).',
      '“Be ___” → adjective: careful.',
      '«Be» + adjetivo; el peligro de los coches pide prudencia: care → careful (-ful).',
    )),
    ru3('fce-u03-s2-q7', 3, 'The mountain town of Chefchaouen is ___ for its blue streets and walls.', 'FAME', ['famous'], x(
      '« be … for » + adjectif : fame → famous (-ous, le e disparaît).',
      '«be … for» + صفة: fame ← famous (‎-ous مع حذف e).',
      '“is ___ for” → famous.',
      '«be … for» + adjetivo: fame → famous (-ous, desaparece la e).',
    )),
    ru3('fce-u03-s2-q8', 3, 'Is the water from this fountain ___? I’m really thirsty.', 'DRINK', ['drinkable'], x(
      '« Is the water … ? » demande un adjectif ; « thirsty » indique qu’on veut la boire : drink → drinkable (-able).',
      '«Is the water … ?» تحتاج إلى صفة، و«thirsty» تدل على الرغبة في الشرب: drink ← drinkable (‎-able).',
      'Adjective after “is”: drinkable.',
      '«Is the water … ?» pide un adjetivo; «thirsty» indica que se quiere beber: drink → drinkable (-able).',
    )),
    ru3('fce-u03-s2-q9', 3, 'The new phone is so ___ that most students simply can’t afford it.', 'EXPENSE', ['expensive'], x(
      '« so … that » + adjectif ; « can’t afford it » indique le prix élevé : expense → expensive (-ive).',
      '«so … that» + صفة، و«can’t afford it» تدل على ارتفاع السعر: expense ← expensive (‎-ive).',
      '“so ___ that” → adjective: expensive.',
      '«so … that» + adjetivo; «can’t afford it» indica un precio alto: expense → expensive (-ive).',
    )),
    ru3('fce-u03-s2-q10', 3, 'Thousands of fans travelled to Cairo to support the ___ team in the final.', 'NATION', ['national'], x(
      'Adjectif devant le nom « team » : nation → national (-al).',
      'صفة قبل الاسم «team»: nation ← national (‎-al).',
      'Adjective before “team”: national.',
      'Adjetivo delante del sustantivo «team»: nation → national (-al).',
    )),
  ],
);
