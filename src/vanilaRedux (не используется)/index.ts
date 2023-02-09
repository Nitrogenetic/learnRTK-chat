import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { countReducer } from "./reducers/countReducer";
import { userReducer } from "./reducers/userReducer";
// import createSagaMiddleware from "redux-saga";
// import { rootWatcher } from "../saga";
import thunk from "redux-thunk";

// const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof rootReducer>;
