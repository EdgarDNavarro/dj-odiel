import { motion } from 'framer-motion';

const Events = () => {
  const events = [
    {
      date: "NOV 15",
      venue: "Club Inifinity",
      location: "Leiria, PT",
      time: "22:00 - 04:00",
      map: "https://maps.app.goo.gl/9hA5JxnXdzjD9Lp16"
    },
    {
      date: "NOV 21",
      venue: "Rugby Lounge Club",
      location: "Coimbra, PT",
      time: "20:00 - 04:00",
      map: "https://maps.app.goo.gl/TE1thqcZha74ogDk6"
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
          <h2 className="text-4xl font-bold mb-6 gradient-text">Próximos eventos</h2>
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
                  <h3 className="text-2xl font-bold gradient-text">{event.date}</h3>
                </div>
                <div>
                  <h4 className="text-xl font-semibold hover:text-lime-400 transition-colors">
                    <a target="_blank" href={event.map} className='hover:cursor-pointer hover:text-lime-400 transition-colors'>
                    {event.venue}
                    </a>
                  </h4>
                  <p className="text-gray-400">{event.location}</p>
                  <p className="text-gray-400">{event.time}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-lime-600 to-green-600 text-white px-6 py-2 rounded-full hover:from-lime-700 hover:to-green-700 transition duration-300"
              >
                <a className='w-full h-full' href='tel:+351912553887'>Comprar Tickets </a>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;