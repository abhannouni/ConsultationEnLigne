import {http} from "../../lib/http";
import { toast } from "react-toastify";
import { getAppointment } from "../actions/AppointmentAction";

export const getAppointmentThunk = (date : string , doctorId : string) => async (dispatch: any) => {
    try {
        const data = {date, doctorId};
        const response = await http.get("/appointment/get", data as any);
        dispatch(getAppointment(response.data));
    } catch (error) {
        console.log(error);
    }
}