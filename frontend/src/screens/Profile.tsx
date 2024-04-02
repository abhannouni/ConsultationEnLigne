import { Outlet } from "react-router-dom";
import PatientProfilePage from "./profile/PatientProfilePage";


const Profile: React.FC = () => {
    return (
        <div>
            <PatientProfilePage />
        </div>
    );
}

export default Profile;