import { MotionEl } from "@/components";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const MenuPage: FC = () => {
  return (
    <section className="page overflow-hidden">
      <div
        className="w-full h-full flex flex-col gap-5 items-center justify-center">
        {navLinks?.map(({ href, title, image }, idx) => (
          <MotionEl
            key={href}
            className='w-max'
            delay={idx / 10}
          >
            <Link
              href={href}
              className="text-stone-500 z-10 hover:brightness-200 flex items-center justify-start gap-3"
            >
              <Image
                src={image}
                alt={title}
                className=" h-16 w-16 sm:h-20 sm:w-20 transition-all duration-300"
              />
              <p className="">{title}</p>
            </Link>
          </MotionEl>
        ))}
      </div>
    </section>
  )
}