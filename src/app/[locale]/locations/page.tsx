import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

import { IParams } from "@/types";
import { LocationsPage } from "@/views/locations-page";

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
        uz: 'https://mrce-group.uz/uz/locations',
        ru: "https://mrce-group.uz/ru/locations",
      },
    },
    openGraph: {
      url: `https://mrce-group.uz/${params.locale}/locations`,
      locale: params.locale,
    }
  };
}

export default function Locations() {
  return (
    <LocationsPage />
  )
}