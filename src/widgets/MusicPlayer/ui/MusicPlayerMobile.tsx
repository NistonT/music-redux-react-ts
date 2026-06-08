import { RootState } from "@/app/store/store";
import { seek } from "@/features/player/store/slice";
import type { TypeNextPrev } from "@/shared/model/types";
import { useDispatch, useSelector } from "react-redux";
import { BottomPanel } from "./mobile";
import {
  ButtonOverflowClosePanel,
  ButtonsPrevToggleNext,
  ButtonsRepeatRandomFavorite,
  NameAuthorNameButtonOnClose,
  TrackDurationInput,
  VolumeControl,
} from "./mobile/panel/index";

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

export const MusicPlayerMobile = ({
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
  const isPanel = useSelector((state: RootState) => state.leftBar.isPanelMobile);
  const currentTrack = useSelector((state: RootState) => state.player.currentTrack);

  const dispatch = useDispatch();

  if (!currentTrack) return;

  const seekChange = (time: number, duration?: number) => {
    dispatch(seek({ time, duration }));
  };

  return (
    <>
      {currentTrack && (
        <>
          {isPanel ? (
            <div className="fixed inset-x-0 bottom-0 h-8/10 bg-bg border-t-2 border-white z-50 md:hidden">
              <ButtonOverflowClosePanel />

              <div className="text-white h-full flex flex-col overflow-hidden">
                <NameAuthorNameButtonOnClose onClose={onClose} />

                <div className="flex-1 flex flex-col items-center justify-start px-6 py-4 overflow-y-auto">
                  <div className="w-52 h-52 rounded-2xl overflow-hidden shadow-xl mb-6">
                    <img
                      src={`/images/songs/${currentTrack?.img || "fallback.jpg"}`}
                      alt={currentTrack?.name || "Track cover"}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <TrackDurationInput duration={duration} onSeek={onSeek} />
                </div>

                <div className="bg-bg/90 backdrop-blur-sm p-4 border-t border-white/10">
                  <ButtonsPrevToggleNext onChangeTrack={onChangeTrack} toggle={toggle} />

                  <div className="flex flex-col items-center justify-between">
                    <ButtonsRepeatRandomFavorite toggleRepeat={toggleRepeat} toggleRandom={toggleRandom} />

                    <VolumeControl onVolume={onVolume} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="fixed bottom-0 left-0 w-full bg-bg border-t-2 border-white z-50 md:hidden">
              <div className="text-white w-full relative">
                <BottomPanel toggle={toggle} duration={duration} onSeek={onSeek} />
              </div>
            </div>
          )}

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
        </>
      )}
    </>
  );
};
