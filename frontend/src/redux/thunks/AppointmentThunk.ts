import {http} from "../../lib/http";
import { toast } from "react-toastify";
import { getAppointment } from "../actions/AppointmentAction";

export const getAppointmentThunk = (date : string , doctorId : string) => async (dispatch: any) => {
    try {
        const response = await http.get(`/appointment?date=${date}&doctorId=${doctorId}`);
        dispatch(getAppointment(response.data));
        toast.success("Appointment fetched successfully");
    } catch (error) {
        console.log(error);
        toast.error("Appointment fetch failed");
    }
}

export const createAppointmentThunk = (appointment: any) => async (dispatch: any) => {
    try {
        const response = await http.post("/appointment", appointment);
        dispatch(getAppointment(response.data));
        toast.success("Appointment created successfully");
    } catch (error) {
        console.log(error);
        toast.error("Appointment creation failed");
    }
}