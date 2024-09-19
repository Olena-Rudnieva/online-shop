"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Thumbs } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

interface CarouselProps<T> {
  items: T[];
  renderSlide: (item: T) => JSX.Element;
  className?: string;
}

export const Carousel = <T,>({
  items,
  renderSlide,
  className = "",
}: CarouselProps<T>) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="flex items-center mt-4 gap-2 w-full">
      <button
        className="text-gray-500 hover:text-black"
        onClick={() => thumbsSwiper?.slidePrev()}
      >
        <IoIosArrowBack size={20} />
      </button>

      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
        watchSlidesProgress
        modules={[Navigation, Thumbs]}
        className={`w-[500px] ${className}`}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderSlide(item)}</SwiperSlide>
        ))}
      </Swiper>

      <button
        className="text-gray-500 hover:text-black"
        onClick={() => thumbsSwiper?.slideNext()}
      >
        <IoIosArrowForward size={20} />
      </button>
    </div>
  );
};
