import {IChildren} from "@/types";
import {FC} from "react";
import {Header} from "../";

export const BaseLayout: FC<Readonly<IChildren>> = ({children}) => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        {children}
      </main>
    </>
  )
}