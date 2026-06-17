import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  brand: string;
  thumbnail: string;
  description: string;
  price: number;
}

interface resuterProduct {
  products: Product[];
}

interface Input {
  brand: string | undefined;
  input: string;
}

export const mobileListTarget = createAsyncThunk(
  "Mobile/mobileListTarget",
  async ({ brand, input }: Input) => {
    const res = await fetch(`https://dummyjson.com/products/category/${input}`);

    if (!res.ok) {
      throw new Error("feiled to fetch data");
    }

    const data: resuterProduct = await res.json();

    const result = data.products.filter((item) => item.brand == brand);

    console.log(result);

    return result;
  },
);

interface initialStateInterface {
  mobile: Product[];
  loading: boolean;
  error: null | string;
}

const initialState: initialStateInterface = {
  mobile: [],
  loading: false,
  error: null,
};

const Mobile = createSlice({
  name: "mobile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(mobileListTarget.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(mobileListTarget.fulfilled, (state, action) => {
        state.loading = false;
        state.mobile = action.payload;
      })
      .addCase(mobileListTarget.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
      });
  },
});

export default Mobile.reducer;
