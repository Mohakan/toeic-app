/**
 * Builds the family site: the landing page (site/) at the root, and the web export of every live
 * app under its path (/quest, /b2, …), all in dist/web, ready for a static host.
 *
 *   npm run web:build            every live app
 *   npm run web:build -- b2First  one app only (the landing page is copied too)
 */
import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
// import() takes a URL: a bare Windows path ("C:\…") is read as the scheme "c:".
const { EXAMS } = await import(pathToFileURL(join(root, 'src/exams/catalog.ts')).href);
// The Expo CLI is run with this Node, not through npx, which Windows only finds through a shell.
const expoCli = join(root, 'node_modules/expo/bin/cli');
const out = join(root, 'dist/web');

const wanted = process.argv.slice(2);
const apps = Object.values(EXAMS).filter((e) => e.status === 'live' && (wanted.length === 0 || wanted.includes(e.id)));
if (apps.length === 0) throw new Error(`No live app matches ${wanted.join(', ')}.`);

if (wanted.length === 0) rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const app of apps) {
  const dir = join(out, app.webPath);
  rmSync(dir, { recursive: true, force: true });
  console.log(`\n▶ ${app.appName} → ${app.webPath}/`);
  execFileSync(process.execPath, [expoCli, 'export', '--platform', 'web', '--output-dir', dir], {
    cwd: root,
    stdio: 'inherit',
    env: { ...process.env, EXPO_PUBLIC_EXAM: app.id, TOKI_WEB_EXPORT: '1' },
  });
}

cpSync(join(root, 'site'), out, { recursive: true });
console.log(`\nSite ready in dist/web (landing page + ${apps.map((a) => a.webPath).join(', ')}).`);
