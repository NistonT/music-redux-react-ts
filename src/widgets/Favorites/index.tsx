import type { RootState } from "@/app/store/store";
import { TrackField } from "@/features/track/ui/TrackField";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const Favorites = () => {
  const trackListFavorites = useSelector((state: RootState) => state.favorite.trackList);

  const trackList = useMemo(() => trackListFavorites.map((t) => <TrackField track={t} />), [trackListFavorites]);

  return <div>{trackListFavorites.length > 0 ? trackList : <div>Пусто</div>}</div>;
};
