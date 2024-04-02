import React from 'react';
import { Appointment } from '../types/patient';

interface AppointmentsProps {
  appointments: Appointment[];
}

const Appointments: React.FC<AppointmentsProps> = ({ appointments }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id} className="mb-2">
              <div className="font-semibold">{appointment.date}</div>
              <div>
                <span className="font-semibold">Reason:</span> {appointment.reason}
              </div>
              <div>
                <span className="font-semibold">Doctor:</span> {appointment.doctor}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No upcoming appointments found.</p>
      )}
    </div>
  );
};

export default Appointments;