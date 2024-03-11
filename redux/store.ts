"use client"

import { configureStore } from "@reduxjs/toolkit";
import switcherReducer from "./features/switch/switcherSlice";


export const store = configureStore({
    reducer: {switcher: switcherReducer}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch