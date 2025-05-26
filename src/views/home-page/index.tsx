"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { FC } from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { heroImgs, menuData } from '@/constants';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import CustomCard from '@/components/custom-card';

export const HomePage: FC = () => {
  const t = useTranslations("home");

  return (
    <section className="page">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {heroImgs.map(el =>
          <SwiperSlide>
            <Image
              width={1}
              height={1}
              className="w-full max-w-[700px] h-full max-h-[500px] rounded-none"
              src={el.src}
              alt="selected"
            />
          </SwiperSlide>
        )}
      </Swiper>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 p-4 bg-white shadow h-screen sticky top-0">
          {/* <Scrollspy
            items={menuData.map(s => s.title)}
            currentClassName="bg-pink-100 text-red-600 font-semibold"
            componentTag="ul"
            className="space-y-1"
          >
            {menuData.map(({ title, }, id) => (
              <li
                key={id}
                className="px-4 py-2 rounded hover:bg-pink-50 cursor-pointer text-sm flex items-center gap-2"
              >
                <span>🍗</span> <a href={`#${id}`}>{title}</a>
              </li>
            ))}
          </Scrollspy> */}
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {menuData.map(({ title }, id) => (
            <section id={id + ""} key={id} className="scroll-mt-28">
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(3)].map((_, idx) => (
                  <CustomCard />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}