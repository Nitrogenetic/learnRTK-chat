import { UserType } from "../../types/user";
import { DispatchType } from "../store";
import axios from "axios";
// import { usersFetching, usersFetchingError, usersFetchingSuccess } from "./usersSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// подход 1 of 2
// export const fetchUsers = () => async (dispatch: DispatchType) => {
//   try {
//     dispatch(usersFetching());
//     const response = await axios.get<UserType[]>("https://jsonplaceholder.typicode.com/users");
//     dispatch(usersFetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(usersFetchingError(error.message));
//   }
// };

export const fetchUsers = createAsyncThunk("users/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get<UserType[]>("https://jsonplaceholder.typicode.com/users");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось загрузить список");
  }
});
