"use client"

import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import { useMediaQuery } from "../../../hooks";

export const HomePage: FC = () => {
  const router = useRouter();

  // md = 768px. Shunday qilib, agar bundan katta bo‘lsa → desktop
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop) {
      router.replace("/main"); // Desktop bo‘lsa
    } else {
      router.replace("/menu"); // Mobile/tablet bo‘lsa
    }
  }, [isDesktop, router]);
  return undefined;
};
