import React from 'react';

interface PatientInfo {
  name: string;
  age: number;
  gender: string;
  bloodType: string;
  email: string;
  phone: string;
}

interface MedicalRecord {
  date: string;
  diagnosis: string;
  treatment: string;
}

interface Appointment {
  id: string;
  date: string;
  reason: string;
  doctor: string;
}

interface PatientData {
  info: PatientInfo;
  medicalHistory: MedicalRecord[];
  upcomingAppointments: Appointment[];
}

const PatientProfile: React.FC = () => {
  const patientData: PatientData = {
    info: {
      name: 'John Doe',
      age: 35,
      gender: 'Male',
      bloodType: 'A+',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    },
    medicalHistory: [
      {
        date: '2022-03-15',
        diagnosis: 'Influenza',
        treatment: 'Prescribed antibiotics and rest',
      },
      {
        date: '2021-09-22',
        diagnosis: 'Broken arm',
        treatment: 'Cast applied for 6 weeks',
      },
    ],
    upcomingAppointments: [
      {
        id: '1',
        date: '2024-04-10',
        reason: 'Annual checkup',
        doctor: 'Dr. Jane Smith',
      },
      {
        id: '2',
        date: '2024-05-15',
        reason: 'Follow-up appointment',
        doctor: 'Dr. Michael Johnson',
      },
    ],
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 m-4">
        <div className="relative rounded-xl bg-anep-primary col-span-6 z-20 flex justify-start mx-4">
          <h4 className="text-anep-yellow font-bold m-3 text-lg">
            Patient Information
          </h4>
        </div>
        <div className="p-10 bg-anep-secondary rounded-xl bottom-5 relative z-10 col-span-6">
          <h5 className="font-bold uppercase text-2xl">
            {patientData.info.name}
          </h5>
          <div className="border border-blue-500 max-w-sm"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex gap-1">
                <p className="font-bold">Age: </p>
                {patientData.info.age}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Gender: </p>
                {patientData.info.gender}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Blood Type: </p>
                {patientData.info.bloodType}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Email: </p>
                {patientData.info.email}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Phone: </p>
                {patientData.info.phone}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="font-bold">
                Total Medical Records: {patientData.medicalHistory.length}
              </div>
              <div className="font-bold">
                Upcoming Appointments: {patientData.upcomingAppointments.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5">
        <div className="col-span-2 m-4">
          <div className="relative rounded-xl bg-anep-primary col-span-6 z-20 flex justify-start mx-4">
            <h4 className="text-anep-yellow font-bold m-3 text-lg">
              Medical History
            </h4>
          </div>
          <div className="p-10 bg-anep-secondary rounded-xl bottom-5 relative z-10 col-span-6">
            <ul>
              {patientData.medicalHistory.map((record, index) => (
                <li key={index} className="mb-4">
                  <div className="font-semibold">{record.date}</div>
                  <div>
                    <span className="font-semibold">Diagnosis:</span>{' '}
                    {record.diagnosis}
                  </div>
                  <div>
                    <span className="font-semibold">Treatment:</span>{' '}
                    {record.treatment}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-3">
          <div className="relative rounded-xl bg-anep-primary col-span-6 z-20 flex justify-start mx-4">
            <h4 className="text-anep-yellow font-bold m-3 text-lg">
              Upcoming Appointments
            </h4>
          </div>
          <div className="p-10 bg-anep-secondary rounded-xl bottom-5 relative z-10 col-span-6">
            <ul>
              {patientData.upcomingAppointments.map((appointment) => (
                <li key={appointment.id} className="mb-4">
                  <div className="font-semibold">{appointment.date}</div>
                  <div>
                    <span className="font-semibold">Reason:</span>{' '}
                    {appointment.reason}
                  </div>
                  <div>
                    <span className="font-semibold">Doctor:</span>{' '}
                    {appointment.doctor}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientProfile;