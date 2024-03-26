import { useState } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import bg_image from "../assets/960592.jpg"; 

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const switchLogin = () => {
    console.log(isLogin);
    setIsLogin(!isLogin);
  };

  

  return (
    <>
    <div className="grid h-screen place-items-center " style={{ backgroundImage: `url(${bg_image})` }}>
      {isLogin ? <Login switchLogin={switchLogin} /> : <Signup switchLogin={switchLogin} />}
    </div>
    </>
  );
}
