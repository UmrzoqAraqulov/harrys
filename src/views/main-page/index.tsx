"use client"

import { FC, useState } from "react";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { menuData, heroImgs, menuCategories } from '@/constants';
import CustomCard from "@/components/custom-card";

import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";

export const MainPage: FC = () => {
  const t = useTranslations();

  const topFastFood = ["dabl_chizburger", "meat_harryster", "chicken_klab_sendvich", "cheese_crispy_hot_dog"]

  const gridClassMap: Record<string, string> = {
    combo: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5',
    chickenBurger: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5',
    meatBurger: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5',
    chickenHarryster: 'grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3',
    meatHarryster: 'grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3',
    hotDog: 'grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3',
    sendvich: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10',
    fri: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:gap-5',
    sous: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:gap-5',
    drink: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:gap-5',
  };


  return (
    <section className="container">
      <div className="mt-[110px] md:mt-[160px] md:pb-10 h-auto">
        <Swiper
          modules={[Pagination]}
          className="w-full h-full rounded-3xl relative shadow-lg"
          spaceBetween={30}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {heroImgs.map((el, id) => (
            <SwiperSlide key={id} className="rounded-3xl">
              <Image
                width={1500}
                height={500}
                className="w-full h-full object-cover"
                src={el.src}
                alt="selected"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center">
        <h1 className="font-bold text-md md:text-2xl mt-5 md:mt-8 md:mb-5 bg-primary text-white rounded-full py-0.5 md:py-1.5 px-9">{t(`menu.combo`)}</h1>
      </div>
      {<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-3 gap-3`}>
        {
          menuData
            ?.filter(el => el.type === "combo")
            .map(el => (
              <CustomCard
                key={el.title}
                img={el.image.src}
                title={el.title}
                price={el.price}
                name="combo"
                text={el.text}
              />
            ))}
      </div>}

      <div className="flex justify-center">
        <h1 className="font-bold text-md md:text-2xl mt-5 md:mt-8 md:mb-5 bg-primary text-white rounded-full py-0.5 md:py-1.5 px-9">{t(`ourMenu`)}</h1>
      </div>
      {<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-3 gap-3`}>
        {
          menuData
            ?.filter(el => topFastFood.includes(el.title))
            .map(el => (
              <CustomCard
                key={el.title}
                img={el.image.src}
                title={el.title}
                price={el.price}
                name="combo"
                text={el?.text}
              />
            ))}
      </div>}

      <div className="flex justify-center">
        <Link href="/menu" className="font-bold text-xs md:text-base mt-4 md:mt-7 md:mb-5 bg-primary text-white rounded-full py-2 md:py-3 px-8">{t(`viewAllOffers`)}</Link>
      </div>
    </section>
  );
};
