import SectionHead from "../../../components/SectionHead";
import useGetRecentEvent from "../../../hooks/useGetRecentEvent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TRecentEvent } from "./recentEvent.type";
import RecentEvent from "./RecentEvent";
import { motion } from "framer-motion"
import useScrollFadeUp from "../../../hooks/useScrollFadeUp";

const RecentEvents = () => {
    const { recentEvents } = useGetRecentEvent();
    const { componentRef, style } = useScrollFadeUp();
    const settings = {
        arrows: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="my-20 px-3 md:px-4 lg:px-7">
            <SectionHead title="Recent Events" description="Dive into recent events! From the vibrant 'Spring Garden Party' to the innovative 'Tech Expo 2024,' and the sun-soaked 'Summer Beach Bash,' to the creative 'Artisan Craft Fair.' Unforgettable experiences await!" />

            <motion.div className="mt-20"
                style={style}
                ref={componentRef}
            >
                <Slider {...settings}>
                    {
                        recentEvents?.map((recentEvent: TRecentEvent) => <RecentEvent key={recentEvent?._id} event={recentEvent} />)
                    }
                </Slider>
            </motion.div>
        </section>
    );
};

export default RecentEvents;