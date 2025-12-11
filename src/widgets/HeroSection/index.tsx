import { ButtonCustom, InputCustom } from "@/shared/ui";
import { Search } from "lucide-react";
import "swiper/swiper-bundle.css";
import { SwiperCustom } from "./ui";

export const HeroSection = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="max-w-5xl w-full relative">
        <div className="absolute z-20 w-full p-4">
          <div>
            <InputCustom type={"text"} placeholder="Search For Musics, Artists, ..." icon={<Search />} className="w-full" />
          </div>

          <div className="text-main text-white font-extrabold mt-10">
            All the <span className="text-main-pink">Best Songs</span> <br /> in One Place
          </div>
        </div>

        <div className="absolute bottom-4 left-4 z-20 flex gap-4">
          <ButtonCustom type={"button"} className="bg-main-pink text-white">
            Discover now
          </ButtonCustom>
          <ButtonCustom type={"button"} className="bg-transparent border-2 border-main-blue text-main-blue">
            Create Playlist
          </ButtonCustom>
        </div>

        <div className="relative z-0">
          <SwiperCustom />
        </div>

        <div className="absolute z-10 bg-bg/25 top-0 right-0 w-full h-full" />
      </div>
    </div>
  );
};
