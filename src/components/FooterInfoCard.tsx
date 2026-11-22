import Image from "next/image";
import { text } from "stream/consumers";

type props = {
  className?: string;
  imgClassName?: string;
  img: string;
  alt: string;
  text: string;
  time: string;
};

const FooterInfoCard = ({
  className,
  imgClassName = "h-20 w-20",
  img,
  alt,
  text,
  time,
}: props) => {
  return (
    <div className={`flex flex-row gap-4 mb-2 h-auto ${className ?? ""}`}>
      <Image
        src={img}
        alt={alt}
        width={50}
        height={50}
        className={`shrink-0 object-cover ${imgClassName}`}
      />
      <div className="flex flex-col gap-2">
        <p className="text-secondary-text leading-none">{text}</p>
        <p className="text-accent">{time}</p>
      </div>
    </div>
  );
};

export default FooterInfoCard;
