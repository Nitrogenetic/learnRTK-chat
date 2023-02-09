import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  todos: string[];
}

const initialState: TodoState = {
  todos: ["Снять видео", "Смонтировать видео", "Покакать"],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push(action.payload);
    },
    removeLastTodo(state) {
      state.todos.pop();
    },
  },
});

export default todoSlice.reducer;
//Для чистоты кода в компонентах:
export const { addTodo, removeLastTodo } = todoSlice.actions;
