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
          <SlideContent
            image={"backtofriends.png"}
            name={"Back to friends"}
            author={"Sombr"}
            track={{
              id: 0,
              img: "backtofriends.png",
              name: "Back to of friends",
              author: 0,
              file: "Sombr - Back to friends.mp3",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            image={"cureforme.jpg"}
            name={"Cure For Me"}
            author={"AURORA"}
            track={{
              id: 1,
              img: "cureforme.jpg",
              name: "Cure For Me",
              author: 1,
              file: "AURORA - Cure For Me.mp3",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            image={"endofbeginning.png"}
            name={"End of Beginning"}
            author={"Djo"}
            song={"Djo - End of Beginning.mp3"}
            track={{
              id: 3,
              img: "endofbeginning.png",
              name: "End of Beginning",
              author: 2,
              file: "Djo - End of Beginning.mp3",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
