import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import type { Diccionari } from "../i18n/types.ts";
import { IDIOMES, NOM_IDIOMA, type Idioma } from "../i18n/types.ts";

interface MobileMenuProps {
  nav: { href: string; label: string }[];
  text: Diccionari["nav"];
  idiomaActual: string;
  idiomaEtiqueta: Diccionari["idioma"];
}

/** Botó i panell de navegació per a mòbil. Només visible sota md. */
export default function MobileMenu(props: MobileMenuProps) {
  const obert = useSignal(false);

  useEffect(() => {
    document.body.style.overflow = obert.value ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [obert.value]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") obert.value = false;
    };
    globalThis.addEventListener("keydown", onKey);
    return () => globalThis.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div class="md:hidden">
      <button
        type="button"
        aria-expanded={obert.value}
        aria-controls="menu-mobil"
        aria-label={obert.value ? props.text.tancar : props.text.obrir}
        onClick={() => (obert.value = !obert.value)}
        class="flex h-10 w-10 flex-col items-center justify-center gap-[5px] text-cru"
      >
        <span
          aria-hidden="true"
          class={`block h-px w-6 bg-current transition-transform duration-300 ${
            obert.value ? "translate-y-[6px] rotate-45" : ""
          }`}
        />
        <span
          aria-hidden="true"
          class={`block h-px w-6 bg-current transition-opacity duration-300 ${
            obert.value ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          aria-hidden="true"
          class={`block h-px w-6 bg-current transition-transform duration-300 ${
            obert.value ? "-translate-y-[6px] -rotate-45" : ""
          }`}
        />
      </button>

      <div
        id="menu-mobil"
        hidden={!obert.value}
        class="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-ink-line bg-ink/98 backdrop-blur-lg"
      >
        <nav aria-label={props.text.navegacioMobil} class="px-6 py-10">
          <ul>
            {props.nav.map((item, i) => (
              <li key={item.href} class="border-b border-ink-line">
                <a
                  href={item.href}
                  onClick={() => (obert.value = false)}
                  class="flex items-baseline justify-between py-5 font-display text-2xl text-bone transition-colors hover:text-cru"
                >
                  {item.label}
                  <span class="text-[0.625rem] tabular-nums tracking-[0.2em] text-smoke">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Selector d'idioma dins del menú mòbil */}
          <div class="mt-10">
            <p class="text-[0.625rem] uppercase tracking-[0.3em] text-smoke">
              {props.idiomaEtiqueta.etiqueta}
            </p>
            <ul class="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {IDIOMES.map((idioma: Idioma) => {
                const actiu = idioma === props.idiomaActual;
                return (
                  <li key={idioma}>
                    <a
                      href={idioma === "ca" ? "/" : `/${idioma}`}
                      hrefLang={idioma}
                      lang={idioma}
                      aria-current={actiu ? "true" : undefined}
                      class={`text-[0.8125rem] uppercase tracking-[0.24em] transition-colors ${
                        actiu ? "text-cru" : "text-smoke hover:text-cru"
                      }`}
                    >
                      {NOM_IDIOMA[idioma]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <p class="mt-10 text-[0.625rem] uppercase tracking-[0.3em] text-smoke">
            {props.text.origen}
          </p>
        </nav>
      </div>
    </div>
  );
}
