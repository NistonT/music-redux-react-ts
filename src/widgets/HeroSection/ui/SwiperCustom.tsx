import { mainSwiperImage } from "@/shared/constants";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export const SwiperCustom = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      className="h-[595px]"
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      allowTouchMove={false}
    >
      {mainSwiperImage.map((src) => (
        <SwiperSlide key={src}>
          <div className="h-full w-full flex items-center justify-center">
            <img src={src} alt={src} className="w-full h-full object-cover rounded-2xl" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
