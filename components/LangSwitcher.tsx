import { IDIOMES, NOM_IDIOMA, type Idioma, IDIOMA_DEFECTE } from "../i18n/types.ts";

interface LangSwitcherProps {
  idiomaActual: string;
  /** Funció que retorna la URL pública de cada idioma. */
  rutes: (idioma: Idioma) => string;
  etiqueta: string;
  canviar: string;
}

/**
 * Selector d'idioma. Són enllaços reals (no botons): cada llengua té la seva
 * pròpia URL, de manera que funciona sense JavaScript i és compartible.
 */
export default function LangSwitcher(props: LangSwitcherProps) {
  const actual: Idioma = IDIOMES.includes(props.idiomaActual as Idioma)
    ? (props.idiomaActual as Idioma)
    : IDIOMA_DEFECTE;

  return (
    <nav aria-label={props.canviar}>
      <ul class="flex items-center gap-px">
        {IDIOMES.map((idioma) => {
          const actiu = idioma === actual;
          return (
            <li key={idioma}>
              <a
                href={props.rutes(idioma)}
                hrefLang={idioma}
                lang={idioma}
                aria-current={actiu ? "true" : undefined}
                title={NOM_IDIOMA[idioma]}
                class={`block px-1.5 py-1 text-[0.625rem] uppercase tracking-[0.24em] transition-colors duration-300 ${
                  actiu
                    ? "text-cru underline decoration-cru/50 underline-offset-4"
                    : "text-smoke hover:text-cru"
                }`}
              >
                {idioma}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
