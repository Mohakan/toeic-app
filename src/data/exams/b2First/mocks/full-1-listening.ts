import type { Exercise } from '../../../../types';
import { x } from '../../../curriculum/build';
import { li1, li2, li3, li4 } from '../build';

/**
 * Full mock test fce-full-1, Listening (30 items: LI1 8, LI2 10, LI3 5, LI4 7).
 * Writing guide: docs/multi-examens/b2-contenu.md.
 */

// LI1: eight separate extracts.
const LI1_BIKE = `W: So, did you finally get that second-hand bike you found online?
M: I did. I went to pick it up from the seller on Sunday.
W: And? You don’t sound very excited.
M: Well, the photos made it look almost new, and it isn’t. There are a few scratches, and the brakes need adjusting. But honestly, for what I paid, I can’t really complain. A new one would have cost me four times as much, and it rides beautifully once you get going.
W: So you’d buy second-hand again?
M: Definitely. I’d just ask for more photos next time.`;
const LI1_FERRY = `Good afternoon, ladies and gentlemen. We’re now about forty minutes from Tangier. Passengers travelling with a vehicle are reminded that the car decks will remain closed until we have docked, so please stay on the upper levels until you hear the next announcement. Passports should be ready for the police officers, who are currently on board, in the lounge next to the duty-free shop. The cafeteria on deck six will close in fifteen minutes. Thank you, and we hope you have enjoyed crossing with us today.`;
const LI1_FLAT = `M: Lina, can we talk about the kitchen? It’s getting a bit out of hand.
W: I know, I know. It’s my turn this week, isn’t it?
M: It’s not about whose turn it is. The rota on the fridge just isn’t working. Half the time nobody looks at it.
W: That’s true. I forgot about it completely last month too. Maybe we should just do the washing-up straight after every meal, whoever cooked.
M: Or the person who didn’t cook does it.
W: Yes, that’s even fairer. Let’s try that.`;
const LI1_HOMETOWN = `After four years studying in Madrid, I moved back to my hometown in September. Everyone assumed I’d done it to save money, and it’s true that the rent here is half what I was paying. But that’s not really what this year has been about. When I left at eighteen, I thought the town was the most boring place on earth. Now I’m going to the little theatre, joining walks with the history society, finding cafés I’d walked past a hundred times. It’s as if I’m visiting it for the first time, and I’m honestly enjoying it far more than I expected.`;
const LI1_KNEE = `W: Right, Youssef, let’s see how far you can bend the knee today. Has it been swelling up since your last appointment?
M: Only once, after I walked up to the stadium to watch the team play.
W: That’s normal. And have you been doing the exercises I gave you, twice a day?
M: Most days. My coach keeps asking when I can start training again.
W: That’s not something I can promise yet. Dr Benali did a great job on the operation, but the muscles still need building up. Keep going with the exercises, and I’ll see you here at the clinic next Tuesday, same time.`;
const LI1_BOOKS = `I joined an English-language book club at the university library in September, mostly to improve my vocabulary. I assumed the hardest part would be understanding the books, and the first one was quite a challenge, I admit. But actually, the reading is fine now. What still makes me nervous is the discussion itself. Everyone else seems to have such clever opinions, and by the time I’ve worked out how to say what I think, the conversation has moved on. The organiser says I should write a few notes beforehand, so I’m going to try that.`;
const LI1_GYM = `Hello, this is Rania Saidi, membership number four-five-two-one. I’m calling about the email you sent yesterday saying my membership will renew automatically next month. I’m actually very happy with the gym, so this isn’t a complaint. It’s just that I’m starting a job in Casablanca in January, so I won’t be able to come any more. Could someone tell me what I need to do to stop the payments? I couldn’t find the option in the app. You can call me back on this number any time after five. Thanks.`;
const LI1_PHOTOS = `M: What did you think of the photography exhibition, then?
W: The photos themselves were stunning, especially the ones of the desert at night. But I came out feeling a bit frustrated.
M: Why? Too crowded?
W: No, it was fine. It’s just that there was no information next to any of them. No place, no date, nothing. I kept wanting to know the story behind each picture.
M: I think that was deliberate. The photographer wants you to make up your own story.
W: Maybe, but I’d still have liked the choice.`;

// LI2: a student's talk about a sea turtle internship.
const LI2_TALK = `Hi everyone, I’m Yasmine, and I’m in my third year of a biology degree. Last summer I did an internship with a sea turtle conservation project on Boa Vista, one of the islands of Cape Verde, and I’ve been asked to tell you about it.
A lot of students find internships through the university website, but I actually heard about this one on a podcast about ocean wildlife, which I listen to on my way to lectures. The project normally takes interns for ten weeks, but because they were short of people, I ended up staying for twelve weeks.
We lived in an old school building at the edge of a fishing village. It had no air conditioning and the showers were cold, but after a few days nobody cared.
Most of the work happened at night. Female loggerhead turtles come up the beach in the dark to dig their nests, so we did night patrols to record them and keep them safe. The patrols were supposed to be groups of six, but there were never enough volunteers, so in practice we worked in groups of four. We were only allowed torches with a red light, because white light disturbs the turtles, and they can return to the sea without laying any eggs.
When a nest was too close to the water, we carefully dug up the eggs and moved them to a hatchery, a fenced area higher up the beach where the tide can’t reach them. Every morning we checked the temperature of the sand there, which decides whether the babies will be male or female.
People always ask me what to pack. Everybody told me to bring insect repellent, and to be fair I used it, but the thing I found most useful was a waterproof notebook. Paper and wet hands at three in the morning don’t go well together.
Before I went, I assumed the biggest threat to the turtles would be plastic in the sea. It is a problem, of course, but on that island the most serious danger is actually sand extraction. People take sand from the beaches to build houses, and without the sand, there’s nowhere for the turtles to nest.
That’s why education is so important there. Once a week I helped give talks to the local community. We tried the market at first, but people were too busy shopping, so we moved the talks to the primary school, and the children ended up teaching their parents.
Finally, the internship changed my plans. I’d always thought I’d go into research after my degree, but seeing how much depends on rules and on how they’re enforced, I’ve applied for a master’s in environmental law. Thanks for listening, and I’m happy to take questions.`;

// LI3: five people who took up a musical instrument as teenagers or adults.
const LI3_SCRIPT = `Speaker 1: I started the cello at thirty-four, and the only beginners’ class at the music school near me was full of ten-year-olds. The first few weeks I wanted the floor to swallow me up, sitting there with my knees round this enormous instrument while the kids watched. I’d tried learning from videos online before that, but I always gave up after a week. Now the children treat me like a big sister, and I’ve stopped worrying about what anyone thinks.
Speaker 2: My older brother left his bass guitar behind when he moved to Berlin, so at fifteen I just started messing about with it. What surprised me is how it’s changed the way I hear songs. I used to just follow the singer. Now I notice everything happening underneath, the bass line, the drums, and songs I’ve known all my life suddenly sound completely new.
Speaker 3: My grandfather has played the accordion at every family party since before I was born, and his hands are getting tired now. So last year I asked him to teach me, and the idea is that we’ll play together, him on his old accordion and me on a cheaper one. We practise on Sunday afternoons. He’s a strict teacher, but I’ve never seen him so happy.
Speaker 4: I took up the oud when I was nineteen, about a year after I’d broken my left wrist playing football. The doctors said it had healed, but pressing the strings was really painful at first, and my fingers just wouldn’t stretch far enough. My teacher gave me exercises to do away from the instrument, and slowly it got easier. These days I can play for an hour without a break.
Speaker 5: At school we all had to play the recorder, and I couldn’t stand it, so I never imagined I’d take up an instrument. Then, at a friend’s wedding in Seville, a brass band started playing in the street outside, and the trumpet player did a solo that gave me goosebumps. I bought a second-hand trumpet the following week. My neighbours are being very patient.`;
const LI3_OPTIONS = [
  'A I started after hearing someone play at a particular event.',
  'B At first I felt embarrassed about learning with much younger people.',
  'C I have mainly taught myself with online videos.',
  'D It has changed the way I listen to music.',
  'E I gave up another instrument in order to learn this one.',
  'F I am learning so that I can play with a relative.',
  'G I had to overcome a physical problem.',
  'H I am preparing for a performance on a particular date.',
];

// LI4: a young chef who opened her own restaurant.
const LI4_INTERVIEW = `Interviewer: My guest today is Nour Haddad, who, at twenty-seven, runs Zaatar, a small restaurant in Lyon that has had queues outside since the week it opened. Nour, did you grow up in a family of cooks?
Nour: People always expect me to say yes, but no. Both my parents worked long hours, and we ate a lot of frozen pizza. My grandmother was a wonderful cook, but she lived in Beirut, so I only saw her in the summer. What really did it was a holiday job when I was sixteen, washing dishes in a hotel kitchen. I spent the whole summer watching the chefs instead of the plates, and by September I knew exactly what I wanted to do.
Interviewer: You then trained at one of the most famous restaurants in Paris. Why did you leave?
Nour: Everyone assumes it was the hours, and yes, we worked from eight in the morning until after midnight. But honestly, I was young and I didn’t mind that. What I found harder was that after four years, I was still cooking somebody else’s ideas, perfectly, every night. I wanted to find out what my own food tasted like.
Interviewer: And opening your own place: what was the hardest part?
Nour: I was sure it would be the money. In the end, though, a crowdfunding campaign raised more than we needed in three weeks, mostly from friends and former customers. The real problem was the building. It used to be a bakery, and the ventilation was so old that we had to replace the whole system. That pushed our opening back by four months, and I spent that time paying rent on a restaurant with no customers.
Interviewer: Your menu is famously short.
Nour: Five dishes, yes. And it changes every week, because I write it on Monday morning after I’ve been to the market. If the tomatoes are bad, there are no tomatoes on the menu. Some customers find that frustrating; they come back for a dish they loved and it’s gone. But I’d rather lose a dish than serve something ordinary.
Interviewer: What about online reviews? Do you read them?
Nour: In the beginning I read every single one, at two in the morning, and a bad one could ruin my whole week. Now the team and I look at them together once a month. One person complaining that the bread was cold doesn’t mean much. But if five people say the same thing, then we listen and we change it.
Interviewer: I hear your team works in a rather unusual way.
Nour: Well, in most restaurants, the waiters never set foot in the kitchen, and the cooks never talk to a customer. Here, everyone spends at least one evening a week doing a job that isn’t theirs. Our waiter, Malik, makes the desserts on Thursdays, and I serve tables on Tuesdays. It means everyone understands why things go wrong, and nobody blames the other side.
Interviewer: So what’s next? A second restaurant?
Nour: Everybody asks me that, and for now the answer is no. One is quite enough. What I’d love to do is start free cooking classes for teenagers in the neighbourhood, on Monday afternoons when we’re closed. I was lucky to find that kitchen at sixteen. Not everyone is.`;

export const fceFull1Listening: Exercise[] = [
  // ── Listening Part 1 ──
  li1('fce-m3-li1-1', 4, LI1_BIKE, 'You hear two friends talking about a bike. How does the man feel about it?', ['satisfied, considering the price', 'annoyed that the seller misled him', 'worried that it is not safe to ride'], x(
    '« For what I paid, I can’t really complain… it rides beautifully » : il est content vu le prix, malgré les rayures.',
    '«for what I paid, I can’t really complain… it rides beautifully»: هو راضٍ بالنظر إلى السعر رغم الخدوش.',
    '“For what I paid, I can’t really complain.”',
    '«For what I paid, I can’t really complain… it rides beautifully»: está contento por el precio, pese a los arañazos.',
  )),
  li1('fce-m3-li1-2', 3, LI1_FERRY, 'You hear an announcement. Where is it being made?', ['on a ship', 'in a port waiting room', 'on a train'], x(
    '« The car decks will remain closed until we have docked », « on board », « deck six » : on est sur un bateau.',
    '«The car decks will remain closed until we have docked» و«on board» و«deck six»: الإعلان على متن سفينة.',
    '“Until we have docked”, “deck six”: a ship.',
    '«The car decks will remain closed until we have docked», «on board», «deck six»: es un barco.',
  )),
  li1('fce-m3-li1-3', 4, LI1_FLAT, 'You hear two flatmates talking. What do they agree about?', ['Their system for sharing housework is not working.', 'Lina should clean the kitchen this week.', 'The person who cooks should do the washing-up.'], x(
    '« The rota on the fridge just isn’t working » — « That’s true » ; ils choisissent ensuite que celui qui n’a pas cuisiné fasse la vaisselle.',
    '«The rota on the fridge just isn’t working» فتردّ «That’s true»؛ ثم يتفقان على أن يغسل الصحون من لم يطبخ.',
    '“The rota… just isn’t working.” “That’s true.”',
    '«The rota on the fridge just isn’t working» — «That’s true»; luego friega quien no ha cocinado.',
  )),
  li1('fce-m3-li1-4', 5, LI1_HOMETOWN, 'You hear a young woman talking about moving back to her hometown. What is her main point?', ['She is discovering the town in a new way.', 'She moved back mainly to save money.', 'She regrets leaving the big city.'], x(
    'L’argent n’est pas l’essentiel (« that’s not really what this year has been about ») : « It’s as if I’m visiting it for the first time ».',
    'المال ليس الأساس («that’s not really what this year has been about»)، بل تكتشف مدينتها من جديد: «It’s as if I’m visiting it for the first time».',
    '“It’s as if I’m visiting it for the first time.”',
    'El dinero no es lo principal («that’s not really what this year has been about»): «It’s as if I’m visiting it for the first time».',
  )),
  li1('fce-m3-li1-5', 4, LI1_KNEE, 'You hear a woman talking to a young man about his knee. Who is she?', ['his physiotherapist', 'his football coach', 'the surgeon who operated on him'], x(
    'Elle donne des exercices (« the exercises I gave you »), parle d’opération faite par « Dr Benali » et de rendez-vous « at the clinic » : c’est sa kinésithérapeute.',
    'تعطيه تمارين («the exercises I gave you»)، والعملية أجراها «Dr Benali»، والموعد «at the clinic»: إنها أخصائية العلاج الطبيعي.',
    '“The exercises I gave you… see you here at the clinic.”',
    'Le da ejercicios («the exercises I gave you»), la operación la hizo «Dr Benali» y lo cita «at the clinic»: es su fisioterapeuta.',
  )),
  li1('fce-m3-li1-6', 4, LI1_BOOKS, 'You hear a woman talking about a book club. What does she find difficult?', ['expressing her ideas quickly enough in discussions', 'understanding the books the club reads', 'finding enough time to finish each book'], x(
    '« The reading is fine now. What still makes me nervous is the discussion… by the time I’ve worked out how to say what I think, the conversation has moved on. »',
    'القراءة لم تعد مشكلة («the reading is fine now»)، لكن النقاش يقلقها: «by the time I’ve worked out how to say what I think, the conversation has moved on».',
    '“By the time I’ve worked out how to say what I think, the conversation has moved on.”',
    '«The reading is fine now. What still makes me nervous is the discussion… the conversation has moved on.»',
  )),
  li1('fce-m3-li1-7', 3, LI1_GYM, 'You hear a woman leaving a message for a gym. Why is she calling?', ['to find out how to cancel her membership', 'to complain about an email she received', 'to report a problem with the gym’s app'], x(
    '« Could someone tell me what I need to do to stop the payments? » ; elle précise « this isn’t a complaint ».',
    '«Could someone tell me what I need to do to stop the payments?»، وتوضح «this isn’t a complaint».',
    '“What I need to do to stop the payments.”',
    '«Could someone tell me what I need to do to stop the payments?»; aclara «this isn’t a complaint».',
  )),
  li1('fce-m3-li1-8', 4, LI1_PHOTOS, 'You hear two friends talking about an exhibition. What does the woman think?', ['It should have given more details about the photos.', 'The photos were less impressive than she had expected.', 'There were too many people to enjoy it properly.'], x(
    '« There was no information next to any of them… I kept wanting to know the story » ; les photos étaient « stunning » et il n’y avait pas foule.',
    '«there was no information next to any of them… I kept wanting to know the story»؛ والصور «stunning» ولم يكن هناك ازدحام.',
    '“There was no information next to any of them.”',
    '«There was no information next to any of them… I kept wanting to know the story»; las fotos eran «stunning».',
  )),

  // ── Listening Part 2 ──
  li2('fce-m3-li2-1', 3, LI2_TALK, 'Yasmine first heard about the internship on a ___.', ['podcast'], x(
    'On entend : « I actually heard about this one on a podcast » ; le site de l’université est un piège.',
    'نسمع: «I actually heard about this one on a podcast»؛ وموقع الجامعة فخّ.',
    'Heard: “on a podcast”, not the website.',
    'Se oye: «I actually heard about this one on a podcast»; la web de la universidad es una trampa.',
  )),
  li2('fce-m3-li2-2', 4, LI2_TALK, 'Because the project was short of people, Yasmine stayed for ___.', ['twelve weeks'], x(
    'On entend : « normally… ten weeks, but… I ended up staying for twelve weeks ».',
    'نسمع: «normally… ten weeks, but… I ended up staying for twelve weeks».',
    'Heard: ten weeks normally, but “twelve weeks”.',
    'Se oye: «normally… ten weeks, but… I ended up staying for twelve weeks».',
  )),
  li2('fce-m3-li2-3', 4, LI2_TALK, 'The interns lived in an old ___ at the edge of a fishing village.', ['school building', 'school'], x(
    'On entend : « We lived in an old school building at the edge of a fishing village ». « School » seul est aussi accepté.',
    'نسمع: «We lived in an old school building at the edge of a fishing village». وتُقبل كلمة «school» وحدها أيضًا.',
    'Heard: “an old school building” (“school” also accepted).',
    'Se oye: «We lived in an old school building at the edge of a fishing village». También se acepta «school» solo.',
  )),
  li2('fce-m3-li2-4', 4, LI2_TALK, 'In practice, each night patrol was a group of ___ people.', ['four'], x(
    'On entend : « supposed to be groups of six, but… in practice we worked in groups of four ».',
    'نسمع: «supposed to be groups of six, but… in practice we worked in groups of four».',
    'Heard: six planned, but “groups of four”.',
    'Se oye: «supposed to be groups of six, but… in practice we worked in groups of four».',
  )),
  li2('fce-m3-li2-5', 3, LI2_TALK, 'The interns could only use torches with a ___ light.', ['red'], x(
    'On entend : « only allowed torches with a red light, because white light disturbs the turtles ».',
    'نسمع: «only allowed torches with a red light, because white light disturbs the turtles».',
    'Heard: “torches with a red light”.',
    'Se oye: «only allowed torches with a red light, because white light disturbs the turtles».',
  )),
  li2('fce-m3-li2-6', 4, LI2_TALK, 'Eggs from nests too close to the water were moved to a ___.', ['hatchery'], x(
    'On entend : « we carefully dug up the eggs and moved them to a hatchery ».',
    'نسمع: «we carefully dug up the eggs and moved them to a hatchery».',
    'Heard: “moved them to a hatchery”.',
    'Se oye: «we carefully dug up the eggs and moved them to a hatchery».',
  )),
  li2('fce-m3-li2-7', 4, LI2_TALK, 'The item Yasmine found most useful was a ___.', ['waterproof notebook', 'notebook'], x(
    'On entend : « the thing I found most useful was a waterproof notebook » ; l’anti-moustique est le piège.',
    'نسمع: «the thing I found most useful was a waterproof notebook»؛ وطارد الحشرات فخّ.',
    'Heard: “a waterproof notebook”, not insect repellent.',
    'Se oye: «the thing I found most useful was a waterproof notebook»; el repelente es la trampa.',
  )),
  li2('fce-m3-li2-8', 5, LI2_TALK, 'On the island, the most serious danger to the turtles is ___.', ['sand extraction'], x(
    'On entend : « I assumed… plastic… but on that island the most serious danger is actually sand extraction ».',
    'نسمع: «I assumed… plastic… but on that island the most serious danger is actually sand extraction».',
    'Heard: not plastic but “sand extraction”.',
    'Se oye: «I assumed… plastic… but on that island the most serious danger is actually sand extraction».',
  )),
  li2('fce-m3-li2-9', 4, LI2_TALK, 'The talks for the local community were moved to the ___.', ['primary school', 'school'], x(
    'On entend : « We tried the market at first… so we moved the talks to the primary school ». « School » seul est aussi accepté.',
    'نسمع: «We tried the market at first… so we moved the talks to the primary school». وتُقبل كلمة «school» وحدها أيضًا.',
    'Heard: market first, then “the primary school” (“school” also accepted).',
    'Se oye: «We tried the market at first… so we moved the talks to the primary school». También se acepta «school» solo.',
  )),
  li2('fce-m3-li2-10', 5, LI2_TALK, 'Yasmine has now applied for a master’s in ___.', ['environmental law'], x(
    'On entend : « I’d always thought I’d go into research… I’ve applied for a master’s in environmental law ».',
    'نسمع: «I’d always thought I’d go into research… I’ve applied for a master’s in environmental law».',
    'Heard: not research but “environmental law”.',
    'Se oye: «I’d always thought I’d go into research… I’ve applied for a master’s in environmental law».',
  )),

  // ── Listening Part 3 ──
  li3('fce-m3-li3-1', 4, LI3_SCRIPT, 'Which statement matches what Speaker 1 says?', LI3_OPTIONS, 1, x(
    'Locuteur 1 : une classe « full of ten-year-olds », « I wanted the floor to swallow me up » → gêne d’apprendre avec des plus jeunes (B). Les vidéos, elle les a abandonnées (pas C).',
    'المتحدثة 1: صف «full of ten-year-olds» و«I wanted the floor to swallow me up» ← الحرج من التعلّم مع من هم أصغر سنًا (B). أما الفيديوهات فقد تخلّت عنها (ليست C).',
    'Speaker 1: “full of ten-year-olds… wanted the floor to swallow me up” → B.',
    'Hablante 1: una clase «full of ten-year-olds», «I wanted the floor to swallow me up» → B. Dejó los vídeos (no C).',
  )),
  li3('fce-m3-li3-2', 4, LI3_SCRIPT, 'Which statement matches what Speaker 2 says?', LI3_OPTIONS, 3, x(
    'Locuteur 2 : « it’s changed the way I hear songs… I notice everything happening underneath » → D. Le frère a seulement laissé la basse (pas F).',
    'المتحدث 2: «it’s changed the way I hear songs… I notice everything happening underneath» ← D. والأخ ترك الغيتار فقط ولا يعزفان معًا (ليست F).',
    'Speaker 2: “it’s changed the way I hear songs” → D.',
    'Hablante 2: «it’s changed the way I hear songs… I notice everything happening underneath» → D. El hermano solo dejó el bajo (no F).',
  )),
  li3('fce-m3-li3-3', 3, LI3_SCRIPT, 'Which statement matches what Speaker 3 says?', LI3_OPTIONS, 5, x(
    'Locuteur 3 : « the idea is that we’ll play together », avec son grand-père → jouer avec un proche (F).',
    'المتحدث 3: «the idea is that we’ll play together» مع جدّه ← العزف مع أحد الأقارب (F).',
    'Speaker 3: “we’ll play together” with his grandfather → F.',
    'Hablante 3: «the idea is that we’ll play together», con su abuelo → F.',
  )),
  li3('fce-m3-li3-4', 4, LI3_SCRIPT, 'Which statement matches what Speaker 4 says?', LI3_OPTIONS, 6, x(
    'Locuteur 4 : poignet cassé, « pressing the strings was really painful… slowly it got easier » → difficulté physique surmontée (G).',
    'المتحدث 4: معصم مكسور، و«pressing the strings was really painful… slowly it got easier» ← التغلّب على مشكلة جسدية (G).',
    'Speaker 4: broken wrist, “really painful… slowly it got easier” → G.',
    'Hablante 4: muñeca rota, «pressing the strings was really painful… slowly it got easier» → G.',
  )),
  li3('fce-m3-li3-5', 5, LI3_SCRIPT, 'Which statement matches what Speaker 5 says?', LI3_OPTIONS, 0, x(
    'Locuteur 5 : au mariage, « the trumpet player did a solo that gave me goosebumps. I bought a second-hand trumpet the following week » → A. La flûte à bec date de l’école (pas E).',
    'المتحدث 5: في حفل الزفاف «the trumpet player did a solo that gave me goosebumps. I bought a second-hand trumpet the following week» ← A. والمزمار كان في المدرسة (ليست E).',
    'Speaker 5: a trumpet solo at a wedding, then “I bought a second-hand trumpet” → A.',
    'Hablante 5: en la boda, «the trumpet player did a solo that gave me goosebumps… I bought a second-hand trumpet» → A. La flauta era del colegio (no E).',
  )),

  // ── Listening Part 4 ──
  li4('fce-m3-li4-1', 4, LI4_INTERVIEW, 'What made Nour decide to become a chef?', ['working in a professional kitchen as a teenager', 'cooking with her grandmother in Beirut', 'watching her parents prepare family meals'], x(
    '« What really did it was a holiday job when I was sixteen… watching the chefs » ; sa grand-mère vivait loin et ses parents achetaient des pizzas surgelées.',
    '«What really did it was a holiday job when I was sixteen… watching the chefs»؛ فجدّتها بعيدة ووالداها يأكلان البيتزا المجمّدة.',
    '“What really did it was a holiday job when I was sixteen.”',
    '«What really did it was a holiday job when I was sixteen… watching the chefs»; su abuela vivía lejos.',
  )),
  li4('fce-m3-li4-2', 4, LI4_INTERVIEW, 'Why did Nour leave the restaurant in Paris?', ['She wanted to develop her own style of cooking.', 'She found the working hours too long.', 'She felt she was not given enough responsibility.'], x(
    '« I was still cooking somebody else’s ideas… I wanted to find out what my own food tasted like » ; les horaires, « I didn’t mind that ».',
    '«I was still cooking somebody else’s ideas… I wanted to find out what my own food tasted like»؛ أما ساعات العمل فـ«I didn’t mind that».',
    '“I wanted to find out what my own food tasted like.”',
    '«I was still cooking somebody else’s ideas… I wanted to find out what my own food tasted like»; el horario, «I didn’t mind that».',
  )),
  li4('fce-m3-li4-3', 4, LI4_INTERVIEW, 'What was the main problem when Nour opened her restaurant?', ['Work on the building took longer than planned.', 'She could not raise enough money.', 'Very few customers came in the first months.'], x(
    '« The real problem was the building… That pushed our opening back by four months » ; le financement participatif « raised more than we needed ».',
    '«The real problem was the building… That pushed our opening back by four months»؛ والتمويل الجماعي «raised more than we needed».',
    '“The real problem was the building… pushed our opening back by four months.”',
    '«The real problem was the building… That pushed our opening back by four months»; el crowdfunding «raised more than we needed».',
  )),
  li4('fce-m3-li4-4', 3, LI4_INTERVIEW, 'What does Nour say about her menu?', ['It depends on what she finds at the market.', 'Customers’ favourite dishes always stay on it.', 'She would like it to be longer.'], x(
    '« It changes every week, because I write it… after I’ve been to the market. If the tomatoes are bad, there are no tomatoes on the menu. »',
    'تتغيّر القائمة كل أسبوع حسب السوق: «I write it… after I’ve been to the market. If the tomatoes are bad, there are no tomatoes on the menu».',
    '“I write it… after I’ve been to the market.”',
    '«It changes every week, because I write it… after I’ve been to the market. If the tomatoes are bad, there are no tomatoes on the menu.»',
  )),
  li4('fce-m3-li4-5', 4, LI4_INTERVIEW, 'How does Nour deal with online reviews now?', ['She only acts on comments that several people make.', 'She replies to each review personally.', 'She has stopped reading them altogether.'], x(
    '« One person complaining… doesn’t mean much. But if five people say the same thing, then we listen and we change it. »',
    'لا تهتم بتعليق واحد، بل بما يكرّره عدة أشخاص: «if five people say the same thing, then we listen and we change it».',
    '“If five people say the same thing, then we… change it.”',
    '«One person complaining… doesn’t mean much. But if five people say the same thing, then we listen and we change it.»',
  )),
  li4('fce-m3-li4-6', 5, LI4_INTERVIEW, 'What is unusual about the way Nour’s team works?', ['Staff regularly do jobs other than their own.', 'The cooks discuss each dish with the customers.', 'Waiters and cooks meet every evening to discuss problems.'], x(
    '« Everyone spends at least one evening a week doing a job that isn’t theirs » : Malik fait les desserts, Nour sert en salle.',
    '«everyone spends at least one evening a week doing a job that isn’t theirs»: مالك يعدّ الحلويات ونور تخدم الزبائن.',
    '“A job that isn’t theirs” once a week.',
    '«Everyone spends at least one evening a week doing a job that isn’t theirs»: Malik hace los postres y Nour sirve mesas.',
  )),
  li4('fce-m3-li4-7', 4, LI4_INTERVIEW, 'What does Nour plan to do next?', ['teach young people to cook for free', 'open a second restaurant', 'start opening the restaurant on Mondays'], x(
    '« Start free cooking classes for teenagers… on Monday afternoons when we’re closed » ; un deuxième restaurant : « the answer is no ».',
    '«start free cooking classes for teenagers… on Monday afternoons when we’re closed»؛ ومطعم ثانٍ: «the answer is no».',
    '“Free cooking classes for teenagers.”',
    '«Start free cooking classes for teenagers… on Monday afternoons when we’re closed»; un segundo restaurante: «the answer is no».',
  )),
];
