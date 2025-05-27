"use client"

import { FC } from "react";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { burgerData, heroImgs } from '@/constants';

import 'swiper/css';
import 'swiper/css/navigation';
import CustomCard from "@/components/custom-card";

export const HomePage: FC = () => {
  const t = useTranslations("home");

  return (
    <section className="page container h-full">
      <div className="w-full lg:h-[100%]">
        <Swiper
          modules={[Navigation]}
          className="w-full h-full rounded-3xl"
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
                width={1000}
                height={500}
                className="w-full h-full object-cover rounded-3xl"
                src={el.src}
                alt="selected"
              />
            </SwiperSlide>
          )}
          <button className="swiper-button-prev custom-swiper-button" />
          <button className="swiper-button-next custom-swiper-button" />
        </Swiper>
      </div >
      <div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 py-3">
          {burgerData?.map(el =>
            <CustomCard
              t={t}
              key={el.title}
              img={el.image.src}
              title={el.title}
              price={el.price}
              name="burger"
            />
          )}
        </div>
      </div>
    </section >
  )
}