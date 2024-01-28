import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";


const Main = () => {
    return (
        <div>

            <Navbar />

            <div className="min-h-[calc(100vh-100px)] px-3 md:px-4 lg:px-7">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;