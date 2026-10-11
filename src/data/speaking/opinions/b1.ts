import type { OpinionTopic } from '../../../types';
import { x } from '../../curriculum/build';

export const opinionsB1: OpinionTopic[] = [
  {
    id: 'op-b1-1',
    level: 3,
    topic: x('Maison ou bureau ?', 'البيت أم المكتب؟', 'Home or office?', '¿Casa u oficina?'),
    prompt: 'Do you agree or disagree with the following statement? Working from home is better than working in an office. Use specific reasons and examples to support your opinion.',
    promptHelp: x(
      'Es-tu d’accord ? Travailler chez soi vaut mieux que travailler au bureau. Appuie-toi sur des raisons et des exemples précis.',
      'هل توافق؟ العمل من البيت أفضل من العمل في المكتب. استند إلى أسباب وأمثلة محددة.',
      'Do you agree? Working from home is better than working in an office. Use specific reasons and examples.',
      '¿Estás de acuerdo? Trabajar desde casa es mejor que en la oficina. Usa razones y ejemplos concretos.',
    ),
    model:
      'I partly agree with this statement. On the one hand, working from home saves a lot of time, because there is no commute. For example, when I work from home on Fridays, I gain almost two hours, and I use that time to exercise. In addition, it is easier to concentrate without noise. On the other hand, the office is important for teamwork and for meeting colleagues. Young employees, in particular, learn a lot by watching others. So I think the best solution is a mix: two or three days at home and the rest at the office.',
    keywords: ['commute|time', 'concentrate|noise', 'colleagues|teamwork'],
    tip: x(
      '« On the one hand… On the other hand… » puis une solution (« the best solution is a mix ») : idéal pour un avis nuancé.',
      '«On the one hand… On the other hand…» ثم حل («the best solution is a mix»): مثالي لرأي متوازن.',
      '“On the one hand… On the other hand…”, then a solution (“the best solution is a mix”): ideal for a balanced view.',
      '«On the one hand… On the other hand…» y luego una solución («the best solution is a mix»): ideal para una opinión matizada.',
    ),
  },
  {
    id: 'op-b1-2',
    level: 3,
    topic: x('La qualité d’un bon manager', 'صفة المدير الجيد', 'A good manager’s quality', 'La cualidad de un buen jefe'),
    prompt: 'Which quality is the most important for a good manager: honesty, good communication or organization? Give reasons and examples.',
    promptHelp: x(
      'Quelle qualité compte le plus chez un bon manager : l’honnêteté, la communication ou l’organisation ? Donne des raisons et des exemples.',
      'ما أهم صفة لدى المدير الجيد: النزاهة أم حسن التواصل أم التنظيم؟ قدّم أسبابًا وأمثلة.',
      'Which quality matters most in a good manager: honesty, communication or organization? Give reasons and examples.',
      '¿Qué cualidad importa más en un buen jefe: la honestidad, la comunicación o la organización? Da razones y ejemplos.',
    ),
    model:
      'In my opinion, the most important quality is good communication. A manager can be honest and organized, but if he or she cannot explain goals clearly, the team will be lost. For example, in my first internship, my manager explained every project at the start and asked for our ideas, so everyone knew what to do. Moreover, good communication helps to solve conflicts before they become serious. Honesty is important too, of course, but it is part of good communication. That is why I choose communication.',
    keywords: ['communication|communicate|explain', 'team|goals|conflicts'],
    tip: x(
      'Choisis UNE qualité et montre que les autres en dépendent (« Honesty… is part of good communication »).',
      'اختر صفة واحدة وبيّن أن الصفات الأخرى مرتبطة بها («Honesty… is part of good communication»).',
      'Choose ONE quality and show the others depend on it (“Honesty… is part of good communication”).',
      'Elige UNA cualidad y muestra que las otras dependen de ella («Honesty… is part of good communication»).',
    ),
  },
  {
    id: 'op-b1-3',
    level: 3,
    topic: x('Le bénévolat d’entreprise', 'التطوع عبر الشركة', 'Corporate volunteering', 'El voluntariado de empresa'),
    prompt: 'Should companies give employees paid time to do volunteer work? Why or why not?',
    promptHelp: x(
      'Les entreprises devraient-elles donner aux salariés du temps payé pour faire du bénévolat ? Pourquoi ?',
      'هل يجب أن تمنح الشركات موظفيها وقتًا مدفوع الأجر للعمل التطوعي؟ لماذا؟',
      'Should companies give staff paid time for volunteering? Why or why not?',
      '¿Deberían las empresas dar a sus empleados tiempo pagado para hacer voluntariado? ¿Por qué?',
    ),
    model:
      'I believe companies should give employees a few paid days for volunteering each year. First, it helps the community. For instance, a team can spend a day cleaning a beach or helping at a food bank. Second, employees feel proud of their company, so they are more motivated and loyal. It is also a good way to build team spirit outside the office. However, the company must organize it well, so that work is not delayed. Overall, I think it is a small cost for a big benefit.',
    keywords: ['volunteer|volunteering|community', 'motivated|proud|loyal|team spirit'],
    tip: x(
      '« First… Second… » + « Overall… » : une structure courte qui tient en une minute.',
      '«First… Second…» ثم «Overall…»: بنية قصيرة تكفيها دقيقة واحدة.',
      '“First… Second…” + “Overall…”: a short structure that fits in one minute.',
      '«First… Second…» + «Overall…»: una estructura corta que cabe en un minuto.',
    ),
  },
  {
    id: 'op-b1-4',
    level: 3,
    topic: x('Rester ou changer d’entreprise ?', 'البقاء أم تغيير الشركة؟', 'Stay or change jobs?', '¿Quedarse o cambiar de empresa?'),
    prompt: 'Is it better to stay with one company for a long time or to change jobs often? Use reasons and examples to support your answer.',
    promptHelp: x(
      'Vaut-il mieux rester longtemps dans la même entreprise ou changer souvent d’emploi ? Justifie avec des raisons et des exemples.',
      'هل الأفضل البقاء طويلًا في الشركة نفسها أم تغيير العمل كثيرًا؟ برّر بأسباب وأمثلة.',
      'Is it better to stay with one company for a long time or change jobs often? Use reasons and examples.',
      '¿Es mejor quedarse mucho tiempo en una empresa o cambiar a menudo de trabajo? Justifica con razones y ejemplos.',
    ),
    model:
      'Personally, I think it is better to change jobs a few times at the start of your career and then stay longer in one company. When you are young, changing jobs helps you discover different sectors and learn new skills quickly. For example, my brother worked in sales, then in marketing, and now he knows exactly what he likes. However, staying in one company later gives you security and more responsibility. Also, employers sometimes worry about candidates who change jobs every year. So a balance is the best option.',
    keywords: ['change|changing', 'skills|career', 'security|responsibility'],
    tip: x(
      'Tu peux répondre « les deux, selon le moment » : explique chaque étape avec un argument.',
      'يمكنك أن تجيب «كلاهما حسب المرحلة»، واشرح كل مرحلة بحجة.',
      'You can answer “both, depending on the stage”: explain each stage with an argument.',
      'Puedes responder «las dos, según el momento»: explica cada etapa con un argumento.',
    ),
  },
  {
    id: 'op-b1-5',
    level: 3,
    topic: x('Les transports publics gratuits', 'النقل العمومي المجاني', 'Free public transport', 'Transporte público gratuito'),
    prompt: 'Some people think that public transport should be free for everyone. Do you agree? Why or why not?',
    promptHelp: x(
      'Certains pensent que les transports publics devraient être gratuits pour tous. Es-tu d’accord ? Pourquoi ?',
      'يرى البعض أن النقل العمومي يجب أن يكون مجانيًا للجميع. هل توافق؟ لماذا؟',
      'Some think public transport should be free for all. Do you agree? Why or why not?',
      'Algunos creen que el transporte público debería ser gratuito para todos. ¿Estás de acuerdo? ¿Por qué?',
    ),
    model:
      'I agree that public transport should be free, or at least very cheap. The main reason is the environment. If buses and trains are free, more people will leave their cars at home, so there will be less traffic and pollution. For example, some European cities made buses free, and the number of passengers increased a lot. Also, it helps people with low incomes. However, someone has to pay, so the government would need to use taxes. But I think it is a good investment for a cleaner city.',
    keywords: ['free|cheap', 'traffic|pollution|environment', 'taxes|government'],
    tip: x(
      '« If… will… so… » montre une chaîne de conséquences : très efficace pour un argument écologique ou économique.',
      '«If… will… so…» تُظهر سلسلة من النتائج، وهي فعالة جدًا لحجة بيئية أو اقتصادية.',
      '“If… will… so…” shows a chain of consequences: very effective for an environmental or economic argument.',
      '«If… will… so…» muestra una cadena de consecuencias: muy eficaz para un argumento ecológico o económico.',
    ),
  },
  {
    id: 'op-b1-6',
    level: 3,
    topic: x('Salaire ou intérêt du travail ?', 'الراتب أم أهمية العمل؟', 'Salary or interesting work?', '¿Sueldo o trabajo interesante?'),
    prompt: 'When choosing a job, which is more important: a high salary or interesting work? Give reasons and examples.',
    promptHelp: x(
      'Pour choisir un emploi, qu’est-ce qui compte le plus : un bon salaire ou un travail intéressant ? Donne des raisons et des exemples.',
      'عند اختيار عمل، ما الأهم: راتب مرتفع أم عمل ممتع؟ قدّم أسبابًا وأمثلة.',
      'When choosing a job, what matters more: a high salary or interesting work? Give reasons and examples.',
      'Al elegir un trabajo, ¿qué importa más: un buen sueldo o un trabajo interesante? Da razones y ejemplos.',
    ),
    model:
      'In my opinion, interesting work is more important than a high salary. We spend most of our day at work, so if the job is boring, we will be unhappy even with a lot of money. For example, a friend of mine left a well-paid job in a bank to become a teacher, and she is much happier now. In addition, when you enjoy your work, you do it better and you often get promoted. Of course, the salary must be enough to live comfortably, but after that, interest matters more. That is why I choose interesting work.',
    keywords: ['interesting|enjoy|boring', 'salary|money|paid'],
    tip: x(
      'Reconnais une condition (« the salary must be enough… ») : ton choix devient plus crédible.',
      'اعترف بشرط («the salary must be enough…») ليصبح اختيارك أكثر مصداقية.',
      'Acknowledge a condition (“the salary must be enough…”): your choice becomes more credible.',
      'Reconoce una condición («the salary must be enough…»): tu elección se vuelve más creíble.',
    ),
  },
  {
    id: 'op-b1-7',
    level: 3,
    topic: x('Les stages pendant les études', 'التربصات أثناء الدراسة', 'Internships during studies', 'Prácticas durante los estudios'),
    prompt: 'Should students be required to do an internship before they finish their studies? Explain your opinion.',
    promptHelp: x(
      'Les étudiants devraient-ils être obligés de faire un stage avant la fin de leurs études ? Explique ton avis.',
      'هل يجب إلزام الطلبة بإجراء تربص قبل إنهاء دراستهم؟ اشرح رأيك.',
      'Should students have to do an internship before finishing their studies? Explain your opinion.',
      '¿Deberían los estudiantes estar obligados a hacer prácticas antes de terminar sus estudios? Explica tu opinión.',
    ),
    model:
      'Yes, I think internships should be required. First, they show students what a real workplace is like, because university is very different from a company. For example, during my internship in a hotel, I learned how to deal with difficult customers, which I never studied in class. Furthermore, an internship looks good on a CV and helps students find their first job. However, companies should pay interns fairly and give them real tasks. For these reasons, I believe every student should do one.',
    keywords: ['internship|internships|intern', 'workplace|company|cv|job'],
    tip: x(
      'Ajoute une condition pour que ta proposition soit juste (« companies should pay interns fairly »).',
      'أضف شرطًا ليكون اقتراحك عادلًا («companies should pay interns fairly»).',
      'Add a condition to make your proposal fair (“companies should pay interns fairly”).',
      'Añade una condición para que tu propuesta sea justa («companies should pay interns fairly»).',
    ),
  },
  {
    id: 'op-b1-8',
    level: 3,
    topic: x('Une année de pause', 'سنة توقف', 'A gap year', 'Un año sabático'),
    prompt: 'Is it a good idea for young people to take a year off before starting university or work? Why or why not?',
    promptHelp: x(
      'Est-ce une bonne idée pour les jeunes de faire une année de pause avant l’université ou le travail ? Pourquoi ?',
      'هل من الجيد أن يأخذ الشباب سنة توقف قبل الجامعة أو العمل؟ لماذا؟',
      'Is it a good idea for young people to take a year off before university or work? Why or why not?',
      '¿Es buena idea que los jóvenes se tomen un año libre antes de la universidad o el trabajo? ¿Por qué?',
    ),
    model:
      'I think a gap year can be a very good idea, but only if it is well planned. During a year off, young people can travel, work or volunteer, and they discover what they really want to study. For example, my cousin spent a year working in a restaurant in Canada, and she came back with excellent English and a clear plan. Also, she was more mature. On the other hand, some people lose their motivation and never go back to their studies. So a gap year is useful when you have clear goals.',
    keywords: ['year off|gap year', 'travel|work|volunteer', 'motivation|goals|mature'],
    tip: x(
      '« …, but only if… » : une seule condition suffit à rendre ta position nuancée.',
      '«…, but only if…»: شرط واحد يكفي لجعل موقفك متوازنًا.',
      '“…, but only if…”: one condition is enough to make your position nuanced.',
      '«…, but only if…»: una sola condición basta para matizar tu postura.',
    ),
  },
];
