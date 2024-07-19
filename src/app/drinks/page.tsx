import { logo_img } from "@/constants";
import { DrinksPage } from "@/views";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drinks - The Harry's COFFEE & SNACKS",
  description: "Explore our delicious range of drinks at The Harry's COFFEE & SNACKS.",
  keywords: "Harry's Coffee, Drinks, Beverages, Menu",
  authors: [{ name: "The Harry's COFFEE & SNACKS" }],
  openGraph: {
    siteName: "The Harry's COFFEE & SNACKS",
    title: "Drinks - The Harry's COFFEE & SNACKS",
    description: "Explore our delicious range of drinks at The Harry's COFFEE & SNACKS.",
    url: "https://the-harrys.uz/drinks",
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
    title: "Drinks - The Harry's COFFEE & SNACKS",
    description: "Explore our delicious range of drinks at The Harry's COFFEE & SNACKS.",
    images: [
      {
        url: logo_img.src,
        width: 1200,
        height: 630,
        alt: "The Harry's COFFEE & SNACKS",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://the-harrys.uz",
    languages: {
      en: "https://the-harrys.uz",
    },
  },
};

export default function Drinks() {
  return <DrinksPage />
}