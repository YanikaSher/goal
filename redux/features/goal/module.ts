import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAction {
  updatedModules: Array<{
    name: string;
    description: string;
    id: string;
    author: string;
  }>;
}
interface IModule {
  modules: Array<{
    name: string;
    description: string;
    id: string;
    author: string;
  }>;
}
const initialState: IModule = {
  modules: [],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<IAction>) => {
      state.modules = action.payload.updatedModules;
    },
    addGoal: (state, action: PayloadAction<any>) => {
      state.modules.push(action.payload);
    },
  },
});

export const { update, addGoal } = modulesSlice.actions;
export const selectModules = (state: RootState) => state.modules;
export default modulesSlice.reducer;
