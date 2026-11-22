type TextAreaType = {
  placeholder: string;
};

const FormTextArea = ({ placeholder }: TextAreaType) => {
  return <textarea placeholder={placeholder} className="placeholder:text-secondary-text text-secondary-text border px-3 py-6 w-full mt-5 h-70" />;
};

export default FormTextArea;
