import { define } from "../utils.ts";
import { carregarBiografia } from "../i18n/mod.ts";
import LandingPage from "../components/LandingPage.tsx";

/** Version française de la page d'accueil. */

export const handler = define.handlers({
  async GET() {
    return { data: { biografia: await carregarBiografia("fr") } };
  },
});

export default define.page<typeof handler>(function FrenchPage({ data }) {
  return <LandingPage idioma="fr" biografia={data.biografia} />;
});
