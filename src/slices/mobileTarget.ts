import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface reviewsInterface {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}


interface Product {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  images: string[];
  reviews: reviewsInterface[];
  weight:string
}

interface initialStateInterface {
  targetMobile: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: initialStateInterface = {
  targetMobile: [],
  loading: false,
  error: null,
};

interface resuterProduct {
  products: Product[];
}

export const mobileTargetFetch = createAsyncThunk(
  "mobileTarget/mobileTargetFetch",
  async (id: number) => {
    const res = await fetch(
      "https://dummyjson.com/products/category/smartphones",
    );

    if (!res.ok) {
      throw new Error("feiled to fetch data");
    }

    const data: resuterProduct = await res.json();

    const resaulte = data.products.filter((item) => item.id === id);

    return resaulte;
  },
);

const mobileTarget = createSlice({
  name: "mobileTarget",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(mobileTargetFetch.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(mobileTargetFetch.fulfilled, (state, action) => {
        ((state.loading = false), (state.targetMobile = action.payload));
      })
      .addCase(mobileTargetFetch.rejected, (state, action) => {
        state.error = action.error.message!;
        state.loading = false;
      });
  },
});

export default mobileTarget.reducer;
