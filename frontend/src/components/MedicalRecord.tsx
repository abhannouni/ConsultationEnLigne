import React from 'react';

interface MedicalRecord {
  date: string;
  diagnosis: string;
  treatment: string;
}

interface MedicalRecordProps {
  medicalRecords: MedicalRecord[];
}

const MedicalRecord: React.FC<MedicalRecordProps> = ({ medicalRecords }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 m-4">
      <div className="relative rounded-xl bg-anep-primary col-span-6 z-20 flex justify-start mx-4">
        <h4 className="text-anep-yellow font-bold m-3 text-lg">Medical Records</h4>
      </div>
      <div className="p-10 bg-anep-secondary rounded-xl bottom-5 relative z-10 col-span-6">
        {medicalRecords.length > 0 ? (
          <ul>
            {medicalRecords.map((record, index) => (
              <li key={index} className="mb-4">
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
          <p>No medical records found.</p>
        )}
      </div>
    </div>
  );
};

export default MedicalRecord;