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
      en: string;
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
          en: "https://the-harrys.uz",
        },
      },
    },
    {
      url: "https://the-harrys.uz/category",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "https://the-harrys.uz/category",
        },
      },
    },
    {
      url: "https://the-harrys.uz/burgers",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: "https://the-harrys.uz/burgers",
        },
      },
    },
    {
      url: "https://the-harrys.uz/hot-dogs",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: "https://the-harrys.uz/hot-dogs",
        },
      },
    },
    {
      url: "https://the-harrys.uz/drinks",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: "https://the-harrys.uz/drinks",
        },
      },
    },
    {
      url: "https://the-harrys.uz/side-dishes",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          en: "https://the-harrys.uz/side-dishes",
        },
      },
    },
  ];
}
