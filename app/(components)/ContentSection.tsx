import React from "react";
import { twMerge } from "tailwind-merge";

interface IContentSection {
  bgClassName?: string;
}

export function ContentSection({
  className,
  children,
  bgClassName,
  ...props
}: IContentSection & React.HTMLProps<HTMLDivElement>) {
  return (
    <section
      className={twMerge(
        "w-full",
        "flex flex-col items-center",
        "relative",
        bgClassName &&
          "before:w-[100vw] before:h-full before:absolute before:top-0 before:left-0 before:-z-10",
        bgClassName
      )}
    >
      <div
        className={twMerge(
          "relative px-4 py-12 md:px-12 md:py-12 xl:px-20 xl:py-12",
          "w-full",
          "max-w-[1281px]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </section>
  );
}
