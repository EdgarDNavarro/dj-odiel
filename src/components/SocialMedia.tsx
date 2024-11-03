import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaSpotify, FaYoutube } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="flex justify-center space-x-6 mb-4">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://instagram.com"
          target="_blank"
          className="text-2xl text-white hover:text-pink-500"
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://tiktok.com"
          target="_blank"
          className="text-2xl text-white hover:text-[#00f2ea]"
        >
          <FaTiktok />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://spotify.com"
          target="_blank"
          className="text-2xl text-white hover:text-green-500"
        >
          <FaSpotify />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://youtube.com"
          target="_blank"
          className="text-2xl text-white hover:text-red-500"
        >
          <FaYoutube />
        </motion.a>
      </div>
    );
}
 
export default SocialMedia;