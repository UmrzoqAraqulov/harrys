import { logo_icon, desk_logo_img } from "@/constants";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Harry's",
    short_name: "Harry's",
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: logo_icon.src,
        sizes: "192x192",
        type: 'image/svg+xml',
      },
      {
        src: desk_logo_img.src,
        sizes: "192x192",
        type: 'image/png',
      },
    ],
  };
}
