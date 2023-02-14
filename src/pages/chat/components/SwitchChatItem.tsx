import { FC } from "react";
import cls from "classnames";

interface SwitchChatItemProps {
  thisItemId: number;
  isSelectedChat: boolean;
  setChatId(id: number): void;
}

const SwitchChatItem: FC<SwitchChatItemProps> = (props) => {
  const { thisItemId, isSelectedChat, setChatId } = props;
  return (
    <div
      className={cls("bg-blue-400 text-white w-50 h-30 flex items-center justify-center cursor-pointer rounded-full", {
        "bg-green-500": isSelectedChat,
      })}
      onClick={() => setChatId(thisItemId)}
    >
      {thisItemId}
    </div>
  );
};

export default SwitchChatItem;
