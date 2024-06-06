import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOwner: false,
};
const isOwnerSlice = createSlice({
  name: "isOwner",
  initialState,
  reducers: {
    setIsOwner: (state, action: PayloadAction<boolean>) => {
      state.isOwner = action.payload;
    },
  },
});

export const { setIsOwner } = isOwnerSlice.actions;
export const isOwnerSelector = (state: RootState) => state.isOwner;
export default isOwnerSlice.reducer;
