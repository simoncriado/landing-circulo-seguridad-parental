import Star from "../../public/assets/star.svg";

import { HTMLProps, JSX } from "react";
import { twMerge } from "tailwind-merge";

interface ICardReviewsProps {
  author: string;
  date: string;
  numStars: number;
  text: JSX.Element;
}

export default function CardReviews({
  author,
  date,
  numStars,
  text,
  className,
}: ICardReviewsProps & HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "w-[288px] h-full lg:w-full",
        "flex flex-col gap-4 rounded-lg border bg-white p-4",
        "rounded-2",
        className
      )}
    >
      <div className="flex gap-4">
        <div className="grid gap-y-1">
          <p className="font-bold">{author}</p>
          <p className="text-gray-500">{date}</p>
        </div>
      </div>
      <div className="flex gap-x-[6px]">
        {[...Array(numStars)].map((_, i) => (
          <div key={`star-${i}-author-${author}`} className="relative w-4 h-4">
            <Star className={`[&_path]:fill-[#009d94]`}></Star>
          </div>
        ))}
      </div>
      <>{text}</>
    </div>
  );
}
