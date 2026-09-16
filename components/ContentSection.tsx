import type { Diccionari } from "../i18n/types.ts";

interface ContentSectionProps {
  text: Diccionari["produccio"];
}

/**
 * Bloc de discografia i escena: text a l'esquerra i imatge de taller a la dreta.
 * Les etiquetes de secció segueixen la mateixa numeració que la resta de blocs.
 */
export default function ContentSection(props: ContentSectionProps) {
  const { text } = props;

  return (
    <section
      id="produccio"
      class="relative scroll-mt-16 border-t border-ink-line bg-ink-soft py-[var(--ab-section)]"
    >
      <div class="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div class="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-24">
          <div class="ab-reveal">
            <p class="text-[0.6875rem] uppercase tracking-[0.42em] text-cru/70">
              {text.index}
            </p>
            <h2 class="mt-6 max-w-xl font-display text-4xl leading-[1.08] tracking-[-0.02em] text-bone text-balance sm:text-5xl">
              {text.titol}
            </h2>

            <div class="mt-10 max-w-[52ch] space-y-6">
              {text.paragrafs.map((paragraf, i) => (
                <p
                  key={i}
                  class="text-[0.9375rem] font-light leading-[1.85] text-cru/75"
                >
                  {paragraf}
                </p>
              ))}
            </div>
          </div>

          <figure class="m-0 lg:pt-10">
            <div class="relative overflow-hidden bg-ink">
              <img
                src={text.imatge.src}
                alt={text.imatge.alt}
                loading="lazy"
                class="aspect-[4/5] w-full object-cover grayscale-[10%]"
              />
            </div>
            <figcaption class="mt-4 text-[0.625rem] uppercase tracking-[0.3em] text-smoke">
              {text.imatge.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
