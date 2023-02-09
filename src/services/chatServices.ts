import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { MessageType } from "../types/messsage";

export const chatAPI = createApi({
  reducerPath: "chatAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jsonbin.io/v3/b/63e56abdace6f33a22da6c16" }),
  endpoints: (build) => ({
    fetchMessages: build.query<MessageType[], { chatId: number; limit?: number }>({
      query: (params) => ({
        url: "/messages",
        params: { chatId: params.chatId, _limit: params.limit },
      }),
    }),
  }),
});
