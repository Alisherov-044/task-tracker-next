"use client";
import { ButtonInterface } from "@/interface";

export function Button({ color, variant, children, onClick }: ButtonInterface) {
  return (
    <button
      className={`button ${variant || ""}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
