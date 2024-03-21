import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './screens/Home'
import Login from './screens/Login'
import Chat from './screens/Chat';
import Navbar from './components/Navbar';
import ChatForm from './components/chat/ChatForm';
import Signup from './components/auth/Signup';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={
              <>
                <div className='min-h-screen'>
                  <Navbar />
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
