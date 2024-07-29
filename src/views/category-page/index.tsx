import {MotionEl} from "@/components";
import {navLinks} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {FC} from "react";

export const CategoryPage: FC = () => {
  return (
    <section className="page overflow-hidden">
      <div
        className="fixed top-0 left-0 overflow-hidden z-50 w-full h-full flex flex-col gap-5 items-center justify-center">
        {navLinks?.map((item, idx) => (
          <MotionEl
            key={item.href}
            className='w-max'
            delay={idx / 10}
          >
            <Link
              href={item.href}
              data-text={item.title}
              aria-label={item.title}
              className="hovered-link text-stone-500 z-10"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="hover:brightness-200 h-16 w-16 sm:h-20 sm:w-20 transition-all duration-300"
              />
            </Link>
          </MotionEl>
        ))}
      </div>
    </section>
  )
}