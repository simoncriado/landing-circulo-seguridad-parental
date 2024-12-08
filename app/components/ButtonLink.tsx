import Link from "next/link";
import type { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps {
  text: string;
  href: string;
  external?: boolean;
}

export function ButtonLink({
  text,
  className,
  href,
  external,
}: IButtonProps & HTMLProps<HTMLButtonElement>) {
  return (
    <Link
      className={twMerge(
        "p-3 flex justify-center rounded-md w-full h-fit md:max-w-[312px]",
        "bg-[#009d94]",
        "focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#007d77]",
        "hover:bg-[#007d77]",
        "active:bg-[#006963] active:outline-none",
        className
      )}
      href={href}
      target={external ? "_blank" : ""}
    >
      <span className={twMerge("button select-none text-white")}>{text}</span>
    </Link>
  );
}
