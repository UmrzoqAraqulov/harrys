import {logo_img} from "@/constants";
import {CategoryPage} from "@/views";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Menu Categories",
  description: "Discover the variety of categories available at The Harry's COFFEE & SNACKS, including burgers, side dishes, drinks, and hotdogs.",
  keywords: "Harry's Coffee, Snacks, Burgers, Side Dishes, Drinks, Hotdogs, Menu Categories",
  openGraph: {
    siteName: "The Harry's COFFEE & SNACKS",
    title: "Menu Categories | The Harry's COFFEE & SNACKS",
    description: "Discover the variety of categories available at The Harry's COFFEE & SNACKS, including burgers, side dishes, drinks, and hotdogs.",
    url: "https://the-harrys.uz/categories",
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
    title: "Menu Categories | The Harry's COFFEE & SNACKS",
    description: "Discover the variety of categories available at The Harry's COFFEE & SNACKS, including burgers, side dishes, drinks, and hotdogs.",
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

export default function Category() {
  return <CategoryPage/>
}