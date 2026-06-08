import { RootState } from "@/app/store/store";
import { closePanelMobile } from "@/features/leftBar/store/slice";
import { seek } from "@/features/player/store/slice";
import { authors } from "@/shared/constants/author";
import { VOLUME_PLAYER } from "@/shared/constants/localstorage";
import type { TypeNextPrev } from "@/shared/model/types";
import { ButtonFavorite, TrackDuration } from "@/shared/ui";
import { Pause, Play, Repeat1, Shuffle, SkipBack, SkipForward, Volume1, Volume2, VolumeX, X } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BottomPanel } from "./mobile";

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
  const currentTime = useSelector((state: RootState) => state.player.currentTime);
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);
  const progress = useSelector((state: RootState) => state.player.progress);
  const volume = useSelector((state: RootState) => state.player.volume);
  const isRepeat = useSelector((state: RootState) => state.player.isRepeat);
  const isRandom = useSelector((state: RootState) => state.player.isRandom);

  const dispatch = useDispatch();

  const closePanel = () => {
    dispatch(closePanelMobile());
  };

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

  const authorName = authors.find((author) => author.id === currentTrack?.author)?.name || "Unknown";

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
              <button className="w-8/10 h-20 absolute top-0 z-10" onClick={closePanel} />
              <button className="w-full h-30 absolute -top-30 z-10" onClick={closePanel} />

              <div className="text-white h-full flex flex-col overflow-hidden">
                <div className="p-4 pt-8 pb-2 relative">
                  <div className="text-center">
                    <h2 className="text-xl font-bold truncate">{currentTrack?.name}</h2>
                    <p className="text-sm text-white/70 mt-1">{authorName}</p>
                  </div>
                  <button onClick={onClose} className="absolute top-4 right-4  rounded-full hover:bg-white/10 transition" aria-label="Close player">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-start px-6 py-4 overflow-y-auto">
                  <div className="w-52 h-52 rounded-2xl overflow-hidden shadow-xl mb-6">
                    <img
                      src={`/images/songs/${currentTrack?.img || "fallback.jpg"}`}
                      alt={currentTrack?.name || "Track cover"}
                      className="w-full h-full object-cover"
                    />
                  </div>

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
                </div>

                <div className="bg-bg/90 backdrop-blur-sm p-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-8 mb-5">
                    <button
                      onClick={() => onChangeTrack("prev")}
                      className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
                      aria-label="Previous track"
                    >
                      <SkipBack className="w-6 h-6 text-white/80" />
                    </button>
                    <button
                      onClick={toggle}
                      className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-bg hover:scale-105 transition"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                    </button>
                    <button
                      onClick={() => onChangeTrack("next")}
                      className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
                      aria-label="Next track"
                    >
                      <SkipForward className="w-6 h-6 text-white/80" />
                    </button>
                  </div>

                  <div className="flex flex-col items-center justify-between">
                    <div className="flex items-center gap-5">
                      <button
                        onClick={toggleRepeat}
                        className={`p-2 rounded ${isRepeat ? "text-white" : "text-white/50"} hover:text-white transition`}
                        aria-label={isRepeat ? "Repeat is on" : "Repeat"}
                      >
                        <Repeat1 className="w-10 h-10" />
                      </button>
                      <button
                        onClick={toggleRandom}
                        className={`p-2 rounded ${isRandom ? "text-white" : "text-white/50"} hover:text-white transition`}
                        aria-label={isRandom ? "Shuffle is on" : "Shuffle"}
                      >
                        <Shuffle className="w-10 h-10" />
                      </button>
                      <button className="p-2 text-white/80 hover:text-white transition">
                        <ButtonFavorite isFavorite={false} className="w-10 h-10" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 w-full pb-4">
                      <button onClick={volumeChange} className="p-1.5">
                        {volume === 0 ? <VolumeX /> : volume <= 50 ? <Volume1 /> : <Volume2 />}
                      </button>
                      <div className="w-full">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={volume}
                          onChange={(e) => onVolume(Number(e.target.value))}
                          className="w-full accent-white"
                        />
                      </div>
                    </div>
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
