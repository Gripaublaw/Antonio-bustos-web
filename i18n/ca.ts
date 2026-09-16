import type { Diccionari } from "./types.ts";

export const ca: Diccionari = {
  biografia: "biografia.md",

  meta: {
    titol: "Antonio Bustos — Guitarrista i compositor de flamenc",
    descripcio:
      "Antonio Bustos, guitarrista i compositor de flamenc. Còrdova, Cadaqués i Barcelona: discografia, directe i col·laboracions escèniques.",
    ogDescripcio:
      "Flamenc, composició i escena. Discografia Casa en las Nubes i Renacer.",
  },

  nav: {
    label: "Flamenc",
    biografia: "Biografia",
    galeria: "Galeria",
    video: "Vídeo",
    contacte: "Contacte",
    obrir: "Obre el menú",
    tancar: "Tanca el menú",
    navegacioPrincipal: "Navegació principal",
    navegacioMobil: "Navegació mòbil",
    origen: "Còrdova · Cadaqués · Barcelona",
  },

  hero: {
    eyebrow: "Còrdova · Cadaqués · Barcelona",
    titol: "Antonio",
    titolAccent: "Bustos",
    subtitol: "Guitarrista i compositor",
    boto: "Descobreix",
    credit: "Retrat · Antonio Bustos",
  },

  bio: {
    index: "01 — Biografia",
    titol: "Una guitarra forjada entre",
    titolAccent: "dues terres",
    fitxes: [
      { any: "17 anys", text: "La crida del flamenc" },
      { any: "Liceu", text: "Conservatori Professional, Barcelona" },
      { any: "Casa en las Nubes", text: "Primer àlbum, compost a Cadaqués" },
      { any: "Renacer", text: "Segon àlbum, en procés" },
    ],
    retrat: "Antonio Bustos",
    tecnica: "Guitarra flamenca",
    alternativa: "Antonio Bustos durant una interpretació en directe",
  },

  galeria: {
    index: "02 — Galeria",
    titol: "Escenaris, assajos i",
    titolAccent: "silencis",
    descripcio:
      "Un recorregut visual pel treball de l'artista entre concerts, produccions escèniques i el taller de composició.",
    items: [
      {
        src: "/media/antonio2.png",
        alt: "Antonio Bustos en un escenari durant un concert",
        caption: "Tenderete Flamenco · Gira europea",
      },
      {
        src: "/media/antonio3.png",
        alt: "Antonio Bustos assegut amb la guitarra en un pati encalçat",
        caption: "Casa en las Nubes · Cadaqués",
      },
      {
        src: "/media/antonio1.png",
        alt: "Retrat d'Antonio Bustos amb la guitarra flamenca",
        caption: "Retrat d'estudi",
      },
    ],
  },

  produccio: {
    index: "03 — Discografia i escena",
    titol: "Dos àlbums, una escena compartida",
    paragrafs: [
      "El primer disc, Casa en las Nubes, va néixer a Cadaqués, un poble bohemi del nord-est de la península on l'artista es va instal·lar per compondre la seva pròpia música després de la gira europea amb el sextet Tenderete Flamenco.",
      "El segon, Renacer, suma el dibuix i la poesia a les composicions originals i creua cultures del nord i del sud: una rondeña de Màlaga i una habanera de Cadaqués conflueixen en una sola peça. Hi col·laboren la pianista i violinista Sarah Thomson, del Conservatori de Londres, i la ballarina contemporània Antonia Peris.",
      "Amb Peris treballa també en Sintonia, una producció escènica que ella coreografia i dirigeix, on Antonio actua com a guitarrista i actor: el primer guitarrista flamenc a interpretar un paper teatral dins d'una producció d'aquest tipus.",
    ],
    imatge: {
      src: "/media/antonio3.png",
      alt: "Antonio Bustos treballant en la composició del segon àlbum",
      caption: "Taller de composició · Renacer",
    },
  },

  video: {
    index: "04 — Vídeo",
    titol: "Violi, en primera persona",
    descripcio:
      "Una peça filmada en una sola presa, sense edició: la guitarra, la respiració i el silenci del taller de Cadaqués.",
    peu: "Guitarra flamenca · Enregistrament en directe",
    qualitat: "mp4 · HD",
    alternativa: "El teu navegador no pot reproduir aquest vídeo.",
    descarregar: "Descarrega el fitxer",
  },

  contacte: {
    index: "05 — Contacte",
    titol: "Concerts, produccions i",
    titolAccent: "col·laboracions",
    descripcio:
      "Per a contractació de concerts, sessions d'enregistrament, produccions escèniques o classes de guitarra flamenca, escriu directament. Resposta habitualment en dos dies feiners.",
    boto: "Escriu-me",
    assumpte: "Contacte des de la web",
    directe: "Directe",
    xarxes: "Xarxes",
    base: "Base",
    telefon: "+34 600 000 000",
    ciutat: "Cadaqués, Alt Empordà",
    correu: "Correu",
  },

  footer: {
    subtitol: "Guitarrista i compositor",
    drets: "Tots els drets reservats.",
    tornar: "Tornar a dalt ↑",
  },

  idioma: {
    etiqueta: "Idioma",
    canviar: "Canvia d'idioma",
  },
};
