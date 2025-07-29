"use client"

import { FC, useEffect, useRef, useState } from "react";
import { useTranslations } from 'next-intl';

import { menuData, menuCategories } from '@/constants';
import CustomCard from "@/components/custom-card";

import Link from "next/link";
import MenuCard from "@/components/menu-card";
import { drinkData } from "@/constants/menu";

export const MenuPage: FC = () => {
  const t = useTranslations();
  const [check, setCheck] = useState<string>("combo");

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting && entry.intersectionRatio > 0.5)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const id = visible[0].target.id;
          setCheck(id);
        }
      },
      {
        rootMargin: "-50% 0px -50% 0px", // faqat markazda turganlar hisobga olinadi
        threshold: [0.5], // 50% dan ko‘prog‘i ko‘rinsa
      }
    );

    menuCategories.forEach((category) => {
      const section = sectionRefs.current[category];
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="container mt-34 pb-10">
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="w-full md:w-52 shrink-0">
          <div className="flex md:flex-col overflow-x-scroll gap-3 fixed bg-white w-full  md:sticky top-[100px] md:top-24 px-1 py-1 pt-14 left-0">
            {menuCategories.map((category) => (
              <Link
                key={category}
                href={`#${category}`}
                onClick={() => setCheck(category)}
                className={`whitespace-nowrap px-2 text-[15px] sm:text-base py-1 sm:px-4 sm:py-2 rounded-full bg-gray-100 hover:bg-opacity-70 transition 
              ${category === check ? 'bg-primary text-white' : ''}`}
              >
                {t(`menu.${category}`)}
              </Link>
            ))}
          </div>
        </div>



        <div className="flex-1 pt-[140px]">
          {menuCategories.map((category) => (
            <div
              key={category}
              id={category}
              ref={(el) => {
                sectionRefs.current[category] = el;
              }}
              className="scroll-mt-[130px] md:scroll-mt-[150px]" // header offset uchun
            >
              <h1 className="font-bold text-xl mt-3">
                {t(`menu.${category}`)}
              </h1>
              <div className={`grid grid-cols-1 sm:grid-cols-2  py-3 gap-4`}>
                {menuData
                  .filter((el) => el.type === category)
                  .map((el) => (
                    <MenuCard
                      key={el.title}
                      img={el.image.src}
                      title={el.title}
                      price={el.price}
                      name={category}
                      text={el?.text}
                    />
                  ))}
              </div>
            </div>
          ))}

          <div className={`grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 py-3 gap-4`}>
            {drinkData
              .map((el) => (
                <CustomCard
                  key={el.title}
                  img={el.image.src}
                  title={el.title}
                  price={el.price}
                  name="drink"
                  text={el?.text}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
