import type { Diccionari } from "./types.ts";

export const en: Diccionari = {
  biografia: "biography.md",

  meta: {
    titol: "Antonio Bustos — Flamenco guitarist and composer",
    descripcio:
      "Antonio Bustos, flamenco guitarist and composer. Córdoba, Cadaqués and Barcelona: recordings, live performance and stage collaborations.",
    ogDescripcio:
      "Flamenco, composition and stage. Albums Casa en las Nubes and Renacer.",
  },

  nav: {
    label: "Flamenco",
    biografia: "Biography",
    galeria: "Gallery",
    video: "Video",
    contacte: "Contact",
    obrir: "Open the menu",
    tancar: "Close the menu",
    navegacioPrincipal: "Main navigation",
    navegacioMobil: "Mobile navigation",
    origen: "Córdoba · Cadaqués · Barcelona",
  },

  hero: {
    eyebrow: "Córdoba · Cadaqués · Barcelona",
    titol: "Antonio",
    titolAccent: "Bustos",
    subtitol: "Guitarist and composer",
    boto: "Discover",
    credit: "Portrait · Antonio Bustos",
  },

  bio: {
    index: "01 — Biography",
    titol: "A guitar forged between",
    titolAccent: "two lands",
    fitxes: [
      { any: "Age 17", text: "The flamenco calling" },
      { any: "Liceu", text: "Professional Conservatory, Barcelona" },
      { any: "Casa en las Nubes", text: "First album, composed in Cadaqués" },
      { any: "Renacer", text: "Second album, in progress" },
    ],
    retrat: "Antonio Bustos",
    tecnica: "Flamenco guitar",
    alternativa: "Antonio Bustos during a live performance",
  },

  galeria: {
    index: "02 — Gallery",
    titol: "Stages, rehearsals and",
    titolAccent: "silences",
    descripcio:
      "A visual journey through the artist's work, between concerts, stage productions and the composing room.",
    items: [
      {
        src: "/media/antonio2.png",
        alt: "Antonio Bustos on stage during a concert",
        caption: "Tenderete Flamenco · European tour",
      },
      {
        src: "/media/antonio3.png",
        alt: "Antonio Bustos seated with his guitar in a whitewashed courtyard",
        caption: "Casa en las Nubes · Cadaqués",
      },
      {
        src: "/media/antonio1.png",
        alt: "Studio portrait of Antonio Bustos with his flamenco guitar",
        caption: "Studio portrait",
      },
    ],
  },

  produccio: {
    index: "03 — Discography and stage",
    titol: "Two albums, one shared stage",
    paragrafs: [
      "The first album, Casa en las Nubes, was born in Cadaqués, a bohemian village in the north-east of the peninsula where the artist settled to compose his own music after touring Europe with the sextet Tenderete Flamenco.",
      "The second, Renacer, adds drawing and poetry to his original compositions, crossing cultures from north and south: a rondeña from Málaga and a habanera from Cadaqués meet in a single piece. Pianist and violinist Sarah Thomson, from the London Conservatory, and contemporary dancer Antonia Peris both take part.",
      "With Peris he is also working on Sintonia, a stage production she choreographs and directs, in which Antonio performs as guitarist and actor: the first flamenco guitarist to play a theatrical role in a production of this kind.",
    ],
    imatge: {
      src: "/media/antonio3.png",
      alt: "Antonio Bustos working on the composition of the second album",
      caption: "Composing room · Renacer",
    },
  },

  video: {
    index: "04 — Video",
    titol: "Violi, in the first person",
    descripcio:
      "A piece filmed in a single take, with no editing: the guitar, the breathing and the silence of the Cadaqués workshop.",
    peu: "Flamenco guitar · Live recording",
    qualitat: "mp4 · HD",
    alternativa: "Your browser cannot play this video.",
    descarregar: "Download the file",
  },

  contacte: {
    index: "05 — Contact",
    titol: "Concerts, productions and",
    titolAccent: "collaborations",
    descripcio:
      "For concert bookings, recording sessions, stage productions or flamenco guitar lessons, write directly. Replies usually within two working days.",
    boto: "Write to me",
    assumpte: "Enquiry from the website",
    directe: "Direct",
    xarxes: "Networks",
    base: "Based in",
    telefon: "+34 600 000 000",
    ciutat: "Cadaqués, Alt Empordà",
    correu: "Email",
  },

  footer: {
    subtitol: "Guitarist and composer",
    drets: "All rights reserved.",
    tornar: "Back to top ↑",
  },

  idioma: {
    etiqueta: "Language",
    canviar: "Change language",
  },
};
