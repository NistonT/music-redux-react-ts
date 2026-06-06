import { createSlice } from "@reduxjs/toolkit";

interface ILeftBarSlice {
  isLeftBarMobile: boolean;
}

const initialState: ILeftBarSlice = {
  isLeftBarMobile: false,
};

export const leftBarSlice = createSlice({
  name: "leftBarSlice",
  initialState,
  reducers: {
    toggleLeftBarMobile(state) {
      state.isLeftBarMobile = !state.isLeftBarMobile;
    },
  },
});

export const { toggleLeftBarMobile } = leftBarSlice.actions;
export default leftBarSlice.reducer;
