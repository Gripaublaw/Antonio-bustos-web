/** Utilitats per convertir el Markdown de content/biografia.md en text net. */

/** Treu èmfasis Markdown (*text*, **text**, _text_) i enllaços, deixant text pla. */
export function textPla(md: string): string {
  return md
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // enllaços
    .replace(/[*_`]/g, "") // èmfasi i codi
    .replace(/\s+/g, " ")
    .trim();
}

/** Converteix el document en paràgrafs de text pla, ignorant títols Markdown. */
export function paragrafsDeBiografia(md: string): string[] {
  return md
    .split(/\n\s*\n/)
    .map((bloc) => bloc.trim())
    .filter((bloc) => bloc.length > 0 && !bloc.startsWith("#"))
    .map((bloc) => textPla(bloc))
    .filter((bloc) => bloc.length > 0)
    // Fusiona el bloc inicial de presentació si és una sola línia curta.
    .filter((bloc) => !/^resum(e)?\b/i.test(bloc));
}

/**
 * Retalla un text a un nombre màxim de caràcters sense tallar paraules,
 * i tanca amb el·lipsi si cal.
 */
export function retallar(text: string, maxim: number): string {
  if (text.length <= maxim) return text;
  const tall = text.slice(0, maxim);
  const ultimEspai = tall.lastIndexOf(" ");
  return `${tall.slice(0, ultimEspai > 0 ? ultimEspai : maxim).trimEnd()}…`;
}
