import type { RootState } from "@/app/store/store";
import { useFavoriteTrack } from "@/features/favorite/lib/hooks/useFavoriteTrack";
import { play, setTrack } from "@/features/player/store/slice";
import { authors } from "@/shared/constants/author";
import type { ITrack } from "@/shared/model/types";
import { ButtonFavorite, TrackDuration } from "@/shared/ui";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Pause, Play } from "lucide-react";
import { memo } from "react";
import { useSelector } from "react-redux";
import { useAudioDuration } from "../lib/hooks/useAudioDuration";

dayjs.extend(utc);

type Props = {
  track: ITrack;
};

export const TrackField = memo(({ track }: Props) => {
  const duration = useAudioDuration(`/songs/${track.file}`);

  const currentTrackId = useSelector((state: RootState) => state.player.currentTrack?.id);
  const currentTime = useSelector((state: RootState) => state.player.currentTime);
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);
  const { isFavorite, handleFavorite, dispatch } = useFavoriteTrack(track);

  const handlePlayTrack = (track: ITrack) => {
    dispatch(setTrack({ track }));
    dispatch(play());
  };

  return (
    <div
      onClick={() => handlePlayTrack(track)}
      className={`flex justify-between items-center px-4 p-2 cursor-pointer hover:bg-bg-active rounded-xl group ${currentTrackId === track.id && "bg-bg-active"}`}
    >
      <div className="flex items-center gap-2">
        <div className="w-14 h-14 relative">
          <img className="w-full h-full object-contain rounded-xl select-none" src={`/images/songs/${track.img}`} alt={track.img} />

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 z-20">
            {isPlaying && currentTrackId === track.id ? <Pause className="w-full h-full" /> : <Play className="w-full h-full" />}
          </div>

          <div className="absolute w-full h-full object-contain rounded-xl bg-bg/50 z-10 opacity-0 group-hover:opacity-100 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="flex flex-col font-mono">
          <div>{track.name}</div>
          <div>{authors.find((author) => author.id === track.author)?.name || "Unknown"}</div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className={`opacity-0 group-hover:opacity-100 ${track.id === currentTrackId && "opacity-100"}`}>
          <ButtonFavorite isFavorite={isFavorite} onClick={handleFavorite} />
        </div>
        <TrackDuration duration={currentTrackId === track.id ? currentTime : duration!} />
      </div>
    </div>
  );
});
