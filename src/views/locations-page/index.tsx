"use client"

import { MotionEl } from "@/components";
import { location_icon } from "@/constants";
import { locationData } from "@/constants/data";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FC } from "react";

const YandexMapView = dynamic(() => import("@/components/YandexMapView"), { ssr: false });

const locations = [
  { name: "Cyber Arena", lat: 41.31347, lng: 69.29364 },
  { name: "Dream Park", lat: 41.28237, lng: 69.21562 },
  { name: "Buxoro", lat: 41.35574, lng: 69.31144 },
];

export const LocationsPage: FC = () => {
  const t = useTranslations('locations');

  const locationStyle = "bg-gray-100 p-2 md:p-4 rounded-lg shadow-md mb-4 border-2 border-red-200 flex cursor-pointer items-center gap-2 hover:bg-red-100 transition-colors duration-300";

  return (
    <section className="page container">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">{t("ourBranches")}</h1>
      <div
        style={{ height: "calc(100vh - 200px)" }}
        className="flex gap-5 flex-col justify-between md:flex-row"
      >
        <div className="md:w-1/3">
          {locationData.map((item, idx) =>
            <MotionEl
              key={idx}
              delay={idx / 10}
            >
              <Link
                href={item.href}
                target="_blank"
                data-text={item.title}
                aria-label={item.title}
                className={locationStyle}
              >
                <Image
                  src={location_icon}
                  alt={item.title}
                  className="hover:brightness-200 h-8 w-8 md:h-10 md:w-10 transition-all duration-300"
                />
                <p>{item.title}</p>
              </Link>
            </MotionEl>
          )}
        </div>
        <div className="w-full md:w-2/3 h-full">
          <YandexMapView locations={locations} />
        </div>
      </div>
    </section>
  );
};
