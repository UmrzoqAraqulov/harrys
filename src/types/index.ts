import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export type TPath = Record<string, string>

export interface IData {
  price: number;
  type?: string;
  title: string;
  secondPrice?: number;
  secondTitle?: string;
  image: StaticImageData;
}

export type TLocale = "uz" | "ru";

export interface IParams {
  params: { locale: TLocale };
}

export interface IPageParams {
  locale?: TLocale
}

export interface ILocalesData {
  label: string,
  value: TLocale;
}
export interface INewsImages {
  img: string;
  key: string;
}