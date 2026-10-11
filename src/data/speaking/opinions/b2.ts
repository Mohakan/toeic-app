import type { OpinionTopic } from '../../../types';
import { x } from '../../curriculum/build';

export const opinionsB2: OpinionTopic[] = [
  {
    id: 'op-b2-1',
    level: 4,
    topic: x('Réduire les émissions', 'خفض الانبعاثات', 'Cutting emissions', 'Reducir las emisiones'),
    prompt: 'Do you agree or disagree with the following statement? Companies should be required to reduce their carbon emissions, even if their prices go up. Give specific reasons and examples.',
    promptHelp: x(
      'Es-tu d’accord ? Les entreprises devraient être obligées de réduire leurs émissions de carbone, même si leurs prix augmentent. Donne des raisons et des exemples précis.',
      'هل توافق؟ يجب إلزام الشركات بخفض انبعاثاتها الكربونية حتى لو ارتفعت أسعارها. قدّم أسبابًا وأمثلة محددة.',
      'Do you agree? Companies should have to cut carbon emissions, even if prices rise. Give specific reasons and examples.',
      '¿Estás de acuerdo? Las empresas deberían estar obligadas a reducir sus emisiones aunque suban los precios. Da razones y ejemplos concretos.',
    ),
    model:
      'I agree with this statement, although the transition must be managed carefully. The main reason is that climate change already has a real cost: floods, droughts and heat waves damage homes, crops and businesses. For example, farmers in my region lost a large part of their harvest during the last drought. Moreover, strict rules push companies to innovate, and new technologies often become cheaper over time, as solar panels did. However, governments should help low-income families if prices rise. Overall, I believe the cost of doing nothing is much higher.',
    keywords: ['emissions|carbon|climate', 'prices|cost|cheaper', 'innovate|technologies|solar'],
    tip: x(
      'Ton exemple peut être local (« farmers in my region… ») ; ajoute ensuite une preuve générale (« as solar panels did »).',
      'يمكن أن يكون مثالك محليًا («farmers in my region…») ثم أضف دليلًا عامًا («as solar panels did»).',
      'Your example can be local (“farmers in my region…”); then add general evidence (“as solar panels did”).',
      'Tu ejemplo puede ser local («farmers in my region…»); luego añade una prueba general («as solar panels did»).',
    ),
  },
  {
    id: 'op-b2-2',
    level: 4,
    topic: x('Les réseaux sociaux des candidats', 'شبكات التواصل لدى المترشحين', 'Candidates’ social media', 'Las redes de los candidatos'),
    prompt: 'Should employers look at job candidates’ social media profiles before hiring them? Why or why not?',
    promptHelp: x(
      'Les employeurs devraient-ils consulter les réseaux sociaux des candidats avant de les embaucher ? Pourquoi ?',
      'هل يجب أن يطّلع أصحاب العمل على حسابات المترشحين في شبكات التواصل قبل توظيفهم؟ لماذا؟',
      'Should employers check candidates’ social media before hiring them? Why or why not?',
      '¿Deberían los empleadores mirar las redes sociales de los candidatos antes de contratarlos? ¿Por qué?',
    ),
    model:
      'In my view, employers can look at professional profiles, but they should not judge candidates on their private lives. A professional network shows experience and skills, so it is useful. However, personal accounts are different. For instance, a photo from a party or a political opinion says nothing about how well someone can do the job. In addition, this practice can lead to discrimination, because recruiters may reject people for their religion or their friends. That is why I think companies should focus on interviews, tests and references instead.',
    keywords: ['profiles|profile|accounts', 'private|personal', 'discrimination|reject'],
    tip: x(
      'Sépare deux cas (profil professionnel / compte privé) : c’est une manière élégante de nuancer.',
      'ميّز بين حالتين (الحساب المهني / الحساب الخاص): طريقة أنيقة للتدقيق.',
      'Separate two cases (professional profile / private account): an elegant way to add nuance.',
      'Separa dos casos (perfil profesional / cuenta privada): una forma elegante de matizar.',
    ),
  },
  {
    id: 'op-b2-3',
    level: 4,
    topic: x('Expérience ou idées neuves ?', 'الخبرة أم الأفكار الجديدة؟', 'Experience or new ideas?', '¿Experiencia o ideas nuevas?'),
    prompt: 'Which is more valuable for a company’s success: experienced employees or young employees with new ideas? Explain your choice.',
    promptHelp: x(
      'Qu’est-ce qui contribue le plus au succès d’une entreprise : des salariés expérimentés ou des jeunes avec des idées neuves ? Explique ton choix.',
      'ما الأكثر فائدة لنجاح شركة: موظفون ذوو خبرة أم شباب بأفكار جديدة؟ اشرح اختيارك.',
      'What matters more for a company’s success: experienced staff or young staff with new ideas? Explain your choice.',
      '¿Qué aporta más al éxito de una empresa: empleados con experiencia o jóvenes con ideas nuevas? Explica tu elección.',
    ),
    model:
      'I believe experienced employees are slightly more valuable, but the best companies combine both. Experienced staff know the clients, the market and the mistakes to avoid, so they help a company make safer decisions. For example, during a crisis, a senior manager who has already lived through one knows how to react calmly. On the other hand, young employees bring fresh ideas, especially in digital tools. Furthermore, mixed teams learn from each other through mentoring. To sum up, experience comes first, but a company without new ideas will not survive for long.',
    keywords: ['experienced|experience', 'young|fresh|new ideas', 'mentoring|mixed teams|combine'],
    tip: x(
      '« slightly more… but… combine both » : choisis, mais montre que tu vois la complémentarité.',
      '«slightly more… but… combine both»: اختر، لكن بيّن أنك ترى التكامل بينهما.',
      '“slightly more… but… combine both”: make a choice, but show you see how they complement each other.',
      '«slightly more… but… combine both»: elige, pero muestra que ves la complementariedad.',
    ),
  },
  {
    id: 'op-b2-4',
    level: 4,
    topic: x('Les réunions', 'الاجتماعات', 'Meetings', 'Las reuniones'),
    prompt: 'Some people say that most business meetings are a waste of time. Do you agree? Use reasons and examples to support your opinion.',
    promptHelp: x(
      'Certains disent que la plupart des réunions sont une perte de temps. Es-tu d’accord ? Justifie avec des raisons et des exemples.',
      'يقول البعض إن معظم اجتماعات العمل مضيعة للوقت. هل توافق؟ برّر بأسباب وأمثلة.',
      'Some say most business meetings waste time. Do you agree? Use reasons and examples.',
      'Hay quien dice que la mayoría de las reuniones son una pérdida de tiempo. ¿Estás de acuerdo? Justifica con razones y ejemplos.',
    ),
    model:
      'I partly agree. Many meetings are too long and have no clear purpose, so people leave without any decision. For example, in my previous company, we had a weekly meeting of an hour just to read reports that everyone had already received by email. However, meetings are not useless in themselves. When there is an agenda, a time limit and a person who takes decisions, they can save time, because problems are solved together instead of through dozens of emails. Therefore, I think the problem is not meetings, but badly organized meetings.',
    keywords: ['meetings|meeting', 'agenda|purpose|decision', 'emails|reports'],
    tip: x(
      'Termine par une reformulation qui déplace le débat : « the problem is not…, but… ».',
      'اختم بإعادة صياغة تنقل النقاش: «the problem is not…, but…».',
      'End with a rephrasing that shifts the debate: “the problem is not…, but…”.',
      'Termina con una reformulación que desplaza el debate: «the problem is not…, but…».',
    ),
  },
  {
    id: 'op-b2-5',
    level: 4,
    topic: x('IA et emploi', 'الذكاء الاصطناعي والشغل', 'AI and jobs', 'IA y empleo'),
    prompt: 'Do you think artificial intelligence will create more jobs than it destroys? Give reasons and examples.',
    promptHelp: x(
      'Penses-tu que l’intelligence artificielle créera plus d’emplois qu’elle n’en détruira ? Donne des raisons et des exemples.',
      'هل تعتقد أن الذكاء الاصطناعي سيخلق وظائف أكثر مما سيقضي عليه؟ قدّم أسبابًا وأمثلة.',
      'Do you think AI will create more jobs than it destroys? Give reasons and examples.',
      '¿Crees que la inteligencia artificial creará más empleos de los que destruirá? Da razones y ejemplos.',
    ),
    model:
      'I think artificial intelligence will probably create more jobs in the long term, but the transition will be difficult, because many workers will need new skills. History shows that new technologies destroy some jobs and create others. For instance, computers replaced many typists, but they created millions of jobs in software, design and online services. In the same way, AI will need people to build, check and explain these systems. However, workers whose tasks are repetitive, like data entry, may lose their jobs quickly. That is why governments and companies must invest in training now.',
    keywords: ['jobs|job', 'technologies|computers|systems', 'training|transition'],
    tip: x(
      'Un argument historique (« History shows that… ») est un excellent appui pour une prévision.',
      'الحجة التاريخية («History shows that…») سند ممتاز لأي توقّع.',
      'A historical argument (“History shows that…”) is excellent support for a prediction.',
      'Un argumento histórico («History shows that…») es un apoyo excelente para una previsión.',
    ),
  },
  {
    id: 'op-b2-6',
    level: 4,
    topic: x('Horaires fixes ou flexibles ?', 'توقيت ثابت أم مرن؟', 'Fixed or flexible hours?', '¿Horario fijo o flexible?'),
    prompt: 'Would you rather have a fixed work schedule or flexible working hours? Explain why, using specific examples.',
    promptHelp: x(
      'Préférerais-tu des horaires fixes ou des horaires flexibles ? Explique pourquoi, avec des exemples précis.',
      'هل تفضّل توقيت عمل ثابتًا أم ساعات عمل مرنة؟ اشرح السبب بأمثلة محددة.',
      'Would you rather have fixed or flexible working hours? Explain why, with specific examples.',
      '¿Preferirías un horario fijo o flexible? Explica por qué con ejemplos concretos.',
    ),
    model:
      'I would rather have flexible working hours. First, everyone has a different rhythm: some people are more productive early in the morning, while others work best later. Flexibility allows each person to work at their best time. For example, a colleague of mine starts at seven so she can pick up her children from school at four, and she is one of the most efficient people in our team. Besides, flexible hours reduce stress, since you avoid traffic jams. Nevertheless, teams need some common hours for meetings. So I prefer flexible hours with a fixed core period.',
    keywords: ['flexible|flexibility', 'productive|efficient|rhythm', 'traffic|stress|children'],
    tip: x(
      '« Nevertheless » est un connecteur d’opposition plus soutenu que « but » : idéal pour la dernière nuance.',
      '«Nevertheless» رابط تعارض أرقى من «but»، وهو مثالي للتدقيق الأخير.',
      '“Nevertheless” is a more formal contrast word than “but”: ideal for the final nuance.',
      '«Nevertheless» es un conector de oposición más formal que «but»: ideal para el último matiz.',
    ),
  },
  {
    id: 'op-b2-7',
    level: 4,
    topic: x('Taxer les boissons sucrées', 'فرض ضريبة على المشروبات السكرية', 'Taxing sugary drinks', 'Gravar las bebidas azucaradas'),
    prompt: 'Should governments put a special tax on sugary drinks to protect public health? Give reasons for your opinion.',
    promptHelp: x(
      'Les gouvernements devraient-ils taxer spécialement les boissons sucrées pour protéger la santé publique ? Justifie ton avis.',
      'هل يجب أن تفرض الحكومات ضريبة خاصة على المشروبات السكرية لحماية الصحة العامة؟ برّر رأيك.',
      'Should governments specially tax sugary drinks to protect public health? Give reasons.',
      '¿Deberían los gobiernos gravar especialmente las bebidas azucaradas para proteger la salud pública? Justifica tu opinión.',
    ),
    model:
      'Yes, I support a tax on sugary drinks. The main reason is that these drinks contribute to obesity and diabetes, which cost public health systems a fortune. When prices go up, people buy less. For instance, after some countries introduced this tax, sales of soft drinks fell, and companies reduced the sugar in their recipes. In addition, the money from the tax can fund sport programs in schools. Some argue that it is unfair to poorer families. However, they are also the families most affected by these diseases. Therefore, I think the tax is justified.',
    keywords: ['tax', 'sugar|sugary|obesity|diabetes', 'health|diseases'],
    tip: x(
      'Cite l’objection (« Some argue that… ») puis retourne-la (« However, they are also… ») : argument fort.',
      'اذكر الاعتراض («Some argue that…») ثم اقلبه لصالحك («However, they are also…»): حجة قوية.',
      'State the objection (“Some argue that…”), then turn it around (“However, they are also…”): a strong argument.',
      'Cita la objeción («Some argue that…») y dale la vuelta («However, they are also…»): un argumento fuerte.',
    ),
  },
  {
    id: 'op-b2-8',
    level: 4,
    topic: x('Cours en ligne ou en classe ?', 'التعلّم عن بعد أم في القسم؟', 'Online or classroom learning?', '¿Aprender en línea o en clase?'),
    prompt: 'Can online courses completely replace traditional classroom learning? Why or why not?',
    promptHelp: x(
      'Les cours en ligne peuvent-ils remplacer complètement les cours en classe ? Pourquoi ?',
      'هل يمكن للدروس عبر الإنترنت أن تعوّض تمامًا التعليم في القسم؟ لماذا؟',
      'Can online courses fully replace classroom learning? Why or why not?',
      '¿Pueden los cursos en línea sustituir por completo las clases presenciales? ¿Por qué?',
    ),
    model:
      'In my opinion, online courses cannot completely replace the classroom, even though they are extremely useful. They are flexible and often cheap, so adults with a job can study at night. For example, I improved my English with an online course while working full time. However, learning in a classroom offers things a screen cannot give: direct interaction, discussion and the motivation of a group. In addition, children in particular need teachers to guide them. As a result, I think the future is blended learning, which mixes online lessons with face-to-face classes.',
    keywords: ['online', 'classroom|teachers|face-to-face', 'flexible|motivation|interaction'],
    tip: x(
      'Conclus par une notion précise (« blended learning ») : elle montre un vocabulaire de niveau B2.',
      'اختم بمفهوم دقيق («blended learning») يُظهر مفردات من مستوى B2.',
      'Conclude with a precise term (“blended learning”): it shows B2-level vocabulary.',
      'Concluye con un concepto preciso («blended learning»): demuestra vocabulario de nivel B2.',
    ),
  },
];
