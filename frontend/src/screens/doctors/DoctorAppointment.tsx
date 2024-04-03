import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAppointmentThunk } from "../../redux/thunks/AppointmentThunk";
import Appointment from "../../components/doctor/Appointement";

const doctorInfo = {
    name: 'Dr. Jane Smith',
    age: 45,
    gender: 'Female',
    specialization: 'Cardiology',
    email: 'jane.smith@hospital.com',
    phone: '555-1234',
  };

const DoctorAppointment: React.FC = () => {
    const dispatch = useDispatch();
    const appointments = useSelector((state: any) => state.Appointments.appointments);
    return (
        <Appointment doctorInfo={doctorInfo} />
    );
};

export default DoctorAppointment;