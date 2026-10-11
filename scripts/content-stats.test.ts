import { it } from 'vitest';
import { contentStats } from '../src/data/contentStats';

// npm run content:stats
it('prints content statistics', () => {
  const s = contentStats();
  const h = (v: number) => v.toFixed(1).padStart(5);
  const map = (m: Record<string, number>) => Object.entries(m).map(([k, v]) => `${k}: ${v}`).join(' · ');
  console.log(
    [
      'ESTIMATED STUDY TIME (hours)',
      `  lessons    ${h(s.hours.lessons)}`,
      `  exercises  ${h(s.hours.exercises)}`,
      `  retries    ${h(s.hours.retries)}`,
      `  review     ${h(s.hours.review)}`,
      `  mock tests ${h(s.hours.mocks)}`,
      `  vocabulary ${h(s.hours.vocab)}`,
      `  TOTAL      ${h(s.hours.total)}   (goal: 60)`,
      '',
      `UNITS ${s.units} (${map(s.unitsByLevel)}) · sets ${s.sets}`,
      `EXERCISES ${s.exercises}`,
      `  by level: ${map(s.exercisesByLevel)}`,
      `  by part:  ${map(s.exercisesByPart)}`,
      `MOCK TESTS full ${s.mockTests.full} · mini ${s.mockTests.mini} · demo ${s.mockTests.demo} · items ${s.mockTests.items}`,
      `WORDS ${s.words}   (goal: 1000)`,
      `  by level: ${map(s.wordsByLevel)}`,
      `  by theme: ${map(s.wordsByTheme)}`,
      '',
      `SPEAKING (separate budget, goal ~12 h): ${s.speaking.hours.toFixed(1)} h · read-aloud texts ${s.speaking.readAloud} · photos ${s.speaking.photos} · questions ${s.speaking.questions} · document questions ${s.speaking.documentQuestions} · opinions ${s.speaking.opinions} · simulations ${s.speaking.simulations}`,
    ].join('\n'),
  );
});
