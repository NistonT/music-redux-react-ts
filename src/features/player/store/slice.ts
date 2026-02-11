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

export const PlayerSlice = createSlice({
  name: "PlayerSlice",
  initialState,
  reducers: {
    play(state, action: PayloadAction<{ track: ITrack }>) {
      state.currentTrack = action.payload.track;
      state.isPlaying = true;
      console.log("Playing", state.currentTrack);
    },

    seek(state, action: PayloadAction<{ time: number; duration?: number }>) {
      state.currentTime = action.payload.time;
      state.progress = (action.payload.time / (action.payload.duration || 1)) * 100;
    },
  },
});
