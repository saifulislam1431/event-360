import { TRecentEvent } from "./recentEvent.type";

const RecentEvent = ({ event }: { event: TRecentEvent }) => {
    return (
        <div className="w-[280px] h-[290px] bg-black bg-opacity-5">
            <div>
                <img src={event?.image} alt="Event Image" className="w-full h-[220px]" />
            </div>
            <div className="px-6 py-3">
                <p className="text-[#000000] font-medium">{event?.event_name}</p>
                <p className="text-sm text-[#475569]">by {event?.organizer_name}</p>
            </div>
        </div>
    );
};

export default RecentEvent;