import { FC } from "react";
import { chatAPI } from "../../../services/chatServices";
import Message from "./Message";

interface MessagesBlockProps {
  chatId: number;
}

const MessagesBlock: FC<MessagesBlockProps> = (props) => {
  const { chatId } = props;

  const { data: messages, error, isLoading } = chatAPI.useFetchMessagesQuery({ chatId });

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
