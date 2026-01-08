import leftBarSlice from "@/entities/leftBar/store/leftBarSlice";
import playerSlice from "@/entities/player/store/playerSlice";
import trackSlice from "@/entities/track/store/track";
import { configureStore } from "@reduxjs/toolkit/react";

export const store = configureStore({
  reducer: {
    leftBar: leftBarSlice,
    track: trackSlice,
    player: playerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
