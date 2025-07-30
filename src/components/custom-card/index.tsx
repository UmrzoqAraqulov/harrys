import { formatNumberWithSpaces } from "@/utils";
import Image from "next/image"
import parse from 'html-react-parser';
import { useTranslations } from "next-intl";

interface Props {
  img: string;
  title: string;
  name: string;
  price: number;
  text?: string;
}

function CustomCard(props: Props) {
  const { img, title, price, name, text } = props;

  const t = useTranslations();
  return (
    <div className={`bg-white rounded-2xl shadow-lg flex flex-col`}>
      <Image width={500} height={600} className="w-full rounded-2xl" src={img} alt={name} />
      <div className="p-3 flex flex-col gap-2 justify-between">
        <h3 className="sm:text-xl md:text-lg text-center font-semibold">{t(`menu.${title}`)}</h3>
        {text && <div className="relative group">
          <div className="line-clamp-4 text-sm md:text-[15px] text-gray-500 italic cursor-pointer">
            {t(`menu.${text}`)}
          </div>
          <div
            className="absolute left-1/2 z-10 border-1 border-primary -translate-x-1/2 mt-2 min-w-[180px] w-full bg-white text-gray-500 italic rounded-lg shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 transition-opacity text-xs"
          >
            {t(`menu.${text}`)}
          </div>
        </div>}
        <p className="flex gap-1 border rounded-full py-1 bg-primary text-white justify-center">
          <span className=" md:text-lg font-bold">{formatNumberWithSpaces(price)}</span>
          <span className="md:text-lg text-base">{t("sum")}</span>
        </p>
      </div>
    </div>
  )
}

export default CustomCard