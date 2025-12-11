import leftBarSlice from "@/entities/leftBar/store/leftBarSlice";
import { configureStore } from "@reduxjs/toolkit/react";

export const store = configureStore({
  reducer: {
    leftBar: leftBarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
