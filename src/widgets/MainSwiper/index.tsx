import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideContent } from "./ui";

export const MainSwiper = () => {
  return (
    <div className="text-white select-none w-full mx-auto font-mono">
      <Swiper
        style={{ height: 480 }}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <SlideContent image={"backtofriends.png"} name={"Back to friends"} author={"Sombr"} song={""} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent image={"cureforme.jpg"} name={"Cure For Me"} author={"AURORA"} song={""} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent image={"endofbeginning.png"} name={"End of Beginning"} author={"Djo"} song={""} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
