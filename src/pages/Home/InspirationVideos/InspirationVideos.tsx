import SectionHead from "../../../components/SectionHead";
import ReactPlayer from 'react-player/youtube'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


interface TVideo {
    id: number,
    link: string
}



const InspirationVideos = () => {

    const links: TVideo[] = [
        {
            id: 1,
            link: "https://youtu.be/dWEhd6_isvo?si=2mQd_nYtj6OtGlZu"
        },
        {
            id: 2,
            link: "https://youtu.be/S7nqxAteALc?si=TsIrX1QP_KFQ7Hqu"
        },
        {
            id: 3,
            link: "https://youtu.be/B_2NQ9c9gFo?si=GKh1UAgKBChU2w8y"
        },
        {
            id: 4,
            link: "https://youtu.be/Fpn1imb9qZg?si=6YBwJzOfp17lphqS"
        },
        {
            id: 5,
            link: "https://youtu.be/R4AbzwYOmNE?si=mvw6WPl-1O_oJdii"
        }
    ]

    return (
        <section className="my-20 px-3 md:px-4 lg:px-7">
            <SectionHead title="Event Inspiration Videos" description="Dive into inspiration with our 'Event Inspiration Videos.' From breathtaking highlights to behind-the-scenes magic, witness the artistry of successful events. Let these visuals spark your creativity and elevate your event planning journey with Event 360." />

            <div className="my-12">



                <Carousel className='text-center' autoPlay={true} infiniteLoop={true} showThumbs={false} stopOnHover={true}>
                    {
                        links?.map((video: TVideo) =>
                            <div className='w-full h-[300px] lg:h-[400px]'>
                                <ReactPlayer url={video?.link} width="100%" height="100%" controls={true} />
                            </div>)
                    }

                </Carousel>

            </div>
        </section>
    );
};

export default InspirationVideos;
