import type { Unit } from '../../../../types';
import { lesson, unit, x } from '../../../curriculum/build';
import { ru4 } from '../build';

/** Unit fce-u04: key word transformation (passive, reported speech, causative, used to). */
export const fceU04: Unit = unit(
  {
    id: 'fce-u04',
    emoji: '🔄',
    level: 4,
    part: 'RU4',
    title: x(
      'Transformations : passif et discours indirect',
      'إعادة الصياغة: المبني للمجهول والكلام المنقول',
      'Transformations: passive and reported speech',
      'Transformaciones: pasiva y estilo indirecto',
    ),
    subtitle: x(
      'passif, discours indirect, have something done, used to',
      'المبني للمجهول، الكلام المنقول، have something done، used to',
      'passive, reported speech, have something done, used to',
      'pasiva, estilo indirecto, have something done, used to',
    ),
    lesson: lesson(
      x(
        'Réécrire une phrase avec un mot clé imposé, sans changer le sens, en 2 à 5 mots.',
        'إعادة كتابة جملة بكلمة مفتاحية مفروضة دون تغيير المعنى، في 2 إلى 5 كلمات.',
        'Rewrite a sentence with a given key word, same meaning, in 2 to 5 words.',
        'Reescribir una frase con una palabra clave impuesta, sin cambiar el sentido, en 2 a 5 palabras.',
      ),
      [
        x(
          'Méthode : repérer ce qui change entre les deux phrases (sujet, temps), garder le mot clé tel quel et compter les mots (une contraction compte pour deux).',
          'الطريقة: حدّد ما يتغير بين الجملتين (الفاعل، الزمن)، واحتفظ بالكلمة المفتاحية كما هي، وعُدّ الكلمات (الاختصار يُحسب كلمتين).',
          'Spot what changes, keep the key word unchanged, count the words (a contraction = two).',
          'Método: detectar qué cambia entre las dos frases (sujeto, tiempo), mantener la palabra clave intacta y contar las palabras (una contracción cuenta como dos).',
        ),
        x(
          'Passif : be au même temps que le verbe actif + participe passé (they are building → it is being built ; people say → it is said to be).',
          'المبني للمجهول: be في نفس زمن الفعل المبني للمعلوم + اسم المفعول (they are building ← it is being built، people say ← it is said to be).',
          'Passive: be in the same tense + past participle.',
          'Pasiva: be en el mismo tiempo que el verbo activo + participio (they are building → it is being built; people say → it is said to be).',
        ),
        x(
          'Discours indirect : recul des temps (will → would, did → had done), ordre affirmatif dans les questions (asked me where I had…), ordre négatif avec « told me not to ».',
          'الكلام المنقول: تراجع الأزمنة (will ← would، did ← had done)، وترتيب الجملة الخبرية في الأسئلة (asked me where I had…)، والنهي بـ «told me not to».',
          'Reported speech: backshift, statement word order, “told me not to”.',
          'Estilo indirecto: retroceso de tiempos (will → would, did → had done), orden afirmativo en las preguntas (asked me where I had…), «told me not to» para prohibiciones.',
        ),
        x(
          'have / get + objet + participe : faire faire quelque chose. used to + base verbale = habitude passée ; be / get used to + -ing = être / devenir habitué.',
          'have / get + مفعول به + اسم المفعول: جعل شخص آخر يقوم بالعمل. used to + المصدر = عادة في الماضي؛ be / get used to + ‎-ing = أن تكون معتادًا أو تتعوّد.',
          'have/get something done; used to + verb vs be/get used to + -ing.',
          'have / get + objeto + participio: encargar algo. used to + infinitivo = hábito pasado; be / get used to + -ing = estar / acostumbrarse.',
        ),
      ],
      'A mechanic repaired my bike. → I had my bike repaired.',
      x(
        'Le sujet change (I) : « had » + objet + participe « repaired » montre que quelqu’un d’autre a fait le travail.',
        'تغيّر الفاعل (I): «had» + المفعول به + اسم المفعول «repaired» تدل على أن شخصًا آخر قام بالعمل.',
        'New subject: had + object + participle = someone else did it.',
        'Cambia el sujeto (I): «had» + objeto + participio «repaired» indica que otra persona hizo el trabajo.',
      ),
    ),
  },
  [
    ru4('fce-u04-s1-q1', 4, 'They are building a new sports centre near the university.', 'BEING', 'A new sports centre ___ near the university.', ['is being built', 'is currently being built'], x(
      'Présent continu actif (are building) → passif « is being built » : be au présent continu + participe passé.',
      'المضارع المستمر المبني للمعلوم (are building) ← المبني للمجهول «is being built»: be في المضارع المستمر + اسم المفعول.',
      'Present continuous passive: is being + built.',
      'Presente continuo activo (are building) → pasiva «is being built»: be en presente continuo + participio.',
    )),
    ru4('fce-u04-s1-q2', 4, '“I’ll call you when I arrive in Tunis,” Karim told his mother.', 'WOULD', 'Karim told his mother that ___ when he arrived in Tunis.', ['he would call her'], x(
      'Discours indirect : « will » recule en « would », « I » devient « he » et « you » devient « her ».',
      'الكلام المنقول: «will» تصبح «would»، و«I» تصبح «he»، و«you» تصبح «her».',
      'will → would; I → he, you → her.',
      'Estilo indirecto: «will» pasa a «would», «I» pasa a «he» y «you» a «her».',
    )),
    ru4('fce-u04-s1-q3', 4, 'A hairdresser cut Omar’s hair for the graduation.', 'HAD', 'Omar ___ for the graduation.', ['had his hair cut'], x(
      'Forme causative : have + objet + participe passé. Le coiffeur a fait le travail, donc « had his hair cut » (cut est aussi le participe).',
      'صيغة التكليف: have + مفعول به + اسم المفعول. الحلاق هو من قام بالعمل، إذن «had his hair cut» (cut هي أيضًا اسم المفعول).',
      'Causative: had + his hair + cut (participle).',
      'Causativa: have + objeto + participio. El peluquero hizo el trabajo, así que «had his hair cut» (cut también es el participio).',
    )),
    ru4('fce-u04-s1-q4', 4, 'I’m going to ask someone to fix my laptop screen tomorrow.', 'GET', 'I’m going to ___ tomorrow.', ['get my laptop screen fixed', 'get my laptop screen repaired'], x(
      '« Ask someone to fix » = « get + objet + participe » : « get my laptop screen fixed ».',
      '«Ask someone to fix» = «get + مفعول به + اسم المفعول»: «get my laptop screen fixed».',
      'Causative: get + object + fixed.',
      '«Ask someone to fix» = «get + objeto + participio»: «get my laptop screen fixed».',
    )),
    ru4('fce-u04-s1-q5', 4, 'Nadia lived in Marseille when she was a child, but she doesn’t now.', 'USED', 'Nadia ___ in Marseille when she was a child.', ['used to live'], x(
      'Situation passée qui n’est plus vraie → « used to » + base verbale : « used to live ».',
      'وضع في الماضي لم يعد صحيحًا ← «used to» + المصدر: «used to live».',
      'Past state no longer true → used to + base verb.',
      'Situación pasada que ya no es cierta → «used to» + infinitivo: «used to live».',
    )),
    ru4('fce-u04-s1-q6', 4, 'Driving on the left is no longer strange for Tom.', 'USED', 'Tom is ___ on the left.', ['used to driving', 'now used to driving'], x(
      '« No longer strange » = il en a l’habitude : « be used to » + -ing, donc « used to driving ».',
      '«No longer strange» = أصبح معتادًا عليه: «be used to» + ‎-ing، إذن «used to driving».',
      'be used to + -ing = accustomed to.',
      '«No longer strange» = ya está acostumbrado: «be used to» + -ing, es decir «used to driving».',
    )),
    ru4('fce-u04-s1-q7', 4, 'People say that the old bridge is over 500 years old.', 'SAID', 'The old bridge ___ over 500 years old.', ['is said to be'], x(
      'Passif de rapport : « People say that… » → sujet + « is said to » + base verbale : « is said to be ».',
      'المبني للمجهول في النقل: «People say that…» ← الفاعل + «is said to» + المصدر: «is said to be».',
      'People say that… → it is said to be.',
      'Pasiva de opinión: «People say that…» → sujeto + «is said to» + infinitivo: «is said to be».',
    )),
    ru4('fce-u04-s1-q8', 4, '“Where did you buy those trainers?” Inès asked me.', 'WHERE', 'Inès asked me ___ those trainers.', ['where I had bought', 'where I’d bought', 'where I bought'], x(
      'Question rapportée : ordre sujet + verbe (where I…) sans « did » ; le prétérit recule en « had bought » (le prétérit simple est aussi accepté).',
      'السؤال المنقول: ترتيب الفاعل ثم الفعل (where I…) دون «did»؛ ويتراجع الماضي إلى «had bought» (ويُقبل الماضي البسيط أيضًا).',
      'Reported question: where + I + had bought, no “did”.',
      'Pregunta indirecta: orden sujeto + verbo (where I…) sin «did»; el pasado retrocede a «had bought» (también se acepta el pasado simple).',
    )),
    ru4('fce-u04-s1-q9', 4, 'You must hand in the application form before Friday.', 'HANDED', 'The application form ___ before Friday.', ['must be handed in', 'has to be handed in', 'needs to be handed in'], x(
      'Passif avec modal : must + be + participe ; la particule « in » reste après le verbe : « must be handed in ».',
      'المبني للمجهول مع فعل ناقص: must + be + اسم المفعول؛ وتبقى الأداة «in» بعد الفعل: «must be handed in».',
      'Modal passive: must be handed in (keep the particle).',
      'Pasiva con modal: must + be + participio; la partícula «in» se mantiene: «must be handed in».',
    )),
    ru4('fce-u04-s1-q10', 4, 'At first, the long winters in Oslo were hard for Salma, but not any more.', 'USED', 'Salma has ___ the long winters in Oslo.', ['got used to', 'gotten used to', 'become used to', 'grown used to', 'now got used to', 'now become used to', 'now gotten used to'], x(
      'Changement progressif (difficile au début, plus maintenant) → « get used to » ; après « has », le participe « got » : « got used to ».',
      'تغيّر تدريجي (صعب في البداية ثم لم يعد كذلك) ← «get used to»؛ وبعد «has» يأتي اسم المفعول «got»: «got used to».',
      'Process of adapting → has got used to.',
      'Cambio progresivo (difícil al principio, ya no) → «get used to»; tras «has», el participio «got»: «got used to».',
    )),
  ],
  [
    ru4('fce-u04-s2-q1', 4, 'Someone has stolen my bicycle from outside the library!', 'BEEN', 'My bicycle ___ from outside the library!', ['has been stolen'], x(
      'Present perfect actif (has stolen) → passif « has been stolen » : have/has + been + participe.',
      'المضارع التام المبني للمعلوم (has stolen) ← المبني للمجهول «has been stolen»: has + been + اسم المفعول.',
      'Present perfect passive: has been + stolen.',
      'Present perfect activo (has stolen) → pasiva «has been stolen»: has + been + participio.',
    )),
    ru4('fce-u04-s2-q2', 4, '“You should drink more water during the race,” the coach told Amira.', 'ADVISED', 'The coach ___ more water during the race.', ['advised Amira to drink', 'advised her to drink'], x(
      '« You should… » est un conseil : advise + personne + to + base verbale : « advised Amira to drink ».',
      '«You should…» نصيحة: advise + الشخص + to + المصدر: «advised Amira to drink».',
      'Advice: advise + person + to + verb.',
      '«You should…» es un consejo: advise + persona + to + infinitivo: «advised Amira to drink».',
    )),
    ru4('fce-u04-s2-q3', 4, 'A technician is going to install solar panels on our roof next month.', 'HAVE', 'We are going to ___ on our roof next month.', ['have solar panels installed', 'have some solar panels installed', 'have solar panels fitted'], x(
      'Un technicien fait le travail pour nous → have + objet + participe : « have solar panels installed ».',
      'فنيّ يقوم بالعمل لصالحنا ← have + مفعول به + اسم المفعول: «have solar panels installed».',
      'Causative: have + solar panels + installed.',
      'Un técnico hace el trabajo por nosotros → have + objeto + participio: «have solar panels installed».',
    )),
    ru4('fce-u04-s2-q4', 4, 'Bilal didn’t play video games when he was younger, but now he does.', 'USE', 'Bilal ___ video games when he was younger.', ['didn’t use to play', 'did not use to play'], x(
      'Négation de « used to » : « didn’t use to » + base verbale (sans -d après did) : « didn’t use to play ».',
      'نفي «used to»: «didn’t use to» + المصدر (دون ‎-d بعد did): «didn’t use to play».',
      'Negative: didn’t use to + base verb.',
      'Negación de «used to»: «didn’t use to» + infinitivo (sin -d tras did): «didn’t use to play».',
    )),
    ru4('fce-u04-s2-q5', 4, 'When we arrived, workers were painting the hotel.', 'BEING', 'When we arrived, the hotel ___.', ['was being painted'], x(
      'Passé continu actif (were painting) → passif « was being painted » (le sujet singulier « the hotel » donne « was »).',
      'الماضي المستمر المبني للمعلوم (were painting) ← المبني للمجهول «was being painted» (الفاعل المفرد «the hotel» يستلزم «was»).',
      'Past continuous passive: was being painted.',
      'Pasado continuo activo (were painting) → pasiva «was being painted» (sujeto singular «the hotel» → «was»).',
    )),
    ru4('fce-u04-s2-q6', 4, '“Don’t touch the paintings,” the guide said to the students.', 'NOT', 'The guide told the students ___ the paintings.', ['not to touch'], x(
      'Ordre négatif rapporté : tell + personne + « not to » + base verbale : « not to touch ».',
      'النهي المنقول: tell + الشخص + «not to» + المصدر: «not to touch».',
      'Negative command: told someone not to + verb.',
      'Orden negativa en estilo indirecto: tell + persona + «not to» + infinitivo: «not to touch».',
    )),
    ru4('fce-u04-s2-q7', 4, 'Living in a big city is new to Yanis; he grew up in a small village.', 'USED', 'Yanis ___ in a big city because he grew up in a small village.', ['isn’t used to living', 'is not used to living', 'isn’t used to life'], x(
      '« New to him » = il n’en a pas l’habitude : « be not used to » + -ing : « isn’t used to living ».',
      '«New to him» = ليس معتادًا عليه: «be not used to» + ‎-ing: «isn’t used to living».',
      'Not accustomed → isn’t used to + -ing.',
      '«New to him» = no está acostumbrado: «be not used to» + -ing: «isn’t used to living».',
    )),
    ru4('fce-u04-s2-q8', 4, 'Experts believe that the festival attracted 40,000 visitors.', 'BELIEVED', 'The festival ___ 40,000 visitors.', ['is believed to have attracted'], x(
      'La croyance est présente (believe) mais le fait est passé (attracted) → « is believed to have » + participe.',
      'الاعتقاد في الحاضر (believe) لكن الحدث في الماضي (attracted) ← «is believed to have» + اسم المفعول.',
      'Present belief, past event → is believed to have + participle.',
      'La creencia es presente (believe) pero el hecho es pasado (attracted) → «is believed to have» + participio.',
    )),
    ru4('fce-u04-s2-q9', 4, 'The college printed our posters for the exhibition.', 'GOT', 'We ___ by the college for the exhibition.', ['got our posters printed', 'got the posters printed'], x(
      'Le collège a fait le travail pour nous → get + objet + participe : « got our posters printed ».',
      'الكلية قامت بالعمل لصالحنا ← get + مفعول به + اسم المفعول: «got our posters printed».',
      'Causative: got + our posters + printed.',
      'El centro hizo el trabajo por nosotros → get + objeto + participio: «got our posters printed».',
    )),
    ru4('fce-u04-s2-q10', 4, '“Have you ever been to Morocco?” Lucas asked Sofia.', 'IF', 'Lucas asked Sofia ___ to Morocco.', ['if she had ever been', 'if she’d ever been', 'if she had been', 'if she’d been', 'if she has ever been'], x(
      'Question fermée rapportée : « if » + sujet + verbe ; le present perfect recule en past perfect : « if she had ever been ».',
      'سؤال بنعم أو لا منقول: «if» + الفاعل + الفعل؛ ويتراجع المضارع التام إلى الماضي التام: «if she had ever been».',
      'Yes/no question: if + she + had (ever) been.',
      'Pregunta cerrada en estilo indirecto: «if» + sujeto + verbo; el present perfect pasa a past perfect: «if she had ever been».',
    )),
  ],
  [
    ru4('fce-u04-s3-q1', 4, 'The organisers will announce the winners on Saturday evening.', 'WILL', 'The winners ___ on Saturday evening.', ['will be announced'], x(
      'Futur actif (will announce) → passif « will be announced » : will + be + participe passé.',
      'المستقبل المبني للمعلوم (will announce) ← المبني للمجهول «will be announced»: will + be + اسم المفعول.',
      'Future passive: will be + announced.',
      'Futuro activo (will announce) → pasiva «will be announced»: will + be + participio.',
    )),
    ru4('fce-u04-s3-q2', 4, 'A famous Moroccan architect designed the new library.', 'BY', 'The new library ___ a famous Moroccan architect.', ['was designed by'], x(
      'Prétérit actif → passif « was designed » ; l’agent est introduit par « by ».',
      'الماضي المبني للمعلوم ← المبني للمجهول «was designed»، ويُقدَّم الفاعل بـ «by».',
      'Past passive + agent: was designed by.',
      'Pasado activo → pasiva «was designed»; el agente se introduce con «by».',
    )),
    ru4('fce-u04-s3-q3', 4, '“I’m studying for my driving test,” Amal said.', 'WAS', 'Amal said that ___ for her driving test.', ['she was studying'], x(
      'Discours indirect : le présent continu recule au passé continu (am studying → was studying) et « I » devient « she ».',
      'الكلام المنقول: يتراجع المضارع المستمر إلى الماضي المستمر (am studying ← was studying)، و«I» تصبح «she».',
      'Backshift: am studying → was studying; I → she.',
      'Estilo indirecto: el presente continuo pasa a pasado continuo (am studying → was studying) y «I» pasa a «she».',
    )),
    ru4('fce-u04-s3-q4', 4, '“What time does the museum open?” the tourist asked me.', 'WHAT', 'The tourist asked me ___ opened.', ['what time the museum', 'at what time the museum'], x(
      'Question rapportée : ordre sujet + verbe (the museum opened), sans « does » ; le présent recule en « opened ».',
      'السؤال المنقول: ترتيب الفاعل ثم الفعل (the museum opened) دون «does»، ويتراجع المضارع إلى «opened».',
      'Reported question: what time + the museum + opened, no “does”.',
      'Pregunta indirecta: orden sujeto + verbo (the museum opened), sin «does»; el presente retrocede a «opened».',
    )),
    ru4('fce-u04-s3-q5', 4, '“Could you turn the music down, please?” Hiba said to her brother.', 'ASKED', 'Hiba ___ the music down.', ['asked her brother to turn', 'asked him to turn'], x(
      'Demande polie rapportée : ask + personne + to + base verbale : « asked her brother to turn ».',
      'الطلب المهذب المنقول: ask + الشخص + to + المصدر: «asked her brother to turn».',
      'Request: asked + person + to + verb.',
      'Petición en estilo indirecto: ask + persona + to + infinitivo: «asked her brother to turn».',
    )),
    ru4('fce-u04-s3-q6', 4, 'Someone delivers fresh bread to our door every morning.', 'HAVE', 'We ___ to our door every morning.', ['have fresh bread delivered'], x(
      'Quelqu’un fait le travail pour nous → have + objet + participe passé : « have fresh bread delivered ».',
      'شخص آخر يقوم بالعمل لصالحنا ← have + مفعول به + اسم المفعول: «have fresh bread delivered».',
      'Causative: have + fresh bread + delivered.',
      'Otra persona hace el trabajo por nosotros → have + objeto + participio: «have fresh bread delivered».',
    )),
    ru4('fce-u04-s3-q7', 4, 'When I was a child, I often walked to school with my cousins, but I don’t now.', 'USED', 'As a child, I ___ to school with my cousins.', ['used to walk', 'often used to walk', 'used to often walk'], x(
      'Habitude passée terminée (but I don’t now) → « used to » + base verbale : « used to walk ».',
      'عادة في الماضي انتهت (but I don’t now) ← «used to» + المصدر: «used to walk».',
      'Finished past habit → used to + base verb.',
      'Hábito pasado que ya terminó (but I don’t now) → «used to» + infinitivo: «used to walk».',
    )),
    ru4('fce-u04-s3-q8', 5, 'People think that the thieves escaped through the back window.', 'THOUGHT', 'The thieves ___ through the back window.', ['are thought to have escaped'], x(
      'Opinion présente (think), fait passé (escaped) → « are thought to have » + participe ; le sujet pluriel donne « are ».',
      'رأي في الحاضر (think) وحدث في الماضي (escaped) ← «are thought to have» + اسم المفعول؛ والفاعل الجمع يستلزم «are».',
      'Present opinion, past event: are thought to have escaped.',
      'Opinión presente (think), hecho pasado (escaped) → «are thought to have» + participio; el sujeto plural da «are».',
    )),
    ru4('fce-u04-s3-q9', 4, 'You can’t use mobile phones during the exam.', 'BE', 'Mobile phones ___ during the exam.', ['can’t be used', 'cannot be used', 'mustn’t be used', 'must not be used', 'may not be used', 'are not to be used'], x(
      'Passif avec modal : can’t + be + participe passé : « can’t be used » (interdiction).',
      'المبني للمجهول مع فعل ناقص: can’t + be + اسم المفعول: «can’t be used» (منع).',
      'Modal passive: can’t be used.',
      'Pasiva con modal: can’t + be + participio: «can’t be used» (prohibición).',
    )),
    ru4('fce-u04-s3-q10', 5, '“I didn’t break the window,” said Rayan.', 'DENIED', 'Rayan ___ the window.', ['denied breaking', 'denied having broken', 'denied that he had broken', 'denied he had broken', 'denied that he broke', 'denied he broke'], x(
      '« I didn’t… » = nier : deny + -ing (ou deny that + passé) : « denied breaking » ; pas de « not » après « denied ».',
      '«I didn’t…» نفيٌ للفعل: deny + ‎-ing (أو deny that + الماضي): «denied breaking»، ولا نضع «not» بعد «denied».',
      'deny + -ing: denied breaking (no “not”).',
      '«I didn’t…» = negar: deny + -ing (o deny that + pasado): «denied breaking»; sin «not» tras «denied».',
    )),
  ],
);
