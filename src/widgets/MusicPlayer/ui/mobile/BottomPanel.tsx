import type { RootState } from "@/app/store/store";
import { openPanelMobile } from "@/features/leftBar/store/slice";
import { authors } from "@/shared/constants/author";
import { Pause, Play } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  toggle: () => void;
  duration: number;
  onSeek: (value: number) => void;
};

export const BottomPanel = ({ toggle, duration, onSeek }: Props) => {
  const currentTrack = useSelector((state: RootState) => state.player.currentTrack);
  const currentTime = useSelector((state: RootState) => state.player.currentTime);
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);
  const progress = useSelector((state: RootState) => state.player.progress);

  const dispatch = useDispatch();

  const openPanel = () => {
    dispatch(openPanelMobile());
  };

  const authorName = authors.find((author) => author.id === currentTrack?.author)?.name || "Unknown";

  if (!currentTrack) return;

  return (
    <div>
      <div className="flex items-center gap-4 relative">
        <div className="w-20 h-20 min-w-20 p-2">
          <img className="w-full h-full object-contain rounded-xl select-none" src={`/images/songs/${currentTrack?.img}`} alt={currentTrack?.img} />
        </div>
        <div className="flex flex-col font-mono overflow-hidden w-full max-w-6/10">
          <div className="text-lg font-semibold truncate">{currentTrack?.name}</div>
          <div className="text-base text-white/80 truncate">{authorName}</div>
        </div>

        <div className="fixed flex justify-end w-full">
          <div onClick={toggle} className="cursor-pointer w-12 h-12 flex items-center justify-center">
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
          </div>
        </div>

        <div className="w-full h-full absolute z-50 max-w-8/10" onClick={openPanel} />
      </div>

      <div className="flex w-full items-center">
        <div className="w-full">
          <div className="absolute z-30 top-0 left-0 h-full rounded bg-red" style={{ width: progress }} />
          <input className="w-full" value={currentTime} type="range" min={0} max={duration!} onChange={(e) => onSeek(+e.target.value)} />
        </div>
      </div>
    </div>
  );
};
