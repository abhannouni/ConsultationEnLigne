import React from 'react';
import { Patient } from '../types/patient';

interface PatientInfoProps {
  patient: Patient;
}

const PatientInfo: React.FC<PatientInfoProps> = ({ patient }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Patient Information</h2>
      <p>
        <span className="font-semibold">Name:</span> {patient.name}
      </p>
      <p>
        <span className="font-semibold">Age:</span> {patient.age}
      </p>
      <p>
        <span className="font-semibold">Gender:</span> {patient.gender}
      </p>
      <p>
        <span className="font-semibold">Blood Type:</span> {patient.bloodType}
      </p>
      <p>
        <span className="font-semibold">Email:</span> {patient.contactInfo.email}
      </p>
      <p>
        <span className="font-semibold">Phone:</span> {patient.contactInfo.phone}
      </p>
    </div>
  );
};

export default PatientInfo;