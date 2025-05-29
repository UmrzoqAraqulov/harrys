"use client"

import { MotionEl } from "@/components";
import { call_icon, instagram_icon, telegram_icon } from "@/constants";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

export const AboutPage: FC = () => {
  const t = useTranslations('about');
  const router = useRouter();
  const linkStyle = "w-full px-14 text-xl sm:text-2xl py-8 bg-primary text-white"

  return (
    <section className="page flex h-screen items-center justify-center">
      <div className="flex flex-col gap-3 sm:w-[500px]">
        <MotionEl delay={.8} className="w-full">
          <Button
            size="lg"
            aria-label="call us"
            className={linkStyle}
            endContent={<Image className="h-7 sm:h-8 w-max" src={call_icon} alt="call us" />}
          >
            <a href="tel:+998770097771">{t("phone")}</a>
          </Button>
        </MotionEl>
        <MotionEl delay={.6} className="w-full">
          <Button
            size="lg"
            aria-label="instagram"
            className={linkStyle}
            onClick={() => router.push("https://www.instagram.com/theharrys.uzb")}
            endContent={<Image className="h-6 sm:h-7 w-max" src={instagram_icon} alt="instagram" />}
          >
            {t("instagram")}
          </Button>
        </MotionEl>
        <MotionEl delay={.6} className="w-full">
          <Button
            size="lg"
            aria-label="instagram"
            className={linkStyle}
            onClick={() => router.push("")}
            endContent={<Image className="h-6 sm:h-7 w-max" src={telegram_icon} alt="instagram" />}
          >
            {t("telegram")}
          </Button>
        </MotionEl>
      </div>
    </section>

  );
};
