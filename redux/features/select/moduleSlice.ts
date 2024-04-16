import { selectModules } from './../goal/module';
import { PayloadNewModule } from "@/redux/interfaces";
import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
};

const selectModuleSlice = createSlice({
  name: "selectModule",
  initialState,
  reducers: {
    addId: (state, action: PayloadAction<{id: string}>) => {
      state.id = action.payload.id;
    },
  },
});

export const {addId } = selectModuleSlice.actions;
export const selectorSelectModule = (state: RootState) => state.selectModule.id
export default selectModuleSlice.reducer;
