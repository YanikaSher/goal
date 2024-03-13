import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"



const initialState = {
    isLoginSuccessful: false
}

const loginSuccessful = createSlice({
    name: 'isLogin',
    initialState,
    reducers: {
        setup: (state, action: PayloadAction<boolean>) => {
            state.isLoginSuccessful = action.payload;
        }
    }
})


export const { setup } = loginSuccessful.actions;
export const selectLoginSuccessful = (state: RootState) => state.loginSuccessful.isLoginSuccessful;
export default loginSuccessful.reducer;