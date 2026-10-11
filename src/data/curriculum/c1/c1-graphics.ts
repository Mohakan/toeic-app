import type { Unit } from '../../../types';
import { lesson, listen, match, unit, withGraphic, x } from '../build';

const SCHEDULE = 'CONFERENCE ROOM BOOKINGS — Tuesday\nRoom A (12 seats): 9:00–11:00 Finance\nRoom B (20 seats): 10:00–12:00 free\nRoom C (8 seats): 13:00–15:00 Marketing\nRoom D (30 seats): 14:00–16:00 free';

const PRICES = 'SHIPPING OPTIONS\nEconomy — 7–10 days — $12\nStandard — 4–6 days — $20\nExpress — 2 days — $35\nOvernight — next day — $60';

const BUDGET = 'EVENT BUDGET — Annual Conference\nVenue: 18,000 dinars\nCatering: 12,500 dinars\nSpeakers: 7,000 dinars\nPrinting: 2,500 dinars';

const FLIGHTS = 'DEPARTURES — Tunis-Carthage\nTU 712 Paris 08:40 On time\nTU 214 Rome 09:15 Delayed\nTU 836 Frankfurt 10:05 On time\nTU 508 Madrid 11:30 Cancelled';

const SUPPLIERS = 'SUPPLIER COMPARISON\nAlfa Pack — price: low — delivery: 10 days — rating: 2/5\nBetaBox — price: medium — delivery: 3 days — rating: 4/5\nCarta Plus — price: high — delivery: 2 days — rating: 5/5\nDelta Wrap — price: low — delivery: 5 days — rating: 3/5';

const TRAINING = 'TRAINING CALENDAR — June\n3 June: Data protection (online)\n10 June: Negotiation (Room 2)\n17 June: Leadership (Room 5)\n24 June: Excel advanced (online)';

const SALES = 'QUARTERLY SALES BY REGION (million dinars)\nNorth: 4.2\nCenter: 3.1\nSahel: 5.6\nSouth: 1.8';

const PLANS = 'SERVICE PLANS\nBasic — 9 dinars/month — email support\nStandard — 19 dinars/month — phone support\nPremium — 39 dinars/month — phone support + on-site visits\nEnterprise — price on request — dedicated manager';

const PARKING = 'VISITOR PARKING\nLevel P1: 2 dinars/hour — max. 2 hours\nLevel P2: 1.5 dinars/hour — max. 4 hours\nLevel P3: 1 dinar/hour — no limit\nLevel P4: staff only';

const SHIFTS = 'WAREHOUSE SHIFTS — Week 14\nMonday: Sami / Nadia\nTuesday: Omar / Leila\nWednesday: Nadia / Karim\nThursday: Sami / Omar';

export const c1Graphics: Unit = unit(
  {
    id: 'c1-graphics',
    emoji: '📊',
    level: 5,
    part: 'L3 · L4',
    title: x('Écoute avec document', 'الاستماع مع وثيقة', 'Listening with a graphic', 'Comprensión auditiva con documento'),
    subtitle: x('Parties 3 et 4 : relier l’oral à un tableau', 'الجزءان 3 و4: ربط المسموع بجدول', 'Parts 3 and 4: link audio to a table', 'Partes 3 y 4: relacionar lo que se oye con una tabla'),
    lesson: lesson(
      x('Combiner ce que tu entends avec un tableau ou un planning.', 'الجمع بين ما تسمعه وجدول أو برنامج.', 'Combine what you hear with a table or schedule.', 'Combinar lo que oyes con una tabla o un horario.'),
      [
        x('Regarde le document avant l’écoute : quelles colonnes, quelles différences ?', 'انظر إلى الوثيقة قبل الاستماع: ما الأعمدة وما الفروق؟', 'Study the graphic before listening.', 'Mira el documento antes de escuchar: ¿qué columnas hay y qué diferencias?'),
        x('L’audio donne une condition (capacité, prix, délai) ; le document donne la réponse.', 'المسموع يعطي شرطًا (سعة، سعر، مدة) والوثيقة تعطي الجواب.', 'The audio gives a condition; the graphic gives the answer.', 'El audio da una condición (capacidad, precio, plazo) y el documento da la respuesta.'),
      ],
      'We need a room for about fifteen people this morning.',
      x('Croiser « 15 personnes » + « matin » avec le planning.', 'الربط بين «15 شخصًا» و«صباحًا» والجدول.', 'Cross “15 people” and “morning” with the schedule.', 'Cruzar «15 personas» y «por la mañana» con el horario.'),
    ),
  },
  [
    withGraphic(listen('c1-gr-l1', 'L3', 5, 'W: We need a room for our client presentation on Tuesday morning. There will be about fifteen people.\nM: Room A is too small, so let’s take the free one.', 'Look at the schedule. Which room will the speakers use?', ['Room B', 'Room A', 'Room C', 'Room D'], x(
      '15 personnes + matin + libre → Room B (20 places, libre 10 h–12 h).',
      '15 شخصًا + صباحًا + متاحة ← Room B (20 مقعدًا، متاحة 10–12).',
      '15 people, morning, free → Room B.',
      '15 personas + por la mañana + libre → Room B (20 plazas, libre de 10 a 12).',
    )), SCHEDULE),
    withGraphic(listen('c1-gr-l2', 'L3', 5, 'M: The customer needs the parts within three days, but she doesn’t want to pay for next-day delivery.\nW: Then we’ll choose the cheapest option that still arrives in time.', 'Look at the price list. How much will the shipping cost?', ['$35', '$20', '$60', '$12'], x(
      'Moins de 3 jours sans « overnight » → Express (2 jours) à 35 $.',
      'أقل من 3 أيام دون «overnight» ← Express (يومان) بـ 35 دولارًا.',
      'Within 3 days, not overnight → Express, $35.',
      'Menos de 3 días sin «overnight» → Express (2 días) por 35 $.',
    )), PRICES),
    withGraphic(listen('c1-gr-l3', 'L4', 5, 'Good afternoon. Because of the larger audience expected, the marketing workshop has been moved this afternoon to the biggest available room, from two to four.', 'Look at the schedule. Where will the workshop take place?', ['Room D', 'Room C', 'Room B', 'Room A'], x(
      'La plus grande salle libre l’après-midi (14 h–16 h) : Room D (30 places).',
      'أكبر قاعة متاحة بعد الظهر (14–16): Room D (30 مقعدًا).',
      'Biggest free room 2–4 p.m.: Room D.',
      'La sala libre más grande por la tarde (14–16 h): Room D (30 plazas).',
    )), SCHEDULE),
    withGraphic(listen('c1-gr-l4', 'L3', 5, 'W: Finance just told me their meeting will run an extra hour.\nM: Then the room they booked won’t be free until noon.', 'Look at the schedule. Which room will be occupied until noon?', ['Room A', 'Room B', 'Room C', 'Room D'], x(
      'Finance occupe Room A de 9 h à 11 h ; une heure de plus → jusqu’à midi.',
      'المالية تشغل Room A من 9 إلى 11، وساعة إضافية ← حتى منتصف النهار.',
      'Finance has Room A until 11; one more hour → noon.',
      'Finanzas ocupa la Room A de 9 a 11; una hora más → hasta mediodía.',
    )), SCHEDULE),
    withGraphic(listen('c1-gr-l5', 'L4', 5, 'Hi, it’s Dana from purchasing. The client has agreed to wait a little longer to save money, so please ship the samples using our least expensive option.', 'Look at the price list. How long will the delivery take?', ['7–10 days', '4–6 days', '2 days', 'Next day'], x(
      'L’option la moins chère est Economy (12 $) : 7 à 10 jours.',
      'الخيار الأرخص هو Economy (12 دولارًا): من 7 إلى 10 أيام.',
      'The cheapest option, Economy, takes 7–10 days.',
      'La opción más barata es Economy (12 $): de 7 a 10 días.',
    )), PRICES),
    match('c1-graphics-w1', ['encrypt', 'bandwidth', 'scalable', 'algorithm', 'phishing'], x(
      'Mots C1 sur l’informatique : relis l’exemple de chaque mot dans l’onglet Mots.',
      'مفردات C1 حول المعلوماتية: راجع مثال كل كلمة في قسم الكلمات.',
      'C1 words about technology: review each example in the Words tab.',
      'Palabras C1 sobre la informática: repasa el ejemplo de cada una en la pestaña Palabras.',
    )),
  ],
  [
    withGraphic(listen('c1-gr-s2-l1', 'L3', 5, 'W: The finance director wants us to cut the conference budget by about seven thousand dinars.\nM: Then let’s drop the line that costs exactly that and invite speakers from inside the company instead.', 'Look at the budget. Which item will be cut?', ['Speakers', 'Venue', 'Catering', 'Printing'], x(
      'Ligne de 7 000 dinars remplacée par des intervenants internes → « Speakers ».',
      'بند 7000 دينار يُعوَّض بمتحدثين من داخل الشركة ← «Speakers».',
      '7,000 dinars = speakers.',
      'La partida de 7000 dinares se sustituye por ponentes internos → «Speakers».',
    )), BUDGET),
    withGraphic(listen('c1-gr-s2-l2', 'L4', 5, 'Some good news about the conference: the hotel has agreed to include all printed materials in the venue price, so we can remove that line from the budget entirely.', 'Look at the budget. How much money will no longer be spent?', ['2,500 dinars', '18,000 dinars', '12,500 dinars', '7,000 dinars'], x(
      'Les imprimés (« printed materials ») = Printing, 2 500 dinars.',
      'المطبوعات («printed materials») = Printing، 2500 دينار.',
      'Printing: 2,500 dinars.',
      'Los impresos («printed materials») = Printing, 2500 dinares.',
    )), BUDGET),
    withGraphic(listen('c1-gr-s2-l3', 'L3', 5, 'M: I’ve just been told my flight’s been cancelled.\nW: So you’ll miss the client meeting in Spain? Let’s set up a video call with them instead.', 'Look at the board. Which flight was the man booked on?', ['TU 508', 'TU 712', 'TU 214', 'TU 836'], x(
      'Vol annulé + Espagne → Madrid, TU 508.',
      'رحلة ملغاة + إسبانيا ← مدريد، TU 508.',
      'Cancelled, to Spain: TU 508.',
      'Vuelo cancelado + España → Madrid, TU 508.',
    )), FLIGHTS),
    withGraphic(listen('c1-gr-s2-l4', 'L4', 5, 'Attention, please. Passengers travelling to Italy: we apologize for the late departure of your flight. A new boarding time will be announced shortly.', 'Look at the board. Which flight is the announcement about?', ['TU 214', 'TU 712', 'TU 836', 'TU 508'], x(
      'Italie = Rome, vol retardé → TU 214.',
      'إيطاليا = روما، رحلة متأخرة ← TU 214.',
      'Italy = Rome: TU 214.',
      'Italia = Roma, vuelo retrasado → TU 214.',
    )), FLIGHTS),
    withGraphic(listen('c1-gr-s2-l5', 'L3', 5, 'W: We need the boxes within a week, and quality matters more than price.\nM: Agreed, but there’s no point paying the top price. Let’s take the best-rated option that isn’t the most expensive.', 'Look at the comparison. Which supplier will they choose?', ['BetaBox', 'Alfa Pack', 'Carta Plus', 'Delta Wrap'], x(
      'Moins d’une semaine, pas le plus cher, meilleure note → BetaBox (3 jours, 4/5).',
      'أقل من أسبوع، ليس الأغلى، أفضل تقييم ← BetaBox (3 أيام، 4/5).',
      'BetaBox: fast, good, not top price.',
      'Menos de una semana, no el más caro, mejor nota → BetaBox (3 días, 4/5).',
    )), SUPPLIERS),
    withGraphic(listen('c1-gr-s2-l6', 'L3', 5, 'M: For the trial order, cost is all that matters.\nW: Fine, but ten days is too long. The client wants samples next week.', 'Look at the comparison. Which supplier will they probably use?', ['Delta Wrap', 'Alfa Pack', 'BetaBox', 'Carta Plus'], x(
      'Prix bas mais pas 10 jours → Delta Wrap (bas, 5 jours).',
      'سعر منخفض دون 10 أيام ← Delta Wrap (منخفض، 5 أيام).',
      'Cheap and within a week.',
      'Precio bajo pero sin 10 días → Delta Wrap (bajo, 5 días).',
    )), SUPPLIERS),
    withGraphic(listen('c1-gr-s2-l7', 'L4', 5, 'A quick reminder about June training: the session planned in Room 5 will now take place online, because the trainer will be abroad that week.', 'Look at the calendar. Which session will now be online?', ['Leadership', 'Negotiation', 'Data protection', 'Excel advanced'], x(
      'Salle 5 = Leadership (17 juin).',
      'القاعة 5 = Leadership (17 جوان).',
      'Room 5 = Leadership.',
      'Sala 5 = Leadership (17 de junio).',
    )), TRAINING),
    withGraphic(listen('c1-gr-s2-l8', 'L3', 5, 'W: I’m on holiday for the first two weeks of June, and I’d prefer a classroom session.\nM: Then there’s only one option left for you.', 'Look at the calendar. Which session will the woman attend?', ['Leadership', 'Negotiation', 'Data protection', 'Excel advanced'], x(
      'Après le 14 juin et en salle → Leadership (17 juin, salle 5).',
      'بعد 14 جوان وفي قاعة ← Leadership (17 جوان، القاعة 5).',
      'After 14 June, in a room.',
      'Después del 14 de junio y en sala → Leadership (17 de junio, sala 5).',
    )), TRAINING),
    withGraphic(listen('c1-gr-s2-l9', 'L3', 5, 'W: Is Ahmed’s flight to Germany still on schedule?\nM: According to the board, yes. He should land before lunch.', 'Look at the board. What time does Ahmed’s flight leave?', ['10:05', '08:40', '09:15', '11:30'], x(
      'Allemagne = Francfort, TU 836 à 10 h 05.',
      'ألمانيا = فرانكفورت، TU 836 على الساعة 10:05.',
      'Germany = Frankfurt, 10:05.',
      'Alemania = Fráncfort, TU 836 a las 10:05.',
    )), FLIGHTS),
    withGraphic(listen('c1-gr-s2-l10', 'L4', 5, 'After reviewing last year’s deliveries, we’ve decided to stop ordering from the supplier with the lowest rating. Its prices were attractive, but the delays cost us more than we saved.', 'Look at the comparison. Which supplier will the company stop using?', ['Alfa Pack', 'BetaBox', 'Carta Plus', 'Delta Wrap'], x(
      'Note la plus basse (2/5) et prix bas → Alfa Pack.',
      'أدنى تقييم (2/5) وسعر منخفض ← Alfa Pack.',
      'Lowest rating: Alfa Pack.',
      'La nota más baja (2/5) y precio bajo → Alfa Pack.',
    )), SUPPLIERS),
    match('c1-graphics-w2', ['epidemic', 'diagnosis', 'preventive', 'absenteeism', 'clinical-trial'], x(
      'Mots C1 sur la santé au travail : relis l’exemple de chaque mot dans l’onglet Mots.',
      'مفردات C1 حول الصحة في العمل: راجع مثال كل كلمة في قسم الكلمات.',
      'C1 words about health at work: review each example in the Words tab.',
      'Palabras C1 sobre la salud laboral: repasa el ejemplo de cada una en la pestaña Palabras.',
    )),
  ],
  [
    withGraphic(listen('c1-gr-s3-l1', 'L4', 5, 'Congratulations to all our regional teams. As a reward, the region that came second this quarter will receive two additional sales staff from next month.', 'Look at the chart. Which region will receive extra staff?', ['North', 'Sahel', 'Center', 'South'], x(
      'Deuxième place : North (4,2), derrière le Sahel (5,6).',
      'المرتبة الثانية: North (4.2) بعد الساحل (5.6).',
      'Second place: North.',
      'Segundo puesto: North (4,2), detrás del Sahel (5,6).',
    )), SALES),
    withGraphic(listen('c1-gr-s3-l2', 'L3', 5, 'M: Did any region miss the two-million target?\nW: Just one — the one at the bottom of the list. We’ll need to discuss it on Monday.', 'Look at the chart. How much did the region that missed its target sell?', ['1.8 million dinars', '3.1 million dinars', '4.2 million dinars', '5.6 million dinars'], x(
      'Seule région sous 2 millions : South, 1,8.',
      'المنطقة الوحيدة دون مليونين: South، 1.8.',
      'Only South is under two million.',
      'Única región por debajo de 2 millones: South, 1,8.',
    )), SALES),
    withGraphic(listen('c1-gr-s3-l3', 'L3', 5, 'W: We just need someone we can phone when the system goes down.\nM: Right. Nobody needs to come to the office, and we’re far too small for a dedicated manager.', 'Look at the list. Which plan will they choose?', ['Standard', 'Basic', 'Premium', 'Enterprise'], x(
      'Assistance téléphonique sans visite → Standard.',
      'دعم هاتفي دون زيارة ← Standard.',
      'Phone support only: Standard.',
      'Asistencia telefónica sin visitas → Standard.',
    )), PLANS),
    withGraphic(listen('c1-gr-s3-l4', 'L3', 5, 'M: Our clinic sometimes needs a technician on site.\nW: Then we’ll need more than phone support, but we certainly can’t afford a dedicated manager.', 'Look at the list. How much will they pay per month?', ['39 dinars', '9 dinars', '19 dinars', 'A price on request'], x(
      'Visites sur site sans gestionnaire dédié → Premium, 39 dinars.',
      'زيارات ميدانية دون مدير مخصص ← Premium، 39 دينارًا.',
      'On-site visits: Premium, 39.',
      'Visitas in situ sin gestor dedicado → Premium, 39 dinares.',
    )), PLANS),
    withGraphic(listen('c1-gr-s3-l5', 'L4', 5, 'We’re pleased to announce that, starting in May, customers on our cheapest plan will also receive phone support at no extra cost.', 'Look at the list. Which plan is being improved?', ['Basic', 'Standard', 'Premium', 'Enterprise'], x(
      'Le moins cher = Basic (9 dinars), qui n’avait que l’e-mail.',
      'الأرخص = Basic (9 دنانير) وكان بالبريد الإلكتروني فقط.',
      'The cheapest plan: Basic.',
      'El más barato = Basic (9 dinares), que solo tenía correo.',
    )), PLANS),
    withGraphic(listen('c1-gr-s3-l6', 'L3', 5, 'W: My interview will last about three hours. Where should I park?\nM: Choose the level with the four-hour limit. It’s cheaper than the first one.', 'Look at the sign. How much will the woman pay per hour?', ['1.5 dinars', '2 dinars', '1 dinar', 'Nothing'], x(
      'Limite de 4 heures → P2, 1,5 dinar de l’heure.',
      'حد 4 ساعات ← P2، 1.5 دينار للساعة.',
      'Four-hour limit: P2.',
      'Límite de 4 horas → P2, 1,5 dinares por hora.',
    )), PARKING),
    withGraphic(listen('c1-gr-s3-l7', 'L4', 5, 'Welcome to the Lac Business Center. Visitors who plan to stay all day should use the cheapest public level, as the others have time limits.', 'Look at the sign. Which level should all-day visitors use?', ['Level P3', 'Level P1', 'Level P2', 'Level P4'], x(
      'Le moins cher et sans limite, ouvert au public → P3 (P4 = personnel).',
      'الأرخص وبدون حد ومفتوح للعموم ← P3 (أما P4 فللموظفين).',
      'P3: cheapest, no limit.',
      'El más barato, sin límite y abierto al público → P3 (P4 = personal).',
    )), PARKING),
    withGraphic(listen('c1-gr-s3-l8', 'L3', 5, 'M: Could you swap shifts with me on Tuesday?\nW: Sorry, I’m already working that day with Omar.', 'Look at the schedule. Who is the woman?', ['Leila', 'Nadia', 'Sami', 'Karim'], x(
      'Mardi : Omar et Leila → la femme est Leila.',
      'الثلاثاء: عمر وليلى ← المرأة هي ليلى.',
      'Tuesday with Omar: Leila.',
      'Martes: Omar y Leila → la mujer es Leila.',
    )), SHIFTS),
    withGraphic(listen('c1-gr-s3-l9', 'L3', 5, 'W: Karim is off sick all week.\nM: Then Sami will cover his shift. He isn’t working the day before, so he’ll be well rested.', 'Look at the schedule. On which day will Sami replace Karim?', ['Wednesday', 'Monday', 'Tuesday', 'Thursday'], x(
      'Karim travaille le mercredi ; Sami est libre le mardi.',
      'كريم يعمل يوم الأربعاء، وسامي غير مشغول يوم الثلاثاء.',
      'Karim works Wednesday.',
      'Karim trabaja el miércoles; Sami libra el martes.',
    )), SHIFTS),
    withGraphic(listen('c1-gr-s3-l10', 'L4', 5, 'Because of the annual stock count, the Thursday team will start two hours earlier than usual this week. Coffee and breakfast will be provided.', 'Look at the schedule. Who will start early?', ['Sami and Omar', 'Sami and Nadia', 'Omar and Leila', 'Nadia and Karim'], x(
      'Jeudi : Sami et Omar.',
      'الخميس: سامي وعمر.',
      'Thursday: Sami and Omar.',
      'Jueves: Sami y Omar.',
    )), SHIFTS),
    match('c1-graphics-w3', ['circular-economy', 'decarbonize', 'energy-audit', 'biodiversity', 'emissions-trading'], x(
      'Mots C1 sur l’environnement : relis l’exemple de chaque mot dans l’onglet Mots.',
      'مفردات C1 حول البيئة: راجع مثال كل كلمة في قسم الكلمات.',
      'C1 words about the environment: review each example in the Words tab.',
      'Palabras C1 sobre el medio ambiente: repasa el ejemplo de cada una en la pestaña Palabras.',
    )),
  ],
);
