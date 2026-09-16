import { define } from "../utils.ts";
import { carregarBiografia } from "../i18n/mod.ts";
import LandingPage from "../components/LandingPage.tsx";

/** English version of the landing page. */

export const handler = define.handlers({
  async GET() {
    return { data: { biografia: await carregarBiografia("en") } };
  },
});

export default define.page<typeof handler>(function EnglishPage({ data }) {
  return <LandingPage idioma="en" biografia={data.biografia} />;
});
