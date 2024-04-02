// thunks.ts
import { Dispatch } from 'redux';
import { connectSocket, disconnectSocket, sendMessage, receiveMessage } from '../actions/ChatAction';
import { Message, ChatActions } from '../../types/chat';

export const connectWebSocket = (url: string) => (dispatch: Dispatch<ChatActions>) => {
  const socket = new WebSocket(url);

  socket.onopen = () => {
    dispatch(connectSocket(socket));
  };

  socket.onmessage = (event) => {
    const message: Message = JSON.parse(event.data);
    dispatch(receiveMessage(message));
  };

  socket.onclose = () => {
    dispatch(disconnectSocket());
  };

  return socket;
};

export const sendMessageThunk = (message: Message, socket: WebSocket) => (dispatch: Dispatch<ChatActions>) => {
  socket.send(JSON.stringify(message));
  dispatch(sendMessage(message));
};