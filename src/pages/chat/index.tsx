import { FC, memo } from "react";
import { RouteComponentProps } from "@reach/router";
import MessagesBlock from "./components/MessagesBlock";

interface ChatProps extends RouteComponentProps {
  path: string;
}

const Chat: FC<ChatProps> = () => {
  return (
    <div className="p-10">
      <MessagesBlock />
    </div>
  );
};

export default memo(Chat);
