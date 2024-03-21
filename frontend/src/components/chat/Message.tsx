type MessageProps = {
    message: string;
    sender: any;
    time: string;
    status: any;
};

export default function MessageComp({ message, sender, time, status }: MessageProps) {
    return (
        <>
            <div className={`chat ${sender.id === '12' ? 'chat-start' : 'chat-end'}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Avatar" src={sender.avatar} />
                    </div>
                </div>
                <div className="chat-header">
                    {sender.name}
                    <time className="text-xs opacity-50">{time}</time>
                </div>
                <div className="chat-bubble">{message}</div>
                <div className="chat-footer opacity-50">{status}</div>
            </div>
        </>
    );
}
