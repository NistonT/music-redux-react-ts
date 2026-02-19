import type { RootState } from "@/app/store/store";
import { Volume1, Volume2, VolumeX } from "lucide-react";
import { useSelector } from "react-redux";

type Props = {
  onVolume: (value: number) => void;
};

export const VolumeControl = ({ onVolume }: Props) => {
  const volume = useSelector((state: RootState) => state.player.volume);

  const volumeChange = () => {
    if (volume === 0) {
      onVolume(100);
    } else {
      onVolume(0);
    }
  };

  return (
    <div className="flex items-center gap-2.5">
      <div onClick={volumeChange} className="cursor-pointer">
        {volume === 0 ? <VolumeX /> : volume <= 50 ? <Volume1 /> : <Volume2 />}
      </div>
      <div>
        <input type="range" min={0} max={100} value={volume} onChange={(e) => onVolume(+e.target.value)} />
      </div>
    </div>
  );
};
