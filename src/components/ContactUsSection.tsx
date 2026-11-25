import FormInput from "@/components/FormInput";
import FormTextArea from "@/components/FormTextArea";
import { Button } from "./ui/button";
import Form from "next/form";
import sendContactInfo from "@/app/actions/actions";

const ContactUsSection = () => {
  return (
    <section className="bg-black ">
      <Form action={sendContactInfo}>
        <div className="w-1/2 flex flex-col place-self-center mt-15 mb-15">
          <div className="flex flex-col gap-5">
            <FormInput type="text" name="name" placeholder="Your Name" />
            <FormInput type="email" name="email" placeholder="Your Email" />
          </div>
          <FormTextArea name="content" placeholder="Your Comment" />
          <Button variant="formButton" size="formButton">
            SEND
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default ContactUsSection;
