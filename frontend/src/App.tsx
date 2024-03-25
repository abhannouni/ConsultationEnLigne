import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './screens/Home'
import Auth from './screens/Auth'
import Chat from './screens/Chat';
import NavbarDefault from './components/Navbar';
import ChatForm from './components/chat/ChatForm';
import ChatRoom from './components/chat/ChatRoom';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/doctors" element={<ChatRoom />} />
            <Route path="/chatroom" element={<ChatRoom />} />
            <Route path="*" element={
              <>
                <div className='min-h-screen'>
                  <NavbarDefault />
                  <div className="grid grid-cols-5 gap-3">
                    <div className="bg-blue-100">1st col</div>
                    <div className="bg-red-100 col-span-4"><ChatForm /></div>
                  </div>   
                </div> 
              </>} 
            />
            
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
