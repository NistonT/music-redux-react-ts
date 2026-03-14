import type { RootState } from "@/app/store/store";
import { FAVORITES_LIST } from "@/shared/constants/localstorage";
import { createListenerMiddleware, TypedStartListening } from "@reduxjs/toolkit";
import { addTrack, deleteTrack } from "../store/slice";

export const favoritesListenerMiddleware = createListenerMiddleware();

const startListening = favoritesListenerMiddleware.startListening as TypedStartListening<RootState>;

startListening({
  actionCreator: addTrack,
  effect: (_, listenerApi) => {
    const state = listenerApi.getState();
    localStorage.setItem(FAVORITES_LIST, JSON.stringify(state.favorite.trackList));
  },
});

startListening({
  actionCreator: deleteTrack,
  effect: (_, listenerApi) => {
    const state = listenerApi.getState();
    localStorage.setItem(FAVORITES_LIST, JSON.stringify(state.favorite.trackList));
  },
});
