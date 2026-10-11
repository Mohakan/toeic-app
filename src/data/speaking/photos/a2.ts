import type { PhotoTask } from '../../../types';
import { x } from '../../curriculum/build';

export const photosA2: PhotoTask[] = [
  {
    id: 'ph-a2-1',
    level: 2,
    topic: x('Une salle de lecture', 'قاعة مطالعة', 'A reading room', 'Una sala de lectura'),
    photo: 'p14.jpg',
    alt: x(
      'Une grande bibliothèque avec des étagères pleines de livres, de longues tables et des chaises rouges presque toutes vides ; au fond, quelques étudiants travaillent.',
      'مكتبة كبيرة فيها رفوف مليئة بالكتب وطاولات طويلة وكراسٍ حمراء شبه فارغة، وفي العمق بعض الطلبة يعملون.',
      'A large library with shelves full of books, long tables and red chairs that are almost all empty; at the back, a few students are working.',
      'Una gran biblioteca con estanterías llenas de libros, mesas largas y sillas rojas casi vacías; al fondo, algunos estudiantes trabajan.',
    ),
    model:
      'This is a library. On the left, there are tall bookshelves full of books. In the middle of the room, there are long wooden tables and many red chairs. Most of the chairs are empty. In the background, on the right, a few students are sitting at a table and working on their laptops.',
    keywords: ['library', 'bookshelves|books', 'tables|chairs', 'students|working'],
    tip: x(
      'Va du plus proche au plus loin : « On the left… In the middle… In the background… ».',
      'انتقل من الأقرب إلى الأبعد: «On the left… In the middle… In the background…».',
      'Move from near to far: “On the left… In the middle… In the background…”.',
      'Ve de lo más cercano a lo más lejano: «On the left… In the middle… In the background…».',
    ),
  },
  {
    id: 'ph-a2-2',
    level: 2,
    topic: x('Travailler dehors', 'العمل في الهواء الطلق', 'Working outside', 'Trabajar al aire libre'),
    photo: 'p25.jpg',
    alt: x(
      'Un homme, vu de dos, tape sur un ordinateur portable posé sur une table en bois, dehors ; à côté, un téléphone, un carnet, un stylo et une tasse de café.',
      'رجل من الخلف يكتب على حاسوب محمول فوق طاولة خشبية في الخارج، وبجانبه هاتف ودفتر وقلم وفنجان قهوة.',
      'A man, seen from behind, is typing on a laptop on a wooden table outside; next to it, a phone, a notebook, a pen and a cup of coffee.',
      'Un hombre, de espaldas, escribe en un portátil sobre una mesa de madera, al aire libre; al lado, un teléfono, una libreta, un bolígrafo y una taza de café.',
    ),
    model:
      'In this picture, a man is working on a laptop. He is sitting at a wooden table outside. He is typing with both hands, and he is wearing a watch. On the table, there is a smartphone on the left, a black notebook with a pen, and a cup of coffee behind the laptop.',
    keywords: ['laptop', 'typing', 'table', 'coffee|phone|notebook'],
    tip: x(
      'Après la personne et son action, énumère les objets autour d’elle avec leur position.',
      'بعد الشخص وفعله، عدّد الأشياء المحيطة به مع مواقعها.',
      'After the person and the action, list the objects around them with their position.',
      'Después de la persona y su acción, enumera los objetos de alrededor con su posición.',
    ),
  },
  {
    id: 'ph-a2-3',
    level: 2,
    topic: x('Dans le métro', 'في المترو', 'In the subway', 'En el metro'),
    photo: 'p13.jpg',
    alt: x(
      'Un quai de métro souterrain : une rame argentée attend derrière des portes palières ; des voyageurs attendent ou marchent, un panneau jaune est fixé à un pilier.',
      'رصيف مترو تحت الأرض: قطار فضي ينتظر خلف أبواب الرصيف، ومسافرون ينتظرون أو يمشون، ولافتة صفراء مثبتة على عمود.',
      'An underground subway platform: a silver train is waiting behind platform doors; passengers are waiting or walking, and a yellow sign is fixed to a pillar.',
      'Un andén de metro subterráneo: un tren plateado espera tras las puertas del andén; hay viajeros esperando o caminando y un cartel amarillo en un pilar.',
    ),
    model:
      'This picture was taken in an underground station. A train is waiting at the platform. On the left, a man in a patterned shirt is standing near the doors. In the middle, a man in a white T-shirt is holding a jacket. On the right, there is a yellow sign on a column, and some women are walking.',
    keywords: ['train', 'platform|station', 'standing|waiting', 'sign'],
    tip: x(
      '« This picture was taken in… » est une première phrase idéale pour situer le lieu.',
      '«This picture was taken in…» جملة أولى مثالية لتحديد المكان.',
      '“This picture was taken in…” is an ideal first sentence to set the scene.',
      '«This picture was taken in…» es una primera frase ideal para situar el lugar.',
    ),
  },
  {
    id: 'ph-a2-4',
    level: 2,
    topic: x('Un étal de légumes', 'طاولة خضر', 'A vegetable stall', 'Un puesto de verduras'),
    photo: 'p06.jpg',
    alt: x(
      'Un marché en plein air sous la pluie : un homme en veste sombre et casquette range des légumes (carottes, tomates, poivrons, haricots, brocolis) sur un étal ; derrière, des camionnettes blanches.',
      'سوق في الهواء الطلق تحت المطر: رجل بسترة داكنة وقبعة يرتب الخضر (جزر وطماطم وفلفل ولوبيا وبروكلي) على طاولة، وخلفه شاحنات صغيرة بيضاء.',
      'An outdoor market in the rain: a man in a dark jacket and a cap is arranging vegetables (carrots, tomatoes, peppers, beans, broccoli) on a stall; behind him, white vans.',
      'Un mercado al aire libre bajo la lluvia: un hombre con chaqueta oscura y gorra coloca verduras (zanahorias, tomates, pimientos, judías, brócoli) en un puesto; detrás, furgonetas blancas.',
    ),
    model:
      'This is an outdoor market. A man in a dark jacket and a cap is arranging vegetables at a stall. On the table, there are boxes of carrots, tomatoes, peppers, green beans and broccoli. I think it is raining, because the ground is wet. In the background, there are some white vans.',
    keywords: ['market|stall', 'vegetables|tomatoes|carrots', 'man', 'vans|wet|raining'],
    tip: x(
      'Tu peux faire une déduction simple : « I think it is raining, because the ground is wet ».',
      'يمكنك أن تستنتج استنتاجًا بسيطًا: «I think it is raining, because the ground is wet».',
      'You can make a simple guess: “I think it is raining, because the ground is wet”.',
      'Puedes hacer una deducción sencilla: «I think it is raining, because the ground is wet».',
    ),
  },
  {
    id: 'ph-a2-5',
    level: 2,
    topic: x('Au volant d’une camionnette', 'خلف مقود شاحنة صغيرة', 'Driving a delivery van', 'Al volante de una furgoneta'),
    photo: 'p31.jpg',
    alt: x(
      'Un chauffeur-livreur en uniforme marron et masque noir conduit sa camionnette, les mains sur le volant ; par les vitres, on voit des champs verts et des arbres ; une bouteille d’eau est posée près du siège.',
      'سائق توصيل بزيّ بني وكمامة سوداء يقود شاحنته الصغيرة ويداه على المقود، ومن النوافذ تظهر حقول خضراء وأشجار، وبجانب المقعد قارورة ماء.',
      'A delivery driver in a brown uniform and a black mask is driving his van, hands on the wheel; green fields and trees are visible through the windows; a bottle of water is next to the seat.',
      'Un repartidor con uniforme marrón y mascarilla negra conduce su furgoneta, con las manos en el volante; por las ventanillas se ven campos verdes y árboles; hay una botella de agua junto al asiento.',
    ),
    model:
      'In this picture, a man is driving a delivery van. He is sitting in the driver’s seat and holding the steering wheel with one hand. He is wearing a brown uniform and a black face mask. Through the windows, I can see green fields and some trees. There is a bottle of water next to his seat.',
    keywords: ['driving|driver', 'van|truck', 'steering wheel|wheel', 'fields|trees|windows'],
    tip: x(
      'Décris aussi ce qu’on voit « à travers » quelque chose : « Through the windows, I can see… ».',
      'صف أيضًا ما يظهر «من خلال» شيء ما: «Through the windows, I can see…».',
      'Also describe what you see “through” something: “Through the windows, I can see…”.',
      'Describe también lo que se ve «a través» de algo: «Through the windows, I can see…».',
    ),
  },
];
