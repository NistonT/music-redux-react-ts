import type { RootState } from "@/app/store/store";
import { useFavoriteTrack } from "@/features/favorite/lib/hooks/useFavoriteTrack";
import { ButtonFavorite } from "@/shared/ui";
import { Repeat1, Shuffle } from "lucide-react";
import { useSelector } from "react-redux";

type Props = {
  toggleRepeat: () => void;
  toggleRandom: () => void;
};

export const ButtonsRepeatRandomFavorite = ({ toggleRepeat, toggleRandom }: Props) => {
  const isRepeat = useSelector((state: RootState) => state.player.isRepeat);
  const isRandom = useSelector((state: RootState) => state.player.isRandom);
  const currentTrack = useSelector((state: RootState) => state.player.currentTrack);
  const { isFavorite, handleFavorite } = useFavoriteTrack(currentTrack!);

  return (
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
        <ButtonFavorite isFavorite={isFavorite} onClick={handleFavorite} className="w-10 h-10" />
      </button>
    </div>
  );
};
