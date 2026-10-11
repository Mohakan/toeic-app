import type { Unit } from '../../../types';
import { g, lesson, listen, match, order, read, respond, unit, v, x } from '../build';

export const a1Shopping: Unit = unit(
  {
    id: 'a1-shopping',
    emoji: '🛒',
    level: 1,
    part: 'L2 · L4 · R7',
    title: x('Prix, achats et restaurant', 'الأسعار والتسوق والمطعم', 'Prices, shopping and restaurants', 'Precios, compras y restaurantes'),
    subtitle: x('Comprendre un prix et commander', 'فهم السعر والطلب', 'Understand prices and order', 'Entender un precio y pedir'),
    lesson: lesson(
      x('Comprendre les prix et les échanges au magasin ou au restaurant.', 'فهم الأسعار والتعامل في المتجر أو المطعم.', 'Understand prices and exchanges in shops and restaurants.', 'Entender los precios y las conversaciones en la tienda o el restaurante.'),
      [
        x('« How much » demande un prix (How much is it? — It’s $12) ; « How many » demande un nombre.', '«How much» تسأل عن السعر (How much is it? — It’s $12)، و«How many» عن العدد.', '“How much” asks for a price; “How many” for a number.', '«How much» pregunta un precio (How much is it? — It’s $12); «How many», un número.'),
        x('Formules utiles : I’d like…, Can I pay by card?, the bill (l’addition), a receipt (un reçu).', 'عبارات مفيدة: I’d like… وCan I pay by card? وthe bill (الحساب) وa receipt (وصل).', 'Useful phrases: I’d like…, Can I pay by card?, the bill, a receipt.', 'Frases útiles: I’d like…, Can I pay by card?, the bill (la cuenta), a receipt (un recibo).'),
        x('Prix à l’oral : « twenty-three fifty » = 23,50 $ ; « twelve ninety-nine » = 12,99 $.', 'الأسعار شفهيًا: «twenty-three fifty» = 23.50 دولارًا، و«twelve ninety-nine» = 12.99.', 'Spoken prices: “twenty-three fifty” = $23.50.', 'Precios hablados: «twenty-three fifty» = 23,50 $; «twelve ninety-nine» = 12,99 $.'),
      ],
      'I’d like a coffee and a sandwich, please. How much is it?',
      x('« I’d like » pour commander poliment, « How much » pour le prix.', '«I’d like» للطلب بأدب و«How much» للسعر.', '“I’d like” to order; “How much” for the price.', '«I’d like» para pedir con cortesía; «How much» para el precio.'),
    ),
  },
  [
    respond('a1-sh-s1-l1', 1, 'How much are these shoes?', ['Forty-five dollars.', 'Size 38.', 'In the window.'], x(
      '« How much » → un prix. « Size 38 » est une pointure.',
      '«How much» ← سعر. أما «Size 38» فمقاس.',
      '“How much” → a price; “Size 38” is a size.',
      '«How much» → un precio. «Size 38» es una talla.',
    )),
    respond('a1-sh-s1-l2', 1, 'Can I pay by credit card?', ['Yes, of course.', 'It’s a good card.', 'At the bank.'], x(
      'Question oui / non → « Yes, of course ».',
      'سؤال نعم/لا ← «Yes, of course».',
      'Yes/no question → “Yes, of course”.',
      'Pregunta de sí o no → «Yes, of course».',
    )),
    respond('a1-sh-s1-l3', 1, 'Would you like something to drink?', ['Just water, please.', 'Yes, I drink.', 'It’s on the table.'], x(
      'Offre → on répond par ce qu’on veut : « Just water, please ».',
      'عرض ← نجيب بما نريد: «Just water, please».',
      'An offer → say what you want.',
      'Ofrecimiento → se responde con lo que se quiere: «Just water, please».',
    )),
    listen('a1-sh-s1-l4', 'L4', 1, 'Today only, all T-shirts are ten dollars each, or three for twenty-five dollars.', 'How much are three T-shirts?', ['$25', '$30', '$10', '$13'], x(
      '« Three for twenty-five dollars » : 3 T-shirts = 25 $ (et non 3 × 10).',
      '«Three for twenty-five dollars»: ثلاثة قمصان = 25 دولارًا (لا 3 × 10).',
      '“Three for twenty-five dollars”.',
      '«Three for twenty-five dollars»: 3 camisetas = 25 $ (y no 3 × 10).',
    )),
    listen('a1-sh-s1-l5', 'L3', 1, 'W: I’d like the chicken salad, please.\nM: Sorry, we don’t have any today. The fish is very good.\nW: OK, I’ll have the fish.', 'What will the woman eat?', ['Fish', 'Chicken salad', 'Soup', 'Pasta'], x(
      'La salade n’est pas disponible ; elle dit : « I’ll have the fish ».',
      'السلطة غير متوفرة، فتقول: «I’ll have the fish».',
      'The salad is not available: “I’ll have the fish”.',
      'La ensalada no está disponible; dice: «I’ll have the fish».',
    )),
    read('a1-sh-s1-r1', 'R7', 1, 'Café Medina — Coffee $2 · Tea $1.50 · Orange juice $3 · Croissant $1.80', 'What is the cheapest item?', ['Tea', 'Coffee', 'Orange juice', 'Croissant'], x(
      'Le thé (1,50 $) est le moins cher.',
      'الشاي (1.50 دولار) هو الأرخص.',
      'Tea ($1.50) is the cheapest.',
      'El té (1,50 $) es lo más barato.',
    )),
    read('a1-sh-s1-r2', 'R7', 1, 'Receipt — Notebook $4.00 · Pens (x3) $3.00 · Total $7.00 · Paid by card', 'How did the customer pay?', ['By card', 'In cash', 'By check', 'Online'], x(
      '« Paid by card » = payé par carte.',
      '«Paid by card» = الدفع بالبطاقة.',
      '“Paid by card”.',
      '«Paid by card» = pagado con tarjeta.',
    )),
    g('a1-sh-s1-q1', 1, '___ much is the taxi to the airport?', ['How', 'What', 'Which', 'Who'], x(
      'Prix → « How much ».',
      'السعر ← «How much».',
      'Price → “How much”.',
      'Precio → «How much».',
    )),
    v('a1-sh-s1-q2', 1, 'Can I have the ___, please? We want to pay.', ['bill', 'menu', 'table', 'chef'], x(
      'Pour payer au restaurant, on demande l’addition : « the bill ».',
      'للدفع في المطعم نطلب الحساب: «the bill».',
      'To pay, ask for “the bill”.',
      'Para pagar en el restaurante se pide la cuenta: «the bill».',
    )),
    match('a1-sh-s1-m1', ['receipt', 'discount', 'customer', 'payment', 'dessert'], x(
      '« Receipt » = reçu ; « discount » = réduction.',
      '«Receipt» = وصل و«discount» = تخفيض.',
      '“Receipt” and “discount” are frequent in shops.',
      '«Receipt» = recibo; «discount» = descuento.',
    )),
  ],
  [
    respond('a1-sh-s2-l1', 1, 'Do you have this jacket in blue?', ['Let me check in the back.', 'It’s a nice jacket.', 'Yes, I like blue.'], x(
      'Réponse naturelle : le vendeur va vérifier en réserve.',
      'رد طبيعي: البائع سيتحقق في المخزن.',
      'A natural reply: the clerk will check.',
      'Respuesta natural: el vendedor va a comprobarlo en el almacén.',
    )),
    respond('a1-sh-s2-l2', 1, 'How many apples do you want?', ['Six, please.', 'Two dollars.', 'Very fresh.'], x(
      '« How many » → un nombre. « Two dollars » répondrait à « How much ».',
      '«How many» ← عدد. و«Two dollars» تجيب عن «How much».',
      '“How many” → a number.',
      '«How many» → un número. «Two dollars» respondería a «How much».',
    )),
    respond('a1-sh-s2-l3', 1, 'Where can I pay?', ['At the cash desk near the door.', 'By card.', 'Ten dollars.'], x(
      '« Where » → un lieu. « By card » dirait comment payer.',
      '«Where» ← مكان. و«By card» تجيب عن طريقة الدفع.',
      '“Where” → a place; “By card” says how.',
      '«Where» → un lugar. «By card» diría cómo pagar.',
    )),
    listen('a1-sh-s2-l4', 'L4', 1, 'Welcome to Green Market. This week, all fruit is twenty percent off. The store closes at nine p.m.', 'What is on sale this week?', ['Fruit', 'Vegetables', 'Bread', 'Drinks'], x(
      '« All fruit is twenty percent off » : les fruits sont en promotion.',
      '«All fruit is twenty percent off»: الفواكه مخفضة.',
      '“All fruit is twenty percent off”.',
      '«All fruit is twenty percent off»: la fruta está rebajada.',
    )),
    listen('a1-sh-s2-l5', 'L3', 1, 'M: A table for two, please.\nW: Inside or outside?\nM: Outside, please. It’s a nice day.', 'Where will the man sit?', ['Outside', 'Inside', 'At the bar', 'Near the kitchen'], x(
      'Il choisit : « Outside, please ».',
      'يختار: «Outside, please».',
      'He chooses “Outside”.',
      'Elige: «Outside, please».',
    )),
    read('a1-sh-s2-r1', 'R7', 1, 'Opening offer: buy one pizza, get one free. Monday to Thursday only.', 'When is the offer available?', ['Monday to Thursday', 'Every day', 'Only on weekends', 'Friday to Sunday'], x(
      '« Monday to Thursday only ».',
      '«Monday to Thursday only» أي من الإثنين إلى الخميس فقط.',
      '“Monday to Thursday only”.',
      '«Monday to Thursday only»: solo de lunes a jueves.',
    )),
    read('a1-sh-s2-r2', 'R7', 1, 'Bus ticket: $1.50 · Day pass: $5 · Children under 6 travel free.', 'How much is a day pass?', ['$5', '$1.50', '$6', 'Free'], x(
      '« Day pass: $5 ».',
      '«Day pass: $5» أي 5 دولارات.',
      '“Day pass: $5”.',
      '«Day pass: $5»: 5 $.',
    )),
    g('a1-sh-s2-q1', 1, 'I’d like ___ bottle of water, please.', ['a', 'an', 'some', 'any'], x(
      '« Bottle » est dénombrable, au singulier et commence par une consonne : « a bottle ».',
      '«Bottle» معدود ومفرد ويبدأ بصوت ساكن: «a bottle».',
      'Singular countable noun with a consonant sound: “a”.',
      '«Bottle» es contable, singular y empieza por consonante: «a bottle».',
    )),
    v('a1-sh-s2-q2', 1, 'This bag is too ___. Do you have a cheaper one?', ['expensive', 'cheap', 'small', 'free'], x(
      'On demande moins cher (« cheaper ») parce que le sac est trop cher : « expensive ».',
      'نطلب أرخص («cheaper») لأن الحقيبة غالية جدًا: «expensive».',
      'Asking for “cheaper” → it is too “expensive”.',
      'Se pide algo más barato («cheaper») porque el bolso es demasiado caro: «expensive».',
    )),
    order('a1-sh-s2-o1', 'How much is this black bag', x('Commence par « How much ».', 'ابدأ بـ «How much».', 'Start with “How much”.', 'Empieza por «How much».'), x(
      'How much + is + this + adjectif + nom.',
      'How much + is + this + صفة + اسم.',
      'How much + is + this + adjective + noun.',
      'How much + is + this + adjetivo + sustantivo.',
    )),
  ],
  [
    respond('a1-sh-s3-l1', 1, 'Would you like a receipt?', ['Yes, please.', 'It’s twenty dollars.', 'The receipt is long.'], x(
      'Offre → « Yes, please ». La dernière option répète le mot « receipt ».',
      'عرض ← «Yes, please». والخيار الأخير يكرر كلمة «receipt».',
      'An offer → “Yes, please”.',
      'Ofrecimiento → «Yes, please». La última opción repite «receipt».',
    )),
    respond('a1-sh-s3-l2', 1, 'Are you ready to order?', ['Yes, I’ll have the soup, please.', 'The order is late.', 'It’s ready at noon.'], x(
      'Le serveur demande la commande → on commande : « I’ll have the soup ».',
      'النادل يسأل عن الطلب ← نطلب: «I’ll have the soup».',
      'The waiter asks → order something.',
      'El camarero pregunta → se pide: «I’ll have the soup».',
    )),
    respond('a1-sh-s3-l3', 1, 'What size do you need?', ['A medium, please.', 'It’s twenty dollars.', 'The blue one.'], x(
      '« What size » → une taille : « A medium ».',
      '«What size» ← مقاس: «A medium».',
      '“What size” → a size.',
      '«What size» → una talla: «A medium».',
    )),
    listen('a1-sh-s3-l4', 'L4', 1, 'Your total is twenty-three fifty. Would you like a bag for five cents?', 'How much is the total?', ['$23.50', '$25.30', '$20.35', '$5'], x(
      '« Twenty-three fifty » = 23,50 $.',
      '«Twenty-three fifty» = 23.50 دولارًا.',
      '“Twenty-three fifty” = $23.50.',
      '«Twenty-three fifty» = 23,50 $.',
    )),
    listen('a1-sh-s3-l5', 'L3', 1, 'W: Excuse me, how much is this lamp?\nM: It’s forty dollars, but today there’s a ten-dollar discount.', 'How much is the lamp today?', ['$30', '$40', '$50', '$10'], x(
      '40 $ moins 10 $ de réduction = 30 $.',
      '40 دولارًا ناقص تخفيض 10 = 30 دولارًا.',
      '$40 minus a $10 discount = $30.',
      '40 $ menos 10 $ de descuento = 30 $.',
    )),
    read('a1-sh-s3-r1', 'R7', 1, 'Lunch special: soup + sandwich + drink = $9. Available from 12 to 3 p.m.', 'What is included in the lunch special?', ['Soup, a sandwich and a drink', 'A salad and a dessert', 'Only a sandwich', 'Soup and coffee'], x(
      '« Soup + sandwich + drink ».',
      '«Soup + sandwich + drink» أي حساء وشطيرة ومشروب.',
      '“Soup + sandwich + drink”.',
      '«Soup + sandwich + drink»: sopa, bocadillo y bebida.',
    )),
    read('a1-sh-s3-r2', 'R7', 1, 'Returns: please keep your receipt. Items can be returned within 14 days.', 'How long do customers have to return items?', ['14 days', '4 days', '40 days', '1 month'], x(
      '« Within 14 days » = dans un délai de 14 jours.',
      '«Within 14 days» = خلال 14 يومًا.',
      '“Within 14 days”.',
      '«Within 14 days» = en un plazo de 14 días.',
    )),
    g('a1-sh-s3-q1', 1, 'How ___ people are in your group? — Five.', ['many', 'much', 'old', 'long'], x(
      'Nombre de personnes (dénombrable) → « How many ».',
      'عدد الأشخاص (معدود) ← «How many».',
      'Countable number → “How many”.',
      'Número de personas (contable) → «How many».',
    )),
    v('a1-sh-s3-q2', 1, 'The ___ is the person who cooks in a restaurant.', ['chef', 'waiter', 'customer', 'cashier'], x(
      'La personne qui cuisine : « chef ». Le « waiter » sert les clients.',
      'الشخص الذي يطبخ: «chef». أما «waiter» فيخدم الزبائن.',
      'The cook is the “chef”; the waiter serves.',
      'La persona que cocina: «chef». El «waiter» sirve a los clientes.',
    )),
    order('a1-sh-s3-o1', 'I would like a table for four', x('Commence par « I would like ».', 'ابدأ بـ «I would like».', 'Start with “I would like”.', 'Empieza por «I would like».'), x(
      '« I would like » (= I’d like) + ce qu’on demande.',
      '«I would like» (= I’d like) + ما نطلبه.',
      '“I would like” + what you want.',
      '«I would like» (= I’d like) + lo que se pide.',
    )),
  ],
);
