import type { RootState } from "@/app/store/store";
import { seek, stop } from "@/features/player/store/slice";
import { useAudioTrack } from "@/features/track/lib/hooks/useAudioTrack";
import { TrackDuration } from "@/shared/ui";
import { PropsWithChildren } from "react";
import { useDispatch, useSelector } from "react-redux";

export const MusicPlayer = ({ children }: PropsWithChildren) => {
  const { audioRef, onSeek, duration, onVolume } = useAudioTrack();

  const currentTrack = useSelector((state: RootState) => state.player.currentTrack);
  const currentTime = useSelector((state: RootState) => state.player.currentTime);
  const volume = useSelector((state: RootState) => state.player.volume);

  const dispatch = useDispatch();

  const seedChange = (time: number, duration?: number) => {
    dispatch(seek({ time, duration }));
  };

  return (
    <div>
      <div>{children}</div>
      {currentTrack && (
        <div className="fixed bottom-0 left-0">
          <div className="text-white">
            <input value={currentTime} type="range" min={0} max={duration!} onChange={(e) => onSeek(+e.target.value)} />
            <TrackDuration duration={duration!} />
            Music
            <div>
              {currentTrack.name} {currentTrack.author}
            </div>
            <div>
              <audio
                ref={audioRef}
                src={`songs/${currentTrack.file}`}
                onTimeUpdate={(e) => {
                  const currentTrack = Math.floor(e.currentTarget.currentTime);
                  seedChange(currentTrack, duration!);
                }}
                autoPlay
                onEnded={() => dispatch(stop())}
              />
            </div>
            <input type="range" min={0} max={100} value={volume} onChange={(e) => onVolume(+e.target.value)} />
          </div>
        </div>
      )}
    </div>
  );
};
