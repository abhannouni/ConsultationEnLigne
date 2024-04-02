import React from 'react';

interface Message {
  senderInitial: string;
  messageContent: string;
  isSender: boolean;
  seen?: boolean;
}

interface MessageProps {
  message: Message;
}

const MessageBubble: React.FC<MessageProps> = ({ message }) => {
  const { senderInitial, messageContent, isSender, seen } = message;

  return (
    <div className={`col-start-${isSender ? '6' : '1'} col-end-${isSender ? '13' : '8'} p-3 rounded-lg`}>
      <div className={`flex items-center justify-${isSender ? 'start' : ''} ${isSender ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0`}>
          {senderInitial}
        </div>
        <div className={`relative ${isSender ? 'mr' : 'ml'}-3 text-sm bg-${isSender ? 'indigo' : 'white'} py-2 px-4 shadow rounded-xl`}>
          <div>{messageContent}</div>
          {seen && isSender && (
            <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
              Seen
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
      </div>
    </div>
  );
};

interface ChatProps {
  messages: Message[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return <MessageList messages={messages} />;
};

export default Chat;
