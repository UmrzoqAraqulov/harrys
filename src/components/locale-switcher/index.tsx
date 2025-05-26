"use client"

import { FC } from "react";
import { useLocale } from "next-intl";

import { ILocalesData } from "@/types";
import { usePathname, useRouter } from "@/navigation";
import { languages_icon, localesData } from "@/constants";
import { Image, Select, SelectItem } from "@nextui-org/react";

interface ILocaleSwitcher {
  className?: string;
}

export const LocaleSwitcher: FC<ILocaleSwitcher> = ({ className }) => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const handleClick = ({ value }: ILocalesData) => {
    router.replace(pathname, { locale: value })
  };

  return (
    <Select
      size="sm"
      className={`${className} w-[110px]`}
      placeholder="Select"
      startContent={
        <Image
          className="w-12 h-7 rounded-none"
          src={languages_icon.src}
          alt="selected"
        />
      }
      defaultSelectedKeys={[locale]}
      aria-label="language-select"
      classNames={{ value: "text-white selected_value" }}
      style={{ background: "#fff", color: "#000" }}
    >
      {localesData.map((item) => (
        <SelectItem
          key={item.value}
          value={item.value}
          classNames={{ title: "font-semibold" }}
          onClick={() => handleClick(item)}
        >
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
};