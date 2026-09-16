/**
 * Revelat d'elements .ab-reveal en navegadors sense animation-timeline.
 * Si el navegador ja les suporta, el CSS ho resol tot i aquest codi no
 * afegeix cap classe (evita dobles transicions).
 */
(() => {
  const elements = document.querySelectorAll(".ab-reveal");
  if (elements.length === 0) return;

  const suportaTimeline = CSS.supports("animation-timeline", "view()");
  const reduir = matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (suportaTimeline || reduir) return;

  const observador = new IntersectionObserver((entrades) => {
    for (const entrada of entrades) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("is-in");
        observador.unobserve(entrada.target);
      }
    }
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.05 });

  for (const el of elements) observador.observe(el);
})();
