"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type GalleryImage = {
  id: number;
  description: string;
  asset: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
};

type GallerySliderProps = {
  images: GalleryImage[];
};

const GallerySlider = ({ images }: GallerySliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const showImage = (index: number) => {
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setCurrentIndex(null);
    document.body.style.overflow = "";
  };

  const gridSpans = [
    "md:col-span-4",
    "md:col-span-2",
    "md:col-span-4",
    "md:col-span-2",
    "md:col-span-4",
    "md:col-span-4",
    "md:col-span-4",
  ];

  const offsets = [
    { x: -100 },
    { x: -80 },
    { x: -60 },
    { x: -100 },
    { x: -90 },
    { x: -70 },
    { x: -50 },
  ];

  const previewImages = images.slice(0, 7);

  return (
    <>
      <div className="grid grid-cols-12">
        {previewImages.map((image, index) => (
          <motion.button
            key={image.id}
            initial={{
              x: offsets[index].x,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            onClick={() => showImage(index)}
            className={`${gridSpans[index]} col-span-12 group relative overflow-hidden`}
          >
            <Image
              src={`https://night-club-api-eksamen.onrender.com${image.asset.url}`}
              alt={image.asset.alt}
              width={400}
              height={200}
              className="w-full h-80 object-cover"
            />

            <Card className="absolute inset-0 flex justify-between group-hover:border-y-2 border-active-nav bg-transparent shadow-none group-hover:bg-black/40 ">
              <figure className="absolute top-0 left-0 w-20 h-20 opacity-0 duration-200 group-hover:opacity-100 before:content-[''] before:absolute before:inset-0 before:bg-active-nav" />

              <figure className="absolute bottom-0 right-0 w-20 h-20 opacity-0 duration-200 group-hover:opacity-100 after:content-[''] after:absolute after:inset-0 after:bg-active-nav" />
            </Card>
          </motion.button>
        ))}
      </div>
      {currentIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
        >
          <IoCloseSharp
            onClick={closeImage}
            className="absolute top-5 right-5 z-60 text-white text-4xl"
          />
          <Carousel
            opts={{
              startIndex: currentIndex,
              loop: true,
            }}
            className="w-full max-w-6xl px-4"
          >
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.id}>
                  <div className="mx-auto flex max-h-[90vh] w-full max-w-4xl flex-col overflow-y-auto">
                    <Image
                      src={`https://night-club-api-eksamen.onrender.com${image.asset.url}`}
                      alt={image.asset.alt}
                      width={image.asset.width}
                      height={image.asset.height}
                      className="w-full max-h-[45vh] object-cover"
                    />
                    <div className="flex flex-col gap-4 bg-black p-6 text-white md:p-8">
                      <h5>NIGHT CLUB PARTY</h5>
                      <p className="text-primary-text">{image.description}</p>
                      <Button variant="formButton" className="self-end h-10">
                        BOOK NOW
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious variant="carousel" size="icon-lg" />
            <CarouselNext variant="carousel" size="icon-lg" />
          </Carousel>
        </motion.div>
      )}
    </>
  );
};

export default GallerySlider;
