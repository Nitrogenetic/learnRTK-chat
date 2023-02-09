import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PhotoType } from "../types/photo";

export const photoAPI = createApi({
  reducerPath: "photoAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jsonbin.io/v3/b/63e56abdace6f33a22da6c16" }),
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
