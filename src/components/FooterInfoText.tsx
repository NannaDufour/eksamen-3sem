type props = {
  className?: string;
  title: string;
  infoOne: string;
  infoTwo: string;
};

const FooterInfoText = ({ className, title, infoOne, infoTwo }: props) => {
  return (
    <div className={`flex flex-col gap-1 mb-2 ${className ?? ""}`}>
      <h4 className="text-accent font-medium col-start-6 text-size-m">
        {title}
      </h4>
      <p className="text-secondary-text">{infoOne}</p>
      <p className="text-secondary-text">{infoTwo}</p>
    </div>
  );
};

export default FooterInfoText;
