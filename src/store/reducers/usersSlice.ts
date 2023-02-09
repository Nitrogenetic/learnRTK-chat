import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/user";
import { fetchUsers } from "../actionCreators/users";

interface UsersState {
  users: UserType[];
  isLoading: boolean;
  error: string;
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // подход 1 of 2
    // usersFetching(state) {
    //   state.isLoading = true;
    // },
    // usersFetchingSuccess(state, action: PayloadAction<UserType[]>) {
    //   state.isLoading = false;
    //   state.error = "";
    //   state.users = action.payload;
    // },
    // usersFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    //   state.users = [];
    // },
  },

  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<UserType[]>) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.users = [];
    },
  },
});

export default usersSlice.reducer;
//Для чистоты кода в компонентах:
// подход 1 of 2
// export const { usersFetching, usersFetchingSuccess, usersFetchingError } = usersSlice.actions;
