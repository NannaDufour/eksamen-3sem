import Image from "next/image";
import { text } from "stream/consumers";

type props = {
  className?: string;
  img: string;
  alt: string;
  text: string;
  time: string;
};

const FooterInfoCard = ({ className, img, alt, text, time }: props) => {
  return (
    <div className={`flex flex-row gap-4 mb-2 h-auto ${className ?? ""}`}>
      <Image src={img} alt={alt} width={50} height={50} className="h-20 w-20" />
      <div className="flex flex-col gap-2">
        <p className="text-secondary-text">{text}</p>
        <p className="text-accent">{time}</p>
      </div>
    </div>
  );
};

export default FooterInfoCard;
