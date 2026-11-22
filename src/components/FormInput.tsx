type InputType = {
  type: string;
  name: string;
  placeholder: string;
};

const FormInput = ({ type, name, placeholder }: InputType) => {
  return <input type={type} name={name} placeholder={placeholder} className="placeholder:text-secondary-text text-secondary-text border px-3 py-6" />;
};

export default FormInput;
