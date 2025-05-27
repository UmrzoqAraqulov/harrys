import { ReactNode } from "react";
import { NextIntlClientProvider, useMessages, useTranslations } from "next-intl";
import { Inter } from "next/font/google";

import { BaseLayout, GoogleAnalytics } from "@/components";
import { hero_bg_img, logo_img } from "@/constants";
import { Providers } from "@/providers";
import { TLocale } from "@/types";

import "@/styles/global.scss";

const inter = Inter({ subsets: ["latin"], weight: "500" });

type Props = {
  children: ReactNode;
  params: { locale: TLocale };
};

export default function LocalLayout({ children, params: { locale } }: Readonly<Props>) {
  const messages = useMessages();
  const t = useTranslations();

  return (
    <html lang={locale}>
      <head>
        <title>The Harry's COFFEE & SNACKS</title>
        <meta name="description" content={t("description")} />
        <meta name="keywords" content="Harry's Coffee, Snacks, Beverages, Menu" />
        <meta property="og:title" content="The Harry's COFFEE & SNACKS" />
        <meta property="og:description" content={t("description")} />
        <meta property="og:image" content={logo_img.src} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="harry's" />
        <meta property="og:url" content="https://the-harrys.uz" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="The Harry's COFFEE & SNACKS" />
        <meta name="twitter:description" content={t("description")} />
        <meta name="twitter:image" content={logo_img.src} />
        <meta property="twitter:image:alt" content="harry's" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Ogabek Mustafoev" />
        <meta name="application-name" content="the-harrys" />
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="author" href="https://mustafoev-ogabek.vercel.app/" />
        <link rel="profile" href="https://t.me/Ogabek_Mustafoev" />
        <link rel="canonical" href="https://the-harrys.uz" />
        <link rel="shortlink" href="https://the-harrys.uz" />
        <link rel="apple-touch-icon" href={logo_img.src} type="image/png" sizes="any" />
        <link rel="icon" type="image/svg+xml" sizes="192x192" href={logo_img.src} />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href={logo_img.src} />
      </head>
      <body
        className={inter.className}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <BaseLayout locale={locale}>
              {children}
            </BaseLayout>
          </Providers>
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics />
    </html>
  );
}
