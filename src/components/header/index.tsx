"use client"

import { MotionEl } from "@/components";
import { logo_img, navBg_icon, pathNames, desk_logo_img } from "@/constants";
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

export const Header: FC = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > 1) {
      setIsFixed(true);
      localStorage.setItem('isFixed', JSON.stringify(true))
    } else {
      setIsFixed(false);
      localStorage.setItem('isFixed', JSON.stringify(false))
    }
  });

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
      animate={isFixed ? "animate" : "initial"}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full fixed top-0 left-0 py-3 bg-white bg-opacity-30"
    >
      <div className="w-full container flex justify-between ">
        <div className="flex justify-between items-center gap-5 text-red-500 font-semibold text-xl">
          <MotionEl
            delay={.1}
            direction="down"
            className="w-[200px]"
          >
            <Link href="/">
              <Image src={logo_img} className="h-full sm:hidden z-50 w-full object-center object-contain" alt="logo" />
              <Image src={desk_logo_img} alt="logo"
                className="h-full hidden sm:block z-50 w-full object-center object-contain" />
            </Link>
          </MotionEl>

          <MotionEl
            delay={.3}
            direction="down"
            el="a"
            href="/locations"
            className="cursor-pointer "
          >
            Наши адреса
          </MotionEl>
          <MotionEl
            delay={.5}
            direction="down"
          >
            <Link href="/about-us">O нас</Link>
          </MotionEl>
        </div>
        <div>
          <nav>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}