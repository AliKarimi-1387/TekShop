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
  weight: string;
}

interface initialStateInterface {
  targetMobile: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: initialStateInterface = {
  targetMobile: null,
  loading: false,
  error: null,
};

export const mobileTargetFetch = createAsyncThunk(
  "mobileTarget/mobileTargetFetch",
  async (id: number) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (!res.ok) {
      throw new Error("feiled to fetch data");
    }

    const data: Product = await res.json();

    return data;
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
