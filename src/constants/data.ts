import hero_first_img from '@/assets/images/hero-slider-1.png';
import hero_second_img from '@/assets/images/hero-slider-2.png';
import hero_third_img from '@/assets/images/hero-slider-3.png';

import { ILocalesData, LocationType } from "@/types";

export const localesData: ILocalesData[] = [
  { label: "O'zb", value: "uz" },
  { label: "Рус", value: "ru" },
]

export const heroImgs = [
  hero_first_img,
  hero_second_img,
  hero_third_img,
]

export const locationData: LocationType[] = [
  {
    title: "The Harry's - High Town Mall",
    href: "https://yandex.com/maps/org/227770249668?si=v2mdpp6ct597226ja7632cd368",
  },
  {
    title: "The Harry's - Ц1 / Cyber Arena",
    href: "https://yandex.com/maps/org/133525811460?si=v2mdpp6ct597226ja7632cd368",
  },
  {
    title: "The Harry's - Dream Park",
    href: "https://yandex.com/maps?whatshere%5Bpoint%5D=69.21562403275018%2C41.282369012066056&whatshere%5Bzoom%5D=16.0&ll=69.2156240327502%2C41.28236899989105&z=16.0&si=v2mdpp6ct597226ja7632cd368",
  },
]