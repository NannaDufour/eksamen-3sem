type SectionTitleProps = {
  title: string;
};

const SectionTitles = ({ title }: SectionTitleProps) => {
  return (
    <section className="flex flex-col text-center mt-10 w-full">
      <h3 className="font-medium text-size-xl text-secondary-text">{title}</h3>
      <div className="relative w-[15em] justify-self-center h-1 before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:bg-gradient-to-r before:from-transparent before:via-active-nav before:to-transparent"></div>
    </section>
  );
};

export default SectionTitles;
