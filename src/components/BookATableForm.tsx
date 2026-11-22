import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import { IoIosArrowDown } from "react-icons/io";

const BookATableForm = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <FormInput type="text" name="name" placeholder="Your Name" />
        <FormInput type="email" name="email" placeholder="Your Email" />
        <FormInput type="number" name="table" placeholder="Table Number" />
        <FormInput type="number" name="guests" placeholder="Number of Guest" />
        <div className="relative">
          <select name="chooseEvent" id="chooseEvent" className="placeholder:text-secondary-text text-secondary-text border px-3 py-6 appearance-none w-full h-full cursor-pointer">
            <option value="">Choose Night</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <IoIosArrowDown className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-secondary-text w-14 h-14 pr-7" />
        </div>
        <FormInput type="phone" name="phone" placeholder="Your Contact Number" />
      </div>
      <FormTextArea placeholder="Your Comment" />
    </div>
  );
};

export default BookATableForm;
