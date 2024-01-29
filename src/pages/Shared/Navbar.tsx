import { Link, NavLink } from "react-router-dom";
import cn from "../../utils/cn";
import { LogInIcon, MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

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
        <NavLink to="/admin/dashboard" className={({ isActive }) => cn('text-neutral font-semibold',
            {
                "logo-style": isActive
            })}>Dashboard</NavLink>

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

    const logoAnimate = {
        hidden: { opacity: 0, x: -500 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 1,
                duration: 4,
                type: "spring"
            }
        }
    }

    const largeNavLinksAnimate = {
        hidden: { opacity: 0, x: 500 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 1,
                duration: 4,
                type: "spring"
            }
        }
    }

    return (
        <header className="h-16 sticky top-0">
            <div className="navbar bg-base-100 z-50 sticky top-0">
                <motion.div className="navbar-start"
                    variants={logoAnimate}
                    initial="hidden"
                    animate="visible"
                >
                    <Link to="/" className="text-2xl md:text-3xl font-bold">Event <span className="logo-style">360</span></Link>
                </motion.div>
                <motion.div className="navbar-end hidden lg:flex"
                    variants={largeNavLinksAnimate}
                    initial="hidden"
                    animate="visible"
                >
                    <ul className="menu menu-horizontal px-1 flex items-center gap-4">
                        {navLinks}
                    </ul>
                </motion.div>

                <div className="navbar-end flex lg:hidden">
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" />

                        {/* hamburger icon */}

                        <svg onClick={() => setIsOpen(!isOpen)} className="swap-off fill-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                        {/* close icon */}
                        <svg onClick={() => setIsOpen(!isOpen)} className="swap-on fill-error" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                    </label>


                    <ul className={cn(
                        "absolute -top-96 left-0 space-y-5 flex flex-col items-center bg-base-100  bg-opacity-100 w-full py-6 transition-all duration-500",
                        {
                            "top-20": isOpen
                        }
                    )}>
                        {navLinks}
                    </ul>

                </div>
            </div>
        </header>
    );
};

export default Navbar;