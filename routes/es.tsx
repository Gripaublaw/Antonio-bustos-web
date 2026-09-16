import { define } from "../utils.ts";
import { carregarBiografia } from "../i18n/mod.ts";
import LandingPage from "../components/LandingPage.tsx";

/** Versión en castellano de la página de inicio. */

export const handler = define.handlers({
  async GET() {
    return { data: { biografia: await carregarBiografia("es") } };
  },
});

export default define.page<typeof handler>(function SpanishPage({ data }) {
  return <LandingPage idioma="es" biografia={data.biografia} />;
});
