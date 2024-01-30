import Loading from '../../../components/Loading';
import SectionHead from '../../../components/SectionHead';
import useGetEvents from '../../../hooks/useGetEvents';
import Event from './Event';
import { TEvents } from './events.type';

const Events = () => {
    const { allEvents, isLoading } = useGetEvents();


    if (isLoading) {
        return <Loading />
    }
    return (
        <section className="my-20 event-bg p-3 md:p-4 lg:p-7">
            <SectionHead title="Event Items " description="Discover a world of upcoming events! From elegant galas to tech summits, culinary festivals, and cultural expos, there's something for everyone. Join us for memorable moments and enriching experiences throughout the seasons." />


            <div className="mt-16 grid grid-cols-12 gap-7 items-center justify-items-center">
                {
                    allEvents?.map((event: TEvents, index: number) => <Event key={event?._id as string} event={event} isFirstRow={index < 2} index={index} />)
                }
            </div>
        </section>
    );
};

export default Events;