import SectionTitles from "./SectionTitles";

type SubHeroType = {
  title: string;
};

const SubpageHero = ({ title }: SubHeroType) => {
  return (
    <section className="bg-background relative before:bg-[url(/bg/footerbg.jpg)] before:content-[''] before:absolute before:opacity-40 overflow-hidden isolate before:inset-0 before:-z-1">
      <SectionTitles title={title} />
    </section>
  );
};

export default SubpageHero;
