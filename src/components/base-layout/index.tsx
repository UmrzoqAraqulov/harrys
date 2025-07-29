import { TLocale } from "@/types";
import { FC, ReactNode } from "react";
import { Footer } from "../footer";
import { Header } from "../header-new";

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