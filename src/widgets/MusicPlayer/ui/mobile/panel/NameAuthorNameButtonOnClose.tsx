import { RootState } from "@/app/store/store";
import { authors } from "@/shared/constants/author";
import { X } from "lucide-react";
import { useSelector } from "react-redux";

type Props = {
  onClose: () => void;
};

export const NameAuthorNameButtonOnClose = ({ onClose }: Props) => {
  const currentTrack = useSelector((state: RootState) => state.player.currentTrack);

  const authorName = authors.find((author) => author.id === currentTrack?.author)?.name || "Unknown";

  return (
    <div className="p-4 pt-8 pb-2 relative">
      <div className="text-center">
        <h2 className="text-xl font-bold truncate">{currentTrack?.name}</h2>
        <p className="text-sm text-white/70 mt-1">{authorName}</p>
      </div>
      <button onClick={onClose} className="absolute top-4 right-4  rounded-full hover:bg-white/10 transition" aria-label="Close player">
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};
