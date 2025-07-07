"use client"

import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

import { MotionEl } from "@/components";
import { desk_logo_img, bar_icon, close_icon } from "@/constants";
import { IPageParams } from "@/types";
import { LocaleSwitcher } from "../locale-switcher";

export const Header: FC<IPageParams> = () => {
  const t = useTranslations();
  const [openBar, setOpenBar] = useState<boolean>(false)

  const navStyle = `${openBar ? "right-0" : "-right-full"} flex gap-3 fixed md:static w-2/3 md:w-auto h-screen md:h-auto flex-col md:flex-row bg-white md:bg-transparent top-0 z-50 p-5 pt-[6%] md:p-0 duration-500`
  const navItemStyle = "block bg-primary py-2 px-4 rounded-md text-white hover:scale-105 hover:-translate-y-0.5 text-center md:py-1 text-base sm:text-lg md:text-base"

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
      className={`w-full fixed top-0 left-0 py-3 bg-white z-50 shadow-md backdrop-blur-md bg-opacity-70 `}
    >
      <div className="w-full container flex justify-between items-center">
        <div className="items-center gap-12 flex">

          <MotionEl
            once
            delay={.1}
            direction="down"
            className="w-[150px] sm:w-[200px]"
          >
            <Link href="/main">
              <Image
                src={desk_logo_img}
                alt="logo"
                priority
                className="h-full z-50 w-full object-center object-contain" />
            </Link>
          </MotionEl>

          <div className={navStyle}>

            <MotionEl
              once
              direction="down"
              delay={.1}
              className="md:hidden flex justify-center"
            >
              <LocaleSwitcher className="shadow-lg md:shadow-none" />
            </MotionEl>
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
              <Link className={navItemStyle} onClick={handleClose} href="/locations">{t("location")}</Link>
            </MotionEl>
            <MotionEl
              once
              delay={.4}
              direction="down"
            >
              <Link className={navItemStyle} onClick={handleClose} href="/about">{t("about")}</Link>
            </MotionEl>
            <Image onClick={handleClose} className="absolute top-2 left-2 w-6 hover:scale-110 cursor-pointer md:hidden" src={close_icon} alt="close icon" />

          </div>

          {/* <MotionEl
            once
            delay={.4}
            direction="down"
            className="text-nowrap"
          >
            <input
              placeholder="Search"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              className="border-none shadow-md outline-none focus:outline-none py-1.5 px-3 rounded-md text-base bg-white bg-opacity-70" />
          </MotionEl> */}
        </div>
        <div className="flex gap-2 items-center">
          <MotionEl
            once
            direction="down"
            delay={.4}
            className="hidden md:block"
          >
            <LocaleSwitcher />
          </MotionEl>
          {/* <MotionEl
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
          </MotionEl> */}
          <MotionEl
            once
            direction="down"
            className="md:hidden block"
            delay={.1}
          >
            <div onClick={handleOpen} className="rounded-lg cursor-pointer bg-white border-1 py-1 px-2">
              <Image
                className="w-5 cursor-pointer"
                width={16}
                height={16}
                color="white"
                src={bar_icon.src}
                alt="user"
              />
            </div>
          </MotionEl>
        </div>
      </div>
      <div onClick={handleClose} className={`${openBar ? "right-0" : "-right-full"} fixed top-0 w-full h-screen z-40 bg-black bg-opacity-30 cursor-pointer`} />
    </motion.header>
  )
}