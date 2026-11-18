import Image from "next/image";
import FooterInfoText from "./FooterInfoText";
import FooterInfoCard from "./FooterInfoCard";
import SocialMediaBar from "./SocialMediaBar";

const Footer = () => {
  return (
    <section className="full-bleed grid bg-black w-full overflow-hidden">
      <Image
        className="col-start-1 row-start-1 opacity-10 w-full scale-130"
        src="/bg/footerbg.jpg"
        width={1200}
        height={600}
        alt="photoOfGraphicClub"
      />
      <div className="col-[content]! row-start-1 grid grid-cols-12 gap-4 content-center">
        <Image
          className="col-span-3"
          src="/Logo.png"
          height={200}
          width={200}
          alt="photoOfLogo"
        />
        <h4 className="text-accent col-start-5 font-medium text-size-m ">
          NEWS
        </h4>
        <h4 className="text-accent col-start-9 font-medium text-size-m col-span-4">
          RECENT POSTS
        </h4>
        <FooterInfoText
          className="row-start-2 col-span-4"
          title="LOCATION"
          infoOne="Kompagnistræde 278"
          infoTwo="1265 Købehavn K"
        />
        <FooterInfoText
          className="row-start-3 col-span-3"
          title="OPENING HOURS"
          infoOne="WED - THU 10:30 PM TO 3 AM"
          infoTwo="SAT - SUN: 11 PM TO 5 AM"
        />
        <FooterInfoCard
          className="col-start-5 row-start-2 col-span-4"
          img="/content-img/recent_post1.jpg"
          alt="photoOfRecentPost"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting."
          time="April 17, 2026"
        />
        <FooterInfoCard
          className="col-start-5 row-start-3 col-span-4"
          img="/content-img/recent_post2.jpg"
          alt="photoOfRecentPost"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting."
          time="April 17, 2026"
        />
        <FooterInfoCard
          className="col-start-9 row-start-2 col-span-4"
          img="/icon/star1.png"
          alt="photoOfIcon"
          text="It is a long established fact that a reader will be distracted by the readable..."
          time="5 hours ago"
        />
        <FooterInfoCard
          className="col-start-9 row-start-3 col-span-4"
          img="/icon/star1.png"
          alt="photoOfIcon"
          text="It is a long established fact that a reader will be distracted by the readable..."
          time="5 hours ago"
        />
        <h4 className="text-primary-text text-size-xs  col-start-1 row-start-8 col-span-3">
          Night Club - All Rights Reserved
        </h4>
        <h4 className="text-secondary-text text-size-xs col-start-6 row-end-8 col-span-3 self-center">
          Stay Connected With Us
        </h4>
        <SocialMediaBar className="col-start-6 row-start-8 col-span-3" />
        <h4 className=" text-primary-text text-size-xs col-start-11 row-start-8 col-span-3">
          Copyright © NightClub
        </h4>
      </div>
    </section>
  );
};

export default Footer;
