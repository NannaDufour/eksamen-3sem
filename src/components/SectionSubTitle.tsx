type SectionSubTitleType = {
  title: string;
};

const SectionSubTitle = ({ title }: SectionSubTitleType) => {
  return <h3 className="font-semibold text-size-l text-secondary-text pb-7">{title}</h3>;
};

export default SectionSubTitle;
