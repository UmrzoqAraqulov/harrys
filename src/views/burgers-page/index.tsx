import {GoBack, MotionEl} from "@/components";
import {burgersData} from "@/constants";
import {Card, CardBody, CardHeader} from "@nextui-org/react";
import NextImage from "next/image";
import {FC} from "react";

export const BurgersPage: FC = () => {
  return (
    <section className="page container flex flex-col items-center py-10">
      <GoBack/>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-y-8 md:gap-x-20">
        {burgersData.map((item, idx) => (
          <MotionEl className="max-w-sm" delay={idx / 10} key={item.price}>
            <Card aria-label="ripple card" className="bg-transparent group items-center w-full text-white" isPressable>
              <CardHeader className="overflow-hidden -z-0">
                <NextImage
                  src={item.image}
                  alt={item.title!}
                  loading="lazy"
                  placeholder="blur"
                  className="group-hover:scale-110 transition-700 w-full h-full object-cover"
                />
              </CardHeader>
              <CardBody className="items-center gap-1">
                <div
                  className="flex text-sm flex-col sm:flex-row sm:text-xl lg:text-2xl items-center sm:gap-2 lg:gap-3">
                  <p>{item.type}</p>
                  <div
                    className="bg-primary text-lg sm:text-2xl lg:text-3xl font-semibold rounded-lg px-2 sm:py-1 sm:px-2.5">
                    {item.price.toLocaleString("en")}
                  </div>
                </div>
                <div
                  className="flex text-sm flex-col sm:flex-row sm:text-xl lg:text-2xl items-center sm:gap-2 lg:gap-3">
                  <div className="flex items-center sm:flex-col gap-1.5 sm:gap-0">
                    <p className="leading-6">{item.type}</p>
                    <p className="leading-6 text-center">Cheese</p>
                  </div>
                  <div
                    className="bg-primary text-lg sm:text-2xl lg:text-3xl font-semibold rounded-lg px-2 sm:py-1 sm:px-2.5">
                    {item?.secondPrice?.toLocaleString("en")}
                  </div>
                </div>
                <p className="text-sm sm:text-2xl mt-2 lg:text-3xl font-bold line-clamp-1 break-all">{item.title}</p>
              </CardBody>
            </Card>
          </MotionEl>
        ))}
      </div>
    </section>
  )
}