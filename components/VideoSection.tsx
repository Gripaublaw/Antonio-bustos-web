import type { Diccionari } from "../i18n/types.ts";

interface VideoSectionProps {
  src: string;
  poster: string;
  text: Diccionari["video"];
}

/** Reproductor de vídeo a l'amplada completa de la columna de text. */
export default function VideoSection(props: VideoSectionProps) {
  const { text } = props;

  return (
    <section
      id="video"
      class="relative scroll-mt-16 border-t border-ink-line bg-ink py-[var(--ab-section)]"
    >
      <div class="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-[0.6875rem] uppercase tracking-[0.42em] text-cru/70">
              {text.index}
            </p>
            <h2 class="mt-6 font-display text-4xl leading-[1.08] tracking-[-0.02em] text-bone text-balance sm:text-5xl">
              {text.titol}
            </h2>
          </div>
          <p class="max-w-sm text-sm font-light leading-relaxed text-smoke">
            {text.descripcio}
          </p>
        </div>

        <div class="ab-reveal mt-14">
          <div class="relative overflow-hidden border border-ink-line bg-black">
            <video
              controls
              playsinline
              preload="metadata"
              poster={props.poster}
              class="aspect-video w-full"
            >
              <source src={props.src} type="video/mp4" />
              {text.alternativa}{" "}
              <a href={props.src} class="text-cru underline">
                {text.descarregar}
              </a>
              .
            </video>
          </div>

          <div class="mt-4 flex flex-wrap items-center justify-between gap-3 text-[0.625rem] uppercase tracking-[0.3em] text-smoke">
            <span>{text.peu}</span>
            <span class="tabular-nums">{text.qualitat}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
