import type { RootState } from "@/app/store/store";
import { VOLUME_PLAYER } from "@/shared/constants/localstorage";
import { Volume1, Volume2, VolumeX } from "lucide-react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

type Props = {
  onVolume: (value: number) => void;
};

export const VolumeControl = ({ onVolume }: Props) => {
  const volume = useSelector((state: RootState) => state.player.volume);

  const volumeChange = () => {
    if (volume === 0) {
      onVolume(50);
    } else {
      onVolume(0);
    }
  };

  useEffect(() => {
    if (localStorage.getItem(VOLUME_PLAYER)) {
      onVolume(Number(localStorage.getItem(VOLUME_PLAYER)));
    }
  }, [onVolume]);

  return (
    <div className="flex items-center gap-2 w-full pb-4">
      <button onClick={volumeChange} className="p-1.5">
        {volume === 0 ? <VolumeX /> : volume <= 50 ? <Volume1 /> : <Volume2 />}
      </button>
      <div className="w-full">
        <input type="range" min="0" max="100" value={volume} onChange={(e) => onVolume(Number(e.target.value))} className="w-full accent-white" />
      </div>
    </div>
  );
};
