import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice"

// console.log(counterSlice.reducer)


const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})
export default store;