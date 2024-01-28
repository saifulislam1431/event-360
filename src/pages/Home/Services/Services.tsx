import Loading from "../../../components/Loading";
import SectionHead from "../../../components/SectionHead";
import useGetServices from "../../../hooks/useGetServices";
import Service from "./Service";
import { TService } from "./service.types";




const Services = () => {
    const { allServices, isLoading } = useGetServices();

    console.log(allServices);
    if (isLoading) {
        return <Loading />
    }


    return (
        <section className="my-20">
            <SectionHead title="Our Services" description="Dive into the world of unforgettable moments with Event 360's services. From Corporate and Organization Events to Weddings and Concerts, our expertly crafted packages ensure seamless experiences. Elevate your events effortlessly with tailored features and pricing. Your extraordinary moments start here." />


            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center">
                {
                    allServices?.map((service: TService) => <Service key={service?._id as string} service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;