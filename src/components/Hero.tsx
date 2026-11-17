import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid bg-black">
      <Image
        className="col-start-1 row-start-1 w-full h-[75vh] object-cover opacity-35"
        src="/bg/header_bg_2.jpg"
        width={12000}
        height={800}
        alt="photoOfClub"
      />
      <div className="col-start-1 row-start-1 gap-3 z-10 flex flex-col items-center justify-center text-center">
        <Image
          className="flex flex-col w-1/2"
          src="/icon/Logo.svg"
          width={400}
          height={400}
          alt="photoOflogo"
        />
        <h2 className="w-1/2 text-white text-3xl font-semibold tracking-[0.9em]">
          HAVE A GOOD TIME
        </h2>
        <Image
          className="w-1/2"
          src="/bottom_line.png"
          width={400}
          height={400}
          alt="undelineOfPhoto"
        />
      </div>
    </section>
  );
};

export default Hero;
