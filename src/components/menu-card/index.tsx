"use client";

import { formatNumberWithSpaces } from "@/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Props {
  img: string;
  title: string;
  name: string;
  price: number;
  text?: string;
}

function MenuCard(props: Props) {
  const { img, title, price, name, text } = props;
  const t = useTranslations();

  return (
    <div className="bg-white rounded-2xl custom-shadow grid grid-cols-[1fr,3fr] items-center pl-3">
      <Image width={450} height={260} className="w-full rounded-2xl" src={img} alt={name} />
      <div className="p-3 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{t(`menu.${title}`)}</h3>
        {text && <div className="relative group">
          <div className="line-clamp-3 text-sm md:text-[15px] text-gray-500 italic cursor-pointer">
            {t(`menu.${text}`)}
          </div>
          <div
            className="absolute left-1/2 z-10 border-1 border-primary -translate-x-1/2 mt-2 min-w-[180px] w-full bg-white text-gray-500 italic rounded-lg shadow-lg p-2 opacity-0 invisible group-hover:visible duration-500 group-hover:opacity-100 transition-opacity text-xs"
          >
            {t(`menu.${text}`)}
          </div>
        </div>}
        <p className="flex gap-1 border rounded-full py-1 bg-primary text-white text-base w-[180px] justify-center">
          <span className="font-bold">{formatNumberWithSpaces(price)}</span>
          <span>{t("sum")}</span>
        </p>
      </div>
    </div>
  )
}

export default MenuCard