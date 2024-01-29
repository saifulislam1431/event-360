import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Pricing from "../Pricing/Pricing";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <section>
            <Header />
            <Banner />
            <Services />
            <Events />
            <Gallery />
            <Pricing />
            <Testimonials />
        </section>
    );
};

export default Home;