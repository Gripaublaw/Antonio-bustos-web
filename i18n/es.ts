import type { Diccionari } from "./types.ts";

export const es: Diccionari = {
  biografia: "biografia.es.md",

  meta: {
    titol: "Antonio Bustos — Guitarrista y compositor de flamenco",
    descripcio:
      "Antonio Bustos, guitarrista y compositor de flamenco. Córdoba, Cadaqués y Barcelona: discografía, directo y colaboraciones escénicas.",
    ogDescripcio:
      "Flamenco, composición y escena. Discografía Casa en las Nubes y Renacer.",
  },

  nav: {
    label: "Flamenco",
    biografia: "Biografía",
    galeria: "Galería",
    video: "Vídeo",
    contacte: "Contacto",
    obrir: "Abre el menú",
    tancar: "Cierra el menú",
    navegacioPrincipal: "Navegación principal",
    navegacioMobil: "Navegación móvil",
    origen: "Córdoba · Cadaqués · Barcelona",
  },

  hero: {
    eyebrow: "Córdoba · Cadaqués · Barcelona",
    titol: "Antonio",
    titolAccent: "Bustos",
    subtitol: "Guitarrista y compositor",
    boto: "Descubre",
    credit: "Retrato · Antonio Bustos",
  },

  bio: {
    index: "01 — Biografía",
    titol: "Una guitarra forjada entre",
    titolAccent: "dos tierras",
    fitxes: [
      { any: "17 años", text: "La llamada del flamenco" },
      { any: "Liceu", text: "Conservatorio Profesional, Barcelona" },
      { any: "Casa en las Nubes", text: "Primer álbum, compuesto en Cadaqués" },
      { any: "Renacer", text: "Segundo álbum, en proceso" },
    ],
    retrat: "Antonio Bustos",
    tecnica: "Guitarra flamenca",
    alternativa: "Antonio Bustos durante una interpretación en directo",
  },

  galeria: {
    index: "02 — Galería",
    titol: "Escenarios, ensayos y",
    titolAccent: "silencios",
    descripcio:
      "Un recorrido visual por el trabajo del artista entre conciertos, producciones escénicas y el taller de composición.",
    items: [
      {
        src: "/media/antonio2.png",
        alt: "Antonio Bustos en un escenario durante un concierto",
        caption: "Tenderete Flamenco · Gira europea",
      },
      {
        src: "/media/antonio3.png",
        alt: "Antonio Bustos sentado con la guitarra en un patio encalado",
        caption: "Casa en las Nubes · Cadaqués",
      },
      {
        src: "/media/antonio1.png",
        alt: "Retrato de estudio de Antonio Bustos con la guitarra flamenca",
        caption: "Retrato de estudio",
      },
    ],
  },

  produccio: {
    index: "03 — Discografía y escena",
    titol: "Dos álbumes, una escena compartida",
    paragrafs: [
      "El primer disco, Casa en las Nubes, nació en Cadaqués, un pueblo bohemio del nordeste de la península donde el artista se instaló para componer su propia música después de la gira europea con el sexteto Tenderete Flamenco.",
      "El segundo, Renacer, suma el dibujo y la poesía a las composiciones originales y cruza culturas del norte y del sur: una rondeña de Málaga y una habanera de Cadaqués confluyen en una sola pieza. Colaboran la pianista y violinista Sarah Thomson, del Conservatorio de Londres, y la bailarina contemporánea Antonia Peris.",
      "Con Peris trabaja también en Sintonia, una producción escénica que ella coreografía y dirige, donde Antonio actúa como guitarrista y actor: el primer guitarrista flamenco en interpretar un papel teatral dentro de una producción de este tipo.",
    ],
    imatge: {
      src: "/media/antonio3.png",
      alt: "Antonio Bustos trabajando en la composición del segundo álbum",
      caption: "Taller de composición · Renacer",
    },
  },

  video: {
    index: "04 — Vídeo",
    titol: "Violi, en primera persona",
    descripcio:
      "Una pieza filmada en una sola toma, sin edición: la guitarra, la respiración y el silencio del taller de Cadaqués.",
    peu: "Guitarra flamenca · Grabación en directo",
    qualitat: "mp4 · HD",
    alternativa: "Tu navegador no puede reproducir este vídeo.",
    descarregar: "Descarga el archivo",
  },

  contacte: {
    index: "05 — Contacto",
    titol: "Conciertos, producciones y",
    titolAccent: "colaboraciones",
    descripcio:
      "Para contratación de conciertos, sesiones de grabación, producciones escénicas o clases de guitarra flamenca, escribe directamente. Respuesta habitualmente en dos días laborables.",
    boto: "Escríbeme",
    assumpte: "Contacto desde la web",
    directe: "Directo",
    xarxes: "Redes",
    base: "Base",
    telefon: "+34 600 000 000",
    ciutat: "Cadaqués, Alt Empordà",
    correu: "Correo",
  },

  footer: {
    subtitol: "Guitarrista y compositor",
    drets: "Todos los derechos reservados.",
    tornar: "Volver arriba ↑",
  },

  idioma: {
    etiqueta: "Idioma",
    canviar: "Cambiar de idioma",
  },
};
