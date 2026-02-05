import { Swiper, SwiperSlide } from "swiper/react";

export const MainSwiper = () => {
  return (
    <div className="text-white select-none w-full mx-auto font-mono">
      <Swiper
        style={{ height: 480 }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center">
            <img src="images/songs/backtofriends.png" alt="backtofriends.png" className="w-full h-full object-cover object-center" />
            <div className="absolute z-10 top-0 left-0">
              <div>Заголовок - Последние новинки</div>
              <div>Кнопка - Слушать</div>
              <div>Затемнение по сторонам</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <img src="images/songs/cureforme.jpg" alt="cureforme.jpg" className="w-full h-full object-cover object-center" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center">
            <img src="images/songs/endofbeginning.png" alt="endofbeginning.png" className="w-full h-full object-cover object-center" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
