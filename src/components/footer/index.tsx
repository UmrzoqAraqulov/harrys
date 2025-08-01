"use client"

import { FC } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import parse from 'html-react-parser';
import { motion } from 'framer-motion';

import { MotionEl } from "@/components";
import { desk_logo_img, instagram_icon, telegram_icon } from "@/constants";
import { IPageParams } from "@/types";

export const Footer: FC<IPageParams> = () => {
  const t = useTranslations();

  return (
    <motion.footer
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
      transition={{ duration: 1, ease: "easeInOut", delay: .6 }}
    >
      <div className="flex items-center justify-center w-full py-6">
        <hr className="flex-grow border-t border-gray-300" />
        <div className="mx-4">
          <MotionEl
            once
            delay={.1}
            direction="down"
            className="w-[200px] sm:w-[350px]"
          >
            <Link href="/main">
              <Image
                src={desk_logo_img}
                alt="logo"
                priority
                className="h-full z-50 w-full object-center object-contain" />
            </Link>
          </MotionEl>
        </div>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
      <div className="py-10 bg-primary text-white">
        <div className="container flex gap-6 md:gap-10 flex-wrap justify-between">
          <div className="flex flex-col gap-2 md:gap-4">
            <MotionEl
              once
              delay={.1}
              direction="down"
              className="text-xl md:text-2xl"
            >
              {t("footer.contactUs")}
            </MotionEl>
            <MotionEl
              once
              delay={.1}
              direction="down"
              className="text-sm md:text-base"
            >
              <Link
                href="tel:+998772777702"
              >
                +998(77) 277 77 02
              </Link>
            </MotionEl>
            <div className="flex gap-2 md:gap-4">
              <MotionEl
                once
                delay={.1}
                direction="down"
                className="text-sm md:text-base"
              >
                <Link href="">
                  <Image src={telegram_icon} alt="telegram" width={30} />
                </Link>
              </MotionEl>
              <MotionEl
                once
                delay={.1}
                direction="down"
                className="text-sm md:text-base"
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
          <div className="flex flex-col gap-1 md:gap-3">
            <MotionEl
              once
              delay={.1}
              direction="down"
              className="text-xl md:text-2xl"
            >
              {t("about")}
            </MotionEl>
            <MotionEl
              once
              delay={.1}
              direction="down"
              className="text-sm md:text-base"
            >
              {t("footer.historyBrends")}
            </MotionEl>
            <MotionEl
              once
              delay={.1}
              direction="down"
              className="text-sm md:text-base"
            >
              <Link
                href="/locations"
              >
                {t("ourBranches")}
              </Link>
            </MotionEl>
          </div>
          <div className="flex flex-col gap-1 md:gap-3">
            <MotionEl
              once
              delay={.1}
              direction="down"
              className="text-xl md:text-2xl"
            >
              {t("footer.help")}
            </MotionEl>
            <MotionEl
              once
              delay={.1}
              direction="down"
              className="text-sm md:text-base"
            >
              {t("footer.leaveRequest")}
            </MotionEl>
            <MotionEl
              once
              delay={.1}
              direction="down"
              className="text-sm md:text-base"
            >
              {t("footer.career")}
            </MotionEl>
          </div>
          <div className="flex flex-col gap-1 md:gap-3">
            <MotionEl
              once
              delay={.1}
              direction="down"
              className="text-xl md:text-2xl"
            >
              {t("footer.account")}
            </MotionEl>
            <MotionEl
              once
              delay={.1}
              direction="down"
              className="text-sm md:text-base"
            >
              {t("footer.login")}
            </MotionEl>
            <MotionEl
              once
              delay={.1}
              direction="down"
              className="text-sm md:text-base"
            >
              {t("footer.register")}
            </MotionEl>
            <MotionEl
              once
              delay={.1}
              direction="down"
              className="text-sm md:text-base"
            >
              {t("footer.forgotYourPassword")}
            </MotionEl>

          </div>
        </div>
      </div>
      <div className="text-center px-4 py-2 text-primary text-sm">
        {parse(t.raw("footer.info"))}
      </div>
    </motion.footer>
  )
}