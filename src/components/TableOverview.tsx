"use client";
import Image from "next/image";
import { MdOutlineSwipe } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const tables = [
  { tableNumber: 1, seats: 4, src: "/table/table_1.png" },
  { tableNumber: 2, seats: 4, src: "/table/table_1.png" },
  { tableNumber: 3, seats: 6, src: "/table/table_2.png" },
  { tableNumber: 4, seats: 4, src: "/table/table_1.png" },
  { tableNumber: 5, seats: 8, src: "/table/table_3.png" },
  { tableNumber: 6, seats: 4, src: "/table/table_1.png" },
  { tableNumber: 7, seats: 4, src: "/table/table_1.png" },
  { tableNumber: 8, seats: 6, src: "/table/table_2.png" },
  { tableNumber: 9, seats: 4, src: "/table/table_1.png" },
  { tableNumber: 10, seats: 8, src: "/table/table_3.png" },
  { tableNumber: 11, seats: 4, src: "/table/table_1.png" },
  { tableNumber: 12, seats: 4, src: "/table/table_1.png" },
  { tableNumber: 13, seats: 6, src: "/table/table_2.png" },
  { tableNumber: 14, seats: 4, src: "/table/table_1.png" },
  { tableNumber: 15, seats: 8, src: "/table/table_3.png" },
];

type TableOverviewType = {
  hasEvent: boolean;
  bookedTables: string[];
};

const TableOverview = ({ hasEvent, bookedTables }: TableOverviewType) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleTableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("table", e.target.value);
    router.replace(`/book-table?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="py-15">
      <div className="md:hidden flex gap-5">
        <MdOutlineSwipe className="text-secondary-text" />
        <p className="text-secondary-text pb-5 swipe-text">Swipe to see all tables</p>
      </div>
      <div className="grid">
        <div className="col-start-1 row-start-1 max-md:min-w-0 max-md:overflow-x-scroll max-md:snap-x max-md:snap-mandatory">
          <fieldset disabled={!hasEvent}>
            <div className="grid grid-cols-5 md:place-self-center gap-4 max-md:w-max">
              {tables.map((table) => (
                <label
                  key={table.tableNumber}
                  className="relative before:absolute has-checked:before:bg-active-nav has-disabled:cursor-default has-disabled:before:bg-red-700 before:mix-blend-overlay before:content-[''] before:w-full before:h-full grid snap-center cursor-pointer"
                >
                  <input disabled={bookedTables.includes(String(table.tableNumber))} onChange={handleTableChange} type="radio" name="table" value={table.tableNumber} className="sr-only" />
                  <Image src={table.src} alt={`Table for ${table.seats}`} width="300" height="300" className="col-start-1 row-start-1"></Image>
                  <p className="col-start-1 row-start-1 text-secondary-text font-bold place-self-center text-size-m relative z-3">{table.tableNumber}</p>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        {!hasEvent && <div className="col-start-1 row-start-1 bg-background/60 w-full h-full text-secondary-text z-10 text-size-xl grid place-items-center">Choose a night to see available tables</div>}
      </div>
    </section>
  );
};

export default TableOverview;
