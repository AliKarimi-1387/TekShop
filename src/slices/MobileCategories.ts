import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  brand: string;
}

export const fetchMobileCategories = createAsyncThunk(
    "fetchMobileCategories/mobile",
    async()=>{
        const res = await fetch("https://dummyjson.com/products/category/smartphones")
        if(!res.ok){
            throw new Error("error")
        }
        const data: Product = await res.json()

        const brands = [...new Set(data.products.map(product => product.brand))];
    }
)

export const mobileSlice = createSlice({
    name: 'mobile',
    initialState:{
        categoreis:[]
    },
    reducers:{

    }
})

export default mobileSlice.reducer