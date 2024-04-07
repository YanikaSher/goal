import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    name: '',
    description: '',
    id: '',
    author: '',
    goals: []

}

const goalsSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {
        
    }
})