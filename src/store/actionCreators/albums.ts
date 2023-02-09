import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAlbums = createAsyncThunk("query/albums", async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
    return response.data;
  } catch (error) {
    return "Ошибка загрузки альбомов.";
  }
});
