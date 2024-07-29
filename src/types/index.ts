import {StaticImageData} from "next/image";
import {ReactNode} from "react";

export interface IChildren {
  children: ReactNode;
}

export type TPath = Record<string, string>

export interface IData {
  price: number;
  type?: string;
  title?: string;
  secondPrice?: number;
  secondTitle?: string;
  image: StaticImageData;
}

export interface INavLink {
  image: StaticImageData;
  title: string;
  href: string;
}

export interface ISocial {
  text: string;
  href: string;
  isPhone?: boolean;
}