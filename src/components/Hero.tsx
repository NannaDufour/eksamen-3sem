"use client";
import Image from "next/image";
import HeroBtn from "./HeroBtn";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const imagesHero = [
  { src: "/bg/header_bg_1.jpg" },
  { src: "/bg/header_bg_2.jpg" },
];

const Hero = () => {
  const [heroImg, setHeroImg] = useState<number | null>(null);

  useEffect(() => {
    const randomImg = Math.floor(Math.random() * imagesHero.length);
    setHeroImg(randomImg);
  });

  return (
    <section className="full-bleed grid bg-background overflow-hidden">
      {heroImg !== null && (
        <Image
          className="col-start-1 row-start-1 w-full h-[30em] md:h-full opacity-35 object-cover scale-130"
          src={imagesHero[heroImg].src}
          width={1200}
          height={800}
          alt="photoOfClub"
          loading="eager"
        />
      )}
      ;
      <div className="col-start-1 row-start-1 gap-2 md:gap-3 z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          className="w-full flex justify-center"
          initial={{
            rotateX: 90,
            opacity: 0,
            y: 30,
          }}
          animate={{
            rotateX: 0,
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          style={{
            transformPerspective: 800,
            transformOrigin: "top",
          }}
        >
          <Image
            className="md:w-1/2 h-auto"
            src="/icon/Logo.svg"
            width={400}
            height={400}
            alt="photoOflogo"
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 1.5,
          }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h2 className="md:w-1/2 text-white text-size-xs md:text-size-m font-s md:font-medium tracking-[0.8em] md:tracking-[1.2em]">
            HAVE A GOOD TIME
          </h2>
          <Image
            className="md:w-[45em]"
            src="/bottom_line.png"
            width={400}
            height={200}
            alt="undelineOfPhoto"
          />

          <HeroBtn />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
