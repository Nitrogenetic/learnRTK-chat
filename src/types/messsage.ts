export type MessageType = {
  chatId: number;
  dateTime: number;
  senderName: string;
  message: string;
  id: number;
};

export type CreateMessageType = {
  chatId: number;
  dateTime: number;
  senderName: string;
  message: string;
};
