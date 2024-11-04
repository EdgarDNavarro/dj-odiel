import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaYoutube, FaSoundcloud } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="flex justify-center space-x-6 mb-4">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://www.instagram.com/odielofficial/profilecard/?igsh=MTA1em5kaDlkcXFvaQ=="
          target="_blank"
          className="text-2xl text-white hover:text-pink-500"
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://www.tiktok.com/@odielofficial?_t=8r79lgZsDkj&_r=1"
          target="_blank"
          className="text-2xl text-white hover:text-[#00f2ea]"
        >
          <FaTiktok />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://soundcloud.com/djodiel"
          target="_blank"
          className="text-2xl text-white hover:text-orange-500"
        >
          <FaSoundcloud />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://youtube.com/@djodiel-12?si=0wYUzATJm5uJS0oZ"
          target="_blank"
          className="text-2xl text-white hover:text-red-500"
        >
          <FaYoutube />
        </motion.a>
      </div>
    );
}
 
export default SocialMedia;