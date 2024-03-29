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
        console.log(data);
        
        const response = await baseUrl.post("/users/login", data);
        dispatch(login(response.data.email, response.data.password));
        console.log(response.status);
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

