"use client";
import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  startPeriod: "",
  endPeriod: "",
  name: "",
  id: "",
};

export const periodSlice = createSlice({
  name: "period",
  initialState,
  reducers: {
    setStartPeriod: (state, action: PayloadAction<string>) => {
      state.startPeriod = action.payload;
    },
    setEndPeriod: (state, action: PayloadAction<string>) => {
      state.endPeriod = action.payload;
    },
    setPeriodName: (state, action: PayloadAction<string>) => {
      const strWithoutSpaces = action.payload.trim();
      state.name = strWithoutSpaces;
    },
    setPeriodId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const { setStartPeriod, setEndPeriod, setPeriodName,setPeriodId } =
  periodSlice.actions;
export const selectorPeriod = (state: RootState) => state.period;
export default periodSlice.reducer;
