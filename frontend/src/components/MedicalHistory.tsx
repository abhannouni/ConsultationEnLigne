import React from 'react';
import { MedicalRecord } from '../types/patient';

interface MedicalHistoryProps {
  medicalHistory: MedicalRecord[];
}

const MedicalHistory: React.FC<MedicalHistoryProps> = ({ medicalHistory }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Medical History</h2>
      {medicalHistory.length > 0 ? (
        <ul>
          {medicalHistory.map((record, index) => (
            <li key={index} className="mb-2">
              <div className="font-semibold">{record.date}</div>
              <div>
                <span className="font-semibold">Diagnosis:</span> {record.diagnosis}
              </div>
              <div>
                <span className="font-semibold">Treatment:</span> {record.treatment}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No medical history found.</p>
      )}
    </div>
  );
};

export default MedicalHistory;