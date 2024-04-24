import {
  periods,
} from "@/components/create/selectPeriod/periods";
import { ISelectPeriodState } from "@/redux/interfaces";
import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ISelectPeriodState = {
  label: "Краткосрочная цель",
  value: "Краткосрочная цель",
  id: 1,
  deadlines: periods.short,
  selectedDeadline: "7",
};

const selectPeriodSlice = createSlice({
  name: "selectPeriod",
  initialState,
  reducers: {
    selectPeriod: (state, action: PayloadAction<{ selectedPeriod: any }>) => {
      state.label = action.payload.selectedPeriod.label;
      state.value = action.payload.selectedPeriod.value;
      state.id = action.payload.selectedPeriod.id;
      state.deadlines = action.payload.selectedPeriod.deadlines;
      state.selectedDeadline = action.payload.selectedPeriod.selectedDeadline;
    },
    selectDeadline: (state, action: PayloadAction<{ deadline: string }>) => {
      state.selectedDeadline = action.payload.deadline;
    },
  },
});

export const { selectPeriod, selectDeadline } = selectPeriodSlice.actions;
export const selectSelectPeriod = (state: RootState) =>
  state.selectPeriods;
export default selectPeriodSlice.reducer;
