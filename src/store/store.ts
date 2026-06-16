import { configureStore } from "@reduxjs/toolkit";
import  mobileSlice from "../slices/MobileCategories";
import  mobileList  from "../slices/mobile";
import  mobileTarget  from "../slices/mobileTarget";


export const store = configureStore({
    reducer:{
        mobileSlice,
        mobileList,
        mobileTarget
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDisptach = typeof store.dispatch