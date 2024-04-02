export interface Patient {
    id: string;
    name: string;
    age: number;
    gender: 'male' | 'female' | 'other';
    bloodType: string;
    contactInfo: {
      email: string;
      phone: string;
    };
    medicalHistory: MedicalRecord[];
    appointments: Appointment[];
  }
  
  export interface MedicalRecord {
    date: string;
    diagnosis: string;
    treatment: string;
  }
  
  export interface Appointment {
    id: string;
    date: string;
    reason: string;
    doctor: string;
  }