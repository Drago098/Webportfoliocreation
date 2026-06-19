import { ChevronDown, Download } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          style={{ willChange: 'transform' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          style={{ willChange: 'transform' }}
        ></motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            className="w-1 h-16 bg-orange-500"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 64, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          ></motion.div>
          <div>
            <h1 className="text-5xl md:text-7xl">
              <motion.span
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              >
                Hi, I'm{' '}
              </motion.span>
              <motion.span
                className="text-orange-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                Ayush
              </motion.span>
            </h1>
          </div>
        </div>

        <motion.p
          className="text-2xl md:text-3xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          I build AI that sees, identifies, and understands.
        </motion.p>

        <motion.p
          className="text-lg text-gray-400 max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          Lead AI Scientist at{' '}
          <span className="text-orange-400 font-medium">Scanvue AI</span>
          {' '}— building computer vision systems for animal biometric identification.
          Previously data scientist at TCS and research intern at IIT Madras.
          I turn messy real-world data into models that actually ship.
        </motion.p>

        <div className="flex items-center gap-6 mb-12">
          <motion.a
            href="/Ayush_Pandey_Resume.pdf"
            download="Ayush_Pandey_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
        </div>

        <motion.button
          onClick={scrollToProjects}
          className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ willChange: 'transform' }}
        >
          View my work
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        onClick={scrollToProjects}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ willChange: 'transform' }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}
