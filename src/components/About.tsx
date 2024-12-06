import { motion } from 'framer-motion';
import { BorderBeam } from './ui/border-beam';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="aspect-square rounded-lg overflow-hidden relative">

            <img
              src="/dj/me.jpg"
              alt="DJ Profile"
              className="w-full h-full object-contain hover:scale-125 transition-transform"
            />
            <BorderBeam colorFrom='#11b3f3' colorTo='#ceff1e' className="rounded-lg" borderWidth={3} size={250} duration={12} delay={9} />
            
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 gradient-text font-orbitron">Sobre mi</h2>
            <p className="text-gray-300 mb-6 text-pretty">
              Con una formación sólida en producción musical, Daniel Lozano (Dj odiel) comenzó su trayectoria en 2016 en Colombia, donde perfeccionó sus habilidades como productor y DJ. Dominando instrumentos como el clarinete, saxofón y piano, también posee conocimientos de teoría musical.
            </p>
            <p className="text-gray-300 mb-6 text-pretty">
              Su enfoque principal en géneros como el reggaetón, dancehall y afro house lo ha llevado a destacarse en la escena musical con sets creativos y diferenciadores, integrando técnicas de scratch y loops en sus presentaciones en vivo.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
            >
              Leer mas
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;