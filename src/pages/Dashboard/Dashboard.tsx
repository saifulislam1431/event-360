import { CalendarClock, LayoutDashboard, ListIcon } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import cn from "../../utils/cn";

const Dashboard = () => {
    return (
        <section className="max-w-7xl mx-auto grid grid-cols-12 h-full gap-2">
            <div className="col-span-3 bg-gray-300 h-full min-h-[100vh] py-10 pl-2 lg:pl-5 flex flex-col gap-7">

                <h1 className="text-center text-2xl md:text-3xl font-bold"><Link to="/">Event <span className="logo-style">360</span></Link></h1>
                <p className="text-center font-bold text-2xl brand-font">Admin Panel</p>

                <NavLink to="/admin/dashboard" className={({ isActive }) => cn(
                    "flex items-center gap-2 border border-white px-2 lg:px-3 py-2 rounded-l-md text-sm font-semibold hover:bg-white hover:text-secondary transition-all duration-500",
                    {
                        "bg-white text-secondary": isActive
                    }
                )}>

                    <LayoutDashboard className="shrink-0 w-7 h-7" />
                    <span className="truncate">Dashboard</span>
                </NavLink>
                <NavLink to="/admin/manage-recent-events" className={({ isActive }) => cn(
                    "flex items-center gap-2 border border-white px-2 lg:px-3 py-2 rounded-l-md text-sm font-semibold hover:bg-white hover:text-secondary transition-all duration-500",
                    {
                        "bg-white text-secondary": isActive
                    }
                )}>

                    <CalendarClock className="shrink-0 w-7 h-7" />
                    <span className="truncate">Manage Recent Events</span>
                </NavLink>
                <NavLink to="/admin/manage-event-items" className={({ isActive }) => cn(
                    "flex items-center gap-2 border border-white px-2 lg:px-3 py-2 rounded-l-md text-sm font-semibold hover:bg-white hover:text-secondary transition-all duration-500",
                    {
                        "bg-white text-secondary": isActive
                    }
                )}>

                    <ListIcon className="shrink-0 w-7 h-7" />
                    <span className="truncate">Manage Event Items</span>
                </NavLink>
            </div>

            <div className="col-span-9">
                <Outlet />
            </div>
        </section>
    );
};

export default Dashboard;