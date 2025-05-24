import { createSlice } from "@reduxjs/toolkit";
import { getBrands } from "./operations";

const initialState = {
  isError: false,
  isLoading: false,
  items: [],
  favorite: [],
  filters: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  },
  brands: [],
  pagination: { limit: "", page: 1 },
};

const slice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
    });
  },
});

export const carsReducer = slice.reducer;
