"use client"
import { createSlice } from "@reduxjs/toolkit";
import { dark, light } from "../../themes";

export interface SwitcherState {
  value: {nav: string, head: string, fontColor: string, content: string, name: string};
}

const initialState: SwitcherState = {
  value: dark
}

export const switcherSlice = createSlice({
  name: "switcher",
  initialState,
  reducers: {
    switchLeft: (state) => {
        state.value = light
    }, 
    switchRight: (state)=> {
        state.value = dark
    }
  }
});


export const { switchRight, switchLeft } = switcherSlice.actions;
export default switcherSlice.reducer;