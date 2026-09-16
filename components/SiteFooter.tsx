import type { Diccionari, Enllac } from "../i18n/types.ts";

interface FooterProps {
  nom: string;
  email: string;
  enllacos: Enllac[];
  text: Diccionari["footer"];
  correu: string;
}

export default function SiteFooter(props: FooterProps) {
  const any = new Date().getFullYear();

  return (
    <footer class="border-t border-ink-line bg-ink">
      <div class="mx-auto max-w-[1400px] px-6 py-12 sm:px-10 lg:px-16">
        <div class="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="font-display text-2xl leading-tight text-bone">
              {props.nom}
            </p>
            <p class="mt-2 text-[0.625rem] uppercase tracking-[0.32em] text-smoke">
              {props.text.subtitol}
            </p>
          </div>

          <ul class="flex flex-wrap items-center gap-x-6 gap-y-2">
            {props.enllacos.map((enllac) => (
              <li key={enllac.href}>
                <a
                  href={enllac.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[0.6875rem] uppercase tracking-[0.24em] text-cru/60 transition-colors hover:text-cru"
                >
                  {enllac.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${props.email}`}
                class="text-[0.6875rem] uppercase tracking-[0.24em] text-cru/60 transition-colors hover:text-cru"
              >
                {props.correu}
              </a>
            </li>
          </ul>
        </div>

        <div class="mt-10 flex flex-col gap-2 border-t border-ink-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-[0.625rem] tracking-[0.16em] text-smoke">
            © {any} {props.nom}. {props.text.drets}
          </p>
          <a
            href="#top"
            class="text-[0.625rem] uppercase tracking-[0.3em] text-smoke transition-colors hover:text-cru"
          >
            {props.text.tornar}
          </a>
        </div>
      </div>
    </footer>
  );
}
