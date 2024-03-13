import { ITrackerSwitch } from "@/redux/interfaces";
import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const switchTracker = createSlice({
  name: "switchTracker",
  initialState,
  reducers: {
    switchIt: (state, action: PayloadAction<{value: boolean}>) => {
      state.isOpen = action.payload.value;
    },
  },
});

export const { switchIt } = switchTracker.actions;
export const selectSwitchTracker = (state: RootState) => state.switchTracker
export default switchTracker.reducer;