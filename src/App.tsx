import { FC, useState } from "react";
import RouterPage from "./Router";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App: FC = () => {
  return (
    <Provider store={store()}>
      <RouterPage />
    </Provider>
  );
};

export default App;
