import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Services from "../Services/Services";

const Home = () => {
    return (
        <section>
            <Header />
            <Banner />
            <Services />
            <Events />
            <Gallery />
        </section>
    );
};

export default Home;