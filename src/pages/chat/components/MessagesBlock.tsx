import { FC } from "react";
import { chatAPI } from "../../../services/chatServices";
import Message from "./Message";

interface MessagesBlockProps {}

const MessagesBlock: FC<MessagesBlockProps> = () => {
  const { data: messages, error, isLoading } = chatAPI.useFetchMessagesQuery({ chatId: 2 }, { pollingInterval: 1000 });

  return (
    <div>
      {isLoading && "Загрузка..."}
      {error && "Ошибка при загрузке диалогов"}
      {messages?.map((message, index) => (
        <Message message={message} key={index} />
      ))}
    </div>
  );
};

export default MessagesBlock;
