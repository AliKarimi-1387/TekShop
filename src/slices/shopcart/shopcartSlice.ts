import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface initialStateInterface {
  name: string;
  price: number;
  qty: number;
  thumbnail: string;
  id:number,
  description: string
}

interface initialStateValues {
  products: initialStateInterface[];
  loading: boolean;
  error: null | string;
}

const initialState: initialStateValues = {
  products: [],
  loading: false,
  error: null,
};

const shopcart = createSlice({
  name: "shopcart",
  initialState,
  reducers: {
    addProduct:(state , action)=>{
        const exit = state.products.find((item)=> item.id == action.payload.id)

        if(exit){
            exit.qty + 1
        }else{
            state.products.push(action.payload)
            toast.success('success to add product')
        }
    },
  },
});


export const {addProduct} = shopcart.actions
export default shopcart.reducer
