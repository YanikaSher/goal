import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  author: "",
  goals: [],
  id: "",
};
const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<any>) => {
      state.name = action.payload.newModule.name;
      state.description = action.payload.newModule.description;
      state.author = action.payload.newModule.author;
      state.id = action.payload.newModule.id;
      state.goals = action.payload.newModule.goals;
    },
  },
});

export const { update } = goalsSlice.actions;
export const goalsSelector = (state: RootState) => state.goals;
export default goalsSlice.reducer;
