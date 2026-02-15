import type { ITrack } from "@/shared/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPlayerSlice {
  isPlaying: boolean;
  currentTrack: ITrack | null;
  volume: number;
  currentTime: number;
  progress: number;
}

const initialState: IPlayerSlice = {
  isPlaying: false,
  currentTrack: null,
  volume: 50,
  currentTime: 0,
  progress: 0,
};

export const playerSlice = createSlice({
  name: "playerSlice",
  initialState,
  reducers: {
    setTrack(state, action: PayloadAction<{ track: ITrack }>) {
      state.currentTrack = action.payload.track;
    },

    play(state) {
      state.isPlaying = true;
    },

    stop(state) {
      state.isPlaying = false;
    },

    togglePlayPause(state) {
      state.isPlaying = !state.isPlaying;
    },

    seek(state, action: PayloadAction<{ time: number; duration?: number }>) {
      state.currentTime = action.payload.time;
      state.progress = (action.payload.time / (action.payload.duration || 1)) * 100;
    },
  },
});

export const { setTrack, play, stop, seek, togglePlayPause } = playerSlice.actions;
export default playerSlice.reducer;
