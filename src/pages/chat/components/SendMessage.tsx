import { FC } from "react";
import { chatAPI } from "../../../services/chatServices";
import cls from "classnames";
import { useForm } from "react-hook-form";
import { CreateMessageType } from "../../../types/messsage";

interface SendMessageProps {
  chatId: number;
}

const SendMessage: FC<SendMessageProps> = (props) => {
  const { chatId } = props;
  const [sendMessage, { isError, isLoading }] = chatAPI.useSendMessageMutation();
  const { register, handleSubmit } = useForm<CreateMessageType>();

  const handleSendMessage = handleSubmit((messageForm) => {
    const dateTime = +new Date();
    sendMessage({ ...messageForm, dateTime, chatId });
  });

  return (
    <div className={"flex flex-col"}>
      <div className={"flex space-x-5"}>
        {/* вынести отдельный инпут */}
        <input
          placeholder="Name"
          className="bg-blue-100 w-150 p-3 rounded-5 border-blue-300 outline-blue-500"
          type="text"
          {...register("senderName")}
        />
        <input
          placeholder="Message"
          className="bg-blue-100 w-40vw p-3 rounded-5 border-blue-300 outline-blue-500"
          type="text"
          {...register("message")}
        />
        <button
          className={cls("self-center bg-blue-400 text-white rounded-10 px-10 py-5", { "bg-gray-200": isLoading })}
          disabled={isLoading}
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
      {isError && "Ошибка при отправке сообщения"}
    </div>
  );
};

export default SendMessage;
