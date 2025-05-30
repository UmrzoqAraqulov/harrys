import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

import { IParams } from "@/types";
import { AboutPage } from "@/views";

export async function generateMetadata(
  { params }: IParams,
): Promise<Metadata> {
  const t = await getTranslations();

  return {
    keywords: t('keywords'),
    metadataBase: new URL(`https://mrce-group.uz/${params.locale}/about`),
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
    alternates: {
      languages: {
        uz: 'https://mrce-group.uz/uz/about',
        ru: "https://mrce-group.uz/ru/about",
      },
    },
    openGraph: {
      url: `https://mrce-group.uz/${params.locale}/about`,
      locale: params.locale,
    }
  };
}

export default function About() {
  return (
    <AboutPage />
  )
}