import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PhotoType } from "../types/photo";

export const photoAPI = createApi({
  reducerPath: "photoAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.npoint.io/4354f16e00fe23ae3ffd" }),
  endpoints: (build) => ({
    fetchPhotos: build.query<PhotoType[], number>({
      query: (limit = 5) => ({
        url: "/photos",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});
