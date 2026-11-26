import type { Ref, ChangeEventHandler, FocusEventHandler } from "react";

type TextAreaType = {
  name: string;
  placeholder: string;
  ref?: Ref<HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
};

const FormTextArea = ({
  name,
  placeholder,
  ref,
  onBlur,
  onChange,
}: TextAreaType) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      className="placeholder:text-secondary-text text-secondary-text border px-3 py-6 w-full mt-5 h-70"
    />
  );
};

export default FormTextArea;
