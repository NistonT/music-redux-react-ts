import { RootState } from "@/app/store/store";
import { seek } from "@/features/player/store/slice";
import type { TypeNextPrev } from "@/shared/model/types";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { ControlCenter, FavoriteButton, ImageNameAuthor, VolumeControl } from "./desktop";

type Props = {
  duration: number;
  onSeek: (value: number) => void;
  onChangeTrack: (type: TypeNextPrev) => void;
  toggle: () => void;
  toggleRepeat: () => void;
  toggleRandom: () => void;
  onVolume: (value: number) => void;
  onClose: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;

  onTrackEnd: () => void;
};

export const MusicPlayerDesktop = ({
  duration,
  onSeek,
  onChangeTrack,
  toggle,
  toggleRepeat,
  toggleRandom,
  onVolume,
  onClose,
  audioRef,

  onTrackEnd,
}: Props) => {
  const currentTrack = useSelector((state: RootState) => state.player.currentTrack);
  const dispatch = useDispatch();

  const seekChange = (time: number, duration?: number) => {
    dispatch(seek({ time, duration }));
  };

  return (
    <>
      {currentTrack && (
        <div className="fixed bottom-0 left-0 w-full bg-bg border-t-2 border-white z-50 hidden md:block">
          <div className="text-white flex items-center justify-between w-full relative">
            {/* Название песни, автор и фотография */}
            <ImageNameAuthor />

            {/* Центр управление трека: запуск/стоп и промотка */}
            <ControlCenter
              duration={duration!}
              onSeek={onSeek}
              toggle={toggle}
              onChangeTrack={onChangeTrack}
              toggleRepeat={toggleRepeat}
              toggleRandom={toggleRandom}
            />

            {/* Управление громкости */}
            <div className="flex relative right-5 gap-5 items-center">
              <FavoriteButton />
              <VolumeControl onVolume={onVolume} />
              <X onClick={onClose} />
            </div>

            <audio
              key={currentTrack.id}
              ref={audioRef}
              src={`/songs/${currentTrack.file}`}
              onTimeUpdate={(e) => {
                const currentTrack = Math.floor(e.currentTarget.currentTime);
                seekChange(currentTrack, duration!);
              }}
              autoPlay
              onEnded={onTrackEnd}
            />
          </div>
        </div>
      )}
    </>
  );
};
