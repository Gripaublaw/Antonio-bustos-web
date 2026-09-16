import { define } from "../utils.ts";
import { carregarBiografia } from "../i18n/mod.ts";
import LandingPage from "../components/LandingPage.tsx";

/**
 * Català — idioma principal, servit a l'arrel del lloc.
 * La resta de llengües viuen a /en, /fr i /es.
 */
export const handler = define.handlers({
  async GET() {
    return { data: { biografia: await carregarBiografia("ca") } };
  },
});

export default define.page<typeof handler>(function Home({ data }) {
  return <LandingPage idioma="ca" biografia={data.biografia} />;
});
