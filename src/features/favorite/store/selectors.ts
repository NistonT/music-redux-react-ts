import type { RootState } from "@/app/store/store";

export const selectIsFavorite = (id: number | undefined) => (state: RootState) => {
  if (id === undefined) return false;

  return state.favorite.trackList.some((t) => t.id === id);
};
