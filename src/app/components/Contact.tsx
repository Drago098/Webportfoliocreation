import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "pandeyayush590@gmail.com",
      href: "mailto:pandeyayush590@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ayush",
      href: "https://www.linkedin.com/in/ayushpandey08/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ayush",
      href: "https://github.com/Drago098"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@ayush",
      href: "https://x.com/thebugsyndrome"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-8 md:px-16 lg:px-24 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Let's <span className="text-orange-400">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-6 hover:border-orange-500 hover:bg-white/10 transition-all duration-300 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 backdrop-blur-md bg-white/10 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors border border-white/20">
                  <link.icon className="w-6 h-6 text-orange-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{link.label}</p>
                  <p className="text-white group-hover:text-orange-400 transition-colors">
                    {link.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="mailto:pandeyayush590@gmail.com"
            className="inline-block px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.footer 
          className="mt-20 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>© {new Date().getFullYear()} Ayush. All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  );
}