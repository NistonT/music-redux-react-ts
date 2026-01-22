import type { RootState } from "@/app/store/store";
import { seek } from "@/entities/player/store/playerSlice";
import { TrackDuration } from "@/shared/ui";
import { Pause, Play } from "lucide-react";
import { PropsWithChildren, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export const PlayerMusic = ({ children }: PropsWithChildren) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const isPlayer = useSelector((state: RootState) => state.player.isPlaying);
  const isPanel = useSelector((state: RootState) => state.player.isPanel);
  const currentTrack = useSelector((state: RootState) => state.player.currentTrack);
  const currentTime = useSelector((state: RootState) => state.player.currentTime);

  const dispatch = useDispatch();

  const handleSeek = (time: number) => {
    dispatch(seek(time));
  };

  return (
    <div>
      {children}
      {isPanel && (
        <div className="fixed z-20 bottom-0 bg-bg w-full">
          <div>
            {isPlayer ? (
              <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Pause className="text-white" />
              </div>
            ) : (
              <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Play className="text-white" />
              </div>
            )}
          </div>
          <div>
            <input type="range" min={0} max={currentTrack?.duration} value={currentTime} onChange={(e) => handleSeek(+e.target.value)} />
            <TrackDuration duration={currentTrack!.duration} />
          </div>
          <div className="text-red text-5xl">{currentTrack?.name}</div>
          <input type="range" className="bg-red" /> // audio
          <audio ref={audioRef} src={currentTrack?.file} controls></audio>
        </div>
      )}
    </div>
  );
};
