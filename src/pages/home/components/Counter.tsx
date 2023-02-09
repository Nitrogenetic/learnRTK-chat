import { FC } from "react";
import { useTypedDispatch, useTypedSelector } from "../../../hooks/redux";
import { decrement, increment } from "../../../store/reducers/countSlice";

interface CounterProps {}

const Counter: FC<CounterProps> = () => {
  const dispatch = useTypedDispatch();
  const { count } = useTypedSelector((store) => store.count);

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <div className="flex space-x-20">
      <div className="text-30">{count}</div>
      <button className="bg-blue-700 text-white py-10 w-200 rounded-10" onClick={handleIncrement}>
        Инкремент ++
      </button>
      <button className="border-none bg-blue-700 text-white py-10 w-200 rounded-10" onClick={handleDecrement}>
        Декремент --
      </button>
    </div>
  );
};

export default Counter;
