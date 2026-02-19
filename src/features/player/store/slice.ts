import { tracks } from "@/shared/constants/tracks";
import type { ITrack, TypeNextPrev } from "@/shared/model/types";
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

    close(state) {
      state.isPlaying = false;
      state.currentTrack = null;
      state.currentTime = 0;
      state.progress = 0;
    },

    togglePlayPause(state) {
      state.isPlaying = !state.isPlaying;
    },

    seek(state, action: PayloadAction<{ time: number; duration?: number }>) {
      state.currentTime = action.payload.time;
      state.progress = (action.payload.time / (action.payload.duration || 1)) * 100;
    },

    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },

    changeTrack(state, action: PayloadAction<{ type: TypeNextPrev }>) {
      if (!state.currentTrack) return;

      const currentIndex = tracks.findIndex((t) => t.id === state.currentTrack?.id);

      if (currentIndex === -1) return;

      const nextIndex = action.payload.type === "next" ? (currentIndex + 1) % tracks.length : (currentIndex - 1 + tracks.length) % tracks.length;

      state.currentTrack = tracks[nextIndex];
      state.isPlaying = true;
      state.progress = 0;
      state.currentTime = 0;
    },
  },
});

export const { setTrack, play, stop, seek, togglePlayPause, setVolume, changeTrack, close } = playerSlice.actions;
export default playerSlice.reducer;
