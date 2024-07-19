import { logo_img } from "@/constants";
import { SideDishesPage } from "@/views";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Side Dishes - The Harry's COFFEE & SNACKS",
  description: "Explore our delicious range of side dishes at The Harry's COFFEE & SNACKS.",
  keywords: "Harry's Coffee, Side Dishes, Snacks, Menu",
  authors: [{ name: "The Harry's COFFEE & SNACKS" }],
  openGraph: {
    siteName: "The Harry's COFFEE & SNACKS",
    title: "Side Dishes - The Harry's COFFEE & SNACKS",
    description: "Explore our delicious range of side dishes at The Harry's COFFEE & SNACKS.",
    url: "https://the-harrys.uz/side-dishes",
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
    title: "Side Dishes - The Harry's COFFEE & SNACKS",
    description: "Explore our delicious range of side dishes at The Harry's COFFEE & SNACKS.",
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


export default function SideDishes() {
  return <SideDishesPage />
}