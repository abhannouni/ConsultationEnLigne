import React from 'react';
import PatientInfo from '../../components/PatientInfo';
import MedicalHistory from '../../components/MedicalHistory';
import Appointments from '../../components/Appointments';
import { Patient } from '../../types/patient';
import PatientProfile from '../../components/patient/PatientProfile';

const PatientProfilePage: React.FC = () => {
  const patientData: Patient = {
    id: '1234',
    name: 'John Doe',
    age: 35,
    gender: 'male',
    bloodType: 'A+',
    contactInfo: {
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
    appointments: [
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
    <div className="container mx-auto px-4 py-8">
      <PatientProfile />
    </div>
  );
};

export default PatientProfilePage;