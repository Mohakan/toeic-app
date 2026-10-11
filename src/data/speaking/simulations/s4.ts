import type { SpeakingSimulation } from '../../../types';
import { x } from '../../curriculum/build';

export const simulation4: SpeakingSimulation = {
  id: 'sim-4',
  title: x('Simulation 4', 'المحاكاة 4', 'Simulation 4', 'Simulación 4'),
  readAloud: [
    {
      id: 'ra-s4-1',
      level: 4,
      topic: x('Un message d’un assureur', 'رسالة من شركة تأمين', 'A message from an insurer', 'Un mensaje de una aseguradora'),
      text: 'Hello, this is Daniel Price from Harbor Insurance, returning your call about your policy renewal. I have reviewed your account, and I am happy to say that you qualify for a lower monthly rate. To complete the change, I just need you to confirm your mailing address. You can reach me directly until six this evening. Thank you.',
      tip: x(
        'Ton de message vocal : clair et aimable. Lie « reach me » et « happy to say » sans couper.',
        'نبرة رسالة صوتية: واضحة ولطيفة. اربط «reach me» و«happy to say» دون انقطاع.',
        'A voicemail tone: clear and friendly. Link “reach me” and “happy to say” without breaking.',
        'Tono de mensaje de voz: claro y amable. Une «reach me» y «happy to say» sin cortar.',
      ),
    },
    {
      id: 'ra-s4-2',
      level: 4,
      topic: x('Une croisière sur le fleuve', 'رحلة بحرية على النهر', 'A river cruise', 'Un crucero por el río'),
      text: 'Welcome aboard the City Lights river cruise. During the next hour, we will pass under seven historic bridges and see some of the city’s most famous buildings, including the old opera house and the royal palace. Drinks and light snacks are available at the bar on the lower deck. Please remain seated while the boat is moving.',
      tip: x(
        '« historic », « opera », « palace » : l’accent tombe sur la première ou la deuxième syllabe ; écoute le modèle pour les placer.',
        '«historic» و«opera» و«palace»: يقع النبر على المقطع الأول أو الثاني، فاستمع إلى النموذج لتحديده.',
        '“historic”, “opera”, “palace”: the stress falls on the first or second syllable; listen to the model to place it.',
        '«historic», «opera», «palace»: el acento cae en la primera o la segunda sílaba; escucha el modelo para situarlo.',
      ),
    },
  ],
  photos: [
    {
      id: 'ph-s4-1',
      level: 4,
      topic: x("Au guichet de la gare", "عند شباك المحطة", "At the station counter", "En la taquilla de la estación"),
      photo: 'p28.jpg',
      alt: x(
        "Sur un quai de gare, un homme en fauteuil roulant, avec un chapeau et une chemise bleue, attend devant un guichet « Customer Service » ; à droite, le quai est vide sous un ciel bleu.",
        "على رصيف محطة، رجل على كرسي متحرك بقبعة وقميص أزرق ينتظر أمام شباك «Customer Service»، وعلى اليمين رصيف فارغ تحت سماء زرقاء.",
        "On a station platform, a man in a wheelchair, wearing a hat and a blue shirt, is waiting at a “Customer Service” window; on the right, the platform is empty under a blue sky.",
        "En un andén, un hombre en silla de ruedas, con sombrero y camisa azul, espera ante una ventanilla de «Customer Service»; a la derecha, el andén está vacío bajo un cielo azul.",
      ),
      model:
        "This picture was taken on a platform at a railway station. A man in a wheelchair, who is wearing a hat and a blue shirt, is waiting in front of a customer service window. Above the window, a sign says customer service, fares and tickets. On the right, the platform is empty, and in the distance, there are some trees under a clear blue sky.",
      keywords: ["wheelchair", "customer service|window", "platform|station", "hat|sign"],
      tip: x(
        "Tu peux lire un panneau visible (« a sign says… ») : c’est une information concrète et facile à exprimer.",
        "يمكنك قراءة لافتة ظاهرة («a sign says…»): معلومة ملموسة وسهلة التعبير.",
        "You can read a visible sign (“a sign says…”): a concrete detail that is easy to express.",
        "Puedes leer un cartel visible («a sign says…»): es un dato concreto y fácil de expresar.",
      ),
    },
    {
      id: 'ph-s4-2',
      level: 4,
      topic: x("Un musicien sur un bateau", "عازف على قارب", "A musician on a boat", "Un músico en un barco"),
      photo: 'p18.jpg',
      alt: x(
        "Un homme assis en tailleur sur une couverture rouge, sur le pont d’un bateau de pêche, joue de la guitare ; autour de lui, des cordages et des chaînes ; au fond, un port plein de bateaux et des montagnes vertes.",
        "رجل يجلس متربعًا على بطانية حمراء فوق سطح قارب صيد ويعزف على الغيتار، وحوله حبال وسلاسل، وفي الخلفية ميناء مليء بالقوارب وجبال خضراء.",
        "A man sitting cross-legged on a red blanket on the deck of a fishing boat is playing the guitar; ropes and chains around him; a harbor full of boats and green mountains behind.",
        "Un hombre sentado con las piernas cruzadas sobre una manta roja, en la cubierta de un barco pesquero, toca la guitarra; a su alrededor, cuerdas y cadenas; al fondo, un puerto lleno de barcos y montañas verdes.",
      ),
      model:
        "In this picture, a man is sitting on the deck of a fishing boat and playing the guitar. He is sitting on a red blanket, with his legs crossed. Around him, there are thick ropes and heavy chains. In the background, many other boats are tied up in the harbor, and there are green mountains behind them. The water is calm and blue.",
      keywords: ["guitar|playing", "boat|deck", "harbor|boats", "mountains|ropes|chains"],
      tip: x(
        "Mélange personnes, objets et paysage : une bonne description passe par les trois.",
        "امزج بين الأشخاص والأشياء والمنظر الطبيعي: الوصف الجيد يشمل الثلاثة.",
        "Mix people, objects and landscape: a good description covers all three.",
        "Combina personas, objetos y paisaje: una buena descripción incluye los tres.",
      ),
    },
  ],
  questions: {
    id: 'rq-s4',
    level: 4,
    topic: x('Les voyages d’affaires', 'رحلات العمل', 'Business travel', 'Los viajes de negocios'),
    context: 'Imagine that a travel magazine is preparing an article about business travel. You have agreed to participate in a telephone interview.',
    contextHelp: x(
      'Un magazine de voyage prépare un article sur les déplacements professionnels. Tu participes à un entretien téléphonique.',
      'مجلة سفر تُعدّ مقالًا حول رحلات العمل، وأنت تشارك في مقابلة هاتفية.',
      'A travel magazine is preparing an article on business travel. You take part in a phone interview.',
      'Una revista de viajes prepara un artículo sobre los viajes de trabajo. Participas en una entrevista telefónica.',
    ),
    questions: [
      {
        id: 'rq-s4-q1',
        prompt: 'When was the last time you traveled for work or study, and where did you go?',
        responseSec: 15,
        model: 'The last time was in March. I went to a conference in Paris for three days with two colleagues.',
        keywords: ['last|ago', 'went|traveled'],
        tip: x(
          'Le quand, puis le où, au passé : « The last time was… I went to… ».',
          'متى ثم أين، بصيغة الماضي: «The last time was… I went to…».',
          'When, then where, in the past: “The last time was… I went to…”.',
          'Cuándo y luego dónde, en pasado: «The last time was… I went to…».',
        ),
      },
      {
        id: 'rq-s4-q2',
        prompt: 'What do you usually do during a long flight or train journey?',
        responseSec: 15,
        model: 'I usually read or watch a film, but on business trips I often prepare my presentation or answer emails.',
        keywords: ['usually|often', 'read|watch|work|sleep|emails'],
        tip: x(
          'Deux activités suffisent, reliées par « but » pour opposer loisirs et travail.',
          'نشاطان يكفيان، يربط بينهما «but» للمقابلة بين الترفيه والعمل.',
          'Two activities are enough, linked by “but” to contrast leisure and work.',
          'Bastan dos actividades, unidas por «but» para contraponer ocio y trabajo.',
        ),
      },
      {
        id: 'rq-s4-q3',
        prompt: 'Do you think companies should reduce business travel and hold more online meetings instead? Why or why not?',
        responseSec: 30,
        model: 'I think they should reduce it, but not stop it completely. Online meetings save time and money, and they are much better for the environment. However, meeting a new client face to face builds trust in a way that a video call cannot. So companies should travel only for important meetings and hold the routine ones online.',
        keywords: ['online|video', 'time|money|environment', 'face to face|trust|clients|client'],
        tip: x(
          'Une position médiane (« reduce it, but not stop it ») se justifie par un avantage de chaque côté.',
          'الموقف الوسط («reduce it, but not stop it») يُبرَّر بميزة من كل جانب.',
          'A middle position (“reduce it, but not stop it”) is justified by one advantage on each side.',
          'Una postura intermedia («reduce it, but not stop it») se justifica con una ventaja de cada lado.',
        ),
      },
    ],
  },
  document: {
    id: 'rd-s4',
    level: 4,
    topic: x('Une formation logicielle', 'تكوين على برنامج معلوماتي', 'Software training', 'Una formación en software'),
    document: {
      title: 'New Software Training · Course Schedule',
      subtitle: 'Training Room B, 4th floor',
      header: ['Module', 'Topic', 'Time', 'Trainer'],
      rows: [
        ['1', 'Getting started with the new system', 'Monday, 9:00 – 12:00', 'Ana Rivera'],
        ['2', 'Creating and sharing reports', 'Monday, 1:30 – 4:30', 'Ana Rivera'],
        ['3', 'Managing customer data', 'Tuesday, 9:00 – 12:00', 'Tom Fischer'],
        ['4', 'Security and data protection', 'Tuesday, 1:30 – 3:00', 'Tom Fischer'],
        ['5', 'Practice session and questions', 'Wednesday, 9:00 – 11:00', 'Both trainers'],
      ],
      note: 'Laptops provided · Module 4 is required for all staff',
    },
    documentHelp: x(
      'Le programme d’une formation à un nouveau logiciel. Un salarié inscrit à la formation t’appelle.',
      'برنامج تكوين على برنامج معلوماتي جديد. موظف مسجّل في التكوين يتصل بك.',
      'The schedule of training on new software. An employee signed up for it calls you.',
      'El programa de una formación sobre un nuevo programa informático. Te llama un empleado inscrito.',
    ),
    caller: 'Hi, I have been asked to attend the training on the new software system next week. Can you tell me a bit about it?',
    questions: [
      {
        id: 'rd-s4-q1',
        prompt: 'Where is the training, and do I need to bring my own laptop?',
        responseSec: 15,
        model: 'The training is in Training Room B, on the fourth floor. You do not need to bring a laptop, because laptops are provided.',
        keywords: ['room b', 'provided'],
        tip: x(
          '« 4th floor » se dit « the fourth floor ». Réponds aux deux parties de la question.',
          '«4th floor» تُقال «the fourth floor». أجب عن جزأي السؤال.',
          '“4th floor” is said “the fourth floor”. Answer both parts of the question.',
          '«4th floor» se dice «the fourth floor». Responde a las dos partes de la pregunta.',
        ),
      },
      {
        id: 'rd-s4-q2',
        prompt: 'I can only come on Tuesday afternoon. Is there any module that I must attend?',
        responseSec: 15,
        model: 'Yes, and that works well for you. Module four, on security and data protection, is required for all staff, and it takes place on Tuesday afternoon, from one thirty to three.',
        keywords: ['security', 'required', 'one thirty'],
        tip: x(
          'Rassure l’appelant (« that works well for you »), puis donne le module obligatoire et son horaire.',
          'طمئن المتصل («that works well for you») ثم اذكر الوحدة الإلزامية وتوقيتها.',
          'Reassure the caller (“that works well for you”), then give the required module and its time.',
          'Tranquiliza a quien llama («that works well for you») y da el módulo obligatorio y su horario.',
        ),
      },
      {
        id: 'rd-s4-q3',
        prompt: 'What will Ana Rivera teach in her sessions?',
        responseSec: 30,
        model: 'Ana Rivera teaches the first two modules on Monday. In the morning, from nine to twelve, she explains how to get started with the new system. Then, in the afternoon, from one thirty to four thirty, she shows you how to create and share reports. She also leads the practice session on Wednesday morning with Tom Fischer.',
        keywords: ['getting started|get started', 'reports', 'four thirty', 'monday'],
        tip: x(
          'N’oublie pas la dernière ligne : « Both trainers » inclut aussi Ana Rivera.',
          'لا تنسَ السطر الأخير: «Both trainers» تشمل Ana Rivera أيضًا.',
          'Do not forget the last row: “Both trainers” includes Ana Rivera too.',
          'No olvides la última fila: «Both trainers» incluye también a Ana Rivera.',
        ),
      },
    ],
  },
  opinion: {
    id: 'op-s4',
    level: 4,
    topic: x('L’université gratuite', 'الجامعة المجانية', 'Free university', 'La universidad gratuita'),
    prompt: 'Some people believe that university education should be free for everyone. Do you agree? Give reasons and examples to support your opinion.',
    promptHelp: x(
      'Certains pensent que l’université devrait être gratuite pour tous. Es-tu d’accord ? Justifie ton avis avec des raisons et des exemples.',
      'يرى البعض أن التعليم الجامعي يجب أن يكون مجانيًا للجميع. هل توافق؟ برّر رأيك بأسباب وأمثلة.',
      'Some think university should be free for all. Do you agree? Support your opinion with reasons and examples.',
      'Algunos creen que la universidad debería ser gratuita para todos. ¿Estás de acuerdo? Justifica tu opinión con razones y ejemplos.',
    ),
    model:
      'I agree that university should be free, or at least very affordable. The main reason is equal opportunity: talented students from poor families should not give up their studies because of money. For instance, in countries where tuition fees are very high, many graduates spend years paying back their loans. Furthermore, a well-educated population benefits the whole economy. However, free education is expensive for the state, so universities must use public money carefully. Overall, I believe education is an investment, not a cost.',
    keywords: ['free|affordable', 'fees|loans|money', 'economy|opportunity'],
    tip: x(
      'Une formule finale frappante (« an investment, not a cost ») rend ta conclusion mémorable.',
      'عبارة ختامية قوية («an investment, not a cost») تجعل خاتمتك لا تُنسى.',
      'A striking final phrase (“an investment, not a cost”) makes your conclusion memorable.',
      'Una frase final contundente («an investment, not a cost») hace tu conclusión memorable.',
    ),
  },
};
