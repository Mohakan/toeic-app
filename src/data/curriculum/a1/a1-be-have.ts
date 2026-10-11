import type { Unit } from '../../../types';
import { g, lesson, listen, order, respond, unit, v, x } from '../build';

export const a1BeHave: Unit = unit(
  {
    id: 'a1-be-have',
    emoji: '👋',
    level: 1,
    part: 'R5',
    title: x('Se présenter au travail', 'التعريف بالنفس في العمل', 'Introducing yourself at work', 'Presentarse en el trabajo'),
    subtitle: x('Be, have et les possessifs', 'Be وHave وضمائر الملكية', 'Be, have and possessives', 'Be, have y los posesivos'),
    lesson: lesson(
      x('Utiliser « be » et « have » pour parler de soi et des autres.', 'استعمال «be» و«have» للحديث عن النفس والآخرين.', 'Use “be” and “have” to talk about yourself and others.', 'Usar «be» y «have» para hablar de uno mismo y de los demás.'),
      [
        x('Be : I am, you are, he / she / it is, we / they are.', 'Be: I am وyou are وhe/she/it is وwe/they are.', 'Be: I am, you are, he/she/it is, we/they are.', 'Be (ser / estar): I am, you are, he / she / it is, we / they are.'),
        x('Have : he / she / it has ; les autres personnes « have ».', 'Have: he/she/it has، وبقية الضمائر have.', 'Have: he/she/it has; the others use “have”.', 'Have: he/she/it has; el resto de personas usa «have».'),
        x('Possessifs : my, your, his, her, its, our, their.', 'الملكية: my وyour وhis وher وits وour وtheir.', 'Possessives: my, your, his, her, its, our, their.', 'Posesivos: my, your, his, her, its, our, their.'),
      ],
      'Mr. Ben Salah is our new director. He has ten years of experience.',
      x('« is » et « has » : 3e personne du singulier.', '«is» و«has» للمفرد الغائب.', '“is” and “has”: third person singular.', '«is» y «has»: tercera persona del singular.'),
    ),
  },
  [
    g('a1-be-q1', 1, 'They ___ from the Tunis office.', ['are', 'is', 'am', 'be'], x(
      '« They » est pluriel : « they are ».',
      '«They» ضمير جمع: «they are».',
      '“They” is plural: “they are”.',
      '«They» es plural: «they are».',
    )),
    g('a1-be-q2', 1, 'Karim ___ a meeting with a client this afternoon.', ['has', 'have', 'is', 'having'], x(
      'Karim = he → « has ». « Have » est pour I / you / we / they.',
      'Karim = he ← «has». أما «have» فلـ I/you/we/they.',
      'Karim = he → “has”. “Have” is for I/you/we/they.',
      'Karim = he → «has». «Have» es para I/you/we/they.',
    )),
    g('a1-be-q3', 1, 'Ms. Lopez is in ___ office on the third floor.', ['her', 'his', 'she', 'their'], x(
      'Ms. Lopez est une femme et le bureau lui appartient : « her office ».',
      'Ms. Lopez امرأة والمكتب لها: «her office».',
      'Ms. Lopez is a woman and owns the office: “her office”.',
      'Ms. Lopez es una mujer y el despacho es suyo: «her office».',
    )),
    g('a1-be-q4', 1, 'We ___ not ready for the presentation yet.', ['are', 'is', 'has', 'do'], x(
      'Négation de « be » : we are not. On ne met pas « do » avec « be ».',
      'نفي «be»: we are not. لا نضيف «do» مع «be».',
      'Negative of “be”: we are not. No “do” with “be”.',
      'Negación de «be»: we are not. No se usa «do» con «be».',
    )),
    g('a1-be-q5', 1, 'The engineers left ___ laptops in the meeting room.', ['their', 'there', 'they', 'them'], x(
      'Possessif pluriel : « their ». « There » (là) a le même son : piège fréquent.',
      'ضمير الملكية للجمع: «their». أما «there» (هناك) فلها النطق نفسه: فخ شائع.',
      'Plural possessive: “their”. “There” sounds the same: a common trap.',
      'Posesivo plural: «their». «There» (allí) suena igual: una trampa frecuente.',
    )),
    v('a1-be-q6', 1, 'Nice to ___ you. I’m the new assistant.', ['meet', 'meat', 'make', 'mean'], x(
      'Formule de présentation : « Nice to meet you ». « Meat » (viande) se prononce pareil.',
      'عبارة التعارف: «Nice to meet you». و«meat» (لحم) تُنطق بالطريقة نفسها.',
      'Greeting formula: “Nice to meet you”. “Meat” sounds the same.',
      'Fórmula de presentación: «Nice to meet you». «Meat» (carne) suena igual.',
    )),
    order('a1-be-o1', 'She has two years of experience', x('Commence par « She ».', 'ابدأ بـ «She».', 'Start with “She”.', 'Empieza por «She».'), x(
      '« Have / has experience » : avoir de l’expérience.',
      '«Have/has experience» تعني امتلاك خبرة.',
      '“Have experience” is the natural phrase.',
      '«Have experience» (tener experiencia) es la expresión natural.',
    )),
    listen('a1-be-l1', 'L4', 1, 'Hello everyone. I am Leila, and I am the new accountant. I work in the finance department.', 'What is Leila’s job?', ['Accountant', 'Receptionist', 'Engineer', 'Driver'], x(
      'Elle dit : « I am the new accountant » (comptable).',
      'تقول: «I am the new accountant» أي محاسبة.',
      'She says: “I am the new accountant”.',
      'Dice: «I am the new accountant» (soy la nueva contable).',
    )),
  ],
  [
    g('a1-be-s2-q1', 1, 'I ___ a new employee in the IT department.', ['am', 'is', 'are', 'be'], x(
      'Avec « I », le verbe « be » devient « am ».',
      'مع «I» يصبح الفعل «be»: «am».',
      'With “I”, “be” becomes “am”.',
      'Con «I», el verbo «be» es «am».',
    )),
    g('a1-be-s2-q2', 1, 'Our office ___ a big meeting room.', ['has', 'have', 'is', 'are'], x(
      '« Our office » = it → « has » (posséder).',
      '«Our office» = it ← «has» (يملك).',
      '“Our office” = it → “has”.',
      '«Our office» = it → «has» (tener).',
    )),
    g('a1-be-s2-q3', 1, 'Sara and Ali ___ in the same team.', ['are', 'is', 'am', 'be'], x(
      'Deux personnes (Sara and Ali) = they → « are ».',
      'شخصان (Sara and Ali) = they ← «are».',
      'Two people = they → “are”.',
      'Dos personas (Sara and Ali) = they → «are».',
    )),
    g('a1-be-s2-q4', 1, 'This is Mr. Ben Ali. ___ office is on the first floor.', ['His', 'Her', 'Their', 'He'], x(
      'Mr. Ben Ali est un homme : possessif « His ». « He » est un pronom sujet.',
      'Mr. Ben Ali رجل: ضمير الملكية «His». أما «He» فضمير فاعل.',
      'Mr. Ben Ali is a man: possessive “His”. “He” is a subject pronoun.',
      'Mr. Ben Ali es un hombre: posesivo «His». «He» es un pronombre sujeto.',
    )),
    g('a1-be-s2-q5', 1, 'We ___ two cars for the sales team.', ['have', 'has', 'are', 'is'], x(
      'Avec « we », « have » (et non « has »).',
      'مع «we» نستعمل «have» (لا «has»).',
      'With “we”, use “have”.',
      'Con «we», «have» (y no «has»).',
    )),
    g('a1-be-s2-q6', 1, '___ you from the Sousse office?', ['Are', 'Is', 'Do', 'Have'], x(
      'Question avec « be » : on inverse « you are » → « Are you ».',
      'السؤال مع «be»: نقلب «you are» ← «Are you».',
      'A question with “be”: “Are you…?”.',
      'Pregunta con «be»: se invierte «you are» → «Are you».',
    )),
    v('a1-be-s2-q7', 1, 'Good morning. My ___ is Lina Haddad.', ['name', 'job', 'office', 'phone'], x(
      'On se présente avec « My name is… ».',
      'نعرّف بأنفسنا بعبارة «My name is…».',
      'You introduce yourself with “My name is…”.',
      'Uno se presenta con «My name is…».',
    )),
    order('a1-be-s2-o1', 'They are not in the office today', x('La négation vient après « are ».', 'النفي يأتي بعد «are».', 'The negative comes after “are”.', 'La negación va después de «are».'), x(
      'Négation de « be » : sujet + are + not.',
      'نفي «be»: فاعل + are + not.',
      'Negative of “be”: subject + are + not.',
      'Negación de «be»: sujeto + are + not.',
    )),
    listen('a1-be-s2-l1', 'L4', 1, 'Hi, I’m Tom. I’m the new driver. I have a meeting with the manager at ten.', 'What is Tom’s job?', ['Driver', 'Manager', 'Teacher', 'Cook'], x(
      'Il dit : « I’m the new driver ». « Manager » est la personne qu’il va voir.',
      'يقول: «I’m the new driver». أما «manager» فهو الشخص الذي سيقابله.',
      'He says “I’m the new driver”; the manager is who he will meet.',
      'Dice: «I’m the new driver». «Manager» es la persona con la que se reunirá.',
    )),
    respond('a1-be-s2-l2', 1, 'Are you the new accountant?', ['Yes, I started on Monday.', 'No, it’s on Monday.', 'The account is open.'], x(
      'La réponse confirme et précise. « The account » répète un son de la question : piège.',
      'الإجابة تؤكد وتوضح. «The account» تكرر صوتًا من السؤال: فخ.',
      'It confirms and adds detail. “The account” echoes the question: trap.',
      'La respuesta confirma y precisa. «The account» repite un sonido de la pregunta: trampa.',
    )),
  ],
  [
    g('a1-be-s3-q1', 1, 'My colleagues ___ very friendly.', ['are', 'is', 'am', 'has'], x(
      '« My colleagues » est pluriel → « are ».',
      '«My colleagues» جمع ← «are».',
      '“My colleagues” is plural → “are”.',
      '«My colleagues» es plural → «are».',
    )),
    g('a1-be-s3-q2', 1, 'The company ___ three offices in Tunisia.', ['has', 'have', 'is', 'are'], x(
      '« The company » = it → « has ».',
      'الفاعل «The company» مفرد (= it) ← «has».',
      '“The company” = it → “has”.',
      '«The company» = it → «has».',
    )),
    g('a1-be-s3-q3', 1, 'Is ___ your laptop on the table?', ['that', 'those', 'these', 'they'], x(
      '« Laptop » est au singulier : « that ». « Those » et « these » sont des pluriels.',
      '«Laptop» مفرد: «that». أما «those» و«these» فللجمع.',
      '“Laptop” is singular: “that”. “Those/these” are plural.',
      '«Laptop» está en singular: «that». «Those» y «these» son plurales.',
    )),
    g('a1-be-s3-q4', 1, 'Ms. Kim and I work together. ___ office is on the fifth floor.', ['Our', 'Their', 'His', 'Her'], x(
      '« Ms. Kim and I » = we → possessif « Our ».',
      '«Ms. Kim and I» = we ← ضمير الملكية «Our».',
      '“Ms. Kim and I” = we → “Our”.',
      '«Ms. Kim and I» = we → posesivo «Our».',
    )),
    g('a1-be-s3-q5', 1, 'He ___ not have a car, so he takes the bus.', ['does', 'is', 'do', 'has'], x(
      'Négation de « have » au présent avec « he » : does not have.',
      'نفي «have» في المضارع مع «he»: does not have.',
      'Negative of “have” with “he”: does not have.',
      'Negación de «have» en presente con «he»: does not have.',
    )),
    g('a1-be-s3-q6', 1, 'The new employees are happy with ___ desks.', ['their', 'there', 'they', 'them'], x(
      'Possessif pluriel : « their desks ». « There » se prononce pareil : piège.',
      'ضمير الملكية للجمع: «their desks». و«there» تُنطق بالطريقة نفسها: فخ.',
      'Plural possessive: “their”. “There” sounds the same: trap.',
      'Posesivo plural: «their desks». «There» suena igual: trampa.',
    )),
    v('a1-be-s3-q7', 1, 'Let me ___ my colleague, Mr. Diallo.', ['introduce', 'invite', 'include', 'increase'], x(
      '« Let me introduce… » = je vous présente…',
      '«Let me introduce…» = أقدّم لكم…',
      '“Let me introduce…” presents someone.',
      '«Let me introduce…» = le presento a…',
    )),
    order('a1-be-s3-o1', 'Is this your first day here', x('Commence par « Is » : c’est une question.', 'ابدأ بـ «Is»: إنه سؤال.', 'Start with “Is”: it is a question.', 'Empieza por «Is»: es una pregunta.'), x(
      'Question avec « be » : Is + sujet (this) + complément.',
      'سؤال مع «be»: Is + فاعل (this) + متمم.',
      'Question with “be”: Is + subject + complement.',
      'Pregunta con «be»: Is + sujeto (this) + complemento.',
    )),
    listen('a1-be-s3-l1', 'L4', 1, 'Welcome to the team, everyone. This is Maria. She is from Spain, and she speaks four languages.', 'How many languages does Maria speak?', ['Four', 'Two', 'Three', 'Five'], x(
      '« She speaks four languages ».',
      '«She speaks four languages» أي أربع لغات.',
      '“She speaks four languages”.',
      '«She speaks four languages»: habla cuatro idiomas.',
    )),
    respond('a1-be-s3-l2', 1, 'Do you have a pen?', ['Sure, here you are.', 'Yes, I am.', 'In the pen shop.'], x(
      '« Here you are » = tenez (on donne l’objet). « Yes, I am » ne va pas avec « Do you… ? ».',
      '«Here you are» = تفضل (نناوله الشيء). «Yes, I am» لا تناسب «Do you…?».',
      '“Here you are” hands it over. “Yes, I am” does not answer “Do you…?”.',
      '«Here you are» = aquí tienes. «Yes, I am» no responde a «Do you…?».',
    )),
  ],
);
