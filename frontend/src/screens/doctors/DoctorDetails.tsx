import React, { useEffect } from "react";

import ProfileDoctor from '../../components/doctor/DoctorProfile'
import { useParams } from "react-router-dom";

const DoctorDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  

  return <ProfileDoctor id={id}/>;
};

export default DoctorDetails;
