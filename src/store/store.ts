import { configureStore } from "@reduxjs/toolkit";
import  mobileSlice from "../slices/MobileCategories";

export const store = configureStore({
    reducer:{
        mobileSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDisptach = typeof store.dispatch