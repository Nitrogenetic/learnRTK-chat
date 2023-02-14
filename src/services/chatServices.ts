import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { CreateMessageType, MessageType } from "../types/messsage";

export const chatAPI = createApi({
  reducerPath: "chatAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["message"],
  endpoints: (build) => ({
    fetchMessages: build.query<MessageType[], { chatId?: number; limit?: number }>({
      query: (params) => ({
        url: "/messages",
        params: { chatId: params.chatId, _limit: params.limit },
      }),
      providesTags: () => ["message"],
    }),
    sendMessage: build.mutation<MessageType, CreateMessageType>({
      query: (message) => ({
        url: "/messages",
        method: "POST",
        body: message,
      }),
      invalidatesTags: ["message"],
    }),
    deleteMessage: build.mutation<MessageType, number>({
      query: (messageId) => ({
        url: "/messages/" + messageId,
        method: "DELETE",
      }),
      invalidatesTags: ["message"],
    }),
  }),
});
