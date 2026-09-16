/**
 * Nucli del sistema de traduccions.
 *
 * - `diccionari(idioma)` retorna el diccionari complet d'una llengua.
 * - `rutaIdioma(idioma)` retorna la URL pública de cada idioma.
 * - `carregarBiografia(idioma)` llegeix el Markdown corresponent de content/.
 * - `negociarIdioma(header)` tradueix l'Accept-Language del navegador.
 */

import { paragrafsDeBiografia, retallar } from "../utils/text.ts";
import { ca } from "./ca.ts";
import { en } from "./en.ts";
import { es } from "./es.ts";
import { fr } from "./fr.ts";
import {
  type Diccionari,
  IDIOMA_DEFECTE,
  IDIOMES,
  type Idioma,
  esIdioma,
} from "./types.ts";

const DICCIONARIS: Record<Idioma, Diccionari> = { ca, en, fr, es };

/** Diccionari complet de l'idioma demanat. */
export function diccionari(idioma: Idioma): Diccionari {
  return DICCIONARIS[idioma];
}

/**
 * URL pública de cada idioma. El català viu a l'arrel perquè és l'idioma
 * principal; la resta tenen prefix de dues lletres.
 */
export const RUTES: Record<Idioma, string> = {
  ca: "/",
  en: "/en",
  fr: "/fr",
  es: "/es",
};

export function rutaIdioma(idioma: Idioma): string {
  return RUTES[idioma];
}

/** Llistat per al selector d'idiomes de la interfície. */
export const SELECTOR_IDIOMES = IDIOMES.map((idioma) => ({
  idioma,
  ruta: RUTES[idioma],
}));

/* ------------------------------------------------------------------ */
/* Biografia                                                           */
/* ------------------------------------------------------------------ */

const RUTA_CONTINGUT = new URL("../content/", import.meta.url);

/** Text de reserva si el Markdown no es pot llegir o arriba buit. */
const RESERVA: Record<Idioma, string[]> = {
  ca: [
    "Antonio Bustos va néixer a Còrdova i va descobrir el flamenc, i sobretot la guitarra, als disset anys.",
    "Format amb mestres com Manuel Cañizares i Manuel Granados, va completar els estudis al Conservatori Professional del Liceu de Barcelona i va girar per Europa amb el sextet Tenderete Flamenco abans d'instal·lar-se a Cadaqués per compondre la seva pròpia música.",
  ],
  en: [
    "Antonio Bustos was born in Córdoba and discovered flamenco, and above all the guitar, at the age of seventeen.",
    "Trained by masters such as Manuel Cañizares and Manuel Granados, he completed his studies at the Professional Conservatory of the Liceu in Barcelona and toured Europe with the sextet Tenderete Flamenco before settling in Cadaqués to compose his own music.",
  ],
  fr: [
    "Antonio Bustos est né à Cordoue et a découvert le flamenco, et surtout la guitare, à dix-sept ans.",
    "Formé auprès de maîtres comme Manuel Cañizares et Manuel Granados, il a achevé ses études au Conservatoire professionnel du Liceu de Barcelone et a tourné en Europe avec le sextet Tenderete Flamenco avant de s'installer à Cadaqués pour composer sa propre musique.",
  ],
  es: [
    "Antonio Bustos nació en Córdoba y descubrió el flamenco, y sobre todo la guitarra, a los diecisiete años.",
    "Formado con maestros como Manuel Cañizares y Manuel Granados, completó los estudios en el Conservatorio Profesional del Liceu de Barcelona y giró por Europa con el sexteto Tenderete Flamenco antes de instalarse en Cadaqués para componer su propia música.",
  ],
};

/**
 * Llegeix content/<fitxer>, el neteja i en retorna dos paràgrafs: l'entrada
 * de presentació i un cos resumit. Mai llança: si falla, retorna la reserva.
 */
export async function carregarBiografia(idioma: Idioma): Promise<string[]> {
  const fitxer = diccionari(idioma).biografia;

  try {
    const text = await Deno.readTextFile(new URL(fitxer, RUTA_CONTINGUT));
    const paragrafs = paragrafsDeBiografia(text);
    if (paragrafs.length === 0) return RESERVA[idioma];

    const [entrada, ...resta] = paragrafs;
    const cos = retallar(resta.join(" "), 640);
    return cos.length > 0 ? [entrada, cos] : [entrada];
  } catch {
    return RESERVA[idioma];
  }
}

/* ------------------------------------------------------------------ */
/* Negociació de l'idioma                                              */
/* ------------------------------------------------------------------ */

/**
 * Trieu l'idioma més adient a partir de l'Accept-Language del navegador.
 * Retorna l'idioma principal si no hi ha cap coincidència.
 */
export function negociarIdioma(acceptLanguage: string | null): Idioma {
  if (!acceptLanguage) return IDIOMA_DEFECTE;

  const preferits = acceptLanguage
    .split(",")
    .map((part) => {
      const [etiqueta, qualitat] = part.trim().split(";q=");
      return {
        codi: etiqueta.trim().toLowerCase(),
        pes: qualitat ? Number.parseFloat(qualitat) : 1,
      };
    })
    .filter((p) => Number.isFinite(p.pes))
    .sort((a, b) => b.pes - a.pes);

  for (const { codi } of preferits) {
    const base = codi.split("-")[0];
    if (esIdioma(base)) return base;
    // El xinès/altres variants no hi són; només mirem coincidències exactes.
  }

  return IDIOMA_DEFECTE;
}

export { IDIOMA_DEFECTE, IDIOMES, type Idioma, esIdioma };
