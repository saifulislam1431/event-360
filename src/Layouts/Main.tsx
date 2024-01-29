import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Main = () => {
    return (
        <div>

            <Navbar />

            <div className="min-h-[calc(100vh-100px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;