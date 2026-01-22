import type { RootState } from "@/app/store/store";
import { panel, play } from "@/entities/player/store/playerSlice";
import { useTrack } from "@/entities/track/hook/useTrack";
import type { ITrack } from "@/shared/types";
import { TrackDuration } from "@/shared/ui";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Heart, Pause, Play } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

dayjs.extend(utc);

export const WeeklyTopSongs = () => {
  // Состояние плейлистов
  // Состояние плеера

  const currentTrack = useSelector((state: RootState) => state.player.currentTrack);

  const dispatch = useDispatch();

  const playTrack = (track: ITrack) => {
    dispatch(panel(true));
    dispatch(play(track));
  };

  const { tracks } = useTrack();

  useEffect(() => {
    if (currentTrack?.id === "") {
      dispatch(panel(false));
    }
  }, [currentTrack, dispatch]);

  return (
    <div>
      <h1 className="text-h1 text-white font-bold">
        Weekly Top <span className="text-main-pink">Songs</span>
      </h1>

      <div>
        {tracks.map((track) => (
          <div
            key={track.id}
            className={`flex justify-between items-center mt-5 group cursor-pointer ${track.id === currentTrack?.id ? "bg-action" : "bg-bg"}`}
            onClick={() => playTrack(track)}
          >
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 overflow-hidden rounded-xl relative group">
                <img className="object-cover w-full h-full" src={track.preview} alt={track.name} />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />

                {track.id === currentTrack?.id ? (
                  <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Pause className="text-white" />
                  </div>
                ) : (
                  <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Play className="text-white" />
                  </div>
                )}
              </div>
              <div>
                <div className="text-white">{track.name}</div>
                <div className="text-white/50">{track.artist.name}</div>
              </div>
            </div>
            <div className="flex column gap-2 items-center">
              <div>
                <Heart className="text-white/50" />
              </div>
              <TrackDuration duration={track.duration} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
