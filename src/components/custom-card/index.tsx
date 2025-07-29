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
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col`}>
      <Image width={500} height={600} className="w-full rounded-2xl" src={img} alt={name} />
      <div className="p-3 flex flex-col gap-2 justify-between">
        <h3 className="sm:text-xl text-lg text-center font-semibold">{t(`menu.${title}`)}</h3>
        {text && <div className="line-clamp-3 text-[15px]">{parse(t.raw(`menu.${text}`))}</div>}
        <p className="flex gap-1 border rounded-full py-1 bg-red-500 text-white justify-center">
          <span className="text-lg font-bold">{formatNumberWithSpaces(price)}</span>
          <span className="md:text-lg text-base">{t("sum")}</span>
        </p>
      </div>
    </div>
  )
}

export default CustomCard