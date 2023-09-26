import { ComponentProps } from "react";

export function DeleteIcon({ className, ...rest }: ComponentProps<"svg">) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M8.46 1L1.00053 8.46M1 1L8.45947 8.46"
        stroke="black"
        strokeWidth="1.125"
      />
    </svg>
  );
}
