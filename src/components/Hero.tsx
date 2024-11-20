import { motion } from 'framer-motion';
import SocialMedia from './SocialMedia';
import Particles from './ui/particles';

const Hero = () => {
  return (
    <section id="home" className="bg-cover bg-bottom bg-hero bg-fixed bg-no-repeat h-screen flex items-center justify-center text-center ">
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
        {/* <div className="title">
          DJ odiel
        </div> */}
        <img className='mb-7 max-h-52' src='/dj/LOGO.png'/>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Dj Odiel - Productor Musical, DJ y Empresario
        </p>

        <div className='my-12'>
          <SocialMedia/>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className=" bg-gradient-to-r from-lime-600 to-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-lime-700 hover:to-green-700 transition duration-300"
        >
          <a href='tel:+351912553887'>Reservar ahora </a>
        </motion.button>

        
      </motion.div>
    </section>
  );
};

export default Hero;