/**
 * Previsualització de la landing d'Antonio Bustos.
 *
 * Replica routes/index.tsx (Fresh + Preact + Tailwind) en un sol fitxer.
 * Els textos surten dels diccionaris i18n/*.ts.
 *
 * A Fresh cada idioma té el seu fitxer de ruta:
 *   /     català   routes/index.tsx
 *   /en   anglès   routes/en.tsx
 *   /fr   francès  routes/fr.tsx
 *   /es   castellà routes/es.tsx
 */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "idioma": "ca",
  "graDeFilm": true,
  "midaHero": 100,
  "espaiSeccions": 100
}/*EDITMODE-END*/;

const IDIOMES = ["ca", "en", "fr", "es"];
const EMAIL = "hola@antoniobustos.com";
const XARXES = ["Instagram", "YouTube", "Spotify", "Bandcamp"];
const ARREL = "#top";
const VIDEO_FITXER = "antonio-violi.mp4";

/* Diccionaris (subconjunt representatiu de i18n/*.ts) */

const T = {
  ca: {
    codi: "ca",
    nav: { biografia: "Biografia", galeria: "Galeria", video: "Vídeo", contacte: "Contacte" },
    hero: { eyebrow: "Còrdova · Cadaqués · Barcelona", titol: "Antonio", accent: "Bustos", subtitol: "Guitarrista i compositor", boto: "Descobreix" },
    bio: {
      index: "01 — Biografia", titol: "Una guitarra forjada entre", accent: "dues terres",
      entrada: "Antonio Bustos va néixer a Còrdova i va descobrir el flamenc, i sobretot la guitarra, als disset anys. La seva mare, ballarina al Teatre Apol·lo de Barcelona, va ser una influència decisiva.",
      cos: "Format amb mestres com Manuel Cañizares i Manuel Granados, va completar els estudis al Conservatori Professional del Liceu de Barcelona i va girar per Europa amb el sextet Tenderete Flamenco abans d'instal·lar-se a Cadaqués per compondre la seva pròpia música.",
      fites: [
        { any: "17 anys", text: "La crida del flamenc" },
        { any: "Liceu", text: "Conservatori Professional, Barcelona" },
        { any: "Casa en las Nubes", text: "Primer àlbum, compost a Cadaqués" },
        { any: "Renacer", text: "Segon àlbum, en procés" },
      ],
    },
    galeria: {
      index: "02 — Galeria", titol: "Escenaris, assajos i", accent: "silencis",
      descripcio: "Un recorregut visual pel treball de l'artista entre concerts, produccions escèniques i el taller de composició.",
      captions: ["Tenderete Flamenco · Gira europea", "Casa en las Nubes · Cadaqués", "Retrat d'estudi"],
    },
    produccio: {
      index: "03 — Discografia i escena", titol: "Dos àlbums, una escena compartida",
      paragrafs: [
        "El primer disc, Casa en las Nubes, va néixer a Cadaqués, un poble bohemi del nord-est de la península on l'artista es va instal·lar per compondre la seva pròpia música.",
        "El segon, Renacer, suma el dibuix i la poesia a les composicions originals i creua cultures del nord i del sud: una rondeña de Màlaga i una habanera de Cadaqués conflueixen en una sola peça.",
        "Amb la ballarina Antonia Peris treballa en Sintonia, una producció escènica on Antonio actua com a guitarrista i actor: el primer guitarrista flamenc a interpretar un paper teatral dins d'una producció d'aquest tipus.",
      ],
      caption: "Taller de composició · Renacer",
    },
    video: {
      index: "04 — Vídeo", titol: "Violi, en primera persona",
      descripcio: "Una peça filmada en una sola presa, sense edició: la guitarra, la respiració i el silenci del taller de Cadaqués.",
      peu: "Guitarra flamenca · Enregistrament en directe", qualitat: "mp4 · HD",
    },
    contacte: {
      index: "05 — Contacte", titol: "Concerts, produccions i", accent: "col·laboracions",
      descripcio: "Per a contractació de concerts, sessions d'enregistrament, produccions escèniques o classes de guitarra flamenca, escriu directament. Resposta habitualment en dos dies feiners.",
      boto: "Escriu-me", directe: "Directe", xarxes: "Xarxes", base: "Base",
      telefon: "+34 600 000 000", ciutat: "Cadaqués, Alt Empordà", correu: "Correu",
    },
    footer: { subtitol: "Guitarrista i compositor", drets: "Tots els drets reservats.", tornar: "Tornar a dalt ↑" },
  },

  en: {
    codi: "en",
    nav: { biografia: "Biography", galeria: "Gallery", video: "Video", contacte: "Contact" },
    hero: { eyebrow: "Córdoba · Cadaqués · Barcelona", titol: "Antonio", accent: "Bustos", subtitol: "Guitarist and composer", boto: "Discover" },
    bio: {
      index: "01 — Biography", titol: "A guitar forged between", accent: "two lands",
      entrada: "Antonio Bustos was born in Córdoba and discovered flamenco, and above all the guitar, at the age of seventeen. His mother, a dancer at the Apollo Theatre in Barcelona, was a decisive influence.",
      cos: "Trained by masters such as Manuel Cañizares and Manuel Granados, he completed his studies at the Professional Conservatory of the Liceu in Barcelona and toured Europe with the sextet Tenderete Flamenco before settling in Cadaqués to compose his own music.",
      fites: [
        { any: "Age 17", text: "The flamenco calling" },
        { any: "Liceu", text: "Professional Conservatory, Barcelona" },
        { any: "Casa en las Nubes", text: "First album, composed in Cadaqués" },
        { any: "Renacer", text: "Second album, in progress" },
      ],
    },
    galeria: {
      index: "02 — Gallery", titol: "Stages, rehearsals and", accent: "silences",
      descripcio: "A visual journey through the artist's work, between concerts, stage productions and the composing room.",
      captions: ["Tenderete Flamenco · European tour", "Casa en las Nubes · Cadaqués", "Studio portrait"],
    },
    produccio: {
      index: "03 — Discography and stage", titol: "Two albums, one shared stage",
      paragrafs: [
        "The first album, Casa en las Nubes, was born in Cadaqués, a bohemian village in the north-east of the peninsula where the artist settled to compose his own music.",
        "The second, Renacer, adds drawing and poetry to his original compositions, crossing cultures from north and south: a rondeña from Málaga and a habanera from Cadaqués meet in a single piece.",
        "With dancer Antonia Peris he is working on Sintonia, a stage production in which Antonio performs as guitarist and actor: the first flamenco guitarist to play a theatrical role in a production of this kind.",
      ],
      caption: "Composing room · Renacer",
    },
    video: {
      index: "04 — Video", titol: "Violi, in the first person",
      descripcio: "A piece filmed in a single take, with no editing: the guitar, the breathing and the silence of the Cadaqués workshop.",
      peu: "Flamenco guitar · Live recording", qualitat: "mp4 · HD",
    },
    contacte: {
      index: "05 — Contact", titol: "Concerts, productions and", accent: "collaborations",
      descripcio: "For concert bookings, recording sessions, stage productions or flamenco guitar lessons, write directly. Replies usually within two working days.",
      boto: "Write to me", directe: "Direct", xarxes: "Networks", base: "Based in",
      telefon: "+34 600 000 000", ciutat: "Cadaqués, Alt Empordà", correu: "Email",
    },
    footer: { subtitol: "Guitarist and composer", drets: "All rights reserved.", tornar: "Back to top ↑" },
  },

  fr: {
    codi: "fr",
    nav: { biografia: "Biographie", galeria: "Galerie", video: "Vidéo", contacte: "Contact" },
    hero: { eyebrow: "Cordoue · Cadaqués · Barcelone", titol: "Antonio", accent: "Bustos", subtitol: "Guitariste et compositeur", boto: "Découvrir" },
    bio: {
      index: "01 — Biographie", titol: "Une guitare forgée entre", accent: "deux terres",
      entrada: "Antonio Bustos est né à Cordoue et a découvert le flamenco, et surtout la guitare, à dix-sept ans. Sa mère, danseuse au théâtre Apollo de Barcelone, a été une influence décisive.",
      cos: "Formé auprès de maîtres comme Manuel Cañizares et Manuel Granados, il a achevé ses études au Conservatoire professionnel du Liceu de Barcelone et a tourné en Europe avec le sextet Tenderete Flamenco avant de s'installer à Cadaqués pour composer sa propre musique.",
      fites: [
        { any: "17 ans", text: "L'appel du flamenco" },
        { any: "Liceu", text: "Conservatoire professionnel, Barcelone" },
        { any: "Casa en las Nubes", text: "Premier album, composé à Cadaqués" },
        { any: "Renacer", text: "Deuxième album, en cours" },
      ],
    },
    galeria: {
      index: "02 — Galerie", titol: "Scènes, répétitions et", accent: "silences",
      descripcio: "Un parcours visuel à travers le travail de l'artiste, entre concerts, productions scéniques et atelier de composition.",
      captions: ["Tenderete Flamenco · Tournée européenne", "Casa en las Nubes · Cadaqués", "Portrait en studio"],
    },
    produccio: {
      index: "03 — Discographie et scène", titol: "Deux albums, une scène partagée",
      paragrafs: [
        "Le premier disque, Casa en las Nubes, est né à Cadaqués, un village bohème du nord-est de la péninsule où l'artiste s'est installé pour composer sa propre musique.",
        "Le second, Renacer, ajoute le dessin et la poésie aux compositions originales et croise les cultures du nord et du sud : une rondeña de Malaga et une habanera de Cadaqués se rejoignent en une seule pièce.",
        "Avec la danseuse Antonia Peris, il travaille sur Sintonia, une production scénique où Antonio se produit comme guitariste et comédien : le premier guitariste flamenco à interpréter un rôle théâtral dans une production de ce type.",
      ],
      caption: "Atelier de composition · Renacer",
    },
    video: {
      index: "04 — Vidéo", titol: "Violi, à la première personne",
      descripcio: "Une pièce filmée en une seule prise, sans montage : la guitare, la respiration et le silence de l'atelier de Cadaqués.",
      peu: "Guitare flamenca · Enregistrement en direct", qualitat: "mp4 · HD",
    },
    contacte: {
      index: "05 — Contact", titol: "Concerts, productions et", accent: "collaborations",
      descripcio: "Pour une programmation de concerts, des sessions d'enregistrement, des productions scéniques ou des cours de guitare flamenca, écrivez directement. Réponse généralement sous deux jours ouvrés.",
      boto: "Écrivez-moi", directe: "Direct", xarxes: "Réseaux", base: "Basé à",
      telefon: "+34 600 000 000", ciutat: "Cadaqués, Alt Empordà", correu: "E-mail",
    },
    footer: { subtitol: "Guitariste et compositeur", drets: "Tous droits réservés.", tornar: "Retour en haut ↑" },
  },

  es: {
    codi: "es",
    nav: { biografia: "Biografía", galeria: "Galería", video: "Vídeo", contacte: "Contacto" },
    hero: { eyebrow: "Córdoba · Cadaqués · Barcelona", titol: "Antonio", accent: "Bustos", subtitol: "Guitarrista y compositor", boto: "Descubre" },
    bio: {
      index: "01 — Biografía", titol: "Una guitarra forjada entre", accent: "dos tierras",
      entrada: "Antonio Bustos nació en Córdoba y descubrió el flamenco, y sobre todo la guitarra, a los diecisiete años. Su madre, bailarina en el Teatro Apolo de Barcelona, fue una influencia decisiva.",
      cos: "Formado con maestros como Manuel Cañizares y Manuel Granados, completó los estudios en el Conservatorio Profesional del Liceu de Barcelona y giró por Europa con el sexteto Tenderete Flamenco antes de instalarse en Cadaqués para componer su propia música.",
      fites: [
        { any: "17 años", text: "La llamada del flamenco" },
        { any: "Liceu", text: "Conservatorio Profesional, Barcelona" },
        { any: "Casa en las Nubes", text: "Primer álbum, compuesto en Cadaqués" },
        { any: "Renacer", text: "Segundo álbum, en proceso" },
      ],
    },
    galeria: {
      index: "02 — Galería", titol: "Escenarios, ensayos y", accent: "silencios",
      descripcio: "Un recorrido visual por el trabajo del artista entre conciertos, producciones escénicas y el taller de composición.",
      captions: ["Tenderete Flamenco · Gira europea", "Casa en las Nubes · Cadaqués", "Retrato de estudio"],
    },
    produccio: {
      index: "03 — Discografía y escena", titol: "Dos álbumes, una escena compartida",
      paragrafs: [
        "El primer disco, Casa en las Nubes, nació en Cadaqués, un pueblo bohemio del nordeste de la península donde el artista se instaló para componer su propia música.",
        "El segundo, Renacer, suma el dibujo y la poesía a las composiciones originales y cruza culturas del norte y del sur: una rondeña de Málaga y una habanera de Cadaqués confluyen en una sola pieza.",
        "Con la bailarina Antonia Peris trabaja en Sintonia, una producción escénica donde Antonio actúa como guitarrista y actor: el primer guitarrista flamenco en interpretar un papel teatral dentro de una producción de este tipo.",
      ],
      caption: "Taller de composición · Renacer",
    },
    video: {
      index: "04 — Vídeo", titol: "Violi, en primera persona",
      descripcio: "Una pieza filmada en una sola toma, sin edición: la guitarra, la respiración y el silencio del taller de Cadaqués.",
      peu: "Guitarra flamenca · Grabación en directo", qualitat: "mp4 · HD",
    },
    contacte: {
      index: "05 — Contacto", titol: "Conciertos, producciones y", accent: "colaboraciones",
      descripcio: "Para contratación de conciertos, sesiones de grabación, producciones escénicas o clases de guitarra flamenca, escribe directamente. Respuesta habitualmente en dos días laborables.",
      boto: "Escríbeme", directe: "Directo", xarxes: "Redes", base: "Base",
      telefon: "+34 600 000 000", ciutat: "Cadaqués, Alt Empordà", correu: "Correo",
    },
    footer: { subtitol: "Guitarrista y compositor", drets: "Todos los derechos reservados.", tornar: "Volver arriba ↑" },
  },
};


/* Imatges
 *
 * A Fresh són fitxers de static/media servits a l'arrel:
 *   /media/antonio1.png   portada i galeria
 *   /media/antonio2.png   biografia i galeria
 *   /media/antonio3.png   galeria i taller
 *
 * Aquesta previsualització viu en un fitxer aïllat i no pot demanar fitxers
 * de static/, així que dibuixem un marc SVG amb l'encuadre i el to de cada
 * fotografia. En Fresh, canvia `src` per la ruta real.
 */
function marc(etiqueta, to, de) {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="0.4" y2="1">` +
    `<stop offset="0" stop-color="${to}"/><stop offset="1" stop-color="${de}"/>` +
    `</linearGradient><radialGradient id="v" cx="0.5" cy="0.36" r="0.72">` +
    `<stop offset="0" stop-color="#e8e0d5" stop-opacity="0.15"/>` +
    `<stop offset="1" stop-color="#000" stop-opacity="0"/>` +
    `</radialGradient></defs>` +
    `<rect width="300" height="400" fill="url(#g)"/>` +
    `<rect width="300" height="400" fill="url(#v)"/>` +
    `<g fill="none" stroke="#e8e0d5" stroke-opacity="0.15" stroke-width="0.75">` +
    `<circle cx="150" cy="150" r="62"/><path d="M150 88v124M118 150h64"/></g>` +
    `<text x="150" y="370" text-anchor="middle" fill="#e8e0d5" fill-opacity="0.32" ` +
    `font-family="Inter, sans-serif" font-size="8" letter-spacing="2.4">${etiqueta}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const IMATGES = {
  antonio1: marc("ANTONIO1.png", "#332b23", "#0d0c0b"),
  antonio2: marc("ANTONIO2.png", "#2a2622", "#0e0d0c"),
  antonio3: marc("antonio3.png", "#26241f", "#0c0b0a"),
};

/** Ordre de la graella, idèntic a tots els idiomes. */
const GALERIA_ORDRE = ["antonio2", "antonio3", "antonio1"];

/* Icones */

const ArrowDown = () => (
  <svg className="down" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M12 4v15m0 0 6-6m-6 6-6-6" strokeLinecap="round" />
  </svg>
);

const ArrowRight = () => (
  <svg className="right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M5 12h14m0 0-6-6m6 6-6 6" strokeLinecap="round" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);


/* Estils */

const CSS = `
  :root {
    --ink: #0a0a0a;
    --ink-soft: #1a1a1a;
    --line: #2a2a2a;
    --bone: #f5f5f5;
    --cru: #e8e0d5;
    --smoke: #666666;
    --hero: calc(var(--ocd-tweak-mida-hero, 100) * 1svh);
    --section: calc(var(--ocd-tweak-espai-seccions, 100) * clamp(5rem, 12vh, 9.5rem) / 100);
    --grain: var(--ocd-tweak-gra-de-film, 1);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; background: var(--ink); }
  body {
    margin: 0; background: var(--ink); color: var(--bone);
    font-family: Inter, "Helvetica Neue", Arial, sans-serif; font-weight: 300;
    -webkit-font-smoothing: antialiased;
  }
  ::selection { background: var(--cru); color: var(--ink); }
  :focus-visible { outline: 2px solid var(--cru); outline-offset: 3px; }
  h1, h2 { font-family: "Playfair Display", "Times New Roman", serif; font-weight: 400; }

  .wrap { max-width: 1400px; margin: 0 auto; padding-inline: clamp(1.25rem, 5vw, 4rem); }
  .eyebrow { font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.42em; color: color-mix(in srgb, var(--cru) 74%, transparent); }
  .accent { font-style: italic; color: var(--cru); }

  .btn {
    display: inline-flex; align-items: center; gap: 0.85rem;
    border: 1px solid color-mix(in srgb, var(--cru) 35%, transparent);
    padding: 1rem 2.25rem; font-size: 0.6875rem; text-transform: uppercase;
    letter-spacing: 0.3em; color: var(--cru); text-decoration: none; background: transparent;
    transition: background 0.5s ease, color 0.5s ease, border-color 0.5s ease;
  }
  .btn:hover { background: var(--cru); color: var(--ink); border-color: var(--cru); }
  .btn svg { width: 1rem; height: 1rem; transition: transform 0.5s ease; }
  .btn:hover svg.down { transform: translateY(4px); }
  .btn:hover svg.right { transform: translateX(4px); }

  header {
    position: fixed; inset: 0 0 auto 0; z-index: 40;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    background: color-mix(in srgb, var(--ink) 72%, transparent);
    backdrop-filter: blur(12px);
  }
  .nav-inner { display: flex; align-items: center; justify-content: space-between; gap: 1rem; height: 4rem; }
  .wordmark { display: flex; align-items: baseline; gap: 0.75rem; text-decoration: none; }
  .wordmark b { font-family: "Playfair Display", serif; font-weight: 400; font-size: 1.05rem; color: var(--bone); }
  .wordmark span { font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.32em; color: var(--smoke); }
  .nav-desktop { display: none; }
  .nav-desktop ul { display: flex; gap: 2.25rem; list-style: none; margin: 0; padding: 0; }
  .nav-desktop a {
    position: relative; font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.18em;
    color: color-mix(in srgb, var(--cru) 70%, transparent); text-decoration: none; transition: color 0.3s;
  }
  .nav-desktop a:hover { color: var(--cru); }
  .nav-desktop a::after { content: ""; position: absolute; left: 0; bottom: -0.375rem; height: 1px; width: 0; background: var(--cru); transition: width 0.3s; }
  .nav-desktop a:hover::after { width: 100%; }
  @media (min-width: 768px) { .nav-desktop { display: block; } .only-mobile { display: none; } }

  .langs { display: flex; gap: 2px; list-style: none; margin: 0; padding: 0; }
  .langs a {
    display: block; padding: 0.25rem 0.4rem; font-size: 0.625rem; text-transform: uppercase;
    letter-spacing: 0.24em; color: var(--smoke); text-decoration: none; transition: color 0.3s;
  }
  .langs a:hover { color: var(--cru); }
  .langs a[aria-current] { color: var(--cru); text-decoration: underline; text-underline-offset: 4px; text-decoration-color: color-mix(in srgb, var(--cru) 50%, transparent); }

  .hero { position: relative; isolation: isolate; display: flex; flex-direction: column; justify-content: flex-end; min-height: var(--hero); overflow: hidden; background: var(--ink); }
  .hero .bgimg { position: absolute; inset: 0; z-index: -2; width: 100%; height: 100%; object-fit: cover; object-position: 50% 35%; }
  .hero .scrim { position: absolute; inset: 0; z-index: -1; background: color-mix(in srgb, var(--ink) 55%, transparent); }
  .hero .scrim::before { content: ""; position: absolute; inset: 0; background: linear-gradient(to top, var(--ink), rgba(10,10,10,0.7) 45%, rgba(10,10,10,0.35)); }
  .hero .scrim::after { content: ""; position: absolute; inset: 0; background: linear-gradient(to right, rgba(10,10,10,0.85), rgba(10,10,10,0.3) 55%, transparent); }
  .hero .grain {
    position: absolute; inset: 0; z-index: 0; pointer-events: none;
    opacity: calc(0.05 * var(--grain)); mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E");
  }
  .hero h1 { margin: 0; font-size: clamp(3.25rem, 11vw, 7.5rem); line-height: 0.92; letter-spacing: -0.03em; color: var(--bone); }
  .hero h1 .accent { display: block; }
  .hero .sub { display: flex; align-items: center; gap: 1.25rem; margin-top: 2.5rem; }
  .hero .dash { width: 4rem; height: 1px; background: color-mix(in srgb, var(--cru) 40%, transparent); }
  .hero .sub p { margin: 0; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.3em; color: var(--cru); }
  .hero .credit { display: flex; justify-content: space-between; gap: 1rem; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 5rem; padding-top: 1.25rem; font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.3em; color: var(--smoke); }

  section.blk { border-top: 1px solid var(--line); padding-block: var(--section); scroll-margin-top: 4rem; }
  section.soft { background: var(--ink-soft); }
  h2 { margin: 1.5rem 0 0; font-size: clamp(2.25rem, 5.2vw, 3.75rem); line-height: 1.08; letter-spacing: -0.02em; color: var(--bone); text-wrap: balance; max-width: 34ch; }
  .intro { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1.5rem; }
  .desc { max-width: 34ch; margin: 0; font-size: 0.875rem; line-height: 1.75; color: var(--smoke); }

  .bio { display: grid; gap: 3.5rem; grid-template-columns: minmax(0, 1fr); }
  @media (min-width: 1024px) { .bio { grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr); gap: 6rem; } }
  figure { margin: 0; }
  .bio img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; background: var(--ink-soft); filter: grayscale(15%); display: block; }
  figcaption { display: flex; justify-content: space-between; gap: 1rem; margin-top: 1rem; font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.3em; color: var(--smoke); }
  .prose { max-width: 52ch; margin-top: 2.5rem; }
  .prose .lead { font-family: "Playfair Display", serif; font-size: clamp(1.25rem, 2.4vw, 1.5rem); line-height: 1.55; color: var(--bone); margin: 0 0 1.5rem; }
  .prose p { font-size: 0.9375rem; line-height: 1.85; color: color-mix(in srgb, var(--cru) 75%, transparent); margin: 0 0 1.5rem; }
  .prose p:last-child { margin-bottom: 0; }

  dl.fites { margin: 3.5rem 0 0; border-top: 1px solid var(--line); }
  dl.fites div { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 0.5rem; border-bottom: 1px solid var(--line); padding: 1rem 0; }
  dl.fites dt { font-family: "Playfair Display", serif; font-size: 1.125rem; color: var(--bone); }
  dl.fites dd { margin: 0; font-size: 0.8125rem; color: var(--smoke); }

  .grid-gal { display: grid; grid-template-columns: 1fr; gap: 0.75rem; margin-top: 3.5rem; }
  @media (min-width: 640px) {
    .grid-gal { grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 1rem; }
    .grid-gal figure:nth-child(1) { grid-column: span 8; }
    .grid-gal figure:nth-child(2) { grid-column: span 4; }
    .grid-gal figure:nth-child(3) { grid-column: span 12; }
  }
  .grid-gal figure { position: relative; overflow: hidden; background: var(--ink); }
  .grid-gal img { width: 100%; height: 100%; min-height: 240px; object-fit: cover; display: block; transition: transform 1.4s ease; }
  @media (min-width: 640px) { .grid-gal img { min-height: 280px; } }
  .grid-gal figure:hover img { transform: scale(1.04); }
  .grid-gal figcaption { position: absolute; inset: auto 0 0 0; margin: 0; padding: 4rem 1.25rem 1.25rem; background: linear-gradient(to top, rgba(10,10,10,0.9), transparent); align-items: flex-end; color: var(--cru); }
  .grid-gal .num { color: color-mix(in srgb, var(--cru) 45%, transparent); font-variant-numeric: tabular-nums; }

  .prod { display: grid; gap: 3.5rem; grid-template-columns: minmax(0, 1fr); }
  @media (min-width: 1024px) { .prod { grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr); gap: 6rem; } }
  .prod img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; display: block; filter: grayscale(10%); }

  .player { position: relative; overflow: hidden; border: 1px solid var(--line); background: #000; margin-top: 3.5rem; }
  .player .fallback { aspect-ratio: 16 / 9; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.85rem; background: linear-gradient(135deg, #000, #141414); color: var(--smoke); font-size: 0.8125rem; text-align: center; padding: 1.5rem; }
  .player .fallback .play { width: 3.5rem; height: 3.5rem; border: 1px solid var(--line); border-radius: 999px; display: grid; place-items: center; color: var(--cru); }
  .meta-row { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.75rem; margin-top: 1rem; font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.3em; color: var(--smoke); }

  .contacte { display: grid; gap: 3.5rem; grid-template-columns: minmax(0, 1fr); }
  @media (min-width: 1024px) { .contacte { grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr); gap: 6rem; } }
  .cols { display: grid; gap: 2.5rem; }
  .cols h3 { margin: 0 0 1rem; font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.32em; color: var(--smoke); font-family: Inter, sans-serif; font-weight: 400; }
  .cols ul { list-style: none; margin: 0; padding: 1rem 0 0; border-top: 1px solid var(--line); }
  .cols li a.mail { color: var(--bone); text-decoration: none; font-family: "Playfair Display", serif; font-size: 1.125rem; transition: color 0.3s; display: block; padding: 0.25rem 0; }
  .cols li a.mail:hover { color: var(--cru); }
  .cols .xarxa { display: grid; grid-template-columns: 1fr 1fr; gap: 0 1.5rem; padding-top: 0; }
  .cols .xarxa li { border-bottom: 1px solid var(--line); }
  .cols .xarxa a { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; padding: 0.75rem 0; font-size: 0.875rem; color: color-mix(in srgb, var(--cru) 78%, transparent); text-decoration: none; transition: color 0.3s; }
  .cols .xarxa a:hover { color: var(--cru); }
  .cols .ciutat { margin: 1rem 0 0; border-top: 1px solid var(--line); padding-top: 1rem; font-family: "Playfair Display", serif; font-size: 1.125rem; color: var(--bone); }

  footer { border-top: 1px solid var(--line); background: var(--ink); }
  .foot-top { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 2rem; }
  .foot-top .name { margin: 0; font-family: "Playfair Display", serif; font-size: 1.5rem; color: var(--bone); }
  .foot-top .role { margin: 0.5rem 0 0; font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.32em; color: var(--smoke); }
  .foot-links { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem 1.5rem; list-style: none; margin: 0; padding: 0; }
  .foot-links a { font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.24em; color: color-mix(in srgb, var(--cru) 60%, transparent); text-decoration: none; transition: color 0.3s; }
  .foot-links a:hover { color: var(--cru); }
  .foot-bottom { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.5rem; border-top: 1px solid var(--line); margin-top: 2.5rem; padding-top: 1.5rem; font-size: 0.625rem; letter-spacing: 0.16em; color: var(--smoke); }
  .foot-bottom a { color: var(--smoke); text-decoration: none; text-transform: uppercase; letter-spacing: 0.3em; transition: color 0.3s; }
  .foot-bottom a:hover { color: var(--cru); }

  /* Revelat suau quan l'entorn ho permet */
  @keyframes ab-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
  @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: view()) {
      .reveal { animation: ab-in linear both; animation-timeline: view(); animation-range: entry 5% cover 35%; }
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .reveal { opacity: 1 !important; transform: none !important; animation: none !important; }
  }
`;


/* Components */

/** Selector d'idioma. En Fresh són enllaços reals, un per URL. */
function LangSwitcher({ actual, onChange }) {
  return (
    <nav aria-label="Idioma">
      <ul className="langs">
        {IDIOMES.map((codi) => (
          <li key={codi}>
            <a
              href={`#${codi}`}
              lang={codi}
              hrefLang={codi}
              aria-current={codi === actual ? "true" : undefined}
              onClick={(e) => {
                e.preventDefault();
                onChange(codi);
              }}
            >
              {codi}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Botó i panell de navegació per a mòbil. */
function MobileMenu({ actual, onChange }) {
  const [obert, setObert] = React.useState(false);
  const t = T[actual];

  const navItems = [
    { href: "#biografia", label: t.nav.biografia },
    { href: "#galeria", label: t.nav.galeria },
    { href: "#video", label: t.nav.video },
    { href: "#contacte", label: t.nav.contacte },
  ];

  const barra = (extra) => ({
    display: "block", width: 24, height: 1, background: "currentColor", ...extra,
  });

  return (
    <div className="only-mobile">
      <button
        type="button"
        aria-expanded={obert}
        aria-controls="menu-mobil"
        aria-label={obert ? "Tanca el menú" : "Obre el menú"}
        onClick={() => setObert((v) => !v)}
        style={{
          background: "none", border: 0, padding: 0, cursor: "pointer", color: "var(--cru)",
          display: "flex", flexDirection: "column", gap: 5, alignItems: "center",
          justifyContent: "center", width: 40, height: 40,
        }}
      >
        <span aria-hidden="true" style={barra({ transform: obert ? "translateY(6px) rotate(45deg)" : "none", transition: "transform .3s" })} />
        <span aria-hidden="true" style={barra({ opacity: obert ? 0 : 1, transition: "opacity .3s" })} />
        <span aria-hidden="true" style={barra({ transform: obert ? "translateY(-6px) rotate(-45deg)" : "none", transition: "transform .3s" })} />
      </button>

      {obert && (
        <div
          id="menu-mobil"
          style={{
            position: "fixed", inset: "4rem 0 0 0", zIndex: 40, overflowY: "auto",
            padding: "2.5rem clamp(1.25rem, 5vw, 4rem)", background: "var(--ink)",
            borderTop: "1px solid var(--line)",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {navItems.map((item, i) => (
              <li key={item.href} style={{ borderBottom: "1px solid var(--line)" }}>
                <a
                  href={item.href}
                  onClick={() => setObert(false)}
                  style={{
                    display: "flex", alignItems: "baseline", justifyContent: "space-between",
                    padding: "1.25rem 0", fontFamily: '"Playfair Display", serif',
                    fontSize: "1.5rem", color: "var(--bone)", textDecoration: "none",
                  }}
                >
                  {item.label}
                  <span style={{ fontSize: "0.625rem", color: "var(--smoke)", fontVariantNumeric: "tabular-nums" }}>
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p style={{ marginTop: "2.5rem", fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--smoke)" }}>
            Idioma
          </p>
          <div style={{ marginTop: "0.75rem" }}>
            <LangSwitcher
              actual={actual}
              onChange={(c) => {
                setObert(false);
                onChange(c);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function SiteNav({ actual, onChange }) {
  const t = T[actual];
  const navItems = [
    { href: "#biografia", label: t.nav.biografia },
    { href: "#galeria", label: t.nav.galeria },
    { href: "#video", label: t.nav.video },
    { href: "#contacte", label: t.nav.contacte },
  ];

  return (
    <header>
      <div className="wrap nav-inner">
        <a className="wordmark" href={ARREL}>
          <b>Antonio Bustos</b>
          <span>Flamenco</span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
          <nav className="nav-desktop" aria-label={t.nav.biografia}>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </nav>

          <LangSwitcher actual={actual} onChange={onChange} />
          <MobileMenu actual={actual} onChange={onChange} />
        </div>
      </div>
    </header>
  );
}

function HeroSection({ t }) {
  return (
    <section className="hero" id="top">
      <img className="bgimg" src={IMATGES.antonio1} alt="Retrat d'Antonio Bustos amb la guitarra flamenca" />
      <div className="scrim" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="wrap" style={{ paddingBottom: "clamp(3rem, 7vh, 7rem)", paddingTop: "9rem" }}>
        <div style={{ maxWidth: "60rem" }}>
          <p className="eyebrow" style={{ margin: "0 0 1.75rem" }}>{t.hero.eyebrow}</p>

          <h1>
            {t.hero.titol}
            <span className="accent">{t.hero.accent}</span>
          </h1>

          <div className="sub">
            <span className="dash" aria-hidden="true" />
            <p>{t.hero.subtitol}</p>
          </div>

          <div style={{ marginTop: "3.5rem" }}>
            <a className="btn" href="#biografia">
              {t.hero.boto}
              <ArrowDown />
            </a>
          </div>
        </div>
      </div>

      <div className="wrap" style={{ paddingBottom: "2rem" }}>
        <div className="credit">
          <span>Retrat · Antonio Bustos</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}

function BioSection({ t }) {
  return (
    <section className="blk" id="biografia">
      <div className="wrap">
        <div className="bio">
          <div className="reveal">
            <figure>
              <img src={IMATGES.antonio2} alt="Antonio Bustos durant una interpretació en directe" />
              <figcaption>
                <span>Antonio Bustos</span>
                <span>Guitarra flamenca</span>
              </figcaption>
            </figure>
          </div>

          <div>
            <p className="eyebrow" style={{ margin: 0 }}>{t.bio.index}</p>
            <h2>
              {t.bio.titol}
              <span className="accent"> {t.bio.accent}</span>
            </h2>

            <div className="prose">
              <p className="lead">{t.bio.entrada}</p>
              <p>{t.bio.cos}</p>
            </div>

            <dl className="fites">
              {t.bio.fites.map((fita) => (
                <div key={fita.any}>
                  <dt>{fita.any}</dt>
                  <dd>{fita.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function GaleriaSection({ t }) {
  return (
    <section className="blk soft" id="galeria">
      <div className="wrap">
        <div className="intro">
          <div>
            <p className="eyebrow" style={{ margin: 0 }}>{t.galeria.index}</p>
            <h2>
              {t.galeria.titol}
              <span className="accent"> {t.galeria.accent}</span>
            </h2>
          </div>
          <p className="desc">{t.galeria.descripcio}</p>
        </div>

        <div className="grid-gal reveal">
          {GALERIA_ORDRE.map((clau, i) => (
            <figure key={clau}>
              <img src={IMATGES[clau]} alt={t.galeria.captions[i]} />
              <figcaption>
                <span>{t.galeria.captions[i]}</span>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContentSection({ t }) {
  return (
    <section className="blk soft" id="produccio">
      <div className="wrap">
        <div className="prod">
          <div className="reveal">
            <p className="eyebrow" style={{ margin: 0 }}>{t.produccio.index}</p>
            <h2 style={{ maxWidth: "20ch" }}>{t.produccio.titol}</h2>
            <div className="prose">
              {t.produccio.paragrafs.map((par, i) => <p key={i}>{par}</p>)}
            </div>
          </div>

          <figure>
            <img src={IMATGES.antonio3} alt="Antonio Bustos treballant en la composició del segon àlbum" />
            <figcaption><span>{t.produccio.caption}</span></figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function VideoSection({ t }) {
  /*
   * A Fresh: <video controls playsinline poster="/media/antonio1.png">
   *            <source src="/media/antonio-violi.mp4" type="video/mp4" />
   * La previsualització no pot servir el fitxer, així que mostra el marc
   * del reproductor amb el nom real del recurs.
   */
  return (
    <section className="blk" id="video">
      <div className="wrap">
        <div className="intro">
          <div>
            <p className="eyebrow" style={{ margin: 0 }}>{t.video.index}</p>
            <h2>{t.video.titol}</h2>
          </div>
          <p className="desc">{t.video.descripcio}</p>
        </div>

        <div className="reveal">
          <div className="player">
            <div className="fallback">
              <span className="play" aria-hidden="true"><PlayIcon /></span>
              <span>{VIDEO_FITXER}</span>
            </div>
          </div>

          <div className="meta-row">
            <span>{t.video.peu}</span>
            <span style={{ fontVariantNumeric: "tabular-nums" }}>{t.video.qualitat}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContacteSection({ t }) {
  const c = t.contacte;
  return (
    <section className="blk soft" id="contacte">
      <div className="wrap">
        <div className="contacte">
          <div>
            <p className="eyebrow" style={{ margin: 0 }}>{c.index}</p>
            <h2>
              {c.titol}
              <span className="accent"> {c.accent}</span>
            </h2>
            <p className="desc" style={{ maxWidth: "48ch", marginTop: "2rem" }}>{c.descripcio}</p>

            <div style={{ marginTop: "2.5rem" }}>
              <a className="btn" href={`mailto:${EMAIL}?subject=${encodeURIComponent(c.index)}`}>
                {c.boto}
                <ArrowRight />
              </a>
            </div>
          </div>

          <div className="cols">
            <div>
              <h3>{c.directe}</h3>
              <ul>
                <li><a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li><a className="mail" href={`tel:${c.telefon.replace(/\s/g, "")}`}>{c.telefon}</a></li>
              </ul>
            </div>

            <div>
              <h3>{c.xarxes}</h3>
              <ul className="xarxa">
                {XARXES.map((xarxa) => (
                  <li key={xarxa}>
                    <a href="#contacte">
                      {xarxa}
                      <span aria-hidden="true" style={{ fontSize: "0.75rem", color: "var(--smoke)" }}>↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>{c.base}</h3>
              <p className="ciutat">{c.ciutat}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ t }) {
  const any = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap" style={{ paddingBlock: "3rem" }}>
        <div className="foot-top">
          <div>
            <p className="name">Antonio Bustos</p>
            <p className="role">{t.footer.subtitol}</p>
          </div>
          <ul className="foot-links">
            {XARXES.map((xarxa) => (
              <li key={xarxa}><a href="#contacte">{xarxa}</a></li>
            ))}
            <li><a href={`mailto:${EMAIL}`}>{t.contacte.correu}</a></li>
          </ul>
        </div>

        <div className="foot-bottom">
          <p style={{ margin: 0 }}>© {any} Antonio Bustos. {t.footer.drets}</p>
          <a href={ARREL}>{t.footer.tornar}</a>
        </div>
      </div>
    </footer>
  );
}

/* Arrel */

function App() {
  const [idioma, setIdioma] = React.useState(TWEAK_DEFAULTS.idioma);
  const t = T[idioma] || T.ca;

  return (
    <>
      <style>{CSS}</style>
      <div lang={t.codi}>
        <SiteNav actual={idioma} onChange={setIdioma} />
        <main>
          <HeroSection t={t} />
          <BioSection t={t} />
          <GaleriaSection t={t} />
          <ContentSection t={t} />
          <VideoSection t={t} />
          <ContacteSection t={t} />
        </main>
        <SiteFooter t={t} />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
