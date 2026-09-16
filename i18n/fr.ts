import type { Diccionari } from "./types.ts";

export const fr: Diccionari = {
  biografia: "biographie.md",

  meta: {
    titol: "Antonio Bustos — Guitariste et compositeur flamenco",
    descripcio:
      "Antonio Bustos, guitariste et compositeur flamenco. Cordoue, Cadaqués et Barcelone : discographie, concerts et collaborations scéniques.",
    ogDescripcio:
      "Flamenco, composition et scène. Albums Casa en las Nubes et Renacer.",
  },

  nav: {
    label: "Flamenco",
    biografia: "Biographie",
    galeria: "Galerie",
    video: "Vidéo",
    contacte: "Contact",
    obrir: "Ouvrir le menu",
    tancar: "Fermer le menu",
    navegacioPrincipal: "Navigation principale",
    navegacioMobil: "Navigation mobile",
    origen: "Cordoue · Cadaqués · Barcelone",
  },

  hero: {
    eyebrow: "Cordoue · Cadaqués · Barcelone",
    titol: "Antonio",
    titolAccent: "Bustos",
    subtitol: "Guitariste et compositeur",
    boto: "Découvrir",
    credit: "Portrait · Antonio Bustos",
  },

  bio: {
    index: "01 — Biographie",
    titol: "Une guitare forgée entre",
    titolAccent: "deux terres",
    fitxes: [
      { any: "17 ans", text: "L'appel du flamenco" },
      { any: "Liceu", text: "Conservatoire professionnel, Barcelone" },
      { any: "Casa en las Nubes", text: "Premier album, composé à Cadaqués" },
      { any: "Renacer", text: "Deuxième album, en cours" },
    ],
    retrat: "Antonio Bustos",
    tecnica: "Guitare flamenca",
    alternativa: "Antonio Bustos lors d'une interprétation en direct",
  },

  galeria: {
    index: "02 — Galerie",
    titol: "Scènes, répétitions et",
    titolAccent: "silences",
    descripcio:
      "Un parcours visuel à travers le travail de l'artiste, entre concerts, productions scéniques et atelier de composition.",
    items: [
      {
        src: "/media/antonio2.png",
        alt: "Antonio Bustos sur scène pendant un concert",
        caption: "Tenderete Flamenco · Tournée européenne",
      },
      {
        src: "/media/antonio3.png",
        alt: "Antonio Bustos assis avec sa guitare dans une cour chaulée",
        caption: "Casa en las Nubes · Cadaqués",
      },
      {
        src: "/media/antonio1.png",
        alt: "Portrait en studio d'Antonio Bustos avec sa guitare flamenca",
        caption: "Portrait en studio",
      },
    ],
  },

  produccio: {
    index: "03 — Discographie et scène",
    titol: "Deux albums, une scène partagée",
    paragrafs: [
      "Le premier disque, Casa en las Nubes, est né à Cadaqués, un village bohème du nord-est de la péninsule où l'artiste s'est installé pour composer sa propre musique après la tournée européenne avec le sextet Tenderete Flamenco.",
      "Le second, Renacer, ajoute le dessin et la poésie aux compositions originales et croise les cultures du nord et du sud : une rondeña de Malaga et une habanera de Cadaqués se rejoignent en une seule pièce. La pianiste et violoniste Sarah Thomson, du Conservatoire de Londres, et la danseuse contemporaine Antonia Peris y participent.",
      "Avec Peris, il travaille aussi sur Sintonia, une production scénique qu'elle chorégraphie et dirige, où Antonio se produit comme guitariste et comédien : le premier guitariste flamenco à interpréter un rôle théâtral dans une production de ce type.",
    ],
    imatge: {
      src: "/media/antonio3.png",
      alt: "Antonio Bustos travaillant à la composition du deuxième album",
      caption: "Atelier de composition · Renacer",
    },
  },

  video: {
    index: "04 — Vidéo",
    titol: "Violi, à la première personne",
    descripcio:
      "Une pièce filmée en une seule prise, sans montage : la guitare, la respiration et le silence de l'atelier de Cadaqués.",
    peu: "Guitare flamenca · Enregistrement en direct",
    qualitat: "mp4 · HD",
    alternativa: "Votre navigateur ne peut pas lire cette vidéo.",
    descarregar: "Télécharger le fichier",
  },

  contacte: {
    index: "05 — Contact",
    titol: "Concerts, productions et",
    titolAccent: "collaborations",
    descripcio:
      "Pour une programmation de concerts, des sessions d'enregistrement, des productions scéniques ou des cours de guitare flamenca, écrivez directement. Réponse généralement sous deux jours ouvrés.",
    boto: "Écrivez-moi",
    assumpte: "Contact depuis le site",
    directe: "Direct",
    xarxes: "Réseaux",
    base: "Basé à",
    telefon: "+34 600 000 000",
    ciutat: "Cadaqués, Alt Empordà",
    correu: "E-mail",
  },

  footer: {
    subtitol: "Guitariste et compositeur",
    drets: "Tous droits réservés.",
    tornar: "Retour en haut ↑",
  },

  idioma: {
    etiqueta: "Langue",
    canviar: "Changer de langue",
  },
};
