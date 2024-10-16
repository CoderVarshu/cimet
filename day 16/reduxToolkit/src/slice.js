import { createSlice } from "@reduxjs/toolkit";

//IMMER
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    
    reducers: {
        increment: function (state, action) {
            state.count += 1
        },
        decrement: function (state, action) {
            state.count -= 1
        },
    }
})

export const selectorCount = function (state) { return state.counter.count }

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer