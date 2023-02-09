import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { DispatchType, RootStateType } from "../store/store";

export const useTypedDispatch = () => useDispatch<DispatchType>();

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
