import { FC } from "react";
import { Dispatch } from "redux";
import { useTypedDispatch, useTypedSelector } from "../../../hooks/redux";
import { addTodo, removeLastTodo } from "../../../store/reducers/todoSlice";

interface TodoProps {}

const addAsyncTodo = () => {
  return async (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(addTodo("ASYNC TODO"));
    }, 1000);
  };
};

const Todo: FC<TodoProps> = () => {
  const dispatch = useTypedDispatch();
  const { todos } = useTypedSelector((store) => store.todo);

  const handleAddAsyncTodo = () => dispatch(addAsyncTodo());
  const handleAddTodo = () => dispatch(addTodo(prompt()));
  const handleRemoveLastTodo = () => dispatch(removeLastTodo());

  return (
    <>
      <div className="flex space-x-20">
        <button className="border-none bg-blue-700 text-white py-10 w-200 rounded-10" onClick={handleAddAsyncTodo}>
          Добавить ASYNC todo
        </button>
        <button className="border-none bg-green-700 text-white py-10 w-200 rounded-10" onClick={handleAddTodo}>
          Добавить todo
        </button>
        <button className="border-none bg-red-500 text-white py-10 w-200 rounded-10" onClick={handleRemoveLastTodo}>
          Удалить последний todo
        </button>
      </div>
      <div>
        {todos.map((todo: string) => (
          <div key={todo}>{todo}</div>
        ))}
      </div>
    </>
  );
};

export default Todo;
