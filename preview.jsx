// Previsualitzacio de la landing d'Antonio Bustos.
// La implementacio real viu a routes/index.tsx i components/ (Fresh + Preact + Tailwind).
// Fresh serveix static/media/* com a "/media/*". El previsualitzador serveix un unic
// fitxer aillat, aixi que aqui les imatges son SVG en linia (mateixa paleta i composicio).

const SVG_RETRAT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1500" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="b" x1="0" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="#1d1a17"/><stop offset=".55" stop-color="#121110"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient><radialGradient id="g" cx=".62" cy=".34" r=".55"><stop offset="0" stop-color="#e8e0d5" stop-opacity=".16"/><stop offset="1" stop-color="#e8e0d5" stop-opacity="0"/></radialGradient><linearGradient id="f" x1="0" y1="0" x2=".4" y2="1"><stop offset="0" stop-color="#2c2824"/><stop offset="1" stop-color="#141211"/></linearGradient></defs><rect width="1200" height="1500" fill="url(#b)"/><rect width="1200" height="1500" fill="url(#g)"/><ellipse cx="660" cy="470" rx="112" ry="130" fill="url(#f)"/><path d="M525 615h270c52 0 88 42 88 94v465c0 34-26 60-60 60H497c-34 0-60-26-60-60V709c0-52 36-94 88-94z" fill="url(#f)"/><path d="M420 885c-72 0-126 56-126 126 0 56 33 92 33 132 0 46-43 72-43 129 0 81 72 132 156 132 93 0 160-63 160-147 0-66-40-96-40-140 0-48 42-81 42-142 0-60-48-90-106-90z" fill="#1c1917"/><rect x="147" y="727" width="247" height="26" rx="5" transform="rotate(-34 147 727)" fill="#2a2523"/></svg>`;

const SVG_ESCENARI = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="b" x1="0" y1="0" x2=".6" y2="1"><stop offset="0" stop-color="#23201c"/><stop offset=".6" stop-color="#161412"/><stop offset="1" stop-color="#0c0b0a"/></linearGradient><radialGradient id="k" cx=".34" cy=".26" r=".5"><stop offset="0" stop-color="#f5f5f5" stop-opacity=".14"/><stop offset="1" stop-color="#f5f5f5" stop-opacity="0"/></radialGradient></defs><rect width="1600" height="1200" fill="url(#b)"/><rect width="1600" height="1200" fill="url(#k)"/><path d="M400 720c160-253 400-400 626-400 280 0 466 173 466 400 0 280-226 506-560 560-306 48-532-187-532-560z" fill="#0d0c0b"/><rect x="160" y="896" width="1280" height="21" rx="10" fill="#e8e0d5" opacity=".22"/><rect x="320" y="824" width="1093" height="11" rx="6" fill="#e8e0d5" opacity=".14"/></svg>`;

const SVG_PATI = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 1400" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="b" x1="0" y1="1" x2=".8" y2="0"><stop offset="0" stop-color="#191715"/><stop offset=".5" stop-color="#100f0e"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient><radialGradient id="l" cx=".5" cy=".14" r=".6"><stop offset="0" stop-color="#e8e0d5" stop-opacity=".18"/><stop offset="1" stop-color="#e8e0d5" stop-opacity="0"/></radialGradient></defs><rect width="1400" height="1400" fill="url(#b)"/><rect width="1400" height="1400" fill="url(#l)"/><rect x="420" y="380" width="240" height="700" rx="120" fill="#0b0a09"/><rect x="700" y="380" width="240" height="700" rx="120" fill="#0b0a09"/><rect x="392" y="1060" width="596" height="26" rx="13" fill="#2a2523"/><g opacity=".3" stroke="#e8e0d5" stroke-width="3" fill="none"><path d="M300 620c180-140 420-190 640-150"/><path d="M300 760c180-140 420-190 640-150"/></g></svg>`;

const IMG = {
  retrat: `url("data:image/svg+xml,${encodeURIComponent(SVG_RETRAT)}")`,
  escenari: `url("data:image/svg+xml,${encodeURIComponent(SVG_ESCENARI)}")`,
  pati: `url("data:image/svg+xml,${encodeURIComponent(SVG_PATI)}")`,
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroOpacity": 55,
  "sectionSpace": 1
}/*EDITMODE-END*/;

const CSS = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap');
:root{--ink:#0a0a0a;--ink-soft:#1a1a1a;--line:#2a2a2a;--bone:#f5f5f5;--cru:#e8e0d5;--smoke:#666;--section:calc(clamp(5rem,12vh,9.5rem) * var(--ocd-tweak-section-space,1))}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:#0a0a0a;color:#f5f5f5;font-family:Inter,"Helvetica Neue",sans-serif;-webkit-font-smoothing:antialiased}
::selection{background:#e8e0d5;color:#0a0a0a}
:focus-visible{outline:2px solid #e8e0d5;outline-offset:3px}
.serif{font-family:"Playfair Display",serif;font-weight:400}
.eyebrow{font-size:.6875rem;letter-spacing:.42em;text-transform:uppercase;color:rgba(232,224,213,.7)}
.wrap{max-width:1400px;margin:0 auto;padding-inline:clamp(1.5rem,6vw,4rem)}
section{border-top:1px solid #2a2a2a}
.sect{padding-block:var(--section)}
.ab-reveal{opacity:0;transform:translateY(14px);transition:opacity .9s ease,transform .9s ease}
.ab-reveal.is-in{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){.ab-reveal{opacity:1;transform:none;transition:none}html{scroll-behavior:auto}}
header{position:fixed;inset:0 0 auto;z-index:40;border-bottom:1px solid rgba(255,255,255,.05);background:rgba(10,10,10,.72);backdrop-filter:blur(12px)}
.nav{display:flex;align-items:center;justify-content:space-between;height:64px;max-width:1400px;margin:0 auto;padding-inline:clamp(1.5rem,6vw,4rem)}
.nav a.brand{color:#f5f5f5;text-decoration:none;font-size:1.05rem}
.nav ul{display:flex;gap:2.25rem;list-style:none;margin:0;padding:0}
.nav ul a{position:relative;color:rgba(232,224,213,.7);text-decoration:none;font-size:.8125rem;text-transform:uppercase;letter-spacing:.18em;transition:color .3s}
.nav ul a:hover{color:#e8e0d5}
.nav ul a::after{content:"";position:absolute;left:0;bottom:-6px;height:1px;width:0;background:#e8e0d5;transition:width .3s}
.nav ul a:hover::after{width:100%}
.burger{display:none;flex-direction:column;align-items:center;justify-content:center;gap:5px;width:40px;height:40px;background:none;border:0;cursor:pointer}
.burger span{display:block;height:1px;width:24px;background:#e8e0d5}
@media(max-width:820px){.nav ul{display:none}.burger{display:flex}}
.hero{position:relative;isolation:isolate;min-height:100svh;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;border-top:0;background:#0a0a0a}
.hero .photo{position:absolute;inset:0;z-index:-2;width:100%;height:100%;object-fit:cover;object-position:50% 28%}
.hero .scrim{position:absolute;inset:0;z-index:-1;background:rgba(10,10,10,calc(var(--ocd-tweak-hero-opacity,55) / 100))}
.hero .scrim i{position:absolute;inset:0;display:block}
.hero .scrim i.a{background:linear-gradient(to top,#0a0a0a,rgba(10,10,10,.7) 50%,rgba(10,10,10,.35))}
.hero .scrim i.b{background:linear-gradient(to right,rgba(10,10,10,.85),rgba(10,10,10,.3),transparent)}
.hero .grain{position:absolute;inset:0;pointer-events:none;opacity:.05;mix-blend-mode:overlay;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E")}
h1{font-family:"Playfair Display",serif;font-weight:400;letter-spacing:-.03em;line-height:.92;font-size:clamp(3.25rem,10vw,7.5rem);margin:0;text-wrap:balance}
h1 .it{display:block;font-style:italic;color:#e8e0d5}
.dotline{display:flex;align-items:center;gap:1.25rem;margin-top:2.5rem;max-width:28rem}
.dotline i{display:block;height:1px;width:4rem;background:rgba(232,224,213,.4)}
.dotline p{margin:0;color:#e8e0d5;text-transform:uppercase;letter-spacing:.3em;font-size:.95rem;font-weight:300}
.btn{display:inline-flex;align-items:center;gap:.75rem;border:1px solid rgba(232,224,213,.35);padding:1rem 2.25rem;color:#e8e0d5;text-decoration:none;font-size:.6875rem;text-transform:uppercase;letter-spacing:.3em;background:none;transition:background .5s,color .5s,border-color .5s}
.btn:hover{background:#e8e0d5;color:#0a0a0a;border-color:#e8e0d5}
.btn svg{transition:transform .5s}
.btn:hover svg{transform:translateY(4px)}
.hero-foot{display:flex;justify-content:space-between;align-items:center;border-top:1px solid rgba(255,255,255,.1);padding-top:1.25rem;margin-top:3.5rem}
.meta{font-size:.625rem;letter-spacing:.3em;text-transform:uppercase;color:#666}
.title{font-family:"Playfair Display",serif;font-weight:400;font-size:clamp(2.25rem,4.4vw,3.75rem);line-height:1.08;letter-spacing:-.02em;margin:1.5rem 0 0;text-wrap:balance}
.title em,h2.sectitle em{font-style:italic;color:#e8e0d5}
.lede{color:rgba(232,224,213,.75);font-weight:300;line-height:1.85;max-width:52ch}
.grid2{display:grid;gap:clamp(3rem,6vw,6rem);grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr)}
.grid2b{display:grid;gap:clamp(3rem,5vw,5rem);grid-template-columns:1fr 1fr;align-items:start}
.contactgrid{display:grid;gap:clamp(3rem,6vw,6rem);grid-template-columns:minmax(0,1fr) minmax(0,.8fr)}
@media(max-width:900px){.grid2,.grid2b,.contactgrid{grid-template-columns:1fr}}
figure{margin:0}
.figure{overflow:hidden;background:#1a1a1a}
.figure .bg{width:100%;height:100%;background-size:cover;background-position:center}
.as34{aspect-ratio:3/4}
.as43{aspect-ratio:4/3}
.fcap{display:flex;justify-content:space-between;gap:1rem;margin-top:1rem;font-size:.625rem;letter-spacing:.3em;text-transform:uppercase;color:#666}
dl.biofites{margin:3.5rem 0 0;border-top:1px solid #2a2a2a}
dl.biofites div{display:flex;flex-wrap:wrap;justify-content:space-between;gap:.5rem;border-bottom:1px solid #2a2a2a;padding:.95rem 0}
dl.biofites dt{font-family:"Playfair Display",serif;font-size:1.125rem}
dl.biofites dd{margin:0;font-size:.8125rem;font-weight:300;color:#666}
h2.sectitle{font-family:"Playfair Display",serif;font-weight:400;font-size:clamp(2.25rem,4.4vw,3.1rem);line-height:1.08;letter-spacing:-.02em;margin:1.5rem 0 0;max-width:34rem;text-wrap:balance}
.side{color:#666;font-size:.875rem;font-weight:300;line-height:1.7;max-width:22rem}
.gal{display:grid;grid-template-columns:repeat(12,1fr);gap:1rem;margin-top:3.5rem}
.gal figure{position:relative;overflow:hidden;background:#0f0f0f;grid-column:span 6;min-height:280px}
.gal figure.a{grid-column:span 8;min-height:440px}
.gal figure.b{grid-column:span 4;min-height:440px}
.gal figure.full{grid-column:span 12;min-height:360px}
@media(max-width:640px){.gal{grid-template-columns:1fr}.gal figure{grid-column:span 1!important;min-height:260px}}
.gal img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 1.4s ease-out}
.gal figure:hover img{transform:scale(1.04)}
.gal figure::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(10,10,10,.92),rgba(10,10,10,.2) 55%,rgba(10,10,10,.05))}
.gal figcaption{position:absolute;inset-inline:0;bottom:0;z-index:1;display:flex;justify-content:space-between;align-items:flex-end;gap:1rem;padding:4rem 1.25rem 1.25rem}
.gal figcaption span:first-child{font-size:.6875rem;letter-spacing:.28em;text-transform:uppercase;color:#e8e0d5}
.gal figcaption span:last-child{font-size:.625rem;letter-spacing:.2em;color:rgba(232,224,213,.45)}
.vidwrap{margin-top:3.5rem}
.vidwrap video{width:100%;display:block;aspect-ratio:16/9;object-fit:cover;background:#0a0a0a;border:1px solid #2a2a2a}
.vidnote{display:flex;flex-wrap:wrap;justify-content:space-between;gap:.75rem;margin-top:1rem;font-size:.625rem;letter-spacing:.3em;text-transform:uppercase;color:#666}
.contactlist{margin:1rem 0 0;padding:0;list-style:none;border-top:1px solid #2a2a2a}
.contactlist li{border-bottom:1px solid #2a2a2a}
.contactlist a{display:flex;justify-content:space-between;align-items:center;padding:.75rem 0;font-family:"Playfair Display",serif;font-size:1.125rem;color:#f5f5f5;text-decoration:none;transition:color .3s}
.contactlist a:hover{color:#e8e0d5}
.coord{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:1rem;padding-top:1rem;border-top:1px solid #2a2a2a}
.label{font-size:.625rem;letter-spacing:.32em;text-transform:uppercase;color:#666}
.coord a{display:flex;justify-content:space-between;padding:.7rem 0;border-bottom:1px solid #2a2a2a;color:rgba(232,224,213,.75);text-decoration:none;font-weight:300;transition:color .3s}
.coord a:hover{color:#e8e0d5}
.stack{display:grid;gap:2.5rem}
footer{border-top:1px solid #2a2a2a;background:#0a0a0a}
.foot{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:2rem}
.foot-name{font-family:"Playfair Display",serif;font-size:1.5rem;margin:0}
.foot ul{display:flex;flex-wrap:wrap;gap:1.5rem;list-style:none;margin:0;padding:0}
.foot ul a{color:rgba(232,224,213,.6);font-size:.6875rem;letter-spacing:.24em;text-transform:uppercase;text-decoration:none;transition:color .3s}
.foot ul a:hover{color:#e8e0d5}
.foot-bottom{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:.5rem;border-top:1px solid #2a2a2a;margin-top:2.5rem;padding-top:1.5rem}
`;

const FITES = [
  ["17 anys", "La crida del flamenc"],
  ["Liceu", "Conservatori Professional, Barcelona"],
  ["Casa en las Nubes", "Primer àlbum, compost a Cadaqués"],
  ["Renacer", "Segon àlbum, en procés"],
];

const GALERIA = [
  { cls: "a", bg: IMG.escenari, alt: "Antonio Bustos en un escenari durant un concert", cap: "Tenderete Flamenco · Gira europea" },
  { cls: "b", bg: IMG.pati, alt: "Antonio Bustos assegut amb la guitarra en un pati encalçat", cap: "Casa en las Nubes · Cadaqués" },
  { cls: "full", bg: IMG.retrat, alt: "Retrat d'Antonio Bustos amb la guitarra flamenca", cap: "Retrat d'estudi" },
];

const ENLLACOS = [
  ["Instagram", "https://www.instagram.com/"],
  ["YouTube", "https://www.youtube.com/"],
  ["Spotify", "https://open.spotify.com/"],
  ["Bandcamp", "https://bandcamp.com/"],
];

const BIO = [
  "Antonio Bustos va néixer a Còrdova, al sud d'Espanya. Als disset anys va viure el que els artistes flamencs anomenen «la crida»: es va enamorar del flamenc i, sobretot, de la guitarra. La seva mare havia estat ballarina al Teatre Apol·lo de Barcelona i va ser una influència decisiva.",
  "Format amb mestres com Manuel Cañizares i Manuel Granados, va completar els estudis al Conservatori Professional del Liceu de Barcelona i va girar per Europa amb el sextet Tenderete Flamenco. Després es va instal·lar a Cadaqués per compondre la seva pròpia música: el primer àlbum, Casa en las Nubes, i el segon, Renacer, en curs, amb la col·laboració de la ballarina Antonia Peris i la violinista Sarah Thomson.",
];

function App() {
  const any = new Date().getFullYear();

  return (
    <div style={{ background: "#0a0a0a" }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <header>
        <div class="nav">
          <a class="brand serif" href="#top">Antonio Bustos</a>
          <ul>
            <li><a href="#biografia">Biografia</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#video">Vídeo</a></li>
            <li><a href="#contacte">Contacte</a></li>
          </ul>
          <button class="burger" type="button" aria-label="Obre el menú"><span /><span /><span /></button>
        </div>
      </header>

      <section class="hero" id="top">
        <img class="photo" src={IMG.escenari} alt="Antonio Bustos tocant la guitarra flamenca" />
        <div class="grain" />
        <div class="scrim"><i class="a" /><i class="b" /></div>
        <div class="wrap" style={{ paddingBottom: "5.5rem", paddingTop: "9rem" }}>
          <p class="eyebrow" style={{ marginBottom: "2rem" }}>Còrdova · Cadaqués · Barcelona</p>
          <h1>Antonio<span class="it">Bustos</span></h1>
          <div class="dotline"><i /><p>Guitarrista i compositor</p></div>
          <div style={{ marginTop: "3.25rem" }}>
            <a class="btn" href="#biografia">
              Descobreix
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 4v15m0 0 6-6m-6 6-6-6" stroke-linecap="round" />
              </svg>
            </a>
          </div>
        </div>
        <div class="wrap">
          <div class="hero-foot">
            <span class="meta">Retrat · Antonio Bustos</span>
            <span class="meta">{any}</span>
          </div>
        </div>
      </section>

      <section class="sect" id="biografia">
        <div class="wrap">
          <div class="grid2">
            <figure>
              <div class="figure as34">
                <div class="bg" style={{ backgroundImage: IMG.retrat }} role="img" aria-label="Antonio Bustos durant una interpretació en directe" />
              </div>
              <figcaption class="fcap"><span>Antonio Bustos</span><span>Guitarra flamenca</span></figcaption>
            </figure>
            <div class="ab-reveal">
              <p class="eyebrow">01 — Biografia</p>
              <h2 class="title">Una guitarra forjada entre<em> dues terres</em></h2>
              <div style={{ marginTop: "2.5rem", display: "grid", gap: "1.5rem", maxWidth: "52ch" }}>
                <p class="serif" style={{ fontSize: "1.5rem", lineHeight: 1.55, color: "#f5f5f5", margin: 0 }}>
                  {BIO[0]}
                </p>
                <p class="lede" style={{ fontSize: ".9375rem", margin: 0 }}>{BIO[1]}</p>
              </div>
              <dl class="biofites">
                {FITES.map(([a, t]) => <div key={a}><dt>{a}</dt><dd>{t}</dd></div>)}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section class="sect" id="galeria" style={{ background: "#1a1a1a" }}>
        <div class="wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
              <p class="eyebrow">02 — Galeria</p>
              <h2 class="sectitle">Escenaris, assajos i<em> silencis</em></h2>
            </div>
            <p class="side">
              Un recorregut visual pel treball de l'artista entre concerts, produccions escèniques i el
              taller de composició.
            </p>
          </div>
          <div class="gal ab-reveal">
            {GALERIA.map((g, i) => (
              <figure class={g.cls} key={g.src}>
                <img src={g.src} alt={g.alt} loading="lazy" />
                <figcaption>
                  <span>{g.cap}</span>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section class="sect">
        <div class="wrap">
          <div class="grid2b">
            <div class="ab-reveal">
              <p class="eyebrow">Discografia i escena</p>
              <h2 class="title">Dos àlbums, una escena compartida</h2>
              <div style={{ marginTop: "2rem", display: "grid", gap: "1.25rem", maxWidth: "52ch" }}>
                <p class="lede" style={{ fontSize: ".9375rem", margin: 0 }}>
                  El primer disc, Casa en las Nubes, va néixer a Cadaqués, un poble bohemi del nord-est on
                  l'artista es va instal·lar per compondre la seva pròpia música després de la gira amb el
                  sextet Tenderete Flamenco.
                </p>
                <p class="lede" style={{ fontSize: ".9375rem", margin: 0 }}>
                  El segon, Renacer, suma el dibuix i la poesia a les composicions originals i creua cultures
                  del nord i del sud: una rondeña de Màlaga i una habanera de Cadaqués conflueixen en una sola
                  peça, amb la pianista Sarah Thomson i la ballarina Antonia Peris.
                </p>
                <p class="lede" style={{ fontSize: ".9375rem", margin: 0 }}>
                  Amb Peris treballa en Sintonia, on actua com a guitarrista i actor: el primer guitarrista
                  flamenc a interpretar un paper teatral dins d'una producció d'aquest tipus.
                </p>
              </div>
            </div>
            <figure>
              <div class="figure as43">
                <img src={IMG.pati} alt="Antonio Bustos treballant en la composició del segon àlbum" loading="lazy" />
              </div>
              <figcaption class="fcap" style={{ display: "block" }}>Taller de composició · Renacer</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section class="sect" id="video">
        <div class="wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
              <p class="eyebrow">03 — Vídeo</p>
              <h2 class="sectitle">Violi, en primera persona</h2>
            </div>
            <p class="side">
              Una peça filmada en una sola presa, sense edició: la guitarra, la respiració i el silenci del
              taller de Cadaqués.
            </p>
          </div>
          <div class="vidwrap ab-reveal">
            <video controls playsinline preload="metadata">
              <source src="/media/antonio-violi.mp4" type="video/mp4" />
              El teu navegador no pot reproduir aquest vídeo.
            </video>
            <div class="vidnote">
              <span>Guitarra flamenca · Enregistrament en directe</span>
              <span>mp4 · HD</span>
            </div>
          </div>
        </div>
      </section>

      <section class="sect" id="contacte" style={{ background: "#1a1a1a" }}>
        <div class="wrap">
          <div class="contactgrid">
            <div>
              <p class="eyebrow">04 — Contacte</p>
              <h2 class="title">Concerts, produccions i<em> col·laboracions</em></h2>
              <p class="lede" style={{ marginTop: "2rem", fontSize: ".9375rem" }}>
                Per a contractació de concerts, sessions d'enregistrament, produccions escèniques o classes
                de guitarra flamenca, escriu directament. Resposta habitualment en dos dies feiners.
              </p>
              <div style={{ marginTop: "2.5rem" }}>
                <a class="btn" href="mailto:hola@antoniobustos.com?subject=Contacte%20des%20de%20la%20web">
                  Escriu-me
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke-linecap="round" />
                  </svg>
                </a>
              </div>
            </div>
            <div class="stack">
              <div>
                <span class="label">Directe</span>
                <ul class="contactlist">
                  <li><a href="mailto:hola@antoniobustos.com">hola@antoniobustos.com</a></li>
                  <li><a href="tel:+34600000000">+34 600 000 000</a></li>
                </ul>
              </div>
              <div>
                <span class="label">Xarxes</span>
                <div class="coord">
                  {ENLLACOS.map(([l, h]) => (
                    <a key={h} href={h} target="_blank" rel="noopener noreferrer">
                      {l} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <span class="label">Base</span>
                <p class="serif" style={{ fontSize: "1.125rem", margin: ".75rem 0 0", borderTop: "1px solid #2a2a2a", paddingTop: "1rem" }}>
                  Cadaqués, Alt Empordà
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="wrap" style={{ paddingBlock: "3rem" }}>
          <div class="foot">
            <div>
              <p class="foot-name">Antonio Bustos</p>
              <p class="meta" style={{ marginTop: ".5rem" }}>Guitarrista i compositor</p>
            </div>
            <ul>
              {ENLLACOS.map(([l, h]) => (
                <li key={h}><a href={h} target="_blank" rel="noopener noreferrer">{l}</a></li>
              ))}
              <li><a href="mailto:hola@antoniobustos.com">Correu</a></li>
            </ul>
          </div>
          <div class="foot-bottom">
            <p class="meta" style={{ letterSpacing: ".16em" }}>© {any} Antonio Bustos. Tots els drets reservats.</p>
            <a href="#top" class="meta" style={{ textDecoration: "none" }}>Tornar a dalt ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "-10% 0px" });
  document.querySelectorAll(".ab-reveal").forEach((el) => io.observe(el));
});

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
teRoot(document.getElementById('root')).render(<App />);
