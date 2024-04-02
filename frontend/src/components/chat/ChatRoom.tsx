import Chat from "./Chat";
import { connectWebSocket, sendMessageThunk } from '../../redux/thunks/ChatThunk';
import React , { useEffect } from 'react';
import io from 'socket.io-client';

import { useDispatch, useSelector } from 'react-redux';
import { ChatState, Message } from '../../types/chat';

export default function ChatRoom() {
  const activeConversations = [
    { name: 'Henry Boyd', initials: 'H' },
    { name: 'Marta Curtis', initials: 'M', unreadCount: 2 },
    { name: 'Philip Tucker', initials: 'P' },
    { name: 'Christine Reid', initials: 'C' },
    { name: 'Christine Reid', initials: 'C' },
    { name: 'Christine Reid', initials: 'C' },
    { name: 'Christine Reid', initials: 'C' },
    { name: 'Christine Reid', initials: 'C' },
    { name: 'Christine Reid', initials: 'C' },
    { name: 'Christine Reid', initials: 'C' },
    { name: 'Christine Reid', initials: 'C' },
    { name: 'Christine Reid', initials: 'C' },
    { name: 'Christine Reid', initials: 'C' },
    { name: 'Jerry Guzman', initials: 'J' }
  ];
  // const messages = [
  //   { senderInitial: 'A', messageContent: 'Hey How are you today?', isSender: false },
  //   { senderInitial: 'A', messageContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa commodi illum saepe numquam maxime asperiores voluptate sit, minima perspiciatis.', isSender: false },
  //   { senderInitial: 'A', messageContent: "I'm ok what about you?", isSender: true },
  //   { senderInitial: 'A', messageContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing. ?', isSender: true },
  //   { senderInitial: 'A', messageContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing. ?', isSender: true },
  //   { senderInitial: 'A', messageContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing. ?', isSender: true },
  //   { senderInitial: 'A', messageContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing. ?', isSender: true },
  //   { senderInitial: 'A', messageContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing. ?', isSender: true },
  //   { senderInitial: 'A', messageContent: 'Lorem ipsum dolor sit amet !', isSender: false },
  //   { senderInitial: 'A', messageContent: 'Lorem ipsum dolor sit amet !', isSender: false },
  //   { senderInitial: 'A', messageContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing. ?', isSender: true, seen: true },
  // ];

  const dispatch = useDispatch();
  const { socket, messages } = useSelector<{ chat: ChatState }, ChatState>((state) => state.chat);

  useEffect(() => {
    const socket = io('http://localhost:5000', {
      withCredentials: true, // Enable credentials (if using cookies for authentication)
    });

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, [dispatch]);


  const sendMessage = (content: string) => {
    if (socket) {
      const message: Message = {
        content,
        sender: 'You',
        timestamp: Date.now(),
      };
      dispatch(sendMessageThunk(message, socket));
    }
  };


  return (
    <div className="flex antialiased text-gray-800" 
          style={{
            height: '550px',
          }}
    >
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          {/*  */}
          {/* <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <Conversations activeConversations={activeConversations} />
          </div> */}
          {/*  */}
          <div className="flex flex-col flex-auto h-full p-6 sticky top-0">
            <div
              className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
            >
              <div className="flex flex-col h-full overflow-x-auto mb-4">
              <Chat messages={messages} />
              </div>
              <div
                className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
              >
                <div>
                  <button
                    className="flex items-center justify-center text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="flex-grow ml-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage(e.currentTarget.value)}
                    />
                    <button
                      className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <button
                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                  >
                    <span>Send</span>
                    <span className="ml-2">
                      <svg
                        className="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
