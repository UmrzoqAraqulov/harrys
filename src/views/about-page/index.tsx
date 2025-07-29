"use client"

import { MotionEl } from "@/components";
import { call_icon, copy_icon, home_icon, instagram_icon, location_icon, telegram_icon } from "@/constants";
import { Button, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

export const AboutPage: FC = () => {
  const t = useTranslations();
  const [openModal, setOpenModal] = useState<boolean>(false)

  const linkStyle = "w-full px-10 sm:px-28 text-xl sm:text-[22px] py-3 sm:py-4 bg-primary text-white flex rounded-xl items-center gap-5 shadow-md duration-200 hover:bg-opacity-50"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("+998772777702");
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <section className="page flex mt-5 sm:h-screen items-center justify-center">
      <div className="flex flex-col gap-3 sm:w-[500px]">
        <MotionEl
          delay={.1}
          className="w-full md:hidden"
        >
          <Link
            href="/main"
            className={linkStyle}
          >
            <Image
              src={home_icon}
              alt="instagram icon"
              className="h-6 sm:h-9 w-max "
            />
            <p>{t("main")}</p>
          </Link>
        </MotionEl>
        <MotionEl
          delay={.1}
          className="w-full md:hidden"
        >
          <Link
            href="/menu"
            className={linkStyle}
          >
            <Image
              src={home_icon}
              alt="instagram icon"
              className="h-6 sm:h-9 w-max "
            />
            <p>{t("ourMenu")}</p>
          </Link>
        </MotionEl>
        <MotionEl
          delay={.2}
          className="w-full md:hidden"
        >
          <Link
            href="locations"
            className={linkStyle}
          >
            <Image
              src={location_icon}
              alt="location icon"
              className="h-6 sm:h-9 w-max "
            />
            <p>{t("location")}</p>
          </Link>
        </MotionEl>
        <MotionEl
          delay={.3}
          className="w-full"
        >
          <div
            onClick={handleOpenModal}
            className={`${linkStyle} cursor-pointer`}
          >
            <Image
              src={call_icon}
              alt="phone icon"
              className="h-6 sm:h-9 w-max "
            />
            <p>{t("phone")}</p>
          </div>
        </MotionEl>
        <MotionEl
          delay={.4}
          className="w-full"
        >
          <Link
            href="https://www.instagram.com/theharrys.uzb"
            target="_blank"
            className={linkStyle}
          >
            <Image
              src={instagram_icon}
              alt="instagram icon"
              className="h-6 sm:h-9 w-max "
            />
            <p>{t("instagram")}</p>
          </Link>
        </MotionEl>
        <MotionEl
          delay={.5}
          className="w-full"
        >
          <Link
            href=""
            className={linkStyle}
          >
            <Image
              src={telegram_icon}
              alt="telegram icon"
              className="h-6 sm:h-9 w-max "
            />
            <p>{t("telegram")}</p>
          </Link>
        </MotionEl>

      </div>
      <Modal
        isOpen={openModal}
        onClose={handleCloseModal}
        classNames={{ closeButton: "text-2xl text-primary" }}
        radius="lg"
        placement="top"
      >
        <ModalContent className="p-2">

          <ModalHeader className="flex flex-col gap-1">{t("phone")}</ModalHeader>
          <ModalBody>
            <MotionEl
              delay={.03}
              className="w-full"
            >
              <Button
                onClick={handleCopy}
                className="bg-primary flex justify-center !w-full items-center text-lg text-white gap-3 rounded-lg"
              >
                <p>+998(77) 277 77 02</p>
                <Image
                  src={copy_icon}
                  alt="copy icon"
                  className="h-8 sm:h-6 w-max "
                />
              </Button>
            </MotionEl>
            <MotionEl
              delay={.01}
              className="w-full"
            >
              <Link
                href="tel:+998772777702"
                className="bg-primary flex justify-center items-center text-lg text-white gap-3 rounded-lg py-2"
              >
                <p>{t("call")}</p>
                <Image
                  src={call_icon}
                  alt="call icon"
                  className="h-8 sm:h-6 w-max "
                />
              </Link>
            </MotionEl>

          </ModalBody>
        </ModalContent>
      </Modal>
    </section>

  );
};

// {/*  <MotionEl delay={.1} className="w-full">
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