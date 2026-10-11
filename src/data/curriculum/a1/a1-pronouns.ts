import type { Unit } from '../../../types';
import { g, lesson, listen, order, respond, unit, x } from '../build';

export const a1Pronouns: Unit = unit(
  {
    id: 'a1-pronouns',
    emoji: '👉',
    level: 1,
    part: 'R5 · L2',
    title: x('Pronoms et démonstratifs', 'الضمائر وأسماء الإشارة', 'Pronouns and demonstratives', 'Pronombres y demostrativos'),
    subtitle: x('me, him, this, those, mine…', 'me وhim وthis وthose وmine…', 'me, him, this, those, mine…', 'me, him, this, those, mine…'),
    lesson: lesson(
      x('Remplacer un nom par le bon pronom et désigner les choses.', 'تعويض الاسم بالضمير الصحيح والإشارة إلى الأشياء.', 'Replace a noun with the right pronoun and point to things.', 'Sustituir un nombre por el pronombre correcto y señalar las cosas.'),
      [
        x('Sujet → complément : I → me, he → him, she → her, we → us, they → them (Call me. I know him.).', 'الفاعل ← المفعول: I ← me وhe ← him وshe ← her وwe ← us وthey ← them (Call me. I know him.).', 'Subject → object: I → me, he → him, she → her, we → us, they → them.', 'Sujeto → complemento: I → me, he → him, she → her, we → us, they → them (Call me. I know him.).'),
        x('this / these = proche ; that / those = loin. These et those vont avec un pluriel.', 'this/these = قريب، وthat/those = بعيد. وthese وthose مع الجمع.', 'this / these = near; that / those = far. These / those + plural.', 'this / these = cerca; that / those = lejos. These y those van con plural.'),
        x('Pronoms possessifs, sans nom après : mine, yours, his, hers, ours, theirs (This bag is mine.).', 'ضمائر الملكية دون اسم بعدها: mine وyours وhis وhers وours وtheirs (This bag is mine.).', 'Possessive pronouns stand alone: mine, yours, his, hers, ours, theirs.', 'Pronombres posesivos, sin sustantivo detrás: mine, yours, his, hers, ours, theirs (This bag is mine.).'),
      ],
      'These files are mine, and those are yours.',
      x('« These » (proches) / « those » (loin) ; « mine », « yours » remplacent « my files », « your files ».', '«These» (قريبة) و«those» (بعيدة)، و«mine» و«yours» تعوضان «my files» و«your files».', '“These” near, “those” far; “mine” / “yours” replace the noun.', '«These» (cerca) / «those» (lejos); «mine» y «yours» sustituyen a «my files» y «your files».'),
    ),
  },
  [
    g('a1-pr-s1-q1', 1, 'Please call ___ tomorrow morning.', ['me', 'I', 'my', 'mine'], x(
      'Après un verbe (call), pronom complément : « me ».',
      'بعد الفعل (call) ضمير المفعول: «me».',
      'After a verb, object pronoun: “me”.',
      'Después de un verbo (call), pronombre complemento: «me».',
    )),
    g('a1-pr-s1-q2', 1, 'Mr. Diallo is in the office. You can ask ___.', ['him', 'he', 'his', 'her'], x(
      'Complément pour un homme : « him ».',
      'ضمير المفعول للمذكر: «him».',
      'Object pronoun for a man: “him”.',
      'Complemento para un hombre: «him».',
    )),
    g('a1-pr-s1-q3', 1, '___ chairs here are new, but those over there are old.', ['These', 'This', 'That', 'There'], x(
      'Pluriel et proche (« here ») → « These ».',
      'جمع وقريب («here») ← «These».',
      'Plural and near → “These”.',
      'Plural y cerca («here») → «These».',
    )),
    g('a1-pr-s1-q4', 1, 'Look at ___ building over there. It’s our new office.', ['that', 'these', 'those', 'this'], x(
      'Singulier et loin (« over there ») → « that ».',
      'مفرد وبعيد («over there») ← «that».',
      'Singular and far → “that”.',
      'Singular y lejos («over there») → «that».',
    )),
    g('a1-pr-s1-q5', 1, 'This laptop is not ___. Mine is black.', ['mine', 'my', 'me', 'I'], x(
      'Sans nom après : pronom possessif « mine ».',
      'دون اسم بعده: ضمير الملكية «mine».',
      'No noun after: “mine”.',
      'Sin sustantivo detrás: pronombre posesivo «mine».',
    )),
    g('a1-pr-s1-q6', 1, 'Sara and I are colleagues. She works with ___ every day.', ['me', 'I', 'my', 'mine'], x(
      'Après une préposition (with) → « me ».',
      'بعد حرف جر (with) ← «me».',
      'After a preposition → “me”.',
      'Después de una preposición (with) → «me».',
    )),
    g('a1-pr-s1-q7', 1, 'The clients are here. Can you show ___ the meeting room?', ['them', 'they', 'their', 'theirs'], x(
      'Complément pluriel → « them ».',
      'مفعول به في الجمع ← «them».',
      'Plural object → “them”.',
      'Complemento plural → «them».',
    )),
    order('a1-pr-s1-o1', 'Can you help me with this report', x('Commence par « Can you ».', 'ابدأ بـ «Can you».', 'Start with “Can you”.', 'Empieza por «Can you».'), x(
      'Can you + verbe + me + with + quelque chose.',
      'Can you + فعل + me + with + شيء.',
      'Can you + verb + me + with + something.',
      'Can you + verbo + me + with + algo.',
    )),
    respond('a1-pr-s1-l1', 1, 'Is this your pen or mine?', ['I think it’s yours.', 'It’s a blue pen.', 'Yes, it is.'], x(
      'Question à choix (« yours or mine ») : on choisit. « Yes » ne convient pas.',
      'سؤال اختيار («yours or mine»): نختار، و«Yes» لا تناسب.',
      'A choice question: pick one; “Yes” does not fit.',
      'Pregunta de elección («yours or mine»): se elige. «Yes» no encaja.',
    )),
    listen('a1-pr-s1-l2', 'L3', 1, 'W: Are these your keys?\nM: No, mine are in my bag. Maybe they are Paul’s.', 'Whose keys might they be?', ['Paul’s', 'The man’s', 'The woman’s', 'The manager’s'], x(
      '« Maybe they are Paul’s » : peut-être celles de Paul. Les clés de l’homme sont dans son sac.',
      '«Maybe they are Paul’s»: ربما لبول. مفاتيح الرجل في حقيبته.',
      '“Maybe they are Paul’s”.',
      '«Maybe they are Paul’s»: quizá sean de Paul. Las del hombre están en su bolsa.',
    )),
  ],
  [
    g('a1-pr-s2-q1', 1, 'I don’t know ___. What is her name?', ['her', 'she', 'hers', 'his'], x(
      'Complément pour une femme (« her name ») → « her ».',
      'ضمير المفعول للمؤنث («her name») ← «her».',
      'Object pronoun for a woman → “her”.',
      'Complemento para una mujer («her name») → «her».',
    )),
    g('a1-pr-s2-q2', 1, '___ is my colleague, Ana.', ['This', 'These', 'Those', 'They'], x(
      'Pour présenter une personne : « This is… ».',
      'لتقديم شخص: «This is…».',
      'Introducing one person: “This is…”.',
      'Para presentar a una persona: «This is…».',
    )),
    g('a1-pr-s2-q3', 1, 'Can you give ___ the report? We need it for the meeting.', ['us', 'we', 'our', 'ours'], x(
      '« We » devient « us » après un verbe.',
      '«We» تصبح «us» بعد الفعل.',
      '“We” becomes “us” after a verb.',
      '«We» se convierte en «us» después de un verbo.',
    )),
    g('a1-pr-s2-q4', 1, '___ documents on your desk are for the meeting.', ['Those', 'That', 'This', 'There'], x(
      '« Documents » est pluriel → « Those ».',
      '«Documents» جمع ← «Those».',
      'Plural → “Those”.',
      '«Documents» es plural → «Those».',
    )),
    g('a1-pr-s2-q5', 1, 'The red bag is ___. My name is on it.', ['mine', 'my', 'me', 'I'], x(
      'Sans nom après : « mine ».',
      'دون اسم بعده: «mine».',
      'No noun after: “mine”.',
      'Sin sustantivo detrás: «mine».',
    )),
    g('a1-pr-s2-q6', 1, 'Our manager is very helpful. We like ___ a lot.', ['him', 'he', 'his', 'they'], x(
      'Complément singulier après « like » → « him ».',
      'مفعول مفرد بعد «like» ← «him».',
      'Singular object after “like” → “him”.',
      'Complemento singular después de «like» → «him».',
    )),
    g('a1-pr-s2-q7', 1, 'They have a new office. ___ office is in Sousse.', ['Their', 'They', 'Them', 'Theirs'], x(
      'Devant un nom (office) → adjectif possessif « Their ».',
      'قبل الاسم (office) ← «Their».',
      'Before a noun → “Their”.',
      'Delante de un sustantivo (office) → posesivo «Their».',
    )),
    order('a1-pr-s2-o1', 'These are the files for the meeting', x('Commence par « These ».', 'ابدأ بـ «These».', 'Start with “These”.', 'Empieza por «These».'), x(
      '« These are » + pluriel.',
      '«These are» + جمع.',
      '“These are” + plural.',
      '«These are» + plural.',
    )),
    respond('a1-pr-s2-l1', 1, 'Can you call me later?', ['Sure, after lunch.', 'I called him.', 'Yes, I am later.'], x(
      'Demande → accepter et préciser quand.',
      'طلب ← قبول وتحديد الوقت.',
      'A request → accept and say when.',
      'Petición → aceptar y precisar cuándo.',
    )),
    listen('a1-pr-s2-l2', 'L4', 1, 'Hi Nadia, it’s Ben. I have your laptop. You left it in the meeting room. I can bring it to you after lunch.', 'What does Ben have?', ['Nadia’s laptop', 'His own laptop', 'A new phone', 'The meeting notes'], x(
      '« I have your laptop » : l’ordinateur de Nadia.',
      '«I have your laptop»: حاسوب نادية.',
      '“I have your laptop”.',
      '«I have your laptop»: el portátil de Nadia.',
    )),
  ],
  [
    g('a1-pr-s3-q1', 1, 'The director wants to see ___ in her office.', ['you', 'your', 'yours', 'yourself'], x(
      'Complément après « see » : « you ».',
      'المفعول بعد «see»: «you».',
      'Object after “see”: “you”.',
      'Complemento después de «see»: «you».',
    )),
    g('a1-pr-s3-q2', 1, 'Look at ___ photos. They are from our trip to Rome.', ['these', 'this', 'that', 'it'], x(
      '« Photos » est pluriel → « these ».',
      '«Photos» جمع ← «these».',
      'Plural → “these”.',
      '«Photos» es plural → «these».',
    )),
    g('a1-pr-s3-q3', 1, 'Ali and Mona are new. Please say hello to ___.', ['them', 'they', 'their', 'theirs'], x(
      'Après « to » et pour deux personnes → « them ».',
      'بعد «to» ولشخصين ← «them».',
      'After “to”, plural → “them”.',
      'Después de «to» y para dos personas → «them».',
    )),
    g('a1-pr-s3-q4', 1, 'Is this coffee ___ or mine?', ['yours', 'your', 'you', 'you’re'], x(
      'Sans nom après, parallèle à « mine » → « yours ».',
      'دون اسم بعده، مقابل «mine» ← «yours».',
      'Standing alone, like “mine” → “yours”.',
      'Sin sustantivo detrás, en paralelo con «mine» → «yours».',
    )),
    g('a1-pr-s3-q5', 1, '___ is a great idea!', ['That', 'Those', 'These', 'They'], x(
      'Pour réagir à ce que quelqu’un vient de dire : « That is a great idea! ».',
      'للتعليق على ما قيل للتو: «That is a great idea!».',
      'Reacting to what was said: “That”.',
      'Para reaccionar a lo que alguien acaba de decir: «That is a great idea!».',
    )),
    g('a1-pr-s3-q6', 1, 'My phone is broken. Can I use ___?', ['yours', 'your', 'you', 'you’re'], x(
      '« Yours » = ton téléphone (sans répéter le nom).',
      '«Yours» = هاتفك (دون تكرار الاسم).',
      '“Yours” = your phone.',
      '«Yours» = tu teléfono (sin repetir el sustantivo).',
    )),
    g('a1-pr-s3-q7', 1, 'Hello, ___ is Mr. Haddad speaking.', ['this', 'these', 'those', 'there'], x(
      'Au téléphone, on se présente avec « This is … speaking ».',
      'على الهاتف نعرّف بأنفسنا بـ «This is … speaking».',
      'On the phone: “This is … speaking”.',
      'Al teléfono uno se presenta con «This is … speaking».',
    )),
    order('a1-pr-s3-o1', 'Please give them the new schedule', x('Commence par « Please ».', 'ابدأ بـ «Please».', 'Start with “Please”.', 'Empieza por «Please».'), x(
      'Please + verbe + them (à eux) + objet.',
      'Please + فعل + them (لهم) + مفعول.',
      'Please + verb + them + object.',
      'Please + verbo + them (a ellos) + objeto.',
    )),
    respond('a1-pr-s3-l1', 1, 'Are those your bags?', ['Yes, the two blue ones.', 'No, I’m not.', 'They are on time.'], x(
      'La bonne réponse confirme et précise lesquels.',
      'الإجابة الصحيحة تؤكد وتحدد أيّها.',
      'It confirms and says which ones.',
      'La respuesta correcta confirma y precisa cuáles.',
    )),
    listen('a1-pr-s3-l2', 'L3', 1, 'M: Is this seat free?\nW: Sorry, it’s my colleague’s. He’s coming back in a minute.', 'Who is the seat for?', ['The woman’s colleague', 'The man', 'The woman', 'A customer'], x(
      '« It’s my colleague’s » : la place est celle de son collègue.',
      '«It’s my colleague’s»: المقعد لزميلها.',
      '“It’s my colleague’s”.',
      '«It’s my colleague’s»: el asiento es de su compañero.',
    )),
  ],
);
