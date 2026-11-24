type TextAreaType = {
  name: string;
  placeholder: string;
};

const FormTextArea = ({ name, placeholder }: TextAreaType) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className="placeholder:text-secondary-text text-secondary-text border px-3 py-6 w-full mt-5 h-70"
    />
  );
};

export default FormTextArea;
