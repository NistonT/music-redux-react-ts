import { FAVORITES_LIST } from "@/shared/constants/localstorage";
import type { ITrack } from "@/shared/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavoriteSlice {
  trackList: ITrack[];
}

const initialState: IFavoriteSlice = {
  trackList: JSON.parse(localStorage.getItem(FAVORITES_LIST) || "[]"),
};

export const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    addTrack(state, action: PayloadAction<{ track: ITrack }>) {
      const exists = state.trackList.some((t) => t.id === action.payload.track.id);

      if (!exists) {
        state.trackList?.push(action.payload.track);
      }
    },
    deleteTrack(state, action: PayloadAction<{ id: number }>) {
      state.trackList = state.trackList.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { addTrack, deleteTrack } = favoriteSlice.actions;
export default favoriteSlice.reducer;
