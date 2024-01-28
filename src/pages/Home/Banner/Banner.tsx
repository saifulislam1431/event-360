import banner from "../../../assets/banner/banner1.png"
import { motion } from "framer-motion"

const Banner = () => {
    const BannerAnimate = {
        hidden: {
            opacity: 0,
            x: -500
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 1.5,
                duration: 0.5,
            }
        }
    }
    return (
        <motion.section
            variants={BannerAnimate}
            initial="hidden"
            animate="visible"
            className="px-3 md:px-4 lg:px-7"
        >
            <img src={banner} alt="Banner" className="mx-auto" />
        </motion.section>
    );
};

export default Banner;