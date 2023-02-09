import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { MessageType } from "../types/messsage";

export const chatAPI = createApi({
  reducerPath: "chatAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.npoint.io/4354f16e00fe23ae3ffd" }),
  endpoints: (build) => ({
    fetchMessages: build.query<MessageType[], { chatId: number; limit?: number }>({
      query: (params) => ({
        url: "/messages",
        params: { chatId: params.chatId, _limit: params.limit },
      }),
    }),
  }),
});
