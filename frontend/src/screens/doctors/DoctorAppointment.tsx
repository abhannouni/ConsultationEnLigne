import React from "react";

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
    return (
        <Appointment doctorInfo={doctorInfo} />
    );
};

export default DoctorAppointment;