import { useState } from "react";
import { TEvents } from "./events.type";
import { motion } from "framer-motion"
import { CalendarCheck, LocateIcon } from "lucide-react";

const Event = ({ event, isFirstRow }: { event: TEvents, isFirstRow: boolean }) => {
    const [isHovered, setHovered] = useState({ value: false, id: "0" })


    return (
        <div className={`cursor-pointer overflow-hidden p-6 border rounded-md shadow-md ${isFirstRow ? 'col-span-12  md:col-span-6' : 'col-span-12 md:col-span-6 lg:col-span-4'}`}
            onMouseEnter={() => setHovered({ value: true, id: event?._id })}
            onMouseLeave={() => setHovered({ value: false, id: "0" })}
        >
            <div className="relative overflow-hidden">
                <img src={event?.image} alt="Event Image" className={`rounded ${isFirstRow ? "w-full max-w-[500px] h-60 lg:h-[340px]" : "w-full max-w-[346px] h-60 lg:h-[200px]"}`} />

                <motion.div className="absolute card-bg w-full h-full top-0 rounded p-2"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isHovered?.id === event?._id ? 1 : 0, y: isHovered?.id === event?._id ? 0 : 100, transition: { duration: 0.3 } }}
                >

                    <p className="text-white font-medium">{event?.description}</p>

                    <div className="flex flex-col mt-2 space-y-2">
                        <p className="inline-flex items-center text-white font-medium gap-1"> <LocateIcon /> {event?.location}</p>
                        <p className="inline-flex items-center text-white font-medium gap-1"> <CalendarCheck /> {event?.date}</p>
                    </div>

                </motion.div>
            </div>

            <div>
                <p className="text-lg font-medium mt-3">{event?.event_name}</p>
            </div>
        </div>


    );
};

export default Event;