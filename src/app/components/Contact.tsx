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
    <section id="contact" className="min-h-screen py-20 px-8 md:px-16 lg:px-24 flex items-center relative">
      <div className="max-w-6xl mx-auto w-full relative">
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

        {/* Animated Moon Phases */}
        <motion.div
          className="mt-12 mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <svg width="80" height="80" viewBox="0 0 80 80" className="overflow-visible">
              <defs>
                {/* Moon surface texture */}
                <radialGradient id="moonGradient" cx="35%" cy="35%">
                  <stop offset="0%" stopColor="#f0f0f0" />
                  <stop offset="50%" stopColor="#d4d4d4" />
                  <stop offset="100%" stopColor="#a8a8a8" />
                </radialGradient>
                
                {/* Shadow gradient for phases */}
                <radialGradient id="shadowGradient" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#000000" stopOpacity="0" />
                  <stop offset="40%" stopColor="#000000" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
                </radialGradient>
                
                {/* Glow effect */}
                <filter id="moonGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                {/* Moon phase mask */}
                <mask id="moonPhaseMask">
                  <circle cx="40" cy="40" r="28" fill="white" />
                  <motion.ellipse
                    cy="40"
                    ry="28"
                    fill="black"
                    initial={{ cx: 12, rx: 28 }}
                    animate={{
                      cx: [12, 40, 68, 40, 12],
                      rx: [28, 28, 28, 28, 28]
                    }}
                    transition={{
                      duration: 16,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </mask>
              </defs>
              
              {/* Outer glow */}
              <motion.circle
                cx="40"
                cy="40"
                r="32"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="0.5"
                opacity="0.3"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  r: [32, 34, 32]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Moon body with craters */}
              <g filter="url(#moonGlow)">
                <circle
                  cx="40"
                  cy="40"
                  r="28"
                  fill="url(#moonGradient)"
                  mask="url(#moonPhaseMask)"
                />
                
                {/* Craters for realistic look */}
                <g opacity="0.3" mask="url(#moonPhaseMask)">
                  <circle cx="32" cy="35" r="4" fill="#999" />
                  <circle cx="45" cy="38" r="3" fill="#999" />
                  <circle cx="38" cy="48" r="3.5" fill="#999" />
                  <circle cx="48" cy="45" r="2.5" fill="#999" />
                  <circle cx="35" cy="28" r="2" fill="#999" />
                  <circle cx="50" cy="32" r="2.8" fill="#999" />
                  <circle cx="28" cy="45" r="2.2" fill="#999" />
                </g>
                
                {/* Darker crater details */}
                <g opacity="0.2" mask="url(#moonPhaseMask)">
                  <circle cx="32" cy="35" r="2" fill="#666" />
                  <circle cx="45" cy="38" r="1.5" fill="#666" />
                  <circle cx="38" cy="48" r="1.8" fill="#666" />
                  <circle cx="48" cy="45" r="1.2" fill="#666" />
                </g>
                
                {/* Subtle shine */}
                <motion.circle
                  cx="32"
                  cy="32"
                  r="8"
                  fill="white"
                  opacity="0.15"
                  mask="url(#moonPhaseMask)"
                  animate={{
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </g>
              
              {/* Stars around the moon */}
              {[
                { cx: 8, cy: 15, r: 0.8, delay: 0 },
                { cx: 68, cy: 20, r: 1, delay: 0.5 },
                { cx: 72, cy: 55, r: 0.6, delay: 1 },
                { cx: 12, cy: 65, r: 0.9, delay: 1.5 },
                { cx: 15, cy: 40, r: 0.7, delay: 0.8 },
                { cx: 65, cy: 40, r: 0.8, delay: 1.2 },
              ].map((star, i) => (
                <motion.circle
                  key={`star-${i}`}
                  cx={star.cx}
                  cy={star.cy}
                  r={star.r}
                  fill="white"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    delay: star.delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </svg>
            
            {/* Moon phase label */}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 text-xs whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                times: [0, 0.1, 0.2, 0.4, 0.6, 0.8, 0.9, 0.95, 1]
              }}
            >
              <motion.span
                animate={{
                  opacity: [1, 0, 0, 0, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  times: [0, 0.2, 0.25, 0.95, 1]
                }}
              >
                Full Moon
              </motion.span>
              <motion.span
                className="absolute left-0"
                animate={{
                  opacity: [0, 0, 1, 0, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  times: [0, 0.2, 0.35, 0.5, 1]
                }}
              >
                Waning Gibbous
              </motion.span>
              <motion.span
                className="absolute left-0"
                animate={{
                  opacity: [0, 0, 0, 1, 0, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  times: [0, 0.35, 0.45, 0.55, 0.65, 1]
                }}
              >
                New Moon
              </motion.span>
              <motion.span
                className="absolute left-0"
                animate={{
                  opacity: [0, 0, 0, 0, 1, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  times: [0, 0.55, 0.65, 0.75, 0.85, 1]
                }}
              >
                Waxing Crescent
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        <motion.footer 
          className="mt-20 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Signature */}
          <motion.div 
            className="mb-6 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative group">
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ zIndex: -1 }}
              />
              
              {/* Signature with stock graph */}
              <div className="relative">
                <svg width="220" height="60" viewBox="0 0 220 60" className="overflow-visible">
                  <defs>
                    {/* Gradient for the connections */}
                    <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#fb923c" stopOpacity="1" />
                      <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
                    </linearGradient>
                    
                    {/* Gradient for animated pulse */}
                    <linearGradient id="pulseGradient">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0">
                        <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="50%" stopColor="#fb923c" stopOpacity="1">
                        <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.3s" />
                      </stop>
                      <stop offset="100%" stopColor="#f97316" stopOpacity="0">
                        <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.6s" />
                      </stop>
                    </linearGradient>
                  </defs>
                  
                  {/* First Name - Ayush */}
                  <text
                    x="10"
                    y="32"
                    className="fill-white select-none"
                    style={{
                      fontFamily: "'Brush Script MT', cursive, 'Dancing Script', 'Pacifico'",
                      fontSize: '24px',
                      fontWeight: '400',
                      letterSpacing: '0.5px'
                    }}
                  >
                    <motion.tspan
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      Ayush
                    </motion.tspan>
                  </text>
                  
                  {/* Neural Network in the middle */}
                  <g transform="translate(72, 14)">
                    {/* Define node positions */}
                    {/* Input layer: 3 nodes */}
                    {/* Hidden layer: 4 nodes */}
                    {/* Output layer: 3 nodes */}
                    
                    {/* Connections from Input to Hidden Layer */}
                    {[
                      // Input node 1 to all hidden nodes
                      { x1: 0, y1: 8, x2: 24, y2: 2 },
                      { x1: 0, y1: 8, x2: 24, y2: 10 },
                      { x1: 0, y1: 8, x2: 24, y2: 18 },
                      { x1: 0, y1: 8, x2: 24, y2: 26 },
                      // Input node 2 to all hidden nodes
                      { x1: 0, y1: 16, x2: 24, y2: 2 },
                      { x1: 0, y1: 16, x2: 24, y2: 10 },
                      { x1: 0, y1: 16, x2: 24, y2: 18 },
                      { x1: 0, y1: 16, x2: 24, y2: 26 },
                      // Input node 3 to all hidden nodes
                      { x1: 0, y1: 24, x2: 24, y2: 2 },
                      { x1: 0, y1: 24, x2: 24, y2: 10 },
                      { x1: 0, y1: 24, x2: 24, y2: 18 },
                      { x1: 0, y1: 24, x2: 24, y2: 26 },
                    ].map((line, i) => (
                      <motion.line
                        key={`input-hidden-${i}`}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="url(#neuralGradient)"
                        strokeWidth="0.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.4 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.8,
                          delay: 0.8 + (i * 0.05),
                          ease: "easeOut"
                        }}
                      />
                    ))}
                    
                    {/* Connections from Hidden to Output Layer */}
                    {[
                      // Hidden node 1 to all output nodes
                      { x1: 24, y1: 2, x2: 48, y2: 8 },
                      { x1: 24, y1: 2, x2: 48, y2: 16 },
                      { x1: 24, y1: 2, x2: 48, y2: 24 },
                      // Hidden node 2 to all output nodes
                      { x1: 24, y1: 10, x2: 48, y2: 8 },
                      { x1: 24, y1: 10, x2: 48, y2: 16 },
                      { x1: 24, y1: 10, x2: 48, y2: 24 },
                      // Hidden node 3 to all output nodes
                      { x1: 24, y1: 18, x2: 48, y2: 8 },
                      { x1: 24, y1: 18, x2: 48, y2: 16 },
                      { x1: 24, y1: 18, x2: 48, y2: 24 },
                      // Hidden node 4 to all output nodes
                      { x1: 24, y1: 26, x2: 48, y2: 8 },
                      { x1: 24, y1: 26, x2: 48, y2: 16 },
                      { x1: 24, y1: 26, x2: 48, y2: 24 },
                    ].map((line, i) => (
                      <motion.line
                        key={`hidden-output-${i}`}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="url(#neuralGradient)"
                        strokeWidth="0.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.4 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.8,
                          delay: 1.2 + (i * 0.05),
                          ease: "easeOut"
                        }}
                      />
                    ))}
                    
                    {/* Animated pulse lines (subset for performance) */}
                    {[
                      { x1: 0, y1: 16, x2: 24, y2: 10, delay: 0 },
                      { x1: 24, y1: 10, x2: 48, y2: 16, delay: 0.5 },
                      { x1: 0, y1: 8, x2: 24, y2: 18, delay: 1 },
                      { x1: 24, y1: 18, x2: 48, y2: 24, delay: 1.5 },
                    ].map((line, i) => (
                      <motion.line
                        key={`pulse-${i}`}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="url(#pulseGradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                          pathLength: [0, 1],
                          opacity: [0, 0.8, 0]
                        }}
                        transition={{ 
                          duration: 1.5,
                          delay: 2 + line.delay,
                          repeat: Infinity,
                          repeatDelay: 4,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                    
                    {/* Input Layer Nodes */}
                    {[8, 16, 24].map((y, i) => (
                      <motion.circle
                        key={`input-${i}`}
                        cx="0"
                        cy={y}
                        r="2.5"
                        fill="#1a1a1a"
                        stroke="#f97316"
                        strokeWidth="1.5"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4,
                          delay: 0.8 + (i * 0.1),
                          ease: "backOut"
                        }}
                      />
                    ))}
                    
                    {/* Hidden Layer Nodes */}
                    {[2, 10, 18, 26].map((y, i) => (
                      <motion.circle
                        key={`hidden-${i}`}
                        cx="24"
                        cy={y}
                        r="2.5"
                        fill="#1a1a1a"
                        stroke="#fb923c"
                        strokeWidth="1.5"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4,
                          delay: 1.2 + (i * 0.1),
                          ease: "backOut"
                        }}
                      >
                        <animate 
                          attributeName="r" 
                          values="2.5;3;2.5" 
                          dur="2s" 
                          repeatCount="indefinite"
                          begin={`${i * 0.3}s`}
                        />
                      </motion.circle>
                    ))}
                    
                    {/* Output Layer Nodes */}
                    {[8, 16, 24].map((y, i) => (
                      <motion.circle
                        key={`output-${i}`}
                        cx="48"
                        cy={y}
                        r="2.5"
                        fill="#1a1a1a"
                        stroke="#f97316"
                        strokeWidth="1.5"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4,
                          delay: 1.6 + (i * 0.1),
                          ease: "backOut"
                        }}
                      />
                    ))}
                  </g>
                  
                  {/* Last Name - Pandey */}
                  <text
                    x="130"
                    y="32"
                    className="fill-white select-none"
                    style={{
                      fontFamily: "'Brush Script MT', cursive, 'Dancing Script', 'Pacifico'",
                      fontSize: '24px',
                      fontWeight: '400',
                      letterSpacing: '0.5px'
                    }}
                  >
                    <motion.tspan
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      Pandey
                    </motion.tspan>
                  </text>
                  
                  {/* Decorative underline */}
                  <motion.path
                    d="M 10 42 Q 110 40, 210 42"
                    stroke="url(#neuralGradient)"
                    strokeWidth="1"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>
          
          <p>© {new Date().getFullYear()} Ayush. All rights reserved.</p>
          <motion.p 
            className="mt-2 text-xs text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Crafted with passion & data 📊✨
          </motion.p>
        </motion.footer>
      </div>
    </section>
  );
}