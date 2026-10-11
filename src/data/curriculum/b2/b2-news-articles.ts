import type { Unit } from '../../../types';
import { lesson, read, unit, x } from '../build';

const FACTORY = 'SFAX — Medina Foods, a family-owned maker of biscuits and snacks, announced on Monday that it will build a second factory near the city’s industrial zone. [1] The new plant, which is expected to open in late 2027, will create around 300 jobs. [2] Company director Hela Jaziri said the expansion was necessary because demand from Libya and Algeria has grown faster than expected. “Our current factory is running at full capacity, seven days a week,” she explained. [3] The project will cost about 40 million dinars, part of which will be financed by a loan from a regional development bank. [4] Local officials welcomed the news, noting that most of the new positions will be open to young graduates from the area.';

const TRANSPORT = 'TUNIS — Commuters in the capital can now plan their journeys with a single app. Launched last week by the city’s transport authority, GoTunis shows real-time arrival times for buses, the metro and the TGM train. [1] Users can also buy tickets directly on their phones, which should reduce queues at stations. [2] During a three-month trial, more than 20,000 people tested the app and suggested improvements, including an Arabic voice guide for visually impaired passengers. [3] The authority says that paper tickets will remain available for at least two more years. [4] A version for taxis is being discussed, but no date has been announced.';

const SOLAR = 'BIZERTE — The port of Bizerte will soon produce part of its own electricity. Under an agreement signed on Tuesday, a Spanish energy company will install 12,000 solar panels on the roofs of the port’s warehouses. [1] Once completed, the system is expected to cover about 35 percent of the port’s energy needs. [2] Port director Mourad Ferchichi said the project would cut costs and help the port meet new European rules on emissions, which many shipping companies now take into account when choosing where to stop. [3] Work will begin in September and should last eight months. [4] The port is also studying the possibility of offering electric charging points for trucks.';

const BOOKSTORE = 'After 25 years in business, the Kalima bookstore chain is changing its strategy. Instead of opening more large shops, the company will turn three of its eight stores into “reading cafés”, where customers can drink coffee, attend author talks and read before buying. [1] Sales manager Rim Bouaziz explained that online retailers now offer lower prices, so physical stores must give people another reason to visit. [2] A first reading café opened in La Marsa in March, and its sales have risen by 18 percent since then. [3] The remaining five stores will keep their current format for now. [4] Kalima will also start a monthly subscription that delivers two books to members’ homes.';

const OLIVE = 'SOUSSE — Olea Gold, a producer of organic olive oil, has signed its first contract with a supermarket chain in Canada. Starting in January, its oil will be sold in 150 stores across the country. [1] The company, founded in 2012 by two brothers, already exports to France, Germany and Japan. [2] To meet the larger orders, Olea Gold will buy olives from about 60 small farms in the region, in addition to its own trees. [3] Managing director Anis Mzali said the farmers would receive training to make sure their olives meet organic standards. [4] He added that the company hopes to enter the U.S. market within three years.';

const COWORKING = 'More and more freelancers in Tunis are leaving their kitchen tables for shared offices. Hub 216, which opened in the Lac district two years ago, now has 400 members, compared with 90 in its first month. [1] For a monthly fee of 250 dinars, members get a desk, fast internet and access to meeting rooms. [2] Founder Yasmine Chaabane says the community is as important as the equipment: the space organizes weekly breakfasts and workshops where members can share contacts and ideas. [3] Because of high demand, Hub 216 plans to open a second site in Sousse next year. [4] Large companies have also started renting desks there for employees who prefer not to work at home.';

const INSERT = 'In which of the positions marked [1], [2], [3] and [4] does the following sentence best belong?';

export const b2NewsArticles: Unit = unit(
  {
    id: 'b2-news-articles',
    emoji: '📰',
    level: 4,
    part: 'R7',
    title: x('Articles de presse', 'المقالات الصحفية', 'News articles', 'Artículos de prensa'),
    subtitle: x('Partie 7 : idée principale et insertion de phrase', 'الجزء 7: الفكرة الرئيسية وإدراج الجمل', 'Part 7: main idea and sentence insertion', 'Parte 7: idea principal e inserción de frases'),
    lesson: lesson(
      x('Lire un article économique et repérer l’idée principale, les détails et la place d’une phrase.', 'قراءة مقال اقتصادي وتحديد الفكرة الرئيسية والتفاصيل وموضع جملة.', 'Read a business article for the main idea, details and sentence position.', 'Leer un artículo económico y localizar la idea principal, los detalles y el lugar de una frase.'),
      [
        x('L’idée principale est presque toujours dans la première phrase de l’article.', 'الفكرة الرئيسية غالبًا ما تكون في الجملة الأولى من المقال.', 'The main idea is usually in the first sentence.', 'La idea principal casi siempre está en la primera frase del artículo.'),
        x('Pour l’insertion, cherche les mots de liaison : « this », « there », « also », « however ».', 'في الإدراج ابحث عن أدوات الربط: «this» و«there» و«also» و«however».', 'For insertion, look for links: this, there, also, however.', 'Para la inserción, busca los conectores: «this», «there», «also», «however».'),
        x('Les questions NOT demandent d’éliminer trois réponses présentes dans le texte.', 'أسئلة NOT تتطلب استبعاد ثلاث إجابات موجودة في النص.', 'NOT questions: eliminate the three mentioned options.', 'Las preguntas con NOT piden descartar tres respuestas que sí aparecen en el texto.'),
      ],
      '…will create around 300 jobs. Recruitment is expected to begin next spring.',
      x('« Recruitment » reprend l’idée des emplois de la phrase précédente.', '«Recruitment» تستأنف فكرة الوظائف في الجملة السابقة.', '“Recruitment” links to “jobs”.', '«Recruitment» retoma la idea de los empleos de la frase anterior.'),
    ),
  },
  [
    read('b2-na-r1', 'R7', 4, FACTORY, 'What is the article mainly about?', ['A company’s plan to increase production', 'A new biscuit recipe', 'The closing of a factory', 'A change of company director'], x(
      'Première phrase : construction d’une deuxième usine.',
      'الجملة الأولى: بناء مصنع ثانٍ.',
      'A second factory is planned.',
      'Primera frase: construcción de una segunda fábrica.',
    )),
    read('b2-na-r2', 'R7', 4, FACTORY, 'Why is Medina Foods building a new factory?', ['Demand from abroad has increased', 'Its old factory is unsafe', 'The government asked it to', 'It is moving to Libya'], x(
      '« Demand from Libya and Algeria has grown faster than expected ».',
      '«Demand from Libya and Algeria has grown faster than expected»: الطلب الخارجي ارتفع.',
      'Foreign demand grew.',
      '«Demand from Libya and Algeria has grown faster than expected»: la demanda exterior creció.',
    )),
    read('b2-na-r3', 'R7', 4, FACTORY, 'What is indicated about the current factory?', ['It operates every day', 'It will close in 2027', 'It is located in Algeria', 'It employs 300 people'], x(
      '« Seven days a week ». Les 300 emplois concernent la nouvelle usine.',
      '«Seven days a week». أما 300 وظيفة فتخص المصنع الجديد.',
      'It runs seven days a week.',
      '«Seven days a week». Los 300 empleos son de la nueva fábrica.',
    )),
    read('b2-na-r4', 'R7', 4, FACTORY, 'How will part of the project be paid for?', ['With a bank loan', 'With a government grant', 'By selling the old factory', 'By finding new shareholders'], x(
      '« Financed by a loan from a regional development bank ».',
      '«Financed by a loan from a regional development bank»: قرض بنكي.',
      'A loan from a bank.',
      '«Financed by a loan from a regional development bank»: un préstamo bancario.',
    )),
    read('b2-na-r5', 'R7', 4, FACTORY, `${INSERT} “Recruitment is expected to begin next spring.”`, ['[2]', '[1]', '[3]', '[4]'], x(
      'Le recrutement suit logiquement l’annonce des 300 emplois, juste avant [2].',
      'التوظيف يأتي منطقيًا بعد الإعلان عن 300 وظيفة، أي قبل [2] مباشرة.',
      'Right after the 300 jobs.',
      'La contratación sigue lógicamente al anuncio de los 300 empleos, justo antes de [2].',
    )),
    read('b2-na-r6', 'R7', 4, TRANSPORT, 'What is GoTunis?', ['A public transport app', 'A taxi company', 'A new train line', 'A ticket office'], x(
      'Une application pour bus, métro et TGM.',
      'تطبيق للحافلات والمترو والقطار.',
      'An app for public transport.',
      'Una aplicación para autobús, metro y TGM.',
    )),
    read('b2-na-r7', 'R7', 4, TRANSPORT, 'What benefit of the app is mentioned?', ['Shorter lines at stations', 'Cheaper tickets', 'Free taxi rides', 'Faster trains'], x(
      '« Should reduce queues at stations » = moins d’attente.',
      '«Should reduce queues at stations» = طوابير أقصر.',
      'Fewer queues.',
      '«Should reduce queues at stations» = menos colas.',
    )),
    read('b2-na-r8', 'R7', 4, TRANSPORT, 'What is stated about the trial period?', ['Users helped improve the app', 'It lasted one year', 'It was only for taxi drivers', 'It was cancelled early'], x(
      '« Tested the app and suggested improvements ».',
      '«Tested the app and suggested improvements»: اقترحوا تحسينات.',
      'Testers suggested improvements.',
      '«Tested the app and suggested improvements»: propusieron mejoras.',
    )),
    read('b2-na-r9', 'R7', 4, TRANSPORT, 'What is true about paper tickets?', ['They will still be sold for a while', 'They are no longer accepted', 'They cost more than mobile tickets', 'They are only for tourists'], x(
      '« Will remain available for at least two more years ».',
      '«Will remain available for at least two more years»: ستبقى متاحة.',
      'Available for two more years.',
      '«Will remain available for at least two more years»: seguirán disponibles.',
    )),
    read('b2-na-r10', 'R7', 4, TRANSPORT, `${INSERT} “This feature was added to the final version.”`, ['[3]', '[1]', '[2]', '[4]'], x(
      '« This feature » renvoie au guide vocal en arabe, mentionné juste avant [3].',
      '«This feature» تعود إلى الدليل الصوتي بالعربية المذكور قبل [3].',
      '“This feature” = the voice guide.',
      '«This feature» remite a la guía de voz en árabe, citada justo antes de [3].',
    )),
  ],
  [
    read('b2-na-s2-r1', 'R7', 4, SOLAR, 'What is the article mainly about?', ['An energy project at a port', 'A new shipping route', 'A port in Spain', 'Electric trucks'], x(
      'Installation de panneaux solaires au port de Bizerte.',
      'تركيب ألواح شمسية في ميناء بنزرت.',
      'Solar panels at the port.',
      'Instalación de paneles solares en el puerto de Bizerta.',
    )),
    read('b2-na-s2-r2', 'R7', 4, SOLAR, 'How much of the port’s energy will the system provide?', ['About a third', 'All of it', 'About half', 'About ten percent'], x(
      '35 % ≈ un tiers : reformulation typique du TOEIC.',
      '35% ≈ الثلث: إعادة صياغة نموذجية في TOEIC.',
      '35% is about a third.',
      '35 % ≈ un tercio: reformulación típica del TOEIC.',
    )),
    read('b2-na-s2-r3', 'R7', 4, SOLAR, 'Why are the European rules important for the port?', ['Shipping companies take them into account', 'They ban solar panels', 'They require a Spanish partner', 'They reduce port taxes'], x(
      '« Which many shipping companies now take into account when choosing where to stop ».',
      '«Which many shipping companies now take into account»: شركات الشحن تأخذها بعين الاعتبار.',
      'Shipping firms consider them.',
      '«Which many shipping companies now take into account»: las navieras las tienen en cuenta.',
    )),
    read('b2-na-s2-r4', 'R7', 4, SOLAR, 'When will the work probably be finished?', ['Around May of the following year', 'In September', 'Next Tuesday', 'In eight years'], x(
      'Début en septembre + huit mois → vers mai.',
      'البداية في سبتمبر + ثمانية أشهر ← حوالي ماي.',
      'September plus eight months.',
      'Empieza en septiembre + ocho meses → hacia mayo.',
    )),
    read('b2-na-s2-r5', 'R7', 4, SOLAR, `${INSERT} “The installation will not require any changes to the buildings.”`, ['[1]', '[2]', '[3]', '[4]'], x(
      '« The buildings » renvoie aux entrepôts dont les toits recevront les panneaux, juste avant [1].',
      '«The buildings» تعود إلى المستودعات التي ستُركّب الألواح على أسطحها، قبل [1].',
      '“The buildings” = the warehouses.',
      '«The buildings» remite a los almacenes cuyos tejados recibirán los paneles, justo antes de [1].',
    )),
    read('b2-na-s2-r6', 'R7', 4, BOOKSTORE, 'What is Kalima doing?', ['Turning some stores into cafés', 'Closing all its stores', 'Selling only online', 'Opening eight new stores'], x(
      '« Turn three of its eight stores into reading cafés ».',
      '«Turn three of its eight stores into reading cafés»: تحويل بعض المتاجر.',
      'Three stores become cafés.',
      '«Turn three of its eight stores into reading cafés»: transformar algunas tiendas.',
    )),
    read('b2-na-s2-r7', 'R7', 4, BOOKSTORE, 'According to Ms. Bouaziz, why is the change needed?', ['Online shops are cheaper', 'Coffee is very popular', 'Rents have increased', 'Authors want more events'], x(
      '« Online retailers now offer lower prices ».',
      '«Online retailers now offer lower prices»: المتاجر الإلكترونية أرخص.',
      'Online prices are lower.',
      '«Online retailers now offer lower prices»: las tiendas en línea son más baratas.',
    )),
    read('b2-na-s2-r8', 'R7', 4, BOOKSTORE, 'What is suggested about the La Marsa store?', ['The new format seems successful', 'It will close soon', 'It is the chain’s largest store', 'It sells only coffee'], x(
      'Ventes en hausse de 18 % → succès.',
      'ارتفاع المبيعات بـ 18% ← نجاح.',
      'Sales are up 18%.',
      'Ventas un 18 % más altas → éxito.',
    )),
    read('b2-na-s2-r9', 'R7', 4, BOOKSTORE, 'How many stores will become reading cafés?', ['Three', 'Five', 'Eight', 'Twenty-five'], x(
      'Trois sur huit ; cinq gardent leur format.',
      'ثلاثة من ثمانية، وخمسة تحتفظ بشكلها.',
      'Three of the eight.',
      'Tres de ocho; cinco mantienen su formato.',
    )),
    read('b2-na-s2-r10', 'R7', 4, BOOKSTORE, `${INSERT} “Customers there now stay twice as long, on average.”`, ['[3]', '[1]', '[2]', '[4]'], x(
      '« There » renvoie au café de La Marsa, mentionné juste avant [3].',
      '«There» تعود إلى مقهى المرسى المذكور قبل [3].',
      '“There” = La Marsa.',
      '«There» remite al café de La Marsa, citado justo antes de [3].',
    )),
  ],
  [
    read('b2-na-s3-r1', 'R7', 4, OLIVE, 'What is the article mainly about?', ['A new export agreement', 'A family dispute', 'An olive harvest festival', 'A new supermarket in Sousse'], x(
      'Premier contrat avec une chaîne canadienne.',
      'أول عقد مع سلسلة كندية.',
      'A contract with a Canadian chain.',
      'Primer contrato con una cadena canadiense.',
    )),
    read('b2-na-s3-r2', 'R7', 4, OLIVE, 'Where does Olea Gold NOT currently sell its oil?', ['The United States', 'France', 'Germany', 'Japan'], x(
      'Les États-Unis sont un objectif futur (« within three years »).',
      'الولايات المتحدة هدف مستقبلي («within three years»).',
      'The U.S. is a future goal.',
      'Estados Unidos es un objetivo futuro («within three years»).',
    )),
    read('b2-na-s3-r3', 'R7', 4, OLIVE, 'Why will the company buy olives from other farms?', ['To handle bigger orders', 'Because its trees are sick', 'To lower its prices', 'Because of a poor harvest'], x(
      '« To meet the larger orders ».',
      '«To meet the larger orders»: لتلبية طلبيات أكبر.',
      'Larger orders.',
      '«To meet the larger orders»: para atender pedidos mayores.',
    )),
    read('b2-na-s3-r4', 'R7', 4, OLIVE, 'What will the farmers receive?', ['Training', 'New trees', 'Shares in the company', 'Free transport'], x(
      '« The farmers would receive training ».',
      '«The farmers would receive training»: تكوين.',
      'They will be trained.',
      '«The farmers would receive training»: formación.',
    )),
    read('b2-na-s3-r5', 'R7', 4, OLIVE, `${INSERT} “The Canadian deal, however, is its largest so far.”`, ['[2]', '[1]', '[3]', '[4]'], x(
      'Après la liste des pays d’export, « however » oppose le contrat canadien plus important.',
      'بعد قائمة دول التصدير، «however» تقابلها بالعقد الكندي الأكبر.',
      'After the export list.',
      'Tras la lista de países, «however» contrapone el contrato canadiense, el mayor.',
    )),
    read('b2-na-s3-r6', 'R7', 4, COWORKING, 'What is Hub 216?', ['A shared workspace', 'A restaurant', 'An internet provider', 'A training school'], x(
      '« Shared offices » = espace de coworking.',
      '«Shared offices» = فضاء عمل مشترك.',
      'A coworking space.',
      '«Shared offices» = espacio de coworking.',
    )),
    read('b2-na-s3-r7', 'R7', 4, COWORKING, 'How has Hub 216 changed since it opened?', ['It has many more members', 'It has moved to Sousse', 'It has lowered its fees', 'It has closed its meeting rooms'], x(
      'De 90 à 400 membres.',
      'من 90 إلى 400 عضو.',
      'From 90 to 400 members.',
      'De 90 a 400 miembros.',
    )),
    read('b2-na-s3-r8', 'R7', 4, COWORKING, 'According to Ms. Chaabane, what is valuable about Hub 216?', ['The relationships between members', 'Its low price', 'Its location near the sea', 'Its large kitchen'], x(
      '« The community is as important as the equipment ».',
      '«The community is as important as the equipment»: العلاقات بين الأعضاء.',
      'The community.',
      '«The community is as important as the equipment»: la comunidad.',
    )),
    read('b2-na-s3-r9', 'R7', 4, COWORKING, 'What is indicated about large companies?', ['Some rent desks for their staff', 'They are building their own hubs', 'They do not allow remote work', 'They organize the breakfasts'], x(
      '« Large companies have also started renting desks there ».',
      '«Large companies have also started renting desks there»: تستأجر مكاتب.',
      'They rent desks.',
      '«Large companies have also started renting desks there»: alquilan puestos.',
    )),
    read('b2-na-s3-r10', 'R7', 4, COWORKING, `${INSERT} “Day passes are also available for 20 dinars.”`, ['[2]', '[1]', '[3]', '[4]'], x(
      '« Also » + tarif → juste après le prix mensuel, avant [2].',
      '«Also» + سعر ← مباشرة بعد السعر الشهري، أي قبل [2].',
      'Right after the monthly fee.',
      '«Also» + tarifa → justo después del precio mensual, antes de [2].',
    )),
  ],
);
