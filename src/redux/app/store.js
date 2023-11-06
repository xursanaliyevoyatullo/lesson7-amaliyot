import { configureStore } from "@reduxjs/toolkit"
import likedReducer from "../features/likedSlice"

export const store = configureStore({
    reducer: {
        liked: likedReducer,
    }  
})