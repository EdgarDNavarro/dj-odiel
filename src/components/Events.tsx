import { motion } from 'framer-motion';
import BlurFade from './ui/blur-fade';

const Events = () => {
  const events = [
    {
      date: "NOV 10",
      venue: "Rugby Lounge Club",
      location: "Coimbra, PT",
      time: "02:00 - 03:00",
      map: "https://maps.app.goo.gl/TE1thqcZha74ogDk6",
      finished: true
    },
    {
      date: "NOV 15",
      venue: "Club Inifinity",
      location: "Leiria, PT",
      time: "20:00 - 02:00",
      map: "https://maps.app.goo.gl/9hA5JxnXdzjD9Lp16",
      finished: true
    },
    {
      date: "NOV 16",
      venue: "Rugby Lounge Club",
      location: "Coimbra, PT",
      time: "00:00 - 06:00",
      map: "https://maps.app.goo.gl/TE1thqcZha74ogDk6",
      finished: true
    },
    {
      date: "DIC 06",
      venue: "Rugby Lounge Club",
      location: "Coimbra, PT",
      time: "01:00 - 04:00",
      map: "https://maps.app.goo.gl/TE1thqcZha74ogDk6",
      finished: false
    }
  ];

  return (
    <section id="events" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text font-orbitron">Próximos eventos</h2>
          <p className="text-gray-300">¡Ven a verme en directo en estos próximos eventos!</p>
        </motion.div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between"
            >
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <div className="text-center md:text-left">
                  <h3 className={`text-2xl font-bold ${event.finished ? "line-through text-gray-300" : "gradient-text"} font-orbitron`}>{event.date}</h3>
                </div>
                <div>
                  <h4 className={`text-xl font-semibold ${event.finished ? "line-through" : "hover:text-blue-400"} transition-colors`}>
                    <a target="_blank" href={event.map} className='hover:cursor-pointer hover:text-blue-400 transition-colors'>
                      {event.venue}
                    </a>
                  </h4>
                  <p className="text-gray-400">{event.location}</p>
                  <p className="text-gray-400">{event.time}</p>
                </div>
              </div>
              <motion.button
                whileHover={!event.finished ? { scale: 1.05 } : undefined}
                whileTap={!event.finished ? { scale: 0.95 } : undefined}
                className={`bg-gradient-to-r px-6 py-2 rounded-full transition duration-300 ${event.finished ? "from-gray-700 to-gray-500 text-gray-400" : "from-lime-600 to-green-600 text-white hover:from-lime-700 hover:to-green-700"}`}
              >
                <a className={`w-full h-full ${event.finished && 'line-through'}`} href='tel:+351912553887'>Comprar Tickets </a>
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className='grid grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-16'>

          <BlurFade className="overflow-hidden mb-4" delay={0.20 * 0.05} inView>
            <img
              className="size-full rounded-lg object-contain hover:scale-125 transition-transform"
              src='/dj/flayer.jpg'
              alt={`Random stock image`}
            />
          </BlurFade>

          <div >
            <h4 className="text-3xl font-bold mb-6 gradient-vibes font-orbitron">Latin Vibes</h4>
            <p className="text-gray-300 my-4">Llega a Coimbra con toda la intensidad y el sabor de una auténtica noche latina. Este <b className='gradient-vibes'>6 de diciembre</b>, el <b className='gradient-vibes'>Rugby Lounge Club</b> se transformará en el epicentro de los ritmos más calientes del momento. La cita comienza a las 23:00 y se extenderá hasta las 6 de la mañana, asegurando horas de pura fiesta y buena música en un ambiente inolvidable.</p>
            <p className="text-gray-300">El encargado de encender la pista de baile será el reconocido <b className='gradient-vibes'>DJ Odiel</b>, quien traerá su inconfundible estilo para mantener la energía al máximo durante toda la noche. Con una mezcla de clásicos y éxitos actuales, cada canción será un motivo para perderte en la música y dejarte llevar por el ritmo. <b className='gradient-vibes'>Latin Vibes</b> te promete una noche llena de emoción y buenos momentos que no querrás perderte.</p>
            
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-8 bg-gradient-to-r px-6 py-2 rounded-full transition duration-300 from-lime-600 to-green-600 text-white hover:from-lime-700 hover:to-green-700`}
              >
                <a className={`w-full h-full `} href='tel:+351912553887'>Comprar Tickets </a>
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Events;