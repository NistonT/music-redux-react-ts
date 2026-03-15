import { tracks } from "@/shared/constants/tracks";
import type { ITrack, TypeNextPrev } from "@/shared/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPlayerSlice {
  isPlaying: boolean;
  isRepeat: boolean;
  isRandom: boolean;
  currentTrack: ITrack | null;
  volume: number;
  currentTime: number;
  progress: number;
  tracksList: ITrack[];
}

const initialState: IPlayerSlice = {
  isPlaying: false,
  isRepeat: false,
  isRandom: false,
  currentTrack: null,
  volume: 50,
  currentTime: 0,
  progress: 0,
  tracksList: [],
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

    toggleRepeatTrack(state) {
      state.isRepeat = !state.isRepeat;
    },

    toggleRandomTrack(state) {
      state.isRandom = !state.isRandom;
    },

    seek(state, action: PayloadAction<{ time: number; duration?: number }>) {
      state.currentTime = action.payload.time;
      state.progress = (action.payload.time / (action.payload.duration || 1)) * 100;
    },

    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;

      localStorage.setItem("volume-player", action.payload.toString());
    },

    setTracksList(state, action: PayloadAction<ITrack[]>) {
      state.tracksList = action.payload;
    },

    randomTrack(state) {
      if (!state.tracksList?.length) return;
      const randomIndex = Math.floor(Math.random() * state.tracksList.length);
      state.currentTrack = state.tracksList[randomIndex];
      state.currentTime = 0;
      state.isPlaying = true;
    },

    changeTrack(state, action: PayloadAction<{ type: TypeNextPrev }>) {
      if (!state.currentTrack) return;

      let nextTrack: ITrack | null = null;

      if (state.tracksList.length > 0) {
        const currentIndex = state.tracksList.findIndex((t) => t.id === state.currentTrack!.id);

        if (currentIndex !== -1) {
          const total = state.tracksList.length;

          const nextIndex = action.payload.type === "next" ? (currentIndex + 1) % total : (currentIndex - 1 + total) % total;
          nextTrack = state.tracksList[nextIndex];
        }
      }

      if (!nextTrack) {
        const currentIndex = tracks.findIndex((t) => t.id === state.currentTrack!.id);

        if (currentIndex !== -1) {
          const total = tracks.length;

          const nextIndex = action.payload.type === "next" ? (currentIndex + 1) % total : (currentIndex - 1 + total) % total;

          nextTrack = tracks[nextIndex];
        }
      }

      if (nextTrack) {
        state.currentTrack = nextTrack;
        state.isPlaying = true;
        state.currentTime = 0;
        state.progress = 0;
      }
    },
  },
});

export const {
  setTrack,
  play,
  stop,
  seek,
  togglePlayPause,
  setVolume,
  changeTrack,
  close,
  toggleRepeatTrack,
  setTracksList,
  randomTrack,
  toggleRandomTrack,
} = playerSlice.actions;
export default playerSlice.reducer;
