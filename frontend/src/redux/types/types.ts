// types.ts
export interface Message {
    content: string;
    sender: string;
    timestamp: number;
  }
  
  export interface ChatState {
    socket: WebSocket | null;
    messages: Message[];
  }
  
  export const CONNECT_SOCKET = 'CONNECT_SOCKET';
  export const DISCONNECT_SOCKET = 'DISCONNECT_SOCKET';
  export const SEND_MESSAGE = 'SEND_MESSAGE';
  export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
  
  interface ConnectSocketAction {
    type: typeof CONNECT_SOCKET;
    payload: WebSocket;
  }
  
  interface DisconnectSocketAction {
    type: typeof DISCONNECT_SOCKET;
  }
  
  interface SendMessageAction {
    type: typeof SEND_MESSAGE;
    payload: Message;
  }
  
  interface ReceiveMessageAction {
    type: typeof RECEIVE_MESSAGE;
    payload: Message;
  }
  
  export type ChatActions =
    | ConnectSocketAction
    | DisconnectSocketAction
    | SendMessageAction
    | ReceiveMessageAction;