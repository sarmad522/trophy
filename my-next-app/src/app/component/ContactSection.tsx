'use client';

import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="     text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-6 text-start">
            Ready to discuss <br />
            your project with us?
          </h2>
          <a
            href="mailto:contact@throov.com"
            className="text-blue-400 text-xl font-medium underline hover:text-blue-300 transition text-start"
          >
            contact@throov.com
          </a>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="relative group">
            <input
              type="text"
              placeholder="Your name*"
              className="w-full bg-transparent border-b border-gray-500 py-3 px-1 text-white placeholder-gray-400 focus:outline-none"
            />
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all group-focus-within:w-full group-focus-within:h-0.5" />
          </div>

          <div className="relative group">
            <input
              type="email"
              placeholder="Your email*"
              className="w-full bg-transparent border-b border-gray-500 py-3 px-1 text-white placeholder-gray-400 focus:outline-none"
            />
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all group-focus-within:w-full group-focus-within:h-0.5" />
          </div>

          <div className="relative group">
            <textarea
              rows={4}
              placeholder="About project*"
              className="w-full bg-transparent border-b border-gray-500 py-3 px-1 text-white placeholder-gray-400 focus:outline-none resize-none"
            ></textarea>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all group-focus-within:w-full group-focus-within:h-0.5" />
          </div>

          <p className="text-xs text-gray-400">
            By sending this form I confirm that I have read and accept the{' '}
            <span className="underline cursor-pointer hover:text-white">Privacy Policy</span>.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-b from-[#4E3682] to-[#A890CD] hover:from-pink-500 hover:to-purple-600 transition-colors text-white font-semibold px-6 py-3 rounded-full shadow-md"
          >
            Send Message
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
