// actions.ts
import { CONNECT_SOCKET, DISCONNECT_SOCKET, SEND_MESSAGE, RECEIVE_MESSAGE, Message, ChatActions } from '../types/types';

export const connectSocket = (socket: WebSocket): ChatActions => ({
  type: "CONNECT_SOCKET",
  payload: socket,
});

export const disconnectSocket = (): ChatActions => ({
  type: "DISCONNECT_SOCKET",
});

export const sendMessage = (message: Message): ChatActions => ({
  type: "SEND_MESSAGE",
  payload: message,
});

export const receiveMessage = (message: Message): ChatActions => ({
  type: "RECEIVE_MESSAGE",
  payload: message,
});