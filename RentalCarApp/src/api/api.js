import axios from "axios";

export const carsApi = axios.create({
  BaseUrl: "https://car-rental-api.goit.global",
});

export const getCars = async () => {};
