"use client"

import {goBack_icon} from "@/constants";
import {Button, Tooltip} from "@nextui-org/react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {FC} from "react";

export const GoBack: FC = () => {
  const router = useRouter();

  return (
    <div className="flex items-center mt-2 mb-10 justify-center w-full">
      <Tooltip aria-label="go-back" id="goBack" showArrow color="foreground" offset={14} delay={500} content="Назад">
        <Button
          isIconOnly
          type="button"
          aria-labelledby="goBack"
          onClick={() => router.back()}
          className="wave-loader flex items-center overflow-visible w-12 h-12 p-2 justify-center mx-auto"
        >
          <Image
            alt="go-back!"
            src={goBack_icon}
            className="h-full w-full z-50 rounded-full"
          />
          <div className="loader"/>
          <div className="loader"/>
        </Button>
      </Tooltip>
    </div>
  )
}