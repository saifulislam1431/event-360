import { Link, NavLink } from "react-router-dom";
import cn from "../../utils/cn";
import { LogInIcon, MoonIcon, SunIcon } from "lucide-react";

const Navbar = () => {

    const navLinks = <>
        <NavLink to="/" className={({ isActive }) => cn('text-neutral font-semibold',
            {
                "logo-style": isActive
            })}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => cn('text-neutral font-semibold',
            {
                "logo-style": isActive
            })}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => cn('text-neutral font-semibold',
            {
                "logo-style": isActive
            })}>Contact</NavLink>

        <button className="btn-primary">Sign In <LogInIcon className="h-6 w-6" /></button>

        <label className="swap swap-rotate">

            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <SunIcon className="swap-on fill-yellow-400 stroke-yellow-500 w-7 h-7" />


            {/* moon icon */}
            <MoonIcon className="swap-off fill-gray-300 stroke-gray-400 w-7 h-7" />

        </label>
    </>

    return (
        <header>
            <nav className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link to="/" className="text-2xl md:text-3xl font-bold">Event <span className="logo-style">360</span></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-4">
                        {navLinks}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;