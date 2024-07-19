import { BaseLayout } from "@/components";
import { bg_img, logo_img } from "@/constants";
import { Providers } from "@/providers";
import "@/styles/global.scss";
import { IChildren } from "@/types";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://the-harrys.uz'),
  title: {
    default: "The Harry's COFFEE & SNACKS",
    template: "%s | The Harry's COFFEE & SNACKS",
  },
  description: "Discover a wide range of delicious snacks and beverages at The Harry's COFFEE & SNACKS.",
  keywords: "Harry's Coffee, Snacks, Beverages, Menu",
  authors: [
    { name: "Ogabek Mustafoev", url: "https://mustafoev-ogabek.vercel.app/" },
    { name: "The Harry's COFFEE & SNACKS", url: "https://the-harrys.uz" },
  ],
  openGraph: {
    siteName: "The Harry's COFFEE & SNACKS",
    title: "The Harry's COFFEE & SNACKS",
    description: "Discover a wide range of delicious snacks and beverages at The Harry's COFFEE & SNACKS.",
    url: "https://the-harrys.uz",
    images: [
      {
        url: logo_img.src,
        width: 1200,
        height: 630,
        alt: "The Harry's COFFEE & SNACKS",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Harry's COFFEE & SNACKS",
    description: "Discover a wide range of delicious snacks and beverages at The Harry's COFFEE & SNACKS.",
    images: [
      {
        url: logo_img.src,
        width: 1200,
        height: 630,
        alt: "The Harry's COFFEE & SNACKS",
      },
    ],
  },
  icons: [
    {
      url: logo_img.src,
      type: "image/png",
      sizes: "1200x630",
    },
    {
      url: logo_img.src,
      type: "image/png",
      sizes: "32x32",
    },
    {
      url: logo_img.src,
      type: "image/png",
      sizes: "16x16",
    },
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://the-harrys.uz",
    languages: {
      en: "https://the-harrys.uz",
    },
  },
};

export default function RootLayout({ children }: Readonly<IChildren>) {
  return (
    <html lang="ru" className="dark">
      <body
        style={{ backgroundImage: `url(${bg_img.src})` }}
        className={`${inter.className} relative bg-cover bg-no-repeat bg-center text-white`}
      >
        <Providers>
          <BaseLayout>
            {children}
          </BaseLayout>
        </Providers>
        <div
          className="bg-primary flex items-center justify-center absolute bottom-0 left-0 h-10 sm:h-14 md:h-16 lg:h-20 w-1/5"
          style={{
            borderRadius: "0% 100% 0% 100% / 100% 100% 0% 0% "
          }}
        />
      </body>
    </html>
  );
}
