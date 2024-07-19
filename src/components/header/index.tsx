"use client"

import {MotionEl} from "@/components";
import {logo_img, navBg_icon, pathNames, whiteLogo_img} from "@/constants";
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {FC, useEffect, useState} from "react";

export const Header: FC = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const {scrollY} = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > 1) {
      setIsFixed(true);
      localStorage.setItem('isFixed', JSON.stringify(true))
    } else {
      setIsFixed(false);
      localStorage.setItem('isFixed', JSON.stringify(false))
    }
  });

  useEffect(() => {
    const isFixed = localStorage.getItem('isFixed') ?? 'false';
    setIsFixed(eval(isFixed));
  }, []);

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
      transition={{duration: 0.7, ease: "easeInOut"}}
      className="w-full fixed top-0 left-0 flex justify-between"
    >
      <div className={`${isFixed ? "-translate-x-full" : "translate-x-0"} transition-700`}>
        <MotionEl
          delay={.2}
          direction="left"
          className={`translate-x-full h-16 sm:h-14 md:h-16 lg:h-20 xl:h-24 my-1 sm:my-2 md:my-3 lg:my-4 xl:my-5 ml-5 md:8 xl:ml-10`}
        >
          <Link href='/'>
            <Image src={logo_img} className="h-full sm:hidden z-50 w-full object-center object-contain" alt="logo"/>
            <Image src={whiteLogo_img} alt="logo"
                   className="h-full hidden sm:block z-50 w-full object-center object-contain"/>
          </Link>
        </MotionEl>
      </div>

      <div
        className={`${isFixed ? "translate-x-full" : "translate-x-0"} transition-700 relative flex sm:items-center z-50 justify-end w-max`}
      >
        <MotionEl
          key={pathname}
          className="z-10 my-2 whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mr-5 md:mr-8 xl:mr-10 font-bold"
          el="h1"
          direction="right"
        >
          {pathname === "/" ? (pathNames['/welcome']) : (
            pathNames[pathname]
          )}
        </MotionEl>
        <Image
          alt="nav"
          priority={true}
          src={navBg_icon}
          className={`-z-10 absolute top-0 ${pathname === "/side-dishes" ? "w-[130%] max-w-[130%]" : "w-[150%] max-w-[150%]"} transition-700 right-0`}
        />
      </div>
    </motion.header>
  )
}