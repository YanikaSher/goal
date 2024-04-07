import {
  periods,
  goalSelections,
} from "@/components/create/selectPeriod/periods";
import { ISelectPeriod } from "@/redux/interfaces";
import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
  selectPeriod: [goalSelections[0]],
};

const selectPeriodSlice = createSlice({
  name: "selectPeriod",
  initialState,
  reducers: {
    selectPeriod: (state, action: PayloadAction<{selectedPeriod: ISelectPeriod}>) => {
      state.selectPeriod = [];
      state.selectPeriod.push(action.payload.selectedPeriod);
    },
    selectDeadline: (state, action: PayloadAction<{deadline: string}>) => {
      state.selectPeriod[0].selectedDeadline = action.payload.deadline;
    },
  },
});

export const { selectPeriod, selectDeadline } = selectPeriodSlice.actions;
export const selectSelectPeriod = (state: RootState) =>
  state.selectPeriods.selectPeriod;
export default selectPeriodSlice.reducer;
