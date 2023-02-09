import { createSlice } from "@reduxjs/toolkit";

interface CountState {
  count: number;
}

const initialState: CountState = {
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
  },
});

export default countSlice.reducer;
//Для чистоты кода в компонентах:
export const { increment, decrement } = countSlice.actions;
