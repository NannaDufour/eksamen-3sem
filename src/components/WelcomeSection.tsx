import Image from "next/image";
import SectionTitles from "./SectionTitles";

const WelcomeSection = () => {
  return (
    <section className="bg-black pb-30">
      <SectionTitles title="WELCOME IN NIGHTCLUB" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Image
          className="w-full h-auto"
          src="/content-img/thumb1.jpg"
          width={200}
          height={400}
          alt="photoOfTable"
        />
        <Image
          className="w-full h-auto"
          src="/content-img/reastaurant_1.jpg"
          width={200}
          height={400}
          alt="photoOfFood"
        />
        <Image
          className="w-full h-auto"
          src="/content-img/thumb2.jpg"
          width={200}
          height={400}
          alt="photoOfGirl "
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
