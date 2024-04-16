import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  description: "",
  goalName: "",
  tracker: {},
  periods: [],
  chart: {},
  id: "",
};
const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<any>) => {
      state.goalName = action.payload.newGoal.goalName;
      state.description = action.payload.newGoal.description;
      state.tracker = action.payload.newGoal.tracker;
      state.id = action.payload.newGoal.id;
      state.chart = action.payload.newGoal.chart;
      state.periods = action.payload.newGoal.periods;
    },
  },
});

export const { update } = goalSlice.actions;
export const goalSelector = (state: RootState) => state.goal;
export default goalSlice.reducer;
