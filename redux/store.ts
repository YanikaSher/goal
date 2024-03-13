"use client";

import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "./features/tracker/trackersSlice";
import switchBtnReducer from "./features/tracker/switchSlice";
import chartReducer from "./features/chart/pieDataSlice";
import hashtagReducer from "./features/hashtag/hashtagSlice";
import selectPeriodReducer from "./features/selectPeriod/selectPeriodSlice";
import loginSuccessfulReducer from "./features/auth/loginSuccessful";

export const store = configureStore({
  reducer: {
    trackers: trackerReducer,
    charts: chartReducer,
    hashtags: hashtagReducer,
    selectPeriods: selectPeriodReducer,
switchTracker: switchBtnReducer,
loginSuccessful: loginSuccessfulReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
