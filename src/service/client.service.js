import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_KEY;
export const client = axios.create({
  baseURL,
});
