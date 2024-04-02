import React, {useState} from 'react';
import Calendar from '../utils/Calendar'
import AppointmentTimePicker from '../utils/AppointmentTimePicker';

// Interfaces from the previous code
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

interface Appointment {
  id: string;
  date: string;
  reason: string;
  patient: string;
}

interface DoctorProfile {
  info: DoctorInfo;
  schedule: DoctorSchedule[];
  upcomingAppointments: Appointment[];
}

const ProfileDoctor: React.FC = () => {
  const doctorProfile: DoctorProfile = {
    info: {
      name: 'Jane Smith',
      age: 42,
      gender: 'Female',
      specialization: 'Cardiology',
      email: 'jane.smith@hospital.com',
      phone: '987-654-3210',
    },
    schedule: [
      {
        day: 'Monday',
        time: '9:00 AM - 12:00 PM',
      },
      {
        day: 'Wednesday',
        time: '2:00 PM - 5:00 PM',
      },
      {
        day: 'Friday',
        time: '10:00 AM - 1:00 PM',
      },
    ],
    upcomingAppointments: [
      {
        id: '1',
        date: '2024-04-10',
        reason: 'Annual checkup',
        patient: 'John Doe',
      },
      {
        id: '2',
        date: '2024-05-15',
        reason: 'Follow-up appointment',
        patient: 'Emily Wilson',
      },
      {
        id: '3',
        date: '2024-06-01',
        reason: 'Consultation',
        patient: 'Michael Brown',
      },
    ],
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

const handleDateSelect = (date: Date) => {
  setSelectedDate(date);
};

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 m-4">
        <div className="relative rounded-xl bg-anep-primary col-span-6 z-20 flex justify-start mx-4">
          <h4 className="text-anep-yellow font-bold m-3 text-lg">
            Doctor Information
          </h4>
        </div>
        <div className="p-10 bg-anep-secondary rounded-xl bottom-5 relative z-10 col-span-6">
          <h5 className="font-bold uppercase text-2xl">
            {doctorProfile.info.name}
          </h5>
          <div className="border border-blue-500 max-w-sm"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex gap-1">
                <p className="font-bold">Age: </p>
                {doctorProfile.info.age}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Gender: </p>
                {doctorProfile.info.gender}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Specialization: </p>
                {doctorProfile.info.specialization}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Email: </p>
                {doctorProfile.info.email}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Phone: </p>
                {doctorProfile.info.phone}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="font-bold">
                Total Schedule Entries: {doctorProfile.schedule.length}
              </div>
              <div className="font-bold">
                Upcoming Appointments: {doctorProfile.upcomingAppointments.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5">
        <div className="col-span-2 m-4">
          <div className="relative rounded-xl bg-anep-primary col-span-6 z-20 flex justify-start mx-4">
            <h4 className="text-anep-yellow font-bold m-3 text-lg">
              Schedule
            </h4>
          </div>
          <div className="p-2 bg-anep-secondary rounded-xl bottom-5 relative z-10 col-span-6">
                <Calendar currentDate={new Date()} selectedDate={selectedDate} onDateSelect={handleDateSelect} />
          </div>
        </div>
        <div className="col-span-3">
          <div className="relative rounded-xl bg-anep-primary col-span-6 z-20 flex justify-start mx-4">
            <h4 className="text-anep-yellow font-bold m-3 text-lg">
              Appointment Time
            </h4>
          </div>
          <div className="p-10 bg-anep-secondary rounded-xl bottom-5 relative z-10 col-span-6">
            <AppointmentTimePicker />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDoctor;