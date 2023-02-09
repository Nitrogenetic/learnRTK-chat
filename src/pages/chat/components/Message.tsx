import { FC } from "react";
import { MessageType } from "../../../types/messsage";

interface MessageProps {
  message: MessageType;
}

export const Message: FC<MessageProps> = (props) => {
  const { message } = props;
  const dateTimeString = new Date(message.dateTime).toISOString();

  return (
    <div className="flex space-x-10 mb-10 items-center">
      <span className="text-green-800 font-bold">Чат Id : {message.chatId}</span>
      <span className="text-green-800 font-bold">Время : {dateTimeString}</span>
      <span className="text-green-800 font-bold">Имя отправителя : {message.senderName}</span>
      <span className="text-green-800 font-bold">Сообщение : {message.message}</span>
      <button className="text-white bg-red-700 px-15 py-5 rounded-5">Delete message</button>
    </div>
  );
};

export default Message;
