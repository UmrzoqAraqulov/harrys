import { logo_img, mixLogo_img, redLogo_img } from "@/constants";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Harry's COFFEE & SNACKS",
    short_name: "Harry's COFFEE & SNACKS",
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: logo_img.src,
        sizes: "192x192",
        type: 'image/svg+xml',
      },
      {
        src: mixLogo_img.src,
        sizes: "192x192",
        type: 'image/png',
      }, {
        src: redLogo_img.src,
        sizes: "192x192",
        type: 'image/png',
      }
    ],
  };
}
