import Navbar from "../components/Navbar";
import ChatForm from "../components/chat/ChatForm";


export default function Chat() {
  return (
    <>
        <Navbar />
      <div className="min-w-full bg-base-200 border-x border-b border-gray-200  dark:border-gray-700 rounded lg:grid lg:grid-cols-3">
        <div >
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Chat</h1>
        </div>
        <ChatForm />
      </div>
      </>
  )
}
