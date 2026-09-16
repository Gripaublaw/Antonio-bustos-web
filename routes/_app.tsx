import { define } from "../utils.ts";
import { negociarIdioma } from "../i18n/mod.ts";
import { ETIQUETA_LANG } from "../i18n/types.ts";

/**
 * Marc HTML comú.
 *
 * L'atribut `lang` s'ajusta a cada petició a partir del camí i, si no hi ha
 * coincidència, de l'Accept-Language del navegador. Això permet que lectors
 * de pantalla i cercadors identifiquin correctament la llengua del document.
 */
export default define.page(function App({ Component, url, req }) {
  const idioma = idiomaDelCamí(url.pathname) ??
    negociarIdioma(req.headers.get("accept-language"));

  return (
    <html lang={ETIQUETA_LANG[idioma]}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Antonio Bustos — Guitarrista i compositor</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap"
        />
      </head>
      <body class="bg-ink text-bone antialiased">
        <Component />
        <script src="/reveal.js" defer></script>
      </body>
    </html>
  );
});

/** Extreu l'idioma del primer segment del camí (/en, /fr, /es). */
function idiomaDelCamí(pathname: string) {
  const segment = pathname.split("/")[1]?.toLowerCase();
  return segment === "en" || segment === "fr" || segment === "es"
    ? segment
    : null;
}
