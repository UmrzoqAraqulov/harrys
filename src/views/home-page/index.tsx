"use client"

import { MotionEl } from "@/components";
import { call_icon, hero_bg_img, instagram_icon, location_icon, menu_icon } from "@/constants";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

export const HomePage: FC = () => {
  const router = useRouter();

  return (
    <section className="page">
      <div
        style={{ backgroundImage: `url(${hero_bg_img})` }}
        className="hero"
      >

      </div>
    </section>
  )
}