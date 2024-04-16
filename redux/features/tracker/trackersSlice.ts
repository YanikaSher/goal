"use client";
import { ITrackerState } from "@/redux/interfaces";
import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackers: [
    {
      format: "text",
      mode: "free",
      name: "Описание дня",
      id: "44332",
    },
  ],
};

export const trackersSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{tracker: ITrackerState}>) => {
      state.trackers.unshift({ ...action.payload.tracker });
    },
    del: (state, action: PayloadAction<{targetId: string}>) => {
      state.trackers.forEach((tracker, index) => {
        if (tracker.id === action.payload.targetId) {
          state.trackers.splice(index, 1);
        }
      });
    },
  },
});

export const { del, add } = trackersSlice.actions;
export const selectTrackers = (state: RootState) => state.trackers.trackers;
export default trackersSlice.reducer;
