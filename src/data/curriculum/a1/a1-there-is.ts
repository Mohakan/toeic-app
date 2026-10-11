import type { Unit } from '../../../types';
import { g, lesson, listen, order, read, respond, unit, v, x } from '../build';

export const a1ThereIs: Unit = unit(
  {
    id: 'a1-there-is',
    emoji: '📍',
    level: 1,
    part: 'R5 · R7 · L2',
    title: x('There is / there are et les lieux', 'There is / there are والأماكن', 'There is / there are and places', 'There is / there are y los lugares'),
    subtitle: x('Dire ce qu’il y a et où', 'قول ما يوجد وأين', 'Say what there is and where', 'Decir qué hay y dónde'),
    lesson: lesson(
      x('Décrire un bureau, un bâtiment ou un quartier.', 'وصف مكتب أو مبنى أو حي.', 'Describe an office, a building or an area.', 'Describir una oficina, un edificio o un barrio.'),
      [
        x('There is + singulier ou indénombrable (there is a printer, there is no milk) ; there are + pluriel (there are two rooms).', 'There is + مفرد أو غير معدود (there is a printer, there is no milk)، وthere are + جمع (there are two rooms).', 'There is + singular or uncountable; there are + plural.', 'There is + singular o incontable (there is a printer, there is no milk); there are + plural (there are two rooms).'),
        x('Question : Is there…? / Are there…? — How many … are there?', 'السؤال: Is there…? / Are there…? — How many … are there?', 'Questions: Is there…? / Are there…? / How many … are there?', 'Pregunta: Is there…? / Are there…? — How many … are there?'),
        x('Lieux : in, on, under, next to, between … and …, behind, in front of, near.', 'الأماكن: in وon وunder وnext to وbetween … and … وbehind وin front of وnear.', 'Places: in, on, under, next to, between, behind, in front of, near.', 'Lugares: in, on, under, next to, between … and …, behind, in front of, near.'),
      ],
      'There are two printers next to the kitchen.',
      x('Pluriel (two printers) → « there are » ; « next to » = à côté de.', 'جمع (two printers) ← «there are»، و«next to» = بجانب.', 'Plural → “there are”; “next to” = beside.', 'Plural (two printers) → «there are»; «next to» = al lado de.'),
    ),
  },
  [
    g('a1-th-s1-q1', 1, 'There ___ a parking lot behind the building.', ['is', 'are', 'be', 'have'], x(
      '« A parking lot » est singulier → « There is ».',
      '«A parking lot» مفرد ← «There is».',
      'Singular → “There is”.',
      '«A parking lot» es singular → «There is».',
    )),
    g('a1-th-s1-q2', 1, 'There ___ ten people in the meeting room.', ['are', 'is', 'be', 'has'], x(
      '« Ten people » est pluriel → « There are ».',
      '«Ten people» جمع ← «There are».',
      'Plural → “There are”.',
      '«Ten people» es plural → «There are».',
    )),
    g('a1-th-s1-q3', 1, '___ there a bank near the hotel?', ['Is', 'Are', 'Do', 'Does'], x(
      'Question au singulier (a bank) : « Is there… ? ».',
      'سؤال مع مفرد (a bank): «Is there…?».',
      'Singular question: “Is there…?”.',
      'Pregunta en singular (a bank): «Is there…?».',
    )),
    g('a1-th-s1-q4', 1, 'The keys are ___ the table.', ['on', 'in', 'at', 'to'], x(
      'Sur une surface → « on the table ».',
      'على سطح ← «on the table».',
      'On a surface → “on”.',
      'Sobre una superficie → «on the table».',
    )),
    g('a1-th-s1-q5', 1, 'The café is ___ the bank and the post office.', ['between', 'next', 'under', 'behind'], x(
      '« Between … and … » = entre deux choses. « Next » seul est incomplet (next to).',
      '«Between … and …» = بين شيئين. و«next» وحدها ناقصة (next to).',
      '“Between … and …”. “Next” alone needs “to”.',
      '«Between … and …» = entre dos cosas. «Next» solo está incompleto (next to).',
    )),
    g('a1-th-s1-q6', 1, 'Your bag is ___ the chair, on the floor.', ['under', 'on', 'between', 'in'], x(
      '« On the floor » indique que le sac est sous la chaise : « under ».',
      '«On the floor» تعني أن الحقيبة تحت الكرسي: «under».',
      '“On the floor” → it is “under” the chair.',
      '«On the floor» indica que la bolsa está debajo de la silla: «under».',
    )),
    read('a1-th-s1-r1', 'R7', 1, 'Floor directory — 1st floor: Reception · 2nd floor: Sales · 3rd floor: Human Resources · 4th floor: Cafeteria', 'Where is the cafeteria?', ['On the 4th floor', 'On the 1st floor', 'On the 2nd floor', 'On the 3rd floor'], x(
      '« 4th floor: Cafeteria ».',
      '«4th floor: Cafeteria» أي في الطابق الرابع.',
      '“4th floor: Cafeteria”.',
      '«4th floor: Cafeteria»: en la cuarta planta.',
    )),
    respond('a1-th-s1-l1', 1, 'Is there a pharmacy near here?', ['Yes, across the street.', 'At ten o’clock.', 'No, I don’t like it.'], x(
      'On répond par un lieu : « across the street » (en face).',
      'نجيب بمكان: «across the street» (في الجهة المقابلة).',
      'Answer with a place.',
      'Se responde con un lugar: «across the street» (enfrente).',
    )),
    order('a1-th-s1-o1', 'There is a printer on each floor', x('Commence par « There is ».', 'ابدأ بـ «There is».', 'Start with “There is”.', 'Empieza por «There is».'), x(
      'There is + nom singulier + lieu.',
      'There is + اسم مفرد + مكان.',
      'There is + singular noun + place.',
      'There is + sustantivo singular + lugar.',
    )),
    listen('a1-th-s1-l2', 'L4', 1, 'Welcome to the Grand Hotel. There is a restaurant on the ground floor and a gym on the fifth floor.', 'Where is the gym?', ['On the fifth floor', 'On the ground floor', 'Next to the restaurant', 'In the garden'], x(
      '« A gym on the fifth floor ». Le restaurant est au rez-de-chaussée.',
      '«A gym on the fifth floor». أما المطعم ففي الطابق الأرضي.',
      '“A gym on the fifth floor”.',
      '«A gym on the fifth floor». El restaurante está en la planta baja.',
    )),
  ],
  [
    g('a1-th-s2-q1', 1, 'There ___ three new employees in our team.', ['are', 'is', 'has', 'be'], x(
      'Pluriel → « There are ».',
      'جمع ← «There are».',
      'Plural → “There are”.',
      'Plural → «There are».',
    )),
    g('a1-th-s2-q2', 1, 'There ___ no milk in the fridge.', ['is', 'are', 'be', 'have'], x(
      '« Milk » est indénombrable → « There is ».',
      '«Milk» غير معدود ← «There is».',
      '“Milk” is uncountable → “There is”.',
      '«Milk» es incontable → «There is».',
    )),
    g('a1-th-s2-q3', 1, 'How many rooms ___ there in the hotel?', ['are', 'is', 'do', 'have'], x(
      '« How many » + pluriel → « are there ».',
      '«How many» + جمع ← «are there».',
      '“How many” + plural → “are there”.',
      '«How many» + plural → «are there».',
    )),
    g('a1-th-s2-q4', 1, 'The printer is ___ to the window.', ['next', 'near', 'between', 'under'], x(
      'Seul « next » se construit avec « to » : « next to ».',
      'وحدها «next» تأتي مع «to»: «next to».',
      'Only “next” goes with “to”.',
      'Solo «next» se construye con «to»: «next to».',
    )),
    g('a1-th-s2-q5', 1, 'The meeting is ___ Room 5.', ['in', 'on', 'at', 'to'], x(
      'Dans une salle → « in Room 5 ».',
      'داخل قاعة ← «in Room 5».',
      'Inside a room → “in”.',
      'Dentro de una sala → «in Room 5».',
    )),
    g('a1-th-s2-q6', 1, 'Please wait ___ front of the main entrance.', ['in', 'on', 'at', 'by'], x(
      'Expression fixe : « in front of » = devant.',
      'تعبير ثابت: «in front of» = أمام.',
      'Fixed phrase: “in front of”.',
      'Expresión fija: «in front of» = delante de.',
    )),
    read('a1-th-s2-r1', 'R7', 1, 'Found: a black phone. I put it on the shelf behind the coffee machine in the kitchen. — Lea', 'Where is the phone now?', ['Behind the coffee machine', 'In Lea’s bag', 'On the kitchen table', 'At reception'], x(
      '« On the shelf behind the coffee machine ».',
      '«On the shelf behind the coffee machine» أي خلف آلة القهوة.',
      '“Behind the coffee machine”.',
      '«On the shelf behind the coffee machine»: detrás de la cafetera.',
    )),
    respond('a1-th-s2-l1', 1, 'Are there any chairs in Room 2?', ['Yes, about twenty.', 'It’s Room 2.', 'No, I’m not.'], x(
      '« Are there any…? » → oui / non + quantité.',
      '«Are there any…?» ← نعم/لا + الكمية.',
      'Yes/no + quantity.',
      '«Are there any…?» → sí / no + cantidad.',
    )),
    order('a1-th-s2-o1', 'The bank is between the hotel and the station', x('Commence par « The bank ».', 'ابدأ بـ «The bank».', 'Start with “The bank”.', 'Empieza por «The bank».'), x(
      '« Between … and … » relie les deux repères.',
      '«Between … and …» تربط المعلمين.',
      '“Between … and …” links the two places.',
      '«Between … and …» une los dos puntos de referencia.',
    )),
    listen('a1-th-s2-l2', 'L3', 1, 'W: Excuse me, is there a bus stop near here?\nM: Yes, there’s one in front of the library.', 'Where is the bus stop?', ['In front of the library', 'Behind the library', 'Next to the bank', 'Inside the station'], x(
      '« In front of the library » = devant la bibliothèque.',
      '«In front of the library» = أمام المكتبة.',
      '“In front of the library”.',
      '«In front of the library» = delante de la biblioteca.',
    )),
  ],
  [
    g('a1-th-s3-q1', 1, 'There ___ a problem with my computer.', ['is', 'are', 'be', 'am'], x(
      '« A problem » est singulier → « There is ».',
      '«A problem» مفرد ← «There is».',
      'Singular → “There is”.',
      '«A problem» es singular → «There is».',
    )),
    g('a1-th-s3-q2', 1, 'There ___ many shops on this street.', ['are', 'is', 'has', 'be'], x(
      '« Many shops » est pluriel → « There are ».',
      '«Many shops» جمع ← «There are».',
      'Plural → “There are”.',
      '«Many shops» es plural → «There are».',
    )),
    g('a1-th-s3-q3', 1, '___ there any messages for me?', ['Are', 'Is', 'Do', 'Have'], x(
      '« Messages » est pluriel → « Are there… ? ».',
      '«Messages» جمع ← «Are there…?».',
      'Plural → “Are there…?”.',
      '«Messages» es plural → «Are there…?».',
    )),
    g('a1-th-s3-q4', 1, 'The files are ___ the top drawer.', ['in', 'on', 'at', 'under'], x(
      'À l’intérieur d’un tiroir → « in ».',
      'داخل الدرج ← «in».',
      'Inside a drawer → “in”.',
      'Dentro de un cajón → «in».',
    )),
    g('a1-th-s3-q5', 1, 'The station is ___ the hotel. You can walk there in two minutes.', ['near', 'far', 'under', 'in'], x(
      'Deux minutes à pied → c’est proche : « near ».',
      'دقيقتان مشيًا ← المكان قريب: «near».',
      'Two minutes on foot → “near”.',
      'Dos minutos andando → está cerca: «near».',
    )),
    v('a1-th-s3-q6', 1, 'There is a ___ in the meeting room, so we can show our slides.', ['projector', 'printer', 'fridge', 'sofa'], x(
      'Pour montrer des diapositives (slides), il faut un projecteur.',
      'لعرض الشرائح (slides) نحتاج جهاز عرض: «projector».',
      'Slides need a “projector”.',
      'Para mostrar diapositivas (slides) hace falta un proyector: «projector».',
    )),
    read('a1-th-s3-r1', 'R7', 1, 'Room 12: projector, 15 chairs, whiteboard. Room 14: 30 chairs, no projector.', 'Which room has a projector?', ['Room 12', 'Room 14', 'Both rooms', 'Neither room'], x(
      'Room 12 a un projecteur ; Room 14 : « no projector ».',
      'Room 12 فيها جهاز عرض، أما Room 14 ففيها «no projector».',
      'Room 14 has “no projector”.',
      'La Room 12 tiene proyector; la Room 14: «no projector».',
    )),
    respond('a1-th-s3-l1', 1, 'Where is the elevator?', ['Behind the reception desk.', 'It’s very fast.', 'On Monday.'], x(
      '« Where » → un lieu.',
      '«Where» ← مكان.',
      '“Where” → a place.',
      '«Where» → un lugar.',
    )),
    order('a1-th-s3-o1', 'There are two cafés near the office', x('Commence par « There are ».', 'ابدأ بـ «There are».', 'Start with “There are”.', 'Empieza por «There are».'), x(
      'There are + pluriel + lieu (near the office).',
      'There are + جمع + مكان (near the office).',
      'There are + plural + place.',
      'There are + plural + lugar (near the office).',
    )),
    listen('a1-th-s3-l2', 'L4', 1, 'Attention, please. There is a white car in front of the main entrance. Please move it to the parking lot.', 'What is the problem?', ['A car is parked at the entrance', 'The parking lot is full', 'The entrance is closed', 'A car is broken'], x(
      'Une voiture est devant l’entrée et doit être déplacée.',
      'سيارة متوقفة أمام المدخل ويجب نقلها.',
      'A car is in front of the entrance.',
      'Hay un coche delante de la entrada y hay que moverlo.',
    )),
  ],
);
