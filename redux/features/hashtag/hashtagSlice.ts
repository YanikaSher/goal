import { IHashtagState } from "@/redux/interfaces";
import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
  hashtags: [{ name: "conzentration", active: true }],
};

export const hashtagSlice = createSlice({
  name: "hashtag",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IHashtagState>) => {
      state.hashtags.forEach((item: IHashtagState, index) => {
        if (item.name === action.payload.name) {
          state.hashtags.splice(index, 1);
        }
      });
      state.hashtags.push(action.payload);
    },
    del: (state, action: PayloadAction<IHashtagState>)=> {
      state.hashtags.forEach((item: IHashtagState, index) => {
        if (item.name === action.payload.name) {
          state.hashtags.splice(index, 1);
        }
      });
    }
  },
});

export const { add, del} = hashtagSlice.actions;
export const selectHashtag = (state: RootState) => state.hashtags.hashtags;
export default hashtagSlice.reducer;
