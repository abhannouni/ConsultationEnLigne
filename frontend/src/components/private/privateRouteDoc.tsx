import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteDoc = ({}) => {
    const storedUser = localStorage.getItem('user');
    console.log("storedUser",storedUser);
    const role = storedUser ? JSON.parse(storedUser).user.role :null;
    console.log("role",role);
    
    
    return role=='patient' ? <Outlet /> : <Navigate to="/" replace />;
}

export default PrivateRouteDoc;