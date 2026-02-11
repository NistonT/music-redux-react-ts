import type { RootState } from "@/app/store/store";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";

export const MusicPlayer = ({ children }: PropsWithChildren) => {
  const currentTrack = useSelector((state: RootState) => state.player.currentTrack);

  return (
    <div>
      <div>{children}</div>
      {currentTrack && (
        <div className="fixed bottom-0 left-0">
          <div className="text-white">
            <input type="range" />
            Music
            <div>
              {currentTrack.name} {currentTrack.author}
            </div>
            <div>
              <audio controls src={`songs/${currentTrack.file}`}></audio>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
