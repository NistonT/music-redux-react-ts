import { favoritesListenerMiddleware } from "@/features/favorite/lib/favoriteListener";
import favoriteReducer from "@/features/favorite/store/slice";
import leftBarReducer from "@/features/leftBar/store/slice";
import playerReducer from "@/features/player/store/slice";
import { configureStore } from "@reduxjs/toolkit/react";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    favorite: favoriteReducer,
    leftBar: leftBarReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(favoritesListenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
