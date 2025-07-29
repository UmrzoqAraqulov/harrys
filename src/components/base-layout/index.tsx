import { TLocale } from "@/types";
import { FC, ReactNode } from "react";
import { Header } from "../";
import { hero_bg_img } from "@/constants";
import { Footer } from "../footer";

interface IBaseLayout {
  children: ReactNode;
  locale: TLocale;
}

export const BaseLayout: FC<Readonly<IBaseLayout>> = ({ children, locale }) => {
  return (
    <>
      <Header locale={locale} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}