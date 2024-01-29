import { useRef } from "react";
import SectionHead from "../../../components/SectionHead";
import Video from "./Video";
import videojs from "video.js";
import 'videojs-playlist';


const InspirationVideos = () => {
    const playerRef = useRef<typeof videojs.players | null>(null);
    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        playlist: [
            {
                sources: [
                    {
                        src: '../../../../public/Event Management & Wedding Planner, Imphal I Salt Studio.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'https://i.ibb.co/jwRPMR3/wedding.jpgg',
            },
            {
                sources: [
                    {
                        src: '../../../../public/EVENT OPENER for a corporate event..mkv',
                        type: 'video/mp4'
                    }
                ],
                poster: 'https://i.ibb.co/z4t5PDy/Corporate-event.jpg',
            },
            {
                sources: [
                    {
                        src: '../../../../public/ICC Sydney Event Setup Timelapse 2017.mp4',
                        type: 'video/mp4'
                    }
                ],
                poster: 'https://i.ibb.co/mCwPLV3/concert.jpg',
            }
        ],
    };

    const handlePlayerReady = (player: typeof videojs.players) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    return (
        <section className="my-20 px-3 md:px-4 lg:px-7">
            <SectionHead title="Event Inspiration Videos" description="Dive into inspiration with our 'Event Inspiration Videos.' From breathtaking highlights to behind-the-scenes magic, witness the artistry of successful events. Let these visuals spark your creativity and elevate your event planning journey with Event 360." />

            <div className="my-12">
                <Video options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
        </section>
    );
};

export default InspirationVideos;
