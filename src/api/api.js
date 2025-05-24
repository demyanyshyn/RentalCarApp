import axios from "axios";

export const carsAPI = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});

export const PAGE_LIMIT = 12;
