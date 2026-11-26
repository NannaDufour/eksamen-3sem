"use client";
import FormInput from "@/components/FormInput";
import { useState } from "react";
import * as z from "zod";
import FormTextArea from "@/components/FormTextArea";
import { Button } from "./ui/button";
import { sendContactInfo } from "@/app/actions/actions";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schema/formSchema";

type ContactForm = z.infer<typeof contactSchema>;

const initialState = {
  name: "",
  email: "",
  content: "",
};

const ContactUsSection = () => {
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: initialState,
  });

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    const result = await sendContactInfo(data);
    setServerMessage(result.message);
    if (result.success) reset(initialState);
  };

  return (
    <section className="bg-background ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full md:w-1/2 flex flex-col place-self-center mt-15 mb-15">
          <div className="flex flex-col gap-5">
            <FormInput
              {...register("name")}
              type="text"
              placeholder="Your Name"
            />
            {errors.name && (
              <div className="text-red-500">{errors.name.message}</div>
            )}
            <FormInput
              {...register("email")}
              type="email"
              placeholder="Your Email"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <FormTextArea {...register("content")} placeholder="Your Comment" />
          {errors.content && (
            <div className="text-red-500">{errors.content.message}</div>
          )}
          <Button
            disabled={isSubmitting}
            variant="formButton"
            size="formButton"
            type="submit"
          >
            {isSubmitting ? "Sending.." : "SEND"}
          </Button>
          {serverMessage && <p className="text-white mt-3">{serverMessage}</p>}
        </div>
      </form>
    </section>
  );
};

export default ContactUsSection;
