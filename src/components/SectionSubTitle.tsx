type SectionSubTitleType = {
  title: string;
};

const SectionSubTitle = ({ title }: SectionSubTitleType) => {
  return <h3 className="font-semibold text-size-l text-secondary-text">{title}</h3>;
};

export default SectionSubTitle;
