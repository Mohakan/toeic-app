import type { SpeakingSimulation } from '../../../types';
import { x } from '../../curriculum/build';

export const simulation3: SpeakingSimulation = {
  id: 'sim-3',
  title: x('Simulation 3', 'المحاكاة 3', 'Simulation 3', 'Simulación 3'),
  readAloud: [
    {
      id: 'ra-s3-1',
      level: 4,
      topic: x('Un nouveau centre de recherche', 'مركز بحث جديد', 'A new research center', 'Un nuevo centro de investigación'),
      text: 'In business news, a major electronics company announced today that it will open a new research center in the north of the country. The center is expected to create around three hundred jobs over the next five years. According to the company, the project will focus on batteries for electric vehicles and the storage of renewable energy.',
      tip: x(
        'Un ton d’information : débit régulier, et accent sur les mots clés (« research center », « three hundred jobs »).',
        'نبرة إخبارية: إيقاع منتظم مع التشديد على الكلمات المهمة («research center» و«three hundred jobs»).',
        'A news tone: steady pace, with stress on key words (“research center”, “three hundred jobs”).',
        'Tono informativo: ritmo regular y acento en las palabras clave («research center», «three hundred jobs»).',
      ),
    },
    {
      id: 'ra-s3-2',
      level: 4,
      topic: x('Présentation d’une invitée', 'تقديم ضيفة', 'Introducing a guest', 'Presentación de una invitada'),
      text: 'Good evening, and welcome to our annual awards dinner. Our first guest tonight needs no introduction. For more than twenty years, she has helped small businesses grow, first as a consultant and later as the founder of her own agency. Please join me in welcoming our keynote speaker, Ms. Laura Bennett.',
      tip: x(
        'Fais monter l’enthousiasme jusqu’au nom final ; « Ms. » se prononce « miz ».',
        'اجعل الحماس يتصاعد حتى الاسم الأخير، و«Ms.» تُنطق «ميز».',
        'Build up enthusiasm until the final name; “Ms.” is pronounced “miz”.',
        'Haz crecer el entusiasmo hasta el nombre final; «Ms.» se pronuncia «miz».',
      ),
    },
  ],
  photos: [
    {
      id: 'ph-s3-1',
      level: 4,
      topic: x("Un quai de métro moderne", "رصيف مترو حديث", "A modern metro platform", "Un andén de metro moderno"),
      photo: 'p11.jpg',
      alt: x(
        "Une station de métro souterraine moderne : à droite, une rame derrière des portes palières vitrées, avec des voyageurs assis ; à gauche, un homme en tee-shirt noir marche avec un sac ; plus loin, d’autres personnes vont vers la sortie.",
        "محطة مترو حديثة تحت الأرض: على اليمين قطار خلف أبواب زجاجية وفيه مسافرون جالسون، وعلى اليسار رجل بقميص أسود يمشي بحقيبة، وأبعد منه أشخاص يتجهون نحو المخرج.",
        "A modern underground metro station: on the right, a train behind glass platform doors with passengers sitting inside; on the left, a man in a black T-shirt is walking with a bag; further away, other people are heading to the exit.",
        "Una estación de metro subterránea moderna: a la derecha, un tren tras puertas de cristal con viajeros sentados; a la izquierda, un hombre con camiseta negra camina con una bolsa; más lejos, otras personas van hacia la salida.",
      ),
      model:
        "This picture shows a modern underground station. On the right, a train is stopped at the platform behind glass screen doors, and some passengers are sitting inside. On the left, a man in a black T-shirt is walking along the platform with a bag on his shoulder. Further away, many other people are walking towards the exit. The signs are written in Chinese and English.",
      keywords: ["train", "platform|station", "walking", "doors|signs"],
      tip: x(
        "Utilise le passif pour les choses : « a train is stopped at the platform », « the signs are written in… ».",
        "استعمل المبني للمجهول للأشياء: «a train is stopped at the platform» و«the signs are written in…».",
        "Use the passive for things: “a train is stopped at the platform”, “the signs are written in…”.",
        "Usa la pasiva para las cosas: «a train is stopped at the platform», «the signs are written in…».",
      ),
    },
    {
      id: 'ph-s3-2',
      level: 4,
      topic: x("Charger du ballast", "تحميل الحصى", "Loading ballast", "Cargar balasto"),
      photo: 'p15.jpg',
      alt: x(
        "Deux ouvriers, debout à l’arrière d’un camion blanc chargé de pierres sombres, les étalent avec des pelles ; l’un porte un casque blanc et un masque ; une échelle bleue est fixée au camion ; au fond, une grue jaune et des immeubles.",
        "عاملان واقفان في خلف شاحنة بيضاء محمّلة بحجارة داكنة يفرشانها بالمجارف، أحدهما بخوذة بيضاء وكمامة، وسلّم أزرق مثبت على الشاحنة، وفي الخلفية رافعة صفراء وعمارات.",
        "Two workers are standing on the back of a white truck loaded with dark stones and spreading them with shovels; one wears a white helmet and a mask; a blue ladder is attached to the truck; a yellow crane and buildings behind.",
        "Dos obreros, de pie en la caja de un camión blanco cargado de piedras oscuras, las extienden con palas; uno lleva casco blanco y mascarilla; hay una escalera azul en el camión; al fondo, una grúa amarilla y edificios.",
      ),
      model:
        "In this photo, two workers are standing on the back of a white truck that is loaded with dark stones. They are both using shovels or rakes to spread the stones evenly. One of them is wearing a white helmet and a face mask. A blue ladder is attached to the side of the truck. In the background, there is a yellow crane and some apartment buildings.",
      keywords: ["workers", "truck", "stones|gravel", "helmet|shovels|ladder"],
      tip: x(
        "Si tu hésites entre deux mots (« shovels or rakes »), cite les deux : c’est naturel et cela évite de bloquer.",
        "إذا ترددت بين كلمتين («shovels or rakes») فاذكرهما معًا: هذا طبيعي ويجنّبك التوقف.",
        "If you hesitate between two words (“shovels or rakes”), say both: it sounds natural and keeps you going.",
        "Si dudas entre dos palabras («shovels or rakes»), di las dos: suena natural y evita bloquearte.",
      ),
    },
  ],
  questions: {
    id: 'rq-s3',
    level: 4,
    topic: x('Les e-mails au travail', 'البريد الإلكتروني في العمل', 'Emails at work', 'El correo en el trabajo'),
    context: 'Imagine that a professional association is doing research on work habits. You have agreed to answer some questions about emails and messages at work.',
    contextHelp: x(
      'Une association professionnelle étudie les habitudes de travail. Tu réponds à des questions sur les e-mails et les messages au travail.',
      'جمعية مهنية تدرس عادات العمل، وأنت تجيب عن أسئلة حول البريد الإلكتروني والرسائل في العمل.',
      'A professional association is studying work habits. You answer questions about emails and messages at work.',
      'Una asociación profesional estudia los hábitos de trabajo. Respondes a preguntas sobre el correo y los mensajes en el trabajo.',
    ),
    questions: [
      {
        id: 'rq-s3-q1',
        prompt: 'How many emails do you receive on a typical working day?',
        responseSec: 15,
        model: 'On a typical day, I receive about forty emails, but only ten or so really need an answer.',
        keywords: ['about|around|more than', 'emails|email'],
        tip: x(
          'Donne un ordre de grandeur (« about forty ») et ajoute une nuance (« but only… »).',
          'اذكر رقمًا تقريبيًا («about forty») وأضف توضيحًا («but only…»).',
          'Give a rough number (“about forty”) and add a nuance (“but only…”).',
          'Da una cifra aproximada («about forty») y añade un matiz («but only…»).',
        ),
      },
      {
        id: 'rq-s3-q2',
        prompt: 'Do you prefer to communicate with colleagues by email or by phone?',
        responseSec: 15,
        model: 'I prefer email for most things, because I can keep a written record, but I call colleagues when a problem is urgent.',
        keywords: ['prefer|rather', 'email|phone', 'because|since'],
        tip: x(
          'Un choix, une raison, une exception : la structure idéale en 15 s.',
          'اختيار وسبب واستثناء: البنية المثالية في 15 ثانية.',
          'A choice, a reason, an exception: the ideal structure in 15 s.',
          'Una elección, una razón y una excepción: la estructura ideal en 15 s.',
        ),
      },
      {
        id: 'rq-s3-q3',
        prompt: 'Should employees be allowed to ignore work messages in the evening and on weekends? Why or why not?',
        responseSec: 30,
        model: 'Yes, I believe they should. Everyone needs time to rest and to be with their family, otherwise they become stressed and less productive. Some countries have even introduced a right to disconnect. Of course, there can be exceptions for real emergencies, but these should be rare and clearly defined in advance.',
        keywords: ['rest|family|stressed', 'disconnect|evening|weekends', 'exceptions|emergencies'],
        tip: x(
          'Ajoute une information générale (« Some countries have… ») pour renforcer ton argument personnel.',
          'أضف معلومة عامة («Some countries have…») لتقوية حجتك الشخصية.',
          'Add a general fact (“Some countries have…”) to support your personal argument.',
          'Añade un dato general («Some countries have…») para reforzar tu argumento personal.',
        ),
      },
    ],
  },
  document: {
    id: 'rd-s3',
    level: 4,
    topic: x('Une course solidaire', 'سباق خيري', 'A charity run', 'Una carrera solidaria'),
    document: {
      title: 'Annual Charity Run · Event Schedule',
      subtitle: 'Sunday, June 8 · Organized by the City Business Club',
      rows: [
        ['7:00 a.m.', 'Registration opens', 'City Hall square'],
        ['8:00 a.m.', '10 km race starts', 'City Hall square'],
        ['8:30 a.m.', '5 km family walk starts', 'Central Park gate'],
        ['10:30 a.m.', 'Awards ceremony', 'Main stage'],
        ['11:00 a.m.', 'Live music and food stalls', 'Central Park'],
      ],
      note: 'Entry fee: $20 (children under 12 free) · All money goes to the children’s hospital · Online registration closes on May 30',
    },
    documentHelp: x(
      'Le programme d’une course solidaire organisée par un club d’entreprises. Une personne qui vient avec des collègues t’appelle.',
      'برنامج سباق خيري ينظّمه نادٍ للمؤسسات. شخص سيشارك مع زملائه يتصل بك.',
      'The program of a charity run organized by a business club. Someone coming with colleagues calls you.',
      'El programa de una carrera solidaria organizada por un club de empresas. Te llama alguien que viene con compañeros.',
    ),
    caller: 'Hi, my colleagues and I are planning to take part in the charity run. I have a few questions about the day.',
    questions: [
      {
        id: 'rd-s3-q1',
        prompt: 'What time does registration open, and where?',
        responseSec: 15,
        model: 'Registration opens at seven in the morning, in the City Hall square.',
        keywords: ['seven', 'city hall'],
        tip: x(
          'Réponse brève et précise ; tu peux rappeler que l’inscription en ligne ferme le trente mai.',
          'إجابة قصيرة ودقيقة، ويمكنك التذكير بأن التسجيل عبر الإنترنت يُغلق في الثلاثين من ماي.',
          'A short, precise answer; you can add that online registration closes on May thirtieth.',
          'Respuesta breve y precisa; puedes recordar que la inscripción en línea cierra el treinta de mayo.',
        ),
      },
      {
        id: 'rd-s3-q2',
        prompt: 'Some of my colleagues have children. Do they have to pay the entry fee too?',
        responseSec: 15,
        model: 'Children under twelve can take part for free. Adults pay twenty dollars, and all the money goes to the children’s hospital.',
        keywords: ['twelve', 'free', 'twenty'],
        tip: x(
          'Donne la règle (« under twelve… for free »), puis le prix pour les adultes.',
          'اذكر القاعدة («under twelve… for free») ثم سعر الكبار.',
          'Give the rule (“under twelve… for free”), then the adult price.',
          'Da la regla («under twelve… for free») y luego el precio para adultos.',
        ),
      },
      {
        id: 'rd-s3-q3',
        prompt: 'Not everyone in our group wants to run. What else can they do during the event?',
        responseSec: 30,
        model: 'There are several options. At eight thirty, there is a five kilometer family walk that starts at the Central Park gate. Then, at ten thirty, everyone can watch the awards ceremony on the main stage. After that, from eleven, there is live music and food stalls in Central Park.',
        keywords: ['family walk', 'eight thirty', 'awards ceremony', 'live music'],
        tip: x(
          'Exclus la course de dix kilomètres et présente les autres activités dans l’ordre chronologique.',
          'استبعد سباق العشرة كيلومترات وقدّم الأنشطة الأخرى بالترتيب الزمني.',
          'Leave out the ten kilometer race and present the other activities in time order.',
          'Descarta la carrera de diez kilómetros y presenta las demás actividades en orden cronológico.',
        ),
      },
    ],
  },
  opinion: {
    id: 'op-s3',
    level: 4,
    topic: x('Jours de congé ou prime ?', 'أيام راحة أم مكافأة؟', 'Days off or a bonus?', '¿Días libres o una prima?'),
    prompt: 'Do you agree or disagree with the following statement? Employees who work hard should be rewarded with extra days off rather than extra money. Use specific reasons and examples.',
    promptHelp: x(
      'Es-tu d’accord ? Les salariés qui travaillent dur devraient être récompensés par des jours de congé plutôt que par de l’argent. Donne des raisons et des exemples précis.',
      'هل توافق؟ يجب مكافأة الموظفين المجتهدين بأيام راحة إضافية بدل المال. قدّم أسبابًا وأمثلة محددة.',
      'Do you agree? Hard-working employees should get extra days off rather than extra money. Use specific reasons and examples.',
      '¿Estás de acuerdo? A los empleados que trabajan duro habría que premiarlos con días libres en lugar de dinero. Usa razones y ejemplos concretos.',
    ),
    model:
      'I partly agree with this statement. In my view, extra days off are often more valuable than a small bonus, because people who work hard are usually tired and need time to recover. For example, after a busy project last year, my manager gave our team two extra days off, and we came back with much more energy. In addition, time off helps to prevent burnout. However, not everyone has the same needs. A young employee saving for a flat may prefer money. Therefore, the best solution is to let employees choose between the two.',
    keywords: ['days off|time off', 'bonus|money', 'burnout|tired|energy'],
    tip: x(
      'Termine par une solution qui dépasse l’alternative (« let employees choose ») : c’est une conclusion de niveau B2.',
      'اختم بحل يتجاوز الخيارين («let employees choose»): خاتمة من مستوى B2.',
      'End with a solution that goes beyond the choice (“let employees choose”): a B2-level conclusion.',
      'Termina con una solución que supera la alternativa («let employees choose»): una conclusión de nivel B2.',
    ),
  },
};
