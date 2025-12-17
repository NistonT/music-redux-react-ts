import { useTrack } from "@/entities/track/hook/useTrack";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Heart } from "lucide-react";

dayjs.extend(utc);

export const WeeklyTopSongs = () => {
  // Состояние плейлистов
  // Состояние плеера

  const { tracks } = useTrack();

  return (
    <div>
      <h1 className="text-h1 text-white font-bold">
        Weekly Top <span className="text-main-pink">Songs</span>
      </h1>

      <div>
        {tracks.map((track) => (
          <div key={track.id} className="flex justify-between items-center mt-5">
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 overflow-hidden">
                <img className="object-cover w-full h-full rounded-xl" src={track.preview} alt={track.preview} />
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
