import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

import { IParams } from "@/types";
import { MenuPage } from "@/views/menu-page";

export async function generateMetadata(
  { params }: IParams,
): Promise<Metadata> {
  const t = await getTranslations();

  return {
    keywords: t('keywords'),
    metadataBase: new URL(`https://mrce-group.uz/${params.locale}/menu`),
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
    alternates: {
      languages: {
        uz: 'https://mrce-group.uz/uz/menu',
        ru: "https://mrce-group.uz/ru/menu",
      },
    },
    openGraph: {
      url: `https://mrce-group.uz/${params.locale}/menu`,
      locale: params.locale,
    }
  };
}

export default function Menu() {
  return (
    <MenuPage />
  )
}