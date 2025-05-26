'use client';

import Error from 'next/error';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <html lang="ru">
      <body
        style={{ background: "white", color: "black" }}
        className={`${inter.className}`}
      >
        <Error statusCode={404} />
      </body>
    </html>
  );
}
