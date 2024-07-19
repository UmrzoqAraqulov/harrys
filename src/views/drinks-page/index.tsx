import {GoBack, MotionEl} from "@/components";
import {drinksData, drinksList, mixture_img} from "@/constants";
import {Card, CardBody, CardHeader} from "@nextui-org/react";
import Image from "next/image";
import {FC} from "react";

export const DrinksPage: FC = () => {
  return (
    <section className="page container">
      <GoBack/>
      <div className="page flex-col-reverse xl:flex-row flex items-center gap-3 md:gap-5 xl:gap-7">
        <div className="w-full xl:w-2/5 max-w-xl flex flex-col gap-3 md:gap-5 xl:gap-7">
          <div className="flex flex-col gap-1.5">
            {drinksList.slice(0, 6).map((item, idx) => (
              <MotionEl key={item.title} direction="left" delay={idx / 10}
                        className="flex items-center justify-between">
                <p className="text-2xl lg:text-3xl font-semibold">{item.title}</p>
                <div className="bg-primary text-2xl lg:text-3xl font-semibold rounded-lg py-1 w-28 lg:w-32 text-center">
                  {item.price.toLocaleString("ru")}
                </div>
              </MotionEl>
            ))}
          </div>
          <div className="flex flex-col gap-1.5">
            {drinksList.slice(6).map((item, idx) => (
              <MotionEl key={item.title} direction="left" delay={idx / 10}
                        className="flex items-center justify-between">
                <p className="text-2xl lg:text-3xl font-semibold">{item.title}</p>
                <div className="bg-primary text-2xl lg:text-3xl font-semibold rounded-lg py-1 w-28 lg:w-32 text-center">
                  {item.price.toLocaleString("ru")}
                </div>
              </MotionEl>
            ))}
          </div>
        </div>
        <div className="w-full flex-col justify-center md:flex-row xl:w-4/6 gap-3 md:gap-5 xl:gap-7 flex items-center">
          <MotionEl
            scale={.8}
            delay={.2}
            className="w-full md:w-1/2 max-w-lg group border-2 group border-primary rounded-xl overflow-hidden"
          >
            <Image
              src={mixture_img}
              alt="mix"
              className="group-hover:scale-110 transition-700 w-full h-full object-cover"
            />
          </MotionEl>
          <div className="w-full md:w-1/2 max-w-lg flex flex-col gap-5">
            {drinksData.map((item, idx) => (
              <MotionEl
                key={item.title}
                delay={idx / 5}
                direction="right"
              >
                <Card aria-label="ripple card" isPressable
                      className="flex group w-full flex-row-reverse gap-5 bg-transparent items-center">
                  <CardHeader className="w-max -z-0 h-60 sm:h-auto">
                    <Image
                      src={item.image}
                      alt={item.title!}
                      className="group-hover:scale-110 transition-700 w-full h-full object-contain"
                    />
                  </CardHeader>
                  <CardBody className="items-center overflow-hidden justify-center">
                    <p className="text-2xl lg:text-3xl font-semibold">{item.title}</p>
                    <div className="bg-primary text-2xl lg:text-3xl font-semibold rounded-lg py-1 px-2.5">
                      {item.price.toLocaleString("ru")}
                    </div>
                  </CardBody>
                </Card>
              </MotionEl>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}