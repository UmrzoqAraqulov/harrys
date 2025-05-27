import { TLocale } from "@/types";
import { FC, ReactNode } from "react";
import { Header } from "../";
import { hero_bg_img } from "@/constants";

interface IBaseLayout {
  children: ReactNode;
  locale: TLocale;
}

export const BaseLayout: FC<Readonly<IBaseLayout>> = ({ children, locale }) => {
  return (
    <>
      <Header locale={locale} />
      <main
        style={{ background: `url(${hero_bg_img.src})`, width: "100%", height: "100vh", overflowY: "auto", backgroundPositionX: "center" }}
      >
        {children}
      </main>
    </>
  )
}