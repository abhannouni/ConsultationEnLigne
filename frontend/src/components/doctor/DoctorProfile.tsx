import React, { useState,useEffect } from 'react';
import Calendar from '../utils/Calendar';
import AppointmentTimePicker from '../utils/AppointmentTimePicker';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctorThunk } from "../../redux/thunks/DoctorThunk";

interface User {
  name: string;
  email: string;
  role: string;
}

interface DoctorInfo {
  user: User;
  speciality: string;
  qualification: string;
  experience: string;
  fees: string;
  phone: string;
  address: string;
  city: string;
  country: string;
}


const ProfileDoctor: React.FC<{ id: string }> = ({ id }) => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { doctor, loading } = useSelector((state: any) => state.Doctors);
  
  useEffect(() => {
    dispatch(getDoctorThunk(id));
  }, [dispatch, doctor]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!doctor && !loading) {
    return <div>No doctor found.</div>;
  }

 
  

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 m-4">
        <div className="relative rounded-xl bg-anep-primary col-span-6 z-20 flex justify-start mx-4">
          <h4 className="text-anep-yellow font-bold m-3 text-lg">Doctor Information</h4>
        </div>
        <div className="p-10 bg-anep-secondary rounded-xl bottom-5 relative z-10 col-span-6">
          <h5 className="font-bold uppercase text-2xl">{doctor?.user.name}</h5>
          <div className="border border-blue-500 max-w-sm"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex gap-1">
                <p className="font-bold">Name:</p>
                {doctor?.user.name}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Email:</p>
                {doctor?.user.email}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Role:</p>
                {doctor?.user.role}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Speciality:</p>
                {doctor?.speciality}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Qualification:</p>
                {doctor?.qualification}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Experience:</p>
                {doctor?.experience}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex gap-1">
                <p className="font-bold">Fees:</p>
                {doctor?.fees}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Phone:</p>
                {doctor?.phone}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Address:</p>
                {doctor?.address}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">City:</p>
                {doctor?.city}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Country:</p>
                {doctor?.country}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5">
        <div className="col-span-2 m-4">
          <div className="relative rounded-xl bg-anep-primary col-span-6 z-20 flex justify-start mx-4">
            <h4 className="text-anep-yellow font-bold m-3 text-lg">Schedule</h4>
          </div>
          <div className="p-2 bg-anep-secondary rounded-xl bottom-5 relative z-10 col-span-6">
            <Calendar currentDate={new Date()} selectedDate={selectedDate} onDateSelect={handleDateSelect} />
          </div>
        </div>
        <div className="col-span-3">
          <div className="relative rounded-xl bg-anep-primary col-span-6 z-20 flex justify-start mx-4">
            <h4 className="text-anep-yellow font-bold m-3 text-lg">Appointment Time</h4>
          </div>
          <div className="p-10 bg-anep-secondary rounded-xl bottom-5 relative z-10 col-span-6">
            <AppointmentTimePicker selectedDate={selectedDate} id={id}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDoctor;
