import type { OpinionTopic } from '../../../types';
import { x } from '../../curriculum/build';

export const opinionsC1: OpinionTopic[] = [
  {
    id: 'op-c1-1',
    level: 5,
    topic: x('Réputation ou profits ?', 'السمعة أم الأرباح؟', 'Reputation or profit?', '¿Reputación o beneficios?'),
    prompt: 'Do you agree or disagree with the following statement? A company’s reputation is more important than its short-term profits. Use specific reasons and examples to support your position.',
    promptHelp: x(
      'Es-tu d’accord ? La réputation d’une entreprise compte plus que ses profits à court terme. Appuie ta position sur des raisons et des exemples précis.',
      'هل توافق؟ سمعة الشركة أهم من أرباحها على المدى القصير. ادعم موقفك بأسباب وأمثلة محددة.',
      'Do you agree? A company’s reputation matters more than its short-term profits. Support your position with specific reasons and examples.',
      '¿Estás de acuerdo? La reputación de una empresa importa más que sus beneficios a corto plazo. Apoya tu postura con razones y ejemplos concretos.',
    ),
    model:
      'I strongly agree with this statement. A reputation takes decades to build but can be destroyed in a few days, particularly in the age of social media. For instance, when a car manufacturer was caught cheating on emissions tests, it lost billions in fines and, more importantly, the trust of millions of customers. Moreover, a good reputation is an asset in itself: it attracts talented employees, loyal clients and investors. Admittedly, a company that ignores profits will not survive. Nevertheless, sacrificing integrity for quick gains is a poor long-term strategy. That is why I believe reputation should always come first.',
    keywords: ['reputation', 'trust|integrity', 'profits|gains|investors'],
    tip: x(
      '« Admittedly, … Nevertheless, … » : concède un point à l’adversaire, puis reprends l’avantage. Structure typique du C1.',
      '«Admittedly, … Nevertheless, …»: اعترف للطرف الآخر بنقطة ثم استعد زمام المبادرة. بنية نموذجية لمستوى C1.',
      '“Admittedly, … Nevertheless, …”: concede a point, then regain the upper hand. A typical C1 structure.',
      '«Admittedly, … Nevertheless, …»: concede un punto y recupera la ventaja. Estructura típica de C1.',
    ),
  },
  {
    id: 'op-c1-2',
    level: 5,
    topic: x('L’âge de la retraite', 'سن التقاعد', 'Retirement age', 'La edad de jubilación'),
    prompt: 'As people live longer, should the retirement age be raised? Give reasons and examples to support your opinion.',
    promptHelp: x(
      'Comme on vit plus longtemps, faut-il relever l’âge de la retraite ? Justifie ton avis avec des raisons et des exemples.',
      'بما أن الناس يعيشون أطول، هل يجب رفع سن التقاعد؟ برّر رأيك بأسباب وأمثلة.',
      'As people live longer, should the retirement age go up? Support your opinion with reasons and examples.',
      'Como vivimos más, ¿debería retrasarse la edad de jubilación? Justifica tu opinión con razones y ejemplos.',
    ),
    model:
      'In my view, a moderate increase is probably unavoidable, but it should not be the same for everyone. Since life expectancy keeps rising, pension systems must support retirees for much longer, and fewer young workers are paying in. However, not all jobs are equal. For example, an office worker can reasonably work until sixty-seven, whereas a construction worker or a nurse is often physically exhausted much earlier. Furthermore, older employees need training and adapted positions to remain productive. To sum up, I support raising the retirement age, provided that physically demanding professions can retire earlier.',
    keywords: ['retirement|retire|pension', 'life expectancy|longer', 'physically|exhausted|demanding'],
    tip: x(
      '« whereas » oppose deux situations dans une même phrase ; « provided that » pose la condition finale.',
      '«whereas» تقابل بين وضعيتين في جملة واحدة، و«provided that» تضع الشرط النهائي.',
      '“whereas” contrasts two situations in one sentence; “provided that” sets the final condition.',
      '«whereas» contrapone dos situaciones en una frase; «provided that» plantea la condición final.',
    ),
  },
  {
    id: 'op-c1-3',
    level: 5,
    topic: x('Plafonner les salaires des dirigeants', 'تسقيف أجور المديرين', 'Capping executive pay', 'Limitar el sueldo de los directivos'),
    prompt: 'Should there be a legal limit on how much company executives can earn compared to their employees? Explain your position.',
    promptHelp: x(
      'Faut-il une limite légale à ce que les dirigeants peuvent gagner par rapport à leurs salariés ? Explique ta position.',
      'هل يجب وضع حدّ قانوني لما يمكن أن يكسبه مديرو الشركات مقارنة بموظفيهم؟ اشرح موقفك.',
      'Should the law limit how much executives earn compared to their staff? Explain your position.',
      '¿Debería haber un límite legal a lo que ganan los directivos frente a sus empleados? Explica tu postura.',
    ),
    model:
      'Personally, I am in favor of some form of limit, although I doubt that a strict legal cap is the best tool. The gap between executive pay and average salaries has grown enormously, and this matters because it damages motivation and social cohesion. For example, when a chief executive receives a huge bonus in the same year as layoffs, employees understandably feel betrayed. On the other hand, a rigid cap could push talented managers to work abroad. A better solution, in my opinion, would be to link bonuses to long-term results and to give shareholders and employees a vote on pay. Overall, transparency matters more than a fixed ratio.',
    keywords: ['pay|salaries|bonus|bonuses', 'cap|limit|ratio', 'transparency|shareholders|vote'],
    tip: x(
      'Au C1, tu peux soutenir le principe tout en critiquant l’outil proposé, puis suggérer une alternative.',
      'في مستوى C1 يمكنك تأييد المبدأ مع نقد الأداة المقترحة ثم اقتراح بديل.',
      'At C1, you can support the principle while criticizing the proposed tool, then suggest an alternative.',
      'En C1 puedes apoyar el principio criticando la herramienta propuesta y sugerir una alternativa.',
    ),
  },
  {
    id: 'op-c1-4',
    level: 5,
    topic: x('Le revenu universel', 'الدخل الأساسي الشامل', 'Universal basic income', 'La renta básica universal'),
    prompt: 'Some people believe every adult should receive a basic income from the government, whether they work or not. What is your opinion?',
    promptHelp: x(
      'Certains pensent que chaque adulte devrait recevoir un revenu de base de l’État, qu’il travaille ou non. Qu’en penses-tu ?',
      'يرى البعض أن كل بالغ يجب أن يتلقى دخلًا أساسيًا من الدولة سواء عمل أم لا. ما رأيك؟',
      'Some think every adult should get a basic income from the state, working or not. What do you think?',
      'Algunos creen que todo adulto debería recibir una renta básica del Estado, trabaje o no. ¿Qué opinas?',
    ),
    model:
      'I find the idea attractive in theory, but I am not convinced it would work on a national scale. Its supporters argue that it would reduce poverty and give people the freedom to train, start a business or care for relatives. For instance, some pilot projects have shown that recipients did not stop working and were less stressed. However, the cost would be enormous, and it would require much higher taxes. In addition, money spent on everyone would be taken from targeted help for those who need it most. Therefore, I believe it is wiser to improve existing support for the unemployed and low-income families.',
    keywords: ['basic income|income', 'poverty|unemployed|low-income', 'cost|taxes'],
    tip: x(
      'Présente d’abord les arguments du camp adverse (« Its supporters argue… »), puis explique pourquoi ils ne te convainquent pas.',
      'اعرض أولًا حجج الطرف الآخر («Its supporters argue…») ثم اشرح لماذا لم تقنعك.',
      'First present the other side’s arguments (“Its supporters argue…”), then explain why they do not convince you.',
      'Presenta primero los argumentos del otro lado («Its supporters argue…») y explica por qué no te convencen.',
    ),
  },
  {
    id: 'op-c1-5',
    level: 5,
    topic: x('Financer l’exploration spatiale', 'تمويل استكشاف الفضاء', 'Funding space exploration', 'Financiar la exploración espacial'),
    prompt: 'Should governments spend money on space exploration while there are still serious problems on Earth? Why or why not?',
    promptHelp: x(
      'Les États doivent-ils dépenser pour l’exploration spatiale alors qu’il reste de graves problèmes sur Terre ? Pourquoi ?',
      'هل يجب أن تنفق الحكومات على استكشاف الفضاء مع وجود مشكلات خطيرة على الأرض؟ لماذا؟',
      'Should governments fund space exploration while serious problems remain on Earth? Why or why not?',
      '¿Deberían los gobiernos gastar en exploración espacial mientras hay graves problemas en la Tierra? ¿Por qué?',
    ),
    model:
      'I believe they should, because space research often helps to solve problems on Earth rather than distracting from them. Satellites, for example, are essential for weather forecasting, disaster warnings and monitoring climate change. Moreover, many everyday technologies, such as water filters and medical imaging, were developed or improved thanks to space programs. It is true that budgets are limited and that poverty and health deserve priority. However, space agencies receive only a tiny share of public spending. Consequently, cutting their budgets would hardly solve those problems, while it would slow down innovation that benefits everyone.',
    keywords: ['space|satellites', 'technologies|innovation|research', 'budgets|spending|share'],
    tip: x(
      'Retourne la prémisse de la question (« helps to solve problems on Earth rather than… ») : c’est une stratégie d’argumentation avancée.',
      'اقلب فرضية السؤال («helps to solve problems on Earth rather than…»): هذه استراتيجية حجاج متقدمة.',
      'Turn the question’s premise around (“helps to solve problems on Earth rather than…”): an advanced arguing strategy.',
      'Dale la vuelta a la premisa de la pregunta («helps to solve problems on Earth rather than…»): una estrategia argumentativa avanzada.',
    ),
  },
  {
    id: 'op-c1-6',
    level: 5,
    topic: x('Limiter le tourisme', 'الحدّ من السياحة', 'Limiting tourism', 'Limitar el turismo'),
    prompt: 'Should popular tourist destinations limit the number of visitors? Give reasons and examples to support your opinion.',
    promptHelp: x(
      'Les destinations très touristiques devraient-elles limiter le nombre de visiteurs ? Justifie ton avis avec des raisons et des exemples.',
      'هل يجب أن تحدّ الوجهات السياحية الشهيرة من عدد الزوار؟ برّر رأيك بأسباب وأمثلة.',
      'Should popular tourist destinations limit visitor numbers? Support your opinion with reasons and examples.',
      '¿Deberían los destinos muy turísticos limitar el número de visitantes? Justifica tu opinión con razones y ejemplos.',
    ),
    model:
      'I think some limits are necessary, even though tourism is vital for many economies, including my own country’s. When too many visitors arrive at the same time, historic sites are damaged, rents rise and local residents are pushed out of their neighborhoods. For example, several European cities have introduced daily visitor caps or entry fees for their historic centers, precisely to protect them. In addition, spreading visitors across the year and across lesser-known regions benefits more communities. Of course, limits must not make travel a privilege for the rich. So I would favor booking systems rather than very high prices.',
    keywords: ['tourism|tourist|visitors', 'residents|rents|damaged', 'limits|caps|fees|booking'],
    tip: x(
      'Termine par une préférence entre deux solutions (« I would favor… rather than… ») : c’est une conclusion concrète et nuancée.',
      'اختم بتفضيل حل على آخر («I would favor… rather than…»): خاتمة ملموسة ودقيقة.',
      'End with a preference between two solutions (“I would favor… rather than…”): a concrete, nuanced conclusion.',
      'Termina con una preferencia entre dos soluciones («I would favor… rather than…»): una conclusión concreta y matizada.',
    ),
  },
  {
    id: 'op-c1-7',
    level: 5,
    topic: x('Des centres-villes sans voitures', 'مراكز مدن بلا سيارات', 'Car-free city centers', 'Centros urbanos sin coches'),
    prompt: 'Do you agree or disagree with the following statement? Cars should be banned from city centers. Use specific reasons and examples.',
    promptHelp: x(
      'Es-tu d’accord ? Les voitures devraient être interdites dans les centres-villes. Appuie-toi sur des raisons et des exemples précis.',
      'هل توافق؟ يجب منع السيارات من مراكز المدن. استند إلى أسباب وأمثلة محددة.',
      'Do you agree? Cars should be banned from city centers. Use specific reasons and examples.',
      '¿Estás de acuerdo? Habría que prohibir los coches en los centros urbanos. Usa razones y ejemplos concretos.',
    ),
    model:
      'I largely agree, as long as the ban is introduced gradually and with good alternatives. Car-free centers are quieter, safer and much less polluted, which improves residents’ health. For example, when some cities closed their main streets to traffic, pedestrian numbers rose and many local shops actually saw their sales increase. Furthermore, the space freed from parking can become parks, terraces or cycle lanes. However, a ban only works if public transport is frequent and if exceptions exist for deliveries, emergency vehicles and people with disabilities. For these reasons, I support the idea, but not as a sudden measure.',
    keywords: ['cars|traffic|car-free', 'polluted|pollution|health|quieter', 'public transport|cycle|pedestrian'],
    tip: x(
      '« I largely agree, as long as… » : un accord conditionnel, développé ensuite par « However… only works if… ».',
      '«I largely agree, as long as…»: موافقة مشروطة تُفصّل بعد ذلك بـ «However… only works if…».',
      '“I largely agree, as long as…”: conditional agreement, developed later with “However… only works if…”.',
      '«I largely agree, as long as…»: un acuerdo condicional, desarrollado luego con «However… only works if…».',
    ),
  },
  {
    id: 'op-c1-8',
    level: 5,
    topic: x('Surveiller la productivité', 'مراقبة الإنتاجية', 'Monitoring productivity', 'Vigilar la productividad'),
    prompt: 'Should companies be allowed to use software to monitor how productive their employees are? Explain your view.',
    promptHelp: x(
      'Les entreprises devraient-elles pouvoir utiliser des logiciels pour surveiller la productivité de leurs salariés ? Explique ton point de vue.',
      'هل يجب السماح للشركات باستعمال برامج لمراقبة إنتاجية موظفيها؟ اشرح وجهة نظرك.',
      'Should companies be allowed to use software to track how productive staff are? Explain your view.',
      '¿Deberían las empresas poder usar programas para vigilar la productividad de sus empleados? Explica tu punto de vista.',
    ),
    model:
      'In my opinion, this kind of monitoring should be strictly limited. I understand that employers want to check that remote staff are working, especially when they pay for results. However, software that records every click or takes screenshots creates a climate of distrust. For instance, employees who know they are watched tend to focus on looking busy rather than on doing valuable work, which can actually reduce productivity. Besides, it raises serious privacy issues. It would be more effective to set clear objectives and evaluate results. Therefore, I believe monitoring should be transparent, limited to work tools and agreed with employee representatives.',
    keywords: ['monitoring|monitor|watched', 'privacy|distrust', 'objectives|results'],
    tip: x(
      '« I understand that…, however… » : montre que tu comprends l’autre camp avant de le contredire.',
      '«I understand that…, however…»: أظهر أنك تفهم الطرف الآخر قبل أن تخالفه.',
      '“I understand that…, however…”: show you understand the other side before you contradict it.',
      '«I understand that…, however…»: demuestra que entiendes al otro lado antes de contradecirlo.',
    ),
  },
];
