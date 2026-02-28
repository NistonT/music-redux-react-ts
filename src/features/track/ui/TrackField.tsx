import type { RootState } from "@/app/store/store";
import { play, setTrack } from "@/features/player/store/slice";
import { authors } from "@/shared/constants/author";
import type { ITrack } from "@/shared/model/types";
import { TrackDuration } from "@/shared/ui";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Pause, Play } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useAudioDuration } from "../lib/hooks/useAudioDuration";

dayjs.extend(utc);

type Props = {
  track: ITrack;
};

export const TrackField = ({ track }: Props) => {
  const duration = useAudioDuration(`/songs/${track.file}`);

  const currentTrackId = useSelector((state: RootState) => state.player.currentTrack?.id);
  const currentTime = useSelector((state: RootState) => state.player.currentTime);
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);

  const dispatch = useDispatch();

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
            {isPlaying ? <Pause className="w-full h-full" /> : <Play className="w-full h-full" />}
          </div>

          <div className="absolute w-full h-full object-contain rounded-xl bg-bg/50 z-10 opacity-0 group-hover:opacity-100 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="flex flex-col font-mono">
          <div>{track.name}</div>
          <div>{authors.find((author) => author.id === track.author)?.name || "Unknown"}</div>
        </div>
      </div>
      <TrackDuration duration={currentTrackId === track.id ? currentTime : duration!} />
    </div>
  );
};
