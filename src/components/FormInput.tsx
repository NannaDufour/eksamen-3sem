type InputType = {
  type: string;
  name?: string;
  placeholder: string;
  value?: string;
  readOnly?: boolean;
};

const FormInput = ({ type, name, placeholder, value, readOnly }: InputType) => {
  return <input type={type} name={name} placeholder={placeholder} value={value} readOnly={readOnly} className="placeholder:text-secondary-text text-secondary-text border px-3 py-6 max-md:w-full" />;
};

export default FormInput;
