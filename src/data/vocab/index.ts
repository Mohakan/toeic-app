import type { Localized, VocabTheme, VocabWord } from '../../types';
import { officeWords } from './office';
import { hrWords } from './hr';
import { travelWords } from './travel';
import { financeWords } from './finance';
import { marketingWords } from './marketing';
import { purchasingWords } from './purchasing';
import { productionWords } from './production';
import { technologyWords } from './technology';
import { diningWords } from './dining';
import { eventsWords } from './events';
import { healthWords } from './health';
import { propertyWords } from './property';
import { legalWords } from './legal';
import { environmentWords } from './environment';

export const themeNames: Record<VocabTheme, Localized> = {
  office: { fr: 'Bureau', ar: 'المكتب', en: 'Office', es: 'Oficina' },
  hr: { fr: 'Ressources humaines', ar: 'الموارد البشرية', en: 'Human resources', es: 'Recursos humanos' },
  travel: { fr: 'Voyages', ar: 'السفر', en: 'Travel', es: 'Viajes' },
  finance: { fr: 'Finance', ar: 'المالية', en: 'Finance', es: 'Finanzas' },
  marketing: { fr: 'Marketing et ventes', ar: 'التسويق والمبيعات', en: 'Marketing and sales', es: 'Marketing y ventas' },
  purchasing: { fr: 'Achats et livraisons', ar: 'المشتريات والتوصيل', en: 'Purchasing and delivery', es: 'Compras y entregas' },
  production: { fr: 'Production', ar: 'الإنتاج', en: 'Production', es: 'Producción' },
  technology: { fr: 'Informatique', ar: 'المعلوماتية', en: 'Technology', es: 'Informática' },
  dining: { fr: 'Restauration', ar: 'المطاعم', en: 'Dining', es: 'Restauración' },
  events: { fr: 'Événements', ar: 'الفعاليات', en: 'Events', es: 'Eventos' },
  health: { fr: 'Santé', ar: 'الصحة', en: 'Health', es: 'Salud' },
  property: { fr: 'Immobilier', ar: 'العقارات', en: 'Property', es: 'Inmobiliaria' },
  legal: { fr: 'Juridique et contrats', ar: 'القانون والعقود', en: 'Legal and contracts', es: 'Jurídico y contratos' },
  environment: { fr: 'Environnement et énergie', ar: 'البيئة والطاقة', en: 'Environment and energy', es: 'Medio ambiente y energía' },
};

/** Workplace vocabulary that recurs across TOEIC Listening & Reading, by theme and CEFR band. */
export const vocab: VocabWord[] = [
  ...officeWords,
  ...hrWords,
  ...travelWords,
  ...financeWords,
  ...marketingWords,
  ...purchasingWords,
  ...productionWords,
  ...technologyWords,
  ...diningWords,
  ...eventsWords,
  ...healthWords,
  ...propertyWords,
  ...legalWords,
  ...environmentWords,
];

export const vocabById = Object.fromEntries(vocab.map((w) => [w.id, w])) as Record<string, VocabWord>;
