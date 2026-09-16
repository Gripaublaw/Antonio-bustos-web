---
schemaVersion: 1
scope: workspace
updatedAt: "2026-09-15T08:49:04.040Z"
workspaceName: "Antonio-bustos"
---

# Project Memory

## Project Overview
- Landing page elegant per al músic Antonio Bustos (guitarrista i compositor flamenc).
- Stack: Fresh (Deno), Preact, Tailwind CSS.
- Objectiu: sobrietat i elegància, molt espaiat, responsive, sense animacions exagerades.
- La pàgina és multilingüe: català (principal), anglès, francès i castellà.

## Current State
- Estructura Fresh completa i funcional: `routes/`, `components/`, `islands/`, `i18n/`, `content/`, `static/media/`, `assets/styles.css`.
- Quatre rutes d'idioma operatives, cadascuna amb URL pròpia: `/`, `/en`, `/fr`, `/es`.
- Sistema i18n tipat: `Diccionari` definit a `i18n/types.ts`; si falta una clau en qualsevol idioma, TypeScript falla.
- Text de la biografia en tercera persona, en quatre fitxers Markdown separats.
- Noms propis no es tradueixen mai (Casa en las Nubes, Renacer, Sintonia, col·laboradors).
- Fallback: si falta un fitxer de biografia, es mostra el text del diccionari en lloc de fallar.
- **No verificat visualment**: l'entorn de preview no podia escriure el fitxer temporal — limitació de l'entorn, no error de codi. Cal validar al port de Deno.
- S'ha indicat a l'usuari com aixecar el port (`deno task start` o `deno run -A jsr:@fresh/core/dev`, després `http://localhost:8000` amb `/`, `/en`, `/fr`, `/es`). Pendent que confirmi que el port funciona.

## Artifacts
- `routes/index.tsx` — català; `routes/en.tsx`, `routes/fr.tsx`, `routes/es.tsx` — altres idiomes.
- `routes/_app.tsx` — shell HTML, `lang` per ruta, fonts, `static/reveal.js`.
- `components/LandingPage.tsx` — cos de pàgina compartit; totes les rutes només canvien idioma i biografia.
- `components/` — HeroSection, BioSection, GaleriaSection, ContentSection, VideoSection, ContacteSection, SiteNav, SiteFooter, Button, LangSwitcher.
- `islands/MobileMenu.tsx` — panell mòbil amb selector d'idioma.
- `i18n/types.ts`, `i18n/ca.ts` (referència), `i18n/en.ts`, `i18n/fr.ts`, `i18n/es.ts`, `i18n/mod.ts`.
- `i18n/mod.ts` — exporta `diccionari()`, `rutaIdioma()`, `carregarBiografia()`, `negociarIdioma()`.
- `content/biografia.md` (ca), `content/biography.md` (en), `content/biographie.md` (fr), `content/biografia.es.md` (es).
- `utils/text.ts` — neteja Markdown (`textPla`, `paragrafsDeBiografia`, `retallar`).
- `assets/styles.css` — tokens i utilitats (`ab-grain`, `ab-reveal`).
- `static/media/` — antonio1.png, antonio2.png, antonio3.png, antonio-violi.mp4.
- `App.jsx` — mirall de preview autocontingut, amb SVG de substitució per a les fotos; NO és el codi real.

## Design Direction
- Fosc, editorial, molt espaiat; la fotografia és el color.
- Moviment mínim: reveal discret en entrar al viewport, transicions de color en hover.
- Separadors de filet d'1px, mai caixes.
- Tipografia: Playfair Display per a títols, Inter per al cos.
- Detalls d'accent només en cru i gris mitjà.

## User Feedback
- L'usuari va assenyalar que `content` era la referència correcta; el canvi a `contents` va ser un error meu, no seu.
- No li importa que la previsualització no sigui completa; ja la revisarà al port de Deno.
- Demana suport multilingüe: català, anglès, francès i castellà.
- Ha demanat explícitament com visualitzar la web a través d'un port; la resposta és el servidor Fresh, no obrir fitxers.

## Decisions
- Quatre idiomes amb URLs reals en lloc de canvi dinàmic de text.
- El selector d'idioma són enllaços `<a href>` reals, no botons: funcionen sense JavaScript i cada idioma és compartible.
- Català és l'idioma principal i la referència de l'esquema de tipus.
- Una sola `LandingPage.tsx` compartida evita que l'estructura divergeixi entre idiomes.
- Les biografies viuen en fitxers Markdown per idioma; els components reben cadenes per props.
- Els noms propis queden sense traduir a tots els idiomes.
- La visualització correcta és via servidor Deno a `localhost:8000`; `App.jsx` és només un mirall de preview.

## Open Questions
- L'usuari ha aconseguit aixecar el port de Deno? Queden per confirmar `/`, `/en`, `/fr`, `/es` en render real.
- `components/LandingPage.tsx` té un import no utilitzat pendent de netejar.
- Pendent decidir si cal afegir `hreflang`/sitemap més enllà de les etiquetes `alternate` ja presents.

## Next Steps
- Confirmar amb l'usuari que el port de Deno aixeca i que les quatre rutes es veuen correctes.
- Comprovar que `static/media/antonio-violi.mp4` és un vídeo reproduïble real (abans era un placeholder de text); si no, treure'l o posar-hi un pòster.
- Verificar que `antonio1.png`, `antonio2.png` i `antonio3.png` es veuen bé i que els retalls funcionen en mòbil, sobretot a la galeria.
- Netejar l'import no utilitzat a `LandingPage.tsx`.
- Revisar les traduccions en/fr/es amb l'usuari.

## Promotion Candidates For DESIGN.md
- Patró de selector d'idioma: enllaços directes per URL, sense JavaScript, amb estat actiu.
- Convenció de noms propis no traduïbles a tot el sistema.
- Jerarquia tipogràfica editorial per a títols de secció amb accent cru.
- Utilitat `ab-reveal` (reveal discreta en viewport) com a únic moviment permès.
- Convenció d'execució/visualització del projecte Fresh per a futurs col·laboradors.

## Recent History
- 2026-09-15: L'usuari pregunta com visualitzar la web al port; s'explica `deno task start` i les URLs per idioma, i es llisten els punts a revisar (vídeo, fotos, traduccions).
- 2026-09-14: Correcció de la ruta de biografia a `content/biografia.md` (error meu amb `contents`).
- 2026-09-14: Eliminat `routes/index.loader.ts`; la lectura de la biografia s'integra a la ruta.
- 2026-09-14: Creat sistema i18n complet (types, 4 diccionaris, mod.ts amb negociació d'idioma).
- 2026-09-14: Afegits els quatre fitxers de biografia localitzats i refactoritzats els components per rebre cadenes per props.
- 2026-09-14: Creat `LangSwitcher` i les rutes `/en`, `/fr`, `/es`; `lang` per ruta a `_app.tsx`.
- 2026-09-14: Afegida la secció i18n a DESIGN.md.
- 2026-09-14: Reescrit `App.jsx` com a mirall de preview autocontingut (SVG en lloc de fotos reals).
- 2026-09-14: Preview i verificació final no executables per limitació de l'entorn (no per error de codi).
