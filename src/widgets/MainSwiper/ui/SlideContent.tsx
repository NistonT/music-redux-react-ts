import { play, setTrack } from "@/features/player/store/slice";
import { authors } from "@/shared/constants/author";
import type { ITrack } from "@/shared/model/types";
import { ButtonSwiper, TextHeader } from "@/shared/ui";
import { useDispatch } from "react-redux";
type Props = {
  track: ITrack;
};

export const SlideContent = ({ track }: Props) => {
  const dispatch = useDispatch();

  const handlePlayTrack = (track: ITrack) => {
    dispatch(setTrack({ track }));
    dispatch(play());
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <img src={`images/songs/${track.img}`} alt={track.img} className="w-full h-full object-cover object-center" />
      <div className="absolute z-20 top-0 left-0 p-10 flex flex-col justify-between gap-10 w-full h-full">
        <div>
          <TextHeader>LATEST RELEASE</TextHeader>
          <div className="mt-2 bg-bg w-4/12 p-4 flex flex-col gap-2">
            <h2 className="text-4xl">{track.name}</h2>
            <p className="text-2xl">{authors.find((author) => author.id === track.author)?.name || "Unknown"}</p>
          </div>
        </div>
        <div>
          <ButtonSwiper onClick={() => handlePlayTrack(track)}>Go to music</ButtonSwiper>
        </div>
      </div>
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-bg/25" />
    </div>
  );
};
