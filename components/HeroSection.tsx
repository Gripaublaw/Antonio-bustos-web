import type { Diccionari } from "../i18n/types.ts";

interface HeroSectionProps {
  text: Diccionari["hero"];
}

/**
 * Hero a pantalla completa: fotografia de portada, capa fosca per sobre,
 * nom en gran i un únic botó que baixa a la biografia.
 */
export default function HeroSection(props: HeroSectionProps) {
  const { text } = props;

  return (
    <section
      id="top"
      class="ab-grain relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink"
    >
      {/* Fotografia de portada */}
      <img
        src="/media/antonio1.png"
        alt={text.credit}
        width="1200"
        height="1500"
        fetchpriority="high"
        class="absolute inset-0 -z-20 h-[85vh] w-full object-cover object-[50%_8%] brightness-110 contrast-125 saturate-110"
      />

      {/* Capa fosca: degradat + vel homogeni per garantir contrast llegible */}
      <div aria-hidden="true" class="absolute inset-0 -z-10 bg-ink/30">
        <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div class="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/20 to-transparent" />
      </div>

      <div class="mx-auto w-full max-w-[1400px] px-6 pb-20 pt-32 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
        <div class="max-w-4xl">
          <p class="mb-6 text-[0.6875rem] uppercase tracking-[0.42em] text-cru/70 sm:mb-8 sm:text-xs">
            {text.eyebrow}
          </p>

          <h1 class="font-display text-[3.25rem] leading-[0.92] tracking-[-0.03em] text-bone text-balance sm:text-7xl lg:text-[7.5rem]">
            {text.titol}
            <span class="block italic text-cru">{text.titolAccent}</span>
          </h1>

          <div class="mt-8 flex max-w-md items-center gap-5 sm:mt-10">
            <span aria-hidden="true" class="h-px w-10 bg-cru/40 sm:w-16" />
            <p class="text-sm font-light uppercase tracking-[0.3em] text-cru sm:text-base">
              {text.subtitol}
            </p>
          </div>

          <div class="mt-12 sm:mt-14">
            <a
              href="#biografia"
              class="group inline-flex items-center gap-3 border border-cru/35 px-7 py-4 text-[0.6875rem] uppercase tracking-[0.3em] text-cru transition-colors duration-500 hover:border-cru hover:bg-cru hover:text-ink sm:px-9 sm:text-xs"
            >
              {text.boto}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="h-4 w-4 transition-transform duration-500 group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M12 4v15m0 0 6-6m-6 6-6-6" stroke-linecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Llegenda inferior, com a crèdit fotogràfic */}
      <div class="mx-auto w-full max-w-[1400px] px-6 pb-8 sm:px-10 lg:px-16">
        <div class="flex items-center justify-between border-t border-white/10 pt-5">
          <span class="text-[0.625rem] uppercase tracking-[0.3em] text-smoke">
            {text.credit}
          </span>
          <span class="hidden text-[0.625rem] uppercase tracking-[0.3em] text-smoke sm:block">
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  );
}
