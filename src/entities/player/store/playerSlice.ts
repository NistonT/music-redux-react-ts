import type { ITrack } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPlayerSlice {
  isPlaying: boolean;
  isPanel: boolean;
  currentTrack: ITrack | null;
  currentTime: number;
  volume: number;
  progress: number;
}

const initialState: IPlayerSlice = {
  isPlaying: false,
  isPanel: false,
  currentTrack: null,
  currentTime: 0,
  volume: 0,
  progress: 0,
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

    panel(state, action: PayloadAction<boolean>) {
      state.isPanel = action.payload;
    },

    seek(state, action: PayloadAction<number>) {
      state.currentTime = action.payload;
      state.progress = (action.payload / (state.currentTrack?.duration || 1)) * 100;
    },
  },
});

export const { play, volume, panel, seek } = playerSlice.actions;
export default playerSlice.reducer;
