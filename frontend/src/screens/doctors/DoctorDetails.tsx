import React from 'react'
import ProfileDoctor from '../../components/doctor/DoctorProfile'

interface DoctorInfo {
  name: string;
  age: number;
  gender: string;
  specialization: string;
  email: string;
  phone: string;
}

interface DoctorSchedule {
  day: string;
  time: string;
}


const DoctorDetails: React.FC = () => {
  return <ProfileDoctor />
};

export default DoctorDetails
