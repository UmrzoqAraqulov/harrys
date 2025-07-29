"use client"

import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

import { MotionEl } from "@/components";
import { desk_logo_img, bar_icon, close_icon, logo_icon, telegram_icon, instagram_icon } from "@/constants";
import { IPageParams } from "@/types";
import { LocaleSwitcher } from "../locale-switcher";

export const Header: FC<IPageParams> = () => {
  const t = useTranslations();
  const [openBar, setOpenBar] = useState<boolean>(false)

  const navItemStyle = "block bg-primary py-2 px-4 rounded-full w-[200px] md:w-[300px] text-white hover:scale-105 hover:-translate-y-0.5 text-center text-base sm:text-lg md:text-xl"

  const handleOpen = () => {
    setOpenBar(true)
  }

  const handleClose = () => {
    setOpenBar(false)
  }

  return (
    <motion.header
      variants={{
        initial: {
          scaleX: 1,
        },
        animate: {
          scaleX: 1,
        }
      }}
      initial="initial"
      animate={"initial"}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={`w-full fixed top-0 left-0 bg-primary z-50 shadow-md backdrop-blur-md`}
    >
      <div className="w-full container flex justify-between items-center flex-row-reverse md:flex-row">
        {/* bar icon */}
        <MotionEl
          once
          direction="down"
          delay={.1}
        >
          <div onClick={handleOpen} className="rounded-lg cursor-pointer bg-white border-1 py-1 px-3">
            <Image
              className="w-6 cursor-pointer"
              width={16}
              height={16}
              color="white"
              src={bar_icon.src}
              alt="user"
            />
          </div>
        </MotionEl>
        {/* logo */}
        <MotionEl
          once
          delay={.2}
          direction="down"
        >
          <Link href="/main">
            <div className="text-white flex flex-col items-center">
              <Image
                src={logo_icon}
                alt="logo"
                priority
                className="z-50 w-[40px] sm:w-[50px] object-center object-contain" />
              <h2 className="text-nowrap text-[15px] font-bold">THE HARRY'S</h2>
              <div className="flex items-center gap-1 mb-1">
                <hr className="w-4" />
                <p className="text-[9px]">BURGERS & COFFEE</p>
                <hr className="w-4" />
              </div>
            </div>
          </Link>
        </MotionEl>
        {/* switch lang */}
        <MotionEl
          once
          direction="down"
          delay={.3}
          className="hidden md:block"
        >
          <LocaleSwitcher className="!py-10" />
        </MotionEl>
      </div>
      <div className={`${openBar ? "left-0" : "-left-full"} flex flex-col justify-between fixed w-[300px] md:w-[500px] h-screen bg-white top-0 z-50 p-5 pt-[6%] duration-500`}>
        <div className="flex gap-3 items-center flex-col">
          <MotionEl
            once
            delay={.2}
            direction="down"
          >
            <Link className={navItemStyle} onClick={handleClose} href="/main">{t("main")}</Link>
          </MotionEl>
          <MotionEl
            once
            delay={.3}
            direction="down"
          >
            <Link className={navItemStyle} onClick={handleClose} href="/menu">{t("ourMenu")}</Link>
          </MotionEl>
          <MotionEl
            once
            delay={.4}
            direction="down"
          >
            <Link className={navItemStyle} onClick={handleClose} href="/locations">{t("location")}</Link>
          </MotionEl>
          <MotionEl
            once
            delay={.5}
            direction="down"
          >
            <Link className={navItemStyle} onClick={handleClose} href="/about">{t("about")}</Link>
          </MotionEl>
          <MotionEl
            once
            direction="down"
            delay={.6}
            className="md:hidden flex justify-center"
          >
            <LocaleSwitcher className="shadow-lg md:shadow-none rounded-md !w-[200px]" />
          </MotionEl>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <MotionEl
            once
            delay={.1}
            direction="down"
            className="w-[200px] sm:w-[240px]"
          >
            <Link href="/main">
              <Image
                src={desk_logo_img}
                alt="logo"
                priority
                className="h-full z-50 w-full object-center object-contain" />
            </Link>
          </MotionEl>
          <div className="flex flex-col gap-4 items-center">
            <MotionEl
              once
              delay={.1}
              direction="down"
              className="text-base"
            >
              <Link
                href="tel:+998772777702"
              >
                +998(77) 277 77 02
              </Link>
            </MotionEl>
            <div className="flex gap-4">
              <MotionEl
                once
                delay={.1}
                direction="down"
                className="text-base"
              >
                <Link href="">
                  <Image src={telegram_icon} alt="telegram" width={30} />
                </Link>
              </MotionEl>
              <MotionEl
                once
                delay={.1}
                direction="down"
                className="text-base"
              >
                <Link
                  href="https://www.instagram.com/theharrys.uzb"
                  target="_blank"
                >
                  <Image src={instagram_icon} alt="instagram" width={30} className="rounded-md" />
                </Link>
              </MotionEl>
            </div>
          </div>
        </div>
        <Image onClick={handleClose} className="absolute top-2 right-2 w-6 hover:scale-110 cursor-pointer" src={close_icon} alt="close icon" />

      </div>
      <div onClick={handleClose} className={`${openBar ? "right-0" : "-right-full"} fixed top-0 w-full h-screen z-40 bg-black bg-opacity-30 cursor-pointer`} />
    </motion.header>
  )
}