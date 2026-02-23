import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

interface TechStack {
  id: number;
  category: string;
  skills: string[];
  color: string;
  position: { x: string; y: string };
}

const techStacks: TechStack[] = [
  {
    id: 1,
    category: "Programming & Data",
    skills: ["Python", "SQL"],
    color: "from-blue-500 to-cyan-500",
    position: { x: "50%", y: "20%" }
  },
  {
    id: 2,
    category: "Data Engineering & Pipelines",
    skills: ["ETL", "Airflow", "dbt"],
    color: "from-purple-500 to-pink-500",
    position: { x: "75%", y: "35%" }
  },
  {
    id: 3,
    category: "Backend & APIs",
    skills: ["FastAPI"],
    color: "from-green-500 to-emerald-500",
    position: { x: "85%", y: "55%" }
  },
  {
    id: 4,
    category: "Apps & Prototyping (UI)",
    skills: ["Streamlit", "Gradio"],
    color: "from-orange-500 to-red-500",
    position: { x: "70%", y: "75%" }
  },
  {
    id: 5,
    category: "Machine Learning & Statistical Modeling",
    skills: ["Statistical Modelling", "TensorFlow"],
    color: "from-indigo-500 to-purple-500",
    position: { x: "45%", y: "85%" }
  },
  {
    id: 6,
    category: "Computer Vision",
    skills: ["YOLO", "Vision Image Transformers"],
    color: "from-yellow-500 to-orange-500",
    position: { x: "20%", y: "75%" }
  },
  {
    id: 7,
    category: "LLM Engineering / GenAI",
    skills: ["RAG", "Ollama"],
    color: "from-pink-500 to-rose-500",
    position: { x: "10%", y: "50%" }
  },
  {
    id: 8,
    category: "LLM Frameworks & Orchestration",
    skills: ["LangChain", "LangGraph", "LlamaIndex"],
    color: "from-cyan-500 to-blue-500",
    position: { x: "20%", y: "30%" }
  },
  {
    id: 9,
    category: "Vector Databases & Retrieval",
    skills: ["Chroma DB", "Pinecone"],
    color: "from-teal-500 to-green-500",
    position: { x: "50%", y: "50%" }
  }
];

export function MoonSkills() {
  const [selectedStack, setSelectedStack] = useState<TechStack | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleHotspotClick = (stack: TechStack) => {
    setSelectedStack(stack);
  };

  const closeModal = () => {
    setSelectedStack(null);
  };

  return (
    <section className="min-h-screen py-20 px-8 md:px-16 lg:px-24 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Title */}
      <motion.div
        className="text-center mb-12 z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl text-white mb-4">
          Tech Stack{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Universe
          </span>
        </h2>
        <p className="text-gray-400 text-lg">Click on the moon to explore different technologies</p>
      </motion.div>

      {/* Moon Container */}
      <motion.div
        className="relative w-full max-w-2xl aspect-square flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Moon */}
        <motion.div
          className="relative w-full h-full rounded-full overflow-hidden shadow-2xl"
          style={{
            boxShadow: `
              0 0 60px rgba(59, 130, 246, 0.5),
              0 0 120px rgba(147, 51, 234, 0.3)
            `
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1570160348545-054312e71821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdWxsJTIwbW9vbiUyMGJyaWdodHxlbnwxfHx8fDE3NzE4MDMzODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Moon"
            className="w-full h-full object-cover"
          />
          
          {/* Subtle overlay for better hotspot visibility */}
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>

        {/* Clickable Hotspots */}
        {techStacks.map((stack) => (
          <motion.div
            key={stack.id}
            className="absolute cursor-pointer group"
            style={{
              left: stack.position.x,
              top: stack.position.y,
              transform: 'translate(-50%, -50%)'
            }}
            onHoverStart={() => setHoveredId(stack.id)}
            onHoverEnd={() => setHoveredId(null)}
            onClick={() => handleHotspotClick(stack)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Hotspot dot */}
            <motion.div
              className={`w-6 h-6 rounded-full bg-gradient-to-r ${stack.color} shadow-lg relative z-20`}
              animate={{
                boxShadow: hoveredId === stack.id 
                  ? '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5)'
                  : '0 0 10px rgba(255, 255, 255, 0.3)',
                scale: hoveredId === stack.id ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Pulsing ring */}
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-r ${stack.color} opacity-50`}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />

            {/* Label on hover */}
            <AnimatePresence>
              {hoveredId === stack.id && (
                <motion.div
                  className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/20 text-white text-sm">
                    {stack.category}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {/* Orbiting particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [0, Math.cos((i / 15) * Math.PI * 2) * 300, 0],
              y: [0, Math.sin((i / 15) * Math.PI * 2) * 300, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>

      {/* Modal for Tech Stack Details */}
      <AnimatePresence>
        {selectedStack && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className={`relative max-w-lg w-full backdrop-blur-xl bg-gradient-to-br ${selectedStack.color} p-1 rounded-2xl shadow-2xl`}
              initial={{ scale: 0.5, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: 180 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20 
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl p-8 relative">
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Category Title */}
                <motion.h3
                  className={`text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${selectedStack.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedStack.category}
                </motion.h3>

                {/* Skills Grid */}
                <motion.div
                  className="grid grid-cols-1 gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedStack.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className={`px-6 py-4 rounded-xl bg-gradient-to-r ${selectedStack.color} bg-opacity-20 backdrop-blur-sm border border-white/20 text-white text-lg font-medium hover:scale-105 transition-transform duration-300`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Number indicator */}
                <motion.div
                  className="mt-6 text-center text-gray-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {selectedStack.id} of {techStacks.length}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}