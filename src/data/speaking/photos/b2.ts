import type { PhotoTask } from '../../../types';
import { x } from '../../curriculum/build';

export const photosB2: PhotoTask[] = [
  {
    id: 'ph-b2-1',
    level: 4,
    topic: x('La file à l’arrêt de bus', 'الطابور في محطة الحافلات', 'Queuing for the bus', 'La cola del autobús'),
    photo: 'p10.jpg',
    alt: x(
      'Sur un trottoir d’une ville asiatique, de nombreuses personnes, la plupart masquées, attendent à un arrêt de bus ; un bus est garé au loin et des panneaux de rue dominent la scène.',
      'على رصيف في مدينة آسيوية، كثير من الناس، معظمهم بكمامات، ينتظرون في محطة حافلات، وحافلة متوقفة بعيدًا ولافتات شارع فوق المشهد.',
      'On a sidewalk in an Asian city, many people, most of them wearing masks, are waiting at a bus stop; a bus is parked in the distance and street signs stand above them.',
      'En una acera de una ciudad asiática, mucha gente, casi toda con mascarilla, espera en una parada de autobús; al fondo hay un autobús aparcado y señales de tráfico.',
    ),
    model:
      'This photo shows a busy sidewalk in an Asian city. A lot of people are waiting at a bus stop, probably in the morning. Most of them are wearing face masks. On the left, a man is carrying several bags, and a woman is holding a child’s hand. In the background, a bus is parked by the road, and there are several street signs above the people.',
    keywords: ['waiting', 'bus stop|bus', 'masks', 'sidewalk|signs'],
    tip: x(
      '« probably » permet une hypothèse prudente sur ce qu’on ne voit pas directement (le moment, la raison).',
      '«probably» تسمح بافتراض حذر حول ما لا نراه مباشرة (الوقت أو السبب).',
      '“probably” allows a careful guess about what you cannot see directly (the time, the reason).',
      '«probably» permite una hipótesis prudente sobre lo que no se ve directamente (el momento, el motivo).',
    ),
  },
  {
    id: 'ph-b2-2',
    level: 4,
    topic: x('Trier les décombres', 'فرز الأنقاض', 'Sorting through rubble', 'Separar escombros'),
    photo: 'p01.jpg',
    alt: x(
      'Sur un site de démolition, plusieurs ouvriers trient des gravats ; au premier plan, une femme en chapeau de paille, chemise rayée et gants jaunes tire une barre de métal.',
      'في موقع هدم، عدة عمال يفرزون الأنقاض، وفي المقدمة امرأة بقبعة من القش وقميص مخطط وقفازات صفراء تسحب قضيبًا معدنيًا.',
      'At a demolition site, several workers are sorting rubble; in the foreground, a woman in a straw hat, striped shirt and yellow gloves is pulling out a metal bar.',
      'En un lugar de demolición, varios obreros separan escombros; en primer plano, una mujer con sombrero de paja, camisa a rayas y guantes amarillos tira de una barra de metal.',
    ),
    model:
      'In this picture, several workers are sorting through the remains of a demolished building. In the foreground, a woman wearing a straw hat, a striped shirt and yellow gloves is pulling out a metal bar. Behind her, two people in red and orange shirts are using long tools. On the left, another worker is bending over the broken concrete. The ground is covered with stones and twisted metal.',
    keywords: ['workers', 'gloves|hat', 'concrete|stones|metal', 'pulling|bending|using'],
    tip: x(
      'Utilise des verbes d’action précis (« pulling out », « bending over », « sorting through ») plutôt que « doing » ou « working ».',
      'استعمل أفعالًا دقيقة («pulling out» و«bending over» و«sorting through») بدل «doing» أو «working».',
      'Use precise action verbs (“pulling out”, “bending over”, “sorting through”) rather than “doing” or “working”.',
      'Usa verbos de acción precisos («pulling out», «bending over», «sorting through») en lugar de «doing» o «working».',
    ),
  },
  {
    id: 'ph-b2-3',
    level: 4,
    topic: x('Un rouleau compresseur', 'آلة رصّ الطرق', 'A road roller', 'Una apisonadora'),
    photo: 'p08.jpg',
    alt: x(
      'Sur un chantier au bord d’une forêt, un ouvrier conduit un rouleau compresseur jaune ; derrière, deux ouvriers se tiennent sur un camion blanc.',
      'في ورشة على حافة غابة، عامل يقود آلة رصّ صفراء، وخلفها عاملان يقفان على شاحنة بيضاء.',
      'At a building site at the edge of a forest, a worker is driving a yellow road roller; behind it, two workers are standing on a white truck.',
      'En una obra junto a un bosque, un obrero conduce una apisonadora amarilla; detrás, dos obreros están de pie sobre un camión blanco.',
    ),
    model:
      'This is a construction site next to a forest. In the center, a worker is driving a large yellow road roller across the ground. He is wearing a green helmet and a safety vest. Behind the machine, there is a white truck, and two other workers are standing on it, apparently unloading materials. There is a pile of soil and thick vegetation in the background.',
    keywords: ['road roller|roller|machine', 'driving', 'truck', 'helmet|vest'],
    tip: x(
      'Si tu ne connais pas le nom exact d’une machine, contourne : « a large yellow machine that flattens the ground ».',
      'إذا لم تعرف اسم الآلة بالضبط، فالتفّ حوله: «a large yellow machine that flattens the ground».',
      'If you do not know the exact name of a machine, paraphrase: “a large yellow machine that flattens the ground”.',
      'Si no conoces el nombre exacto de una máquina, parafrasea: «a large yellow machine that flattens the ground».',
    ),
  },
  {
    id: 'ph-b2-4',
    level: 4,
    topic: x('Un marché aux puces', 'سوق للأغراض المستعملة', 'A flea market', 'Un mercadillo'),
    photo: 'p26.jpg',
    alt: x(
      'Un marché en plein air un jour d’automne ensoleillé : un étal de vestes et de manteaux à gauche, un homme assis sur une chaise pliante, une femme en manteau noir debout, des passants plus loin.',
      'سوق في الهواء الطلق في يوم خريفي مشمس: طاولة سترات ومعاطف على اليسار، ورجل جالس على كرسي قابل للطي، وامرأة بمعطف أسود واقفة، ومارّة أبعد.',
      'An outdoor market on a sunny autumn day: a stall of jackets and coats on the left, a man sitting on a folding chair, a woman in a black coat standing, people walking further away.',
      'Un mercado al aire libre en un día soleado de otoño: un puesto de chaquetas y abrigos a la izquierda, un hombre sentado en una silla plegable, una mujer con abrigo negro de pie y gente paseando más lejos.',
    ),
    model:
      'This picture shows an outdoor market on a sunny autumn day. On the left, there is a long clothing stall with jackets and coats hanging on rails. A man is sitting on a folding chair next to the stall, and a woman in a black coat is standing in front of him. On the right, a young man is carrying a plastic bag. Further down the street, many people are walking among the stalls.',
    keywords: ['market|stall', 'clothes|clothing|jackets|coats', 'sitting|chair', 'carrying|walking'],
    tip: x(
      '« Further down the street… » est une belle façon d’introduire ce qui est au loin.',
      '«Further down the street…» طريقة جميلة لتقديم ما هو بعيد.',
      '“Further down the street…” is a nice way to introduce what is far away.',
      '«Further down the street…» es una bonita forma de presentar lo que está lejos.',
    ),
  },
  {
    id: 'ph-b2-5',
    level: 4,
    topic: x('Un abri de bus animé', 'موقف حافلات مزدحم', 'A lively bus shelter', 'Una parada de autobús animada'),
    photo: 'p32.jpg',
    alt: x(
      'Sous un long abri de bus en béton, des adultes attendent : deux hommes âgés assis regardent leur téléphone, une femme en tee-shirt rose se tient debout avec un sac plastique ; à gauche, un homme vend des friandises sur une petite table et une femme boit de l’eau ; à droite, un jeune homme consulte son téléphone.',
      'تحت موقف حافلات طويل من الإسمنت، ينتظر بالغون: رجلان مسنّان جالسان ينظران إلى هاتفيهما، وامرأة بقميص وردي واقفة تحمل كيسًا بلاستيكيًا، وعلى اليسار رجل يبيع حلويات على طاولة صغيرة وامرأة تشرب الماء، وعلى اليمين شاب ينظر إلى هاتفه.',
      'Under a long concrete bus shelter, adults are waiting: two older men are sitting and looking at their phones, a woman in a pink T-shirt is standing with a plastic bag; on the left, a man is selling snacks at a small table and a woman is drinking water; on the right, a young man is checking his phone.',
      'Bajo una larga marquesina de hormigón, varios adultos esperan: dos hombres mayores sentados miran el móvil, una mujer con camiseta rosa está de pie con una bolsa de plástico; a la izquierda, un hombre vende golosinas en una mesita y una mujer bebe agua; a la derecha, un joven consulta su móvil.',
    ),
    model:
      'This picture shows a bus shelter on a sunny day. Several people are waiting on a long concrete bench. In the middle, two older men are sitting and looking at their phones, while a woman in a pink T-shirt is standing next to them with a plastic bag. On the left, a man is selling snacks at a small table, and a woman is drinking water. On the right, a young man is checking his phone.',
    keywords: ['bench|shelter', 'waiting|sitting', 'phones|phone', 'selling|snacks'],
    tip: x(
      'Avec beaucoup de personnes, découpe la photo en zones (« In the middle… On the left… On the right… ») et donne une action pour chacune.',
      'مع كثرة الأشخاص، قسّم الصورة إلى مناطق («In the middle… On the left… On the right…») واذكر فعلًا لكل منطقة.',
      'With many people, split the photo into areas (“In the middle… On the left… On the right…”) and give one action for each.',
      'Con mucha gente, divide la foto en zonas («In the middle… On the left… On the right…») y da una acción para cada una.',
    ),
  },
];
