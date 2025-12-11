import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILeftBarSlice {
  isBar: boolean;
}

const initialState: ILeftBarSlice = {
  isBar: true,
};

export const leftBarSlice = createSlice({
  name: "leftBarSlice",
  initialState,
  reducers: {
    changeBarToggle(state, action: PayloadAction<{ value?: boolean }>) {
      state.isBar = action.payload.value ? action.payload.value : !state.isBar;
    },
  },
});

export const { changeBarToggle } = leftBarSlice.actions;
export default leftBarSlice.reducer;
