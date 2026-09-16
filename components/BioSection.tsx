import type { Diccionari } from "../i18n/types.ts";

interface BioSectionProps {
  /** Paràgrafs ja nets extrets del Markdown de l'idioma actiu. */
  paragrafs: string[];
  text: Diccionari["bio"];
}

export default function BioSection(props: BioSectionProps) {
  const [entrada, ...resta] = props.paragrafs;
  const { text } = props;

  return (
    <section
      id="biografia"
      class="relative scroll-mt-16 border-t border-ink-line bg-ink py-[var(--ab-section)]"
    >
      <div class="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div class="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
          {/* Retrat */}
          <div class="lg:sticky lg:top-28 lg:self-start">
            <figure class="m-0">
              <div class="relative overflow-hidden bg-ink-soft">
                <img
                  src="/media/antonio2.png"
                  alt={text.alternativa}
                  width="900"
                  height="1200"
                  loading="lazy"
                  class="aspect-[3/4] w-full object-cover grayscale-[15%] transition-transform duration-[1200ms] ease-out hover:scale-[1.02]"
                />
              </div>
              <figcaption class="mt-4 flex items-center justify-between text-[0.625rem] uppercase tracking-[0.3em] text-smoke">
                <span>{text.retrat}</span>
                <span>{text.tecnica}</span>
              </figcaption>
            </figure>
          </div>

          {/* Text */}
          <div class="ab-reveal">
            <p class="text-[0.6875rem] uppercase tracking-[0.42em] text-cru/70">
              {text.index}
            </p>
            <h2 class="mt-6 font-display text-4xl leading-[1.08] tracking-[-0.02em] text-bone text-balance sm:text-5xl lg:text-[3.75rem]">
              {text.titol}
              <span class="italic text-cru"> {text.titolAccent}</span>
            </h2>

            <div class="mt-10 max-w-[52ch] space-y-6">
              {entrada && (
                <p class="font-display text-xl leading-relaxed text-bone sm:text-2xl sm:leading-[1.55]">
                  {entrada}
                </p>
              )}
              {resta.map((paragraf, i) => (
                <p
                  key={i}
                  class="text-[0.9375rem] font-light leading-[1.85] text-cru/75"
                >
                  {paragraf}
                </p>
              ))}
            </div>

            {/* Fites, en lloc de targetes de mètriques */}
            <dl class="mt-14 border-t border-ink-line">
              {text.fitxes.map((fita) => (
                <div
                  key={fita.any}
                  class="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink-line py-4"
                >
                  <dt class="font-display text-lg text-bone">{fita.any}</dt>
                  <dd class="text-[0.8125rem] font-light tracking-wide text-smoke">
                    {fita.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
