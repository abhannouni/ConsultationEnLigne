// reducer.ts
import { ChatState, ChatActions } from '../../types/chat';

const initialState: ChatState = {
  socket: null,
  messages: [],
};

const chatReducer = (state = initialState, action: ChatActions): ChatState => {
  switch (action.type) {
    case "CONNECT_SOCKET":
      return { ...state, socket: action.payload };
    case "DISCONNECT_SOCKET":
      return { ...state, socket: null };
    case "SEND_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    case "RECEIVE_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

export default chatReducer;