import type { PhotoTask } from '../../../types';
import { x } from '../../curriculum/build';

export const photosB1: PhotoTask[] = [
  {
    id: 'ph-b1-1',
    level: 3,
    topic: x('Un groupe dans un square', 'مجموعة في حديقة عامة', 'A group in a square', 'Un grupo en una plaza'),
    photo: 'p02.jpg',
    alt: x(
      'Dans un petit parc de ville, des personnes assises sur des bancs écoutent un homme en polo rouge qui parle debout, sac à dos sur l’épaule ; au premier plan, des fleurs rouges.',
      'في حديقة صغيرة بالمدينة، أشخاص جالسون على مقاعد يستمعون إلى رجل بقميص أحمر يتكلم واقفًا وحقيبة ظهر على كتفه، وفي المقدمة أزهار حمراء.',
      'In a small city park, people sitting on benches are listening to a man in a red shirt who is standing and talking, with a backpack; red flowers in the foreground.',
      'En un pequeño parque urbano, personas sentadas en bancos escuchan a un hombre con polo rojo que habla de pie, con mochila; flores rojas en primer plano.',
    ),
    model:
      'In this picture, a group of people are in a small park in a city. Most of them are sitting on wooden benches and listening to a man in a red shirt, who is standing in the middle and talking. He is carrying a backpack. On the right, two men are walking past, and there are red flowers in the foreground. In the background, I can see a large stone building.',
    keywords: ['benches|bench', 'sitting', 'standing|talking', 'building|flowers'],
    tip: x(
      'Pour un groupe, décris d’abord la scène générale (« a group of people… »), puis la personne qui se distingue.',
      'مع مجموعة، صف المشهد العام أولًا («a group of people…») ثم الشخص البارز.',
      'For a group, describe the general scene first (“a group of people…”), then the person who stands out.',
      'Con un grupo, describe primero la escena general («a group of people…») y luego a la persona que destaca.',
    ),
  },
  {
    id: 'ph-b1-2',
    level: 3,
    topic: x('Une partie d’échecs', 'مباراة شطرنج', 'A game of chess', 'Una partida de ajedrez'),
    photo: 'p07.jpg',
    alt: x(
      'Quatre jeunes hommes dans une salle de réunion : deux jouent aux échecs sur une petite table, les deux autres regardent en souriant ; des cadres sont accrochés au mur.',
      'أربعة شبان في قاعة اجتماعات: اثنان يلعبان الشطرنج على طاولة صغيرة والآخران يشاهدان مبتسمين، وعلى الجدار إطارات صور.',
      'Four young men in a meeting room: two are playing chess on a small table, the other two are watching and smiling; framed pictures hang on the wall.',
      'Cuatro jóvenes en una sala de reuniones: dos juegan al ajedrez en una mesita y los otros dos miran sonriendo; hay cuadros en la pared.',
    ),
    model:
      'This photo shows four young men in an office or a meeting room. Two of them are playing chess on a small table in the middle. The man on the left is wearing glasses and looking carefully at the board, while the man on the right is holding a glass. The other two are watching and smiling. There are framed pictures on the wall.',
    keywords: ['chess', 'playing', 'watching|smiling', 'wall|pictures'],
    tip: x(
      '« while » permet de décrire deux personnes dans la même phrase : « The man on the left is…, while the man on the right is… ».',
      '«while» تسمح بوصف شخصين في جملة واحدة: «The man on the left is…, while the man on the right is…».',
      '“while” lets you describe two people in one sentence: “The man on the left is…, while the man on the right is…”.',
      '«while» permite describir a dos personas en una sola frase: «The man on the left is…, while the man on the right is…».',
    ),
  },
  {
    id: 'ph-b1-3',
    level: 3,
    topic: x('En cuisine', 'في المطبخ', 'In the kitchen', 'En la cocina'),
    photo: 'p19.jpg',
    alt: x(
      'Dans une grande cuisine professionnelle, un cuisinier en toque de papier verse de la sauce tomate avec une louche dans un bac métallique ; de la vapeur sort de la marmite.',
      'في مطبخ مهني كبير، طباخ بقبعة ورقية يصب صلصة الطماطم بمغرفة في وعاء معدني، والبخار يتصاعد من القدر.',
      'In a large professional kitchen, a cook in a paper hat is pouring tomato sauce with a ladle into a metal tray; steam is coming from the pot.',
      'En una gran cocina profesional, un cocinero con gorro de papel vierte salsa de tomate con un cucharón en una bandeja metálica; sale vapor de la olla.',
    ),
    model:
      'This picture was taken in a large kitchen. A cook wearing a white paper hat and a black T-shirt is serving tomato sauce with a big ladle. He is pouring it into a metal tray. There is a lot of steam coming from the pot in front of him. In the background, there are more kitchen machines, and on the right, there is a yellow bucket.',
    keywords: ['cook|chef', 'sauce|tomato', 'ladle|tray|pot', 'steam|kitchen'],
    tip: x(
      'Nomme précisément les objets de travail (« ladle », « tray », « pot ») : le vocabulaire précis fait la différence.',
      'سمِّ أدوات العمل بدقة («ladle» و«tray» و«pot»): المفردات الدقيقة تصنع الفرق.',
      'Name the work tools precisely (“ladle”, “tray”, “pot”): precise vocabulary makes the difference.',
      'Nombra con precisión las herramientas («ladle», «tray», «pot»): el vocabulario preciso marca la diferencia.',
    ),
  },
  {
    id: 'ph-b1-4',
    level: 3,
    topic: x('À vélo dans le parc', 'على الدراجة في الحديقة', 'Cycling in the park', 'En bici por el parque'),
    photo: 'p23.jpg',
    alt: x(
      'Deux cyclistes casqués, vus de dos, roulent sur un chemin courbe dans un parc boisé ; l’un porte un sac à dos violet, le soleil passe entre les pins.',
      'دراجان بخوذتين، من الخلف، يسيران في ممر منحنٍ داخل حديقة كثيفة الأشجار، أحدهما يحمل حقيبة ظهر بنفسجية، والشمس تتسلل بين أشجار الصنوبر.',
      'Two cyclists with helmets, seen from behind, are riding on a curved path in a wooded park; one has a purple backpack, and the sun shines through the pine trees.',
      'Dos ciclistas con casco, de espaldas, circulan por un camino curvo en un parque arbolado; uno lleva una mochila morada y el sol pasa entre los pinos.',
    ),
    model:
      'In this picture, two people are riding bicycles on a path in a park. They are both wearing helmets, and one of them is carrying a purple backpack. They are going away from the camera. The path is curved, and there is green grass on both sides. In the background, there are tall pine trees, and the sun is shining through them.',
    keywords: ['bicycles|bikes|riding', 'helmets', 'path', 'trees|grass'],
    tip: x(
      'Termine par l’ambiance ou la lumière (« the sun is shining… ») pour utiliser tes 30 secondes jusqu’au bout.',
      'اختم بالأجواء أو الضوء («the sun is shining…») لتستغل ثوانيك الثلاثين حتى النهاية.',
      'End with the atmosphere or the light (“the sun is shining…”) to use your 30 seconds to the end.',
      'Termina con el ambiente o la luz («the sun is shining…») para aprovechar tus 30 segundos hasta el final.',
    ),
  },
];
