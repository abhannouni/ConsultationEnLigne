import { Link } from "react-router-dom";
import Avatar from "../utils/Avatar";
import { Button } from "@material-tailwind/react";
// import ANEPBtn from "./ANEPBtn";

interface DoctorInfo {
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
  id: string; // Assuming you have an id field in the DoctorInfo interface
}

const CardDoctor: React.FC<DoctorInfo> = ({
  name,
  specialty,
  bio,
  imageUrl,
  id,
}) => {
  return (
    <div className="p-4 flex flex-col justify-between items-stretch gap-y-6 bg-anep-secondary rounded-lg drop-shadow-md">
      <div className="flex justify-between items-center gap-x-3">
        <Avatar
          src={imageUrl}
          alt={`Avatar de ${name}`}
          size="xxl"
        />
        <div>
          <h2 className="text-xl text-black font-bold">
            {name}
          </h2>
          <h3 className="text-anep-dark font-semibold">
            {specialty}
          </h3>
          <p className="text-sm font-medium">
            <span className="font-bold">Bio:</span> {bio}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start gap-y-2 child:px-2.5 child:py-1 child:bg-blue-100 child:border child:border-blue-300 child:rounded-full">
        {/* Assuming jobs field is replaced by specialty */}
        <h4>{specialty}</h4>
      </div>
      <div className="flex justify-center">
        <Link to={`/doctors/${id}`} className="rounded-lg"> {/* Adjust the link path */}
          <button name="Explorer le profil" >
            Explorer le profil
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardDoctor;
