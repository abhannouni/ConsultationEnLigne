import baseUrl from "../../api/BaseUrl";
import { getDoctors, getDoctor, createDoctor } from "../actions/DoctorAction";
import {http} from "../../lib/http";
import { toast } from "react-toastify";

export const getDoctorsThunk = () => async (dispatch: any) => {
    try {
        const response = await http.get("/infoDoc");
        dispatch(getDoctors(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const getDoctorThunk = () => async (dispatch: any) => {
    try {
        const response = await http.get(`/infoDoc/get`);
        dispatch(getDoctor(response.data));
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

export const createDoctorThunk = (doctor: any) => async (dispatch: any) => {
    try {
        const response = await http.post("/infoDoc", doctor);
        console.log(response);
        dispatch(createDoctor(response.data));
        toast.success("Doctor created successfully");
    } catch (error) {
        console.log(error);
        toast.error("Doctor creation failed");
    }
};


