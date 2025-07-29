import { logo_icon } from "@/constants";
import { IParams } from "@/types";
import { HomePage } from "@/views";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(
  { params }: IParams,
): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: "About Us - The Harry's",
    description: t('description'),
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
      title: "Menu Categories | The Harry's",
      siteName: "The Harry's",
      description: "Discover the variety of categories available at The Harry's, including burgers, side dishes, drinks, and hotdogs.",
      url: `https://the-harrys.uz/${params.locale}`,
      images: [
        {
          url: logo_icon.src,
          width: 1200,
          height: 630,
          alt: "The Harry's",
        },
      ],
      locale: params.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: "Menu Categories | The Harry's",
      description: "Discover the variety of categories available at The Harry's, including burgers, side dishes, drinks, and hotdogs.",
      images: [
        {
          url: logo_icon.src,
          width: 1200,
          height: 630,
          alt: "The Harry's",
        },
      ],
    },
  }
};

export default function Home() {
  return <HomePage />
}
