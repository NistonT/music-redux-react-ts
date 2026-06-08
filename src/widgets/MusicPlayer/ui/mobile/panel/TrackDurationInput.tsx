import { RootState } from "@/app/store/store";
import { TrackDuration } from "@/shared/ui";
import { useSelector } from "react-redux";

type Props = {
  duration: number;
  onSeek: (value: number) => void;
};

export const TrackDurationInput = ({ duration, onSeek }: Props) => {
  const currentTime = useSelector((state: RootState) => state.player.currentTime);
  const progress = useSelector((state: RootState) => state.player.progress);

  return (
    <div className="w-full max-w-md px-2 mb-8">
      <div className="flex items-center justify-between text-xs mb-1">
        <TrackDuration duration={currentTime} />
        <TrackDuration duration={duration!} />
      </div>
      <div className="w-full">
        <div className="absolute z-30 top-0 left-0 h-full rounded bg-red" style={{ width: progress }} />
        <input className="" value={currentTime} type="range" min={0} max={duration!} onChange={(e) => onSeek(+e.target.value)} />
      </div>
    </div>
  );
};
