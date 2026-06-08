import type { RootState } from "@/app/store/store";
import { TypeNextPrev } from "@/shared/model/types";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useSelector } from "react-redux";

type Props = {
  onChangeTrack: (type: TypeNextPrev) => void;
  toggle: () => void;
};

export const ButtonsPrevToggleNext = ({ onChangeTrack, toggle }: Props) => {
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);

  return (
    <div className="flex items-center justify-center gap-8 mb-5">
      <button
        onClick={() => onChangeTrack("prev")}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
        aria-label="Previous track"
      >
        <SkipBack className="w-6 h-6 text-white/80" />
      </button>
      <button
        onClick={toggle}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-bg hover:scale-105 transition"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
      </button>
      <button
        onClick={() => onChangeTrack("next")}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
        aria-label="Next track"
      >
        <SkipForward className="w-6 h-6 text-white/80" />
      </button>
    </div>
  );
};
