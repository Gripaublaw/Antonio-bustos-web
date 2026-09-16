import type { Diccionari } from "../i18n/types.ts";

interface GaleriaSectionProps {
  text: Diccionari["galeria"];
}

/**
 * Graella editorial: 12 columnes amb peces de mides diferents.
 * La primera imatge ocupa més espai per evitar la graella uniforme.
 */
const SPANS = ["sm:col-span-8", "sm:col-span-4", "sm:col-span-12"];

export default function GaleriaSection(props: GaleriaSectionProps) {
  const { text } = props;

  return (
    <section
      id="galeria"
      class="relative scroll-mt-16 border-t border-ink-line bg-ink-soft py-[var(--ab-section)]"
    >
      <div class="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-[0.6875rem] uppercase tracking-[0.42em] text-cru/70">
              {text.index}
            </p>
            <h2 class="mt-6 max-w-xl font-display text-4xl leading-[1.08] tracking-[-0.02em] text-bone text-balance sm:text-5xl">
              {text.titol}
              <span class="italic text-cru"> {text.titolAccent}</span>
            </h2>
          </div>
          <p class="max-w-xs text-sm font-light leading-relaxed text-smoke">
            {text.descripcio}
          </p>
        </div>

        <div class="ab-reveal mt-14 grid grid-cols-1 gap-3 sm:grid-cols-12 sm:gap-4">
          {text.items.map((item, i) => (
            <figure
              key={item.src}
              class={`group relative m-0 overflow-hidden bg-ink ${
                SPANS[i % SPANS.length]
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                class="h-full min-h-[240px] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] sm:min-h-[280px]"
              />
              <figcaption class="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/90 to-transparent p-5 pt-16">
                <span class="text-[0.6875rem] uppercase tracking-[0.28em] text-cru">
                  {item.caption}
                </span>
                <span class="text-[0.625rem] tabular-nums tracking-[0.2em] text-cru/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
