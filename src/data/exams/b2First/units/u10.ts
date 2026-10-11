import type { Unit } from '../../../../types';
import { lesson, unit, x } from '../../../curriculum/build';
import { li1, li4 } from '../build';

/** Unit fce-u10: Listening Parts 1 and 4, short extracts and an interview. */

const S1_INTERVIEW = `M: My guest today is Nadia Amrani, a marine biologist who spends most of her working week replanting seagrass off the coast of southern Spain. Nadia, why seagrass? Most people have never even heard of it.
W: That's exactly why, really. Everyone loves coral reefs and dolphins, but seagrass meadows do an enormous amount of quiet work. They protect the coast from storms, they're nurseries for young fish, and they store a lot of carbon. When I learned at university how fast they were disappearing, I felt someone had to speak up for them.
M: What does a typical week look like?
W: Less glamorous than people imagine. We spend hours on the boat preparing small bundles of plants, and then we dive and fix them to the seabed one by one. If the sea's rough, we can't dive at all, so a lot of my week is actually spent in the office, writing reports.
M: And is it working?
W: Partly. About half of what we plant survives the first year. That sounds disappointing, but it's actually better than we expected. The real problem is that boats keep dropping their anchors on the meadows and tearing them up. Replanting is pointless unless that changes.
M: So what would you like to see?
W: Fixed moorings for boats in the most sensitive bays. It isn't expensive, and some towns have already done it. Honestly, I'd rather persuade ten mayors than plant ten thousand more plants.`;

const S2_INTERVIEW = `W: My guest today is Omar Haddad, who translates video games from English and Japanese into Arabic. Omar, how did you get into such an unusual job?
M: By accident, really. I studied Japanese because I loved the cartoons as a child, and I was planning to become a teacher. Then a friend who worked for a small games studio asked me to check some Arabic dialogue for them. It was full of mistakes, so I rewrote most of it, and they offered me more work.
W: People often imagine translation is just changing words from one language to another. Is that right?
M: Not with games. Jokes are the hardest part. A joke that works in Tokyo might mean nothing in Cairo, so I often have to invent a completely new one that fits the character and the situation. And the text has to fit on the screen, which means I sometimes have half the space the original had.
W: Do players notice your work?
M: Mostly when something goes wrong! If the translation's good, nobody thinks about it. That used to bother me, but now I see it as a compliment.
W: And what advice would you give someone who wants to do what you do?
M: Play a lot of games, obviously, but read even more. Novels, comics, newspapers. The best translators I know aren't the ones with the biggest vocabulary in their second language. They're the ones who write beautifully in their first.`;

export const fceU10: Unit = unit(
  {
    id: 'fce-u10',
    emoji: '🎧',
    level: 4,
    part: 'LI1 · LI4',
    title: x('Écouter : extraits courts et entretien', 'الاستماع: مقاطع قصيرة ومقابلة', 'Listening: short extracts and an interview', 'Escuchar: fragmentos cortos y entrevista'),
    subtitle: x('Attitude, but, opinion, lieu, relation', 'الموقف والغرض والرأي والمكان والعلاقة', 'Attitude, purpose, opinion, place, relationship', 'Actitud, propósito, opinión, lugar, relación'),
    lesson: lesson(
      x(
        'Comprendre l’attitude, l’opinion et le but d’un locuteur dans des extraits courts (Partie 1) et un entretien (Partie 4).',
        'فهم موقف المتحدث ورأيه وغرضه في مقاطع قصيرة (الجزء 1) وفي مقابلة (الجزء 4).',
        'Understand a speaker’s attitude, opinion and purpose in short extracts (Part 1) and an interview (Part 4).',
        'Comprender la actitud, la opinión y el propósito de un hablante en fragmentos cortos (Parte 1) y en una entrevista (Parte 4).',
      ),
      [
        x(
          'Lisez la question avant l’écoute : qui parle (l’homme, la femme) et que cherche-t-on (sentiment, but, lieu, relation) ?',
          'اقرأ السؤال قبل الاستماع: من المتحدث (الرجل أم المرأة)، وعمّ نبحث (شعور، غرض، مكان، علاقة)؟',
          'Read the question first: who speaks, and what are you listening for?',
          'Lee la pregunta antes de escuchar: ¿quién habla (el hombre, la mujer) y qué se busca (sentimiento, propósito, lugar, relación)?',
        ),
        x(
          'L’attitude se cache souvent après « but », « actually », « to be honest » : la première impression change. Attendez la fin de la phrase.',
          'كثيرًا ما يظهر الموقف بعد «but» و«actually» و«to be honest»: الانطباع الأول يتغير، فانتظر نهاية الجملة.',
          'Attitude often follows “but”, “actually”, “to be honest”.',
          'La actitud suele aparecer tras «but», «actually», «to be honest»: la primera impresión cambia. Espera al final de la frase.',
        ),
        x(
          'Lieu et relation : on ne les nomme presque jamais. Rassemblez les indices (gate, aircraft ; your parents are paying me) pour les déduire.',
          'نادرًا ما يُذكر المكان أو العلاقة صراحة. اجمع المؤشرات (gate وaircraft، your parents are paying me) لتستنتجهما.',
          'Place and relationship are rarely named: add up the clues.',
          'Lugar y relación casi nunca se nombran. Reúne las pistas (gate, aircraft; your parents are paying me) para deducirlos.',
        ),
        x(
          'Les pièges reprennent des mots entendus (storms, games, theory) ; la bonne option reformule l’idée. Dans l’entretien, les questions suivent l’ordre du script.',
          'الفخاخ تكرر كلمات مسموعة (storms وgames وtheory)، والخيار الصحيح يعيد صياغة الفكرة. في المقابلة تتبع الأسئلة ترتيب النص.',
          'Traps repeat words you hear; the key paraphrases. Interview questions follow the order of the recording.',
          'Las trampas repiten palabras oídas (storms, games, theory); la opción correcta reformula la idea. En la entrevista, las preguntas siguen el orden del audio.',
        ),
      ],
      'Honestly, I thought I’d hate it. But by Thursday I’d made it to the top of the wall, and I’ve already booked five more sessions.',
      x(
        '« I thought I’d hate it » est l’attente ; « But… already booked » révèle l’attitude réelle : l’enthousiasme.',
        '«I thought I’d hate it» هو التوقع، أما «But… already booked» فيكشف الموقف الحقيقي: الحماس.',
        'The real attitude comes after “But”: enthusiasm.',
        '«I thought I’d hate it» es la expectativa; «But… already booked» revela la actitud real: entusiasmo.',
      ),
    ),
  },
  [
    li1('fce-u10-s1-q1', 4, `W: So how was your first week at the climbing centre?
M: Honestly, I thought I'd hate it. I'm not great with heights, and everyone there seemed to know exactly what they were doing. But the instructors were really patient, and by Thursday I'd actually made it to the top of the beginners' wall. My arms are aching like mad today, but I've already booked another five sessions.
W: Five? That's a big change from "I'll try it once".
M: I know. Don't laugh.`, 'How does the man feel about climbing now?', ['Keen to carry on', 'Nervous because of the height', 'Disappointed with the instructors'], x(
      '« I’ve already booked another five sessions » : il veut continuer. Sa peur du vide était sa crainte de départ.',
      '«I’ve already booked another five sessions»: يريد الاستمرار. أما خوفه من المرتفعات فكان في البداية فقط.',
      'He has “already booked another five sessions”.',
      '«I’ve already booked another five sessions»: quiere seguir. El miedo a las alturas era su temor inicial.',
    )),
    li1('fce-u10-s1-q2', 4, `Hi Karim, it's Leila. I know we said we'd meet at the library at four to finish the presentation, but the library's closing early today because of a staff meeting. I've checked, and the café opposite the station has big tables and decent wifi, so could we go there instead? Same time is fine. If that doesn't work for you, just text me and we'll sort something else out. Oh, and don't forget to bring the charts you made.`, 'Why is Leila calling Karim?', ['To suggest a different place to meet', 'To change the time of their meeting', 'To ask him to make some charts'], x(
      '« could we go there instead? Same time is fine » : elle propose un autre lieu, pas une autre heure.',
      '«could we go there instead? Same time is fine»: تقترح مكانًا آخر وليس وقتًا آخر.',
      'She suggests the café “instead”; “same time is fine”.',
      '«could we go there instead? Same time is fine»: propone otro lugar, no otra hora.',
    )),
    li1('fce-u10-s1-q3', 4, `M: Did you see the film version of The Salt Road in the end?
W: I did. I was expecting to be annoyed, because the novel's one of my favourites and they'd cut half the characters.
M: And were you?
W: Not really. The story's simpler, but the actors are brilliant, and the desert scenes are just stunning. What I missed was the narrator's voice. In the book she's funny and a bit bitter, and in the film all that humour just disappears.
M: So, read the book first?
W: Definitely. But see the film too.`, 'What does the woman say about the film?', ['It fails to capture the narrator’s personality.', 'It has too many characters.', 'The acting is disappointing.'], x(
      '« What I missed was the narrator’s voice… all that humour just disappears ». Les acteurs sont « brilliant ».',
      '«What I missed was the narrator’s voice… all that humour just disappears»، أما الممثلون فهم «brilliant».',
      'She missed “the narrator’s voice” and its humour.',
      '«What I missed was the narrator’s voice… all that humour just disappears». Los actores son «brilliant».',
    )),
    li1('fce-u10-s1-q4', 4, `M: Excuse me, is this seat free?
W: Yes, go ahead. Are you on the twelve fifteen too?
M: I am, but it says on the board it's been delayed by forty minutes. Something about a problem with the aircraft.
W: Oh no. I've got a connection in Madrid.
M: Well, the screen at the gate should update soon. If you're worried, the airline desk is just past the duty-free shop.
W: Thanks. I think I'll go and ask now.`, 'Where are the speakers?', ['In an airport departure area', 'At a railway station', 'On board a plane'], x(
      '« aircraft », « the gate », « the airline desk », « duty-free shop » : ils attendent dans un aéroport, pas encore à bord.',
      '«aircraft» و«the gate» و«the airline desk» و«duty-free shop»: ينتظران في المطار ولم يصعدا إلى الطائرة بعد.',
      '“aircraft”, “gate”, “airline desk”, “duty-free”: an airport.',
      '«aircraft», «the gate», «the airline desk», «duty-free shop»: esperan en un aeropuerto, aún no a bordo.',
    )),
    li1('fce-u10-s1-q5', 4, `W: Right, before you go, have you finished the chapter on the French Revolution?
M: Most of it. I had football training three times this week, so...
W: I know the season's important, Adam, but your exam is in three weeks. Your parents are paying me to get you through it, not to hear about your matches.
M: I know, I know. I'll do the questions tonight.
W: Good. Email them to me before Thursday's lesson, and we'll go through the mistakes together.`, 'What is the relationship between the speakers?', ['Private tutor and student', 'Mother and son', 'Football coach and player'], x(
      '« Your parents are paying me » et « before Thursday’s lesson » : c’est une professeure particulière, pas sa mère.',
      '«Your parents are paying me» و«before Thursday’s lesson»: إنها مدرّسة خصوصية وليست أمه.',
      '“Your parents are paying me… Thursday’s lesson”: a tutor.',
      '«Your parents are paying me» y «before Thursday’s lesson»: es una profesora particular, no su madre.',
    )),
    li4('fce-u10-s1-q6', 4, S1_INTERVIEW, 'Why did Nadia choose to work with seagrass?', ['She felt it was ignored despite its importance.', 'She had always loved diving in the Mediterranean.', 'Her university offered her a research post on it.'], x(
      '« Most people have never even heard of it » → « That’s exactly why… someone had to speak up for them ».',
      '«Most people have never even heard of it» ← «That’s exactly why… someone had to speak up for them».',
      'Nobody knows about it, so “someone had to speak up for them”.',
      '«Most people have never even heard of it» → «That’s exactly why… someone had to speak up for them».',
    )),
    li4('fce-u10-s1-q7', 4, S1_INTERVIEW, 'What does Nadia say about her typical week?', ['Much of it is spent away from the sea.', 'She dives every day, whatever the weather.', 'Preparing the plants is the part she enjoys most.'], x(
      '« a lot of my week is actually spent in the office, writing reports » ; quand la mer est agitée, elle ne plonge pas.',
      '«a lot of my week is actually spent in the office, writing reports»، وحين يكون البحر هائجًا لا تغوص.',
      '“A lot of my week is actually spent in the office”.',
      '«a lot of my week is actually spent in the office, writing reports»; con el mar agitado no bucea.',
    )),
    li4('fce-u10-s1-q8', 4, S1_INTERVIEW, 'How does Nadia feel about the survival rate of the plants?', ['It is more encouraging than it might seem.', 'It shows the project should be stopped.', 'It is lower than she predicted.'], x(
      '« That sounds disappointing, but it’s actually better than we expected ».',
      '«That sounds disappointing, but it’s actually better than we expected».',
      '“It’s actually better than we expected”.',
      '«That sounds disappointing, but it’s actually better than we expected».',
    )),
    li4('fce-u10-s1-q9', 4, S1_INTERVIEW, 'According to Nadia, what is the main threat to the seagrass meadows?', ['Damage caused by boats’ anchors', 'Storms along the coast', 'Pollution from nearby towns'], x(
      '« The real problem is that boats keep dropping their anchors on the meadows ». Les tempêtes sont citées comme ce que l’herbier protège.',
      '«The real problem is that boats keep dropping their anchors on the meadows». أما العواصف فذُكرت لأن الأعشاب تحمي الساحل منها.',
      '“The real problem” is boats’ anchors.',
      '«The real problem is that boats keep dropping their anchors on the meadows». Las tormentas se citan como aquello de lo que protegen las praderas.',
    )),
    li4('fce-u10-s1-q10', 4, S1_INTERVIEW, 'What does Nadia mean when she says she’d “rather persuade ten mayors than plant ten thousand more plants”?', ['Changing local rules would achieve more than replanting.', 'She is tired of diving and wants to work in politics.', 'Local politicians should pay for more planting.'], x(
      'Les maires peuvent installer des « fixed moorings », et sans cela « replanting is pointless » : convaincre vaut mieux que replanter.',
      'يستطيع رؤساء البلديات تركيب «fixed moorings»، ومن دونها «replanting is pointless»: الإقناع أجدى من إعادة الزراعة.',
      'Moorings decided by towns matter more; otherwise “replanting is pointless”.',
      'Los alcaldes pueden instalar «fixed moorings»; sin eso «replanting is pointless»: convencer vale más que replantar.',
    )),
  ],
  [
    li1('fce-u10-s2-q1', 4, `M: Did you hear they've moved the end-of-year concert to the sports hall?
W: Yes, and I'm not exactly thrilled. We've been rehearsing in the theatre for months, and the sound in the sports hall is terrible. The violins will sound like they're playing in a swimming pool.
M: Apparently the theatre roof needs urgent repairs.
W: I understand that. I'm not blaming anyone. It's just frustrating after all that work. Anyway, we'll make the best of it.`, 'How does the woman feel about the change?', ['Frustrated, although she accepts the reason', 'Angry with the people who made the decision', 'Pleased that the concert will be in a bigger space'], x(
      '« It’s just frustrating » mais « I understand that. I’m not blaming anyone » : elle est déçue sans en vouloir à personne.',
      '«It’s just frustrating» لكن «I understand that. I’m not blaming anyone»: هي محبطة دون أن تلوم أحدًا.',
      '“Frustrating”, but “I’m not blaming anyone”.',
      '«It’s just frustrating», pero «I understand that. I’m not blaming anyone»: está frustrada sin culpar a nadie.',
    )),
    li1('fce-u10-s2-q2', 4, `Good morning, and welcome to the Green Valley Hostel. Before you head out, a quick word about this afternoon. The forecast has changed, and there's now a serious risk of thunderstorms in the mountains after two o'clock. If you're planning to walk the ridge path, please start early and make sure you're back below the tree line by lunchtime. The lake trail is a much safer option today, and it's just as beautiful. Reception has free maps if you need one.`, 'What is the main purpose of the announcement?', ['To warn guests about a danger', 'To advertise a guided walk', 'To tell guests that the ridge path is closed'], x(
      '« a serious risk of thunderstorms… please start early » : c’est un avertissement. Le chemin n’est pas fermé.',
      '«a serious risk of thunderstorms… please start early»: إنه تحذير، والمسار ليس مغلقًا.',
      'A “serious risk of thunderstorms”: a warning; the path is not closed.',
      '«a serious risk of thunderstorms… please start early»: es una advertencia. El sendero no está cerrado.',
    )),
    li1('fce-u10-s2-q3', 4, `W: Are you going to the lecture tomorrow, or watching the recording?
M: Watching it, probably. I can pause it and take proper notes, and I can play the difficult bits twice.
W: I used to think that too, but I found I never actually got round to watching them. They just piled up. When I'm in the room, I have to pay attention, and I can ask questions at the end.
M: Fair point. Last term I still had six recordings left the week before the exam.`, 'What is the woman’s opinion of recorded lectures?', ['They make it easy to put off studying.', 'They are better for taking detailed notes.', 'They are often of poor sound quality.'], x(
      '« I never actually got round to watching them. They just piled up » : on remet le travail à plus tard. Les notes, c’est l’avis de l’homme.',
      '«I never actually got round to watching them. They just piled up»: يسهل تأجيل الدراسة. أما تدوين الملاحظات فهو رأي الرجل.',
      'She “never got round to watching them”; they “piled up”.',
      '«I never actually got round to watching them. They just piled up»: se aplaza el estudio. Lo de los apuntes es la opinión del hombre.',
    )),
    li1('fce-u10-s2-q4', 4, `M: So this is where all the costumes are kept?
W: Yes, every single one from the last forty years. The older ones are in those boxes, because light damages the fabric. Careful with your coffee, by the way.
M: Sorry. And do the actors come down here before each show?
W: No, the dressers take everything up to the dressing rooms. Down here it's just me, the sewing machines and the occasional mouse.`, 'Where are the speakers?', ['In a storage room in a theatre', 'In a clothes shop', 'In an actor’s dressing room'], x(
      '« where all the costumes are kept », « before each show », et les loges sont « up » : c’est la réserve d’un théâtre.',
      '«where all the costumes are kept» و«before each show»، وغرف الممثلين في الطابق الأعلى («up»): إنه مخزن مسرح.',
      'Costumes “kept” here; dressing rooms are “up”: a theatre store.',
      '«where all the costumes are kept», «before each show», y los camerinos están «up»: es el almacén de un teatro.',
    )),
    li1('fce-u10-s2-q5', 4, `M: Mrs Ouali? Hi, I'm from number fourteen, across the road. Sorry to bother you.
W: Not at all. Is everything all right?
M: Yes, it's just that a parcel for you was delivered to our house by mistake yesterday. I didn't want to leave it on your doorstep.
W: Oh, that's so kind. I've been waiting for that all week. You must be the family that moved in last month.
M: That's right. We're still unpacking, to be honest.`, 'What is the relationship between the speakers?', ['Neighbours who have not met before', 'Old friends', 'A delivery driver and a customer'], x(
      '« I’m from number fourteen, across the road » et « You must be the family that moved in last month » : de nouveaux voisins.',
      '«I’m from number fourteen, across the road» و«You must be the family that moved in last month»: جاران لم يتعارفا من قبل.',
      '“From number fourteen, across the road”, “moved in last month”.',
      '«I’m from number fourteen, across the road» y «You must be the family that moved in last month»: vecinos nuevos.',
    )),
    li4('fce-u10-s2-q6', 4, S2_INTERVIEW, 'How did Omar start translating games?', ['A friend asked him to check a poor translation.', 'He applied for a job at a games studio.', 'He trained as a translator at university.'], x(
      '« a friend… asked me to check some Arabic dialogue… It was full of mistakes » : tout a commencé par hasard.',
      '«a friend… asked me to check some Arabic dialogue… It was full of mistakes»: بدأ الأمر صدفة.',
      'A friend asked him to check dialogue “full of mistakes”.',
      '«a friend… asked me to check some Arabic dialogue… It was full of mistakes»: todo empezó por casualidad.',
    )),
    li4('fce-u10-s2-q7', 4, S2_INTERVIEW, 'What does Omar find most difficult?', ['Translating humour', 'Working with Japanese texts', 'Keeping to deadlines'], x(
      '« Jokes are the hardest part » : il doit parfois inventer une nouvelle blague.',
      '«Jokes are the hardest part»: عليه أحيانًا أن يبتكر نكتة جديدة.',
      '“Jokes are the hardest part”.',
      '«Jokes are the hardest part»: a veces tiene que inventar un chiste nuevo.',
    )),
    li4('fce-u10-s2-q8', 4, S2_INTERVIEW, 'What does Omar say about the text on screen?', ['It often has to be shorter than the original.', 'It is easier to translate than spoken dialogue.', 'It is usually added after the game is finished.'], x(
      '« I sometimes have half the space the original had » : le texte doit être plus court.',
      '«I sometimes have half the space the original had»: يجب أن يكون النص أقصر.',
      'He sometimes has “half the space the original had”.',
      '«I sometimes have half the space the original had»: el texto tiene que ser más corto.',
    )),
    li4('fce-u10-s2-q9', 4, S2_INTERVIEW, 'How does Omar feel now about players not noticing his work?', ['He sees it as a sign that he has done well.', 'It still annoys him.', 'He wishes players would give him more feedback.'], x(
      '« That used to bother me, but now I see it as a compliment » : « used to » = plus maintenant.',
      '«That used to bother me, but now I see it as a compliment»: «used to» تعني أن ذلك لم يعد يزعجه.',
      '“Used to bother me, but now I see it as a compliment”.',
      '«That used to bother me, but now I see it as a compliment»: «used to» = ya no.',
    )),
    li4('fce-u10-s2-q10', 4, S2_INTERVIEW, 'What is Omar’s main advice to future game translators?', ['Develop strong writing skills in your own language.', 'Learn as many foreign words as possible.', 'Spend most of your free time playing games.'], x(
      '« The best translators… are the ones who write beautifully in their first [language] » ; le vocabulaire étranger ne suffit pas.',
      '«The best translators… are the ones who write beautifully in their first»: أي في لغتهم الأم، والمفردات الأجنبية لا تكفي.',
      'The best ones “write beautifully in their first” language.',
      '«The best translators… are the ones who write beautifully in their first»: en su lengua materna; el vocabulario extranjero no basta.',
    )),
  ],
);
