import { authors } from "@/shared/constants/author";
import { tracks } from "@/shared/constants/tracks";
import type { ITrack, TypeNextPrev } from "@/shared/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPlayerSlice {
  isPlaying: boolean;
  isRepeat: boolean;
  currentTrack: ITrack | null;
  volume: number;
  currentTime: number;
  progress: number;
}

const initialState: IPlayerSlice = {
  isPlaying: false,
  isRepeat: false,
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

    toggleRepeatTrack(state) {
      state.isRepeat = !state.isRepeat;
    },

    seek(state, action: PayloadAction<{ time: number; duration?: number }>) {
      state.currentTime = action.payload.time;
      state.progress = (action.payload.time / (action.payload.duration || 1)) * 100;
    },

    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;

      localStorage.setItem("volume-player", action.payload.toString());
    },

    changeTrack(state, action: PayloadAction<{ type: TypeNextPrev; authorId?: string | number }>) {
      if (!state.currentTrack) return;

      let nextTrack: ITrack | null = null;

      if (action.payload.authorId) {
        const author = authors.find((a) => a.id === Number(action.payload.authorId));
        if (!author) return;

        const trackIndex = author.tracks.findIndex((t) => t.id === state.currentTrack?.id);
        if (trackIndex === -1) return;

        const total = author.tracks.length;
        const nextIndex = action.payload.type === "next" ? (trackIndex + 1) % total : (trackIndex - 1) % total;

        nextTrack = author.tracks[nextIndex];
      } else {
        const currentIndex = tracks.findIndex((t) => t.id === state.currentTrack?.id);

        if (currentIndex === -1) return;

        const nextIndex = action.payload.type === "next" ? (currentIndex + 1) % tracks.length : (currentIndex - 1 + tracks.length) % tracks.length;
        state.currentTrack = tracks[nextIndex];
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

export const { setTrack, play, stop, seek, togglePlayPause, setVolume, changeTrack, close, toggleRepeatTrack } = playerSlice.actions;
export default playerSlice.reducer;
