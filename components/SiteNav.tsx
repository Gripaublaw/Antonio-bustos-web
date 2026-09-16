import type { Diccionari } from "../i18n/types.ts";
import { rutaIdioma } from "../i18n/mod.ts";
import LangSwitcher from "./LangSwitcher.tsx";
import MobileMenu from "../islands/MobileMenu.tsx";

interface SiteNavProps {
  text: Diccionari["nav"];
  idiomaActual: string;
  idiomaEtiqueta: Diccionari["idioma"];
}

/**
 * Capçalera fixa, transparent sobre el hero i amb fons sòlid en fer scroll.
 * El botó de menú (mòbil) viu a l'illa MobileMenu.
 */
export default function SiteNav(props: SiteNavProps) {
  const { text } = props;

  const NAV = [
    { href: "#biografia", label: text.biografia },
    { href: "#galeria", label: text.galeria },
    { href: "#video", label: text.video },
    { href: "#contacte", label: text.contacte },
  ];

  return (
    <header class="fixed inset-x-0 top-0 z-40">
      <div class="border-b border-white/5 bg-ink/70 backdrop-blur-md">
        <div class="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-6 sm:px-10 lg:px-16">
          <a
            href="#top"
            class="group flex shrink-0 items-baseline gap-3 transition-opacity hover:opacity-80"
          >
            <span class="font-display text-[1.05rem] tracking-tight text-bone">
              Antonio Bustos
            </span>
            <span class="hidden text-[0.625rem] uppercase tracking-[0.32em] text-smoke sm:block">
              {text.label}
            </span>
          </a>

          <div class="flex items-center gap-5 sm:gap-7">
            <nav aria-label={text.navegacioPrincipal} class="hidden md:block">
              <ul class="flex items-center gap-9">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      class="relative text-[0.8125rem] uppercase tracking-[0.18em] text-cru/70 transition-colors duration-300 hover:text-cru after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-cru after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <LangSwitcher
              idiomaActual={props.idiomaActual}
              rutes={rutaIdioma}
              etiqueta={props.idiomaEtiqueta.etiqueta}
              canviar={props.idiomaEtiqueta.canviar}
            />

            <MobileMenu
              nav={NAV}
              text={text}
              idiomaActual={props.idiomaActual}
              idiomaEtiqueta={props.idiomaEtiqueta}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
