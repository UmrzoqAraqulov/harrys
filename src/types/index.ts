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
  image: StaticImageData;
}

export interface INavLink {
  image: StaticImageData;
  title: string;
  href: string;
}