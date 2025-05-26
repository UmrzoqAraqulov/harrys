import { TLocale } from "@/types";
import { FC, ReactNode } from "react";
import { Header } from "../";

interface IBaseLayout {
  children: ReactNode;
  locale: TLocale;
}

export const BaseLayout: FC<Readonly<IBaseLayout>> = ({ children, locale }) => {
  return (
    <>
      <Header locale={locale} />
      <main className="overflow-x-hidden overflow-y-auto container">
        {children}
      </main>
    </>
  )
}