"use client"

import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import { MotionEl } from "@/components";
import { logo_img, desk_logo_img, user_icon } from "@/constants";
import { IPageParams } from "@/types";
import { LocaleSwitcher } from "../locale-switcher";

export const Header: FC<IPageParams> = () => {
  const t = useTranslations("header");

  return (
    <motion.header
      variants={{
        initial: {
          scaleX: 1,
        },
        animate: {
          scaleX: 2,
        }
      }}
      initial="initial"
      animate={"initial"}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={`w-full fixed top-0 left-0 py-3 bg-white z-50 "shadow-md backdrop-blur-md bg-opacity-70`}
    >
      <div className="w-full container flex justify-between items-center">
        <div className="flex justify-between items-center gap-5 sm:text-xl">
          <MotionEl
            once
            delay={.1}
            direction="down"
            className="w-[50px] sm:w-[200px]"
          >
            <Link href="/">
              <Image src={logo_img} className="h-full sm:hidden z-50 w-full object-center object-contain" alt="logo" />
              <Image src={desk_logo_img} alt="logo"
                className="h-full hidden sm:block z-50 w-full object-center object-contain" />
            </Link>
          </MotionEl>

          <MotionEl
            once
            delay={.2}
            direction="down"
          >
            <Link href="/locations">{t("location")}</Link>
          </MotionEl>
          <MotionEl
            once
            delay={.3}
            direction="down"
          >
            <Link href="/about-us">{t("about")}</Link>
          </MotionEl>
        </div>
        <div className="flex gap-2 items-center">
          <MotionEl
            once
            direction="down"
            delay={.4}
          >
            <LocaleSwitcher />
          </MotionEl>
          <MotionEl
            once
            direction="down"
            delay={.5}
          >
            <div className="rounded-lg cursor-pointer bg-white border-1 py-1.5 px-3">
              <Image
                className="w-4"
                width={12}
                height={14}
                color="white"
                src={user_icon.src}
                alt="user"
              />
            </div>
          </MotionEl>
        </div>
      </div>
    </motion.header>
  )
}