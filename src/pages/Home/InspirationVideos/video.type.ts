import videojs from 'video.js';

export type TVideoProps = {
    options: {
      autoplay: boolean;
      controls: boolean;
      responsive: boolean;
      fluid: boolean;
      playlist: {
        sources: { src: string; type: string }[];
        poster: string;
        duration?: string; // If you have a duration property in your playlist items
      }[];
    };
    onReady?: (player: videojs.Player) => void;
  }