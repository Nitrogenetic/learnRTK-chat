import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlbumType } from "../../types/album";
import { fetchAlbums } from "../actionCreators/albums";

interface AlbumState {
  albums: AlbumType[];
  isLoading: boolean;
  error: string;
}

const initialState: AlbumState = {
  albums: [],
  isLoading: false,
  error: "",
};

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAlbums.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchAlbums.rejected.type]: (state, action: PayloadAction<string>) => {
      state.albums = [];
      state.error = action.payload;
      state.isLoading = false;
    },
    [fetchAlbums.fulfilled.type]: (state, action: PayloadAction<AlbumType[]>) => {
      state.albums = action.payload;
      state.error = "";
      state.isLoading = false;
    },
  },
});

export default albumsSlice.reducer;
