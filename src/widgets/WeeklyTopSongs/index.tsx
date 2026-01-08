import type { RootState } from "@/app/store/store";
import { play } from "@/entities/player/store/playerSlice";
import { useTrack } from "@/entities/track/hook/useTrack";
import type { ITrack } from "@/shared/types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

dayjs.extend(utc);

export const WeeklyTopSongs = () => {
  // Состояние плейлистов
  // Состояние плеера

  const currentTrackId = useSelector((state: RootState) => state.player.currentTrack?.id);

  const dispatch = useDispatch();

  const playTrack = (track: ITrack) => {
    dispatch(play(track));
  };

  const { tracks } = useTrack();

  return (
    <div>
      <h1 className="text-h1 text-white font-bold">
        Weekly Top <span className="text-main-pink">Songs</span>
      </h1>

      <div>
        {tracks.map((track) => (
          <div
            key={track.id}
            className={`flex justify-between items-center mt-5 group ${track.id === currentTrackId ? "bg-action" : "bg-bg"}`}
            onClick={() => playTrack(track)}
          >
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 overflow-hidden">
                <img className="object-cover w-full h-full rounded-xl" src={track.preview} alt={track.preview} />

                <div></div>
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
              <div className="text-white/50">{dayjs.unix(track.duration).utc().format("m:ss")}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
