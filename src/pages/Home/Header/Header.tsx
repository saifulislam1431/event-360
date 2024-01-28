import { motion } from "framer-motion"

const Header = () => {

    const headerContainerAnimate = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2,
                staggerChildren: 0.5,
                delayChildren: 0.5
            }
        }
    }

    const headerContentAnimate = {
        hidden: {
            opacity: 0,
            y: -500
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                type: "spring",
                bounce: 0.3
            }
        }
    }

    return (
        <motion.section className="text-center my-4 space-y-2"
            variants={headerContainerAnimate}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 className="text-4xl md:text-5xl font-extrabold uppercase" variants={headerContentAnimate}>
                Brand New event Packages
            </motion.h1>
            <motion.p className="text-3xl md:text-4xl font-extrabold text-warning" variants={headerContentAnimate}>For <span className="text-style">Winter</span></motion.p>

            <motion.p className="max-w-[95ch] mx-auto" variants={headerContentAnimate}>Explore the magic of winter with our 'Brand New Event Packages for Winter' at Event 360. Unforgettable experiences await, from festive celebrations to cozy gatherings. Make your winter events extraordinary!</motion.p>
        </motion.section>
    );
};

export default Header;