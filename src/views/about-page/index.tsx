"use client"

import { MotionEl } from "@/components";
import { call_icon, copy_icon, instagram_icon, telegram_icon } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const AboutPage: FC = () => {
  const t = useTranslations('about');
  const phoneNumber = "+998770097771"

  const linkStyle = "w-full px-10 text-xl sm:text-2xl py-4 sm:py-6 bg-primary text-white flex rounded-xl items-center justify-center gap-5 shadow-md duration-200 hover:bg-opacity-50"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <section className="page flex h-screen items-center justify-center">
      <div className="flex flex-col gap-3 sm:w-[500px]">
        <div className="relative group">
          <MotionEl
            delay={.8}
            className="w-full"
          >
            <Link
              href="tel:+998770097771"
              className={linkStyle}
            >
              <p>{t("phone")}</p>
              <Image
                src={call_icon}
                alt="phone icon"
                className="h-10 sm:h-10 w-max "
              />
            </Link>
          </MotionEl>
          <p className="absolute flex justify-center gap-4 w-full p-4 -top-16 text-sm border-2 border-primary text-primary rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            <span className="text-base">{phoneNumber}</span>
            <span onClick={handleCopy} className="cursor-pointer hover:scale-110"><Image width={20} src={copy_icon} alt="copy" /></span>
          </p>
        </div>

        <MotionEl
          delay={.8}
          className="w-full"
        >
          <Link
            href="https://www.instagram.com/theharrys.uzb"
            target="_blank"
            className={linkStyle}
          >
            <p>{t("instagram")}</p>
            <Image
              src={instagram_icon}
              alt="instagram icon"
              className="h-10 sm:h-10 w-max "
            />
          </Link>
        </MotionEl>
        <MotionEl
          delay={.8}
          className="w-full"
        >
          <Link
            href=""
            className={linkStyle}
          >
            <p>{t("telegram")}</p>
            <Image
              src={telegram_icon}
              alt="telegram icon"
              className="h-10 sm:h-10 w-max "
            />
          </Link>
        </MotionEl>

      </div>
    </section>

  );
};

// {/*  <MotionEl delay={.8} className="w-full">
//           <Button
//             size="lg"
//             aria-label="call us"
//             className={linkStyle}
//             endContent={<Image className="h-7 sm:h-8 w-max" src={call_icon} alt="call us" />}
//           >
//             <a href="tel:+998770097771">{t("phone")}</a>
//           </Button>
//         </MotionEl>
//         <MotionEl delay={.6} className="w-full">
//           <Button
//             size="lg"
//             aria-label="instagram"
//             className={linkStyle}
//             onClick={() => router.push("https://www.instagram.com/theharrys.uzb")}
//             endContent={<Image className="h-6 sm:h-7 w-max" src={instagram_icon} alt="instagram" />}
//           >
//             {t("instagram")}
//           </Button>
//         </MotionEl>

//         <MotionEl delay={.6} className="w-full">
//           <Button
//             size="lg"
//             aria-label="instagram"
//             className={linkStyle}
//             onClick={() => router.push("")}
//             endContent={<Image className="h-6 sm:h-7 w-max" src={telegram_icon} alt="instagram" />}
//           >
//             {t("telegram")}
//           </Button>
//         </MotionEl> */}