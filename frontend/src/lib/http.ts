
import Axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const http = Axios.create({
  baseURL: "http://localhost:5000/api",
  headers : {
    "Accept" : "accplication/json"
  }
})

http.interceptors.request.use((config) => {
  const token: string | null = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
})
http.interceptors.response.use((config) => config, 
  (error) => {
    if (error instanceof AxiosError)
      if (error.response)
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
  }
)