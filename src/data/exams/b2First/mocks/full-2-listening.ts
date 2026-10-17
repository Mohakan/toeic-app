import type { Exercise } from '../../../../types';
import { x } from '../../../curriculum/build';
import { li1, li2, li3, li4 } from '../build';

/**
 * Full mock test fce-full-2, Listening (30 items: LI1 8, LI2 10, LI3 5, LI4 7).
 * Writing guide: docs/multi-examens/b2-contenu.md.
 * Topics: eight everyday extracts; a cycling trip from Andalusia to southern Morocco; a first
 * part-time job; a young wildlife photographer.
 */

// LI1: eight short extracts.
const LI1_FILM = `W: So, what did you think? You’ve read the book, haven’t you?
M: Twice. I was ready to hate the film, actually, because they usually cut half the story. And they did leave out quite a lot. But honestly, I didn’t miss any of it. The director kept what really matters, and the girl who plays Nour is just perfect.
W: I found it a bit slow in the middle.
M: Maybe, but I’d rather that than one of those films where everything’s rushed. I’d happily go and see it again.`;
const LI1_TRIP = `Before you all go, just a quick word about next Friday. As you know, the school trip to the science park has been moved because of the train strike. A few of you have asked whether you’ll get your money back. You won’t need to: the tickets are still valid for the new date, the twelfth. What I do need is for everyone to bring back the permission form, signed again by a parent, because the old date is printed on it. Put it in the box outside the staffroom by Wednesday, or Mr Benali can’t confirm the numbers with the park.`;
const LI1_DRIVING = `M: OK, pull in here, behind the blue van. Nice and slowly.
W: Was that better than last week? I checked the mirror before turning that time.
M: Much better. Your roundabouts are fine now. It’s still the parking that worries me a bit. Your test is in three weeks, so let’s spend the rest of today’s lesson on that.
W: Can we do the motorway as well? My dad says I’m too nervous on fast roads.
M: Your dad isn’t the one who’ll be marking you, Lina. Parking first.`;
const LI1_LILLE = `When I first moved to Lille for my course, I phoned home every evening. I didn’t know anyone, the weather was grey, and the food in the student canteen was, well, let’s not talk about it. My mum kept telling me it would get better, which annoyed me, to be honest. But she was right. I joined the university football team almost by chance, because a guy in my building needed an extra player, and suddenly I had twenty friends. I still miss my family, of course, but I’ve stopped counting the days until the holidays.`;
const LI1_ROOM = `W: Excuse me, I booked one of the study rooms for two o’clock, but there’s a group in there already.
M: Let me check. Ah, you’ve got room four; they’re in room three. The numbers on the doors are confusing, sorry. Oh, and the printer on that floor is out of order, so if you need to print anything, you’ll have to come down here to the desk.
W: OK. And can we eat in the room?
M: Drinks with a lid are fine, but no food, I’m afraid. And please keep your voices down; the silent reading area is right next door.`;
const LI1_CARS = `M: Have you heard? They’re closing the old town to cars from next month.
W: About time. You can hardly breathe down there in summer.
M: I’m not against the idea. But what about the shops? Half their customers drive in from the villages.
W: There’ll be a bus from the car park by the stadium, apparently.
M: Every forty minutes, I read. Nobody’s going to wait that long with bags of shopping.
W: Hmm, you’ve got a point there. They’ll have to run it more often, or the whole thing won’t work.`;
const LI1_OFFLINE = `I’d expected to feel bored without social media, and for the first few days I did. What I hadn’t expected was how much more I’d read. I got through four novels in a month, and I hadn’t finished a single book in the whole year before that. People warned me I’d lose touch with my friends, but they just texted me instead, so nothing really changed there. Will I stay off it for good? Probably not. But I’ve deleted the apps from my phone, so now I only check them on my laptop.`;
const LI1_KITCHEN = `W: Karim, can I have a word about the kitchen?
M: Oh no. Is it my dishes again? I was going to do them tonight, honestly.
W: It’s not just you. I leave things too, and Pablo’s even worse. I just think we’re all tired of arguing about it. What if we put a list on the fridge, and each of us took one week a month to be in charge?
M: And the fourth week?
W: We pay someone to come in and do a proper clean. It’d only be a few euros each.`;

// LI2: a cycling trip from Andalusia to southern Morocco.
const LI2_TALK = `Hi everyone, and thanks for coming. My name’s Adam Ferrer, and last spring my friend Hicham and I cycled from Seville to the edge of the Sahara, in southern Morocco. It took us twenty-four days, which was a week longer than we’d planned, and I’d like to tell you why.

We started training in January. I’d imagined the long hills would be the problem, so we spent every weekend in the mountains near Ronda. In the end, though, what we really should have practised was riding with heavy bags. Our bikes weighed nearly forty kilos fully loaded, and on the first morning we could hardly keep them straight.

From Seville we rode south to Tarifa, where we took the ferry across to Tangier. People had told us the crossing would take two hours, but in fact it was barely one, and the hardest part was pushing the bikes up the ramp onto the boat.

In northern Morocco we followed small roads through the Rif mountains. We’d packed a tent, but we only used it five or six times, because everywhere we went, families invited us to stay. One farmer in a village near Chefchaouen even repaired a broken wheel for us. He wouldn’t take any money; he just asked us to send him a postcard from home.

The biggest surprise of the trip was the weather. We’d brought plenty of sun cream and expected heat, but crossing the Middle Atlas we were caught in snow, and we had to wait three days in a small town until the pass reopened. That’s where the extra week went, along with a few days I spent in bed with a stomach bug in Fes.

If you’re thinking of doing something similar, here’s my advice. First, food. We carried energy bars from home, but we hardly touched them, because the best fuel turned out to be dates and bread, which you can buy in any village. Second, water. Don’t rely on the map to find it. We carried a small filter, and it was the most useful piece of equipment we had, more useful even than the GPS. Third, learn a few words of Darija, the Moroccan Arabic. Hicham speaks it, of course, but even my twenty words opened a lot of doors.

The last stage, from Erfoud to Merzouga, was only fifty kilometres, but the wind was so strong that it took us a whole day. We arrived just as the sun was setting over the dunes, and I have to admit I cried.

People often ask what we’d change. Honestly, I’d take fewer clothes and a lighter camera. And I’d leave more time, not to ride faster, but to stop more often.

We’ve made a short film about the journey, which will be shown at the town library next month. And anyone who’d like a copy of our route can find it on our blog, which is called Two Wheels South. Thanks for listening.`;

// LI3: a first part-time job.
const LI3_SCRIPT = `Speaker 1: I got my first job at a juice stall in the market in Marrakech, and I wasn’t even looking for one. I was just a customer, waiting for my orange juice, when the owner got a phone call: the boy who was supposed to start that morning wasn’t coming. He looked at me and said, ‘Can you cut fruit?’ I said yes, and I’d started work before I’d even finished my drink. The pay was pretty low, but I didn’t mind at all; it was such fun.
Speaker 2: I worked weekends at the reception of a campsite on the coast in Portugal. Lots of the guests were French, and my French had always been terrible at school. I was too shy to open my mouth in class. But after a summer of explaining where the showers were and how to book a table at the restaurant, I came back and got the best mark in my year. My teacher couldn’t believe it.
Speaker 3: I started at a small bakery in Lyon at sixteen, just serving customers. Then, in my third week, the owner broke her wrist, and suddenly I was opening the shop at six, counting the money at night and ordering the flour. I was terrified of getting something wrong, and sometimes I did. I stayed two years in the end, and I’ve no regrets about leaving when I went to university.
Speaker 4: My mum’s a cleaner in a hospital, and I always thought she exaggerated about how hard it was. Then I got a job cleaning offices in the evenings, three hours a night. After a week my knees and shoulders ached, and I was falling asleep in lessons. I’ve never complained about my mum being tired since. In fact, I do the cooking at home on Fridays now, so she can rest.
Speaker 5: I was a waiter in a big restaurant in Madrid for a summer. Everyone said I’d love it because I’m sociable, and the team was great, but I hated always having to be ‘on’, smiling and chatting to forty tables a night. Now I do data entry from home for an online shop. It’s quiet, and nobody needs me to smile. It turns out that suits me far better.`;
const LI3_OPTIONS = [
  'A I was given more responsibility than I felt ready for.',
  'B I only got the job because someone else let the employer down.',
  'C It made me appreciate what a family member does.',
  'D I found the journey to work more tiring than the work itself.',
  'E It improved my ability in a foreign language.',
  'F It showed me that I prefer working on my own.',
  'G I regret leaving the job so soon.',
  'H I was disappointed by how little I earned.',
];

// LI4: a young wildlife photographer.
const LI4_INTERVIEW = `Interviewer: Today I’m with Yara Mansour, who is twenty-four and whose photographs of wild animals have appeared in magazines around the world. Yara, how did it all begin?
Yara: People expect me to say I was given a camera as a child, but actually I didn’t own one until I was nineteen. What I did have was a grandfather in the Atlas mountains who took me walking every summer and made me sit still for hours watching birds. He used to say, ‘If you move, you’ll see nothing.’ So the patience came long before the photography, and I think that’s the right order.
Interviewer: Your first big success was a photo of a fox in a city, wasn’t it?
Yara: Yes, which still makes me laugh, because I’d spent months in national parks trying to get a good shot of something rare, and I’d come home with nothing special. Then one night, coming back from a party in Lyon, where I was studying, I saw a fox going through the bins behind a supermarket. I only had my phone with me, so I went back every night for two weeks with my camera. The picture that won the competition was taken about two hundred metres from my flat.
Interviewer: Lots of people take wildlife photos on holiday now. Is that a good thing?
Yara: Mostly, yes. The more people care about animals, the better. What worries me is when people get too close to get a better shot. I’ve seen tourists in Kenya surround a cheetah with their jeeps, so that it couldn’t hunt. And social media makes it worse, because the most dramatic picture gets the most likes. I always say: if the animal changes its behaviour because of you, you’re too close.
Interviewer: How do you earn a living? I imagine photography doesn’t pay very well.
Yara: It doesn’t, unless you’re very lucky. Selling pictures to magazines brings in surprisingly little, and competitions are a lottery. Most of my income comes from running workshops for amateur photographers, usually small groups of six or eight. I was nervous about teaching at first, but I’ve come to love it; my students notice things I’ve stopped seeing.
Interviewer: What’s the hardest part of the job?
Yara: Not the cold, or the early mornings, although there are plenty of both. It’s the disappointment. You can wait in a hide for twelve days for a bird that never comes. Early on, I took that personally, as if I’d failed. Now I tell myself that the days without a photo are part of the work, not a waste of it.
Interviewer: Is there a photo you’re particularly proud of?
Yara: Funnily enough, it’s not one that won anything. It’s a picture of a vulture in Spain, a bird most people find ugly. I wanted to show that it’s beautiful in its own way, and also very important, because it cleans up the countryside. When a farmer wrote to tell me he’d stopped putting out poison for them after seeing it, that meant more to me than any prize.
Interviewer: Finally, what advice would you give young people who want to do what you do?
Yara: Start where you are. You don’t need to fly to Africa. Learn the birds in your local park, the insects in your garden. And don’t spend all your savings on equipment. The best lens in the world won’t help you if you don’t understand the animal. I’d rather someone spent that money on a good field guide and a pair of warm boots.`;

export const fceFull2Listening: Exercise[] = [
  // ── Listening Part 1 ──
  li1('fce-m4-li1-1', 4, LI1_FILM, 'You hear two friends talking about a film based on a book. What does the man think of the film?', ['It was better than he had expected.', 'It left out too many important parts of the book.', 'It was too slow in places.'], x(
    'Il était « ready to hate the film », mais « I didn’t miss any of it… I’d happily go and see it again ». C’est la femme qui le trouve lent.',
    'كان «ready to hate the film»، لكنه يقول «I didn’t miss any of it… I’d happily go and see it again». والمرأة هي من وجدته بطيئًا.',
    'He was “ready to hate the film” but would “happily go and see it again”.',
    'Estaba «ready to hate the film», pero «I didn’t miss any of it… I’d happily go and see it again». Es la mujer quien la encuentra lenta.',
  )),
  li1('fce-m4-li1-2', 3, LI1_TRIP, 'You hear a teacher speaking to her class. Why is she speaking to them?', ['to ask them to return a document', 'to explain how to get a refund', 'to announce that a trip has been cancelled'], x(
    '« What I do need is for everyone to bring back the permission form » : elle demande de rendre le formulaire. Pas de remboursement (« You won’t need to ») et le voyage est déplacé, non annulé.',
    '«What I do need is for everyone to bring back the permission form»: تطلب إعادة الاستمارة. لا استرداد للمال («You won’t need to»)، والرحلة أُجّلت ولم تُلغَ.',
    '“What I do need is for everyone to bring back the permission form.”',
    '«What I do need is for everyone to bring back the permission form»: pide devolver el formulario. No hay reembolso («You won’t need to») y la excursión se aplaza, no se cancela.',
  )),
  li1('fce-m4-li1-3', 3, LI1_DRIVING, 'You hear two people in a car. What is the relationship between them?', ['driving instructor and learner', 'father and daughter', 'examiner and candidate'], x(
    '« Your test is in three weeks… today’s lesson » : c’est un moniteur et son élève. Le père est mentionné (« My dad says ») et l’examen n’a pas encore eu lieu.',
    '«Your test is in three weeks… today’s lesson»: إنه مدرّب قيادة ومتعلّمته. الأب مذكور فقط («My dad says»)، والامتحان لم يحن بعد.',
    '“Your test is in three weeks… today’s lesson” → instructor and learner.',
    '«Your test is in three weeks… today’s lesson»: son profesor de autoescuela y alumna. El padre solo se menciona («My dad says») y el examen aún no ha llegado.',
  )),
  li1('fce-m4-li1-4', 4, LI1_LILLE, 'You hear a student talking about moving to a new city. How does he feel about living there now?', ['He has got used to life there.', 'He still finds it hard to make friends.', 'He regrets not listening to his mother.'], x(
    '« Suddenly I had twenty friends… I’ve stopped counting the days until the holidays » : il s’est adapté. Il a fini par donner raison à sa mère (« she was right »), sans regret exprimé.',
    '«Suddenly I had twenty friends… I’ve stopped counting the days until the holidays»: لقد تأقلم. واعترف بأن أمه كانت محقّة («she was right») دون أن يعبّر عن ندم.',
    '“I’ve stopped counting the days until the holidays” → he has settled in.',
    '«Suddenly I had twenty friends… I’ve stopped counting the days until the holidays»: se ha adaptado. Reconoce que su madre tenía razón («she was right»), sin lamentarlo.',
  )),
  li1('fce-m4-li1-5', 3, LI1_ROOM, 'You hear a woman asking for help. Where is the conversation taking place?', ['in a library', 'in a hotel', 'in a language school'], x(
    'Les indices : « study rooms », « the printer… the desk », « no food », « the silent reading area is right next door » → une bibliothèque.',
    'القرائن: «study rooms» و«the printer… the desk» و«no food» و«the silent reading area is right next door» ← مكتبة.',
    '“Study rooms” and “the silent reading area” → a library.',
    'Las pistas: «study rooms», «the printer… the desk», «no food», «the silent reading area is right next door» → una biblioteca.',
  )),
  li1('fce-m4-li1-6', 4, LI1_CARS, 'You hear two friends discussing a plan to close the old town to cars. What do they agree about?', ['The bus service will need to be more frequent.', 'Cars should still be allowed in for shoppers.', 'Many shops in the old town will have to close.'], x(
    'Il critique le bus « every forty minutes » ; elle répond « you’ve got a point there. They’ll have to run it more often ». Ils s’accordent sur la fréquence du bus.',
    'ينتقد الحافلة «every forty minutes»، فتجيب: «you’ve got a point there. They’ll have to run it more often». يتفقان على ضرورة زيادة عدد الحافلات.',
    'She agrees: “They’ll have to run it more often.”',
    'Él critica el autobús «every forty minutes»; ella responde «you’ve got a point there. They’ll have to run it more often». Coinciden en la frecuencia.',
  )),
  li1('fce-m4-li1-7', 4, LI1_OFFLINE, 'You hear a young woman talking about a month without social media. What surprised her most?', ['how much she read', 'how bored she felt', 'how little contact she had with her friends'], x(
    '« What I hadn’t expected was how much more I’d read » : quatre romans en un mois. L’ennui était prévu (« I’d expected to feel bored ») et ses amis lui envoyaient des messages.',
    '«What I hadn’t expected was how much more I’d read»: أربع روايات في شهر. أما الملل فكان متوقعًا («I’d expected to feel bored»)، وأصدقاؤها راسلوها.',
    '“What I hadn’t expected was how much more I’d read.”',
    '«What I hadn’t expected was how much more I’d read»: cuatro novelas en un mes. El aburrimiento lo esperaba («I’d expected to feel bored») y sus amigos le escribían.',
  )),
  li1('fce-m4-li1-8', 5, LI1_KITCHEN, 'You hear two flatmates talking. What is the woman doing?', ['proposing a new arrangement', 'complaining about the man’s behaviour', 'apologising for leaving the kitchen untidy'], x(
    '« It’s not just you… What if we put a list on the fridge » : elle ne fait pas de reproche à Karim, elle propose une organisation nouvelle. « I leave things too » est un constat, pas des excuses.',
    '«It’s not just you… What if we put a list on the fridge»: لا تلوم كريم، بل تقترح تنظيمًا جديدًا. وعبارة «I leave things too» مجرد إقرار لا اعتذار.',
    '“What if we put a list on the fridge” → a suggestion, not a complaint.',
    '«It’s not just you… What if we put a list on the fridge»: no culpa a Karim, propone una nueva organización. «I leave things too» es una constatación, no una disculpa.',
  )),

  // ── Listening Part 2 ──
  li2('fce-m4-li2-1', 4, LI2_TALK, 'Adam now thinks they should have trained by riding with ___.', ['heavy bags', 'bags'], x(
    'On entend : « what we really should have practised was riding with heavy bags ». Les côtes (« long hills ») étaient ce qu’il imaginait, à tort.',
    'نسمع: «what we really should have practised was riding with heavy bags». أما المرتفعات («long hills») فكانت توقّعًا خاطئًا.',
    'Heard: “should have practised… riding with heavy bags”.',
    'Se oye: «what we really should have practised was riding with heavy bags». Las cuestas («long hills») eran lo que él imaginaba, sin razón.',
  )),
  li2('fce-m4-li2-2', 4, LI2_TALK, 'On the ferry crossing, the most difficult thing was pushing the bikes up the ___.', ['ramp'], x(
    'On entend : « the hardest part was pushing the bikes up the ramp ». La durée (« two hours ») est un piège : la traversée a pris à peine une heure.',
    'نسمع: «the hardest part was pushing the bikes up the ramp». أما المدة («two hours») ففخّ، إذ لم تستغرق الرحلة سوى ساعة تقريبًا.',
    'Heard: “pushing the bikes up the ramp”.',
    'Se oye: «the hardest part was pushing the bikes up the ramp». La duración («two hours») es una trampa.',
  )),
  li2('fce-m4-li2-3', 3, LI2_TALK, 'In northern Morocco, they only used their ___ five or six times.', ['tent'], x(
    'On entend : « We’d packed a tent, but we only used it five or six times », car des familles les invitaient.',
    'نسمع: «We’d packed a tent, but we only used it five or six times»، لأن العائلات كانت تستضيفهما.',
    'Heard: “a tent… we only used it five or six times”.',
    'Se oye: «We’d packed a tent, but we only used it five or six times», porque las familias los invitaban.',
  )),
  li2('fce-m4-li2-4', 4, LI2_TALK, 'Instead of money, a farmer asked them to send him a ___.', ['postcard'], x(
    'On entend : « He wouldn’t take any money; he just asked us to send him a postcard from home ».',
    'نسمع: «He wouldn’t take any money; he just asked us to send him a postcard from home».',
    'Heard: “send him a postcard from home”.',
    'Se oye: «He wouldn’t take any money; he just asked us to send him a postcard from home».',
  )),
  li2('fce-m4-li2-5', 3, LI2_TALK, 'In the Middle Atlas, the cyclists were surprised to be caught in ___.', ['snow'], x(
    'On entend : « crossing the Middle Atlas we were caught in snow ». Ils s’attendaient à la chaleur (« expected heat »).',
    'نسمع: «crossing the Middle Atlas we were caught in snow». وكانا يتوقعان الحرّ («expected heat»).',
    'Heard: “we were caught in snow”.',
    'Se oye: «crossing the Middle Atlas we were caught in snow». Esperaban calor («expected heat»).',
  )),
  li2('fce-m4-li2-6', 4, LI2_TALK, 'Adam also lost a few days in Fes because of a ___.', ['stomach bug', 'bug'], x(
    'On entend : « a few days I spent in bed with a stomach bug in Fes ».',
    'نسمع: «a few days I spent in bed with a stomach bug in Fes».',
    'Heard: “in bed with a stomach bug in Fes”.',
    'Se oye: «a few days I spent in bed with a stomach bug in Fes».',
  )),
  li2('fce-m4-li2-7', 4, LI2_TALK, 'The best food for energy turned out to be dates and ___.', ['bread'], x(
    'On entend : « the best fuel turned out to be dates and bread ». Les barres énergétiques (« energy bars ») n’ont presque pas servi.',
    'نسمع: «the best fuel turned out to be dates and bread». أما ألواح الطاقة («energy bars») فبالكاد استُعملت.',
    'Heard: “dates and bread”; the energy bars were hardly touched.',
    'Se oye: «the best fuel turned out to be dates and bread». Las barritas («energy bars») casi no se usaron.',
  )),
  li2('fce-m4-li2-8', 5, LI2_TALK, 'Adam says their most useful piece of equipment was a small ___.', ['filter'], x(
    'On entend : « We carried a small filter, and it was the most useful piece of equipment we had, more useful even than the GPS ». Le GPS est le piège.',
    'نسمع: «We carried a small filter, and it was the most useful piece of equipment we had, more useful even than the GPS». و«GPS» هو الفخّ.',
    'Heard: “a small filter… more useful even than the GPS”.',
    'Se oye: «We carried a small filter… more useful even than the GPS». El GPS es la trampa.',
  )),
  li2('fce-m4-li2-9', 4, LI2_TALK, 'The last stage took a whole day because of the strong ___.', ['wind'], x(
    'On entend : « the wind was so strong that it took us a whole day ». La distance (cinquante kilomètres) était courte.',
    'نسمع: «the wind was so strong that it took us a whole day»، مع أن المسافة كانت قصيرة.',
    'Heard: “the wind was so strong that it took us a whole day”.',
    'Se oye: «the wind was so strong that it took us a whole day». La distancia era corta.',
  )),
  li2('fce-m4-li2-10', 5, LI2_TALK, 'A copy of the route is available on a blog called ___.', ['Two Wheels South'], x(
    'On entend : « our blog, which is called Two Wheels South ». La bibliothèque (« town library ») concerne le film, pas l’itinéraire.',
    'نسمع: «our blog, which is called Two Wheels South». أما المكتبة («town library») فتخصّ الفيلم لا المسار.',
    'Heard: “our blog, which is called Two Wheels South”.',
    'Se oye: «our blog, which is called Two Wheels South». La biblioteca («town library») es para la película, no la ruta.',
  )),

  // ── Listening Part 3 ──
  li3('fce-m4-li3-1', 4, LI3_SCRIPT, 'Which statement matches what Speaker 1 says?', LI3_OPTIONS, 1, x(
    'Locuteur 1 : « the boy who was supposed to start that morning wasn’t coming » → il a eu le poste parce qu’un autre a fait défaut (B). La paie basse ne le gênait pas (« I didn’t mind »), donc pas H.',
    'المتحدث 1: «the boy who was supposed to start that morning wasn’t coming» ← حصل على العمل لأن شخصًا آخر خذل صاحبه (B). ولم يزعجه الأجر المنخفض («I didn’t mind»)، فليست H.',
    'Speaker 1: the boy “wasn’t coming” → B; the low pay didn’t bother him.',
    'Hablante 1: «the boy who was supposed to start that morning wasn’t coming» → B. El sueldo bajo no le importaba («I didn’t mind»), así que no es H.',
  )),
  li3('fce-m4-li3-2', 3, LI3_SCRIPT, 'Which statement matches what Speaker 2 says?', LI3_OPTIONS, 4, x(
    'Locuteur 2 : « my French had always been terrible… I came back and got the best mark in my year » → progrès en langue étrangère (E).',
    'المتحدث 2: «my French had always been terrible… I came back and got the best mark in my year» ← تحسّن في لغة أجنبية (E).',
    'Speaker 2: terrible French, then “the best mark in my year” → E.',
    'Hablante 2: «my French had always been terrible… I came back and got the best mark in my year» → E.',
  )),
  li3('fce-m4-li3-3', 4, LI3_SCRIPT, 'Which statement matches what Speaker 3 says?', LI3_OPTIONS, 0, x(
    'Locuteur 3 : « suddenly I was opening the shop… counting the money… I was terrified of getting something wrong » → trop de responsabilités trop tôt (A). « I’ve no regrets about leaving » exclut G.',
    'المتحدثة 3: «suddenly I was opening the shop… counting the money… I was terrified of getting something wrong» ← مسؤولية أكبر مما كانت مستعدة له (A). وعبارة «I’ve no regrets about leaving» تستبعد G.',
    'Speaker 3: suddenly running the shop, “terrified” → A; “no regrets” rules out G.',
    'Hablante 3: «suddenly I was opening the shop… I was terrified of getting something wrong» → A. «I’ve no regrets about leaving» descarta G.',
  )),
  li3('fce-m4-li3-4', 4, LI3_SCRIPT, 'Which statement matches what Speaker 4 says?', LI3_OPTIONS, 2, x(
    'Locuteur 4 : « I always thought she exaggerated… I’ve never complained about my mum being tired since » → il comprend mieux le travail de sa mère (C).',
    'المتحدث 4: «I always thought she exaggerated… I’ve never complained about my mum being tired since» ← صار يقدّر عمل أمه (C).',
    'Speaker 4: “never complained about my mum being tired since” → C.',
    'Hablante 4: «I always thought she exaggerated… I’ve never complained about my mum being tired since» → valora el trabajo de su madre (C).',
  )),
  li3('fce-m4-li3-5', 5, LI3_SCRIPT, 'Which statement matches what Speaker 5 says?', LI3_OPTIONS, 5, x(
    'Locuteur 5 : il détestait « always having to be ‘on’ » ; maintenant il travaille seul chez lui : « It’s quiet… that suits me far better » (F). L’équipe était pourtant « great ».',
    'المتحدث 5: كان يكره «always having to be ‘on’»، ويعمل الآن وحده في البيت: «It’s quiet… that suits me far better» (F)، مع أن الفريق كان «great».',
    'Speaker 5: working alone at home “suits me far better” → F.',
    'Hablante 5: odiaba «always having to be ‘on’»; ahora trabaja solo en casa: «It’s quiet… that suits me far better» (F).',
  )),

  // ── Listening Part 4 ──
  li4('fce-m4-li4-1', 4, LI4_INTERVIEW, 'What does Yara say about how she started?', ['She learnt to observe wildlife before she took photos.', 'Her grandfather gave her her first camera.', 'She took up photography as a young child.'], x(
    '« The patience came long before the photography » : son grand-père lui apprenait à observer les oiseaux. Elle n’a eu un appareil qu’à dix-neuf ans.',
    '«The patience came long before the photography»: علّمها جدّها مراقبة الطيور، ولم تملك آلة تصوير إلا في التاسعة عشرة.',
    '“The patience came long before the photography.”',
    '«The patience came long before the photography»: su abuelo le enseñó a observar aves. No tuvo cámara hasta los diecinueve.',
  )),
  li4('fce-m4-li4-2', 4, LI4_INTERVIEW, 'Why does Yara find the story of her fox photo amusing?', ['It was taken very close to where she lived.', 'She took it with her phone by chance.', 'It showed an animal that is very rare.'], x(
    'Après des mois dans les parcs nationaux, la photo gagnante a été prise « about two hundred metres from my flat ». Elle est revenue avec son appareil, pas avec son téléphone.',
    'بعد أشهر في المحميات الوطنية، التُقطت الصورة الفائزة «about two hundred metres from my flat». وقد عادت بآلة التصوير لا بالهاتف.',
    'The winning picture was taken “about two hundred metres from my flat”.',
    'Tras meses en parques nacionales, la foto ganadora se tomó «about two hundred metres from my flat». Volvió con la cámara, no con el móvil.',
  )),
  li4('fce-m4-li4-3', 4, LI4_INTERVIEW, 'What worries Yara about people who take wildlife photos on holiday?', ['Some of them disturb the animals.', 'They post too many pictures online.', 'They spend too much on equipment.'], x(
    '« What worries me is when people get too close » ; les jeeps empêchaient le guépard de chasser. Les réseaux sociaux aggravent le problème mais n’en sont pas l’objet.',
    '«What worries me is when people get too close»؛ فالسيارات منعت الفهد من الصيد. ووسائل التواصل تزيد المشكلة سوءًا لكنها ليست جوهرها.',
    '“What worries me is when people get too close.”',
    '«What worries me is when people get too close»; los jeeps impedían cazar al guepardo. Las redes sociales agravan el problema, pero no son el problema.',
  )),
  li4('fce-m4-li4-4', 3, LI4_INTERVIEW, 'Where does most of Yara’s income come from?', ['teaching amateur photographers', 'selling photos to magazines', 'winning photography competitions'], x(
    '« Most of my income comes from running workshops for amateur photographers ». Les magazines rapportent « surprisingly little ».',
    '«Most of my income comes from running workshops for amateur photographers»، أما المجلات فتدرّ «surprisingly little».',
    '“Most of my income comes from running workshops.”',
    '«Most of my income comes from running workshops for amateur photographers». Las revistas aportan «surprisingly little».',
  )),
  li4('fce-m4-li4-5', 5, LI4_INTERVIEW, 'How has Yara’s attitude to days without a photo changed?', ['She now accepts them as a normal part of the job.', 'She now avoids them by planning more carefully.', 'She now finds them less tiring than before.'], x(
    'Avant, « I took that personally, as if I’d failed » ; maintenant, « the days without a photo are part of the work, not a waste of it ».',
    'في البداية «I took that personally, as if I’d failed»، أما الآن فتقول: «the days without a photo are part of the work, not a waste of it».',
    'Now: “part of the work, not a waste of it”.',
    'Antes, «I took that personally, as if I’d failed»; ahora, «the days without a photo are part of the work, not a waste of it».',
  )),
  li4('fce-m4-li4-6', 4, LI4_INTERVIEW, 'Why is Yara particularly proud of her vulture photo?', ['It changed how someone treated the birds.', 'It won an important prize.', 'It shows the bird in an unusual place.'], x(
    'Un fermier « had stopped putting out poison for them after seeing it », et cela compte plus que « any prize ». La photo n’a rien gagné.',
    'كتب لها مزارع أنه «had stopped putting out poison for them after seeing it»، وهذا أهمّ عندها من «any prize». فالصورة لم تفز بشيء.',
    'A farmer “stopped putting out poison for them after seeing it”.',
    'Un granjero «had stopped putting out poison for them after seeing it», y eso vale más que «any prize». La foto no ganó nada.',
  )),
  li4('fce-m4-li4-7', 4, LI4_INTERVIEW, 'What is Yara’s main advice to young people?', ['Get to know the wildlife near where you live.', 'Buy the best equipment you can afford.', 'Travel abroad to gain experience.'], x(
    '« Start where you are… Learn the birds in your local park » ; elle déconseille de dépenser ses économies en matériel et de partir en Afrique.',
    '«Start where you are… Learn the birds in your local park»؛ وتنصح بعدم إنفاق المدّخرات على المعدّات ولا السفر إلى إفريقيا.',
    '“Start where you are… learn the birds in your local park.”',
    '«Start where you are… Learn the birds in your local park»; desaconseja gastar los ahorros en equipo o viajar a África.',
  )),
];
