/**
 * Landing page of the Toki Quest family, ported from the Figma Make "Design Toki mascot" board.
 * The app list mirrors src/exams/catalog.ts: `web` is the path of the live web version (built by
 * scripts/build-web.mjs), null while the app is planned. A test checks the two stay in step.
 */
const APPS = [
  { key: 'quest', short: 'TQ', name: 'Toki Quest', exam: 'Listening & Reading', label: 'Ciel', hero: '#2E9BF0', soft: '#E7F3FE', accessory: 'Casque audio', web: '/quest/', pitch: "L'anglais du monde pro, écoute et lecture." },
  { key: 'b2', short: 'B2', name: 'Toki Quest B2', exam: 'English B2 First', label: 'Lavande', hero: '#9B8CFF', soft: '#EFEDFF', accessory: 'Écharpe étudiante', web: '/b2/', pitch: 'Le niveau B2 pour les études et la mobilité.' },
  { key: 'academic', short: 'AC', name: 'Toki Quest Academic', exam: 'Academic English', label: 'Turquoise', hero: '#3CC8C8', soft: '#E3F8F8', accessory: 'Toque de diplômé', web: null, pitch: "L'anglais universitaire pour partir étudier." },
  { key: 'school', short: 'FR', name: 'Toki Quest Savoirs', exam: 'Le français des matières', label: 'Framboise', hero: '#E782B4', soft: '#FBEAF3', accessory: 'Livre des savoirs', web: null, pitch: 'Les mots et notions des cours du lycée, expliqués simplement.' },
];

const NIGHT = '#14427A';

const ACCESSORIES = {
  quest: `<g class="accessory">
    <path d="M63 133V117c0-48 36-76 83-76s83 28 83 76v16" fill="none" stroke="${NIGHT}" stroke-width="11" stroke-linecap="round"/>
    <path d="M71 109c3-32 31-56 75-56s72 24 75 56" fill="none" stroke="#FF8A1F" stroke-width="5" stroke-linecap="round"/>
    <rect x="49" y="112" width="28" height="53" rx="13" fill="#FF8A1F" stroke="${NIGHT}" stroke-width="7"/>
    <rect x="215" y="112" width="28" height="53" rx="13" fill="#FF8A1F" stroke="${NIGHT}" stroke-width="7"/>
    <path d="M59 126v24m174-24v24" stroke="#FFD3A8" stroke-width="5" stroke-linecap="round"/></g>`,
  b2: `<g class="accessory">
    <path d="M91 181c29 16 81 16 110 0l-7 28c-29 13-67 13-96 0Z" fill="#9B8CFF" stroke="${NIGHT}" stroke-width="7" stroke-linejoin="round"/>
    <path d="m146 198-17 17 17 18 17-18Z" fill="#806FEF" stroke="${NIGHT}" stroke-width="6" stroke-linejoin="round"/>
    <path d="m139 228-12 48 21-10 17 13-9-51Z" fill="#9B8CFF" stroke="${NIGHT}" stroke-width="6" stroke-linejoin="round"/>
    <path d="m133 248 28-6m-31 18 34-7" stroke="white" stroke-width="6"/></g>`,
  academic: `<g class="accessory">
    <path d="m82 67 66-33 70 29-66 36Z" fill="${NIGHT}" stroke="${NIGHT}" stroke-width="6" stroke-linejoin="round"/>
    <path d="M110 79v26c19 14 58 12 77-3V76" fill="${NIGHT}" stroke="${NIGHT}" stroke-width="6" stroke-linejoin="round"/>
    <path d="m151 99 36-19" stroke="#3CC8C8" stroke-width="5" stroke-linecap="round"/>
    <path d="M216 65v49" stroke="#3CC8C8" stroke-width="6" stroke-linecap="round"/>
    <path d="m216 111-9 18h18Z" fill="#3CC8C8" stroke="${NIGHT}" stroke-width="4" stroke-linejoin="round"/></g>`,
  school: `<g class="accessory">
    <path d="M68 207c28-8 54 0 78 18v57c-23-17-49-24-78-16Z" fill="white" stroke="${NIGHT}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M224 207c-28-8-54 0-78 18v57c23-17 49-24 78-16Z" fill="#FBEAF3" stroke="${NIGHT}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M146 225v57" stroke="${NIGHT}" stroke-width="6" stroke-linecap="round"/>
    <path d="M86 226c17-2 29 2 43 10m-43 10c17-2 29 2 43 10m77-30c-17-2-29 2-43 10m43 10c-17-2-29 2-43 10" fill="none" stroke="#E782B4" stroke-width="5" stroke-linecap="round"/>
    <path d="m136 203 10-17 10 17-10 8Z" fill="#FF8A1F" stroke="${NIGHT}" stroke-width="5" stroke-linejoin="round"/></g>`,
};

/** Toki with the accessory of an app; `compact` for the icon tiles, `mirrored` for RTL. */
function toki(app, { compact = false, mirrored = false } = {}) {
  return `<svg class="toki${compact ? ' toki-compact' : ''}" viewBox="0 0 292 320" role="img" aria-label="Toki avec ${app.accessory.toLowerCase()}">
  <g${mirrored ? ' transform="translate(292 0) scale(-1 1)"' : ''}>
    <ellipse cx="146" cy="289" rx="77" ry="13" fill="${NIGHT}" opacity=".1"/>
    <path d="m117 272-18 18m18-8-4 15m4-15 14 11M177 272l17 18m-17-8 4 15m-4-15-14 11" fill="none" stroke="#FF8A1F" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M116 257c-13 13-28 19-39 15 7-13 16-24 28-31m70 16c13 13 28 19 39 15-7-13-16-24-28-31" fill="${app.hero}" stroke="${NIGHT}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M147 68c57 0 91 41 91 106 0 67-37 110-92 110S54 241 54 174c0-65 36-106 93-106Z" fill="#2E9BF0" stroke="${NIGHT}" stroke-width="8"/>
    <path d="M146 150c34 0 59 27 59 69 0 39-24 62-59 62s-59-23-59-62c0-42 25-69 59-69Z" fill="#FFD3A8"/>
    <path d="M63 177C39 184 26 205 28 233c20-1 37-13 48-33m153-23c24 7 37 28 35 56-20-1-37-13-48-33" fill="${NIGHT}" stroke="${NIGHT}" stroke-width="7" stroke-linecap="round"/>
    <path d="m108 77 6-29 17 22 11-34 11 32 22-24-4 35" fill="#2E9BF0" stroke="${NIGHT}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <ellipse cx="110" cy="125" rx="26" ry="31" fill="white" stroke="${NIGHT}" stroke-width="6"/>
    <ellipse cx="182" cy="125" rx="26" ry="31" fill="white" stroke="${NIGHT}" stroke-width="6"/>
    <ellipse cx="114" cy="130" rx="12" ry="17" fill="${NIGHT}"/>
    <ellipse cx="178" cy="130" rx="12" ry="17" fill="${NIGHT}"/>
    <circle cx="110" cy="123" r="5" fill="white"/><circle cx="174" cy="123" r="5" fill="white"/>
    <circle cx="118" cy="135" r="2.5" fill="white"/><circle cx="182" cy="135" r="2.5" fill="white"/>
    <path d="M89 91c12-8 25-9 36-3m78 3c-12-8-25-9-36-3" fill="none" stroke="${NIGHT}" stroke-width="8" stroke-linecap="round"/>
    <path d="m146 144-18 14 18 14 18-14Z" fill="#FF8A1F" stroke="${NIGHT}" stroke-width="6" stroke-linejoin="round"/>
    <path d="M137 176c7 6 14 6 21 0" fill="none" stroke="${NIGHT}" stroke-width="5" stroke-linecap="round"/>
    ${ACCESSORIES[app.key]}
  </g></svg>`;
}

function webLink(app, className) {
  return app.web
    ? `<a class="${className}" href="${app.web}">Ouvrir la version web <span aria-hidden="true">→</span></a>`
    : `<span class="${className} soon">Bientôt disponible</span>`;
}

const state = { active: APPS[0], mirrored: false };
const page = document.getElementById('page');
const $ = (selector) => document.querySelector(selector);
const field = (name) => document.querySelector(`[data-field="${name}"]`);

function render() {
  const { active, mirrored } = state;
  page.style.setProperty('--brand', active.hero);
  page.style.setProperty('--brand-soft', active.soft);
  $('[data-toki="hero"]').innerHTML = toki(active, { mirrored });
  $('[data-toki="scale"]').innerHTML = toki(active, { compact: true, mirrored });
  $('[data-toki="tile"]').innerHTML = toki(active, { compact: true });
  field('name').textContent = active.name;
  field('exam').textContent = active.exam;
  field('dot').style.background = active.hero;
  field('label').textContent = active.label;
  field('hex').textContent = active.hero;
  field('accessory').textContent = active.accessory;
  field('cta').innerHTML = webLink(active, 'cta');
  for (const tab of document.querySelectorAll('.app-tabs button')) {
    const selected = tab.dataset.key === active.key;
    tab.classList.toggle('selected', selected);
    tab.setAttribute('aria-selected', String(selected));
  }
}

$('.app-tabs').innerHTML = APPS.map(
  (app, index) => `<button type="button" role="tab" data-key="${app.key}"><span>0${index + 1}</span><i style="background:${app.hero}"></i><b>${app.name}</b><small>${app.accessory}</small></button>`,
).join('');
for (const tab of document.querySelectorAll('.app-tabs button')) {
  tab.addEventListener('click', () => {
    state.active = APPS.find((a) => a.key === tab.dataset.key);
    render();
  });
}

$('.mirror').addEventListener('click', (event) => {
  state.mirrored = !state.mirrored;
  event.currentTarget.classList.toggle('on', state.mirrored);
  event.currentTarget.setAttribute('aria-pressed', String(state.mirrored));
  render();
});

$('.web-grid').innerHTML = APPS.map(
  (app) => `<article class="web-card${app.web ? '' : ' planned'}" style="--card:${app.hero};--card-soft:${app.soft}">
    <div class="web-icon">${toki(app, { compact: true })}</div>
    <div class="web-copy">
      <small>${app.web ? 'EN LIGNE' : 'EN PRÉPARATION'}</small>
      <h3>${app.name}</h3>
      <span>${app.exam}</span>
      <p>${app.pitch}</p>
      ${webLink(app, 'web-link')}
    </div>
  </article>`,
).join('');

render();
