"use client";

import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "./features/tracker/trackersSlice";
import switchBtnReducer from "./features/tracker/switchSlice";
import periodsReducer from "./features/period/periodsArray";
import hashtagReducer from "./features/hashtag/hashtagsSlice";
import selectPeriodReducer from "./features/select/periodSlice";
import selectModuleReducer from "./features/select/moduleSlice";
import modulesReducer from "./features/goal/module";
import goalsReducer from "./features/goal/goals";
import goalReducer from "./features/goal/goal";
import periodReducer from "./features/period/period";
import isOwnerReducer from "./features/goal/isOwner";

export const store = configureStore({
  reducer: {
    trackers: trackerReducer,
    periodsArray: periodsReducer,
    period: periodReducer,
    hashtags: hashtagReducer,
    selectPeriods: selectPeriodReducer,
    selectModule: selectModuleReducer,
    switchTracker: switchBtnReducer,
    modules: modulesReducer,
    goals: goalsReducer,
    goal: goalReducer,
    isOwner: isOwnerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
