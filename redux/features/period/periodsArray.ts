"use client";
import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
  periods: Array<any | { startPeriod: string; endPeriod: string, name: string, id: string}>;
} = {
  periods: [],
};

export const pieChartSlice = createSlice({
  name: "periodsArray",
  initialState,
  reducers: {
    setupPeriod: (
      state,
      action: PayloadAction<{ startPeriod: string; endPeriod: string }>
    ) => {
      state.periods.push(action.payload);
    },
  },
});

export const { setupPeriod } = pieChartSlice.actions;
export const selectorPeriodsArray = (state: RootState) => state.periodsArray.periods;
export default pieChartSlice.reducer;
