'use client';

import {bg_img} from "@/constants";
import Error from 'next/error';
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function NotFound() {
  return (
    <html lang="en">
    <body
      style={{backgroundImage: `url(${bg_img.src})`}}
      className={`${inter.className} relative min-h-svh bg-cover bg-no-repeat bg-center text-white`}
    >
    <Error statusCode={404}/>
    </body>
    </html>
  );
}
