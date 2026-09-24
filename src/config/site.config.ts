export interface SiteConfig {
  name: string;
  siteName: string;
  domain: string;
  url: string;
  siteUrl: string;
  description: string;
  siteDescription: string;
  defaultAuthor: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
  categories: Array<{ id: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Ambiance Décoration — Magazine d'Art de Vivre, Design d'Intérieur & Mobilier",
  siteName: "ambiance-decoration.com",
  domain: "ambiance-decoration.com",
  url: "https://ambiance-decoration.com",
  siteUrl: "https://ambiance-decoration.com",
  description: "L'art de vivre contemporain et l'inspiration décoration : mobilier noble, luminaires d'exception, harmonies de couleurs minérales et aménagement d'espaces harmonieux.",
  siteDescription: "L'art de vivre contemporain et l'inspiration décoration : mobilier noble, luminaires d'exception, harmonies de couleurs minérales et aménagement d'espaces harmonieux.",
  defaultAuthor: "L'Atelier Ambiance Décoration",
  repo: "jc842/ambiance-decoration",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-flabbergasted",
    fontFamily: "Playfair Display, Plus Jakarta Sans, serif",
    colorScheme: "amber",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "79",
    containerId: "RXdkYyk6",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 623, format: "mobileBanner" },
      inContent: { zoneId: 627, format: "mediumRectangle" },
      header: { zoneId: 626, format: "leaderboard" },
    },
  },

  legal: {
    editor: "Ambiance Décoration — Édition & Art de Vivre",
    address: "BP 402, 97163 Le Moule Cedex",
    contactEmail: "contact@ambiance-decoration.com",
    hostName: "Cloudflare Inc.",
    hostAddress: "101 Townsend St, San Francisco, CA 94107, USA",
  },

  categories: [
    { id: "mobilier-design", label: "Mobilier & Pièces Maîtresses" },
    { id: "luminaires-ambiance", label: "Luminaires & Éclairage" },
    { id: "harmonies-couleurs", label: "Couleurs & Matières" },
    { id: "amenagement-interieur", label: "Agencement d'Espaces" },
    { id: "art-et-galerie", label: "Art & Galerie d'Objets" },
  ],
};
