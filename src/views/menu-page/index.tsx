"use client"

import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from 'next-intl';
import { menuData, menuCategories } from '@/constants';
import CustomCard from "@/components/custom-card";
import MenuCard from "@/components/menu-card";
import { drinkData } from "@/constants/menu";

export const MenuPage: FC = () => {
  const t = useTranslations();
  const [check, setCheck] = useState<string>("combo");
  const [isScrolling, setIsScrolling] = useState(false);

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    if (buttonRefs.current[check]) {
      buttonRefs.current[check]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    }
  }, [check]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return; // scroll paytida observer ishlamasin
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting && entry.intersectionRatio > 0.3)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const id = visibleEntries[0].target.id;
          setCheck(id);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-30% 0px -30% 0px",
      }
    );

    const timeout = setTimeout(() => {
      menuCategories.forEach((category) => {
        const section = sectionRefs.current[category];
        if (section) observer.observe(section);
      });
    }, 0);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [menuCategories, isScrolling]);

  const setRef = useCallback((el: HTMLDivElement | null, category: string) => {
    if (el) {
      sectionRefs.current[category] = el;
    } else {
      delete sectionRefs.current[category];
    }
  }, []);

  // OnClick function
  const handleCategoryClick = (category: string) => {
    const section = sectionRefs.current[category];
    if (section) {
      setIsScrolling(true);
      const headerOffset = 140;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setCheck(category);

      setTimeout(() => {
        setIsScrolling(false);
      }, 700);
    }
  };

  return (
    <section className="container mt-34 pb-10">
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="w-full md:w-52 shrink-0">
          <div className="flex md:flex-col overflow-x-scroll gap-3 fixed bg-white w-full  md:sticky sm:top-[100px] top-[85px] md:top-24 px-1 py-1 pt-4 md:pt-10  left-0">
            {menuCategories.map((category) => (
              <button
                key={category}
                ref={el => { buttonRefs.current[category] = el; }}
                onClick={() => handleCategoryClick(category)}
                className={`whitespace-nowrap px-2 text-[15px] sm:text-base py-1 sm:px-4 sm:py-2 rounded-full hover:bg-primary hover:text-white bg-gray-100 transition 
    ${category === check ? 'bg-primary text-white' : ''}`}
              >
                {t(`menu.${category}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 pt-[130px]">
          {menuCategories.map((category) => (
            <div
              key={category}
              id={category}
              ref={(el) => setRef(el, category)}
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
    </section>);
};