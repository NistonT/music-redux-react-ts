import playerReducer from "@/features/player/store/slice";
import { configureStore } from "@reduxjs/toolkit/react";
export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
