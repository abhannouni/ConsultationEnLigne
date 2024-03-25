import { useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import MessageComp from './Chat';


type Message = {
    id: string;
    message: string;
    sender: {
        id: string;
        name: string;
        avatar: string;
    };
    time: string;
    status: string;
};

const messagees: Message[] = [
    {
        id: '1',
        message: "Hello there!",
        sender: {
            id: '12',
            name: "Obi-Wan Kenobi",
            avatar: "https://example.com/obi-wan-avatar.jpg"
        },
        time: "12:00 PM",
        status: "Sent"
    },
    {
        id: '2',
        message: "General Kenobi!",
        sender: {
            id: '34',
            name: "Anakin Skywalker",
            avatar: "https://example.com/anakin-avatar.jpg"
        },
        time: "12:05 PM",
        status: "Delivered"
    },
    {
        id: '3',
        message: "I am your father!",
        sender: {
            id: '56',
            name: "Darth Vader",
            avatar: "https://example.com/darth-vader-avatar.jpg"
        },
        time: "12:10 PM",
        status: "Seen"
    },
    {
        id: '4',
        message: "May the Force be with you.",
        sender: {
            id: '78',
            name: "Luke Skywalker",
            avatar: "https://example.com/luke-skywalker-avatar.jpg"
        },
        time: "12:15 PM",
        status: "Sent"
    }
];

export default function ChatForm() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>(messagees);

    const sendMessage = () => {
        if (message) {
            setMessages([
                ...messages,
                {
                    id: '5',
                    message: message,
                    sender: {
                        id: '12',
                        name: "Obi-Wan Kenobi",
                        avatar: "https://example.com/obi-wan-avatar.jpg"
                    },
                    time: "12:20 PM",
                    status: "Sending..."
                }
            ]);
        }
    }

    return (
        <div className="lg:col-span-2 lg:block ">
            <div className="w-full h-full">
            <div className="p-3 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Chat</h1>
            </div>
            <div className=" w-full p-6 overflow-y-auto  bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <ul className="space-y-2"></ul>
                <ScrollToBottom>
                    {messages.map((message) => (
                        <MessageComp 
                            key={message.id}
                            message={message.message} 
                            sender={message.sender} 
                            time={message.time} 
                            status={message.status} 
                        />
                    ))}
                </ScrollToBottom>
            </div>
            <div className="flex items-center justify-between w-full p-3 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <input
                    className="block w-full py-2 pl-4 mx-3 outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => (e.key === 'Enter' ? sendMessage() : null)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    </div>
    )
}
