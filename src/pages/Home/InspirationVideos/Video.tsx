import { useEffect, useRef, useState } from "react";
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-playlist';
import { TVideoProps } from "./video.type";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion"

const Video = (props: TVideoProps) => {
    const videoRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<videojs.Player | null>(null);
    const { options, onReady } = props;
    const [isHovered, setHovered] = useState({ value: false, id: -1 })

    useEffect(() => {
        // Make sure Video.js player is only initialized once
        if (!playerRef.current) {
            // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-big-play-centered');
            videoRef.current.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                onReady && onReady(player);
            });

            // Initialize the playlist
            player.playlist(options.playlist);
        } else {
            const player = playerRef.current;

            // Update the playlist
            player.playlist(options.playlist);
        }
    }, [options, videoRef])

    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);


    return (
        <div data-vjs-player>
            <div ref={videoRef} />
            <div className="vjs-playlist">
                <ul className="vjs-playlist-item-list flex items-center gap-3 my-5">
                    {/* Manually create playlist items */}
                    {options.playlist.map((item, index) => (
                        <li
                            key={index}
                            className={`vjs-playlist-item ${index === 0 ? 'vjs-selected' : ''}`}
                            onClick={() => playerRef.current.playlist.currentItem(index)}
                            onMouseEnter={() => setHovered({ value: true, id: index })}
                            onMouseLeave={() => setHovered({ value: false, id: -1 })}
                        >
                            <div className="vjs-playlist-image cursor-pointer w-[120px] lg:w-52 lg:h-36 h-24 relative overflow-hidden">
                                <img src={item.poster} alt={`Thumbnail ${index + 1}`} className="w-full h-full" />

                                <motion.div className="absolute top-0 w-full h-full bg-primary flex items-center justify-center bg-opacity-50"
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: isHovered?.id === index ? 1 : 0, y: isHovered?.id === index ? 0 : 100, transition: { duration: 0.3 } }}
                                >
                                    <PlayCircle className="w-10 h-10 text-white" />
                                </motion.div>
                            </div>
                            <div className="vjs-playlist-text">
                                {/* <span className="vjs-playlist-name">{item.sources[0].src}</span> */}
                                <span className="vjs-playlist-duration">{item.duration || ''}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Video;
