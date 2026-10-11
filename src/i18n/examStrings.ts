import type { ExamId } from '../exams/catalog';
import type { StringKey } from './strings';

type Entry = readonly [fr: string, ar: string, en: string, es: string];

/**
 * Texts that differ from one app of the family to another (the exam's name, its parts, the
 * content figures). A key listed here replaces the shared text in that app only; the TOEIC app
 * uses the shared texts of strings.ts. examStrings.test.ts checks that no TOEIC wording is left in
 * the other apps.
 */
export const EXAM_STRINGS: Partial<Record<ExamId, Partial<Record<StringKey, Entry>>>> = {
  b2First: {
    'app.name': ['Toki Quest B2', 'Toki Quest B2', 'Toki Quest B2', 'Toki Quest B2'],
    'welcome.title': [
      'Décroche ton B2 First en t’amusant',
      'احصل على شهادة B2 First وأنت تستمتع',
      'Pass B2 First while having fun',
      'Aprueba el B2 First divirtiéndote',
    ],
    'welcome.sub': [
      'Un test de niveau intelligent, des mini-jeux quotidiens et un parcours sur toutes les parties de lecture, de langue et d’écoute du B2 First de Cambridge.',
      'اختبار مستوى ذكي، ألعاب قصيرة يوميًا ومسار يغطي كل أجزاء القراءة واللغة والاستماع في امتحان B2 First من كامبريدج.',
      'A smart placement test, daily mini-games and a path through every Reading and Use of English and Listening part of Cambridge B2 First.',
      'Un test de nivel inteligente, minijuegos diarios y un itinerario por todas las partes de lectura, uso del inglés y comprensión auditiva del B2 First de Cambridge.',
    ],
    'welcome.n.units': ['12 unités sur les 11 parties de l’examen', '12 وحدة تغطي أجزاء الامتحان الأحد عشر', '12 units on the 11 exam parts', '12 unidades sobre las 11 partes del examen'],
    'welcome.n.words': ['1 000 mots d’anglais utiles', '1000 كلمة إنجليزية مفيدة', '1,000 useful English words', '1000 palabras útiles en inglés'],
    'welcome.n.mocks': ['2 examens blancs chronométrés', 'اختباران تجريبيان بالتوقيت', '2 timed practice tests', '2 exámenes de práctica cronometrados'],
    'welcome.free.3': ['Les corrections expliquées dans ta langue', 'تصحيحات مشروحة بلغتك', 'Corrections explained in your language', 'Correcciones explicadas en tu idioma'],
    'welcome.free.4': ['Le premier examen blanc mini', 'الاختبار التجريبي المصغّر الأول', 'The first mini practice test', 'El primer examen de práctica mini'],
    'welcome.full.1': ['Les 12 unités, de B1 à C1', 'الوحدات الاثنتا عشرة من B1 إلى C1', 'All 12 units, from B1 to C1', 'Las 12 unidades, de B1 a C1'],
    'welcome.full.2': ['Le deuxième examen blanc, avec rapport par partie', 'الاختبار التجريبي الثاني مع تقرير لكل جزء', 'The second practice test, with a report by part', 'El segundo examen de práctica, con informe por parte'],
    'welcome.full.3': [
      'Les textes à trous, la formation des mots et les transformations corrigés mot à mot',
      'النصوص ذات الفراغات وتكوين الكلمات وإعادة الصياغة مصحّحة كلمة بكلمة',
      'Cloze texts, word formation and transformations checked word by word',
      'Textos con huecos, formación de palabras y transformaciones corregidos palabra por palabra',
    ],
    'result.score': ['Score estimé (Cambridge English Scale)', 'النتيجة المقدّرة (سلّم كامبريدج)', 'Estimated score (Cambridge English Scale)', 'Puntuación estimada (Cambridge English Scale)'],
    'pay.sub': [
      'Tout le parcours et tous les examens blancs, avec Toki à tes côtés jusqu’au jour de l’examen.',
      'المسار كاملًا وكل الاختبارات التجريبية، مع توكي إلى جانبك حتى يوم الامتحان.',
      'The whole path and every practice test, with Toki by your side until exam day.',
      'Todo el itinerario y todos los exámenes de práctica, con Toki a tu lado hasta el día del examen.',
    ],
    'pay.reason.mock': [
      'Cet examen blanc fait partie du plan complet. Le premier examen blanc reste gratuit.',
      'هذا الاختبار التجريبي ضمن الخطة الكاملة. يبقى الاختبار التجريبي الأول مجانيًا.',
      'This practice test is part of the full plan. The first practice test stays free.',
      'Este examen de práctica forma parte del plan completo. El primero sigue siendo gratuito.',
    ],
    'pay.reason.mockDone': [
      'Ton score est une première mesure. Avec le plan complet, un deuxième examen blanc et tout le parcours t’aident à progresser jusqu’au jour de l’examen.',
      'نتيجتك قياس أول. مع الخطة الكاملة، يساعدك اختبار تجريبي ثانٍ والمسار كاملًا على التقدّم حتى يوم الامتحان.',
      'Your score is a first measure. With the full plan, a second practice test and the whole path help you progress until exam day.',
      'Tu puntuación es una primera medida. Con el plan completo, un segundo examen de práctica y todo el itinerario te ayudan a progresar hasta el día del examen.',
    ],
    'pay.b.units': ['12 unités sur les 11 parties de l’examen, de B1 à C1', '12 وحدة تغطي أجزاء الامتحان الأحد عشر من B1 إلى C1', '12 units on the 11 exam parts, from B1 to C1', '12 unidades sobre las 11 partes del examen, de B1 a C1'],
    'pay.b.mocks': ['2 examens blancs chronométrés, avec rapport par partie', 'اختباران تجريبيان بالتوقيت مع تقرير لكل جزء', '2 timed practice tests, with a report by part', '2 exámenes de práctica cronometrados, con informe por parte'],
    'access.trialBanner': [
      'Essai gratuit : 4 unités à ton niveau et le premier examen blanc.',
      'تجربة مجانية: 4 وحدات في مستواك والاختبار التجريبي الأول.',
      'Free trial: 4 units at your level and the first practice test.',
      'Prueba gratuita: 4 unidades a tu nivel y el primer examen de práctica.',
    ],
    'words.title': ['Mes mots d’anglais', 'كلماتي الإنجليزية', 'My English words', 'Mis palabras en inglés'],
    'progress.tipText': [
      'Au B2 First, lis d’abord la question, puis le texte : tu chercheras l’idée reformulée au lieu des mêmes mots.',
      'في B2 First، اقرأ السؤال أولًا ثم النص: ستبحث عن الفكرة المعاد صياغتها بدل الكلمات نفسها.',
      'In B2 First, read the question first, then the text: look for the idea in other words, not the same words.',
      'En el B2 First, lee primero la pregunta y luego el texto: busca la idea con otras palabras, no las mismas palabras.',
    ],
    'profile.about': [
      'Application indépendante de préparation au B2 First. Non affiliée à Cambridge University Press & Assessment.',
      'تطبيق مستقل للتحضير لامتحان B2 First. غير تابع لـ Cambridge University Press & Assessment.',
      'Independent B2 First preparation app. Not affiliated with Cambridge University Press & Assessment.',
      'Aplicación independiente de preparación al B2 First. No está afiliada a Cambridge University Press & Assessment.',
    ],
    'method.estimate.b': [
      'Ton niveau est estimé par la méthode bayésienne EAP, qui donne aussi une erreur type. Avant ta première réponse, le modèle part d’un niveau intermédiaire, et non d’un niveau élevé. Le test s’arrête quand la précision est suffisante ou après 30 questions, et ton score est affiché avec un intervalle de confiance à 90 %.',
      'يُقدَّر مستواك بالطريقة البايزية EAP التي تعطي أيضًا خطأً معياريًا. قبل إجابتك الأولى ينطلق النموذج من مستوى متوسط لا من مستوى مرتفع. يتوقف الاختبار عند بلوغ دقة كافية أو بعد 30 سؤالًا، وتُعرض نتيجتك مع مجال ثقة بنسبة 90%.',
      'Your level is estimated with the Bayesian EAP method, which also yields a standard error. Before your first answer, the model starts from an intermediate level, not from a high one. The test stops when precision is sufficient or after 30 questions, and your score is shown with a 90% confidence interval.',
      'Tu nivel se estima con el método bayesiano EAP, que también da un error típico. Antes de tu primera respuesta, el modelo parte de un nivel intermedio, no de uno alto. El test se detiene cuando la precisión es suficiente o tras 30 preguntas, y tu puntuación se muestra con un intervalo de confianza del 90 %.',
    ],
    'method.scale.t': ['5. Du niveau au score Cambridge', '5. من المستوى إلى نتيجة كامبريدج', '5. From level to Cambridge score', '5. Del nivel a la puntuación Cambridge'],
    'method.scale.b': [
      'Comme au vrai B2 First, tes scores sont donnés sur la Cambridge English Scale (122 à 190), pour la lecture et la langue d’une part, l’écoute d’autre part ; ton score global en est la moyenne. B1 dès 140, B2 dès 160 (examen réussi, grade C), grade B dès 173, C1 et grade A dès 180.',
      'كما في امتحان B2 First الحقيقي، تُعطى نتائجك على سلّم Cambridge English Scale (من 122 إلى 190)، للقراءة واللغة من جهة وللاستماع من جهة أخرى، ونتيجتك الإجمالية هي معدّلهما. B1 من 140، وB2 من 160 (نجاح بالدرجة C)، والدرجة B من 173، وC1 والدرجة A من 180.',
      'As in the real B2 First, your scores are on the Cambridge English Scale (122-190), one for Reading and Use of English and one for Listening; your overall score is their mean. B1 from 140, B2 from 160 (pass, grade C), grade B from 173, C1 and grade A from 180.',
      'Como en el B2 First real, tus puntuaciones están en la Cambridge English Scale (de 122 a 190), una para Reading and Use of English y otra para Listening; tu puntuación global es su media. B1 desde 140, B2 desde 160 (aprobado, nota C), nota B desde 173, C1 y nota A desde 180.',
    ],
    'method.limits.b': [
      'Les paramètres des questions sont provisoires, fixés par niveau. Avant tout usage officiel, ils doivent être calibrés sur 300 à 500 candidats réels, avec une analyse de biais entre groupes linguistiques — francophones, arabophones, hispanophones (DIF) et une comparaison avec des résultats officiels. Le score affiché reste une estimation, pas un résultat de Cambridge. L’écrit (Writing) et l’oral (Speaking) ne sont pas encore évalués.',
      'معاملات الأسئلة مؤقتة ومحددة حسب المستوى. قبل أي استعمال رسمي يجب معايرتها على 300 إلى 500 مترشح حقيقي، مع تحليل التحيّز بين المجموعات اللغوية — الناطقين بالفرنسية والعربية والإسبانية (DIF) ومقارنة بنتائج رسمية. تبقى النتيجة المعروضة تقديرًا لا نتيجة من كامبريدج. ولا يُقيَّم الإنشاء الكتابي (Writing) ولا التعبير الشفهي (Speaking) بعد.',
      'Item parameters are provisional, set by level. Before any official use they must be calibrated on 300 to 500 real candidates, with a bias analysis across language groups — French, Arabic and Spanish speakers (DIF) and a comparison with official results. The score shown is an estimate, not a Cambridge result. Writing and Speaking are not assessed yet.',
      'Los parámetros de las preguntas son provisionales y se fijan por nivel. Antes de cualquier uso oficial deben calibrarse con 300 a 500 candidatos reales, con un análisis de sesgo entre grupos lingüísticos — francófonos, arabófonos e hispanohablantes (DIF) y una comparación con resultados oficiales. La puntuación mostrada es una estimación, no un resultado de Cambridge. La expresión escrita (Writing) y oral (Speaking) aún no se evalúan.',
    ],
    'mock.title': ['Examens blancs', 'الاختبارات التجريبية', 'Practice tests', 'Exámenes de práctica'],
    'mock.rules.part1': [
      'Seules les épreuves Reading and Use of English et Listening sont simulées ; Writing et Speaking ne sont pas inclus.',
      'يحاكي الاختبار جزأي القراءة واللغة والاستماع فقط؛ الإنشاء الكتابي والتعبير الشفهي غير مُدرجين.',
      'Only Reading and Use of English and Listening are simulated; Writing and Speaking are not included.',
      'Solo se simulan Reading and Use of English y Listening; Writing y Speaking no están incluidos.',
    ],
    'mock.report': ['Résultats de l’examen blanc', 'نتائج الاختبار التجريبي', 'Practice test results', 'Resultados del examen de práctica'],
  },
};
