import React from 'react';
import { Button } from '@material-tailwind/react';
import Avatar from './utils/Avatar';
import { Link } from 'react-router-dom';

interface CardProps {
  name: string;
  speciality: string;
  id: string;
}



const Card: React.FC<CardProps> = ({ name, speciality, id }) => {
    
  return (
    <div className="p-4 flex flex-col-3 justify-between items-stretch gap-y-6 bg-anep-secondary rounded-lg drop-shadow-md">
      <div className="flex justify-between items-center gap-x-3">
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV15iD-8E2PnaoPtpHG08TBMb45q_vrt9Hq78iyMijszoOryCp7QugFte7qg&s"
          size="xl"
        />
        <div>
          <h2 className="text-xl text-black font-bold">{name}</h2>
          <h3 className="text-anep-dark font-semibold">{speciality}</h3>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to={`/doctors/${id}`} className="rounded-lg">
          <Button color="blue">Voir le profil</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;