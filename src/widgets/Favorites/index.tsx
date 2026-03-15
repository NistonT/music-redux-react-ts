import type { RootState } from "@/app/store/store";
import { setTracksList } from "@/features/player/store/slice";
import { TrackField } from "@/features/track/ui/TrackField";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchWithHistory } from "../SearchWithHistory";

export const Favorites = () => {
  const [search, setSearch] = useState<string>("");

  const debounce = useDebounce(search);

  const trackListFavorites = useSelector((state: RootState) => state.favorite.trackList);

  const filtered = useMemo(
    () => trackListFavorites.filter((track) => track.name.toLocaleLowerCase().includes(debounce.toLocaleLowerCase())),
    [debounce, trackListFavorites],
  );

  const trackList = useMemo(() => filtered.map((t) => <TrackField key={t.id} track={t} />), [filtered]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTracksList(filtered));
  }, [filtered, dispatch]);

  return (
    <div>
      <SearchWithHistory value={search} setValue={setSearch} />
      <div>{filtered.length > 0 ? trackList : <div>Пусто</div>}</div>
    </div>
  );
};
