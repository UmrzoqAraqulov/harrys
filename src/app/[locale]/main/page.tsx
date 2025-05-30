import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

import { IParams } from "@/types";
import { MainPage } from "@/views";

export async function generateMetadata(
  { params }: IParams,
): Promise<Metadata> {
  const t = await getTranslations();

  return {
    keywords: t('keywords'),
    metadataBase: new URL(`https://mrce-group.uz/${params.locale}/main`),
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
    alternates: {
      languages: {
        uz: 'https://mrce-group.uz/uz/main',
        ru: "https://mrce-group.uz/ru/main",
      },
    },
    openGraph: {
      url: `https://mrce-group.uz/${params.locale}/main`,
      locale: params.locale,
    }
  };
}

export default function Main() {
  return (
    <MainPage />
  )
}