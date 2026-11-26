import Image from "next/image";
import FooterInfoText from "./FooterInfoText";
import FooterInfoCard from "./FooterInfoCard";
import SocialMediaBar from "./SocialMediaBar";

const Footer = () => {
  return (
    <footer
      className="relative w-full 
    bg-[url('/bg/footerbg.jpg')] bg-cover bg-center
    before:content-[''] before:absolute before:inset-0
    before:bg-background/90 before:z-0"
    >
      <div className="relative z-10 row-start-1 grid grid-cols-12 gap-10 pt-20 pb-20">
        <Image
          className="col-span-10 mx-auto md:mx-0 md:col-span-3"
          src="/Logo.png"
          height={200}
          width={200}
          alt="photoOfLogo"
          loading="eager"
        />

        <FooterInfoText
          className="col-span-10 text-center row-start-2 md:col-span-4 md:text-left"
          title="LOCATION"
          infoOne="Kompagnistræde 278"
          infoTwo="1265 Købehavn K"
        />
        <FooterInfoText
          className="col-span-10 text-center row-start-3  md:col-span-3 md:text-left"
          title="OPENING HOURS"
          infoOne="WED - THU 10:30 PM TO 3 AM"
          infoTwo="SAT - SUN: 11 PM TO 5 AM"
        />
        <div className="hidden md:contents">
          <h4 className="text-accent col-start-5 font-medium text-size-m ">
            NEWS
          </h4>
          <h4 className="text-accent col-start-9 font-medium text-size-m col-span-4">
            RECENT POSTS
          </h4>

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
            imgClassName="h-5 w-5"
            className="col-start-9 row-start-2 col-span-4"
            img="/icon/X_icon.svg"
            alt="photoOfIcon"
            text="It is a long established fact that a reader will be distracted by the readable..."
            time="5 hours ago"
          />
          <FooterInfoCard
            imgClassName="h-5 w-5"
            className="col-start-9 row-start-3 col-span-4 "
            img="/icon/X_icon.svg"
            alt="photoOfIcon"
            text="It is a long established fact that a reader will be distracted by the readable..."
            time="5 hours ago"
          />
        </div>
        <h4 className="col-span-10 text-center row-start-5 text-primary-text text-size-xs md:col-span-3 md:row-start-8 md:text-left md:self-end">
          Night Club - All Rights Reserved
        </h4>

        <div className="col-span-10 col-start-1 row-start-4 flex flex-col items-center gap-3 md:col-start-5 md:col-span-4 md:row-start-8">
          <h4 className="text-secondary-text font-medium text-size-xs">
            Stay Connected With Us
          </h4>

          <SocialMediaBar />
        </div>

        <h4 className="col-span-10 text-center row-start-6 text-primary-text text-size-xs md:col-start-10 md:col-span-3 md:row-start-8 md:text-right md:self-end">
          Copyright © NightClub
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
