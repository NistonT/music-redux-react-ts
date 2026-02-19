import type { RootState } from "@/app/store/store";
import { seek } from "@/features/player/store/slice";
import { useAudioTrack } from "@/features/track/lib/hooks/useAudioTrack";
import { PropsWithChildren } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ControlCenter, ImageNameAuthor } from "./ui";
import { VolumeControl } from "./ui/VolumeControl";

export const MusicPlayer = ({ children }: PropsWithChildren) => {
  const { audioRef, duration, onSeek, toggle, onVolume, onChangeTrack } = useAudioTrack();

  const currentTrack = useSelector((state: RootState) => state.player.currentTrack);

  const dispatch = useDispatch();

  const seedChange = (time: number, duration?: number) => {
    dispatch(seek({ time, duration }));
  };

  return (
    <div>
      <div>{children}</div>
      {currentTrack && (
        <div className="fixed bottom-0 left-0 w-full bg-bg border-white border-solid border-t-2">
          <div className="text-white flex items-center justify-between w-full relative">
            {/* Название песни, автор и фотография */}
            <ImageNameAuthor />

            {/* Центр управление трека: запуск/стоп и промотка */}
            <ControlCenter duration={duration!} onSeek={onSeek} toggle={toggle} onChangeTrack={onChangeTrack} />

            {/* Управление громкости */}
            <VolumeControl onVolume={onVolume} />

            <audio
              ref={audioRef}
              src={`songs/${currentTrack.file}`}
              onTimeUpdate={(e) => {
                const currentTrack = Math.floor(e.currentTarget.currentTime);
                seedChange(currentTrack, duration!);
              }}
              autoPlay
              onEnded={() => onChangeTrack("next")}
            />
          </div>
        </div>
      )}
    </div>
  );
};
