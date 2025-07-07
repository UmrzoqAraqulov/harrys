import { formatNumberWithSpaces } from "@/utils";
import Image from "next/image"

interface Props {
  img: string;
  title: string;
  name: string;
  price: number;
  type: string;
  t: (key: string, values?: Record<string, any>) => string
}

function CustomCard(props: Props) {
  const { img, title, price, name, type, t } = props;
  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden`}>
      <Image width={500} height={500} className="w-full" src={img} alt={name} />
      <div className="px-3 py-3 h-full">
        <h3 className="sm:text-lg text-base mb-1 text-center">{t(`menu.${title}`)}</h3>
        <p className="flex gap-1 border rounded-full py-1 bg-red-500 text-white justify-center">
          <span className="md:text-xl text-lg font-bold">{formatNumberWithSpaces(price)}</span>
          <span className="md:text-lg text-base">{t("sum")}</span>
        </p>
      </div>
    </div>
  )
}

export default CustomCard