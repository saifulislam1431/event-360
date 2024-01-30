import DashHead from "../../components/DashHead";
import useGetEvents from "../../hooks/useGetEvents";
import useGetRecentEvent from "../../hooks/useGetRecentEvent";
import useGetServices from "../../hooks/useGetServices";

const DashboardHome = () => {
    const { allEvents } = useGetEvents();
    const { recentEvents } = useGetRecentEvent();
    const { allServices } = useGetServices();
    return (
        <section className="event-bg">
            <DashHead title="Welcome to Dashboard!" />

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 my-20">
                <div className="w-full lg:w-[250px] h-[150px] flex flex-col items-center justify-center gap-2 card-bg shadow-md rounded brand-font">
                    <p className="text-3xl font-bold">Total Event Items</p>
                    <p className="text-3xl font-bold">{allEvents.length}</p>
                </div>
                <div className="w-full lg:w-[250px] h-[150px] flex flex-col items-center justify-center gap-2 card-bg shadow-md rounded brand-font">
                    <p className="text-3xl font-bold">Total Recent Event</p>
                    <p className="text-3xl font-bold">{recentEvents.length}</p>
                </div>
                <div className="w-full lg:w-[250px] h-[150px] flex flex-col items-center justify-center gap-2 card-bg shadow-md rounded brand-font">
                    <p className="text-3xl font-bold">Total Service</p>
                    <p className="text-3xl font-bold">{allServices.length}</p>
                </div>
            </div>
        </section>
    );
};

export default DashboardHome;