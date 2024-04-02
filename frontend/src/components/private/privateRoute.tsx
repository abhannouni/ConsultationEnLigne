import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({}) => {
    const storedUser = localStorage.getItem('user');
    console.log("storedUser",storedUser);
    const user = storedUser ? JSON.parse(storedUser).user :null;
    console.log("user",user);
    
    
    return user ? <Outlet /> : <Navigate to="/auth" replace />;
}

export default PrivateRoute;