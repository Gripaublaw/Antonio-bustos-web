import { Head } from "fresh/runtime";
import { carregarBiografia, diccionari, rutaIdioma } from "../i18n/mod.ts";
import { ETIQUETA_LANG, type Idioma } from "../i18n/types.ts";

import SiteNav from "../components/SiteNav.tsx";
import HeroSection from "../components/HeroSection.tsx";
import BioSection from "../components/BioSection.tsx";
import GaleriaSection from "../components/GaleriaSection.tsx";
import ContentSection from "../components/ContentSection.tsx";
import VideoSection from "../components/VideoSection.tsx";
import ContacteSection from "../components/ContacteSection.tsx";
import SiteFooter from "../components/SiteFooter.tsx";

/* ------------------------------------------------------------------ */
/* Dades independents de l'idioma                                      */
/* ------------------------------------------------------------------ */

const NOM = "Antonio Bustos";
const EMAIL = "hola@antoniobustos.com";
const VIDEO_SRC = "/media/antonio-violi.mp4";
const VIDEO_POSTER = "/media/antonio1.png";

/**
 * Etiquetes de xarxes: noms propis de marca, no es tradueixen.
 * L'ordre es manté idèntic a totes les llengües.
 */
const XARXES = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
  { label: "Spotify", href: "https://open.spotify.com/" },
  { label: "Bandcamp", href: "https://bandcamp.com/" },
];

/* ------------------------------------------------------------------ */
/* Metadades compartides                                               */
/* ------------------------------------------------------------------ */

/**
 * Retorna les etiquetes <Head> comunes a totes les llengües, amb els
 * enllaços alternatius hreflang que indiquen a cercadors i navegadors
 * quines versions existeixen.
 */
function Metadades(
  { idioma, titol, descripcio, ogDescripcio }: {
    idioma: Idioma;
    titol: string;
    descripcio: string;
    ogDescripcio: string;
  },
) {
  return (
    <Head>
      <title>{titol}</title>
      <meta name="description" content={descripcio} />
      <meta name="theme-color" content="#0a0a0a" />
      <meta property="og:title" content={titol} />
      <meta property="og:description" content={ogDescripcio} />
      <meta property="og:image" content="/media/antonio1.png" />
      <meta property="og:type" content="profile" />
      <meta property="og:locale" content={ETIQUETA_LANG[idioma]} />

      {/* Versions alternatives per idioma */}
      <link rel="alternate" hrefLang="ca" href={rutaIdioma("ca")} />
      <link rel="alternate" hrefLang="en" href={rutaIdioma("en")} />
      <link rel="alternate" hrefLang="fr" href={rutaIdioma("fr")} />
      <link rel="alternate" hrefLang="es" href={rutaIdioma("es")} />
      <link rel="alternate" hrefLang="x-default" href={rutaIdioma("ca")} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap"
      />
    </Head>
  );
}

/* ------------------------------------------------------------------ */
/* Renderitzador compartit                                             */
/* ------------------------------------------------------------------ */

export interface PaginaProps {
  idioma: Idioma;
  biografia: string[];
}

/**
 * Cos complet de la landing. El fan servir routes/index.tsx (català) i
 * les rutes /en, /fr i /es, de manera que l'estructura no es duplica.
 */
export default function LandingPage({ idioma, biografia }: PaginaProps) {
  const t = diccionari(idioma);

  return (
    <>
      <Metadades
        idioma={idioma}
        titol={t.meta.titol}
        descripcio={t.meta.descripcio}
        ogDescripcio={t.meta.ogDescripcio}
      />

      <SiteNav
        text={t.nav}
        idiomaActual={idioma}
        idiomaEtiqueta={t.idioma}
      />

      <main class="bg-ink">
        <HeroSection text={t.hero} />
        <BioSection paragrafs={biografia} text={t.bio} />
        <GaleriaSection text={t.galeria} />
        <ContentSection text={t.produccio} />
        <VideoSection
          src={VIDEO_SRC}
          poster={VIDEO_POSTER}
          text={t.video}
        />
        <ContacteSection
          email={EMAIL}
          text={t.contacte}
          enllacos={XARXES}
        />
      </main>

      <SiteFooter
        nom={NOM}
        email={EMAIL}
        enllacos={XARXES}
        text={t.footer}
        correu={t.contacte.correu}
      />
    </>
  );
}

/* Reexport útil per a les rutes. */
export { carregarBiografia };
