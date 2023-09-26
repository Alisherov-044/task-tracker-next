"use client";
import { InputInterface } from "@/interface";

export function Input({
  name,
  placeholder,
  register,
  type = "text",
}: InputInterface) {
  return (
    <input
      className="input"
      type={type}
      name={name}
      placeholder={placeholder}
      {...register}
    />
  );
}
