import type { Diccionari, Enllac } from "../i18n/types.ts";

interface ContacteSectionProps {
  email: string;
  text: Diccionari["contacte"];
  enllacos: Enllac[];
}

export default function ContacteSection(props: ContacteSectionProps) {
  const { text } = props;
  const assumpte = encodeURIComponent(text.assumpte);

  return (
    <section
      id="contacte"
      class="relative scroll-mt-16 border-t border-ink-line bg-ink-soft py-[var(--ab-section)]"
    >
      <div class="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div class="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-24">
          <div>
            <p class="text-[0.6875rem] uppercase tracking-[0.42em] text-cru/70">
              {text.index}
            </p>
            <h2 class="mt-6 max-w-2xl font-display text-4xl leading-[1.06] tracking-[-0.02em] text-bone text-balance sm:text-5xl lg:text-[3.5rem]">
              {text.titol}
              <span class="italic text-cru"> {text.titolAccent}</span>
            </h2>
            <p class="mt-8 max-w-[48ch] text-[0.9375rem] font-light leading-[1.85] text-cru/70">
              {text.descripcio}
            </p>

            <div class="mt-10">
              <a
                href={`mailto:${props.email}?subject=${assumpte}`}
                class="group inline-flex items-center gap-4 border border-cru/35 px-7 py-4 text-[0.6875rem] uppercase tracking-[0.3em] text-cru transition-colors duration-500 hover:border-cru hover:bg-cru hover:text-ink sm:px-9 sm:text-xs"
              >
                {text.boto}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  class="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke-linecap="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Dades i xarxes: llistes, sense targetes */}
          <div class="space-y-10 lg:pt-4">
            <div>
              <h3 class="text-[0.625rem] uppercase tracking-[0.32em] text-smoke">
                {text.directe}
              </h3>
              <ul class="mt-4 space-y-1 border-t border-ink-line pt-4">
                <li>
                  <a
                    href={`mailto:${props.email}`}
                    class="font-display text-lg text-bone transition-colors hover:text-cru"
                  >
                    {props.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${text.telefon.replace(/\s/g, "")}`}
                    class="font-display text-lg text-bone transition-colors hover:text-cru"
                  >
                    {text.telefon}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-[0.625rem] uppercase tracking-[0.32em] text-smoke">
                {text.xarxes}
              </h3>
              <ul class="mt-4 grid grid-cols-2 gap-x-6 border-t border-ink-line pt-4">
                {props.enllacos.map((enllac) => (
                  <li key={enllac.href} class="border-b border-ink-line">
                    <a
                      href={enllac.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-between py-3 text-sm font-light text-cru/75 transition-colors hover:text-cru"
                    >
                      {enllac.label}
                      <span aria-hidden="true" class="text-xs text-smoke">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 class="text-[0.625rem] uppercase tracking-[0.32em] text-smoke">
                {text.base}
              </h3>
              <p class="mt-4 border-t border-ink-line pt-4 font-display text-lg text-bone">
                {text.ciutat}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
