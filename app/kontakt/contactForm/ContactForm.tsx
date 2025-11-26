"use client";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "@/lib/validations/contact";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  return (
    <section className="font-special ">
      <form className="max-w-3xl mx-auto border rounded border-[var(--c-primary)] p-2 flex flex-col items-center justify-center gap-2 ">
        <div className="w-full">
          <label className="">Imię :</label>
          <input
            className=""
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="w-full">
          <label className="">Email :</label>
          <input
            className=""
            {...register("email")}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="w-full">
          <textarea
            className="border rounded indent-2 w-full p-1"
            placeholder="Tu wpisz wiadomość..."
            rows={5}
            {...register("message")}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className=" border rounded p-2 "
        >
          {isSubmitting ? "Wysyłanie" : "Wyslij"}
        </button>
      </form>
    </section>
  );
};
