import React from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer';

const Videos: React.FC = () => {
  const videos = [
    {url: '/dj/RUGBY.mp4', thumbnail: '/dj/thumbnail1.jpg'},
    {url: '/dj/RUGBY2.mp4', thumbnail: '/dj/gallery2.jpg'},
  ];

  return (
    <section id="social-videos" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">Videos</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto ">
          {videos.map((video, index) => (
            <VideoPlayer key={index} url={video.url} index={index} thumbnail={video.thumbnail} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;