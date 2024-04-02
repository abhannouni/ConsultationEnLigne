import React, { useState } from 'react';

interface DoctorApplicationForm {
  name: string;
  age: number;
  gender: string;
  specialization: string;
  email: string;
  phone: string;
}

const DoctorApplication: React.FC = () => {
  const [formData, setFormData] = useState<DoctorApplicationForm>({
    name: '',
    age: 0,
    gender: '',
    specialization: '',
    email: '',
    phone: '',
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission, e.g., send data to the server
    console.log(formData);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setIsSubmitted(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 m-4">
      <div className="relative rounded-xl bg-anep-primary col-span-6 z-20 flex justify-start mx-4">
        <h4 className="text-anep-yellow font-bold m-3 text-lg">Doctor Application Form</h4>
      </div>
      <div className="p-10 bg-anep-secondary rounded-xl bottom-5 relative z-10 col-span-6">
        {isSubmitted ? (
          <div>
            <p className="text-green-500 font-bold">Your application has been submitted successfully.</p>
            <button
              type="button"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4"
              onClick={handleEdit}
            >
              Edit Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="font-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="age" className="font-bold">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="gender" className="font-bold">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="specialization" className="font-bold">
                  Specialization
                </label>
                <input
                  type="text"
                  id="specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="font-bold">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
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
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DoctorApplication;