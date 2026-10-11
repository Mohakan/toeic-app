import type { OpinionTopic } from '../../../types';
import { x } from '../../curriculum/build';

export const opinionsA1: OpinionTopic[] = [
  {
    id: 'op-a1-1',
    level: 1,
    topic: x('Le matin ou le soir ?', 'الصباح أم المساء؟', 'Morning or evening?', '¿Mañana o noche?'),
    prompt: 'Do you prefer to work in the morning or in the evening? Give reasons and examples to support your answer.',
    promptHelp: x(
      'Préfères-tu travailler le matin ou le soir ? Donne des raisons et des exemples.',
      'هل تفضّل العمل في الصباح أم في المساء؟ قدّم أسبابًا وأمثلة.',
      'Do you prefer working in the morning or in the evening? Give reasons and examples.',
      '¿Prefieres trabajar por la mañana o por la noche? Da razones y ejemplos.',
    ),
    model:
      'I prefer to work in the morning. First, I feel fresh because I sleep well at night. For example, I can read long emails at eight o’clock very quickly. Also, the office is quiet in the morning, so I do not lose time. In the evening, I am tired, and I make more mistakes. But some people work better at night, and that is fine. For these reasons, I always start my day early and do my difficult work first.',
    keywords: ['morning', 'tired|fresh|quiet'],
    tip: x(
      'Plan simple : « I prefer… » → une raison avec « because » → un exemple avec « For example » → « Also… » → une conclusion.',
      'خطة بسيطة: «I prefer…» ← سبب مع «because» ← مثال مع «For example» ← «Also…» ← خاتمة.',
      'A simple plan: “I prefer…” → a reason with “because” → an example with “For example” → “Also…” → a conclusion.',
      'Un plan sencillo: «I prefer…» → una razón con «because» → un ejemplo con «For example» → «Also…» → una conclusión.',
    ),
  },
  {
    id: 'op-a1-2',
    level: 1,
    topic: x('La ville ou la campagne ?', 'المدينة أم الريف؟', 'City or countryside?', '¿Ciudad o campo?'),
    prompt: 'Is it better to live in a big city or in a small town? Give reasons and examples to support your opinion.',
    promptHelp: x(
      'Vaut-il mieux vivre dans une grande ville ou dans une petite ville ? Justifie ton avis.',
      'هل الأفضل العيش في مدينة كبيرة أم في بلدة صغيرة؟ برّر رأيك.',
      'Is it better to live in a big city or a small town? Support your opinion.',
      '¿Es mejor vivir en una ciudad grande o en un pueblo? Justifica tu opinión.',
    ),
    model:
      'In my opinion, it is better to live in a small town. The main reason is the calm. Life is slower, and people know their neighbors. For example, in my grandparents’ town, people say hello in the street every day. Also, houses are cheaper, so families can have a garden. Of course, a big city has more jobs and shops, but it is noisy and expensive. That is why I want to live in a small town in the future.',
    keywords: ['small town|city', 'cheap|cheaper|expensive|noisy|calm'],
    tip: x(
      'Cite l’autre option avec « Of course…, but… » : ta réponse paraît plus juste et plus riche.',
      'اذكر الخيار الآخر بـ «Of course…, but…» لتبدو إجابتك أكثر توازنًا وثراءً.',
      'Mention the other option with “Of course…, but…”: your answer sounds fairer and richer.',
      'Menciona la otra opción con «Of course…, but…»: tu respuesta suena más justa y rica.',
    ),
  },
  {
    id: 'op-a1-3',
    level: 1,
    topic: x('Le train ou la voiture ?', 'القطار أم السيارة؟', 'Train or car?', '¿Tren o coche?'),
    prompt: 'For a long trip, do you prefer to travel by train or by car? Why?',
    promptHelp: x(
      'Pour un long voyage, préfères-tu le train ou la voiture ? Pourquoi ?',
      'في رحلة طويلة، هل تفضّل القطار أم السيارة؟ لماذا؟',
      'For a long trip, do you prefer the train or the car? Why?',
      'Para un viaje largo, ¿prefieres el tren o el coche? ¿Por qué?',
    ),
    model:
      'I prefer to travel by train. First, it is relaxing because I do not need to drive. For example, last summer I took the train to the coast, and I read a book and looked at the sea. Also, the train is often cheaper than fuel and parking. However, a car is useful when you travel with a big family or when there is no station. But for most long trips, I think the train is the best choice.',
    keywords: ['train', 'relax|relaxing|cheaper|drive'],
    tip: x(
      'Un souvenir au passé (« last summer I took… ») est un excellent exemple concret.',
      'ذكرى في الماضي («last summer I took…») مثال ملموس ممتاز.',
      'A memory in the past tense (“last summer I took…”) is an excellent concrete example.',
      'Un recuerdo en pasado («last summer I took…») es un ejemplo concreto excelente.',
    ),
  },
  {
    id: 'op-a1-4',
    level: 1,
    topic: x('L’anglais pour les enfants', 'الإنجليزية للأطفال', 'English for children', 'Inglés para niños'),
    prompt: 'Do you agree or disagree with the following statement? Children should start learning English when they are very young. Give reasons for your answer.',
    promptHelp: x(
      'Es-tu d’accord ? Les enfants devraient commencer l’anglais très jeunes. Justifie ta réponse.',
      'هل توافق؟ يجب أن يبدأ الأطفال تعلّم الإنجليزية في سن صغيرة جدًا. برّر إجابتك.',
      'Do you agree? Children should start English very young. Give reasons.',
      '¿Estás de acuerdo? Los niños deberían empezar inglés muy pequeños. Justifica tu respuesta.',
    ),
    model:
      'I agree with this statement. Young children learn languages easily because they are not afraid to make mistakes. For example, my little cousin is six, and he already sings English songs with a good accent. Also, English is useful for travel, for the internet and later for work. Of course, children must learn their own language well too, but they can learn two languages at the same time. So I think schools should teach English early.',
    keywords: ['children|young', 'easily|easy|mistakes|songs'],
    tip: x(
      'Pour « agree or disagree », dis ta position dès la première phrase : « I agree with this statement ».',
      'في سؤال «agree or disagree» اذكر موقفك من الجملة الأولى: «I agree with this statement».',
      'For “agree or disagree”, give your position in the first sentence: “I agree with this statement”.',
      'En «agree or disagree», da tu postura en la primera frase: «I agree with this statement».',
    ),
  },
  {
    id: 'op-a1-5',
    level: 1,
    topic: x('Avoir un animal', 'تربية حيوان أليف', 'Having a pet', 'Tener una mascota'),
    prompt: 'Is it a good idea for a family to have a pet? Give reasons and examples to support your opinion.',
    promptHelp: x(
      'Est-ce une bonne idée pour une famille d’avoir un animal de compagnie ? Justifie ton avis.',
      'هل من الجيد أن تربي العائلة حيوانًا أليفًا؟ برّر رأيك.',
      'Is it a good idea for a family to have a pet? Support your opinion.',
      '¿Es buena idea que una familia tenga una mascota? Justifica tu opinión.',
    ),
    model:
      'I think it is a good idea. A pet makes a family happy because it is a friend for everyone. For example, our cat waits for us at the door every evening. In addition, children learn to be responsible, since they must give food and water to the animal. However, a pet needs time and money, and some flats are too small for a dog. So families should choose the right animal, but I believe a pet is a great idea.',
    keywords: ['pet|cat|dog|animal', 'responsible|happy|friend'],
    tip: x(
      '« In addition » et « since » rendent ta réponse plus riche que « and » et « because » répétés.',
      '«In addition» و«since» تُغني إجابتك أكثر من تكرار «and» و«because».',
      '“In addition” and “since” make your answer richer than repeating “and” and “because”.',
      '«In addition» y «since» enriquecen tu respuesta más que repetir «and» y «because».',
    ),
  },
  {
    id: 'op-a1-6',
    level: 1,
    topic: x('Manger chez soi ou au restaurant ?', 'الأكل في البيت أم في المطعم؟', 'Home or restaurant?', '¿Comer en casa o en un restaurante?'),
    prompt: 'Do you prefer to eat at home or at a restaurant? Give reasons and examples to support your answer.',
    promptHelp: x(
      'Préfères-tu manger chez toi ou au restaurant ? Donne des raisons et des exemples.',
      'هل تفضّل الأكل في البيت أم في المطعم؟ قدّم أسبابًا وأمثلة.',
      'Do you prefer eating at home or at a restaurant? Give reasons and examples.',
      '¿Prefieres comer en casa o en un restaurante? Da razones y ejemplos.',
    ),
    model:
      'Personally, I prefer to eat at home. First, home food is healthy because I choose fresh vegetables and less oil. For example, my mother cooks couscous with a lot of vegetables every Friday. Also, it is cheaper, so I can save money. But I go to a restaurant sometimes, for a birthday or with friends, because it is fun and I do not need to wash the dishes. Overall, I eat at home most of the time.',
    keywords: ['home', 'healthy|cheaper|money|fresh'],
    tip: x(
      'Un exemple tiré de ta vie (un plat de famille) est plus convaincant qu’une idée générale.',
      'مثال من حياتك (طبق عائلي) أقوى إقناعًا من فكرة عامة.',
      'An example from your life (a family dish) is more convincing than a general idea.',
      'Un ejemplo de tu vida (un plato familiar) convence más que una idea general.',
    ),
  },
  {
    id: 'op-a1-7',
    level: 1,
    topic: x('Le sport pour tous', 'الرياضة للجميع', 'Sport for everyone', 'Deporte para todos'),
    prompt: 'Is it important for everyone to do sport? Why or why not?',
    promptHelp: x(
      'Est-il important que tout le monde fasse du sport ? Pourquoi ?',
      'هل من المهم أن يمارس الجميع الرياضة؟ لماذا؟',
      'Is it important for everyone to do sport? Why or why not?',
      '¿Es importante que todo el mundo haga deporte? ¿Por qué?',
    ),
    model:
      'Yes, I believe sport is important for everyone. The first reason is health. When you do sport, your heart is strong, and you sleep better. For example, my father walks for thirty minutes every day, and he feels much better now. Another reason is stress. After a football match with friends, I feel relaxed. However, people do not need to do difficult sports. A short walk or swimming is enough. That is why everyone can do some sport.',
    keywords: ['health|healthy', 'stress|relaxed|walk'],
    tip: x(
      '« The first reason is… Another reason is… » structure clairement deux arguments.',
      '«The first reason is… Another reason is…» تنظّم حجتين بوضوح.',
      '“The first reason is… Another reason is…” clearly structures two arguments.',
      '«The first reason is… Another reason is…» ordena con claridad dos argumentos.',
    ),
  },
  {
    id: 'op-a1-8',
    level: 1,
    topic: x('Livres ou films ?', 'الكتب أم الأفلام؟', 'Books or films?', '¿Libros o películas?'),
    prompt: 'Do you prefer reading books or watching films? Give reasons and examples to support your choice.',
    promptHelp: x(
      'Préfères-tu lire des livres ou regarder des films ? Justifie ton choix.',
      'هل تفضّل قراءة الكتب أم مشاهدة الأفلام؟ برّر اختيارك.',
      'Do you prefer reading books or watching films? Support your choice.',
      '¿Prefieres leer libros o ver películas? Justifica tu elección.',
    ),
    model:
      'I prefer watching films. First, a film is short, so I can watch it in the evening after work. Also, I love the music and the images. For example, I watched an animated film with my family last weekend, and we all laughed together. Books are good too, because they help you learn new words. But when I am tired, a book is difficult for me. For these reasons, I choose films.',
    keywords: ['films|film|movies', 'books|book|read'],
    tip: x(
      'Termine par « For these reasons, I choose… » : c’est une conclusion claire en une phrase.',
      'اختم بـ «For these reasons, I choose…»: خاتمة واضحة في جملة واحدة.',
      'End with “For these reasons, I choose…”: a clear one-sentence conclusion.',
      'Termina con «For these reasons, I choose…»: una conclusión clara en una frase.',
    ),
  },
];
