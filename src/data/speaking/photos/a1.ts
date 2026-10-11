import type { PhotoTask } from '../../../types';
import { x } from '../../curriculum/build';

export const photosA1: PhotoTask[] = [
  {
    id: 'ph-a1-1',
    level: 1,
    topic: x('Un bureau en bois', 'مكتب خشبي', 'A wooden desk', 'Un escritorio de madera'),
    photo: 'p20.jpg',
    alt: x(
      'Vue de dessus d’un bureau en bois : un ordinateur portable ouvert, des écouteurs blancs, un carnet ouvert avec un stylo et un vieil appareil photo.',
      'منظر علوي لمكتب خشبي: حاسوب محمول مفتوح وسماعات بيضاء ودفتر مفتوح مع قلم وآلة تصوير قديمة.',
      'Top view of a wooden desk: an open laptop, white earphones, an open notebook with a pen and an old camera.',
      'Vista desde arriba de un escritorio de madera: un portátil abierto, auriculares blancos, una libreta abierta con un bolígrafo y una cámara antigua.',
    ),
    model:
      'In this picture, I can see a wooden desk. There is a laptop on the left. Next to the laptop, there are white earphones. On the right, there is an open notebook with a black pen on it. There is also an old camera at the top of the picture.',
    keywords: ['laptop|computer', 'notebook', 'pen', 'camera'],
    tip: x(
      'Sans personnes sur la photo, utilise « There is… / There are… » et situe chaque objet : « on the left », « next to », « on the right ».',
      'إذا لم يكن في الصورة أشخاص، استعمل «There is… / There are…» وحدّد مكان كل شيء: «on the left» و«next to» و«on the right».',
      'With no people in the photo, use “There is… / There are…” and place each object: “on the left”, “next to”, “on the right”.',
      'Si no hay personas en la foto, usa «There is… / There are…» y sitúa cada objeto: «on the left», «next to», «on the right».',
    ),
  },
  {
    id: 'ph-a1-2',
    level: 1,
    topic: x('Un joggeur dans le parc', 'عدّاء في الحديقة', 'A jogger in the park', 'Un corredor en el parque'),
    photo: 'p22.jpg',
    alt: x(
      'Un homme en tee-shirt bleu court sur un chemin, entre deux rangées de grands arbres, dans un parc ensoleillé.',
      'رجل بقميص أزرق يركض في ممر بين صفّين من الأشجار الكبيرة في حديقة مشمسة.',
      'A man in a blue T-shirt is running on a path between two rows of big trees, in a sunny park.',
      'Un hombre con camiseta azul corre por un camino entre dos filas de árboles grandes, en un parque soleado.',
    ),
    model:
      'This picture shows a park. A man is running on a path. He is wearing a blue T-shirt and gray shorts. There are many big trees on both sides of the path, and the grass is very green. In the background, I can see some cars. It is a sunny day.',
    keywords: ['man', 'running|jogging', 'path', 'trees'],
    tip: x(
      'Pour une action, utilise le présent continu : « A man is running », « He is wearing… ».',
      'لوصف فعل جارٍ استعمل المضارع المستمر: «A man is running» و«He is wearing…».',
      'For an action, use the present continuous: “A man is running”, “He is wearing…”.',
      'Para una acción, usa el presente continuo: «A man is running», «He is wearing…».',
    ),
  },
  {
    id: 'ph-a1-3',
    level: 1,
    topic: x('Sur un banc', 'على مقعد', 'On a bench', 'En un banco'),
    photo: 'p03.jpg',
    alt: x(
      'Un homme âgé aux cheveux blancs est assis seul sur un banc de pierre, sur une place ; derrière lui, des passants et des taxis jaunes.',
      'رجل مسنّ أبيض الشعر يجلس وحده على مقعد حجري في ساحة، وخلفه مارّة وسيارات أجرة صفراء.',
      'An old man with white hair is sitting alone on a stone bench in a square; behind him, people walking and yellow taxis.',
      'Un hombre mayor de pelo blanco está sentado solo en un banco de piedra en una plaza; detrás, gente caminando y taxis amarillos.',
    ),
    model:
      'In this picture, an old man is sitting alone on a stone bench in a square. He has white hair, and he is wearing a gray jacket. In the background, a man in a white shirt is walking, and there are some yellow taxis. There are also plants behind him.',
    keywords: ['old man|man', 'sitting', 'bench', 'walking|taxis'],
    tip: x(
      'Commence par la personne la plus importante, puis passe à l’arrière-plan avec « In the background, … ».',
      'ابدأ بالشخص الأهم ثم انتقل إلى الخلفية بـ «In the background, …».',
      'Start with the most important person, then move to the background with “In the background, …”.',
      'Empieza por la persona más importante y pasa al fondo con «In the background, …».',
    ),
  },
  {
    id: 'ph-a1-4',
    level: 1,
    topic: x('Un ouvrier sur un chantier', 'عامل في ورشة بناء', 'A worker on a building site', 'Un obrero en una obra'),
    photo: 'p04.jpg',
    alt: x(
      'Un ouvrier aux cheveux blancs, avec un casque noir et un gilet orange, descend un escalier entouré d’échafaudages métalliques.',
      'عامل أبيض الشعر بخوذة سوداء وسترة برتقالية ينزل درجًا تحيط به سقالات معدنية.',
      'A worker with white hair, a black helmet and an orange vest is going down stairs surrounded by metal scaffolding.',
      'Un obrero de pelo blanco, con casco negro y chaleco naranja, baja una escalera rodeada de andamios metálicos.',
    ),
    model:
      'This picture shows a building site. A man is standing on a metal staircase, and he is looking down. He is wearing a black helmet and an orange safety vest. He has white hair and glasses. Around him, there are a lot of metal bars.',
    keywords: ['helmet', 'vest', 'metal|scaffolding', 'standing|looking'],
    tip: x(
      'Décris les vêtements avec « He is wearing… » : c’est facile et ça prend du temps de parole utile.',
      'صف الملابس بـ «He is wearing…»: إنه سهل ويمنحك وقت كلام مفيدًا.',
      'Describe clothes with “He is wearing…”: it is easy and fills useful speaking time.',
      'Describe la ropa con «He is wearing…»: es fácil y ocupa tiempo de habla útil.',
    ),
  },
];
