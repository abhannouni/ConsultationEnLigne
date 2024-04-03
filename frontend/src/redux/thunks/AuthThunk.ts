import baseUrl from "../../api/BaseUrl";
import {login , logout , register} from "../actions/AuthAction";
import { toast } from "react-toastify";



export const AuthThunk = (data: any) => async (dispatch: any) => {
  try {
    const response = await baseUrl.post("/users", data);
    console.log(response.status);
    dispatch(register(response.data.name, response.data.email, response.data.password));
  } catch (error) {
    console.log(error);
  }
};

export const LoginThunk = (data: any) => async (dispatch: any) => {
    try {
        console.log("thunk",data);
        
        const response = await baseUrl.post("/users/login", data);
        dispatch(login(response.data)); 
        console.log(response.data);
          
        if(response.status !== 200){
            console.log(response.data.error);
        }
        
        if(response.data.token){
            document.cookie = `token=${response.data.token}; path=/;`;
        }
    } catch (error: any) {
        console.log(error.response.data);
        toast.error(error.response.data.error);
        console.log(error);
    }
};

export const LogoutThunk = () => async (dispatch: any) => {
    try {
        await baseUrl.post("/users/logout");
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        dispatch(logout());
    } catch (error) {
        console.log(error);
    }
};

export const getUserProfileThunk = (id: any) => async (dispatch: any) => {
    try {
        const response = await baseUrl.get(`/users/profile/${id}`);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

export const getDoctorsThunk = () => async (dispatch: any) => {
    try {
        const response = await baseUrl.get("/users/doctors");
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

