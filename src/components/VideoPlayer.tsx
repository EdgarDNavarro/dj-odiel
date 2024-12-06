import React from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string;
  index: number;
  thumbnail: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, index, thumbnail }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="aspect-[9/16] relative rounded-xl overflow-hidden shadow-xl "
    >
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls={true}
        playing={false}
        light={thumbnail || false}
        playsinline={true}
        config={{
          file: {
            attributes: {
              playsInline: true, 
            },
          },
        }}
      />

    </motion.div>
  );
};

export default VideoPlayer;