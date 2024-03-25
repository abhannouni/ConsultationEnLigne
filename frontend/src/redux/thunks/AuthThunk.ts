import baseUrl from "../../api/BaseUrl";
import {login , logout , register} from "../actions/AuthAction";

export const AuthThunk = (data: any) => async (dispatch: any) => {
  try {
    const response = await baseUrl.post("/users", data);
    console.log(response.data);
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
    } catch (error) {
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

