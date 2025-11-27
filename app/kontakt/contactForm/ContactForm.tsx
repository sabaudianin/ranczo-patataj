"use client";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "@/lib/validations/contact";
import Image from "next/image";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
    reset();
  };

  return (
    <section className=" py-4 md:w-1/2">
      <h2 className="text-center pb-2 font-special">Zapraszamy do kontaktu </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full  relative max-w-3xl mx-auto border rounded border-[var(--c-primary)] p-2 flex flex-col items-center justify-center gap-2 shadow-md "
      >
        {" "}
        <div className="absolute top-2 right-2 z-50">
          <Image
            src="/logorp.avif"
            width={80}
            height={80}
            alt="Logo Ranczo Patataj"
            className={`w-10 h-10  rounded-xl `}
          />
        </div>
        <div className="w-full pb-4">
          <label className="">Imię :</label>
          <input
            placeholder="Wpisz swoje Imię..."
            className="ml-4"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="w-full">
          <label className="">Email :</label>
          <input
            className="ml-2"
            placeholder="Podaj swój email tutaj..."
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="w-full">
          <textarea
            className="border rounded indent-2 w-full p-1"
            placeholder="Tu wpisz wiadomość..."
            rows={5}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className=" border border-[var(--c-primary)] bg-emerald-300/70 rounded px-4 py-2 font-bold tracking-widest disabled:opacity-60 hover:scale-105 duration transition"
        >
          {isSubmitting ? "Wysyłanie" : "Wyślij"}
        </button>
      </form>
    </section>
  );
};
