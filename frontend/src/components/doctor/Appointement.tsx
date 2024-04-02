import React, { useState } from 'react';

interface DoctorInfo {
  name: string;
  age: number;
  gender: string;
  specialization: string;
  email: string;
  phone: string;
}

interface AppointmentForm {
  patientName: string;
  patientEmail: string;
  appointmentReason: string;
  preferredDate: string;
  preferredTime: string;
}

const Appointment: React.FC<{ doctorInfo: DoctorInfo }> = ({ doctorInfo }) => {
  const [formData, setFormData] = useState<AppointmentForm>({
    patientName: '',
    patientEmail: '',
    appointmentReason: '',
    preferredDate: '',
    preferredTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log(formData);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 m-4">
      <div className="relative rounded-xl bg-anep-primary col-span-6 z-20 flex justify-start mx-4">
        <h4 className="text-anep-yellow font-bold m-3 text-lg">Doctor Appointment Form</h4>
      </div>
      <div className="p-10 bg-anep-secondary rounded-xl bottom-5 relative z-10 col-span-6">
        <h5 className="font-bold uppercase text-2xl">{doctorInfo.name}</h5>
        <div className="border border-blue-500 max-w-sm"></div>
        <div className="grid grid-cols-1 gap-3 mt-4">
          <div>
            <p className="font-bold">Specialization:</p>
            <p>{doctorInfo.specialization}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="patientName" className="font-bold">
                  Patient Name
                </label>
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="patientEmail" className="font-bold">
                  Patient Email
                </label>
                <input
                  type="email"
                  id="patientEmail"
                  name="patientEmail"
                  value={formData.patientEmail}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="appointmentReason" className="font-bold">
                Appointment Reason
              </label>
              <textarea
                id="appointmentReason"
                name="appointmentReason"
                value={formData.appointmentReason}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="preferredDate" className="font-bold">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="preferredTime" className="font-bold">
                  Preferred Time
                </label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4"
            >
              Submit Appointment Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;