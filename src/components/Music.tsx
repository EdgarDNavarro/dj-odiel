import { motion } from 'framer-motion';
import { FaPlay, FaTiktok, FaSoundcloud } from 'react-icons/fa';

const Music = () => {
  const tracks = [
    {
      title: "Summer Nights",
      duration: "3:45",
      image: "/dj/track1.jpg"
    },
    {
      title: "Electric Dreams",
      duration: "4:20",
      image: "/dj/track2.jpg"
    },
    {
      title: "Midnight Drive",
      duration: "3:55",
      image: "/dj/track3.jpg"
    }
  ];

  return (
    <section id="music" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text font-kode">Últimas pistas</h2>
          <p className="text-gray-300">Escucha mis últimos lanzamientos y mezclas.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 ">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-black p-4 rounded-full"
                  >
                    <FaPlay className="text-xl" />
                  </motion.button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
                <p className="text-gray-400">{track.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center space-x-6 mt-12">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.tiktok.com/@odielofficial?_t=8r79lgZsDkj&_r=1"
            target="_blank"
            className="flex items-center space-x-2 text-white hover:text-[#00f2ea]"
          >
            <FaTiktok className="text-2xl" />
            <span>TikTok</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://soundcloud.com/djodiel"
            target="_blank"
            className="flex items-center space-x-2 text-white hover:text-orange-500"
          >
            <FaSoundcloud className="text-2xl" />
            <span>SoundCloud</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Music;