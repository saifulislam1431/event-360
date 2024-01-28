import { BadgeCheck } from "lucide-react";
import { TService } from "./service.types";
import { motion } from "framer-motion"
import { useState } from "react";

const Service = ({ service }: { service: TService }) => {

    const [isHovered, setHovered] = useState({ value: false, id: "0" })

    return (
        <motion.div className="w-full max-w-[415px] p-6 rounded-md bg-primary bg-opacity-5 shadow hover:bg-opacity-20 transition-all duration-300 cursor-pointer overflow-hidden h-[569px]"
            onMouseEnter={() => setHovered({ value: true, id: service?._id })}
            onMouseLeave={() => setHovered({ value: false, id: "0" })}
        >
            <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: isHovered?.id === service?._id ? 0 : 1, y: isHovered?.id === service?._id ? -100 : 0, transition: { duration: 0.3 } }}
            >
                <img src={service?.image} alt="service image" className="rounded w-[360px] h-[200px] " />
            </motion.div>

            <motion.div className="mt-6"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: isHovered?.id === service?._id ? 1 : 1, y: isHovered?.id === service?._id ? -80 : 0, transition: { duration: 0.3 } }}
            >
                <h3 className="text-2xl font-semibold">{service?.service_name}</h3>

                <p className="text-[#566B84] text-sm font-medium my-2">{service?.description}</p>

                <ul className="space-y-2 mt-4">
                    {service?.feature_facilities?.map((feature, indx) => <li key={indx} className="flex items-center gap-1 text-sm font-medium"><BadgeCheck className="h-4 w-4 stroke-green-600" />{feature}</li>)}
                </ul>
            </motion.div>

            <motion.div className="mt-9" id={`check-btn-${service?._id}`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: isHovered?.id === service?._id ? 1 : 0, y: isHovered?.id === service?._id ? -35 : 100, transition: { duration: 0.3 } }}
            >
                <button className="btn-second">Check it out</button>
            </motion.div>
        </motion.div>
    );
};

export default Service;