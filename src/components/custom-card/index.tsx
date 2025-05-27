import { useTranslations } from "next-intl";
import Image from "next/image"

interface Props {
  img: string;
  title: string;
  name: string;
  price: number;
  t: (key: string, values?: Record<string, any>) => string
}

function CustomCard(props: Props) {
  const { img, title, price, name, t } = props;
  return (
    <div className="w-full rounded-xl overflow-hidden bg-white">
      <Image width={100} height={100} className="w-full" src={img} alt={name} />
      <div className="p-3">
        <h3>{title}</h3>
        <p>{price} {t("sum")}</p>
      </div>
    </div>
  )
}

export default CustomCard