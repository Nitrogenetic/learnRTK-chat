import { FC, useEffect, useState } from "react";
import { chatAPI } from "../../../services/chatServices";
import SwitchChatItem from "./SwitchChatItem";

interface SwitchChatProps {
  chatId: number;
  setChatId(id: number): void;
}

const SwitchChat: FC<SwitchChatProps> = (props) => {
  const { chatId, setChatId } = props;

  const { data: messages } = chatAPI.useFetchMessagesQuery({});
  const [allChatIds, setAllChatIds] = useState([]);

  const allChatIdsSet = new Set();

  useEffect(() => {
    if (messages) {
      for (const message of messages) {
        allChatIdsSet.add(message.chatId);
      }
      setAllChatIds([...allChatIdsSet]);
    }
  }, [messages]);

  return (
    <div className="flex space-x-5">
      {allChatIds.map((id) => {
        const isSelectedChat = id === chatId;
        return <SwitchChatItem key={id} isSelectedChat={isSelectedChat} setChatId={setChatId} thisItemId={id} />;
      })}
    </div>
  );
};

export default SwitchChat;
