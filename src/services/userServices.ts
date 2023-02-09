import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { CreateUserType, UserType } from "../types/user";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.npoint.io/4354f16e00fe23ae3ffd" }),
  tagTypes: ["user"],
  endpoints: (build) => ({
    fetchUsers: build.query<UserType[], number>({
      query: (limit = 5) => ({ url: "/users", params: { _limit: limit } }),
      providesTags: () => ["user"],
    }),
    createUser: build.mutation<UserType, CreateUserType>({
      query: (user) => ({ url: "/users", method: "POST", body: user }),
      invalidatesTags: ["user"],
    }),
    deleteUser: build.mutation<UserType, number>({
      query: (userId) => ({ url: "/users/" + userId, method: "DELETE" }),
      invalidatesTags: ["user"],
    }),
  }),
});
