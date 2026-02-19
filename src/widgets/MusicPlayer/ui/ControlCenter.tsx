import type { RootState } from "@/app/store/store";
import type { TypeNextPrev } from "@/shared/model/types";
import { TrackDuration } from "@/shared/ui";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useSelector } from "react-redux";

type Props = {
  duration: number;
  onSeek: (value: number) => void;
  onChangeTrack: (type: TypeNextPrev) => void;
  toggle: () => void;
};

export const ControlCenter = ({ duration, onSeek, toggle, onChangeTrack }: Props) => {
  const currentTime = useSelector((state: RootState) => state.player.currentTime);
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);
  const progress = useSelector((state: RootState) => state.player.progress);

  return (
    <div className="w-6/12 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
      <div className="flex mx-auto justify-center w-full gap-2.5">
        <div onClick={() => onChangeTrack("prev")} className="cursor-pointer w-8">
          <SkipBack className="w-full h-full text-white/75" />
        </div>
        <div onClick={toggle} className="cursor-pointer w-10">
          {isPlaying ? <Pause className="w-full h-full" /> : <Play className="w-full h-full" />}
        </div>
        <div onClick={() => onChangeTrack("next")} className="cursor-pointer w-8">
          <SkipForward className="w-full h-full text-white/75" />
        </div>
      </div>
      <div className="flex w-full items-center gap-2.5">
        <TrackDuration duration={currentTime} />
        <div className="w-full">
          <div className="absolute z-30 top-0 left-0 h-full rounded bg-red" style={{ width: progress }} />
          <input className="" value={currentTime} type="range" min={0} max={duration!} onChange={(e) => onSeek(+e.target.value)} />
        </div>
        <TrackDuration duration={duration!} />
      </div>
    </div>
  );
};
