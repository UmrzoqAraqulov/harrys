import { logo_img } from "@/constants";
import { HotDogsPage } from "@/views";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hot Dogs - The Harry's COFFEE & SNACKS",
  description: "Explore our delicious range of hot dogs at The Harry's COFFEE & SNACKS.",
  keywords: "Harry's Coffee, Hot Dogs, Snacks, Menu",
  authors: [{ name: "The Harry's COFFEE & SNACKS" }],
  openGraph: {
    siteName: "The Harry's COFFEE & SNACKS",
    title: "Hot Dogs - The Harry's COFFEE & SNACKS",
    description: "Explore our delicious range of hot dogs at The Harry's COFFEE & SNACKS.",
    url: "https://the-harrys.uz/hot-dogs",
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
    title: "Hot Dogs - The Harry's COFFEE & SNACKS",
    description: "Explore our delicious range of hot dogs at The Harry's COFFEE & SNACKS.",
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

export default function HotDogs() {
  return <HotDogsPage />
}