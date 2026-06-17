import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface BrandItem {
  brand: string;
  thumbnail: string;
  qty?: number
}

interface Product {
  id: number;
  title: string;
  brand: string;
  thumbnail:string;
  description: string;
  price: number
}

interface ProductsResponse {
  products: Product[];
}

interface BrandState {
  brands: BrandItem[];
  loading: boolean;
  error: string | null;
}

const initialState: BrandState = {
  brands: [],
  loading: false,
  error: null,
};

export const fetchMobileBrands = createAsyncThunk(
  "brands/fetchMobileBrands",
  async (input:string) => {
    const res = await fetch(
      `https://dummyjson.com/products/category/${input}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data: ProductsResponse = await res.json();

    const uniqueBrandsMap = new Map<string, string>();

    data.products.forEach((p) => {
      if (!uniqueBrandsMap.has(p.brand)) {
        uniqueBrandsMap.set(p.brand, p.thumbnail);
      }
    });

    const result: BrandItem[] = Array.from(
      uniqueBrandsMap,
      ([brand, thumbnail]) => ({
        brand,
        thumbnail,
      })
    );

    return result;
  }
);



const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMobileBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMobileBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetchMobileBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
    
  },
});

export default brandSlice.reducer;
