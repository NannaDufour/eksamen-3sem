import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import EventSelect from "./EventSelect";

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
  table?: string;
};

const BookATableForm = ({ events, eventId, table }: EventsType) => {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 flex flex-col gap-5">
        <FormInput type="text" name="name" placeholder="Your Name" />
        <FormInput type="email" name="email" placeholder="Your Email" />
        <FormInput type="number" placeholder="Table Number" value={table ?? ""} readOnly />
        <FormInput type="number" name="guests" placeholder="Number of Guest" />
        <EventSelect events={events} eventId={eventId} />
        <FormInput type="tel" name="phone" placeholder="Your Contact Number" />
      </div>
      <FormTextArea placeholder="Your Comment" />
    </div>
  );
};

export default BookATableForm;
