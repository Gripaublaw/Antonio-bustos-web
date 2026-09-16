---
version: alpha
name: Antonio Bustos — Sistema visual
colors:
  ink: "#0a0a0a"
  ink-soft: "#1a1a1a"
  line: "#2a2a2a"
  bone: "#f5f5f5"
  cru: "#e8e0d5"
  smoke: "#666666"
typography:
  display:
    fontFamily: "Playfair Display"
    fontWeight: 400
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter"
    fontWeight: 300
    lineHeight: 1.7
  eyebrow:
    fontFamily: "Inter"
    fontWeight: 400
    fontSize: "0.6875rem"
    letterSpacing: "0.32em"
rounded:
  none: "0px"
spacing:
  gutter: "1.5rem"
  gutter-lg: "4rem"
  section: "5rem"
  section-lg: "9rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cru}"
    rounded: "{rounded.none}"
    padding: "1rem 2.25rem"
  nav-link:
    textColor: "{colors.smoke}"
    padding: "0px"
  section-rule:
    backgroundColor: "{colors.line}"
    height: "1px"
  gallery-caption:
    textColor: "{colors.cru}"
    padding: "1.25rem"
---

# Landing d'Antonio Bustos — sistema visual

## Overview

Landing page de perfil artístic per a Antonio Bustos, guitarrista flamenc i
compositor. El to és editorial i sobri: negre gairebé pur, tipografia serif
Playfair Display en gran escala i molt d'espai negatiu.

### Principis

1. **Fosc per defecte.** El fons és `ink` (#0a0a0a); les superfícies lleugerament
   més clares (#1a1a1a) només apareixen quan cal separar blocs.
2. **La fotografia és el color.** No hi ha accent cromàtic; l'únic accent és el
   cru (#e8e0d5) i el gris mitjà (#666) per a text secundari.
3. **Espai, no decoració.** Cada secció respira amb `--ab-section`. Els
   separadors són filets d'1px, mai caixes.
4. **Moviment mínim.** Només un reveal de 0.9s a l'entrar en viewport i
   transicions de color en hover. Respecta `prefers-reduced-motion`.

### Tipografia

- Títols: Playfair Display, pesos 400–500, `text-balance`, majúscules
  combinades amb cursiva per a noms d'obres.
- Cos: Inter 300, `max-w-[52ch]`, color `bone` amb paràgrafs secundaris en `cru`
  o `smoke`.
- Etiquetes: Inter, 11px, `tracking-[0.32em]`, majúscules.

### Convencions de codi

- Rutes: `routes/`. Components presentacionals: `components/`. Illes
  interactives: `islands/`.
- Tokens exposats com a variables CSS a `assets/styles.css` i replicats a
  `@theme` de Tailwind 4 (`text-cru`, `bg-ink-soft`, `border-ink-line`...).
- Cap valor de color escrit en línia dins dels components.

## Idiomes

La web és multilingüe en català, anglès, francès i castellà. El català és
l'idioma de referència i viu a l'arrel; la resta tenen prefix de dues lletres.

| Idioma | URL | Ruta | Biografia |
|---|---|---|---|
| Català (principal) | `/` | `routes/index.tsx` | `content/biografia.md` |
| Anglès | `/en` | `routes/en.tsx` | `content/biography.md` |
| Francès | `/fr` | `routes/fr.tsx` | `content/biographie.md` |
| Castellà | `/es` | `routes/es.tsx` | `content/biografia.es.md` |

### Estructura

- `i18n/types.ts` — tipus `Idioma` i la interfície `Diccionari`. El català en
  defineix la forma; qualsevol clau nova s'ha d'afegir als quatre fitxers.
- `i18n/{ca,en,fr,es}.ts` — un diccionari per llengua.
- `i18n/mod.ts` — `diccionari()`, `rutaIdioma()`, `carregarBiografia()` i
  `negociarIdioma()`.
- `components/LandingPage.tsx` — cos compartit. Les quatre rutes l'importen i
  només hi canvien l'idioma i la biografia.

### Regles

1. **Cap text a la vista.** Els components reben les cadenes per props des del
   diccionari; no hi ha literals visibles dins del marcatge.
2. **Cada llengua, una URL.** Els enllaços del selector d'idioma són `<a href>`
   reals, no botons: funcionen sense JavaScript i són compartibles.
3. **`lang` correcte per pàgina.** `routes/_app.tsx` ajusta l'atribut `lang` a
   partir del camí i, si no hi ha coincidència, de l'`Accept-Language`.
4. **`hreflang` complet.** Cada pàgina declara les quatre versions més
   `x-default` perquè els cercadors les relacionin.
5. **Noms propis intactes.** Títols d'obres (*Casa en las Nubes*, *Renacer*,
   *Sintonia*) i noms de col·laboradors no es tradueixen mai.
6. **Biografia per fitxer.** `carregarBiografia(idioma)` llegeix el Markdown
   corresponent i retorna dos paràgrafs; si el fitxer falta, cau en un text de
   reserva propi de cada llengua i la pàgina no falla.

### Components

- `components/LangSwitcher.tsx` — selector d'escriptori (etiqueta + `list`).
- `islands/MobileMenu.tsx` — illa amb el panell mòbil i el mateix selector.

