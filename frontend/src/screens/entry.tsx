import { Outlet } from "react-router-dom";
// import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NavBarr from "../components/NavBarr";


const Entry: React.FC = () => {
    return (
        <main className="container mt-3 mx-auto grid grid-cols-[auto_1fr] gap-x-6">
            {/* Side bar */}
            <Sidebar />
            {/* End of Side bar */}
            <div>
                {/* Header */}
                <NavBarr />
                {/* Pages */}
                <Outlet />
            </div>
        </main>
    );
}

export default Entry;