import leftBarSlice from "@/entities/leftBar/store/leftBarSlice";
import trackSlice from "@/entities/track/store/track";
import { configureStore } from "@reduxjs/toolkit/react";

export const store = configureStore({
  reducer: {
    leftBar: leftBarSlice,
    track: trackSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
