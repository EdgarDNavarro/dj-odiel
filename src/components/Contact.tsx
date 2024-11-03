import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">Get in Touch</h2>
          <p className="text-gray-300">For bookings and inquiries</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            ></textarea>
          </div>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-600 to-red-600 text-white px-8 py-3 rounded-full hover:from-pink-700 hover:to-red-700 transition duration-300"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;