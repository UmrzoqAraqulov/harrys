'use client';

import {IChildren} from "@/types";
import {NextUIProvider} from "@nextui-org/react";
import {FC} from "react";

export const Providers: FC<Readonly<IChildren>> = ({children}) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
};