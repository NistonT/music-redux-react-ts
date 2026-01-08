import type { ITrack } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPlayerSlice {
  isPlaying: boolean;
  currentTrack: ITrack | null;
  volume: number;
}

const initialState: IPlayerSlice = {
  isPlaying: false,
  currentTrack: null,
  volume: 0,
};

export const playerSlice = createSlice({
  name: "playerSlice",
  initialState,
  reducers: {
    play(state, action: PayloadAction<ITrack>) {
      if (state.currentTrack?.id === action.payload.id) {
        state.isPlaying = !state.isPlaying;
      } else {
        state.isPlaying = true;
        state.currentTrack = action.payload;
      }
    },

    volume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
  },
});

export const { play, volume } = playerSlice.actions;
export default playerSlice.reducer;
