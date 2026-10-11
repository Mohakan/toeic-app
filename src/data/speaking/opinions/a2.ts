import type { OpinionTopic } from '../../../types';
import { x } from '../../curriculum/build';

export const opinionsA2: OpinionTopic[] = [
  {
    id: 'op-a2-1',
    level: 2,
    topic: x('Seul ou en équipe ?', 'بمفردك أم ضمن فريق؟', 'Alone or in a team?', '¿Solo o en equipo?'),
    prompt: 'Some people prefer to work alone. Others prefer to work in a team. Which do you prefer and why?',
    promptHelp: x(
      'Certains préfèrent travailler seuls, d’autres en équipe. Que préfères-tu et pourquoi ?',
      'يفضّل البعض العمل بمفردهم، ويفضّل آخرون العمل ضمن فريق. ماذا تفضّل ولماذا؟',
      'Some prefer working alone, others in a team. Which do you prefer and why?',
      'Unos prefieren trabajar solos y otros en equipo. ¿Qué prefieres y por qué?',
    ),
    model:
      'I prefer to work in a team. First, I think a group has more ideas than one person. For example, in my last job, we had to organize a sales event, and each colleague brought a different idea, so the event was a big success. In addition, working with others is more motivating because you can share the difficult tasks. However, teamwork needs good communication, and meetings can take a long time. But for me, the advantages are bigger. That is why I prefer teamwork.',
    keywords: ['team|teamwork|group', 'ideas|share|colleague'],
    tip: x(
      'Raconte une expérience précise (« in my last job, we had to… ») : elle vaut un argument entier.',
      'احكِ تجربة محددة («in my last job, we had to…»): فهي تساوي حجة كاملة.',
      'Tell a specific experience (“in my last job, we had to…”): it is worth a whole argument.',
      'Cuenta una experiencia concreta («in my last job, we had to…»): vale un argumento entero.',
    ),
  },
  {
    id: 'op-a2-2',
    level: 2,
    topic: x('Les magasins le dimanche', 'المحلات يوم الأحد', 'Shops on Sundays', 'Tiendas en domingo'),
    prompt: 'Should shops be open on Sundays? Give reasons and examples to support your opinion.',
    promptHelp: x(
      'Les magasins devraient-ils ouvrir le dimanche ? Justifie ton avis avec des raisons et des exemples.',
      'هل يجب أن تفتح المحلات يوم الأحد؟ برّر رأيك بأسباب وأمثلة.',
      'Should shops open on Sundays? Support your opinion with reasons and examples.',
      '¿Deberían abrir las tiendas los domingos? Justifica tu opinión con razones y ejemplos.',
    ),
    model:
      'In my opinion, shops should be open on Sundays, but only for a few hours. Many people work from Monday to Saturday, so Sunday is the only day when they can go shopping. For example, my sister is a nurse, and she often needs to buy food on Sunday morning. Also, shops can sell more and create jobs for students. On the other hand, workers need a day of rest with their families. So I think shops should open on Sunday mornings and pay their staff more.',
    keywords: ['shops|shopping', 'rest|families|workers|staff'],
    tip: x(
      'Une opinion nuancée (« but only for a few hours ») montre un bon niveau, à condition de l’expliquer.',
      'الرأي الدقيق («but only for a few hours») يدل على مستوى جيد بشرط أن تشرحه.',
      'A nuanced opinion (“but only for a few hours”) shows a good level, as long as you explain it.',
      'Una opinión matizada («but only for a few hours») muestra buen nivel, siempre que la expliques.',
    ),
  },
  {
    id: 'op-a2-3',
    level: 2,
    topic: x('En ligne ou en magasin ?', 'عبر الإنترنت أم في المتجر؟', 'Online or in a store?', '¿En línea o en tienda?'),
    prompt: 'Is it better to buy things online or in a store? Give reasons for your answer.',
    promptHelp: x(
      'Vaut-il mieux acheter en ligne ou en magasin ? Justifie ta réponse.',
      'هل الأفضل الشراء عبر الإنترنت أم في المتجر؟ برّر إجابتك.',
      'Is it better to shop online or in a store? Give reasons.',
      '¿Es mejor comprar en línea o en tienda? Justifica tu respuesta.',
    ),
    model:
      'I think it depends on the product, but in general I prefer to buy things in a store. The main reason is that I can see and touch the product before I pay. For example, when I buy shoes, I need to try them on, because sizes are different in every brand. Also, I get help from the staff. However, online shopping is faster and often cheaper for books or electronics. So I buy those online. Overall, for most things, I choose the store.',
    keywords: ['store|shop', 'online', 'cheaper|faster|try'],
    tip: x(
      '« It depends on…, but in general… » permet de répondre avec nuance tout en prenant position.',
      '«It depends on…, but in general…» تتيح إجابة دقيقة مع اتخاذ موقف.',
      '“It depends on…, but in general…” lets you answer with nuance and still take a position.',
      '«It depends on…, but in general…» permite matizar y aun así tomar postura.',
    ),
  },
  {
    id: 'op-a2-4',
    level: 2,
    topic: x('Savoir cuisiner', 'تعلّم الطبخ', 'Learning to cook', 'Saber cocinar'),
    prompt: 'Do you agree or disagree with the following statement? Everyone should learn how to cook. Give reasons and examples.',
    promptHelp: x(
      'Es-tu d’accord ? Tout le monde devrait apprendre à cuisiner. Donne des raisons et des exemples.',
      'هل توافق؟ يجب على الجميع تعلّم الطبخ. قدّم أسبابًا وأمثلة.',
      'Do you agree? Everyone should learn to cook. Give reasons and examples.',
      '¿Estás de acuerdo? Todo el mundo debería aprender a cocinar. Da razones y ejemplos.',
    ),
    model:
      'I completely agree that everyone should learn how to cook. First, cooking is good for your health, because you know what is in your food. For example, when I started cooking at university, I ate less fast food and felt more energetic. Moreover, it saves a lot of money. Cooking can also be a nice activity to share with friends. Some people say they do not have time, but simple dishes take only twenty minutes. For these reasons, I think cooking is an essential life skill.',
    keywords: ['cook|cooking', 'health|money|fast food'],
    tip: x(
      'Réponds à l’objection la plus courante (« Some people say…, but… ») avant de conclure.',
      'ردّ على الاعتراض الأكثر شيوعًا («Some people say…, but…») قبل أن تختم.',
      'Answer the most common objection (“Some people say…, but…”) before you conclude.',
      'Responde a la objeción más común («Some people say…, but…») antes de concluir.',
    ),
  },
  {
    id: 'op-a2-5',
    level: 2,
    topic: x('Une longue ou plusieurs courtes vacances ?', 'عطلة طويلة أم عدة عطل قصيرة؟', 'One long or several short holidays?', '¿Unas vacaciones largas o varias cortas?'),
    prompt: 'Is it better to take one long holiday each year or several short holidays? Why?',
    promptHelp: x(
      'Vaut-il mieux prendre une longue période de vacances par an ou plusieurs courtes ? Pourquoi ?',
      'هل الأفضل أخذ عطلة طويلة واحدة في السنة أم عدة عطل قصيرة؟ لماذا؟',
      'Is it better to take one long holiday a year or several short ones? Why?',
      '¿Es mejor tomar unas vacaciones largas al año o varias cortas? ¿Por qué?',
    ),
    model:
      'Personally, I prefer several short holidays. The reason is that I need regular breaks to stay motivated at work. For example, I take a long weekend every two or three months, and I come back to the office with more energy. In addition, short trips are easier to organize and often cheaper. However, a long holiday is better if you want to travel far, like to another continent. But in my situation, short holidays are more relaxing. That is why I choose them.',
    keywords: ['short|several', 'breaks|energy|motivated|relaxing'],
    tip: x(
      '« The reason is that… » est une variante de « because » qui structure bien le début.',
      '«The reason is that…» بديل عن «because» يُحسن تنظيم البداية.',
      '“The reason is that…” is an alternative to “because” that structures the start well.',
      '«The reason is that…» es una variante de «because» que ordena bien el comienzo.',
    ),
  },
  {
    id: 'op-a2-6',
    level: 2,
    topic: x('Le téléphone en classe', 'الهاتف في القسم', 'Phones in class', 'El móvil en clase'),
    prompt: 'Should mobile phones be banned in classrooms? Give reasons and examples to support your opinion.',
    promptHelp: x(
      'Faut-il interdire les téléphones portables en classe ? Justifie ton avis.',
      'هل يجب منع الهواتف المحمولة في الأقسام؟ برّر رأيك.',
      'Should mobile phones be banned in classrooms? Support your opinion.',
      '¿Deberían prohibirse los móviles en clase? Justifica tu opinión.',
    ),
    model:
      'In my view, phones should be banned in classrooms, except when the teacher asks students to use them. First, phones are a big distraction. For example, when I was at school, many students checked their messages during lessons and did not listen. Also, some students take photos of others without permission. On the other hand, phones can be useful for research or dictionaries. So teachers can allow them for specific activities. But in general, I believe classrooms work better without phones.',
    keywords: ['phones|phone', 'distraction|messages|listen'],
    tip: x(
      'Ajoute une exception (« except when… ») pour une position claire mais réaliste.',
      'أضف استثناءً («except when…») لموقف واضح وواقعي.',
      'Add an exception (“except when…”) for a clear but realistic position.',
      'Añade una excepción («except when…») para una postura clara pero realista.',
    ),
  },
  {
    id: 'op-a2-7',
    level: 2,
    topic: x('Habiter près du travail', 'السكن قرب العمل', 'Living near work', 'Vivir cerca del trabajo'),
    prompt: 'Would you rather live close to your workplace or far from it, in a quieter area? Explain why.',
    promptHelp: x(
      'Préférerais-tu habiter près de ton travail ou loin, dans un quartier plus calme ? Explique pourquoi.',
      'هل تفضّل السكن قرب مكان عملك أم بعيدًا عنه في منطقة أهدأ؟ اشرح السبب.',
      'Would you rather live near your workplace or far away in a quieter area? Explain why.',
      '¿Preferirías vivir cerca del trabajo o lejos, en una zona más tranquila? Explica por qué.',
    ),
    model:
      'I would rather live close to my workplace. The main reason is time. If I live near the office, I can walk or cycle, so I do not spend two hours in traffic every day. For example, my friend lives far from his company, and he leaves home at six every morning. Also, I can go home for lunch or come back quickly if there is a problem. Of course, the city center is noisier, but I can live with that. In conclusion, I choose to live near work.',
    keywords: ['close|near', 'traffic|time|walk'],
    tip: x(
      '« I would rather… » reprend la question ; utilise ensuite « If I live…, I can… » pour montrer les conséquences.',
      '«I would rather…» تعيد صياغة السؤال، ثم استعمل «If I live…, I can…» لإظهار النتائج.',
      '“I would rather…” echoes the question; then use “If I live…, I can…” to show the consequences.',
      '«I would rather…» retoma la pregunta; luego usa «If I live…, I can…» para mostrar las consecuencias.',
    ),
  },
  {
    id: 'op-a2-8',
    level: 2,
    topic: x('La tenue au travail', 'اللباس في العمل', 'Dress at work', 'La ropa en el trabajo'),
    prompt: 'Is it important to wear formal clothes at work? Give reasons and examples to support your answer.',
    promptHelp: x(
      'Est-il important de porter une tenue formelle au travail ? Justifie ta réponse.',
      'هل من المهم ارتداء لباس رسمي في العمل؟ برّر إجابتك.',
      'Is it important to wear formal clothes at work? Support your answer.',
      '¿Es importante llevar ropa formal en el trabajo? Justifica tu respuesta.',
    ),
    model:
      'I think it depends on the job. For people who meet customers, formal clothes are important because they give a professional image. For example, when I go to a bank, I trust an employee in a suit more than someone in sports clothes. However, for people who work in an office without clients, comfortable clothes are better, since they help you work well. Many companies now have casual Fridays too. So formal clothes are important only in some jobs.',
    keywords: ['formal|suit', 'customers|clients|professional', 'comfortable|casual'],
    tip: x(
      'Si tu réponds « ça dépend », distingue clairement deux cas et donne un exemple pour l’un d’eux.',
      'إذا أجبت «حسب الحالة» فميّز بوضوح بين حالتين وقدّم مثالًا لإحداهما.',
      'If you answer “it depends”, clearly separate two cases and give an example for one of them.',
      'Si respondes «depende», separa con claridad dos casos y da un ejemplo de uno.',
    ),
  },
];
