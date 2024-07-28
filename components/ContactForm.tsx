"use client";

import React, { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import GradientButton from "./GradientButton";

type FormInputs = {
  from_name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail: SubmitHandler<FormInputs> = (data) => {
    setIsSubmitting(true);

    const templateParams = {
      to_name: "Thomas",
      from_name: data.from_name,
      email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        "service_arvg63a",
        "contact_form_portfolio",
        templateParams,
        "tJE4pvbpWA5LNecY3"
      )
      .then(
        () => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          reset();
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        () => {
          setStateMessage("Something went wrong, please try again later.");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className="flex flex-col space-y-4 items-center"
      ref={form}
    >
      <label
        htmlFor="from_name"
        className="block text-left w-full font-orbitron text-white"
      >
        Name
      </label>
      <input
        className="inputForm border-2 rounded p-2 w-full"
        id="from_name"
        type="text"
        {...register("from_name", { required: "Name is required" })}
        placeholder="John Doe"
      />
      {errors.from_name && (
        <p className="text-red-500">{errors.from_name.message}</p>
      )}

      <label
        htmlFor="email"
        className="block text-left w-full font-orbitron text-white"
      >
        Email
      </label>
      <input
        className="inputForm border-2 rounded p-2 w-full"
        id="email"
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            message: "Invalid email address",
          },
        })}
        placeholder="yourname@example.com"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <label
        htmlFor="message"
        className="block text-left w-full font-orbitron text-white"
      >
        Message
      </label>
      <textarea
        className="inputForm border-2 rounded p-2 w-full"
        id="message"
        {...register("message", { required: "Message is required" })}
        placeholder="What's on your mind?"
        rows={8}
      />
      {errors.message && (
        <p className="text-red-500">{errors.message.message}</p>
      )}

      <GradientButton type="submit" className="mt-4">
        {isSubmitting ? "Sending..." : "Send"}
      </GradientButton>
      <div className="mt-4 text-center text-white text-">{stateMessage}</div>
    </form>
  );
};

export default ContactForm;
