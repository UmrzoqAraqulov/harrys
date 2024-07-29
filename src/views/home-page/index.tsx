"use client"

import {MotionEl} from "@/components";
import {call_icon, instagram_icon, location_icon, menu_icon} from "@/constants";
import {Button} from "@nextui-org/react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {FC} from "react";

export const HomePage: FC = () => {
  const router = useRouter();

  return (
    <section className="page flex items-center justify-center overflow-hidden">
      <div className="flex flex-col gap-3">
        <MotionEl delay={.2} className="w-full">
          <Button
            size="lg"
            aria-label="menu"
            className="w-full sm:text-lg sm:py-7"
            onClick={() => router.push('/category')}
            endContent={<Image className="h-7 sm:h-8 w-max" src={menu_icon} alt="menu"/>}
          >
            Наше меню
          </Button>
        </MotionEl>
        <MotionEl delay={.4} className="w-full">
          <Button
            size="lg"
            aria-label="location"
            className="w-full sm:text-lg sm:py-7"
            onClick={() => router.push('https://maps.app.goo.gl/KUFGkGNTuvt2vqLM7')}
            endContent={<Image className="h-7 sm:h-8 w-max" src={location_icon} alt="location"/>}
          >
            Наши адреса
          </Button>
        </MotionEl>
        <MotionEl delay={.6} className="w-full">
          <Button
            size="lg"
            aria-label="instagram"
            className="w-full sm:text-lg sm:py-7"
            onClick={() => router.push("https://www.instagram.com/theharrys.uzb")}
            endContent={<Image className="h-6 sm:h-7 w-max" src={instagram_icon} alt="instagram"/>}
          >
            Наш инстаграм
          </Button>
        </MotionEl>
        <MotionEl delay={.8} className="w-full">
          <Button
            size="lg"
            aria-label="call us"
            className="w-full sm:text-lg sm:py-7"
            endContent={<Image className="h-7 sm:h-8 w-max" src={call_icon} alt="call us"/>}
          >
            <a href="tel:+998770097771">Связаться с нами</a>
          </Button>
        </MotionEl>
      </div>
    </section>
  )
}