import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './slices/home'

 const store = configureStore({
  reducer: {
    home : homeSlice,
  },
})


export default store