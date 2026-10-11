import type { SpeakingSimulation } from '../../../types';
import { x } from '../../curriculum/build';

export const simulation2: SpeakingSimulation = {
  id: 'sim-2',
  title: x('Simulation 2', 'المحاكاة 2', 'Simulation 2', 'Simulación 2'),
  readAloud: [
    {
      id: 'ra-s2-1',
      level: 3,
      topic: x('La fermeture du musée', 'إغلاق المتحف', 'The museum is closing', 'El museo va a cerrar'),
      text: 'Attention, visitors. The museum will close in fifteen minutes. Please make your way to the main exit on the ground floor. The gift shop and the café will remain open for another half hour. We hope you enjoyed today’s exhibition on ancient Egypt, and we look forward to seeing you again soon.',
      tip: x(
        '« Attention, visitors » : appuie sur la première syllabe de « visitors » et marque une pause après la virgule.',
        '«Attention, visitors»: شدّد على المقطع الأول من «visitors» وتوقّف بعد الفاصلة.',
        '“Attention, visitors”: stress the first syllable of “visitors” and pause after the comma.',
        '«Attention, visitors»: acentúa la primera sílaba de «visitors» y haz una pausa tras la coma.',
      ),
    },
    {
      id: 'ra-s2-2',
      level: 3,
      topic: x('Une offre internet', 'عرض للإنترنت', 'An internet offer', 'Una oferta de internet'),
      text: 'Are you tired of slow internet at home? With Fast Link, you can enjoy faster connections, clearer video calls and smooth streaming in every room. Installation is free this month, and our technicians can come at a time that suits you. Call us today or visit our website to choose the plan that is right for your family.',
      tip: x(
        'Une question publicitaire (« Are you tired of… ? ») monte à la fin ; la suite se lit avec énergie.',
        'السؤال الإشهاري («Are you tired of…?») يرتفع في آخره، وتُقرأ البقية بحيوية.',
        'An advertising question (“Are you tired of…?”) rises at the end; read the rest with energy.',
        'Una pregunta publicitaria («Are you tired of…?») sube al final; el resto se lee con energía.',
      ),
    },
  ],
  photos: [
    {
      id: 'ph-s2-1',
      level: 3,
      topic: x("Une gare la nuit", "محطة في الليل", "A station at night", "Una estación de noche"),
      photo: 'p09.jpg',
      alt: x(
        "Un quai de gare la nuit, entre deux trains rouge et blanc ; quelques voyageurs marchent, l’un porte un grand sac ; au-dessus, deux panneaux électroniques affichent les départs ; au milieu, une poubelle bleue.",
        "رصيف محطة ليلًا بين قطارين أحمرين وأبيضين، وبعض المسافرين يمشون وأحدهم يحمل حقيبة كبيرة، وفوقهم لوحتان إلكترونيتان تعرضان مواعيد الانطلاق، وفي الوسط سلة مهملات زرقاء.",
        "A station platform at night, between two red and white trains; a few passengers are walking, one carrying a big bag; above, two electronic boards show departures; a blue bin in the middle.",
        "Un andén de estación de noche, entre dos trenes rojos y blancos; algunos viajeros caminan, uno lleva una bolsa grande; encima, dos paneles electrónicos muestran las salidas; en el centro, una papelera azul.",
      ),
      model:
        "This photo was taken at a railway station at night. There are two trains, one on each side of the platform. A few passengers are walking along the platform, and one of them is carrying a large bag. Above the platform, there are two electronic boards that show the departure times. In the middle, there is a blue trash can.",
      keywords: ["night", "trains|train", "passengers|walking", "boards|screens"],
      tip: x(
        "Indique le moment de la journée si on le voit (« at night ») : c’est une information simple qui enrichit la description.",
        "اذكر وقت اليوم إن كان ظاهرًا («at night»): معلومة بسيطة تُغني الوصف.",
        "Mention the time of day if you can see it (“at night”): a simple detail that enriches the description.",
        "Indica el momento del día si se ve («at night»): un dato sencillo que enriquece la descripción.",
      ),
    },
    {
      id: 'ph-s2-2',
      level: 3,
      topic: x("Un ancien laboratoire", "مختبر قديم", "An old laboratory", "Un laboratorio antiguo"),
      photo: 'p24.jpg',
      alt: x(
        "Photo ancienne en noir et blanc : un homme en blouse blanche, assis sur un tabouret, regarde dans un microscope à un long plan de travail ; sur les étagères, des flacons et des livres.",
        "صورة قديمة بالأبيض والأسود: رجل بمئزر أبيض جالس على كرسي صغير ينظر في مجهر أمام طاولة عمل طويلة، وعلى الرفوف قوارير وكتب.",
        "An old black and white photo: a man in a white coat, sitting on a stool, is looking into a microscope at a long counter; bottles and books are on the shelves.",
        "Foto antigua en blanco y negro: un hombre con bata blanca, sentado en un taburete, mira por un microscopio en una larga encimera; en las estanterías hay frascos y libros.",
      ),
      model:
        "This is an old black and white photo of a laboratory. A man in a white coat is sitting on a stool and looking through a microscope. He is working at a long counter with many drawers. On the shelves above him, there are glass bottles and books. On the left, there is a rack with test tubes, and two lamps are hanging from the ceiling.",
      keywords: ["laboratory|lab", "microscope", "coat", "bottles|shelves|books"],
      tip: x(
        "Pour une photo ancienne, dis-le dès le début (« an old black and white photo ») : cela montre que tu observes tout.",
        "إذا كانت الصورة قديمة فاذكر ذلك من البداية («an old black and white photo») ليظهر أنك تلاحظ كل شيء.",
        "For an old photo, say so at the start (“an old black and white photo”): it shows you notice everything.",
        "Si la foto es antigua, dilo al principio («an old black and white photo»): demuestra que te fijas en todo.",
      ),
    },
  ],
  questions: {
    id: 'rq-s2',
    level: 3,
    topic: x('Acheter des vêtements', 'شراء الملابس', 'Buying clothes', 'Comprar ropa'),
    context: 'Imagine that a Canadian company is doing research about shopping habits. You have agreed to answer some questions about buying clothes.',
    contextHelp: x(
      'Une entreprise canadienne étudie les habitudes d’achat. Tu réponds à des questions sur l’achat de vêtements.',
      'شركة كندية تدرس عادات الشراء، وأنت تجيب عن أسئلة حول شراء الملابس.',
      'A Canadian company is studying shopping habits. You answer questions about buying clothes.',
      'Una empresa canadiense estudia los hábitos de compra. Respondes a preguntas sobre la compra de ropa.',
    ),
    questions: [
      {
        id: 'rq-s2-q1',
        prompt: 'How often do you buy new clothes?',
        responseSec: 15,
        model: 'I buy new clothes about once every two months, usually at the start of a new season or when there are sales.',
        keywords: ['once|twice|every|often', 'season|sales|month'],
        tip: x(
          'Pour une fréquence : « once a month », « every two months », « twice a year ». Ajoute une précision.',
          'للتعبير عن التكرار: «once a month» و«every two months» و«twice a year»، وأضف توضيحًا.',
          'For frequency: “once a month”, “every two months”, “twice a year”. Add one detail.',
          'Para la frecuencia: «once a month», «every two months», «twice a year». Añade un detalle.',
        ),
      },
      {
        id: 'rq-s2-q2',
        prompt: 'Where do you usually buy your clothes, and why?',
        responseSec: 15,
        model: 'I usually buy my clothes in a shopping mall near my home, because I can try them on and compare prices in different shops.',
        keywords: ['usually|often', 'mall|shop|shops|online|market', 'because|since'],
        tip: x(
          'Deux questions (« where » et « why ») : le lieu, puis « because… ».',
          'سؤالان («where» و«why»): المكان ثم «because…».',
          'Two questions (“where” and “why”): the place, then “because…”.',
          'Dos preguntas («where» y «why»): el lugar y luego «because…».',
        ),
      },
      {
        id: 'rq-s2-q3',
        prompt: 'Do you think it is important to buy clothes from brands that respect the environment? Why or why not?',
        responseSec: 30,
        model: 'Yes, I think it is important. The fashion industry produces a lot of waste and uses huge amounts of water. When we choose responsible brands, we push other companies to change. However, these clothes are often more expensive, so I also buy second-hand clothes, which is another good way to protect the environment.',
        keywords: ['environment|waste|water', 'responsible|brands', 'expensive|second-hand'],
        tip: x(
          'Donne ton avis, une raison concrète (déchets, eau), puis une solution réaliste.',
          'اذكر رأيك وسببًا ملموسًا (النفايات والماء) ثم حلًّا واقعيًا.',
          'Give your view, a concrete reason (waste, water), then a realistic solution.',
          'Da tu opinión, una razón concreta (residuos, agua) y luego una solución realista.',
        ),
      },
    ],
  },
  document: {
    id: 'rd-s2',
    level: 3,
    topic: x('Le premier jour d’un stagiaire', 'اليوم الأول لمتربص', 'An intern’s first day', 'El primer día de un becario'),
    document: {
      title: 'Orientation Day for New Interns · Brightline Media',
      subtitle: 'Monday, June 2',
      rows: [
        ['9:00', 'Welcome breakfast', 'Cafeteria, ground floor'],
        ['9:45', 'Tour of the newsroom', 'Third floor'],
        ['11:00', 'Meet your mentor', 'Your department'],
        ['12:30', 'Lunch with the CEO, Sarah Collins', 'Rooftop terrace'],
        ['2:00', 'Computer setup and passwords', 'Room 210'],
        ['3:30', 'Questions to former interns', 'Auditorium'],
      ],
      note: 'Dress code: smart casual · Bring a photo ID for your staff badge',
    },
    documentHelp: x(
      'Le programme de la journée d’accueil des stagiaires dans un groupe de médias. Un nouveau stagiaire t’appelle.',
      'برنامج يوم استقبال المتربصين في مجموعة إعلامية. متربص جديد يتصل بك.',
      'The orientation day program for interns at a media group. A new intern calls you.',
      'El programa del día de acogida de los becarios en un grupo de medios. Te llama un becario nuevo.',
    ),
    caller: 'Hello, I am starting my internship at Brightline Media on Monday, and I would like to check the plan for the first day.',
    questions: [
      {
        id: 'rd-s2-q1',
        prompt: 'Where should I go when I arrive, and at what time?',
        responseSec: 15,
        model: 'You should go to the cafeteria on the ground floor at nine o’clock for the welcome breakfast.',
        keywords: ['cafeteria', 'nine', 'ground floor'],
        tip: x(
          '« You should go to… at… » : le lieu et l’heure dans une seule phrase.',
          '«You should go to… at…»: المكان والساعة في جملة واحدة.',
          '“You should go to… at…”: the place and the time in one sentence.',
          '«You should go to… at…»: el lugar y la hora en una sola frase.',
        ),
      },
      {
        id: 'rd-s2-q2',
        prompt: 'Will I need to bring anything with me?',
        responseSec: 15,
        model: 'Yes, you will. Please bring a photo ID, because you need it for your staff badge. Also, the dress code is smart casual.',
        keywords: ['photo id', 'badge'],
        tip: x(
          'La réponse est dans la note : dis quoi apporter et pourquoi.',
          'الجواب في الملاحظة: قل ما يجب إحضاره ولماذا.',
          'The answer is in the note: say what to bring and why.',
          'La respuesta está en la nota: di qué llevar y por qué.',
        ),
      },
      {
        id: 'rd-s2-q3',
        prompt: 'What will happen in the afternoon?',
        responseSec: 30,
        model: 'In the afternoon, there are two activities. At two o’clock, you will set up your computer and passwords in Room two ten. Then, at three thirty, you can ask questions to former interns in the auditorium. Before that, you have lunch with the CEO, Sarah Collins, on the rooftop terrace.',
        keywords: ['passwords', 'three thirty', 'former interns', 'auditorium'],
        tip: x(
          'L’après-midi commence après le déjeuner : cite les deux activités dans l’ordre, avec l’heure et le lieu.',
          'تبدأ فترة ما بعد الظهر بعد الغداء: اذكر النشاطين بالترتيب مع الساعة والمكان.',
          'The afternoon starts after lunch: name both activities in order, with the time and place.',
          'La tarde empieza después de comer: cita las dos actividades en orden, con hora y lugar.',
        ),
      },
    ],
  },
  opinion: {
    id: 'op-s2',
    level: 3,
    topic: x('Grande ou petite entreprise ?', 'شركة كبيرة أم صغيرة؟', 'Large or small company?', '¿Empresa grande o pequeña?'),
    prompt: 'For a young professional, is it better to work for a large international company or for a small local business? Give reasons and examples to support your opinion.',
    promptHelp: x(
      'Pour un jeune diplômé, vaut-il mieux travailler pour une grande entreprise internationale ou pour une petite entreprise locale ? Justifie ton avis.',
      'بالنسبة لشاب في بداية مسيرته، هل الأفضل العمل في شركة دولية كبيرة أم في مؤسسة محلية صغيرة؟ برّر رأيك.',
      'For a young professional, is a large international company or a small local business better? Support your opinion.',
      'Para un joven profesional, ¿es mejor trabajar en una gran empresa internacional o en un pequeño negocio local? Justifica tu opinión.',
    ),
    model:
      'In my opinion, a small local business is a better place to start a career. In a small team, young employees get real responsibilities quickly, because there are fewer people to share the work. For example, my friend joined a small design agency after university, and within a year she was managing her own clients. Moreover, you learn about every part of the business. On the other hand, large companies offer higher salaries and training programs. However, you may only do one small task for years. That is why I would choose a small business first.',
    keywords: ['small|local', 'responsibilities|clients|learn', 'salaries|training'],
    tip: x(
      'Compare les deux options avec des avantages concrets (responsabilités, salaire), puis tranche.',
      'قارن بين الخيارين بمزايا ملموسة (المسؤوليات والراتب) ثم احسم.',
      'Compare both options with concrete advantages (responsibilities, salary), then decide.',
      'Compara las dos opciones con ventajas concretas (responsabilidades, sueldo) y luego decide.',
    ),
  },
};
