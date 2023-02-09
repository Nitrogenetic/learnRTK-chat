import React, { FC, memo } from "react";
import { RouteComponentProps, Router } from "@reach/router";
import { Home } from "./pages/EXPORT";
import Chat from "./pages/chat";

const RouterPage: FC<RouteComponentProps> = () => {
  return (
    <Router className={"router screen-flex"}>
      <Home path={"/"} />
      <Chat path={"/chat"} />
      {/* <NotFound default /> */}
    </Router>
  );
};

export default memo(RouterPage);
