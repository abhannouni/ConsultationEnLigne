import React, { useState, useEffect } from 'react';
import { IinfoDoc } from '../../types/doctor'; 
import { useDispatch, useSelector } from 'react-redux';
import { createDoctorThunk, getDoctorThunk } from '../../redux/thunks/DoctorThunk';

const DoctorApplication: React.FC = () => {
  const dispatch = useDispatch();
  const { doctor, loading } = useSelector((state: any) => state.Doctors);

  useEffect(() => {
    // @ts-ignore
    dispatch(getDoctorThunk());
  }, [dispatch]);

  useEffect(() => {
    if (doctor) {
      setFormData(doctor);
      setIsSubmitted(true);
    }
  }, [doctor]);

  const [formData, setFormData] = useState<IinfoDoc>({
    speciality: '',
    qualification: '',
    experience: '',
    fees: '',
    phone: '',
    address: '',
    city: '',
    country: '',
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setIsEditing(false);
    if (doctor) {
      // @ts-ignore
      dispatch(updateDoctorThunk(formData));
    }else{
      // @ts-ignore
      dispatch(createDoctorThunk(formData));
    }
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
        {loading == true ? (
          <p className="text-gray-500">Loading...</p>
        ) : isSubmitted && !isEditing ? (
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
            {/* <div>
              <label htmlFor="user" className="font-bold">
                User
              </label>
              <input
                type="text"
                id="user"
                name="user"
                value={formData.user}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div> */}
            <div>
              <label htmlFor="speciality" className="font-bold">
                Speciality
              </label>
              <input
                type="text"
                id="speciality"
                name="speciality"
                value={formData.speciality}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="qualification" className="font-bold">
                Qualification
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="experience" className="font-bold">
                Experience
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fees" className="font-bold">
                Fees
              </label>
              <input
                type="text"
                id="fees"
                name="fees"
                value={formData.fees}
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
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="address" className="font-bold">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="city" className="font-bold">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="country" className="font-bold">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4"
          >
            Submit Application
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-md mt-4">
              cancel
          </button>
        </form>
        )}
      </div>
    </div>
  );
};

export default DoctorApplication;