import { Link } from "react-router-dom";

interface CardProps {
    name: string;
    specialite: string;
    state: string;
    id: string;
}

import { Avatar, Button } from "@material-tailwind/react";

export default function Card({name, specialite, state, id}: CardProps) {
  return (
    <div className="p-4 flex flex-col justify-between items-stretch gap-y-6 bg-indigo-50 rounded-lg drop-shadow-md">
      <div className="flex justify-around items-center">
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt={name} placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} />
        <div>
          <h2 className="text-xl text-black font-bold">
            {name}
          </h2>
          <h3 className="text-anep-dark font-semibold">
            {specialite}
          </h3>
          <p className="text-sm font-medium">
            <span className="font-bold">État:</span> {state}
          </p>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Link to={id} className="rounded-lg">
          {/* <ANEPBtn name="Explorer le profil" /> */}
          <Button color="light-blue" buttonType="filled" size="regular" rounded={false} block={false} iconOnly={false} ripple="light">
            Explorer le profil
          </Button>
        </Link>
      </div>
    </div>
  );
}
