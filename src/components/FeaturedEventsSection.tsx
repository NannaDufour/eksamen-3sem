import SectionTitles from "./SectionTitles";
import Image from "next/image";

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
    <article key={featuredEvent.id}>
      <Image src={`http://localhost:4000${featuredEvent.asset.url}`} alt={featuredEvent.asset.alt} width={featuredEvent.asset.width} height={featuredEvent.asset.height} className="w-full" />
      <div className="bg-event-information py-2 px-4 md:flex place-content-between">
        <p className="text-secondary-text">{featuredEvent.title}</p>
        <p className="text-secondary-text ">
          {new Date(featuredEvent.date).toLocaleDateString("en-GB", { month: "long", day: "numeric" })} · {new Date(featuredEvent.date).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
    </article>
  ));
};

const FeaturedEventsSection = () => {
  return (
    <section className="bg-background relative before:bg-[url(/bg/slider_bg_overlay.png)] before:content-[''] before:absolute before:opacity-40 overflow-hidden isolate before:inset-0 before:-z-1">
      <SectionTitles title="FEATURED EVENTS" />
      <div className="md:grid max-md:flex flex-col grid-cols-2 gap-4">
        <FeaturedEvents />
      </div>
    </section>
  );
};

export default FeaturedEventsSection;
