import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { chatAPI } from "../services/chatServices";
import { photoAPI } from "../services/photoServices";
import { userAPI } from "../services/userServices";
import albumsSlice from "./reducers/albumsSlice";
import countSlice from "./reducers/countSlice";
import postsSlice from "./reducers/postsSlice";
import todoSlice from "./reducers/todoSlice";
import usersSlice from "./reducers/usersSlice";

const rootReducer = combineReducers({
  count: countSlice,
  todo: todoSlice,
  users: usersSlice,
  posts: postsSlice,
  albums: albumsSlice,
  [photoAPI.reducerPath]: photoAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [chatAPI.reducerPath]: chatAPI.reducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(photoAPI.middleware, userAPI.middleware, chatAPI.middleware),
  });
};

export type RootStateType = ReturnType<typeof rootReducer>;
export type StoreType = ReturnType<typeof store>;
export type DispatchType = StoreType["dispatch"];
