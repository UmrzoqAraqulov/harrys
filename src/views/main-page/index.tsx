"use client"

import { FC, useRef } from "react";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { menuData, heroImgs, menuCategories, left_icon, right_icon, hero_bg_img } from '@/constants';
import CustomCard from "@/components/custom-card";

import 'swiper/css';
import 'swiper/css/navigation';

export const MainPage: FC = () => {
  const t = useTranslations();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollByCategory = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 120; // bitta kategoriya width taxminan
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const gridClassMap: Record<string, string> = {
    chickenBurger: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5',
    meatBurger: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5',
    combo: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5',
    chickenHarryster: 'grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4',
    meatHarryster: 'grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4',
    hotDog: 'grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4',
    sendvich: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10',
    fri: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 xl:gap-5',
    sous: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 xl:gap-5',
    drink: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 xl:gap-5',
  };

  // const renderSubSection = (type: string, name: string) => (
  //   <>
  //     <h1 className="font-semibold text-2xl">{t("menu.chicken")}</h1>
  //     {renderItems(type, name)}
  //     <h1 className="font-semibold text-2xl">{t("menu.meat")}</h1>
  //     {renderItems(type, name)}
  //   </>
  // );

  // const renderSection = (titleKey: string, type: string) => (
  //   <div className="pt-6">
  //     <h1 className="font-bold text-4xl">{t(`menu.${titleKey}`)}</h1>
  //     {renderItems(type, type)}
  //   </div>
  // );

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section>
      <div
        style={{ background: `url(${hero_bg_img.src})`, backgroundPositionX: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        className="w-full hero">
        <div className="container pt-[100px] pb-10 h-full">
          <Swiper
            modules={[Navigation]}
            className="w-full h-full rounded-3xl"
            spaceBetween={30}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
          >
            {heroImgs.map((el, id) => (
              <SwiperSlide key={id} className="rounded-3xl">
                <Image
                  width={1000}
                  height={500}
                  className="w-full h-full object-cover rounded-3xl"
                  src={el.src}
                  alt="selected"
                />
              </SwiperSlide>
            ))}
            <button className="swiper-button-prev custom-swiper-button" />
            <button className="swiper-button-next custom-swiper-button" />
          </Swiper>
        </div>
      </div>
      <div className="container">


        {/* Kategoriya menyusi */}
        <div className="p-2 pt-3 bg-white sticky top-[75px] z-10 shadow rounded-xl mt-5 flex items-center gap-2">
          <button
            className="bg-gray-200 px-3 py-2 rounded-full h-full min-h-[34px] min-w-[34px] "
            onClick={() => scrollByCategory('left')}
          >
            <Image src={left_icon} alt="left icon" width={16} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-1 sm:gap-3 px-1 pb-1 scrollbar-hide"
          >
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => scrollToSection(category)}
                className="whitespace-nowrap px-2 text-[15px] sm:text-base py-1 sm:px-4 sm:py-2 rounded-full bg-gray-100 hover:bg-red-200 transition"
              >
                {t(`menu.${category}`)}
              </button>
            ))}
          </div>

          <button
            className="bg-gray-200 px-3 py-2 rounded-full min-h-[34px] min-w-[34px]"
            onClick={() => scrollByCategory('right')}
          >
            <Image src={right_icon} alt="right icon" width={16} />
          </button>
        </div>


        {menuCategories.map((category) => (
          <div key={category} className="pt-6" id={category}>
            <h1 className="font-bold text-[24px] md:text-[32px]">{t(`menu.${category}`)}</h1>
            {<div className={`grid ${gridClassMap[category]} py-3 gap-3`}>
              {
                menuData
                  ?.filter(el => el.type === category)
                  .map(el => (
                    <CustomCard
                      t={t}
                      key={el.title}
                      img={el.image.src}
                      title={el.title}
                      price={el.price}
                      name={category}
                      type={category}
                    />
                  ))}
            </div>}
          </div>
        ))}
      </div>
    </section>
  );
};
