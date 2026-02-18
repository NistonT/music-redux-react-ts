import type { RootState } from "@/app/store/store";
import { TrackDuration } from "@/shared/ui";
import { Pause, Play } from "lucide-react";
import { useSelector } from "react-redux";

type Props = {
  duration: number;
  onSeek: (value: number) => void;
  toggle: () => void;
};

export const ControlCenter = ({ duration, onSeek, toggle }: Props) => {
  const currentTime = useSelector((state: RootState) => state.player.currentTime);
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);
  const progress = useSelector((state: RootState) => state.player.progress);

  const togglePlaying = () => {
    // При окончение песни, при повторном нажатие на кнопку запуска, воспроизводится заного
    if (currentTime === duration) {
      onSeek(0);
    }
    toggle();
  };

  return (
    <div className="w-6/12 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
      <div onClick={togglePlaying} className="cursor-pointer flex justify-center w-10 mx-auto">
        {isPlaying ? <Pause className="w-full h-full" /> : <Play className="w-full h-full" />}
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
