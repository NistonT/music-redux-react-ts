import type { RootState } from "@/app/store/store";
import { authors } from "@/shared/constants/author";
import { useSelector } from "react-redux";

export const ImageNameAuthor = () => {
  const currentTrack = useSelector((state: RootState) => state.player.currentTrack);

  const authorName = authors.find((author) => author.id === currentTrack?.author)?.name || "Unknown";

  if (!currentTrack) return;

  return (
    <div className="flex items-center gap-5 p-2">
      <div className="w-20 h-20">
        <img className="w-full h-full object-contain rounded-xl select-none" src={`images/songs/${currentTrack?.img}`} alt={currentTrack?.img} />
      </div>
      <div className="flex flex-col font-mono">
        <div>{currentTrack?.name}</div>
        <div>{authorName}</div>
      </div>
    </div>
  );
};
