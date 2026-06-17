import { configureStore } from "@reduxjs/toolkit";
import  mobileSlice from "../slices/MobileCategories";
import  mobileList  from "../slices/mobile";
import  mobileTarget  from "../slices/mobileTarget";
import shopCart from "../slices/shopcart/shopcartSlice"

export const store = configureStore({
    reducer:{
        mobileSlice,
        mobileList,
        mobileTarget,
        shopCart
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDisptach = typeof store.dispatch