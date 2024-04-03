import CardDoctor from "../../components/Card";
import { useDispatch, useSelector } from 'react-redux';
import { getDoctorsThunk } from "../../redux/thunks/DoctorThunk";
import { useEffect } from 'react';

function EmployeHome() {
  const dispatch = useDispatch();
  const doctors = useSelector((state: any) => state.Doctors.doctors);
  const loading = useSelector((state: any) => state.Doctors.loading);

  useEffect(() => {
    dispatch(getDoctorsThunk());
  }, [dispatch]);

  console.log(doctors);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-6 grid grid-cols-2 items-start gap-3">
      {doctors?.map((doctor, index) => (
        <CardDoctor
          key={index}
          name={doctor.user.name}
          speciality={doctor.speciality}
          id={doctor.user._id}
        />
      ))}
    </div>
  );
}

export default EmployeHome;