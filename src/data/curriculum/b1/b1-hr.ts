import type { Unit } from '../../../types';
import { g, lesson, listen, match, read, unit, v, x } from '../build';

const RECEPTIONIST = 'JOB OFFER — Receptionist (part-time, 20 hours a week). Hotel Bay View is looking for a friendly receptionist for weekend shifts. Requirements: good English and French, computer skills. Experience in a hotel is an advantage but not required. Send your application to hr@bayview.com.';

const OFFER = 'Dear Mr. Haddad,\nThank you for attending the interview last Tuesday. We are pleased to offer you the position of IT technician, starting on 1 September. Please read the attached contract and return it signed by 15 August.\nKind regards,\nSara Ben Ali, HR Manager';

export const b1Hr: Unit = unit(
  {
    id: 'b1-hr',
    emoji: '🧑‍💼',
    level: 3,
    part: 'R5 · R7',
    title: x('Recrutement et RH', 'التوظيف والموارد البشرية', 'Recruitment and HR', 'Selección de personal y RR. HH.'),
    subtitle: x('Offres d’emploi et entretiens', 'عروض العمل والمقابلات', 'Job ads and interviews', 'Ofertas de empleo y entrevistas'),
    lesson: lesson(
      x('Comprendre une offre d’emploi et le vocabulaire RH.', 'فهم عرض العمل ومفردات الموارد البشرية.', 'Understand a job ad and HR vocabulary.', 'Entender una oferta de empleo y el vocabulario de recursos humanos.'),
      [
        x('Requirements / qualifications = profil demandé ; benefits = avantages ; apply for = postuler à.', 'Requirements/qualifications = الشروط، benefits = الامتيازات، apply for = يترشح لـ.', 'Requirements, benefits, apply for.', 'Requirements / qualifications = perfil requerido; benefits = prestaciones; apply for = presentarse a.'),
        x('Applicant / candidate = candidat ; employer = employeur ; employee = salarié.', 'Applicant/candidate = مترشح، employer = صاحب العمل، employee = موظف.', 'Applicant, employer, employee.', 'Applicant / candidate = candidato; employer = empleador; employee = empleado.'),
      ],
      'Applicants must have two years of experience. Benefits include health insurance.',
      x('Profil : deux ans d’expérience. Avantage : assurance santé.', 'الشرط: سنتان من الخبرة. الامتياز: تأمين صحي.', 'Requirement and benefit.', 'Perfil: dos años de experiencia. Prestación: seguro médico.'),
    ),
  },
  [
    match('b1-hr-m1', ['interview', 'applicant', 'hire', 'training', 'benefits'], x(
      '« Hire » = embaucher ; « interview » = entretien.',
      '«Hire» = يوظّف و«interview» = مقابلة.',
      '“Hire” and “interview” are core HR words.',
      '«Hire» = contratar; «interview» = entrevista.',
    )),
    v('b1-hr-q1', 3, 'All new employees must ___ a two-day training course before they start.', ['complete', 'compete', 'compare', 'complain'], x(
      '« Complete a course » = suivre une formation jusqu’au bout. Les autres verbes se ressemblent mais n’ont pas ce sens.',
      '«Complete a course» = إتمام دورة تدريبية. الأفعال الأخرى متشابهة شكلًا فقط.',
      '“Complete a course” means finish it. The other verbs only look similar.',
      '«Complete a course» = completar un curso. Los otros verbos solo se parecen en la forma.',
    )),
    v('b1-hr-q2', 3, 'Ms. Ito is highly ___ for the position: she has a master’s degree and five years of experience.', ['qualified', 'qualifying', 'quality', 'qualify'], x(
      '« Qualified for » = qualifié pour un poste.',
      '«Qualified for» = مؤهّلة للمنصب.',
      '“Qualified for” a position.',
      '«Qualified for» = cualificada para un puesto.',
    )),
    read('b1-hr-r1', 'R7', 3, 'JOB OPENING — Sales Assistant (full-time). Requirements: one year of retail experience, good English. Benefits: health insurance, 25 days of paid leave. Send your résumé to jobs@nova.com by 30 June.', 'What is a requirement for the job?', ['Experience in retail', 'A university degree', 'A driving license', 'Knowledge of German'], x(
      '« Requirements: one year of retail experience ».',
      'الشرط المطلوب: «Requirements: one year of retail experience».',
      'Retail experience is required.',
      '«Requirements: one year of retail experience»: experiencia en comercio.',
    )),
    read('b1-hr-r2', 'R7', 3, 'JOB OPENING — Sales Assistant (full-time). Requirements: one year of retail experience, good English. Benefits: health insurance, 25 days of paid leave. Send your résumé to jobs@nova.com by 30 June.', 'How should people apply?', ['By sending a résumé by email', 'By visiting the store', 'By calling the manager', 'By filling in a form online'], x(
      '« Send your résumé to jobs@nova.com » : par e-mail.',
      '«Send your résumé to jobs@nova.com»: عبر البريد الإلكتروني.',
      'Apply by email.',
      '«Send your résumé to jobs@nova.com»: por correo electrónico.',
    )),
    read('b1-hr-r3', 'R7', 3, 'Notice to all staff: From 1 October, employees may work from home on Fridays. Please inform your manager by email at least two days in advance.', 'What must employees do to work from home?', ['Inform their manager in advance', 'Work from home every Friday', 'Request a new laptop', 'Call human resources'], x(
      '« Please inform your manager… at least two days in advance ». « May » indique une possibilité, pas une obligation.',
      '«Please inform your manager… at least two days in advance». و«may» تدل على الإمكانية لا الإلزام.',
      '“Please inform your manager… in advance”. “May” is an option, not an obligation.',
      '«Please inform your manager… at least two days in advance». «May» indica una posibilidad, no una obligación.',
    )),
  ],
  [
    match('b1-hr-s2-m1', ['applicant', 'qualified', 'retire', 'recruit', 'benefits'], x(
      '« Recruit » = recruter ; « retire » = prendre sa retraite.',
      '«Recruit» = يستقطب، و«retire» = يتقاعد.',
      '“Recruit” vs “retire”.',
      '«Recruit» = reclutar; «retire» = jubilarse.',
    )),
    v('b1-hr-s2-q1', 3, 'Ms. Nkosi was ___ to sales manager after five years in the company.', ['promoted', 'promised', 'produced', 'protected'], x(
      '« Be promoted to » = être promu à un poste.',
      '«Be promoted to» = يُرقّى إلى منصب.',
      '“Promoted to” a position.',
      '«Be promoted to» = ser ascendido a un puesto.',
    )),
    v('b1-hr-s2-q2', 3, 'The company offers good ___, including health insurance and free lunches.', ['benefits', 'benefactors', 'beneficial', 'benefited'], x(
      '« Benefits » = avantages sociaux. Après « good », il faut un nom.',
      '«Benefits» = امتيازات. وبعد «good» نحتاج اسمًا.',
      '“Benefits” = perks.',
      '«Benefits» = prestaciones. Después de «good» hace falta un sustantivo.',
    )),
    v('b1-hr-s2-q3', 3, 'We are going to ___ three new engineers this year.', ['hire', 'hear', 'higher', 'hide'], x(
      '« Hire » = embaucher. « Higher » se prononce presque pareil.',
      '«Hire» = يوظّف. و«higher» تُنطق تقريبًا مثلها.',
      '“Hire”; “higher” sounds similar.',
      '«Hire» = contratar. «Higher» suena casi igual.',
    )),
    v('b1-hr-s2-q4', 3, 'All new staff must ___ a two-week training program.', ['attend', 'attempt', 'attach', 'attract'], x(
      '« Attend a program » = suivre un programme.',
      '«Attend a program» = حضور برنامج.',
      '“Attend” a program.',
      '«Attend a program» = asistir a un programa.',
    )),
    v('b1-hr-s2-q5', 3, 'Please send your ___ and a cover letter to jobs@ecoline.com.', ['résumé', 'receipt', 'recipe', 'reply'], x(
      'Avec une lettre de motivation, on envoie son CV : « résumé ».',
      'مع رسالة التحفيز نرسل السيرة الذاتية: «résumé».',
      'With a cover letter: a “résumé”.',
      'Con una carta de presentación se envía el currículum: «résumé».',
    )),
    read('b1-hr-s2-r1', 'R7', 3, RECEPTIONIST, 'What is true about the job?', ['It is for weekend shifts', 'It is full-time', 'Hotel experience is required', 'It requires German'], x(
      '« For weekend shifts » ; le poste est à temps partiel et l’expérience « is an advantage but not required ».',
      '«For weekend shifts»، والوظيفة بدوام جزئي والخبرة «is an advantage but not required».',
      'Weekend shifts; experience not required.',
      '«For weekend shifts»; es a tiempo parcial y la experiencia «is an advantage but not required».',
    )),
    read('b1-hr-s2-r2', 'R7', 3, RECEPTIONIST, 'Which languages are required?', ['English and French', 'English and Arabic', 'French and German', 'Only English'], x(
      '« Requirements: good English and French ».',
      '«Requirements: good English and French» أي الإنجليزية والفرنسية.',
      'English and French.',
      '«Requirements: good English and French»: inglés y francés.',
    )),
    read('b1-hr-s2-r3', 'R7', 3, 'Memo — All employees: performance reviews will take place in the first two weeks of December. Your manager will contact you to schedule a meeting. Please prepare a short list of your achievements this year.', 'What should employees prepare?', ['A list of their achievements', 'A new résumé', 'Questions for HR', 'A training plan'], x(
      '« Please prepare a short list of your achievements ».',
      '«Please prepare a short list of your achievements» أي قائمة إنجازاتهم.',
      'A list of achievements.',
      '«Please prepare a short list of your achievements»: una lista de sus logros.',
    )),
    listen('b1-hr-s2-l1', 'L3', 3, 'M: I heard you got the job at Nova Tech!\nW: Yes, I start next month. The salary is better, and the office is closer to my home.', 'Why is the woman happy about the new job?', ['Better pay and a closer office', 'More vacation days', 'A bigger team', 'The chance to travel'], x(
      '« The salary is better, and the office is closer to my home ».',
      'السبب: «The salary is better, and the office is closer to my home».',
      'Better salary, closer office.',
      '«The salary is better, and the office is closer to my home»: mejor sueldo y oficina más cerca.',
    )),
  ],
  [
    match('b1-hr-s3-m1', ['shortlist', 'performance', 'personnel', 'training', 'interview'], x(
      '« Shortlist » = présélectionner ; « personnel » = l’ensemble du personnel.',
      '«Shortlist» = اختيار قائمة مختصرة، و«personnel» = مجموع الموظفين.',
      '“Shortlist” and “personnel”.',
      '«Shortlist» = preseleccionar; «personnel» = el personal.',
    )),
    v('b1-hr-s3-q1', 3, 'Five candidates were ___ for the final interview.', ['shortlisted', 'shortened', 'shorted', 'shortly'], x(
      '« Be shortlisted » = être présélectionné.',
      '«Be shortlisted» = أن يُختار ضمن القائمة المختصرة.',
      '“Shortlisted”.',
      '«Be shortlisted» = ser preseleccionado.',
    )),
    v('b1-hr-s3-q2', 3, 'Mr. Ali will ___ next year after 35 years with the company.', ['retire', 'retry', 'return', 'reply'], x(
      'Après 35 ans de carrière : prendre sa retraite, « retire ».',
      'بعد 35 سنة من العمل: يتقاعد «retire».',
      'After 35 years: “retire”.',
      'Después de 35 años: jubilarse, «retire».',
    )),
    v('b1-hr-s3-q3', 3, 'The job ___ include answering calls and organizing meetings.', ['duties', 'dues', 'dutiful', 'duty-free'], x(
      '« Job duties » = missions du poste.',
      '«Job duties» = مهام الوظيفة.',
      '“Job duties” = tasks.',
      '«Job duties» = funciones del puesto.',
    )),
    g('b1-hr-s3-q4', 3, 'Employees can work from home two days a week. This ___ policy is popular with staff.', ['flexible', 'flexibility', 'flex', 'flexibly'], x(
      'Devant le nom « policy » → adjectif : « flexible ».',
      'قبل الاسم «policy» ← صفة: «flexible».',
      'Before a noun → adjective.',
      'Delante del sustantivo «policy» → adjetivo: «flexible».',
    )),
    v('b1-hr-s3-q5', 3, 'The ___ for applications is 3 May. Late applications will not be accepted.', ['deadline', 'dateline', 'headline', 'borderline'], x(
      'Date limite → « deadline ».',
      'الموعد النهائي ← «deadline».',
      '“Deadline”.',
      'Fecha límite → «deadline».',
    )),
    read('b1-hr-s3-r1', 'R7', 3, OFFER, 'What is the purpose of the letter?', ['To offer Mr. Haddad a job', 'To invite him to an interview', 'To ask for his résumé', 'To reject his application'], x(
      '« We are pleased to offer you the position » = offre d’emploi.',
      '«We are pleased to offer you the position» = عرض عمل.',
      'A job offer.',
      '«We are pleased to offer you the position» = oferta de empleo.',
    )),
    read('b1-hr-s3-r2', 'R7', 3, OFFER, 'What must Mr. Haddad do by 15 August?', ['Return the signed contract', 'Start his new job', 'Attend an interview', 'Call Ms. Ben Ali'], x(
      '« Return it signed by 15 August ». Il commence le 1er septembre.',
      '«Return it signed by 15 August». ويبدأ العمل في 1 سبتمبر.',
      'Return the signed contract.',
      '«Return it signed by 15 August». Empieza el 1 de septiembre.',
    )),
    read('b1-hr-s3-r3', 'R7', 3, 'New employee training: all new staff must complete online safety training during their first week. The course takes about three hours and can be done in several parts.', 'What is said about the training?', ['It can be done in several parts', 'It takes one full day', 'It is optional', 'It takes place in a classroom'], x(
      '« Can be done in several parts » ; elle est obligatoire (« must ») et en ligne.',
      '«Can be done in several parts»، وهو إلزامي («must») وعبر الإنترنت.',
      'Several parts; mandatory and online.',
      '«Can be done in several parts»; es obligatoria («must») y en línea.',
    )),
    listen('b1-hr-s3-l1', 'L4', 3, 'Hello, this is Nadia from Human Resources. I’m calling to invite you to a second interview next Monday at ten a.m. Please call me back to confirm.', 'Why is Nadia calling?', ['To invite the listener to a second interview', 'To offer a job', 'To cancel an interview', 'To ask for references'], x(
      '« To invite you to a second interview ».',
      '«To invite you to a second interview» أي مقابلة ثانية.',
      'A second interview.',
      '«To invite you to a second interview»: una segunda entrevista.',
    )),
  ],
);
