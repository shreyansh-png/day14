import axios from "axios";
import { toast } from "react-toastify";

export const axiosInstance=axios.create({
    baseURL:"https://fakestoreapi.com",
});

// REQUEST interceptor: runs BEFORE every request is sent
axiosInstance.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem("token");
        if(token){
            config.headers.Authorization="Bearer"+token;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

// RESPONSE interceptor: runs AFTER every response comes back
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("response->",response.status,response.config.url);
        return response;
    },
    (error)=>{
        const msg = error.response?.data;
    toast.error(typeof msg === "string" ? msg : error.message);

    return Promise.reject(error);
    }
    )
