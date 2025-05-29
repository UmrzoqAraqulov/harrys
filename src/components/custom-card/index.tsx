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
      <div className="px-6 py-3">
        <h3 className="text-lg">{t(`menu.${title}`)}</h3>
        <p className="flex gap-1">
          <span className="text-xl font-bold">{formatNumberWithSpaces(price)}</span>
          <span className="text-lg">{t("home.sum")}</span>
        </p>
      </div>
    </div>
  )
}

export default CustomCard