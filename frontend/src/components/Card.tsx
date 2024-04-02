import React from 'react';
import {
    Button,
} from '@material-tailwind/react';
import Avatar from './utils/Avatar';
import { Link } from 'react-router-dom'; // assuming Link component is imported from react-router-dom

interface CardProps {
    name: string;
    status: string;
    specialty: string;
    imageUrl: string;
    id: string;
}

const Card: React.FC<CardProps> = ({ name, status, specialty, imageUrl, id }) => {
    return (
        
            <div className="p-4 flex flex-col-3 justify-between items-stretch gap-y-6 bg-anep-secondary rounded-lg drop-shadow-md">
                <div className="flex justify-between items-center gap-x-3">
                    <Avatar src={imageUrl} size='xl' />
                    <div>
                        <h2 className="text-xl text-black font-bold">{name}</h2>
                        <h3 className="text-anep-dark font-semibold">{specialty}</h3>
                        <p className="text-sm font-medium">
                            <span className="font-bold">État:</span> {status}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-start gap-y-2 child:px-2.5 child:py-1 child:bg-blue-100 child:border child:border-blue-300 child:rounded-full">
                    <h4 >{status}</h4>
                </div>
                <div className="flex justify-center">
                    <Link to={`/doctors/${id}`} className="rounded-lg">
                        <Button color="blue" >
                            Voir le profil
                        </Button>
                    </Link>
                </div>
            </div>
    );
};

export default Card;
