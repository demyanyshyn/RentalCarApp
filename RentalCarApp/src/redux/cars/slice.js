import { createSlice } from "@reduxjs/toolkit";

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
  pagination: { limit: "", page: 1 },
};

const slice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder;
  },
});

export const carsReducer = slice.reducer;
