import { configureStore } from "@reduxjs/toolkit/react";

export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
