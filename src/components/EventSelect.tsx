"use client";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";

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

type EventsType = {
  events: NightclubEvent[];
  eventId?: string;
};

const EventSelect = ({ eventId, events }: EventsType) => {
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(`/book-table?eventId=${e.target.value}`, { scroll: false });
  };

  return (
    <div className="relative">
      <select name="eventId" defaultValue={eventId ?? ""} key={eventId} id="chooseEvent" className="placeholder:text-secondary-text text-secondary-text border px-3 py-6 appearance-none w-full h-full cursor-pointer" onChange={handleChange}>
        <option value="">Choose Night</option>
        {events.map((event) => (
          <option key={event.id} value={event.id}>
            {event.title}
          </option>
        ))}
      </select>
      <IoIosArrowDown className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-secondary-text w-10 h-10 pr-3" />
    </div>
  );
};

export default EventSelect;
