import type { SpeakingSimulation } from '../../../types';
import { x } from '../../curriculum/build';

export const simulation1: SpeakingSimulation = {
  id: 'sim-1',
  title: x('Simulation 1', 'المحاكاة 1', 'Simulation 1', 'Simulación 1'),
  readAloud: [
    {
      id: 'ra-s1-1',
      level: 3,
      topic: x('Une jardinerie', 'مشتل للنباتات', 'A garden center', 'Un centro de jardinería'),
      text: 'Welcome to Riverside Garden Center. This weekend only, all outdoor plants, garden tools and flower pots are on sale. Our experts will be happy to help you choose the right plants for your balcony or garden. Don’t forget to visit our new café, located next to the main entrance. Thank you for shopping with us.',
      tip: x(
        'Dans une liste (« plants, garden tools and flower pots »), la voix monte sur chaque élément et descend sur le dernier.',
        'في القائمة («plants, garden tools and flower pots») يرتفع الصوت مع كل عنصر وينخفض مع الأخير.',
        'In a list (“plants, garden tools and flower pots”), your voice rises on each item and falls on the last one.',
        'En una enumeración («plants, garden tools and flower pots»), la voz sube en cada elemento y baja en el último.',
      ),
    },
    {
      id: 'ra-s1-2',
      level: 3,
      topic: x('Point circulation', 'نشرة حركة المرور', 'Traffic update', 'Información del tráfico'),
      text: 'Good morning, this is your traffic update. Drivers heading downtown should expect delays on Bridge Street, where road repairs began early this morning. If possible, use River Road or take the subway instead. Meanwhile, the highway to the airport is clear, and traffic is moving smoothly in both directions. Our next update is in thirty minutes.',
      tip: x(
        'Marque une courte pause après les mots de liaison (« Meanwhile, », « If possible, ») : le message devient plus clair.',
        'توقّف قليلًا بعد أدوات الربط («Meanwhile,» و«If possible,») ليصبح الخبر أوضح.',
        'Pause briefly after linking words (“Meanwhile,”, “If possible,”): the message becomes clearer.',
        'Haz una pausa breve tras los conectores («Meanwhile,», «If possible,»): el mensaje se entiende mejor.',
      ),
    },
  ],
  photos: [
    {
      id: 'ph-s1-1',
      level: 3,
      topic: x("Un quai couvert", "رصيف مغطّى", "A covered platform", "Un andén cubierto"),
      photo: 'p17.jpg',
      alt: x(
        "Un long quai de gare couvert, au sol de carreaux rouges : un jeune homme avec un sac à dos regarde son téléphone, une femme est assise sur un banc, une personne âgée descend un escalier ; à droite, un train bleu.",
        "رصيف محطة طويل ومغطى، أرضيته من البلاط الأحمر: شاب بحقيبة ظهر ينظر إلى هاتفه وامرأة جالسة على مقعد وشخص مسنّ ينزل درجًا، وعلى اليمين قطار أزرق.",
        "A long covered station platform with red tiles: a young man with a backpack is looking at his phone, a woman is sitting on a bench, an elderly person is going down some stairs; a blue train on the right.",
        "Un largo andén cubierto con baldosas rojas: un joven con mochila mira su teléfono, una mujer está sentada en un banco y una persona mayor baja unas escaleras; a la derecha, un tren azul.",
      ),
      model:
        "This picture shows a long covered platform at a train station. In the middle, a young man with a backpack is standing and looking at his phone. Behind him, a woman is sitting on a bench. On the left, an elderly woman is going down some stairs. On the right, there is a blue train next to the platform. The floor is made of red tiles.",
      keywords: ["platform|station", "standing|looking", "bench|sitting", "train"],
      tip: x(
        "Situe chaque personne par rapport aux autres (« Behind him… », « On the left… ») : la description devient claire et structurée.",
        "حدّد موقع كل شخص بالنسبة للآخرين («Behind him…» و«On the left…») ليصبح الوصف واضحًا ومنظمًا.",
        "Place each person in relation to the others (“Behind him…”, “On the left…”): the description becomes clear and organized.",
        "Sitúa a cada persona respecto a las demás («Behind him…», «On the left…»): la descripción queda clara y ordenada.",
      ),
    },
    {
      id: 'ph-s1-2',
      level: 3,
      topic: x("Un repas en plein air", "وجبة في الهواء الطلق", "An outdoor meal", "Una comida al aire libre"),
      photo: 'p27.jpg',
      alt: x(
        "Des personnes mangent ensemble à de longues tables sous des arbres ; au premier plan, un jeune homme en chemise blanche mange dans un bol, à côté d’une femme aux cheveux tressés ; sur la table, des assiettes, des verres et des bouteilles de soda.",
        "أشخاص يأكلون معًا على طاولات طويلة تحت الأشجار، وفي المقدمة شاب بقميص أبيض يأكل من وعاء بجانب امرأة بشعر مضفور، وعلى الطاولة صحون وكؤوس وقارورات مشروبات غازية.",
        "People are eating together at long tables under trees; in the foreground, a young man in a white shirt is eating from a bowl next to a woman with braided hair; plates, glasses and bottles of soft drinks are on the table.",
        "Varias personas comen juntas en mesas largas bajo los árboles; en primer plano, un joven con camisa blanca come de un cuenco junto a una mujer con trenzas; en la mesa hay platos, vasos y botellas de refresco.",
      ),
      model:
        "In this picture, a group of people are eating together outside, under some trees. In the foreground, a young man in a white shirt is eating from a bowl. Next to him, a woman with braided hair is looking at the table. On the table, there are plates, glasses and bottles of soft drinks. In the background, more people are sitting at other tables.",
      keywords: ["eating", "table|tables", "bottles|plates|glasses", "trees|outside"],
      tip: x(
        "Commence par une phrase qui résume la scène (« a group of people are eating together outside »), puis entre dans les détails.",
        "ابدأ بجملة تلخّص المشهد («a group of people are eating together outside») ثم ادخل في التفاصيل.",
        "Start with a sentence that sums up the scene (“a group of people are eating together outside”), then give details.",
        "Empieza con una frase que resuma la escena («a group of people are eating together outside») y luego entra en detalles.",
      ),
    },
  ],
  questions: {
    id: 'rq-s1',
    level: 3,
    topic: x('Le cinéma', 'السينما', 'Going to the cinema', 'Ir al cine'),
    context: 'Imagine that a marketing firm is doing research about how people spend their free time. You have agreed to participate in a telephone interview about going to the cinema.',
    contextHelp: x(
      'Une agence de marketing étudie les loisirs. Tu réponds à un entretien téléphonique sur le cinéma.',
      'وكالة تسويق تدرس طرق قضاء أوقات الفراغ، وأنت تجيب عن مقابلة هاتفية حول السينما.',
      'A marketing firm is studying free time. You answer a phone interview about going to the cinema.',
      'Una agencia de marketing estudia el tiempo libre. Respondes a una entrevista telefónica sobre el cine.',
    ),
    questions: [
      {
        id: 'rq-s1-q1',
        prompt: 'When was the last time you went to the cinema, and what did you see?',
        responseSec: 15,
        model: 'The last time I went to the cinema was two weeks ago. I saw a science fiction film with my brother, and we really enjoyed it.',
        keywords: ['ago|last|week|month', 'saw|watched'],
        tip: x(
          'Question au passé : réponds au passé (« I went… I saw… ») et donne un repère de temps (« two weeks ago »).',
          'السؤال بصيغة الماضي، فأجب بالماضي («I went… I saw…») واذكر مؤشرًا زمنيًا («two weeks ago»).',
          'A past-tense question: answer in the past (“I went… I saw…”) and give a time marker (“two weeks ago”).',
          'Pregunta en pasado: responde en pasado («I went… I saw…») y da una referencia temporal («two weeks ago»).',
        ),
      },
      {
        id: 'rq-s1-q2',
        prompt: 'Do you usually go to the cinema alone or with other people?',
        responseSec: 15,
        model: 'I usually go with friends or family, because I like talking about the film afterwards over a coffee.',
        keywords: ['usually|always|often', 'friends|family|alone', 'because|since'],
        tip: x(
          'Choisis une option et ajoute une raison courte avec « because ».',
          'اختر خيارًا وأضف سببًا قصيرًا بـ «because».',
          'Choose one option and add a short reason with “because”.',
          'Elige una opción y añade una razón breve con «because».',
        ),
      },
      {
        id: 'rq-s1-q3',
        prompt: 'Would you rather watch a new film at the cinema or wait to watch it at home? Why?',
        responseSec: 30,
        model: 'I would rather watch a new film at the cinema. The screen is huge and the sound is much better than on my television, so action films are more exciting. Also, it is a nice way to go out with friends. However, cinema tickets are expensive, so for comedies or dramas, I often wait and watch them at home.',
        keywords: ['would rather|prefer', 'screen|sound', 'expensive|tickets|price'],
        tip: x(
          'Donne ton choix, deux avantages, puis une limite (« However… ») : c’est une réponse complète en 30 s.',
          'اذكر اختيارك ومَيزتين ثم حدًّا («However…»): إجابة كاملة في 30 ثانية.',
          'Give your choice, two advantages, then a limit (“However…”): a complete answer in 30 s.',
          'Da tu elección, dos ventajas y luego un límite («However…»): una respuesta completa en 30 s.',
        ),
      },
    ],
  },
  document: {
    id: 'rd-s1',
    level: 3,
    topic: x('Cours du soir', 'دروس مسائية', 'Evening classes', 'Clases nocturnas'),
    document: {
      title: 'Westbrook Community Center · Spring Evening Classes',
      header: ['Day and time', 'Class', 'Room'],
      rows: [
        ['Monday, 6:30 p.m.', 'Beginner photography', 'Room 4'],
        ['Tuesday, 7:00 p.m.', 'Spanish conversation', 'Room 2'],
        ['Wednesday, 6:00 p.m.', 'Healthy cooking', 'Kitchen'],
        ['Thursday, 7:30 p.m.', 'Yoga for beginners', 'Studio B'],
        ['Saturday, 10:00 a.m.', 'Gardening workshop', 'Garden'],
      ],
      note: 'Each course: 8 weeks, $95 · Members: $75 · Classes start the week of April 7',
    },
    documentHelp: x(
      'Le programme des cours du soir d’un centre de quartier. Une personne intéressée t’appelle.',
      'برنامج الدروس المسائية في مركز حيّ. شخص مهتم يتصل بك.',
      'The evening class program of a community center. An interested person calls you.',
      'El programa de clases nocturnas de un centro cívico. Te llama una persona interesada.',
    ),
    caller: 'Hi, I am interested in taking an evening class at the community center this spring. Could you give me some information?',
    questions: [
      {
        id: 'rd-s1-q1',
        prompt: 'What day is the Spanish conversation class, and what time does it start?',
        responseSec: 15,
        model: 'The Spanish conversation class is on Tuesday, and it starts at seven in the evening, in Room two.',
        keywords: ['tuesday', 'seven'],
        tip: x(
          'Le jour, puis l’heure, puis la salle : une phrase complète suffit.',
          'اليوم ثم الساعة ثم القاعة: جملة كاملة واحدة تكفي.',
          'The day, then the time, then the room: one full sentence is enough.',
          'El día, luego la hora y la sala: basta una frase completa.',
        ),
      },
      {
        id: 'rd-s1-q2',
        prompt: 'I heard that each course costs ninety-five dollars for everyone. Is that right?',
        responseSec: 15,
        model: 'Not exactly. Ninety-five dollars is the regular price, but members only pay seventy-five dollars for each eight-week course.',
        keywords: ['seventy-five', 'members'],
        tip: x(
          '« Not exactly » corrige une information à moitié vraie ; précise ensuite l’exception.',
          '«Not exactly» تصحّح معلومة صحيحة جزئيًا، ثم وضّح الاستثناء.',
          '“Not exactly” corrects half-true information; then explain the exception.',
          '«Not exactly» corrige un dato a medias cierto; luego explica la excepción.',
        ),
      },
      {
        id: 'rd-s1-q3',
        prompt: 'I work late on Mondays and Tuesdays. Which classes could I take?',
        responseSec: 30,
        model: 'Since you work late on Mondays and Tuesdays, you could take three classes. On Wednesday at six, there is healthy cooking in the kitchen. On Thursday at seven thirty, there is yoga for beginners in Studio B. And on Saturday morning at ten, there is a gardening workshop. All courses start the week of April seventh.',
        keywords: ['healthy cooking', 'yoga', 'gardening', 'seven thirty'],
        tip: x(
          'Exclus les jours impossibles, puis cite chaque cours restant avec son jour et son heure.',
          'استبعد الأيام غير الممكنة ثم اذكر كل درس متبقٍّ مع يومه وساعته.',
          'Rule out the impossible days, then name each remaining class with its day and time.',
          'Descarta los días imposibles y cita cada clase restante con su día y su hora.',
        ),
      },
    ],
  },
  opinion: {
    id: 'op-s1',
    level: 3,
    topic: x('Épargner ou voyager ?', 'الادخار أم السفر؟', 'Save or travel?', '¿Ahorrar o viajar?'),
    prompt: 'Do you agree or disagree with the following statement? It is better to save money than to spend it on travel. Give reasons and examples to support your opinion.',
    promptHelp: x(
      'Es-tu d’accord ? Il vaut mieux épargner que dépenser son argent en voyages. Donne des raisons et des exemples.',
      'هل توافق؟ ادخار المال أفضل من إنفاقه على السفر. قدّم أسبابًا وأمثلة.',
      'Do you agree? It is better to save money than to spend it on travel. Give reasons and examples.',
      '¿Estás de acuerdo? Es mejor ahorrar que gastar el dinero en viajes. Da razones y ejemplos.',
    ),
    model:
      'I disagree with this statement, although saving is important. In my opinion, travel is one of the best investments you can make in yourself, because it opens your mind and teaches you things that school cannot. For example, when I spent a week in Spain with friends, I practiced a new language and discovered a different way of life. In addition, travel memories last forever, while many things we buy lose their value. However, we should travel responsibly and keep some savings for emergencies. That is why I think the best approach is to save regularly and spend part of it on travel.',
    keywords: ['travel|trip', 'save|savings|saving', 'experience|memories|language'],
    tip: x(
      'Tu peux être en désaccord tout en reconnaissant l’intérêt de l’autre option (« although saving is important »).',
      'يمكنك أن تعترض مع الاعتراف بأهمية الخيار الآخر («although saving is important»).',
      'You can disagree while recognizing the value of the other option (“although saving is important”).',
      'Puedes estar en desacuerdo reconociendo el valor de la otra opción («although saving is important»).',
    ),
  },
};
