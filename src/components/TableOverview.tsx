import Image from "next/image";

const TableOverview = () => {
  return (
    <section className="bg-background py-10">
      <div className="grid grid-cols-5 place-self-center gap-4">
        <div>
          <Image src="/table/table_1.png" alt="Table for 4" width="300" height="300"></Image>
          <p>1</p>
        </div>
        <Image src="/table/table_1.png" alt="Table for 4" width="300" height="300"></Image>
        <Image src="/table/table_2.png" alt="Table for 6" width="300" height="300"></Image>
        <Image src="/table/table_1.png" alt="Table for 4" width="300" height="300"></Image>
        <Image src="/table/table_3.png" alt="Table for 8" width="300" height="300"></Image>
        <Image src="/table/table_1.png" alt="Table for 4" width="300" height="300"></Image>
        <Image src="/table/table_1.png" alt="Table for 4" width="300" height="300"></Image>
        <Image src="/table/table_2.png" alt="Table for 6" width="300" height="300"></Image>
        <Image src="/table/table_1.png" alt="Table for 4" width="300" height="300"></Image>
        <Image src="/table/table_3.png" alt="Table for 8" width="300" height="300"></Image>
        <Image src="/table/table_1.png" alt="Table for 4" width="300" height="300"></Image>
        <Image src="/table/table_1.png" alt="Table for 4" width="300" height="300"></Image>
        <Image src="/table/table_2.png" alt="Table for 6" width="300" height="300"></Image>
        <Image src="/table/table_1.png" alt="Table for 4" width="300" height="300"></Image>
        <Image src="/table/table_3.png" alt="Table for 8" width="300" height="300"></Image>
      </div>
    </section>
  );
};

export default TableOverview;
