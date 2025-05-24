import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsAPI, PAGE_LIMIT } from "../../api/api";

export const getCars = createAsyncThunk(
  "cars/getCars",
  async (params, thunkAPI) => {
    try {
      const validatedParams = {
        ...params,
        page: params.page && params.page >= 1 ? params.page : 1,
        limit: PAGE_LIMIT,
        brand: params.brand || undefined,
        type: params.type || undefined,
      };
      const response = await carsAPI.get("cars", {
        params: validatedParams,
        signal: thunkAPI.signal,
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarById = createAsyncThunk(
  "cars/getCarById",
  async (id, thunkAPI) => {
    try {
      const response = await carsAPI.get(`cars/${id}`, {
        signal: thunkAPI.signal,
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBrands = createAsyncThunk(
  "cars/getBrands",
  async (id, thunkAPI) => {
    try {
      const response = await carsAPI.get(`brands`, {
        signal: thunkAPI.signal,
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
