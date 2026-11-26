import type { Ref, ChangeEventHandler, FocusEventHandler } from "react";

type InputType = {
  type: string;
  name?: string;
  placeholder: string;
  value?: string;
  readOnly?: boolean;
  ref?: Ref<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

const FormInput = ({
  type,
  name,
  placeholder,
  value,
  readOnly,
  ref,
  onBlur,
  onChange,
}: InputType) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      className="placeholder:text-secondary-text text-secondary-text border px-3 py-6 max-md:w-full"
    />
  );
};

export default FormInput;
