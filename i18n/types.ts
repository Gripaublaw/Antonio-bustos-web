/**
 * Tipus compartits del sistema de traduccions.
 * El català és l'idioma de referència: la seva forma defineix `Diccionari`.
 */

export const IDIOMES = ["ca", "en", "fr", "es"] as const;

export type Idioma = (typeof IDIOMES)[number];

export const IDIOMA_DEFECTE: Idioma = "ca";

/** Noms dels idiomes, sempre escrits en el seu propi idioma. */
export const NOM_IDIOMA: Record<Idioma, string> = {
  ca: "Català",
  en: "English",
  fr: "Français",
  es: "Español",
};

/** Codi BCP 47 per a l'atribut `lang` de l'HTML. */
export const ETIQUETA_LANG: Record<Idioma, string> = {
  ca: "ca-ES",
  en: "en-GB",
  fr: "fr-FR",
  es: "es-ES",
};

export function esIdioma(valor: string | null | undefined): valor is Idioma {
  return !!valor && (IDIOMES as readonly string[]).includes(valor);
}

export interface Enllac {
  label: string;
  href: string;
}

export interface Fita {
  any: string;
  text: string;
}

export interface GaleriaItem {
  src: string;
  alt: string;
  caption: string;
}

/** Diccionari complet d'una llengua. */
export interface Diccionari {
  /** Ruta del fitxer de biografia associat (relativa a content/). */
  biografia: string;

  meta: {
    titol: string;
    descripcio: string;
    ogDescripcio: string;
  };

  nav: {
    label: string;
    biografia: string;
    galeria: string;
    video: string;
    contacte: string;
    obrir: string;
    tancar: string;
    navegacioPrincipal: string;
    navegacioMobil: string;
    origen: string;
  };

  hero: {
    eyebrow: string;
    titol: string;
    titolAccent: string;
    subtitol: string;
    boto: string;
    credit: string;
  };

  bio: {
    index: string;
    titol: string;
    titolAccent: string;
    fitxes: Fita[];
    retrat: string;
    tecnica: string;
    alternativa: string;
  };

  galeria: {
    index: string;
    titol: string;
    titolAccent: string;
    descripcio: string;
    items: GaleriaItem[];
  };

  produccio: {
    index: string;
    titol: string;
    paragrafs: string[];
    imatge: GaleriaItem;
  };

  video: {
    index: string;
    titol: string;
    descripcio: string;
    peu: string;
    qualitat: string;
    alternativa: string;
    descarregar: string;
  };

  contacte: {
    index: string;
    titol: string;
    titolAccent: string;
    descripcio: string;
    boto: string;
    assumpte: string;
    directe: string;
    xarxes: string;
    base: string;
    telefon: string;
    ciutat: string;
    correu: string;
  };

  footer: {
    subtitol: string;
    drets: string;
    tornar: string;
  };

  idioma: {
    etiqueta: string;
    canviar: string;
  };
}
