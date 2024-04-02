import React from "react";
import MedicalRecord from "../../components/MedicalRecord";

const medicalRecords = [
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
  ];

const RecordHome: React.FC = () => {
    return (
        <MedicalRecord medicalRecords={medicalRecords} />
    );
}

export default RecordHome;