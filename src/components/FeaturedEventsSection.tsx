import SectionTitles from "./SectionTitles";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NightclubEvent {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  isFeatured: boolean;
  asset: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
}

const FeaturedEvents = async () => {
  const response = await fetch("http://localhost:4000/events", {
    method: "GET",
  });
  const events = await response.json();
  const featuredEvents = events.filter((event: NightclubEvent) => event.isFeatured);

  return featuredEvents.map((featuredEvent: NightclubEvent) => (
    <article key={featuredEvent.id} className="group">
      <div className="relative">
        <figure className="group-hover:absolute group-hover:top-0 group-hover:left-0 group-hover:w-20 group-hover:h-20 group-hover:before:content-[''] group-hover:before:absolute group-hover:before:inset-0 group-hover:before:bg-active-nav group-hover:before:z-10"></figure>
        <div className="grid grid-cols-1 col-start-1 row-start-1 group-hover:before:bg-background group-hover:before:content-[''] group-hover:before:absolute group-hover:before:w-full group-hover:before:opacity-50 group-hover:before:inset-0 ">
          <Image
            src={`http://localhost:4000${featuredEvent.asset.url}`}
            alt={featuredEvent.asset.alt}
            width={featuredEvent.asset.width}
            height={featuredEvent.asset.height}
            className="w-full border-y-2 group-hover:border-active-nav col-start-1 row-start-1"
          />
          <Button asChild variant="bookNow" size="bookNow" className="col-start-1 row-start-1 place-self-center">
            <Link href="/book-table">BOOK NOW</Link>
          </Button>
          <div className="col-start-1 row-start-1 place-self-end  z-2 bg-background py-4 px-3 hidden group-hover:block">
            <p className="font-semibold text-secondary-text pb-2 text-xl">{featuredEvent.title}</p>
            <p className="font-light text-primary-text pr-8 text-s">{featuredEvent.excerpt}</p>
          </div>
        </div>
        <figure className="group-hover:absolute group-hover:bottom-0 group-hover:right-0 group-hover:w-20 group-hover:h-20 after:content-[''] group-hover:after:absolute group-hover:after:inset-0 group-hover:after:bg-active-nav z-3"></figure>
      </div>
      <div className="bg-event-information py-2 px-4 md:flex place-content-between">
        <p className="text-secondary-text">{featuredEvent.title}</p>
        <p className="text-secondary-text ">
          {new Date(featuredEvent.date).toLocaleDateString("en-US", { month: "long", day: "numeric" })} · {new Date(featuredEvent.date).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
    </article>
  ));
};

const FeaturedEventsSection = () => {
  return (
    <section className="bg-background relative before:bg-[url(/bg/slider_bg_overlay.png)] before:content-[''] before:absolute before:opacity-40 overflow-hidden isolate before:inset-0 before:-z-1 pb-30">
      <SectionTitles title="FEATURED EVENTS" />
      <div className="md:grid max-md:flex flex-col grid-cols-2 gap-4">
        <FeaturedEvents />
      </div>
    </section>
  );
};

export default FeaturedEventsSection;
