"use client"

import { FC } from "react";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { heroImgs } from '@/constants';

import 'swiper/css';
import 'swiper/css/navigation';

export const HomePage: FC = () => {
  const t = useTranslations("home");

  return (
    <section className="page container h-full">
      <div className="flex justify-start relative w-full sm:w-2/3 items-center h-full">
        <Swiper
          modules={[Navigation]}
          className="w-full"
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
        >
          {heroImgs.map((el, id) =>
            <SwiperSlide key={id} className="rounded-3xl">
              <Image
                width={2000}
                height={500}
                className="w-full object-cover rounded-3xl"
                src={el.src}
                alt="selected"
              />
            </SwiperSlide>
          )}
          <div className="custom-swiper-nav">
            <button className="swiper-button-prev custom-swiper-button" />
            <button className="swiper-button-next custom-swiper-button" />
          </div>
        </Swiper>

      </div>
    </section>
  )
}