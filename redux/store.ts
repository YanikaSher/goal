"use client";

import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "./features/tracker/trackersSlice";
import switchBtnReducer from "./features/tracker/switchSlice";
import chartReducer from "./features/chart/pieDataSlice";
import hashtagReducer from "./features/hashtag/hashtagSlice";
import selectPeriodReducer from "./features/select/periodSlice";
import loginSuccessfulReducer from "./features/auth/loginSuccessful";
import modulesReducer from "./features/module/module";

export const store = configureStore({
  reducer: {
    trackers: trackerReducer,
    charts: chartReducer,
    hashtags: hashtagReducer,
    selectPeriods: selectPeriodReducer,
switchTracker: switchBtnReducer,
loginSuccessful: loginSuccessfulReducer,
modules: modulesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
