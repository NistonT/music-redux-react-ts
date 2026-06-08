import { createSlice } from "@reduxjs/toolkit";

interface ILeftBarSlice {
  isLeftBarMobile: boolean;
  isPanelMobile: boolean;
}

const initialState: ILeftBarSlice = {
  isLeftBarMobile: false,
  isPanelMobile: false,
};

export const leftBarSlice = createSlice({
  name: "leftBarSlice",
  initialState,
  reducers: {
    toggleLeftBarMobile(state) {
      state.isLeftBarMobile = !state.isLeftBarMobile;
    },
    closeLeftBarMobile(state) {
      state.isLeftBarMobile = false;
    },
    openPanelMobile(state) {
      state.isPanelMobile = true;
    },
    closePanelMobile(state) {
      state.isPanelMobile = false;
    },
  },
});

export const { toggleLeftBarMobile, closeLeftBarMobile, openPanelMobile, closePanelMobile } = leftBarSlice.actions;
export default leftBarSlice.reducer;
