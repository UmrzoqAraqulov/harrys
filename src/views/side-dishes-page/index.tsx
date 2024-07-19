import {GoBack, MotionEl} from "@/components";
import {set_img, sideDishesData} from "@/constants";
import {Card, CardBody, CardHeader} from "@nextui-org/react";
import NextImage from "next/image";
import {FC} from "react";

export const SideDishesPage: FC = () => {
  return (
    <section className="page container flex flex-col items-center">
      <GoBack/>
      <div className="flex gap-3 lg:gap-5 flex-col-reverse lg:flex-row">
        <div className="flex lg:flex-col gap-3 w-full lg:w-2/6">
          {sideDishesData.slice(0, 2).map((item, idx) => (
            <MotionEl key={idx + "-side"} delay={idx / 5} direction="left">
              <Card aria-label="ripple card" className="bg-transparent w-full group items-center text-white"
                    isPressable>
                <CardHeader className="overflow-hidden -z-0">
                  <NextImage
                    loading="lazy"
                    src={item.image}
                    alt={item.title!}
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
                  <p className="text-base sm:text-2xl lg:text-3xl font-bold line-clamp-1 break-all">{item.title}</p>
                </CardBody>
              </Card>
            </MotionEl>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 w-full lg:w-4/6">
          <MotionEl className="w-full sm:w-1/2">
            <Card className="bg-transparent w-full h-full group items-center text-white" isPressable>
              <CardHeader className="overflow-hidden -z-0">
                <NextImage
                  src={set_img}
                  alt="set"
                  loading="lazy"
                  placeholder="blur"
                  className="group-hover:scale-110 transition-700 w-full h-full object-cover"
                />
              </CardHeader>
              <CardBody className="items-center">
                <div className="bg-primary text-2xl lg:text-3xl font-semibold rounded-lg py-1 px-2.5">
                  27,000
                </div>
                <p className="text-2xl lg:text-3xl font-bold line-clamp-1 break-all">Сет The Harry’s</p>
              </CardBody>
            </Card>
          </MotionEl>
          <div className="flex sm:flex-col gap-3 w-full sm:w-1/2">
            {sideDishesData.slice(2).map((item, idx) => (
              <MotionEl key={idx + "-side"} delay={idx / 5} direction="right">
                <Card className="bg-transparent w-full group items-center text-white" isPressable>
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
                    <p className="text-base sm:text-2xl lg:text-3xl font-bold line-clamp-1 break-all">{item.title}</p>
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