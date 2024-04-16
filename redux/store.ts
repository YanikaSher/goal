"use client";

import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "./features/tracker/trackersSlice";
import switchBtnReducer from "./features/tracker/switchSlice";
import chartReducer from "./features/chart/pieDataSlice";
import hashtagReducer from "./features/hashtag/hashtagSlice";
import selectPeriodReducer from "./features/select/periodSlice";
import selectModuleReducer from "./features/select/moduleSlice";
import loginSuccessfulReducer from "./features/auth/loginSuccessful";
import modulesReducer from "./features/goal/module";
import goalsReducer from "./features/goal/goals";
import goalReducer from "./features/goal/goal";

export const store = configureStore({
  reducer: {
    trackers: trackerReducer,
    charts: chartReducer,
    hashtags: hashtagReducer,
    selectPeriods: selectPeriodReducer,
    selectModule: selectModuleReducer,
    switchTracker: switchBtnReducer,
    loginSuccessful: loginSuccessfulReducer,
    modules: modulesReducer,
    goals: goalsReducer,
    goal: goalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
