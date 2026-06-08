import { useAudioTrack } from "@/features/track/lib/hooks/useAudioTrack";
import { useIsMobile } from "@/shared/lib/hooks/useIsMobile";
import { PropsWithChildren } from "react";
import { MusicPlayerDesktop, MusicPlayerMobile } from "./ui";

export const MusicPlayer = ({ children }: PropsWithChildren) => {
  const { audioRef, duration, onSeek, toggle, onVolume, onChangeTrack, onClose, toggleRepeat, toggleRandom, onTrackEnd } = useAudioTrack();

  const isMobile = useIsMobile();

  return (
    <div>
      <div>{children}</div>
      {!isMobile ? (
        <MusicPlayerDesktop
          duration={duration!}
          onSeek={onSeek}
          onChangeTrack={onChangeTrack}
          toggle={toggle}
          toggleRepeat={toggleRepeat}
          toggleRandom={toggleRandom}
          onVolume={onVolume}
          onClose={onClose}
          audioRef={audioRef}
          onTrackEnd={onTrackEnd}
        />
      ) : (
        <MusicPlayerMobile
          duration={duration!}
          onSeek={onSeek}
          onChangeTrack={onChangeTrack}
          toggle={toggle}
          toggleRepeat={toggleRepeat}
          toggleRandom={toggleRandom}
          onVolume={onVolume}
          onClose={onClose}
          audioRef={audioRef}
          onTrackEnd={onTrackEnd}
        />
      )}
    </div>
  );
};
