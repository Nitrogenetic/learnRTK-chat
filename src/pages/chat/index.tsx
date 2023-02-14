import { FC, memo } from "react";
import { RouteComponentProps } from "@reach/router";
import MessagesBlock from "./components/MessagesBlock";
import SendMessage from "./components/SendMessage";
import { useUrlSearchParams } from "use-url-search-params";
import SwitchChat from "./components/SwitchChat";

interface ChatProps extends RouteComponentProps {
  path: string;
}

const Chat: FC<ChatProps> = () => {
  const [params, setParams] = useUrlSearchParams({ id: 1 });
  const chatId = +params.id;
  const setChatId = (id) => setParams({ id });

  return (
    <div className="p-10">
      <SwitchChat chatId={chatId} setChatId={setChatId} />
      <MessagesBlock chatId={chatId} />
      <SendMessage chatId={chatId} />
    </div>
  );
};

export default memo(Chat);
