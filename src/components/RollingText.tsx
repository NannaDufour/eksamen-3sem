type RollingTextType = {
  navLabel: string;
};

const RollingText = ({ navLabel }: RollingTextType) => {
  const letters = navLabel.split("");
  return (
    <span className="overflow-hidden relative inline-block">
      <span className="sr-only">{navLabel}</span>
      <span aria-hidden="true" className="whitespace-break-spaces">
        {letters.map((letter, index) => (
          <span key={index} className="inline-block transition-all [transition-delay:calc(sibling-index()*0.04s)] duration-200 group-hover:-translate-y-full">
            {letter}
          </span>
        ))}
      </span>
      <span aria-hidden="true" className="absolute left-0 top-full text-active-nav whitespace-break-spaces">
        {letters.map((letter, index) => (
          <span key={index} className="inline-block transition-all [transition-delay:calc(sibling-index()*0.04s)] duration-150 group-hover:-translate-y-full">
            {letter}
          </span>
        ))}
      </span>
    </span>
  );
};

export default RollingText;
