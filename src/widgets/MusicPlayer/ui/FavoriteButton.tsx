import { RootState } from "@/app/store/store";
import { useFavoriteTrack } from "@/features/favorite/lib/hooks/useFavoriteTrack";
import { ButtonFavorite } from "@/shared/ui";
import { useSelector } from "react-redux";

export const FavoriteButton = () => {
  const currentTrack = useSelector((state: RootState) => state.player.currentTrack);
  const { isFavorite, handleFavorite } = useFavoriteTrack(currentTrack!);

  return (
    <div>
      <ButtonFavorite isFavorite={isFavorite} onClick={handleFavorite} />
    </div>
  );
};
