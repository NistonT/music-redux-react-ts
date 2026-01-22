import data from "@/shared/data/track.json";
import type { ITrack } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITrackSlice {
  tracks: ITrack[];
}

const initialState: ITrackSlice = {
  tracks: data,
};

export const trackSlice = createSlice({
  name: "trackSlice",
  initialState,
  reducers: {
    addTrack(state, action: PayloadAction<ITrack>) {
      state.tracks.push(action.payload);
    },
    addTracks(state, action: PayloadAction<ITrack[]>) {
      state.tracks.push(...action.payload);
    },
  },
});

export const { addTrack, addTracks } = trackSlice.actions;
export default trackSlice.reducer;
