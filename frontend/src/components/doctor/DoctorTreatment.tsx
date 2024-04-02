import React, { useState } from 'react';

interface Treatment {
  date: string;
  diagnosis: string;
  treatment: string;
}

const DoctorTreatment: React.FC = () => {
  const [treatment, setTreatment] = useState<Treatment>({
    date: '',
    diagnosis: '',
    treatment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTreatment({ ...treatment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log(treatment);
    // Reset form after submission
    setTreatment({
      date: '',
      diagnosis: '',
      treatment: '',
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 m-4">
      <div className="relative rounded-xl bg-anep-primary col-span-6 z-20 flex justify-start mx-4">
        <h4 className="text-anep-yellow font-bold m-3 text-lg">Write Treatment</h4>
      </div>
      <div className="p-10 bg-anep-secondary rounded-xl bottom-5 relative z-10 col-span-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="font-bold">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={treatment.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="diagnosis" className="font-bold">
                Diagnosis
              </label>
              <input
                type="text"
                id="diagnosis"
                name="diagnosis"
                value={treatment.diagnosis}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="treatment" className="font-bold">
              Treatment
            </label>
            <textarea
              id="treatment"
              name="treatment"
              value={treatment.treatment}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4"
          >
            Submit Treatment
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorTreatment;