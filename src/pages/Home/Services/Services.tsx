import Loading from "../../../components/Loading";
import SectionHead from "../../../components/SectionHead";
import useGetServices from "../../../hooks/useGetServices";
// import useScrollFadeUp from "../../../hooks/useScrollfadeUp";
import Service from "./Service";
import { TService } from "./service.types";
import { motion } from "framer-motion"




const Services = () => {
    const { allServices, isLoading } = useGetServices();
    // const { componentRef, style } = useScrollFadeUp();

    // console.log(allServices);
    if (isLoading) {
        return <Loading />
    }


    return (
        <section className="my-20 px-3 md:px-4 lg:px-7">
            <SectionHead title="Our Services" description="Dive into the world of unforgettable moments with Event 360's services. From Corporate and Organization Events to Weddings and Concerts, our expertly crafted packages ensure seamless experiences. Elevate your events effortlessly with tailored features and pricing. Your extraordinary moments start here." />


            <motion.div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center"

            >
                {
                    allServices?.map((service: TService) => <Service key={service?._id as string} service={service} />)
                }
            </motion.div>
        </section>
    );
};

export default Services;