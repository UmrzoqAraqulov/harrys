type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";
  priority?: number;
  alternates?: {
    languages?: {
      uz: string;
      ru: string;
    };
  };
}>;

export default function sitemap(): Sitemap {
  return [
    {
      url: "https://the-harrys.uz",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          uz: "https://the-harrys.uz/uz",
          ru: "https://the-harrys.uz/ru",
        },
      },
    },
    {
      url: "https://the-harrys.uz/locations",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          uz: "https://the-harrys.uz/uz/locations",
          ru: "https://the-harrys.uz/ru/locations",
        },
      },
    },
    {
      url: "https://the-harrys.uz/main",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          uz: "https://the-harrys.uz/uz/main",
          ru: "https://the-harrys.uz/ru/main",
        },
      },
    },
    {
      url: "https://the-harrys.uz/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          uz: "https://the-harrys.uz/uz/about",
          ru: "https://the-harrys.uz/ru/about",
        },
      },
    },
    {
      url: "https://the-harrys.uz/menu",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          uz: "https://the-harrys.uz/uz/menu",
          ru: "https://the-harrys.uz/ru/menu",
        },
      },
    }
  ];
}
