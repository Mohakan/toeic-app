import { describe, expect, it } from 'vitest';
import { isolateLatin } from './bidi';

const L = '⁦';
const P = '⁩';

describe('isolateLatin', () => {
  it('keeps the ellipsis and the closing punctuation with the English quotation', () => {
    expect(isolateLatin('«I largely agree, as long as…»: موافقة مشروطة')).toBe(`«${L}I largely agree, as long as…${P}»: موافقة مشروطة`);
    expect(isolateLatin('«Honestly, …» تقدّم إجابة')).toBe(`«${L}Honestly, …${P}» تقدّم إجابة`);
  });

  it('isolates each run separately and leaves the Arabic punctuation outside', () => {
    expect(isolateLatin('اذكر «because» ثم «For example…».')).toBe(`اذكر «${L}because${P}» ثم «${L}For example…${P}».`);
    expect(isolateLatin('الشفوي · TOEIC Speaking')).toBe(`الشفوي · ${L}TOEIC Speaking${P}`);
  });

  it('does not take a trailing colon or space into the run', () => {
    expect(isolateLatin('الصورة: Bernard Spragg · CC0')).toBe(`الصورة: ${L}Bernard Spragg${P} · ${L}CC0${P}`);
  });

  it('handles numbers and single letters, and leaves text without Latin runs unchanged', () => {
    expect(isolateLatin('المستوى B1 · 45 ثانية')).toBe(`المستوى ${L}B1${P} · ${L}45${P} ثانية`);
    expect(isolateLatin('الفئة A')).toBe(`الفئة ${L}A${P}`);
    expect(isolateLatin('نص عربي فقط.')).toBe('نص عربي فقط.');
  });

  it('leaves the final period of an Arabic sentence outside, but keeps it inside a quotation', () => {
    expect(isolateLatin('استعمل because.')).toBe(`استعمل ${L}because${P}.`);
    expect(isolateLatin('قل «Describe your weekend.» ثم')).toBe(`قل «${L}Describe your weekend.${P}» ثم`);
    expect(isolateLatin('«Is that right?» سؤال')).toBe(`«${L}Is that right?${P}» سؤال`);
  });

  it('is idempotent', () => {
    const once = isolateLatin('«Not quite» تصحّح بلباقة');
    expect(isolateLatin(once)).toBe(once);
  });
});
