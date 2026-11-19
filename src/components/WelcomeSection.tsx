import WelcomeCard from "./WelcomeCard";
import SectionTitles from "./SectionTitles";

const WelcomeSection = () => {
  return (
    <section className="bg-black bg-[url(/bg/pattern_bg.jpg)] pb-30">
      <SectionTitles title="WELCOME IN NIGHTCLUB" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <WelcomeCard
          image="/content-img/thumb1.jpg"
          alt="photoOfTable"
          title="NIGHT CLUB"
          icon="/icon/favicon.png"
        />
        <WelcomeCard
          image="/content-img/reastaurant_1.jpg"
          alt="photoOfFood"
          title="RESTAURANT"
          icon="/icon/favicon.png"
        />
        <WelcomeCard
          image="/content-img/thumb2.jpg"
          alt="photoOfBar"
          title="BAR"
          icon="/icon/favicon.png"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
