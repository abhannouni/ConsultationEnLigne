import React from 'react';

interface Conversation {
  name: string;
  initials: string;
  unreadCount?: number;
}

interface ConversationItemProps {
  conversation: Conversation;
}

const ConversationItem: React.FC<ConversationItemProps> = ({ conversation }) => {
  const { name, initials, unreadCount } = conversation;
  
  return (
    <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
      <div className={`flex items-center justify-center h-8 w-8 bg-${initials.toLowerCase()}-200 rounded-full`}>
        {initials}
      </div>
      <div className="ml-2 text-sm font-semibold">{name}</div>
      {unreadCount && unreadCount > 0 && (
        <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
          {unreadCount}
        </div>
      )}
    </button>
  );
};

interface ConversationListProps {
  conversations: Conversation[];
}

const ConversationList: React.FC<ConversationListProps> = ({ conversations }) => {
  return (
    <div className="flex flex-col space-y-1 mt-4 -mx-2 h-full overflow-y-auto">
      {conversations.map((conversation, index) => (
        <ConversationItem key={index} conversation={conversation} />
      ))}
    </div>
  );
};

interface ConversationsProps {
  activeConversations: Conversation[];
}

const Conversations: React.FC<ConversationsProps> = ({ activeConversations }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row items-center justify-between text-xs">
        <span className="font-bold">Active Conversations</span>
        <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
          {activeConversations.length}
        </span>
      </div>
      <ConversationList conversations={activeConversations} />
    </div>
  );
};

export default Conversations;
