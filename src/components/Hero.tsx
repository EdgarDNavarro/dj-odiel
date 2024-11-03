import { motion } from 'framer-motion';
import SocialMedia from './SocialMedia';
import Particles from './ui/particles';

const Hero = () => {
  return (
    <section id="home" className="bg-cover bg-bottom bg-hero h-screen flex items-center justify-center text-center ">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text uppercase">
          DJ odiel
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Dj Odiel - Productor Musical, DJ y Empresario
        </p>

        <div className='my-12'>
          <SocialMedia/>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-600 to-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-pink-700 hover:to-red-700 transition duration-300"
        >
          Reservar ahora
        </motion.button>

        
      </motion.div>
    </section>
  );
};

export default Hero;