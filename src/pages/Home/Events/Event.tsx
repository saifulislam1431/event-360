import { useState } from "react";
import { TEvents } from "./events.type";
import { motion } from "framer-motion"
import { CalendarCheck, LocateIcon } from "lucide-react";
import cn from "../../../utils/cn";

const Event = ({ event, isFirstRow, index }: { event: TEvents, isFirstRow: boolean, index: number }) => {
    const [isHovered, setHovered] = useState({ value: false, id: "0" })


    return (
        <div className={cn(
            "cursor-pointer overflow-hidden p-6 rounded-md",
            {
                'col-span-12  md:col-span-6': isFirstRow,
                'col-span-12 md:col-span-6 lg:col-span-4': !isFirstRow,
                'bg-[#6E8CF9] bg-opacity-20': index === 0,
                'bg-[#F96EC2] bg-opacity-20': index === 1,
                'bg-[#F9B16E] bg-opacity-20': index === 2,
                'bg-[#6EE9F9] bg-opacity-20': index === 3,
                'bg-[#81F96E] bg-opacity-20': index === 4
            }
        )}
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