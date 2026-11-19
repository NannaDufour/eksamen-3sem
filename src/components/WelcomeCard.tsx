import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type WelcomeCardProps = {
  title: string;
  image: string;
  alt: string;
  icon: string;
};

const WelcomeCard = ({ title, image, alt, icon }: WelcomeCardProps) => {
  return (
    <div className="group relative overflow-hidden">
      <Image
        className="w-full h-auto"
        src={image}
        width={200}
        height={400}
        alt={alt}
      />

      <Card className="absolute inset-0 flex bg-black opacity-0 transition-opacity duration-400 group-hover:opacity-100 border-y-2 border-active-nav justify-center text-center">
        <figure className="absolute top-0 left-0 w-20 h-20 before:content-[''] before:absolute before:inset-0 before:bg-active-nav"></figure>
        <CardHeader>
          <Image
            className="text-active-nav border-2 border-active-nav p-4 w-20 h-20 rounded-sm place-self-center m-5 scale-50 transition duration-300 ease-out group-hover:scale-100"
            src={icon}
            alt={alt}
            width={40}
            height={40}
          />
          <CardTitle className="text-white text-2xl scale-50 transition duration-500 ease-out group-hover:scale-100">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-primary-text m-2 translate-x-10 opacity-0 transition-all duration-700 ease-in group-hover:translate-x-0 group-hover:opacity-100">
            There are many variants of passages of Lorem Ipsum available, but
            the majority have sufferede an alteration in some form, by injected
            humour, or randomised words which don't look slightly believeble.
          </p>
        </CardContent>
        <figure className="absolute bottom-0 right-0 w-20 h-20 after:content-[''] after:absolute after:inset-0 after:bg-active-nav"></figure>
      </Card>
    </div>
  );
};

export default WelcomeCard;
