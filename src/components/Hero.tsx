import Image from "next/image";
import HeroBtn from "./HeroBtn";

const Hero = () => {
  return (
    <section className="full-bleed grid bg-black h-[75vh] md:h-[80vh] overflow-hidden">
      <Image
        className="col-start-1 row-start-1 w-full h-full opacity-35 object-cover scale-130"
        src="/bg/header_bg_2.jpg"
        width={1200}
        height={800}
        alt="photoOfClub"
      />
      <div className="col-start-1 row-start-1 gap-2 md:gap-3 z-10 flex flex-col items-center justify-center text-center">
        <Image
          className="md:w-1/2 h-auto"
          src="/icon/Logo.svg"
          width={400}
          height={400}
          alt="photoOflogo"
        />
        <h2 className="md:w-1/2 text-white text-size-xs md:text-size-m font-s md:font-medium tracking-[0.8em] md:tracking-[1.3em]">
          HAVE A GOOD TIME
        </h2>
        <Image
          className="md:w-1/2"
          src="/bottom_line.png"
          width={400}
          height={400}
          alt="undelineOfPhoto"
        />

        <HeroBtn />
      </div>
    </section>
  );
};

export default Hero;
