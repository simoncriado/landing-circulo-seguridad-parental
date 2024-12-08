import { type ReactNode } from "react";
import {
  Swiper as SwiperLib,
  SwiperSlide,
  type SwiperProps,
} from "swiper/react";
// Import Swiper styles
import "swiper/css";

import { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Swiper.module.css";
import { twMerge } from "tailwind-merge";

export function Swiper({
  children,
  className,
  ...props
}: SwiperProps & { children: ReactNode[]; "aria-label": string }) {
  return (
    <div className="">
      <SwiperLib
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={twMerge(styles["swiper"], "-mb-6", className)}
        breakpoints={{
          // When the screen width is 640px or smaller
          640: {
            slidesPerView: 1,
          },
          // When the screen width is 768px or larger
          768: {
            slidesPerView: 2,
          },
          // When the screen width is 1024px or larger
          1024: {
            slidesPerView: 3,
          },
        }}
        {...props}
      >
        {children?.map((child, i) => (
          <SwiperSlide key={`swiper-${props["aria-label"]}-slide-${i}`}>
            {child}
          </SwiperSlide>
        ))}
      </SwiperLib>
    </div>
  );
}
