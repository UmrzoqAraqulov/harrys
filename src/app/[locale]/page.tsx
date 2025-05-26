import { logo_img } from "@/constants";
import { IParams } from "@/types";
import { HomePage } from "@/views";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(
  { params }: IParams,
): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: "Get in touch - The Harry's coffee & snacks",
    description: t('description'),
    keywords: "Harry's Coffee, Snacks, Burgers, Side Dishes, Drinks, Hotdogs, Menu Categories",
    metadataBase: new URL(`https://the-harrys.uz/${params.locale}`),
    robots: {
      follow: true,
      index: true,
      "max-image-preview": "large",
    },
    alternates: {
      languages: {
        uz: "https://the-harrys.uz/uz",
        ru: "https://the-harrys.uz/ru",
      },
    },
    openGraph: {
      title: "Menu Categories | The Harry's COFFEE & SNACKS",
      siteName: "The Harry's COFFEE & SNACKS",
      description: "Discover the variety of categories available at The Harry's COFFEE & SNACKS, including burgers, side dishes, drinks, and hotdogs.",
      url: `https://the-harrys.uz/${params.locale}`,
      images: [
        {
          url: logo_img.src,
          width: 1200,
          height: 630,
          alt: "The Harry's COFFEE & SNACKS",
        },
      ],
      locale: params.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: "Menu Categories | The Harry's COFFEE & SNACKS",
      description: "Discover the variety of categories available at The Harry's COFFEE & SNACKS, including burgers, side dishes, drinks, and hotdogs.",
      images: [
        {
          url: logo_img.src,
          width: 1200,
          height: 630,
          alt: "The Harry's COFFEE & SNACKS",
        },
      ],
    },
  }
};

export default function Home() {
  return <HomePage />
}
