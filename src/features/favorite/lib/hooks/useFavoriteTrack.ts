import type { ITrack } from "@/shared/model/types";
import { useDispatch, useSelector } from "react-redux";
import { selectIsFavorite } from "../../store/selectors";
import { addTrack, deleteTrack } from "../../store/slice";

export const useFavoriteTrack = (track: ITrack) => {
  const isFavorite = useSelector(selectIsFavorite(track.id));

  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteTrack({ id: track.id }));
    } else {
      dispatch(addTrack({ track }));
    }
  };

  return { isFavorite, handleFavorite, dispatch };
};
